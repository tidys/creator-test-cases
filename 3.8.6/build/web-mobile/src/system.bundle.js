(function () {
  'use strict';

  function errMsg(errCode, msg) {
    return (msg || "") + " (SystemJS Error#" + errCode + " " + "https://git.io/JvFET#" + errCode + ")";
  }

  var hasSymbol = typeof Symbol !== 'undefined';
  var hasSelf = typeof self !== 'undefined';
  var hasDocument = typeof document !== 'undefined';

  var envGlobal = hasSelf ? self : global;

  var baseUrl;

  if (hasDocument) {
    var baseEl = document.querySelector('base[href]');
    if (baseEl)
      baseUrl = baseEl.href;
  }

  if (!baseUrl && typeof location !== 'undefined') {
    baseUrl = location.href.split('#')[0].split('?')[0];
    var lastSepIndex = baseUrl.lastIndexOf('/');
    if (lastSepIndex !== -1)
      baseUrl = baseUrl.slice(0, lastSepIndex + 1);
  }

  var backslashRegEx = /\\/g;
  function resolveIfNotPlainOrUrl (relUrl, parentUrl) {
    if (relUrl.indexOf('\\') !== -1)
      relUrl = relUrl.replace(backslashRegEx, '/');
    // protocol-relative
    if (relUrl[0] === '/' && relUrl[1] === '/') {
      return parentUrl.slice(0, parentUrl.indexOf(':') + 1) + relUrl;
    }
    // relative-url
    else if (relUrl[0] === '.' && (relUrl[1] === '/' || relUrl[1] === '.' && (relUrl[2] === '/' || relUrl.length === 2 && (relUrl += '/')) ||
        relUrl.length === 1  && (relUrl += '/')) ||
        relUrl[0] === '/') {
      var parentProtocol = parentUrl.slice(0, parentUrl.indexOf(':') + 1);
      // Disabled, but these cases will give inconsistent results for deep backtracking
      //if (parentUrl[parentProtocol.length] !== '/')
      //  throw Error('Cannot resolve');
      // read pathname from parent URL
      // pathname taken to be part after leading "/"
      var pathname;
      if (parentUrl[parentProtocol.length + 1] === '/') {
        // resolving to a :// so we need to read out the auth and host
        if (parentProtocol !== 'file:') {
          pathname = parentUrl.slice(parentProtocol.length + 2);
          pathname = pathname.slice(pathname.indexOf('/') + 1);
        }
        else {
          pathname = parentUrl.slice(8);
        }
      }
      else {
        // resolving to :/ so pathname is the /... part
        pathname = parentUrl.slice(parentProtocol.length + (parentUrl[parentProtocol.length] === '/'));
      }

      if (relUrl[0] === '/')
        return parentUrl.slice(0, parentUrl.length - pathname.length - 1) + relUrl;

      // join together and split for removal of .. and . segments
      // looping the string instead of anything fancy for perf reasons
      // '../../../../../z' resolved to 'x/y' is just 'z'
      var segmented = pathname.slice(0, pathname.lastIndexOf('/') + 1) + relUrl;

      var output = [];
      var segmentIndex = -1;
      for (var i = 0; i < segmented.length; i++) {
        // busy reading a segment - only terminate on '/'
        if (segmentIndex !== -1) {
          if (segmented[i] === '/') {
            output.push(segmented.slice(segmentIndex, i + 1));
            segmentIndex = -1;
          }
        }

        // new segment - check if it is relative
        else if (segmented[i] === '.') {
          // ../ segment
          if (segmented[i + 1] === '.' && (segmented[i + 2] === '/' || i + 2 === segmented.length)) {
            output.pop();
            i += 2;
          }
          // ./ segment
          else if (segmented[i + 1] === '/' || i + 1 === segmented.length) {
            i += 1;
          }
          else {
            // the start of a new segment as below
            segmentIndex = i;
          }
        }
        // it is the start of a new segment
        else {
          segmentIndex = i;
        }
      }
      // finish reading out the last segment
      if (segmentIndex !== -1)
        output.push(segmented.slice(segmentIndex));
      return parentUrl.slice(0, parentUrl.length - pathname.length) + output.join('');
    }
  }

  /*
   * Import maps implementation
   *
   * To make lookups fast we pre-resolve the entire import map
   * and then match based on backtracked hash lookups
   *
   */

  function resolveUrl (relUrl, parentUrl) {
    return resolveIfNotPlainOrUrl(relUrl, parentUrl) || (relUrl.indexOf(':') !== -1 ? relUrl : resolveIfNotPlainOrUrl('./' + relUrl, parentUrl));
  }

  function resolveAndComposePackages (packages, outPackages, baseUrl, parentMap, parentUrl) {
    for (var p in packages) {
      var resolvedLhs = resolveIfNotPlainOrUrl(p, baseUrl) || p;
      var rhs = packages[p];
      // package fallbacks not currently supported
      if (typeof rhs !== 'string')
        continue;
      var mapped = resolveImportMap(parentMap, resolveIfNotPlainOrUrl(rhs, baseUrl) || rhs, parentUrl);
      if (!mapped) {
        targetWarning('W1', p, rhs, 'bare specifier did not resolve');
      }
      else
        outPackages[resolvedLhs] = mapped;
    }
  }

  function resolveAndComposeImportMap (json, baseUrl, outMap) {
    if (json.imports)
      resolveAndComposePackages(json.imports, outMap.imports, baseUrl, outMap, null);

    var u;
    for (u in json.scopes || {}) {
      var resolvedScope = resolveUrl(u, baseUrl);
      resolveAndComposePackages(json.scopes[u], outMap.scopes[resolvedScope] || (outMap.scopes[resolvedScope] = {}), baseUrl, outMap, resolvedScope);
    }

    for (u in json.depcache || {})
      outMap.depcache[resolveUrl(u, baseUrl)] = json.depcache[u];
    
    for (u in json.integrity || {})
      outMap.integrity[resolveUrl(u, baseUrl)] = json.integrity[u];
  }

  function getMatch (path, matchObj) {
    if (matchObj[path])
      return path;
    var sepIndex = path.length;
    do {
      var segment = path.slice(0, sepIndex + 1);
      if (segment in matchObj)
        return segment;
    } while ((sepIndex = path.lastIndexOf('/', sepIndex - 1)) !== -1)
  }

  function applyPackages (id, packages) {
    var pkgName = getMatch(id, packages);
    if (pkgName) {
      var pkg = packages[pkgName];
      if (pkg === null) return;
      if (id.length > pkgName.length && pkg[pkg.length - 1] !== '/') {
        targetWarning('W2', pkgName, pkg, "should have a trailing '/'");
      }
      else
        return pkg + id.slice(pkgName.length);
    }
  }

  function targetWarning (code, match, target, msg) {
    console.warn(errMsg(code, "Package target " + msg + ", resolving target '" + target + "' for " + match));
  }

  function resolveImportMap (importMap, resolvedOrPlain, parentUrl) {
    var scopes = importMap.scopes;
    var scopeUrl = parentUrl && getMatch(parentUrl, scopes);
    while (scopeUrl) {
      var packageResolution = applyPackages(resolvedOrPlain, scopes[scopeUrl]);
      if (packageResolution)
        return packageResolution;
      scopeUrl = getMatch(scopeUrl.slice(0, scopeUrl.lastIndexOf('/')), scopes);
    }
    return applyPackages(resolvedOrPlain, importMap.imports) || resolvedOrPlain.indexOf(':') !== -1 && resolvedOrPlain;
  }

  /*
   * SystemJS Core
   * 
   * Provides
   * - System.import
   * - System.register support for
   *     live bindings, function hoisting through circular references,
   *     reexports, dynamic import, import.meta.url, top-level await
   * - System.getRegister to get the registration
   * - Symbol.toStringTag support in Module objects
   * - Hookable System.createContext to customize import.meta
   * - System.onload(err, id, deps) handler for tracing / hot-reloading
   * 
   * Core comes with no System.prototype.resolve or
   * System.prototype.instantiate implementations
   */

  var toStringTag$1 = hasSymbol && Symbol.toStringTag;
  var REGISTRY = hasSymbol ? Symbol() : '@';

  function SystemJS () {
    this[REGISTRY] = {};
  }

  var systemJSPrototype$1 = SystemJS.prototype;

  systemJSPrototype$1.import = function (id, parentUrl) {
    var loader = this;
    return Promise.resolve(loader.prepareImport())
    .then(function() {
      return loader.resolve(id, parentUrl);
    })
    .then(function (id) {
      var load = getOrCreateLoad(loader, id);
      return load.C || topLevelLoad(loader, load);
    });
  };

  // Hookable createContext function -> allowing eg custom import meta
  systemJSPrototype$1.createContext = function (parentId) {
    var loader = this;
    return {
      url: parentId,
      resolve: function (id, parentUrl) {
        return Promise.resolve(loader.resolve(id, parentUrl || parentId));
      }
    };
  };

  // onLoad(err, id, deps) provided for tracing / hot-reloading
  systemJSPrototype$1.onload = function () {};
  function loadToId (load) {
    return load.id;
  }
  function triggerOnload (loader, load, err, isErrSource) {
    loader.onload(err, load.id, load.d && load.d.map(loadToId), !!isErrSource);
    if (err)
      throw err;
  }

  var lastRegister;
  systemJSPrototype$1.register = function (deps, declare) {
    lastRegister = [deps, declare];
  };

  /*
   * getRegister provides the last anonymous System.register call
   */
  systemJSPrototype$1.getRegister = function () {
    var _lastRegister = lastRegister;
    lastRegister = undefined;
    return _lastRegister;
  };

  function getOrCreateLoad (loader, id, firstParentUrl) {
    var load = loader[REGISTRY][id];
    if (load)
      return load;

    var importerSetters = [];
    var ns = Object.create(null);
    if (toStringTag$1)
      Object.defineProperty(ns, toStringTag$1, { value: 'Module' });
    
    var instantiatePromise = Promise.resolve()
    .then(function () {
      return loader.instantiate(id, firstParentUrl);
    })
    .then(function (registration) {
      if (!registration)
        throw Error(errMsg(2, 'Module ' + id + ' did not instantiate'));
      function _export (name, value) {
        // note if we have hoisted exports (including reexports)
        load.h = true;
        var changed = false;
        if (typeof name === 'string') {
          if (!(name in ns) || ns[name] !== value) {
            ns[name] = value;
            changed = true;
          }
        }
        else {
          for (var p in name) {
            var value = name[p];
            if (!(p in ns) || ns[p] !== value) {
              ns[p] = value;
              changed = true;
            }
          }

          if (name.__esModule) {
            ns.__esModule = name.__esModule;
          }
        }
        if (changed)
          for (var i = 0; i < importerSetters.length; i++) {
            var setter = importerSetters[i];
            if (setter) setter(ns);
          }
        return value;
      }
      var declared = registration[1](_export, registration[1].length === 2 ? {
        import: function (importId) {
          return loader.import(importId, id);
        },
        meta: loader.createContext(id)
      } : undefined);
      load.e = declared.execute || function () {};
      return [registration[0], declared.setters || []];
    }, function (err) {
      load.e = null;
      load.er = err;
      triggerOnload(loader, load, err, true);
      throw err;
    });

    var linkPromise = instantiatePromise
    .then(function (instantiation) {
      return Promise.all(instantiation[0].map(function (dep, i) {
        var setter = instantiation[1][i];
        return Promise.resolve(loader.resolve(dep, id))
        .then(function (depId) {
          var depLoad = getOrCreateLoad(loader, depId, id);
          // depLoad.I may be undefined for already-evaluated
          return Promise.resolve(depLoad.I)
          .then(function () {
            if (setter) {
              depLoad.i.push(setter);
              // only run early setters when there are hoisted exports of that module
              // the timing works here as pending hoisted export calls will trigger through importerSetters
              if (depLoad.h || !depLoad.I)
                setter(depLoad.n);
            }
            return depLoad;
          });
        });
      }))
      .then(function (depLoads) {
        load.d = depLoads;
      });
    });

    // Capital letter = a promise function
    return load = loader[REGISTRY][id] = {
      id: id,
      // importerSetters, the setters functions registered to this dependency
      // we retain this to add more later
      i: importerSetters,
      // module namespace object
      n: ns,

      // instantiate
      I: instantiatePromise,
      // link
      L: linkPromise,
      // whether it has hoisted exports
      h: false,

      // On instantiate completion we have populated:
      // dependency load records
      d: undefined,
      // execution function
      e: undefined,

      // On execution we have populated:
      // the execution error if any
      er: undefined,
      // in the case of TLA, the execution promise
      E: undefined,

      // On execution, L, I, E cleared

      // Promise for top-level completion
      C: undefined,

      // parent instantiator / executor
      p: undefined
    };
  }

  function instantiateAll (loader, load, parent, loaded) {
    if (!loaded[load.id]) {
      loaded[load.id] = true;
      // load.L may be undefined for already-instantiated
      return Promise.resolve(load.L)
      .then(function () {
        if (!load.p || load.p.e === null)
          load.p = parent;
        return Promise.all(load.d.map(function (dep) {
          return instantiateAll(loader, dep, parent, loaded);
        }));
      })
      .catch(function (err) {
        if (load.er)
          throw err;
        load.e = null;
        triggerOnload(loader, load, err, false);
        throw err;
      });
    }
  }

  function topLevelLoad (loader, load) {
    return load.C = instantiateAll(loader, load, load, {})
    .then(function () {
      return postOrderExec(loader, load, {});
    })
    .then(function () {
      return load.n;
    });
  }

  // the closest we can get to call(undefined)
  var nullContext = Object.freeze(Object.create(null));

  // Equivalent to `Promise.prototype.finally`
  // https://gist.github.com/developit/d970bac18430943e4b3392b029a2a96c
  var promisePrototypeFinally = Promise.prototype.finally || function (callback) {
      if (typeof callback !== 'function') {
          return this.then(callback, callback);
      }
      const P = this.constructor || Promise;
      return this.then(
          value => P.resolve(callback()).then(() => value),
          err => P.resolve(callback()).then(() => { throw err; }),
      );
  };

  // returns a promise if and only if a top-level await subgraph
  // throws on sync errors
  function postOrderExec (loader, load, seen) {
    if (seen[load.id]) {
      return load.E;
    }
    seen[load.id] = true;

    if (!load.e) {
      if (load.er)
        throw load.er;
      if (load.E)
        return load.E;
      return;
    }

    // From here we're about to execute the load.
    // Because the execution may be async, we pop the `load.e` first.
    // So `load.e === null` always means the load has been executed or is executing.
    // To inspect the state:
    // - If `load.er` is truthy, the execution has threw or has been rejected;
    // - otherwise, either the `load.E` is a promise, means it's under async execution, or
    // - the `load.E` is null, means the load has completed the execution or has been async resolved.
    const exec = load.e;
    load.e = null;

    // deps execute first, unless circular
    var depLoadPromises;
    load.d.forEach(function (depLoad) {
      try {
        var depLoadPromise = postOrderExec(loader, depLoad, seen);
        if (depLoadPromise) 
          (depLoadPromises = depLoadPromises || []).push(depLoadPromise);
      }
      catch (err) {
        load.er = err;
        triggerOnload(loader, load, err, false);
        throw err;
      }
    });
    if (depLoadPromises)
      return load.E = promisePrototypeFinally.call(Promise.all(depLoadPromises).then(doExec), function() {
          load.E = null;
      });

    var execPromise = doExec();
    if (execPromise) {
      return load.E = promisePrototypeFinally.call(execPromise, function() {
          load.E = null;
      });
    }

    function doExec () {
      try {
        var execPromise = exec.call(nullContext);
        if (execPromise) {
          execPromise = execPromise.then(function () {
            load.C = load.n;
            if (!false) triggerOnload(loader, load, null, true);
          }, function (err) {
            load.er = err;
            if (!false) triggerOnload(loader, load, err, true);
            throw err;
          });
          return execPromise;
        }
        // (should be a promise, but a minify optimization to leave out Promise.resolve)
        load.C = load.n;
        load.L = load.I = undefined;
      }
      catch (err) {
        load.er = err;
        throw err;
      }
      finally {
        triggerOnload(loader, load, load.er, true);
      }
    }
  }

  envGlobal.System = new SystemJS();

  const globalObj = (function getGlobalObj() {
      if (typeof $global !== 'undefined') {
          return $global;
      }
      else if (typeof getApp === 'function') {
          return getApp().GameGlobal;
      }
  })();
  const systemGlobal = (typeof globalObj !== 'undefined' ? globalObj.System : System);
  const systemJSPrototype = systemGlobal.constructor.prototype;

  systemJSPrototype.instantiate = function (url, firstParentUrl) {
      throw new Error(`Unable to instantiate ${url} from ${firstParentUrl}`);
  };

  var toStringTag = typeof Symbol !== 'undefined' && Symbol.toStringTag;

  systemJSPrototype$1.get = function (id) {
    var load = this[REGISTRY][id];
    if (load && load.e === null && !load.E) {
      if (load.er)
        return null;
      return load.n;
    }
  };

  systemJSPrototype$1.set = function (id, module) {
    {
      try {
        // No page-relative URLs allowed
        new URL(id);
      } catch (err) {
        console.warn(Error(errMsg('W3', '"' + id + '" is not a valid URL to set in the module registry')));
      }
    }
    var ns;
    if (toStringTag && module[toStringTag] === 'Module') {
      ns = module;
    }
    else {
      ns = Object.assign(Object.create(null), module);
      if (toStringTag)
        Object.defineProperty(ns, toStringTag, { value: 'Module' });
    }

    var done = Promise.resolve(ns);

    var load = this[REGISTRY][id] || (this[REGISTRY][id] = {
      id: id,
      i: [],
      h: false,
      d: [],
      e: null,
      er: undefined,
      E: undefined
    });

    if (load.e || load.E)
      return false;
    
    Object.assign(load, {
      n: ns,
      I: undefined,
      L: undefined,
      C: done
    });
    return ns;
  };

  systemJSPrototype$1.has = function (id) {
    var load = this[REGISTRY][id];
    return !!load;
  };

  // Delete function provided for hot-reloading use cases
  systemJSPrototype$1.delete = function (id) {
    var registry = this[REGISTRY];
    var load = registry[id];
    // in future we can support load.E case by failing load first
    // but that will require TLA callbacks to be implemented
    if (!load || (load.p && load.p.e !== null) || load.E)
      return false;

    var importerSetters = load.i;
    // remove from importerSetters
    // (release for gc)
    if (load.d)
      load.d.forEach(function (depLoad) {
        var importerIndex = depLoad.i.indexOf(load);
        if (importerIndex !== -1)
          depLoad.i.splice(importerIndex, 1);
      });
    delete registry[id];
    return function () {
      var load = registry[id];
      if (!load || !importerSetters || load.e !== null || load.E)
        return false;
      // add back the old setters
      importerSetters.forEach(function (setter) {
        load.i.push(setter);
        setter(load.n);
      });
      importerSetters = null;
    };
  };

  var iterator = typeof Symbol !== 'undefined' && Symbol.iterator;

  systemJSPrototype$1.entries = function () {
    var loader = this, keys = Object.keys(loader[REGISTRY]);
    var index = 0, ns, key;
    var result = {
      next: function () {
        while (
          (key = keys[index++]) !== undefined && 
          (ns = loader.get(key)) === undefined
        );
        return {
          done: key === undefined,
          value: key !== undefined && [key, ns]
        };
      }
    };

    result[iterator] = function() { return this };

    return result;
  };

  /*
   * SystemJS browser attachments for script and import map processing
   */

  var importMapPromise = Promise.resolve();
  var importMap = { imports: {}, scopes: {}, depcache: {}, integrity: {} };

  // Scripts are processed immediately, on the first System.import, and on DOMReady.
  // Import map scripts are processed only once (by being marked) and in order for each phase.
  // This is to avoid using DOM mutation observers in core, although that would be an alternative.
  var processFirst = hasDocument;
  systemJSPrototype$1.prepareImport = function (doProcessScripts) {
    if (processFirst || doProcessScripts) {
      processScripts();
      processFirst = false;
    }
    return importMapPromise;
  };
  if (hasDocument) {
    processScripts();
    window.addEventListener('DOMContentLoaded', processScripts);
  }

  function processScripts () {
    [].forEach.call(document.querySelectorAll('script'), function (script) {
      if (script.sp) // sp marker = systemjs processed
        return;
      // TODO: deprecate systemjs-module in next major now that we have auto import
      if (script.type === 'systemjs-module') {
        script.sp = true;
        if (!script.src)
          return;
        System.import(script.src.slice(0, 7) === 'import:' ? script.src.slice(7) : resolveUrl(script.src, baseUrl)).catch(function (e) {
          // if there is a script load error, dispatch an "error" event
          // on the script tag.
          if (e.message.indexOf('https://git.io/JvFET#3') > -1) {
            var event = document.createEvent('Event');
            event.initEvent('error', false, false);
            script.dispatchEvent(event);
          }
          return Promise.reject(e);
        });
      }
      else if (script.type === 'systemjs-importmap') {
        script.sp = true;
        var fetchPromise = script.src ? fetch(script.src, { integrity: script.integrity }).then(function (res) {
          if (!res.ok)
            throw Error('Invalid status code: ' + res.status);
          return res.text();
        }).catch(function (err) {
          err.message = errMsg('W4', 'Error fetching systemjs-import map ' + script.src) + '\n' + err.message;
          console.warn(err);
          return '{}';
        }) : script.innerHTML;
        importMapPromise = importMapPromise.then(function () {
          return fetchPromise;
        }).then(function (text) {
          extendImportMap(importMap, text, script.src || baseUrl);
        });
      }
    });
  }

  function extendImportMap (importMap, newMapText, newMapUrl) {
    var newMap = {};
    try {
      newMap = JSON.parse(newMapText);
    } catch (err) {
      console.warn(Error((errMsg('W5', "systemjs-importmap contains invalid JSON") + '\n\n' + newMapText + '\n' )));
    }
    resolveAndComposeImportMap(newMap, newMapUrl, importMap);
  }

  /*
   * Script instantiation loading
   */

  if (hasDocument) {
    window.addEventListener('error', function (evt) {
      lastWindowErrorUrl = evt.filename;
      lastWindowError = evt.error;
    });
    var baseOrigin = location.origin;
  }

  systemJSPrototype$1.createScript = function (url) {
    var script = document.createElement('script');
    script.async = true;
    // Only add cross origin for actual cross origin
    // this is because Safari triggers for all
    // - https://bugs.webkit.org/show_bug.cgi?id=171566
    if (url.indexOf(baseOrigin + '/'))
      script.crossOrigin = 'anonymous';
    var integrity = importMap.integrity[url];
    if (integrity)
      script.integrity = integrity;
    script.src = url;
    return script;
  };

  // Auto imports -> script tags can be inlined directly for load phase
  var lastAutoImportDeps, lastAutoImportTimeout;
  var autoImportCandidates = {};
  var systemRegister = systemJSPrototype$1.register;
  systemJSPrototype$1.register = function (deps, declare) {
    if (hasDocument && document.readyState === 'loading' && typeof deps !== 'string') {
      var scripts = document.querySelectorAll('script[src]');
      var lastScript = scripts[scripts.length - 1];
      if (lastScript) {
        lastScript.src;
        lastAutoImportDeps = deps;
        // if this is already a System load, then the instantiate has already begun
        // so this re-import has no consequence
        var loader = this;
        lastAutoImportTimeout = setTimeout(function () {
          autoImportCandidates[lastScript.src] = [deps, declare];
          loader.import(lastScript.src);
        });
      }
    }
    else {
      lastAutoImportDeps = undefined;
    }
    return systemRegister.call(this, deps, declare);
  };

  var lastWindowErrorUrl, lastWindowError;
  systemJSPrototype$1.instantiate = function (url, firstParentUrl) {
    var autoImportRegistration = autoImportCandidates[url];
    if (autoImportRegistration) {
      delete autoImportCandidates[url];
      return autoImportRegistration;
    }
    var loader = this;
    return new Promise(function (resolve, reject) {
      var script = systemJSPrototype$1.createScript(url);
      script.addEventListener('error', function () {
        reject(Error(errMsg(3, 'Error loading ' + url + (firstParentUrl ? ' from ' + firstParentUrl : ''))));
      });
      script.addEventListener('load', function () {
        document.head.removeChild(script);
        // Note that if an error occurs that isn't caught by this if statement,
        // that getRegister will return null and a "did not instantiate" error will be thrown.
        if (lastWindowErrorUrl === url) {
          reject(lastWindowError);
        }
        else {
          var register = loader.getRegister();
          // Clear any auto import registration for dynamic import scripts during load
          if (register && register[0] === lastAutoImportDeps)
            clearTimeout(lastAutoImportTimeout);
          resolve(register);
        }
      });
      document.head.appendChild(script);
    });
  };

  /*
   * Fetch loader, sets up shouldFetch and fetch hooks
   */
  systemJSPrototype$1.shouldFetch = function () {
    return false;
  };
  if (typeof fetch !== 'undefined')
    systemJSPrototype$1.fetch = fetch;

  var instantiate = systemJSPrototype$1.instantiate;
  var jsContentTypeRegEx = /^(text|application)\/(x-)?javascript(;|$)/;
  systemJSPrototype$1.instantiate = function (url, parent) {
    var loader = this;
    if (!this.shouldFetch(url))
      return instantiate.apply(this, arguments);
    return this.fetch(url, {
      credentials: 'same-origin',
      integrity: importMap.integrity[url]
    })
    .then(function (res) {
      if (!res.ok)
        throw Error(errMsg(7, res.status + ' ' + res.statusText + ', loading ' + url + (parent ? ' from ' + parent : '')));
      var contentType = res.headers.get('content-type');
      if (!contentType || !jsContentTypeRegEx.test(contentType))
        throw Error(errMsg(4, 'Unknown Content-Type "' + contentType + '", loading ' + url + (parent ? ' from ' + parent : '')));
      return res.text().then(function (source) {
        if (source.indexOf('//# sourceURL=') < 0)
          source += '\n//# sourceURL=' + url;
        (0, eval)(source);
        return loader.getRegister();
      });
    });
  };

  systemJSPrototype$1.resolve = function (id, parentUrl) {
    parentUrl = parentUrl || !true  || baseUrl;
    return resolveImportMap((importMap), resolveIfNotPlainOrUrl(id, parentUrl) || id, parentUrl) || throwUnresolved(id, parentUrl);
  };

  function throwUnresolved (id, parentUrl) {
    throw Error(errMsg(8, "Unable to resolve bare specifier '" + id + (parentUrl ? "' from " + parentUrl : "'")));
  }

  var systemInstantiate = systemJSPrototype$1.instantiate;
  systemJSPrototype$1.instantiate = function (url, firstParentUrl) {
    var preloads = (importMap).depcache[url];
    if (preloads) {
      for (var i = 0; i < preloads.length; i++)
        getOrCreateLoad(this, this.resolve(preloads[i], url), url);
    }
    return systemInstantiate.call(this, url, firstParentUrl);
  };

  /*
   * Supports loading System.register in workers
   */

  if (hasSelf && typeof importScripts === 'function')
    systemJSPrototype$1.instantiate = function (url) {
      var loader = this;
      return Promise.resolve().then(function () {
        importScripts(url);
        return loader.getRegister();
      });
    };

  /*
   * SystemJS global script loading support
   * Extra for the s.js build only
   * (Included by default in system.js build)
   */
  (function (global) {
    var systemJSPrototype = global.System.constructor.prototype;

    // safari unpredictably lists some new globals first or second in object order
    var firstGlobalProp, secondGlobalProp, lastGlobalProp;
    function getGlobalProp (useFirstGlobalProp) {
      var cnt = 0;
      var foundLastProp, result;
      for (var p in global) {
        // do not check frames cause it could be removed during import
        if (shouldSkipProperty(p))
          continue;
        if (cnt === 0 && p !== firstGlobalProp || cnt === 1 && p !== secondGlobalProp)
          return p;
        if (foundLastProp) {
          lastGlobalProp = p;
          result = useFirstGlobalProp && result || p;
        }
        else {
          foundLastProp = p === lastGlobalProp;
        }
        cnt++;
      }
      return result;
    }

    function noteGlobalProps () {
      // alternatively Object.keys(global).pop()
      // but this may be faster (pending benchmarks)
      firstGlobalProp = secondGlobalProp = undefined;
      for (var p in global) {
        // do not check frames cause it could be removed during import
        if (shouldSkipProperty(p))
          continue;
        if (!firstGlobalProp)
          firstGlobalProp = p;
        else if (!secondGlobalProp)
          secondGlobalProp = p;
        lastGlobalProp = p;
      }
      return lastGlobalProp;
    }

    var impt = systemJSPrototype.import;
    systemJSPrototype.import = function (id, parentUrl) {
      noteGlobalProps();
      return impt.call(this, id, parentUrl);
    };

    var emptyInstantiation = [[], function () { return {} }];

    var getRegister = systemJSPrototype.getRegister;
    systemJSPrototype.getRegister = function () {
      var lastRegister = getRegister.call(this);
      if (lastRegister)
        return lastRegister;

      // no registration -> attempt a global detection as difference from snapshot
      // when multiple globals, we take the global value to be the last defined new global object property
      // for performance, this will not support multi-version / global collisions as previous SystemJS versions did
      // note in Edge, deleting and re-adding a global does not change its ordering
      var globalProp = getGlobalProp(this.firstGlobalProp);
      if (!globalProp)
        return emptyInstantiation;

      var globalExport;
      try {
        globalExport = global[globalProp];
      }
      catch (e) {
        return emptyInstantiation;
      }

      return [[], function (_export) {
        return {
          execute: function () {
            _export(globalExport);
            _export({ default: globalExport, __useDefault: true });
          }
        };
      }];
    };

    var isIE11 = typeof navigator !== 'undefined' && navigator.userAgent.indexOf('Trident') !== -1;

    function shouldSkipProperty(p) {
      return !global.hasOwnProperty(p)
        || !isNaN(p) && p < global.length
        || isIE11 && global[p] && typeof window !== 'undefined' && global[p].parent === window;
    }
  })(typeof self !== 'undefined' ? self : global);

  /*
   * Loads JSON, CSS, Wasm module types based on file extension
   * filters and content type verifications
   */
  (function(global) {
    var systemJSPrototype = global.System.constructor.prototype;

    var moduleTypesRegEx = /^[^#?]+\.(css|html|json|wasm)([?#].*)?$/;
    systemJSPrototype.shouldFetch = function (url) {
      return moduleTypesRegEx.test(url);
    };

    var jsonContentType = /^application\/json(;|$)/;
    var cssContentType = /^text\/css(;|$)/;
    var wasmContentType = /^application\/wasm(;|$)/;

    var fetch = systemJSPrototype.fetch;
    systemJSPrototype.fetch = function (url, options) {
      return fetch(url, options)
      .then(function (res) {
        if (!res.ok)
          return res;
        var contentType = res.headers.get('content-type');
        if (jsonContentType.test(contentType))
          return res.json()
          .then(function (json) {
            return new Response(new Blob([
              'System.register([],function(e){return{execute:function(){e("default",' + JSON.stringify(json) + ')}}})'
            ], {
              type: 'application/javascript'
            }));
          });
        if (cssContentType.test(contentType))
          return res.text()
          .then(function (source) {
            return new Response(new Blob([
              'System.register([],function(e){return{execute:function(){var s=new CSSStyleSheet();s.replaceSync(' + JSON.stringify(source) + ');e("default",s)}}})'
            ], {
              type: 'application/javascript'
            }));
          });
        if (wasmContentType.test(contentType))
          return (WebAssembly.compileStreaming ? WebAssembly.compileStreaming(res) : res.arrayBuffer().then(WebAssembly.compile))
          .then(function (module) {
            if (!global.System.wasmModules)
              global.System.wasmModules = Object.create(null);
            global.System.wasmModules[url] = module;
            // we can only set imports if supported (eg early Safari doesnt support)
            var deps = [];
            var setterSources = [];
            if (WebAssembly.Module.imports)
              WebAssembly.Module.imports(module).forEach(function (impt) {
                var key = JSON.stringify(impt.module);
                if (deps.indexOf(key) === -1) {
                  deps.push(key);
                  setterSources.push('function(m){i[' + key + ']=m}');
                }
              });
            return new Response(new Blob([
              'System.register([' + deps.join(',') + '],function(e){var i={};return{setters:[' + setterSources.join(',') +
              '],execute:function(){return WebAssembly.instantiate(System.wasmModules[' + JSON.stringify(url) +
              '],i).then(function(m){e(m.exports)})}}})'
            ], {
              type: 'application/javascript'
            }));
          });
        return res;
      });
    };
  })(typeof self !== 'undefined' ? self : global);

  /*
   * SystemJS named register extension
   * Supports System.register('name', [..deps..], function (_export, _context) { ... })
   * 
   * Names are written to the registry as-is
   * System.register('x', ...) can be imported as System.import('x')
   */
  (function (global) {
    var System = global.System;
    setRegisterRegistry(System);
    var systemJSPrototype = System.constructor.prototype;
    var constructor = System.constructor;
    var SystemJS = function () {
      constructor.call(this);
      setRegisterRegistry(this);
    };
    SystemJS.prototype = systemJSPrototype;
    System.constructor = SystemJS;

    var firstNamedDefine;

    function setRegisterRegistry(systemInstance) {
      systemInstance.registerRegistry = Object.create(null);
    }

    var register = systemJSPrototype.register;
    systemJSPrototype.register = function (name, deps, declare) {
      if (typeof name !== 'string')
        return register.apply(this, arguments);
      var define = [deps, declare];
      this.registerRegistry[name] = define;
      if (!firstNamedDefine) {
        firstNamedDefine = define;
        Promise.resolve().then(function () {
          firstNamedDefine = null;
        });
      }
      return register.apply(this, arguments);
    };

    var resolve = systemJSPrototype.resolve;
    systemJSPrototype.resolve = function (id, parentURL) {
      try {
        // Prefer import map (or other existing) resolution over the registerRegistry
        return resolve.call(this, id, parentURL);
      } catch (err) {
        if (id in this.registerRegistry) {
          return id;
        }
        throw err;
      }
    };

    var instantiate = systemJSPrototype.instantiate;
    systemJSPrototype.instantiate = function (url, firstParentUrl) {
      var result = this.registerRegistry[url];
      if (result) {
        this.registerRegistry[url] = null;
        return result;
      } else {
        return instantiate.call(this, url, firstParentUrl);
      }
    };

    var getRegister = systemJSPrototype.getRegister;
    systemJSPrototype.getRegister = function () {
      // Calling getRegister() because other extras need to know it was called so they can perform side effects
      var register = getRegister.call(this);

      var result = firstNamedDefine || register;
      firstNamedDefine = null;
      return result;
    };
  })(typeof self !== 'undefined' ? self : global);

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLmJ1bmRsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29jb3MvZWRpdG9ycy9DcmVhdG9yLzMuOC42L3Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvQGNvY29zL21vZHVsZS1zeXN0ZW0vc3lzdGVtanMvc3JjL2Vyci1tc2cuanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb2Nvcy9lZGl0b3JzL0NyZWF0b3IvMy44LjYvcmVzb3VyY2VzL2FwcC5hc2FyL25vZGVfbW9kdWxlcy9AY29jb3MvbW9kdWxlLXN5c3RlbS9zeXN0ZW1qcy9zcmMvY29tbW9uLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29jb3MvZWRpdG9ycy9DcmVhdG9yLzMuOC42L3Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvQGNvY29zL21vZHVsZS1zeXN0ZW0vc3lzdGVtanMvc3JjL3N5c3RlbS1jb3JlLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29jb3MvZWRpdG9ycy9DcmVhdG9yLzMuOC42L3Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvQGNvY29zL21vZHVsZS1zeXN0ZW0vbGliL2dsb2JhbHMudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb2Nvcy9lZGl0b3JzL0NyZWF0b3IvMy44LjYvcmVzb3VyY2VzL2FwcC5hc2FyL25vZGVfbW9kdWxlcy9AY29jb3MvbW9kdWxlLXN5c3RlbS9saWIvdGhyb3ctdW5pbnN0YW50aWF0ZWQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb2Nvcy9lZGl0b3JzL0NyZWF0b3IvMy44LjYvcmVzb3VyY2VzL2FwcC5hc2FyL25vZGVfbW9kdWxlcy9AY29jb3MvbW9kdWxlLXN5c3RlbS9zeXN0ZW1qcy9zcmMvZmVhdHVyZXMvcmVnaXN0cnkuanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb2Nvcy9lZGl0b3JzL0NyZWF0b3IvMy44LjYvcmVzb3VyY2VzL2FwcC5hc2FyL25vZGVfbW9kdWxlcy9AY29jb3MvbW9kdWxlLXN5c3RlbS9zeXN0ZW1qcy9zcmMvZmVhdHVyZXMvaW1wb3J0LW1hcHMuanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb2Nvcy9lZGl0b3JzL0NyZWF0b3IvMy44LjYvcmVzb3VyY2VzL2FwcC5hc2FyL25vZGVfbW9kdWxlcy9AY29jb3MvbW9kdWxlLXN5c3RlbS9zeXN0ZW1qcy9zcmMvZmVhdHVyZXMvc2NyaXB0LWxvYWQuanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb2Nvcy9lZGl0b3JzL0NyZWF0b3IvMy44LjYvcmVzb3VyY2VzL2FwcC5hc2FyL25vZGVfbW9kdWxlcy9AY29jb3MvbW9kdWxlLXN5c3RlbS9zeXN0ZW1qcy9zcmMvZmVhdHVyZXMvZmV0Y2gtbG9hZC5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvY29zL2VkaXRvcnMvQ3JlYXRvci8zLjguNi9yZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL0Bjb2Nvcy9tb2R1bGUtc3lzdGVtL3N5c3RlbWpzL3NyYy9mZWF0dXJlcy9yZXNvbHZlLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29jb3MvZWRpdG9ycy9DcmVhdG9yLzMuOC42L3Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvQGNvY29zL21vZHVsZS1zeXN0ZW0vc3lzdGVtanMvc3JjL2ZlYXR1cmVzL2RlcGNhY2hlLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29jb3MvZWRpdG9ycy9DcmVhdG9yLzMuOC42L3Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvQGNvY29zL21vZHVsZS1zeXN0ZW0vc3lzdGVtanMvc3JjL2ZlYXR1cmVzL3dvcmtlci1sb2FkLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29jb3MvZWRpdG9ycy9DcmVhdG9yLzMuOC42L3Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvQGNvY29zL21vZHVsZS1zeXN0ZW0vc3lzdGVtanMvc3JjL2V4dHJhcy9nbG9iYWwuanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb2Nvcy9lZGl0b3JzL0NyZWF0b3IvMy44LjYvcmVzb3VyY2VzL2FwcC5hc2FyL25vZGVfbW9kdWxlcy9AY29jb3MvbW9kdWxlLXN5c3RlbS9zeXN0ZW1qcy9zcmMvZXh0cmFzL21vZHVsZS10eXBlcy5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvY29zL2VkaXRvcnMvQ3JlYXRvci8zLjguNi9yZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL0Bjb2Nvcy9tb2R1bGUtc3lzdGVtL3N5c3RlbWpzL3NyYy9leHRyYXMvbmFtZWQtcmVnaXN0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGVyck1zZyhlcnJDb2RlLCBtc2cpIHtcbiAgaWYgKHByb2Nlc3MuZW52LlNZU1RFTV9QUk9EVUNUSU9OKVxuICAgIHJldHVybiAobXNnIHx8IFwiXCIpICsgXCIgKFN5c3RlbUpTIGh0dHBzOi8vZ2l0LmlvL0p2RkVUI1wiICsgZXJyQ29kZSArIFwiKVwiO1xuICBlbHNlXG4gICAgcmV0dXJuIChtc2cgfHwgXCJcIikgKyBcIiAoU3lzdGVtSlMgRXJyb3IjXCIgKyBlcnJDb2RlICsgXCIgXCIgKyBcImh0dHBzOi8vZ2l0LmlvL0p2RkVUI1wiICsgZXJyQ29kZSArIFwiKVwiO1xufSIsImltcG9ydCB7IGVyck1zZyB9IGZyb20gJy4vZXJyLW1zZy5qcyc7XG5cbmV4cG9ydCB2YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnQgdmFyIGhhc1NlbGYgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnQgdmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcblxudmFyIGVudkdsb2JhbCA9IGhhc1NlbGYgPyBzZWxmIDogZ2xvYmFsO1xuZXhwb3J0IHsgZW52R2xvYmFsIGFzIGdsb2JhbCB9O1xuXG4vLyBMb2FkZXItc2NvcGVkIGJhc2VVcmwgYW5kIGltcG9ydCBtYXAgc3VwcG9ydGVkIGluIE5vZGUuanMgb25seVxuZXhwb3J0IHZhciBCQVNFX1VSTCA9IGhhc1N5bWJvbCA/IFN5bWJvbCgpIDogJ18nO1xuZXhwb3J0IHZhciBJTVBPUlRfTUFQID0gaGFzU3ltYm9sID8gU3ltYm9sKCkgOiAnIyc7XG5cbmV4cG9ydCB2YXIgYmFzZVVybDtcblxuaWYgKGhhc0RvY3VtZW50KSB7XG4gIHZhciBiYXNlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdiYXNlW2hyZWZdJyk7XG4gIGlmIChiYXNlRWwpXG4gICAgYmFzZVVybCA9IGJhc2VFbC5ocmVmO1xufVxuXG5pZiAoIWJhc2VVcmwgJiYgdHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICBiYXNlVXJsID0gbG9jYXRpb24uaHJlZi5zcGxpdCgnIycpWzBdLnNwbGl0KCc/JylbMF07XG4gIHZhciBsYXN0U2VwSW5kZXggPSBiYXNlVXJsLmxhc3RJbmRleE9mKCcvJyk7XG4gIGlmIChsYXN0U2VwSW5kZXggIT09IC0xKVxuICAgIGJhc2VVcmwgPSBiYXNlVXJsLnNsaWNlKDAsIGxhc3RTZXBJbmRleCArIDEpO1xufVxuXG5pZiAoIXByb2Nlc3MuZW52LlNZU1RFTV9CUk9XU0VSICYmICFiYXNlVXJsICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykge1xuICB2YXIgY3dkID0gcHJvY2Vzcy5jd2QoKTtcbiAgLy8gVE9ETzogZW5jb2RpbmcgZWRnZSBjYXNlc1xuICBiYXNlVXJsID0gJ2ZpbGU6Ly8nICsgKGN3ZFswXSA9PT0gJy8nID8gJycgOiAnLycpICsgY3dkLnJlcGxhY2UoL1xcXFwvZywgJy8nKSArICcvJztcbn1cblxudmFyIGJhY2tzbGFzaFJlZ0V4ID0gL1xcXFwvZztcbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSWZOb3RQbGFpbk9yVXJsIChyZWxVcmwsIHBhcmVudFVybCkge1xuICBpZiAocmVsVXJsLmluZGV4T2YoJ1xcXFwnKSAhPT0gLTEpXG4gICAgcmVsVXJsID0gcmVsVXJsLnJlcGxhY2UoYmFja3NsYXNoUmVnRXgsICcvJyk7XG4gIC8vIHByb3RvY29sLXJlbGF0aXZlXG4gIGlmIChyZWxVcmxbMF0gPT09ICcvJyAmJiByZWxVcmxbMV0gPT09ICcvJykge1xuICAgIHJldHVybiBwYXJlbnRVcmwuc2xpY2UoMCwgcGFyZW50VXJsLmluZGV4T2YoJzonKSArIDEpICsgcmVsVXJsO1xuICB9XG4gIC8vIHJlbGF0aXZlLXVybFxuICBlbHNlIGlmIChyZWxVcmxbMF0gPT09ICcuJyAmJiAocmVsVXJsWzFdID09PSAnLycgfHwgcmVsVXJsWzFdID09PSAnLicgJiYgKHJlbFVybFsyXSA9PT0gJy8nIHx8IHJlbFVybC5sZW5ndGggPT09IDIgJiYgKHJlbFVybCArPSAnLycpKSB8fFxuICAgICAgcmVsVXJsLmxlbmd0aCA9PT0gMSAgJiYgKHJlbFVybCArPSAnLycpKSB8fFxuICAgICAgcmVsVXJsWzBdID09PSAnLycpIHtcbiAgICB2YXIgcGFyZW50UHJvdG9jb2wgPSBwYXJlbnRVcmwuc2xpY2UoMCwgcGFyZW50VXJsLmluZGV4T2YoJzonKSArIDEpO1xuICAgIC8vIERpc2FibGVkLCBidXQgdGhlc2UgY2FzZXMgd2lsbCBnaXZlIGluY29uc2lzdGVudCByZXN1bHRzIGZvciBkZWVwIGJhY2t0cmFja2luZ1xuICAgIC8vaWYgKHBhcmVudFVybFtwYXJlbnRQcm90b2NvbC5sZW5ndGhdICE9PSAnLycpXG4gICAgLy8gIHRocm93IEVycm9yKCdDYW5ub3QgcmVzb2x2ZScpO1xuICAgIC8vIHJlYWQgcGF0aG5hbWUgZnJvbSBwYXJlbnQgVVJMXG4gICAgLy8gcGF0aG5hbWUgdGFrZW4gdG8gYmUgcGFydCBhZnRlciBsZWFkaW5nIFwiL1wiXG4gICAgdmFyIHBhdGhuYW1lO1xuICAgIGlmIChwYXJlbnRVcmxbcGFyZW50UHJvdG9jb2wubGVuZ3RoICsgMV0gPT09ICcvJykge1xuICAgICAgLy8gcmVzb2x2aW5nIHRvIGEgOi8vIHNvIHdlIG5lZWQgdG8gcmVhZCBvdXQgdGhlIGF1dGggYW5kIGhvc3RcbiAgICAgIGlmIChwYXJlbnRQcm90b2NvbCAhPT0gJ2ZpbGU6Jykge1xuICAgICAgICBwYXRobmFtZSA9IHBhcmVudFVybC5zbGljZShwYXJlbnRQcm90b2NvbC5sZW5ndGggKyAyKTtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zbGljZShwYXRobmFtZS5pbmRleE9mKCcvJykgKyAxKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBwYXRobmFtZSA9IHBhcmVudFVybC5zbGljZSg4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyByZXNvbHZpbmcgdG8gOi8gc28gcGF0aG5hbWUgaXMgdGhlIC8uLi4gcGFydFxuICAgICAgcGF0aG5hbWUgPSBwYXJlbnRVcmwuc2xpY2UocGFyZW50UHJvdG9jb2wubGVuZ3RoICsgKHBhcmVudFVybFtwYXJlbnRQcm90b2NvbC5sZW5ndGhdID09PSAnLycpKTtcbiAgICB9XG5cbiAgICBpZiAocmVsVXJsWzBdID09PSAnLycpXG4gICAgICByZXR1cm4gcGFyZW50VXJsLnNsaWNlKDAsIHBhcmVudFVybC5sZW5ndGggLSBwYXRobmFtZS5sZW5ndGggLSAxKSArIHJlbFVybDtcblxuICAgIC8vIGpvaW4gdG9nZXRoZXIgYW5kIHNwbGl0IGZvciByZW1vdmFsIG9mIC4uIGFuZCAuIHNlZ21lbnRzXG4gICAgLy8gbG9vcGluZyB0aGUgc3RyaW5nIGluc3RlYWQgb2YgYW55dGhpbmcgZmFuY3kgZm9yIHBlcmYgcmVhc29uc1xuICAgIC8vICcuLi8uLi8uLi8uLi8uLi96JyByZXNvbHZlZCB0byAneC95JyBpcyBqdXN0ICd6J1xuICAgIHZhciBzZWdtZW50ZWQgPSBwYXRobmFtZS5zbGljZSgwLCBwYXRobmFtZS5sYXN0SW5kZXhPZignLycpICsgMSkgKyByZWxVcmw7XG5cbiAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgdmFyIHNlZ21lbnRJbmRleCA9IC0xO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VnbWVudGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBidXN5IHJlYWRpbmcgYSBzZWdtZW50IC0gb25seSB0ZXJtaW5hdGUgb24gJy8nXG4gICAgICBpZiAoc2VnbWVudEluZGV4ICE9PSAtMSkge1xuICAgICAgICBpZiAoc2VnbWVudGVkW2ldID09PSAnLycpIHtcbiAgICAgICAgICBvdXRwdXQucHVzaChzZWdtZW50ZWQuc2xpY2Uoc2VnbWVudEluZGV4LCBpICsgMSkpO1xuICAgICAgICAgIHNlZ21lbnRJbmRleCA9IC0xO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIG5ldyBzZWdtZW50IC0gY2hlY2sgaWYgaXQgaXMgcmVsYXRpdmVcbiAgICAgIGVsc2UgaWYgKHNlZ21lbnRlZFtpXSA9PT0gJy4nKSB7XG4gICAgICAgIC8vIC4uLyBzZWdtZW50XG4gICAgICAgIGlmIChzZWdtZW50ZWRbaSArIDFdID09PSAnLicgJiYgKHNlZ21lbnRlZFtpICsgMl0gPT09ICcvJyB8fCBpICsgMiA9PT0gc2VnbWVudGVkLmxlbmd0aCkpIHtcbiAgICAgICAgICBvdXRwdXQucG9wKCk7XG4gICAgICAgICAgaSArPSAyO1xuICAgICAgICB9XG4gICAgICAgIC8vIC4vIHNlZ21lbnRcbiAgICAgICAgZWxzZSBpZiAoc2VnbWVudGVkW2kgKyAxXSA9PT0gJy8nIHx8IGkgKyAxID09PSBzZWdtZW50ZWQubGVuZ3RoKSB7XG4gICAgICAgICAgaSArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vIHRoZSBzdGFydCBvZiBhIG5ldyBzZWdtZW50IGFzIGJlbG93XG4gICAgICAgICAgc2VnbWVudEluZGV4ID0gaTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gaXQgaXMgdGhlIHN0YXJ0IG9mIGEgbmV3IHNlZ21lbnRcbiAgICAgIGVsc2Uge1xuICAgICAgICBzZWdtZW50SW5kZXggPSBpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBmaW5pc2ggcmVhZGluZyBvdXQgdGhlIGxhc3Qgc2VnbWVudFxuICAgIGlmIChzZWdtZW50SW5kZXggIT09IC0xKVxuICAgICAgb3V0cHV0LnB1c2goc2VnbWVudGVkLnNsaWNlKHNlZ21lbnRJbmRleCkpO1xuICAgIHJldHVybiBwYXJlbnRVcmwuc2xpY2UoMCwgcGFyZW50VXJsLmxlbmd0aCAtIHBhdGhuYW1lLmxlbmd0aCkgKyBvdXRwdXQuam9pbignJyk7XG4gIH1cbn1cblxuLypcbiAqIEltcG9ydCBtYXBzIGltcGxlbWVudGF0aW9uXG4gKlxuICogVG8gbWFrZSBsb29rdXBzIGZhc3Qgd2UgcHJlLXJlc29sdmUgdGhlIGVudGlyZSBpbXBvcnQgbWFwXG4gKiBhbmQgdGhlbiBtYXRjaCBiYXNlZCBvbiBiYWNrdHJhY2tlZCBoYXNoIGxvb2t1cHNcbiAqXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVVcmwgKHJlbFVybCwgcGFyZW50VXJsKSB7XG4gIHJldHVybiByZXNvbHZlSWZOb3RQbGFpbk9yVXJsKHJlbFVybCwgcGFyZW50VXJsKSB8fCAocmVsVXJsLmluZGV4T2YoJzonKSAhPT0gLTEgPyByZWxVcmwgOiByZXNvbHZlSWZOb3RQbGFpbk9yVXJsKCcuLycgKyByZWxVcmwsIHBhcmVudFVybCkpO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlQW5kQ29tcG9zZVBhY2thZ2VzIChwYWNrYWdlcywgb3V0UGFja2FnZXMsIGJhc2VVcmwsIHBhcmVudE1hcCwgcGFyZW50VXJsKSB7XG4gIGZvciAodmFyIHAgaW4gcGFja2FnZXMpIHtcbiAgICB2YXIgcmVzb2x2ZWRMaHMgPSByZXNvbHZlSWZOb3RQbGFpbk9yVXJsKHAsIGJhc2VVcmwpIHx8IHA7XG4gICAgdmFyIHJocyA9IHBhY2thZ2VzW3BdO1xuICAgIC8vIHBhY2thZ2UgZmFsbGJhY2tzIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkXG4gICAgaWYgKHR5cGVvZiByaHMgIT09ICdzdHJpbmcnKVxuICAgICAgY29udGludWU7XG4gICAgdmFyIG1hcHBlZCA9IHJlc29sdmVJbXBvcnRNYXAocGFyZW50TWFwLCByZXNvbHZlSWZOb3RQbGFpbk9yVXJsKHJocywgYmFzZVVybCkgfHwgcmhzLCBwYXJlbnRVcmwpO1xuICAgIGlmICghbWFwcGVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuU1lTVEVNX1BST0RVQ1RJT04pXG4gICAgICAgIHRhcmdldFdhcm5pbmcoJ1cxJywgcCwgcmhzKTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGFyZ2V0V2FybmluZygnVzEnLCBwLCByaHMsICdiYXJlIHNwZWNpZmllciBkaWQgbm90IHJlc29sdmUnKTtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgb3V0UGFja2FnZXNbcmVzb2x2ZWRMaHNdID0gbWFwcGVkO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQW5kQ29tcG9zZUltcG9ydE1hcCAoanNvbiwgYmFzZVVybCwgb3V0TWFwKSB7XG4gIGlmIChqc29uLmltcG9ydHMpXG4gICAgcmVzb2x2ZUFuZENvbXBvc2VQYWNrYWdlcyhqc29uLmltcG9ydHMsIG91dE1hcC5pbXBvcnRzLCBiYXNlVXJsLCBvdXRNYXAsIG51bGwpO1xuXG4gIHZhciB1O1xuICBmb3IgKHUgaW4ganNvbi5zY29wZXMgfHwge30pIHtcbiAgICB2YXIgcmVzb2x2ZWRTY29wZSA9IHJlc29sdmVVcmwodSwgYmFzZVVybCk7XG4gICAgcmVzb2x2ZUFuZENvbXBvc2VQYWNrYWdlcyhqc29uLnNjb3Blc1t1XSwgb3V0TWFwLnNjb3Blc1tyZXNvbHZlZFNjb3BlXSB8fCAob3V0TWFwLnNjb3Blc1tyZXNvbHZlZFNjb3BlXSA9IHt9KSwgYmFzZVVybCwgb3V0TWFwLCByZXNvbHZlZFNjb3BlKTtcbiAgfVxuXG4gIGZvciAodSBpbiBqc29uLmRlcGNhY2hlIHx8IHt9KVxuICAgIG91dE1hcC5kZXBjYWNoZVtyZXNvbHZlVXJsKHUsIGJhc2VVcmwpXSA9IGpzb24uZGVwY2FjaGVbdV07XG4gIFxuICBmb3IgKHUgaW4ganNvbi5pbnRlZ3JpdHkgfHwge30pXG4gICAgb3V0TWFwLmludGVncml0eVtyZXNvbHZlVXJsKHUsIGJhc2VVcmwpXSA9IGpzb24uaW50ZWdyaXR5W3VdO1xufVxuXG5mdW5jdGlvbiBnZXRNYXRjaCAocGF0aCwgbWF0Y2hPYmopIHtcbiAgaWYgKG1hdGNoT2JqW3BhdGhdKVxuICAgIHJldHVybiBwYXRoO1xuICB2YXIgc2VwSW5kZXggPSBwYXRoLmxlbmd0aDtcbiAgZG8ge1xuICAgIHZhciBzZWdtZW50ID0gcGF0aC5zbGljZSgwLCBzZXBJbmRleCArIDEpO1xuICAgIGlmIChzZWdtZW50IGluIG1hdGNoT2JqKVxuICAgICAgcmV0dXJuIHNlZ21lbnQ7XG4gIH0gd2hpbGUgKChzZXBJbmRleCA9IHBhdGgubGFzdEluZGV4T2YoJy8nLCBzZXBJbmRleCAtIDEpKSAhPT0gLTEpXG59XG5cbmZ1bmN0aW9uIGFwcGx5UGFja2FnZXMgKGlkLCBwYWNrYWdlcykge1xuICB2YXIgcGtnTmFtZSA9IGdldE1hdGNoKGlkLCBwYWNrYWdlcyk7XG4gIGlmIChwa2dOYW1lKSB7XG4gICAgdmFyIHBrZyA9IHBhY2thZ2VzW3BrZ05hbWVdO1xuICAgIGlmIChwa2cgPT09IG51bGwpIHJldHVybjtcbiAgICBpZiAoaWQubGVuZ3RoID4gcGtnTmFtZS5sZW5ndGggJiYgcGtnW3BrZy5sZW5ndGggLSAxXSAhPT0gJy8nKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuU1lTVEVNX1BST0RVQ1RJT04pXG4gICAgICAgIHRhcmdldFdhcm5pbmcoJ1cyJywgcGtnTmFtZSwgcGtnKTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGFyZ2V0V2FybmluZygnVzInLCBwa2dOYW1lLCBwa2csIFwic2hvdWxkIGhhdmUgYSB0cmFpbGluZyAnLydcIik7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgIHJldHVybiBwa2cgKyBpZC5zbGljZShwa2dOYW1lLmxlbmd0aCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGFyZ2V0V2FybmluZyAoY29kZSwgbWF0Y2gsIHRhcmdldCwgbXNnKSB7XG4gIGNvbnNvbGUud2FybihlcnJNc2coY29kZSwgcHJvY2Vzcy5lbnYuU1lTVEVNX1BST0RVQ1RJT04gPyBbdGFyZ2V0LCBtYXRjaF0uam9pbignLCAnKSA6IFwiUGFja2FnZSB0YXJnZXQgXCIgKyBtc2cgKyBcIiwgcmVzb2x2aW5nIHRhcmdldCAnXCIgKyB0YXJnZXQgKyBcIicgZm9yIFwiICsgbWF0Y2gpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVJbXBvcnRNYXAgKGltcG9ydE1hcCwgcmVzb2x2ZWRPclBsYWluLCBwYXJlbnRVcmwpIHtcbiAgdmFyIHNjb3BlcyA9IGltcG9ydE1hcC5zY29wZXM7XG4gIHZhciBzY29wZVVybCA9IHBhcmVudFVybCAmJiBnZXRNYXRjaChwYXJlbnRVcmwsIHNjb3Blcyk7XG4gIHdoaWxlIChzY29wZVVybCkge1xuICAgIHZhciBwYWNrYWdlUmVzb2x1dGlvbiA9IGFwcGx5UGFja2FnZXMocmVzb2x2ZWRPclBsYWluLCBzY29wZXNbc2NvcGVVcmxdKTtcbiAgICBpZiAocGFja2FnZVJlc29sdXRpb24pXG4gICAgICByZXR1cm4gcGFja2FnZVJlc29sdXRpb247XG4gICAgc2NvcGVVcmwgPSBnZXRNYXRjaChzY29wZVVybC5zbGljZSgwLCBzY29wZVVybC5sYXN0SW5kZXhPZignLycpKSwgc2NvcGVzKTtcbiAgfVxuICByZXR1cm4gYXBwbHlQYWNrYWdlcyhyZXNvbHZlZE9yUGxhaW4sIGltcG9ydE1hcC5pbXBvcnRzKSB8fCByZXNvbHZlZE9yUGxhaW4uaW5kZXhPZignOicpICE9PSAtMSAmJiByZXNvbHZlZE9yUGxhaW47XG59XG4iLCIvKlxuICogU3lzdGVtSlMgQ29yZVxuICogXG4gKiBQcm92aWRlc1xuICogLSBTeXN0ZW0uaW1wb3J0XG4gKiAtIFN5c3RlbS5yZWdpc3RlciBzdXBwb3J0IGZvclxuICogICAgIGxpdmUgYmluZGluZ3MsIGZ1bmN0aW9uIGhvaXN0aW5nIHRocm91Z2ggY2lyY3VsYXIgcmVmZXJlbmNlcyxcbiAqICAgICByZWV4cG9ydHMsIGR5bmFtaWMgaW1wb3J0LCBpbXBvcnQubWV0YS51cmwsIHRvcC1sZXZlbCBhd2FpdFxuICogLSBTeXN0ZW0uZ2V0UmVnaXN0ZXIgdG8gZ2V0IHRoZSByZWdpc3RyYXRpb25cbiAqIC0gU3ltYm9sLnRvU3RyaW5nVGFnIHN1cHBvcnQgaW4gTW9kdWxlIG9iamVjdHNcbiAqIC0gSG9va2FibGUgU3lzdGVtLmNyZWF0ZUNvbnRleHQgdG8gY3VzdG9taXplIGltcG9ydC5tZXRhXG4gKiAtIFN5c3RlbS5vbmxvYWQoZXJyLCBpZCwgZGVwcykgaGFuZGxlciBmb3IgdHJhY2luZyAvIGhvdC1yZWxvYWRpbmdcbiAqIFxuICogQ29yZSBjb21lcyB3aXRoIG5vIFN5c3RlbS5wcm90b3R5cGUucmVzb2x2ZSBvclxuICogU3lzdGVtLnByb3RvdHlwZS5pbnN0YW50aWF0ZSBpbXBsZW1lbnRhdGlvbnNcbiAqL1xuaW1wb3J0IHsgZ2xvYmFsLCBoYXNTeW1ib2wgfSBmcm9tICcuL2NvbW1vbi5qcyc7XG5pbXBvcnQgeyBlcnJNc2cgfSBmcm9tICcuL2Vyci1tc2cuanMnO1xuZXhwb3J0IHsgc3lzdGVtSlNQcm90b3R5cGUsIFJFR0lTVFJZIH1cblxudmFyIHRvU3RyaW5nVGFnID0gaGFzU3ltYm9sICYmIFN5bWJvbC50b1N0cmluZ1RhZztcbnZhciBSRUdJU1RSWSA9IGhhc1N5bWJvbCA/IFN5bWJvbCgpIDogJ0AnO1xuXG5mdW5jdGlvbiBTeXN0ZW1KUyAoKSB7XG4gIHRoaXNbUkVHSVNUUlldID0ge307XG59XG5cbnZhciBzeXN0ZW1KU1Byb3RvdHlwZSA9IFN5c3RlbUpTLnByb3RvdHlwZTtcblxuc3lzdGVtSlNQcm90b3R5cGUuaW1wb3J0ID0gZnVuY3Rpb24gKGlkLCBwYXJlbnRVcmwpIHtcbiAgdmFyIGxvYWRlciA9IHRoaXM7XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUobG9hZGVyLnByZXBhcmVJbXBvcnQoKSlcbiAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGxvYWRlci5yZXNvbHZlKGlkLCBwYXJlbnRVcmwpO1xuICB9KVxuICAudGhlbihmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgbG9hZCA9IGdldE9yQ3JlYXRlTG9hZChsb2FkZXIsIGlkKTtcbiAgICByZXR1cm4gbG9hZC5DIHx8IHRvcExldmVsTG9hZChsb2FkZXIsIGxvYWQpO1xuICB9KTtcbn07XG5cbi8vIEhvb2thYmxlIGNyZWF0ZUNvbnRleHQgZnVuY3Rpb24gLT4gYWxsb3dpbmcgZWcgY3VzdG9tIGltcG9ydCBtZXRhXG5zeXN0ZW1KU1Byb3RvdHlwZS5jcmVhdGVDb250ZXh0ID0gZnVuY3Rpb24gKHBhcmVudElkKSB7XG4gIHZhciBsb2FkZXIgPSB0aGlzO1xuICByZXR1cm4ge1xuICAgIHVybDogcGFyZW50SWQsXG4gICAgcmVzb2x2ZTogZnVuY3Rpb24gKGlkLCBwYXJlbnRVcmwpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobG9hZGVyLnJlc29sdmUoaWQsIHBhcmVudFVybCB8fCBwYXJlbnRJZCkpO1xuICAgIH1cbiAgfTtcbn07XG5cbi8vIG9uTG9hZChlcnIsIGlkLCBkZXBzKSBwcm92aWRlZCBmb3IgdHJhY2luZyAvIGhvdC1yZWxvYWRpbmdcbmlmICghcHJvY2Vzcy5lbnYuU1lTVEVNX1BST0RVQ1RJT04pXG4gIHN5c3RlbUpTUHJvdG90eXBlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHt9O1xuZnVuY3Rpb24gbG9hZFRvSWQgKGxvYWQpIHtcbiAgcmV0dXJuIGxvYWQuaWQ7XG59XG5mdW5jdGlvbiB0cmlnZ2VyT25sb2FkIChsb2FkZXIsIGxvYWQsIGVyciwgaXNFcnJTb3VyY2UpIHtcbiAgbG9hZGVyLm9ubG9hZChlcnIsIGxvYWQuaWQsIGxvYWQuZCAmJiBsb2FkLmQubWFwKGxvYWRUb0lkKSwgISFpc0VyclNvdXJjZSk7XG4gIGlmIChlcnIpXG4gICAgdGhyb3cgZXJyO1xufVxuXG52YXIgbGFzdFJlZ2lzdGVyO1xuc3lzdGVtSlNQcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAoZGVwcywgZGVjbGFyZSkge1xuICBsYXN0UmVnaXN0ZXIgPSBbZGVwcywgZGVjbGFyZV07XG59O1xuXG4vKlxuICogZ2V0UmVnaXN0ZXIgcHJvdmlkZXMgdGhlIGxhc3QgYW5vbnltb3VzIFN5c3RlbS5yZWdpc3RlciBjYWxsXG4gKi9cbnN5c3RlbUpTUHJvdG90eXBlLmdldFJlZ2lzdGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX2xhc3RSZWdpc3RlciA9IGxhc3RSZWdpc3RlcjtcbiAgbGFzdFJlZ2lzdGVyID0gdW5kZWZpbmVkO1xuICByZXR1cm4gX2xhc3RSZWdpc3Rlcjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPckNyZWF0ZUxvYWQgKGxvYWRlciwgaWQsIGZpcnN0UGFyZW50VXJsKSB7XG4gIHZhciBsb2FkID0gbG9hZGVyW1JFR0lTVFJZXVtpZF07XG4gIGlmIChsb2FkKVxuICAgIHJldHVybiBsb2FkO1xuXG4gIHZhciBpbXBvcnRlclNldHRlcnMgPSBbXTtcbiAgdmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgaWYgKHRvU3RyaW5nVGFnKVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgdG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuICBcbiAgdmFyIGluc3RhbnRpYXRlUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpXG4gIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbG9hZGVyLmluc3RhbnRpYXRlKGlkLCBmaXJzdFBhcmVudFVybCk7XG4gIH0pXG4gIC50aGVuKGZ1bmN0aW9uIChyZWdpc3RyYXRpb24pIHtcbiAgICBpZiAoIXJlZ2lzdHJhdGlvbilcbiAgICAgIHRocm93IEVycm9yKGVyck1zZygyLCBwcm9jZXNzLmVudi5TWVNURU1fUFJPRFVDVElPTiA/IGlkIDogJ01vZHVsZSAnICsgaWQgKyAnIGRpZCBub3QgaW5zdGFudGlhdGUnKSk7XG4gICAgZnVuY3Rpb24gX2V4cG9ydCAobmFtZSwgdmFsdWUpIHtcbiAgICAgIC8vIG5vdGUgaWYgd2UgaGF2ZSBob2lzdGVkIGV4cG9ydHMgKGluY2x1ZGluZyByZWV4cG9ydHMpXG4gICAgICBsb2FkLmggPSB0cnVlO1xuICAgICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKCEobmFtZSBpbiBucykgfHwgbnNbbmFtZV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgbnNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gbmFtZSkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IG5hbWVbcF07XG4gICAgICAgICAgaWYgKCEocCBpbiBucykgfHwgbnNbcF0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBuc1twXSA9IHZhbHVlO1xuICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5hbWUuX19lc01vZHVsZSkge1xuICAgICAgICAgIG5zLl9fZXNNb2R1bGUgPSBuYW1lLl9fZXNNb2R1bGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VkKVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGltcG9ydGVyU2V0dGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBzZXR0ZXIgPSBpbXBvcnRlclNldHRlcnNbaV07XG4gICAgICAgICAgaWYgKHNldHRlcikgc2V0dGVyKG5zKTtcbiAgICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICB2YXIgZGVjbGFyZWQgPSByZWdpc3RyYXRpb25bMV0oX2V4cG9ydCwgcmVnaXN0cmF0aW9uWzFdLmxlbmd0aCA9PT0gMiA/IHtcbiAgICAgIGltcG9ydDogZnVuY3Rpb24gKGltcG9ydElkKSB7XG4gICAgICAgIHJldHVybiBsb2FkZXIuaW1wb3J0KGltcG9ydElkLCBpZCk7XG4gICAgICB9LFxuICAgICAgbWV0YTogbG9hZGVyLmNyZWF0ZUNvbnRleHQoaWQpXG4gICAgfSA6IHVuZGVmaW5lZCk7XG4gICAgbG9hZC5lID0gZGVjbGFyZWQuZXhlY3V0ZSB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgICByZXR1cm4gW3JlZ2lzdHJhdGlvblswXSwgZGVjbGFyZWQuc2V0dGVycyB8fCBbXV07XG4gIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBsb2FkLmUgPSBudWxsO1xuICAgIGxvYWQuZXIgPSBlcnI7XG4gICAgaWYgKCFwcm9jZXNzLmVudi5TWVNURU1fUFJPRFVDVElPTikgdHJpZ2dlck9ubG9hZChsb2FkZXIsIGxvYWQsIGVyciwgdHJ1ZSk7XG4gICAgdGhyb3cgZXJyO1xuICB9KTtcblxuICB2YXIgbGlua1Byb21pc2UgPSBpbnN0YW50aWF0ZVByb21pc2VcbiAgLnRoZW4oZnVuY3Rpb24gKGluc3RhbnRpYXRpb24pIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoaW5zdGFudGlhdGlvblswXS5tYXAoZnVuY3Rpb24gKGRlcCwgaSkge1xuICAgICAgdmFyIHNldHRlciA9IGluc3RhbnRpYXRpb25bMV1baV07XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGxvYWRlci5yZXNvbHZlKGRlcCwgaWQpKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKGRlcElkKSB7XG4gICAgICAgIHZhciBkZXBMb2FkID0gZ2V0T3JDcmVhdGVMb2FkKGxvYWRlciwgZGVwSWQsIGlkKTtcbiAgICAgICAgLy8gZGVwTG9hZC5JIG1heSBiZSB1bmRlZmluZWQgZm9yIGFscmVhZHktZXZhbHVhdGVkXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGVwTG9hZC5JKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHNldHRlcikge1xuICAgICAgICAgICAgZGVwTG9hZC5pLnB1c2goc2V0dGVyKTtcbiAgICAgICAgICAgIC8vIG9ubHkgcnVuIGVhcmx5IHNldHRlcnMgd2hlbiB0aGVyZSBhcmUgaG9pc3RlZCBleHBvcnRzIG9mIHRoYXQgbW9kdWxlXG4gICAgICAgICAgICAvLyB0aGUgdGltaW5nIHdvcmtzIGhlcmUgYXMgcGVuZGluZyBob2lzdGVkIGV4cG9ydCBjYWxscyB3aWxsIHRyaWdnZXIgdGhyb3VnaCBpbXBvcnRlclNldHRlcnNcbiAgICAgICAgICAgIGlmIChkZXBMb2FkLmggfHwgIWRlcExvYWQuSSlcbiAgICAgICAgICAgICAgc2V0dGVyKGRlcExvYWQubik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkZXBMb2FkO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pKVxuICAgIC50aGVuKGZ1bmN0aW9uIChkZXBMb2Fkcykge1xuICAgICAgbG9hZC5kID0gZGVwTG9hZHM7XG4gICAgfSk7XG4gIH0pO1xuICBpZiAoIXByb2Nlc3MuZW52LlNZU1RFTV9CUk9XU0VSKVxuICAgIGxpbmtQcm9taXNlLmNhdGNoKGZ1bmN0aW9uICgpIHt9KTtcblxuICAvLyBDYXBpdGFsIGxldHRlciA9IGEgcHJvbWlzZSBmdW5jdGlvblxuICByZXR1cm4gbG9hZCA9IGxvYWRlcltSRUdJU1RSWV1baWRdID0ge1xuICAgIGlkOiBpZCxcbiAgICAvLyBpbXBvcnRlclNldHRlcnMsIHRoZSBzZXR0ZXJzIGZ1bmN0aW9ucyByZWdpc3RlcmVkIHRvIHRoaXMgZGVwZW5kZW5jeVxuICAgIC8vIHdlIHJldGFpbiB0aGlzIHRvIGFkZCBtb3JlIGxhdGVyXG4gICAgaTogaW1wb3J0ZXJTZXR0ZXJzLFxuICAgIC8vIG1vZHVsZSBuYW1lc3BhY2Ugb2JqZWN0XG4gICAgbjogbnMsXG5cbiAgICAvLyBpbnN0YW50aWF0ZVxuICAgIEk6IGluc3RhbnRpYXRlUHJvbWlzZSxcbiAgICAvLyBsaW5rXG4gICAgTDogbGlua1Byb21pc2UsXG4gICAgLy8gd2hldGhlciBpdCBoYXMgaG9pc3RlZCBleHBvcnRzXG4gICAgaDogZmFsc2UsXG5cbiAgICAvLyBPbiBpbnN0YW50aWF0ZSBjb21wbGV0aW9uIHdlIGhhdmUgcG9wdWxhdGVkOlxuICAgIC8vIGRlcGVuZGVuY3kgbG9hZCByZWNvcmRzXG4gICAgZDogdW5kZWZpbmVkLFxuICAgIC8vIGV4ZWN1dGlvbiBmdW5jdGlvblxuICAgIGU6IHVuZGVmaW5lZCxcblxuICAgIC8vIE9uIGV4ZWN1dGlvbiB3ZSBoYXZlIHBvcHVsYXRlZDpcbiAgICAvLyB0aGUgZXhlY3V0aW9uIGVycm9yIGlmIGFueVxuICAgIGVyOiB1bmRlZmluZWQsXG4gICAgLy8gaW4gdGhlIGNhc2Ugb2YgVExBLCB0aGUgZXhlY3V0aW9uIHByb21pc2VcbiAgICBFOiB1bmRlZmluZWQsXG5cbiAgICAvLyBPbiBleGVjdXRpb24sIEwsIEksIEUgY2xlYXJlZFxuXG4gICAgLy8gUHJvbWlzZSBmb3IgdG9wLWxldmVsIGNvbXBsZXRpb25cbiAgICBDOiB1bmRlZmluZWQsXG5cbiAgICAvLyBwYXJlbnQgaW5zdGFudGlhdG9yIC8gZXhlY3V0b3JcbiAgICBwOiB1bmRlZmluZWRcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5zdGFudGlhdGVBbGwgKGxvYWRlciwgbG9hZCwgcGFyZW50LCBsb2FkZWQpIHtcbiAgaWYgKCFsb2FkZWRbbG9hZC5pZF0pIHtcbiAgICBsb2FkZWRbbG9hZC5pZF0gPSB0cnVlO1xuICAgIC8vIGxvYWQuTCBtYXkgYmUgdW5kZWZpbmVkIGZvciBhbHJlYWR5LWluc3RhbnRpYXRlZFxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobG9hZC5MKVxuICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghbG9hZC5wIHx8IGxvYWQucC5lID09PSBudWxsKVxuICAgICAgICBsb2FkLnAgPSBwYXJlbnQ7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwobG9hZC5kLm1hcChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW50aWF0ZUFsbChsb2FkZXIsIGRlcCwgcGFyZW50LCBsb2FkZWQpO1xuICAgICAgfSkpO1xuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGlmIChsb2FkLmVyKVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICBsb2FkLmUgPSBudWxsO1xuICAgICAgaWYgKCFwcm9jZXNzLmVudi5TWVNURU1fUFJPRFVDVElPTikgdHJpZ2dlck9ubG9hZChsb2FkZXIsIGxvYWQsIGVyciwgZmFsc2UpO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvcExldmVsTG9hZCAobG9hZGVyLCBsb2FkKSB7XG4gIHJldHVybiBsb2FkLkMgPSBpbnN0YW50aWF0ZUFsbChsb2FkZXIsIGxvYWQsIGxvYWQsIHt9KVxuICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHBvc3RPcmRlckV4ZWMobG9hZGVyLCBsb2FkLCB7fSk7XG4gIH0pXG4gIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbG9hZC5uO1xuICB9KTtcbn1cblxuLy8gdGhlIGNsb3Nlc3Qgd2UgY2FuIGdldCB0byBjYWxsKHVuZGVmaW5lZClcbnZhciBudWxsQ29udGV4dCA9IE9iamVjdC5mcmVlemUoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG5cbi8vIEVxdWl2YWxlbnQgdG8gYFByb21pc2UucHJvdG90eXBlLmZpbmFsbHlgXG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9kZXZlbG9waXQvZDk3MGJhYzE4NDMwOTQzZTRiMzM5MmIwMjlhMmE5NmNcbnZhciBwcm9taXNlUHJvdG90eXBlRmluYWxseSA9IFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgfHwgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gdGhpcy50aGVuKGNhbGxiYWNrLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGNvbnN0IFAgPSB0aGlzLmNvbnN0cnVjdG9yIHx8IFByb21pc2U7XG4gICAgcmV0dXJuIHRoaXMudGhlbihcbiAgICAgICAgdmFsdWUgPT4gUC5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oKCkgPT4gdmFsdWUpLFxuICAgICAgICBlcnIgPT4gUC5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oKCkgPT4geyB0aHJvdyBlcnI7IH0pLFxuICAgICk7XG59XG5cbi8vIHJldHVybnMgYSBwcm9taXNlIGlmIGFuZCBvbmx5IGlmIGEgdG9wLWxldmVsIGF3YWl0IHN1YmdyYXBoXG4vLyB0aHJvd3Mgb24gc3luYyBlcnJvcnNcbmZ1bmN0aW9uIHBvc3RPcmRlckV4ZWMgKGxvYWRlciwgbG9hZCwgc2Vlbikge1xuICBpZiAoc2Vlbltsb2FkLmlkXSkge1xuICAgIHJldHVybiBsb2FkLkU7XG4gIH1cbiAgc2Vlbltsb2FkLmlkXSA9IHRydWU7XG5cbiAgaWYgKCFsb2FkLmUpIHtcbiAgICBpZiAobG9hZC5lcilcbiAgICAgIHRocm93IGxvYWQuZXI7XG4gICAgaWYgKGxvYWQuRSlcbiAgICAgIHJldHVybiBsb2FkLkU7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRnJvbSBoZXJlIHdlJ3JlIGFib3V0IHRvIGV4ZWN1dGUgdGhlIGxvYWQuXG4gIC8vIEJlY2F1c2UgdGhlIGV4ZWN1dGlvbiBtYXkgYmUgYXN5bmMsIHdlIHBvcCB0aGUgYGxvYWQuZWAgZmlyc3QuXG4gIC8vIFNvIGBsb2FkLmUgPT09IG51bGxgIGFsd2F5cyBtZWFucyB0aGUgbG9hZCBoYXMgYmVlbiBleGVjdXRlZCBvciBpcyBleGVjdXRpbmcuXG4gIC8vIFRvIGluc3BlY3QgdGhlIHN0YXRlOlxuICAvLyAtIElmIGBsb2FkLmVyYCBpcyB0cnV0aHksIHRoZSBleGVjdXRpb24gaGFzIHRocmV3IG9yIGhhcyBiZWVuIHJlamVjdGVkO1xuICAvLyAtIG90aGVyd2lzZSwgZWl0aGVyIHRoZSBgbG9hZC5FYCBpcyBhIHByb21pc2UsIG1lYW5zIGl0J3MgdW5kZXIgYXN5bmMgZXhlY3V0aW9uLCBvclxuICAvLyAtIHRoZSBgbG9hZC5FYCBpcyBudWxsLCBtZWFucyB0aGUgbG9hZCBoYXMgY29tcGxldGVkIHRoZSBleGVjdXRpb24gb3IgaGFzIGJlZW4gYXN5bmMgcmVzb2x2ZWQuXG4gIGNvbnN0IGV4ZWMgPSBsb2FkLmU7XG4gIGxvYWQuZSA9IG51bGw7XG5cbiAgLy8gZGVwcyBleGVjdXRlIGZpcnN0LCB1bmxlc3MgY2lyY3VsYXJcbiAgdmFyIGRlcExvYWRQcm9taXNlcztcbiAgbG9hZC5kLmZvckVhY2goZnVuY3Rpb24gKGRlcExvYWQpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGRlcExvYWRQcm9taXNlID0gcG9zdE9yZGVyRXhlYyhsb2FkZXIsIGRlcExvYWQsIHNlZW4pO1xuICAgICAgaWYgKGRlcExvYWRQcm9taXNlKSBcbiAgICAgICAgKGRlcExvYWRQcm9taXNlcyA9IGRlcExvYWRQcm9taXNlcyB8fCBbXSkucHVzaChkZXBMb2FkUHJvbWlzZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgIGxvYWQuZXIgPSBlcnI7XG4gICAgICBpZiAoIXByb2Nlc3MuZW52LlNZU1RFTV9QUk9EVUNUSU9OKSB0cmlnZ2VyT25sb2FkKGxvYWRlciwgbG9hZCwgZXJyLCBmYWxzZSk7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9KTtcbiAgaWYgKGRlcExvYWRQcm9taXNlcylcbiAgICByZXR1cm4gbG9hZC5FID0gcHJvbWlzZVByb3RvdHlwZUZpbmFsbHkuY2FsbChQcm9taXNlLmFsbChkZXBMb2FkUHJvbWlzZXMpLnRoZW4oZG9FeGVjKSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxvYWQuRSA9IG51bGw7XG4gICAgfSk7XG5cbiAgdmFyIGV4ZWNQcm9taXNlID0gZG9FeGVjKCk7XG4gIGlmIChleGVjUHJvbWlzZSkge1xuICAgIHJldHVybiBsb2FkLkUgPSBwcm9taXNlUHJvdG90eXBlRmluYWxseS5jYWxsKGV4ZWNQcm9taXNlLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbG9hZC5FID0gbnVsbDtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvRXhlYyAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBleGVjUHJvbWlzZSA9IGV4ZWMuY2FsbChudWxsQ29udGV4dCk7XG4gICAgICBpZiAoZXhlY1Byb21pc2UpIHtcbiAgICAgICAgZXhlY1Byb21pc2UgPSBleGVjUHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsb2FkLkMgPSBsb2FkLm47XG4gICAgICAgICAgaWYgKCFwcm9jZXNzLmVudi5TWVNURU1fUFJPRFVDVElPTikgdHJpZ2dlck9ubG9hZChsb2FkZXIsIGxvYWQsIG51bGwsIHRydWUpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgbG9hZC5lciA9IGVycjtcbiAgICAgICAgICBpZiAoIXByb2Nlc3MuZW52LlNZU1RFTV9QUk9EVUNUSU9OKSB0cmlnZ2VyT25sb2FkKGxvYWRlciwgbG9hZCwgZXJyLCB0cnVlKTtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZXhlY1Byb21pc2U7XG4gICAgICB9XG4gICAgICAvLyAoc2hvdWxkIGJlIGEgcHJvbWlzZSwgYnV0IGEgbWluaWZ5IG9wdGltaXphdGlvbiB0byBsZWF2ZSBvdXQgUHJvbWlzZS5yZXNvbHZlKVxuICAgICAgbG9hZC5DID0gbG9hZC5uO1xuICAgICAgbG9hZC5MID0gbG9hZC5JID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICBsb2FkLmVyID0gZXJyO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgICBmaW5hbGx5IHtcbiAgICAgIGlmICghcHJvY2Vzcy5lbnYuU1lTVEVNX1BST0RVQ1RJT04pIHRyaWdnZXJPbmxvYWQobG9hZGVyLCBsb2FkLCBsb2FkLmVyLCB0cnVlKTtcbiAgICB9XG4gIH1cbn1cblxuZ2xvYmFsLlN5c3RlbSA9IG5ldyBTeXN0ZW1KUygpO1xuIiwiaW1wb3J0IHR5cGUgeyBIb3RTdGF0ZSB9IGZyb20gJy4vaG1yL2hvdCc7XG5pbXBvcnQgdHlwZSB7IE1vZHVsZVN5c3RlbSB9IGZyb20gJy4vbW9kdWxlLXN5c3RlbS9tb2R1bGUtc3lzdGVtJztcblxuXG5leHBvcnQgdHlwZSBNb2R1bGVJZCA9IHN0cmluZztcbmV4cG9ydCB0eXBlIE1vZHVsZSA9IE9iamVjdDtcbmV4cG9ydCB0eXBlIE1vZHVsZU1hcCA9IFJlY29yZDxNb2R1bGVJZCwgTW9kdWxlPjtcblxuZXhwb3J0IHR5cGUgU3lzdGVtSlMgPSBTeXN0ZW1KU1Byb3RvdHlwZSAmIHtcbiAgICByZWFkb25seSBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICByZWFkb25seSBwcm90b3R5cGU6IFN5c3RlbUpTUHJvdG90eXBlO1xuICAgIH07XG59XG5cbnR5cGUgRGVwcyA9IHN0cmluZ1tdO1xudHlwZSBEZWNsYXJlID0gKF9leHBvcnQ/OiBzdHJpbmcsIF9jb250ZXh0PzogT2JqZWN0KSA9PiB7XG4gICAgc2V0dGVyczogKChuczogT2JqZWN0KSA9PiB2b2lkKVtdLFxuICAgIGV4ZWN1dG9yOiAoKSA9PiB2b2lkO1xufTtcbnR5cGUgUmVnaXN0ZXIgPSBbRGVwcywgRGVjbGFyZV07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1wb3J0Q29udGV4dCB7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgcmVzb2x2ZSAoc3BlY2lmaWVyOiBzdHJpbmcsIHBhcmVudD86IHN0cmluZyk6IHN0cmluZztcbiAgICBjY0hvdD86IEhvdFN0YXRlO1xuICAgIG1vZHVsZVN5c3RlbT86IE1vZHVsZVN5c3RlbTtcbiAgICAvKipcbiAgICAgKiBEZWNvcmF0b3IgdG8gc3VwcG9ydGVkIHRvIHJlZ2lzdGVyIHVwdmFsdWUgY2xhc3MgaW4gbW9kdWxlLlxuICAgICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSBjbGFzc1xuICAgICAqL1xuICAgIHVwdmFsdWU6IChuYW1lOiBzdHJpbmcpID0+IENsYXNzRGVjb3JhdG9yO1xufVxuXG50eXBlIEVudHJpZXMgPSBJdGVyYWJsZUl0ZXJhdG9yPFtpZDogc3RyaW5nLCBuczogT2JqZWN0LCB1cHZhbHVlTGlzdD86IFJlY29yZDxzdHJpbmcsIE9iamVjdD5dPjtcblxuaW50ZXJmYWNlIFN5c3RlbUpTUHJvdG90eXBlIHtcbiAgICBoYXMgKGlkOiBzdHJpbmcpOiBib29sZWFuO1xuXG4gICAgZGVsZXRlIChpZDogc3RyaW5nKTogZmFsc2UgfCAoKCkgPT4gdm9pZCk7XG5cbiAgICBlbnRyaWVzICgpOiBFbnRyaWVzO1xuXG4gICAgb25sb2FkIChlcnI6IHVua25vd24gfCB1bmRlZmluZWQsIGlkOiBzdHJpbmcsIGRlcGVuZGVuY2llczogc3RyaW5nW10sIC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQ7XG5cbiAgICBwcmVwYXJlSW1wb3J0ICgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgY3JlYXRlQ29udGV4dCAoaWQ6IHN0cmluZyk6IEltcG9ydENvbnRleHQ7XG5cbiAgICByZXNvbHZlIChzcGVjaWZpZXI6IHN0cmluZywgcGFyZW50Pzogc3RyaW5nKTogc3RyaW5nO1xuXG4gICAgaW1wb3J0IChpZDogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPjtcblxuICAgIGluc3RhbnRpYXRlICh1cmw6IHN0cmluZywgZmlyc3RQYXJlbnRVcmw6IHN0cmluZyk6IFJlZ2lzdGVyO1xuXG4gICAgc2V0RGVmYXVsdEhvdFJlbG9hZGFibGUgKHZhbHVlOiBib29sZWFuKTogdm9pZDtcblxuICAgIGdldERlZmF1bHRIb3RSZWxvYWRhYmxlICgpOiBib29sZWFuO1xuXG4gICAgcmVsb2FkIChmaWxlczogc3RyaW5nW10pOiBQcm9taXNlPGJvb2xlYW4+O1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgbGV0IFN5c3RlbTogU3lzdGVtSlM7XG59XG5cbnR5cGUgSW1wb3J0cyA9IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1wb3J0TWFwIHtcbiAgICBpbXBvcnRzOiBJbXBvcnRzLFxuICAgIHNjb3BlczogUmVjb3JkPHN0cmluZywgSW1wb3J0cz4sXG59XG5cbmRlY2xhcmUgbGV0ICRnbG9iYWw6IGFueTsgIC8vICAkZ2xvYmFsIGZvciBUQU9CQU9cbmRlY2xhcmUgbGV0IGdldEFwcDogYW55OyAgLy8gZ2V0QXBwIGZvciBXRUNIQVQgbWluaXByb2dyYW1cblxuY29uc3QgZ2xvYmFsT2JqID0gKGZ1bmN0aW9uIGdldEdsb2JhbE9iaiAoKSB7XG4gICAgaWYgKHR5cGVvZiAkZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gJGdsb2JhbDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBnZXRBcHAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGdldEFwcCgpLkdhbWVHbG9iYWw7XG4gICAgfVxufSkoKTtcblxuZXhwb3J0IGNvbnN0IHN5c3RlbUdsb2JhbCA9ICh0eXBlb2YgZ2xvYmFsT2JqICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbE9iai5TeXN0ZW0gOiBTeXN0ZW0pIGFzIFN5c3RlbUpTO1xuXG5leHBvcnQgY29uc3Qgc3lzdGVtSlNQcm90b3R5cGU6IFN5c3RlbUpTUHJvdG90eXBlID0gc3lzdGVtR2xvYmFsLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiIsImltcG9ydCB7IHN5c3RlbUpTUHJvdG90eXBlIH0gZnJvbSAnLi9nbG9iYWxzJztcblxuc3lzdGVtSlNQcm90b3R5cGUuaW5zdGFudGlhdGUgPSBmdW5jdGlvbih1cmw6IHN0cmluZywgZmlyc3RQYXJlbnRVcmw6IHN0cmluZykge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGluc3RhbnRpYXRlICR7dXJsfSBmcm9tICR7Zmlyc3RQYXJlbnRVcmx9YCk7XG59OyIsImltcG9ydCB7IHN5c3RlbUpTUHJvdG90eXBlLCBSRUdJU1RSWSB9IGZyb20gJy4uL3N5c3RlbS1jb3JlLmpzJztcbmltcG9ydCB7IGJhc2VVcmwsIHJlc29sdmVJZk5vdFBsYWluT3JVcmwgfSBmcm9tICcuLi9jb21tb24uanMnO1xuaW1wb3J0IHsgZXJyTXNnIH0gZnJvbSAnLi4vZXJyLW1zZy5qcyc7XG5cbnZhciB0b1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZztcblxuc3lzdGVtSlNQcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGlkKSB7XG4gIHZhciBsb2FkID0gdGhpc1tSRUdJU1RSWV1baWRdO1xuICBpZiAobG9hZCAmJiBsb2FkLmUgPT09IG51bGwgJiYgIWxvYWQuRSkge1xuICAgIGlmIChsb2FkLmVyKVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIGxvYWQubjtcbiAgfVxufTtcblxuc3lzdGVtSlNQcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGlkLCBtb2R1bGUpIHtcbiAgaWYgKCFwcm9jZXNzLmVudi5TWVNURU1fUFJPRFVDVElPTikge1xuICAgIHRyeSB7XG4gICAgICAvLyBObyBwYWdlLXJlbGF0aXZlIFVSTHMgYWxsb3dlZFxuICAgICAgbmV3IFVSTChpZCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLndhcm4oRXJyb3IoZXJyTXNnKCdXMycsICdcIicgKyBpZCArICdcIiBpcyBub3QgYSB2YWxpZCBVUkwgdG8gc2V0IGluIHRoZSBtb2R1bGUgcmVnaXN0cnknKSkpO1xuICAgIH1cbiAgfVxuICB2YXIgbnM7XG4gIGlmICh0b1N0cmluZ1RhZyAmJiBtb2R1bGVbdG9TdHJpbmdUYWddID09PSAnTW9kdWxlJykge1xuICAgIG5zID0gbW9kdWxlO1xuICB9XG4gIGVsc2Uge1xuICAgIG5zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKG51bGwpLCBtb2R1bGUpO1xuICAgIGlmICh0b1N0cmluZ1RhZylcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgdG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuICB9XG5cbiAgdmFyIGRvbmUgPSBQcm9taXNlLnJlc29sdmUobnMpO1xuXG4gIHZhciBsb2FkID0gdGhpc1tSRUdJU1RSWV1baWRdIHx8ICh0aGlzW1JFR0lTVFJZXVtpZF0gPSB7XG4gICAgaWQ6IGlkLFxuICAgIGk6IFtdLFxuICAgIGg6IGZhbHNlLFxuICAgIGQ6IFtdLFxuICAgIGU6IG51bGwsXG4gICAgZXI6IHVuZGVmaW5lZCxcbiAgICBFOiB1bmRlZmluZWRcbiAgfSk7XG5cbiAgaWYgKGxvYWQuZSB8fCBsb2FkLkUpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBcbiAgT2JqZWN0LmFzc2lnbihsb2FkLCB7XG4gICAgbjogbnMsXG4gICAgSTogdW5kZWZpbmVkLFxuICAgIEw6IHVuZGVmaW5lZCxcbiAgICBDOiBkb25lXG4gIH0pO1xuICByZXR1cm4gbnM7XG59O1xuXG5zeXN0ZW1KU1Byb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoaWQpIHtcbiAgdmFyIGxvYWQgPSB0aGlzW1JFR0lTVFJZXVtpZF07XG4gIHJldHVybiAhIWxvYWQ7XG59O1xuXG4vLyBEZWxldGUgZnVuY3Rpb24gcHJvdmlkZWQgZm9yIGhvdC1yZWxvYWRpbmcgdXNlIGNhc2VzXG5zeXN0ZW1KU1Byb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgdmFyIHJlZ2lzdHJ5ID0gdGhpc1tSRUdJU1RSWV07XG4gIHZhciBsb2FkID0gcmVnaXN0cnlbaWRdO1xuICAvLyBpbiBmdXR1cmUgd2UgY2FuIHN1cHBvcnQgbG9hZC5FIGNhc2UgYnkgZmFpbGluZyBsb2FkIGZpcnN0XG4gIC8vIGJ1dCB0aGF0IHdpbGwgcmVxdWlyZSBUTEEgY2FsbGJhY2tzIHRvIGJlIGltcGxlbWVudGVkXG4gIGlmICghbG9hZCB8fCAobG9hZC5wICYmIGxvYWQucC5lICE9PSBudWxsKSB8fCBsb2FkLkUpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBpbXBvcnRlclNldHRlcnMgPSBsb2FkLmk7XG4gIC8vIHJlbW92ZSBmcm9tIGltcG9ydGVyU2V0dGVyc1xuICAvLyAocmVsZWFzZSBmb3IgZ2MpXG4gIGlmIChsb2FkLmQpXG4gICAgbG9hZC5kLmZvckVhY2goZnVuY3Rpb24gKGRlcExvYWQpIHtcbiAgICAgIHZhciBpbXBvcnRlckluZGV4ID0gZGVwTG9hZC5pLmluZGV4T2YobG9hZCk7XG4gICAgICBpZiAoaW1wb3J0ZXJJbmRleCAhPT0gLTEpXG4gICAgICAgIGRlcExvYWQuaS5zcGxpY2UoaW1wb3J0ZXJJbmRleCwgMSk7XG4gICAgfSk7XG4gIGRlbGV0ZSByZWdpc3RyeVtpZF07XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxvYWQgPSByZWdpc3RyeVtpZF07XG4gICAgaWYgKCFsb2FkIHx8ICFpbXBvcnRlclNldHRlcnMgfHwgbG9hZC5lICE9PSBudWxsIHx8IGxvYWQuRSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgYmFjayB0aGUgb2xkIHNldHRlcnNcbiAgICBpbXBvcnRlclNldHRlcnMuZm9yRWFjaChmdW5jdGlvbiAoc2V0dGVyKSB7XG4gICAgICBsb2FkLmkucHVzaChzZXR0ZXIpO1xuICAgICAgc2V0dGVyKGxvYWQubik7XG4gICAgfSk7XG4gICAgaW1wb3J0ZXJTZXR0ZXJzID0gbnVsbDtcbiAgfTtcbn07XG5cbnZhciBpdGVyYXRvciA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC5pdGVyYXRvcjtcblxuc3lzdGVtSlNQcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxvYWRlciA9IHRoaXMsIGtleXMgPSBPYmplY3Qua2V5cyhsb2FkZXJbUkVHSVNUUlldKTtcbiAgdmFyIGluZGV4ID0gMCwgbnMsIGtleTtcbiAgdmFyIHJlc3VsdCA9IHtcbiAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB3aGlsZSAoXG4gICAgICAgIChrZXkgPSBrZXlzW2luZGV4KytdKSAhPT0gdW5kZWZpbmVkICYmIFxuICAgICAgICAobnMgPSBsb2FkZXIuZ2V0KGtleSkpID09PSB1bmRlZmluZWRcbiAgICAgICk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkb25lOiBrZXkgPT09IHVuZGVmaW5lZCxcbiAgICAgICAgdmFsdWU6IGtleSAhPT0gdW5kZWZpbmVkICYmIFtrZXksIG5zXVxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgcmVzdWx0W2l0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9O1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLypcbiAqIFN5c3RlbUpTIGJyb3dzZXIgYXR0YWNobWVudHMgZm9yIHNjcmlwdCBhbmQgaW1wb3J0IG1hcCBwcm9jZXNzaW5nXG4gKi9cbmltcG9ydCB7IGJhc2VVcmwsIHJlc29sdmVBbmRDb21wb3NlSW1wb3J0TWFwLCBoYXNEb2N1bWVudCwgcmVzb2x2ZVVybCB9IGZyb20gJy4uL2NvbW1vbi5qcyc7XG5pbXBvcnQgeyBzeXN0ZW1KU1Byb3RvdHlwZSB9IGZyb20gJy4uL3N5c3RlbS1jb3JlLmpzJztcbmltcG9ydCB7IGVyck1zZyB9IGZyb20gJy4uL2Vyci1tc2cuanMnO1xuXG52YXIgaW1wb3J0TWFwUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuZXhwb3J0IHZhciBpbXBvcnRNYXAgPSB7IGltcG9ydHM6IHt9LCBzY29wZXM6IHt9LCBkZXBjYWNoZToge30sIGludGVncml0eToge30gfTtcblxuLy8gU2NyaXB0cyBhcmUgcHJvY2Vzc2VkIGltbWVkaWF0ZWx5LCBvbiB0aGUgZmlyc3QgU3lzdGVtLmltcG9ydCwgYW5kIG9uIERPTVJlYWR5LlxuLy8gSW1wb3J0IG1hcCBzY3JpcHRzIGFyZSBwcm9jZXNzZWQgb25seSBvbmNlIChieSBiZWluZyBtYXJrZWQpIGFuZCBpbiBvcmRlciBmb3IgZWFjaCBwaGFzZS5cbi8vIFRoaXMgaXMgdG8gYXZvaWQgdXNpbmcgRE9NIG11dGF0aW9uIG9ic2VydmVycyBpbiBjb3JlLCBhbHRob3VnaCB0aGF0IHdvdWxkIGJlIGFuIGFsdGVybmF0aXZlLlxudmFyIHByb2Nlc3NGaXJzdCA9IGhhc0RvY3VtZW50O1xuc3lzdGVtSlNQcm90b3R5cGUucHJlcGFyZUltcG9ydCA9IGZ1bmN0aW9uIChkb1Byb2Nlc3NTY3JpcHRzKSB7XG4gIGlmIChwcm9jZXNzRmlyc3QgfHwgZG9Qcm9jZXNzU2NyaXB0cykge1xuICAgIHByb2Nlc3NTY3JpcHRzKCk7XG4gICAgcHJvY2Vzc0ZpcnN0ID0gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGltcG9ydE1hcFByb21pc2U7XG59O1xuaWYgKGhhc0RvY3VtZW50KSB7XG4gIHByb2Nlc3NTY3JpcHRzKCk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgcHJvY2Vzc1NjcmlwdHMpO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzU2NyaXB0cyAoKSB7XG4gIFtdLmZvckVhY2guY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKSwgZnVuY3Rpb24gKHNjcmlwdCkge1xuICAgIGlmIChzY3JpcHQuc3ApIC8vIHNwIG1hcmtlciA9IHN5c3RlbWpzIHByb2Nlc3NlZFxuICAgICAgcmV0dXJuO1xuICAgIC8vIFRPRE86IGRlcHJlY2F0ZSBzeXN0ZW1qcy1tb2R1bGUgaW4gbmV4dCBtYWpvciBub3cgdGhhdCB3ZSBoYXZlIGF1dG8gaW1wb3J0XG4gICAgaWYgKHNjcmlwdC50eXBlID09PSAnc3lzdGVtanMtbW9kdWxlJykge1xuICAgICAgc2NyaXB0LnNwID0gdHJ1ZTtcbiAgICAgIGlmICghc2NyaXB0LnNyYylcbiAgICAgICAgcmV0dXJuO1xuICAgICAgU3lzdGVtLmltcG9ydChzY3JpcHQuc3JjLnNsaWNlKDAsIDcpID09PSAnaW1wb3J0OicgPyBzY3JpcHQuc3JjLnNsaWNlKDcpIDogcmVzb2x2ZVVybChzY3JpcHQuc3JjLCBiYXNlVXJsKSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBzY3JpcHQgbG9hZCBlcnJvciwgZGlzcGF0Y2ggYW4gXCJlcnJvclwiIGV2ZW50XG4gICAgICAgIC8vIG9uIHRoZSBzY3JpcHQgdGFnLlxuICAgICAgICBpZiAoZS5tZXNzYWdlLmluZGV4T2YoJ2h0dHBzOi8vZ2l0LmlvL0p2RkVUIzMnKSA+IC0xKSB7XG4gICAgICAgICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgICAgICAgZXZlbnQuaW5pdEV2ZW50KCdlcnJvcicsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgc2NyaXB0LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChzY3JpcHQudHlwZSA9PT0gJ3N5c3RlbWpzLWltcG9ydG1hcCcpIHtcbiAgICAgIHNjcmlwdC5zcCA9IHRydWU7XG4gICAgICB2YXIgZmV0Y2hQcm9taXNlID0gc2NyaXB0LnNyYyA/IGZldGNoKHNjcmlwdC5zcmMsIHsgaW50ZWdyaXR5OiBzY3JpcHQuaW50ZWdyaXR5IH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBpZiAoIXJlcy5vaylcbiAgICAgICAgICB0aHJvdyBFcnJvcihwcm9jZXNzLmVudi5TWVNURU1fUFJPRFVDVElPTiA/IHJlcy5zdGF0dXMgOiAnSW52YWxpZCBzdGF0dXMgY29kZTogJyArIHJlcy5zdGF0dXMpO1xuICAgICAgICByZXR1cm4gcmVzLnRleHQoKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgZXJyLm1lc3NhZ2UgPSBlcnJNc2coJ1c0JywgcHJvY2Vzcy5lbnYuU1lTVEVNX1BST0RVQ1RJT04gPyBzY3JpcHQuc3JjIDogJ0Vycm9yIGZldGNoaW5nIHN5c3RlbWpzLWltcG9ydCBtYXAgJyArIHNjcmlwdC5zcmMpICsgJ1xcbicgKyBlcnIubWVzc2FnZTtcbiAgICAgICAgY29uc29sZS53YXJuKGVycik7XG4gICAgICAgIHJldHVybiAne30nO1xuICAgICAgfSkgOiBzY3JpcHQuaW5uZXJIVE1MO1xuICAgICAgaW1wb3J0TWFwUHJvbWlzZSA9IGltcG9ydE1hcFByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFByb21pc2U7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIGV4dGVuZEltcG9ydE1hcChpbXBvcnRNYXAsIHRleHQsIHNjcmlwdC5zcmMgfHwgYmFzZVVybCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBleHRlbmRJbXBvcnRNYXAgKGltcG9ydE1hcCwgbmV3TWFwVGV4dCwgbmV3TWFwVXJsKSB7XG4gIHZhciBuZXdNYXAgPSB7fTtcbiAgdHJ5IHtcbiAgICBuZXdNYXAgPSBKU09OLnBhcnNlKG5ld01hcFRleHQpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLndhcm4oRXJyb3IoKHByb2Nlc3MuZW52LlNZU1RFTV9QUk9EVUNUSU9OID8gZXJyTXNnKCdXNScpIDogZXJyTXNnKCdXNScsIFwic3lzdGVtanMtaW1wb3J0bWFwIGNvbnRhaW5zIGludmFsaWQgSlNPTlwiKSArICdcXG5cXG4nICsgbmV3TWFwVGV4dCArICdcXG4nICkpKTtcbiAgfVxuICByZXNvbHZlQW5kQ29tcG9zZUltcG9ydE1hcChuZXdNYXAsIG5ld01hcFVybCwgaW1wb3J0TWFwKTtcbn1cbiIsIi8qXG4gKiBTY3JpcHQgaW5zdGFudGlhdGlvbiBsb2FkaW5nXG4gKi9cbmltcG9ydCB7IGhhc0RvY3VtZW50IH0gZnJvbSAnLi4vY29tbW9uLmpzJztcbmltcG9ydCB7IHN5c3RlbUpTUHJvdG90eXBlIH0gZnJvbSAnLi4vc3lzdGVtLWNvcmUuanMnO1xuaW1wb3J0IHsgZXJyTXNnIH0gZnJvbSAnLi4vZXJyLW1zZy5qcyc7XG5pbXBvcnQgeyBpbXBvcnRNYXAgfSBmcm9tICcuL2ltcG9ydC1tYXBzLmpzJztcblxuaWYgKGhhc0RvY3VtZW50KSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICBsYXN0V2luZG93RXJyb3JVcmwgPSBldnQuZmlsZW5hbWU7XG4gICAgbGFzdFdpbmRvd0Vycm9yID0gZXZ0LmVycm9yO1xuICB9KTtcbiAgdmFyIGJhc2VPcmlnaW4gPSBsb2NhdGlvbi5vcmlnaW47XG59XG5cbnN5c3RlbUpTUHJvdG90eXBlLmNyZWF0ZVNjcmlwdCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAvLyBPbmx5IGFkZCBjcm9zcyBvcmlnaW4gZm9yIGFjdHVhbCBjcm9zcyBvcmlnaW5cbiAgLy8gdGhpcyBpcyBiZWNhdXNlIFNhZmFyaSB0cmlnZ2VycyBmb3IgYWxsXG4gIC8vIC0gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3MTU2NlxuICBpZiAodXJsLmluZGV4T2YoYmFzZU9yaWdpbiArICcvJykpXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XG4gIHZhciBpbnRlZ3JpdHkgPSBpbXBvcnRNYXAuaW50ZWdyaXR5W3VybF07XG4gIGlmIChpbnRlZ3JpdHkpXG4gICAgc2NyaXB0LmludGVncml0eSA9IGludGVncml0eTtcbiAgc2NyaXB0LnNyYyA9IHVybDtcbiAgcmV0dXJuIHNjcmlwdDtcbn07XG5cbi8vIEF1dG8gaW1wb3J0cyAtPiBzY3JpcHQgdGFncyBjYW4gYmUgaW5saW5lZCBkaXJlY3RseSBmb3IgbG9hZCBwaGFzZVxudmFyIGxhc3RBdXRvSW1wb3J0VXJsLCBsYXN0QXV0b0ltcG9ydERlcHMsIGxhc3RBdXRvSW1wb3J0VGltZW91dDtcbnZhciBhdXRvSW1wb3J0Q2FuZGlkYXRlcyA9IHt9O1xudmFyIHN5c3RlbVJlZ2lzdGVyID0gc3lzdGVtSlNQcm90b3R5cGUucmVnaXN0ZXI7XG5zeXN0ZW1KU1Byb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uIChkZXBzLCBkZWNsYXJlKSB7XG4gIGlmIChoYXNEb2N1bWVudCAmJiBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycgJiYgdHlwZW9mIGRlcHMgIT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHRbc3JjXScpO1xuICAgIHZhciBsYXN0U2NyaXB0ID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdO1xuICAgIGlmIChsYXN0U2NyaXB0KSB7XG4gICAgICBsYXN0QXV0b0ltcG9ydFVybCA9IGxhc3RTY3JpcHQuc3JjO1xuICAgICAgbGFzdEF1dG9JbXBvcnREZXBzID0gZGVwcztcbiAgICAgIC8vIGlmIHRoaXMgaXMgYWxyZWFkeSBhIFN5c3RlbSBsb2FkLCB0aGVuIHRoZSBpbnN0YW50aWF0ZSBoYXMgYWxyZWFkeSBiZWd1blxuICAgICAgLy8gc28gdGhpcyByZS1pbXBvcnQgaGFzIG5vIGNvbnNlcXVlbmNlXG4gICAgICB2YXIgbG9hZGVyID0gdGhpcztcbiAgICAgIGxhc3RBdXRvSW1wb3J0VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBhdXRvSW1wb3J0Q2FuZGlkYXRlc1tsYXN0U2NyaXB0LnNyY10gPSBbZGVwcywgZGVjbGFyZV07XG4gICAgICAgIGxvYWRlci5pbXBvcnQobGFzdFNjcmlwdC5zcmMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIGxhc3RBdXRvSW1wb3J0RGVwcyA9IHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gc3lzdGVtUmVnaXN0ZXIuY2FsbCh0aGlzLCBkZXBzLCBkZWNsYXJlKTtcbn07XG5cbnZhciBsYXN0V2luZG93RXJyb3JVcmwsIGxhc3RXaW5kb3dFcnJvcjtcbnN5c3RlbUpTUHJvdG90eXBlLmluc3RhbnRpYXRlID0gZnVuY3Rpb24gKHVybCwgZmlyc3RQYXJlbnRVcmwpIHtcbiAgdmFyIGF1dG9JbXBvcnRSZWdpc3RyYXRpb24gPSBhdXRvSW1wb3J0Q2FuZGlkYXRlc1t1cmxdO1xuICBpZiAoYXV0b0ltcG9ydFJlZ2lzdHJhdGlvbikge1xuICAgIGRlbGV0ZSBhdXRvSW1wb3J0Q2FuZGlkYXRlc1t1cmxdO1xuICAgIHJldHVybiBhdXRvSW1wb3J0UmVnaXN0cmF0aW9uO1xuICB9XG4gIHZhciBsb2FkZXIgPSB0aGlzO1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBzY3JpcHQgPSBzeXN0ZW1KU1Byb3RvdHlwZS5jcmVhdGVTY3JpcHQodXJsKTtcbiAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZWplY3QoRXJyb3IoZXJyTXNnKDMsIHByb2Nlc3MuZW52LlNZU1RFTV9QUk9EVUNUSU9OID8gW3VybCwgZmlyc3RQYXJlbnRVcmxdLmpvaW4oJywgJykgOiAnRXJyb3IgbG9hZGluZyAnICsgdXJsICsgKGZpcnN0UGFyZW50VXJsID8gJyBmcm9tICcgKyBmaXJzdFBhcmVudFVybCA6ICcnKSkpKTtcbiAgICB9KTtcbiAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgIC8vIE5vdGUgdGhhdCBpZiBhbiBlcnJvciBvY2N1cnMgdGhhdCBpc24ndCBjYXVnaHQgYnkgdGhpcyBpZiBzdGF0ZW1lbnQsXG4gICAgICAvLyB0aGF0IGdldFJlZ2lzdGVyIHdpbGwgcmV0dXJuIG51bGwgYW5kIGEgXCJkaWQgbm90IGluc3RhbnRpYXRlXCIgZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gICAgICBpZiAobGFzdFdpbmRvd0Vycm9yVXJsID09PSB1cmwpIHtcbiAgICAgICAgcmVqZWN0KGxhc3RXaW5kb3dFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIHJlZ2lzdGVyID0gbG9hZGVyLmdldFJlZ2lzdGVyKCk7XG4gICAgICAgIC8vIENsZWFyIGFueSBhdXRvIGltcG9ydCByZWdpc3RyYXRpb24gZm9yIGR5bmFtaWMgaW1wb3J0IHNjcmlwdHMgZHVyaW5nIGxvYWRcbiAgICAgICAgaWYgKHJlZ2lzdGVyICYmIHJlZ2lzdGVyWzBdID09PSBsYXN0QXV0b0ltcG9ydERlcHMpXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGxhc3RBdXRvSW1wb3J0VGltZW91dCk7XG4gICAgICAgIHJlc29sdmUocmVnaXN0ZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgZXJyTXNnIH0gZnJvbSAnLi4vZXJyLW1zZy5qcyc7XG5pbXBvcnQgeyBpbXBvcnRNYXAgfSBmcm9tICcuLi9mZWF0dXJlcy9pbXBvcnQtbWFwcy5qcyc7XG5pbXBvcnQgeyBzeXN0ZW1KU1Byb3RvdHlwZSB9IGZyb20gJy4uL3N5c3RlbS1jb3JlLmpzJztcblxuLypcbiAqIEZldGNoIGxvYWRlciwgc2V0cyB1cCBzaG91bGRGZXRjaCBhbmQgZmV0Y2ggaG9va3NcbiAqL1xuc3lzdGVtSlNQcm90b3R5cGUuc2hvdWxkRmV0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmYWxzZTtcbn07XG5pZiAodHlwZW9mIGZldGNoICE9PSAndW5kZWZpbmVkJylcbiAgc3lzdGVtSlNQcm90b3R5cGUuZmV0Y2ggPSBmZXRjaDtcblxudmFyIGluc3RhbnRpYXRlID0gc3lzdGVtSlNQcm90b3R5cGUuaW5zdGFudGlhdGU7XG52YXIganNDb250ZW50VHlwZVJlZ0V4ID0gL14odGV4dHxhcHBsaWNhdGlvbilcXC8oeC0pP2phdmFzY3JpcHQoO3wkKS87XG5zeXN0ZW1KU1Byb3RvdHlwZS5pbnN0YW50aWF0ZSA9IGZ1bmN0aW9uICh1cmwsIHBhcmVudCkge1xuICB2YXIgbG9hZGVyID0gdGhpcztcbiAgaWYgKCF0aGlzLnNob3VsZEZldGNoKHVybCkpXG4gICAgcmV0dXJuIGluc3RhbnRpYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB0aGlzLmZldGNoKHVybCwge1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgIGludGVncml0eTogaW1wb3J0TWFwLmludGVncml0eVt1cmxdXG4gIH0pXG4gIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICBpZiAoIXJlcy5vaylcbiAgICAgIHRocm93IEVycm9yKGVyck1zZyg3LCBwcm9jZXNzLmVudi5TWVNURU1fUFJPRFVDVElPTiA/IFtyZXMuc3RhdHVzLCByZXMuc3RhdHVzVGV4dCwgdXJsLCBwYXJlbnRdLmpvaW4oJywgJykgOiByZXMuc3RhdHVzICsgJyAnICsgcmVzLnN0YXR1c1RleHQgKyAnLCBsb2FkaW5nICcgKyB1cmwgKyAocGFyZW50ID8gJyBmcm9tICcgKyBwYXJlbnQgOiAnJykpKTtcbiAgICB2YXIgY29udGVudFR5cGUgPSByZXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpO1xuICAgIGlmICghY29udGVudFR5cGUgfHwgIWpzQ29udGVudFR5cGVSZWdFeC50ZXN0KGNvbnRlbnRUeXBlKSlcbiAgICAgIHRocm93IEVycm9yKGVyck1zZyg0LCBwcm9jZXNzLmVudi5TWVNURU1fUFJPRFVDVElPTiA/IGNvbnRlbnRUeXBlIDogJ1Vua25vd24gQ29udGVudC1UeXBlIFwiJyArIGNvbnRlbnRUeXBlICsgJ1wiLCBsb2FkaW5nICcgKyB1cmwgKyAocGFyZW50ID8gJyBmcm9tICcgKyBwYXJlbnQgOiAnJykpKTtcbiAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIGlmIChzb3VyY2UuaW5kZXhPZignLy8jIHNvdXJjZVVSTD0nKSA8IDApXG4gICAgICAgIHNvdXJjZSArPSAnXFxuLy8jIHNvdXJjZVVSTD0nICsgdXJsO1xuICAgICAgKDAsIGV2YWwpKHNvdXJjZSk7XG4gICAgICByZXR1cm4gbG9hZGVyLmdldFJlZ2lzdGVyKCk7XG4gICAgfSk7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IEJBU0VfVVJMLCBiYXNlVXJsLCByZXNvbHZlSW1wb3J0TWFwLCByZXNvbHZlSWZOb3RQbGFpbk9yVXJsLCBJTVBPUlRfTUFQIH0gZnJvbSAnLi4vY29tbW9uLmpzJztcbmltcG9ydCB7IGltcG9ydE1hcCB9IGZyb20gJy4vaW1wb3J0LW1hcHMuanMnO1xuaW1wb3J0IHsgc3lzdGVtSlNQcm90b3R5cGUgfSBmcm9tICcuLi9zeXN0ZW0tY29yZS5qcyc7XG5pbXBvcnQgeyBlcnJNc2cgfSBmcm9tICcuLi9lcnItbXNnLmpzJztcblxuc3lzdGVtSlNQcm90b3R5cGUucmVzb2x2ZSA9IGZ1bmN0aW9uIChpZCwgcGFyZW50VXJsKSB7XG4gIHBhcmVudFVybCA9IHBhcmVudFVybCB8fCAhcHJvY2Vzcy5lbnYuU1lTVEVNX0JST1dTRVIgJiYgdGhpc1tCQVNFX1VSTF0gfHwgYmFzZVVybDtcbiAgcmV0dXJuIHJlc29sdmVJbXBvcnRNYXAoKCFwcm9jZXNzLmVudi5TWVNURU1fQlJPV1NFUiAmJiB0aGlzW0lNUE9SVF9NQVBdIHx8IGltcG9ydE1hcCksIHJlc29sdmVJZk5vdFBsYWluT3JVcmwoaWQsIHBhcmVudFVybCkgfHwgaWQsIHBhcmVudFVybCkgfHwgdGhyb3dVbnJlc29sdmVkKGlkLCBwYXJlbnRVcmwpO1xufTtcblxuZnVuY3Rpb24gdGhyb3dVbnJlc29sdmVkIChpZCwgcGFyZW50VXJsKSB7XG4gIHRocm93IEVycm9yKGVyck1zZyg4LCBwcm9jZXNzLmVudi5TWVNURU1fUFJPRFVDVElPTiA/IFtpZCwgcGFyZW50VXJsXS5qb2luKCcsICcpIDogXCJVbmFibGUgdG8gcmVzb2x2ZSBiYXJlIHNwZWNpZmllciAnXCIgKyBpZCArIChwYXJlbnRVcmwgPyBcIicgZnJvbSBcIiArIHBhcmVudFVybCA6IFwiJ1wiKSkpO1xufVxuIiwiaW1wb3J0IHsgSU1QT1JUX01BUCB9IGZyb20gJy4uL2NvbW1vbi5qcyc7XG5pbXBvcnQgeyBzeXN0ZW1KU1Byb3RvdHlwZSwgZ2V0T3JDcmVhdGVMb2FkIH0gZnJvbSAnLi4vc3lzdGVtLWNvcmUuanMnO1xuaW1wb3J0IHsgaW1wb3J0TWFwIH0gZnJvbSAnLi9pbXBvcnQtbWFwcy5qcyc7XG5cbnZhciBzeXN0ZW1JbnN0YW50aWF0ZSA9IHN5c3RlbUpTUHJvdG90eXBlLmluc3RhbnRpYXRlO1xuc3lzdGVtSlNQcm90b3R5cGUuaW5zdGFudGlhdGUgPSBmdW5jdGlvbiAodXJsLCBmaXJzdFBhcmVudFVybCkge1xuICB2YXIgcHJlbG9hZHMgPSAoIXByb2Nlc3MuZW52LlNZU1RFTV9CUk9XU0VSICYmIHRoaXNbSU1QT1JUX01BUF0gfHwgaW1wb3J0TWFwKS5kZXBjYWNoZVt1cmxdO1xuICBpZiAocHJlbG9hZHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByZWxvYWRzLmxlbmd0aDsgaSsrKVxuICAgICAgZ2V0T3JDcmVhdGVMb2FkKHRoaXMsIHRoaXMucmVzb2x2ZShwcmVsb2Fkc1tpXSwgdXJsKSwgdXJsKTtcbiAgfVxuICByZXR1cm4gc3lzdGVtSW5zdGFudGlhdGUuY2FsbCh0aGlzLCB1cmwsIGZpcnN0UGFyZW50VXJsKTtcbn07IiwiLypcbiAqIFN1cHBvcnRzIGxvYWRpbmcgU3lzdGVtLnJlZ2lzdGVyIGluIHdvcmtlcnNcbiAqL1xuaW1wb3J0IHsgc3lzdGVtSlNQcm90b3R5cGUgfSBmcm9tICcuLi9zeXN0ZW0tY29yZSc7XG5pbXBvcnQgeyBoYXNTZWxmIH0gZnJvbSAnLi4vY29tbW9uJztcblxuaWYgKGhhc1NlbGYgJiYgdHlwZW9mIGltcG9ydFNjcmlwdHMgPT09ICdmdW5jdGlvbicpXG4gIHN5c3RlbUpTUHJvdG90eXBlLmluc3RhbnRpYXRlID0gZnVuY3Rpb24gKHVybCkge1xuICAgIHZhciBsb2FkZXIgPSB0aGlzO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGltcG9ydFNjcmlwdHModXJsKTtcbiAgICAgIHJldHVybiBsb2FkZXIuZ2V0UmVnaXN0ZXIoKTtcbiAgICB9KTtcbiAgfTtcbiIsIi8qXG4gKiBTeXN0ZW1KUyBnbG9iYWwgc2NyaXB0IGxvYWRpbmcgc3VwcG9ydFxuICogRXh0cmEgZm9yIHRoZSBzLmpzIGJ1aWxkIG9ubHlcbiAqIChJbmNsdWRlZCBieSBkZWZhdWx0IGluIHN5c3RlbS5qcyBidWlsZClcbiAqL1xuKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgdmFyIHN5c3RlbUpTUHJvdG90eXBlID0gZ2xvYmFsLlN5c3RlbS5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cbiAgLy8gc2FmYXJpIHVucHJlZGljdGFibHkgbGlzdHMgc29tZSBuZXcgZ2xvYmFscyBmaXJzdCBvciBzZWNvbmQgaW4gb2JqZWN0IG9yZGVyXG4gIHZhciBmaXJzdEdsb2JhbFByb3AsIHNlY29uZEdsb2JhbFByb3AsIGxhc3RHbG9iYWxQcm9wO1xuICBmdW5jdGlvbiBnZXRHbG9iYWxQcm9wICh1c2VGaXJzdEdsb2JhbFByb3ApIHtcbiAgICB2YXIgY250ID0gMDtcbiAgICB2YXIgZm91bmRMYXN0UHJvcCwgcmVzdWx0O1xuICAgIGZvciAodmFyIHAgaW4gZ2xvYmFsKSB7XG4gICAgICAvLyBkbyBub3QgY2hlY2sgZnJhbWVzIGNhdXNlIGl0IGNvdWxkIGJlIHJlbW92ZWQgZHVyaW5nIGltcG9ydFxuICAgICAgaWYgKHNob3VsZFNraXBQcm9wZXJ0eShwKSlcbiAgICAgICAgY29udGludWU7XG4gICAgICBpZiAoY250ID09PSAwICYmIHAgIT09IGZpcnN0R2xvYmFsUHJvcCB8fCBjbnQgPT09IDEgJiYgcCAhPT0gc2Vjb25kR2xvYmFsUHJvcClcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgICBpZiAoZm91bmRMYXN0UHJvcCkge1xuICAgICAgICBsYXN0R2xvYmFsUHJvcCA9IHA7XG4gICAgICAgIHJlc3VsdCA9IHVzZUZpcnN0R2xvYmFsUHJvcCAmJiByZXN1bHQgfHwgcDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBmb3VuZExhc3RQcm9wID0gcCA9PT0gbGFzdEdsb2JhbFByb3A7XG4gICAgICB9XG4gICAgICBjbnQrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdGVHbG9iYWxQcm9wcyAoKSB7XG4gICAgLy8gYWx0ZXJuYXRpdmVseSBPYmplY3Qua2V5cyhnbG9iYWwpLnBvcCgpXG4gICAgLy8gYnV0IHRoaXMgbWF5IGJlIGZhc3RlciAocGVuZGluZyBiZW5jaG1hcmtzKVxuICAgIGZpcnN0R2xvYmFsUHJvcCA9IHNlY29uZEdsb2JhbFByb3AgPSB1bmRlZmluZWQ7XG4gICAgZm9yICh2YXIgcCBpbiBnbG9iYWwpIHtcbiAgICAgIC8vIGRvIG5vdCBjaGVjayBmcmFtZXMgY2F1c2UgaXQgY291bGQgYmUgcmVtb3ZlZCBkdXJpbmcgaW1wb3J0XG4gICAgICBpZiAoc2hvdWxkU2tpcFByb3BlcnR5KHApKVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIGlmICghZmlyc3RHbG9iYWxQcm9wKVxuICAgICAgICBmaXJzdEdsb2JhbFByb3AgPSBwO1xuICAgICAgZWxzZSBpZiAoIXNlY29uZEdsb2JhbFByb3ApXG4gICAgICAgIHNlY29uZEdsb2JhbFByb3AgPSBwO1xuICAgICAgbGFzdEdsb2JhbFByb3AgPSBwO1xuICAgIH1cbiAgICByZXR1cm4gbGFzdEdsb2JhbFByb3A7XG4gIH1cblxuICB2YXIgaW1wdCA9IHN5c3RlbUpTUHJvdG90eXBlLmltcG9ydDtcbiAgc3lzdGVtSlNQcm90b3R5cGUuaW1wb3J0ID0gZnVuY3Rpb24gKGlkLCBwYXJlbnRVcmwpIHtcbiAgICBub3RlR2xvYmFsUHJvcHMoKTtcbiAgICByZXR1cm4gaW1wdC5jYWxsKHRoaXMsIGlkLCBwYXJlbnRVcmwpO1xuICB9O1xuXG4gIHZhciBlbXB0eUluc3RhbnRpYXRpb24gPSBbW10sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHt9IH1dO1xuXG4gIHZhciBnZXRSZWdpc3RlciA9IHN5c3RlbUpTUHJvdG90eXBlLmdldFJlZ2lzdGVyO1xuICBzeXN0ZW1KU1Byb3RvdHlwZS5nZXRSZWdpc3RlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGFzdFJlZ2lzdGVyID0gZ2V0UmVnaXN0ZXIuY2FsbCh0aGlzKTtcbiAgICBpZiAobGFzdFJlZ2lzdGVyKVxuICAgICAgcmV0dXJuIGxhc3RSZWdpc3RlcjtcblxuICAgIC8vIG5vIHJlZ2lzdHJhdGlvbiAtPiBhdHRlbXB0IGEgZ2xvYmFsIGRldGVjdGlvbiBhcyBkaWZmZXJlbmNlIGZyb20gc25hcHNob3RcbiAgICAvLyB3aGVuIG11bHRpcGxlIGdsb2JhbHMsIHdlIHRha2UgdGhlIGdsb2JhbCB2YWx1ZSB0byBiZSB0aGUgbGFzdCBkZWZpbmVkIG5ldyBnbG9iYWwgb2JqZWN0IHByb3BlcnR5XG4gICAgLy8gZm9yIHBlcmZvcm1hbmNlLCB0aGlzIHdpbGwgbm90IHN1cHBvcnQgbXVsdGktdmVyc2lvbiAvIGdsb2JhbCBjb2xsaXNpb25zIGFzIHByZXZpb3VzIFN5c3RlbUpTIHZlcnNpb25zIGRpZFxuICAgIC8vIG5vdGUgaW4gRWRnZSwgZGVsZXRpbmcgYW5kIHJlLWFkZGluZyBhIGdsb2JhbCBkb2VzIG5vdCBjaGFuZ2UgaXRzIG9yZGVyaW5nXG4gICAgdmFyIGdsb2JhbFByb3AgPSBnZXRHbG9iYWxQcm9wKHRoaXMuZmlyc3RHbG9iYWxQcm9wKTtcbiAgICBpZiAoIWdsb2JhbFByb3ApXG4gICAgICByZXR1cm4gZW1wdHlJbnN0YW50aWF0aW9uO1xuXG4gICAgdmFyIGdsb2JhbEV4cG9ydDtcbiAgICB0cnkge1xuICAgICAgZ2xvYmFsRXhwb3J0ID0gZ2xvYmFsW2dsb2JhbFByb3BdO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGVtcHR5SW5zdGFudGlhdGlvbjtcbiAgICB9XG5cbiAgICByZXR1cm4gW1tdLCBmdW5jdGlvbiAoX2V4cG9ydCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXhlY3V0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF9leHBvcnQoZ2xvYmFsRXhwb3J0KTtcbiAgICAgICAgICBfZXhwb3J0KHsgZGVmYXVsdDogZ2xvYmFsRXhwb3J0LCBfX3VzZURlZmF1bHQ6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfV07XG4gIH07XG5cbiAgdmFyIGlzSUUxMSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudCcpICE9PSAtMTtcblxuICBmdW5jdGlvbiBzaG91bGRTa2lwUHJvcGVydHkocCkge1xuICAgIHJldHVybiAhZ2xvYmFsLmhhc093blByb3BlcnR5KHApXG4gICAgICB8fCAhaXNOYU4ocCkgJiYgcCA8IGdsb2JhbC5sZW5ndGhcbiAgICAgIHx8IGlzSUUxMSAmJiBnbG9iYWxbcF0gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsW3BdLnBhcmVudCA9PT0gd2luZG93O1xuICB9XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogZ2xvYmFsKTtcbiIsIi8qXG4gKiBMb2FkcyBKU09OLCBDU1MsIFdhc20gbW9kdWxlIHR5cGVzIGJhc2VkIG9uIGZpbGUgZXh0ZW5zaW9uXG4gKiBmaWx0ZXJzIGFuZCBjb250ZW50IHR5cGUgdmVyaWZpY2F0aW9uc1xuICovXG4oZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIHZhciBzeXN0ZW1KU1Byb3RvdHlwZSA9IGdsb2JhbC5TeXN0ZW0uY29uc3RydWN0b3IucHJvdG90eXBlO1xuXG4gIHZhciBtb2R1bGVUeXBlc1JlZ0V4ID0gL15bXiM/XStcXC4oY3NzfGh0bWx8anNvbnx3YXNtKShbPyNdLiopPyQvO1xuICBzeXN0ZW1KU1Byb3RvdHlwZS5zaG91bGRGZXRjaCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICByZXR1cm4gbW9kdWxlVHlwZXNSZWdFeC50ZXN0KHVybCk7XG4gIH07XG5cbiAgdmFyIGpzb25Db250ZW50VHlwZSA9IC9eYXBwbGljYXRpb25cXC9qc29uKDt8JCkvO1xuICB2YXIgY3NzQ29udGVudFR5cGUgPSAvXnRleHRcXC9jc3MoO3wkKS87XG4gIHZhciB3YXNtQ29udGVudFR5cGUgPSAvXmFwcGxpY2F0aW9uXFwvd2FzbSg7fCQpLztcblxuICB2YXIgZmV0Y2ggPSBzeXN0ZW1KU1Byb3RvdHlwZS5mZXRjaDtcbiAgc3lzdGVtSlNQcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwgb3B0aW9ucylcbiAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICBpZiAoIXJlcy5vaylcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIHZhciBjb250ZW50VHlwZSA9IHJlcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJyk7XG4gICAgICBpZiAoanNvbkNvbnRlbnRUeXBlLnRlc3QoY29udGVudFR5cGUpKVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoanNvbikge1xuICAgICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UobmV3IEJsb2IoW1xuICAgICAgICAgICAgJ1N5c3RlbS5yZWdpc3RlcihbXSxmdW5jdGlvbihlKXtyZXR1cm57ZXhlY3V0ZTpmdW5jdGlvbigpe2UoXCJkZWZhdWx0XCIsJyArIEpTT04uc3RyaW5naWZ5KGpzb24pICsgJyl9fX0pJ1xuICAgICAgICAgIF0sIHtcbiAgICAgICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0J1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgICBpZiAoY3NzQ29udGVudFR5cGUudGVzdChjb250ZW50VHlwZSkpXG4gICAgICAgIHJldHVybiByZXMudGV4dCgpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKG5ldyBCbG9iKFtcbiAgICAgICAgICAgICdTeXN0ZW0ucmVnaXN0ZXIoW10sZnVuY3Rpb24oZSl7cmV0dXJue2V4ZWN1dGU6ZnVuY3Rpb24oKXt2YXIgcz1uZXcgQ1NTU3R5bGVTaGVldCgpO3MucmVwbGFjZVN5bmMoJyArIEpTT04uc3RyaW5naWZ5KHNvdXJjZSkgKyAnKTtlKFwiZGVmYXVsdFwiLHMpfX19KSdcbiAgICAgICAgICBdLCB7XG4gICAgICAgICAgICB0eXBlOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCdcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgaWYgKHdhc21Db250ZW50VHlwZS50ZXN0KGNvbnRlbnRUeXBlKSlcbiAgICAgICAgcmV0dXJuIChXZWJBc3NlbWJseS5jb21waWxlU3RyZWFtaW5nID8gV2ViQXNzZW1ibHkuY29tcGlsZVN0cmVhbWluZyhyZXMpIDogcmVzLmFycmF5QnVmZmVyKCkudGhlbihXZWJBc3NlbWJseS5jb21waWxlKSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICAgICAgIGlmICghZ2xvYmFsLlN5c3RlbS53YXNtTW9kdWxlcylcbiAgICAgICAgICAgIGdsb2JhbC5TeXN0ZW0ud2FzbU1vZHVsZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGdsb2JhbC5TeXN0ZW0ud2FzbU1vZHVsZXNbdXJsXSA9IG1vZHVsZTtcbiAgICAgICAgICAvLyB3ZSBjYW4gb25seSBzZXQgaW1wb3J0cyBpZiBzdXBwb3J0ZWQgKGVnIGVhcmx5IFNhZmFyaSBkb2VzbnQgc3VwcG9ydClcbiAgICAgICAgICB2YXIgZGVwcyA9IFtdO1xuICAgICAgICAgIHZhciBzZXR0ZXJTb3VyY2VzID0gW107XG4gICAgICAgICAgaWYgKFdlYkFzc2VtYmx5Lk1vZHVsZS5pbXBvcnRzKVxuICAgICAgICAgICAgV2ViQXNzZW1ibHkuTW9kdWxlLmltcG9ydHMobW9kdWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChpbXB0KSB7XG4gICAgICAgICAgICAgIHZhciBrZXkgPSBKU09OLnN0cmluZ2lmeShpbXB0Lm1vZHVsZSk7XG4gICAgICAgICAgICAgIGlmIChkZXBzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBkZXBzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICBzZXR0ZXJTb3VyY2VzLnB1c2goJ2Z1bmN0aW9uKG0pe2lbJyArIGtleSArICddPW19Jyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UobmV3IEJsb2IoW1xuICAgICAgICAgICAgJ1N5c3RlbS5yZWdpc3RlcihbJyArIGRlcHMuam9pbignLCcpICsgJ10sZnVuY3Rpb24oZSl7dmFyIGk9e307cmV0dXJue3NldHRlcnM6WycgKyBzZXR0ZXJTb3VyY2VzLmpvaW4oJywnKSArXG4gICAgICAgICAgICAnXSxleGVjdXRlOmZ1bmN0aW9uKCl7cmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKFN5c3RlbS53YXNtTW9kdWxlc1snICsgSlNPTi5zdHJpbmdpZnkodXJsKSArXG4gICAgICAgICAgICAnXSxpKS50aGVuKGZ1bmN0aW9uKG0pe2UobS5leHBvcnRzKX0pfX19KSdcbiAgICAgICAgICBdLCB7XG4gICAgICAgICAgICB0eXBlOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCdcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcbiAgfTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiBnbG9iYWwpO1xuIiwiLypcbiAqIFN5c3RlbUpTIG5hbWVkIHJlZ2lzdGVyIGV4dGVuc2lvblxuICogU3VwcG9ydHMgU3lzdGVtLnJlZ2lzdGVyKCduYW1lJywgWy4uZGVwcy4uXSwgZnVuY3Rpb24gKF9leHBvcnQsIF9jb250ZXh0KSB7IC4uLiB9KVxuICogXG4gKiBOYW1lcyBhcmUgd3JpdHRlbiB0byB0aGUgcmVnaXN0cnkgYXMtaXNcbiAqIFN5c3RlbS5yZWdpc3RlcigneCcsIC4uLikgY2FuIGJlIGltcG9ydGVkIGFzIFN5c3RlbS5pbXBvcnQoJ3gnKVxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCkge1xuICB2YXIgU3lzdGVtID0gZ2xvYmFsLlN5c3RlbTtcbiAgc2V0UmVnaXN0ZXJSZWdpc3RyeShTeXN0ZW0pO1xuICB2YXIgc3lzdGVtSlNQcm90b3R5cGUgPSBTeXN0ZW0uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB2YXIgY29uc3RydWN0b3IgPSBTeXN0ZW0uY29uc3RydWN0b3I7XG4gIHZhciBTeXN0ZW1KUyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdHJ1Y3Rvci5jYWxsKHRoaXMpO1xuICAgIHNldFJlZ2lzdGVyUmVnaXN0cnkodGhpcyk7XG4gIH07XG4gIFN5c3RlbUpTLnByb3RvdHlwZSA9IHN5c3RlbUpTUHJvdG90eXBlO1xuICBTeXN0ZW0uY29uc3RydWN0b3IgPSBTeXN0ZW1KUztcblxuICB2YXIgZmlyc3ROYW1lZERlZmluZTtcblxuICBmdW5jdGlvbiBzZXRSZWdpc3RlclJlZ2lzdHJ5KHN5c3RlbUluc3RhbmNlKSB7XG4gICAgc3lzdGVtSW5zdGFuY2UucmVnaXN0ZXJSZWdpc3RyeSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIH1cblxuICB2YXIgcmVnaXN0ZXIgPSBzeXN0ZW1KU1Byb3RvdHlwZS5yZWdpc3RlcjtcbiAgc3lzdGVtSlNQcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAobmFtZSwgZGVwcywgZGVjbGFyZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpXG4gICAgICByZXR1cm4gcmVnaXN0ZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB2YXIgZGVmaW5lID0gW2RlcHMsIGRlY2xhcmVdO1xuICAgIHRoaXMucmVnaXN0ZXJSZWdpc3RyeVtuYW1lXSA9IGRlZmluZTtcbiAgICBpZiAoIWZpcnN0TmFtZWREZWZpbmUpIHtcbiAgICAgIGZpcnN0TmFtZWREZWZpbmUgPSBkZWZpbmU7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZmlyc3ROYW1lZERlZmluZSA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlZ2lzdGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgdmFyIHJlc29sdmUgPSBzeXN0ZW1KU1Byb3RvdHlwZS5yZXNvbHZlO1xuICBzeXN0ZW1KU1Byb3RvdHlwZS5yZXNvbHZlID0gZnVuY3Rpb24gKGlkLCBwYXJlbnRVUkwpIHtcbiAgICB0cnkge1xuICAgICAgLy8gUHJlZmVyIGltcG9ydCBtYXAgKG9yIG90aGVyIGV4aXN0aW5nKSByZXNvbHV0aW9uIG92ZXIgdGhlIHJlZ2lzdGVyUmVnaXN0cnlcbiAgICAgIHJldHVybiByZXNvbHZlLmNhbGwodGhpcywgaWQsIHBhcmVudFVSTCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoaWQgaW4gdGhpcy5yZWdpc3RlclJlZ2lzdHJ5KSB7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICAgIH1cbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGluc3RhbnRpYXRlID0gc3lzdGVtSlNQcm90b3R5cGUuaW5zdGFudGlhdGU7XG4gIHN5c3RlbUpTUHJvdG90eXBlLmluc3RhbnRpYXRlID0gZnVuY3Rpb24gKHVybCwgZmlyc3RQYXJlbnRVcmwpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5yZWdpc3RlclJlZ2lzdHJ5W3VybF07XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgdGhpcy5yZWdpc3RlclJlZ2lzdHJ5W3VybF0gPSBudWxsO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGluc3RhbnRpYXRlLmNhbGwodGhpcywgdXJsLCBmaXJzdFBhcmVudFVybCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBnZXRSZWdpc3RlciA9IHN5c3RlbUpTUHJvdG90eXBlLmdldFJlZ2lzdGVyO1xuICBzeXN0ZW1KU1Byb3RvdHlwZS5nZXRSZWdpc3RlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBDYWxsaW5nIGdldFJlZ2lzdGVyKCkgYmVjYXVzZSBvdGhlciBleHRyYXMgbmVlZCB0byBrbm93IGl0IHdhcyBjYWxsZWQgc28gdGhleSBjYW4gcGVyZm9ybSBzaWRlIGVmZmVjdHNcbiAgICB2YXIgcmVnaXN0ZXIgPSBnZXRSZWdpc3Rlci5jYWxsKHRoaXMpO1xuXG4gICAgdmFyIHJlc3VsdCA9IGZpcnN0TmFtZWREZWZpbmUgfHwgcmVnaXN0ZXI7XG4gICAgZmlyc3ROYW1lZERlZmluZSA9IG51bGw7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IGdsb2JhbCk7XG4iXSwibmFtZXMiOlsidG9TdHJpbmdUYWciLCJzeXN0ZW1KU1Byb3RvdHlwZSIsImdsb2JhbCJdLCJtYXBwaW5ncyI6Ijs7O0VBQU8sU0FBUyxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtFQUNyQyxFQUdJLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxJQUFJLG1CQUFtQixHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsdUJBQXVCLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQztFQUN2Rzs7RUNITyxJQUFJLFNBQVMsR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUM7RUFDOUMsSUFBSSxPQUFPLEdBQUcsT0FBTyxJQUFJLEtBQUssV0FBVyxDQUFDO0VBQzFDLElBQUksV0FBVyxHQUFHLE9BQU8sUUFBUSxLQUFLLFdBQVcsQ0FBQztBQUN6RDtFQUNBLElBQUksU0FBUyxHQUFHLE9BQU8sR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDO0FBTXhDO0VBQ08sSUFBSSxPQUFPLENBQUM7QUFDbkI7RUFDQSxJQUFJLFdBQVcsRUFBRTtFQUNqQixFQUFFLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7RUFDcEQsRUFBRSxJQUFJLE1BQU07RUFDWixJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO0VBQzFCLENBQUM7QUFDRDtFQUNBLElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxRQUFRLEtBQUssV0FBVyxFQUFFO0VBQ2pELEVBQUUsT0FBTyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN0RCxFQUFFLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDOUMsRUFBRSxJQUFJLFlBQVksS0FBSyxDQUFDLENBQUM7RUFDekIsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQ2pELENBQUM7QUFPRDtFQUNBLElBQUksY0FBYyxHQUFHLEtBQUssQ0FBQztFQUNwQixTQUFTLHNCQUFzQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7RUFDM0QsRUFBRSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQ2pDLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0VBQ2pEO0VBQ0EsRUFBRSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtFQUM5QyxJQUFJLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7RUFDbkUsR0FBRztFQUNIO0VBQ0EsT0FBTyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEtBQUssTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0VBQ3hJLE1BQU0sTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLE1BQU0sTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0VBQzlDLE1BQU0sTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtFQUN6QixJQUFJLElBQUksY0FBYyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDeEU7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBLElBQUksSUFBSSxRQUFRLENBQUM7RUFDakIsSUFBSSxJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtFQUN0RDtFQUNBLE1BQU0sSUFBSSxjQUFjLEtBQUssT0FBTyxFQUFFO0VBQ3RDLFFBQVEsUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztFQUM5RCxRQUFRLFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDN0QsT0FBTztFQUNQLFdBQVc7RUFDWCxRQUFRLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3RDLE9BQU87RUFDUCxLQUFLO0VBQ0wsU0FBUztFQUNUO0VBQ0EsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztFQUNyRyxLQUFLO0FBQ0w7RUFDQSxJQUFJLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUc7RUFDekIsTUFBTSxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakY7RUFDQTtFQUNBO0VBQ0E7RUFDQSxJQUFJLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQzlFO0VBQ0EsSUFBSSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7RUFDcEIsSUFBSSxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztFQUMxQixJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0VBQy9DO0VBQ0EsTUFBTSxJQUFJLFlBQVksS0FBSyxDQUFDLENBQUMsRUFBRTtFQUMvQixRQUFRLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtFQUNsQyxVQUFVLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDNUQsVUFBVSxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDNUIsU0FBUztFQUNULE9BQU87QUFDUDtFQUNBO0VBQ0EsV0FBVyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7RUFDckM7RUFDQSxRQUFRLElBQUksU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7RUFDbEcsVUFBVSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7RUFDdkIsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ2pCLFNBQVM7RUFDVDtFQUNBLGFBQWEsSUFBSSxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxNQUFNLEVBQUU7RUFDekUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ2pCLFNBQVM7RUFDVCxhQUFhO0VBQ2I7RUFDQSxVQUFVLFlBQVksR0FBRyxDQUFDLENBQUM7RUFDM0IsU0FBUztFQUNULE9BQU87RUFDUDtFQUNBLFdBQVc7RUFDWCxRQUFRLFlBQVksR0FBRyxDQUFDLENBQUM7RUFDekIsT0FBTztFQUNQLEtBQUs7RUFDTDtFQUNBLElBQUksSUFBSSxZQUFZLEtBQUssQ0FBQyxDQUFDO0VBQzNCLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7RUFDakQsSUFBSSxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDcEYsR0FBRztFQUNILENBQUM7QUFDRDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0E7RUFDTyxTQUFTLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFO0VBQy9DLEVBQUUsT0FBTyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEtBQUssTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsc0JBQXNCLENBQUMsSUFBSSxHQUFHLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0VBQy9JLENBQUM7QUFDRDtFQUNBLFNBQVMseUJBQXlCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRTtFQUMxRixFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksUUFBUSxFQUFFO0VBQzFCLElBQUksSUFBSSxXQUFXLEdBQUcsc0JBQXNCLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUM5RCxJQUFJLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUMxQjtFQUNBLElBQUksSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO0VBQy9CLE1BQU0sU0FBUztFQUNmLElBQUksSUFBSSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLHNCQUFzQixDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7RUFDckcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO0VBQ2pCLE1BR1EsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLGdDQUFnQyxDQUFDLENBQUM7RUFDdEUsS0FBSztFQUNMO0VBQ0EsTUFBTSxXQUFXLENBQUMsV0FBVyxDQUFDLEdBQUcsTUFBTSxDQUFDO0VBQ3hDLEdBQUc7RUFDSCxDQUFDO0FBQ0Q7RUFDTyxTQUFTLDBCQUEwQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFO0VBQ25FLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTztFQUNsQixJQUFJLHlCQUF5QixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ25GO0VBQ0EsRUFBRSxJQUFJLENBQUMsQ0FBQztFQUNSLEVBQUUsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUU7RUFDL0IsSUFBSSxJQUFJLGFBQWEsR0FBRyxVQUFVLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0VBQy9DLElBQUkseUJBQXlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztFQUNuSixHQUFHO0FBQ0g7RUFDQSxFQUFFLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRTtFQUMvQixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDL0Q7RUFDQSxFQUFFLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRTtFQUNoQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDakUsQ0FBQztBQUNEO0VBQ0EsU0FBUyxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtFQUNuQyxFQUFFLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQztFQUNwQixJQUFJLE9BQU8sSUFBSSxDQUFDO0VBQ2hCLEVBQUUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztFQUM3QixFQUFFLEdBQUc7RUFDTCxJQUFJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUM5QyxJQUFJLElBQUksT0FBTyxJQUFJLFFBQVE7RUFDM0IsTUFBTSxPQUFPLE9BQU8sQ0FBQztFQUNyQixHQUFHLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0VBQ25FLENBQUM7QUFDRDtFQUNBLFNBQVMsYUFBYSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUU7RUFDdEMsRUFBRSxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0VBQ3ZDLEVBQUUsSUFBSSxPQUFPLEVBQUU7RUFDZixJQUFJLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztFQUNoQyxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksRUFBRSxPQUFPO0VBQzdCLElBQUksSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO0VBQ25FLE1BR1EsYUFBYSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLDRCQUE0QixDQUFDLENBQUM7RUFDeEUsS0FBSztFQUNMO0VBQ0EsTUFBTSxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUM1QyxHQUFHO0VBQ0gsQ0FBQztBQUNEO0VBQ0EsU0FBUyxhQUFhLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFO0VBQ2xELEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUErRCxpQkFBaUIsR0FBRyxHQUFHLEdBQUcsc0JBQXNCLEdBQUcsTUFBTSxHQUFHLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0VBQ3hLLENBQUM7QUFDRDtFQUNPLFNBQVMsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUU7RUFDekUsRUFBRSxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO0VBQ2hDLEVBQUUsSUFBSSxRQUFRLEdBQUcsU0FBUyxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7RUFDMUQsRUFBRSxPQUFPLFFBQVEsRUFBRTtFQUNuQixJQUFJLElBQUksaUJBQWlCLEdBQUcsYUFBYSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztFQUM3RSxJQUFJLElBQUksaUJBQWlCO0VBQ3pCLE1BQU0sT0FBTyxpQkFBaUIsQ0FBQztFQUMvQixJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0VBQzlFLEdBQUc7RUFDSCxFQUFFLE9BQU8sYUFBYSxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxlQUFlLENBQUM7RUFDckg7O0VDNU1BO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBSUE7RUFDQSxJQUFJQSxhQUFXLEdBQUcsU0FBUyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUM7RUFDbEQsSUFBSSxRQUFRLEdBQUcsU0FBUyxHQUFHLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUMxQztFQUNBLFNBQVMsUUFBUSxJQUFJO0VBQ3JCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztFQUN0QixDQUFDO0FBQ0Q7RUFDQSxJQUFJQyxtQkFBaUIsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO0FBQzNDO0FBQ0FBLHFCQUFpQixDQUFDLE1BQU0sR0FBRyxVQUFVLEVBQUUsRUFBRSxTQUFTLEVBQUU7RUFDcEQsRUFBRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7RUFDcEIsRUFBRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO0VBQ2hELEdBQUcsSUFBSSxDQUFDLFdBQVc7RUFDbkIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0VBQ3pDLEdBQUcsQ0FBQztFQUNKLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO0VBQ3RCLElBQUksSUFBSSxJQUFJLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztFQUMzQyxJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUMsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQ2hELEdBQUcsQ0FBQyxDQUFDO0VBQ0wsQ0FBQyxDQUFDO0FBQ0Y7RUFDQTtBQUNBQSxxQkFBaUIsQ0FBQyxhQUFhLEdBQUcsVUFBVSxRQUFRLEVBQUU7RUFDdEQsRUFBRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7RUFDcEIsRUFBRSxPQUFPO0VBQ1QsSUFBSSxHQUFHLEVBQUUsUUFBUTtFQUNqQixJQUFJLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxTQUFTLEVBQUU7RUFDdEMsTUFBTSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsU0FBUyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7RUFDeEUsS0FBSztFQUNMLEdBQUcsQ0FBQztFQUNKLENBQUMsQ0FBQztBQUNGO0VBQ0E7QUFFRUEscUJBQWlCLENBQUMsTUFBTSxHQUFHLFlBQVksRUFBRSxDQUFDO0VBQzVDLFNBQVMsUUFBUSxFQUFFLElBQUksRUFBRTtFQUN6QixFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztFQUNqQixDQUFDO0VBQ0QsU0FBUyxhQUFhLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFO0VBQ3hELEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztFQUM3RSxFQUFFLElBQUksR0FBRztFQUNULElBQUksTUFBTSxHQUFHLENBQUM7RUFDZCxDQUFDO0FBQ0Q7RUFDQSxJQUFJLFlBQVksQ0FBQztBQUNqQkEscUJBQWlCLENBQUMsUUFBUSxHQUFHLFVBQVUsSUFBSSxFQUFFLE9BQU8sRUFBRTtFQUN0RCxFQUFFLFlBQVksR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztFQUNqQyxDQUFDLENBQUM7QUFDRjtFQUNBO0VBQ0E7RUFDQTtBQUNBQSxxQkFBaUIsQ0FBQyxXQUFXLEdBQUcsWUFBWTtFQUM1QyxFQUFFLElBQUksYUFBYSxHQUFHLFlBQVksQ0FBQztFQUNuQyxFQUFFLFlBQVksR0FBRyxTQUFTLENBQUM7RUFDM0IsRUFBRSxPQUFPLGFBQWEsQ0FBQztFQUN2QixDQUFDLENBQUM7QUFDRjtFQUNPLFNBQVMsZUFBZSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFO0VBQzdELEVBQUUsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ2xDLEVBQUUsSUFBSSxJQUFJO0VBQ1YsSUFBSSxPQUFPLElBQUksQ0FBQztBQUNoQjtFQUNBLEVBQUUsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDO0VBQzNCLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUMvQixFQUFFLElBQUlELGFBQVc7RUFDakIsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRUEsYUFBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7RUFDaEU7RUFDQSxFQUFFLElBQUksa0JBQWtCLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRTtFQUM1QyxHQUFHLElBQUksQ0FBQyxZQUFZO0VBQ3BCLElBQUksT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQztFQUNsRCxHQUFHLENBQUM7RUFDSixHQUFHLElBQUksQ0FBQyxVQUFVLFlBQVksRUFBRTtFQUNoQyxJQUFJLElBQUksQ0FBQyxZQUFZO0VBQ3JCLE1BQU0sTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBdUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7RUFDM0csSUFBSSxTQUFTLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0VBQ25DO0VBQ0EsTUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztFQUNwQixNQUFNLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztFQUMxQixNQUFNLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO0VBQ3BDLFFBQVEsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFO0VBQ2pELFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztFQUMzQixVQUFVLE9BQU8sR0FBRyxJQUFJLENBQUM7RUFDekIsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsUUFBUSxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtFQUM1QixVQUFVLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUM5QixVQUFVLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBRTtFQUM3QyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7RUFDMUIsWUFBWSxPQUFPLEdBQUcsSUFBSSxDQUFDO0VBQzNCLFdBQVc7RUFDWCxTQUFTO0FBQ1Q7RUFDQSxRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtFQUM3QixVQUFVLEVBQUUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztFQUMxQyxTQUFTO0VBQ1QsT0FBTztFQUNQLE1BQU0sSUFBSSxPQUFPO0VBQ2pCLFFBQVEsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7RUFDekQsVUFBVSxJQUFJLE1BQU0sR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDMUMsVUFBVSxJQUFJLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDakMsU0FBUztFQUNULE1BQU0sT0FBTyxLQUFLLENBQUM7RUFDbkIsS0FBSztFQUNMLElBQUksSUFBSSxRQUFRLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsR0FBRztFQUMzRSxNQUFNLE1BQU0sRUFBRSxVQUFVLFFBQVEsRUFBRTtFQUNsQyxRQUFRLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7RUFDM0MsT0FBTztFQUNQLE1BQU0sSUFBSSxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO0VBQ3BDLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQztFQUNuQixJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLE9BQU8sSUFBSSxZQUFZLEVBQUUsQ0FBQztFQUNoRCxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztFQUNyRCxHQUFHLEVBQUUsVUFBVSxHQUFHLEVBQUU7RUFDcEIsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztFQUNsQixJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO0VBQ2xCLElBQXdDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztFQUMvRSxJQUFJLE1BQU0sR0FBRyxDQUFDO0VBQ2QsR0FBRyxDQUFDLENBQUM7QUFDTDtFQUNBLEVBQUUsSUFBSSxXQUFXLEdBQUcsa0JBQWtCO0VBQ3RDLEdBQUcsSUFBSSxDQUFDLFVBQVUsYUFBYSxFQUFFO0VBQ2pDLElBQUksT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxFQUFFO0VBQzlELE1BQU0sSUFBSSxNQUFNLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3ZDLE1BQU0sT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0VBQ3JELE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxFQUFFO0VBQzdCLFFBQVEsSUFBSSxPQUFPLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7RUFDekQ7RUFDQSxRQUFRLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ3pDLFNBQVMsSUFBSSxDQUFDLFlBQVk7RUFDMUIsVUFBVSxJQUFJLE1BQU0sRUFBRTtFQUN0QixZQUFZLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ25DO0VBQ0E7RUFDQSxZQUFZLElBQUksT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0VBQ3ZDLGNBQWMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNoQyxXQUFXO0VBQ1gsVUFBVSxPQUFPLE9BQU8sQ0FBQztFQUN6QixTQUFTLENBQUMsQ0FBQztFQUNYLE9BQU8sQ0FBQyxDQUFDO0VBQ1QsS0FBSyxDQUFDLENBQUM7RUFDUCxLQUFLLElBQUksQ0FBQyxVQUFVLFFBQVEsRUFBRTtFQUM5QixNQUFNLElBQUksQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDO0VBQ3hCLEtBQUssQ0FBQyxDQUFDO0VBQ1AsR0FBRyxDQUFDLENBQUM7QUFHTDtFQUNBO0VBQ0EsRUFBRSxPQUFPLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUc7RUFDdkMsSUFBSSxFQUFFLEVBQUUsRUFBRTtFQUNWO0VBQ0E7RUFDQSxJQUFJLENBQUMsRUFBRSxlQUFlO0VBQ3RCO0VBQ0EsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUNUO0VBQ0E7RUFDQSxJQUFJLENBQUMsRUFBRSxrQkFBa0I7RUFDekI7RUFDQSxJQUFJLENBQUMsRUFBRSxXQUFXO0VBQ2xCO0VBQ0EsSUFBSSxDQUFDLEVBQUUsS0FBSztBQUNaO0VBQ0E7RUFDQTtFQUNBLElBQUksQ0FBQyxFQUFFLFNBQVM7RUFDaEI7RUFDQSxJQUFJLENBQUMsRUFBRSxTQUFTO0FBQ2hCO0VBQ0E7RUFDQTtFQUNBLElBQUksRUFBRSxFQUFFLFNBQVM7RUFDakI7RUFDQSxJQUFJLENBQUMsRUFBRSxTQUFTO0FBQ2hCO0VBQ0E7QUFDQTtFQUNBO0VBQ0EsSUFBSSxDQUFDLEVBQUUsU0FBUztBQUNoQjtFQUNBO0VBQ0EsSUFBSSxDQUFDLEVBQUUsU0FBUztFQUNoQixHQUFHLENBQUM7RUFDSixDQUFDO0FBQ0Q7RUFDQSxTQUFTLGNBQWMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7RUFDdkQsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtFQUN4QixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO0VBQzNCO0VBQ0EsSUFBSSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUNsQyxLQUFLLElBQUksQ0FBQyxZQUFZO0VBQ3RCLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSTtFQUN0QyxRQUFRLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO0VBQ3hCLE1BQU0sT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFO0VBQ25ELFFBQVEsT0FBTyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7RUFDM0QsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNWLEtBQUssQ0FBQztFQUNOLEtBQUssS0FBSyxDQUFDLFVBQVUsR0FBRyxFQUFFO0VBQzFCLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRTtFQUNqQixRQUFRLE1BQU0sR0FBRyxDQUFDO0VBQ2xCLE1BQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7RUFDcEIsTUFBMEMsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0VBQ2xGLE1BQU0sTUFBTSxHQUFHLENBQUM7RUFDaEIsS0FBSyxDQUFDLENBQUM7RUFDUCxHQUFHO0VBQ0gsQ0FBQztBQUNEO0VBQ0EsU0FBUyxZQUFZLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtFQUNyQyxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO0VBQ3hELEdBQUcsSUFBSSxDQUFDLFlBQVk7RUFDcEIsSUFBSSxPQUFPLGFBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0VBQzNDLEdBQUcsQ0FBQztFQUNKLEdBQUcsSUFBSSxDQUFDLFlBQVk7RUFDcEIsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDbEIsR0FBRyxDQUFDLENBQUM7RUFDTCxDQUFDO0FBQ0Q7RUFDQTtFQUNBLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3JEO0VBQ0E7RUFDQTtFQUNBLElBQUksdUJBQXVCLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLElBQUksVUFBVSxRQUFRLEVBQUU7RUFDL0UsSUFBSSxJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVUsRUFBRTtFQUN4QyxRQUFRLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7RUFDN0MsS0FBSztFQUNMLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUM7RUFDMUMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJO0VBQ3BCLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7RUFDeEQsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO0VBQy9ELEtBQUssQ0FBQztFQUNOLEVBQUM7QUFDRDtFQUNBO0VBQ0E7RUFDQSxTQUFTLGFBQWEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtFQUM1QyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtFQUNyQixJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztFQUNsQixHQUFHO0VBQ0gsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUN2QjtFQUNBLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7RUFDZixJQUFJLElBQUksSUFBSSxDQUFDLEVBQUU7RUFDZixNQUFNLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQztFQUNwQixJQUFJLElBQUksSUFBSSxDQUFDLENBQUM7RUFDZCxNQUFNLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztFQUNwQixJQUFJLE9BQU87RUFDWCxHQUFHO0FBQ0g7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBLEVBQUUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUN0QixFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2hCO0VBQ0E7RUFDQSxFQUFFLElBQUksZUFBZSxDQUFDO0VBQ3RCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUU7RUFDcEMsSUFBSSxJQUFJO0VBQ1IsTUFBTSxJQUFJLGNBQWMsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztFQUNoRSxNQUFNLElBQUksY0FBYztFQUN4QixRQUFRLENBQUMsZUFBZSxHQUFHLGVBQWUsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0VBQ3ZFLEtBQUs7RUFDTCxJQUFJLE9BQU8sR0FBRyxFQUFFO0VBQ2hCLE1BQU0sSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7RUFDcEIsTUFBMEMsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0VBQ2xGLE1BQU0sTUFBTSxHQUFHLENBQUM7RUFDaEIsS0FBSztFQUNMLEdBQUcsQ0FBQyxDQUFDO0VBQ0wsRUFBRSxJQUFJLGVBQWU7RUFDckIsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUcsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFdBQVc7RUFDdkcsUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztFQUN0QixLQUFLLENBQUMsQ0FBQztBQUNQO0VBQ0EsRUFBRSxJQUFJLFdBQVcsR0FBRyxNQUFNLEVBQUUsQ0FBQztFQUM3QixFQUFFLElBQUksV0FBVyxFQUFFO0VBQ25CLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFHLHVCQUF1QixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsV0FBVztFQUN6RSxRQUFRLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0VBQ3RCLEtBQUssQ0FBQyxDQUFDO0VBQ1AsR0FBRztBQUNIO0VBQ0EsRUFBRSxTQUFTLE1BQU0sSUFBSTtFQUNyQixJQUFJLElBQUk7RUFDUixNQUFNLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7RUFDL0MsTUFBTSxJQUFJLFdBQVcsRUFBRTtFQUN2QixRQUFRLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVk7RUFDbkQsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDMUIsVUFBVSxJQUFJLENBQUMsS0FBNkIsRUFBRSxhQUFhLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDdEYsU0FBUyxFQUFFLFVBQVUsR0FBRyxFQUFFO0VBQzFCLFVBQVUsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7RUFDeEIsVUFBVSxJQUFJLENBQUMsS0FBNkIsRUFBRSxhQUFhLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDckYsVUFBVSxNQUFNLEdBQUcsQ0FBQztFQUNwQixTQUFTLENBQUMsQ0FBQztFQUNYLFFBQVEsT0FBTyxXQUFXLENBQUM7RUFDM0IsT0FBTztFQUNQO0VBQ0EsTUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDdEIsTUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO0VBQ2xDLEtBQUs7RUFDTCxJQUFJLE9BQU8sR0FBRyxFQUFFO0VBQ2hCLE1BQU0sSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7RUFDcEIsTUFBTSxNQUFNLEdBQUcsQ0FBQztFQUNoQixLQUFLO0VBQ0wsWUFBWTtFQUNaLE1BQTBDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDckYsS0FBSztFQUNMLEdBQUc7RUFDSCxDQUFDO0FBQ0Q7QUFDQUUsV0FBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLFFBQVEsRUFBRTs7RUNuUTlCLE1BQU0sU0FBUyxHQUFHLENBQUMsU0FBUyxZQUFZLEdBQUE7RUFDcEMsSUFBQSxJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtFQUNoQyxRQUFBLE9BQU8sT0FBTyxDQUFDO0VBQ2xCLEtBQUE7RUFBTSxTQUFBLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxFQUFFO0VBQ3JDLFFBQUEsT0FBTyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUM7RUFDOUIsS0FBQTtFQUNMLENBQUMsR0FBRyxDQUFDO0VBRUUsTUFBTSxZQUFZLElBQUksT0FBTyxTQUFTLEtBQUssV0FBVyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFhLENBQUM7RUFFaEcsTUFBTSxpQkFBaUIsR0FBc0IsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTOztFQ25GdEYsaUJBQWlCLENBQUMsV0FBVyxHQUFHLFVBQVMsR0FBVyxFQUFFLGNBQXNCLEVBQUE7TUFDeEUsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFBLHNCQUFBLEVBQXlCLEdBQUcsQ0FBUyxNQUFBLEVBQUEsY0FBYyxDQUFFLENBQUEsQ0FBQyxDQUFDO0VBQzNFLENBQUM7O0VDQUQsSUFBSSxXQUFXLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUM7QUFDdEU7QUFDQUQscUJBQWlCLENBQUMsR0FBRyxHQUFHLFVBQVUsRUFBRSxFQUFFO0VBQ3RDLEVBQUUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ2hDLEVBQUUsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO0VBQzFDLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtFQUNmLE1BQU0sT0FBTyxJQUFJLENBQUM7RUFDbEIsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDbEIsR0FBRztFQUNILENBQUMsQ0FBQztBQUNGO0FBQ0FBLHFCQUFpQixDQUFDLEdBQUcsR0FBRyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUU7RUFDOUMsRUFBc0M7RUFDdEMsSUFBSSxJQUFJO0VBQ1I7RUFDQSxNQUFNLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ2xCLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRTtFQUNsQixNQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxvREFBb0QsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN6RyxLQUFLO0VBQ0wsR0FBRztFQUNILEVBQUUsSUFBSSxFQUFFLENBQUM7RUFDVCxFQUFFLElBQUksV0FBVyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxRQUFRLEVBQUU7RUFDdkQsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDO0VBQ2hCLEdBQUc7RUFDSCxPQUFPO0VBQ1AsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0VBQ3BELElBQUksSUFBSSxXQUFXO0VBQ25CLE1BQU0sTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7RUFDbEUsR0FBRztBQUNIO0VBQ0EsRUFBRSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pDO0VBQ0EsRUFBRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHO0VBQ3pELElBQUksRUFBRSxFQUFFLEVBQUU7RUFDVixJQUFJLENBQUMsRUFBRSxFQUFFO0VBQ1QsSUFBSSxDQUFDLEVBQUUsS0FBSztFQUNaLElBQUksQ0FBQyxFQUFFLEVBQUU7RUFDVCxJQUFJLENBQUMsRUFBRSxJQUFJO0VBQ1gsSUFBSSxFQUFFLEVBQUUsU0FBUztFQUNqQixJQUFJLENBQUMsRUFBRSxTQUFTO0VBQ2hCLEdBQUcsQ0FBQyxDQUFDO0FBQ0w7RUFDQSxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztFQUN0QixJQUFJLE9BQU8sS0FBSyxDQUFDO0VBQ2pCO0VBQ0EsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtFQUN0QixJQUFJLENBQUMsRUFBRSxFQUFFO0VBQ1QsSUFBSSxDQUFDLEVBQUUsU0FBUztFQUNoQixJQUFJLENBQUMsRUFBRSxTQUFTO0VBQ2hCLElBQUksQ0FBQyxFQUFFLElBQUk7RUFDWCxHQUFHLENBQUMsQ0FBQztFQUNMLEVBQUUsT0FBTyxFQUFFLENBQUM7RUFDWixDQUFDLENBQUM7QUFDRjtBQUNBQSxxQkFBaUIsQ0FBQyxHQUFHLEdBQUcsVUFBVSxFQUFFLEVBQUU7RUFDdEMsRUFBRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDaEMsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7RUFDaEIsQ0FBQyxDQUFDO0FBQ0Y7RUFDQTtBQUNBQSxxQkFBaUIsQ0FBQyxNQUFNLEdBQUcsVUFBVSxFQUFFLEVBQUU7RUFDekMsRUFBRSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7RUFDaEMsRUFBRSxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDMUI7RUFDQTtFQUNBLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO0VBQ3RELElBQUksT0FBTyxLQUFLLENBQUM7QUFDakI7RUFDQSxFQUFFLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDL0I7RUFDQTtFQUNBLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQztFQUNaLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUU7RUFDdEMsTUFBTSxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNsRCxNQUFNLElBQUksYUFBYSxLQUFLLENBQUMsQ0FBQztFQUM5QixRQUFRLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUMzQyxLQUFLLENBQUMsQ0FBQztFQUNQLEVBQUUsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDdEIsRUFBRSxPQUFPLFlBQVk7RUFDckIsSUFBSSxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDNUIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDO0VBQzlELE1BQU0sT0FBTyxLQUFLLENBQUM7RUFDbkI7RUFDQSxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBVSxNQUFNLEVBQUU7RUFDOUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUMxQixNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDckIsS0FBSyxDQUFDLENBQUM7RUFDUCxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUM7RUFDM0IsR0FBRyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0FBQ0Y7RUFDQSxJQUFJLFFBQVEsR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUNoRTtBQUNBQSxxQkFBaUIsQ0FBQyxPQUFPLEdBQUcsWUFBWTtFQUN4QyxFQUFFLElBQUksTUFBTSxHQUFHLElBQUksRUFBRSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztFQUMxRCxFQUFFLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO0VBQ3pCLEVBQUUsSUFBSSxNQUFNLEdBQUc7RUFDZixJQUFJLElBQUksRUFBRSxZQUFZO0VBQ3RCLE1BQU07RUFDTixRQUFRLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLFNBQVM7RUFDM0MsUUFBUSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLFNBQVM7RUFDNUMsT0FBTyxDQUFDO0VBQ1IsTUFBTSxPQUFPO0VBQ2IsUUFBUSxJQUFJLEVBQUUsR0FBRyxLQUFLLFNBQVM7RUFDL0IsUUFBUSxLQUFLLEVBQUUsR0FBRyxLQUFLLFNBQVMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7RUFDN0MsT0FBTyxDQUFDO0VBQ1IsS0FBSztFQUNMLEdBQUcsQ0FBQztBQUNKO0VBQ0EsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxFQUFFLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDaEQ7RUFDQSxFQUFFLE9BQU8sTUFBTSxDQUFDO0VBQ2hCLENBQUM7O0VDcEhEO0VBQ0E7RUFDQTtBQUlBO0VBQ0EsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7RUFDbEMsSUFBSSxTQUFTLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDaEY7RUFDQTtFQUNBO0VBQ0E7RUFDQSxJQUFJLFlBQVksR0FBRyxXQUFXLENBQUM7QUFDL0JBLHFCQUFpQixDQUFDLGFBQWEsR0FBRyxVQUFVLGdCQUFnQixFQUFFO0VBQzlELEVBQUUsSUFBSSxZQUFZLElBQUksZ0JBQWdCLEVBQUU7RUFDeEMsSUFBSSxjQUFjLEVBQUUsQ0FBQztFQUNyQixJQUFJLFlBQVksR0FBRyxLQUFLLENBQUM7RUFDekIsR0FBRztFQUNILEVBQUUsT0FBTyxnQkFBZ0IsQ0FBQztFQUMxQixDQUFDLENBQUM7RUFDRixJQUFJLFdBQVcsRUFBRTtFQUNqQixFQUFFLGNBQWMsRUFBRSxDQUFDO0VBQ25CLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLGNBQWMsQ0FBQyxDQUFDO0VBQzlELENBQUM7QUFDRDtFQUNBLFNBQVMsY0FBYyxJQUFJO0VBQzNCLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFLFVBQVUsTUFBTSxFQUFFO0VBQ3pFLElBQUksSUFBSSxNQUFNLENBQUMsRUFBRTtFQUNqQixNQUFNLE9BQU87RUFDYjtFQUNBLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLGlCQUFpQixFQUFFO0VBQzNDLE1BQU0sTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7RUFDdkIsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7RUFDckIsUUFBUSxPQUFPO0VBQ2YsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7RUFDckk7RUFDQTtFQUNBLFFBQVEsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO0VBQzlELFVBQVUsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztFQUNwRCxVQUFVLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztFQUNqRCxVQUFVLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7RUFDdEMsU0FBUztFQUNULFFBQVEsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2pDLE9BQU8sQ0FBQyxDQUFDO0VBQ1QsS0FBSztFQUNMLFNBQVMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLG9CQUFvQixFQUFFO0VBQ25ELE1BQU0sTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7RUFDdkIsTUFBTSxJQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRTtFQUM3RyxRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtFQUNuQixVQUFVLE1BQU0sS0FBSyxDQUE4Qyx1QkFBdUIsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDekcsUUFBUSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztFQUMxQixPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEVBQUU7RUFDOUIsUUFBUSxHQUFHLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQStDLHFDQUFxQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztFQUN6SixRQUFRLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDMUIsUUFBUSxPQUFPLElBQUksQ0FBQztFQUNwQixPQUFPLENBQUMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO0VBQzVCLE1BQU0sZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVk7RUFDM0QsUUFBUSxPQUFPLFlBQVksQ0FBQztFQUM1QixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUU7RUFDOUIsUUFBUSxlQUFlLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxDQUFDO0VBQ2hFLE9BQU8sQ0FBQyxDQUFDO0VBQ1QsS0FBSztFQUNMLEdBQUcsQ0FBQyxDQUFDO0VBQ0wsQ0FBQztBQUNEO0VBQ0EsU0FBUyxlQUFlLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUU7RUFDNUQsRUFBRSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7RUFDbEIsRUFBRSxJQUFJO0VBQ04sSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztFQUNwQyxHQUFHLENBQUMsT0FBTyxHQUFHLEVBQUU7RUFDaEIsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBaUQsTUFBTSxDQUFDLElBQUksRUFBRSwwQ0FBMEMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxVQUFVLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztFQUNqSyxHQUFHO0VBQ0gsRUFBRSwwQkFBMEIsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0VBQzNEOztFQzFFQTtFQUNBO0VBQ0E7QUFLQTtFQUNBLElBQUksV0FBVyxFQUFFO0VBQ2pCLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVLEdBQUcsRUFBRTtFQUNsRCxJQUFJLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFDdEMsSUFBSSxlQUFlLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztFQUNoQyxHQUFHLENBQUMsQ0FBQztFQUNMLEVBQUUsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztFQUNuQyxDQUFDO0FBQ0Q7QUFDQUEscUJBQWlCLENBQUMsWUFBWSxHQUFHLFVBQVUsR0FBRyxFQUFFO0VBQ2hELEVBQUUsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztFQUNoRCxFQUFFLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0VBQ3RCO0VBQ0E7RUFDQTtFQUNBLEVBQUUsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7RUFDbkMsSUFBSSxNQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztFQUNyQyxFQUFFLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDM0MsRUFBRSxJQUFJLFNBQVM7RUFDZixJQUFJLE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0VBQ2pDLEVBQUUsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7RUFDbkIsRUFBRSxPQUFPLE1BQU0sQ0FBQztFQUNoQixDQUFDLENBQUM7QUFDRjtFQUNBO0FBQ0csTUFBb0Isa0JBQWtCLENBQUMsQ0FBQyxzQkFBc0I7RUFDakUsSUFBSSxvQkFBb0IsR0FBRyxFQUFFLENBQUM7RUFDOUIsSUFBSSxjQUFjLEdBQUdBLG1CQUFpQixDQUFDLFFBQVEsQ0FBQztBQUNoREEscUJBQWlCLENBQUMsUUFBUSxHQUFHLFVBQVUsSUFBSSxFQUFFLE9BQU8sRUFBRTtFQUN0RCxFQUFFLElBQUksV0FBVyxJQUFJLFFBQVEsQ0FBQyxVQUFVLEtBQUssU0FBUyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtFQUNwRixJQUFJLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztFQUMzRCxJQUFJLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQ2pELElBQUksSUFBSSxVQUFVLEVBQUU7RUFDcEIsTUFBMEIsVUFBVSxDQUFDLEdBQUcsQ0FBQztFQUN6QyxNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQztFQUNoQztFQUNBO0VBQ0EsTUFBTSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7RUFDeEIsTUFBTSxxQkFBcUIsR0FBRyxVQUFVLENBQUMsWUFBWTtFQUNyRCxRQUFRLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztFQUMvRCxRQUFRLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ3RDLE9BQU8sQ0FBQyxDQUFDO0VBQ1QsS0FBSztFQUNMLEdBQUc7RUFDSCxPQUFPO0VBQ1AsSUFBSSxrQkFBa0IsR0FBRyxTQUFTLENBQUM7RUFDbkMsR0FBRztFQUNILEVBQUUsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7RUFDbEQsQ0FBQyxDQUFDO0FBQ0Y7RUFDQSxJQUFJLGtCQUFrQixFQUFFLGVBQWUsQ0FBQztBQUN4Q0EscUJBQWlCLENBQUMsV0FBVyxHQUFHLFVBQVUsR0FBRyxFQUFFLGNBQWMsRUFBRTtFQUMvRCxFQUFFLElBQUksc0JBQXNCLEdBQUcsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDekQsRUFBRSxJQUFJLHNCQUFzQixFQUFFO0VBQzlCLElBQUksT0FBTyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUNyQyxJQUFJLE9BQU8sc0JBQXNCLENBQUM7RUFDbEMsR0FBRztFQUNILEVBQUUsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0VBQ3BCLEVBQUUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7RUFDaEQsSUFBSSxJQUFJLE1BQU0sR0FBR0EsbUJBQWlCLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ3JELElBQUksTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO0VBQ2pELE1BQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFxRSxnQkFBZ0IsR0FBRyxHQUFHLElBQUksY0FBYyxHQUFHLFFBQVEsR0FBRyxjQUFjLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDOUssS0FBSyxDQUFDLENBQUM7RUFDUCxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsWUFBWTtFQUNoRCxNQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ3hDO0VBQ0E7RUFDQSxNQUFNLElBQUksa0JBQWtCLEtBQUssR0FBRyxFQUFFO0VBQ3RDLFFBQVEsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0VBQ2hDLE9BQU87RUFDUCxXQUFXO0VBQ1gsUUFBUSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7RUFDNUM7RUFDQSxRQUFRLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxrQkFBa0I7RUFDMUQsVUFBVSxZQUFZLENBQUMscUJBQXFCLENBQUMsQ0FBQztFQUM5QyxRQUFRLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztFQUMxQixPQUFPO0VBQ1AsS0FBSyxDQUFDLENBQUM7RUFDUCxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ3RDLEdBQUcsQ0FBQyxDQUFDO0VBQ0wsQ0FBQzs7RUNuRkQ7RUFDQTtFQUNBO0FBQ0FBLHFCQUFpQixDQUFDLFdBQVcsR0FBRyxZQUFZO0VBQzVDLEVBQUUsT0FBTyxLQUFLLENBQUM7RUFDZixDQUFDLENBQUM7RUFDRixJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVc7RUFDaEMsRUFBRUEsbUJBQWlCLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNsQztFQUNBLElBQUksV0FBVyxHQUFHQSxtQkFBaUIsQ0FBQyxXQUFXLENBQUM7RUFDaEQsSUFBSSxrQkFBa0IsR0FBRywyQ0FBMkMsQ0FBQztBQUNyRUEscUJBQWlCLENBQUMsV0FBVyxHQUFHLFVBQVUsR0FBRyxFQUFFLE1BQU0sRUFBRTtFQUN2RCxFQUFFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztFQUNwQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztFQUM1QixJQUFJLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7RUFDOUMsRUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO0VBQ3pCLElBQUksV0FBVyxFQUFFLGFBQWE7RUFDOUIsSUFBSSxTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7RUFDdkMsR0FBRyxDQUFDO0VBQ0osR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUU7RUFDdkIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7RUFDZixNQUFNLE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQXlGLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxVQUFVLEdBQUcsWUFBWSxHQUFHLEdBQUcsSUFBSSxNQUFNLEdBQUcsUUFBUSxHQUFHLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDaE4sSUFBSSxJQUFJLFdBQVcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztFQUN0RCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0VBQzdELE1BQU0sTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBZ0Qsd0JBQXdCLEdBQUcsV0FBVyxHQUFHLGFBQWEsR0FBRyxHQUFHLElBQUksTUFBTSxHQUFHLFFBQVEsR0FBRyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzdLLElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFO0VBQzdDLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztFQUM5QyxRQUFRLE1BQU0sSUFBSSxrQkFBa0IsR0FBRyxHQUFHLENBQUM7RUFDM0MsTUFBTSxJQUFJLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztFQUN4QixNQUFNLE9BQU8sTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0VBQ2xDLEtBQUssQ0FBQyxDQUFDO0VBQ1AsR0FBRyxDQUFDLENBQUM7RUFDTCxDQUFDOztBQy9CREEscUJBQWlCLENBQUMsT0FBTyxHQUFHLFVBQVUsRUFBRSxFQUFFLFNBQVMsRUFBRTtFQUNyRCxFQUFFLFNBQVMsR0FBRyxTQUFTLElBQUksQ0FBQyxJQUEwQixDQUFrQixJQUFJLE9BQU8sQ0FBQztFQUNwRixFQUFFLE9BQU8sZ0JBQWdCLEVBQXFELFNBQVMsR0FBRyxzQkFBc0IsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLFNBQVMsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7RUFDcEwsQ0FBQyxDQUFDO0FBQ0Y7RUFDQSxTQUFTLGVBQWUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFO0VBQ3pDLEVBQUUsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBK0Qsb0NBQW9DLEdBQUcsRUFBRSxJQUFJLFNBQVMsR0FBRyxTQUFTLEdBQUcsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUM3Szs7RUNSQSxJQUFJLGlCQUFpQixHQUFHQSxtQkFBaUIsQ0FBQyxXQUFXLENBQUM7QUFDdERBLHFCQUFpQixDQUFDLFdBQVcsR0FBRyxVQUFVLEdBQUcsRUFBRSxjQUFjLEVBQUU7RUFDL0QsRUFBRSxJQUFJLFFBQVEsR0FBRyxDQUFvRCxTQUFTLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQzlGLEVBQUUsSUFBSSxRQUFRLEVBQUU7RUFDaEIsSUFBSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7RUFDNUMsTUFBTSxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0VBQ2pFLEdBQUc7RUFDSCxFQUFFLE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsY0FBYyxDQUFDLENBQUM7RUFDM0QsQ0FBQzs7RUNaRDtFQUNBO0VBQ0E7QUFHQTtFQUNBLElBQUksT0FBTyxJQUFJLE9BQU8sYUFBYSxLQUFLLFVBQVU7RUFDbEQsRUFBRUEsbUJBQWlCLENBQUMsV0FBVyxHQUFHLFVBQVUsR0FBRyxFQUFFO0VBQ2pELElBQUksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0VBQ3RCLElBQUksT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVk7RUFDOUMsTUFBTSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDekIsTUFBTSxPQUFPLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztFQUNsQyxLQUFLLENBQUMsQ0FBQztFQUNQLEdBQUc7O0VDYkg7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBLENBQUMsVUFBVSxNQUFNLEVBQUU7RUFDbkIsRUFBRSxJQUFJLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztBQUM5RDtFQUNBO0VBQ0EsRUFBRSxJQUFJLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLENBQUM7RUFDeEQsRUFBRSxTQUFTLGFBQWEsRUFBRSxrQkFBa0IsRUFBRTtFQUM5QyxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztFQUNoQixJQUFJLElBQUksYUFBYSxFQUFFLE1BQU0sQ0FBQztFQUM5QixJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksTUFBTSxFQUFFO0VBQzFCO0VBQ0EsTUFBTSxJQUFJLGtCQUFrQixDQUFDLENBQUMsQ0FBQztFQUMvQixRQUFRLFNBQVM7RUFDakIsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLGVBQWUsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxnQkFBZ0I7RUFDbkYsUUFBUSxPQUFPLENBQUMsQ0FBQztFQUNqQixNQUFNLElBQUksYUFBYSxFQUFFO0VBQ3pCLFFBQVEsY0FBYyxHQUFHLENBQUMsQ0FBQztFQUMzQixRQUFRLE1BQU0sR0FBRyxrQkFBa0IsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFDO0VBQ25ELE9BQU87RUFDUCxXQUFXO0VBQ1gsUUFBUSxhQUFhLEdBQUcsQ0FBQyxLQUFLLGNBQWMsQ0FBQztFQUM3QyxPQUFPO0VBQ1AsTUFBTSxHQUFHLEVBQUUsQ0FBQztFQUNaLEtBQUs7RUFDTCxJQUFJLE9BQU8sTUFBTSxDQUFDO0VBQ2xCLEdBQUc7QUFDSDtFQUNBLEVBQUUsU0FBUyxlQUFlLElBQUk7RUFDOUI7RUFDQTtFQUNBLElBQUksZUFBZSxHQUFHLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztFQUNuRCxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksTUFBTSxFQUFFO0VBQzFCO0VBQ0EsTUFBTSxJQUFJLGtCQUFrQixDQUFDLENBQUMsQ0FBQztFQUMvQixRQUFRLFNBQVM7RUFDakIsTUFBTSxJQUFJLENBQUMsZUFBZTtFQUMxQixRQUFRLGVBQWUsR0FBRyxDQUFDLENBQUM7RUFDNUIsV0FBVyxJQUFJLENBQUMsZ0JBQWdCO0VBQ2hDLFFBQVEsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0VBQzdCLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQztFQUN6QixLQUFLO0VBQ0wsSUFBSSxPQUFPLGNBQWMsQ0FBQztFQUMxQixHQUFHO0FBQ0g7RUFDQSxFQUFFLElBQUksSUFBSSxHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQztFQUN0QyxFQUFFLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxVQUFVLEVBQUUsRUFBRSxTQUFTLEVBQUU7RUFDdEQsSUFBSSxlQUFlLEVBQUUsQ0FBQztFQUN0QixJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0VBQzFDLEdBQUcsQ0FBQztBQUNKO0VBQ0EsRUFBRSxJQUFJLGtCQUFrQixHQUFHLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDM0Q7RUFDQSxFQUFFLElBQUksV0FBVyxHQUFHLGlCQUFpQixDQUFDLFdBQVcsQ0FBQztFQUNsRCxFQUFFLGlCQUFpQixDQUFDLFdBQVcsR0FBRyxZQUFZO0VBQzlDLElBQUksSUFBSSxZQUFZLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUM5QyxJQUFJLElBQUksWUFBWTtFQUNwQixNQUFNLE9BQU8sWUFBWSxDQUFDO0FBQzFCO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxJQUFJLElBQUksVUFBVSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7RUFDekQsSUFBSSxJQUFJLENBQUMsVUFBVTtFQUNuQixNQUFNLE9BQU8sa0JBQWtCLENBQUM7QUFDaEM7RUFDQSxJQUFJLElBQUksWUFBWSxDQUFDO0VBQ3JCLElBQUksSUFBSTtFQUNSLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztFQUN4QyxLQUFLO0VBQ0wsSUFBSSxPQUFPLENBQUMsRUFBRTtFQUNkLE1BQU0sT0FBTyxrQkFBa0IsQ0FBQztFQUNoQyxLQUFLO0FBQ0w7RUFDQSxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQUUsVUFBVSxPQUFPLEVBQUU7RUFDbkMsTUFBTSxPQUFPO0VBQ2IsUUFBUSxPQUFPLEVBQUUsWUFBWTtFQUM3QixVQUFVLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztFQUNoQyxVQUFVLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7RUFDakUsU0FBUztFQUNULE9BQU8sQ0FBQztFQUNSLEtBQUssQ0FBQyxDQUFDO0VBQ1AsR0FBRyxDQUFDO0FBQ0o7RUFDQSxFQUFFLElBQUksTUFBTSxHQUFHLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNqRztFQUNBLEVBQUUsU0FBUyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUU7RUFDakMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7RUFDcEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU07RUFDdkMsU0FBUyxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQztFQUM3RixHQUFHO0VBQ0gsQ0FBQyxFQUFFLE9BQU8sSUFBSSxLQUFLLFdBQVcsR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDOztFQy9GL0M7RUFDQTtFQUNBO0VBQ0E7RUFDQSxDQUFDLFNBQVMsTUFBTSxFQUFFO0VBQ2xCLEVBQUUsSUFBSSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7QUFDOUQ7RUFDQSxFQUFFLElBQUksZ0JBQWdCLEdBQUcseUNBQXlDLENBQUM7RUFDbkUsRUFBRSxpQkFBaUIsQ0FBQyxXQUFXLEdBQUcsVUFBVSxHQUFHLEVBQUU7RUFDakQsSUFBSSxPQUFPLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUN0QyxHQUFHLENBQUM7QUFDSjtFQUNBLEVBQUUsSUFBSSxlQUFlLEdBQUcseUJBQXlCLENBQUM7RUFDbEQsRUFBRSxJQUFJLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQztFQUN6QyxFQUFFLElBQUksZUFBZSxHQUFHLHlCQUF5QixDQUFDO0FBQ2xEO0VBQ0EsRUFBRSxJQUFJLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7RUFDdEMsRUFBRSxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsVUFBVSxHQUFHLEVBQUUsT0FBTyxFQUFFO0VBQ3BELElBQUksT0FBTyxLQUFLLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQztFQUM5QixLQUFLLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRTtFQUN6QixNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtFQUNqQixRQUFRLE9BQU8sR0FBRyxDQUFDO0VBQ25CLE1BQU0sSUFBSSxXQUFXLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7RUFDeEQsTUFBTSxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0VBQzNDLFFBQVEsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFO0VBQ3pCLFNBQVMsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFO0VBQzlCLFVBQVUsT0FBTyxJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQztFQUN2QyxZQUFZLHVFQUF1RSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTztFQUNwSCxXQUFXLEVBQUU7RUFDYixZQUFZLElBQUksRUFBRSx3QkFBd0I7RUFDMUMsV0FBVyxDQUFDLENBQUMsQ0FBQztFQUNkLFNBQVMsQ0FBQyxDQUFDO0VBQ1gsTUFBTSxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0VBQzFDLFFBQVEsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFO0VBQ3pCLFNBQVMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFO0VBQ2hDLFVBQVUsT0FBTyxJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQztFQUN2QyxZQUFZLG1HQUFtRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsc0JBQXNCO0VBQ2pLLFdBQVcsRUFBRTtFQUNiLFlBQVksSUFBSSxFQUFFLHdCQUF3QjtFQUMxQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0VBQ2QsU0FBUyxDQUFDLENBQUM7RUFDWCxNQUFNLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7RUFDM0MsUUFBUSxPQUFPLENBQUMsV0FBVyxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7RUFDOUgsU0FBUyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUU7RUFDaEMsVUFBVSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXO0VBQ3hDLFlBQVksTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUM1RCxVQUFVLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQztFQUNsRDtFQUNBLFVBQVUsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0VBQ3hCLFVBQVUsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDO0VBQ2pDLFVBQVUsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU87RUFDeEMsWUFBWSxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUU7RUFDdkUsY0FBYyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUNwRCxjQUFjLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtFQUM1QyxnQkFBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUMvQixnQkFBZ0IsYUFBYSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUM7RUFDcEUsZUFBZTtFQUNmLGFBQWEsQ0FBQyxDQUFDO0VBQ2YsVUFBVSxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDO0VBQ3ZDLFlBQVksbUJBQW1CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyx5Q0FBeUMsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztFQUN0SCxZQUFZLHlFQUF5RSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0VBQzNHLFlBQVksMENBQTBDO0VBQ3RELFdBQVcsRUFBRTtFQUNiLFlBQVksSUFBSSxFQUFFLHdCQUF3QjtFQUMxQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0VBQ2QsU0FBUyxDQUFDLENBQUM7RUFDWCxNQUFNLE9BQU8sR0FBRyxDQUFDO0VBQ2pCLEtBQUssQ0FBQyxDQUFDO0VBQ1AsR0FBRyxDQUFDO0VBQ0osQ0FBQyxFQUFFLE9BQU8sSUFBSSxLQUFLLFdBQVcsR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDOztFQ3JFL0M7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxDQUFDLFVBQVUsTUFBTSxFQUFFO0VBQ25CLEVBQUUsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUM3QixFQUFFLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQzlCLEVBQUUsSUFBSSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztFQUN2RCxFQUFFLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7RUFDdkMsRUFBRSxJQUFJLFFBQVEsR0FBRyxZQUFZO0VBQzdCLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUMzQixJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO0VBQzlCLEdBQUcsQ0FBQztFQUNKLEVBQUUsUUFBUSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztFQUN6QyxFQUFFLE1BQU0sQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO0FBQ2hDO0VBQ0EsRUFBRSxJQUFJLGdCQUFnQixDQUFDO0FBQ3ZCO0VBQ0EsRUFBRSxTQUFTLG1CQUFtQixDQUFDLGNBQWMsRUFBRTtFQUMvQyxJQUFJLGNBQWMsQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQzFELEdBQUc7QUFDSDtFQUNBLEVBQUUsSUFBSSxRQUFRLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDO0VBQzVDLEVBQUUsaUJBQWlCLENBQUMsUUFBUSxHQUFHLFVBQVUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7RUFDOUQsSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVE7RUFDaEMsTUFBTSxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0VBQzdDLElBQUksSUFBSSxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7RUFDakMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO0VBQ3pDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO0VBQzNCLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO0VBQ2hDLE1BQU0sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZO0VBQ3pDLFFBQVEsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0VBQ2hDLE9BQU8sQ0FBQyxDQUFDO0VBQ1QsS0FBSztFQUNMLElBQUksT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztFQUMzQyxHQUFHLENBQUM7QUFDSjtFQUNBLEVBQUUsSUFBSSxPQUFPLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDO0VBQzFDLEVBQUUsaUJBQWlCLENBQUMsT0FBTyxHQUFHLFVBQVUsRUFBRSxFQUFFLFNBQVMsRUFBRTtFQUN2RCxJQUFJLElBQUk7RUFDUjtFQUNBLE1BQU0sT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7RUFDL0MsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFO0VBQ2xCLE1BQU0sSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO0VBQ3ZDLFFBQVEsT0FBTyxFQUFFLENBQUM7RUFDbEIsT0FBTztFQUNQLE1BQU0sTUFBTSxHQUFHLENBQUM7RUFDaEIsS0FBSztFQUNMLEdBQUcsQ0FBQztBQUNKO0VBQ0EsRUFBRSxJQUFJLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxXQUFXLENBQUM7RUFDbEQsRUFBRSxpQkFBaUIsQ0FBQyxXQUFXLEdBQUcsVUFBVSxHQUFHLEVBQUUsY0FBYyxFQUFFO0VBQ2pFLElBQUksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQzVDLElBQUksSUFBSSxNQUFNLEVBQUU7RUFDaEIsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0VBQ3hDLE1BQU0sT0FBTyxNQUFNLENBQUM7RUFDcEIsS0FBSyxNQUFNO0VBQ1gsTUFBTSxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FBQztFQUN6RCxLQUFLO0VBQ0wsR0FBRyxDQUFDO0FBQ0o7RUFDQSxFQUFFLElBQUksV0FBVyxHQUFHLGlCQUFpQixDQUFDLFdBQVcsQ0FBQztFQUNsRCxFQUFFLGlCQUFpQixDQUFDLFdBQVcsR0FBRyxZQUFZO0VBQzlDO0VBQ0EsSUFBSSxJQUFJLFFBQVEsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFDO0VBQ0EsSUFBSSxJQUFJLE1BQU0sR0FBRyxnQkFBZ0IsSUFBSSxRQUFRLENBQUM7RUFDOUMsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7RUFDNUIsSUFBSSxPQUFPLE1BQU0sQ0FBQztFQUNsQixJQUFHO0VBQ0gsQ0FBQyxFQUFFLE9BQU8sSUFBSSxLQUFLLFdBQVcsR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDOzs7Ozs7In0=
