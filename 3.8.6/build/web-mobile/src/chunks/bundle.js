System.register([], function(_export, _context) { return { execute: function () {
System.register("chunks:///_virtual/arrayLikeToArray.js", [], function (exports) {
  return {
    execute: function () {
      exports('default', _arrayLikeToArray);
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
    }
  };
});

System.register("chunks:///_virtual/arrayWithHoles.js", [], function (exports) {
  return {
    execute: function () {
      exports('default', _arrayWithHoles);
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }
    }
  };
});

System.register("chunks:///_virtual/assertThisInitialized.js", [], function (exports) {
  return {
    execute: function () {
      exports('default', _assertThisInitialized);
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
    }
  };
});

System.register("chunks:///_virtual/cjs-loader.mjs", [], function (exports) {
  return {
    execute: function () {
      var CjsLoader = /*#__PURE__*/function () {
        function CjsLoader() {
          this._registry = {};
          this._moduleCache = {};
        }

        /**
         * Defines a CommonJS module.
         * @param id Module ID.
         * @param factory The factory.
         * @param resolveMap An object or a function returning object which records the module specifier resolve result.
         * The later is called as "deferred resolve map" and would be invocated right before CommonJS code execution.
         */
        var _proto = CjsLoader.prototype;
        _proto.define = function define(id, factory, resolveMap) {
          this._registry[id] = {
            factory: factory,
            resolveMap: resolveMap
          };
        }

        /**
         * Requires a CommonJS module.
         * @param id Module ID.
         * @returns The module's `module.exports`.
         */;
        _proto.require = function require(id) {
          return this._require(id);
        };
        _proto.throwInvalidWrapper = function throwInvalidWrapper(requestTarget, from) {
          throw new Error("Module '" + requestTarget + "' imported from '" + from + "' is expected be an ESM-wrapped CommonJS module but it doesn't.");
        };
        _proto._require = function _require(id, parent) {
          var cachedModule = this._moduleCache[id];
          if (cachedModule) {
            return cachedModule.exports;
          }
          var module = {
            id: id,
            exports: {}
          };
          this._moduleCache[id] = module;
          this._tryModuleLoad(module, id);
          return module.exports;
        };
        _proto._resolve = function _resolve(specifier, parent) {
          return this._resolveFromInfos(specifier, parent) || this._throwUnresolved(specifier, parent);
        };
        _proto._resolveFromInfos = function _resolveFromInfos(specifier, parent) {
          var _cjsInfos$parent$reso, _cjsInfos$parent;
          if (specifier in cjsInfos) {
            return specifier;
          }
          if (!parent) {
            return;
          }
          return (_cjsInfos$parent$reso = (_cjsInfos$parent = cjsInfos[parent]) == null ? void 0 : _cjsInfos$parent.resolveCache[specifier]) != null ? _cjsInfos$parent$reso : undefined;
        };
        _proto._tryModuleLoad = function _tryModuleLoad(module, id) {
          var threw = true;
          try {
            this._load(module, id);
            threw = false;
          } finally {
            if (threw) {
              delete this._moduleCache[id];
            }
          }
        };
        _proto._load = function _load(module, id) {
          var _this$_loadWrapper = this._loadWrapper(id),
            factory = _this$_loadWrapper.factory,
            resolveMap = _this$_loadWrapper.resolveMap;
          var vendorRequire = this._createRequire(module);
          var require = resolveMap ? this._createRequireWithResolveMap(typeof resolveMap === 'function' ? resolveMap() : resolveMap, vendorRequire) : vendorRequire;
          factory(module.exports, require, module);
        };
        _proto._loadWrapper = function _loadWrapper(id) {
          if (id in this._registry) {
            return this._registry[id];
          } else {
            return this._loadHostProvidedModules(id);
          }
        };
        _proto._loadHostProvidedModules = function _loadHostProvidedModules(id) {
          return {
            factory: function factory(_exports, _require, module) {
              if (typeof require === 'undefined') {
                throw new Error("Current environment does not provide a require() for requiring '" + id + "'.");
              }
              try {
                module.exports = require(id);
              } catch (err) {
                throw new Error("Exception thrown when calling host defined require('" + id + "').", {
                  cause: err
                });
              }
            }
          };
        };
        _proto._createRequire = function _createRequire(module) {
          var _this = this;
          return function (specifier) {
            return _this._require(specifier, module);
          };
        };
        _proto._createRequireWithResolveMap = function _createRequireWithResolveMap(requireMap, originalRequire) {
          return function (specifier) {
            var resolved = requireMap[specifier];
            if (resolved) {
              return originalRequire(resolved);
            } else {
              throw new Error('Unresolved specifier ' + specifier);
            }
          };
        };
        _proto._throwUnresolved = function _throwUnresolved(specifier, parentUrl) {
          throw new Error("Unable to resolve " + specifier + " from " + parent + ".");
        };
        return CjsLoader;
      }();
      var loader = exports('default', new CjsLoader());
    }
  };
});

System.register("chunks:///_virtual/classCallCheck.js", [], function (exports) {
  return {
    execute: function () {
      exports('default', _classCallCheck);
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
    }
  };
});

System.register("chunks:///_virtual/createClass.js", [], function (exports) {
  return {
    execute: function () {
      exports('default', _createClass);
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
    }
  };
});

System.register("chunks:///_virtual/defineProperty.js", [], function (exports) {
  return {
    execute: function () {
      exports('default', _defineProperty);
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
    }
  };
});

System.register("chunks:///_virtual/env", [], function (exports) {
  return {
    execute: function () {
      var HTML5 = exports('HTML5', true);
      var NATIVE = exports('NATIVE', false);
      var ANDROID = exports('ANDROID', false);
      var IOS = exports('IOS', false);
      var MAC = exports('MAC', false);
      var WINDOWS = exports('WINDOWS', false);
      var LINUX = exports('LINUX', false);
      var OHOS = exports('OHOS', false);
      var OPEN_HARMONY = exports('OPEN_HARMONY', false);
      var WECHAT = exports('WECHAT', false);
      var WECHAT_MINI_PROGRAM = exports('WECHAT_MINI_PROGRAM', false);
      var XIAOMI = exports('XIAOMI', false);
      var ALIPAY = exports('ALIPAY', false);
      var TAOBAO = exports('TAOBAO', false);
      var TAOBAO_MINIGAME = exports('TAOBAO_MINIGAME', false);
      var BYTEDANCE = exports('BYTEDANCE', false);
      var OPPO = exports('OPPO', false);
      var VIVO = exports('VIVO', false);
      var HUAWEI = exports('HUAWEI', false);
      var MIGU = exports('MIGU', false);
      var HONOR = exports('HONOR', false);
      var COCOS_RUNTIME = exports('COCOS_RUNTIME', false);
      var EDITOR = exports('EDITOR', false);
      var EDITOR_NOT_IN_PREVIEW = exports('EDITOR_NOT_IN_PREVIEW', false);
      var PREVIEW = exports('PREVIEW', false);
      var BUILD = exports('BUILD', true);
      var TEST = exports('TEST', false);
      var DEBUG = exports('DEBUG', true);
      var DEV = exports('DEV', false);
      var MINIGAME = exports('MINIGAME', false);
      var RUNTIME_BASED = exports('RUNTIME_BASED', false);
      var SUPPORT_JIT = exports('SUPPORT_JIT', true);
      var JSB = exports('JSB', false);
      var NET_MODE = exports('NET_MODE', 0);
    }
  };
});

System.register("chunks:///_virtual/factory.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        function _typeof(obj) {
          "@babel/helpers - typeof";

          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }
          return _typeof(obj);
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        // does not check for duplicate subtags
        var isStructurallyValidLanguageTag = function isStructurallyValidLanguageTag(locale) {
          return locale.split('-').every(function (subtag) {
            return /[a-z0-9]+/i.test(subtag);
          });
        };
        var canonicalizeLocaleList = function canonicalizeLocaleList(locales) {
          if (!locales) return [];
          if (!Array.isArray(locales)) locales = [locales];
          var res = {};
          for (var i = 0; i < locales.length; ++i) {
            var tag = locales[i];
            if (tag && _typeof(tag) === 'object') tag = String(tag);
            if (typeof tag !== 'string') {
              // Requiring tag to be a String or Object means that the Number value
              // NaN will not be interpreted as the language tag "nan", which stands
              // for Min Nan Chinese.
              var msg = "Locales should be strings, ".concat(JSON.stringify(tag), " isn't.");
              throw new TypeError(msg);
            }
            if (tag[0] === '*') continue;
            if (!isStructurallyValidLanguageTag(tag)) {
              var strTag = JSON.stringify(tag);
              var _msg = "The locale ".concat(strTag, " is not a structurally valid BCP 47 language tag.");
              throw new RangeError(_msg);
            }
            res[tag] = true;
          }
          return Object.keys(res);
        };
        var defaultLocale = function defaultLocale() {
          return (/* istanbul ignore next */
            typeof navigator !== 'undefined' && navigator && (navigator.userLanguage || navigator.language) || 'en-US'
          );
        };
        var getType = function getType(type) {
          if (!type) return 'cardinal';
          if (type === 'cardinal' || type === 'ordinal') return type;
          throw new RangeError('Not a valid plural type: ' + JSON.stringify(type));
        };
        function getPluralRules(NumberFormat, getSelector, getCategories) {
          var findLocale = function findLocale(locale) {
            do {
              if (getSelector(locale)) return locale;
              locale = locale.replace(/-?[^-]*$/, '');
            } while (locale);
            return null;
          };
          var resolveLocale = function resolveLocale(locales) {
            var canonicalLocales = canonicalizeLocaleList(locales);
            for (var i = 0; i < canonicalLocales.length; ++i) {
              var lc = findLocale(canonicalLocales[i]);
              if (lc) return lc;
            }
            return findLocale(defaultLocale());
          };
          var PluralRules = /*#__PURE__*/function () {
            function PluralRules(locales) {
              var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              _classCallCheck(this, PluralRules);
              this._locale = resolveLocale(locales);
              this._select = getSelector(this._locale);
              this._type = getType(opt.type);
              this._nf = new NumberFormat('en', opt); // make-plural expects latin digits with . decimal separator
            }

            _createClass(PluralRules, [{
              key: "resolvedOptions",
              value: function resolvedOptions() {
                var _this$_nf$resolvedOpt = this._nf.resolvedOptions(),
                  minimumIntegerDigits = _this$_nf$resolvedOpt.minimumIntegerDigits,
                  minimumFractionDigits = _this$_nf$resolvedOpt.minimumFractionDigits,
                  maximumFractionDigits = _this$_nf$resolvedOpt.maximumFractionDigits,
                  minimumSignificantDigits = _this$_nf$resolvedOpt.minimumSignificantDigits,
                  maximumSignificantDigits = _this$_nf$resolvedOpt.maximumSignificantDigits;
                var opt = {
                  locale: this._locale,
                  minimumIntegerDigits: minimumIntegerDigits,
                  minimumFractionDigits: minimumFractionDigits,
                  maximumFractionDigits: maximumFractionDigits,
                  pluralCategories: getCategories(this._locale, this._type === 'ordinal'),
                  type: this._type
                };
                if (typeof minimumSignificantDigits === 'number') {
                  opt.minimumSignificantDigits = minimumSignificantDigits;
                  opt.maximumSignificantDigits = maximumSignificantDigits;
                }
                return opt;
              }
            }, {
              key: "select",
              value: function select(number) {
                if (!(this instanceof PluralRules)) throw new TypeError("select() called on incompatible ".concat(this));
                if (typeof number !== 'number') number = Number(number);
                if (!isFinite(number)) return 'other';
                var fmt = this._nf.format(Math.abs(number));
                return this._select(fmt, this._type === 'ordinal');
              }
            }], [{
              key: "supportedLocalesOf",
              value: function supportedLocalesOf(locales) {
                return canonicalizeLocaleList(locales).filter(findLocale);
              }
            }]);
            return PluralRules;
          }();
          Object.defineProperty(PluralRules, 'prototype', {
            writable: false
          });
          return PluralRules;
        }
        module.exports = getPluralRules;

        // #endregion ORIGINAL CODE

        module.exports;
      }, {});
    }
  };
});

System.register("chunks:///_virtual/getPrototypeOf.js", [], function (exports) {
  return {
    execute: function () {
      exports('default', _getPrototypeOf);
      function _getPrototypeOf(o) {
        _getPrototypeOf = exports('default', Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        });
        return _getPrototypeOf(o);
      }
    }
  };
});

System.register("chunks:///_virtual/i18next.js", ['./typeof.js', './classCallCheck.js', './createClass.js', './assertThisInitialized.js', './inherits.js', './possibleConstructorReturn.js', './getPrototypeOf.js', './defineProperty.js', './toArray.js'], function (exports) {
  var _typeof, _classCallCheck, _createClass, _assertThisInitialized, _inherits, _possibleConstructorReturn, _getPrototypeOf, _defineProperty, _toArray;
  return {
    setters: [function (module) {
      _typeof = module.default;
    }, function (module) {
      _classCallCheck = module.default;
    }, function (module) {
      _createClass = module.default;
    }, function (module) {
      _assertThisInitialized = module.default;
    }, function (module) {
      _inherits = module.default;
    }, function (module) {
      _possibleConstructorReturn = module.default;
    }, function (module) {
      _getPrototypeOf = module.default;
    }, function (module) {
      _defineProperty = module.default;
    }, function (module) {
      _toArray = module.default;
    }],
    execute: function () {
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      var consoleLogger = {
        type: 'logger',
        log: function log(args) {
          this.output('log', args);
        },
        warn: function warn(args) {
          this.output('warn', args);
        },
        error: function error(args) {
          this.output('error', args);
        },
        output: function output(type, args) {
          if (console && console[type]) console[type].apply(console, args);
        }
      };
      var Logger = function () {
        function Logger(concreteLogger) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          _classCallCheck(this, Logger);
          this.init(concreteLogger, options);
        }
        _createClass(Logger, [{
          key: "init",
          value: function init(concreteLogger) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.prefix = options.prefix || 'i18next:';
            this.logger = concreteLogger || consoleLogger;
            this.options = options;
            this.debug = options.debug;
          }
        }, {
          key: "setDebug",
          value: function setDebug(bool) {
            this.debug = bool;
          }
        }, {
          key: "log",
          value: function log() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return this.forward(args, 'log', '', true);
          }
        }, {
          key: "warn",
          value: function warn() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            return this.forward(args, 'warn', '', true);
          }
        }, {
          key: "error",
          value: function error() {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }
            return this.forward(args, 'error', '');
          }
        }, {
          key: "deprecate",
          value: function deprecate() {
            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }
            return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
          }
        }, {
          key: "forward",
          value: function forward(args, lvl, prefix, debugOnly) {
            if (debugOnly && !this.debug) return null;
            if (typeof args[0] === 'string') args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
            return this.logger[lvl](args);
          }
        }, {
          key: "create",
          value: function create(moduleName) {
            return new Logger(this.logger, _objectSpread(_objectSpread({}, {
              prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
            }), this.options));
          }
        }, {
          key: "clone",
          value: function clone(options) {
            options = options || this.options;
            options.prefix = options.prefix || this.prefix;
            return new Logger(this.logger, options);
          }
        }]);
        return Logger;
      }();
      var baseLogger = new Logger();
      var EventEmitter = function () {
        function EventEmitter() {
          _classCallCheck(this, EventEmitter);
          this.observers = {};
        }
        _createClass(EventEmitter, [{
          key: "on",
          value: function on(events, listener) {
            var _this = this;
            events.split(' ').forEach(function (event) {
              _this.observers[event] = _this.observers[event] || [];
              _this.observers[event].push(listener);
            });
            return this;
          }
        }, {
          key: "off",
          value: function off(event, listener) {
            if (!this.observers[event]) return;
            if (!listener) {
              delete this.observers[event];
              return;
            }
            this.observers[event] = this.observers[event].filter(function (l) {
              return l !== listener;
            });
          }
        }, {
          key: "emit",
          value: function emit(event) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            if (this.observers[event]) {
              var cloned = [].concat(this.observers[event]);
              cloned.forEach(function (observer) {
                observer.apply(void 0, args);
              });
            }
            if (this.observers['*']) {
              var _cloned = [].concat(this.observers['*']);
              _cloned.forEach(function (observer) {
                observer.apply(observer, [event].concat(args));
              });
            }
          }
        }]);
        return EventEmitter;
      }();
      function defer() {
        var res;
        var rej;
        var promise = new Promise(function (resolve, reject) {
          res = resolve;
          rej = reject;
        });
        promise.resolve = res;
        promise.reject = rej;
        return promise;
      }
      function makeString(object) {
        if (object == null) return '';
        return '' + object;
      }
      function copy(a, s, t) {
        a.forEach(function (m) {
          if (s[m]) t[m] = s[m];
        });
      }
      function getLastOfPath(object, path, Empty) {
        function cleanKey(key) {
          return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
        }
        function canNotTraverseDeeper() {
          return !object || typeof object === 'string';
        }
        var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');
        while (stack.length > 1) {
          if (canNotTraverseDeeper()) return {};
          var key = cleanKey(stack.shift());
          if (!object[key] && Empty) object[key] = new Empty();
          if (Object.prototype.hasOwnProperty.call(object, key)) {
            object = object[key];
          } else {
            object = {};
          }
        }
        if (canNotTraverseDeeper()) return {};
        return {
          obj: object,
          k: cleanKey(stack.shift())
        };
      }
      function setPath(object, path, newValue) {
        var _getLastOfPath = getLastOfPath(object, path, Object),
          obj = _getLastOfPath.obj,
          k = _getLastOfPath.k;
        obj[k] = newValue;
      }
      function pushPath(object, path, newValue, concat) {
        var _getLastOfPath2 = getLastOfPath(object, path, Object),
          obj = _getLastOfPath2.obj,
          k = _getLastOfPath2.k;
        obj[k] = obj[k] || [];
        if (concat) obj[k] = obj[k].concat(newValue);
        if (!concat) obj[k].push(newValue);
      }
      function getPath(object, path) {
        var _getLastOfPath3 = getLastOfPath(object, path),
          obj = _getLastOfPath3.obj,
          k = _getLastOfPath3.k;
        if (!obj) return undefined;
        return obj[k];
      }
      function getPathWithDefaults(data, defaultData, key) {
        var value = getPath(data, key);
        if (value !== undefined) {
          return value;
        }
        return getPath(defaultData, key);
      }
      function deepExtend(target, source, overwrite) {
        for (var prop in source) {
          if (prop !== '__proto__' && prop !== 'constructor') {
            if (prop in target) {
              if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
                if (overwrite) target[prop] = source[prop];
              } else {
                deepExtend(target[prop], source[prop], overwrite);
              }
            } else {
              target[prop] = source[prop];
            }
          }
        }
        return target;
      }
      function regexEscape(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
      }
      var _entityMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;'
      };
      function escape(data) {
        if (typeof data === 'string') {
          return data.replace(/[&<>"'\/]/g, function (s) {
            return _entityMap[s];
          });
        }
        return data;
      }
      var isIE10 = typeof window !== 'undefined' && window.navigator && typeof window.navigator.userAgentData === 'undefined' && window.navigator.userAgent && window.navigator.userAgent.indexOf('MSIE') > -1;
      var chars = [' ', ',', '?', '!', ';'];
      function looksLikeObjectPath(key, nsSeparator, keySeparator) {
        nsSeparator = nsSeparator || '';
        keySeparator = keySeparator || '';
        var possibleChars = chars.filter(function (c) {
          return nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0;
        });
        if (possibleChars.length === 0) return true;
        var r = new RegExp("(".concat(possibleChars.map(function (c) {
          return c === '?' ? '\\?' : c;
        }).join('|'), ")"));
        var matched = !r.test(key);
        if (!matched) {
          var ki = key.indexOf(keySeparator);
          if (ki > 0 && !r.test(key.substring(0, ki))) {
            matched = true;
          }
        }
        return matched;
      }
      function ownKeys$1(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread$1(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys$1(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys$1(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived),
            result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }
      function deepFind(obj, path) {
        var keySeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
        if (!obj) return undefined;
        if (obj[path]) return obj[path];
        var paths = path.split(keySeparator);
        var current = obj;
        for (var i = 0; i < paths.length; ++i) {
          if (!current) return undefined;
          if (typeof current[paths[i]] === 'string' && i + 1 < paths.length) {
            return undefined;
          }
          if (current[paths[i]] === undefined) {
            var j = 2;
            var p = paths.slice(i, i + j).join(keySeparator);
            var mix = current[p];
            while (mix === undefined && paths.length > i + j) {
              j++;
              p = paths.slice(i, i + j).join(keySeparator);
              mix = current[p];
            }
            if (mix === undefined) return undefined;
            if (mix === null) return null;
            if (path.endsWith(p)) {
              if (typeof mix === 'string') return mix;
              if (p && typeof mix[p] === 'string') return mix[p];
            }
            var joinedPath = paths.slice(i + j).join(keySeparator);
            if (joinedPath) return deepFind(mix, joinedPath, keySeparator);
            return undefined;
          }
          current = current[paths[i]];
        }
        return current;
      }
      var ResourceStore = function (_EventEmitter) {
        _inherits(ResourceStore, _EventEmitter);
        var _super = _createSuper(ResourceStore);
        function ResourceStore(data) {
          var _this;
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            ns: ['translation'],
            defaultNS: 'translation'
          };
          _classCallCheck(this, ResourceStore);
          _this = _super.call(this);
          if (isIE10) {
            EventEmitter.call(_assertThisInitialized(_this));
          }
          _this.data = data || {};
          _this.options = options;
          if (_this.options.keySeparator === undefined) {
            _this.options.keySeparator = '.';
          }
          if (_this.options.ignoreJSONStructure === undefined) {
            _this.options.ignoreJSONStructure = true;
          }
          return _this;
        }
        _createClass(ResourceStore, [{
          key: "addNamespaces",
          value: function addNamespaces(ns) {
            if (this.options.ns.indexOf(ns) < 0) {
              this.options.ns.push(ns);
            }
          }
        }, {
          key: "removeNamespaces",
          value: function removeNamespaces(ns) {
            var index = this.options.ns.indexOf(ns);
            if (index > -1) {
              this.options.ns.splice(index, 1);
            }
          }
        }, {
          key: "getResource",
          value: function getResource(lng, ns, key) {
            var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
            var ignoreJSONStructure = options.ignoreJSONStructure !== undefined ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
            var path = [lng, ns];
            if (key && typeof key !== 'string') path = path.concat(key);
            if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);
            if (lng.indexOf('.') > -1) {
              path = lng.split('.');
            }
            var result = getPath(this.data, path);
            if (result || !ignoreJSONStructure || typeof key !== 'string') return result;
            return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
          }
        }, {
          key: "addResource",
          value: function addResource(lng, ns, key, value) {
            var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
              silent: false
            };
            var keySeparator = this.options.keySeparator;
            if (keySeparator === undefined) keySeparator = '.';
            var path = [lng, ns];
            if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
            if (lng.indexOf('.') > -1) {
              path = lng.split('.');
              value = ns;
              ns = path[1];
            }
            this.addNamespaces(ns);
            setPath(this.data, path, value);
            if (!options.silent) this.emit('added', lng, ns, key, value);
          }
        }, {
          key: "addResources",
          value: function addResources(lng, ns, resources) {
            var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
              silent: false
            };
            for (var m in resources) {
              if (typeof resources[m] === 'string' || Object.prototype.toString.apply(resources[m]) === '[object Array]') this.addResource(lng, ns, m, resources[m], {
                silent: true
              });
            }
            if (!options.silent) this.emit('added', lng, ns, resources);
          }
        }, {
          key: "addResourceBundle",
          value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
            var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
              silent: false
            };
            var path = [lng, ns];
            if (lng.indexOf('.') > -1) {
              path = lng.split('.');
              deep = resources;
              resources = ns;
              ns = path[1];
            }
            this.addNamespaces(ns);
            var pack = getPath(this.data, path) || {};
            if (deep) {
              deepExtend(pack, resources, overwrite);
            } else {
              pack = _objectSpread$1(_objectSpread$1({}, pack), resources);
            }
            setPath(this.data, path, pack);
            if (!options.silent) this.emit('added', lng, ns, resources);
          }
        }, {
          key: "removeResourceBundle",
          value: function removeResourceBundle(lng, ns) {
            if (this.hasResourceBundle(lng, ns)) {
              delete this.data[lng][ns];
            }
            this.removeNamespaces(ns);
            this.emit('removed', lng, ns);
          }
        }, {
          key: "hasResourceBundle",
          value: function hasResourceBundle(lng, ns) {
            return this.getResource(lng, ns) !== undefined;
          }
        }, {
          key: "getResourceBundle",
          value: function getResourceBundle(lng, ns) {
            if (!ns) ns = this.options.defaultNS;
            if (this.options.compatibilityAPI === 'v1') return _objectSpread$1(_objectSpread$1({}, {}), this.getResource(lng, ns));
            return this.getResource(lng, ns);
          }
        }, {
          key: "getDataByLanguage",
          value: function getDataByLanguage(lng) {
            return this.data[lng];
          }
        }, {
          key: "hasLanguageSomeTranslations",
          value: function hasLanguageSomeTranslations(lng) {
            var data = this.getDataByLanguage(lng);
            var n = data && Object.keys(data) || [];
            return !!n.find(function (v) {
              return data[v] && Object.keys(data[v]).length > 0;
            });
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            return this.data;
          }
        }]);
        return ResourceStore;
      }(EventEmitter);
      var postProcessor = {
        processors: {},
        addPostProcessor: function addPostProcessor(module) {
          this.processors[module.name] = module;
        },
        handle: function handle(processors, value, key, options, translator) {
          var _this = this;
          processors.forEach(function (processor) {
            if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
          });
          return value;
        }
      };
      function ownKeys$2(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread$2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys$2(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys$2(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      function _createSuper$1(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived),
            result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      function _isNativeReflectConstruct$1() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }
      var checkedLoadedFor = {};
      var Translator = function (_EventEmitter) {
        _inherits(Translator, _EventEmitter);
        var _super = _createSuper$1(Translator);
        function Translator(services) {
          var _this;
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          _classCallCheck(this, Translator);
          _this = _super.call(this);
          if (isIE10) {
            EventEmitter.call(_assertThisInitialized(_this));
          }
          copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, _assertThisInitialized(_this));
          _this.options = options;
          if (_this.options.keySeparator === undefined) {
            _this.options.keySeparator = '.';
          }
          _this.logger = baseLogger.create('translator');
          return _this;
        }
        _createClass(Translator, [{
          key: "changeLanguage",
          value: function changeLanguage(lng) {
            if (lng) this.language = lng;
          }
        }, {
          key: "exists",
          value: function exists(key) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
              interpolation: {}
            };
            if (key === undefined || key === null) {
              return false;
            }
            var resolved = this.resolve(key, options);
            return resolved && resolved.res !== undefined;
          }
        }, {
          key: "extractFromKey",
          value: function extractFromKey(key, options) {
            var nsSeparator = options.nsSeparator !== undefined ? options.nsSeparator : this.options.nsSeparator;
            if (nsSeparator === undefined) nsSeparator = ':';
            var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
            var namespaces = options.ns || this.options.defaultNS || [];
            var wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
            var seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
            if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
              var m = key.match(this.interpolator.nestingRegexp);
              if (m && m.length > 0) {
                return {
                  key: key,
                  namespaces: namespaces
                };
              }
              var parts = key.split(nsSeparator);
              if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
              key = parts.join(keySeparator);
            }
            if (typeof namespaces === 'string') namespaces = [namespaces];
            return {
              key: key,
              namespaces: namespaces
            };
          }
        }, {
          key: "translate",
          value: function translate(keys, options, lastKey) {
            var _this2 = this;
            if (_typeof(options) !== 'object' && this.options.overloadTranslationOptionHandler) {
              options = this.options.overloadTranslationOptionHandler(arguments);
            }
            if (!options) options = {};
            if (keys === undefined || keys === null) return '';
            if (!Array.isArray(keys)) keys = [String(keys)];
            var returnDetails = options.returnDetails !== undefined ? options.returnDetails : this.options.returnDetails;
            var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
            var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
              key = _this$extractFromKey.key,
              namespaces = _this$extractFromKey.namespaces;
            var namespace = namespaces[namespaces.length - 1];
            var lng = options.lng || this.language;
            var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
            if (lng && lng.toLowerCase() === 'cimode') {
              if (appendNamespaceToCIMode) {
                var nsSeparator = options.nsSeparator || this.options.nsSeparator;
                if (returnDetails) {
                  resolved.res = "".concat(namespace).concat(nsSeparator).concat(key);
                  return resolved;
                }
                return "".concat(namespace).concat(nsSeparator).concat(key);
              }
              if (returnDetails) {
                resolved.res = key;
                return resolved;
              }
              return key;
            }
            var resolved = this.resolve(keys, options);
            var res = resolved && resolved.res;
            var resUsedKey = resolved && resolved.usedKey || key;
            var resExactUsedKey = resolved && resolved.exactUsedKey || key;
            var resType = Object.prototype.toString.apply(res);
            var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
            var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;
            var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
            var handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';
            if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === 'string' && resType === '[object Array]')) {
              if (!options.returnObjects && !this.options.returnObjects) {
                if (!this.options.returnedObjectHandler) {
                  this.logger.warn('accessing an object - but returnObjects options is not enabled!');
                }
                var r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, _objectSpread$2(_objectSpread$2({}, options), {}, {
                  ns: namespaces
                })) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");
                if (returnDetails) {
                  resolved.res = r;
                  return resolved;
                }
                return r;
              }
              if (keySeparator) {
                var resTypeIsArray = resType === '[object Array]';
                var copy = resTypeIsArray ? [] : {};
                var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
                for (var m in res) {
                  if (Object.prototype.hasOwnProperty.call(res, m)) {
                    var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
                    copy[m] = this.translate(deepKey, _objectSpread$2(_objectSpread$2({}, options), {
                      joinArrays: false,
                      ns: namespaces
                    }));
                    if (copy[m] === deepKey) copy[m] = res[m];
                  }
                }
                res = copy;
              }
            } else if (handleAsObjectInI18nFormat && typeof joinArrays === 'string' && resType === '[object Array]') {
              res = res.join(joinArrays);
              if (res) res = this.extendTranslation(res, keys, options, lastKey);
            } else {
              var usedDefault = false;
              var usedKey = false;
              var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
              var hasDefaultValue = Translator.hasDefaultValue(options);
              var defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : '';
              var defaultValue = options["defaultValue".concat(defaultValueSuffix)] || options.defaultValue;
              if (!this.isValidLookup(res) && hasDefaultValue) {
                usedDefault = true;
                res = defaultValue;
              }
              if (!this.isValidLookup(res)) {
                usedKey = true;
                res = key;
              }
              var missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
              var resForMissing = missingKeyNoValueFallbackToKey && usedKey ? undefined : res;
              var updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
              if (usedKey || usedDefault || updateMissing) {
                this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? defaultValue : res);
                if (keySeparator) {
                  var fk = this.resolve(key, _objectSpread$2(_objectSpread$2({}, options), {}, {
                    keySeparator: false
                  }));
                  if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
                }
                var lngs = [];
                var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
                if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
                  for (var i = 0; i < fallbackLngs.length; i++) {
                    lngs.push(fallbackLngs[i]);
                  }
                } else if (this.options.saveMissingTo === 'all') {
                  lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
                } else {
                  lngs.push(options.lng || this.language);
                }
                var send = function send(l, k, specificDefaultValue) {
                  var defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
                  if (_this2.options.missingKeyHandler) {
                    _this2.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, options);
                  } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
                    _this2.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, options);
                  }
                  _this2.emit('missingKey', l, namespace, k, res);
                };
                if (this.options.saveMissing) {
                  if (this.options.saveMissingPlurals && needsPluralHandling) {
                    lngs.forEach(function (language) {
                      _this2.pluralResolver.getSuffixes(language, options).forEach(function (suffix) {
                        send([language], key + suffix, options["defaultValue".concat(suffix)] || defaultValue);
                      });
                    });
                  } else {
                    send(lngs, key, defaultValue);
                  }
                }
              }
              res = this.extendTranslation(res, keys, options, resolved, lastKey);
              if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = "".concat(namespace, ":").concat(key);
              if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
                if (this.options.compatibilityAPI !== 'v1') {
                  res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(namespace, ":").concat(key) : key, usedDefault ? res : undefined);
                } else {
                  res = this.options.parseMissingKeyHandler(res);
                }
              }
            }
            if (returnDetails) {
              resolved.res = res;
              return resolved;
            }
            return res;
          }
        }, {
          key: "extendTranslation",
          value: function extendTranslation(res, key, options, resolved, lastKey) {
            var _this3 = this;
            if (this.i18nFormat && this.i18nFormat.parse) {
              res = this.i18nFormat.parse(res, _objectSpread$2(_objectSpread$2({}, this.options.interpolation.defaultVariables), options), resolved.usedLng, resolved.usedNS, resolved.usedKey, {
                resolved: resolved
              });
            } else if (!options.skipInterpolation) {
              if (options.interpolation) this.interpolator.init(_objectSpread$2(_objectSpread$2({}, options), {
                interpolation: _objectSpread$2(_objectSpread$2({}, this.options.interpolation), options.interpolation)
              }));
              var skipOnVariables = typeof res === 'string' && (options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
              var nestBef;
              if (skipOnVariables) {
                var nb = res.match(this.interpolator.nestingRegexp);
                nestBef = nb && nb.length;
              }
              var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
              if (this.options.interpolation.defaultVariables) data = _objectSpread$2(_objectSpread$2({}, this.options.interpolation.defaultVariables), data);
              res = this.interpolator.interpolate(res, data, options.lng || this.language, options);
              if (skipOnVariables) {
                var na = res.match(this.interpolator.nestingRegexp);
                var nestAft = na && na.length;
                if (nestBef < nestAft) options.nest = false;
              }
              if (options.nest !== false) res = this.interpolator.nest(res, function () {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                if (lastKey && lastKey[0] === args[0] && !options.context) {
                  _this3.logger.warn("It seems you are nesting recursively key: ".concat(args[0], " in key: ").concat(key[0]));
                  return null;
                }
                return _this3.translate.apply(_this3, args.concat([key]));
              }, options);
              if (options.interpolation) this.interpolator.reset();
            }
            var postProcess = options.postProcess || this.options.postProcess;
            var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;
            if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
              res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? _objectSpread$2({
                i18nResolved: resolved
              }, options) : options, this);
            }
            return res;
          }
        }, {
          key: "resolve",
          value: function resolve(keys) {
            var _this4 = this;
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var found;
            var usedKey;
            var exactUsedKey;
            var usedLng;
            var usedNS;
            if (typeof keys === 'string') keys = [keys];
            keys.forEach(function (k) {
              if (_this4.isValidLookup(found)) return;
              var extracted = _this4.extractFromKey(k, options);
              var key = extracted.key;
              usedKey = key;
              var namespaces = extracted.namespaces;
              if (_this4.options.fallbackNS) namespaces = namespaces.concat(_this4.options.fallbackNS);
              var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
              var needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && _this4.pluralResolver.shouldUseIntlApi();
              var needsContextHandling = options.context !== undefined && (typeof options.context === 'string' || typeof options.context === 'number') && options.context !== '';
              var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
              namespaces.forEach(function (ns) {
                if (_this4.isValidLookup(found)) return;
                usedNS = ns;
                if (!checkedLoadedFor["".concat(codes[0], "-").concat(ns)] && _this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
                  checkedLoadedFor["".concat(codes[0], "-").concat(ns)] = true;
                  _this4.logger.warn("key \"".concat(usedKey, "\" for languages \"").concat(codes.join(', '), "\" won't get resolved as namespace \"").concat(usedNS, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
                }
                codes.forEach(function (code) {
                  if (_this4.isValidLookup(found)) return;
                  usedLng = code;
                  var finalKeys = [key];
                  if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
                    _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
                  } else {
                    var pluralSuffix;
                    if (needsPluralHandling) pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count, options);
                    var zeroSuffix = "".concat(_this4.options.pluralSeparator, "zero");
                    if (needsPluralHandling) {
                      finalKeys.push(key + pluralSuffix);
                      if (needsZeroSuffixLookup) {
                        finalKeys.push(key + zeroSuffix);
                      }
                    }
                    if (needsContextHandling) {
                      var contextKey = "".concat(key).concat(_this4.options.contextSeparator).concat(options.context);
                      finalKeys.push(contextKey);
                      if (needsPluralHandling) {
                        finalKeys.push(contextKey + pluralSuffix);
                        if (needsZeroSuffixLookup) {
                          finalKeys.push(contextKey + zeroSuffix);
                        }
                      }
                    }
                  }
                  var possibleKey;
                  while (possibleKey = finalKeys.pop()) {
                    if (!_this4.isValidLookup(found)) {
                      exactUsedKey = possibleKey;
                      found = _this4.getResource(code, ns, possibleKey, options);
                    }
                  }
                });
              });
            });
            return {
              res: found,
              usedKey: usedKey,
              exactUsedKey: exactUsedKey,
              usedLng: usedLng,
              usedNS: usedNS
            };
          }
        }, {
          key: "isValidLookup",
          value: function isValidLookup(res) {
            return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
          }
        }, {
          key: "getResource",
          value: function getResource(code, ns, key) {
            var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
            return this.resourceStore.getResource(code, ns, key, options);
          }
        }], [{
          key: "hasDefaultValue",
          value: function hasDefaultValue(options) {
            var prefix = 'defaultValue';
            for (var option in options) {
              if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && undefined !== options[option]) {
                return true;
              }
            }
            return false;
          }
        }]);
        return Translator;
      }(EventEmitter);
      function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      var LanguageUtil = function () {
        function LanguageUtil(options) {
          _classCallCheck(this, LanguageUtil);
          this.options = options;
          this.supportedLngs = this.options.supportedLngs || false;
          this.logger = baseLogger.create('languageUtils');
        }
        _createClass(LanguageUtil, [{
          key: "getScriptPartFromCode",
          value: function getScriptPartFromCode(code) {
            if (!code || code.indexOf('-') < 0) return null;
            var p = code.split('-');
            if (p.length === 2) return null;
            p.pop();
            if (p[p.length - 1].toLowerCase() === 'x') return null;
            return this.formatLanguageCode(p.join('-'));
          }
        }, {
          key: "getLanguagePartFromCode",
          value: function getLanguagePartFromCode(code) {
            if (!code || code.indexOf('-') < 0) return code;
            var p = code.split('-');
            return this.formatLanguageCode(p[0]);
          }
        }, {
          key: "formatLanguageCode",
          value: function formatLanguageCode(code) {
            if (typeof code === 'string' && code.indexOf('-') > -1) {
              var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
              var p = code.split('-');
              if (this.options.lowerCaseLng) {
                p = p.map(function (part) {
                  return part.toLowerCase();
                });
              } else if (p.length === 2) {
                p[0] = p[0].toLowerCase();
                p[1] = p[1].toUpperCase();
                if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
              } else if (p.length === 3) {
                p[0] = p[0].toLowerCase();
                if (p[1].length === 2) p[1] = p[1].toUpperCase();
                if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
                if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
                if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
              }
              return p.join('-');
            }
            return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
          }
        }, {
          key: "isSupportedCode",
          value: function isSupportedCode(code) {
            if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
              code = this.getLanguagePartFromCode(code);
            }
            return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
          }
        }, {
          key: "getBestMatchFromCodes",
          value: function getBestMatchFromCodes(codes) {
            var _this = this;
            if (!codes) return null;
            var found;
            codes.forEach(function (code) {
              if (found) return;
              var cleanedLng = _this.formatLanguageCode(code);
              if (!_this.options.supportedLngs || _this.isSupportedCode(cleanedLng)) found = cleanedLng;
            });
            if (!found && this.options.supportedLngs) {
              codes.forEach(function (code) {
                if (found) return;
                var lngOnly = _this.getLanguagePartFromCode(code);
                if (_this.isSupportedCode(lngOnly)) return found = lngOnly;
                found = _this.options.supportedLngs.find(function (supportedLng) {
                  if (supportedLng.indexOf(lngOnly) === 0) return supportedLng;
                });
              });
            }
            if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
            return found;
          }
        }, {
          key: "getFallbackCodes",
          value: function getFallbackCodes(fallbacks, code) {
            if (!fallbacks) return [];
            if (typeof fallbacks === 'function') fallbacks = fallbacks(code);
            if (typeof fallbacks === 'string') fallbacks = [fallbacks];
            if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;
            if (!code) return fallbacks["default"] || [];
            var found = fallbacks[code];
            if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
            if (!found) found = fallbacks[this.formatLanguageCode(code)];
            if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
            if (!found) found = fallbacks["default"];
            return found || [];
          }
        }, {
          key: "toResolveHierarchy",
          value: function toResolveHierarchy(code, fallbackCode) {
            var _this2 = this;
            var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
            var codes = [];
            var addCode = function addCode(c) {
              if (!c) return;
              if (_this2.isSupportedCode(c)) {
                codes.push(c);
              } else {
                _this2.logger.warn("rejecting language code not found in supportedLngs: ".concat(c));
              }
            };
            if (typeof code === 'string' && code.indexOf('-') > -1) {
              if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
              if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
              if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
            } else if (typeof code === 'string') {
              addCode(this.formatLanguageCode(code));
            }
            fallbackCodes.forEach(function (fc) {
              if (codes.indexOf(fc) < 0) addCode(_this2.formatLanguageCode(fc));
            });
            return codes;
          }
        }]);
        return LanguageUtil;
      }();
      var sets = [{
        lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'tl', 'ti', 'tr', 'uz', 'wa'],
        nr: [1, 2],
        fc: 1
      }, {
        lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kk', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
        nr: [1, 2],
        fc: 2
      }, {
        lngs: ['ay', 'bo', 'cgg', 'fa', 'ht', 'id', 'ja', 'jbo', 'ka', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
        nr: [1],
        fc: 3
      }, {
        lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
        nr: [1, 2, 5],
        fc: 4
      }, {
        lngs: ['ar'],
        nr: [0, 1, 2, 3, 11, 100],
        fc: 5
      }, {
        lngs: ['cs', 'sk'],
        nr: [1, 2, 5],
        fc: 6
      }, {
        lngs: ['csb', 'pl'],
        nr: [1, 2, 5],
        fc: 7
      }, {
        lngs: ['cy'],
        nr: [1, 2, 3, 8],
        fc: 8
      }, {
        lngs: ['fr'],
        nr: [1, 2],
        fc: 9
      }, {
        lngs: ['ga'],
        nr: [1, 2, 3, 7, 11],
        fc: 10
      }, {
        lngs: ['gd'],
        nr: [1, 2, 3, 20],
        fc: 11
      }, {
        lngs: ['is'],
        nr: [1, 2],
        fc: 12
      }, {
        lngs: ['jv'],
        nr: [0, 1],
        fc: 13
      }, {
        lngs: ['kw'],
        nr: [1, 2, 3, 4],
        fc: 14
      }, {
        lngs: ['lt'],
        nr: [1, 2, 10],
        fc: 15
      }, {
        lngs: ['lv'],
        nr: [1, 2, 0],
        fc: 16
      }, {
        lngs: ['mk'],
        nr: [1, 2],
        fc: 17
      }, {
        lngs: ['mnk'],
        nr: [0, 1, 2],
        fc: 18
      }, {
        lngs: ['mt'],
        nr: [1, 2, 11, 20],
        fc: 19
      }, {
        lngs: ['or'],
        nr: [2, 1],
        fc: 2
      }, {
        lngs: ['ro'],
        nr: [1, 2, 20],
        fc: 20
      }, {
        lngs: ['sl'],
        nr: [5, 1, 2, 3],
        fc: 21
      }, {
        lngs: ['he', 'iw'],
        nr: [1, 2, 20, 21],
        fc: 22
      }];
      var _rulesPluralsTypes = {
        1: function _(n) {
          return Number(n > 1);
        },
        2: function _(n) {
          return Number(n != 1);
        },
        3: function _(n) {
          return 0;
        },
        4: function _(n) {
          return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        },
        5: function _(n) {
          return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
        },
        6: function _(n) {
          return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
        },
        7: function _(n) {
          return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        },
        8: function _(n) {
          return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
        },
        9: function _(n) {
          return Number(n >= 2);
        },
        10: function _(n) {
          return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
        },
        11: function _(n) {
          return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
        },
        12: function _(n) {
          return Number(n % 10 != 1 || n % 100 == 11);
        },
        13: function _(n) {
          return Number(n !== 0);
        },
        14: function _(n) {
          return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
        },
        15: function _(n) {
          return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        },
        16: function _(n) {
          return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
        },
        17: function _(n) {
          return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
        },
        18: function _(n) {
          return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
        },
        19: function _(n) {
          return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
        },
        20: function _(n) {
          return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
        },
        21: function _(n) {
          return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
        },
        22: function _(n) {
          return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
        }
      };
      var deprecatedJsonVersions = ['v1', 'v2', 'v3'];
      var suffixesOrder = {
        zero: 0,
        one: 1,
        two: 2,
        few: 3,
        many: 4,
        other: 5
      };
      function createRules() {
        var rules = {};
        sets.forEach(function (set) {
          set.lngs.forEach(function (l) {
            rules[l] = {
              numbers: set.nr,
              plurals: _rulesPluralsTypes[set.fc]
            };
          });
        });
        return rules;
      }
      var PluralResolver = function () {
        function PluralResolver(languageUtils) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          _classCallCheck(this, PluralResolver);
          this.languageUtils = languageUtils;
          this.options = options;
          this.logger = baseLogger.create('pluralResolver');
          if ((!this.options.compatibilityJSON || this.options.compatibilityJSON === 'v4') && (typeof Intl === 'undefined' || !Intl.PluralRules)) {
            this.options.compatibilityJSON = 'v3';
            this.logger.error('Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.');
          }
          this.rules = createRules();
        }
        _createClass(PluralResolver, [{
          key: "addRule",
          value: function addRule(lng, obj) {
            this.rules[lng] = obj;
          }
        }, {
          key: "getRule",
          value: function getRule(code) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            if (this.shouldUseIntlApi()) {
              try {
                return new Intl.PluralRules(code, {
                  type: options.ordinal ? 'ordinal' : 'cardinal'
                });
              } catch (_unused) {
                return;
              }
            }
            return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
          }
        }, {
          key: "needsPlural",
          value: function needsPlural(code) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var rule = this.getRule(code, options);
            if (this.shouldUseIntlApi()) {
              return rule && rule.resolvedOptions().pluralCategories.length > 1;
            }
            return rule && rule.numbers.length > 1;
          }
        }, {
          key: "getPluralFormsOfKey",
          value: function getPluralFormsOfKey(code, key) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            return this.getSuffixes(code, options).map(function (suffix) {
              return "".concat(key).concat(suffix);
            });
          }
        }, {
          key: "getSuffixes",
          value: function getSuffixes(code) {
            var _this = this;
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var rule = this.getRule(code, options);
            if (!rule) {
              return [];
            }
            if (this.shouldUseIntlApi()) {
              return rule.resolvedOptions().pluralCategories.sort(function (pluralCategory1, pluralCategory2) {
                return suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2];
              }).map(function (pluralCategory) {
                return "".concat(_this.options.prepend).concat(pluralCategory);
              });
            }
            return rule.numbers.map(function (number) {
              return _this.getSuffix(code, number, options);
            });
          }
        }, {
          key: "getSuffix",
          value: function getSuffix(code, count) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var rule = this.getRule(code, options);
            if (rule) {
              if (this.shouldUseIntlApi()) {
                return "".concat(this.options.prepend).concat(rule.select(count));
              }
              return this.getSuffixRetroCompatible(rule, count);
            }
            this.logger.warn("no plural rule found for: ".concat(code));
            return '';
          }
        }, {
          key: "getSuffixRetroCompatible",
          value: function getSuffixRetroCompatible(rule, count) {
            var _this2 = this;
            var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
            var suffix = rule.numbers[idx];
            if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
              if (suffix === 2) {
                suffix = 'plural';
              } else if (suffix === 1) {
                suffix = '';
              }
            }
            var returnSuffix = function returnSuffix() {
              return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
            };
            if (this.options.compatibilityJSON === 'v1') {
              if (suffix === 1) return '';
              if (typeof suffix === 'number') return "_plural_".concat(suffix.toString());
              return returnSuffix();
            } else if (this.options.compatibilityJSON === 'v2') {
              return returnSuffix();
            } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
              return returnSuffix();
            }
            return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
          }
        }, {
          key: "shouldUseIntlApi",
          value: function shouldUseIntlApi() {
            return !deprecatedJsonVersions.includes(this.options.compatibilityJSON);
          }
        }]);
        return PluralResolver;
      }();
      function ownKeys$3(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread$3(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys$3(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys$3(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      var Interpolator = function () {
        function Interpolator() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          _classCallCheck(this, Interpolator);
          this.logger = baseLogger.create('interpolator');
          this.options = options;
          this.format = options.interpolation && options.interpolation.format || function (value) {
            return value;
          };
          this.init(options);
        }
        _createClass(Interpolator, [{
          key: "init",
          value: function init() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            if (!options.interpolation) options.interpolation = {
              escapeValue: true
            };
            var iOpts = options.interpolation;
            this.escape = iOpts.escape !== undefined ? iOpts.escape : escape;
            this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
            this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;
            this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
            this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
            this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
            this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
            this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';
            this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
            this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');
            this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ',';
            this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000;
            this.alwaysFormat = iOpts.alwaysFormat !== undefined ? iOpts.alwaysFormat : false;
            this.resetRegExp();
          }
        }, {
          key: "reset",
          value: function reset() {
            if (this.options) this.init(this.options);
          }
        }, {
          key: "resetRegExp",
          value: function resetRegExp() {
            var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
            this.regexp = new RegExp(regexpStr, 'g');
            var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
            this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');
            var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
            this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
          }
        }, {
          key: "interpolate",
          value: function interpolate(str, data, lng, options) {
            var _this = this;
            var match;
            var value;
            var replaces;
            var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
            function regexSafe(val) {
              return val.replace(/\$/g, '$$$$');
            }
            var handleFormat = function handleFormat(key) {
              if (key.indexOf(_this.formatSeparator) < 0) {
                var path = getPathWithDefaults(data, defaultData, key);
                return _this.alwaysFormat ? _this.format(path, undefined, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
                  interpolationkey: key
                })) : path;
              }
              var p = key.split(_this.formatSeparator);
              var k = p.shift().trim();
              var f = p.join(_this.formatSeparator).trim();
              return _this.format(getPathWithDefaults(data, defaultData, k), f, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
                interpolationkey: k
              }));
            };
            this.resetRegExp();
            var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
            var skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
            var todos = [{
              regex: this.regexpUnescape,
              safeValue: function safeValue(val) {
                return regexSafe(val);
              }
            }, {
              regex: this.regexp,
              safeValue: function safeValue(val) {
                return _this.escapeValue ? regexSafe(_this.escape(val)) : regexSafe(val);
              }
            }];
            todos.forEach(function (todo) {
              replaces = 0;
              while (match = todo.regex.exec(str)) {
                var matchedVar = match[1].trim();
                value = handleFormat(matchedVar);
                if (value === undefined) {
                  if (typeof missingInterpolationHandler === 'function') {
                    var temp = missingInterpolationHandler(str, match, options);
                    value = typeof temp === 'string' ? temp : '';
                  } else if (options && options.hasOwnProperty(matchedVar)) {
                    value = '';
                  } else if (skipOnVariables) {
                    value = match[0];
                    continue;
                  } else {
                    _this.logger.warn("missed to pass in variable ".concat(matchedVar, " for interpolating ").concat(str));
                    value = '';
                  }
                } else if (typeof value !== 'string' && !_this.useRawValueToEscape) {
                  value = makeString(value);
                }
                var safeValue = todo.safeValue(value);
                str = str.replace(match[0], safeValue);
                if (skipOnVariables) {
                  todo.regex.lastIndex += value.length;
                  todo.regex.lastIndex -= match[0].length;
                } else {
                  todo.regex.lastIndex = 0;
                }
                replaces++;
                if (replaces >= _this.maxReplaces) {
                  break;
                }
              }
            });
            return str;
          }
        }, {
          key: "nest",
          value: function nest(str, fc) {
            var _this2 = this;
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var match;
            var value;
            var clonedOptions = _objectSpread$3({}, options);
            clonedOptions.applyPostProcessor = false;
            delete clonedOptions.defaultValue;
            function handleHasOptions(key, inheritedOptions) {
              var sep = this.nestingOptionsSeparator;
              if (key.indexOf(sep) < 0) return key;
              var c = key.split(new RegExp("".concat(sep, "[ ]*{")));
              var optionsString = "{".concat(c[1]);
              key = c[0];
              optionsString = this.interpolate(optionsString, clonedOptions);
              var matchedSingleQuotes = optionsString.match(/'/g);
              var matchedDoubleQuotes = optionsString.match(/"/g);
              if (matchedSingleQuotes && matchedSingleQuotes.length % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
                optionsString = optionsString.replace(/'/g, '"');
              }
              try {
                clonedOptions = JSON.parse(optionsString);
                if (inheritedOptions) clonedOptions = _objectSpread$3(_objectSpread$3({}, inheritedOptions), clonedOptions);
              } catch (e) {
                this.logger.warn("failed parsing options string in nesting for key ".concat(key), e);
                return "".concat(key).concat(sep).concat(optionsString);
              }
              delete clonedOptions.defaultValue;
              return key;
            }
            while (match = this.nestingRegexp.exec(str)) {
              var formatters = [];
              var doReduce = false;
              if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
                var r = match[1].split(this.formatSeparator).map(function (elem) {
                  return elem.trim();
                });
                match[1] = r.shift();
                formatters = r;
                doReduce = true;
              }
              value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
              if (value && match[0] === str && typeof value !== 'string') return value;
              if (typeof value !== 'string') value = makeString(value);
              if (!value) {
                this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
                value = '';
              }
              if (doReduce) {
                value = formatters.reduce(function (v, f) {
                  return _this2.format(v, f, options.lng, _objectSpread$3(_objectSpread$3({}, options), {}, {
                    interpolationkey: match[1].trim()
                  }));
                }, value.trim());
              }
              str = str.replace(match[0], value);
              this.regexp.lastIndex = 0;
            }
            return str;
          }
        }]);
        return Interpolator;
      }();
      function ownKeys$4(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread$4(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys$4(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys$4(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      function parseFormatStr(formatStr) {
        var formatName = formatStr.toLowerCase().trim();
        var formatOptions = {};
        if (formatStr.indexOf('(') > -1) {
          var p = formatStr.split('(');
          formatName = p[0].toLowerCase().trim();
          var optStr = p[1].substring(0, p[1].length - 1);
          if (formatName === 'currency' && optStr.indexOf(':') < 0) {
            if (!formatOptions.currency) formatOptions.currency = optStr.trim();
          } else if (formatName === 'relativetime' && optStr.indexOf(':') < 0) {
            if (!formatOptions.range) formatOptions.range = optStr.trim();
          } else {
            var opts = optStr.split(';');
            opts.forEach(function (opt) {
              if (!opt) return;
              var _opt$split = opt.split(':'),
                _opt$split2 = _toArray(_opt$split),
                key = _opt$split2[0],
                rest = _opt$split2.slice(1);
              var val = rest.join(':').trim().replace(/^'+|'+$/g, '');
              if (!formatOptions[key.trim()]) formatOptions[key.trim()] = val;
              if (val === 'false') formatOptions[key.trim()] = false;
              if (val === 'true') formatOptions[key.trim()] = true;
              if (!isNaN(val)) formatOptions[key.trim()] = parseInt(val, 10);
            });
          }
        }
        return {
          formatName: formatName,
          formatOptions: formatOptions
        };
      }
      function createCachedFormatter(fn) {
        var cache = {};
        return function invokeFormatter(val, lng, options) {
          var key = lng + JSON.stringify(options);
          var formatter = cache[key];
          if (!formatter) {
            formatter = fn(lng, options);
            cache[key] = formatter;
          }
          return formatter(val);
        };
      }
      var Formatter = function () {
        function Formatter() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          _classCallCheck(this, Formatter);
          this.logger = baseLogger.create('formatter');
          this.options = options;
          this.formats = {
            number: createCachedFormatter(function (lng, options) {
              var formatter = new Intl.NumberFormat(lng, options);
              return function (val) {
                return formatter.format(val);
              };
            }),
            currency: createCachedFormatter(function (lng, options) {
              var formatter = new Intl.NumberFormat(lng, _objectSpread$4(_objectSpread$4({}, options), {}, {
                style: 'currency'
              }));
              return function (val) {
                return formatter.format(val);
              };
            }),
            datetime: createCachedFormatter(function (lng, options) {
              var formatter = new Intl.DateTimeFormat(lng, _objectSpread$4({}, options));
              return function (val) {
                return formatter.format(val);
              };
            }),
            relativetime: createCachedFormatter(function (lng, options) {
              var formatter = new Intl.RelativeTimeFormat(lng, _objectSpread$4({}, options));
              return function (val) {
                return formatter.format(val, options.range || 'day');
              };
            }),
            list: createCachedFormatter(function (lng, options) {
              var formatter = new Intl.ListFormat(lng, _objectSpread$4({}, options));
              return function (val) {
                return formatter.format(val);
              };
            })
          };
          this.init(options);
        }
        _createClass(Formatter, [{
          key: "init",
          value: function init(services) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
              interpolation: {}
            };
            var iOpts = options.interpolation;
            this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
          }
        }, {
          key: "add",
          value: function add(name, fc) {
            this.formats[name.toLowerCase().trim()] = fc;
          }
        }, {
          key: "addCached",
          value: function addCached(name, fc) {
            this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
          }
        }, {
          key: "format",
          value: function format(value, _format, lng, options) {
            var _this = this;
            var formats = _format.split(this.formatSeparator);
            var result = formats.reduce(function (mem, f) {
              var _parseFormatStr = parseFormatStr(f),
                formatName = _parseFormatStr.formatName,
                formatOptions = _parseFormatStr.formatOptions;
              if (_this.formats[formatName]) {
                var formatted = mem;
                try {
                  var valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
                  var l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
                  formatted = _this.formats[formatName](mem, l, _objectSpread$4(_objectSpread$4(_objectSpread$4({}, formatOptions), options), valOptions));
                } catch (error) {
                  _this.logger.warn(error);
                }
                return formatted;
              } else {
                _this.logger.warn("there was no format function for ".concat(formatName));
              }
              return mem;
            }, value);
            return result;
          }
        }]);
        return Formatter;
      }();
      function ownKeys$5(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread$5(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys$5(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys$5(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      function _createSuper$2(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct$2();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived),
            result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      function _isNativeReflectConstruct$2() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }
      function removePending(q, name) {
        if (q.pending[name] !== undefined) {
          delete q.pending[name];
          q.pendingCount--;
        }
      }
      var Connector = function (_EventEmitter) {
        _inherits(Connector, _EventEmitter);
        var _super = _createSuper$2(Connector);
        function Connector(backend, store, services) {
          var _this;
          var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          _classCallCheck(this, Connector);
          _this = _super.call(this);
          if (isIE10) {
            EventEmitter.call(_assertThisInitialized(_this));
          }
          _this.backend = backend;
          _this.store = store;
          _this.services = services;
          _this.languageUtils = services.languageUtils;
          _this.options = options;
          _this.logger = baseLogger.create('backendConnector');
          _this.waitingReads = [];
          _this.maxParallelReads = options.maxParallelReads || 10;
          _this.readingCalls = 0;
          _this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
          _this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
          _this.state = {};
          _this.queue = [];
          if (_this.backend && _this.backend.init) {
            _this.backend.init(services, options.backend, options);
          }
          return _this;
        }
        _createClass(Connector, [{
          key: "queueLoad",
          value: function queueLoad(languages, namespaces, options, callback) {
            var _this2 = this;
            var toLoad = {};
            var pending = {};
            var toLoadLanguages = {};
            var toLoadNamespaces = {};
            languages.forEach(function (lng) {
              var hasAllNamespaces = true;
              namespaces.forEach(function (ns) {
                var name = "".concat(lng, "|").concat(ns);
                if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
                  _this2.state[name] = 2;
                } else if (_this2.state[name] < 0) ;else if (_this2.state[name] === 1) {
                  if (pending[name] === undefined) pending[name] = true;
                } else {
                  _this2.state[name] = 1;
                  hasAllNamespaces = false;
                  if (pending[name] === undefined) pending[name] = true;
                  if (toLoad[name] === undefined) toLoad[name] = true;
                  if (toLoadNamespaces[ns] === undefined) toLoadNamespaces[ns] = true;
                }
              });
              if (!hasAllNamespaces) toLoadLanguages[lng] = true;
            });
            if (Object.keys(toLoad).length || Object.keys(pending).length) {
              this.queue.push({
                pending: pending,
                pendingCount: Object.keys(pending).length,
                loaded: {},
                errors: [],
                callback: callback
              });
            }
            return {
              toLoad: Object.keys(toLoad),
              pending: Object.keys(pending),
              toLoadLanguages: Object.keys(toLoadLanguages),
              toLoadNamespaces: Object.keys(toLoadNamespaces)
            };
          }
        }, {
          key: "loaded",
          value: function loaded(name, err, data) {
            var s = name.split('|');
            var lng = s[0];
            var ns = s[1];
            if (err) this.emit('failedLoading', lng, ns, err);
            if (data) {
              this.store.addResourceBundle(lng, ns, data);
            }
            this.state[name] = err ? -1 : 2;
            var loaded = {};
            this.queue.forEach(function (q) {
              pushPath(q.loaded, [lng], ns);
              removePending(q, name);
              if (err) q.errors.push(err);
              if (q.pendingCount === 0 && !q.done) {
                Object.keys(q.loaded).forEach(function (l) {
                  if (!loaded[l]) loaded[l] = {};
                  var loadedKeys = q.loaded[l];
                  if (loadedKeys.length) {
                    loadedKeys.forEach(function (ns) {
                      if (loaded[l][ns] === undefined) loaded[l][ns] = true;
                    });
                  }
                });
                q.done = true;
                if (q.errors.length) {
                  q.callback(q.errors);
                } else {
                  q.callback();
                }
              }
            });
            this.emit('loaded', loaded);
            this.queue = this.queue.filter(function (q) {
              return !q.done;
            });
          }
        }, {
          key: "read",
          value: function read(lng, ns, fcName) {
            var _this3 = this;
            var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.retryTimeout;
            var callback = arguments.length > 5 ? arguments[5] : undefined;
            if (!lng.length) return callback(null, {});
            if (this.readingCalls >= this.maxParallelReads) {
              this.waitingReads.push({
                lng: lng,
                ns: ns,
                fcName: fcName,
                tried: tried,
                wait: wait,
                callback: callback
              });
              return;
            }
            this.readingCalls++;
            return this.backend[fcName](lng, ns, function (err, data) {
              _this3.readingCalls--;
              if (_this3.waitingReads.length > 0) {
                var next = _this3.waitingReads.shift();
                _this3.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
              }
              if (err && data && tried < _this3.maxRetries) {
                setTimeout(function () {
                  _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
                }, wait);
                return;
              }
              callback(err, data);
            });
          }
        }, {
          key: "prepareLoading",
          value: function prepareLoading(languages, namespaces) {
            var _this4 = this;
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var callback = arguments.length > 3 ? arguments[3] : undefined;
            if (!this.backend) {
              this.logger.warn('No backend was added via i18next.use. Will not load resources.');
              return callback && callback();
            }
            if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
            if (typeof namespaces === 'string') namespaces = [namespaces];
            var toLoad = this.queueLoad(languages, namespaces, options, callback);
            if (!toLoad.toLoad.length) {
              if (!toLoad.pending.length) callback();
              return null;
            }
            toLoad.toLoad.forEach(function (name) {
              _this4.loadOne(name);
            });
          }
        }, {
          key: "load",
          value: function load(languages, namespaces, callback) {
            this.prepareLoading(languages, namespaces, {}, callback);
          }
        }, {
          key: "reload",
          value: function reload(languages, namespaces, callback) {
            this.prepareLoading(languages, namespaces, {
              reload: true
            }, callback);
          }
        }, {
          key: "loadOne",
          value: function loadOne(name) {
            var _this5 = this;
            var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var s = name.split('|');
            var lng = s[0];
            var ns = s[1];
            this.read(lng, ns, 'read', undefined, undefined, function (err, data) {
              if (err) _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
              if (!err && data) _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);
              _this5.loaded(name, err, data);
            });
          }
        }, {
          key: "saveMissing",
          value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
            var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
            if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
              this.logger.warn("did not save key \"".concat(key, "\" as the namespace \"").concat(namespace, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
              return;
            }
            if (key === undefined || key === null || key === '') return;
            if (this.backend && this.backend.create) {
              this.backend.create(languages, namespace, key, fallbackValue, null, _objectSpread$5(_objectSpread$5({}, options), {}, {
                isUpdate: isUpdate
              }));
            }
            if (!languages || !languages[0]) return;
            this.store.addResource(languages[0], namespace, key, fallbackValue);
          }
        }]);
        return Connector;
      }(EventEmitter);
      function get() {
        return {
          debug: false,
          initImmediate: true,
          ns: ['translation'],
          defaultNS: ['translation'],
          fallbackLng: ['dev'],
          fallbackNS: false,
          supportedLngs: false,
          nonExplicitSupportedLngs: false,
          load: 'all',
          preload: false,
          simplifyPluralSuffix: true,
          keySeparator: '.',
          nsSeparator: ':',
          pluralSeparator: '_',
          contextSeparator: '_',
          partialBundledLanguages: false,
          saveMissing: false,
          updateMissing: false,
          saveMissingTo: 'fallback',
          saveMissingPlurals: true,
          missingKeyHandler: false,
          missingInterpolationHandler: false,
          postProcess: false,
          postProcessPassResolved: false,
          returnNull: true,
          returnEmptyString: true,
          returnObjects: false,
          joinArrays: false,
          returnedObjectHandler: false,
          parseMissingKeyHandler: false,
          appendNamespaceToMissingKey: false,
          appendNamespaceToCIMode: false,
          overloadTranslationOptionHandler: function handle(args) {
            var ret = {};
            if (_typeof(args[1]) === 'object') ret = args[1];
            if (typeof args[1] === 'string') ret.defaultValue = args[1];
            if (typeof args[2] === 'string') ret.tDescription = args[2];
            if (_typeof(args[2]) === 'object' || _typeof(args[3]) === 'object') {
              var options = args[3] || args[2];
              Object.keys(options).forEach(function (key) {
                ret[key] = options[key];
              });
            }
            return ret;
          },
          interpolation: {
            escapeValue: true,
            format: function format(value, _format, lng, options) {
              return value;
            },
            prefix: '{{',
            suffix: '}}',
            formatSeparator: ',',
            unescapePrefix: '-',
            nestingPrefix: '$t(',
            nestingSuffix: ')',
            nestingOptionsSeparator: ',',
            maxReplaces: 1000,
            skipOnVariables: true
          }
        };
      }
      function transformOptions(options) {
        if (typeof options.ns === 'string') options.ns = [options.ns];
        if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
        if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS];
        if (options.supportedLngs && options.supportedLngs.indexOf('cimode') < 0) {
          options.supportedLngs = options.supportedLngs.concat(['cimode']);
        }
        return options;
      }
      function ownKeys$6(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread$6(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys$6(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys$6(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      function _createSuper$3(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct$3();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived),
            result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      function _isNativeReflectConstruct$3() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }
      function noop() {}
      function bindMemberFunctions(inst) {
        var mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
        mems.forEach(function (mem) {
          if (typeof inst[mem] === 'function') {
            inst[mem] = inst[mem].bind(inst);
          }
        });
      }
      var I18n = function (_EventEmitter) {
        _inherits(I18n, _EventEmitter);
        var _super = _createSuper$3(I18n);
        function I18n() {
          var _this;
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var callback = arguments.length > 1 ? arguments[1] : undefined;
          _classCallCheck(this, I18n);
          _this = _super.call(this);
          if (isIE10) {
            EventEmitter.call(_assertThisInitialized(_this));
          }
          _this.options = transformOptions(options);
          _this.services = {};
          _this.logger = baseLogger;
          _this.modules = {
            external: []
          };
          bindMemberFunctions(_assertThisInitialized(_this));
          if (callback && !_this.isInitialized && !options.isClone) {
            if (!_this.options.initImmediate) {
              _this.init(options, callback);
              return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
            }
            setTimeout(function () {
              _this.init(options, callback);
            }, 0);
          }
          return _this;
        }
        _createClass(I18n, [{
          key: "init",
          value: function init() {
            var _this2 = this;
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments.length > 1 ? arguments[1] : undefined;
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            if (!options.defaultNS && options.defaultNS !== false && options.ns) {
              if (typeof options.ns === 'string') {
                options.defaultNS = options.ns;
              } else if (options.ns.indexOf('translation') < 0) {
                options.defaultNS = options.ns[0];
              }
            }
            var defOpts = get();
            this.options = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, defOpts), this.options), transformOptions(options));
            if (this.options.compatibilityAPI !== 'v1') {
              this.options.interpolation = _objectSpread$6(_objectSpread$6({}, defOpts.interpolation), this.options.interpolation);
            }
            if (options.keySeparator !== undefined) {
              this.options.userDefinedKeySeparator = options.keySeparator;
            }
            if (options.nsSeparator !== undefined) {
              this.options.userDefinedNsSeparator = options.nsSeparator;
            }
            function createClassOnDemand(ClassOrObject) {
              if (!ClassOrObject) return null;
              if (typeof ClassOrObject === 'function') return new ClassOrObject();
              return ClassOrObject;
            }
            if (!this.options.isClone) {
              if (this.modules.logger) {
                baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
              } else {
                baseLogger.init(null, this.options);
              }
              var formatter;
              if (this.modules.formatter) {
                formatter = this.modules.formatter;
              } else if (typeof Intl !== 'undefined') {
                formatter = Formatter;
              }
              var lu = new LanguageUtil(this.options);
              this.store = new ResourceStore(this.options.resources, this.options);
              var s = this.services;
              s.logger = baseLogger;
              s.resourceStore = this.store;
              s.languageUtils = lu;
              s.pluralResolver = new PluralResolver(lu, {
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
              });
              if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
                s.formatter = createClassOnDemand(formatter);
                s.formatter.init(s, this.options);
                this.options.interpolation.format = s.formatter.format.bind(s.formatter);
              }
              s.interpolator = new Interpolator(this.options);
              s.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
              };
              s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
              s.backendConnector.on('*', function (event) {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key];
                }
                _this2.emit.apply(_this2, [event].concat(args));
              });
              if (this.modules.languageDetector) {
                s.languageDetector = createClassOnDemand(this.modules.languageDetector);
                s.languageDetector.init(s, this.options.detection, this.options);
              }
              if (this.modules.i18nFormat) {
                s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
                if (s.i18nFormat.init) s.i18nFormat.init(this);
              }
              this.translator = new Translator(this.services, this.options);
              this.translator.on('*', function (event) {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args[_key2 - 1] = arguments[_key2];
                }
                _this2.emit.apply(_this2, [event].concat(args));
              });
              this.modules.external.forEach(function (m) {
                if (m.init) m.init(_this2);
              });
            }
            this.format = this.options.interpolation.format;
            if (!callback) callback = noop;
            if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
              var codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
              if (codes.length > 0 && codes[0] !== 'dev') this.options.lng = codes[0];
            }
            if (!this.services.languageDetector && !this.options.lng) {
              this.logger.warn('init: no languageDetector is used and no lng is defined');
            }
            var storeApi = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
            storeApi.forEach(function (fcName) {
              _this2[fcName] = function () {
                var _this2$store;
                return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
              };
            });
            var storeApiChained = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
            storeApiChained.forEach(function (fcName) {
              _this2[fcName] = function () {
                var _this2$store2;
                (_this2$store2 = _this2.store)[fcName].apply(_this2$store2, arguments);
                return _this2;
              };
            });
            var deferred = defer();
            var load = function load() {
              var finish = function finish(err, t) {
                if (_this2.isInitialized && !_this2.initializedStoreOnce) _this2.logger.warn('init: i18next is already initialized. You should call init just once!');
                _this2.isInitialized = true;
                if (!_this2.options.isClone) _this2.logger.log('initialized', _this2.options);
                _this2.emit('initialized', _this2.options);
                deferred.resolve(t);
                callback(err, t);
              };
              if (_this2.languages && _this2.options.compatibilityAPI !== 'v1' && !_this2.isInitialized) return finish(null, _this2.t.bind(_this2));
              _this2.changeLanguage(_this2.options.lng, finish);
            };
            if (this.options.resources || !this.options.initImmediate) {
              load();
            } else {
              setTimeout(load, 0);
            }
            return deferred;
          }
        }, {
          key: "loadResources",
          value: function loadResources(language) {
            var _this3 = this;
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
            var usedCallback = callback;
            var usedLng = typeof language === 'string' ? language : this.language;
            if (typeof language === 'function') usedCallback = language;
            if (!this.options.resources || this.options.partialBundledLanguages) {
              if (usedLng && usedLng.toLowerCase() === 'cimode') return usedCallback();
              var toLoad = [];
              var append = function append(lng) {
                if (!lng) return;
                var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);
                lngs.forEach(function (l) {
                  if (toLoad.indexOf(l) < 0) toLoad.push(l);
                });
              };
              if (!usedLng) {
                var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                fallbacks.forEach(function (l) {
                  return append(l);
                });
              } else {
                append(usedLng);
              }
              if (this.options.preload) {
                this.options.preload.forEach(function (l) {
                  return append(l);
                });
              }
              this.services.backendConnector.load(toLoad, this.options.ns, function (e) {
                if (!e && !_this3.resolvedLanguage && _this3.language) _this3.setResolvedLanguage(_this3.language);
                usedCallback(e);
              });
            } else {
              usedCallback(null);
            }
          }
        }, {
          key: "reloadResources",
          value: function reloadResources(lngs, ns, callback) {
            var deferred = defer();
            if (!lngs) lngs = this.languages;
            if (!ns) ns = this.options.ns;
            if (!callback) callback = noop;
            this.services.backendConnector.reload(lngs, ns, function (err) {
              deferred.resolve();
              callback(err);
            });
            return deferred;
          }
        }, {
          key: "use",
          value: function use(module) {
            if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
            if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');
            if (module.type === 'backend') {
              this.modules.backend = module;
            }
            if (module.type === 'logger' || module.log && module.warn && module.error) {
              this.modules.logger = module;
            }
            if (module.type === 'languageDetector') {
              this.modules.languageDetector = module;
            }
            if (module.type === 'i18nFormat') {
              this.modules.i18nFormat = module;
            }
            if (module.type === 'postProcessor') {
              postProcessor.addPostProcessor(module);
            }
            if (module.type === 'formatter') {
              this.modules.formatter = module;
            }
            if (module.type === '3rdParty') {
              this.modules.external.push(module);
            }
            return this;
          }
        }, {
          key: "setResolvedLanguage",
          value: function setResolvedLanguage(l) {
            if (!l || !this.languages) return;
            if (['cimode', 'dev'].indexOf(l) > -1) return;
            for (var li = 0; li < this.languages.length; li++) {
              var lngInLngs = this.languages[li];
              if (['cimode', 'dev'].indexOf(lngInLngs) > -1) continue;
              if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
                this.resolvedLanguage = lngInLngs;
                break;
              }
            }
          }
        }, {
          key: "changeLanguage",
          value: function changeLanguage(lng, callback) {
            var _this4 = this;
            this.isLanguageChangingTo = lng;
            var deferred = defer();
            this.emit('languageChanging', lng);
            var setLngProps = function setLngProps(l) {
              _this4.language = l;
              _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
              _this4.resolvedLanguage = undefined;
              _this4.setResolvedLanguage(l);
            };
            var done = function done(err, l) {
              if (l) {
                setLngProps(l);
                _this4.translator.changeLanguage(l);
                _this4.isLanguageChangingTo = undefined;
                _this4.emit('languageChanged', l);
                _this4.logger.log('languageChanged', l);
              } else {
                _this4.isLanguageChangingTo = undefined;
              }
              deferred.resolve(function () {
                return _this4.t.apply(_this4, arguments);
              });
              if (callback) callback(err, function () {
                return _this4.t.apply(_this4, arguments);
              });
            };
            var setLng = function setLng(lngs) {
              if (!lng && !lngs && _this4.services.languageDetector) lngs = [];
              var l = typeof lngs === 'string' ? lngs : _this4.services.languageUtils.getBestMatchFromCodes(lngs);
              if (l) {
                if (!_this4.language) {
                  setLngProps(l);
                }
                if (!_this4.translator.language) _this4.translator.changeLanguage(l);
                if (_this4.services.languageDetector) _this4.services.languageDetector.cacheUserLanguage(l);
              }
              _this4.loadResources(l, function (err) {
                done(err, l);
              });
            };
            if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
              setLng(this.services.languageDetector.detect());
            } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
              this.services.languageDetector.detect(setLng);
            } else {
              setLng(lng);
            }
            return deferred;
          }
        }, {
          key: "getFixedT",
          value: function getFixedT(lng, ns, keyPrefix) {
            var _this5 = this;
            var fixedT = function fixedT(key, opts) {
              var options;
              if (_typeof(opts) !== 'object') {
                for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
                  rest[_key3 - 2] = arguments[_key3];
                }
                options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
              } else {
                options = _objectSpread$6({}, opts);
              }
              options.lng = options.lng || fixedT.lng;
              options.lngs = options.lngs || fixedT.lngs;
              options.ns = options.ns || fixedT.ns;
              options.keyPrefix = options.keyPrefix || keyPrefix || fixedT.keyPrefix;
              var keySeparator = _this5.options.keySeparator || '.';
              var resultKey = options.keyPrefix ? "".concat(options.keyPrefix).concat(keySeparator).concat(key) : key;
              return _this5.t(resultKey, options);
            };
            if (typeof lng === 'string') {
              fixedT.lng = lng;
            } else {
              fixedT.lngs = lng;
            }
            fixedT.ns = ns;
            fixedT.keyPrefix = keyPrefix;
            return fixedT;
          }
        }, {
          key: "t",
          value: function t() {
            var _this$translator;
            return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
          }
        }, {
          key: "exists",
          value: function exists() {
            var _this$translator2;
            return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
          }
        }, {
          key: "setDefaultNamespace",
          value: function setDefaultNamespace(ns) {
            this.options.defaultNS = ns;
          }
        }, {
          key: "hasLoadedNamespace",
          value: function hasLoadedNamespace(ns) {
            var _this6 = this;
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            if (!this.isInitialized) {
              this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
              return false;
            }
            if (!this.languages || !this.languages.length) {
              this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
              return false;
            }
            var lng = this.resolvedLanguage || this.languages[0];
            var fallbackLng = this.options ? this.options.fallbackLng : false;
            var lastLng = this.languages[this.languages.length - 1];
            if (lng.toLowerCase() === 'cimode') return true;
            var loadNotPending = function loadNotPending(l, n) {
              var loadState = _this6.services.backendConnector.state["".concat(l, "|").concat(n)];
              return loadState === -1 || loadState === 2;
            };
            if (options.precheck) {
              var preResult = options.precheck(this, loadNotPending);
              if (preResult !== undefined) return preResult;
            }
            if (this.hasResourceBundle(lng, ns)) return true;
            if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
            if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
            return false;
          }
        }, {
          key: "loadNamespaces",
          value: function loadNamespaces(ns, callback) {
            var _this7 = this;
            var deferred = defer();
            if (!this.options.ns) {
              callback && callback();
              return Promise.resolve();
            }
            if (typeof ns === 'string') ns = [ns];
            ns.forEach(function (n) {
              if (_this7.options.ns.indexOf(n) < 0) _this7.options.ns.push(n);
            });
            this.loadResources(function (err) {
              deferred.resolve();
              if (callback) callback(err);
            });
            return deferred;
          }
        }, {
          key: "loadLanguages",
          value: function loadLanguages(lngs, callback) {
            var deferred = defer();
            if (typeof lngs === 'string') lngs = [lngs];
            var preloaded = this.options.preload || [];
            var newLngs = lngs.filter(function (lng) {
              return preloaded.indexOf(lng) < 0;
            });
            if (!newLngs.length) {
              if (callback) callback();
              return Promise.resolve();
            }
            this.options.preload = preloaded.concat(newLngs);
            this.loadResources(function (err) {
              deferred.resolve();
              if (callback) callback(err);
            });
            return deferred;
          }
        }, {
          key: "dir",
          value: function dir(lng) {
            if (!lng) lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
            if (!lng) return 'rtl';
            var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ug', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam', 'ckb'];
            return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
          }
        }, {
          key: "cloneInstance",
          value: function cloneInstance() {
            var _this8 = this;
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
            var mergedOptions = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, this.options), options), {
              isClone: true
            });
            var clone = new I18n(mergedOptions);
            if (options.debug !== undefined || options.prefix !== undefined) {
              clone.logger = clone.logger.clone(options);
            }
            var membersToCopy = ['store', 'services', 'language'];
            membersToCopy.forEach(function (m) {
              clone[m] = _this8[m];
            });
            clone.services = _objectSpread$6({}, this.services);
            clone.services.utils = {
              hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
            };
            clone.translator = new Translator(clone.services, clone.options);
            clone.translator.on('*', function (event) {
              for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                args[_key4 - 1] = arguments[_key4];
              }
              clone.emit.apply(clone, [event].concat(args));
            });
            clone.init(mergedOptions, callback);
            clone.translator.options = clone.options;
            clone.translator.backendConnector.services.utils = {
              hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
            };
            return clone;
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            return {
              options: this.options,
              store: this.store,
              language: this.language,
              languages: this.languages,
              resolvedLanguage: this.resolvedLanguage
            };
          }
        }]);
        return I18n;
      }(EventEmitter);
      _defineProperty(I18n, "createInstance", function () {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var callback = arguments.length > 1 ? arguments[1] : undefined;
        return new I18n(options, callback);
      });
      var instance = exports('default', I18n.createInstance());
      instance.createInstance = I18n.createInstance;
      var createInstance = exports('createInstance', instance.createInstance);
      var init = exports('init', instance.init);
      var loadResources = exports('loadResources', instance.loadResources);
      var reloadResources = exports('reloadResources', instance.reloadResources);
      var use = exports('use', instance.use);
      var changeLanguage = exports('changeLanguage', instance.changeLanguage);
      var getFixedT = exports('getFixedT', instance.getFixedT);
      var t = exports('t', instance.t);
      var exists = exports('exists', instance.exists);
      var setDefaultNamespace = exports('setDefaultNamespace', instance.setDefaultNamespace);
      var hasLoadedNamespace = exports('hasLoadedNamespace', instance.hasLoadedNamespace);
      var loadNamespaces = exports('loadNamespaces', instance.loadNamespaces);
      var loadLanguages = exports('loadLanguages', instance.loadLanguages);
    }
  };
});

System.register("chunks:///_virtual/inherits.js", ['./setPrototypeOf.js'], function (exports) {
  var _setPrototypeOf;
  return {
    setters: [function (module) {
      _setPrototypeOf = module.default;
    }],
    execute: function () {
      exports('default', _inherits);
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(subClass, "prototype", {
          writable: false
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }
    }
  };
});

System.register("chunks:///_virtual/iterableToArray.js", [], function (exports) {
  return {
    execute: function () {
      exports('default', _iterableToArray);
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
      }
    }
  };
});

System.register("chunks:///_virtual/nonIterableRest.js", [], function (exports) {
  return {
    execute: function () {
      exports('default', _nonIterableRest);
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
    }
  };
});

System.register("chunks:///_virtual/plural-rules.js", ['./cjs-loader.mjs', './factory.js', './pseudo-number-format.js'], function (exports, module) {
  var loader, __cjsMetaURL$1, __cjsMetaURL$2;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }, function (module) {
      __cjsMetaURL$2 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        var getPluralRules = require('./factory');
        var PseudoNumberFormat = require('./pseudo-number-format');
        function _interopDefaultLegacy(e) {
          return e && typeof e === 'object' && 'default' in e ? e : {
            'default': e
          };
        }
        var getPluralRules__default = /*#__PURE__*/_interopDefaultLegacy(getPluralRules);
        var PseudoNumberFormat__default = /*#__PURE__*/_interopDefaultLegacy(PseudoNumberFormat);
        function _typeof(obj) {
          "@babel/helpers - typeof";

          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }
          return _typeof(obj);
        }
        var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
        function getDefaultExportFromCjs(x) {
          return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
        }
        var plurals$1 = {
          exports: {}
        };
        (function (module, exports) {
          var a = function a(n, ord) {
            if (ord) return 'other';
            return n == 1 ? 'one' : 'other';
          };
          var b = function b(n, ord) {
            if (ord) return 'other';
            return n == 0 || n == 1 ? 'one' : 'other';
          };
          var c = function c(n, ord) {
            if (ord) return 'other';
            return n >= 0 && n <= 1 ? 'one' : 'other';
          };
          var d = function d(n, ord) {
            var s = String(n).split('.'),
              v0 = !s[1];
            if (ord) return 'other';
            return n == 1 && v0 ? 'one' : 'other';
          };
          var e = function e(n, ord) {
            return 'other';
          };
          var f = function f(n, ord) {
            if (ord) return 'other';
            return n == 1 ? 'one' : n == 2 ? 'two' : 'other';
          };
          (function (root, plurals) {
            Object.defineProperty(plurals, '__esModule', {
              value: true
            });
            module.exports = plurals;
          })(commonjsGlobal, {
            _in: e,
            af: a,
            ak: b,
            am: c,
            an: a,
            ar: function ar(n, ord) {
              var s = String(n).split('.'),
                t0 = Number(s[0]) == n,
                n100 = t0 && s[0].slice(-2);
              if (ord) return 'other';
              return n == 0 ? 'zero' : n == 1 ? 'one' : n == 2 ? 'two' : n100 >= 3 && n100 <= 10 ? 'few' : n100 >= 11 && n100 <= 99 ? 'many' : 'other';
            },
            ars: function ars(n, ord) {
              var s = String(n).split('.'),
                t0 = Number(s[0]) == n,
                n100 = t0 && s[0].slice(-2);
              if (ord) return 'other';
              return n == 0 ? 'zero' : n == 1 ? 'one' : n == 2 ? 'two' : n100 >= 3 && n100 <= 10 ? 'few' : n100 >= 11 && n100 <= 99 ? 'many' : 'other';
            },
            as: function as(n, ord) {
              if (ord) return n == 1 || n == 5 || n == 7 || n == 8 || n == 9 || n == 10 ? 'one' : n == 2 || n == 3 ? 'two' : n == 4 ? 'few' : n == 6 ? 'many' : 'other';
              return n >= 0 && n <= 1 ? 'one' : 'other';
            },
            asa: a,
            ast: d,
            az: function az(n, ord) {
              var s = String(n).split('.'),
                i = s[0],
                i10 = i.slice(-1),
                i100 = i.slice(-2),
                i1000 = i.slice(-3);
              if (ord) return i10 == 1 || i10 == 2 || i10 == 5 || i10 == 7 || i10 == 8 || i100 == 20 || i100 == 50 || i100 == 70 || i100 == 80 ? 'one' : i10 == 3 || i10 == 4 || i1000 == 100 || i1000 == 200 || i1000 == 300 || i1000 == 400 || i1000 == 500 || i1000 == 600 || i1000 == 700 || i1000 == 800 || i1000 == 900 ? 'few' : i == 0 || i10 == 6 || i100 == 40 || i100 == 60 || i100 == 90 ? 'many' : 'other';
              return n == 1 ? 'one' : 'other';
            },
            be: function be(n, ord) {
              var s = String(n).split('.'),
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1),
                n100 = t0 && s[0].slice(-2);
              if (ord) return (n10 == 2 || n10 == 3) && n100 != 12 && n100 != 13 ? 'few' : 'other';
              return n10 == 1 && n100 != 11 ? 'one' : n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14) ? 'few' : t0 && n10 == 0 || n10 >= 5 && n10 <= 9 || n100 >= 11 && n100 <= 14 ? 'many' : 'other';
            },
            bem: a,
            bez: a,
            bg: a,
            bho: b,
            bm: e,
            bn: function bn(n, ord) {
              if (ord) return n == 1 || n == 5 || n == 7 || n == 8 || n == 9 || n == 10 ? 'one' : n == 2 || n == 3 ? 'two' : n == 4 ? 'few' : n == 6 ? 'many' : 'other';
              return n >= 0 && n <= 1 ? 'one' : 'other';
            },
            bo: e,
            br: function br(n, ord) {
              var s = String(n).split('.'),
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1),
                n100 = t0 && s[0].slice(-2),
                n1000000 = t0 && s[0].slice(-6);
              if (ord) return 'other';
              return n10 == 1 && n100 != 11 && n100 != 71 && n100 != 91 ? 'one' : n10 == 2 && n100 != 12 && n100 != 72 && n100 != 92 ? 'two' : (n10 == 3 || n10 == 4 || n10 == 9) && (n100 < 10 || n100 > 19) && (n100 < 70 || n100 > 79) && (n100 < 90 || n100 > 99) ? 'few' : n != 0 && t0 && n1000000 == 0 ? 'many' : 'other';
            },
            brx: a,
            bs: function bs(n, ord) {
              var s = String(n).split('.'),
                i = s[0],
                f = s[1] || '',
                v0 = !s[1],
                i10 = i.slice(-1),
                i100 = i.slice(-2),
                f10 = f.slice(-1),
                f100 = f.slice(-2);
              if (ord) return 'other';
              return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? 'few' : 'other';
            },
            ca: function ca(n, ord) {
              var s = String(n).split('.'),
                v0 = !s[1];
              if (ord) return n == 1 || n == 3 ? 'one' : n == 2 ? 'two' : n == 4 ? 'few' : 'other';
              return n == 1 && v0 ? 'one' : 'other';
            },
            ce: a,
            ceb: function ceb(n, ord) {
              var s = String(n).split('.'),
                i = s[0],
                f = s[1] || '',
                v0 = !s[1],
                i10 = i.slice(-1),
                f10 = f.slice(-1);
              if (ord) return 'other';
              return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? 'one' : 'other';
            },
            cgg: a,
            chr: a,
            ckb: a,
            cs: function cs(n, ord) {
              var s = String(n).split('.'),
                i = s[0],
                v0 = !s[1];
              if (ord) return 'other';
              return n == 1 && v0 ? 'one' : i >= 2 && i <= 4 && v0 ? 'few' : !v0 ? 'many' : 'other';
            },
            cy: function cy(n, ord) {
              if (ord) return n == 0 || n == 7 || n == 8 || n == 9 ? 'zero' : n == 1 ? 'one' : n == 2 ? 'two' : n == 3 || n == 4 ? 'few' : n == 5 || n == 6 ? 'many' : 'other';
              return n == 0 ? 'zero' : n == 1 ? 'one' : n == 2 ? 'two' : n == 3 ? 'few' : n == 6 ? 'many' : 'other';
            },
            da: function da(n, ord) {
              var s = String(n).split('.'),
                i = s[0],
                t0 = Number(s[0]) == n;
              if (ord) return 'other';
              return n == 1 || !t0 && (i == 0 || i == 1) ? 'one' : 'other';
            },
            de: d,
            doi: c,
            dsb: function dsb(n, ord) {
              var s = String(n).split('.'),
                i = s[0],
                f = s[1] || '',
                v0 = !s[1],
                i100 = i.slice(-2),
                f100 = f.slice(-2);
              if (ord) return 'other';
              return v0 && i100 == 1 || f100 == 1 ? 'one' : v0 && i100 == 2 || f100 == 2 ? 'two' : v0 && (i100 == 3 || i100 == 4) || f100 == 3 || f100 == 4 ? 'few' : 'other';
            },
            dv: a,
            dz: e,
            ee: a,
            el: a,
            en: function en(n, ord) {
              var s = String(n).split('.'),
                v0 = !s[1],
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1),
                n100 = t0 && s[0].slice(-2);
              if (ord) return n10 == 1 && n100 != 11 ? 'one' : n10 == 2 && n100 != 12 ? 'two' : n10 == 3 && n100 != 13 ? 'few' : 'other';
              return n == 1 && v0 ? 'one' : 'other';
            },
            eo: a,
            es: a,
            et: d,
            eu: a,
            fa: c,
            ff: function ff(n, ord) {
              if (ord) return 'other';
              return n >= 0 && n < 2 ? 'one' : 'other';
            },
            fi: d,
            fil: function fil(n, ord) {
              var s = String(n).split('.'),
                i = s[0],
                f = s[1] || '',
                v0 = !s[1],
                i10 = i.slice(-1),
                f10 = f.slice(-1);
              if (ord) return n == 1 ? 'one' : 'other';
              return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? 'one' : 'other';
            },
            fo: a,
            fr: function fr(n, ord) {
              var s = String(n).split('.'),
                i = s[0],
                v0 = !s[1],
                i1000000 = i.slice(-6);
              if (ord) return n == 1 ? 'one' : 'other';
              return n >= 0 && n < 2 ? 'one' : i != 0 && i1000000 == 0 && v0 ? 'many' : 'other';
            },
            fur: a,
            fy: d,
            ga: function ga(n, ord) {
              var s = String(n).split('.'),
                t0 = Number(s[0]) == n;
              if (ord) return n == 1 ? 'one' : 'other';
              return n == 1 ? 'one' : n == 2 ? 'two' : t0 && n >= 3 && n <= 6 ? 'few' : t0 && n >= 7 && n <= 10 ? 'many' : 'other';
            },
            gd: function gd(n, ord) {
              var s = String(n).split('.'),
                t0 = Number(s[0]) == n;
              if (ord) return n == 1 || n == 11 ? 'one' : n == 2 || n == 12 ? 'two' : n == 3 || n == 13 ? 'few' : 'other';
              return n == 1 || n == 11 ? 'one' : n == 2 || n == 12 ? 'two' : t0 && n >= 3 && n <= 10 || t0 && n >= 13 && n <= 19 ? 'few' : 'other';
            },
            gl: d,
            gsw: a,
            gu: function gu(n, ord) {
              if (ord) return n == 1 ? 'one' : n == 2 || n == 3 ? 'two' : n == 4 ? 'few' : n == 6 ? 'many' : 'other';
              return n >= 0 && n <= 1 ? 'one' : 'other';
            },
            guw: b,
            gv: function gv(n, ord) {
              var s = String(n).split('.'),
                i = s[0],
                v0 = !s[1],
                i10 = i.slice(-1),
                i100 = i.slice(-2);
              if (ord) return 'other';
              return v0 && i10 == 1 ? 'one' : v0 && i10 == 2 ? 'two' : v0 && (i100 == 0 || i100 == 20 || i100 == 40 || i100 == 60 || i100 == 80) ? 'few' : !v0 ? 'many' : 'other';
            },
            ha: a,
            haw: a,
            he: function he(n, ord) {
              var s = String(n).split('.'),
                i = s[0],
                v0 = !s[1],
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1);
              if (ord) return 'other';
              return n == 1 && v0 ? 'one' : i == 2 && v0 ? 'two' : v0 && (n < 0 || n > 10) && t0 && n10 == 0 ? 'many' : 'other';
            },
            hi: function hi(n, ord) {
              if (ord) return n == 1 ? 'one' : n == 2 || n == 3 ? 'two' : n == 4 ? 'few' : n == 6 ? 'many' : 'other';
              return n >= 0 && n <= 1 ? 'one' : 'other';
            },
            hr: function hr(n, ord) {
              var s = String(n).split('.'),
                i = s[0],
                f = s[1] || '',
                v0 = !s[1],
                i10 = i.slice(-1),
                i100 = i.slice(-2),
                f10 = f.slice(-1),
                f100 = f.slice(-2);
              if (ord) return 'other';
              return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? 'few' : 'other';
            },
            hsb: function hsb(n, ord) {
              var s = String(n).split('.'),
                i = s[0],
                f = s[1] || '',
                v0 = !s[1],
                i100 = i.slice(-2),
                f100 = f.slice(-2);
              if (ord) return 'other';
              return v0 && i100 == 1 || f100 == 1 ? 'one' : v0 && i100 == 2 || f100 == 2 ? 'two' : v0 && (i100 == 3 || i100 == 4) || f100 == 3 || f100 == 4 ? 'few' : 'other';
            },
            hu: function hu(n, ord) {
              if (ord) return n == 1 || n == 5 ? 'one' : 'other';
              return n == 1 ? 'one' : 'other';
            },
            hy: function hy(n, ord) {
              if (ord) return n == 1 ? 'one' : 'other';
              return n >= 0 && n < 2 ? 'one' : 'other';
            },
            ia: d,
            id: e,
            ig: e,
            ii: e,
            io: d,
            is: function is(n, ord) {
              var s = String(n).split('.'),
                i = s[0],
                t0 = Number(s[0]) == n,
                i10 = i.slice(-1),
                i100 = i.slice(-2);
              if (ord) return 'other';
              return t0 && i10 == 1 && i100 != 11 || !t0 ? 'one' : 'other';
            },
            it: function it(n, ord) {
              var s = String(n).split('.'),
                v0 = !s[1];
              if (ord) return n == 11 || n == 8 || n == 80 || n == 800 ? 'many' : 'other';
              return n == 1 && v0 ? 'one' : 'other';
            },
            iu: f,
            iw: function iw(n, ord) {
              var s = String(n).split('.'),
                i = s[0],
                v0 = !s[1],
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1);
              if (ord) return 'other';
              return n == 1 && v0 ? 'one' : i == 2 && v0 ? 'two' : v0 && (n < 0 || n > 10) && t0 && n10 == 0 ? 'many' : 'other';
            },
            ja: e,
            jbo: e,
            jgo: a,
            ji: d,
            jmc: a,
            jv: e,
            jw: e,
            ka: function ka(n, ord) {
              var s = String(n).split('.'),
                i = s[0],
                i100 = i.slice(-2);
              if (ord) return i == 1 ? 'one' : i == 0 || i100 >= 2 && i100 <= 20 || i100 == 40 || i100 == 60 || i100 == 80 ? 'many' : 'other';
              return n == 1 ? 'one' : 'other';
            },
            kab: function kab(n, ord) {
              if (ord) return 'other';
              return n >= 0 && n < 2 ? 'one' : 'other';
            },
            kaj: a,
            kcg: a,
            kde: e,
            kea: e,
            kk: function kk(n, ord) {
              var s = String(n).split('.'),
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1);
              if (ord) return n10 == 6 || n10 == 9 || t0 && n10 == 0 && n != 0 ? 'many' : 'other';
              return n == 1 ? 'one' : 'other';
            },
            kkj: a,
            kl: a,
            km: e,
            kn: c,
            ko: e,
            ks: a,
            ksb: a,
            ksh: function ksh(n, ord) {
              if (ord) return 'other';
              return n == 0 ? 'zero' : n == 1 ? 'one' : 'other';
            },
            ku: a,
            kw: function kw(n, ord) {
              var s = String(n).split('.'),
                t0 = Number(s[0]) == n,
                n100 = t0 && s[0].slice(-2),
                n1000 = t0 && s[0].slice(-3),
                n100000 = t0 && s[0].slice(-5),
                n1000000 = t0 && s[0].slice(-6);
              if (ord) return t0 && n >= 1 && n <= 4 || n100 >= 1 && n100 <= 4 || n100 >= 21 && n100 <= 24 || n100 >= 41 && n100 <= 44 || n100 >= 61 && n100 <= 64 || n100 >= 81 && n100 <= 84 ? 'one' : n == 5 || n100 == 5 ? 'many' : 'other';
              return n == 0 ? 'zero' : n == 1 ? 'one' : n100 == 2 || n100 == 22 || n100 == 42 || n100 == 62 || n100 == 82 || t0 && n1000 == 0 && (n100000 >= 1000 && n100000 <= 20000 || n100000 == 40000 || n100000 == 60000 || n100000 == 80000) || n != 0 && n1000000 == 100000 ? 'two' : n100 == 3 || n100 == 23 || n100 == 43 || n100 == 63 || n100 == 83 ? 'few' : n != 1 && (n100 == 1 || n100 == 21 || n100 == 41 || n100 == 61 || n100 == 81) ? 'many' : 'other';
            },
            ky: a,
            lag: function lag(n, ord) {
              var s = String(n).split('.'),
                i = s[0];
              if (ord) return 'other';
              return n == 0 ? 'zero' : (i == 0 || i == 1) && n != 0 ? 'one' : 'other';
            },
            lb: a,
            lg: a,
            lij: function lij(n, ord) {
              var s = String(n).split('.'),
                v0 = !s[1],
                t0 = Number(s[0]) == n;
              if (ord) return n == 11 || n == 8 || t0 && n >= 80 && n <= 89 || t0 && n >= 800 && n <= 899 ? 'many' : 'other';
              return n == 1 && v0 ? 'one' : 'other';
            },
            lkt: e,
            ln: b,
            lo: function lo(n, ord) {
              if (ord) return n == 1 ? 'one' : 'other';
              return 'other';
            },
            lt: function lt(n, ord) {
              var s = String(n).split('.'),
                f = s[1] || '',
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1),
                n100 = t0 && s[0].slice(-2);
              if (ord) return 'other';
              return n10 == 1 && (n100 < 11 || n100 > 19) ? 'one' : n10 >= 2 && n10 <= 9 && (n100 < 11 || n100 > 19) ? 'few' : f != 0 ? 'many' : 'other';
            },
            lv: function lv(n, ord) {
              var s = String(n).split('.'),
                f = s[1] || '',
                v = f.length,
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1),
                n100 = t0 && s[0].slice(-2),
                f100 = f.slice(-2),
                f10 = f.slice(-1);
              if (ord) return 'other';
              return t0 && n10 == 0 || n100 >= 11 && n100 <= 19 || v == 2 && f100 >= 11 && f100 <= 19 ? 'zero' : n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11 || v != 2 && f10 == 1 ? 'one' : 'other';
            },
            mas: a,
            mg: b,
            mgo: a,
            mk: function mk(n, ord) {
              var s = String(n).split('.'),
                i = s[0],
                f = s[1] || '',
                v0 = !s[1],
                i10 = i.slice(-1),
                i100 = i.slice(-2),
                f10 = f.slice(-1),
                f100 = f.slice(-2);
              if (ord) return i10 == 1 && i100 != 11 ? 'one' : i10 == 2 && i100 != 12 ? 'two' : (i10 == 7 || i10 == 8) && i100 != 17 && i100 != 18 ? 'many' : 'other';
              return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : 'other';
            },
            ml: a,
            mn: a,
            mo: function mo(n, ord) {
              var s = String(n).split('.'),
                v0 = !s[1],
                t0 = Number(s[0]) == n,
                n100 = t0 && s[0].slice(-2);
              if (ord) return n == 1 ? 'one' : 'other';
              return n == 1 && v0 ? 'one' : !v0 || n == 0 || n100 >= 2 && n100 <= 19 ? 'few' : 'other';
            },
            mr: function mr(n, ord) {
              if (ord) return n == 1 ? 'one' : n == 2 || n == 3 ? 'two' : n == 4 ? 'few' : 'other';
              return n == 1 ? 'one' : 'other';
            },
            ms: function ms(n, ord) {
              if (ord) return n == 1 ? 'one' : 'other';
              return 'other';
            },
            mt: function mt(n, ord) {
              var s = String(n).split('.'),
                t0 = Number(s[0]) == n,
                n100 = t0 && s[0].slice(-2);
              if (ord) return 'other';
              return n == 1 ? 'one' : n == 0 || n100 >= 2 && n100 <= 10 ? 'few' : n100 >= 11 && n100 <= 19 ? 'many' : 'other';
            },
            my: e,
            nah: a,
            naq: f,
            nb: a,
            nd: a,
            ne: function ne(n, ord) {
              var s = String(n).split('.'),
                t0 = Number(s[0]) == n;
              if (ord) return t0 && n >= 1 && n <= 4 ? 'one' : 'other';
              return n == 1 ? 'one' : 'other';
            },
            nl: d,
            nn: a,
            nnh: a,
            no: a,
            nqo: e,
            nr: a,
            nso: b,
            ny: a,
            nyn: a,
            om: a,
            or: function or(n, ord) {
              var s = String(n).split('.'),
                t0 = Number(s[0]) == n;
              if (ord) return n == 1 || n == 5 || t0 && n >= 7 && n <= 9 ? 'one' : n == 2 || n == 3 ? 'two' : n == 4 ? 'few' : n == 6 ? 'many' : 'other';
              return n == 1 ? 'one' : 'other';
            },
            os: a,
            osa: e,
            pa: b,
            pap: a,
            pcm: c,
            pl: function pl(n, ord) {
              var s = String(n).split('.'),
                i = s[0],
                v0 = !s[1],
                i10 = i.slice(-1),
                i100 = i.slice(-2);
              if (ord) return 'other';
              return n == 1 && v0 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? 'few' : v0 && i != 1 && (i10 == 0 || i10 == 1) || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 12 && i100 <= 14 ? 'many' : 'other';
            },
            prg: function prg(n, ord) {
              var s = String(n).split('.'),
                f = s[1] || '',
                v = f.length,
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1),
                n100 = t0 && s[0].slice(-2),
                f100 = f.slice(-2),
                f10 = f.slice(-1);
              if (ord) return 'other';
              return t0 && n10 == 0 || n100 >= 11 && n100 <= 19 || v == 2 && f100 >= 11 && f100 <= 19 ? 'zero' : n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11 || v != 2 && f10 == 1 ? 'one' : 'other';
            },
            ps: a,
            pt: function pt(n, ord) {
              var s = String(n).split('.'),
                i = s[0];
              if (ord) return 'other';
              return i == 0 || i == 1 ? 'one' : 'other';
            },
            pt_PT: d,
            rm: a,
            ro: function ro(n, ord) {
              var s = String(n).split('.'),
                v0 = !s[1],
                t0 = Number(s[0]) == n,
                n100 = t0 && s[0].slice(-2);
              if (ord) return n == 1 ? 'one' : 'other';
              return n == 1 && v0 ? 'one' : !v0 || n == 0 || n100 >= 2 && n100 <= 19 ? 'few' : 'other';
            },
            rof: a,
            root: e,
            ru: function ru(n, ord) {
              var s = String(n).split('.'),
                i = s[0],
                v0 = !s[1],
                i10 = i.slice(-1),
                i100 = i.slice(-2);
              if (ord) return 'other';
              return v0 && i10 == 1 && i100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? 'few' : v0 && i10 == 0 || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 11 && i100 <= 14 ? 'many' : 'other';
            },
            rwk: a,
            sah: e,
            saq: a,
            sat: f,
            sc: function sc(n, ord) {
              var s = String(n).split('.'),
                v0 = !s[1];
              if (ord) return n == 11 || n == 8 || n == 80 || n == 800 ? 'many' : 'other';
              return n == 1 && v0 ? 'one' : 'other';
            },
            scn: function scn(n, ord) {
              var s = String(n).split('.'),
                v0 = !s[1];
              if (ord) return n == 11 || n == 8 || n == 80 || n == 800 ? 'many' : 'other';
              return n == 1 && v0 ? 'one' : 'other';
            },
            sd: a,
            sdh: a,
            se: f,
            seh: a,
            ses: e,
            sg: e,
            sh: function sh(n, ord) {
              var s = String(n).split('.'),
                i = s[0],
                f = s[1] || '',
                v0 = !s[1],
                i10 = i.slice(-1),
                i100 = i.slice(-2),
                f10 = f.slice(-1),
                f100 = f.slice(-2);
              if (ord) return 'other';
              return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? 'few' : 'other';
            },
            shi: function shi(n, ord) {
              var s = String(n).split('.'),
                t0 = Number(s[0]) == n;
              if (ord) return 'other';
              return n >= 0 && n <= 1 ? 'one' : t0 && n >= 2 && n <= 10 ? 'few' : 'other';
            },
            si: function si(n, ord) {
              var s = String(n).split('.'),
                i = s[0],
                f = s[1] || '';
              if (ord) return 'other';
              return n == 0 || n == 1 || i == 0 && f == 1 ? 'one' : 'other';
            },
            sk: function sk(n, ord) {
              var s = String(n).split('.'),
                i = s[0],
                v0 = !s[1];
              if (ord) return 'other';
              return n == 1 && v0 ? 'one' : i >= 2 && i <= 4 && v0 ? 'few' : !v0 ? 'many' : 'other';
            },
            sl: function sl(n, ord) {
              var s = String(n).split('.'),
                i = s[0],
                v0 = !s[1],
                i100 = i.slice(-2);
              if (ord) return 'other';
              return v0 && i100 == 1 ? 'one' : v0 && i100 == 2 ? 'two' : v0 && (i100 == 3 || i100 == 4) || !v0 ? 'few' : 'other';
            },
            sma: f,
            smi: f,
            smj: f,
            smn: f,
            sms: f,
            sn: a,
            so: a,
            sq: function sq(n, ord) {
              var s = String(n).split('.'),
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1),
                n100 = t0 && s[0].slice(-2);
              if (ord) return n == 1 ? 'one' : n10 == 4 && n100 != 14 ? 'many' : 'other';
              return n == 1 ? 'one' : 'other';
            },
            sr: function sr(n, ord) {
              var s = String(n).split('.'),
                i = s[0],
                f = s[1] || '',
                v0 = !s[1],
                i10 = i.slice(-1),
                i100 = i.slice(-2),
                f10 = f.slice(-1),
                f100 = f.slice(-2);
              if (ord) return 'other';
              return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? 'few' : 'other';
            },
            ss: a,
            ssy: a,
            st: a,
            su: e,
            sv: function sv(n, ord) {
              var s = String(n).split('.'),
                v0 = !s[1],
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1),
                n100 = t0 && s[0].slice(-2);
              if (ord) return (n10 == 1 || n10 == 2) && n100 != 11 && n100 != 12 ? 'one' : 'other';
              return n == 1 && v0 ? 'one' : 'other';
            },
            sw: d,
            syr: a,
            ta: a,
            te: a,
            teo: a,
            th: e,
            ti: b,
            tig: a,
            tk: function tk(n, ord) {
              var s = String(n).split('.'),
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1);
              if (ord) return n10 == 6 || n10 == 9 || n == 10 ? 'few' : 'other';
              return n == 1 ? 'one' : 'other';
            },
            tl: function tl(n, ord) {
              var s = String(n).split('.'),
                i = s[0],
                f = s[1] || '',
                v0 = !s[1],
                i10 = i.slice(-1),
                f10 = f.slice(-1);
              if (ord) return n == 1 ? 'one' : 'other';
              return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? 'one' : 'other';
            },
            tn: a,
            to: e,
            tr: a,
            ts: a,
            tzm: function tzm(n, ord) {
              var s = String(n).split('.'),
                t0 = Number(s[0]) == n;
              if (ord) return 'other';
              return n == 0 || n == 1 || t0 && n >= 11 && n <= 99 ? 'one' : 'other';
            },
            ug: a,
            uk: function uk(n, ord) {
              var s = String(n).split('.'),
                i = s[0],
                v0 = !s[1],
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1),
                n100 = t0 && s[0].slice(-2),
                i10 = i.slice(-1),
                i100 = i.slice(-2);
              if (ord) return n10 == 3 && n100 != 13 ? 'few' : 'other';
              return v0 && i10 == 1 && i100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? 'few' : v0 && i10 == 0 || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 11 && i100 <= 14 ? 'many' : 'other';
            },
            ur: d,
            uz: a,
            ve: a,
            vi: function vi(n, ord) {
              if (ord) return n == 1 ? 'one' : 'other';
              return 'other';
            },
            vo: a,
            vun: a,
            wa: b,
            wae: a,
            wo: e,
            xh: a,
            xog: a,
            yi: d,
            yo: e,
            yue: e,
            zh: e,
            zu: c
          });
        })(plurals$1);
        var plurals = /*@__PURE__*/getDefaultExportFromCjs(plurals$1.exports);
        var P = /*#__PURE__*/Object.freeze( /*#__PURE__*/Object.assign( /*#__PURE__*/Object.create(null), plurals$1.exports, {
          'default': plurals
        }));
        var pluralCategories$1 = {
          exports: {}
        };
        (function (module, exports) {
          var z = "zero",
            o = "one",
            t = "two",
            f = "few",
            m = "many",
            x = "other";
          var a = {
            cardinal: [o, x],
            ordinal: [x]
          };
          var b = {
            cardinal: [x],
            ordinal: [x]
          };
          var c = {
            cardinal: [o, f, m, x],
            ordinal: [x]
          };
          var d = {
            cardinal: [o, x],
            ordinal: [o, x]
          };
          var e = {
            cardinal: [o, t, x],
            ordinal: [x]
          };
          (function (root, pluralCategories) {
            Object.defineProperty(pluralCategories, '__esModule', {
              value: true
            });
            module.exports = pluralCategories;
          })(commonjsGlobal, {
            _in: b,
            af: a,
            ak: a,
            am: a,
            an: a,
            ar: {
              cardinal: [z, o, t, f, m, x],
              ordinal: [x]
            },
            ars: {
              cardinal: [z, o, t, f, m, x],
              ordinal: [x]
            },
            as: {
              cardinal: [o, x],
              ordinal: [o, t, f, m, x]
            },
            asa: a,
            ast: a,
            az: {
              cardinal: [o, x],
              ordinal: [o, f, m, x]
            },
            be: {
              cardinal: [o, f, m, x],
              ordinal: [f, x]
            },
            bem: a,
            bez: a,
            bg: a,
            bho: a,
            bm: b,
            bn: {
              cardinal: [o, x],
              ordinal: [o, t, f, m, x]
            },
            bo: b,
            br: {
              cardinal: [o, t, f, m, x],
              ordinal: [x]
            },
            brx: a,
            bs: {
              cardinal: [o, f, x],
              ordinal: [x]
            },
            ca: {
              cardinal: [o, x],
              ordinal: [o, t, f, x]
            },
            ce: a,
            ceb: a,
            cgg: a,
            chr: a,
            ckb: a,
            cs: c,
            cy: {
              cardinal: [z, o, t, f, m, x],
              ordinal: [z, o, t, f, m, x]
            },
            da: a,
            de: a,
            doi: a,
            dsb: {
              cardinal: [o, t, f, x],
              ordinal: [x]
            },
            dv: a,
            dz: b,
            ee: a,
            el: a,
            en: {
              cardinal: [o, x],
              ordinal: [o, t, f, x]
            },
            eo: a,
            es: a,
            et: a,
            eu: a,
            fa: a,
            ff: a,
            fi: a,
            fil: d,
            fo: a,
            fr: {
              cardinal: [o, m, x],
              ordinal: [o, x]
            },
            fur: a,
            fy: a,
            ga: {
              cardinal: [o, t, f, m, x],
              ordinal: [o, x]
            },
            gd: {
              cardinal: [o, t, f, x],
              ordinal: [o, t, f, x]
            },
            gl: a,
            gsw: a,
            gu: {
              cardinal: [o, x],
              ordinal: [o, t, f, m, x]
            },
            guw: a,
            gv: {
              cardinal: [o, t, f, m, x],
              ordinal: [x]
            },
            ha: a,
            haw: a,
            he: {
              cardinal: [o, t, m, x],
              ordinal: [x]
            },
            hi: {
              cardinal: [o, x],
              ordinal: [o, t, f, m, x]
            },
            hr: {
              cardinal: [o, f, x],
              ordinal: [x]
            },
            hsb: {
              cardinal: [o, t, f, x],
              ordinal: [x]
            },
            hu: d,
            hy: d,
            ia: a,
            id: b,
            ig: b,
            ii: b,
            io: a,
            is: a,
            it: {
              cardinal: [o, x],
              ordinal: [m, x]
            },
            iu: e,
            iw: {
              cardinal: [o, t, m, x],
              ordinal: [x]
            },
            ja: b,
            jbo: b,
            jgo: a,
            ji: a,
            jmc: a,
            jv: b,
            jw: b,
            ka: {
              cardinal: [o, x],
              ordinal: [o, m, x]
            },
            kab: a,
            kaj: a,
            kcg: a,
            kde: b,
            kea: b,
            kk: {
              cardinal: [o, x],
              ordinal: [m, x]
            },
            kkj: a,
            kl: a,
            km: b,
            kn: a,
            ko: b,
            ks: a,
            ksb: a,
            ksh: {
              cardinal: [z, o, x],
              ordinal: [x]
            },
            ku: a,
            kw: {
              cardinal: [z, o, t, f, m, x],
              ordinal: [o, m, x]
            },
            ky: a,
            lag: {
              cardinal: [z, o, x],
              ordinal: [x]
            },
            lb: a,
            lg: a,
            lij: {
              cardinal: [o, x],
              ordinal: [m, x]
            },
            lkt: b,
            ln: a,
            lo: {
              cardinal: [x],
              ordinal: [o, x]
            },
            lt: c,
            lv: {
              cardinal: [z, o, x],
              ordinal: [x]
            },
            mas: a,
            mg: a,
            mgo: a,
            mk: {
              cardinal: [o, x],
              ordinal: [o, t, m, x]
            },
            ml: a,
            mn: a,
            mo: {
              cardinal: [o, f, x],
              ordinal: [o, x]
            },
            mr: {
              cardinal: [o, x],
              ordinal: [o, t, f, x]
            },
            ms: {
              cardinal: [x],
              ordinal: [o, x]
            },
            mt: c,
            my: b,
            nah: a,
            naq: e,
            nb: a,
            nd: a,
            ne: d,
            nl: a,
            nn: a,
            nnh: a,
            no: a,
            nqo: b,
            nr: a,
            nso: a,
            ny: a,
            nyn: a,
            om: a,
            or: {
              cardinal: [o, x],
              ordinal: [o, t, f, m, x]
            },
            os: a,
            osa: b,
            pa: a,
            pap: a,
            pcm: a,
            pl: c,
            prg: {
              cardinal: [z, o, x],
              ordinal: [x]
            },
            ps: a,
            pt: a,
            pt_PT: a,
            rm: a,
            ro: {
              cardinal: [o, f, x],
              ordinal: [o, x]
            },
            rof: a,
            root: b,
            ru: c,
            rwk: a,
            sah: b,
            saq: a,
            sat: e,
            sc: {
              cardinal: [o, x],
              ordinal: [m, x]
            },
            scn: {
              cardinal: [o, x],
              ordinal: [m, x]
            },
            sd: a,
            sdh: a,
            se: e,
            seh: a,
            ses: b,
            sg: b,
            sh: {
              cardinal: [o, f, x],
              ordinal: [x]
            },
            shi: {
              cardinal: [o, f, x],
              ordinal: [x]
            },
            si: a,
            sk: c,
            sl: {
              cardinal: [o, t, f, x],
              ordinal: [x]
            },
            sma: e,
            smi: e,
            smj: e,
            smn: e,
            sms: e,
            sn: a,
            so: a,
            sq: {
              cardinal: [o, x],
              ordinal: [o, m, x]
            },
            sr: {
              cardinal: [o, f, x],
              ordinal: [x]
            },
            ss: a,
            ssy: a,
            st: a,
            su: b,
            sv: d,
            sw: a,
            syr: a,
            ta: a,
            te: a,
            teo: a,
            th: b,
            ti: a,
            tig: a,
            tk: {
              cardinal: [o, x],
              ordinal: [f, x]
            },
            tl: d,
            tn: a,
            to: b,
            tr: a,
            ts: a,
            tzm: a,
            ug: a,
            uk: {
              cardinal: [o, f, m, x],
              ordinal: [f, x]
            },
            ur: a,
            uz: a,
            ve: a,
            vi: {
              cardinal: [x],
              ordinal: [o, x]
            },
            vo: a,
            vun: a,
            wa: a,
            wae: a,
            wo: b,
            xh: a,
            xog: a,
            yi: a,
            yo: b,
            yue: b,
            zh: b,
            zu: a
          });
        })(pluralCategories$1);
        var pluralCategories = /*@__PURE__*/getDefaultExportFromCjs(pluralCategories$1.exports);
        var C = /*#__PURE__*/Object.freeze( /*#__PURE__*/Object.assign( /*#__PURE__*/Object.create(null), pluralCategories$1.exports, {
          'default': pluralCategories
        }));

        // using them here because with this many small functions, bundlers produce less
        // cruft than for ES module exports.

        var Plurals = plurals || P;
        var Categories = pluralCategories || C;
        /* istanbul ignore next */

        var NumberFormat = (typeof Intl === "undefined" ? "undefined" : _typeof(Intl)) === 'object' && Intl.NumberFormat || PseudoNumberFormat__default['default']; // make-plural exports are cast with safe-identifier to be valid JS identifiers

        var id = function id(lc) {
          return lc === 'in' ? '_in' : lc === 'pt-PT' ? 'pt_PT' : lc;
        };
        var getSelector = function getSelector(lc) {
          return Plurals[id(lc)];
        };
        var getCategories = function getCategories(lc, ord) {
          return Categories[id(lc)][ord ? 'ordinal' : 'cardinal'];
        };
        var PluralRules = getPluralRules__default['default'](NumberFormat, getSelector, getCategories);
        module.exports = PluralRules;

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './factory': __cjsMetaURL$1,
          './pseudo-number-format': __cjsMetaURL$2
        };
      });
    }
  };
});

System.register("chunks:///_virtual/polyfill.js", ['./cjs-loader.mjs', './plural-rules.js'], function (exports, module) {
  var loader, __cjsMetaURL$1;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        var PluralRules = require('./plural-rules');
        function _interopDefaultLegacy(e) {
          return e && typeof e === 'object' && 'default' in e ? e : {
            'default': e
          };
        }
        var PluralRules__default = /*#__PURE__*/_interopDefaultLegacy(PluralRules);
        if (typeof Intl === 'undefined') {
          if (typeof global !== 'undefined') {
            global.Intl = {
              PluralRules: PluralRules__default['default']
            };
          } else if (typeof window !== 'undefined') {
            window.Intl = {
              PluralRules: PluralRules__default['default']
            };
          } else {
            this.Intl = {
              PluralRules: PluralRules__default['default']
            };
          }
          PluralRules__default['default'].polyfill = true;
        } else if (!Intl.PluralRules) {
          Intl.PluralRules = PluralRules__default['default'];
          PluralRules__default['default'].polyfill = true;
        } else {
          var test = ['en', 'es', 'ru', 'zh'];
          var supported = Intl.PluralRules.supportedLocalesOf(test);
          if (supported.length < test.length) {
            Intl.PluralRules = PluralRules__default['default'];
            PluralRules__default['default'].polyfill = true;
          }
        }

        // #endregion ORIGINAL CODE

        module.exports;
      }, function () {
        return {
          './plural-rules': __cjsMetaURL$1
        };
      });
    }
  };
});

System.register("chunks:///_virtual/polyfill.mjs_cjs=&original=.js", ['./polyfill.js', './cjs-loader.mjs'], function (exports, module) {
  var __cjsMetaURL, loader;
  return {
    setters: [function (module) {
      __cjsMetaURL = module.__cjsMetaURL;
      exports('__cjsMetaURL', module.__cjsMetaURL);
    }, function (module) {
      loader = module.default;
    }],
    execute: function () {
      // I am the facade module who provides access to the CommonJS module './polyfill.js'~
      if (!__cjsMetaURL) {
        loader.throwInvalidWrapper('./polyfill.js', module.meta.url);
      }
      loader.require(__cjsMetaURL);
    }
  };
});

System.register("chunks:///_virtual/possibleConstructorReturn.js", ['./typeof.js', './assertThisInitialized.js'], function (exports) {
  var _typeof, _assertThisInitialized;
  return {
    setters: [function (module) {
      _typeof = module.default;
    }, function (module) {
      _assertThisInitialized = module.default;
    }],
    execute: function () {
      exports('default', _possibleConstructorReturn);
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError("Derived constructors may only return object or undefined");
        }
        return _assertThisInitialized(self);
      }
    }
  };
});

System.register("chunks:///_virtual/pseudo-number-format.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        var PseudoNumberFormat = /*#__PURE__*/function () {
          function PseudoNumberFormat(lc,
          // locale is ignored; always use 'en'
          _ref) {
            var minID = _ref.minimumIntegerDigits,
              minFD = _ref.minimumFractionDigits,
              maxFD = _ref.maximumFractionDigits,
              minSD = _ref.minimumSignificantDigits,
              maxSD = _ref.maximumSignificantDigits;
            _classCallCheck(this, PseudoNumberFormat);
            this._minID = typeof minID === 'number' ? minID : 1;
            this._minFD = typeof minFD === 'number' ? minFD : 0;
            this._maxFD = typeof maxFD === 'number' ? maxFD : Math.max(this._minFD, 3);
            if (typeof minSD === 'number' || typeof maxSD === 'number') {
              this._minSD = typeof minSD === 'number' ? minSD : 1;
              this._maxSD = typeof maxSD === 'number' ? maxSD : 21;
            }
          }
          _createClass(PseudoNumberFormat, [{
            key: "resolvedOptions",
            value: function resolvedOptions() {
              var opt = {
                minimumIntegerDigits: this._minID,
                minimumFractionDigits: this._minFD,
                maximumFractionDigits: this._maxFD
              };
              if (typeof this._minSD === 'number') {
                opt.minimumSignificantDigits = this._minSD;
                opt.maximumSignificantDigits = this._maxSD;
              }
              return opt;
            }
          }, {
            key: "format",
            value: function format(n) {
              if (this._minSD) {
                var raw = String(n);
                var prec = 0;
                for (var i = 0; i < raw.length; ++i) {
                  var c = raw[i];
                  if (c >= '0' && c <= '9') ++prec;
                }
                if (prec < this._minSD) return n.toPrecision(this._minSD);
                if (prec > this._maxSD) return n.toPrecision(this._maxSD);
                return raw;
              }
              if (this._minFD > 0) return n.toFixed(this._minFD);
              if (this._maxFD === 0) return n.toFixed(0);
              return String(n);
            }
          }]);
          return PseudoNumberFormat;
        }();
        module.exports = PseudoNumberFormat;

        // #endregion ORIGINAL CODE

        module.exports;
      }, {});
    }
  };
});

System.register("chunks:///_virtual/rollupPluginModLoBabelHelpers.js", [], function (exports) {
  return {
    execute: function () {
      exports({
        applyDecoratedDescriptor: _applyDecoratedDescriptor,
        arrayLikeToArray: _arrayLikeToArray,
        assertThisInitialized: _assertThisInitialized,
        asyncToGenerator: _asyncToGenerator,
        createClass: _createClass,
        createForOfIteratorHelperLoose: _createForOfIteratorHelperLoose,
        extends: _extends,
        inheritsLoose: _inheritsLoose,
        initializerDefineProperty: _initializerDefineProperty,
        regeneratorRuntime: _regeneratorRuntime,
        setPrototypeOf: _setPrototypeOf,
        toPrimitive: _toPrimitive,
        toPropertyKey: _toPropertyKey,
        unsupportedIterableToArray: _unsupportedIterableToArray
      });
      function _regeneratorRuntime() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        _regeneratorRuntime = exports('regeneratorRuntime', function () {
          return e;
        });
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o = Object.defineProperty || function (t, e, r) {
            t[e] = r.value;
          },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
        function define(t, e, r) {
          return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }), t[e];
        }
        try {
          define({}, "");
        } catch (t) {
          define = function (t, e, r) {
            return t[e] = r;
          };
        }
        function wrap(t, e, r, n) {
          var i = e && e.prototype instanceof Generator ? e : Generator,
            a = Object.create(i.prototype),
            c = new Context(n || []);
          return o(a, "_invoke", {
            value: makeInvokeMethod(t, r, c)
          }), a;
        }
        function tryCatch(t, e, r) {
          try {
            return {
              type: "normal",
              arg: t.call(e, r)
            };
          } catch (t) {
            return {
              type: "throw",
              arg: t
            };
          }
        }
        e.wrap = wrap;
        var h = "suspendedStart",
          l = "suspendedYield",
          f = "executing",
          s = "completed",
          y = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var p = {};
        define(p, a, function () {
          return this;
        });
        var d = Object.getPrototypeOf,
          v = d && d(d(values([])));
        v && v !== r && n.call(v, a) && (p = v);
        var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
        function defineIteratorMethods(t) {
          ["next", "throw", "return"].forEach(function (e) {
            define(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function AsyncIterator(t, e) {
          function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
                invoke("next", t, i, a);
              }, function (t) {
                invoke("throw", t, i, a);
              }) : e.resolve(h).then(function (t) {
                u.value = t, i(u);
              }, function (t) {
                return invoke("throw", t, i, a);
              });
            }
            a(c.arg);
          }
          var r;
          o(this, "_invoke", {
            value: function (t, n) {
              function callInvokeWithMethodAndArg() {
                return new e(function (e, r) {
                  invoke(t, n, e, r);
                });
              }
              return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
          });
        }
        function makeInvokeMethod(e, r, n) {
          var o = h;
          return function (i, a) {
            if (o === f) throw new Error("Generator is already running");
            if (o === s) {
              if ("throw" === i) throw a;
              return {
                value: t,
                done: !0
              };
            }
            for (n.method = i, n.arg = a;;) {
              var c = n.delegate;
              if (c) {
                var u = maybeInvokeDelegate(c, n);
                if (u) {
                  if (u === y) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
                if (o === h) throw o = s, n.arg;
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = f;
              var p = tryCatch(e, r, n);
              if ("normal" === p.type) {
                if (o = n.done ? s : l, p.arg === y) continue;
                return {
                  value: p.arg,
                  done: n.done
                };
              }
              "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
            }
          };
        }
        function maybeInvokeDelegate(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
          var i = tryCatch(o, e.iterator, r.arg);
          if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
          var a = i.arg;
          return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
        }
        function pushTryEntry(t) {
          var e = {
            tryLoc: t[0]
          };
          1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
        }
        function resetTryEntry(t) {
          var e = t.completion || {};
          e.type = "normal", delete e.arg, t.completion = e;
        }
        function Context(t) {
          this.tryEntries = [{
            tryLoc: "root"
          }], t.forEach(pushTryEntry, this), this.reset(!0);
        }
        function values(e) {
          if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function next() {
                  for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
                  return next.value = t, next.done = !0, next;
                };
              return i.next = i;
            }
          }
          throw new TypeError(typeof e + " is not iterable");
        }
        return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
          value: GeneratorFunctionPrototype,
          configurable: !0
        }), o(GeneratorFunctionPrototype, "constructor", {
          value: GeneratorFunction,
          configurable: !0
        }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
        }, e.mark = function (t) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
        }, e.awrap = function (t) {
          return {
            __await: t
          };
        }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
          return this;
        }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new AsyncIterator(wrap(t, r, n, o), i);
          return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
        }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
          return this;
        }), define(g, "toString", function () {
          return "[object Generator]";
        }), e.keys = function (t) {
          var e = Object(t),
            r = [];
          for (var n in e) r.push(n);
          return r.reverse(), function next() {
            for (; r.length;) {
              var t = r.pop();
              if (t in e) return next.value = t, next.done = !1, next;
            }
            return next.done = !0, next;
          };
        }, e.values = values, Context.prototype = {
          constructor: Context,
          reset: function (e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var r = this;
            function handle(n, o) {
              return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return handle("end");
              if (i.tryLoc <= this.prev) {
                var c = n.call(i, "catchLoc"),
                  u = n.call(i, "finallyLoc");
                if (c && u) {
                  if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                } else {
                  if (!u) throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r];
              if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                var i = o;
                break;
              }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  resetTryEntry(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, r, n) {
            return this.delegate = {
              iterator: values(e),
              resultName: r,
              nextLoc: n
            }, "next" === this.method && (this.arg = t), y;
          }
        }, e;
      }
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
          });
        };
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      function _extends() {
        _extends = exports('extends', Object.assign ? Object.assign.bind() : function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        });
        return _extends.apply(this, arguments);
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = exports('setPrototypeOf', Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        });
        return _setPrototypeOf(o, p);
      }
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _createForOfIteratorHelperLoose(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (it) return (it = it.call(o)).next.bind(it);
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it) o = it;
          var i = 0;
          return function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }
      function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
      }
      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }
        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);
        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }
        if (desc.initializer === void 0) {
          Object.defineProperty(target, property, desc);
          desc = null;
        }
        return desc;
      }
    }
  };
});

System.register("chunks:///_virtual/setPrototypeOf.js", [], function (exports) {
  return {
    execute: function () {
      exports('default', _setPrototypeOf);
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = exports('default', Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        });
        return _setPrototypeOf(o, p);
      }
    }
  };
});

System.register("chunks:///_virtual/toArray.js", ['./arrayWithHoles.js', './iterableToArray.js', './unsupportedIterableToArray.js', './nonIterableRest.js'], function (exports) {
  var _arrayWithHoles, _iterableToArray, _unsupportedIterableToArray, _nonIterableRest;
  return {
    setters: [function (module) {
      _arrayWithHoles = module.default;
    }, function (module) {
      _iterableToArray = module.default;
    }, function (module) {
      _unsupportedIterableToArray = module.default;
    }, function (module) {
      _nonIterableRest = module.default;
    }],
    execute: function () {
      exports('default', _toArray);
      function _toArray(arr) {
        return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
      }
    }
  };
});

System.register("chunks:///_virtual/typeof.js", [], function (exports) {
  return {
    execute: function () {
      exports('default', _typeof);
      function _typeof(obj) {
        "@babel/helpers - typeof";

        return _typeof = exports('default', "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
          return typeof obj;
        } : function (obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }), _typeof(obj);
      }
    }
  };
});

System.register("chunks:///_virtual/unsupportedIterableToArray.js", ['./arrayLikeToArray.js'], function (exports) {
  var _arrayLikeToArray;
  return {
    setters: [function (module) {
      _arrayLikeToArray = module.default;
    }],
    execute: function () {
      exports('default', _unsupportedIterableToArray);
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
    }
  };
});

} }; });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ZpbGU6L0Q6L3Byb2plY3QtY29jb3MvZXhhbXBsZS1jYXNlLzMuOC42L2NvY29zLXRlc3QtcHJvamVjdHMvZXh0ZW5zaW9ucy9sb2NhbGl6YXRpb24tZWRpdG9yL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9maWxlOi9EOi9wcm9qZWN0LWNvY29zL2V4YW1wbGUtY2FzZS8zLjguNi9jb2Nvcy10ZXN0LXByb2plY3RzL2V4dGVuc2lvbnMvbG9jYWxpemF0aW9uLWVkaXRvci9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIi4uL2ZpbGU6L0Q6L3Byb2plY3QtY29jb3MvZXhhbXBsZS1jYXNlLzMuOC42L2NvY29zLXRlc3QtcHJvamVjdHMvZXh0ZW5zaW9ucy9sb2NhbGl6YXRpb24tZWRpdG9yL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9maWxlOi9EOi9wcm9qZWN0LWNvY29zL2V4YW1wbGUtY2FzZS8zLjguNi9jb2Nvcy10ZXN0LXByb2plY3RzL2V4dGVuc2lvbnMvbG9jYWxpemF0aW9uLWVkaXRvci9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCIuLi9maWxlOi9EOi9wcm9qZWN0LWNvY29zL2V4YW1wbGUtY2FzZS8zLjguNi9jb2Nvcy10ZXN0LXByb2plY3RzL2V4dGVuc2lvbnMvbG9jYWxpemF0aW9uLWVkaXRvci9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZmlsZTovRDovcHJvamVjdC1jb2Nvcy9leGFtcGxlLWNhc2UvMy44LjYvY29jb3MtdGVzdC1wcm9qZWN0cy9leHRlbnNpb25zL2xvY2FsaXphdGlvbi1lZGl0b3Ivbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIi4uL2NjZTovaW50ZXJuYWwvbWwvY2NlOi9pbnRlcm5hbC9tbC9janMtbG9hZGVyLm1qcyIsIi4uL2ZpbGU6L0Q6L3Byb2plY3QtY29jb3MvZXhhbXBsZS1jYXNlLzMuOC42L2NvY29zLXRlc3QtcHJvamVjdHMvZXh0ZW5zaW9ucy9sb2NhbGl6YXRpb24tZWRpdG9yL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9maWxlOi9EOi9wcm9qZWN0LWNvY29zL2V4YW1wbGUtY2FzZS8zLjguNi9jb2Nvcy10ZXN0LXByb2plY3RzL2V4dGVuc2lvbnMvbG9jYWxpemF0aW9uLWVkaXRvci9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCIuLi9maWxlOi9EOi9wcm9qZWN0LWNvY29zL2V4YW1wbGUtY2FzZS8zLjguNi9jb2Nvcy10ZXN0LXByb2plY3RzL2V4dGVuc2lvbnMvbG9jYWxpemF0aW9uLWVkaXRvci9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZmlsZTovRDovcHJvamVjdC1jb2Nvcy9leGFtcGxlLWNhc2UvMy44LjYvY29jb3MtdGVzdC1wcm9qZWN0cy9leHRlbnNpb25zL2xvY2FsaXphdGlvbi1lZGl0b3Ivbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwiLi4vZmlsZTovRDovcHJvamVjdC1jb2Nvcy9leGFtcGxlLWNhc2UvMy44LjYvY29jb3MtdGVzdC1wcm9qZWN0cy9leHRlbnNpb25zL2xvY2FsaXphdGlvbi1lZGl0b3Ivbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2ZpbGU6L0Q6L3Byb2plY3QtY29jb3MvZXhhbXBsZS1jYXNlLzMuOC42L2NvY29zLXRlc3QtcHJvamVjdHMvZXh0ZW5zaW9ucy9sb2NhbGl6YXRpb24tZWRpdG9yL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIi4uL3ZpcnR1YWw6L2NjL3ZpcnR1YWw6L2NjL2VudiIsIi4uL2ZpbGU6L0Q6L3Byb2plY3QtY29jb3MvZXhhbXBsZS1jYXNlLzMuOC42L2NvY29zLXRlc3QtcHJvamVjdHMvZXh0ZW5zaW9ucy9sb2NhbGl6YXRpb24tZWRpdG9yL25vZGVfbW9kdWxlcy9pbnRsLXBsdXJhbHJ1bGVzL2ZpbGU6L0Q6L3Byb2plY3QtY29jb3MvZXhhbXBsZS1jYXNlLzMuOC42L2NvY29zLXRlc3QtcHJvamVjdHMvZXh0ZW5zaW9ucy9sb2NhbGl6YXRpb24tZWRpdG9yL25vZGVfbW9kdWxlcy9pbnRsLXBsdXJhbHJ1bGVzL2ZhY3RvcnkuanMiLCIuLi9maWxlOi9EOi9wcm9qZWN0LWNvY29zL2V4YW1wbGUtY2FzZS8zLjguNi9jb2Nvcy10ZXN0LXByb2plY3RzL2V4dGVuc2lvbnMvbG9jYWxpemF0aW9uLWVkaXRvci9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZmlsZTovRDovcHJvamVjdC1jb2Nvcy9leGFtcGxlLWNhc2UvMy44LjYvY29jb3MtdGVzdC1wcm9qZWN0cy9leHRlbnNpb25zL2xvY2FsaXphdGlvbi1lZGl0b3Ivbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLmpzIiwiLi4vZmlsZTovRDovcHJvamVjdC1jb2Nvcy9leGFtcGxlLWNhc2UvMy44LjYvY29jb3MtdGVzdC1wcm9qZWN0cy9leHRlbnNpb25zL2xvY2FsaXphdGlvbi1lZGl0b3Ivbm9kZV9tb2R1bGVzL2kxOG5leHQvZGlzdC9lc20vZmlsZTovRDovcHJvamVjdC1jb2Nvcy9leGFtcGxlLWNhc2UvMy44LjYvY29jb3MtdGVzdC1wcm9qZWN0cy9leHRlbnNpb25zL2xvY2FsaXphdGlvbi1lZGl0b3Ivbm9kZV9tb2R1bGVzL2kxOG5leHQvZGlzdC9lc20vaTE4bmV4dC5qcyIsIi4uL2ZpbGU6L0Q6L3Byb2plY3QtY29jb3MvZXhhbXBsZS1jYXNlLzMuOC42L2NvY29zLXRlc3QtcHJvamVjdHMvZXh0ZW5zaW9ucy9sb2NhbGl6YXRpb24tZWRpdG9yL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9maWxlOi9EOi9wcm9qZWN0LWNvY29zL2V4YW1wbGUtY2FzZS8zLjguNi9jb2Nvcy10ZXN0LXByb2plY3RzL2V4dGVuc2lvbnMvbG9jYWxpemF0aW9uLWVkaXRvci9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCIuLi9maWxlOi9EOi9wcm9qZWN0LWNvY29zL2V4YW1wbGUtY2FzZS8zLjguNi9jb2Nvcy10ZXN0LXByb2plY3RzL2V4dGVuc2lvbnMvbG9jYWxpemF0aW9uLWVkaXRvci9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZmlsZTovRDovcHJvamVjdC1jb2Nvcy9leGFtcGxlLWNhc2UvMy44LjYvY29jb3MtdGVzdC1wcm9qZWN0cy9leHRlbnNpb25zL2xvY2FsaXphdGlvbi1lZGl0b3Ivbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIi4uL2ZpbGU6L0Q6L3Byb2plY3QtY29jb3MvZXhhbXBsZS1jYXNlLzMuOC42L2NvY29zLXRlc3QtcHJvamVjdHMvZXh0ZW5zaW9ucy9sb2NhbGl6YXRpb24tZWRpdG9yL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9maWxlOi9EOi9wcm9qZWN0LWNvY29zL2V4YW1wbGUtY2FzZS8zLjguNi9jb2Nvcy10ZXN0LXByb2plY3RzL2V4dGVuc2lvbnMvbG9jYWxpemF0aW9uLWVkaXRvci9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwiLi4vZmlsZTovRDovcHJvamVjdC1jb2Nvcy9leGFtcGxlLWNhc2UvMy44LjYvY29jb3MtdGVzdC1wcm9qZWN0cy9leHRlbnNpb25zL2xvY2FsaXphdGlvbi1lZGl0b3Ivbm9kZV9tb2R1bGVzL2ludGwtcGx1cmFscnVsZXMvZmlsZTovRDovcHJvamVjdC1jb2Nvcy9leGFtcGxlLWNhc2UvMy44LjYvY29jb3MtdGVzdC1wcm9qZWN0cy9leHRlbnNpb25zL2xvY2FsaXphdGlvbi1lZGl0b3Ivbm9kZV9tb2R1bGVzL2ludGwtcGx1cmFscnVsZXMvcGx1cmFsLXJ1bGVzLmpzIiwiLi4vZmlsZTovRDovcHJvamVjdC1jb2Nvcy9leGFtcGxlLWNhc2UvMy44LjYvY29jb3MtdGVzdC1wcm9qZWN0cy9leHRlbnNpb25zL2xvY2FsaXphdGlvbi1lZGl0b3Ivbm9kZV9tb2R1bGVzL2ludGwtcGx1cmFscnVsZXMvZmlsZTovRDovcHJvamVjdC1jb2Nvcy9leGFtcGxlLWNhc2UvMy44LjYvY29jb3MtdGVzdC1wcm9qZWN0cy9leHRlbnNpb25zL2xvY2FsaXphdGlvbi1lZGl0b3Ivbm9kZV9tb2R1bGVzL2ludGwtcGx1cmFscnVsZXMvcG9seWZpbGwuanMiLCIuLi9maWxlOi9EOi9wcm9qZWN0LWNvY29zL2V4YW1wbGUtY2FzZS8zLjguNi9jb2Nvcy10ZXN0LXByb2plY3RzL2V4dGVuc2lvbnMvbG9jYWxpemF0aW9uLWVkaXRvci9ub2RlX21vZHVsZXMvaW50bC1wbHVyYWxydWxlcy9maWxlOi9EOi9wcm9qZWN0LWNvY29zL2V4YW1wbGUtY2FzZS8zLjguNi9jb2Nvcy10ZXN0LXByb2plY3RzL2V4dGVuc2lvbnMvbG9jYWxpemF0aW9uLWVkaXRvci9ub2RlX21vZHVsZXMvaW50bC1wbHVyYWxydWxlcy9wb2x5ZmlsbC5tanM/Y2pzPSZvcmlnaW5hbD0uanMiLCIuLi9maWxlOi9EOi9wcm9qZWN0LWNvY29zL2V4YW1wbGUtY2FzZS8zLjguNi9jb2Nvcy10ZXN0LXByb2plY3RzL2V4dGVuc2lvbnMvbG9jYWxpemF0aW9uLWVkaXRvci9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZmlsZTovRDovcHJvamVjdC1jb2Nvcy9leGFtcGxlLWNhc2UvMy44LjYvY29jb3MtdGVzdC1wcm9qZWN0cy9leHRlbnNpb25zL2xvY2FsaXphdGlvbi1lZGl0b3Ivbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCIuLi9maWxlOi9EOi9wcm9qZWN0LWNvY29zL2V4YW1wbGUtY2FzZS8zLjguNi9jb2Nvcy10ZXN0LXByb2plY3RzL2V4dGVuc2lvbnMvbG9jYWxpemF0aW9uLWVkaXRvci9ub2RlX21vZHVsZXMvaW50bC1wbHVyYWxydWxlcy9maWxlOi9EOi9wcm9qZWN0LWNvY29zL2V4YW1wbGUtY2FzZS8zLjguNi9jb2Nvcy10ZXN0LXByb2plY3RzL2V4dGVuc2lvbnMvbG9jYWxpemF0aW9uLWVkaXRvci9ub2RlX21vZHVsZXMvaW50bC1wbHVyYWxydWxlcy9wc2V1ZG8tbnVtYmVyLWZvcm1hdC5qcyIsIi4uL2NjZTovaW50ZXJuYWwvY2NlOi9pbnRlcm5hbC9yb2xsdXBQbHVnaW5Nb2RMb0JhYmVsSGVscGVycy5qcyIsIi4uL2ZpbGU6L0Q6L3Byb2plY3QtY29jb3MvZXhhbXBsZS1jYXNlLzMuOC42L2NvY29zLXRlc3QtcHJvamVjdHMvZXh0ZW5zaW9ucy9sb2NhbGl6YXRpb24tZWRpdG9yL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9maWxlOi9EOi9wcm9qZWN0LWNvY29zL2V4YW1wbGUtY2FzZS8zLjguNi9jb2Nvcy10ZXN0LXByb2plY3RzL2V4dGVuc2lvbnMvbG9jYWxpemF0aW9uLWVkaXRvci9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCIuLi9maWxlOi9EOi9wcm9qZWN0LWNvY29zL2V4YW1wbGUtY2FzZS8zLjguNi9jb2Nvcy10ZXN0LXByb2plY3RzL2V4dGVuc2lvbnMvbG9jYWxpemF0aW9uLWVkaXRvci9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZmlsZTovRDovcHJvamVjdC1jb2Nvcy9leGFtcGxlLWNhc2UvMy44LjYvY29jb3MtdGVzdC1wcm9qZWN0cy9leHRlbnNpb25zL2xvY2FsaXphdGlvbi1lZGl0b3Ivbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQXJyYXkuanMiLCIuLi9maWxlOi9EOi9wcm9qZWN0LWNvY29zL2V4YW1wbGUtY2FzZS8zLjguNi9jb2Nvcy10ZXN0LXByb2plY3RzL2V4dGVuc2lvbnMvbG9jYWxpemF0aW9uLWVkaXRvci9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZmlsZTovRDovcHJvamVjdC1jb2Nvcy9leGFtcGxlLWNhc2UvMy44LjYvY29jb3MtdGVzdC1wcm9qZWN0cy9leHRlbnNpb25zL2xvY2FsaXphdGlvbi1lZGl0b3Ivbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIi4uL2ZpbGU6L0Q6L3Byb2plY3QtY29jb3MvZXhhbXBsZS1jYXNlLzMuOC42L2NvY29zLXRlc3QtcHJvamVjdHMvZXh0ZW5zaW9ucy9sb2NhbGl6YXRpb24tZWRpdG9yL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9maWxlOi9EOi9wcm9qZWN0LWNvY29zL2V4YW1wbGUtY2FzZS8zLjguNi9jb2Nvcy10ZXN0LXByb2plY3RzL2V4dGVuc2lvbnMvbG9jYWxpemF0aW9uLWVkaXRvci9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiXSwibmFtZXMiOlsiX2FycmF5TGlrZVRvQXJyYXkiLCJhcnIiLCJsZW4iLCJsZW5ndGgiLCJpIiwiYXJyMiIsIkFycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiaXNBcnJheSIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJzZWxmIiwiUmVmZXJlbmNlRXJyb3IiLCJDanNMb2FkZXIiLCJfcmVnaXN0cnkiLCJfbW9kdWxlQ2FjaGUiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJkZWZpbmUiLCJpZCIsImZhY3RvcnkiLCJyZXNvbHZlTWFwIiwicmVxdWlyZSIsIl9yZXF1aXJlIiwidGhyb3dJbnZhbGlkV3JhcHBlciIsInJlcXVlc3RUYXJnZXQiLCJmcm9tIiwiRXJyb3IiLCJwYXJlbnQiLCJjYWNoZWRNb2R1bGUiLCJleHBvcnRzIiwibW9kdWxlIiwiX3RyeU1vZHVsZUxvYWQiLCJfcmVzb2x2ZSIsInNwZWNpZmllciIsIl9yZXNvbHZlRnJvbUluZm9zIiwiX3Rocm93VW5yZXNvbHZlZCIsIl9janNJbmZvcyRwYXJlbnQkcmVzbyIsIl9janNJbmZvcyRwYXJlbnQiLCJjanNJbmZvcyIsInJlc29sdmVDYWNoZSIsInVuZGVmaW5lZCIsInRocmV3IiwiX2xvYWQiLCJfdGhpcyRfbG9hZFdyYXBwZXIiLCJfbG9hZFdyYXBwZXIiLCJ2ZW5kb3JSZXF1aXJlIiwiX2NyZWF0ZVJlcXVpcmUiLCJfY3JlYXRlUmVxdWlyZVdpdGhSZXNvbHZlTWFwIiwiX2xvYWRIb3N0UHJvdmlkZWRNb2R1bGVzIiwiX2V4cG9ydHMiLCJlcnIiLCJjYXVzZSIsIl90aGlzIiwicmVxdWlyZU1hcCIsIm9yaWdpbmFsUmVxdWlyZSIsInJlc29sdmVkIiwicGFyZW50VXJsIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJ2YWx1ZSIsIkhUTUw1IiwiTkFUSVZFIiwiQU5EUk9JRCIsIklPUyIsIk1BQyIsIldJTkRPV1MiLCJMSU5VWCIsIk9IT1MiLCJPUEVOX0hBUk1PTlkiLCJXRUNIQVQiLCJXRUNIQVRfTUlOSV9QUk9HUkFNIiwiWElBT01JIiwiQUxJUEFZIiwiVEFPQkFPIiwiVEFPQkFPX01JTklHQU1FIiwiQllURURBTkNFIiwiT1BQTyIsIlZJVk8iLCJIVUFXRUkiLCJNSUdVIiwiSE9OT1IiLCJDT0NPU19SVU5USU1FIiwiRURJVE9SIiwiRURJVE9SX05PVF9JTl9QUkVWSUVXIiwiUFJFVklFVyIsIkJVSUxEIiwiVEVTVCIsIkRFQlVHIiwiREVWIiwiTUlOSUdBTUUiLCJSVU5USU1FX0JBU0VEIiwiU1VQUE9SVF9KSVQiLCJKU0IiLCJORVRfTU9ERSIsIl9fY2pzTWV0YVVSTCIsImltcG9ydCIsIl9fZmlsZW5hbWUiLCJfX2Rpcm5hbWUiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsImlzU3RydWN0dXJhbGx5VmFsaWRMYW5ndWFnZVRhZyIsImxvY2FsZSIsInNwbGl0IiwiZXZlcnkiLCJzdWJ0YWciLCJ0ZXN0IiwiY2Fub25pY2FsaXplTG9jYWxlTGlzdCIsImxvY2FsZXMiLCJyZXMiLCJ0YWciLCJTdHJpbmciLCJtc2ciLCJjb25jYXQiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RyVGFnIiwiX21zZyIsIlJhbmdlRXJyb3IiLCJrZXlzIiwiZGVmYXVsdExvY2FsZSIsIm5hdmlnYXRvciIsInVzZXJMYW5ndWFnZSIsImxhbmd1YWdlIiwiZ2V0VHlwZSIsInR5cGUiLCJnZXRQbHVyYWxSdWxlcyIsIk51bWJlckZvcm1hdCIsImdldFNlbGVjdG9yIiwiZ2V0Q2F0ZWdvcmllcyIsImZpbmRMb2NhbGUiLCJyZXBsYWNlIiwicmVzb2x2ZUxvY2FsZSIsImNhbm9uaWNhbExvY2FsZXMiLCJsYyIsIlBsdXJhbFJ1bGVzIiwib3B0IiwiYXJndW1lbnRzIiwiX2xvY2FsZSIsIl9zZWxlY3QiLCJfdHlwZSIsIl9uZiIsInJlc29sdmVkT3B0aW9ucyIsIl90aGlzJF9uZiRyZXNvbHZlZE9wdCIsIm1pbmltdW1JbnRlZ2VyRGlnaXRzIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwibWluaW11bVNpZ25pZmljYW50RGlnaXRzIiwibWF4aW11bVNpZ25pZmljYW50RGlnaXRzIiwicGx1cmFsQ2F0ZWdvcmllcyIsInNlbGVjdCIsIm51bWJlciIsIk51bWJlciIsImlzRmluaXRlIiwiZm10IiwiZm9ybWF0IiwiTWF0aCIsImFicyIsInN1cHBvcnRlZExvY2FsZXNPZiIsImZpbHRlciIsIl9nZXRQcm90b3R5cGVPZiIsIm8iLCJzZXRQcm90b3R5cGVPZiIsImdldFByb3RvdHlwZU9mIiwiYmluZCIsIl9fcHJvdG9fXyIsIm93bktleXMiLCJvYmplY3QiLCJlbnVtZXJhYmxlT25seSIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bWJvbHMiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwic291cmNlIiwiZm9yRWFjaCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiY29uc29sZUxvZ2dlciIsImxvZyIsImFyZ3MiLCJvdXRwdXQiLCJ3YXJuIiwiZXJyb3IiLCJjb25zb2xlIiwiTG9nZ2VyIiwiY29uY3JldGVMb2dnZXIiLCJvcHRpb25zIiwiaW5pdCIsInByZWZpeCIsImxvZ2dlciIsImRlYnVnIiwic2V0RGVidWciLCJib29sIiwiX2xlbiIsIl9rZXkiLCJmb3J3YXJkIiwiX2xlbjIiLCJfa2V5MiIsIl9sZW4zIiwiX2tleTMiLCJkZXByZWNhdGUiLCJfbGVuNCIsIl9rZXk0IiwibHZsIiwiZGVidWdPbmx5IiwiY3JlYXRlIiwibW9kdWxlTmFtZSIsImNsb25lIiwiYmFzZUxvZ2dlciIsIkV2ZW50RW1pdHRlciIsIm9ic2VydmVycyIsIm9uIiwiZXZlbnRzIiwibGlzdGVuZXIiLCJldmVudCIsIm9mZiIsImwiLCJlbWl0IiwiY2xvbmVkIiwib2JzZXJ2ZXIiLCJfY2xvbmVkIiwiZGVmZXIiLCJyZWoiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJtYWtlU3RyaW5nIiwiY29weSIsImEiLCJzIiwidCIsIm0iLCJnZXRMYXN0T2ZQYXRoIiwicGF0aCIsIkVtcHR5IiwiY2xlYW5LZXkiLCJpbmRleE9mIiwiY2FuTm90VHJhdmVyc2VEZWVwZXIiLCJzdGFjayIsInNoaWZ0IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiayIsInNldFBhdGgiLCJuZXdWYWx1ZSIsIl9nZXRMYXN0T2ZQYXRoIiwicHVzaFBhdGgiLCJfZ2V0TGFzdE9mUGF0aDIiLCJnZXRQYXRoIiwiX2dldExhc3RPZlBhdGgzIiwiZ2V0UGF0aFdpdGhEZWZhdWx0cyIsImRhdGEiLCJkZWZhdWx0RGF0YSIsImRlZXBFeHRlbmQiLCJvdmVyd3JpdGUiLCJwcm9wIiwicmVnZXhFc2NhcGUiLCJzdHIiLCJfZW50aXR5TWFwIiwiZXNjYXBlIiwiaXNJRTEwIiwid2luZG93IiwidXNlckFnZW50RGF0YSIsInVzZXJBZ2VudCIsImNoYXJzIiwibG9va3NMaWtlT2JqZWN0UGF0aCIsIm5zU2VwYXJhdG9yIiwia2V5U2VwYXJhdG9yIiwicG9zc2libGVDaGFycyIsImMiLCJyIiwiUmVnRXhwIiwibWFwIiwiam9pbiIsIm1hdGNoZWQiLCJraSIsInN1YnN0cmluZyIsIm93bktleXMkMSIsIl9vYmplY3RTcHJlYWQkMSIsIl9jcmVhdGVTdXBlciIsIkRlcml2ZWQiLCJoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIl9jcmVhdGVTdXBlckludGVybmFsIiwiU3VwZXIiLCJyZXN1bHQiLCJOZXdUYXJnZXQiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJzaGFtIiwiUHJveHkiLCJCb29sZWFuIiwidmFsdWVPZiIsImUiLCJkZWVwRmluZCIsInBhdGhzIiwiY3VycmVudCIsImoiLCJwIiwic2xpY2UiLCJtaXgiLCJlbmRzV2l0aCIsImpvaW5lZFBhdGgiLCJSZXNvdXJjZVN0b3JlIiwiX0V2ZW50RW1pdHRlciIsIl9pbmhlcml0cyIsIl9zdXBlciIsIm5zIiwiZGVmYXVsdE5TIiwiaWdub3JlSlNPTlN0cnVjdHVyZSIsImFkZE5hbWVzcGFjZXMiLCJyZW1vdmVOYW1lc3BhY2VzIiwiaW5kZXgiLCJzcGxpY2UiLCJnZXRSZXNvdXJjZSIsImxuZyIsImFkZFJlc291cmNlIiwic2lsZW50IiwiYWRkUmVzb3VyY2VzIiwicmVzb3VyY2VzIiwidG9TdHJpbmciLCJhZGRSZXNvdXJjZUJ1bmRsZSIsImRlZXAiLCJwYWNrIiwicmVtb3ZlUmVzb3VyY2VCdW5kbGUiLCJoYXNSZXNvdXJjZUJ1bmRsZSIsImdldFJlc291cmNlQnVuZGxlIiwiY29tcGF0aWJpbGl0eUFQSSIsImdldERhdGFCeUxhbmd1YWdlIiwiaGFzTGFuZ3VhZ2VTb21lVHJhbnNsYXRpb25zIiwibiIsImZpbmQiLCJ2IiwidG9KU09OIiwicG9zdFByb2Nlc3NvciIsInByb2Nlc3NvcnMiLCJhZGRQb3N0UHJvY2Vzc29yIiwibmFtZSIsImhhbmRsZSIsInRyYW5zbGF0b3IiLCJwcm9jZXNzb3IiLCJwcm9jZXNzIiwib3duS2V5cyQyIiwiX29iamVjdFNwcmVhZCQyIiwiX2NyZWF0ZVN1cGVyJDEiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0JDEiLCJjaGVja2VkTG9hZGVkRm9yIiwiVHJhbnNsYXRvciIsInNlcnZpY2VzIiwiY2hhbmdlTGFuZ3VhZ2UiLCJleGlzdHMiLCJpbnRlcnBvbGF0aW9uIiwiZXh0cmFjdEZyb21LZXkiLCJuYW1lc3BhY2VzIiwid291bGRDaGVja0Zvck5zSW5LZXkiLCJzZWVtc05hdHVyYWxMYW5ndWFnZSIsInVzZXJEZWZpbmVkS2V5U2VwYXJhdG9yIiwidXNlckRlZmluZWROc1NlcGFyYXRvciIsIm1hdGNoIiwiaW50ZXJwb2xhdG9yIiwibmVzdGluZ1JlZ2V4cCIsInBhcnRzIiwidHJhbnNsYXRlIiwibGFzdEtleSIsIl90aGlzMiIsIm92ZXJsb2FkVHJhbnNsYXRpb25PcHRpb25IYW5kbGVyIiwicmV0dXJuRGV0YWlscyIsIl90aGlzJGV4dHJhY3RGcm9tS2V5IiwibmFtZXNwYWNlIiwiYXBwZW5kTmFtZXNwYWNlVG9DSU1vZGUiLCJ0b0xvd2VyQ2FzZSIsInJlc1VzZWRLZXkiLCJ1c2VkS2V5IiwicmVzRXhhY3RVc2VkS2V5IiwiZXhhY3RVc2VkS2V5IiwicmVzVHlwZSIsIm5vT2JqZWN0Iiwiam9pbkFycmF5cyIsImhhbmRsZUFzT2JqZWN0SW5JMThuRm9ybWF0IiwiaTE4bkZvcm1hdCIsImhhbmRsZUFzT2JqZWN0IiwicmV0dXJuT2JqZWN0cyIsInJldHVybmVkT2JqZWN0SGFuZGxlciIsInJlc1R5cGVJc0FycmF5IiwibmV3S2V5VG9Vc2UiLCJkZWVwS2V5IiwiZXh0ZW5kVHJhbnNsYXRpb24iLCJ1c2VkRGVmYXVsdCIsIm5lZWRzUGx1cmFsSGFuZGxpbmciLCJjb3VudCIsImhhc0RlZmF1bHRWYWx1ZSIsImRlZmF1bHRWYWx1ZVN1ZmZpeCIsInBsdXJhbFJlc29sdmVyIiwiZ2V0U3VmZml4IiwiZGVmYXVsdFZhbHVlIiwiaXNWYWxpZExvb2t1cCIsIm1pc3NpbmdLZXlOb1ZhbHVlRmFsbGJhY2tUb0tleSIsInJlc0Zvck1pc3NpbmciLCJ1cGRhdGVNaXNzaW5nIiwiZmsiLCJsbmdzIiwiZmFsbGJhY2tMbmdzIiwibGFuZ3VhZ2VVdGlscyIsImdldEZhbGxiYWNrQ29kZXMiLCJmYWxsYmFja0xuZyIsInNhdmVNaXNzaW5nVG8iLCJ0b1Jlc29sdmVIaWVyYXJjaHkiLCJzZW5kIiwic3BlY2lmaWNEZWZhdWx0VmFsdWUiLCJkZWZhdWx0Rm9yTWlzc2luZyIsIm1pc3NpbmdLZXlIYW5kbGVyIiwiYmFja2VuZENvbm5lY3RvciIsInNhdmVNaXNzaW5nIiwic2F2ZU1pc3NpbmdQbHVyYWxzIiwiZ2V0U3VmZml4ZXMiLCJzdWZmaXgiLCJhcHBlbmROYW1lc3BhY2VUb01pc3NpbmdLZXkiLCJwYXJzZU1pc3NpbmdLZXlIYW5kbGVyIiwiX3RoaXMzIiwicGFyc2UiLCJkZWZhdWx0VmFyaWFibGVzIiwidXNlZExuZyIsInVzZWROUyIsInNraXBJbnRlcnBvbGF0aW9uIiwic2tpcE9uVmFyaWFibGVzIiwibmVzdEJlZiIsIm5iIiwiaW50ZXJwb2xhdGUiLCJuYSIsIm5lc3RBZnQiLCJuZXN0IiwiY29udGV4dCIsInJlc2V0IiwicG9zdFByb2Nlc3MiLCJwb3N0UHJvY2Vzc29yTmFtZXMiLCJhcHBseVBvc3RQcm9jZXNzb3IiLCJwb3N0UHJvY2Vzc1Bhc3NSZXNvbHZlZCIsImkxOG5SZXNvbHZlZCIsIl90aGlzNCIsImZvdW5kIiwiZXh0cmFjdGVkIiwiZmFsbGJhY2tOUyIsIm5lZWRzWmVyb1N1ZmZpeExvb2t1cCIsIm9yZGluYWwiLCJzaG91bGRVc2VJbnRsQXBpIiwibmVlZHNDb250ZXh0SGFuZGxpbmciLCJjb2RlcyIsInV0aWxzIiwiaGFzTG9hZGVkTmFtZXNwYWNlIiwiY29kZSIsImZpbmFsS2V5cyIsImFkZExvb2t1cEtleXMiLCJwbHVyYWxTdWZmaXgiLCJ6ZXJvU3VmZml4IiwicGx1cmFsU2VwYXJhdG9yIiwiY29udGV4dEtleSIsImNvbnRleHRTZXBhcmF0b3IiLCJwb3NzaWJsZUtleSIsInBvcCIsInJldHVybk51bGwiLCJyZXR1cm5FbXB0eVN0cmluZyIsInJlc291cmNlU3RvcmUiLCJvcHRpb24iLCJjYXBpdGFsaXplIiwic3RyaW5nIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJMYW5ndWFnZVV0aWwiLCJzdXBwb3J0ZWRMbmdzIiwiZ2V0U2NyaXB0UGFydEZyb21Db2RlIiwiZm9ybWF0TGFuZ3VhZ2VDb2RlIiwiZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUiLCJzcGVjaWFsQ2FzZXMiLCJsb3dlckNhc2VMbmciLCJwYXJ0IiwiY2xlYW5Db2RlIiwiaXNTdXBwb3J0ZWRDb2RlIiwibG9hZCIsIm5vbkV4cGxpY2l0U3VwcG9ydGVkTG5ncyIsImdldEJlc3RNYXRjaEZyb21Db2RlcyIsImNsZWFuZWRMbmciLCJsbmdPbmx5Iiwic3VwcG9ydGVkTG5nIiwiZmFsbGJhY2tzIiwiZmFsbGJhY2tDb2RlIiwiZmFsbGJhY2tDb2RlcyIsImFkZENvZGUiLCJmYyIsInNldHMiLCJuciIsIl9ydWxlc1BsdXJhbHNUeXBlcyIsIl8iLCJkZXByZWNhdGVkSnNvblZlcnNpb25zIiwic3VmZml4ZXNPcmRlciIsInplcm8iLCJvbmUiLCJ0d28iLCJmZXciLCJtYW55Iiwib3RoZXIiLCJjcmVhdGVSdWxlcyIsInJ1bGVzIiwic2V0IiwibnVtYmVycyIsInBsdXJhbHMiLCJQbHVyYWxSZXNvbHZlciIsImNvbXBhdGliaWxpdHlKU09OIiwiSW50bCIsImFkZFJ1bGUiLCJnZXRSdWxlIiwiX3VudXNlZCIsIm5lZWRzUGx1cmFsIiwicnVsZSIsImdldFBsdXJhbEZvcm1zT2ZLZXkiLCJzb3J0IiwicGx1cmFsQ2F0ZWdvcnkxIiwicGx1cmFsQ2F0ZWdvcnkyIiwicGx1cmFsQ2F0ZWdvcnkiLCJwcmVwZW5kIiwiZ2V0U3VmZml4UmV0cm9Db21wYXRpYmxlIiwiaWR4Iiwibm9BYnMiLCJzaW1wbGlmeVBsdXJhbFN1ZmZpeCIsInJldHVyblN1ZmZpeCIsImluY2x1ZGVzIiwib3duS2V5cyQzIiwiX29iamVjdFNwcmVhZCQzIiwiSW50ZXJwb2xhdG9yIiwiZXNjYXBlVmFsdWUiLCJpT3B0cyIsInVzZVJhd1ZhbHVlVG9Fc2NhcGUiLCJwcmVmaXhFc2NhcGVkIiwic3VmZml4RXNjYXBlZCIsImZvcm1hdFNlcGFyYXRvciIsInVuZXNjYXBlUHJlZml4IiwidW5lc2NhcGVTdWZmaXgiLCJuZXN0aW5nUHJlZml4IiwibmVzdGluZ1ByZWZpeEVzY2FwZWQiLCJuZXN0aW5nU3VmZml4IiwibmVzdGluZ1N1ZmZpeEVzY2FwZWQiLCJuZXN0aW5nT3B0aW9uc1NlcGFyYXRvciIsIm1heFJlcGxhY2VzIiwiYWx3YXlzRm9ybWF0IiwicmVzZXRSZWdFeHAiLCJyZWdleHBTdHIiLCJyZWdleHAiLCJyZWdleHBVbmVzY2FwZVN0ciIsInJlZ2V4cFVuZXNjYXBlIiwibmVzdGluZ1JlZ2V4cFN0ciIsInJlcGxhY2VzIiwicmVnZXhTYWZlIiwidmFsIiwiaGFuZGxlRm9ybWF0IiwiaW50ZXJwb2xhdGlvbmtleSIsInRyaW0iLCJmIiwibWlzc2luZ0ludGVycG9sYXRpb25IYW5kbGVyIiwidG9kb3MiLCJyZWdleCIsInNhZmVWYWx1ZSIsInRvZG8iLCJleGVjIiwibWF0Y2hlZFZhciIsInRlbXAiLCJsYXN0SW5kZXgiLCJjbG9uZWRPcHRpb25zIiwiaGFuZGxlSGFzT3B0aW9ucyIsImluaGVyaXRlZE9wdGlvbnMiLCJzZXAiLCJvcHRpb25zU3RyaW5nIiwibWF0Y2hlZFNpbmdsZVF1b3RlcyIsIm1hdGNoZWREb3VibGVRdW90ZXMiLCJmb3JtYXR0ZXJzIiwiZG9SZWR1Y2UiLCJlbGVtIiwicmVkdWNlIiwib3duS2V5cyQ0IiwiX29iamVjdFNwcmVhZCQ0IiwicGFyc2VGb3JtYXRTdHIiLCJmb3JtYXRTdHIiLCJmb3JtYXROYW1lIiwiZm9ybWF0T3B0aW9ucyIsIm9wdFN0ciIsImN1cnJlbmN5IiwicmFuZ2UiLCJvcHRzIiwiX29wdCRzcGxpdCIsIl9vcHQkc3BsaXQyIiwiX3RvQXJyYXkiLCJyZXN0IiwiaXNOYU4iLCJwYXJzZUludCIsImNyZWF0ZUNhY2hlZEZvcm1hdHRlciIsImZuIiwiY2FjaGUiLCJpbnZva2VGb3JtYXR0ZXIiLCJmb3JtYXR0ZXIiLCJGb3JtYXR0ZXIiLCJmb3JtYXRzIiwic3R5bGUiLCJkYXRldGltZSIsIkRhdGVUaW1lRm9ybWF0IiwicmVsYXRpdmV0aW1lIiwiUmVsYXRpdmVUaW1lRm9ybWF0IiwibGlzdCIsIkxpc3RGb3JtYXQiLCJhZGQiLCJhZGRDYWNoZWQiLCJfZm9ybWF0IiwibWVtIiwiX3BhcnNlRm9ybWF0U3RyIiwiZm9ybWF0dGVkIiwidmFsT3B0aW9ucyIsImZvcm1hdFBhcmFtcyIsIm93bktleXMkNSIsIl9vYmplY3RTcHJlYWQkNSIsIl9jcmVhdGVTdXBlciQyIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQyIiwicmVtb3ZlUGVuZGluZyIsInEiLCJwZW5kaW5nIiwicGVuZGluZ0NvdW50IiwiQ29ubmVjdG9yIiwiYmFja2VuZCIsInN0b3JlIiwid2FpdGluZ1JlYWRzIiwibWF4UGFyYWxsZWxSZWFkcyIsInJlYWRpbmdDYWxscyIsIm1heFJldHJpZXMiLCJyZXRyeVRpbWVvdXQiLCJzdGF0ZSIsInF1ZXVlIiwicXVldWVMb2FkIiwibGFuZ3VhZ2VzIiwiY2FsbGJhY2siLCJ0b0xvYWQiLCJ0b0xvYWRMYW5ndWFnZXMiLCJ0b0xvYWROYW1lc3BhY2VzIiwiaGFzQWxsTmFtZXNwYWNlcyIsInJlbG9hZCIsImxvYWRlZCIsImVycm9ycyIsImRvbmUiLCJsb2FkZWRLZXlzIiwicmVhZCIsImZjTmFtZSIsInRyaWVkIiwid2FpdCIsIm5leHQiLCJzZXRUaW1lb3V0IiwicHJlcGFyZUxvYWRpbmciLCJsb2FkT25lIiwiX3RoaXM1IiwiZmFsbGJhY2tWYWx1ZSIsImlzVXBkYXRlIiwiZ2V0IiwiaW5pdEltbWVkaWF0ZSIsInByZWxvYWQiLCJwYXJ0aWFsQnVuZGxlZExhbmd1YWdlcyIsInJldCIsInREZXNjcmlwdGlvbiIsInRyYW5zZm9ybU9wdGlvbnMiLCJvd25LZXlzJDYiLCJfb2JqZWN0U3ByZWFkJDYiLCJfY3JlYXRlU3VwZXIkMyIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMyIsIm5vb3AiLCJiaW5kTWVtYmVyRnVuY3Rpb25zIiwiaW5zdCIsIm1lbXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiSTE4biIsIm1vZHVsZXMiLCJleHRlcm5hbCIsImlzSW5pdGlhbGl6ZWQiLCJpc0Nsb25lIiwiZGVmT3B0cyIsImNyZWF0ZUNsYXNzT25EZW1hbmQiLCJDbGFzc09yT2JqZWN0IiwibHUiLCJsYW5ndWFnZURldGVjdG9yIiwiZGV0ZWN0aW9uIiwic3RvcmVBcGkiLCJfdGhpczIkc3RvcmUiLCJzdG9yZUFwaUNoYWluZWQiLCJfdGhpczIkc3RvcmUyIiwiZGVmZXJyZWQiLCJmaW5pc2giLCJpbml0aWFsaXplZFN0b3JlT25jZSIsImxvYWRSZXNvdXJjZXMiLCJ1c2VkQ2FsbGJhY2siLCJhcHBlbmQiLCJyZXNvbHZlZExhbmd1YWdlIiwic2V0UmVzb2x2ZWRMYW5ndWFnZSIsInJlbG9hZFJlc291cmNlcyIsInVzZSIsImxpIiwibG5nSW5MbmdzIiwiaXNMYW5ndWFnZUNoYW5naW5nVG8iLCJzZXRMbmdQcm9wcyIsInNldExuZyIsImNhY2hlVXNlckxhbmd1YWdlIiwiYXN5bmMiLCJkZXRlY3QiLCJnZXRGaXhlZFQiLCJrZXlQcmVmaXgiLCJmaXhlZFQiLCJyZXN1bHRLZXkiLCJfdGhpcyR0cmFuc2xhdG9yIiwiX3RoaXMkdHJhbnNsYXRvcjIiLCJzZXREZWZhdWx0TmFtZXNwYWNlIiwiX3RoaXM2IiwibGFzdExuZyIsImxvYWROb3RQZW5kaW5nIiwibG9hZFN0YXRlIiwicHJlY2hlY2siLCJwcmVSZXN1bHQiLCJsb2FkTmFtZXNwYWNlcyIsIl90aGlzNyIsImxvYWRMYW5ndWFnZXMiLCJwcmVsb2FkZWQiLCJuZXdMbmdzIiwiZGlyIiwicnRsTG5ncyIsImNsb25lSW5zdGFuY2UiLCJfdGhpczgiLCJtZXJnZWRPcHRpb25zIiwibWVtYmVyc1RvQ29weSIsImNyZWF0ZUluc3RhbmNlIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIml0ZXIiLCJfbm9uSXRlcmFibGVSZXN0IiwiUHNldWRvTnVtYmVyRm9ybWF0IiwiX2ludGVyb3BEZWZhdWx0TGVnYWN5IiwiZ2V0UGx1cmFsUnVsZXNfX2RlZmF1bHQiLCJQc2V1ZG9OdW1iZXJGb3JtYXRfX2RlZmF1bHQiLCJjb21tb25qc0dsb2JhbCIsImdsb2JhbFRoaXMiLCJnbG9iYWwiLCJnZXREZWZhdWx0RXhwb3J0RnJvbUNqcyIsIngiLCJfX2VzTW9kdWxlIiwicGx1cmFscyQxIiwib3JkIiwiYiIsImQiLCJ2MCIsInJvb3QiLCJfaW4iLCJhZiIsImFrIiwiYW0iLCJhbiIsImFyIiwidDAiLCJuMTAwIiwiYXJzIiwiYXMiLCJhc2EiLCJhc3QiLCJheiIsImkxMCIsImkxMDAiLCJpMTAwMCIsImJlIiwibjEwIiwiYmVtIiwiYmV6IiwiYmciLCJiaG8iLCJibSIsImJuIiwiYm8iLCJiciIsIm4xMDAwMDAwIiwiYnJ4IiwiYnMiLCJmMTAiLCJmMTAwIiwiY2EiLCJjZSIsImNlYiIsImNnZyIsImNociIsImNrYiIsImNzIiwiY3kiLCJkYSIsImRlIiwiZG9pIiwiZHNiIiwiZHYiLCJkeiIsImVlIiwiZWwiLCJlbiIsImVvIiwiZXMiLCJldCIsImV1IiwiZmEiLCJmZiIsImZpIiwiZmlsIiwiZm8iLCJmciIsImkxMDAwMDAwIiwiZnVyIiwiZnkiLCJnYSIsImdkIiwiZ2wiLCJnc3ciLCJndSIsImd1dyIsImd2IiwiaGEiLCJoYXciLCJoZSIsImhpIiwiaHIiLCJoc2IiLCJodSIsImh5IiwiaWEiLCJpZyIsImlpIiwiaW8iLCJpcyIsIml0IiwiaXUiLCJpdyIsImphIiwiamJvIiwiamdvIiwiamkiLCJqbWMiLCJqdiIsImp3Iiwia2EiLCJrYWIiLCJrYWoiLCJrY2ciLCJrZGUiLCJrZWEiLCJrayIsImtraiIsImtsIiwia20iLCJrbiIsImtvIiwia3MiLCJrc2IiLCJrc2giLCJrdSIsImt3IiwibjEwMDAiLCJuMTAwMDAwIiwia3kiLCJsYWciLCJsYiIsImxnIiwibGlqIiwibGt0IiwibG4iLCJsbyIsImx0IiwibHYiLCJtYXMiLCJtZyIsIm1nbyIsIm1rIiwibWwiLCJtbiIsIm1vIiwibXIiLCJtcyIsIm10IiwibXkiLCJuYWgiLCJuYXEiLCJuZCIsIm5lIiwibmwiLCJubiIsIm5uaCIsIm5vIiwibnFvIiwibnNvIiwibnkiLCJueW4iLCJvbSIsIm9yIiwib3MiLCJvc2EiLCJwYSIsInBhcCIsInBjbSIsInBsIiwicHJnIiwicHMiLCJwdCIsInB0X1BUIiwicm0iLCJybyIsInJvZiIsInJ1IiwicndrIiwic2FoIiwic2FxIiwic2F0Iiwic2MiLCJzY24iLCJzZCIsInNkaCIsInNlIiwic2VoIiwic2VzIiwic2ciLCJzaCIsInNoaSIsInNpIiwic2siLCJzbCIsInNtYSIsInNtaSIsInNtaiIsInNtbiIsInNtcyIsInNuIiwic28iLCJzcSIsInNyIiwic3MiLCJzc3kiLCJzdCIsInN1Iiwic3YiLCJzdyIsInN5ciIsInRhIiwidGUiLCJ0ZW8iLCJ0aCIsInRpIiwidGlnIiwidGsiLCJ0bCIsInRuIiwidG8iLCJ0ciIsInRzIiwidHptIiwidWciLCJ1ayIsInVyIiwidXoiLCJ2ZSIsInZpIiwidm8iLCJ2dW4iLCJ3YSIsIndhZSIsIndvIiwieGgiLCJ4b2ciLCJ5aSIsInlvIiwieXVlIiwiemgiLCJ6dSIsIlAiLCJmcmVlemUiLCJhc3NpZ24iLCJwbHVyYWxDYXRlZ29yaWVzJDEiLCJ6IiwiY2FyZGluYWwiLCJDIiwiUGx1cmFscyIsIkNhdGVnb3JpZXMiLCJfcmVxIiwiX3JlcTAiLCJQbHVyYWxSdWxlc19fZGVmYXVsdCIsInBvbHlmaWxsIiwic3VwcG9ydGVkIiwicmVxIiwibG9hZGVyIiwiYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiX3JlZiIsIm1pbklEIiwibWluRkQiLCJtYXhGRCIsIm1pblNEIiwibWF4U0QiLCJfbWluSUQiLCJfbWluRkQiLCJfbWF4RkQiLCJtYXgiLCJfbWluU0QiLCJfbWF4U0QiLCJyYXciLCJwcmVjIiwidG9QcmVjaXNpb24iLCJ0b0ZpeGVkIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJ3cmFwIiwiR2VuZXJhdG9yIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImFyZyIsImgiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsInJldHVybiIsInJlc3VsdE5hbWUiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJtYXJrIiwiYXdyYXAiLCJyZXZlcnNlIiwicHJldiIsInN0b3AiLCJydmFsIiwiY29tcGxldGUiLCJjYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsImluZm8iLCJfYXN5bmNUb0dlbmVyYXRvciIsIl90b1Byb3BlcnR5S2V5IiwiX2V4dGVuZHMiLCJfaW5oZXJpdHNMb29zZSIsIl9zZXRQcm90b3R5cGVPZiIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIm1pbkxlbiIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJhbGxvd0FycmF5TGlrZSIsIl90b1ByaW1pdGl2ZSIsImlucHV0IiwiaGludCIsInByaW0iLCJ0b1ByaW1pdGl2ZSIsIl9pbml0aWFsaXplckRlZmluZVByb3BlcnR5IiwicHJvcGVydHkiLCJpbml0aWFsaXplciIsIl9hcHBseURlY29yYXRlZERlc2NyaXB0b3IiLCJkZWNvcmF0b3JzIiwiZGVzYyIsImRlY29yYXRvciIsImFycmF5V2l0aEhvbGVzIiwiaXRlcmFibGVUb0FycmF5IiwidW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJub25JdGVyYWJsZVJlc3QiLCJhcnJheUxpa2VUb0FycmF5Il0sIm1hcHBpbmdzIjoiOzs7OztNQUFlLFNBQVNBLGlCQUFpQkEsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7UUFDbEQsSUFBSUEsR0FBRyxJQUFJLElBQUksSUFBSUEsR0FBRyxHQUFHRCxH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S0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztRQUM5WXlGLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVkYsRUFBRSxFQUFFO01BQ04sQ0FBQyxFQUFFO1FBQ0R2RixJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7UUFDN0l5RixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDUEYsRUFBRSxFQUFFO01BQ04sQ0FBQyxFQUFFO1FBQ0R2RixJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1FBQ3ZEeUYsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDYkYsRUFBRSxFQUFFO01BQ04sQ0FBQyxFQUFFO1FBQ0R2RixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDWnlGLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUs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LElBQUludUIsQ0FBQyxHQUFHN1IsTUFBTSxDQUFDcEQsU0FBUyxDQUFDdVUsUUFBUSxDQUFDaEYsSUFBSSxDQUFDcEYsQ0FBQyxDQUFDLENBQUMrSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUkrQixDQUFDLEtBQUssUUFBUSxJQUFJOUssQ0FBQyxDQUFDN0QsV0FBVyxFQUFFMk8sQ0FBQyxHQUFHOUssQ0FBQyxDQUFDN0QsV0FBVyxDQUFDa1AsSUFBSTtRQUMzRCxJQUFJUCxDQUFDLEtBQUssS0FBSyxJQUFJQSxDQUFDLEtBQUssS0FBSyxFQUFFLE9BQU8zVixLQUFLLENBQUNtQixJQUFJLENBQUMwSixDQUFDLENBQUM7UUFDcEQsSUFBSThLLENBQUMsS0FBSyxXQUFXLElBQUksMENBQTBDLENBQUNyTyxJQUFJLENBQUNxTyxDQUFDLENBQUMsRUFBRSxPQUFPc3ZCLGlCQUFnQixDQUFDcDZCLENBQUMsRUFBRWk1QixNQUFNLENBQUM7TUFDakgiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIGFycjI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG4gIHJldHVybiBzZWxmO1xufSIsImNsYXNzIENqc0xvYWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3JlZ2lzdHJ5ID0ge307XG4gICAgICAgIHRoaXMuX21vZHVsZUNhY2hlID0ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBhIENvbW1vbkpTIG1vZHVsZS5cbiAgICAgKiBAcGFyYW0gaWQgTW9kdWxlIElELlxuICAgICAqIEBwYXJhbSBmYWN0b3J5IFRoZSBmYWN0b3J5LlxuICAgICAqIEBwYXJhbSByZXNvbHZlTWFwIEFuIG9iamVjdCBvciBhIGZ1bmN0aW9uIHJldHVybmluZyBvYmplY3Qgd2hpY2ggcmVjb3JkcyB0aGUgbW9kdWxlIHNwZWNpZmllciByZXNvbHZlIHJlc3VsdC5cbiAgICAgKiBUaGUgbGF0ZXIgaXMgY2FsbGVkIGFzIFwiZGVmZXJyZWQgcmVzb2x2ZSBtYXBcIiBhbmQgd291bGQgYmUgaW52b2NhdGVkIHJpZ2h0IGJlZm9yZSBDb21tb25KUyBjb2RlIGV4ZWN1dGlvbi5cbiAgICAgKi9cbiAgICBkZWZpbmUoaWQsIGZhY3RvcnksIHJlc29sdmVNYXApIHtcbiAgICAgICAgdGhpcy5fcmVnaXN0cnlbaWRdID0ge1xuICAgICAgICAgICAgZmFjdG9yeSxcbiAgICAgICAgICAgIHJlc29sdmVNYXAsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVxdWlyZXMgYSBDb21tb25KUyBtb2R1bGUuXG4gICAgICogQHBhcmFtIGlkIE1vZHVsZSBJRC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbW9kdWxlJ3MgYG1vZHVsZS5leHBvcnRzYC5cbiAgICAgKi9cbiAgICByZXF1aXJlKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXF1aXJlKGlkKTtcbiAgICB9XG5cbiAgICB0aHJvd0ludmFsaWRXcmFwcGVyKHJlcXVlc3RUYXJnZXQsIGZyb20pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNb2R1bGUgJyR7cmVxdWVzdFRhcmdldH0nIGltcG9ydGVkIGZyb20gJyR7ZnJvbX0nIGlzIGV4cGVjdGVkIGJlIGFuIEVTTS13cmFwcGVkIENvbW1vbkpTIG1vZHVsZSBidXQgaXQgZG9lc24ndC5gKTtcbiAgICB9XG5cbiAgICBfcmVxdWlyZShpZCwgcGFyZW50KSB7XG4gICAgICAgIGNvbnN0IGNhY2hlZE1vZHVsZSA9IHRoaXMuX21vZHVsZUNhY2hlW2lkXTtcbiAgICAgICAgaWYgKGNhY2hlZE1vZHVsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbW9kdWxlID0geyBpZCwgZXhwb3J0czoge30gfTtcbiAgICAgICAgdGhpcy5fbW9kdWxlQ2FjaGVbaWRdID0gbW9kdWxlO1xuICAgICAgICB0aGlzLl90cnlNb2R1bGVMb2FkKG1vZHVsZSwgaWQpO1xuICAgICAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gICAgfVxuXG4gICAgX3Jlc29sdmUoc3BlY2lmaWVyLCBwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc29sdmVGcm9tSW5mb3Moc3BlY2lmaWVyLCBwYXJlbnQpIHx8IHRoaXMuX3Rocm93VW5yZXNvbHZlZChzcGVjaWZpZXIsIHBhcmVudCk7XG4gICAgfVxuXG4gICAgX3Jlc29sdmVGcm9tSW5mb3Moc3BlY2lmaWVyLCBwYXJlbnQpIHtcbiAgICAgICAgaWYgKHNwZWNpZmllciBpbiBjanNJbmZvcykge1xuICAgICAgICAgICAgcmV0dXJuIHNwZWNpZmllcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjanNJbmZvc1twYXJlbnRdPy5yZXNvbHZlQ2FjaGVbc3BlY2lmaWVyXSA/PyB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgX3RyeU1vZHVsZUxvYWQobW9kdWxlLCBpZCkge1xuICAgICAgICBsZXQgdGhyZXcgPSB0cnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5fbG9hZChtb2R1bGUsIGlkKTtcbiAgICAgICAgICAgIHRocmV3ID0gZmFsc2U7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAodGhyZXcpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fbW9kdWxlQ2FjaGVbaWRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2xvYWQobW9kdWxlLCBpZCkge1xuICAgICAgICBjb25zdCB7IGZhY3RvcnksIHJlc29sdmVNYXAgfSA9IHRoaXMuX2xvYWRXcmFwcGVyKGlkKTtcbiAgICAgICAgY29uc3QgdmVuZG9yUmVxdWlyZSA9IHRoaXMuX2NyZWF0ZVJlcXVpcmUobW9kdWxlKTtcbiAgICAgICAgY29uc3QgcmVxdWlyZSA9IHJlc29sdmVNYXBcbiAgICAgICAgICAgID8gdGhpcy5fY3JlYXRlUmVxdWlyZVdpdGhSZXNvbHZlTWFwKHR5cGVvZiByZXNvbHZlTWFwID09PSAnZnVuY3Rpb24nID8gcmVzb2x2ZU1hcCgpIDogcmVzb2x2ZU1hcCwgdmVuZG9yUmVxdWlyZSlcbiAgICAgICAgICAgIDogdmVuZG9yUmVxdWlyZTtcbiAgICAgICAgZmFjdG9yeShtb2R1bGUuZXhwb3J0cywgcmVxdWlyZSwgbW9kdWxlKTtcbiAgICB9XG5cbiAgICBfbG9hZFdyYXBwZXIoaWQpIHtcbiAgICAgICAgaWYgKGlkIGluIHRoaXMuX3JlZ2lzdHJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0cnlbaWRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRIb3N0UHJvdmlkZWRNb2R1bGVzKGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9sb2FkSG9zdFByb3ZpZGVkTW9kdWxlcyhpZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmFjdG9yeTogKF9leHBvcnRzLCBfcmVxdWlyZSwgbW9kdWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXF1aXJlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEN1cnJlbnQgZW52aXJvbm1lbnQgZG9lcyBub3QgcHJvdmlkZSBhIHJlcXVpcmUoKSBmb3IgcmVxdWlyaW5nICcke2lkfScuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShpZCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhjZXB0aW9uIHRocm93biB3aGVuIGNhbGxpbmcgaG9zdCBkZWZpbmVkIHJlcXVpcmUoJyR7aWR9JykuYCwgeyBjYXVzZTogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2NyZWF0ZVJlcXVpcmUobW9kdWxlKSB7XG4gICAgICAgIHJldHVybiAoc3BlY2lmaWVyKSA9PiB0aGlzLl9yZXF1aXJlKHNwZWNpZmllciwgbW9kdWxlKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlUmVxdWlyZVdpdGhSZXNvbHZlTWFwKHJlcXVpcmVNYXAsIG9yaWdpbmFsUmVxdWlyZSkge1xuICAgICAgICByZXR1cm4gKHNwZWNpZmllcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSByZXF1aXJlTWFwW3NwZWNpZmllcl07XG4gICAgICAgICAgICBpZiAocmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxSZXF1aXJlKHJlc29sdmVkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnJlc29sdmVkIHNwZWNpZmllciAnICsgc3BlY2lmaWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfdGhyb3dVbnJlc29sdmVkKHNwZWNpZmllciwgcGFyZW50VXJsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIHJlc29sdmUgJHtzcGVjaWZpZXJ9IGZyb20gJHtwYXJlbnR9LmApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENqc0xvYWRlcigpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBjb25zdCBIVE1MNSA9IHRydWU7XG5leHBvcnQgY29uc3QgTkFUSVZFID0gZmFsc2U7XG5leHBvcnQgY29uc3QgQU5EUk9JRCA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IElPUyA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IE1BQyA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IFdJTkRPV1MgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBMSU5VWCA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IE9IT1MgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBPUEVOX0hBUk1PTlkgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBXRUNIQVQgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBXRUNIQVRfTUlOSV9QUk9HUkFNID0gZmFsc2U7XG5leHBvcnQgY29uc3QgWElBT01JID0gZmFsc2U7XG5leHBvcnQgY29uc3QgQUxJUEFZID0gZmFsc2U7XG5leHBvcnQgY29uc3QgVEFPQkFPID0gZmFsc2U7XG5leHBvcnQgY29uc3QgVEFPQkFPX01JTklHQU1FID0gZmFsc2U7XG5leHBvcnQgY29uc3QgQllURURBTkNFID0gZmFsc2U7XG5leHBvcnQgY29uc3QgT1BQTyA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IFZJVk8gPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBIVUFXRUkgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBNSUdVID0gZmFsc2U7XG5leHBvcnQgY29uc3QgSE9OT1IgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBDT0NPU19SVU5USU1FID0gZmFsc2U7XG5leHBvcnQgY29uc3QgRURJVE9SID0gZmFsc2U7XG5leHBvcnQgY29uc3QgRURJVE9SX05PVF9JTl9QUkVWSUVXID0gZmFsc2U7XG5leHBvcnQgY29uc3QgUFJFVklFVyA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IEJVSUxEID0gdHJ1ZTtcbmV4cG9ydCBjb25zdCBURVNUID0gZmFsc2U7XG5leHBvcnQgY29uc3QgREVCVUcgPSB0cnVlO1xuZXhwb3J0IGNvbnN0IERFViA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IE1JTklHQU1FID0gZmFsc2U7XG5leHBvcnQgY29uc3QgUlVOVElNRV9CQVNFRCA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IFNVUFBPUlRfSklUID0gdHJ1ZTtcbmV4cG9ydCBjb25zdCBKU0IgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBORVRfTU9ERSA9IDA7IiwiaW1wb3J0IF9janNMb2FkZXIgZnJvbSAnY2NlOi9pbnRlcm5hbC9tbC9janMtbG9hZGVyLm1qcyc7XG5sZXQgX2Nqc0V4cG9ydHM7XG5jb25zdCBfX2Nqc01ldGFVUkwgPSBpbXBvcnQubWV0YS51cmw7XG5fY2pzTG9hZGVyLmRlZmluZShfX2Nqc01ldGFVUkwsIGZ1bmN0aW9uIChleHBvcnRzLCByZXF1aXJlLCBtb2R1bGUsIF9fZmlsZW5hbWUsIF9fZGlybmFtZSkge1xuLy8gI3JlZ2lvbiBPUklHSU5BTCBDT0RFXG5cblxuICd1c2Ugc3RyaWN0JztcblxuIGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgICB9O1xuICAgfSBlbHNlIHtcbiAgICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICAgfTtcbiAgIH1cblxuICAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbiB9XG5cbiBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgfVxuIH1cblxuIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgIH1cbiB9XG5cbiBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiB9XG5cbiAvLyBkb2VzIG5vdCBjaGVjayBmb3IgZHVwbGljYXRlIHN1YnRhZ3NcbiB2YXIgaXNTdHJ1Y3R1cmFsbHlWYWxpZExhbmd1YWdlVGFnID0gZnVuY3Rpb24gaXNTdHJ1Y3R1cmFsbHlWYWxpZExhbmd1YWdlVGFnKGxvY2FsZSkge1xuICAgcmV0dXJuIGxvY2FsZS5zcGxpdCgnLScpLmV2ZXJ5KGZ1bmN0aW9uIChzdWJ0YWcpIHtcbiAgICAgcmV0dXJuIC9bYS16MC05XSsvaS50ZXN0KHN1YnRhZyk7XG4gICB9KTtcbiB9O1xuXG4gdmFyIGNhbm9uaWNhbGl6ZUxvY2FsZUxpc3QgPSBmdW5jdGlvbiBjYW5vbmljYWxpemVMb2NhbGVMaXN0KGxvY2FsZXMpIHtcbiAgIGlmICghbG9jYWxlcykgcmV0dXJuIFtdO1xuICAgaWYgKCFBcnJheS5pc0FycmF5KGxvY2FsZXMpKSBsb2NhbGVzID0gW2xvY2FsZXNdO1xuICAgdmFyIHJlcyA9IHt9O1xuXG4gICBmb3IgKHZhciBpID0gMDsgaSA8IGxvY2FsZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgdmFyIHRhZyA9IGxvY2FsZXNbaV07XG4gICAgIGlmICh0YWcgJiYgX3R5cGVvZih0YWcpID09PSAnb2JqZWN0JykgdGFnID0gU3RyaW5nKHRhZyk7XG5cbiAgICAgaWYgKHR5cGVvZiB0YWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgLy8gUmVxdWlyaW5nIHRhZyB0byBiZSBhIFN0cmluZyBvciBPYmplY3QgbWVhbnMgdGhhdCB0aGUgTnVtYmVyIHZhbHVlXG4gICAgICAgLy8gTmFOIHdpbGwgbm90IGJlIGludGVycHJldGVkIGFzIHRoZSBsYW5ndWFnZSB0YWcgXCJuYW5cIiwgd2hpY2ggc3RhbmRzXG4gICAgICAgLy8gZm9yIE1pbiBOYW4gQ2hpbmVzZS5cbiAgICAgICB2YXIgbXNnID0gXCJMb2NhbGVzIHNob3VsZCBiZSBzdHJpbmdzLCBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkodGFnKSwgXCIgaXNuJ3QuXCIpO1xuICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IobXNnKTtcbiAgICAgfVxuXG4gICAgIGlmICh0YWdbMF0gPT09ICcqJykgY29udGludWU7XG5cbiAgICAgaWYgKCFpc1N0cnVjdHVyYWxseVZhbGlkTGFuZ3VhZ2VUYWcodGFnKSkge1xuICAgICAgIHZhciBzdHJUYWcgPSBKU09OLnN0cmluZ2lmeSh0YWcpO1xuXG4gICAgICAgdmFyIF9tc2cgPSBcIlRoZSBsb2NhbGUgXCIuY29uY2F0KHN0clRhZywgXCIgaXMgbm90IGEgc3RydWN0dXJhbGx5IHZhbGlkIEJDUCA0NyBsYW5ndWFnZSB0YWcuXCIpO1xuXG4gICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoX21zZyk7XG4gICAgIH1cblxuICAgICByZXNbdGFnXSA9IHRydWU7XG4gICB9XG5cbiAgIHJldHVybiBPYmplY3Qua2V5cyhyZXMpO1xuIH07XG5cbiB2YXIgZGVmYXVsdExvY2FsZSA9IGZ1bmN0aW9uIGRlZmF1bHRMb2NhbGUoKSB7XG4gICByZXR1cm4gKFxuICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IgJiYgKG5hdmlnYXRvci51c2VyTGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLmxhbmd1YWdlKSB8fCAnZW4tVVMnXG4gICApO1xuIH07XG5cbiB2YXIgZ2V0VHlwZSA9IGZ1bmN0aW9uIGdldFR5cGUodHlwZSkge1xuICAgaWYgKCF0eXBlKSByZXR1cm4gJ2NhcmRpbmFsJztcbiAgIGlmICh0eXBlID09PSAnY2FyZGluYWwnIHx8IHR5cGUgPT09ICdvcmRpbmFsJykgcmV0dXJuIHR5cGU7XG4gICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignTm90IGEgdmFsaWQgcGx1cmFsIHR5cGU6ICcgKyBKU09OLnN0cmluZ2lmeSh0eXBlKSk7XG4gfTtcblxuIGZ1bmN0aW9uIGdldFBsdXJhbFJ1bGVzKE51bWJlckZvcm1hdCwgZ2V0U2VsZWN0b3IsIGdldENhdGVnb3JpZXMpIHtcbiAgIHZhciBmaW5kTG9jYWxlID0gZnVuY3Rpb24gZmluZExvY2FsZShsb2NhbGUpIHtcbiAgICAgZG8ge1xuICAgICAgIGlmIChnZXRTZWxlY3Rvcihsb2NhbGUpKSByZXR1cm4gbG9jYWxlO1xuICAgICAgIGxvY2FsZSA9IGxvY2FsZS5yZXBsYWNlKC8tP1teLV0qJC8sICcnKTtcbiAgICAgfSB3aGlsZSAobG9jYWxlKTtcblxuICAgICByZXR1cm4gbnVsbDtcbiAgIH07XG5cbiAgIHZhciByZXNvbHZlTG9jYWxlID0gZnVuY3Rpb24gcmVzb2x2ZUxvY2FsZShsb2NhbGVzKSB7XG4gICAgIHZhciBjYW5vbmljYWxMb2NhbGVzID0gY2Fub25pY2FsaXplTG9jYWxlTGlzdChsb2NhbGVzKTtcblxuICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbm9uaWNhbExvY2FsZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICB2YXIgbGMgPSBmaW5kTG9jYWxlKGNhbm9uaWNhbExvY2FsZXNbaV0pO1xuICAgICAgIGlmIChsYykgcmV0dXJuIGxjO1xuICAgICB9XG5cbiAgICAgcmV0dXJuIGZpbmRMb2NhbGUoZGVmYXVsdExvY2FsZSgpKTtcbiAgIH07XG5cbiAgIHZhciBQbHVyYWxSdWxlcyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgIGZ1bmN0aW9uIFBsdXJhbFJ1bGVzKGxvY2FsZXMpIHtcbiAgICAgICB2YXIgb3B0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQbHVyYWxSdWxlcyk7XG5cbiAgICAgICB0aGlzLl9sb2NhbGUgPSByZXNvbHZlTG9jYWxlKGxvY2FsZXMpO1xuICAgICAgIHRoaXMuX3NlbGVjdCA9IGdldFNlbGVjdG9yKHRoaXMuX2xvY2FsZSk7XG4gICAgICAgdGhpcy5fdHlwZSA9IGdldFR5cGUob3B0LnR5cGUpO1xuICAgICAgIHRoaXMuX25mID0gbmV3IE51bWJlckZvcm1hdCgnZW4nLCBvcHQpOyAvLyBtYWtlLXBsdXJhbCBleHBlY3RzIGxhdGluIGRpZ2l0cyB3aXRoIC4gZGVjaW1hbCBzZXBhcmF0b3JcbiAgICAgfVxuXG4gICAgIF9jcmVhdGVDbGFzcyhQbHVyYWxSdWxlcywgW3tcbiAgICAgICBrZXk6IFwicmVzb2x2ZWRPcHRpb25zXCIsXG4gICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc29sdmVkT3B0aW9ucygpIHtcbiAgICAgICAgIHZhciBfdGhpcyRfbmYkcmVzb2x2ZWRPcHQgPSB0aGlzLl9uZi5yZXNvbHZlZE9wdGlvbnMoKSxcbiAgICAgICAgICAgICBtaW5pbXVtSW50ZWdlckRpZ2l0cyA9IF90aGlzJF9uZiRyZXNvbHZlZE9wdC5taW5pbXVtSW50ZWdlckRpZ2l0cyxcbiAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHMgPSBfdGhpcyRfbmYkcmVzb2x2ZWRPcHQubWluaW11bUZyYWN0aW9uRGlnaXRzLFxuICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0cyA9IF90aGlzJF9uZiRyZXNvbHZlZE9wdC5tYXhpbXVtRnJhY3Rpb25EaWdpdHMsXG4gICAgICAgICAgICAgbWluaW11bVNpZ25pZmljYW50RGlnaXRzID0gX3RoaXMkX25mJHJlc29sdmVkT3B0Lm1pbmltdW1TaWduaWZpY2FudERpZ2l0cyxcbiAgICAgICAgICAgICBtYXhpbXVtU2lnbmlmaWNhbnREaWdpdHMgPSBfdGhpcyRfbmYkcmVzb2x2ZWRPcHQubWF4aW11bVNpZ25pZmljYW50RGlnaXRzO1xuXG4gICAgICAgICB2YXIgb3B0ID0ge1xuICAgICAgICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZSxcbiAgICAgICAgICAgbWluaW11bUludGVnZXJEaWdpdHM6IG1pbmltdW1JbnRlZ2VyRGlnaXRzLFxuICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IG1pbmltdW1GcmFjdGlvbkRpZ2l0cyxcbiAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBtYXhpbXVtRnJhY3Rpb25EaWdpdHMsXG4gICAgICAgICAgIHBsdXJhbENhdGVnb3JpZXM6IGdldENhdGVnb3JpZXModGhpcy5fbG9jYWxlLCB0aGlzLl90eXBlID09PSAnb3JkaW5hbCcpLFxuICAgICAgICAgICB0eXBlOiB0aGlzLl90eXBlXG4gICAgICAgICB9O1xuXG4gICAgICAgICBpZiAodHlwZW9mIG1pbmltdW1TaWduaWZpY2FudERpZ2l0cyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgb3B0Lm1pbmltdW1TaWduaWZpY2FudERpZ2l0cyA9IG1pbmltdW1TaWduaWZpY2FudERpZ2l0cztcbiAgICAgICAgICAgb3B0Lm1heGltdW1TaWduaWZpY2FudERpZ2l0cyA9IG1heGltdW1TaWduaWZpY2FudERpZ2l0cztcbiAgICAgICAgIH1cblxuICAgICAgICAgcmV0dXJuIG9wdDtcbiAgICAgICB9XG4gICAgIH0sIHtcbiAgICAgICBrZXk6IFwic2VsZWN0XCIsXG4gICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNlbGVjdChudW1iZXIpIHtcbiAgICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQbHVyYWxSdWxlcykpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJzZWxlY3QoKSBjYWxsZWQgb24gaW5jb21wYXRpYmxlIFwiLmNvbmNhdCh0aGlzKSk7XG4gICAgICAgICBpZiAodHlwZW9mIG51bWJlciAhPT0gJ251bWJlcicpIG51bWJlciA9IE51bWJlcihudW1iZXIpO1xuICAgICAgICAgaWYgKCFpc0Zpbml0ZShudW1iZXIpKSByZXR1cm4gJ290aGVyJztcblxuICAgICAgICAgdmFyIGZtdCA9IHRoaXMuX25mLmZvcm1hdChNYXRoLmFicyhudW1iZXIpKTtcblxuICAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdChmbXQsIHRoaXMuX3R5cGUgPT09ICdvcmRpbmFsJyk7XG4gICAgICAgfVxuICAgICB9XSwgW3tcbiAgICAgICBrZXk6IFwic3VwcG9ydGVkTG9jYWxlc09mXCIsXG4gICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN1cHBvcnRlZExvY2FsZXNPZihsb2NhbGVzKSB7XG4gICAgICAgICByZXR1cm4gY2Fub25pY2FsaXplTG9jYWxlTGlzdChsb2NhbGVzKS5maWx0ZXIoZmluZExvY2FsZSk7XG4gICAgICAgfVxuICAgICB9XSk7XG5cbiAgICAgcmV0dXJuIFBsdXJhbFJ1bGVzO1xuICAgfSgpO1xuXG4gICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUGx1cmFsUnVsZXMsICdwcm90b3R5cGUnLCB7XG4gICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgfSk7XG4gICByZXR1cm4gUGx1cmFsUnVsZXM7XG4gfVxuXG4gbW9kdWxlLmV4cG9ydHMgPSBnZXRQbHVyYWxSdWxlcztcblxuXG4vLyAjZW5kcmVnaW9uIE9SSUdJTkFMIENPREVcblxuX2Nqc0V4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcblxuXG59LCB7fSk7XG5leHBvcnQgeyBfY2pzRXhwb3J0cyBhcyBkZWZhdWx0IH07XG5leHBvcnQgeyBfX2Nqc01ldGFVUkwgfVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZCc7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfZ2V0UHJvdG90eXBlT2YgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX3RvQXJyYXkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9BcnJheSc7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIGNvbnNvbGVMb2dnZXIgPSB7XG4gIHR5cGU6ICdsb2dnZXInLFxuICBsb2c6IGZ1bmN0aW9uIGxvZyhhcmdzKSB7XG4gICAgdGhpcy5vdXRwdXQoJ2xvZycsIGFyZ3MpO1xuICB9LFxuICB3YXJuOiBmdW5jdGlvbiB3YXJuKGFyZ3MpIHtcbiAgICB0aGlzLm91dHB1dCgnd2FybicsIGFyZ3MpO1xuICB9LFxuICBlcnJvcjogZnVuY3Rpb24gZXJyb3IoYXJncykge1xuICAgIHRoaXMub3V0cHV0KCdlcnJvcicsIGFyZ3MpO1xuICB9LFxuICBvdXRwdXQ6IGZ1bmN0aW9uIG91dHB1dCh0eXBlLCBhcmdzKSB7XG4gICAgaWYgKGNvbnNvbGUgJiYgY29uc29sZVt0eXBlXSkgY29uc29sZVt0eXBlXS5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgfVxufTtcblxudmFyIExvZ2dlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTG9nZ2VyKGNvbmNyZXRlTG9nZ2VyKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExvZ2dlcik7XG5cbiAgICB0aGlzLmluaXQoY29uY3JldGVMb2dnZXIsIG9wdGlvbnMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExvZ2dlciwgW3tcbiAgICBrZXk6IFwiaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KGNvbmNyZXRlTG9nZ2VyKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB0aGlzLnByZWZpeCA9IG9wdGlvbnMucHJlZml4IHx8ICdpMThuZXh0Oic7XG4gICAgICB0aGlzLmxvZ2dlciA9IGNvbmNyZXRlTG9nZ2VyIHx8IGNvbnNvbGVMb2dnZXI7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgdGhpcy5kZWJ1ZyA9IG9wdGlvbnMuZGVidWc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldERlYnVnXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldERlYnVnKGJvb2wpIHtcbiAgICAgIHRoaXMuZGVidWcgPSBib29sO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2dcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9nKCkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmZvcndhcmQoYXJncywgJ2xvZycsICcnLCB0cnVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwid2FyblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3YXJuKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZm9yd2FyZChhcmdzLCAnd2FybicsICcnLCB0cnVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXJyb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXJyb3IoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5mb3J3YXJkKGFyZ3MsICdlcnJvcicsICcnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVwcmVjYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlcHJlY2F0ZSgpIHtcbiAgICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNCksIF9rZXk0ID0gMDsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgICAgICBhcmdzW19rZXk0XSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmZvcndhcmQoYXJncywgJ3dhcm4nLCAnV0FSTklORyBERVBSRUNBVEVEOiAnLCB0cnVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9yd2FyZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3J3YXJkKGFyZ3MsIGx2bCwgcHJlZml4LCBkZWJ1Z09ubHkpIHtcbiAgICAgIGlmIChkZWJ1Z09ubHkgJiYgIXRoaXMuZGVidWcpIHJldHVybiBudWxsO1xuICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJykgYXJnc1swXSA9IFwiXCIuY29uY2F0KHByZWZpeCkuY29uY2F0KHRoaXMucHJlZml4LCBcIiBcIikuY29uY2F0KGFyZ3NbMF0pO1xuICAgICAgcmV0dXJuIHRoaXMubG9nZ2VyW2x2bF0oYXJncyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGUobW9kdWxlTmFtZSkge1xuICAgICAgcmV0dXJuIG5ldyBMb2dnZXIodGhpcy5sb2dnZXIsIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwge1xuICAgICAgICBwcmVmaXg6IFwiXCIuY29uY2F0KHRoaXMucHJlZml4LCBcIjpcIikuY29uY2F0KG1vZHVsZU5hbWUsIFwiOlwiKVxuICAgICAgfSksIHRoaXMub3B0aW9ucykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbG9uZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9uZShvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB0aGlzLm9wdGlvbnM7XG4gICAgICBvcHRpb25zLnByZWZpeCA9IG9wdGlvbnMucHJlZml4IHx8IHRoaXMucHJlZml4O1xuICAgICAgcmV0dXJuIG5ldyBMb2dnZXIodGhpcy5sb2dnZXIsIG9wdGlvbnMpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMb2dnZXI7XG59KCk7XG5cbnZhciBiYXNlTG9nZ2VyID0gbmV3IExvZ2dlcigpO1xuXG52YXIgRXZlbnRFbWl0dGVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50RW1pdHRlcik7XG5cbiAgICB0aGlzLm9ic2VydmVycyA9IHt9O1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEV2ZW50RW1pdHRlciwgW3tcbiAgICBrZXk6IFwib25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnRzLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgZXZlbnRzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgX3RoaXMub2JzZXJ2ZXJzW2V2ZW50XSA9IF90aGlzLm9ic2VydmVyc1tldmVudF0gfHwgW107XG5cbiAgICAgICAgX3RoaXMub2JzZXJ2ZXJzW2V2ZW50XS5wdXNoKGxpc3RlbmVyKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9mZlwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvZmYoZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgICBpZiAoIXRoaXMub2JzZXJ2ZXJzW2V2ZW50XSkgcmV0dXJuO1xuXG4gICAgICBpZiAoIWxpc3RlbmVyKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLm9ic2VydmVyc1tldmVudF07XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vYnNlcnZlcnNbZXZlbnRdID0gdGhpcy5vYnNlcnZlcnNbZXZlbnRdLmZpbHRlcihmdW5jdGlvbiAobCkge1xuICAgICAgICByZXR1cm4gbCAhPT0gbGlzdGVuZXI7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZW1pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbWl0KGV2ZW50KSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vYnNlcnZlcnNbZXZlbnRdKSB7XG4gICAgICAgIHZhciBjbG9uZWQgPSBbXS5jb25jYXQodGhpcy5vYnNlcnZlcnNbZXZlbnRdKTtcbiAgICAgICAgY2xvbmVkLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIuYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9ic2VydmVyc1snKiddKSB7XG4gICAgICAgIHZhciBfY2xvbmVkID0gW10uY29uY2F0KHRoaXMub2JzZXJ2ZXJzWycqJ10pO1xuXG4gICAgICAgIF9jbG9uZWQuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICBvYnNlcnZlci5hcHBseShvYnNlcnZlciwgW2V2ZW50XS5jb25jYXQoYXJncykpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRXZlbnRFbWl0dGVyO1xufSgpO1xuXG5mdW5jdGlvbiBkZWZlcigpIHtcbiAgdmFyIHJlcztcbiAgdmFyIHJlajtcbiAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcmVzID0gcmVzb2x2ZTtcbiAgICByZWogPSByZWplY3Q7XG4gIH0pO1xuICBwcm9taXNlLnJlc29sdmUgPSByZXM7XG4gIHByb21pc2UucmVqZWN0ID0gcmVqO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIG1ha2VTdHJpbmcob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkgcmV0dXJuICcnO1xuICByZXR1cm4gJycgKyBvYmplY3Q7XG59XG5mdW5jdGlvbiBjb3B5KGEsIHMsIHQpIHtcbiAgYS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gICAgaWYgKHNbbV0pIHRbbV0gPSBzW21dO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdE9mUGF0aChvYmplY3QsIHBhdGgsIEVtcHR5KSB7XG4gIGZ1bmN0aW9uIGNsZWFuS2V5KGtleSkge1xuICAgIHJldHVybiBrZXkgJiYga2V5LmluZGV4T2YoJyMjIycpID4gLTEgPyBrZXkucmVwbGFjZSgvIyMjL2csICcuJykgOiBrZXk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5Ob3RUcmF2ZXJzZURlZXBlcigpIHtcbiAgICByZXR1cm4gIW9iamVjdCB8fCB0eXBlb2Ygb2JqZWN0ID09PSAnc3RyaW5nJztcbiAgfVxuXG4gIHZhciBzdGFjayA9IHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJyA/IFtdLmNvbmNhdChwYXRoKSA6IHBhdGguc3BsaXQoJy4nKTtcblxuICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMSkge1xuICAgIGlmIChjYW5Ob3RUcmF2ZXJzZURlZXBlcigpKSByZXR1cm4ge307XG4gICAgdmFyIGtleSA9IGNsZWFuS2V5KHN0YWNrLnNoaWZ0KCkpO1xuICAgIGlmICghb2JqZWN0W2tleV0gJiYgRW1wdHkpIG9iamVjdFtrZXldID0gbmV3IEVtcHR5KCk7XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkge1xuICAgICAgb2JqZWN0ID0gb2JqZWN0W2tleV07XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iamVjdCA9IHt9O1xuICAgIH1cbiAgfVxuXG4gIGlmIChjYW5Ob3RUcmF2ZXJzZURlZXBlcigpKSByZXR1cm4ge307XG4gIHJldHVybiB7XG4gICAgb2JqOiBvYmplY3QsXG4gICAgazogY2xlYW5LZXkoc3RhY2suc2hpZnQoKSlcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2V0UGF0aChvYmplY3QsIHBhdGgsIG5ld1ZhbHVlKSB7XG4gIHZhciBfZ2V0TGFzdE9mUGF0aCA9IGdldExhc3RPZlBhdGgob2JqZWN0LCBwYXRoLCBPYmplY3QpLFxuICAgICAgb2JqID0gX2dldExhc3RPZlBhdGgub2JqLFxuICAgICAgayA9IF9nZXRMYXN0T2ZQYXRoLms7XG5cbiAgb2JqW2tdID0gbmV3VmFsdWU7XG59XG5mdW5jdGlvbiBwdXNoUGF0aChvYmplY3QsIHBhdGgsIG5ld1ZhbHVlLCBjb25jYXQpIHtcbiAgdmFyIF9nZXRMYXN0T2ZQYXRoMiA9IGdldExhc3RPZlBhdGgob2JqZWN0LCBwYXRoLCBPYmplY3QpLFxuICAgICAgb2JqID0gX2dldExhc3RPZlBhdGgyLm9iaixcbiAgICAgIGsgPSBfZ2V0TGFzdE9mUGF0aDIuaztcblxuICBvYmpba10gPSBvYmpba10gfHwgW107XG4gIGlmIChjb25jYXQpIG9ialtrXSA9IG9ialtrXS5jb25jYXQobmV3VmFsdWUpO1xuICBpZiAoIWNvbmNhdCkgb2JqW2tdLnB1c2gobmV3VmFsdWUpO1xufVxuZnVuY3Rpb24gZ2V0UGF0aChvYmplY3QsIHBhdGgpIHtcbiAgdmFyIF9nZXRMYXN0T2ZQYXRoMyA9IGdldExhc3RPZlBhdGgob2JqZWN0LCBwYXRoKSxcbiAgICAgIG9iaiA9IF9nZXRMYXN0T2ZQYXRoMy5vYmosXG4gICAgICBrID0gX2dldExhc3RPZlBhdGgzLms7XG5cbiAgaWYgKCFvYmopIHJldHVybiB1bmRlZmluZWQ7XG4gIHJldHVybiBvYmpba107XG59XG5mdW5jdGlvbiBnZXRQYXRoV2l0aERlZmF1bHRzKGRhdGEsIGRlZmF1bHREYXRhLCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0UGF0aChkYXRhLCBrZXkpO1xuXG4gIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIGdldFBhdGgoZGVmYXVsdERhdGEsIGtleSk7XG59XG5mdW5jdGlvbiBkZWVwRXh0ZW5kKHRhcmdldCwgc291cmNlLCBvdmVyd3JpdGUpIHtcbiAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICBpZiAocHJvcCAhPT0gJ19fcHJvdG9fXycgJiYgcHJvcCAhPT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgaWYgKHByb3AgaW4gdGFyZ2V0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W3Byb3BdID09PSAnc3RyaW5nJyB8fCB0YXJnZXRbcHJvcF0gaW5zdGFuY2VvZiBTdHJpbmcgfHwgdHlwZW9mIHNvdXJjZVtwcm9wXSA9PT0gJ3N0cmluZycgfHwgc291cmNlW3Byb3BdIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgICAgaWYgKG92ZXJ3cml0ZSkgdGFyZ2V0W3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlZXBFeHRlbmQodGFyZ2V0W3Byb3BdLCBzb3VyY2VbcHJvcF0sIG92ZXJ3cml0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gcmVnZXhFc2NhcGUoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW1xcLVxcW1xcXVxcL1xce1xcfVxcKFxcKVxcKlxcK1xcP1xcLlxcXFxcXF5cXCRcXHxdL2csICdcXFxcJCYnKTtcbn1cbnZhciBfZW50aXR5TWFwID0ge1xuICAnJic6ICcmYW1wOycsXG4gICc8JzogJyZsdDsnLFxuICAnPic6ICcmZ3Q7JyxcbiAgJ1wiJzogJyZxdW90OycsXG4gIFwiJ1wiOiAnJiMzOTsnLFxuICAnLyc6ICcmI3gyRjsnXG59O1xuZnVuY3Rpb24gZXNjYXBlKGRhdGEpIHtcbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkYXRhLnJlcGxhY2UoL1smPD5cIidcXC9dL2csIGZ1bmN0aW9uIChzKSB7XG4gICAgICByZXR1cm4gX2VudGl0eU1hcFtzXTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxudmFyIGlzSUUxMCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5uYXZpZ2F0b3IgJiYgdHlwZW9mIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignTVNJRScpID4gLTE7XG52YXIgY2hhcnMgPSBbJyAnLCAnLCcsICc/JywgJyEnLCAnOyddO1xuZnVuY3Rpb24gbG9va3NMaWtlT2JqZWN0UGF0aChrZXksIG5zU2VwYXJhdG9yLCBrZXlTZXBhcmF0b3IpIHtcbiAgbnNTZXBhcmF0b3IgPSBuc1NlcGFyYXRvciB8fCAnJztcbiAga2V5U2VwYXJhdG9yID0ga2V5U2VwYXJhdG9yIHx8ICcnO1xuICB2YXIgcG9zc2libGVDaGFycyA9IGNoYXJzLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBuc1NlcGFyYXRvci5pbmRleE9mKGMpIDwgMCAmJiBrZXlTZXBhcmF0b3IuaW5kZXhPZihjKSA8IDA7XG4gIH0pO1xuICBpZiAocG9zc2libGVDaGFycy5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xuICB2YXIgciA9IG5ldyBSZWdFeHAoXCIoXCIuY29uY2F0KHBvc3NpYmxlQ2hhcnMubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGMgPT09ICc/JyA/ICdcXFxcPycgOiBjO1xuICB9KS5qb2luKCd8JyksIFwiKVwiKSk7XG4gIHZhciBtYXRjaGVkID0gIXIudGVzdChrZXkpO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHZhciBraSA9IGtleS5pbmRleE9mKGtleVNlcGFyYXRvcik7XG5cbiAgICBpZiAoa2kgPiAwICYmICFyLnRlc3Qoa2V5LnN1YnN0cmluZygwLCBraSkpKSB7XG4gICAgICBtYXRjaGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZDtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyQxKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQxKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkMShPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDEoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBkZWVwRmluZChvYmosIHBhdGgpIHtcbiAgdmFyIGtleVNlcGFyYXRvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJy4nO1xuICBpZiAoIW9iaikgcmV0dXJuIHVuZGVmaW5lZDtcbiAgaWYgKG9ialtwYXRoXSkgcmV0dXJuIG9ialtwYXRoXTtcbiAgdmFyIHBhdGhzID0gcGF0aC5zcGxpdChrZXlTZXBhcmF0b3IpO1xuICB2YXIgY3VycmVudCA9IG9iajtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCFjdXJyZW50KSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHR5cGVvZiBjdXJyZW50W3BhdGhzW2ldXSA9PT0gJ3N0cmluZycgJiYgaSArIDEgPCBwYXRocy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRbcGF0aHNbaV1dID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBqID0gMjtcbiAgICAgIHZhciBwID0gcGF0aHMuc2xpY2UoaSwgaSArIGopLmpvaW4oa2V5U2VwYXJhdG9yKTtcbiAgICAgIHZhciBtaXggPSBjdXJyZW50W3BdO1xuXG4gICAgICB3aGlsZSAobWl4ID09PSB1bmRlZmluZWQgJiYgcGF0aHMubGVuZ3RoID4gaSArIGopIHtcbiAgICAgICAgaisrO1xuICAgICAgICBwID0gcGF0aHMuc2xpY2UoaSwgaSArIGopLmpvaW4oa2V5U2VwYXJhdG9yKTtcbiAgICAgICAgbWl4ID0gY3VycmVudFtwXTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1peCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgaWYgKG1peCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cbiAgICAgIGlmIChwYXRoLmVuZHNXaXRoKHApKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWl4ID09PSAnc3RyaW5nJykgcmV0dXJuIG1peDtcbiAgICAgICAgaWYgKHAgJiYgdHlwZW9mIG1peFtwXSA9PT0gJ3N0cmluZycpIHJldHVybiBtaXhbcF07XG4gICAgICB9XG5cbiAgICAgIHZhciBqb2luZWRQYXRoID0gcGF0aHMuc2xpY2UoaSArIGopLmpvaW4oa2V5U2VwYXJhdG9yKTtcbiAgICAgIGlmIChqb2luZWRQYXRoKSByZXR1cm4gZGVlcEZpbmQobWl4LCBqb2luZWRQYXRoLCBrZXlTZXBhcmF0b3IpO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjdXJyZW50ID0gY3VycmVudFtwYXRoc1tpXV07XG4gIH1cblxuICByZXR1cm4gY3VycmVudDtcbn1cblxudmFyIFJlc291cmNlU3RvcmUgPSBmdW5jdGlvbiAoX0V2ZW50RW1pdHRlcikge1xuICBfaW5oZXJpdHMoUmVzb3VyY2VTdG9yZSwgX0V2ZW50RW1pdHRlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihSZXNvdXJjZVN0b3JlKTtcblxuICBmdW5jdGlvbiBSZXNvdXJjZVN0b3JlKGRhdGEpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xuICAgICAgbnM6IFsndHJhbnNsYXRpb24nXSxcbiAgICAgIGRlZmF1bHROUzogJ3RyYW5zbGF0aW9uJ1xuICAgIH07XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVzb3VyY2VTdG9yZSk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuXG4gICAgaWYgKGlzSUUxMCkge1xuICAgICAgRXZlbnRFbWl0dGVyLmNhbGwoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIH1cblxuICAgIF90aGlzLmRhdGEgPSBkYXRhIHx8IHt9O1xuICAgIF90aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgaWYgKF90aGlzLm9wdGlvbnMua2V5U2VwYXJhdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIF90aGlzLm9wdGlvbnMua2V5U2VwYXJhdG9yID0gJy4nO1xuICAgIH1cblxuICAgIGlmIChfdGhpcy5vcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgX3RoaXMub3B0aW9ucy5pZ25vcmVKU09OU3RydWN0dXJlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmVzb3VyY2VTdG9yZSwgW3tcbiAgICBrZXk6IFwiYWRkTmFtZXNwYWNlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGROYW1lc3BhY2VzKG5zKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLm5zLmluZGV4T2YobnMpIDwgMCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMubnMucHVzaChucyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZU5hbWVzcGFjZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlTmFtZXNwYWNlcyhucykge1xuICAgICAgdmFyIGluZGV4ID0gdGhpcy5vcHRpb25zLm5zLmluZGV4T2YobnMpO1xuXG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMubnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UmVzb3VyY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UmVzb3VyY2UobG5nLCBucywga2V5KSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgICB2YXIga2V5U2VwYXJhdG9yID0gb3B0aW9ucy5rZXlTZXBhcmF0b3IgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMua2V5U2VwYXJhdG9yIDogdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvcjtcbiAgICAgIHZhciBpZ25vcmVKU09OU3RydWN0dXJlID0gb3B0aW9ucy5pZ25vcmVKU09OU3RydWN0dXJlICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmUgOiB0aGlzLm9wdGlvbnMuaWdub3JlSlNPTlN0cnVjdHVyZTtcbiAgICAgIHZhciBwYXRoID0gW2xuZywgbnNdO1xuICAgICAgaWYgKGtleSAmJiB0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGguY29uY2F0KGtleSk7XG4gICAgICBpZiAoa2V5ICYmIHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aC5jb25jYXQoa2V5U2VwYXJhdG9yID8ga2V5LnNwbGl0KGtleVNlcGFyYXRvcikgOiBrZXkpO1xuXG4gICAgICBpZiAobG5nLmluZGV4T2YoJy4nKSA+IC0xKSB7XG4gICAgICAgIHBhdGggPSBsbmcuc3BsaXQoJy4nKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlc3VsdCA9IGdldFBhdGgodGhpcy5kYXRhLCBwYXRoKTtcbiAgICAgIGlmIChyZXN1bHQgfHwgIWlnbm9yZUpTT05TdHJ1Y3R1cmUgfHwgdHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHJldHVybiByZXN1bHQ7XG4gICAgICByZXR1cm4gZGVlcEZpbmQodGhpcy5kYXRhICYmIHRoaXMuZGF0YVtsbmddICYmIHRoaXMuZGF0YVtsbmddW25zXSwga2V5LCBrZXlTZXBhcmF0b3IpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGRSZXNvdXJjZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRSZXNvdXJjZShsbmcsIG5zLCBrZXksIHZhbHVlKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDoge1xuICAgICAgICBzaWxlbnQ6IGZhbHNlXG4gICAgICB9O1xuICAgICAgdmFyIGtleVNlcGFyYXRvciA9IHRoaXMub3B0aW9ucy5rZXlTZXBhcmF0b3I7XG4gICAgICBpZiAoa2V5U2VwYXJhdG9yID09PSB1bmRlZmluZWQpIGtleVNlcGFyYXRvciA9ICcuJztcbiAgICAgIHZhciBwYXRoID0gW2xuZywgbnNdO1xuICAgICAgaWYgKGtleSkgcGF0aCA9IHBhdGguY29uY2F0KGtleVNlcGFyYXRvciA/IGtleS5zcGxpdChrZXlTZXBhcmF0b3IpIDoga2V5KTtcblxuICAgICAgaWYgKGxuZy5pbmRleE9mKCcuJykgPiAtMSkge1xuICAgICAgICBwYXRoID0gbG5nLnNwbGl0KCcuJyk7XG4gICAgICAgIHZhbHVlID0gbnM7XG4gICAgICAgIG5zID0gcGF0aFsxXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hZGROYW1lc3BhY2VzKG5zKTtcbiAgICAgIHNldFBhdGgodGhpcy5kYXRhLCBwYXRoLCB2YWx1ZSk7XG4gICAgICBpZiAoIW9wdGlvbnMuc2lsZW50KSB0aGlzLmVtaXQoJ2FkZGVkJywgbG5nLCBucywga2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZFJlc291cmNlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRSZXNvdXJjZXMobG5nLCBucywgcmVzb3VyY2VzKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge1xuICAgICAgICBzaWxlbnQ6IGZhbHNlXG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBtIGluIHJlc291cmNlcykge1xuICAgICAgICBpZiAodHlwZW9mIHJlc291cmNlc1ttXSA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseShyZXNvdXJjZXNbbV0pID09PSAnW29iamVjdCBBcnJheV0nKSB0aGlzLmFkZFJlc291cmNlKGxuZywgbnMsIG0sIHJlc291cmNlc1ttXSwge1xuICAgICAgICAgIHNpbGVudDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvcHRpb25zLnNpbGVudCkgdGhpcy5lbWl0KCdhZGRlZCcsIGxuZywgbnMsIHJlc291cmNlcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZFJlc291cmNlQnVuZGxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFJlc291cmNlQnVuZGxlKGxuZywgbnMsIHJlc291cmNlcywgZGVlcCwgb3ZlcndyaXRlKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIGFyZ3VtZW50c1s1XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzVdIDoge1xuICAgICAgICBzaWxlbnQ6IGZhbHNlXG4gICAgICB9O1xuICAgICAgdmFyIHBhdGggPSBbbG5nLCBuc107XG5cbiAgICAgIGlmIChsbmcuaW5kZXhPZignLicpID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IGxuZy5zcGxpdCgnLicpO1xuICAgICAgICBkZWVwID0gcmVzb3VyY2VzO1xuICAgICAgICByZXNvdXJjZXMgPSBucztcbiAgICAgICAgbnMgPSBwYXRoWzFdO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFkZE5hbWVzcGFjZXMobnMpO1xuICAgICAgdmFyIHBhY2sgPSBnZXRQYXRoKHRoaXMuZGF0YSwgcGF0aCkgfHwge307XG5cbiAgICAgIGlmIChkZWVwKSB7XG4gICAgICAgIGRlZXBFeHRlbmQocGFjaywgcmVzb3VyY2VzLCBvdmVyd3JpdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFjayA9IF9vYmplY3RTcHJlYWQkMShfb2JqZWN0U3ByZWFkJDEoe30sIHBhY2spLCByZXNvdXJjZXMpO1xuICAgICAgfVxuXG4gICAgICBzZXRQYXRoKHRoaXMuZGF0YSwgcGF0aCwgcGFjayk7XG4gICAgICBpZiAoIW9wdGlvbnMuc2lsZW50KSB0aGlzLmVtaXQoJ2FkZGVkJywgbG5nLCBucywgcmVzb3VyY2VzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlUmVzb3VyY2VCdW5kbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlUmVzb3VyY2VCdW5kbGUobG5nLCBucykge1xuICAgICAgaWYgKHRoaXMuaGFzUmVzb3VyY2VCdW5kbGUobG5nLCBucykpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YVtsbmddW25zXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZW1vdmVOYW1lc3BhY2VzKG5zKTtcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlZCcsIGxuZywgbnMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYXNSZXNvdXJjZUJ1bmRsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNSZXNvdXJjZUJ1bmRsZShsbmcsIG5zKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRSZXNvdXJjZShsbmcsIG5zKSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRSZXNvdXJjZUJ1bmRsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSZXNvdXJjZUJ1bmRsZShsbmcsIG5zKSB7XG4gICAgICBpZiAoIW5zKSBucyA9IHRoaXMub3B0aW9ucy5kZWZhdWx0TlM7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlBUEkgPT09ICd2MScpIHJldHVybiBfb2JqZWN0U3ByZWFkJDEoX29iamVjdFNwcmVhZCQxKHt9LCB7fSksIHRoaXMuZ2V0UmVzb3VyY2UobG5nLCBucykpO1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVzb3VyY2UobG5nLCBucyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldERhdGFCeUxhbmd1YWdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERhdGFCeUxhbmd1YWdlKGxuZykge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVtsbmddO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYXNMYW5ndWFnZVNvbWVUcmFuc2xhdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzTGFuZ3VhZ2VTb21lVHJhbnNsYXRpb25zKGxuZykge1xuICAgICAgdmFyIGRhdGEgPSB0aGlzLmdldERhdGFCeUxhbmd1YWdlKGxuZyk7XG4gICAgICB2YXIgbiA9IGRhdGEgJiYgT2JqZWN0LmtleXMoZGF0YSkgfHwgW107XG4gICAgICByZXR1cm4gISFuLmZpbmQoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFbdl0gJiYgT2JqZWN0LmtleXMoZGF0YVt2XSkubGVuZ3RoID4gMDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0b0pTT05cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9KU09OKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmVzb3VyY2VTdG9yZTtcbn0oRXZlbnRFbWl0dGVyKTtcblxudmFyIHBvc3RQcm9jZXNzb3IgPSB7XG4gIHByb2Nlc3NvcnM6IHt9LFxuICBhZGRQb3N0UHJvY2Vzc29yOiBmdW5jdGlvbiBhZGRQb3N0UHJvY2Vzc29yKG1vZHVsZSkge1xuICAgIHRoaXMucHJvY2Vzc29yc1ttb2R1bGUubmFtZV0gPSBtb2R1bGU7XG4gIH0sXG4gIGhhbmRsZTogZnVuY3Rpb24gaGFuZGxlKHByb2Nlc3NvcnMsIHZhbHVlLCBrZXksIG9wdGlvbnMsIHRyYW5zbGF0b3IpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgcHJvY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9jZXNzb3IpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9jZXNzb3JzW3Byb2Nlc3Nvcl0pIHZhbHVlID0gX3RoaXMucHJvY2Vzc29yc1twcm9jZXNzb3JdLnByb2Nlc3ModmFsdWUsIGtleSwgb3B0aW9ucywgdHJhbnNsYXRvcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59O1xuXG5mdW5jdGlvbiBvd25LZXlzJDIob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDIodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQyKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkMihPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyJDEoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMSgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMSgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG52YXIgY2hlY2tlZExvYWRlZEZvciA9IHt9O1xuXG52YXIgVHJhbnNsYXRvciA9IGZ1bmN0aW9uIChfRXZlbnRFbWl0dGVyKSB7XG4gIF9pbmhlcml0cyhUcmFuc2xhdG9yLCBfRXZlbnRFbWl0dGVyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyJDEoVHJhbnNsYXRvcik7XG5cbiAgZnVuY3Rpb24gVHJhbnNsYXRvcihzZXJ2aWNlcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFuc2xhdG9yKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcyk7XG5cbiAgICBpZiAoaXNJRTEwKSB7XG4gICAgICBFdmVudEVtaXR0ZXIuY2FsbChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgfVxuXG4gICAgY29weShbJ3Jlc291cmNlU3RvcmUnLCAnbGFuZ3VhZ2VVdGlscycsICdwbHVyYWxSZXNvbHZlcicsICdpbnRlcnBvbGF0b3InLCAnYmFja2VuZENvbm5lY3RvcicsICdpMThuRm9ybWF0JywgJ3V0aWxzJ10sIHNlcnZpY2VzLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBpZiAoX3RoaXMub3B0aW9ucy5rZXlTZXBhcmF0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgX3RoaXMub3B0aW9ucy5rZXlTZXBhcmF0b3IgPSAnLic7XG4gICAgfVxuXG4gICAgX3RoaXMubG9nZ2VyID0gYmFzZUxvZ2dlci5jcmVhdGUoJ3RyYW5zbGF0b3InKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVHJhbnNsYXRvciwgW3tcbiAgICBrZXk6IFwiY2hhbmdlTGFuZ3VhZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2hhbmdlTGFuZ3VhZ2UobG5nKSB7XG4gICAgICBpZiAobG5nKSB0aGlzLmxhbmd1YWdlID0gbG5nO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJleGlzdHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXhpc3RzKGtleSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHtcbiAgICAgICAgaW50ZXJwb2xhdGlvbjoge31cbiAgICAgIH07XG5cbiAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCB8fCBrZXkgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVzb2x2ZWQgPSB0aGlzLnJlc29sdmUoa2V5LCBvcHRpb25zKTtcbiAgICAgIHJldHVybiByZXNvbHZlZCAmJiByZXNvbHZlZC5yZXMgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdEZyb21LZXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdEZyb21LZXkoa2V5LCBvcHRpb25zKSB7XG4gICAgICB2YXIgbnNTZXBhcmF0b3IgPSBvcHRpb25zLm5zU2VwYXJhdG9yICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zU2VwYXJhdG9yIDogdGhpcy5vcHRpb25zLm5zU2VwYXJhdG9yO1xuICAgICAgaWYgKG5zU2VwYXJhdG9yID09PSB1bmRlZmluZWQpIG5zU2VwYXJhdG9yID0gJzonO1xuICAgICAgdmFyIGtleVNlcGFyYXRvciA9IG9wdGlvbnMua2V5U2VwYXJhdG9yICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmtleVNlcGFyYXRvciA6IHRoaXMub3B0aW9ucy5rZXlTZXBhcmF0b3I7XG4gICAgICB2YXIgbmFtZXNwYWNlcyA9IG9wdGlvbnMubnMgfHwgdGhpcy5vcHRpb25zLmRlZmF1bHROUyB8fCBbXTtcbiAgICAgIHZhciB3b3VsZENoZWNrRm9yTnNJbktleSA9IG5zU2VwYXJhdG9yICYmIGtleS5pbmRleE9mKG5zU2VwYXJhdG9yKSA+IC0xO1xuICAgICAgdmFyIHNlZW1zTmF0dXJhbExhbmd1YWdlID0gIXRoaXMub3B0aW9ucy51c2VyRGVmaW5lZEtleVNlcGFyYXRvciAmJiAhb3B0aW9ucy5rZXlTZXBhcmF0b3IgJiYgIXRoaXMub3B0aW9ucy51c2VyRGVmaW5lZE5zU2VwYXJhdG9yICYmICFvcHRpb25zLm5zU2VwYXJhdG9yICYmICFsb29rc0xpa2VPYmplY3RQYXRoKGtleSwgbnNTZXBhcmF0b3IsIGtleVNlcGFyYXRvcik7XG5cbiAgICAgIGlmICh3b3VsZENoZWNrRm9yTnNJbktleSAmJiAhc2VlbXNOYXR1cmFsTGFuZ3VhZ2UpIHtcbiAgICAgICAgdmFyIG0gPSBrZXkubWF0Y2godGhpcy5pbnRlcnBvbGF0b3IubmVzdGluZ1JlZ2V4cCk7XG5cbiAgICAgICAgaWYgKG0gJiYgbS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgbmFtZXNwYWNlczogbmFtZXNwYWNlc1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGFydHMgPSBrZXkuc3BsaXQobnNTZXBhcmF0b3IpO1xuICAgICAgICBpZiAobnNTZXBhcmF0b3IgIT09IGtleVNlcGFyYXRvciB8fCBuc1NlcGFyYXRvciA9PT0ga2V5U2VwYXJhdG9yICYmIHRoaXMub3B0aW9ucy5ucy5pbmRleE9mKHBhcnRzWzBdKSA+IC0xKSBuYW1lc3BhY2VzID0gcGFydHMuc2hpZnQoKTtcbiAgICAgICAga2V5ID0gcGFydHMuam9pbihrZXlTZXBhcmF0b3IpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnKSBuYW1lc3BhY2VzID0gW25hbWVzcGFjZXNdO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIG5hbWVzcGFjZXM6IG5hbWVzcGFjZXNcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRyYW5zbGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0cmFuc2xhdGUoa2V5cywgb3B0aW9ucywgbGFzdEtleSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmIChfdHlwZW9mKG9wdGlvbnMpICE9PSAnb2JqZWN0JyAmJiB0aGlzLm9wdGlvbnMub3ZlcmxvYWRUcmFuc2xhdGlvbk9wdGlvbkhhbmRsZXIpIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucy5vdmVybG9hZFRyYW5zbGF0aW9uT3B0aW9uSGFuZGxlcihhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgICAgIGlmIChrZXlzID09PSB1bmRlZmluZWQgfHwga2V5cyA9PT0gbnVsbCkgcmV0dXJuICcnO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSBrZXlzID0gW1N0cmluZyhrZXlzKV07XG4gICAgICB2YXIgcmV0dXJuRGV0YWlscyA9IG9wdGlvbnMucmV0dXJuRGV0YWlscyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5yZXR1cm5EZXRhaWxzIDogdGhpcy5vcHRpb25zLnJldHVybkRldGFpbHM7XG4gICAgICB2YXIga2V5U2VwYXJhdG9yID0gb3B0aW9ucy5rZXlTZXBhcmF0b3IgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMua2V5U2VwYXJhdG9yIDogdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvcjtcblxuICAgICAgdmFyIF90aGlzJGV4dHJhY3RGcm9tS2V5ID0gdGhpcy5leHRyYWN0RnJvbUtleShrZXlzW2tleXMubGVuZ3RoIC0gMV0sIG9wdGlvbnMpLFxuICAgICAgICAgIGtleSA9IF90aGlzJGV4dHJhY3RGcm9tS2V5LmtleSxcbiAgICAgICAgICBuYW1lc3BhY2VzID0gX3RoaXMkZXh0cmFjdEZyb21LZXkubmFtZXNwYWNlcztcblxuICAgICAgdmFyIG5hbWVzcGFjZSA9IG5hbWVzcGFjZXNbbmFtZXNwYWNlcy5sZW5ndGggLSAxXTtcbiAgICAgIHZhciBsbmcgPSBvcHRpb25zLmxuZyB8fCB0aGlzLmxhbmd1YWdlO1xuICAgICAgdmFyIGFwcGVuZE5hbWVzcGFjZVRvQ0lNb2RlID0gb3B0aW9ucy5hcHBlbmROYW1lc3BhY2VUb0NJTW9kZSB8fCB0aGlzLm9wdGlvbnMuYXBwZW5kTmFtZXNwYWNlVG9DSU1vZGU7XG5cbiAgICAgIGlmIChsbmcgJiYgbG5nLnRvTG93ZXJDYXNlKCkgPT09ICdjaW1vZGUnKSB7XG4gICAgICAgIGlmIChhcHBlbmROYW1lc3BhY2VUb0NJTW9kZSkge1xuICAgICAgICAgIHZhciBuc1NlcGFyYXRvciA9IG9wdGlvbnMubnNTZXBhcmF0b3IgfHwgdGhpcy5vcHRpb25zLm5zU2VwYXJhdG9yO1xuXG4gICAgICAgICAgaWYgKHJldHVybkRldGFpbHMpIHtcbiAgICAgICAgICAgIHJlc29sdmVkLnJlcyA9IFwiXCIuY29uY2F0KG5hbWVzcGFjZSkuY29uY2F0KG5zU2VwYXJhdG9yKS5jb25jYXQoa2V5KTtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQobmFtZXNwYWNlKS5jb25jYXQobnNTZXBhcmF0b3IpLmNvbmNhdChrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJldHVybkRldGFpbHMpIHtcbiAgICAgICAgICByZXNvbHZlZC5yZXMgPSBrZXk7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlc29sdmVkID0gdGhpcy5yZXNvbHZlKGtleXMsIG9wdGlvbnMpO1xuICAgICAgdmFyIHJlcyA9IHJlc29sdmVkICYmIHJlc29sdmVkLnJlcztcbiAgICAgIHZhciByZXNVc2VkS2V5ID0gcmVzb2x2ZWQgJiYgcmVzb2x2ZWQudXNlZEtleSB8fCBrZXk7XG4gICAgICB2YXIgcmVzRXhhY3RVc2VkS2V5ID0gcmVzb2x2ZWQgJiYgcmVzb2x2ZWQuZXhhY3RVc2VkS2V5IHx8IGtleTtcbiAgICAgIHZhciByZXNUeXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseShyZXMpO1xuICAgICAgdmFyIG5vT2JqZWN0ID0gWydbb2JqZWN0IE51bWJlcl0nLCAnW29iamVjdCBGdW5jdGlvbl0nLCAnW29iamVjdCBSZWdFeHBdJ107XG4gICAgICB2YXIgam9pbkFycmF5cyA9IG9wdGlvbnMuam9pbkFycmF5cyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5qb2luQXJyYXlzIDogdGhpcy5vcHRpb25zLmpvaW5BcnJheXM7XG4gICAgICB2YXIgaGFuZGxlQXNPYmplY3RJbkkxOG5Gb3JtYXQgPSAhdGhpcy5pMThuRm9ybWF0IHx8IHRoaXMuaTE4bkZvcm1hdC5oYW5kbGVBc09iamVjdDtcbiAgICAgIHZhciBoYW5kbGVBc09iamVjdCA9IHR5cGVvZiByZXMgIT09ICdzdHJpbmcnICYmIHR5cGVvZiByZXMgIT09ICdib29sZWFuJyAmJiB0eXBlb2YgcmVzICE9PSAnbnVtYmVyJztcblxuICAgICAgaWYgKGhhbmRsZUFzT2JqZWN0SW5JMThuRm9ybWF0ICYmIHJlcyAmJiBoYW5kbGVBc09iamVjdCAmJiBub09iamVjdC5pbmRleE9mKHJlc1R5cGUpIDwgMCAmJiAhKHR5cGVvZiBqb2luQXJyYXlzID09PSAnc3RyaW5nJyAmJiByZXNUeXBlID09PSAnW29iamVjdCBBcnJheV0nKSkge1xuICAgICAgICBpZiAoIW9wdGlvbnMucmV0dXJuT2JqZWN0cyAmJiAhdGhpcy5vcHRpb25zLnJldHVybk9iamVjdHMpIHtcbiAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5yZXR1cm5lZE9iamVjdEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm4oJ2FjY2Vzc2luZyBhbiBvYmplY3QgLSBidXQgcmV0dXJuT2JqZWN0cyBvcHRpb25zIGlzIG5vdCBlbmFibGVkIScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciByID0gdGhpcy5vcHRpb25zLnJldHVybmVkT2JqZWN0SGFuZGxlciA/IHRoaXMub3B0aW9ucy5yZXR1cm5lZE9iamVjdEhhbmRsZXIocmVzVXNlZEtleSwgcmVzLCBfb2JqZWN0U3ByZWFkJDIoX29iamVjdFNwcmVhZCQyKHt9LCBvcHRpb25zKSwge30sIHtcbiAgICAgICAgICAgIG5zOiBuYW1lc3BhY2VzXG4gICAgICAgICAgfSkpIDogXCJrZXkgJ1wiLmNvbmNhdChrZXksIFwiIChcIikuY29uY2F0KHRoaXMubGFuZ3VhZ2UsIFwiKScgcmV0dXJuZWQgYW4gb2JqZWN0IGluc3RlYWQgb2Ygc3RyaW5nLlwiKTtcblxuICAgICAgICAgIGlmIChyZXR1cm5EZXRhaWxzKSB7XG4gICAgICAgICAgICByZXNvbHZlZC5yZXMgPSByO1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleVNlcGFyYXRvcikge1xuICAgICAgICAgIHZhciByZXNUeXBlSXNBcnJheSA9IHJlc1R5cGUgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgICAgICAgdmFyIGNvcHkgPSByZXNUeXBlSXNBcnJheSA/IFtdIDoge307XG4gICAgICAgICAgdmFyIG5ld0tleVRvVXNlID0gcmVzVHlwZUlzQXJyYXkgPyByZXNFeGFjdFVzZWRLZXkgOiByZXNVc2VkS2V5O1xuXG4gICAgICAgICAgZm9yICh2YXIgbSBpbiByZXMpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVzLCBtKSkge1xuICAgICAgICAgICAgICB2YXIgZGVlcEtleSA9IFwiXCIuY29uY2F0KG5ld0tleVRvVXNlKS5jb25jYXQoa2V5U2VwYXJhdG9yKS5jb25jYXQobSk7XG4gICAgICAgICAgICAgIGNvcHlbbV0gPSB0aGlzLnRyYW5zbGF0ZShkZWVwS2V5LCBfb2JqZWN0U3ByZWFkJDIoX29iamVjdFNwcmVhZCQyKHt9LCBvcHRpb25zKSwge1xuICAgICAgICAgICAgICAgIGpvaW5BcnJheXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5zOiBuYW1lc3BhY2VzXG4gICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgaWYgKGNvcHlbbV0gPT09IGRlZXBLZXkpIGNvcHlbbV0gPSByZXNbbV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzID0gY29weTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChoYW5kbGVBc09iamVjdEluSTE4bkZvcm1hdCAmJiB0eXBlb2Ygam9pbkFycmF5cyA9PT0gJ3N0cmluZycgJiYgcmVzVHlwZSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICByZXMgPSByZXMuam9pbihqb2luQXJyYXlzKTtcbiAgICAgICAgaWYgKHJlcykgcmVzID0gdGhpcy5leHRlbmRUcmFuc2xhdGlvbihyZXMsIGtleXMsIG9wdGlvbnMsIGxhc3RLZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHVzZWREZWZhdWx0ID0gZmFsc2U7XG4gICAgICAgIHZhciB1c2VkS2V5ID0gZmFsc2U7XG4gICAgICAgIHZhciBuZWVkc1BsdXJhbEhhbmRsaW5nID0gb3B0aW9ucy5jb3VudCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvcHRpb25zLmNvdW50ICE9PSAnc3RyaW5nJztcbiAgICAgICAgdmFyIGhhc0RlZmF1bHRWYWx1ZSA9IFRyYW5zbGF0b3IuaGFzRGVmYXVsdFZhbHVlKG9wdGlvbnMpO1xuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlU3VmZml4ID0gbmVlZHNQbHVyYWxIYW5kbGluZyA/IHRoaXMucGx1cmFsUmVzb2x2ZXIuZ2V0U3VmZml4KGxuZywgb3B0aW9ucy5jb3VudCwgb3B0aW9ucykgOiAnJztcbiAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IG9wdGlvbnNbXCJkZWZhdWx0VmFsdWVcIi5jb25jYXQoZGVmYXVsdFZhbHVlU3VmZml4KV0gfHwgb3B0aW9ucy5kZWZhdWx0VmFsdWU7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWRMb29rdXAocmVzKSAmJiBoYXNEZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICB1c2VkRGVmYXVsdCA9IHRydWU7XG4gICAgICAgICAgcmVzID0gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWRMb29rdXAocmVzKSkge1xuICAgICAgICAgIHVzZWRLZXkgPSB0cnVlO1xuICAgICAgICAgIHJlcyA9IGtleTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtaXNzaW5nS2V5Tm9WYWx1ZUZhbGxiYWNrVG9LZXkgPSBvcHRpb25zLm1pc3NpbmdLZXlOb1ZhbHVlRmFsbGJhY2tUb0tleSB8fCB0aGlzLm9wdGlvbnMubWlzc2luZ0tleU5vVmFsdWVGYWxsYmFja1RvS2V5O1xuICAgICAgICB2YXIgcmVzRm9yTWlzc2luZyA9IG1pc3NpbmdLZXlOb1ZhbHVlRmFsbGJhY2tUb0tleSAmJiB1c2VkS2V5ID8gdW5kZWZpbmVkIDogcmVzO1xuICAgICAgICB2YXIgdXBkYXRlTWlzc2luZyA9IGhhc0RlZmF1bHRWYWx1ZSAmJiBkZWZhdWx0VmFsdWUgIT09IHJlcyAmJiB0aGlzLm9wdGlvbnMudXBkYXRlTWlzc2luZztcblxuICAgICAgICBpZiAodXNlZEtleSB8fCB1c2VkRGVmYXVsdCB8fCB1cGRhdGVNaXNzaW5nKSB7XG4gICAgICAgICAgdGhpcy5sb2dnZXIubG9nKHVwZGF0ZU1pc3NpbmcgPyAndXBkYXRlS2V5JyA6ICdtaXNzaW5nS2V5JywgbG5nLCBuYW1lc3BhY2UsIGtleSwgdXBkYXRlTWlzc2luZyA/IGRlZmF1bHRWYWx1ZSA6IHJlcyk7XG5cbiAgICAgICAgICBpZiAoa2V5U2VwYXJhdG9yKSB7XG4gICAgICAgICAgICB2YXIgZmsgPSB0aGlzLnJlc29sdmUoa2V5LCBfb2JqZWN0U3ByZWFkJDIoX29iamVjdFNwcmVhZCQyKHt9LCBvcHRpb25zKSwge30sIHtcbiAgICAgICAgICAgICAga2V5U2VwYXJhdG9yOiBmYWxzZVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgaWYgKGZrICYmIGZrLnJlcykgdGhpcy5sb2dnZXIud2FybignU2VlbXMgdGhlIGxvYWRlZCB0cmFuc2xhdGlvbnMgd2VyZSBpbiBmbGF0IEpTT04gZm9ybWF0IGluc3RlYWQgb2YgbmVzdGVkLiBFaXRoZXIgc2V0IGtleVNlcGFyYXRvcjogZmFsc2Ugb24gaW5pdCBvciBtYWtlIHN1cmUgeW91ciB0cmFuc2xhdGlvbnMgYXJlIHB1Ymxpc2hlZCBpbiBuZXN0ZWQgZm9ybWF0LicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBsbmdzID0gW107XG4gICAgICAgICAgdmFyIGZhbGxiYWNrTG5ncyA9IHRoaXMubGFuZ3VhZ2VVdGlscy5nZXRGYWxsYmFja0NvZGVzKHRoaXMub3B0aW9ucy5mYWxsYmFja0xuZywgb3B0aW9ucy5sbmcgfHwgdGhpcy5sYW5ndWFnZSk7XG5cbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNhdmVNaXNzaW5nVG8gPT09ICdmYWxsYmFjaycgJiYgZmFsbGJhY2tMbmdzICYmIGZhbGxiYWNrTG5nc1swXSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmYWxsYmFja0xuZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgbG5ncy5wdXNoKGZhbGxiYWNrTG5nc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuc2F2ZU1pc3NpbmdUbyA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICAgIGxuZ3MgPSB0aGlzLmxhbmd1YWdlVXRpbHMudG9SZXNvbHZlSGllcmFyY2h5KG9wdGlvbnMubG5nIHx8IHRoaXMubGFuZ3VhZ2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsbmdzLnB1c2gob3B0aW9ucy5sbmcgfHwgdGhpcy5sYW5ndWFnZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHNlbmQgPSBmdW5jdGlvbiBzZW5kKGwsIGssIHNwZWNpZmljRGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgZGVmYXVsdEZvck1pc3NpbmcgPSBoYXNEZWZhdWx0VmFsdWUgJiYgc3BlY2lmaWNEZWZhdWx0VmFsdWUgIT09IHJlcyA/IHNwZWNpZmljRGVmYXVsdFZhbHVlIDogcmVzRm9yTWlzc2luZztcblxuICAgICAgICAgICAgaWYgKF90aGlzMi5vcHRpb25zLm1pc3NpbmdLZXlIYW5kbGVyKSB7XG4gICAgICAgICAgICAgIF90aGlzMi5vcHRpb25zLm1pc3NpbmdLZXlIYW5kbGVyKGwsIG5hbWVzcGFjZSwgaywgZGVmYXVsdEZvck1pc3NpbmcsIHVwZGF0ZU1pc3NpbmcsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChfdGhpczIuYmFja2VuZENvbm5lY3RvciAmJiBfdGhpczIuYmFja2VuZENvbm5lY3Rvci5zYXZlTWlzc2luZykge1xuICAgICAgICAgICAgICBfdGhpczIuYmFja2VuZENvbm5lY3Rvci5zYXZlTWlzc2luZyhsLCBuYW1lc3BhY2UsIGssIGRlZmF1bHRGb3JNaXNzaW5nLCB1cGRhdGVNaXNzaW5nLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMyLmVtaXQoJ21pc3NpbmdLZXknLCBsLCBuYW1lc3BhY2UsIGssIHJlcyk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2F2ZU1pc3NpbmcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2F2ZU1pc3NpbmdQbHVyYWxzICYmIG5lZWRzUGx1cmFsSGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgbG5ncy5mb3JFYWNoKGZ1bmN0aW9uIChsYW5ndWFnZSkge1xuICAgICAgICAgICAgICAgIF90aGlzMi5wbHVyYWxSZXNvbHZlci5nZXRTdWZmaXhlcyhsYW5ndWFnZSwgb3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICBzZW5kKFtsYW5ndWFnZV0sIGtleSArIHN1ZmZpeCwgb3B0aW9uc1tcImRlZmF1bHRWYWx1ZVwiLmNvbmNhdChzdWZmaXgpXSB8fCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlbmQobG5ncywga2V5LCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlcyA9IHRoaXMuZXh0ZW5kVHJhbnNsYXRpb24ocmVzLCBrZXlzLCBvcHRpb25zLCByZXNvbHZlZCwgbGFzdEtleSk7XG4gICAgICAgIGlmICh1c2VkS2V5ICYmIHJlcyA9PT0ga2V5ICYmIHRoaXMub3B0aW9ucy5hcHBlbmROYW1lc3BhY2VUb01pc3NpbmdLZXkpIHJlcyA9IFwiXCIuY29uY2F0KG5hbWVzcGFjZSwgXCI6XCIpLmNvbmNhdChrZXkpO1xuXG4gICAgICAgIGlmICgodXNlZEtleSB8fCB1c2VkRGVmYXVsdCkgJiYgdGhpcy5vcHRpb25zLnBhcnNlTWlzc2luZ0tleUhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlBUEkgIT09ICd2MScpIHtcbiAgICAgICAgICAgIHJlcyA9IHRoaXMub3B0aW9ucy5wYXJzZU1pc3NpbmdLZXlIYW5kbGVyKHRoaXMub3B0aW9ucy5hcHBlbmROYW1lc3BhY2VUb01pc3NpbmdLZXkgPyBcIlwiLmNvbmNhdChuYW1lc3BhY2UsIFwiOlwiKS5jb25jYXQoa2V5KSA6IGtleSwgdXNlZERlZmF1bHQgPyByZXMgOiB1bmRlZmluZWQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMgPSB0aGlzLm9wdGlvbnMucGFyc2VNaXNzaW5nS2V5SGFuZGxlcihyZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocmV0dXJuRGV0YWlscykge1xuICAgICAgICByZXNvbHZlZC5yZXMgPSByZXM7XG4gICAgICAgIHJldHVybiByZXNvbHZlZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0ZW5kVHJhbnNsYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0ZW5kVHJhbnNsYXRpb24ocmVzLCBrZXksIG9wdGlvbnMsIHJlc29sdmVkLCBsYXN0S2V5KSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuaTE4bkZvcm1hdCAmJiB0aGlzLmkxOG5Gb3JtYXQucGFyc2UpIHtcbiAgICAgICAgcmVzID0gdGhpcy5pMThuRm9ybWF0LnBhcnNlKHJlcywgX29iamVjdFNwcmVhZCQyKF9vYmplY3RTcHJlYWQkMih7fSwgdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZGVmYXVsdFZhcmlhYmxlcyksIG9wdGlvbnMpLCByZXNvbHZlZC51c2VkTG5nLCByZXNvbHZlZC51c2VkTlMsIHJlc29sdmVkLnVzZWRLZXksIHtcbiAgICAgICAgICByZXNvbHZlZDogcmVzb2x2ZWRcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKCFvcHRpb25zLnNraXBJbnRlcnBvbGF0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmludGVycG9sYXRpb24pIHRoaXMuaW50ZXJwb2xhdG9yLmluaXQoX29iamVjdFNwcmVhZCQyKF9vYmplY3RTcHJlYWQkMih7fSwgb3B0aW9ucyksIHtcbiAgICAgICAgICBpbnRlcnBvbGF0aW9uOiBfb2JqZWN0U3ByZWFkJDIoX29iamVjdFNwcmVhZCQyKHt9LCB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbiksIG9wdGlvbnMuaW50ZXJwb2xhdGlvbilcbiAgICAgICAgfSkpO1xuICAgICAgICB2YXIgc2tpcE9uVmFyaWFibGVzID0gdHlwZW9mIHJlcyA9PT0gJ3N0cmluZycgJiYgKG9wdGlvbnMgJiYgb3B0aW9ucy5pbnRlcnBvbGF0aW9uICYmIG9wdGlvbnMuaW50ZXJwb2xhdGlvbi5za2lwT25WYXJpYWJsZXMgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuaW50ZXJwb2xhdGlvbi5za2lwT25WYXJpYWJsZXMgOiB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5za2lwT25WYXJpYWJsZXMpO1xuICAgICAgICB2YXIgbmVzdEJlZjtcblxuICAgICAgICBpZiAoc2tpcE9uVmFyaWFibGVzKSB7XG4gICAgICAgICAgdmFyIG5iID0gcmVzLm1hdGNoKHRoaXMuaW50ZXJwb2xhdG9yLm5lc3RpbmdSZWdleHApO1xuICAgICAgICAgIG5lc3RCZWYgPSBuYiAmJiBuYi5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGF0YSA9IG9wdGlvbnMucmVwbGFjZSAmJiB0eXBlb2Ygb3B0aW9ucy5yZXBsYWNlICE9PSAnc3RyaW5nJyA/IG9wdGlvbnMucmVwbGFjZSA6IG9wdGlvbnM7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5kZWZhdWx0VmFyaWFibGVzKSBkYXRhID0gX29iamVjdFNwcmVhZCQyKF9vYmplY3RTcHJlYWQkMih7fSwgdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZGVmYXVsdFZhcmlhYmxlcyksIGRhdGEpO1xuICAgICAgICByZXMgPSB0aGlzLmludGVycG9sYXRvci5pbnRlcnBvbGF0ZShyZXMsIGRhdGEsIG9wdGlvbnMubG5nIHx8IHRoaXMubGFuZ3VhZ2UsIG9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChza2lwT25WYXJpYWJsZXMpIHtcbiAgICAgICAgICB2YXIgbmEgPSByZXMubWF0Y2godGhpcy5pbnRlcnBvbGF0b3IubmVzdGluZ1JlZ2V4cCk7XG4gICAgICAgICAgdmFyIG5lc3RBZnQgPSBuYSAmJiBuYS5sZW5ndGg7XG4gICAgICAgICAgaWYgKG5lc3RCZWYgPCBuZXN0QWZ0KSBvcHRpb25zLm5lc3QgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLm5lc3QgIT09IGZhbHNlKSByZXMgPSB0aGlzLmludGVycG9sYXRvci5uZXN0KHJlcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobGFzdEtleSAmJiBsYXN0S2V5WzBdID09PSBhcmdzWzBdICYmICFvcHRpb25zLmNvbnRleHQpIHtcbiAgICAgICAgICAgIF90aGlzMy5sb2dnZXIud2FybihcIkl0IHNlZW1zIHlvdSBhcmUgbmVzdGluZyByZWN1cnNpdmVseSBrZXk6IFwiLmNvbmNhdChhcmdzWzBdLCBcIiBpbiBrZXk6IFwiKS5jb25jYXQoa2V5WzBdKSk7XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBfdGhpczMudHJhbnNsYXRlLmFwcGx5KF90aGlzMywgYXJncy5jb25jYXQoW2tleV0pKTtcbiAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgICAgIGlmIChvcHRpb25zLmludGVycG9sYXRpb24pIHRoaXMuaW50ZXJwb2xhdG9yLnJlc2V0KCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwb3N0UHJvY2VzcyA9IG9wdGlvbnMucG9zdFByb2Nlc3MgfHwgdGhpcy5vcHRpb25zLnBvc3RQcm9jZXNzO1xuICAgICAgdmFyIHBvc3RQcm9jZXNzb3JOYW1lcyA9IHR5cGVvZiBwb3N0UHJvY2VzcyA9PT0gJ3N0cmluZycgPyBbcG9zdFByb2Nlc3NdIDogcG9zdFByb2Nlc3M7XG5cbiAgICAgIGlmIChyZXMgIT09IHVuZGVmaW5lZCAmJiByZXMgIT09IG51bGwgJiYgcG9zdFByb2Nlc3Nvck5hbWVzICYmIHBvc3RQcm9jZXNzb3JOYW1lcy5sZW5ndGggJiYgb3B0aW9ucy5hcHBseVBvc3RQcm9jZXNzb3IgIT09IGZhbHNlKSB7XG4gICAgICAgIHJlcyA9IHBvc3RQcm9jZXNzb3IuaGFuZGxlKHBvc3RQcm9jZXNzb3JOYW1lcywgcmVzLCBrZXksIHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMucG9zdFByb2Nlc3NQYXNzUmVzb2x2ZWQgPyBfb2JqZWN0U3ByZWFkJDIoe1xuICAgICAgICAgIGkxOG5SZXNvbHZlZDogcmVzb2x2ZWRcbiAgICAgICAgfSwgb3B0aW9ucykgOiBvcHRpb25zLCB0aGlzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzb2x2ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlKGtleXMpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgZm91bmQ7XG4gICAgICB2YXIgdXNlZEtleTtcbiAgICAgIHZhciBleGFjdFVzZWRLZXk7XG4gICAgICB2YXIgdXNlZExuZztcbiAgICAgIHZhciB1c2VkTlM7XG4gICAgICBpZiAodHlwZW9mIGtleXMgPT09ICdzdHJpbmcnKSBrZXlzID0gW2tleXNdO1xuICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgIGlmIChfdGhpczQuaXNWYWxpZExvb2t1cChmb3VuZCkpIHJldHVybjtcblxuICAgICAgICB2YXIgZXh0cmFjdGVkID0gX3RoaXM0LmV4dHJhY3RGcm9tS2V5KGssIG9wdGlvbnMpO1xuXG4gICAgICAgIHZhciBrZXkgPSBleHRyYWN0ZWQua2V5O1xuICAgICAgICB1c2VkS2V5ID0ga2V5O1xuICAgICAgICB2YXIgbmFtZXNwYWNlcyA9IGV4dHJhY3RlZC5uYW1lc3BhY2VzO1xuICAgICAgICBpZiAoX3RoaXM0Lm9wdGlvbnMuZmFsbGJhY2tOUykgbmFtZXNwYWNlcyA9IG5hbWVzcGFjZXMuY29uY2F0KF90aGlzNC5vcHRpb25zLmZhbGxiYWNrTlMpO1xuICAgICAgICB2YXIgbmVlZHNQbHVyYWxIYW5kbGluZyA9IG9wdGlvbnMuY291bnQgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0aW9ucy5jb3VudCAhPT0gJ3N0cmluZyc7XG5cbiAgICAgICAgdmFyIG5lZWRzWmVyb1N1ZmZpeExvb2t1cCA9IG5lZWRzUGx1cmFsSGFuZGxpbmcgJiYgIW9wdGlvbnMub3JkaW5hbCAmJiBvcHRpb25zLmNvdW50ID09PSAwICYmIF90aGlzNC5wbHVyYWxSZXNvbHZlci5zaG91bGRVc2VJbnRsQXBpKCk7XG5cbiAgICAgICAgdmFyIG5lZWRzQ29udGV4dEhhbmRsaW5nID0gb3B0aW9ucy5jb250ZXh0ICE9PSB1bmRlZmluZWQgJiYgKHR5cGVvZiBvcHRpb25zLmNvbnRleHQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBvcHRpb25zLmNvbnRleHQgPT09ICdudW1iZXInKSAmJiBvcHRpb25zLmNvbnRleHQgIT09ICcnO1xuICAgICAgICB2YXIgY29kZXMgPSBvcHRpb25zLmxuZ3MgPyBvcHRpb25zLmxuZ3MgOiBfdGhpczQubGFuZ3VhZ2VVdGlscy50b1Jlc29sdmVIaWVyYXJjaHkob3B0aW9ucy5sbmcgfHwgX3RoaXM0Lmxhbmd1YWdlLCBvcHRpb25zLmZhbGxiYWNrTG5nKTtcbiAgICAgICAgbmFtZXNwYWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChucykge1xuICAgICAgICAgIGlmIChfdGhpczQuaXNWYWxpZExvb2t1cChmb3VuZCkpIHJldHVybjtcbiAgICAgICAgICB1c2VkTlMgPSBucztcblxuICAgICAgICAgIGlmICghY2hlY2tlZExvYWRlZEZvcltcIlwiLmNvbmNhdChjb2Rlc1swXSwgXCItXCIpLmNvbmNhdChucyldICYmIF90aGlzNC51dGlscyAmJiBfdGhpczQudXRpbHMuaGFzTG9hZGVkTmFtZXNwYWNlICYmICFfdGhpczQudXRpbHMuaGFzTG9hZGVkTmFtZXNwYWNlKHVzZWROUykpIHtcbiAgICAgICAgICAgIGNoZWNrZWRMb2FkZWRGb3JbXCJcIi5jb25jYXQoY29kZXNbMF0sIFwiLVwiKS5jb25jYXQobnMpXSA9IHRydWU7XG5cbiAgICAgICAgICAgIF90aGlzNC5sb2dnZXIud2FybihcImtleSBcXFwiXCIuY29uY2F0KHVzZWRLZXksIFwiXFxcIiBmb3IgbGFuZ3VhZ2VzIFxcXCJcIikuY29uY2F0KGNvZGVzLmpvaW4oJywgJyksIFwiXFxcIiB3b24ndCBnZXQgcmVzb2x2ZWQgYXMgbmFtZXNwYWNlIFxcXCJcIikuY29uY2F0KHVzZWROUywgXCJcXFwiIHdhcyBub3QgeWV0IGxvYWRlZFwiKSwgJ1RoaXMgbWVhbnMgc29tZXRoaW5nIElTIFdST05HIGluIHlvdXIgc2V0dXAuIFlvdSBhY2Nlc3MgdGhlIHQgZnVuY3Rpb24gYmVmb3JlIGkxOG5leHQuaW5pdCAvIGkxOG5leHQubG9hZE5hbWVzcGFjZSAvIGkxOG5leHQuY2hhbmdlTGFuZ3VhZ2Ugd2FzIGRvbmUuIFdhaXQgZm9yIHRoZSBjYWxsYmFjayBvciBQcm9taXNlIHRvIHJlc29sdmUgYmVmb3JlIGFjY2Vzc2luZyBpdCEhIScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvZGVzLmZvckVhY2goZnVuY3Rpb24gKGNvZGUpIHtcbiAgICAgICAgICAgIGlmIChfdGhpczQuaXNWYWxpZExvb2t1cChmb3VuZCkpIHJldHVybjtcbiAgICAgICAgICAgIHVzZWRMbmcgPSBjb2RlO1xuICAgICAgICAgICAgdmFyIGZpbmFsS2V5cyA9IFtrZXldO1xuXG4gICAgICAgICAgICBpZiAoX3RoaXM0LmkxOG5Gb3JtYXQgJiYgX3RoaXM0LmkxOG5Gb3JtYXQuYWRkTG9va3VwS2V5cykge1xuICAgICAgICAgICAgICBfdGhpczQuaTE4bkZvcm1hdC5hZGRMb29rdXBLZXlzKGZpbmFsS2V5cywga2V5LCBjb2RlLCBucywgb3B0aW9ucyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgcGx1cmFsU3VmZml4O1xuICAgICAgICAgICAgICBpZiAobmVlZHNQbHVyYWxIYW5kbGluZykgcGx1cmFsU3VmZml4ID0gX3RoaXM0LnBsdXJhbFJlc29sdmVyLmdldFN1ZmZpeChjb2RlLCBvcHRpb25zLmNvdW50LCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgdmFyIHplcm9TdWZmaXggPSBcIlwiLmNvbmNhdChfdGhpczQub3B0aW9ucy5wbHVyYWxTZXBhcmF0b3IsIFwiemVyb1wiKTtcblxuICAgICAgICAgICAgICBpZiAobmVlZHNQbHVyYWxIYW5kbGluZykge1xuICAgICAgICAgICAgICAgIGZpbmFsS2V5cy5wdXNoKGtleSArIHBsdXJhbFN1ZmZpeCk7XG5cbiAgICAgICAgICAgICAgICBpZiAobmVlZHNaZXJvU3VmZml4TG9va3VwKSB7XG4gICAgICAgICAgICAgICAgICBmaW5hbEtleXMucHVzaChrZXkgKyB6ZXJvU3VmZml4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAobmVlZHNDb250ZXh0SGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGV4dEtleSA9IFwiXCIuY29uY2F0KGtleSkuY29uY2F0KF90aGlzNC5vcHRpb25zLmNvbnRleHRTZXBhcmF0b3IpLmNvbmNhdChvcHRpb25zLmNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGZpbmFsS2V5cy5wdXNoKGNvbnRleHRLZXkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5lZWRzUGx1cmFsSGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICAgIGZpbmFsS2V5cy5wdXNoKGNvbnRleHRLZXkgKyBwbHVyYWxTdWZmaXgpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAobmVlZHNaZXJvU3VmZml4TG9va3VwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsS2V5cy5wdXNoKGNvbnRleHRLZXkgKyB6ZXJvU3VmZml4KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHBvc3NpYmxlS2V5O1xuXG4gICAgICAgICAgICB3aGlsZSAocG9zc2libGVLZXkgPSBmaW5hbEtleXMucG9wKCkpIHtcbiAgICAgICAgICAgICAgaWYgKCFfdGhpczQuaXNWYWxpZExvb2t1cChmb3VuZCkpIHtcbiAgICAgICAgICAgICAgICBleGFjdFVzZWRLZXkgPSBwb3NzaWJsZUtleTtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IF90aGlzNC5nZXRSZXNvdXJjZShjb2RlLCBucywgcG9zc2libGVLZXksIG9wdGlvbnMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZXM6IGZvdW5kLFxuICAgICAgICB1c2VkS2V5OiB1c2VkS2V5LFxuICAgICAgICBleGFjdFVzZWRLZXk6IGV4YWN0VXNlZEtleSxcbiAgICAgICAgdXNlZExuZzogdXNlZExuZyxcbiAgICAgICAgdXNlZE5TOiB1c2VkTlNcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzVmFsaWRMb29rdXBcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNWYWxpZExvb2t1cChyZXMpIHtcbiAgICAgIHJldHVybiByZXMgIT09IHVuZGVmaW5lZCAmJiAhKCF0aGlzLm9wdGlvbnMucmV0dXJuTnVsbCAmJiByZXMgPT09IG51bGwpICYmICEoIXRoaXMub3B0aW9ucy5yZXR1cm5FbXB0eVN0cmluZyAmJiByZXMgPT09ICcnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UmVzb3VyY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UmVzb3VyY2UoY29kZSwgbnMsIGtleSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICAgICAgaWYgKHRoaXMuaTE4bkZvcm1hdCAmJiB0aGlzLmkxOG5Gb3JtYXQuZ2V0UmVzb3VyY2UpIHJldHVybiB0aGlzLmkxOG5Gb3JtYXQuZ2V0UmVzb3VyY2UoY29kZSwgbnMsIGtleSwgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZVN0b3JlLmdldFJlc291cmNlKGNvZGUsIG5zLCBrZXksIG9wdGlvbnMpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImhhc0RlZmF1bHRWYWx1ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNEZWZhdWx0VmFsdWUob3B0aW9ucykge1xuICAgICAgdmFyIHByZWZpeCA9ICdkZWZhdWx0VmFsdWUnO1xuXG4gICAgICBmb3IgKHZhciBvcHRpb24gaW4gb3B0aW9ucykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9wdGlvbnMsIG9wdGlvbikgJiYgcHJlZml4ID09PSBvcHRpb24uc3Vic3RyaW5nKDAsIHByZWZpeC5sZW5ndGgpICYmIHVuZGVmaW5lZCAhPT0gb3B0aW9uc1tvcHRpb25dKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUcmFuc2xhdG9yO1xufShFdmVudEVtaXR0ZXIpO1xuXG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufVxuXG52YXIgTGFuZ3VhZ2VVdGlsID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBMYW5ndWFnZVV0aWwob3B0aW9ucykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMYW5ndWFnZVV0aWwpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnN1cHBvcnRlZExuZ3MgPSB0aGlzLm9wdGlvbnMuc3VwcG9ydGVkTG5ncyB8fCBmYWxzZTtcbiAgICB0aGlzLmxvZ2dlciA9IGJhc2VMb2dnZXIuY3JlYXRlKCdsYW5ndWFnZVV0aWxzJyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTGFuZ3VhZ2VVdGlsLCBbe1xuICAgIGtleTogXCJnZXRTY3JpcHRQYXJ0RnJvbUNvZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2NyaXB0UGFydEZyb21Db2RlKGNvZGUpIHtcbiAgICAgIGlmICghY29kZSB8fCBjb2RlLmluZGV4T2YoJy0nKSA8IDApIHJldHVybiBudWxsO1xuICAgICAgdmFyIHAgPSBjb2RlLnNwbGl0KCctJyk7XG4gICAgICBpZiAocC5sZW5ndGggPT09IDIpIHJldHVybiBudWxsO1xuICAgICAgcC5wb3AoKTtcbiAgICAgIGlmIChwW3AubGVuZ3RoIC0gMV0udG9Mb3dlckNhc2UoKSA9PT0gJ3gnKSByZXR1cm4gbnVsbDtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdExhbmd1YWdlQ29kZShwLmpvaW4oJy0nKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldExhbmd1YWdlUGFydEZyb21Db2RlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExhbmd1YWdlUGFydEZyb21Db2RlKGNvZGUpIHtcbiAgICAgIGlmICghY29kZSB8fCBjb2RlLmluZGV4T2YoJy0nKSA8IDApIHJldHVybiBjb2RlO1xuICAgICAgdmFyIHAgPSBjb2RlLnNwbGl0KCctJyk7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXRMYW5ndWFnZUNvZGUocFswXSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvcm1hdExhbmd1YWdlQ29kZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXRMYW5ndWFnZUNvZGUoY29kZSkge1xuICAgICAgaWYgKHR5cGVvZiBjb2RlID09PSAnc3RyaW5nJyAmJiBjb2RlLmluZGV4T2YoJy0nKSA+IC0xKSB7XG4gICAgICAgIHZhciBzcGVjaWFsQ2FzZXMgPSBbJ2hhbnMnLCAnaGFudCcsICdsYXRuJywgJ2N5cmwnLCAnY2FucycsICdtb25nJywgJ2FyYWInXTtcbiAgICAgICAgdmFyIHAgPSBjb2RlLnNwbGl0KCctJyk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5sb3dlckNhc2VMbmcpIHtcbiAgICAgICAgICBwID0gcC5tYXAoZnVuY3Rpb24gKHBhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJ0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICBwWzBdID0gcFswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHBbMV0gPSBwWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgaWYgKHNwZWNpYWxDYXNlcy5pbmRleE9mKHBbMV0udG9Mb3dlckNhc2UoKSkgPiAtMSkgcFsxXSA9IGNhcGl0YWxpemUocFsxXS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgfSBlbHNlIGlmIChwLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgIHBbMF0gPSBwWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgaWYgKHBbMV0ubGVuZ3RoID09PSAyKSBwWzFdID0gcFsxXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIGlmIChwWzBdICE9PSAnc2duJyAmJiBwWzJdLmxlbmd0aCA9PT0gMikgcFsyXSA9IHBbMl0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICBpZiAoc3BlY2lhbENhc2VzLmluZGV4T2YocFsxXS50b0xvd2VyQ2FzZSgpKSA+IC0xKSBwWzFdID0gY2FwaXRhbGl6ZShwWzFdLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgIGlmIChzcGVjaWFsQ2FzZXMuaW5kZXhPZihwWzJdLnRvTG93ZXJDYXNlKCkpID4gLTEpIHBbMl0gPSBjYXBpdGFsaXplKHBbMl0udG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcC5qb2luKCctJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2xlYW5Db2RlIHx8IHRoaXMub3B0aW9ucy5sb3dlckNhc2VMbmcgPyBjb2RlLnRvTG93ZXJDYXNlKCkgOiBjb2RlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1N1cHBvcnRlZENvZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNTdXBwb3J0ZWRDb2RlKGNvZGUpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMubG9hZCA9PT0gJ2xhbmd1YWdlT25seScgfHwgdGhpcy5vcHRpb25zLm5vbkV4cGxpY2l0U3VwcG9ydGVkTG5ncykge1xuICAgICAgICBjb2RlID0gdGhpcy5nZXRMYW5ndWFnZVBhcnRGcm9tQ29kZShjb2RlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICF0aGlzLnN1cHBvcnRlZExuZ3MgfHwgIXRoaXMuc3VwcG9ydGVkTG5ncy5sZW5ndGggfHwgdGhpcy5zdXBwb3J0ZWRMbmdzLmluZGV4T2YoY29kZSkgPiAtMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0QmVzdE1hdGNoRnJvbUNvZGVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJlc3RNYXRjaEZyb21Db2Rlcyhjb2Rlcykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKCFjb2RlcykgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgZm91bmQ7XG4gICAgICBjb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjb2RlKSB7XG4gICAgICAgIGlmIChmb3VuZCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBjbGVhbmVkTG5nID0gX3RoaXMuZm9ybWF0TGFuZ3VhZ2VDb2RlKGNvZGUpO1xuXG4gICAgICAgIGlmICghX3RoaXMub3B0aW9ucy5zdXBwb3J0ZWRMbmdzIHx8IF90aGlzLmlzU3VwcG9ydGVkQ29kZShjbGVhbmVkTG5nKSkgZm91bmQgPSBjbGVhbmVkTG5nO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghZm91bmQgJiYgdGhpcy5vcHRpb25zLnN1cHBvcnRlZExuZ3MpIHtcbiAgICAgICAgY29kZXMuZm9yRWFjaChmdW5jdGlvbiAoY29kZSkge1xuICAgICAgICAgIGlmIChmb3VuZCkgcmV0dXJuO1xuXG4gICAgICAgICAgdmFyIGxuZ09ubHkgPSBfdGhpcy5nZXRMYW5ndWFnZVBhcnRGcm9tQ29kZShjb2RlKTtcblxuICAgICAgICAgIGlmIChfdGhpcy5pc1N1cHBvcnRlZENvZGUobG5nT25seSkpIHJldHVybiBmb3VuZCA9IGxuZ09ubHk7XG4gICAgICAgICAgZm91bmQgPSBfdGhpcy5vcHRpb25zLnN1cHBvcnRlZExuZ3MuZmluZChmdW5jdGlvbiAoc3VwcG9ydGVkTG5nKSB7XG4gICAgICAgICAgICBpZiAoc3VwcG9ydGVkTG5nLmluZGV4T2YobG5nT25seSkgPT09IDApIHJldHVybiBzdXBwb3J0ZWRMbmc7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZvdW5kKSBmb3VuZCA9IHRoaXMuZ2V0RmFsbGJhY2tDb2Rlcyh0aGlzLm9wdGlvbnMuZmFsbGJhY2tMbmcpWzBdO1xuICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRGYWxsYmFja0NvZGVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZhbGxiYWNrQ29kZXMoZmFsbGJhY2tzLCBjb2RlKSB7XG4gICAgICBpZiAoIWZhbGxiYWNrcykgcmV0dXJuIFtdO1xuICAgICAgaWYgKHR5cGVvZiBmYWxsYmFja3MgPT09ICdmdW5jdGlvbicpIGZhbGxiYWNrcyA9IGZhbGxiYWNrcyhjb2RlKTtcbiAgICAgIGlmICh0eXBlb2YgZmFsbGJhY2tzID09PSAnc3RyaW5nJykgZmFsbGJhY2tzID0gW2ZhbGxiYWNrc107XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseShmYWxsYmFja3MpID09PSAnW29iamVjdCBBcnJheV0nKSByZXR1cm4gZmFsbGJhY2tzO1xuICAgICAgaWYgKCFjb2RlKSByZXR1cm4gZmFsbGJhY2tzW1wiZGVmYXVsdFwiXSB8fCBbXTtcbiAgICAgIHZhciBmb3VuZCA9IGZhbGxiYWNrc1tjb2RlXTtcbiAgICAgIGlmICghZm91bmQpIGZvdW5kID0gZmFsbGJhY2tzW3RoaXMuZ2V0U2NyaXB0UGFydEZyb21Db2RlKGNvZGUpXTtcbiAgICAgIGlmICghZm91bmQpIGZvdW5kID0gZmFsbGJhY2tzW3RoaXMuZm9ybWF0TGFuZ3VhZ2VDb2RlKGNvZGUpXTtcbiAgICAgIGlmICghZm91bmQpIGZvdW5kID0gZmFsbGJhY2tzW3RoaXMuZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUoY29kZSldO1xuICAgICAgaWYgKCFmb3VuZCkgZm91bmQgPSBmYWxsYmFja3NbXCJkZWZhdWx0XCJdO1xuICAgICAgcmV0dXJuIGZvdW5kIHx8IFtdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0b1Jlc29sdmVIaWVyYXJjaHlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9SZXNvbHZlSGllcmFyY2h5KGNvZGUsIGZhbGxiYWNrQ29kZSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBmYWxsYmFja0NvZGVzID0gdGhpcy5nZXRGYWxsYmFja0NvZGVzKGZhbGxiYWNrQ29kZSB8fCB0aGlzLm9wdGlvbnMuZmFsbGJhY2tMbmcgfHwgW10sIGNvZGUpO1xuICAgICAgdmFyIGNvZGVzID0gW107XG5cbiAgICAgIHZhciBhZGRDb2RlID0gZnVuY3Rpb24gYWRkQ29kZShjKSB7XG4gICAgICAgIGlmICghYykgcmV0dXJuO1xuXG4gICAgICAgIGlmIChfdGhpczIuaXNTdXBwb3J0ZWRDb2RlKGMpKSB7XG4gICAgICAgICAgY29kZXMucHVzaChjKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczIubG9nZ2VyLndhcm4oXCJyZWplY3RpbmcgbGFuZ3VhZ2UgY29kZSBub3QgZm91bmQgaW4gc3VwcG9ydGVkTG5nczogXCIuY29uY2F0KGMpKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKHR5cGVvZiBjb2RlID09PSAnc3RyaW5nJyAmJiBjb2RlLmluZGV4T2YoJy0nKSA+IC0xKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubG9hZCAhPT0gJ2xhbmd1YWdlT25seScpIGFkZENvZGUodGhpcy5mb3JtYXRMYW5ndWFnZUNvZGUoY29kZSkpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxvYWQgIT09ICdsYW5ndWFnZU9ubHknICYmIHRoaXMub3B0aW9ucy5sb2FkICE9PSAnY3VycmVudE9ubHknKSBhZGRDb2RlKHRoaXMuZ2V0U2NyaXB0UGFydEZyb21Db2RlKGNvZGUpKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5sb2FkICE9PSAnY3VycmVudE9ubHknKSBhZGRDb2RlKHRoaXMuZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUoY29kZSkpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgYWRkQ29kZSh0aGlzLmZvcm1hdExhbmd1YWdlQ29kZShjb2RlKSk7XG4gICAgICB9XG5cbiAgICAgIGZhbGxiYWNrQ29kZXMuZm9yRWFjaChmdW5jdGlvbiAoZmMpIHtcbiAgICAgICAgaWYgKGNvZGVzLmluZGV4T2YoZmMpIDwgMCkgYWRkQ29kZShfdGhpczIuZm9ybWF0TGFuZ3VhZ2VDb2RlKGZjKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjb2RlcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTGFuZ3VhZ2VVdGlsO1xufSgpO1xuXG52YXIgc2V0cyA9IFt7XG4gIGxuZ3M6IFsnYWNoJywgJ2FrJywgJ2FtJywgJ2FybicsICdicicsICdmaWwnLCAnZ3VuJywgJ2xuJywgJ21mZScsICdtZycsICdtaScsICdvYycsICdwdCcsICdwdC1CUicsICd0ZycsICd0bCcsICd0aScsICd0cicsICd1eicsICd3YSddLFxuICBucjogWzEsIDJdLFxuICBmYzogMVxufSwge1xuICBsbmdzOiBbJ2FmJywgJ2FuJywgJ2FzdCcsICdheicsICdiZycsICdibicsICdjYScsICdkYScsICdkZScsICdkZXYnLCAnZWwnLCAnZW4nLCAnZW8nLCAnZXMnLCAnZXQnLCAnZXUnLCAnZmknLCAnZm8nLCAnZnVyJywgJ2Z5JywgJ2dsJywgJ2d1JywgJ2hhJywgJ2hpJywgJ2h1JywgJ2h5JywgJ2lhJywgJ2l0JywgJ2trJywgJ2tuJywgJ2t1JywgJ2xiJywgJ21haScsICdtbCcsICdtbicsICdtcicsICduYWgnLCAnbmFwJywgJ25iJywgJ25lJywgJ25sJywgJ25uJywgJ25vJywgJ25zbycsICdwYScsICdwYXAnLCAncG1zJywgJ3BzJywgJ3B0LVBUJywgJ3JtJywgJ3NjbycsICdzZScsICdzaScsICdzbycsICdzb24nLCAnc3EnLCAnc3YnLCAnc3cnLCAndGEnLCAndGUnLCAndGsnLCAndXInLCAneW8nXSxcbiAgbnI6IFsxLCAyXSxcbiAgZmM6IDJcbn0sIHtcbiAgbG5nczogWydheScsICdibycsICdjZ2cnLCAnZmEnLCAnaHQnLCAnaWQnLCAnamEnLCAnamJvJywgJ2thJywgJ2ttJywgJ2tvJywgJ2t5JywgJ2xvJywgJ21zJywgJ3NhaCcsICdzdScsICd0aCcsICd0dCcsICd1ZycsICd2aScsICd3bycsICd6aCddLFxuICBucjogWzFdLFxuICBmYzogM1xufSwge1xuICBsbmdzOiBbJ2JlJywgJ2JzJywgJ2NucicsICdkeicsICdocicsICdydScsICdzcicsICd1ayddLFxuICBucjogWzEsIDIsIDVdLFxuICBmYzogNFxufSwge1xuICBsbmdzOiBbJ2FyJ10sXG4gIG5yOiBbMCwgMSwgMiwgMywgMTEsIDEwMF0sXG4gIGZjOiA1XG59LCB7XG4gIGxuZ3M6IFsnY3MnLCAnc2snXSxcbiAgbnI6IFsxLCAyLCA1XSxcbiAgZmM6IDZcbn0sIHtcbiAgbG5nczogWydjc2InLCAncGwnXSxcbiAgbnI6IFsxLCAyLCA1XSxcbiAgZmM6IDdcbn0sIHtcbiAgbG5nczogWydjeSddLFxuICBucjogWzEsIDIsIDMsIDhdLFxuICBmYzogOFxufSwge1xuICBsbmdzOiBbJ2ZyJ10sXG4gIG5yOiBbMSwgMl0sXG4gIGZjOiA5XG59LCB7XG4gIGxuZ3M6IFsnZ2EnXSxcbiAgbnI6IFsxLCAyLCAzLCA3LCAxMV0sXG4gIGZjOiAxMFxufSwge1xuICBsbmdzOiBbJ2dkJ10sXG4gIG5yOiBbMSwgMiwgMywgMjBdLFxuICBmYzogMTFcbn0sIHtcbiAgbG5nczogWydpcyddLFxuICBucjogWzEsIDJdLFxuICBmYzogMTJcbn0sIHtcbiAgbG5nczogWydqdiddLFxuICBucjogWzAsIDFdLFxuICBmYzogMTNcbn0sIHtcbiAgbG5nczogWydrdyddLFxuICBucjogWzEsIDIsIDMsIDRdLFxuICBmYzogMTRcbn0sIHtcbiAgbG5nczogWydsdCddLFxuICBucjogWzEsIDIsIDEwXSxcbiAgZmM6IDE1XG59LCB7XG4gIGxuZ3M6IFsnbHYnXSxcbiAgbnI6IFsxLCAyLCAwXSxcbiAgZmM6IDE2XG59LCB7XG4gIGxuZ3M6IFsnbWsnXSxcbiAgbnI6IFsxLCAyXSxcbiAgZmM6IDE3XG59LCB7XG4gIGxuZ3M6IFsnbW5rJ10sXG4gIG5yOiBbMCwgMSwgMl0sXG4gIGZjOiAxOFxufSwge1xuICBsbmdzOiBbJ210J10sXG4gIG5yOiBbMSwgMiwgMTEsIDIwXSxcbiAgZmM6IDE5XG59LCB7XG4gIGxuZ3M6IFsnb3InXSxcbiAgbnI6IFsyLCAxXSxcbiAgZmM6IDJcbn0sIHtcbiAgbG5nczogWydybyddLFxuICBucjogWzEsIDIsIDIwXSxcbiAgZmM6IDIwXG59LCB7XG4gIGxuZ3M6IFsnc2wnXSxcbiAgbnI6IFs1LCAxLCAyLCAzXSxcbiAgZmM6IDIxXG59LCB7XG4gIGxuZ3M6IFsnaGUnLCAnaXcnXSxcbiAgbnI6IFsxLCAyLCAyMCwgMjFdLFxuICBmYzogMjJcbn1dO1xudmFyIF9ydWxlc1BsdXJhbHNUeXBlcyA9IHtcbiAgMTogZnVuY3Rpb24gXyhuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuID4gMSk7XG4gIH0sXG4gIDI6IGZ1bmN0aW9uIF8obikge1xuICAgIHJldHVybiBOdW1iZXIobiAhPSAxKTtcbiAgfSxcbiAgMzogZnVuY3Rpb24gXyhuKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0sXG4gIDQ6IGZ1bmN0aW9uIF8obikge1xuICAgIHJldHVybiBOdW1iZXIobiAlIDEwID09IDEgJiYgbiAlIDEwMCAhPSAxMSA/IDAgOiBuICUgMTAgPj0gMiAmJiBuICUgMTAgPD0gNCAmJiAobiAlIDEwMCA8IDEwIHx8IG4gJSAxMDAgPj0gMjApID8gMSA6IDIpO1xuICB9LFxuICA1OiBmdW5jdGlvbiBfKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gPT0gMCA/IDAgOiBuID09IDEgPyAxIDogbiA9PSAyID8gMiA6IG4gJSAxMDAgPj0gMyAmJiBuICUgMTAwIDw9IDEwID8gMyA6IG4gJSAxMDAgPj0gMTEgPyA0IDogNSk7XG4gIH0sXG4gIDY6IGZ1bmN0aW9uIF8obikge1xuICAgIHJldHVybiBOdW1iZXIobiA9PSAxID8gMCA6IG4gPj0gMiAmJiBuIDw9IDQgPyAxIDogMik7XG4gIH0sXG4gIDc6IGZ1bmN0aW9uIF8obikge1xuICAgIHJldHVybiBOdW1iZXIobiA9PSAxID8gMCA6IG4gJSAxMCA+PSAyICYmIG4gJSAxMCA8PSA0ICYmIChuICUgMTAwIDwgMTAgfHwgbiAlIDEwMCA+PSAyMCkgPyAxIDogMik7XG4gIH0sXG4gIDg6IGZ1bmN0aW9uIF8obikge1xuICAgIHJldHVybiBOdW1iZXIobiA9PSAxID8gMCA6IG4gPT0gMiA/IDEgOiBuICE9IDggJiYgbiAhPSAxMSA/IDIgOiAzKTtcbiAgfSxcbiAgOTogZnVuY3Rpb24gXyhuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuID49IDIpO1xuICB9LFxuICAxMDogZnVuY3Rpb24gXyhuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuID09IDEgPyAwIDogbiA9PSAyID8gMSA6IG4gPCA3ID8gMiA6IG4gPCAxMSA/IDMgOiA0KTtcbiAgfSxcbiAgMTE6IGZ1bmN0aW9uIF8obikge1xuICAgIHJldHVybiBOdW1iZXIobiA9PSAxIHx8IG4gPT0gMTEgPyAwIDogbiA9PSAyIHx8IG4gPT0gMTIgPyAxIDogbiA+IDIgJiYgbiA8IDIwID8gMiA6IDMpO1xuICB9LFxuICAxMjogZnVuY3Rpb24gXyhuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuICUgMTAgIT0gMSB8fCBuICUgMTAwID09IDExKTtcbiAgfSxcbiAgMTM6IGZ1bmN0aW9uIF8obikge1xuICAgIHJldHVybiBOdW1iZXIobiAhPT0gMCk7XG4gIH0sXG4gIDE0OiBmdW5jdGlvbiBfKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gPT0gMSA/IDAgOiBuID09IDIgPyAxIDogbiA9PSAzID8gMiA6IDMpO1xuICB9LFxuICAxNTogZnVuY3Rpb24gXyhuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuICUgMTAgPT0gMSAmJiBuICUgMTAwICE9IDExID8gMCA6IG4gJSAxMCA+PSAyICYmIChuICUgMTAwIDwgMTAgfHwgbiAlIDEwMCA+PSAyMCkgPyAxIDogMik7XG4gIH0sXG4gIDE2OiBmdW5jdGlvbiBfKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gJSAxMCA9PSAxICYmIG4gJSAxMDAgIT0gMTEgPyAwIDogbiAhPT0gMCA/IDEgOiAyKTtcbiAgfSxcbiAgMTc6IGZ1bmN0aW9uIF8obikge1xuICAgIHJldHVybiBOdW1iZXIobiA9PSAxIHx8IG4gJSAxMCA9PSAxICYmIG4gJSAxMDAgIT0gMTEgPyAwIDogMSk7XG4gIH0sXG4gIDE4OiBmdW5jdGlvbiBfKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gPT0gMCA/IDAgOiBuID09IDEgPyAxIDogMik7XG4gIH0sXG4gIDE5OiBmdW5jdGlvbiBfKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gPT0gMSA/IDAgOiBuID09IDAgfHwgbiAlIDEwMCA+IDEgJiYgbiAlIDEwMCA8IDExID8gMSA6IG4gJSAxMDAgPiAxMCAmJiBuICUgMTAwIDwgMjAgPyAyIDogMyk7XG4gIH0sXG4gIDIwOiBmdW5jdGlvbiBfKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gPT0gMSA/IDAgOiBuID09IDAgfHwgbiAlIDEwMCA+IDAgJiYgbiAlIDEwMCA8IDIwID8gMSA6IDIpO1xuICB9LFxuICAyMTogZnVuY3Rpb24gXyhuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuICUgMTAwID09IDEgPyAxIDogbiAlIDEwMCA9PSAyID8gMiA6IG4gJSAxMDAgPT0gMyB8fCBuICUgMTAwID09IDQgPyAzIDogMCk7XG4gIH0sXG4gIDIyOiBmdW5jdGlvbiBfKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gPT0gMSA/IDAgOiBuID09IDIgPyAxIDogKG4gPCAwIHx8IG4gPiAxMCkgJiYgbiAlIDEwID09IDAgPyAyIDogMyk7XG4gIH1cbn07XG52YXIgZGVwcmVjYXRlZEpzb25WZXJzaW9ucyA9IFsndjEnLCAndjInLCAndjMnXTtcbnZhciBzdWZmaXhlc09yZGVyID0ge1xuICB6ZXJvOiAwLFxuICBvbmU6IDEsXG4gIHR3bzogMixcbiAgZmV3OiAzLFxuICBtYW55OiA0LFxuICBvdGhlcjogNVxufTtcblxuZnVuY3Rpb24gY3JlYXRlUnVsZXMoKSB7XG4gIHZhciBydWxlcyA9IHt9O1xuICBzZXRzLmZvckVhY2goZnVuY3Rpb24gKHNldCkge1xuICAgIHNldC5sbmdzLmZvckVhY2goZnVuY3Rpb24gKGwpIHtcbiAgICAgIHJ1bGVzW2xdID0ge1xuICAgICAgICBudW1iZXJzOiBzZXQubnIsXG4gICAgICAgIHBsdXJhbHM6IF9ydWxlc1BsdXJhbHNUeXBlc1tzZXQuZmNdXG4gICAgICB9O1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG52YXIgUGx1cmFsUmVzb2x2ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBsdXJhbFJlc29sdmVyKGxhbmd1YWdlVXRpbHMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGx1cmFsUmVzb2x2ZXIpO1xuXG4gICAgdGhpcy5sYW5ndWFnZVV0aWxzID0gbGFuZ3VhZ2VVdGlscztcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMubG9nZ2VyID0gYmFzZUxvZ2dlci5jcmVhdGUoJ3BsdXJhbFJlc29sdmVyJyk7XG5cbiAgICBpZiAoKCF0aGlzLm9wdGlvbnMuY29tcGF0aWJpbGl0eUpTT04gfHwgdGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlKU09OID09PSAndjQnKSAmJiAodHlwZW9mIEludGwgPT09ICd1bmRlZmluZWQnIHx8ICFJbnRsLlBsdXJhbFJ1bGVzKSkge1xuICAgICAgdGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlKU09OID0gJ3YzJztcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKCdZb3VyIGVudmlyb25tZW50IHNlZW1zIG5vdCB0byBiZSBJbnRsIEFQSSBjb21wYXRpYmxlLCB1c2UgYW4gSW50bC5QbHVyYWxSdWxlcyBwb2x5ZmlsbC4gV2lsbCBmYWxsYmFjayB0byB0aGUgY29tcGF0aWJpbGl0eUpTT04gdjMgZm9ybWF0IGhhbmRsaW5nLicpO1xuICAgIH1cblxuICAgIHRoaXMucnVsZXMgPSBjcmVhdGVSdWxlcygpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBsdXJhbFJlc29sdmVyLCBbe1xuICAgIGtleTogXCJhZGRSdWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFJ1bGUobG5nLCBvYmopIHtcbiAgICAgIHRoaXMucnVsZXNbbG5nXSA9IG9iajtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UnVsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSdWxlKGNvZGUpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgICAgaWYgKHRoaXMuc2hvdWxkVXNlSW50bEFwaSgpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBJbnRsLlBsdXJhbFJ1bGVzKGNvZGUsIHtcbiAgICAgICAgICAgIHR5cGU6IG9wdGlvbnMub3JkaW5hbCA/ICdvcmRpbmFsJyA6ICdjYXJkaW5hbCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoX3VudXNlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydWxlc1tjb2RlXSB8fCB0aGlzLnJ1bGVzW3RoaXMubGFuZ3VhZ2VVdGlscy5nZXRMYW5ndWFnZVBhcnRGcm9tQ29kZShjb2RlKV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm5lZWRzUGx1cmFsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5lZWRzUGx1cmFsKGNvZGUpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHZhciBydWxlID0gdGhpcy5nZXRSdWxlKGNvZGUsIG9wdGlvbnMpO1xuXG4gICAgICBpZiAodGhpcy5zaG91bGRVc2VJbnRsQXBpKCkpIHtcbiAgICAgICAgcmV0dXJuIHJ1bGUgJiYgcnVsZS5yZXNvbHZlZE9wdGlvbnMoKS5wbHVyYWxDYXRlZ29yaWVzLmxlbmd0aCA+IDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBydWxlICYmIHJ1bGUubnVtYmVycy5sZW5ndGggPiAxO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRQbHVyYWxGb3Jtc09mS2V5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBsdXJhbEZvcm1zT2ZLZXkoY29kZSwga2V5KSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdWZmaXhlcyhjb2RlLCBvcHRpb25zKS5tYXAoZnVuY3Rpb24gKHN1ZmZpeCkge1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoa2V5KS5jb25jYXQoc3VmZml4KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTdWZmaXhlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdWZmaXhlcyhjb2RlKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgcnVsZSA9IHRoaXMuZ2V0UnVsZShjb2RlLCBvcHRpb25zKTtcblxuICAgICAgaWYgKCFydWxlKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2hvdWxkVXNlSW50bEFwaSgpKSB7XG4gICAgICAgIHJldHVybiBydWxlLnJlc29sdmVkT3B0aW9ucygpLnBsdXJhbENhdGVnb3JpZXMuc29ydChmdW5jdGlvbiAocGx1cmFsQ2F0ZWdvcnkxLCBwbHVyYWxDYXRlZ29yeTIpIHtcbiAgICAgICAgICByZXR1cm4gc3VmZml4ZXNPcmRlcltwbHVyYWxDYXRlZ29yeTFdIC0gc3VmZml4ZXNPcmRlcltwbHVyYWxDYXRlZ29yeTJdO1xuICAgICAgICB9KS5tYXAoZnVuY3Rpb24gKHBsdXJhbENhdGVnb3J5KSB7XG4gICAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KF90aGlzLm9wdGlvbnMucHJlcGVuZCkuY29uY2F0KHBsdXJhbENhdGVnb3J5KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBydWxlLm51bWJlcnMubWFwKGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmdldFN1ZmZpeChjb2RlLCBudW1iZXIsIG9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFN1ZmZpeFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdWZmaXgoY29kZSwgY291bnQpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICAgIHZhciBydWxlID0gdGhpcy5nZXRSdWxlKGNvZGUsIG9wdGlvbnMpO1xuXG4gICAgICBpZiAocnVsZSkge1xuICAgICAgICBpZiAodGhpcy5zaG91bGRVc2VJbnRsQXBpKCkpIHtcbiAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQodGhpcy5vcHRpb25zLnByZXBlbmQpLmNvbmNhdChydWxlLnNlbGVjdChjb3VudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3VmZml4UmV0cm9Db21wYXRpYmxlKHJ1bGUsIGNvdW50KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5sb2dnZXIud2FybihcIm5vIHBsdXJhbCBydWxlIGZvdW5kIGZvcjogXCIuY29uY2F0KGNvZGUpKTtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U3VmZml4UmV0cm9Db21wYXRpYmxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN1ZmZpeFJldHJvQ29tcGF0aWJsZShydWxlLCBjb3VudCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBpZHggPSBydWxlLm5vQWJzID8gcnVsZS5wbHVyYWxzKGNvdW50KSA6IHJ1bGUucGx1cmFscyhNYXRoLmFicyhjb3VudCkpO1xuICAgICAgdmFyIHN1ZmZpeCA9IHJ1bGUubnVtYmVyc1tpZHhdO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnNpbXBsaWZ5UGx1cmFsU3VmZml4ICYmIHJ1bGUubnVtYmVycy5sZW5ndGggPT09IDIgJiYgcnVsZS5udW1iZXJzWzBdID09PSAxKSB7XG4gICAgICAgIGlmIChzdWZmaXggPT09IDIpIHtcbiAgICAgICAgICBzdWZmaXggPSAncGx1cmFsJztcbiAgICAgICAgfSBlbHNlIGlmIChzdWZmaXggPT09IDEpIHtcbiAgICAgICAgICBzdWZmaXggPSAnJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgcmV0dXJuU3VmZml4ID0gZnVuY3Rpb24gcmV0dXJuU3VmZml4KCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLm9wdGlvbnMucHJlcGVuZCAmJiBzdWZmaXgudG9TdHJpbmcoKSA/IF90aGlzMi5vcHRpb25zLnByZXBlbmQgKyBzdWZmaXgudG9TdHJpbmcoKSA6IHN1ZmZpeC50b1N0cmluZygpO1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb21wYXRpYmlsaXR5SlNPTiA9PT0gJ3YxJykge1xuICAgICAgICBpZiAoc3VmZml4ID09PSAxKSByZXR1cm4gJyc7XG4gICAgICAgIGlmICh0eXBlb2Ygc3VmZml4ID09PSAnbnVtYmVyJykgcmV0dXJuIFwiX3BsdXJhbF9cIi5jb25jYXQoc3VmZml4LnRvU3RyaW5nKCkpO1xuICAgICAgICByZXR1cm4gcmV0dXJuU3VmZml4KCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5jb21wYXRpYmlsaXR5SlNPTiA9PT0gJ3YyJykge1xuICAgICAgICByZXR1cm4gcmV0dXJuU3VmZml4KCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zaW1wbGlmeVBsdXJhbFN1ZmZpeCAmJiBydWxlLm51bWJlcnMubGVuZ3RoID09PSAyICYmIHJ1bGUubnVtYmVyc1swXSA9PT0gMSkge1xuICAgICAgICByZXR1cm4gcmV0dXJuU3VmZml4KCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucHJlcGVuZCAmJiBpZHgudG9TdHJpbmcoKSA/IHRoaXMub3B0aW9ucy5wcmVwZW5kICsgaWR4LnRvU3RyaW5nKCkgOiBpZHgudG9TdHJpbmcoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2hvdWxkVXNlSW50bEFwaVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRVc2VJbnRsQXBpKCkge1xuICAgICAgcmV0dXJuICFkZXByZWNhdGVkSnNvblZlcnNpb25zLmluY2x1ZGVzKHRoaXMub3B0aW9ucy5jb21wYXRpYmlsaXR5SlNPTik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBsdXJhbFJlc29sdmVyO1xufSgpO1xuXG5mdW5jdGlvbiBvd25LZXlzJDMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDModGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkMyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIEludGVycG9sYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSW50ZXJwb2xhdG9yKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnRlcnBvbGF0b3IpO1xuXG4gICAgdGhpcy5sb2dnZXIgPSBiYXNlTG9nZ2VyLmNyZWF0ZSgnaW50ZXJwb2xhdG9yJyk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIHRoaXMuZm9ybWF0ID0gb3B0aW9ucy5pbnRlcnBvbGF0aW9uICYmIG9wdGlvbnMuaW50ZXJwb2xhdGlvbi5mb3JtYXQgfHwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIHRoaXMuaW5pdChvcHRpb25zKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhJbnRlcnBvbGF0b3IsIFt7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgIGlmICghb3B0aW9ucy5pbnRlcnBvbGF0aW9uKSBvcHRpb25zLmludGVycG9sYXRpb24gPSB7XG4gICAgICAgIGVzY2FwZVZhbHVlOiB0cnVlXG4gICAgICB9O1xuICAgICAgdmFyIGlPcHRzID0gb3B0aW9ucy5pbnRlcnBvbGF0aW9uO1xuICAgICAgdGhpcy5lc2NhcGUgPSBpT3B0cy5lc2NhcGUgIT09IHVuZGVmaW5lZCA/IGlPcHRzLmVzY2FwZSA6IGVzY2FwZTtcbiAgICAgIHRoaXMuZXNjYXBlVmFsdWUgPSBpT3B0cy5lc2NhcGVWYWx1ZSAhPT0gdW5kZWZpbmVkID8gaU9wdHMuZXNjYXBlVmFsdWUgOiB0cnVlO1xuICAgICAgdGhpcy51c2VSYXdWYWx1ZVRvRXNjYXBlID0gaU9wdHMudXNlUmF3VmFsdWVUb0VzY2FwZSAhPT0gdW5kZWZpbmVkID8gaU9wdHMudXNlUmF3VmFsdWVUb0VzY2FwZSA6IGZhbHNlO1xuICAgICAgdGhpcy5wcmVmaXggPSBpT3B0cy5wcmVmaXggPyByZWdleEVzY2FwZShpT3B0cy5wcmVmaXgpIDogaU9wdHMucHJlZml4RXNjYXBlZCB8fCAne3snO1xuICAgICAgdGhpcy5zdWZmaXggPSBpT3B0cy5zdWZmaXggPyByZWdleEVzY2FwZShpT3B0cy5zdWZmaXgpIDogaU9wdHMuc3VmZml4RXNjYXBlZCB8fCAnfX0nO1xuICAgICAgdGhpcy5mb3JtYXRTZXBhcmF0b3IgPSBpT3B0cy5mb3JtYXRTZXBhcmF0b3IgPyBpT3B0cy5mb3JtYXRTZXBhcmF0b3IgOiBpT3B0cy5mb3JtYXRTZXBhcmF0b3IgfHwgJywnO1xuICAgICAgdGhpcy51bmVzY2FwZVByZWZpeCA9IGlPcHRzLnVuZXNjYXBlU3VmZml4ID8gJycgOiBpT3B0cy51bmVzY2FwZVByZWZpeCB8fCAnLSc7XG4gICAgICB0aGlzLnVuZXNjYXBlU3VmZml4ID0gdGhpcy51bmVzY2FwZVByZWZpeCA/ICcnIDogaU9wdHMudW5lc2NhcGVTdWZmaXggfHwgJyc7XG4gICAgICB0aGlzLm5lc3RpbmdQcmVmaXggPSBpT3B0cy5uZXN0aW5nUHJlZml4ID8gcmVnZXhFc2NhcGUoaU9wdHMubmVzdGluZ1ByZWZpeCkgOiBpT3B0cy5uZXN0aW5nUHJlZml4RXNjYXBlZCB8fCByZWdleEVzY2FwZSgnJHQoJyk7XG4gICAgICB0aGlzLm5lc3RpbmdTdWZmaXggPSBpT3B0cy5uZXN0aW5nU3VmZml4ID8gcmVnZXhFc2NhcGUoaU9wdHMubmVzdGluZ1N1ZmZpeCkgOiBpT3B0cy5uZXN0aW5nU3VmZml4RXNjYXBlZCB8fCByZWdleEVzY2FwZSgnKScpO1xuICAgICAgdGhpcy5uZXN0aW5nT3B0aW9uc1NlcGFyYXRvciA9IGlPcHRzLm5lc3RpbmdPcHRpb25zU2VwYXJhdG9yID8gaU9wdHMubmVzdGluZ09wdGlvbnNTZXBhcmF0b3IgOiBpT3B0cy5uZXN0aW5nT3B0aW9uc1NlcGFyYXRvciB8fCAnLCc7XG4gICAgICB0aGlzLm1heFJlcGxhY2VzID0gaU9wdHMubWF4UmVwbGFjZXMgPyBpT3B0cy5tYXhSZXBsYWNlcyA6IDEwMDA7XG4gICAgICB0aGlzLmFsd2F5c0Zvcm1hdCA9IGlPcHRzLmFsd2F5c0Zvcm1hdCAhPT0gdW5kZWZpbmVkID8gaU9wdHMuYWx3YXlzRm9ybWF0IDogZmFsc2U7XG4gICAgICB0aGlzLnJlc2V0UmVnRXhwKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucykgdGhpcy5pbml0KHRoaXMub3B0aW9ucyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlc2V0UmVnRXhwXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0UmVnRXhwKCkge1xuICAgICAgdmFyIHJlZ2V4cFN0ciA9IFwiXCIuY29uY2F0KHRoaXMucHJlZml4LCBcIiguKz8pXCIpLmNvbmNhdCh0aGlzLnN1ZmZpeCk7XG4gICAgICB0aGlzLnJlZ2V4cCA9IG5ldyBSZWdFeHAocmVnZXhwU3RyLCAnZycpO1xuICAgICAgdmFyIHJlZ2V4cFVuZXNjYXBlU3RyID0gXCJcIi5jb25jYXQodGhpcy5wcmVmaXgpLmNvbmNhdCh0aGlzLnVuZXNjYXBlUHJlZml4LCBcIiguKz8pXCIpLmNvbmNhdCh0aGlzLnVuZXNjYXBlU3VmZml4KS5jb25jYXQodGhpcy5zdWZmaXgpO1xuICAgICAgdGhpcy5yZWdleHBVbmVzY2FwZSA9IG5ldyBSZWdFeHAocmVnZXhwVW5lc2NhcGVTdHIsICdnJyk7XG4gICAgICB2YXIgbmVzdGluZ1JlZ2V4cFN0ciA9IFwiXCIuY29uY2F0KHRoaXMubmVzdGluZ1ByZWZpeCwgXCIoLis/KVwiKS5jb25jYXQodGhpcy5uZXN0aW5nU3VmZml4KTtcbiAgICAgIHRoaXMubmVzdGluZ1JlZ2V4cCA9IG5ldyBSZWdFeHAobmVzdGluZ1JlZ2V4cFN0ciwgJ2cnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaW50ZXJwb2xhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW50ZXJwb2xhdGUoc3RyLCBkYXRhLCBsbmcsIG9wdGlvbnMpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBtYXRjaDtcbiAgICAgIHZhciB2YWx1ZTtcbiAgICAgIHZhciByZXBsYWNlcztcbiAgICAgIHZhciBkZWZhdWx0RGF0YSA9IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbiAmJiB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5kZWZhdWx0VmFyaWFibGVzIHx8IHt9O1xuXG4gICAgICBmdW5jdGlvbiByZWdleFNhZmUodmFsKSB7XG4gICAgICAgIHJldHVybiB2YWwucmVwbGFjZSgvXFwkL2csICckJCQkJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBoYW5kbGVGb3JtYXQgPSBmdW5jdGlvbiBoYW5kbGVGb3JtYXQoa2V5KSB7XG4gICAgICAgIGlmIChrZXkuaW5kZXhPZihfdGhpcy5mb3JtYXRTZXBhcmF0b3IpIDwgMCkge1xuICAgICAgICAgIHZhciBwYXRoID0gZ2V0UGF0aFdpdGhEZWZhdWx0cyhkYXRhLCBkZWZhdWx0RGF0YSwga2V5KTtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuYWx3YXlzRm9ybWF0ID8gX3RoaXMuZm9ybWF0KHBhdGgsIHVuZGVmaW5lZCwgbG5nLCBfb2JqZWN0U3ByZWFkJDMoX29iamVjdFNwcmVhZCQzKF9vYmplY3RTcHJlYWQkMyh7fSwgb3B0aW9ucyksIGRhdGEpLCB7fSwge1xuICAgICAgICAgICAgaW50ZXJwb2xhdGlvbmtleToga2V5XG4gICAgICAgICAgfSkpIDogcGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwID0ga2V5LnNwbGl0KF90aGlzLmZvcm1hdFNlcGFyYXRvcik7XG4gICAgICAgIHZhciBrID0gcC5zaGlmdCgpLnRyaW0oKTtcbiAgICAgICAgdmFyIGYgPSBwLmpvaW4oX3RoaXMuZm9ybWF0U2VwYXJhdG9yKS50cmltKCk7XG4gICAgICAgIHJldHVybiBfdGhpcy5mb3JtYXQoZ2V0UGF0aFdpdGhEZWZhdWx0cyhkYXRhLCBkZWZhdWx0RGF0YSwgayksIGYsIGxuZywgX29iamVjdFNwcmVhZCQzKF9vYmplY3RTcHJlYWQkMyhfb2JqZWN0U3ByZWFkJDMoe30sIG9wdGlvbnMpLCBkYXRhKSwge30sIHtcbiAgICAgICAgICBpbnRlcnBvbGF0aW9ua2V5OiBrXG4gICAgICAgIH0pKTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMucmVzZXRSZWdFeHAoKTtcbiAgICAgIHZhciBtaXNzaW5nSW50ZXJwb2xhdGlvbkhhbmRsZXIgPSBvcHRpb25zICYmIG9wdGlvbnMubWlzc2luZ0ludGVycG9sYXRpb25IYW5kbGVyIHx8IHRoaXMub3B0aW9ucy5taXNzaW5nSW50ZXJwb2xhdGlvbkhhbmRsZXI7XG4gICAgICB2YXIgc2tpcE9uVmFyaWFibGVzID0gb3B0aW9ucyAmJiBvcHRpb25zLmludGVycG9sYXRpb24gJiYgb3B0aW9ucy5pbnRlcnBvbGF0aW9uLnNraXBPblZhcmlhYmxlcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5pbnRlcnBvbGF0aW9uLnNraXBPblZhcmlhYmxlcyA6IHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLnNraXBPblZhcmlhYmxlcztcbiAgICAgIHZhciB0b2RvcyA9IFt7XG4gICAgICAgIHJlZ2V4OiB0aGlzLnJlZ2V4cFVuZXNjYXBlLFxuICAgICAgICBzYWZlVmFsdWU6IGZ1bmN0aW9uIHNhZmVWYWx1ZSh2YWwpIHtcbiAgICAgICAgICByZXR1cm4gcmVnZXhTYWZlKHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgcmVnZXg6IHRoaXMucmVnZXhwLFxuICAgICAgICBzYWZlVmFsdWU6IGZ1bmN0aW9uIHNhZmVWYWx1ZSh2YWwpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuZXNjYXBlVmFsdWUgPyByZWdleFNhZmUoX3RoaXMuZXNjYXBlKHZhbCkpIDogcmVnZXhTYWZlKHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH1dO1xuICAgICAgdG9kb3MuZm9yRWFjaChmdW5jdGlvbiAodG9kbykge1xuICAgICAgICByZXBsYWNlcyA9IDA7XG5cbiAgICAgICAgd2hpbGUgKG1hdGNoID0gdG9kby5yZWdleC5leGVjKHN0cikpIHtcbiAgICAgICAgICB2YXIgbWF0Y2hlZFZhciA9IG1hdGNoWzFdLnRyaW0oKTtcbiAgICAgICAgICB2YWx1ZSA9IGhhbmRsZUZvcm1hdChtYXRjaGVkVmFyKTtcblxuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1pc3NpbmdJbnRlcnBvbGF0aW9uSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICB2YXIgdGVtcCA9IG1pc3NpbmdJbnRlcnBvbGF0aW9uSGFuZGxlcihzdHIsIG1hdGNoLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgdmFsdWUgPSB0eXBlb2YgdGVtcCA9PT0gJ3N0cmluZycgPyB0ZW1wIDogJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShtYXRjaGVkVmFyKSkge1xuICAgICAgICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChza2lwT25WYXJpYWJsZXMpIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSBtYXRjaFswXTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfdGhpcy5sb2dnZXIud2FybihcIm1pc3NlZCB0byBwYXNzIGluIHZhcmlhYmxlIFwiLmNvbmNhdChtYXRjaGVkVmFyLCBcIiBmb3IgaW50ZXJwb2xhdGluZyBcIikuY29uY2F0KHN0cikpO1xuXG4gICAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnICYmICFfdGhpcy51c2VSYXdWYWx1ZVRvRXNjYXBlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG1ha2VTdHJpbmcodmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzYWZlVmFsdWUgPSB0b2RvLnNhZmVWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UobWF0Y2hbMF0sIHNhZmVWYWx1ZSk7XG5cbiAgICAgICAgICBpZiAoc2tpcE9uVmFyaWFibGVzKSB7XG4gICAgICAgICAgICB0b2RvLnJlZ2V4Lmxhc3RJbmRleCArPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICB0b2RvLnJlZ2V4Lmxhc3RJbmRleCAtPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvZG8ucmVnZXgubGFzdEluZGV4ID0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXBsYWNlcysrO1xuXG4gICAgICAgICAgaWYgKHJlcGxhY2VzID49IF90aGlzLm1heFJlcGxhY2VzKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibmVzdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZXN0KHN0ciwgZmMpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgICB2YXIgbWF0Y2g7XG4gICAgICB2YXIgdmFsdWU7XG5cbiAgICAgIHZhciBjbG9uZWRPcHRpb25zID0gX29iamVjdFNwcmVhZCQzKHt9LCBvcHRpb25zKTtcblxuICAgICAgY2xvbmVkT3B0aW9ucy5hcHBseVBvc3RQcm9jZXNzb3IgPSBmYWxzZTtcbiAgICAgIGRlbGV0ZSBjbG9uZWRPcHRpb25zLmRlZmF1bHRWYWx1ZTtcblxuICAgICAgZnVuY3Rpb24gaGFuZGxlSGFzT3B0aW9ucyhrZXksIGluaGVyaXRlZE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHNlcCA9IHRoaXMubmVzdGluZ09wdGlvbnNTZXBhcmF0b3I7XG4gICAgICAgIGlmIChrZXkuaW5kZXhPZihzZXApIDwgMCkgcmV0dXJuIGtleTtcbiAgICAgICAgdmFyIGMgPSBrZXkuc3BsaXQobmV3IFJlZ0V4cChcIlwiLmNvbmNhdChzZXAsIFwiWyBdKntcIikpKTtcbiAgICAgICAgdmFyIG9wdGlvbnNTdHJpbmcgPSBcIntcIi5jb25jYXQoY1sxXSk7XG4gICAgICAgIGtleSA9IGNbMF07XG4gICAgICAgIG9wdGlvbnNTdHJpbmcgPSB0aGlzLmludGVycG9sYXRlKG9wdGlvbnNTdHJpbmcsIGNsb25lZE9wdGlvbnMpO1xuICAgICAgICB2YXIgbWF0Y2hlZFNpbmdsZVF1b3RlcyA9IG9wdGlvbnNTdHJpbmcubWF0Y2goLycvZyk7XG4gICAgICAgIHZhciBtYXRjaGVkRG91YmxlUXVvdGVzID0gb3B0aW9uc1N0cmluZy5tYXRjaCgvXCIvZyk7XG5cbiAgICAgICAgaWYgKG1hdGNoZWRTaW5nbGVRdW90ZXMgJiYgbWF0Y2hlZFNpbmdsZVF1b3Rlcy5sZW5ndGggJSAyID09PSAwICYmICFtYXRjaGVkRG91YmxlUXVvdGVzIHx8IG1hdGNoZWREb3VibGVRdW90ZXMubGVuZ3RoICUgMiAhPT0gMCkge1xuICAgICAgICAgIG9wdGlvbnNTdHJpbmcgPSBvcHRpb25zU3RyaW5nLnJlcGxhY2UoLycvZywgJ1wiJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNsb25lZE9wdGlvbnMgPSBKU09OLnBhcnNlKG9wdGlvbnNTdHJpbmcpO1xuICAgICAgICAgIGlmIChpbmhlcml0ZWRPcHRpb25zKSBjbG9uZWRPcHRpb25zID0gX29iamVjdFNwcmVhZCQzKF9vYmplY3RTcHJlYWQkMyh7fSwgaW5oZXJpdGVkT3B0aW9ucyksIGNsb25lZE9wdGlvbnMpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhpcy5sb2dnZXIud2FybihcImZhaWxlZCBwYXJzaW5nIG9wdGlvbnMgc3RyaW5nIGluIG5lc3RpbmcgZm9yIGtleSBcIi5jb25jYXQoa2V5KSwgZSk7XG4gICAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGtleSkuY29uY2F0KHNlcCkuY29uY2F0KG9wdGlvbnNTdHJpbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIGNsb25lZE9wdGlvbnMuZGVmYXVsdFZhbHVlO1xuICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAobWF0Y2ggPSB0aGlzLm5lc3RpbmdSZWdleHAuZXhlYyhzdHIpKSB7XG4gICAgICAgIHZhciBmb3JtYXR0ZXJzID0gW107XG4gICAgICAgIHZhciBkb1JlZHVjZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChtYXRjaFswXS5pbmRleE9mKHRoaXMuZm9ybWF0U2VwYXJhdG9yKSAhPT0gLTEgJiYgIS97Lip9Ly50ZXN0KG1hdGNoWzFdKSkge1xuICAgICAgICAgIHZhciByID0gbWF0Y2hbMV0uc3BsaXQodGhpcy5mb3JtYXRTZXBhcmF0b3IpLm1hcChmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW0udHJpbSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIG1hdGNoWzFdID0gci5zaGlmdCgpO1xuICAgICAgICAgIGZvcm1hdHRlcnMgPSByO1xuICAgICAgICAgIGRvUmVkdWNlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gZmMoaGFuZGxlSGFzT3B0aW9ucy5jYWxsKHRoaXMsIG1hdGNoWzFdLnRyaW0oKSwgY2xvbmVkT3B0aW9ucyksIGNsb25lZE9wdGlvbnMpO1xuICAgICAgICBpZiAodmFsdWUgJiYgbWF0Y2hbMF0gPT09IHN0ciAmJiB0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSByZXR1cm4gdmFsdWU7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB2YWx1ZSA9IG1ha2VTdHJpbmcodmFsdWUpO1xuXG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuKFwibWlzc2VkIHRvIHJlc29sdmUgXCIuY29uY2F0KG1hdGNoWzFdLCBcIiBmb3IgbmVzdGluZyBcIikuY29uY2F0KHN0cikpO1xuICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9SZWR1Y2UpIHtcbiAgICAgICAgICB2YWx1ZSA9IGZvcm1hdHRlcnMucmVkdWNlKGZ1bmN0aW9uICh2LCBmKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLmZvcm1hdCh2LCBmLCBvcHRpb25zLmxuZywgX29iamVjdFNwcmVhZCQzKF9vYmplY3RTcHJlYWQkMyh7fSwgb3B0aW9ucyksIHt9LCB7XG4gICAgICAgICAgICAgIGludGVycG9sYXRpb25rZXk6IG1hdGNoWzFdLnRyaW0oKVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0sIHZhbHVlLnRyaW0oKSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShtYXRjaFswXSwgdmFsdWUpO1xuICAgICAgICB0aGlzLnJlZ2V4cC5sYXN0SW5kZXggPSAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJbnRlcnBvbGF0b3I7XG59KCk7XG5cbmZ1bmN0aW9uIG93bktleXMkNChvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgeyBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IH0ga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkNCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzJDQoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyQ0KE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBwYXJzZUZvcm1hdFN0cihmb3JtYXRTdHIpIHtcbiAgdmFyIGZvcm1hdE5hbWUgPSBmb3JtYXRTdHIudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gIHZhciBmb3JtYXRPcHRpb25zID0ge307XG5cbiAgaWYgKGZvcm1hdFN0ci5pbmRleE9mKCcoJykgPiAtMSkge1xuICAgIHZhciBwID0gZm9ybWF0U3RyLnNwbGl0KCcoJyk7XG4gICAgZm9ybWF0TmFtZSA9IHBbMF0udG9Mb3dlckNhc2UoKS50cmltKCk7XG4gICAgdmFyIG9wdFN0ciA9IHBbMV0uc3Vic3RyaW5nKDAsIHBbMV0ubGVuZ3RoIC0gMSk7XG5cbiAgICBpZiAoZm9ybWF0TmFtZSA9PT0gJ2N1cnJlbmN5JyAmJiBvcHRTdHIuaW5kZXhPZignOicpIDwgMCkge1xuICAgICAgaWYgKCFmb3JtYXRPcHRpb25zLmN1cnJlbmN5KSBmb3JtYXRPcHRpb25zLmN1cnJlbmN5ID0gb3B0U3RyLnRyaW0oKTtcbiAgICB9IGVsc2UgaWYgKGZvcm1hdE5hbWUgPT09ICdyZWxhdGl2ZXRpbWUnICYmIG9wdFN0ci5pbmRleE9mKCc6JykgPCAwKSB7XG4gICAgICBpZiAoIWZvcm1hdE9wdGlvbnMucmFuZ2UpIGZvcm1hdE9wdGlvbnMucmFuZ2UgPSBvcHRTdHIudHJpbSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgb3B0cyA9IG9wdFN0ci5zcGxpdCgnOycpO1xuICAgICAgb3B0cy5mb3JFYWNoKGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgaWYgKCFvcHQpIHJldHVybjtcblxuICAgICAgICB2YXIgX29wdCRzcGxpdCA9IG9wdC5zcGxpdCgnOicpLFxuICAgICAgICAgICAgX29wdCRzcGxpdDIgPSBfdG9BcnJheShfb3B0JHNwbGl0KSxcbiAgICAgICAgICAgIGtleSA9IF9vcHQkc3BsaXQyWzBdLFxuICAgICAgICAgICAgcmVzdCA9IF9vcHQkc3BsaXQyLnNsaWNlKDEpO1xuXG4gICAgICAgIHZhciB2YWwgPSByZXN0LmpvaW4oJzonKS50cmltKCkucmVwbGFjZSgvXicrfCcrJC9nLCAnJyk7XG4gICAgICAgIGlmICghZm9ybWF0T3B0aW9uc1trZXkudHJpbSgpXSkgZm9ybWF0T3B0aW9uc1trZXkudHJpbSgpXSA9IHZhbDtcbiAgICAgICAgaWYgKHZhbCA9PT0gJ2ZhbHNlJykgZm9ybWF0T3B0aW9uc1trZXkudHJpbSgpXSA9IGZhbHNlO1xuICAgICAgICBpZiAodmFsID09PSAndHJ1ZScpIGZvcm1hdE9wdGlvbnNba2V5LnRyaW0oKV0gPSB0cnVlO1xuICAgICAgICBpZiAoIWlzTmFOKHZhbCkpIGZvcm1hdE9wdGlvbnNba2V5LnRyaW0oKV0gPSBwYXJzZUludCh2YWwsIDEwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZm9ybWF0TmFtZTogZm9ybWF0TmFtZSxcbiAgICBmb3JtYXRPcHRpb25zOiBmb3JtYXRPcHRpb25zXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhY2hlZEZvcm1hdHRlcihmbikge1xuICB2YXIgY2FjaGUgPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZUZvcm1hdHRlcih2YWwsIGxuZywgb3B0aW9ucykge1xuICAgIHZhciBrZXkgPSBsbmcgKyBKU09OLnN0cmluZ2lmeShvcHRpb25zKTtcbiAgICB2YXIgZm9ybWF0dGVyID0gY2FjaGVba2V5XTtcblxuICAgIGlmICghZm9ybWF0dGVyKSB7XG4gICAgICBmb3JtYXR0ZXIgPSBmbihsbmcsIG9wdGlvbnMpO1xuICAgICAgY2FjaGVba2V5XSA9IGZvcm1hdHRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0dGVyKHZhbCk7XG4gIH07XG59XG5cbnZhciBGb3JtYXR0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEZvcm1hdHRlcigpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRm9ybWF0dGVyKTtcblxuICAgIHRoaXMubG9nZ2VyID0gYmFzZUxvZ2dlci5jcmVhdGUoJ2Zvcm1hdHRlcicpO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5mb3JtYXRzID0ge1xuICAgICAgbnVtYmVyOiBjcmVhdGVDYWNoZWRGb3JtYXR0ZXIoZnVuY3Rpb24gKGxuZywgb3B0aW9ucykge1xuICAgICAgICB2YXIgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxuZywgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQodmFsKTtcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICAgY3VycmVuY3k6IGNyZWF0ZUNhY2hlZEZvcm1hdHRlcihmdW5jdGlvbiAobG5nLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQobG5nLCBfb2JqZWN0U3ByZWFkJDQoX29iamVjdFNwcmVhZCQ0KHt9LCBvcHRpb25zKSwge30sIHtcbiAgICAgICAgICBzdHlsZTogJ2N1cnJlbmN5J1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQodmFsKTtcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICAgZGF0ZXRpbWU6IGNyZWF0ZUNhY2hlZEZvcm1hdHRlcihmdW5jdGlvbiAobG5nLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBmb3JtYXR0ZXIgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsbmcsIF9vYmplY3RTcHJlYWQkNCh7fSwgb3B0aW9ucykpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KHZhbCk7XG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIHJlbGF0aXZldGltZTogY3JlYXRlQ2FjaGVkRm9ybWF0dGVyKGZ1bmN0aW9uIChsbmcsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGZvcm1hdHRlciA9IG5ldyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdChsbmcsIF9vYmplY3RTcHJlYWQkNCh7fSwgb3B0aW9ucykpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KHZhbCwgb3B0aW9ucy5yYW5nZSB8fCAnZGF5Jyk7XG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIGxpc3Q6IGNyZWF0ZUNhY2hlZEZvcm1hdHRlcihmdW5jdGlvbiAobG5nLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBmb3JtYXR0ZXIgPSBuZXcgSW50bC5MaXN0Rm9ybWF0KGxuZywgX29iamVjdFNwcmVhZCQ0KHt9LCBvcHRpb25zKSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQodmFsKTtcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgfTtcbiAgICB0aGlzLmluaXQob3B0aW9ucyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRm9ybWF0dGVyLCBbe1xuICAgIGtleTogXCJpbml0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoc2VydmljZXMpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7XG4gICAgICAgIGludGVycG9sYXRpb246IHt9XG4gICAgICB9O1xuICAgICAgdmFyIGlPcHRzID0gb3B0aW9ucy5pbnRlcnBvbGF0aW9uO1xuICAgICAgdGhpcy5mb3JtYXRTZXBhcmF0b3IgPSBpT3B0cy5mb3JtYXRTZXBhcmF0b3IgPyBpT3B0cy5mb3JtYXRTZXBhcmF0b3IgOiBpT3B0cy5mb3JtYXRTZXBhcmF0b3IgfHwgJywnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKG5hbWUsIGZjKSB7XG4gICAgICB0aGlzLmZvcm1hdHNbbmFtZS50b0xvd2VyQ2FzZSgpLnRyaW0oKV0gPSBmYztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkQ2FjaGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZENhY2hlZChuYW1lLCBmYykge1xuICAgICAgdGhpcy5mb3JtYXRzW25hbWUudG9Mb3dlckNhc2UoKS50cmltKCldID0gY3JlYXRlQ2FjaGVkRm9ybWF0dGVyKGZjKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9ybWF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdCh2YWx1ZSwgX2Zvcm1hdCwgbG5nLCBvcHRpb25zKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgZm9ybWF0cyA9IF9mb3JtYXQuc3BsaXQodGhpcy5mb3JtYXRTZXBhcmF0b3IpO1xuXG4gICAgICB2YXIgcmVzdWx0ID0gZm9ybWF0cy5yZWR1Y2UoZnVuY3Rpb24gKG1lbSwgZikge1xuICAgICAgICB2YXIgX3BhcnNlRm9ybWF0U3RyID0gcGFyc2VGb3JtYXRTdHIoZiksXG4gICAgICAgICAgICBmb3JtYXROYW1lID0gX3BhcnNlRm9ybWF0U3RyLmZvcm1hdE5hbWUsXG4gICAgICAgICAgICBmb3JtYXRPcHRpb25zID0gX3BhcnNlRm9ybWF0U3RyLmZvcm1hdE9wdGlvbnM7XG5cbiAgICAgICAgaWYgKF90aGlzLmZvcm1hdHNbZm9ybWF0TmFtZV0pIHtcbiAgICAgICAgICB2YXIgZm9ybWF0dGVkID0gbWVtO1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciB2YWxPcHRpb25zID0gb3B0aW9ucyAmJiBvcHRpb25zLmZvcm1hdFBhcmFtcyAmJiBvcHRpb25zLmZvcm1hdFBhcmFtc1tvcHRpb25zLmludGVycG9sYXRpb25rZXldIHx8IHt9O1xuICAgICAgICAgICAgdmFyIGwgPSB2YWxPcHRpb25zLmxvY2FsZSB8fCB2YWxPcHRpb25zLmxuZyB8fCBvcHRpb25zLmxvY2FsZSB8fCBvcHRpb25zLmxuZyB8fCBsbmc7XG4gICAgICAgICAgICBmb3JtYXR0ZWQgPSBfdGhpcy5mb3JtYXRzW2Zvcm1hdE5hbWVdKG1lbSwgbCwgX29iamVjdFNwcmVhZCQ0KF9vYmplY3RTcHJlYWQkNChfb2JqZWN0U3ByZWFkJDQoe30sIGZvcm1hdE9wdGlvbnMpLCBvcHRpb25zKSwgdmFsT3B0aW9ucykpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBfdGhpcy5sb2dnZXIud2FybihlcnJvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZvcm1hdHRlZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5sb2dnZXIud2FybihcInRoZXJlIHdhcyBubyBmb3JtYXQgZnVuY3Rpb24gZm9yIFwiLmNvbmNhdChmb3JtYXROYW1lKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWVtO1xuICAgICAgfSwgdmFsdWUpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRm9ybWF0dGVyO1xufSgpO1xuXG5mdW5jdGlvbiBvd25LZXlzJDUob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDUodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQ1KE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkNShPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyJDIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMigpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMigpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIHJlbW92ZVBlbmRpbmcocSwgbmFtZSkge1xuICBpZiAocS5wZW5kaW5nW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWxldGUgcS5wZW5kaW5nW25hbWVdO1xuICAgIHEucGVuZGluZ0NvdW50LS07XG4gIH1cbn1cblxudmFyIENvbm5lY3RvciA9IGZ1bmN0aW9uIChfRXZlbnRFbWl0dGVyKSB7XG4gIF9pbmhlcml0cyhDb25uZWN0b3IsIF9FdmVudEVtaXR0ZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIkMihDb25uZWN0b3IpO1xuXG4gIGZ1bmN0aW9uIENvbm5lY3RvcihiYWNrZW5kLCBzdG9yZSwgc2VydmljZXMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29ubmVjdG9yKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcyk7XG5cbiAgICBpZiAoaXNJRTEwKSB7XG4gICAgICBFdmVudEVtaXR0ZXIuY2FsbChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgfVxuXG4gICAgX3RoaXMuYmFja2VuZCA9IGJhY2tlbmQ7XG4gICAgX3RoaXMuc3RvcmUgPSBzdG9yZTtcbiAgICBfdGhpcy5zZXJ2aWNlcyA9IHNlcnZpY2VzO1xuICAgIF90aGlzLmxhbmd1YWdlVXRpbHMgPSBzZXJ2aWNlcy5sYW5ndWFnZVV0aWxzO1xuICAgIF90aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIF90aGlzLmxvZ2dlciA9IGJhc2VMb2dnZXIuY3JlYXRlKCdiYWNrZW5kQ29ubmVjdG9yJyk7XG4gICAgX3RoaXMud2FpdGluZ1JlYWRzID0gW107XG4gICAgX3RoaXMubWF4UGFyYWxsZWxSZWFkcyA9IG9wdGlvbnMubWF4UGFyYWxsZWxSZWFkcyB8fCAxMDtcbiAgICBfdGhpcy5yZWFkaW5nQ2FsbHMgPSAwO1xuICAgIF90aGlzLm1heFJldHJpZXMgPSBvcHRpb25zLm1heFJldHJpZXMgPj0gMCA/IG9wdGlvbnMubWF4UmV0cmllcyA6IDU7XG4gICAgX3RoaXMucmV0cnlUaW1lb3V0ID0gb3B0aW9ucy5yZXRyeVRpbWVvdXQgPj0gMSA/IG9wdGlvbnMucmV0cnlUaW1lb3V0IDogMzUwO1xuICAgIF90aGlzLnN0YXRlID0ge307XG4gICAgX3RoaXMucXVldWUgPSBbXTtcblxuICAgIGlmIChfdGhpcy5iYWNrZW5kICYmIF90aGlzLmJhY2tlbmQuaW5pdCkge1xuICAgICAgX3RoaXMuYmFja2VuZC5pbml0KHNlcnZpY2VzLCBvcHRpb25zLmJhY2tlbmQsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDb25uZWN0b3IsIFt7XG4gICAga2V5OiBcInF1ZXVlTG9hZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBxdWV1ZUxvYWQobGFuZ3VhZ2VzLCBuYW1lc3BhY2VzLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciB0b0xvYWQgPSB7fTtcbiAgICAgIHZhciBwZW5kaW5nID0ge307XG4gICAgICB2YXIgdG9Mb2FkTGFuZ3VhZ2VzID0ge307XG4gICAgICB2YXIgdG9Mb2FkTmFtZXNwYWNlcyA9IHt9O1xuICAgICAgbGFuZ3VhZ2VzLmZvckVhY2goZnVuY3Rpb24gKGxuZykge1xuICAgICAgICB2YXIgaGFzQWxsTmFtZXNwYWNlcyA9IHRydWU7XG4gICAgICAgIG5hbWVzcGFjZXMuZm9yRWFjaChmdW5jdGlvbiAobnMpIHtcbiAgICAgICAgICB2YXIgbmFtZSA9IFwiXCIuY29uY2F0KGxuZywgXCJ8XCIpLmNvbmNhdChucyk7XG5cbiAgICAgICAgICBpZiAoIW9wdGlvbnMucmVsb2FkICYmIF90aGlzMi5zdG9yZS5oYXNSZXNvdXJjZUJ1bmRsZShsbmcsIG5zKSkge1xuICAgICAgICAgICAgX3RoaXMyLnN0YXRlW25hbWVdID0gMjtcbiAgICAgICAgICB9IGVsc2UgaWYgKF90aGlzMi5zdGF0ZVtuYW1lXSA8IDApIDsgZWxzZSBpZiAoX3RoaXMyLnN0YXRlW25hbWVdID09PSAxKSB7XG4gICAgICAgICAgICBpZiAocGVuZGluZ1tuYW1lXSA9PT0gdW5kZWZpbmVkKSBwZW5kaW5nW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMyLnN0YXRlW25hbWVdID0gMTtcbiAgICAgICAgICAgIGhhc0FsbE5hbWVzcGFjZXMgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChwZW5kaW5nW25hbWVdID09PSB1bmRlZmluZWQpIHBlbmRpbmdbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRvTG9hZFtuYW1lXSA9PT0gdW5kZWZpbmVkKSB0b0xvYWRbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRvTG9hZE5hbWVzcGFjZXNbbnNdID09PSB1bmRlZmluZWQpIHRvTG9hZE5hbWVzcGFjZXNbbnNdID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWhhc0FsbE5hbWVzcGFjZXMpIHRvTG9hZExhbmd1YWdlc1tsbmddID0gdHJ1ZTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoT2JqZWN0LmtleXModG9Mb2FkKS5sZW5ndGggfHwgT2JqZWN0LmtleXMocGVuZGluZykubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMucXVldWUucHVzaCh7XG4gICAgICAgICAgcGVuZGluZzogcGVuZGluZyxcbiAgICAgICAgICBwZW5kaW5nQ291bnQ6IE9iamVjdC5rZXlzKHBlbmRpbmcpLmxlbmd0aCxcbiAgICAgICAgICBsb2FkZWQ6IHt9LFxuICAgICAgICAgIGVycm9yczogW10sXG4gICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b0xvYWQ6IE9iamVjdC5rZXlzKHRvTG9hZCksXG4gICAgICAgIHBlbmRpbmc6IE9iamVjdC5rZXlzKHBlbmRpbmcpLFxuICAgICAgICB0b0xvYWRMYW5ndWFnZXM6IE9iamVjdC5rZXlzKHRvTG9hZExhbmd1YWdlcyksXG4gICAgICAgIHRvTG9hZE5hbWVzcGFjZXM6IE9iamVjdC5rZXlzKHRvTG9hZE5hbWVzcGFjZXMpXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2FkZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZGVkKG5hbWUsIGVyciwgZGF0YSkge1xuICAgICAgdmFyIHMgPSBuYW1lLnNwbGl0KCd8Jyk7XG4gICAgICB2YXIgbG5nID0gc1swXTtcbiAgICAgIHZhciBucyA9IHNbMV07XG4gICAgICBpZiAoZXJyKSB0aGlzLmVtaXQoJ2ZhaWxlZExvYWRpbmcnLCBsbmcsIG5zLCBlcnIpO1xuXG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICB0aGlzLnN0b3JlLmFkZFJlc291cmNlQnVuZGxlKGxuZywgbnMsIGRhdGEpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN0YXRlW25hbWVdID0gZXJyID8gLTEgOiAyO1xuICAgICAgdmFyIGxvYWRlZCA9IHt9O1xuICAgICAgdGhpcy5xdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uIChxKSB7XG4gICAgICAgIHB1c2hQYXRoKHEubG9hZGVkLCBbbG5nXSwgbnMpO1xuICAgICAgICByZW1vdmVQZW5kaW5nKHEsIG5hbWUpO1xuICAgICAgICBpZiAoZXJyKSBxLmVycm9ycy5wdXNoKGVycik7XG5cbiAgICAgICAgaWYgKHEucGVuZGluZ0NvdW50ID09PSAwICYmICFxLmRvbmUpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhxLmxvYWRlZCkuZm9yRWFjaChmdW5jdGlvbiAobCkge1xuICAgICAgICAgICAgaWYgKCFsb2FkZWRbbF0pIGxvYWRlZFtsXSA9IHt9O1xuICAgICAgICAgICAgdmFyIGxvYWRlZEtleXMgPSBxLmxvYWRlZFtsXTtcblxuICAgICAgICAgICAgaWYgKGxvYWRlZEtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGxvYWRlZEtleXMuZm9yRWFjaChmdW5jdGlvbiAobnMpIHtcbiAgICAgICAgICAgICAgICBpZiAobG9hZGVkW2xdW25zXSA9PT0gdW5kZWZpbmVkKSBsb2FkZWRbbF1bbnNdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcS5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIGlmIChxLmVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHEuY2FsbGJhY2socS5lcnJvcnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxLmNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZW1pdCgnbG9hZGVkJywgbG9hZGVkKTtcbiAgICAgIHRoaXMucXVldWUgPSB0aGlzLnF1ZXVlLmZpbHRlcihmdW5jdGlvbiAocSkge1xuICAgICAgICByZXR1cm4gIXEuZG9uZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWFkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlYWQobG5nLCBucywgZmNOYW1lKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHRyaWVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAwO1xuICAgICAgdmFyIHdhaXQgPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IHRoaXMucmV0cnlUaW1lb3V0O1xuICAgICAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgPyBhcmd1bWVudHNbNV0gOiB1bmRlZmluZWQ7XG4gICAgICBpZiAoIWxuZy5sZW5ndGgpIHJldHVybiBjYWxsYmFjayhudWxsLCB7fSk7XG5cbiAgICAgIGlmICh0aGlzLnJlYWRpbmdDYWxscyA+PSB0aGlzLm1heFBhcmFsbGVsUmVhZHMpIHtcbiAgICAgICAgdGhpcy53YWl0aW5nUmVhZHMucHVzaCh7XG4gICAgICAgICAgbG5nOiBsbmcsXG4gICAgICAgICAgbnM6IG5zLFxuICAgICAgICAgIGZjTmFtZTogZmNOYW1lLFxuICAgICAgICAgIHRyaWVkOiB0cmllZCxcbiAgICAgICAgICB3YWl0OiB3YWl0LFxuICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFja1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJlYWRpbmdDYWxscysrO1xuICAgICAgcmV0dXJuIHRoaXMuYmFja2VuZFtmY05hbWVdKGxuZywgbnMsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcbiAgICAgICAgX3RoaXMzLnJlYWRpbmdDYWxscy0tO1xuXG4gICAgICAgIGlmIChfdGhpczMud2FpdGluZ1JlYWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB2YXIgbmV4dCA9IF90aGlzMy53YWl0aW5nUmVhZHMuc2hpZnQoKTtcblxuICAgICAgICAgIF90aGlzMy5yZWFkKG5leHQubG5nLCBuZXh0Lm5zLCBuZXh0LmZjTmFtZSwgbmV4dC50cmllZCwgbmV4dC53YWl0LCBuZXh0LmNhbGxiYWNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnIgJiYgZGF0YSAmJiB0cmllZCA8IF90aGlzMy5tYXhSZXRyaWVzKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpczMucmVhZC5jYWxsKF90aGlzMywgbG5nLCBucywgZmNOYW1lLCB0cmllZCArIDEsIHdhaXQgKiAyLCBjYWxsYmFjayk7XG4gICAgICAgICAgfSwgd2FpdCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2soZXJyLCBkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwcmVwYXJlTG9hZGluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVwYXJlTG9hZGluZyhsYW5ndWFnZXMsIG5hbWVzcGFjZXMpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMyA/IGFyZ3VtZW50c1szXSA6IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKCF0aGlzLmJhY2tlbmQpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIud2FybignTm8gYmFja2VuZCB3YXMgYWRkZWQgdmlhIGkxOG5leHQudXNlLiBXaWxsIG5vdCBsb2FkIHJlc291cmNlcy4nKTtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGFuZ3VhZ2VzID09PSAnc3RyaW5nJykgbGFuZ3VhZ2VzID0gdGhpcy5sYW5ndWFnZVV0aWxzLnRvUmVzb2x2ZUhpZXJhcmNoeShsYW5ndWFnZXMpO1xuICAgICAgaWYgKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJykgbmFtZXNwYWNlcyA9IFtuYW1lc3BhY2VzXTtcbiAgICAgIHZhciB0b0xvYWQgPSB0aGlzLnF1ZXVlTG9hZChsYW5ndWFnZXMsIG5hbWVzcGFjZXMsIG9wdGlvbnMsIGNhbGxiYWNrKTtcblxuICAgICAgaWYgKCF0b0xvYWQudG9Mb2FkLmxlbmd0aCkge1xuICAgICAgICBpZiAoIXRvTG9hZC5wZW5kaW5nLmxlbmd0aCkgY2FsbGJhY2soKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHRvTG9hZC50b0xvYWQuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBfdGhpczQubG9hZE9uZShuYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2FkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWQobGFuZ3VhZ2VzLCBuYW1lc3BhY2VzLCBjYWxsYmFjaykge1xuICAgICAgdGhpcy5wcmVwYXJlTG9hZGluZyhsYW5ndWFnZXMsIG5hbWVzcGFjZXMsIHt9LCBjYWxsYmFjayk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbG9hZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWxvYWQobGFuZ3VhZ2VzLCBuYW1lc3BhY2VzLCBjYWxsYmFjaykge1xuICAgICAgdGhpcy5wcmVwYXJlTG9hZGluZyhsYW5ndWFnZXMsIG5hbWVzcGFjZXMsIHtcbiAgICAgICAgcmVsb2FkOiB0cnVlXG4gICAgICB9LCBjYWxsYmFjayk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvYWRPbmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZE9uZShuYW1lKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgdmFyIHByZWZpeCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJyc7XG4gICAgICB2YXIgcyA9IG5hbWUuc3BsaXQoJ3wnKTtcbiAgICAgIHZhciBsbmcgPSBzWzBdO1xuICAgICAgdmFyIG5zID0gc1sxXTtcbiAgICAgIHRoaXMucmVhZChsbmcsIG5zLCAncmVhZCcsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgIGlmIChlcnIpIF90aGlzNS5sb2dnZXIud2FybihcIlwiLmNvbmNhdChwcmVmaXgsIFwibG9hZGluZyBuYW1lc3BhY2UgXCIpLmNvbmNhdChucywgXCIgZm9yIGxhbmd1YWdlIFwiKS5jb25jYXQobG5nLCBcIiBmYWlsZWRcIiksIGVycik7XG4gICAgICAgIGlmICghZXJyICYmIGRhdGEpIF90aGlzNS5sb2dnZXIubG9nKFwiXCIuY29uY2F0KHByZWZpeCwgXCJsb2FkZWQgbmFtZXNwYWNlIFwiKS5jb25jYXQobnMsIFwiIGZvciBsYW5ndWFnZSBcIikuY29uY2F0KGxuZyksIGRhdGEpO1xuXG4gICAgICAgIF90aGlzNS5sb2FkZWQobmFtZSwgZXJyLCBkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzYXZlTWlzc2luZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzYXZlTWlzc2luZyhsYW5ndWFnZXMsIG5hbWVzcGFjZSwga2V5LCBmYWxsYmFja1ZhbHVlLCBpc1VwZGF0ZSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gNSAmJiBhcmd1bWVudHNbNV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s1XSA6IHt9O1xuXG4gICAgICBpZiAodGhpcy5zZXJ2aWNlcy51dGlscyAmJiB0aGlzLnNlcnZpY2VzLnV0aWxzLmhhc0xvYWRlZE5hbWVzcGFjZSAmJiAhdGhpcy5zZXJ2aWNlcy51dGlscy5oYXNMb2FkZWROYW1lc3BhY2UobmFtZXNwYWNlKSkge1xuICAgICAgICB0aGlzLmxvZ2dlci53YXJuKFwiZGlkIG5vdCBzYXZlIGtleSBcXFwiXCIuY29uY2F0KGtleSwgXCJcXFwiIGFzIHRoZSBuYW1lc3BhY2UgXFxcIlwiKS5jb25jYXQobmFtZXNwYWNlLCBcIlxcXCIgd2FzIG5vdCB5ZXQgbG9hZGVkXCIpLCAnVGhpcyBtZWFucyBzb21ldGhpbmcgSVMgV1JPTkcgaW4geW91ciBzZXR1cC4gWW91IGFjY2VzcyB0aGUgdCBmdW5jdGlvbiBiZWZvcmUgaTE4bmV4dC5pbml0IC8gaTE4bmV4dC5sb2FkTmFtZXNwYWNlIC8gaTE4bmV4dC5jaGFuZ2VMYW5ndWFnZSB3YXMgZG9uZS4gV2FpdCBmb3IgdGhlIGNhbGxiYWNrIG9yIFByb21pc2UgdG8gcmVzb2x2ZSBiZWZvcmUgYWNjZXNzaW5nIGl0ISEhJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkIHx8IGtleSA9PT0gbnVsbCB8fCBrZXkgPT09ICcnKSByZXR1cm47XG5cbiAgICAgIGlmICh0aGlzLmJhY2tlbmQgJiYgdGhpcy5iYWNrZW5kLmNyZWF0ZSkge1xuICAgICAgICB0aGlzLmJhY2tlbmQuY3JlYXRlKGxhbmd1YWdlcywgbmFtZXNwYWNlLCBrZXksIGZhbGxiYWNrVmFsdWUsIG51bGwsIF9vYmplY3RTcHJlYWQkNShfb2JqZWN0U3ByZWFkJDUoe30sIG9wdGlvbnMpLCB7fSwge1xuICAgICAgICAgIGlzVXBkYXRlOiBpc1VwZGF0ZVxuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghbGFuZ3VhZ2VzIHx8ICFsYW5ndWFnZXNbMF0pIHJldHVybjtcbiAgICAgIHRoaXMuc3RvcmUuYWRkUmVzb3VyY2UobGFuZ3VhZ2VzWzBdLCBuYW1lc3BhY2UsIGtleSwgZmFsbGJhY2tWYWx1ZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbm5lY3Rvcjtcbn0oRXZlbnRFbWl0dGVyKTtcblxuZnVuY3Rpb24gZ2V0KCkge1xuICByZXR1cm4ge1xuICAgIGRlYnVnOiBmYWxzZSxcbiAgICBpbml0SW1tZWRpYXRlOiB0cnVlLFxuICAgIG5zOiBbJ3RyYW5zbGF0aW9uJ10sXG4gICAgZGVmYXVsdE5TOiBbJ3RyYW5zbGF0aW9uJ10sXG4gICAgZmFsbGJhY2tMbmc6IFsnZGV2J10sXG4gICAgZmFsbGJhY2tOUzogZmFsc2UsXG4gICAgc3VwcG9ydGVkTG5nczogZmFsc2UsXG4gICAgbm9uRXhwbGljaXRTdXBwb3J0ZWRMbmdzOiBmYWxzZSxcbiAgICBsb2FkOiAnYWxsJyxcbiAgICBwcmVsb2FkOiBmYWxzZSxcbiAgICBzaW1wbGlmeVBsdXJhbFN1ZmZpeDogdHJ1ZSxcbiAgICBrZXlTZXBhcmF0b3I6ICcuJyxcbiAgICBuc1NlcGFyYXRvcjogJzonLFxuICAgIHBsdXJhbFNlcGFyYXRvcjogJ18nLFxuICAgIGNvbnRleHRTZXBhcmF0b3I6ICdfJyxcbiAgICBwYXJ0aWFsQnVuZGxlZExhbmd1YWdlczogZmFsc2UsXG4gICAgc2F2ZU1pc3Npbmc6IGZhbHNlLFxuICAgIHVwZGF0ZU1pc3Npbmc6IGZhbHNlLFxuICAgIHNhdmVNaXNzaW5nVG86ICdmYWxsYmFjaycsXG4gICAgc2F2ZU1pc3NpbmdQbHVyYWxzOiB0cnVlLFxuICAgIG1pc3NpbmdLZXlIYW5kbGVyOiBmYWxzZSxcbiAgICBtaXNzaW5nSW50ZXJwb2xhdGlvbkhhbmRsZXI6IGZhbHNlLFxuICAgIHBvc3RQcm9jZXNzOiBmYWxzZSxcbiAgICBwb3N0UHJvY2Vzc1Bhc3NSZXNvbHZlZDogZmFsc2UsXG4gICAgcmV0dXJuTnVsbDogdHJ1ZSxcbiAgICByZXR1cm5FbXB0eVN0cmluZzogdHJ1ZSxcbiAgICByZXR1cm5PYmplY3RzOiBmYWxzZSxcbiAgICBqb2luQXJyYXlzOiBmYWxzZSxcbiAgICByZXR1cm5lZE9iamVjdEhhbmRsZXI6IGZhbHNlLFxuICAgIHBhcnNlTWlzc2luZ0tleUhhbmRsZXI6IGZhbHNlLFxuICAgIGFwcGVuZE5hbWVzcGFjZVRvTWlzc2luZ0tleTogZmFsc2UsXG4gICAgYXBwZW5kTmFtZXNwYWNlVG9DSU1vZGU6IGZhbHNlLFxuICAgIG92ZXJsb2FkVHJhbnNsYXRpb25PcHRpb25IYW5kbGVyOiBmdW5jdGlvbiBoYW5kbGUoYXJncykge1xuICAgICAgdmFyIHJldCA9IHt9O1xuICAgICAgaWYgKF90eXBlb2YoYXJnc1sxXSkgPT09ICdvYmplY3QnKSByZXQgPSBhcmdzWzFdO1xuICAgICAgaWYgKHR5cGVvZiBhcmdzWzFdID09PSAnc3RyaW5nJykgcmV0LmRlZmF1bHRWYWx1ZSA9IGFyZ3NbMV07XG4gICAgICBpZiAodHlwZW9mIGFyZ3NbMl0gPT09ICdzdHJpbmcnKSByZXQudERlc2NyaXB0aW9uID0gYXJnc1syXTtcblxuICAgICAgaWYgKF90eXBlb2YoYXJnc1syXSkgPT09ICdvYmplY3QnIHx8IF90eXBlb2YoYXJnc1szXSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gYXJnc1szXSB8fCBhcmdzWzJdO1xuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICByZXRba2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcbiAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICBlc2NhcGVWYWx1ZTogdHJ1ZSxcbiAgICAgIGZvcm1hdDogZnVuY3Rpb24gZm9ybWF0KHZhbHVlLCBfZm9ybWF0LCBsbmcsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSxcbiAgICAgIHByZWZpeDogJ3t7JyxcbiAgICAgIHN1ZmZpeDogJ319JyxcbiAgICAgIGZvcm1hdFNlcGFyYXRvcjogJywnLFxuICAgICAgdW5lc2NhcGVQcmVmaXg6ICctJyxcbiAgICAgIG5lc3RpbmdQcmVmaXg6ICckdCgnLFxuICAgICAgbmVzdGluZ1N1ZmZpeDogJyknLFxuICAgICAgbmVzdGluZ09wdGlvbnNTZXBhcmF0b3I6ICcsJyxcbiAgICAgIG1heFJlcGxhY2VzOiAxMDAwLFxuICAgICAgc2tpcE9uVmFyaWFibGVzOiB0cnVlXG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gdHJhbnNmb3JtT3B0aW9ucyhvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5ucyA9PT0gJ3N0cmluZycpIG9wdGlvbnMubnMgPSBbb3B0aW9ucy5uc107XG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5mYWxsYmFja0xuZyA9PT0gJ3N0cmluZycpIG9wdGlvbnMuZmFsbGJhY2tMbmcgPSBbb3B0aW9ucy5mYWxsYmFja0xuZ107XG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5mYWxsYmFja05TID09PSAnc3RyaW5nJykgb3B0aW9ucy5mYWxsYmFja05TID0gW29wdGlvbnMuZmFsbGJhY2tOU107XG5cbiAgaWYgKG9wdGlvbnMuc3VwcG9ydGVkTG5ncyAmJiBvcHRpb25zLnN1cHBvcnRlZExuZ3MuaW5kZXhPZignY2ltb2RlJykgPCAwKSB7XG4gICAgb3B0aW9ucy5zdXBwb3J0ZWRMbmdzID0gb3B0aW9ucy5zdXBwb3J0ZWRMbmdzLmNvbmNhdChbJ2NpbW9kZSddKTtcbiAgfVxuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzJDYob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDYodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQ2KE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkNihPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyJDMoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMygpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMygpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiBiaW5kTWVtYmVyRnVuY3Rpb25zKGluc3QpIHtcbiAgdmFyIG1lbXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPYmplY3QuZ2V0UHJvdG90eXBlT2YoaW5zdCkpO1xuICBtZW1zLmZvckVhY2goZnVuY3Rpb24gKG1lbSkge1xuICAgIGlmICh0eXBlb2YgaW5zdFttZW1dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpbnN0W21lbV0gPSBpbnN0W21lbV0uYmluZChpbnN0KTtcbiAgICB9XG4gIH0pO1xufVxuXG52YXIgSTE4biA9IGZ1bmN0aW9uIChfRXZlbnRFbWl0dGVyKSB7XG4gIF9pbmhlcml0cyhJMThuLCBfRXZlbnRFbWl0dGVyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyJDMoSTE4bik7XG5cbiAgZnVuY3Rpb24gSTE4bigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSTE4bik7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuXG4gICAgaWYgKGlzSUUxMCkge1xuICAgICAgRXZlbnRFbWl0dGVyLmNhbGwoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIH1cblxuICAgIF90aGlzLm9wdGlvbnMgPSB0cmFuc2Zvcm1PcHRpb25zKG9wdGlvbnMpO1xuICAgIF90aGlzLnNlcnZpY2VzID0ge307XG4gICAgX3RoaXMubG9nZ2VyID0gYmFzZUxvZ2dlcjtcbiAgICBfdGhpcy5tb2R1bGVzID0ge1xuICAgICAgZXh0ZXJuYWw6IFtdXG4gICAgfTtcbiAgICBiaW5kTWVtYmVyRnVuY3Rpb25zKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcblxuICAgIGlmIChjYWxsYmFjayAmJiAhX3RoaXMuaXNJbml0aWFsaXplZCAmJiAhb3B0aW9ucy5pc0Nsb25lKSB7XG4gICAgICBpZiAoIV90aGlzLm9wdGlvbnMuaW5pdEltbWVkaWF0ZSkge1xuICAgICAgICBfdGhpcy5pbml0KG9wdGlvbnMsIGNhbGxiYWNrKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICAgIH1cblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmluaXQob3B0aW9ucywgY2FsbGJhY2spO1xuICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEkxOG4sIFt7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9wdGlvbnMuZGVmYXVsdE5TICYmIG9wdGlvbnMuZGVmYXVsdE5TICE9PSBmYWxzZSAmJiBvcHRpb25zLm5zKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBvcHRpb25zLmRlZmF1bHROUyA9IG9wdGlvbnMubnM7XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5ucy5pbmRleE9mKCd0cmFuc2xhdGlvbicpIDwgMCkge1xuICAgICAgICAgIG9wdGlvbnMuZGVmYXVsdE5TID0gb3B0aW9ucy5uc1swXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgZGVmT3B0cyA9IGdldCgpO1xuICAgICAgdGhpcy5vcHRpb25zID0gX29iamVjdFNwcmVhZCQ2KF9vYmplY3RTcHJlYWQkNihfb2JqZWN0U3ByZWFkJDYoe30sIGRlZk9wdHMpLCB0aGlzLm9wdGlvbnMpLCB0cmFuc2Zvcm1PcHRpb25zKG9wdGlvbnMpKTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb21wYXRpYmlsaXR5QVBJICE9PSAndjEnKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uID0gX29iamVjdFNwcmVhZCQ2KF9vYmplY3RTcHJlYWQkNih7fSwgZGVmT3B0cy5pbnRlcnBvbGF0aW9uKSwgdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5rZXlTZXBhcmF0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMudXNlckRlZmluZWRLZXlTZXBhcmF0b3IgPSBvcHRpb25zLmtleVNlcGFyYXRvcjtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMubnNTZXBhcmF0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMudXNlckRlZmluZWROc1NlcGFyYXRvciA9IG9wdGlvbnMubnNTZXBhcmF0b3I7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZUNsYXNzT25EZW1hbmQoQ2xhc3NPck9iamVjdCkge1xuICAgICAgICBpZiAoIUNsYXNzT3JPYmplY3QpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAodHlwZW9mIENsYXNzT3JPYmplY3QgPT09ICdmdW5jdGlvbicpIHJldHVybiBuZXcgQ2xhc3NPck9iamVjdCgpO1xuICAgICAgICByZXR1cm4gQ2xhc3NPck9iamVjdDtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuaXNDbG9uZSkge1xuICAgICAgICBpZiAodGhpcy5tb2R1bGVzLmxvZ2dlcikge1xuICAgICAgICAgIGJhc2VMb2dnZXIuaW5pdChjcmVhdGVDbGFzc09uRGVtYW5kKHRoaXMubW9kdWxlcy5sb2dnZXIpLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJhc2VMb2dnZXIuaW5pdChudWxsLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZvcm1hdHRlcjtcblxuICAgICAgICBpZiAodGhpcy5tb2R1bGVzLmZvcm1hdHRlcikge1xuICAgICAgICAgIGZvcm1hdHRlciA9IHRoaXMubW9kdWxlcy5mb3JtYXR0ZXI7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIEludGwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgZm9ybWF0dGVyID0gRm9ybWF0dGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGx1ID0gbmV3IExhbmd1YWdlVXRpbCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICB0aGlzLnN0b3JlID0gbmV3IFJlc291cmNlU3RvcmUodGhpcy5vcHRpb25zLnJlc291cmNlcywgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgdmFyIHMgPSB0aGlzLnNlcnZpY2VzO1xuICAgICAgICBzLmxvZ2dlciA9IGJhc2VMb2dnZXI7XG4gICAgICAgIHMucmVzb3VyY2VTdG9yZSA9IHRoaXMuc3RvcmU7XG4gICAgICAgIHMubGFuZ3VhZ2VVdGlscyA9IGx1O1xuICAgICAgICBzLnBsdXJhbFJlc29sdmVyID0gbmV3IFBsdXJhbFJlc29sdmVyKGx1LCB7XG4gICAgICAgICAgcHJlcGVuZDogdGhpcy5vcHRpb25zLnBsdXJhbFNlcGFyYXRvcixcbiAgICAgICAgICBjb21wYXRpYmlsaXR5SlNPTjogdGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlKU09OLFxuICAgICAgICAgIHNpbXBsaWZ5UGx1cmFsU3VmZml4OiB0aGlzLm9wdGlvbnMuc2ltcGxpZnlQbHVyYWxTdWZmaXhcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZvcm1hdHRlciAmJiAoIXRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLmZvcm1hdCB8fCB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5mb3JtYXQgPT09IGRlZk9wdHMuaW50ZXJwb2xhdGlvbi5mb3JtYXQpKSB7XG4gICAgICAgICAgcy5mb3JtYXR0ZXIgPSBjcmVhdGVDbGFzc09uRGVtYW5kKGZvcm1hdHRlcik7XG4gICAgICAgICAgcy5mb3JtYXR0ZXIuaW5pdChzLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLmZvcm1hdCA9IHMuZm9ybWF0dGVyLmZvcm1hdC5iaW5kKHMuZm9ybWF0dGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHMuaW50ZXJwb2xhdG9yID0gbmV3IEludGVycG9sYXRvcih0aGlzLm9wdGlvbnMpO1xuICAgICAgICBzLnV0aWxzID0ge1xuICAgICAgICAgIGhhc0xvYWRlZE5hbWVzcGFjZTogdGhpcy5oYXNMb2FkZWROYW1lc3BhY2UuYmluZCh0aGlzKVxuICAgICAgICB9O1xuICAgICAgICBzLmJhY2tlbmRDb25uZWN0b3IgPSBuZXcgQ29ubmVjdG9yKGNyZWF0ZUNsYXNzT25EZW1hbmQodGhpcy5tb2R1bGVzLmJhY2tlbmQpLCBzLnJlc291cmNlU3RvcmUsIHMsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHMuYmFja2VuZENvbm5lY3Rvci5vbignKicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzMi5lbWl0LmFwcGx5KF90aGlzMiwgW2V2ZW50XS5jb25jYXQoYXJncykpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5tb2R1bGVzLmxhbmd1YWdlRGV0ZWN0b3IpIHtcbiAgICAgICAgICBzLmxhbmd1YWdlRGV0ZWN0b3IgPSBjcmVhdGVDbGFzc09uRGVtYW5kKHRoaXMubW9kdWxlcy5sYW5ndWFnZURldGVjdG9yKTtcbiAgICAgICAgICBzLmxhbmd1YWdlRGV0ZWN0b3IuaW5pdChzLCB0aGlzLm9wdGlvbnMuZGV0ZWN0aW9uLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubW9kdWxlcy5pMThuRm9ybWF0KSB7XG4gICAgICAgICAgcy5pMThuRm9ybWF0ID0gY3JlYXRlQ2xhc3NPbkRlbWFuZCh0aGlzLm1vZHVsZXMuaTE4bkZvcm1hdCk7XG4gICAgICAgICAgaWYgKHMuaTE4bkZvcm1hdC5pbml0KSBzLmkxOG5Gb3JtYXQuaW5pdCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJhbnNsYXRvciA9IG5ldyBUcmFuc2xhdG9yKHRoaXMuc2VydmljZXMsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHRoaXMudHJhbnNsYXRvci5vbignKicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzMi5lbWl0LmFwcGx5KF90aGlzMiwgW2V2ZW50XS5jb25jYXQoYXJncykpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tb2R1bGVzLmV4dGVybmFsLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICBpZiAobS5pbml0KSBtLmluaXQoX3RoaXMyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZm9ybWF0ID0gdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZm9ybWF0O1xuICAgICAgaWYgKCFjYWxsYmFjaykgY2FsbGJhY2sgPSBub29wO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmZhbGxiYWNrTG5nICYmICF0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IgJiYgIXRoaXMub3B0aW9ucy5sbmcpIHtcbiAgICAgICAgdmFyIGNvZGVzID0gdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZVV0aWxzLmdldEZhbGxiYWNrQ29kZXModGhpcy5vcHRpb25zLmZhbGxiYWNrTG5nKTtcbiAgICAgICAgaWYgKGNvZGVzLmxlbmd0aCA+IDAgJiYgY29kZXNbMF0gIT09ICdkZXYnKSB0aGlzLm9wdGlvbnMubG5nID0gY29kZXNbMF07XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yICYmICF0aGlzLm9wdGlvbnMubG5nKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLndhcm4oJ2luaXQ6IG5vIGxhbmd1YWdlRGV0ZWN0b3IgaXMgdXNlZCBhbmQgbm8gbG5nIGlzIGRlZmluZWQnKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0b3JlQXBpID0gWydnZXRSZXNvdXJjZScsICdoYXNSZXNvdXJjZUJ1bmRsZScsICdnZXRSZXNvdXJjZUJ1bmRsZScsICdnZXREYXRhQnlMYW5ndWFnZSddO1xuICAgICAgc3RvcmVBcGkuZm9yRWFjaChmdW5jdGlvbiAoZmNOYW1lKSB7XG4gICAgICAgIF90aGlzMltmY05hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBfdGhpczIkc3RvcmU7XG5cbiAgICAgICAgICByZXR1cm4gKF90aGlzMiRzdG9yZSA9IF90aGlzMi5zdG9yZSlbZmNOYW1lXS5hcHBseShfdGhpczIkc3RvcmUsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIHZhciBzdG9yZUFwaUNoYWluZWQgPSBbJ2FkZFJlc291cmNlJywgJ2FkZFJlc291cmNlcycsICdhZGRSZXNvdXJjZUJ1bmRsZScsICdyZW1vdmVSZXNvdXJjZUJ1bmRsZSddO1xuICAgICAgc3RvcmVBcGlDaGFpbmVkLmZvckVhY2goZnVuY3Rpb24gKGZjTmFtZSkge1xuICAgICAgICBfdGhpczJbZmNOYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgX3RoaXMyJHN0b3JlMjtcblxuICAgICAgICAgIChfdGhpczIkc3RvcmUyID0gX3RoaXMyLnN0b3JlKVtmY05hbWVdLmFwcGx5KF90aGlzMiRzdG9yZTIsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICByZXR1cm4gX3RoaXMyO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICB2YXIgZGVmZXJyZWQgPSBkZWZlcigpO1xuXG4gICAgICB2YXIgbG9hZCA9IGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgICAgIHZhciBmaW5pc2ggPSBmdW5jdGlvbiBmaW5pc2goZXJyLCB0KSB7XG4gICAgICAgICAgaWYgKF90aGlzMi5pc0luaXRpYWxpemVkICYmICFfdGhpczIuaW5pdGlhbGl6ZWRTdG9yZU9uY2UpIF90aGlzMi5sb2dnZXIud2FybignaW5pdDogaTE4bmV4dCBpcyBhbHJlYWR5IGluaXRpYWxpemVkLiBZb3Ugc2hvdWxkIGNhbGwgaW5pdCBqdXN0IG9uY2UhJyk7XG4gICAgICAgICAgX3RoaXMyLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgIGlmICghX3RoaXMyLm9wdGlvbnMuaXNDbG9uZSkgX3RoaXMyLmxvZ2dlci5sb2coJ2luaXRpYWxpemVkJywgX3RoaXMyLm9wdGlvbnMpO1xuXG4gICAgICAgICAgX3RoaXMyLmVtaXQoJ2luaXRpYWxpemVkJywgX3RoaXMyLm9wdGlvbnMpO1xuXG4gICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh0KTtcbiAgICAgICAgICBjYWxsYmFjayhlcnIsIHQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChfdGhpczIubGFuZ3VhZ2VzICYmIF90aGlzMi5vcHRpb25zLmNvbXBhdGliaWxpdHlBUEkgIT09ICd2MScgJiYgIV90aGlzMi5pc0luaXRpYWxpemVkKSByZXR1cm4gZmluaXNoKG51bGwsIF90aGlzMi50LmJpbmQoX3RoaXMyKSk7XG5cbiAgICAgICAgX3RoaXMyLmNoYW5nZUxhbmd1YWdlKF90aGlzMi5vcHRpb25zLmxuZywgZmluaXNoKTtcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVzb3VyY2VzIHx8ICF0aGlzLm9wdGlvbnMuaW5pdEltbWVkaWF0ZSkge1xuICAgICAgICBsb2FkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KGxvYWQsIDApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVmZXJyZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvYWRSZXNvdXJjZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZFJlc291cmNlcyhsYW5ndWFnZSkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbm9vcDtcbiAgICAgIHZhciB1c2VkQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgIHZhciB1c2VkTG5nID0gdHlwZW9mIGxhbmd1YWdlID09PSAnc3RyaW5nJyA/IGxhbmd1YWdlIDogdGhpcy5sYW5ndWFnZTtcbiAgICAgIGlmICh0eXBlb2YgbGFuZ3VhZ2UgPT09ICdmdW5jdGlvbicpIHVzZWRDYWxsYmFjayA9IGxhbmd1YWdlO1xuXG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5yZXNvdXJjZXMgfHwgdGhpcy5vcHRpb25zLnBhcnRpYWxCdW5kbGVkTGFuZ3VhZ2VzKSB7XG4gICAgICAgIGlmICh1c2VkTG5nICYmIHVzZWRMbmcudG9Mb3dlckNhc2UoKSA9PT0gJ2NpbW9kZScpIHJldHVybiB1c2VkQ2FsbGJhY2soKTtcbiAgICAgICAgdmFyIHRvTG9hZCA9IFtdO1xuXG4gICAgICAgIHZhciBhcHBlbmQgPSBmdW5jdGlvbiBhcHBlbmQobG5nKSB7XG4gICAgICAgICAgaWYgKCFsbmcpIHJldHVybjtcblxuICAgICAgICAgIHZhciBsbmdzID0gX3RoaXMzLnNlcnZpY2VzLmxhbmd1YWdlVXRpbHMudG9SZXNvbHZlSGllcmFyY2h5KGxuZyk7XG5cbiAgICAgICAgICBsbmdzLmZvckVhY2goZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgICAgIGlmICh0b0xvYWQuaW5kZXhPZihsKSA8IDApIHRvTG9hZC5wdXNoKGwpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghdXNlZExuZykge1xuICAgICAgICAgIHZhciBmYWxsYmFja3MgPSB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlVXRpbHMuZ2V0RmFsbGJhY2tDb2Rlcyh0aGlzLm9wdGlvbnMuZmFsbGJhY2tMbmcpO1xuICAgICAgICAgIGZhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgICAgICByZXR1cm4gYXBwZW5kKGwpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFwcGVuZCh1c2VkTG5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJlbG9hZCkge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5wcmVsb2FkLmZvckVhY2goZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgICAgIHJldHVybiBhcHBlbmQobCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlcnZpY2VzLmJhY2tlbmRDb25uZWN0b3IubG9hZCh0b0xvYWQsIHRoaXMub3B0aW9ucy5ucywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBpZiAoIWUgJiYgIV90aGlzMy5yZXNvbHZlZExhbmd1YWdlICYmIF90aGlzMy5sYW5ndWFnZSkgX3RoaXMzLnNldFJlc29sdmVkTGFuZ3VhZ2UoX3RoaXMzLmxhbmd1YWdlKTtcbiAgICAgICAgICB1c2VkQ2FsbGJhY2soZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXNlZENhbGxiYWNrKG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWxvYWRSZXNvdXJjZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVsb2FkUmVzb3VyY2VzKGxuZ3MsIG5zLCBjYWxsYmFjaykge1xuICAgICAgdmFyIGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICAgIGlmICghbG5ncykgbG5ncyA9IHRoaXMubGFuZ3VhZ2VzO1xuICAgICAgaWYgKCFucykgbnMgPSB0aGlzLm9wdGlvbnMubnM7XG4gICAgICBpZiAoIWNhbGxiYWNrKSBjYWxsYmFjayA9IG5vb3A7XG4gICAgICB0aGlzLnNlcnZpY2VzLmJhY2tlbmRDb25uZWN0b3IucmVsb2FkKGxuZ3MsIG5zLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGRlZmVycmVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1c2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXNlKG1vZHVsZSkge1xuICAgICAgaWYgKCFtb2R1bGUpIHRocm93IG5ldyBFcnJvcignWW91IGFyZSBwYXNzaW5nIGFuIHVuZGVmaW5lZCBtb2R1bGUhIFBsZWFzZSBjaGVjayB0aGUgb2JqZWN0IHlvdSBhcmUgcGFzc2luZyB0byBpMThuZXh0LnVzZSgpJyk7XG4gICAgICBpZiAoIW1vZHVsZS50eXBlKSB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBhcmUgcGFzc2luZyBhIHdyb25nIG1vZHVsZSEgUGxlYXNlIGNoZWNrIHRoZSBvYmplY3QgeW91IGFyZSBwYXNzaW5nIHRvIGkxOG5leHQudXNlKCknKTtcblxuICAgICAgaWYgKG1vZHVsZS50eXBlID09PSAnYmFja2VuZCcpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVzLmJhY2tlbmQgPSBtb2R1bGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtb2R1bGUudHlwZSA9PT0gJ2xvZ2dlcicgfHwgbW9kdWxlLmxvZyAmJiBtb2R1bGUud2FybiAmJiBtb2R1bGUuZXJyb3IpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVzLmxvZ2dlciA9IG1vZHVsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1vZHVsZS50eXBlID09PSAnbGFuZ3VhZ2VEZXRlY3RvcicpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVzLmxhbmd1YWdlRGV0ZWN0b3IgPSBtb2R1bGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtb2R1bGUudHlwZSA9PT0gJ2kxOG5Gb3JtYXQnKSB7XG4gICAgICAgIHRoaXMubW9kdWxlcy5pMThuRm9ybWF0ID0gbW9kdWxlO1xuICAgICAgfVxuXG4gICAgICBpZiAobW9kdWxlLnR5cGUgPT09ICdwb3N0UHJvY2Vzc29yJykge1xuICAgICAgICBwb3N0UHJvY2Vzc29yLmFkZFBvc3RQcm9jZXNzb3IobW9kdWxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1vZHVsZS50eXBlID09PSAnZm9ybWF0dGVyJykge1xuICAgICAgICB0aGlzLm1vZHVsZXMuZm9ybWF0dGVyID0gbW9kdWxlO1xuICAgICAgfVxuXG4gICAgICBpZiAobW9kdWxlLnR5cGUgPT09ICczcmRQYXJ0eScpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVzLmV4dGVybmFsLnB1c2gobW9kdWxlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFJlc29sdmVkTGFuZ3VhZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UmVzb2x2ZWRMYW5ndWFnZShsKSB7XG4gICAgICBpZiAoIWwgfHwgIXRoaXMubGFuZ3VhZ2VzKSByZXR1cm47XG4gICAgICBpZiAoWydjaW1vZGUnLCAnZGV2J10uaW5kZXhPZihsKSA+IC0xKSByZXR1cm47XG5cbiAgICAgIGZvciAodmFyIGxpID0gMDsgbGkgPCB0aGlzLmxhbmd1YWdlcy5sZW5ndGg7IGxpKyspIHtcbiAgICAgICAgdmFyIGxuZ0luTG5ncyA9IHRoaXMubGFuZ3VhZ2VzW2xpXTtcbiAgICAgICAgaWYgKFsnY2ltb2RlJywgJ2RldiddLmluZGV4T2YobG5nSW5MbmdzKSA+IC0xKSBjb250aW51ZTtcblxuICAgICAgICBpZiAodGhpcy5zdG9yZS5oYXNMYW5ndWFnZVNvbWVUcmFuc2xhdGlvbnMobG5nSW5MbmdzKSkge1xuICAgICAgICAgIHRoaXMucmVzb2x2ZWRMYW5ndWFnZSA9IGxuZ0luTG5ncztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjaGFuZ2VMYW5ndWFnZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjaGFuZ2VMYW5ndWFnZShsbmcsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdGhpcy5pc0xhbmd1YWdlQ2hhbmdpbmdUbyA9IGxuZztcbiAgICAgIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgICB0aGlzLmVtaXQoJ2xhbmd1YWdlQ2hhbmdpbmcnLCBsbmcpO1xuXG4gICAgICB2YXIgc2V0TG5nUHJvcHMgPSBmdW5jdGlvbiBzZXRMbmdQcm9wcyhsKSB7XG4gICAgICAgIF90aGlzNC5sYW5ndWFnZSA9IGw7XG4gICAgICAgIF90aGlzNC5sYW5ndWFnZXMgPSBfdGhpczQuc2VydmljZXMubGFuZ3VhZ2VVdGlscy50b1Jlc29sdmVIaWVyYXJjaHkobCk7XG4gICAgICAgIF90aGlzNC5yZXNvbHZlZExhbmd1YWdlID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIF90aGlzNC5zZXRSZXNvbHZlZExhbmd1YWdlKGwpO1xuICAgICAgfTtcblxuICAgICAgdmFyIGRvbmUgPSBmdW5jdGlvbiBkb25lKGVyciwgbCkge1xuICAgICAgICBpZiAobCkge1xuICAgICAgICAgIHNldExuZ1Byb3BzKGwpO1xuXG4gICAgICAgICAgX3RoaXM0LnRyYW5zbGF0b3IuY2hhbmdlTGFuZ3VhZ2UobCk7XG5cbiAgICAgICAgICBfdGhpczQuaXNMYW5ndWFnZUNoYW5naW5nVG8gPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICBfdGhpczQuZW1pdCgnbGFuZ3VhZ2VDaGFuZ2VkJywgbCk7XG5cbiAgICAgICAgICBfdGhpczQubG9nZ2VyLmxvZygnbGFuZ3VhZ2VDaGFuZ2VkJywgbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXM0LmlzTGFuZ3VhZ2VDaGFuZ2luZ1RvID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC50LmFwcGx5KF90aGlzNCwgYXJndW1lbnRzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC50LmFwcGx5KF90aGlzNCwgYXJndW1lbnRzKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgc2V0TG5nID0gZnVuY3Rpb24gc2V0TG5nKGxuZ3MpIHtcbiAgICAgICAgaWYgKCFsbmcgJiYgIWxuZ3MgJiYgX3RoaXM0LnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IpIGxuZ3MgPSBbXTtcbiAgICAgICAgdmFyIGwgPSB0eXBlb2YgbG5ncyA9PT0gJ3N0cmluZycgPyBsbmdzIDogX3RoaXM0LnNlcnZpY2VzLmxhbmd1YWdlVXRpbHMuZ2V0QmVzdE1hdGNoRnJvbUNvZGVzKGxuZ3MpO1xuXG4gICAgICAgIGlmIChsKSB7XG4gICAgICAgICAgaWYgKCFfdGhpczQubGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIHNldExuZ1Byb3BzKGwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghX3RoaXM0LnRyYW5zbGF0b3IubGFuZ3VhZ2UpIF90aGlzNC50cmFuc2xhdG9yLmNoYW5nZUxhbmd1YWdlKGwpO1xuICAgICAgICAgIGlmIChfdGhpczQuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3RvcikgX3RoaXM0LnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IuY2FjaGVVc2VyTGFuZ3VhZ2UobCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczQubG9hZFJlc291cmNlcyhsLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgZG9uZShlcnIsIGwpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGlmICghbG5nICYmIHRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3RvciAmJiAhdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yLmFzeW5jKSB7XG4gICAgICAgIHNldExuZyh0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IuZGV0ZWN0KCkpO1xuICAgICAgfSBlbHNlIGlmICghbG5nICYmIHRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3RvciAmJiB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IuYXN5bmMpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yLmRldGVjdChzZXRMbmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0TG5nKGxuZyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZWZlcnJlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Rml4ZWRUXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZpeGVkVChsbmcsIG5zLCBrZXlQcmVmaXgpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICB2YXIgZml4ZWRUID0gZnVuY3Rpb24gZml4ZWRUKGtleSwgb3B0cykge1xuICAgICAgICB2YXIgb3B0aW9ucztcblxuICAgICAgICBpZiAoX3R5cGVvZihvcHRzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbjMgPiAyID8gX2xlbjMgLSAyIDogMCksIF9rZXkzID0gMjsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICAgICAgcmVzdFtfa2V5MyAtIDJdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvcHRpb25zID0gX3RoaXM1Lm9wdGlvbnMub3ZlcmxvYWRUcmFuc2xhdGlvbk9wdGlvbkhhbmRsZXIoW2tleSwgb3B0c10uY29uY2F0KHJlc3QpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcHRpb25zID0gX29iamVjdFNwcmVhZCQ2KHt9LCBvcHRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMubG5nID0gb3B0aW9ucy5sbmcgfHwgZml4ZWRULmxuZztcbiAgICAgICAgb3B0aW9ucy5sbmdzID0gb3B0aW9ucy5sbmdzIHx8IGZpeGVkVC5sbmdzO1xuICAgICAgICBvcHRpb25zLm5zID0gb3B0aW9ucy5ucyB8fCBmaXhlZFQubnM7XG4gICAgICAgIG9wdGlvbnMua2V5UHJlZml4ID0gb3B0aW9ucy5rZXlQcmVmaXggfHwga2V5UHJlZml4IHx8IGZpeGVkVC5rZXlQcmVmaXg7XG4gICAgICAgIHZhciBrZXlTZXBhcmF0b3IgPSBfdGhpczUub3B0aW9ucy5rZXlTZXBhcmF0b3IgfHwgJy4nO1xuICAgICAgICB2YXIgcmVzdWx0S2V5ID0gb3B0aW9ucy5rZXlQcmVmaXggPyBcIlwiLmNvbmNhdChvcHRpb25zLmtleVByZWZpeCkuY29uY2F0KGtleVNlcGFyYXRvcikuY29uY2F0KGtleSkgOiBrZXk7XG4gICAgICAgIHJldHVybiBfdGhpczUudChyZXN1bHRLZXksIG9wdGlvbnMpO1xuICAgICAgfTtcblxuICAgICAgaWYgKHR5cGVvZiBsbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGZpeGVkVC5sbmcgPSBsbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaXhlZFQubG5ncyA9IGxuZztcbiAgICAgIH1cblxuICAgICAgZml4ZWRULm5zID0gbnM7XG4gICAgICBmaXhlZFQua2V5UHJlZml4ID0ga2V5UHJlZml4O1xuICAgICAgcmV0dXJuIGZpeGVkVDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0KCkge1xuICAgICAgdmFyIF90aGlzJHRyYW5zbGF0b3I7XG5cbiAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0b3IgJiYgKF90aGlzJHRyYW5zbGF0b3IgPSB0aGlzLnRyYW5zbGF0b3IpLnRyYW5zbGF0ZS5hcHBseShfdGhpcyR0cmFuc2xhdG9yLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJleGlzdHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXhpc3RzKCkge1xuICAgICAgdmFyIF90aGlzJHRyYW5zbGF0b3IyO1xuXG4gICAgICByZXR1cm4gdGhpcy50cmFuc2xhdG9yICYmIChfdGhpcyR0cmFuc2xhdG9yMiA9IHRoaXMudHJhbnNsYXRvcikuZXhpc3RzLmFwcGx5KF90aGlzJHRyYW5zbGF0b3IyLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXREZWZhdWx0TmFtZXNwYWNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldERlZmF1bHROYW1lc3BhY2UobnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5kZWZhdWx0TlMgPSBucztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFzTG9hZGVkTmFtZXNwYWNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0xvYWRlZE5hbWVzcGFjZShucykge1xuICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIud2FybignaGFzTG9hZGVkTmFtZXNwYWNlOiBpMThuZXh0IHdhcyBub3QgaW5pdGlhbGl6ZWQnLCB0aGlzLmxhbmd1YWdlcyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmxhbmd1YWdlcyB8fCAhdGhpcy5sYW5ndWFnZXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLndhcm4oJ2hhc0xvYWRlZE5hbWVzcGFjZTogaTE4bi5sYW5ndWFnZXMgd2VyZSB1bmRlZmluZWQgb3IgZW1wdHknLCB0aGlzLmxhbmd1YWdlcyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxuZyA9IHRoaXMucmVzb2x2ZWRMYW5ndWFnZSB8fCB0aGlzLmxhbmd1YWdlc1swXTtcbiAgICAgIHZhciBmYWxsYmFja0xuZyA9IHRoaXMub3B0aW9ucyA/IHRoaXMub3B0aW9ucy5mYWxsYmFja0xuZyA6IGZhbHNlO1xuICAgICAgdmFyIGxhc3RMbmcgPSB0aGlzLmxhbmd1YWdlc1t0aGlzLmxhbmd1YWdlcy5sZW5ndGggLSAxXTtcbiAgICAgIGlmIChsbmcudG9Mb3dlckNhc2UoKSA9PT0gJ2NpbW9kZScpIHJldHVybiB0cnVlO1xuXG4gICAgICB2YXIgbG9hZE5vdFBlbmRpbmcgPSBmdW5jdGlvbiBsb2FkTm90UGVuZGluZyhsLCBuKSB7XG4gICAgICAgIHZhciBsb2FkU3RhdGUgPSBfdGhpczYuc2VydmljZXMuYmFja2VuZENvbm5lY3Rvci5zdGF0ZVtcIlwiLmNvbmNhdChsLCBcInxcIikuY29uY2F0KG4pXTtcblxuICAgICAgICByZXR1cm4gbG9hZFN0YXRlID09PSAtMSB8fCBsb2FkU3RhdGUgPT09IDI7XG4gICAgICB9O1xuXG4gICAgICBpZiAob3B0aW9ucy5wcmVjaGVjaykge1xuICAgICAgICB2YXIgcHJlUmVzdWx0ID0gb3B0aW9ucy5wcmVjaGVjayh0aGlzLCBsb2FkTm90UGVuZGluZyk7XG4gICAgICAgIGlmIChwcmVSZXN1bHQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHByZVJlc3VsdDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaGFzUmVzb3VyY2VCdW5kbGUobG5nLCBucykpIHJldHVybiB0cnVlO1xuICAgICAgaWYgKCF0aGlzLnNlcnZpY2VzLmJhY2tlbmRDb25uZWN0b3IuYmFja2VuZCB8fCB0aGlzLm9wdGlvbnMucmVzb3VyY2VzICYmICF0aGlzLm9wdGlvbnMucGFydGlhbEJ1bmRsZWRMYW5ndWFnZXMpIHJldHVybiB0cnVlO1xuICAgICAgaWYgKGxvYWROb3RQZW5kaW5nKGxuZywgbnMpICYmICghZmFsbGJhY2tMbmcgfHwgbG9hZE5vdFBlbmRpbmcobGFzdExuZywgbnMpKSkgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvYWROYW1lc3BhY2VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWROYW1lc3BhY2VzKG5zLCBjYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICAgIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG5cbiAgICAgIGlmICghdGhpcy5vcHRpb25zLm5zKSB7XG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBucyA9PT0gJ3N0cmluZycpIG5zID0gW25zXTtcbiAgICAgIG5zLmZvckVhY2goZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgaWYgKF90aGlzNy5vcHRpb25zLm5zLmluZGV4T2YobikgPCAwKSBfdGhpczcub3B0aW9ucy5ucy5wdXNoKG4pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmxvYWRSZXNvdXJjZXMoZnVuY3Rpb24gKGVycikge1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGRlZmVycmVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2FkTGFuZ3VhZ2VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRMYW5ndWFnZXMobG5ncywgY2FsbGJhY2spIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgICBpZiAodHlwZW9mIGxuZ3MgPT09ICdzdHJpbmcnKSBsbmdzID0gW2xuZ3NdO1xuICAgICAgdmFyIHByZWxvYWRlZCA9IHRoaXMub3B0aW9ucy5wcmVsb2FkIHx8IFtdO1xuICAgICAgdmFyIG5ld0xuZ3MgPSBsbmdzLmZpbHRlcihmdW5jdGlvbiAobG5nKSB7XG4gICAgICAgIHJldHVybiBwcmVsb2FkZWQuaW5kZXhPZihsbmcpIDwgMDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIW5ld0xuZ3MubGVuZ3RoKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm9wdGlvbnMucHJlbG9hZCA9IHByZWxvYWRlZC5jb25jYXQobmV3TG5ncyk7XG4gICAgICB0aGlzLmxvYWRSZXNvdXJjZXMoZnVuY3Rpb24gKGVycikge1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGRlZmVycmVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkaXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlyKGxuZykge1xuICAgICAgaWYgKCFsbmcpIGxuZyA9IHRoaXMucmVzb2x2ZWRMYW5ndWFnZSB8fCAodGhpcy5sYW5ndWFnZXMgJiYgdGhpcy5sYW5ndWFnZXMubGVuZ3RoID4gMCA/IHRoaXMubGFuZ3VhZ2VzWzBdIDogdGhpcy5sYW5ndWFnZSk7XG4gICAgICBpZiAoIWxuZykgcmV0dXJuICdydGwnO1xuICAgICAgdmFyIHJ0bExuZ3MgPSBbJ2FyJywgJ3NodScsICdzcXInLCAnc3NoJywgJ3hhYScsICd5aGQnLCAneXVkJywgJ2FhbycsICdhYmgnLCAnYWJ2JywgJ2FjbScsICdhY3EnLCAnYWN3JywgJ2FjeCcsICdhY3knLCAnYWRmJywgJ2FkcycsICdhZWInLCAnYWVjJywgJ2FmYicsICdhanAnLCAnYXBjJywgJ2FwZCcsICdhcmInLCAnYXJxJywgJ2FycycsICdhcnknLCAnYXJ6JywgJ2F1eicsICdhdmwnLCAnYXloJywgJ2F5bCcsICdheW4nLCAnYXlwJywgJ2JieicsICdwZ2EnLCAnaGUnLCAnaXcnLCAncHMnLCAncGJ0JywgJ3BidScsICdwc3QnLCAncHJwJywgJ3ByZCcsICd1ZycsICd1cicsICd5ZGQnLCAneWRzJywgJ3lpaCcsICdqaScsICd5aScsICdoYm8nLCAnbWVuJywgJ3htbicsICdmYScsICdqcHInLCAncGVvJywgJ3BlcycsICdwcnMnLCAnZHYnLCAnc2FtJywgJ2NrYiddO1xuICAgICAgcmV0dXJuIHJ0bExuZ3MuaW5kZXhPZih0aGlzLnNlcnZpY2VzLmxhbmd1YWdlVXRpbHMuZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUobG5nKSkgPiAtMSB8fCBsbmcudG9Mb3dlckNhc2UoKS5pbmRleE9mKCctYXJhYicpID4gMSA/ICdydGwnIDogJ2x0cic7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsb25lSW5zdGFuY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xvbmVJbnN0YW5jZSgpIHtcbiAgICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG5vb3A7XG5cbiAgICAgIHZhciBtZXJnZWRPcHRpb25zID0gX29iamVjdFNwcmVhZCQ2KF9vYmplY3RTcHJlYWQkNihfb2JqZWN0U3ByZWFkJDYoe30sIHRoaXMub3B0aW9ucyksIG9wdGlvbnMpLCB7XG4gICAgICAgIGlzQ2xvbmU6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgY2xvbmUgPSBuZXcgSTE4bihtZXJnZWRPcHRpb25zKTtcblxuICAgICAgaWYgKG9wdGlvbnMuZGVidWcgIT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnByZWZpeCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNsb25lLmxvZ2dlciA9IGNsb25lLmxvZ2dlci5jbG9uZShvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG1lbWJlcnNUb0NvcHkgPSBbJ3N0b3JlJywgJ3NlcnZpY2VzJywgJ2xhbmd1YWdlJ107XG4gICAgICBtZW1iZXJzVG9Db3B5LmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgY2xvbmVbbV0gPSBfdGhpczhbbV07XG4gICAgICB9KTtcbiAgICAgIGNsb25lLnNlcnZpY2VzID0gX29iamVjdFNwcmVhZCQ2KHt9LCB0aGlzLnNlcnZpY2VzKTtcbiAgICAgIGNsb25lLnNlcnZpY2VzLnV0aWxzID0ge1xuICAgICAgICBoYXNMb2FkZWROYW1lc3BhY2U6IGNsb25lLmhhc0xvYWRlZE5hbWVzcGFjZS5iaW5kKGNsb25lKVxuICAgICAgfTtcbiAgICAgIGNsb25lLnRyYW5zbGF0b3IgPSBuZXcgVHJhbnNsYXRvcihjbG9uZS5zZXJ2aWNlcywgY2xvbmUub3B0aW9ucyk7XG4gICAgICBjbG9uZS50cmFuc2xhdG9yLm9uKCcqJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNCA+IDEgPyBfbGVuNCAtIDEgOiAwKSwgX2tleTQgPSAxOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5NCAtIDFdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsb25lLmVtaXQuYXBwbHkoY2xvbmUsIFtldmVudF0uY29uY2F0KGFyZ3MpKTtcbiAgICAgIH0pO1xuICAgICAgY2xvbmUuaW5pdChtZXJnZWRPcHRpb25zLCBjYWxsYmFjayk7XG4gICAgICBjbG9uZS50cmFuc2xhdG9yLm9wdGlvbnMgPSBjbG9uZS5vcHRpb25zO1xuICAgICAgY2xvbmUudHJhbnNsYXRvci5iYWNrZW5kQ29ubmVjdG9yLnNlcnZpY2VzLnV0aWxzID0ge1xuICAgICAgICBoYXNMb2FkZWROYW1lc3BhY2U6IGNsb25lLmhhc0xvYWRlZE5hbWVzcGFjZS5iaW5kKGNsb25lKVxuICAgICAgfTtcbiAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidG9KU09OXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgc3RvcmU6IHRoaXMuc3RvcmUsXG4gICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlLFxuICAgICAgICBsYW5ndWFnZXM6IHRoaXMubGFuZ3VhZ2VzLFxuICAgICAgICByZXNvbHZlZExhbmd1YWdlOiB0aGlzLnJlc29sdmVkTGFuZ3VhZ2VcbiAgICAgIH07XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEkxOG47XG59KEV2ZW50RW1pdHRlcik7XG5cbl9kZWZpbmVQcm9wZXJ0eShJMThuLCBcImNyZWF0ZUluc3RhbmNlXCIsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIG5ldyBJMThuKG9wdGlvbnMsIGNhbGxiYWNrKTtcbn0pO1xuXG52YXIgaW5zdGFuY2UgPSBJMThuLmNyZWF0ZUluc3RhbmNlKCk7XG5pbnN0YW5jZS5jcmVhdGVJbnN0YW5jZSA9IEkxOG4uY3JlYXRlSW5zdGFuY2U7XG5cbnZhciBjcmVhdGVJbnN0YW5jZSA9IGluc3RhbmNlLmNyZWF0ZUluc3RhbmNlO1xudmFyIGluaXQgPSBpbnN0YW5jZS5pbml0O1xudmFyIGxvYWRSZXNvdXJjZXMgPSBpbnN0YW5jZS5sb2FkUmVzb3VyY2VzO1xudmFyIHJlbG9hZFJlc291cmNlcyA9IGluc3RhbmNlLnJlbG9hZFJlc291cmNlcztcbnZhciB1c2UgPSBpbnN0YW5jZS51c2U7XG52YXIgY2hhbmdlTGFuZ3VhZ2UgPSBpbnN0YW5jZS5jaGFuZ2VMYW5ndWFnZTtcbnZhciBnZXRGaXhlZFQgPSBpbnN0YW5jZS5nZXRGaXhlZFQ7XG52YXIgdCA9IGluc3RhbmNlLnQ7XG52YXIgZXhpc3RzID0gaW5zdGFuY2UuZXhpc3RzO1xudmFyIHNldERlZmF1bHROYW1lc3BhY2UgPSBpbnN0YW5jZS5zZXREZWZhdWx0TmFtZXNwYWNlO1xudmFyIGhhc0xvYWRlZE5hbWVzcGFjZSA9IGluc3RhbmNlLmhhc0xvYWRlZE5hbWVzcGFjZTtcbnZhciBsb2FkTmFtZXNwYWNlcyA9IGluc3RhbmNlLmxvYWROYW1lc3BhY2VzO1xudmFyIGxvYWRMYW5ndWFnZXMgPSBpbnN0YW5jZS5sb2FkTGFuZ3VhZ2VzO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcbmV4cG9ydCB7IGNoYW5nZUxhbmd1YWdlLCBjcmVhdGVJbnN0YW5jZSwgZXhpc3RzLCBnZXRGaXhlZFQsIGhhc0xvYWRlZE5hbWVzcGFjZSwgaW5pdCwgbG9hZExhbmd1YWdlcywgbG9hZE5hbWVzcGFjZXMsIGxvYWRSZXNvdXJjZXMsIHJlbG9hZFJlc291cmNlcywgc2V0RGVmYXVsdE5hbWVzcGFjZSwgdCwgdXNlIH07XG4iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgX2Nqc0xvYWRlciBmcm9tICdjY2U6L2ludGVybmFsL21sL2Nqcy1sb2FkZXIubWpzJztcbmltcG9ydCB7IF9fY2pzTWV0YVVSTCBhcyBfcmVxfSBmcm9tICcuL2ZhY3RvcnknO1xuaW1wb3J0IHsgX19janNNZXRhVVJMIGFzIF9yZXEwfSBmcm9tICcuL3BzZXVkby1udW1iZXItZm9ybWF0JztcbmxldCBfY2pzRXhwb3J0cztcbmNvbnN0IF9fY2pzTWV0YVVSTCA9IGltcG9ydC5tZXRhLnVybDtcbl9janNMb2FkZXIuZGVmaW5lKF9fY2pzTWV0YVVSTCwgZnVuY3Rpb24gKGV4cG9ydHMsIHJlcXVpcmUsIG1vZHVsZSwgX19maWxlbmFtZSwgX19kaXJuYW1lKSB7XG4vLyAjcmVnaW9uIE9SSUdJTkFMIENPREVcblxuXG4gJ3VzZSBzdHJpY3QnO1xuXG4gdmFyIGdldFBsdXJhbFJ1bGVzID0gcmVxdWlyZSgnLi9mYWN0b3J5Jyk7XG4gdmFyIFBzZXVkb051bWJlckZvcm1hdCA9IHJlcXVpcmUoJy4vcHNldWRvLW51bWJlci1mb3JtYXQnKTtcblxuIGZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdExlZ2FjeSAoZSkgeyByZXR1cm4gZSAmJiB0eXBlb2YgZSA9PT0gJ29iamVjdCcgJiYgJ2RlZmF1bHQnIGluIGUgPyBlIDogeyAnZGVmYXVsdCc6IGUgfTsgfVxuXG4gdmFyIGdldFBsdXJhbFJ1bGVzX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShnZXRQbHVyYWxSdWxlcyk7XG4gdmFyIFBzZXVkb051bWJlckZvcm1hdF9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koUHNldWRvTnVtYmVyRm9ybWF0KTtcblxuIGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgICB9O1xuICAgfSBlbHNlIHtcbiAgICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICAgfTtcbiAgIH1cblxuICAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbiB9XG5cbiB2YXIgY29tbW9uanNHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxuIGZ1bmN0aW9uIGdldERlZmF1bHRFeHBvcnRGcm9tQ2pzICh4KSB7XG4gXHRyZXR1cm4geCAmJiB4Ll9fZXNNb2R1bGUgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHgsICdkZWZhdWx0JykgPyB4WydkZWZhdWx0J10gOiB4O1xuIH1cblxuIHZhciBwbHVyYWxzJDEgPSB7ZXhwb3J0czoge319O1xuXG4gKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbiAgIHZhciBhID0gZnVuY3Rpb24gYShuLCBvcmQpIHtcbiAgICAgaWYgKG9yZCkgcmV0dXJuICdvdGhlcic7XG4gICAgIHJldHVybiBuID09IDEgPyAnb25lJyA6ICdvdGhlcic7XG4gICB9O1xuXG4gICB2YXIgYiA9IGZ1bmN0aW9uIGIobiwgb3JkKSB7XG4gICAgIGlmIChvcmQpIHJldHVybiAnb3RoZXInO1xuICAgICByZXR1cm4gbiA9PSAwIHx8IG4gPT0gMSA/ICdvbmUnIDogJ290aGVyJztcbiAgIH07XG5cbiAgIHZhciBjID0gZnVuY3Rpb24gYyhuLCBvcmQpIHtcbiAgICAgaWYgKG9yZCkgcmV0dXJuICdvdGhlcic7XG4gICAgIHJldHVybiBuID49IDAgJiYgbiA8PSAxID8gJ29uZScgOiAnb3RoZXInO1xuICAgfTtcblxuICAgdmFyIGQgPSBmdW5jdGlvbiBkKG4sIG9yZCkge1xuICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgdjAgPSAhc1sxXTtcbiAgICAgaWYgKG9yZCkgcmV0dXJuICdvdGhlcic7XG4gICAgIHJldHVybiBuID09IDEgJiYgdjAgPyAnb25lJyA6ICdvdGhlcic7XG4gICB9O1xuXG4gICB2YXIgZSA9IGZ1bmN0aW9uIGUobiwgb3JkKSB7XG4gICAgIHJldHVybiAnb3RoZXInO1xuICAgfTtcblxuICAgdmFyIGYgPSBmdW5jdGlvbiBmKG4sIG9yZCkge1xuICAgICBpZiAob3JkKSByZXR1cm4gJ290aGVyJztcbiAgICAgcmV0dXJuIG4gPT0gMSA/ICdvbmUnIDogbiA9PSAyID8gJ3R3bycgOiAnb3RoZXInO1xuICAgfTtcblxuICAgKGZ1bmN0aW9uIChyb290LCBwbHVyYWxzKSB7XG4gICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwbHVyYWxzLCAnX19lc01vZHVsZScsIHtcbiAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICB9KTtcbiAgICAgbW9kdWxlLmV4cG9ydHMgPSBwbHVyYWxzO1xuICAgfSkoY29tbW9uanNHbG9iYWwsIHtcbiAgICAgX2luOiBlLFxuICAgICBhZjogYSxcbiAgICAgYWs6IGIsXG4gICAgIGFtOiBjLFxuICAgICBhbjogYSxcbiAgICAgYXI6IGZ1bmN0aW9uIGFyKG4sIG9yZCkge1xuICAgICAgIHZhciBzID0gU3RyaW5nKG4pLnNwbGl0KCcuJyksXG4gICAgICAgICAgIHQwID0gTnVtYmVyKHNbMF0pID09IG4sXG4gICAgICAgICAgIG4xMDAgPSB0MCAmJiBzWzBdLnNsaWNlKC0yKTtcbiAgICAgICBpZiAob3JkKSByZXR1cm4gJ290aGVyJztcbiAgICAgICByZXR1cm4gbiA9PSAwID8gJ3plcm8nIDogbiA9PSAxID8gJ29uZScgOiBuID09IDIgPyAndHdvJyA6IG4xMDAgPj0gMyAmJiBuMTAwIDw9IDEwID8gJ2ZldycgOiBuMTAwID49IDExICYmIG4xMDAgPD0gOTkgPyAnbWFueScgOiAnb3RoZXInO1xuICAgICB9LFxuICAgICBhcnM6IGZ1bmN0aW9uIGFycyhuLCBvcmQpIHtcbiAgICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgICB0MCA9IE51bWJlcihzWzBdKSA9PSBuLFxuICAgICAgICAgICBuMTAwID0gdDAgJiYgc1swXS5zbGljZSgtMik7XG4gICAgICAgaWYgKG9yZCkgcmV0dXJuICdvdGhlcic7XG4gICAgICAgcmV0dXJuIG4gPT0gMCA/ICd6ZXJvJyA6IG4gPT0gMSA/ICdvbmUnIDogbiA9PSAyID8gJ3R3bycgOiBuMTAwID49IDMgJiYgbjEwMCA8PSAxMCA/ICdmZXcnIDogbjEwMCA+PSAxMSAmJiBuMTAwIDw9IDk5ID8gJ21hbnknIDogJ290aGVyJztcbiAgICAgfSxcbiAgICAgYXM6IGZ1bmN0aW9uIGFzKG4sIG9yZCkge1xuICAgICAgIGlmIChvcmQpIHJldHVybiBuID09IDEgfHwgbiA9PSA1IHx8IG4gPT0gNyB8fCBuID09IDggfHwgbiA9PSA5IHx8IG4gPT0gMTAgPyAnb25lJyA6IG4gPT0gMiB8fCBuID09IDMgPyAndHdvJyA6IG4gPT0gNCA/ICdmZXcnIDogbiA9PSA2ID8gJ21hbnknIDogJ290aGVyJztcbiAgICAgICByZXR1cm4gbiA+PSAwICYmIG4gPD0gMSA/ICdvbmUnIDogJ290aGVyJztcbiAgICAgfSxcbiAgICAgYXNhOiBhLFxuICAgICBhc3Q6IGQsXG4gICAgIGF6OiBmdW5jdGlvbiBheihuLCBvcmQpIHtcbiAgICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgICBpID0gc1swXSxcbiAgICAgICAgICAgaTEwID0gaS5zbGljZSgtMSksXG4gICAgICAgICAgIGkxMDAgPSBpLnNsaWNlKC0yKSxcbiAgICAgICAgICAgaTEwMDAgPSBpLnNsaWNlKC0zKTtcbiAgICAgICBpZiAob3JkKSByZXR1cm4gaTEwID09IDEgfHwgaTEwID09IDIgfHwgaTEwID09IDUgfHwgaTEwID09IDcgfHwgaTEwID09IDggfHwgaTEwMCA9PSAyMCB8fCBpMTAwID09IDUwIHx8IGkxMDAgPT0gNzAgfHwgaTEwMCA9PSA4MCA/ICdvbmUnIDogaTEwID09IDMgfHwgaTEwID09IDQgfHwgaTEwMDAgPT0gMTAwIHx8IGkxMDAwID09IDIwMCB8fCBpMTAwMCA9PSAzMDAgfHwgaTEwMDAgPT0gNDAwIHx8IGkxMDAwID09IDUwMCB8fCBpMTAwMCA9PSA2MDAgfHwgaTEwMDAgPT0gNzAwIHx8IGkxMDAwID09IDgwMCB8fCBpMTAwMCA9PSA5MDAgPyAnZmV3JyA6IGkgPT0gMCB8fCBpMTAgPT0gNiB8fCBpMTAwID09IDQwIHx8IGkxMDAgPT0gNjAgfHwgaTEwMCA9PSA5MCA/ICdtYW55JyA6ICdvdGhlcic7XG4gICAgICAgcmV0dXJuIG4gPT0gMSA/ICdvbmUnIDogJ290aGVyJztcbiAgICAgfSxcbiAgICAgYmU6IGZ1bmN0aW9uIGJlKG4sIG9yZCkge1xuICAgICAgIHZhciBzID0gU3RyaW5nKG4pLnNwbGl0KCcuJyksXG4gICAgICAgICAgIHQwID0gTnVtYmVyKHNbMF0pID09IG4sXG4gICAgICAgICAgIG4xMCA9IHQwICYmIHNbMF0uc2xpY2UoLTEpLFxuICAgICAgICAgICBuMTAwID0gdDAgJiYgc1swXS5zbGljZSgtMik7XG4gICAgICAgaWYgKG9yZCkgcmV0dXJuIChuMTAgPT0gMiB8fCBuMTAgPT0gMykgJiYgbjEwMCAhPSAxMiAmJiBuMTAwICE9IDEzID8gJ2ZldycgOiAnb3RoZXInO1xuICAgICAgIHJldHVybiBuMTAgPT0gMSAmJiBuMTAwICE9IDExID8gJ29uZScgOiBuMTAgPj0gMiAmJiBuMTAgPD0gNCAmJiAobjEwMCA8IDEyIHx8IG4xMDAgPiAxNCkgPyAnZmV3JyA6IHQwICYmIG4xMCA9PSAwIHx8IG4xMCA+PSA1ICYmIG4xMCA8PSA5IHx8IG4xMDAgPj0gMTEgJiYgbjEwMCA8PSAxNCA/ICdtYW55JyA6ICdvdGhlcic7XG4gICAgIH0sXG4gICAgIGJlbTogYSxcbiAgICAgYmV6OiBhLFxuICAgICBiZzogYSxcbiAgICAgYmhvOiBiLFxuICAgICBibTogZSxcbiAgICAgYm46IGZ1bmN0aW9uIGJuKG4sIG9yZCkge1xuICAgICAgIGlmIChvcmQpIHJldHVybiBuID09IDEgfHwgbiA9PSA1IHx8IG4gPT0gNyB8fCBuID09IDggfHwgbiA9PSA5IHx8IG4gPT0gMTAgPyAnb25lJyA6IG4gPT0gMiB8fCBuID09IDMgPyAndHdvJyA6IG4gPT0gNCA/ICdmZXcnIDogbiA9PSA2ID8gJ21hbnknIDogJ290aGVyJztcbiAgICAgICByZXR1cm4gbiA+PSAwICYmIG4gPD0gMSA/ICdvbmUnIDogJ290aGVyJztcbiAgICAgfSxcbiAgICAgYm86IGUsXG4gICAgIGJyOiBmdW5jdGlvbiBicihuLCBvcmQpIHtcbiAgICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgICB0MCA9IE51bWJlcihzWzBdKSA9PSBuLFxuICAgICAgICAgICBuMTAgPSB0MCAmJiBzWzBdLnNsaWNlKC0xKSxcbiAgICAgICAgICAgbjEwMCA9IHQwICYmIHNbMF0uc2xpY2UoLTIpLFxuICAgICAgICAgICBuMTAwMDAwMCA9IHQwICYmIHNbMF0uc2xpY2UoLTYpO1xuICAgICAgIGlmIChvcmQpIHJldHVybiAnb3RoZXInO1xuICAgICAgIHJldHVybiBuMTAgPT0gMSAmJiBuMTAwICE9IDExICYmIG4xMDAgIT0gNzEgJiYgbjEwMCAhPSA5MSA/ICdvbmUnIDogbjEwID09IDIgJiYgbjEwMCAhPSAxMiAmJiBuMTAwICE9IDcyICYmIG4xMDAgIT0gOTIgPyAndHdvJyA6IChuMTAgPT0gMyB8fCBuMTAgPT0gNCB8fCBuMTAgPT0gOSkgJiYgKG4xMDAgPCAxMCB8fCBuMTAwID4gMTkpICYmIChuMTAwIDwgNzAgfHwgbjEwMCA+IDc5KSAmJiAobjEwMCA8IDkwIHx8IG4xMDAgPiA5OSkgPyAnZmV3JyA6IG4gIT0gMCAmJiB0MCAmJiBuMTAwMDAwMCA9PSAwID8gJ21hbnknIDogJ290aGVyJztcbiAgICAgfSxcbiAgICAgYnJ4OiBhLFxuICAgICBiczogZnVuY3Rpb24gYnMobiwgb3JkKSB7XG4gICAgICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgaSA9IHNbMF0sXG4gICAgICAgICAgIGYgPSBzWzFdIHx8ICcnLFxuICAgICAgICAgICB2MCA9ICFzWzFdLFxuICAgICAgICAgICBpMTAgPSBpLnNsaWNlKC0xKSxcbiAgICAgICAgICAgaTEwMCA9IGkuc2xpY2UoLTIpLFxuICAgICAgICAgICBmMTAgPSBmLnNsaWNlKC0xKSxcbiAgICAgICAgICAgZjEwMCA9IGYuc2xpY2UoLTIpO1xuICAgICAgIGlmIChvcmQpIHJldHVybiAnb3RoZXInO1xuICAgICAgIHJldHVybiB2MCAmJiBpMTAgPT0gMSAmJiBpMTAwICE9IDExIHx8IGYxMCA9PSAxICYmIGYxMDAgIT0gMTEgPyAnb25lJyA6IHYwICYmIGkxMCA+PSAyICYmIGkxMCA8PSA0ICYmIChpMTAwIDwgMTIgfHwgaTEwMCA+IDE0KSB8fCBmMTAgPj0gMiAmJiBmMTAgPD0gNCAmJiAoZjEwMCA8IDEyIHx8IGYxMDAgPiAxNCkgPyAnZmV3JyA6ICdvdGhlcic7XG4gICAgIH0sXG4gICAgIGNhOiBmdW5jdGlvbiBjYShuLCBvcmQpIHtcbiAgICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgICB2MCA9ICFzWzFdO1xuICAgICAgIGlmIChvcmQpIHJldHVybiBuID09IDEgfHwgbiA9PSAzID8gJ29uZScgOiBuID09IDIgPyAndHdvJyA6IG4gPT0gNCA/ICdmZXcnIDogJ290aGVyJztcbiAgICAgICByZXR1cm4gbiA9PSAxICYmIHYwID8gJ29uZScgOiAnb3RoZXInO1xuICAgICB9LFxuICAgICBjZTogYSxcbiAgICAgY2ViOiBmdW5jdGlvbiBjZWIobiwgb3JkKSB7XG4gICAgICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgaSA9IHNbMF0sXG4gICAgICAgICAgIGYgPSBzWzFdIHx8ICcnLFxuICAgICAgICAgICB2MCA9ICFzWzFdLFxuICAgICAgICAgICBpMTAgPSBpLnNsaWNlKC0xKSxcbiAgICAgICAgICAgZjEwID0gZi5zbGljZSgtMSk7XG4gICAgICAgaWYgKG9yZCkgcmV0dXJuICdvdGhlcic7XG4gICAgICAgcmV0dXJuIHYwICYmIChpID09IDEgfHwgaSA9PSAyIHx8IGkgPT0gMykgfHwgdjAgJiYgaTEwICE9IDQgJiYgaTEwICE9IDYgJiYgaTEwICE9IDkgfHwgIXYwICYmIGYxMCAhPSA0ICYmIGYxMCAhPSA2ICYmIGYxMCAhPSA5ID8gJ29uZScgOiAnb3RoZXInO1xuICAgICB9LFxuICAgICBjZ2c6IGEsXG4gICAgIGNocjogYSxcbiAgICAgY2tiOiBhLFxuICAgICBjczogZnVuY3Rpb24gY3Mobiwgb3JkKSB7XG4gICAgICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgaSA9IHNbMF0sXG4gICAgICAgICAgIHYwID0gIXNbMV07XG4gICAgICAgaWYgKG9yZCkgcmV0dXJuICdvdGhlcic7XG4gICAgICAgcmV0dXJuIG4gPT0gMSAmJiB2MCA/ICdvbmUnIDogaSA+PSAyICYmIGkgPD0gNCAmJiB2MCA/ICdmZXcnIDogIXYwID8gJ21hbnknIDogJ290aGVyJztcbiAgICAgfSxcbiAgICAgY3k6IGZ1bmN0aW9uIGN5KG4sIG9yZCkge1xuICAgICAgIGlmIChvcmQpIHJldHVybiBuID09IDAgfHwgbiA9PSA3IHx8IG4gPT0gOCB8fCBuID09IDkgPyAnemVybycgOiBuID09IDEgPyAnb25lJyA6IG4gPT0gMiA/ICd0d28nIDogbiA9PSAzIHx8IG4gPT0gNCA/ICdmZXcnIDogbiA9PSA1IHx8IG4gPT0gNiA/ICdtYW55JyA6ICdvdGhlcic7XG4gICAgICAgcmV0dXJuIG4gPT0gMCA/ICd6ZXJvJyA6IG4gPT0gMSA/ICdvbmUnIDogbiA9PSAyID8gJ3R3bycgOiBuID09IDMgPyAnZmV3JyA6IG4gPT0gNiA/ICdtYW55JyA6ICdvdGhlcic7XG4gICAgIH0sXG4gICAgIGRhOiBmdW5jdGlvbiBkYShuLCBvcmQpIHtcbiAgICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgICBpID0gc1swXSxcbiAgICAgICAgICAgdDAgPSBOdW1iZXIoc1swXSkgPT0gbjtcbiAgICAgICBpZiAob3JkKSByZXR1cm4gJ290aGVyJztcbiAgICAgICByZXR1cm4gbiA9PSAxIHx8ICF0MCAmJiAoaSA9PSAwIHx8IGkgPT0gMSkgPyAnb25lJyA6ICdvdGhlcic7XG4gICAgIH0sXG4gICAgIGRlOiBkLFxuICAgICBkb2k6IGMsXG4gICAgIGRzYjogZnVuY3Rpb24gZHNiKG4sIG9yZCkge1xuICAgICAgIHZhciBzID0gU3RyaW5nKG4pLnNwbGl0KCcuJyksXG4gICAgICAgICAgIGkgPSBzWzBdLFxuICAgICAgICAgICBmID0gc1sxXSB8fCAnJyxcbiAgICAgICAgICAgdjAgPSAhc1sxXSxcbiAgICAgICAgICAgaTEwMCA9IGkuc2xpY2UoLTIpLFxuICAgICAgICAgICBmMTAwID0gZi5zbGljZSgtMik7XG4gICAgICAgaWYgKG9yZCkgcmV0dXJuICdvdGhlcic7XG4gICAgICAgcmV0dXJuIHYwICYmIGkxMDAgPT0gMSB8fCBmMTAwID09IDEgPyAnb25lJyA6IHYwICYmIGkxMDAgPT0gMiB8fCBmMTAwID09IDIgPyAndHdvJyA6IHYwICYmIChpMTAwID09IDMgfHwgaTEwMCA9PSA0KSB8fCBmMTAwID09IDMgfHwgZjEwMCA9PSA0ID8gJ2ZldycgOiAnb3RoZXInO1xuICAgICB9LFxuICAgICBkdjogYSxcbiAgICAgZHo6IGUsXG4gICAgIGVlOiBhLFxuICAgICBlbDogYSxcbiAgICAgZW46IGZ1bmN0aW9uIGVuKG4sIG9yZCkge1xuICAgICAgIHZhciBzID0gU3RyaW5nKG4pLnNwbGl0KCcuJyksXG4gICAgICAgICAgIHYwID0gIXNbMV0sXG4gICAgICAgICAgIHQwID0gTnVtYmVyKHNbMF0pID09IG4sXG4gICAgICAgICAgIG4xMCA9IHQwICYmIHNbMF0uc2xpY2UoLTEpLFxuICAgICAgICAgICBuMTAwID0gdDAgJiYgc1swXS5zbGljZSgtMik7XG4gICAgICAgaWYgKG9yZCkgcmV0dXJuIG4xMCA9PSAxICYmIG4xMDAgIT0gMTEgPyAnb25lJyA6IG4xMCA9PSAyICYmIG4xMDAgIT0gMTIgPyAndHdvJyA6IG4xMCA9PSAzICYmIG4xMDAgIT0gMTMgPyAnZmV3JyA6ICdvdGhlcic7XG4gICAgICAgcmV0dXJuIG4gPT0gMSAmJiB2MCA/ICdvbmUnIDogJ290aGVyJztcbiAgICAgfSxcbiAgICAgZW86IGEsXG4gICAgIGVzOiBhLFxuICAgICBldDogZCxcbiAgICAgZXU6IGEsXG4gICAgIGZhOiBjLFxuICAgICBmZjogZnVuY3Rpb24gZmYobiwgb3JkKSB7XG4gICAgICAgaWYgKG9yZCkgcmV0dXJuICdvdGhlcic7XG4gICAgICAgcmV0dXJuIG4gPj0gMCAmJiBuIDwgMiA/ICdvbmUnIDogJ290aGVyJztcbiAgICAgfSxcbiAgICAgZmk6IGQsXG4gICAgIGZpbDogZnVuY3Rpb24gZmlsKG4sIG9yZCkge1xuICAgICAgIHZhciBzID0gU3RyaW5nKG4pLnNwbGl0KCcuJyksXG4gICAgICAgICAgIGkgPSBzWzBdLFxuICAgICAgICAgICBmID0gc1sxXSB8fCAnJyxcbiAgICAgICAgICAgdjAgPSAhc1sxXSxcbiAgICAgICAgICAgaTEwID0gaS5zbGljZSgtMSksXG4gICAgICAgICAgIGYxMCA9IGYuc2xpY2UoLTEpO1xuICAgICAgIGlmIChvcmQpIHJldHVybiBuID09IDEgPyAnb25lJyA6ICdvdGhlcic7XG4gICAgICAgcmV0dXJuIHYwICYmIChpID09IDEgfHwgaSA9PSAyIHx8IGkgPT0gMykgfHwgdjAgJiYgaTEwICE9IDQgJiYgaTEwICE9IDYgJiYgaTEwICE9IDkgfHwgIXYwICYmIGYxMCAhPSA0ICYmIGYxMCAhPSA2ICYmIGYxMCAhPSA5ID8gJ29uZScgOiAnb3RoZXInO1xuICAgICB9LFxuICAgICBmbzogYSxcbiAgICAgZnI6IGZ1bmN0aW9uIGZyKG4sIG9yZCkge1xuICAgICAgIHZhciBzID0gU3RyaW5nKG4pLnNwbGl0KCcuJyksXG4gICAgICAgICAgIGkgPSBzWzBdLFxuICAgICAgICAgICB2MCA9ICFzWzFdLFxuICAgICAgICAgICBpMTAwMDAwMCA9IGkuc2xpY2UoLTYpO1xuICAgICAgIGlmIChvcmQpIHJldHVybiBuID09IDEgPyAnb25lJyA6ICdvdGhlcic7XG4gICAgICAgcmV0dXJuIG4gPj0gMCAmJiBuIDwgMiA/ICdvbmUnIDogaSAhPSAwICYmIGkxMDAwMDAwID09IDAgJiYgdjAgPyAnbWFueScgOiAnb3RoZXInO1xuICAgICB9LFxuICAgICBmdXI6IGEsXG4gICAgIGZ5OiBkLFxuICAgICBnYTogZnVuY3Rpb24gZ2Eobiwgb3JkKSB7XG4gICAgICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgdDAgPSBOdW1iZXIoc1swXSkgPT0gbjtcbiAgICAgICBpZiAob3JkKSByZXR1cm4gbiA9PSAxID8gJ29uZScgOiAnb3RoZXInO1xuICAgICAgIHJldHVybiBuID09IDEgPyAnb25lJyA6IG4gPT0gMiA/ICd0d28nIDogdDAgJiYgbiA+PSAzICYmIG4gPD0gNiA/ICdmZXcnIDogdDAgJiYgbiA+PSA3ICYmIG4gPD0gMTAgPyAnbWFueScgOiAnb3RoZXInO1xuICAgICB9LFxuICAgICBnZDogZnVuY3Rpb24gZ2Qobiwgb3JkKSB7XG4gICAgICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgdDAgPSBOdW1iZXIoc1swXSkgPT0gbjtcbiAgICAgICBpZiAob3JkKSByZXR1cm4gbiA9PSAxIHx8IG4gPT0gMTEgPyAnb25lJyA6IG4gPT0gMiB8fCBuID09IDEyID8gJ3R3bycgOiBuID09IDMgfHwgbiA9PSAxMyA/ICdmZXcnIDogJ290aGVyJztcbiAgICAgICByZXR1cm4gbiA9PSAxIHx8IG4gPT0gMTEgPyAnb25lJyA6IG4gPT0gMiB8fCBuID09IDEyID8gJ3R3bycgOiB0MCAmJiBuID49IDMgJiYgbiA8PSAxMCB8fCB0MCAmJiBuID49IDEzICYmIG4gPD0gMTkgPyAnZmV3JyA6ICdvdGhlcic7XG4gICAgIH0sXG4gICAgIGdsOiBkLFxuICAgICBnc3c6IGEsXG4gICAgIGd1OiBmdW5jdGlvbiBndShuLCBvcmQpIHtcbiAgICAgICBpZiAob3JkKSByZXR1cm4gbiA9PSAxID8gJ29uZScgOiBuID09IDIgfHwgbiA9PSAzID8gJ3R3bycgOiBuID09IDQgPyAnZmV3JyA6IG4gPT0gNiA/ICdtYW55JyA6ICdvdGhlcic7XG4gICAgICAgcmV0dXJuIG4gPj0gMCAmJiBuIDw9IDEgPyAnb25lJyA6ICdvdGhlcic7XG4gICAgIH0sXG4gICAgIGd1dzogYixcbiAgICAgZ3Y6IGZ1bmN0aW9uIGd2KG4sIG9yZCkge1xuICAgICAgIHZhciBzID0gU3RyaW5nKG4pLnNwbGl0KCcuJyksXG4gICAgICAgICAgIGkgPSBzWzBdLFxuICAgICAgICAgICB2MCA9ICFzWzFdLFxuICAgICAgICAgICBpMTAgPSBpLnNsaWNlKC0xKSxcbiAgICAgICAgICAgaTEwMCA9IGkuc2xpY2UoLTIpO1xuICAgICAgIGlmIChvcmQpIHJldHVybiAnb3RoZXInO1xuICAgICAgIHJldHVybiB2MCAmJiBpMTAgPT0gMSA/ICdvbmUnIDogdjAgJiYgaTEwID09IDIgPyAndHdvJyA6IHYwICYmIChpMTAwID09IDAgfHwgaTEwMCA9PSAyMCB8fCBpMTAwID09IDQwIHx8IGkxMDAgPT0gNjAgfHwgaTEwMCA9PSA4MCkgPyAnZmV3JyA6ICF2MCA/ICdtYW55JyA6ICdvdGhlcic7XG4gICAgIH0sXG4gICAgIGhhOiBhLFxuICAgICBoYXc6IGEsXG4gICAgIGhlOiBmdW5jdGlvbiBoZShuLCBvcmQpIHtcbiAgICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgICBpID0gc1swXSxcbiAgICAgICAgICAgdjAgPSAhc1sxXSxcbiAgICAgICAgICAgdDAgPSBOdW1iZXIoc1swXSkgPT0gbixcbiAgICAgICAgICAgbjEwID0gdDAgJiYgc1swXS5zbGljZSgtMSk7XG4gICAgICAgaWYgKG9yZCkgcmV0dXJuICdvdGhlcic7XG4gICAgICAgcmV0dXJuIG4gPT0gMSAmJiB2MCA/ICdvbmUnIDogaSA9PSAyICYmIHYwID8gJ3R3bycgOiB2MCAmJiAobiA8IDAgfHwgbiA+IDEwKSAmJiB0MCAmJiBuMTAgPT0gMCA/ICdtYW55JyA6ICdvdGhlcic7XG4gICAgIH0sXG4gICAgIGhpOiBmdW5jdGlvbiBoaShuLCBvcmQpIHtcbiAgICAgICBpZiAob3JkKSByZXR1cm4gbiA9PSAxID8gJ29uZScgOiBuID09IDIgfHwgbiA9PSAzID8gJ3R3bycgOiBuID09IDQgPyAnZmV3JyA6IG4gPT0gNiA/ICdtYW55JyA6ICdvdGhlcic7XG4gICAgICAgcmV0dXJuIG4gPj0gMCAmJiBuIDw9IDEgPyAnb25lJyA6ICdvdGhlcic7XG4gICAgIH0sXG4gICAgIGhyOiBmdW5jdGlvbiBocihuLCBvcmQpIHtcbiAgICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgICBpID0gc1swXSxcbiAgICAgICAgICAgZiA9IHNbMV0gfHwgJycsXG4gICAgICAgICAgIHYwID0gIXNbMV0sXG4gICAgICAgICAgIGkxMCA9IGkuc2xpY2UoLTEpLFxuICAgICAgICAgICBpMTAwID0gaS5zbGljZSgtMiksXG4gICAgICAgICAgIGYxMCA9IGYuc2xpY2UoLTEpLFxuICAgICAgICAgICBmMTAwID0gZi5zbGljZSgtMik7XG4gICAgICAgaWYgKG9yZCkgcmV0dXJuICdvdGhlcic7XG4gICAgICAgcmV0dXJuIHYwICYmIGkxMCA9PSAxICYmIGkxMDAgIT0gMTEgfHwgZjEwID09IDEgJiYgZjEwMCAhPSAxMSA/ICdvbmUnIDogdjAgJiYgaTEwID49IDIgJiYgaTEwIDw9IDQgJiYgKGkxMDAgPCAxMiB8fCBpMTAwID4gMTQpIHx8IGYxMCA+PSAyICYmIGYxMCA8PSA0ICYmIChmMTAwIDwgMTIgfHwgZjEwMCA+IDE0KSA/ICdmZXcnIDogJ290aGVyJztcbiAgICAgfSxcbiAgICAgaHNiOiBmdW5jdGlvbiBoc2Iobiwgb3JkKSB7XG4gICAgICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgaSA9IHNbMF0sXG4gICAgICAgICAgIGYgPSBzWzFdIHx8ICcnLFxuICAgICAgICAgICB2MCA9ICFzWzFdLFxuICAgICAgICAgICBpMTAwID0gaS5zbGljZSgtMiksXG4gICAgICAgICAgIGYxMDAgPSBmLnNsaWNlKC0yKTtcbiAgICAgICBpZiAob3JkKSByZXR1cm4gJ290aGVyJztcbiAgICAgICByZXR1cm4gdjAgJiYgaTEwMCA9PSAxIHx8IGYxMDAgPT0gMSA/ICdvbmUnIDogdjAgJiYgaTEwMCA9PSAyIHx8IGYxMDAgPT0gMiA/ICd0d28nIDogdjAgJiYgKGkxMDAgPT0gMyB8fCBpMTAwID09IDQpIHx8IGYxMDAgPT0gMyB8fCBmMTAwID09IDQgPyAnZmV3JyA6ICdvdGhlcic7XG4gICAgIH0sXG4gICAgIGh1OiBmdW5jdGlvbiBodShuLCBvcmQpIHtcbiAgICAgICBpZiAob3JkKSByZXR1cm4gbiA9PSAxIHx8IG4gPT0gNSA/ICdvbmUnIDogJ290aGVyJztcbiAgICAgICByZXR1cm4gbiA9PSAxID8gJ29uZScgOiAnb3RoZXInO1xuICAgICB9LFxuICAgICBoeTogZnVuY3Rpb24gaHkobiwgb3JkKSB7XG4gICAgICAgaWYgKG9yZCkgcmV0dXJuIG4gPT0gMSA/ICdvbmUnIDogJ290aGVyJztcbiAgICAgICByZXR1cm4gbiA+PSAwICYmIG4gPCAyID8gJ29uZScgOiAnb3RoZXInO1xuICAgICB9LFxuICAgICBpYTogZCxcbiAgICAgaWQ6IGUsXG4gICAgIGlnOiBlLFxuICAgICBpaTogZSxcbiAgICAgaW86IGQsXG4gICAgIGlzOiBmdW5jdGlvbiBpcyhuLCBvcmQpIHtcbiAgICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgICBpID0gc1swXSxcbiAgICAgICAgICAgdDAgPSBOdW1iZXIoc1swXSkgPT0gbixcbiAgICAgICAgICAgaTEwID0gaS5zbGljZSgtMSksXG4gICAgICAgICAgIGkxMDAgPSBpLnNsaWNlKC0yKTtcbiAgICAgICBpZiAob3JkKSByZXR1cm4gJ290aGVyJztcbiAgICAgICByZXR1cm4gdDAgJiYgaTEwID09IDEgJiYgaTEwMCAhPSAxMSB8fCAhdDAgPyAnb25lJyA6ICdvdGhlcic7XG4gICAgIH0sXG4gICAgIGl0OiBmdW5jdGlvbiBpdChuLCBvcmQpIHtcbiAgICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgICB2MCA9ICFzWzFdO1xuICAgICAgIGlmIChvcmQpIHJldHVybiBuID09IDExIHx8IG4gPT0gOCB8fCBuID09IDgwIHx8IG4gPT0gODAwID8gJ21hbnknIDogJ290aGVyJztcbiAgICAgICByZXR1cm4gbiA9PSAxICYmIHYwID8gJ29uZScgOiAnb3RoZXInO1xuICAgICB9LFxuICAgICBpdTogZixcbiAgICAgaXc6IGZ1bmN0aW9uIGl3KG4sIG9yZCkge1xuICAgICAgIHZhciBzID0gU3RyaW5nKG4pLnNwbGl0KCcuJyksXG4gICAgICAgICAgIGkgPSBzWzBdLFxuICAgICAgICAgICB2MCA9ICFzWzFdLFxuICAgICAgICAgICB0MCA9IE51bWJlcihzWzBdKSA9PSBuLFxuICAgICAgICAgICBuMTAgPSB0MCAmJiBzWzBdLnNsaWNlKC0xKTtcbiAgICAgICBpZiAob3JkKSByZXR1cm4gJ290aGVyJztcbiAgICAgICByZXR1cm4gbiA9PSAxICYmIHYwID8gJ29uZScgOiBpID09IDIgJiYgdjAgPyAndHdvJyA6IHYwICYmIChuIDwgMCB8fCBuID4gMTApICYmIHQwICYmIG4xMCA9PSAwID8gJ21hbnknIDogJ290aGVyJztcbiAgICAgfSxcbiAgICAgamE6IGUsXG4gICAgIGpibzogZSxcbiAgICAgamdvOiBhLFxuICAgICBqaTogZCxcbiAgICAgam1jOiBhLFxuICAgICBqdjogZSxcbiAgICAganc6IGUsXG4gICAgIGthOiBmdW5jdGlvbiBrYShuLCBvcmQpIHtcbiAgICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgICBpID0gc1swXSxcbiAgICAgICAgICAgaTEwMCA9IGkuc2xpY2UoLTIpO1xuICAgICAgIGlmIChvcmQpIHJldHVybiBpID09IDEgPyAnb25lJyA6IGkgPT0gMCB8fCBpMTAwID49IDIgJiYgaTEwMCA8PSAyMCB8fCBpMTAwID09IDQwIHx8IGkxMDAgPT0gNjAgfHwgaTEwMCA9PSA4MCA/ICdtYW55JyA6ICdvdGhlcic7XG4gICAgICAgcmV0dXJuIG4gPT0gMSA/ICdvbmUnIDogJ290aGVyJztcbiAgICAgfSxcbiAgICAga2FiOiBmdW5jdGlvbiBrYWIobiwgb3JkKSB7XG4gICAgICAgaWYgKG9yZCkgcmV0dXJuICdvdGhlcic7XG4gICAgICAgcmV0dXJuIG4gPj0gMCAmJiBuIDwgMiA/ICdvbmUnIDogJ290aGVyJztcbiAgICAgfSxcbiAgICAga2FqOiBhLFxuICAgICBrY2c6IGEsXG4gICAgIGtkZTogZSxcbiAgICAga2VhOiBlLFxuICAgICBrazogZnVuY3Rpb24ga2sobiwgb3JkKSB7XG4gICAgICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgdDAgPSBOdW1iZXIoc1swXSkgPT0gbixcbiAgICAgICAgICAgbjEwID0gdDAgJiYgc1swXS5zbGljZSgtMSk7XG4gICAgICAgaWYgKG9yZCkgcmV0dXJuIG4xMCA9PSA2IHx8IG4xMCA9PSA5IHx8IHQwICYmIG4xMCA9PSAwICYmIG4gIT0gMCA/ICdtYW55JyA6ICdvdGhlcic7XG4gICAgICAgcmV0dXJuIG4gPT0gMSA/ICdvbmUnIDogJ290aGVyJztcbiAgICAgfSxcbiAgICAga2tqOiBhLFxuICAgICBrbDogYSxcbiAgICAga206IGUsXG4gICAgIGtuOiBjLFxuICAgICBrbzogZSxcbiAgICAga3M6IGEsXG4gICAgIGtzYjogYSxcbiAgICAga3NoOiBmdW5jdGlvbiBrc2gobiwgb3JkKSB7XG4gICAgICAgaWYgKG9yZCkgcmV0dXJuICdvdGhlcic7XG4gICAgICAgcmV0dXJuIG4gPT0gMCA/ICd6ZXJvJyA6IG4gPT0gMSA/ICdvbmUnIDogJ290aGVyJztcbiAgICAgfSxcbiAgICAga3U6IGEsXG4gICAgIGt3OiBmdW5jdGlvbiBrdyhuLCBvcmQpIHtcbiAgICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgICB0MCA9IE51bWJlcihzWzBdKSA9PSBuLFxuICAgICAgICAgICBuMTAwID0gdDAgJiYgc1swXS5zbGljZSgtMiksXG4gICAgICAgICAgIG4xMDAwID0gdDAgJiYgc1swXS5zbGljZSgtMyksXG4gICAgICAgICAgIG4xMDAwMDAgPSB0MCAmJiBzWzBdLnNsaWNlKC01KSxcbiAgICAgICAgICAgbjEwMDAwMDAgPSB0MCAmJiBzWzBdLnNsaWNlKC02KTtcbiAgICAgICBpZiAob3JkKSByZXR1cm4gdDAgJiYgbiA+PSAxICYmIG4gPD0gNCB8fCBuMTAwID49IDEgJiYgbjEwMCA8PSA0IHx8IG4xMDAgPj0gMjEgJiYgbjEwMCA8PSAyNCB8fCBuMTAwID49IDQxICYmIG4xMDAgPD0gNDQgfHwgbjEwMCA+PSA2MSAmJiBuMTAwIDw9IDY0IHx8IG4xMDAgPj0gODEgJiYgbjEwMCA8PSA4NCA/ICdvbmUnIDogbiA9PSA1IHx8IG4xMDAgPT0gNSA/ICdtYW55JyA6ICdvdGhlcic7XG4gICAgICAgcmV0dXJuIG4gPT0gMCA/ICd6ZXJvJyA6IG4gPT0gMSA/ICdvbmUnIDogbjEwMCA9PSAyIHx8IG4xMDAgPT0gMjIgfHwgbjEwMCA9PSA0MiB8fCBuMTAwID09IDYyIHx8IG4xMDAgPT0gODIgfHwgdDAgJiYgbjEwMDAgPT0gMCAmJiAobjEwMDAwMCA+PSAxMDAwICYmIG4xMDAwMDAgPD0gMjAwMDAgfHwgbjEwMDAwMCA9PSA0MDAwMCB8fCBuMTAwMDAwID09IDYwMDAwIHx8IG4xMDAwMDAgPT0gODAwMDApIHx8IG4gIT0gMCAmJiBuMTAwMDAwMCA9PSAxMDAwMDAgPyAndHdvJyA6IG4xMDAgPT0gMyB8fCBuMTAwID09IDIzIHx8IG4xMDAgPT0gNDMgfHwgbjEwMCA9PSA2MyB8fCBuMTAwID09IDgzID8gJ2ZldycgOiBuICE9IDEgJiYgKG4xMDAgPT0gMSB8fCBuMTAwID09IDIxIHx8IG4xMDAgPT0gNDEgfHwgbjEwMCA9PSA2MSB8fCBuMTAwID09IDgxKSA/ICdtYW55JyA6ICdvdGhlcic7XG4gICAgIH0sXG4gICAgIGt5OiBhLFxuICAgICBsYWc6IGZ1bmN0aW9uIGxhZyhuLCBvcmQpIHtcbiAgICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgICBpID0gc1swXTtcbiAgICAgICBpZiAob3JkKSByZXR1cm4gJ290aGVyJztcbiAgICAgICByZXR1cm4gbiA9PSAwID8gJ3plcm8nIDogKGkgPT0gMCB8fCBpID09IDEpICYmIG4gIT0gMCA/ICdvbmUnIDogJ290aGVyJztcbiAgICAgfSxcbiAgICAgbGI6IGEsXG4gICAgIGxnOiBhLFxuICAgICBsaWo6IGZ1bmN0aW9uIGxpaihuLCBvcmQpIHtcbiAgICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgICB2MCA9ICFzWzFdLFxuICAgICAgICAgICB0MCA9IE51bWJlcihzWzBdKSA9PSBuO1xuICAgICAgIGlmIChvcmQpIHJldHVybiBuID09IDExIHx8IG4gPT0gOCB8fCB0MCAmJiBuID49IDgwICYmIG4gPD0gODkgfHwgdDAgJiYgbiA+PSA4MDAgJiYgbiA8PSA4OTkgPyAnbWFueScgOiAnb3RoZXInO1xuICAgICAgIHJldHVybiBuID09IDEgJiYgdjAgPyAnb25lJyA6ICdvdGhlcic7XG4gICAgIH0sXG4gICAgIGxrdDogZSxcbiAgICAgbG46IGIsXG4gICAgIGxvOiBmdW5jdGlvbiBsbyhuLCBvcmQpIHtcbiAgICAgICBpZiAob3JkKSByZXR1cm4gbiA9PSAxID8gJ29uZScgOiAnb3RoZXInO1xuICAgICAgIHJldHVybiAnb3RoZXInO1xuICAgICB9LFxuICAgICBsdDogZnVuY3Rpb24gbHQobiwgb3JkKSB7XG4gICAgICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgZiA9IHNbMV0gfHwgJycsXG4gICAgICAgICAgIHQwID0gTnVtYmVyKHNbMF0pID09IG4sXG4gICAgICAgICAgIG4xMCA9IHQwICYmIHNbMF0uc2xpY2UoLTEpLFxuICAgICAgICAgICBuMTAwID0gdDAgJiYgc1swXS5zbGljZSgtMik7XG4gICAgICAgaWYgKG9yZCkgcmV0dXJuICdvdGhlcic7XG4gICAgICAgcmV0dXJuIG4xMCA9PSAxICYmIChuMTAwIDwgMTEgfHwgbjEwMCA+IDE5KSA/ICdvbmUnIDogbjEwID49IDIgJiYgbjEwIDw9IDkgJiYgKG4xMDAgPCAxMSB8fCBuMTAwID4gMTkpID8gJ2ZldycgOiBmICE9IDAgPyAnbWFueScgOiAnb3RoZXInO1xuICAgICB9LFxuICAgICBsdjogZnVuY3Rpb24gbHYobiwgb3JkKSB7XG4gICAgICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgZiA9IHNbMV0gfHwgJycsXG4gICAgICAgICAgIHYgPSBmLmxlbmd0aCxcbiAgICAgICAgICAgdDAgPSBOdW1iZXIoc1swXSkgPT0gbixcbiAgICAgICAgICAgbjEwID0gdDAgJiYgc1swXS5zbGljZSgtMSksXG4gICAgICAgICAgIG4xMDAgPSB0MCAmJiBzWzBdLnNsaWNlKC0yKSxcbiAgICAgICAgICAgZjEwMCA9IGYuc2xpY2UoLTIpLFxuICAgICAgICAgICBmMTAgPSBmLnNsaWNlKC0xKTtcbiAgICAgICBpZiAob3JkKSByZXR1cm4gJ290aGVyJztcbiAgICAgICByZXR1cm4gdDAgJiYgbjEwID09IDAgfHwgbjEwMCA+PSAxMSAmJiBuMTAwIDw9IDE5IHx8IHYgPT0gMiAmJiBmMTAwID49IDExICYmIGYxMDAgPD0gMTkgPyAnemVybycgOiBuMTAgPT0gMSAmJiBuMTAwICE9IDExIHx8IHYgPT0gMiAmJiBmMTAgPT0gMSAmJiBmMTAwICE9IDExIHx8IHYgIT0gMiAmJiBmMTAgPT0gMSA/ICdvbmUnIDogJ290aGVyJztcbiAgICAgfSxcbiAgICAgbWFzOiBhLFxuICAgICBtZzogYixcbiAgICAgbWdvOiBhLFxuICAgICBtazogZnVuY3Rpb24gbWsobiwgb3JkKSB7XG4gICAgICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgaSA9IHNbMF0sXG4gICAgICAgICAgIGYgPSBzWzFdIHx8ICcnLFxuICAgICAgICAgICB2MCA9ICFzWzFdLFxuICAgICAgICAgICBpMTAgPSBpLnNsaWNlKC0xKSxcbiAgICAgICAgICAgaTEwMCA9IGkuc2xpY2UoLTIpLFxuICAgICAgICAgICBmMTAgPSBmLnNsaWNlKC0xKSxcbiAgICAgICAgICAgZjEwMCA9IGYuc2xpY2UoLTIpO1xuICAgICAgIGlmIChvcmQpIHJldHVybiBpMTAgPT0gMSAmJiBpMTAwICE9IDExID8gJ29uZScgOiBpMTAgPT0gMiAmJiBpMTAwICE9IDEyID8gJ3R3bycgOiAoaTEwID09IDcgfHwgaTEwID09IDgpICYmIGkxMDAgIT0gMTcgJiYgaTEwMCAhPSAxOCA/ICdtYW55JyA6ICdvdGhlcic7XG4gICAgICAgcmV0dXJuIHYwICYmIGkxMCA9PSAxICYmIGkxMDAgIT0gMTEgfHwgZjEwID09IDEgJiYgZjEwMCAhPSAxMSA/ICdvbmUnIDogJ290aGVyJztcbiAgICAgfSxcbiAgICAgbWw6IGEsXG4gICAgIG1uOiBhLFxuICAgICBtbzogZnVuY3Rpb24gbW8obiwgb3JkKSB7XG4gICAgICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgdjAgPSAhc1sxXSxcbiAgICAgICAgICAgdDAgPSBOdW1iZXIoc1swXSkgPT0gbixcbiAgICAgICAgICAgbjEwMCA9IHQwICYmIHNbMF0uc2xpY2UoLTIpO1xuICAgICAgIGlmIChvcmQpIHJldHVybiBuID09IDEgPyAnb25lJyA6ICdvdGhlcic7XG4gICAgICAgcmV0dXJuIG4gPT0gMSAmJiB2MCA/ICdvbmUnIDogIXYwIHx8IG4gPT0gMCB8fCBuMTAwID49IDIgJiYgbjEwMCA8PSAxOSA/ICdmZXcnIDogJ290aGVyJztcbiAgICAgfSxcbiAgICAgbXI6IGZ1bmN0aW9uIG1yKG4sIG9yZCkge1xuICAgICAgIGlmIChvcmQpIHJldHVybiBuID09IDEgPyAnb25lJyA6IG4gPT0gMiB8fCBuID09IDMgPyAndHdvJyA6IG4gPT0gNCA/ICdmZXcnIDogJ290aGVyJztcbiAgICAgICByZXR1cm4gbiA9PSAxID8gJ29uZScgOiAnb3RoZXInO1xuICAgICB9LFxuICAgICBtczogZnVuY3Rpb24gbXMobiwgb3JkKSB7XG4gICAgICAgaWYgKG9yZCkgcmV0dXJuIG4gPT0gMSA/ICdvbmUnIDogJ290aGVyJztcbiAgICAgICByZXR1cm4gJ290aGVyJztcbiAgICAgfSxcbiAgICAgbXQ6IGZ1bmN0aW9uIG10KG4sIG9yZCkge1xuICAgICAgIHZhciBzID0gU3RyaW5nKG4pLnNwbGl0KCcuJyksXG4gICAgICAgICAgIHQwID0gTnVtYmVyKHNbMF0pID09IG4sXG4gICAgICAgICAgIG4xMDAgPSB0MCAmJiBzWzBdLnNsaWNlKC0yKTtcbiAgICAgICBpZiAob3JkKSByZXR1cm4gJ290aGVyJztcbiAgICAgICByZXR1cm4gbiA9PSAxID8gJ29uZScgOiBuID09IDAgfHwgbjEwMCA+PSAyICYmIG4xMDAgPD0gMTAgPyAnZmV3JyA6IG4xMDAgPj0gMTEgJiYgbjEwMCA8PSAxOSA/ICdtYW55JyA6ICdvdGhlcic7XG4gICAgIH0sXG4gICAgIG15OiBlLFxuICAgICBuYWg6IGEsXG4gICAgIG5hcTogZixcbiAgICAgbmI6IGEsXG4gICAgIG5kOiBhLFxuICAgICBuZTogZnVuY3Rpb24gbmUobiwgb3JkKSB7XG4gICAgICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgdDAgPSBOdW1iZXIoc1swXSkgPT0gbjtcbiAgICAgICBpZiAob3JkKSByZXR1cm4gdDAgJiYgbiA+PSAxICYmIG4gPD0gNCA/ICdvbmUnIDogJ290aGVyJztcbiAgICAgICByZXR1cm4gbiA9PSAxID8gJ29uZScgOiAnb3RoZXInO1xuICAgICB9LFxuICAgICBubDogZCxcbiAgICAgbm46IGEsXG4gICAgIG5uaDogYSxcbiAgICAgbm86IGEsXG4gICAgIG5xbzogZSxcbiAgICAgbnI6IGEsXG4gICAgIG5zbzogYixcbiAgICAgbnk6IGEsXG4gICAgIG55bjogYSxcbiAgICAgb206IGEsXG4gICAgIG9yOiBmdW5jdGlvbiBvcihuLCBvcmQpIHtcbiAgICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgICB0MCA9IE51bWJlcihzWzBdKSA9PSBuO1xuICAgICAgIGlmIChvcmQpIHJldHVybiBuID09IDEgfHwgbiA9PSA1IHx8IHQwICYmIG4gPj0gNyAmJiBuIDw9IDkgPyAnb25lJyA6IG4gPT0gMiB8fCBuID09IDMgPyAndHdvJyA6IG4gPT0gNCA/ICdmZXcnIDogbiA9PSA2ID8gJ21hbnknIDogJ290aGVyJztcbiAgICAgICByZXR1cm4gbiA9PSAxID8gJ29uZScgOiAnb3RoZXInO1xuICAgICB9LFxuICAgICBvczogYSxcbiAgICAgb3NhOiBlLFxuICAgICBwYTogYixcbiAgICAgcGFwOiBhLFxuICAgICBwY206IGMsXG4gICAgIHBsOiBmdW5jdGlvbiBwbChuLCBvcmQpIHtcbiAgICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgICBpID0gc1swXSxcbiAgICAgICAgICAgdjAgPSAhc1sxXSxcbiAgICAgICAgICAgaTEwID0gaS5zbGljZSgtMSksXG4gICAgICAgICAgIGkxMDAgPSBpLnNsaWNlKC0yKTtcbiAgICAgICBpZiAob3JkKSByZXR1cm4gJ290aGVyJztcbiAgICAgICByZXR1cm4gbiA9PSAxICYmIHYwID8gJ29uZScgOiB2MCAmJiBpMTAgPj0gMiAmJiBpMTAgPD0gNCAmJiAoaTEwMCA8IDEyIHx8IGkxMDAgPiAxNCkgPyAnZmV3JyA6IHYwICYmIGkgIT0gMSAmJiAoaTEwID09IDAgfHwgaTEwID09IDEpIHx8IHYwICYmIGkxMCA+PSA1ICYmIGkxMCA8PSA5IHx8IHYwICYmIGkxMDAgPj0gMTIgJiYgaTEwMCA8PSAxNCA/ICdtYW55JyA6ICdvdGhlcic7XG4gICAgIH0sXG4gICAgIHByZzogZnVuY3Rpb24gcHJnKG4sIG9yZCkge1xuICAgICAgIHZhciBzID0gU3RyaW5nKG4pLnNwbGl0KCcuJyksXG4gICAgICAgICAgIGYgPSBzWzFdIHx8ICcnLFxuICAgICAgICAgICB2ID0gZi5sZW5ndGgsXG4gICAgICAgICAgIHQwID0gTnVtYmVyKHNbMF0pID09IG4sXG4gICAgICAgICAgIG4xMCA9IHQwICYmIHNbMF0uc2xpY2UoLTEpLFxuICAgICAgICAgICBuMTAwID0gdDAgJiYgc1swXS5zbGljZSgtMiksXG4gICAgICAgICAgIGYxMDAgPSBmLnNsaWNlKC0yKSxcbiAgICAgICAgICAgZjEwID0gZi5zbGljZSgtMSk7XG4gICAgICAgaWYgKG9yZCkgcmV0dXJuICdvdGhlcic7XG4gICAgICAgcmV0dXJuIHQwICYmIG4xMCA9PSAwIHx8IG4xMDAgPj0gMTEgJiYgbjEwMCA8PSAxOSB8fCB2ID09IDIgJiYgZjEwMCA+PSAxMSAmJiBmMTAwIDw9IDE5ID8gJ3plcm8nIDogbjEwID09IDEgJiYgbjEwMCAhPSAxMSB8fCB2ID09IDIgJiYgZjEwID09IDEgJiYgZjEwMCAhPSAxMSB8fCB2ICE9IDIgJiYgZjEwID09IDEgPyAnb25lJyA6ICdvdGhlcic7XG4gICAgIH0sXG4gICAgIHBzOiBhLFxuICAgICBwdDogZnVuY3Rpb24gcHQobiwgb3JkKSB7XG4gICAgICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgaSA9IHNbMF07XG4gICAgICAgaWYgKG9yZCkgcmV0dXJuICdvdGhlcic7XG4gICAgICAgcmV0dXJuIGkgPT0gMCB8fCBpID09IDEgPyAnb25lJyA6ICdvdGhlcic7XG4gICAgIH0sXG4gICAgIHB0X1BUOiBkLFxuICAgICBybTogYSxcbiAgICAgcm86IGZ1bmN0aW9uIHJvKG4sIG9yZCkge1xuICAgICAgIHZhciBzID0gU3RyaW5nKG4pLnNwbGl0KCcuJyksXG4gICAgICAgICAgIHYwID0gIXNbMV0sXG4gICAgICAgICAgIHQwID0gTnVtYmVyKHNbMF0pID09IG4sXG4gICAgICAgICAgIG4xMDAgPSB0MCAmJiBzWzBdLnNsaWNlKC0yKTtcbiAgICAgICBpZiAob3JkKSByZXR1cm4gbiA9PSAxID8gJ29uZScgOiAnb3RoZXInO1xuICAgICAgIHJldHVybiBuID09IDEgJiYgdjAgPyAnb25lJyA6ICF2MCB8fCBuID09IDAgfHwgbjEwMCA+PSAyICYmIG4xMDAgPD0gMTkgPyAnZmV3JyA6ICdvdGhlcic7XG4gICAgIH0sXG4gICAgIHJvZjogYSxcbiAgICAgcm9vdDogZSxcbiAgICAgcnU6IGZ1bmN0aW9uIHJ1KG4sIG9yZCkge1xuICAgICAgIHZhciBzID0gU3RyaW5nKG4pLnNwbGl0KCcuJyksXG4gICAgICAgICAgIGkgPSBzWzBdLFxuICAgICAgICAgICB2MCA9ICFzWzFdLFxuICAgICAgICAgICBpMTAgPSBpLnNsaWNlKC0xKSxcbiAgICAgICAgICAgaTEwMCA9IGkuc2xpY2UoLTIpO1xuICAgICAgIGlmIChvcmQpIHJldHVybiAnb3RoZXInO1xuICAgICAgIHJldHVybiB2MCAmJiBpMTAgPT0gMSAmJiBpMTAwICE9IDExID8gJ29uZScgOiB2MCAmJiBpMTAgPj0gMiAmJiBpMTAgPD0gNCAmJiAoaTEwMCA8IDEyIHx8IGkxMDAgPiAxNCkgPyAnZmV3JyA6IHYwICYmIGkxMCA9PSAwIHx8IHYwICYmIGkxMCA+PSA1ICYmIGkxMCA8PSA5IHx8IHYwICYmIGkxMDAgPj0gMTEgJiYgaTEwMCA8PSAxNCA/ICdtYW55JyA6ICdvdGhlcic7XG4gICAgIH0sXG4gICAgIHJ3azogYSxcbiAgICAgc2FoOiBlLFxuICAgICBzYXE6IGEsXG4gICAgIHNhdDogZixcbiAgICAgc2M6IGZ1bmN0aW9uIHNjKG4sIG9yZCkge1xuICAgICAgIHZhciBzID0gU3RyaW5nKG4pLnNwbGl0KCcuJyksXG4gICAgICAgICAgIHYwID0gIXNbMV07XG4gICAgICAgaWYgKG9yZCkgcmV0dXJuIG4gPT0gMTEgfHwgbiA9PSA4IHx8IG4gPT0gODAgfHwgbiA9PSA4MDAgPyAnbWFueScgOiAnb3RoZXInO1xuICAgICAgIHJldHVybiBuID09IDEgJiYgdjAgPyAnb25lJyA6ICdvdGhlcic7XG4gICAgIH0sXG4gICAgIHNjbjogZnVuY3Rpb24gc2NuKG4sIG9yZCkge1xuICAgICAgIHZhciBzID0gU3RyaW5nKG4pLnNwbGl0KCcuJyksXG4gICAgICAgICAgIHYwID0gIXNbMV07XG4gICAgICAgaWYgKG9yZCkgcmV0dXJuIG4gPT0gMTEgfHwgbiA9PSA4IHx8IG4gPT0gODAgfHwgbiA9PSA4MDAgPyAnbWFueScgOiAnb3RoZXInO1xuICAgICAgIHJldHVybiBuID09IDEgJiYgdjAgPyAnb25lJyA6ICdvdGhlcic7XG4gICAgIH0sXG4gICAgIHNkOiBhLFxuICAgICBzZGg6IGEsXG4gICAgIHNlOiBmLFxuICAgICBzZWg6IGEsXG4gICAgIHNlczogZSxcbiAgICAgc2c6IGUsXG4gICAgIHNoOiBmdW5jdGlvbiBzaChuLCBvcmQpIHtcbiAgICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgICBpID0gc1swXSxcbiAgICAgICAgICAgZiA9IHNbMV0gfHwgJycsXG4gICAgICAgICAgIHYwID0gIXNbMV0sXG4gICAgICAgICAgIGkxMCA9IGkuc2xpY2UoLTEpLFxuICAgICAgICAgICBpMTAwID0gaS5zbGljZSgtMiksXG4gICAgICAgICAgIGYxMCA9IGYuc2xpY2UoLTEpLFxuICAgICAgICAgICBmMTAwID0gZi5zbGljZSgtMik7XG4gICAgICAgaWYgKG9yZCkgcmV0dXJuICdvdGhlcic7XG4gICAgICAgcmV0dXJuIHYwICYmIGkxMCA9PSAxICYmIGkxMDAgIT0gMTEgfHwgZjEwID09IDEgJiYgZjEwMCAhPSAxMSA/ICdvbmUnIDogdjAgJiYgaTEwID49IDIgJiYgaTEwIDw9IDQgJiYgKGkxMDAgPCAxMiB8fCBpMTAwID4gMTQpIHx8IGYxMCA+PSAyICYmIGYxMCA8PSA0ICYmIChmMTAwIDwgMTIgfHwgZjEwMCA+IDE0KSA/ICdmZXcnIDogJ290aGVyJztcbiAgICAgfSxcbiAgICAgc2hpOiBmdW5jdGlvbiBzaGkobiwgb3JkKSB7XG4gICAgICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgdDAgPSBOdW1iZXIoc1swXSkgPT0gbjtcbiAgICAgICBpZiAob3JkKSByZXR1cm4gJ290aGVyJztcbiAgICAgICByZXR1cm4gbiA+PSAwICYmIG4gPD0gMSA/ICdvbmUnIDogdDAgJiYgbiA+PSAyICYmIG4gPD0gMTAgPyAnZmV3JyA6ICdvdGhlcic7XG4gICAgIH0sXG4gICAgIHNpOiBmdW5jdGlvbiBzaShuLCBvcmQpIHtcbiAgICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgICBpID0gc1swXSxcbiAgICAgICAgICAgZiA9IHNbMV0gfHwgJyc7XG4gICAgICAgaWYgKG9yZCkgcmV0dXJuICdvdGhlcic7XG4gICAgICAgcmV0dXJuIG4gPT0gMCB8fCBuID09IDEgfHwgaSA9PSAwICYmIGYgPT0gMSA/ICdvbmUnIDogJ290aGVyJztcbiAgICAgfSxcbiAgICAgc2s6IGZ1bmN0aW9uIHNrKG4sIG9yZCkge1xuICAgICAgIHZhciBzID0gU3RyaW5nKG4pLnNwbGl0KCcuJyksXG4gICAgICAgICAgIGkgPSBzWzBdLFxuICAgICAgICAgICB2MCA9ICFzWzFdO1xuICAgICAgIGlmIChvcmQpIHJldHVybiAnb3RoZXInO1xuICAgICAgIHJldHVybiBuID09IDEgJiYgdjAgPyAnb25lJyA6IGkgPj0gMiAmJiBpIDw9IDQgJiYgdjAgPyAnZmV3JyA6ICF2MCA/ICdtYW55JyA6ICdvdGhlcic7XG4gICAgIH0sXG4gICAgIHNsOiBmdW5jdGlvbiBzbChuLCBvcmQpIHtcbiAgICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgICBpID0gc1swXSxcbiAgICAgICAgICAgdjAgPSAhc1sxXSxcbiAgICAgICAgICAgaTEwMCA9IGkuc2xpY2UoLTIpO1xuICAgICAgIGlmIChvcmQpIHJldHVybiAnb3RoZXInO1xuICAgICAgIHJldHVybiB2MCAmJiBpMTAwID09IDEgPyAnb25lJyA6IHYwICYmIGkxMDAgPT0gMiA/ICd0d28nIDogdjAgJiYgKGkxMDAgPT0gMyB8fCBpMTAwID09IDQpIHx8ICF2MCA/ICdmZXcnIDogJ290aGVyJztcbiAgICAgfSxcbiAgICAgc21hOiBmLFxuICAgICBzbWk6IGYsXG4gICAgIHNtajogZixcbiAgICAgc21uOiBmLFxuICAgICBzbXM6IGYsXG4gICAgIHNuOiBhLFxuICAgICBzbzogYSxcbiAgICAgc3E6IGZ1bmN0aW9uIHNxKG4sIG9yZCkge1xuICAgICAgIHZhciBzID0gU3RyaW5nKG4pLnNwbGl0KCcuJyksXG4gICAgICAgICAgIHQwID0gTnVtYmVyKHNbMF0pID09IG4sXG4gICAgICAgICAgIG4xMCA9IHQwICYmIHNbMF0uc2xpY2UoLTEpLFxuICAgICAgICAgICBuMTAwID0gdDAgJiYgc1swXS5zbGljZSgtMik7XG4gICAgICAgaWYgKG9yZCkgcmV0dXJuIG4gPT0gMSA/ICdvbmUnIDogbjEwID09IDQgJiYgbjEwMCAhPSAxNCA/ICdtYW55JyA6ICdvdGhlcic7XG4gICAgICAgcmV0dXJuIG4gPT0gMSA/ICdvbmUnIDogJ290aGVyJztcbiAgICAgfSxcbiAgICAgc3I6IGZ1bmN0aW9uIHNyKG4sIG9yZCkge1xuICAgICAgIHZhciBzID0gU3RyaW5nKG4pLnNwbGl0KCcuJyksXG4gICAgICAgICAgIGkgPSBzWzBdLFxuICAgICAgICAgICBmID0gc1sxXSB8fCAnJyxcbiAgICAgICAgICAgdjAgPSAhc1sxXSxcbiAgICAgICAgICAgaTEwID0gaS5zbGljZSgtMSksXG4gICAgICAgICAgIGkxMDAgPSBpLnNsaWNlKC0yKSxcbiAgICAgICAgICAgZjEwID0gZi5zbGljZSgtMSksXG4gICAgICAgICAgIGYxMDAgPSBmLnNsaWNlKC0yKTtcbiAgICAgICBpZiAob3JkKSByZXR1cm4gJ290aGVyJztcbiAgICAgICByZXR1cm4gdjAgJiYgaTEwID09IDEgJiYgaTEwMCAhPSAxMSB8fCBmMTAgPT0gMSAmJiBmMTAwICE9IDExID8gJ29uZScgOiB2MCAmJiBpMTAgPj0gMiAmJiBpMTAgPD0gNCAmJiAoaTEwMCA8IDEyIHx8IGkxMDAgPiAxNCkgfHwgZjEwID49IDIgJiYgZjEwIDw9IDQgJiYgKGYxMDAgPCAxMiB8fCBmMTAwID4gMTQpID8gJ2ZldycgOiAnb3RoZXInO1xuICAgICB9LFxuICAgICBzczogYSxcbiAgICAgc3N5OiBhLFxuICAgICBzdDogYSxcbiAgICAgc3U6IGUsXG4gICAgIHN2OiBmdW5jdGlvbiBzdihuLCBvcmQpIHtcbiAgICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgICB2MCA9ICFzWzFdLFxuICAgICAgICAgICB0MCA9IE51bWJlcihzWzBdKSA9PSBuLFxuICAgICAgICAgICBuMTAgPSB0MCAmJiBzWzBdLnNsaWNlKC0xKSxcbiAgICAgICAgICAgbjEwMCA9IHQwICYmIHNbMF0uc2xpY2UoLTIpO1xuICAgICAgIGlmIChvcmQpIHJldHVybiAobjEwID09IDEgfHwgbjEwID09IDIpICYmIG4xMDAgIT0gMTEgJiYgbjEwMCAhPSAxMiA/ICdvbmUnIDogJ290aGVyJztcbiAgICAgICByZXR1cm4gbiA9PSAxICYmIHYwID8gJ29uZScgOiAnb3RoZXInO1xuICAgICB9LFxuICAgICBzdzogZCxcbiAgICAgc3lyOiBhLFxuICAgICB0YTogYSxcbiAgICAgdGU6IGEsXG4gICAgIHRlbzogYSxcbiAgICAgdGg6IGUsXG4gICAgIHRpOiBiLFxuICAgICB0aWc6IGEsXG4gICAgIHRrOiBmdW5jdGlvbiB0ayhuLCBvcmQpIHtcbiAgICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgICB0MCA9IE51bWJlcihzWzBdKSA9PSBuLFxuICAgICAgICAgICBuMTAgPSB0MCAmJiBzWzBdLnNsaWNlKC0xKTtcbiAgICAgICBpZiAob3JkKSByZXR1cm4gbjEwID09IDYgfHwgbjEwID09IDkgfHwgbiA9PSAxMCA/ICdmZXcnIDogJ290aGVyJztcbiAgICAgICByZXR1cm4gbiA9PSAxID8gJ29uZScgOiAnb3RoZXInO1xuICAgICB9LFxuICAgICB0bDogZnVuY3Rpb24gdGwobiwgb3JkKSB7XG4gICAgICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgaSA9IHNbMF0sXG4gICAgICAgICAgIGYgPSBzWzFdIHx8ICcnLFxuICAgICAgICAgICB2MCA9ICFzWzFdLFxuICAgICAgICAgICBpMTAgPSBpLnNsaWNlKC0xKSxcbiAgICAgICAgICAgZjEwID0gZi5zbGljZSgtMSk7XG4gICAgICAgaWYgKG9yZCkgcmV0dXJuIG4gPT0gMSA/ICdvbmUnIDogJ290aGVyJztcbiAgICAgICByZXR1cm4gdjAgJiYgKGkgPT0gMSB8fCBpID09IDIgfHwgaSA9PSAzKSB8fCB2MCAmJiBpMTAgIT0gNCAmJiBpMTAgIT0gNiAmJiBpMTAgIT0gOSB8fCAhdjAgJiYgZjEwICE9IDQgJiYgZjEwICE9IDYgJiYgZjEwICE9IDkgPyAnb25lJyA6ICdvdGhlcic7XG4gICAgIH0sXG4gICAgIHRuOiBhLFxuICAgICB0bzogZSxcbiAgICAgdHI6IGEsXG4gICAgIHRzOiBhLFxuICAgICB0em06IGZ1bmN0aW9uIHR6bShuLCBvcmQpIHtcbiAgICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgICB0MCA9IE51bWJlcihzWzBdKSA9PSBuO1xuICAgICAgIGlmIChvcmQpIHJldHVybiAnb3RoZXInO1xuICAgICAgIHJldHVybiBuID09IDAgfHwgbiA9PSAxIHx8IHQwICYmIG4gPj0gMTEgJiYgbiA8PSA5OSA/ICdvbmUnIDogJ290aGVyJztcbiAgICAgfSxcbiAgICAgdWc6IGEsXG4gICAgIHVrOiBmdW5jdGlvbiB1ayhuLCBvcmQpIHtcbiAgICAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICAgICBpID0gc1swXSxcbiAgICAgICAgICAgdjAgPSAhc1sxXSxcbiAgICAgICAgICAgdDAgPSBOdW1iZXIoc1swXSkgPT0gbixcbiAgICAgICAgICAgbjEwID0gdDAgJiYgc1swXS5zbGljZSgtMSksXG4gICAgICAgICAgIG4xMDAgPSB0MCAmJiBzWzBdLnNsaWNlKC0yKSxcbiAgICAgICAgICAgaTEwID0gaS5zbGljZSgtMSksXG4gICAgICAgICAgIGkxMDAgPSBpLnNsaWNlKC0yKTtcbiAgICAgICBpZiAob3JkKSByZXR1cm4gbjEwID09IDMgJiYgbjEwMCAhPSAxMyA/ICdmZXcnIDogJ290aGVyJztcbiAgICAgICByZXR1cm4gdjAgJiYgaTEwID09IDEgJiYgaTEwMCAhPSAxMSA/ICdvbmUnIDogdjAgJiYgaTEwID49IDIgJiYgaTEwIDw9IDQgJiYgKGkxMDAgPCAxMiB8fCBpMTAwID4gMTQpID8gJ2ZldycgOiB2MCAmJiBpMTAgPT0gMCB8fCB2MCAmJiBpMTAgPj0gNSAmJiBpMTAgPD0gOSB8fCB2MCAmJiBpMTAwID49IDExICYmIGkxMDAgPD0gMTQgPyAnbWFueScgOiAnb3RoZXInO1xuICAgICB9LFxuICAgICB1cjogZCxcbiAgICAgdXo6IGEsXG4gICAgIHZlOiBhLFxuICAgICB2aTogZnVuY3Rpb24gdmkobiwgb3JkKSB7XG4gICAgICAgaWYgKG9yZCkgcmV0dXJuIG4gPT0gMSA/ICdvbmUnIDogJ290aGVyJztcbiAgICAgICByZXR1cm4gJ290aGVyJztcbiAgICAgfSxcbiAgICAgdm86IGEsXG4gICAgIHZ1bjogYSxcbiAgICAgd2E6IGIsXG4gICAgIHdhZTogYSxcbiAgICAgd286IGUsXG4gICAgIHhoOiBhLFxuICAgICB4b2c6IGEsXG4gICAgIHlpOiBkLFxuICAgICB5bzogZSxcbiAgICAgeXVlOiBlLFxuICAgICB6aDogZSxcbiAgICAgenU6IGNcbiAgIH0pO1xuIH0pKHBsdXJhbHMkMSk7XG5cbiB2YXIgcGx1cmFscyA9IC8qQF9fUFVSRV9fKi9nZXREZWZhdWx0RXhwb3J0RnJvbUNqcyhwbHVyYWxzJDEuZXhwb3J0cyk7XG5cbiB2YXIgUCA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKC8qI19fUFVSRV9fKi9PYmplY3QuYXNzaWduKC8qI19fUFVSRV9fKi9PYmplY3QuY3JlYXRlKG51bGwpLCBwbHVyYWxzJDEuZXhwb3J0cywge1xuICAgJ2RlZmF1bHQnOiBwbHVyYWxzXG4gfSkpO1xuXG4gdmFyIHBsdXJhbENhdGVnb3JpZXMkMSA9IHtleHBvcnRzOiB7fX07XG5cbiAoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuICAgdmFyIHogPSBcInplcm9cIixcbiAgICAgICBvID0gXCJvbmVcIixcbiAgICAgICB0ID0gXCJ0d29cIixcbiAgICAgICBmID0gXCJmZXdcIixcbiAgICAgICBtID0gXCJtYW55XCIsXG4gICAgICAgeCA9IFwib3RoZXJcIjtcbiAgIHZhciBhID0ge1xuICAgICBjYXJkaW5hbDogW28sIHhdLFxuICAgICBvcmRpbmFsOiBbeF1cbiAgIH07XG4gICB2YXIgYiA9IHtcbiAgICAgY2FyZGluYWw6IFt4XSxcbiAgICAgb3JkaW5hbDogW3hdXG4gICB9O1xuICAgdmFyIGMgPSB7XG4gICAgIGNhcmRpbmFsOiBbbywgZiwgbSwgeF0sXG4gICAgIG9yZGluYWw6IFt4XVxuICAgfTtcbiAgIHZhciBkID0ge1xuICAgICBjYXJkaW5hbDogW28sIHhdLFxuICAgICBvcmRpbmFsOiBbbywgeF1cbiAgIH07XG4gICB2YXIgZSA9IHtcbiAgICAgY2FyZGluYWw6IFtvLCB0LCB4XSxcbiAgICAgb3JkaW5hbDogW3hdXG4gICB9O1xuXG4gICAoZnVuY3Rpb24gKHJvb3QsIHBsdXJhbENhdGVnb3JpZXMpIHtcbiAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHBsdXJhbENhdGVnb3JpZXMsICdfX2VzTW9kdWxlJywge1xuICAgICAgIHZhbHVlOiB0cnVlXG4gICAgIH0pO1xuICAgICBtb2R1bGUuZXhwb3J0cyA9IHBsdXJhbENhdGVnb3JpZXM7XG4gICB9KShjb21tb25qc0dsb2JhbCwge1xuICAgICBfaW46IGIsXG4gICAgIGFmOiBhLFxuICAgICBhazogYSxcbiAgICAgYW06IGEsXG4gICAgIGFuOiBhLFxuICAgICBhcjoge1xuICAgICAgIGNhcmRpbmFsOiBbeiwgbywgdCwgZiwgbSwgeF0sXG4gICAgICAgb3JkaW5hbDogW3hdXG4gICAgIH0sXG4gICAgIGFyczoge1xuICAgICAgIGNhcmRpbmFsOiBbeiwgbywgdCwgZiwgbSwgeF0sXG4gICAgICAgb3JkaW5hbDogW3hdXG4gICAgIH0sXG4gICAgIGFzOiB7XG4gICAgICAgY2FyZGluYWw6IFtvLCB4XSxcbiAgICAgICBvcmRpbmFsOiBbbywgdCwgZiwgbSwgeF1cbiAgICAgfSxcbiAgICAgYXNhOiBhLFxuICAgICBhc3Q6IGEsXG4gICAgIGF6OiB7XG4gICAgICAgY2FyZGluYWw6IFtvLCB4XSxcbiAgICAgICBvcmRpbmFsOiBbbywgZiwgbSwgeF1cbiAgICAgfSxcbiAgICAgYmU6IHtcbiAgICAgICBjYXJkaW5hbDogW28sIGYsIG0sIHhdLFxuICAgICAgIG9yZGluYWw6IFtmLCB4XVxuICAgICB9LFxuICAgICBiZW06IGEsXG4gICAgIGJlejogYSxcbiAgICAgYmc6IGEsXG4gICAgIGJobzogYSxcbiAgICAgYm06IGIsXG4gICAgIGJuOiB7XG4gICAgICAgY2FyZGluYWw6IFtvLCB4XSxcbiAgICAgICBvcmRpbmFsOiBbbywgdCwgZiwgbSwgeF1cbiAgICAgfSxcbiAgICAgYm86IGIsXG4gICAgIGJyOiB7XG4gICAgICAgY2FyZGluYWw6IFtvLCB0LCBmLCBtLCB4XSxcbiAgICAgICBvcmRpbmFsOiBbeF1cbiAgICAgfSxcbiAgICAgYnJ4OiBhLFxuICAgICBiczoge1xuICAgICAgIGNhcmRpbmFsOiBbbywgZiwgeF0sXG4gICAgICAgb3JkaW5hbDogW3hdXG4gICAgIH0sXG4gICAgIGNhOiB7XG4gICAgICAgY2FyZGluYWw6IFtvLCB4XSxcbiAgICAgICBvcmRpbmFsOiBbbywgdCwgZiwgeF1cbiAgICAgfSxcbiAgICAgY2U6IGEsXG4gICAgIGNlYjogYSxcbiAgICAgY2dnOiBhLFxuICAgICBjaHI6IGEsXG4gICAgIGNrYjogYSxcbiAgICAgY3M6IGMsXG4gICAgIGN5OiB7XG4gICAgICAgY2FyZGluYWw6IFt6LCBvLCB0LCBmLCBtLCB4XSxcbiAgICAgICBvcmRpbmFsOiBbeiwgbywgdCwgZiwgbSwgeF1cbiAgICAgfSxcbiAgICAgZGE6IGEsXG4gICAgIGRlOiBhLFxuICAgICBkb2k6IGEsXG4gICAgIGRzYjoge1xuICAgICAgIGNhcmRpbmFsOiBbbywgdCwgZiwgeF0sXG4gICAgICAgb3JkaW5hbDogW3hdXG4gICAgIH0sXG4gICAgIGR2OiBhLFxuICAgICBkejogYixcbiAgICAgZWU6IGEsXG4gICAgIGVsOiBhLFxuICAgICBlbjoge1xuICAgICAgIGNhcmRpbmFsOiBbbywgeF0sXG4gICAgICAgb3JkaW5hbDogW28sIHQsIGYsIHhdXG4gICAgIH0sXG4gICAgIGVvOiBhLFxuICAgICBlczogYSxcbiAgICAgZXQ6IGEsXG4gICAgIGV1OiBhLFxuICAgICBmYTogYSxcbiAgICAgZmY6IGEsXG4gICAgIGZpOiBhLFxuICAgICBmaWw6IGQsXG4gICAgIGZvOiBhLFxuICAgICBmcjoge1xuICAgICAgIGNhcmRpbmFsOiBbbywgbSwgeF0sXG4gICAgICAgb3JkaW5hbDogW28sIHhdXG4gICAgIH0sXG4gICAgIGZ1cjogYSxcbiAgICAgZnk6IGEsXG4gICAgIGdhOiB7XG4gICAgICAgY2FyZGluYWw6IFtvLCB0LCBmLCBtLCB4XSxcbiAgICAgICBvcmRpbmFsOiBbbywgeF1cbiAgICAgfSxcbiAgICAgZ2Q6IHtcbiAgICAgICBjYXJkaW5hbDogW28sIHQsIGYsIHhdLFxuICAgICAgIG9yZGluYWw6IFtvLCB0LCBmLCB4XVxuICAgICB9LFxuICAgICBnbDogYSxcbiAgICAgZ3N3OiBhLFxuICAgICBndToge1xuICAgICAgIGNhcmRpbmFsOiBbbywgeF0sXG4gICAgICAgb3JkaW5hbDogW28sIHQsIGYsIG0sIHhdXG4gICAgIH0sXG4gICAgIGd1dzogYSxcbiAgICAgZ3Y6IHtcbiAgICAgICBjYXJkaW5hbDogW28sIHQsIGYsIG0sIHhdLFxuICAgICAgIG9yZGluYWw6IFt4XVxuICAgICB9LFxuICAgICBoYTogYSxcbiAgICAgaGF3OiBhLFxuICAgICBoZToge1xuICAgICAgIGNhcmRpbmFsOiBbbywgdCwgbSwgeF0sXG4gICAgICAgb3JkaW5hbDogW3hdXG4gICAgIH0sXG4gICAgIGhpOiB7XG4gICAgICAgY2FyZGluYWw6IFtvLCB4XSxcbiAgICAgICBvcmRpbmFsOiBbbywgdCwgZiwgbSwgeF1cbiAgICAgfSxcbiAgICAgaHI6IHtcbiAgICAgICBjYXJkaW5hbDogW28sIGYsIHhdLFxuICAgICAgIG9yZGluYWw6IFt4XVxuICAgICB9LFxuICAgICBoc2I6IHtcbiAgICAgICBjYXJkaW5hbDogW28sIHQsIGYsIHhdLFxuICAgICAgIG9yZGluYWw6IFt4XVxuICAgICB9LFxuICAgICBodTogZCxcbiAgICAgaHk6IGQsXG4gICAgIGlhOiBhLFxuICAgICBpZDogYixcbiAgICAgaWc6IGIsXG4gICAgIGlpOiBiLFxuICAgICBpbzogYSxcbiAgICAgaXM6IGEsXG4gICAgIGl0OiB7XG4gICAgICAgY2FyZGluYWw6IFtvLCB4XSxcbiAgICAgICBvcmRpbmFsOiBbbSwgeF1cbiAgICAgfSxcbiAgICAgaXU6IGUsXG4gICAgIGl3OiB7XG4gICAgICAgY2FyZGluYWw6IFtvLCB0LCBtLCB4XSxcbiAgICAgICBvcmRpbmFsOiBbeF1cbiAgICAgfSxcbiAgICAgamE6IGIsXG4gICAgIGpibzogYixcbiAgICAgamdvOiBhLFxuICAgICBqaTogYSxcbiAgICAgam1jOiBhLFxuICAgICBqdjogYixcbiAgICAganc6IGIsXG4gICAgIGthOiB7XG4gICAgICAgY2FyZGluYWw6IFtvLCB4XSxcbiAgICAgICBvcmRpbmFsOiBbbywgbSwgeF1cbiAgICAgfSxcbiAgICAga2FiOiBhLFxuICAgICBrYWo6IGEsXG4gICAgIGtjZzogYSxcbiAgICAga2RlOiBiLFxuICAgICBrZWE6IGIsXG4gICAgIGtrOiB7XG4gICAgICAgY2FyZGluYWw6IFtvLCB4XSxcbiAgICAgICBvcmRpbmFsOiBbbSwgeF1cbiAgICAgfSxcbiAgICAga2tqOiBhLFxuICAgICBrbDogYSxcbiAgICAga206IGIsXG4gICAgIGtuOiBhLFxuICAgICBrbzogYixcbiAgICAga3M6IGEsXG4gICAgIGtzYjogYSxcbiAgICAga3NoOiB7XG4gICAgICAgY2FyZGluYWw6IFt6LCBvLCB4XSxcbiAgICAgICBvcmRpbmFsOiBbeF1cbiAgICAgfSxcbiAgICAga3U6IGEsXG4gICAgIGt3OiB7XG4gICAgICAgY2FyZGluYWw6IFt6LCBvLCB0LCBmLCBtLCB4XSxcbiAgICAgICBvcmRpbmFsOiBbbywgbSwgeF1cbiAgICAgfSxcbiAgICAga3k6IGEsXG4gICAgIGxhZzoge1xuICAgICAgIGNhcmRpbmFsOiBbeiwgbywgeF0sXG4gICAgICAgb3JkaW5hbDogW3hdXG4gICAgIH0sXG4gICAgIGxiOiBhLFxuICAgICBsZzogYSxcbiAgICAgbGlqOiB7XG4gICAgICAgY2FyZGluYWw6IFtvLCB4XSxcbiAgICAgICBvcmRpbmFsOiBbbSwgeF1cbiAgICAgfSxcbiAgICAgbGt0OiBiLFxuICAgICBsbjogYSxcbiAgICAgbG86IHtcbiAgICAgICBjYXJkaW5hbDogW3hdLFxuICAgICAgIG9yZGluYWw6IFtvLCB4XVxuICAgICB9LFxuICAgICBsdDogYyxcbiAgICAgbHY6IHtcbiAgICAgICBjYXJkaW5hbDogW3osIG8sIHhdLFxuICAgICAgIG9yZGluYWw6IFt4XVxuICAgICB9LFxuICAgICBtYXM6IGEsXG4gICAgIG1nOiBhLFxuICAgICBtZ286IGEsXG4gICAgIG1rOiB7XG4gICAgICAgY2FyZGluYWw6IFtvLCB4XSxcbiAgICAgICBvcmRpbmFsOiBbbywgdCwgbSwgeF1cbiAgICAgfSxcbiAgICAgbWw6IGEsXG4gICAgIG1uOiBhLFxuICAgICBtbzoge1xuICAgICAgIGNhcmRpbmFsOiBbbywgZiwgeF0sXG4gICAgICAgb3JkaW5hbDogW28sIHhdXG4gICAgIH0sXG4gICAgIG1yOiB7XG4gICAgICAgY2FyZGluYWw6IFtvLCB4XSxcbiAgICAgICBvcmRpbmFsOiBbbywgdCwgZiwgeF1cbiAgICAgfSxcbiAgICAgbXM6IHtcbiAgICAgICBjYXJkaW5hbDogW3hdLFxuICAgICAgIG9yZGluYWw6IFtvLCB4XVxuICAgICB9LFxuICAgICBtdDogYyxcbiAgICAgbXk6IGIsXG4gICAgIG5haDogYSxcbiAgICAgbmFxOiBlLFxuICAgICBuYjogYSxcbiAgICAgbmQ6IGEsXG4gICAgIG5lOiBkLFxuICAgICBubDogYSxcbiAgICAgbm46IGEsXG4gICAgIG5uaDogYSxcbiAgICAgbm86IGEsXG4gICAgIG5xbzogYixcbiAgICAgbnI6IGEsXG4gICAgIG5zbzogYSxcbiAgICAgbnk6IGEsXG4gICAgIG55bjogYSxcbiAgICAgb206IGEsXG4gICAgIG9yOiB7XG4gICAgICAgY2FyZGluYWw6IFtvLCB4XSxcbiAgICAgICBvcmRpbmFsOiBbbywgdCwgZiwgbSwgeF1cbiAgICAgfSxcbiAgICAgb3M6IGEsXG4gICAgIG9zYTogYixcbiAgICAgcGE6IGEsXG4gICAgIHBhcDogYSxcbiAgICAgcGNtOiBhLFxuICAgICBwbDogYyxcbiAgICAgcHJnOiB7XG4gICAgICAgY2FyZGluYWw6IFt6LCBvLCB4XSxcbiAgICAgICBvcmRpbmFsOiBbeF1cbiAgICAgfSxcbiAgICAgcHM6IGEsXG4gICAgIHB0OiBhLFxuICAgICBwdF9QVDogYSxcbiAgICAgcm06IGEsXG4gICAgIHJvOiB7XG4gICAgICAgY2FyZGluYWw6IFtvLCBmLCB4XSxcbiAgICAgICBvcmRpbmFsOiBbbywgeF1cbiAgICAgfSxcbiAgICAgcm9mOiBhLFxuICAgICByb290OiBiLFxuICAgICBydTogYyxcbiAgICAgcndrOiBhLFxuICAgICBzYWg6IGIsXG4gICAgIHNhcTogYSxcbiAgICAgc2F0OiBlLFxuICAgICBzYzoge1xuICAgICAgIGNhcmRpbmFsOiBbbywgeF0sXG4gICAgICAgb3JkaW5hbDogW20sIHhdXG4gICAgIH0sXG4gICAgIHNjbjoge1xuICAgICAgIGNhcmRpbmFsOiBbbywgeF0sXG4gICAgICAgb3JkaW5hbDogW20sIHhdXG4gICAgIH0sXG4gICAgIHNkOiBhLFxuICAgICBzZGg6IGEsXG4gICAgIHNlOiBlLFxuICAgICBzZWg6IGEsXG4gICAgIHNlczogYixcbiAgICAgc2c6IGIsXG4gICAgIHNoOiB7XG4gICAgICAgY2FyZGluYWw6IFtvLCBmLCB4XSxcbiAgICAgICBvcmRpbmFsOiBbeF1cbiAgICAgfSxcbiAgICAgc2hpOiB7XG4gICAgICAgY2FyZGluYWw6IFtvLCBmLCB4XSxcbiAgICAgICBvcmRpbmFsOiBbeF1cbiAgICAgfSxcbiAgICAgc2k6IGEsXG4gICAgIHNrOiBjLFxuICAgICBzbDoge1xuICAgICAgIGNhcmRpbmFsOiBbbywgdCwgZiwgeF0sXG4gICAgICAgb3JkaW5hbDogW3hdXG4gICAgIH0sXG4gICAgIHNtYTogZSxcbiAgICAgc21pOiBlLFxuICAgICBzbWo6IGUsXG4gICAgIHNtbjogZSxcbiAgICAgc21zOiBlLFxuICAgICBzbjogYSxcbiAgICAgc286IGEsXG4gICAgIHNxOiB7XG4gICAgICAgY2FyZGluYWw6IFtvLCB4XSxcbiAgICAgICBvcmRpbmFsOiBbbywgbSwgeF1cbiAgICAgfSxcbiAgICAgc3I6IHtcbiAgICAgICBjYXJkaW5hbDogW28sIGYsIHhdLFxuICAgICAgIG9yZGluYWw6IFt4XVxuICAgICB9LFxuICAgICBzczogYSxcbiAgICAgc3N5OiBhLFxuICAgICBzdDogYSxcbiAgICAgc3U6IGIsXG4gICAgIHN2OiBkLFxuICAgICBzdzogYSxcbiAgICAgc3lyOiBhLFxuICAgICB0YTogYSxcbiAgICAgdGU6IGEsXG4gICAgIHRlbzogYSxcbiAgICAgdGg6IGIsXG4gICAgIHRpOiBhLFxuICAgICB0aWc6IGEsXG4gICAgIHRrOiB7XG4gICAgICAgY2FyZGluYWw6IFtvLCB4XSxcbiAgICAgICBvcmRpbmFsOiBbZiwgeF1cbiAgICAgfSxcbiAgICAgdGw6IGQsXG4gICAgIHRuOiBhLFxuICAgICB0bzogYixcbiAgICAgdHI6IGEsXG4gICAgIHRzOiBhLFxuICAgICB0em06IGEsXG4gICAgIHVnOiBhLFxuICAgICB1azoge1xuICAgICAgIGNhcmRpbmFsOiBbbywgZiwgbSwgeF0sXG4gICAgICAgb3JkaW5hbDogW2YsIHhdXG4gICAgIH0sXG4gICAgIHVyOiBhLFxuICAgICB1ejogYSxcbiAgICAgdmU6IGEsXG4gICAgIHZpOiB7XG4gICAgICAgY2FyZGluYWw6IFt4XSxcbiAgICAgICBvcmRpbmFsOiBbbywgeF1cbiAgICAgfSxcbiAgICAgdm86IGEsXG4gICAgIHZ1bjogYSxcbiAgICAgd2E6IGEsXG4gICAgIHdhZTogYSxcbiAgICAgd286IGIsXG4gICAgIHhoOiBhLFxuICAgICB4b2c6IGEsXG4gICAgIHlpOiBhLFxuICAgICB5bzogYixcbiAgICAgeXVlOiBiLFxuICAgICB6aDogYixcbiAgICAgenU6IGFcbiAgIH0pO1xuIH0pKHBsdXJhbENhdGVnb3JpZXMkMSk7XG5cbiB2YXIgcGx1cmFsQ2F0ZWdvcmllcyA9IC8qQF9fUFVSRV9fKi9nZXREZWZhdWx0RXhwb3J0RnJvbUNqcyhwbHVyYWxDYXRlZ29yaWVzJDEuZXhwb3J0cyk7XG5cbiB2YXIgQyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKC8qI19fUFVSRV9fKi9PYmplY3QuYXNzaWduKC8qI19fUFVSRV9fKi9PYmplY3QuY3JlYXRlKG51bGwpLCBwbHVyYWxDYXRlZ29yaWVzJDEuZXhwb3J0cywge1xuICAgJ2RlZmF1bHQnOiBwbHVyYWxDYXRlZ29yaWVzXG4gfSkpO1xuXG4gLy8gdXNpbmcgdGhlbSBoZXJlIGJlY2F1c2Ugd2l0aCB0aGlzIG1hbnkgc21hbGwgZnVuY3Rpb25zLCBidW5kbGVycyBwcm9kdWNlIGxlc3NcbiAvLyBjcnVmdCB0aGFuIGZvciBFUyBtb2R1bGUgZXhwb3J0cy5cblxuIHZhciBQbHVyYWxzID0gcGx1cmFscyB8fCBQO1xuIHZhciBDYXRlZ29yaWVzID0gcGx1cmFsQ2F0ZWdvcmllcyB8fCBDO1xuIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cbiB2YXIgTnVtYmVyRm9ybWF0ID0gKHR5cGVvZiBJbnRsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoSW50bCkpID09PSAnb2JqZWN0JyAmJiBJbnRsLk51bWJlckZvcm1hdCB8fCBQc2V1ZG9OdW1iZXJGb3JtYXRfX2RlZmF1bHRbJ2RlZmF1bHQnXTsgLy8gbWFrZS1wbHVyYWwgZXhwb3J0cyBhcmUgY2FzdCB3aXRoIHNhZmUtaWRlbnRpZmllciB0byBiZSB2YWxpZCBKUyBpZGVudGlmaWVyc1xuXG4gdmFyIGlkID0gZnVuY3Rpb24gaWQobGMpIHtcbiAgIHJldHVybiBsYyA9PT0gJ2luJyA/ICdfaW4nIDogbGMgPT09ICdwdC1QVCcgPyAncHRfUFQnIDogbGM7XG4gfTtcblxuIHZhciBnZXRTZWxlY3RvciA9IGZ1bmN0aW9uIGdldFNlbGVjdG9yKGxjKSB7XG4gICByZXR1cm4gUGx1cmFsc1tpZChsYyldO1xuIH07XG5cbiB2YXIgZ2V0Q2F0ZWdvcmllcyA9IGZ1bmN0aW9uIGdldENhdGVnb3JpZXMobGMsIG9yZCkge1xuICAgcmV0dXJuIENhdGVnb3JpZXNbaWQobGMpXVtvcmQgPyAnb3JkaW5hbCcgOiAnY2FyZGluYWwnXTtcbiB9O1xuXG4gdmFyIFBsdXJhbFJ1bGVzID0gZ2V0UGx1cmFsUnVsZXNfX2RlZmF1bHRbJ2RlZmF1bHQnXShOdW1iZXJGb3JtYXQsIGdldFNlbGVjdG9yLCBnZXRDYXRlZ29yaWVzKTtcblxuIG1vZHVsZS5leHBvcnRzID0gUGx1cmFsUnVsZXM7XG5cblxuLy8gI2VuZHJlZ2lvbiBPUklHSU5BTCBDT0RFXG5cbl9janNFeHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cblxufSwgKCkgPT4gKHtcbiAgJy4vZmFjdG9yeSc6IF9yZXEsXG4gICcuL3BzZXVkby1udW1iZXItZm9ybWF0JzogX3JlcTAsXG59KSk7XG5leHBvcnQgeyBfY2pzRXhwb3J0cyBhcyBkZWZhdWx0IH07XG5leHBvcnQgeyBfX2Nqc01ldGFVUkwgfVxuIiwiaW1wb3J0IF9janNMb2FkZXIgZnJvbSAnY2NlOi9pbnRlcm5hbC9tbC9janMtbG9hZGVyLm1qcyc7XG5pbXBvcnQgeyBfX2Nqc01ldGFVUkwgYXMgX3JlcX0gZnJvbSAnLi9wbHVyYWwtcnVsZXMnO1xubGV0IF9janNFeHBvcnRzO1xuY29uc3QgX19janNNZXRhVVJMID0gaW1wb3J0Lm1ldGEudXJsO1xuX2Nqc0xvYWRlci5kZWZpbmUoX19janNNZXRhVVJMLCBmdW5jdGlvbiAoZXhwb3J0cywgcmVxdWlyZSwgbW9kdWxlLCBfX2ZpbGVuYW1lLCBfX2Rpcm5hbWUpIHtcbi8vICNyZWdpb24gT1JJR0lOQUwgQ09ERVxuXG5cbiAndXNlIHN0cmljdCc7XG5cbiB2YXIgUGx1cmFsUnVsZXMgPSByZXF1aXJlKCcuL3BsdXJhbC1ydWxlcycpO1xuXG4gZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0TGVnYWN5IChlKSB7IHJldHVybiBlICYmIHR5cGVvZiBlID09PSAnb2JqZWN0JyAmJiAnZGVmYXVsdCcgaW4gZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XG5cbiB2YXIgUGx1cmFsUnVsZXNfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KFBsdXJhbFJ1bGVzKTtcblxuIGlmICh0eXBlb2YgSW50bCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICBnbG9iYWwuSW50bCA9IHtcbiAgICAgICBQbHVyYWxSdWxlczogUGx1cmFsUnVsZXNfX2RlZmF1bHRbJ2RlZmF1bHQnXVxuICAgICB9O1xuICAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICB3aW5kb3cuSW50bCA9IHtcbiAgICAgICBQbHVyYWxSdWxlczogUGx1cmFsUnVsZXNfX2RlZmF1bHRbJ2RlZmF1bHQnXVxuICAgICB9O1xuICAgfSBlbHNlIHtcbiAgICAgdGhpcy5JbnRsID0ge1xuICAgICAgIFBsdXJhbFJ1bGVzOiBQbHVyYWxSdWxlc19fZGVmYXVsdFsnZGVmYXVsdCddXG4gICAgIH07XG4gICB9XG5cbiAgIFBsdXJhbFJ1bGVzX19kZWZhdWx0WydkZWZhdWx0J10ucG9seWZpbGwgPSB0cnVlO1xuIH0gZWxzZSBpZiAoIUludGwuUGx1cmFsUnVsZXMpIHtcbiAgIEludGwuUGx1cmFsUnVsZXMgPSBQbHVyYWxSdWxlc19fZGVmYXVsdFsnZGVmYXVsdCddO1xuICAgUGx1cmFsUnVsZXNfX2RlZmF1bHRbJ2RlZmF1bHQnXS5wb2x5ZmlsbCA9IHRydWU7XG4gfSBlbHNlIHtcbiAgIHZhciB0ZXN0ID0gWydlbicsICdlcycsICdydScsICd6aCddO1xuICAgdmFyIHN1cHBvcnRlZCA9IEludGwuUGx1cmFsUnVsZXMuc3VwcG9ydGVkTG9jYWxlc09mKHRlc3QpO1xuXG4gICBpZiAoc3VwcG9ydGVkLmxlbmd0aCA8IHRlc3QubGVuZ3RoKSB7XG4gICAgIEludGwuUGx1cmFsUnVsZXMgPSBQbHVyYWxSdWxlc19fZGVmYXVsdFsnZGVmYXVsdCddO1xuICAgICBQbHVyYWxSdWxlc19fZGVmYXVsdFsnZGVmYXVsdCddLnBvbHlmaWxsID0gdHJ1ZTtcbiAgIH1cbiB9XG5cblxuLy8gI2VuZHJlZ2lvbiBPUklHSU5BTCBDT0RFXG5cbl9janNFeHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cblxufSwgKCkgPT4gKHtcbiAgJy4vcGx1cmFsLXJ1bGVzJzogX3JlcSxcbn0pKTtcbmV4cG9ydCB7IF9janNFeHBvcnRzIGFzIGRlZmF1bHQgfTtcbmV4cG9ydCB7IF9fY2pzTWV0YVVSTCB9XG4iLCIvLyBJIGFtIHRoZSBmYWNhZGUgbW9kdWxlIHdobyBwcm92aWRlcyBhY2Nlc3MgdG8gdGhlIENvbW1vbkpTIG1vZHVsZSAnLi9wb2x5ZmlsbC5qcyd+XG5pbXBvcnQgeyBfX2Nqc01ldGFVUkwgYXMgcmVxIH0gZnJvbSAnLi9wb2x5ZmlsbC5qcyc7XG5pbXBvcnQgbG9hZGVyIGZyb20gJ2NjZTovaW50ZXJuYWwvbWwvY2pzLWxvYWRlci5tanMnO1xuaWYgKCFyZXEpIHtcbiAgICBsb2FkZXIudGhyb3dJbnZhbGlkV3JhcHBlcignLi9wb2x5ZmlsbC5qcycsIGltcG9ydC5tZXRhLnVybCk7XG59XG5sb2FkZXIucmVxdWlyZShyZXEpO1xuZXhwb3J0ICogZnJvbSAnLi9wb2x5ZmlsbC5qcyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGQgfSBmcm9tICcuL3BvbHlmaWxsLmpzJ1xuZXhwb3J0IHsgZCBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImltcG9ydCBfY2pzTG9hZGVyIGZyb20gJ2NjZTovaW50ZXJuYWwvbWwvY2pzLWxvYWRlci5tanMnO1xubGV0IF9janNFeHBvcnRzO1xuY29uc3QgX19janNNZXRhVVJMID0gaW1wb3J0Lm1ldGEudXJsO1xuX2Nqc0xvYWRlci5kZWZpbmUoX19janNNZXRhVVJMLCBmdW5jdGlvbiAoZXhwb3J0cywgcmVxdWlyZSwgbW9kdWxlLCBfX2ZpbGVuYW1lLCBfX2Rpcm5hbWUpIHtcbi8vICNyZWdpb24gT1JJR0lOQUwgQ09ERVxuXG5cbiAndXNlIHN0cmljdCc7XG5cbiBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgfVxuIH1cblxuIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgIH1cbiB9XG5cbiBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiB9XG5cbiB2YXIgUHNldWRvTnVtYmVyRm9ybWF0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgIGZ1bmN0aW9uIFBzZXVkb051bWJlckZvcm1hdChsYywgLy8gbG9jYWxlIGlzIGlnbm9yZWQ7IGFsd2F5cyB1c2UgJ2VuJ1xuICAgX3JlZikge1xuICAgICB2YXIgbWluSUQgPSBfcmVmLm1pbmltdW1JbnRlZ2VyRGlnaXRzLFxuICAgICAgICAgbWluRkQgPSBfcmVmLm1pbmltdW1GcmFjdGlvbkRpZ2l0cyxcbiAgICAgICAgIG1heEZEID0gX3JlZi5tYXhpbXVtRnJhY3Rpb25EaWdpdHMsXG4gICAgICAgICBtaW5TRCA9IF9yZWYubWluaW11bVNpZ25pZmljYW50RGlnaXRzLFxuICAgICAgICAgbWF4U0QgPSBfcmVmLm1heGltdW1TaWduaWZpY2FudERpZ2l0cztcblxuICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHNldWRvTnVtYmVyRm9ybWF0KTtcblxuICAgICB0aGlzLl9taW5JRCA9IHR5cGVvZiBtaW5JRCA9PT0gJ251bWJlcicgPyBtaW5JRCA6IDE7XG4gICAgIHRoaXMuX21pbkZEID0gdHlwZW9mIG1pbkZEID09PSAnbnVtYmVyJyA/IG1pbkZEIDogMDtcbiAgICAgdGhpcy5fbWF4RkQgPSB0eXBlb2YgbWF4RkQgPT09ICdudW1iZXInID8gbWF4RkQgOiBNYXRoLm1heCh0aGlzLl9taW5GRCwgMyk7XG5cbiAgICAgaWYgKHR5cGVvZiBtaW5TRCA9PT0gJ251bWJlcicgfHwgdHlwZW9mIG1heFNEID09PSAnbnVtYmVyJykge1xuICAgICAgIHRoaXMuX21pblNEID0gdHlwZW9mIG1pblNEID09PSAnbnVtYmVyJyA/IG1pblNEIDogMTtcbiAgICAgICB0aGlzLl9tYXhTRCA9IHR5cGVvZiBtYXhTRCA9PT0gJ251bWJlcicgPyBtYXhTRCA6IDIxO1xuICAgICB9XG4gICB9XG5cbiAgIF9jcmVhdGVDbGFzcyhQc2V1ZG9OdW1iZXJGb3JtYXQsIFt7XG4gICAgIGtleTogXCJyZXNvbHZlZE9wdGlvbnNcIixcbiAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc29sdmVkT3B0aW9ucygpIHtcbiAgICAgICB2YXIgb3B0ID0ge1xuICAgICAgICAgbWluaW11bUludGVnZXJEaWdpdHM6IHRoaXMuX21pbklELFxuICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiB0aGlzLl9taW5GRCxcbiAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogdGhpcy5fbWF4RkRcbiAgICAgICB9O1xuXG4gICAgICAgaWYgKHR5cGVvZiB0aGlzLl9taW5TRCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgIG9wdC5taW5pbXVtU2lnbmlmaWNhbnREaWdpdHMgPSB0aGlzLl9taW5TRDtcbiAgICAgICAgIG9wdC5tYXhpbXVtU2lnbmlmaWNhbnREaWdpdHMgPSB0aGlzLl9tYXhTRDtcbiAgICAgICB9XG5cbiAgICAgICByZXR1cm4gb3B0O1xuICAgICB9XG4gICB9LCB7XG4gICAgIGtleTogXCJmb3JtYXRcIixcbiAgICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdChuKSB7XG4gICAgICAgaWYgKHRoaXMuX21pblNEKSB7XG4gICAgICAgICB2YXIgcmF3ID0gU3RyaW5nKG4pO1xuICAgICAgICAgdmFyIHByZWMgPSAwO1xuXG4gICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhdy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICB2YXIgYyA9IHJhd1tpXTtcbiAgICAgICAgICAgaWYgKGMgPj0gJzAnICYmIGMgPD0gJzknKSArK3ByZWM7XG4gICAgICAgICB9XG5cbiAgICAgICAgIGlmIChwcmVjIDwgdGhpcy5fbWluU0QpIHJldHVybiBuLnRvUHJlY2lzaW9uKHRoaXMuX21pblNEKTtcbiAgICAgICAgIGlmIChwcmVjID4gdGhpcy5fbWF4U0QpIHJldHVybiBuLnRvUHJlY2lzaW9uKHRoaXMuX21heFNEKTtcbiAgICAgICAgIHJldHVybiByYXc7XG4gICAgICAgfVxuXG4gICAgICAgaWYgKHRoaXMuX21pbkZEID4gMCkgcmV0dXJuIG4udG9GaXhlZCh0aGlzLl9taW5GRCk7XG4gICAgICAgaWYgKHRoaXMuX21heEZEID09PSAwKSByZXR1cm4gbi50b0ZpeGVkKDApO1xuICAgICAgIHJldHVybiBTdHJpbmcobik7XG4gICAgIH1cbiAgIH1dKTtcblxuICAgcmV0dXJuIFBzZXVkb051bWJlckZvcm1hdDtcbiB9KCk7XG5cbiBtb2R1bGUuZXhwb3J0cyA9IFBzZXVkb051bWJlckZvcm1hdDtcblxuXG4vLyAjZW5kcmVnaW9uIE9SSUdJTkFMIENPREVcblxuX2Nqc0V4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcblxuXG59LCB7fSk7XG5leHBvcnQgeyBfY2pzRXhwb3J0cyBhcyBkZWZhdWx0IH07XG5leHBvcnQgeyBfX2Nqc01ldGFVUkwgfVxuIiwiZXhwb3J0IHsgX0FzeW5jR2VuZXJhdG9yIGFzIEFzeW5jR2VuZXJhdG9yLCBfT3ZlcmxvYWRZaWVsZCBhcyBPdmVybG9hZFlpZWxkLCBfYXBwbHlEZWNzIGFzIGFwcGx5RGVjcywgX2FwcGx5RGVjczIyMDMgYXMgYXBwbHlEZWNzMjIwMywgX2FwcGx5RGVjczIyMDNSIGFzIGFwcGx5RGVjczIyMDNSLCBfYXBwbHlEZWNzMjMwMSBhcyBhcHBseURlY3MyMzAxLCBfYXBwbHlEZWNzMjMwNSBhcyBhcHBseURlY3MyMzA1LCBfYXN5bmNHZW5lcmF0b3JEZWxlZ2F0ZSBhcyBhc3luY0dlbmVyYXRvckRlbGVnYXRlLCBfYXN5bmNJdGVyYXRvciBhcyBhc3luY0l0ZXJhdG9yLCBfYXdhaXRBc3luY0dlbmVyYXRvciBhcyBhd2FpdEFzeW5jR2VuZXJhdG9yLCBfY2hlY2tJblJIUyBhcyBjaGVja0luUkhTLCBfZGVmaW5lQWNjZXNzb3IgYXMgZGVmaW5lQWNjZXNzb3IsIF9kaXNwb3NlIGFzIGRpc3Bvc2UsIF9pdGVyYWJsZVRvQXJyYXlMaW1pdCBhcyBpdGVyYWJsZVRvQXJyYXlMaW1pdCwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0TG9vc2UgYXMgaXRlcmFibGVUb0FycmF5TGltaXRMb29zZSwgX2pzeCBhcyBqc3gsIF9vYmplY3RTcHJlYWQyIGFzIG9iamVjdFNwcmVhZDIsIF9yZWdlbmVyYXRvclJ1bnRpbWUgYXMgcmVnZW5lcmF0b3JSdW50aW1lLCBfdHlwZW9mIGFzIHR5cGVvZiwgX3VzaW5nIGFzIHVzaW5nLCBfd3JhcFJlZ0V4cCBhcyB3cmFwUmVnRXhwLCBfQXdhaXRWYWx1ZSBhcyBBd2FpdFZhbHVlLCBfd3JhcEFzeW5jR2VuZXJhdG9yIGFzIHdyYXBBc3luY0dlbmVyYXRvciwgX2FzeW5jVG9HZW5lcmF0b3IgYXMgYXN5bmNUb0dlbmVyYXRvciwgX2NsYXNzQ2FsbENoZWNrIGFzIGNsYXNzQ2FsbENoZWNrLCBfY3JlYXRlQ2xhc3MgYXMgY3JlYXRlQ2xhc3MsIF9kZWZpbmVFbnVtZXJhYmxlUHJvcGVydGllcyBhcyBkZWZpbmVFbnVtZXJhYmxlUHJvcGVydGllcywgX2RlZmF1bHRzIGFzIGRlZmF1bHRzLCBfZGVmaW5lUHJvcGVydHkgYXMgZGVmaW5lUHJvcGVydHksIF9leHRlbmRzIGFzIGV4dGVuZHMsIF9vYmplY3RTcHJlYWQgYXMgb2JqZWN0U3ByZWFkLCBfaW5oZXJpdHMgYXMgaW5oZXJpdHMsIF9pbmhlcml0c0xvb3NlIGFzIGluaGVyaXRzTG9vc2UsIF9nZXRQcm90b3R5cGVPZiBhcyBnZXRQcm90b3R5cGVPZiwgX3NldFByb3RvdHlwZU9mIGFzIHNldFByb3RvdHlwZU9mLCBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IGFzIGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCwgX2NvbnN0cnVjdCBhcyBjb25zdHJ1Y3QsIF9pc05hdGl2ZUZ1bmN0aW9uIGFzIGlzTmF0aXZlRnVuY3Rpb24sIF93cmFwTmF0aXZlU3VwZXIgYXMgd3JhcE5hdGl2ZVN1cGVyLCBfaW5zdGFuY2VvZiBhcyBpbnN0YW5jZW9mLCBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IGFzIGludGVyb3BSZXF1aXJlRGVmYXVsdCwgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgYXMgaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCwgX25ld0Fycm93Q2hlY2sgYXMgbmV3QXJyb3dDaGVjaywgX29iamVjdERlc3RydWN0dXJpbmdFbXB0eSBhcyBvYmplY3REZXN0cnVjdHVyaW5nRW1wdHksIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGFzIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UsIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBhcyBvYmplY3RXaXRob3V0UHJvcGVydGllcywgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBhcyBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGFzIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIF9jcmVhdGVTdXBlciBhcyBjcmVhdGVTdXBlciwgX3N1cGVyUHJvcEJhc2UgYXMgc3VwZXJQcm9wQmFzZSwgX2dldCBhcyBnZXQsIF9zZXQgYXMgc2V0LCBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIGFzIHRhZ2dlZFRlbXBsYXRlTGl0ZXJhbCwgX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlIGFzIHRhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlLCBfcmVhZE9ubHlFcnJvciBhcyByZWFkT25seUVycm9yLCBfd3JpdGVPbmx5RXJyb3IgYXMgd3JpdGVPbmx5RXJyb3IsIF9jbGFzc05hbWVURFpFcnJvciBhcyBjbGFzc05hbWVURFpFcnJvciwgX3RlbXBvcmFsVW5kZWZpbmVkIGFzIHRlbXBvcmFsVW5kZWZpbmVkLCBfdGR6IGFzIHRkeiwgX3RlbXBvcmFsUmVmIGFzIHRlbXBvcmFsUmVmLCBfc2xpY2VkVG9BcnJheSBhcyBzbGljZWRUb0FycmF5LCBfc2xpY2VkVG9BcnJheUxvb3NlIGFzIHNsaWNlZFRvQXJyYXlMb29zZSwgX3RvQXJyYXkgYXMgdG9BcnJheSwgX3RvQ29uc3VtYWJsZUFycmF5IGFzIHRvQ29uc3VtYWJsZUFycmF5LCBfYXJyYXlXaXRob3V0SG9sZXMgYXMgYXJyYXlXaXRob3V0SG9sZXMsIF9hcnJheVdpdGhIb2xlcyBhcyBhcnJheVdpdGhIb2xlcywgX21heWJlQXJyYXlMaWtlIGFzIG1heWJlQXJyYXlMaWtlLCBfaXRlcmFibGVUb0FycmF5IGFzIGl0ZXJhYmxlVG9BcnJheSwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGFzIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBfYXJyYXlMaWtlVG9BcnJheSBhcyBhcnJheUxpa2VUb0FycmF5LCBfbm9uSXRlcmFibGVTcHJlYWQgYXMgbm9uSXRlcmFibGVTcHJlYWQsIF9ub25JdGVyYWJsZVJlc3QgYXMgbm9uSXRlcmFibGVSZXN0LCBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciBhcyBjcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyLCBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlIGFzIGNyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSwgX3NraXBGaXJzdEdlbmVyYXRvck5leHQgYXMgc2tpcEZpcnN0R2VuZXJhdG9yTmV4dCwgX3RvUHJpbWl0aXZlIGFzIHRvUHJpbWl0aXZlLCBfdG9Qcm9wZXJ0eUtleSBhcyB0b1Byb3BlcnR5S2V5LCBfaW5pdGlhbGl6ZXJXYXJuaW5nSGVscGVyIGFzIGluaXRpYWxpemVyV2FybmluZ0hlbHBlciwgX2luaXRpYWxpemVyRGVmaW5lUHJvcGVydHkgYXMgaW5pdGlhbGl6ZXJEZWZpbmVQcm9wZXJ0eSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvciBhcyBhcHBseURlY29yYXRlZERlc2NyaXB0b3IsIF9jbGFzc1ByaXZhdGVGaWVsZExvb3NlS2V5IGFzIGNsYXNzUHJpdmF0ZUZpZWxkTG9vc2VLZXksIF9jbGFzc1ByaXZhdGVGaWVsZExvb3NlQmFzZSBhcyBjbGFzc1ByaXZhdGVGaWVsZExvb3NlQmFzZSwgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IGFzIGNsYXNzUHJpdmF0ZUZpZWxkR2V0LCBfY2xhc3NQcml2YXRlRmllbGRTZXQgYXMgY2xhc3NQcml2YXRlRmllbGRTZXQsIF9jbGFzc1ByaXZhdGVGaWVsZERlc3RydWN0dXJlU2V0IGFzIGNsYXNzUHJpdmF0ZUZpZWxkRGVzdHJ1Y3R1cmVTZXQsIF9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IgYXMgY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yLCBfY2xhc3NTdGF0aWNQcml2YXRlRmllbGRTcGVjR2V0IGFzIGNsYXNzU3RhdGljUHJpdmF0ZUZpZWxkU3BlY0dldCwgX2NsYXNzU3RhdGljUHJpdmF0ZUZpZWxkU3BlY1NldCBhcyBjbGFzc1N0YXRpY1ByaXZhdGVGaWVsZFNwZWNTZXQsIF9jbGFzc1N0YXRpY1ByaXZhdGVNZXRob2RHZXQgYXMgY2xhc3NTdGF0aWNQcml2YXRlTWV0aG9kR2V0LCBfY2xhc3NTdGF0aWNQcml2YXRlTWV0aG9kU2V0IGFzIGNsYXNzU3RhdGljUHJpdmF0ZU1ldGhvZFNldCwgX2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0IGFzIGNsYXNzQXBwbHlEZXNjcmlwdG9yR2V0LCBfY2xhc3NBcHBseURlc2NyaXB0b3JTZXQgYXMgY2xhc3NBcHBseURlc2NyaXB0b3JTZXQsIF9jbGFzc0FwcGx5RGVzY3JpcHRvckRlc3RydWN0dXJlU2V0IGFzIGNsYXNzQXBwbHlEZXNjcmlwdG9yRGVzdHJ1Y3R1cmVTZXQsIF9jbGFzc1N0YXRpY1ByaXZhdGVGaWVsZERlc3RydWN0dXJlU2V0IGFzIGNsYXNzU3RhdGljUHJpdmF0ZUZpZWxkRGVzdHJ1Y3R1cmVTZXQsIF9jbGFzc0NoZWNrUHJpdmF0ZVN0YXRpY0FjY2VzcyBhcyBjbGFzc0NoZWNrUHJpdmF0ZVN0YXRpY0FjY2VzcywgX2NsYXNzQ2hlY2tQcml2YXRlU3RhdGljRmllbGREZXNjcmlwdG9yIGFzIGNsYXNzQ2hlY2tQcml2YXRlU3RhdGljRmllbGREZXNjcmlwdG9yLCBfZGVjb3JhdGUgYXMgZGVjb3JhdGUsIF9jbGFzc1ByaXZhdGVNZXRob2RHZXQgYXMgY2xhc3NQcml2YXRlTWV0aG9kR2V0LCBfY2hlY2tQcml2YXRlUmVkZWNsYXJhdGlvbiBhcyBjaGVja1ByaXZhdGVSZWRlY2xhcmF0aW9uLCBfY2xhc3NQcml2YXRlRmllbGRJbml0U3BlYyBhcyBjbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjLCBfY2xhc3NQcml2YXRlTWV0aG9kSW5pdFNwZWMgYXMgY2xhc3NQcml2YXRlTWV0aG9kSW5pdFNwZWMsIF9jbGFzc1ByaXZhdGVNZXRob2RTZXQgYXMgY2xhc3NQcml2YXRlTWV0aG9kU2V0LCBfaWRlbnRpdHkgYXMgaWRlbnRpdHkgfTtcbmZ1bmN0aW9uIF9Bc3luY0dlbmVyYXRvcihlKSB7XG4gIHZhciByLCB0O1xuICBmdW5jdGlvbiByZXN1bWUociwgdCkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgbiA9IGVbcl0odCksXG4gICAgICAgIG8gPSBuLnZhbHVlLFxuICAgICAgICB1ID0gbyBpbnN0YW5jZW9mIF9PdmVybG9hZFlpZWxkO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKHUgPyBvLnYgOiBvKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh1KSB7XG4gICAgICAgICAgdmFyIGkgPSBcInJldHVyblwiID09PSByID8gXCJyZXR1cm5cIiA6IFwibmV4dFwiO1xuICAgICAgICAgIGlmICghby5rIHx8IHQuZG9uZSkgcmV0dXJuIHJlc3VtZShpLCB0KTtcbiAgICAgICAgICB0ID0gZVtpXSh0KS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBzZXR0bGUobi5kb25lID8gXCJyZXR1cm5cIiA6IFwibm9ybWFsXCIsIHQpO1xuICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmVzdW1lKFwidGhyb3dcIiwgZSk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzZXR0bGUoXCJ0aHJvd1wiLCBlKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gc2V0dGxlKGUsIG4pIHtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgXCJyZXR1cm5cIjpcbiAgICAgICAgci5yZXNvbHZlKHtcbiAgICAgICAgICB2YWx1ZTogbixcbiAgICAgICAgICBkb25lOiAhMFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwidGhyb3dcIjpcbiAgICAgICAgci5yZWplY3Qobik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgci5yZXNvbHZlKHtcbiAgICAgICAgICB2YWx1ZTogbixcbiAgICAgICAgICBkb25lOiAhMVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgKHIgPSByLm5leHQpID8gcmVzdW1lKHIua2V5LCByLmFyZykgOiB0ID0gbnVsbDtcbiAgfVxuICB0aGlzLl9pbnZva2UgPSBmdW5jdGlvbiAoZSwgbikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAobywgdSkge1xuICAgICAgdmFyIGkgPSB7XG4gICAgICAgIGtleTogZSxcbiAgICAgICAgYXJnOiBuLFxuICAgICAgICByZXNvbHZlOiBvLFxuICAgICAgICByZWplY3Q6IHUsXG4gICAgICAgIG5leHQ6IG51bGxcbiAgICAgIH07XG4gICAgICB0ID8gdCA9IHQubmV4dCA9IGkgOiAociA9IHQgPSBpLCByZXN1bWUoZSwgbikpO1xuICAgIH0pO1xuICB9LCBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGUucmV0dXJuICYmICh0aGlzLnJldHVybiA9IHZvaWQgMCk7XG59XG5fQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1wiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCJdID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn0sIF9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uIChlKSB7XG4gIHJldHVybiB0aGlzLl9pbnZva2UoXCJuZXh0XCIsIGUpO1xufSwgX0FzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS50aHJvdyA9IGZ1bmN0aW9uIChlKSB7XG4gIHJldHVybiB0aGlzLl9pbnZva2UoXCJ0aHJvd1wiLCBlKTtcbn0sIF9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUucmV0dXJuID0gZnVuY3Rpb24gKGUpIHtcbiAgcmV0dXJuIHRoaXMuX2ludm9rZShcInJldHVyblwiLCBlKTtcbn07XG5mdW5jdGlvbiBfT3ZlcmxvYWRZaWVsZCh0LCBlKSB7XG4gIHRoaXMudiA9IHQsIHRoaXMuayA9IGU7XG59XG5mdW5jdGlvbiBvbGRfY3JlYXRlTWV0YWRhdGFNZXRob2RzRm9yUHJvcGVydHkoZSwgdCwgYSwgcikge1xuICByZXR1cm4ge1xuICAgIGdldE1ldGFkYXRhOiBmdW5jdGlvbiAobykge1xuICAgICAgb2xkX2Fzc2VydE5vdEZpbmlzaGVkKHIsIFwiZ2V0TWV0YWRhdGFcIiksIG9sZF9hc3NlcnRNZXRhZGF0YUtleShvKTtcbiAgICAgIHZhciBpID0gZVtvXTtcbiAgICAgIGlmICh2b2lkIDAgIT09IGkpIGlmICgxID09PSB0KSB7XG4gICAgICAgIHZhciBuID0gaS5wdWJsaWM7XG4gICAgICAgIGlmICh2b2lkIDAgIT09IG4pIHJldHVybiBuW2FdO1xuICAgICAgfSBlbHNlIGlmICgyID09PSB0KSB7XG4gICAgICAgIHZhciBsID0gaS5wcml2YXRlO1xuICAgICAgICBpZiAodm9pZCAwICE9PSBsKSByZXR1cm4gbC5nZXQoYSk7XG4gICAgICB9IGVsc2UgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKGksIFwiY29uc3RydWN0b3JcIikpIHJldHVybiBpLmNvbnN0cnVjdG9yO1xuICAgIH0sXG4gICAgc2V0TWV0YWRhdGE6IGZ1bmN0aW9uIChvLCBpKSB7XG4gICAgICBvbGRfYXNzZXJ0Tm90RmluaXNoZWQociwgXCJzZXRNZXRhZGF0YVwiKSwgb2xkX2Fzc2VydE1ldGFkYXRhS2V5KG8pO1xuICAgICAgdmFyIG4gPSBlW29dO1xuICAgICAgaWYgKHZvaWQgMCA9PT0gbiAmJiAobiA9IGVbb10gPSB7fSksIDEgPT09IHQpIHtcbiAgICAgICAgdmFyIGwgPSBuLnB1YmxpYztcbiAgICAgICAgdm9pZCAwID09PSBsICYmIChsID0gbi5wdWJsaWMgPSB7fSksIGxbYV0gPSBpO1xuICAgICAgfSBlbHNlIGlmICgyID09PSB0KSB7XG4gICAgICAgIHZhciBzID0gbi5wcml2O1xuICAgICAgICB2b2lkIDAgPT09IHMgJiYgKHMgPSBuLnByaXZhdGUgPSBuZXcgTWFwKCkpLCBzLnNldChhLCBpKTtcbiAgICAgIH0gZWxzZSBuLmNvbnN0cnVjdG9yID0gaTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBvbGRfY29udmVydE1ldGFkYXRhTWFwVG9GaW5hbChlLCB0KSB7XG4gIHZhciBhID0gZVtTeW1ib2wubWV0YWRhdGEgfHwgU3ltYm9sLmZvcihcIlN5bWJvbC5tZXRhZGF0YVwiKV0sXG4gICAgciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModCk7XG4gIGlmICgwICE9PSByLmxlbmd0aCkge1xuICAgIGZvciAodmFyIG8gPSAwOyBvIDwgci5sZW5ndGg7IG8rKykge1xuICAgICAgdmFyIGkgPSByW29dLFxuICAgICAgICBuID0gdFtpXSxcbiAgICAgICAgbCA9IGEgPyBhW2ldIDogbnVsbCxcbiAgICAgICAgcyA9IG4ucHVibGljLFxuICAgICAgICBjID0gbCA/IGwucHVibGljIDogbnVsbDtcbiAgICAgIHMgJiYgYyAmJiBPYmplY3Quc2V0UHJvdG90eXBlT2YocywgYyk7XG4gICAgICB2YXIgZCA9IG4ucHJpdmF0ZTtcbiAgICAgIGlmIChkKSB7XG4gICAgICAgIHZhciB1ID0gQXJyYXkuZnJvbShkLnZhbHVlcygpKSxcbiAgICAgICAgICBmID0gbCA/IGwucHJpdmF0ZSA6IG51bGw7XG4gICAgICAgIGYgJiYgKHUgPSB1LmNvbmNhdChmKSksIG4ucHJpdmF0ZSA9IHU7XG4gICAgICB9XG4gICAgICBsICYmIE9iamVjdC5zZXRQcm90b3R5cGVPZihuLCBsKTtcbiAgICB9XG4gICAgYSAmJiBPYmplY3Quc2V0UHJvdG90eXBlT2YodCwgYSksIGVbU3ltYm9sLm1ldGFkYXRhIHx8IFN5bWJvbC5mb3IoXCJTeW1ib2wubWV0YWRhdGFcIildID0gdDtcbiAgfVxufVxuZnVuY3Rpb24gb2xkX2NyZWF0ZUFkZEluaXRpYWxpemVyTWV0aG9kKGUsIHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgb2xkX2Fzc2VydE5vdEZpbmlzaGVkKHQsIFwiYWRkSW5pdGlhbGl6ZXJcIiksIG9sZF9hc3NlcnRDYWxsYWJsZShhLCBcIkFuIGluaXRpYWxpemVyXCIpLCBlLnB1c2goYSk7XG4gIH07XG59XG5mdW5jdGlvbiBvbGRfbWVtYmVyRGVjKGUsIHQsIGEsIHIsIG8sIGksIG4sIGwsIHMpIHtcbiAgdmFyIGM7XG4gIHN3aXRjaCAoaSkge1xuICAgIGNhc2UgMTpcbiAgICAgIGMgPSBcImFjY2Vzc29yXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBjID0gXCJtZXRob2RcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIGMgPSBcImdldHRlclwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA0OlxuICAgICAgYyA9IFwic2V0dGVyXCI7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYyA9IFwiZmllbGRcIjtcbiAgfVxuICB2YXIgZCxcbiAgICB1LFxuICAgIGYgPSB7XG4gICAgICBraW5kOiBjLFxuICAgICAgbmFtZTogbCA/IFwiI1wiICsgdCA6IHQsXG4gICAgICBpc1N0YXRpYzogbixcbiAgICAgIGlzUHJpdmF0ZTogbFxuICAgIH0sXG4gICAgcCA9IHtcbiAgICAgIHY6ICExXG4gICAgfTtcbiAgaWYgKDAgIT09IGkgJiYgKGYuYWRkSW5pdGlhbGl6ZXIgPSBvbGRfY3JlYXRlQWRkSW5pdGlhbGl6ZXJNZXRob2QobywgcCkpLCBsKSB7XG4gICAgZCA9IDIsIHUgPSBTeW1ib2wodCk7XG4gICAgdmFyIHYgPSB7fTtcbiAgICAwID09PSBpID8gKHYuZ2V0ID0gYS5nZXQsIHYuc2V0ID0gYS5zZXQpIDogMiA9PT0gaSA/IHYuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGEudmFsdWU7XG4gICAgfSA6ICgxICE9PSBpICYmIDMgIT09IGkgfHwgKHYuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGEuZ2V0LmNhbGwodGhpcyk7XG4gICAgfSksIDEgIT09IGkgJiYgNCAhPT0gaSB8fCAodi5zZXQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgYS5zZXQuY2FsbCh0aGlzLCBlKTtcbiAgICB9KSksIGYuYWNjZXNzID0gdjtcbiAgfSBlbHNlIGQgPSAxLCB1ID0gdDtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZShzLCBPYmplY3QuYXNzaWduKGYsIG9sZF9jcmVhdGVNZXRhZGF0YU1ldGhvZHNGb3JQcm9wZXJ0eShyLCBkLCB1LCBwKSkpO1xuICB9IGZpbmFsbHkge1xuICAgIHAudiA9ICEwO1xuICB9XG59XG5mdW5jdGlvbiBvbGRfYXNzZXJ0Tm90RmluaXNoZWQoZSwgdCkge1xuICBpZiAoZS52KSB0aHJvdyBuZXcgRXJyb3IoXCJhdHRlbXB0ZWQgdG8gY2FsbCBcIiArIHQgKyBcIiBhZnRlciBkZWNvcmF0aW9uIHdhcyBmaW5pc2hlZFwiKTtcbn1cbmZ1bmN0aW9uIG9sZF9hc3NlcnRNZXRhZGF0YUtleShlKSB7XG4gIGlmIChcInN5bWJvbFwiICE9IHR5cGVvZiBlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWV0YWRhdGEga2V5cyBtdXN0IGJlIHN5bWJvbHMsIHJlY2VpdmVkOiBcIiArIGUpO1xufVxuZnVuY3Rpb24gb2xkX2Fzc2VydENhbGxhYmxlKGUsIHQpIHtcbiAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZSkgdGhyb3cgbmV3IFR5cGVFcnJvcih0ICsgXCIgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xufVxuZnVuY3Rpb24gb2xkX2Fzc2VydFZhbGlkUmV0dXJuVmFsdWUoZSwgdCkge1xuICB2YXIgYSA9IHR5cGVvZiB0O1xuICBpZiAoMSA9PT0gZSkge1xuICAgIGlmIChcIm9iamVjdFwiICE9PSBhIHx8IG51bGwgPT09IHQpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhY2Nlc3NvciBkZWNvcmF0b3JzIG11c3QgcmV0dXJuIGFuIG9iamVjdCB3aXRoIGdldCwgc2V0LCBvciBpbml0IHByb3BlcnRpZXMgb3Igdm9pZCAwXCIpO1xuICAgIHZvaWQgMCAhPT0gdC5nZXQgJiYgb2xkX2Fzc2VydENhbGxhYmxlKHQuZ2V0LCBcImFjY2Vzc29yLmdldFwiKSwgdm9pZCAwICE9PSB0LnNldCAmJiBvbGRfYXNzZXJ0Q2FsbGFibGUodC5zZXQsIFwiYWNjZXNzb3Iuc2V0XCIpLCB2b2lkIDAgIT09IHQuaW5pdCAmJiBvbGRfYXNzZXJ0Q2FsbGFibGUodC5pbml0LCBcImFjY2Vzc29yLmluaXRcIiksIHZvaWQgMCAhPT0gdC5pbml0aWFsaXplciAmJiBvbGRfYXNzZXJ0Q2FsbGFibGUodC5pbml0aWFsaXplciwgXCJhY2Nlc3Nvci5pbml0aWFsaXplclwiKTtcbiAgfSBlbHNlIGlmIChcImZ1bmN0aW9uXCIgIT09IGEpIHtcbiAgICB2YXIgcjtcbiAgICB0aHJvdyByID0gMCA9PT0gZSA/IFwiZmllbGRcIiA6IDEwID09PSBlID8gXCJjbGFzc1wiIDogXCJtZXRob2RcIiwgbmV3IFR5cGVFcnJvcihyICsgXCIgZGVjb3JhdG9ycyBtdXN0IHJldHVybiBhIGZ1bmN0aW9uIG9yIHZvaWQgMFwiKTtcbiAgfVxufVxuZnVuY3Rpb24gb2xkX2dldEluaXQoZSkge1xuICB2YXIgdDtcbiAgcmV0dXJuIG51bGwgPT0gKHQgPSBlLmluaXQpICYmICh0ID0gZS5pbml0aWFsaXplcikgJiYgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgY29uc29sZSAmJiBjb25zb2xlLndhcm4oXCIuaW5pdGlhbGl6ZXIgaGFzIGJlZW4gcmVuYW1lZCB0byAuaW5pdCBhcyBvZiBNYXJjaCAyMDIyXCIpLCB0O1xufVxuZnVuY3Rpb24gb2xkX2FwcGx5TWVtYmVyRGVjKGUsIHQsIGEsIHIsIG8sIGksIG4sIGwsIHMpIHtcbiAgdmFyIGMsXG4gICAgZCxcbiAgICB1LFxuICAgIGYsXG4gICAgcCxcbiAgICB2LFxuICAgIGggPSBhWzBdO1xuICBpZiAobiA/IGMgPSAwID09PSBvIHx8IDEgPT09IG8gPyB7XG4gICAgZ2V0OiBhWzNdLFxuICAgIHNldDogYVs0XVxuICB9IDogMyA9PT0gbyA/IHtcbiAgICBnZXQ6IGFbM11cbiAgfSA6IDQgPT09IG8gPyB7XG4gICAgc2V0OiBhWzNdXG4gIH0gOiB7XG4gICAgdmFsdWU6IGFbM11cbiAgfSA6IDAgIT09IG8gJiYgKGMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsIHIpKSwgMSA9PT0gbyA/IHUgPSB7XG4gICAgZ2V0OiBjLmdldCxcbiAgICBzZXQ6IGMuc2V0XG4gIH0gOiAyID09PSBvID8gdSA9IGMudmFsdWUgOiAzID09PSBvID8gdSA9IGMuZ2V0IDogNCA9PT0gbyAmJiAodSA9IGMuc2V0KSwgXCJmdW5jdGlvblwiID09IHR5cGVvZiBoKSB2b2lkIDAgIT09IChmID0gb2xkX21lbWJlckRlYyhoLCByLCBjLCBsLCBzLCBvLCBpLCBuLCB1KSkgJiYgKG9sZF9hc3NlcnRWYWxpZFJldHVyblZhbHVlKG8sIGYpLCAwID09PSBvID8gZCA9IGYgOiAxID09PSBvID8gKGQgPSBvbGRfZ2V0SW5pdChmKSwgcCA9IGYuZ2V0IHx8IHUuZ2V0LCB2ID0gZi5zZXQgfHwgdS5zZXQsIHUgPSB7XG4gICAgZ2V0OiBwLFxuICAgIHNldDogdlxuICB9KSA6IHUgPSBmKTtlbHNlIGZvciAodmFyIHkgPSBoLmxlbmd0aCAtIDE7IHkgPj0gMDsgeS0tKSB7XG4gICAgdmFyIGI7XG4gICAgaWYgKHZvaWQgMCAhPT0gKGYgPSBvbGRfbWVtYmVyRGVjKGhbeV0sIHIsIGMsIGwsIHMsIG8sIGksIG4sIHUpKSkgb2xkX2Fzc2VydFZhbGlkUmV0dXJuVmFsdWUobywgZiksIDAgPT09IG8gPyBiID0gZiA6IDEgPT09IG8gPyAoYiA9IG9sZF9nZXRJbml0KGYpLCBwID0gZi5nZXQgfHwgdS5nZXQsIHYgPSBmLnNldCB8fCB1LnNldCwgdSA9IHtcbiAgICAgIGdldDogcCxcbiAgICAgIHNldDogdlxuICAgIH0pIDogdSA9IGYsIHZvaWQgMCAhPT0gYiAmJiAodm9pZCAwID09PSBkID8gZCA9IGIgOiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGQgPyBkID0gW2QsIGJdIDogZC5wdXNoKGIpKTtcbiAgfVxuICBpZiAoMCA9PT0gbyB8fCAxID09PSBvKSB7XG4gICAgaWYgKHZvaWQgMCA9PT0gZCkgZCA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gdDtcbiAgICB9O2Vsc2UgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZCkge1xuICAgICAgdmFyIGcgPSBkO1xuICAgICAgZCA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIGZvciAodmFyIGEgPSB0LCByID0gMDsgciA8IGcubGVuZ3RoOyByKyspIGEgPSBnW3JdLmNhbGwoZSwgYSk7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG0gPSBkO1xuICAgICAgZCA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHJldHVybiBtLmNhbGwoZSwgdCk7XG4gICAgICB9O1xuICAgIH1cbiAgICBlLnB1c2goZCk7XG4gIH1cbiAgMCAhPT0gbyAmJiAoMSA9PT0gbyA/IChjLmdldCA9IHUuZ2V0LCBjLnNldCA9IHUuc2V0KSA6IDIgPT09IG8gPyBjLnZhbHVlID0gdSA6IDMgPT09IG8gPyBjLmdldCA9IHUgOiA0ID09PSBvICYmIChjLnNldCA9IHUpLCBuID8gMSA9PT0gbyA/IChlLnB1c2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICByZXR1cm4gdS5nZXQuY2FsbChlLCB0KTtcbiAgfSksIGUucHVzaChmdW5jdGlvbiAoZSwgdCkge1xuICAgIHJldHVybiB1LnNldC5jYWxsKGUsIHQpO1xuICB9KSkgOiAyID09PSBvID8gZS5wdXNoKHUpIDogZS5wdXNoKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgcmV0dXJuIHUuY2FsbChlLCB0KTtcbiAgfSkgOiBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgciwgYykpO1xufVxuZnVuY3Rpb24gb2xkX2FwcGx5TWVtYmVyRGVjcyhlLCB0LCBhLCByLCBvKSB7XG4gIGZvciAodmFyIGksIG4sIGwgPSBuZXcgTWFwKCksIHMgPSBuZXcgTWFwKCksIGMgPSAwOyBjIDwgby5sZW5ndGg7IGMrKykge1xuICAgIHZhciBkID0gb1tjXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkKSkge1xuICAgICAgdmFyIHUsXG4gICAgICAgIGYsXG4gICAgICAgIHAsXG4gICAgICAgIHYgPSBkWzFdLFxuICAgICAgICBoID0gZFsyXSxcbiAgICAgICAgeSA9IGQubGVuZ3RoID4gMyxcbiAgICAgICAgYiA9IHYgPj0gNTtcbiAgICAgIGlmIChiID8gKHUgPSB0LCBmID0gciwgMCAhPT0gKHYgLT0gNSkgJiYgKHAgPSBuID0gbiB8fCBbXSkpIDogKHUgPSB0LnByb3RvdHlwZSwgZiA9IGEsIDAgIT09IHYgJiYgKHAgPSBpID0gaSB8fCBbXSkpLCAwICE9PSB2ICYmICF5KSB7XG4gICAgICAgIHZhciBnID0gYiA/IHMgOiBsLFxuICAgICAgICAgIG0gPSBnLmdldChoKSB8fCAwO1xuICAgICAgICBpZiAoITAgPT09IG0gfHwgMyA9PT0gbSAmJiA0ICE9PSB2IHx8IDQgPT09IG0gJiYgMyAhPT0gdikgdGhyb3cgbmV3IEVycm9yKFwiQXR0ZW1wdGVkIHRvIGRlY29yYXRlIGEgcHVibGljIG1ldGhvZC9hY2Nlc3NvciB0aGF0IGhhcyB0aGUgc2FtZSBuYW1lIGFzIGEgcHJldmlvdXNseSBkZWNvcmF0ZWQgcHVibGljIG1ldGhvZC9hY2Nlc3Nvci4gVGhpcyBpcyBub3QgY3VycmVudGx5IHN1cHBvcnRlZCBieSB0aGUgZGVjb3JhdG9ycyBwbHVnaW4uIFByb3BlcnR5IG5hbWUgd2FzOiBcIiArIGgpO1xuICAgICAgICAhbSAmJiB2ID4gMiA/IGcuc2V0KGgsIHYpIDogZy5zZXQoaCwgITApO1xuICAgICAgfVxuICAgICAgb2xkX2FwcGx5TWVtYmVyRGVjKGUsIHUsIGQsIGgsIHYsIGIsIHksIGYsIHApO1xuICAgIH1cbiAgfVxuICBvbGRfcHVzaEluaXRpYWxpemVycyhlLCBpKSwgb2xkX3B1c2hJbml0aWFsaXplcnMoZSwgbik7XG59XG5mdW5jdGlvbiBvbGRfcHVzaEluaXRpYWxpemVycyhlLCB0KSB7XG4gIHQgJiYgZS5wdXNoKGZ1bmN0aW9uIChlKSB7XG4gICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0Lmxlbmd0aDsgYSsrKSB0W2FdLmNhbGwoZSk7XG4gICAgcmV0dXJuIGU7XG4gIH0pO1xufVxuZnVuY3Rpb24gb2xkX2FwcGx5Q2xhc3NEZWNzKGUsIHQsIGEsIHIpIHtcbiAgaWYgKHIubGVuZ3RoID4gMCkge1xuICAgIGZvciAodmFyIG8gPSBbXSwgaSA9IHQsIG4gPSB0Lm5hbWUsIGwgPSByLmxlbmd0aCAtIDE7IGwgPj0gMDsgbC0tKSB7XG4gICAgICB2YXIgcyA9IHtcbiAgICAgICAgdjogITFcbiAgICAgIH07XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgYyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAga2luZDogXCJjbGFzc1wiLFxuICAgICAgICAgICAgbmFtZTogbixcbiAgICAgICAgICAgIGFkZEluaXRpYWxpemVyOiBvbGRfY3JlYXRlQWRkSW5pdGlhbGl6ZXJNZXRob2QobywgcylcbiAgICAgICAgICB9LCBvbGRfY3JlYXRlTWV0YWRhdGFNZXRob2RzRm9yUHJvcGVydHkoYSwgMCwgbiwgcykpLFxuICAgICAgICAgIGQgPSByW2xdKGksIGMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgcy52ID0gITA7XG4gICAgICB9XG4gICAgICB2b2lkIDAgIT09IGQgJiYgKG9sZF9hc3NlcnRWYWxpZFJldHVyblZhbHVlKDEwLCBkKSwgaSA9IGQpO1xuICAgIH1cbiAgICBlLnB1c2goaSwgZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCBvLmxlbmd0aDsgZSsrKSBvW2VdLmNhbGwoaSk7XG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIF9hcHBseURlY3MoZSwgdCwgYSkge1xuICB2YXIgciA9IFtdLFxuICAgIG8gPSB7fSxcbiAgICBpID0ge307XG4gIHJldHVybiBvbGRfYXBwbHlNZW1iZXJEZWNzKHIsIGUsIGksIG8sIHQpLCBvbGRfY29udmVydE1ldGFkYXRhTWFwVG9GaW5hbChlLnByb3RvdHlwZSwgaSksIG9sZF9hcHBseUNsYXNzRGVjcyhyLCBlLCBvLCBhKSwgb2xkX2NvbnZlcnRNZXRhZGF0YU1hcFRvRmluYWwoZSwgbyksIHI7XG59XG5mdW5jdGlvbiBhcHBseURlY3MyMjAzRmFjdG9yeSgpIHtcbiAgZnVuY3Rpb24gY3JlYXRlQWRkSW5pdGlhbGl6ZXJNZXRob2QoZSwgdCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocikge1xuICAgICAgIWZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIGlmIChlLnYpIHRocm93IG5ldyBFcnJvcihcImF0dGVtcHRlZCB0byBjYWxsIFwiICsgdCArIFwiIGFmdGVyIGRlY29yYXRpb24gd2FzIGZpbmlzaGVkXCIpO1xuICAgICAgfSh0LCBcImFkZEluaXRpYWxpemVyXCIpLCBhc3NlcnRDYWxsYWJsZShyLCBcIkFuIGluaXRpYWxpemVyXCIpLCBlLnB1c2gocik7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBtZW1iZXJEZWMoZSwgdCwgciwgYSwgbiwgaSwgcywgbykge1xuICAgIHZhciBjO1xuICAgIHN3aXRjaCAobikge1xuICAgICAgY2FzZSAxOlxuICAgICAgICBjID0gXCJhY2Nlc3NvclwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgYyA9IFwibWV0aG9kXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBjID0gXCJnZXR0ZXJcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIGMgPSBcInNldHRlclwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGMgPSBcImZpZWxkXCI7XG4gICAgfVxuICAgIHZhciBsLFxuICAgICAgdSxcbiAgICAgIGYgPSB7XG4gICAgICAgIGtpbmQ6IGMsXG4gICAgICAgIG5hbWU6IHMgPyBcIiNcIiArIHQgOiB0LFxuICAgICAgICBzdGF0aWM6IGksXG4gICAgICAgIHByaXZhdGU6IHNcbiAgICAgIH0sXG4gICAgICBwID0ge1xuICAgICAgICB2OiAhMVxuICAgICAgfTtcbiAgICAwICE9PSBuICYmIChmLmFkZEluaXRpYWxpemVyID0gY3JlYXRlQWRkSW5pdGlhbGl6ZXJNZXRob2QoYSwgcCkpLCAwID09PSBuID8gcyA/IChsID0gci5nZXQsIHUgPSByLnNldCkgOiAobCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzW3RdO1xuICAgIH0sIHUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdGhpc1t0XSA9IGU7XG4gICAgfSkgOiAyID09PSBuID8gbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByLnZhbHVlO1xuICAgIH0gOiAoMSAhPT0gbiAmJiAzICE9PSBuIHx8IChsID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHIuZ2V0LmNhbGwodGhpcyk7XG4gICAgfSksIDEgIT09IG4gJiYgNCAhPT0gbiB8fCAodSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICByLnNldC5jYWxsKHRoaXMsIGUpO1xuICAgIH0pKSwgZi5hY2Nlc3MgPSBsICYmIHUgPyB7XG4gICAgICBnZXQ6IGwsXG4gICAgICBzZXQ6IHVcbiAgICB9IDogbCA/IHtcbiAgICAgIGdldDogbFxuICAgIH0gOiB7XG4gICAgICBzZXQ6IHVcbiAgICB9O1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZShvLCBmKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgcC52ID0gITA7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGFzc2VydENhbGxhYmxlKGUsIHQpIHtcbiAgICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBlKSB0aHJvdyBuZXcgVHlwZUVycm9yKHQgKyBcIiBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gIH1cbiAgZnVuY3Rpb24gYXNzZXJ0VmFsaWRSZXR1cm5WYWx1ZShlLCB0KSB7XG4gICAgdmFyIHIgPSB0eXBlb2YgdDtcbiAgICBpZiAoMSA9PT0gZSkge1xuICAgICAgaWYgKFwib2JqZWN0XCIgIT09IHIgfHwgbnVsbCA9PT0gdCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcImFjY2Vzc29yIGRlY29yYXRvcnMgbXVzdCByZXR1cm4gYW4gb2JqZWN0IHdpdGggZ2V0LCBzZXQsIG9yIGluaXQgcHJvcGVydGllcyBvciB2b2lkIDBcIik7XG4gICAgICB2b2lkIDAgIT09IHQuZ2V0ICYmIGFzc2VydENhbGxhYmxlKHQuZ2V0LCBcImFjY2Vzc29yLmdldFwiKSwgdm9pZCAwICE9PSB0LnNldCAmJiBhc3NlcnRDYWxsYWJsZSh0LnNldCwgXCJhY2Nlc3Nvci5zZXRcIiksIHZvaWQgMCAhPT0gdC5pbml0ICYmIGFzc2VydENhbGxhYmxlKHQuaW5pdCwgXCJhY2Nlc3Nvci5pbml0XCIpO1xuICAgIH0gZWxzZSBpZiAoXCJmdW5jdGlvblwiICE9PSByKSB7XG4gICAgICB2YXIgYTtcbiAgICAgIHRocm93IGEgPSAwID09PSBlID8gXCJmaWVsZFwiIDogMTAgPT09IGUgPyBcImNsYXNzXCIgOiBcIm1ldGhvZFwiLCBuZXcgVHlwZUVycm9yKGEgKyBcIiBkZWNvcmF0b3JzIG11c3QgcmV0dXJuIGEgZnVuY3Rpb24gb3Igdm9pZCAwXCIpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBhcHBseU1lbWJlckRlYyhlLCB0LCByLCBhLCBuLCBpLCBzLCBvKSB7XG4gICAgdmFyIGMsXG4gICAgICBsLFxuICAgICAgdSxcbiAgICAgIGYsXG4gICAgICBwLFxuICAgICAgZCxcbiAgICAgIGggPSByWzBdO1xuICAgIGlmIChzID8gYyA9IDAgPT09IG4gfHwgMSA9PT0gbiA/IHtcbiAgICAgIGdldDogclszXSxcbiAgICAgIHNldDogcls0XVxuICAgIH0gOiAzID09PSBuID8ge1xuICAgICAgZ2V0OiByWzNdXG4gICAgfSA6IDQgPT09IG4gPyB7XG4gICAgICBzZXQ6IHJbM11cbiAgICB9IDoge1xuICAgICAgdmFsdWU6IHJbM11cbiAgICB9IDogMCAhPT0gbiAmJiAoYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgYSkpLCAxID09PSBuID8gdSA9IHtcbiAgICAgIGdldDogYy5nZXQsXG4gICAgICBzZXQ6IGMuc2V0XG4gICAgfSA6IDIgPT09IG4gPyB1ID0gYy52YWx1ZSA6IDMgPT09IG4gPyB1ID0gYy5nZXQgOiA0ID09PSBuICYmICh1ID0gYy5zZXQpLCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGgpIHZvaWQgMCAhPT0gKGYgPSBtZW1iZXJEZWMoaCwgYSwgYywgbywgbiwgaSwgcywgdSkpICYmIChhc3NlcnRWYWxpZFJldHVyblZhbHVlKG4sIGYpLCAwID09PSBuID8gbCA9IGYgOiAxID09PSBuID8gKGwgPSBmLmluaXQsIHAgPSBmLmdldCB8fCB1LmdldCwgZCA9IGYuc2V0IHx8IHUuc2V0LCB1ID0ge1xuICAgICAgZ2V0OiBwLFxuICAgICAgc2V0OiBkXG4gICAgfSkgOiB1ID0gZik7ZWxzZSBmb3IgKHZhciB2ID0gaC5sZW5ndGggLSAxOyB2ID49IDA7IHYtLSkge1xuICAgICAgdmFyIGc7XG4gICAgICBpZiAodm9pZCAwICE9PSAoZiA9IG1lbWJlckRlYyhoW3ZdLCBhLCBjLCBvLCBuLCBpLCBzLCB1KSkpIGFzc2VydFZhbGlkUmV0dXJuVmFsdWUobiwgZiksIDAgPT09IG4gPyBnID0gZiA6IDEgPT09IG4gPyAoZyA9IGYuaW5pdCwgcCA9IGYuZ2V0IHx8IHUuZ2V0LCBkID0gZi5zZXQgfHwgdS5zZXQsIHUgPSB7XG4gICAgICAgIGdldDogcCxcbiAgICAgICAgc2V0OiBkXG4gICAgICB9KSA6IHUgPSBmLCB2b2lkIDAgIT09IGcgJiYgKHZvaWQgMCA9PT0gbCA/IGwgPSBnIDogXCJmdW5jdGlvblwiID09IHR5cGVvZiBsID8gbCA9IFtsLCBnXSA6IGwucHVzaChnKSk7XG4gICAgfVxuICAgIGlmICgwID09PSBuIHx8IDEgPT09IG4pIHtcbiAgICAgIGlmICh2b2lkIDAgPT09IGwpIGwgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICByZXR1cm4gdDtcbiAgICAgIH07ZWxzZSBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBsKSB7XG4gICAgICAgIHZhciB5ID0gbDtcbiAgICAgICAgbCA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgZm9yICh2YXIgciA9IHQsIGEgPSAwOyBhIDwgeS5sZW5ndGg7IGErKykgciA9IHlbYV0uY2FsbChlLCByKTtcbiAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtID0gbDtcbiAgICAgICAgbCA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgcmV0dXJuIG0uY2FsbChlLCB0KTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGUucHVzaChsKTtcbiAgICB9XG4gICAgMCAhPT0gbiAmJiAoMSA9PT0gbiA/IChjLmdldCA9IHUuZ2V0LCBjLnNldCA9IHUuc2V0KSA6IDIgPT09IG4gPyBjLnZhbHVlID0gdSA6IDMgPT09IG4gPyBjLmdldCA9IHUgOiA0ID09PSBuICYmIChjLnNldCA9IHUpLCBzID8gMSA9PT0gbiA/IChlLnB1c2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiB1LmdldC5jYWxsKGUsIHQpO1xuICAgIH0pLCBlLnB1c2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiB1LnNldC5jYWxsKGUsIHQpO1xuICAgIH0pKSA6IDIgPT09IG4gPyBlLnB1c2godSkgOiBlLnB1c2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiB1LmNhbGwoZSwgdCk7XG4gICAgfSkgOiBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgYSwgYykpO1xuICB9XG4gIGZ1bmN0aW9uIHB1c2hJbml0aWFsaXplcnMoZSwgdCkge1xuICAgIHQgJiYgZS5wdXNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBmb3IgKHZhciByID0gMDsgciA8IHQubGVuZ3RoOyByKyspIHRbcl0uY2FsbChlKTtcbiAgICAgIHJldHVybiBlO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoZSwgdCwgcikge1xuICAgIHZhciBhID0gW107XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlLCB0LCByKSB7XG4gICAgICBmb3IgKHZhciBhLCBuLCBpID0gbmV3IE1hcCgpLCBzID0gbmV3IE1hcCgpLCBvID0gMDsgbyA8IHIubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgdmFyIGMgPSByW29dO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjKSkge1xuICAgICAgICAgIHZhciBsLFxuICAgICAgICAgICAgdSxcbiAgICAgICAgICAgIGYgPSBjWzFdLFxuICAgICAgICAgICAgcCA9IGNbMl0sXG4gICAgICAgICAgICBkID0gYy5sZW5ndGggPiAzLFxuICAgICAgICAgICAgaCA9IGYgPj0gNTtcbiAgICAgICAgICBpZiAoaCA/IChsID0gdCwgMCAhPSAoZiAtPSA1KSAmJiAodSA9IG4gPSBuIHx8IFtdKSkgOiAobCA9IHQucHJvdG90eXBlLCAwICE9PSBmICYmICh1ID0gYSA9IGEgfHwgW10pKSwgMCAhPT0gZiAmJiAhZCkge1xuICAgICAgICAgICAgdmFyIHYgPSBoID8gcyA6IGksXG4gICAgICAgICAgICAgIGcgPSB2LmdldChwKSB8fCAwO1xuICAgICAgICAgICAgaWYgKCEwID09PSBnIHx8IDMgPT09IGcgJiYgNCAhPT0gZiB8fCA0ID09PSBnICYmIDMgIT09IGYpIHRocm93IG5ldyBFcnJvcihcIkF0dGVtcHRlZCB0byBkZWNvcmF0ZSBhIHB1YmxpYyBtZXRob2QvYWNjZXNzb3IgdGhhdCBoYXMgdGhlIHNhbWUgbmFtZSBhcyBhIHByZXZpb3VzbHkgZGVjb3JhdGVkIHB1YmxpYyBtZXRob2QvYWNjZXNzb3IuIFRoaXMgaXMgbm90IGN1cnJlbnRseSBzdXBwb3J0ZWQgYnkgdGhlIGRlY29yYXRvcnMgcGx1Z2luLiBQcm9wZXJ0eSBuYW1lIHdhczogXCIgKyBwKTtcbiAgICAgICAgICAgICFnICYmIGYgPiAyID8gdi5zZXQocCwgZikgOiB2LnNldChwLCAhMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFwcGx5TWVtYmVyRGVjKGUsIGwsIGMsIHAsIGYsIGgsIGQsIHUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwdXNoSW5pdGlhbGl6ZXJzKGUsIGEpLCBwdXNoSW5pdGlhbGl6ZXJzKGUsIG4pO1xuICAgIH0oYSwgZSwgdCksIGZ1bmN0aW9uIChlLCB0LCByKSB7XG4gICAgICBpZiAoci5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAodmFyIGEgPSBbXSwgbiA9IHQsIGkgPSB0Lm5hbWUsIHMgPSByLmxlbmd0aCAtIDE7IHMgPj0gMDsgcy0tKSB7XG4gICAgICAgICAgdmFyIG8gPSB7XG4gICAgICAgICAgICB2OiAhMVxuICAgICAgICAgIH07XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBjID0gcltzXShuLCB7XG4gICAgICAgICAgICAgIGtpbmQ6IFwiY2xhc3NcIixcbiAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgYWRkSW5pdGlhbGl6ZXI6IGNyZWF0ZUFkZEluaXRpYWxpemVyTWV0aG9kKGEsIG8pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgby52ID0gITA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZvaWQgMCAhPT0gYyAmJiAoYXNzZXJ0VmFsaWRSZXR1cm5WYWx1ZSgxMCwgYyksIG4gPSBjKTtcbiAgICAgICAgfVxuICAgICAgICBlLnB1c2gobiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgYS5sZW5ndGg7IGUrKykgYVtlXS5jYWxsKG4pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KGEsIGUsIHIpLCBhO1xuICB9O1xufVxudmFyIGFwcGx5RGVjczIyMDNJbXBsO1xuZnVuY3Rpb24gX2FwcGx5RGVjczIyMDMoZSwgdCwgcikge1xuICByZXR1cm4gKGFwcGx5RGVjczIyMDNJbXBsID0gYXBwbHlEZWNzMjIwM0ltcGwgfHwgYXBwbHlEZWNzMjIwM0ZhY3RvcnkoKSkoZSwgdCwgcik7XG59XG5mdW5jdGlvbiBhcHBseURlY3MyMjAzUkZhY3RvcnkoKSB7XG4gIGZ1bmN0aW9uIGNyZWF0ZUFkZEluaXRpYWxpemVyTWV0aG9kKGUsIHQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHIpIHtcbiAgICAgICFmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICBpZiAoZS52KSB0aHJvdyBuZXcgRXJyb3IoXCJhdHRlbXB0ZWQgdG8gY2FsbCBcIiArIHQgKyBcIiBhZnRlciBkZWNvcmF0aW9uIHdhcyBmaW5pc2hlZFwiKTtcbiAgICAgIH0odCwgXCJhZGRJbml0aWFsaXplclwiKSwgYXNzZXJ0Q2FsbGFibGUociwgXCJBbiBpbml0aWFsaXplclwiKSwgZS5wdXNoKHIpO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gbWVtYmVyRGVjKGUsIHQsIHIsIG4sIGEsIGksIHMsIG8pIHtcbiAgICB2YXIgYztcbiAgICBzd2l0Y2ggKGEpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgYyA9IFwiYWNjZXNzb3JcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGMgPSBcIm1ldGhvZFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgYyA9IFwiZ2V0dGVyXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBjID0gXCJzZXR0ZXJcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjID0gXCJmaWVsZFwiO1xuICAgIH1cbiAgICB2YXIgbCxcbiAgICAgIHUsXG4gICAgICBmID0ge1xuICAgICAgICBraW5kOiBjLFxuICAgICAgICBuYW1lOiBzID8gXCIjXCIgKyB0IDogdCxcbiAgICAgICAgc3RhdGljOiBpLFxuICAgICAgICBwcml2YXRlOiBzXG4gICAgICB9LFxuICAgICAgcCA9IHtcbiAgICAgICAgdjogITFcbiAgICAgIH07XG4gICAgMCAhPT0gYSAmJiAoZi5hZGRJbml0aWFsaXplciA9IGNyZWF0ZUFkZEluaXRpYWxpemVyTWV0aG9kKG4sIHApKSwgMCA9PT0gYSA/IHMgPyAobCA9IHIuZ2V0LCB1ID0gci5zZXQpIDogKGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpc1t0XTtcbiAgICB9LCB1ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRoaXNbdF0gPSBlO1xuICAgIH0pIDogMiA9PT0gYSA/IGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gci52YWx1ZTtcbiAgICB9IDogKDEgIT09IGEgJiYgMyAhPT0gYSB8fCAobCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByLmdldC5jYWxsKHRoaXMpO1xuICAgIH0pLCAxICE9PSBhICYmIDQgIT09IGEgfHwgKHUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgci5zZXQuY2FsbCh0aGlzLCBlKTtcbiAgICB9KSksIGYuYWNjZXNzID0gbCAmJiB1ID8ge1xuICAgICAgZ2V0OiBsLFxuICAgICAgc2V0OiB1XG4gICAgfSA6IGwgPyB7XG4gICAgICBnZXQ6IGxcbiAgICB9IDoge1xuICAgICAgc2V0OiB1XG4gICAgfTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGUobywgZik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHAudiA9ICEwO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBhc3NlcnRDYWxsYWJsZShlLCB0KSB7XG4gICAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZSkgdGhyb3cgbmV3IFR5cGVFcnJvcih0ICsgXCIgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICB9XG4gIGZ1bmN0aW9uIGFzc2VydFZhbGlkUmV0dXJuVmFsdWUoZSwgdCkge1xuICAgIHZhciByID0gdHlwZW9mIHQ7XG4gICAgaWYgKDEgPT09IGUpIHtcbiAgICAgIGlmIChcIm9iamVjdFwiICE9PSByIHx8IG51bGwgPT09IHQpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhY2Nlc3NvciBkZWNvcmF0b3JzIG11c3QgcmV0dXJuIGFuIG9iamVjdCB3aXRoIGdldCwgc2V0LCBvciBpbml0IHByb3BlcnRpZXMgb3Igdm9pZCAwXCIpO1xuICAgICAgdm9pZCAwICE9PSB0LmdldCAmJiBhc3NlcnRDYWxsYWJsZSh0LmdldCwgXCJhY2Nlc3Nvci5nZXRcIiksIHZvaWQgMCAhPT0gdC5zZXQgJiYgYXNzZXJ0Q2FsbGFibGUodC5zZXQsIFwiYWNjZXNzb3Iuc2V0XCIpLCB2b2lkIDAgIT09IHQuaW5pdCAmJiBhc3NlcnRDYWxsYWJsZSh0LmluaXQsIFwiYWNjZXNzb3IuaW5pdFwiKTtcbiAgICB9IGVsc2UgaWYgKFwiZnVuY3Rpb25cIiAhPT0gcikge1xuICAgICAgdmFyIG47XG4gICAgICB0aHJvdyBuID0gMCA9PT0gZSA/IFwiZmllbGRcIiA6IDEwID09PSBlID8gXCJjbGFzc1wiIDogXCJtZXRob2RcIiwgbmV3IFR5cGVFcnJvcihuICsgXCIgZGVjb3JhdG9ycyBtdXN0IHJldHVybiBhIGZ1bmN0aW9uIG9yIHZvaWQgMFwiKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gYXBwbHlNZW1iZXJEZWMoZSwgdCwgciwgbiwgYSwgaSwgcywgbykge1xuICAgIHZhciBjLFxuICAgICAgbCxcbiAgICAgIHUsXG4gICAgICBmLFxuICAgICAgcCxcbiAgICAgIGQsXG4gICAgICBoID0gclswXTtcbiAgICBpZiAocyA/IGMgPSAwID09PSBhIHx8IDEgPT09IGEgPyB7XG4gICAgICBnZXQ6IHJbM10sXG4gICAgICBzZXQ6IHJbNF1cbiAgICB9IDogMyA9PT0gYSA/IHtcbiAgICAgIGdldDogclszXVxuICAgIH0gOiA0ID09PSBhID8ge1xuICAgICAgc2V0OiByWzNdXG4gICAgfSA6IHtcbiAgICAgIHZhbHVlOiByWzNdXG4gICAgfSA6IDAgIT09IGEgJiYgKGMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsIG4pKSwgMSA9PT0gYSA/IHUgPSB7XG4gICAgICBnZXQ6IGMuZ2V0LFxuICAgICAgc2V0OiBjLnNldFxuICAgIH0gOiAyID09PSBhID8gdSA9IGMudmFsdWUgOiAzID09PSBhID8gdSA9IGMuZ2V0IDogNCA9PT0gYSAmJiAodSA9IGMuc2V0KSwgXCJmdW5jdGlvblwiID09IHR5cGVvZiBoKSB2b2lkIDAgIT09IChmID0gbWVtYmVyRGVjKGgsIG4sIGMsIG8sIGEsIGksIHMsIHUpKSAmJiAoYXNzZXJ0VmFsaWRSZXR1cm5WYWx1ZShhLCBmKSwgMCA9PT0gYSA/IGwgPSBmIDogMSA9PT0gYSA/IChsID0gZi5pbml0LCBwID0gZi5nZXQgfHwgdS5nZXQsIGQgPSBmLnNldCB8fCB1LnNldCwgdSA9IHtcbiAgICAgIGdldDogcCxcbiAgICAgIHNldDogZFxuICAgIH0pIDogdSA9IGYpO2Vsc2UgZm9yICh2YXIgdiA9IGgubGVuZ3RoIC0gMTsgdiA+PSAwOyB2LS0pIHtcbiAgICAgIHZhciBnO1xuICAgICAgaWYgKHZvaWQgMCAhPT0gKGYgPSBtZW1iZXJEZWMoaFt2XSwgbiwgYywgbywgYSwgaSwgcywgdSkpKSBhc3NlcnRWYWxpZFJldHVyblZhbHVlKGEsIGYpLCAwID09PSBhID8gZyA9IGYgOiAxID09PSBhID8gKGcgPSBmLmluaXQsIHAgPSBmLmdldCB8fCB1LmdldCwgZCA9IGYuc2V0IHx8IHUuc2V0LCB1ID0ge1xuICAgICAgICBnZXQ6IHAsXG4gICAgICAgIHNldDogZFxuICAgICAgfSkgOiB1ID0gZiwgdm9pZCAwICE9PSBnICYmICh2b2lkIDAgPT09IGwgPyBsID0gZyA6IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgbCA/IGwgPSBbbCwgZ10gOiBsLnB1c2goZykpO1xuICAgIH1cbiAgICBpZiAoMCA9PT0gYSB8fCAxID09PSBhKSB7XG4gICAgICBpZiAodm9pZCAwID09PSBsKSBsID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgICB9O2Vsc2UgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgbCkge1xuICAgICAgICB2YXIgeSA9IGw7XG4gICAgICAgIGwgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIGZvciAodmFyIHIgPSB0LCBuID0gMDsgbiA8IHkubGVuZ3RoOyBuKyspIHIgPSB5W25dLmNhbGwoZSwgcik7XG4gICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbSA9IGw7XG4gICAgICAgIGwgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIHJldHVybiBtLmNhbGwoZSwgdCk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBlLnB1c2gobCk7XG4gICAgfVxuICAgIDAgIT09IGEgJiYgKDEgPT09IGEgPyAoYy5nZXQgPSB1LmdldCwgYy5zZXQgPSB1LnNldCkgOiAyID09PSBhID8gYy52YWx1ZSA9IHUgOiAzID09PSBhID8gYy5nZXQgPSB1IDogNCA9PT0gYSAmJiAoYy5zZXQgPSB1KSwgcyA/IDEgPT09IGEgPyAoZS5wdXNoKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gdS5nZXQuY2FsbChlLCB0KTtcbiAgICB9KSwgZS5wdXNoKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gdS5zZXQuY2FsbChlLCB0KTtcbiAgICB9KSkgOiAyID09PSBhID8gZS5wdXNoKHUpIDogZS5wdXNoKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gdS5jYWxsKGUsIHQpO1xuICAgIH0pIDogT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIG4sIGMpKTtcbiAgfVxuICBmdW5jdGlvbiBhcHBseU1lbWJlckRlY3MoZSwgdCkge1xuICAgIGZvciAodmFyIHIsIG4sIGEgPSBbXSwgaSA9IG5ldyBNYXAoKSwgcyA9IG5ldyBNYXAoKSwgbyA9IDA7IG8gPCB0Lmxlbmd0aDsgbysrKSB7XG4gICAgICB2YXIgYyA9IHRbb107XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjKSkge1xuICAgICAgICB2YXIgbCxcbiAgICAgICAgICB1LFxuICAgICAgICAgIGYgPSBjWzFdLFxuICAgICAgICAgIHAgPSBjWzJdLFxuICAgICAgICAgIGQgPSBjLmxlbmd0aCA+IDMsXG4gICAgICAgICAgaCA9IGYgPj0gNTtcbiAgICAgICAgaWYgKGggPyAobCA9IGUsIDAgIT09IChmIC09IDUpICYmICh1ID0gbiA9IG4gfHwgW10pKSA6IChsID0gZS5wcm90b3R5cGUsIDAgIT09IGYgJiYgKHUgPSByID0gciB8fCBbXSkpLCAwICE9PSBmICYmICFkKSB7XG4gICAgICAgICAgdmFyIHYgPSBoID8gcyA6IGksXG4gICAgICAgICAgICBnID0gdi5nZXQocCkgfHwgMDtcbiAgICAgICAgICBpZiAoITAgPT09IGcgfHwgMyA9PT0gZyAmJiA0ICE9PSBmIHx8IDQgPT09IGcgJiYgMyAhPT0gZikgdGhyb3cgbmV3IEVycm9yKFwiQXR0ZW1wdGVkIHRvIGRlY29yYXRlIGEgcHVibGljIG1ldGhvZC9hY2Nlc3NvciB0aGF0IGhhcyB0aGUgc2FtZSBuYW1lIGFzIGEgcHJldmlvdXNseSBkZWNvcmF0ZWQgcHVibGljIG1ldGhvZC9hY2Nlc3Nvci4gVGhpcyBpcyBub3QgY3VycmVudGx5IHN1cHBvcnRlZCBieSB0aGUgZGVjb3JhdG9ycyBwbHVnaW4uIFByb3BlcnR5IG5hbWUgd2FzOiBcIiArIHApO1xuICAgICAgICAgICFnICYmIGYgPiAyID8gdi5zZXQocCwgZikgOiB2LnNldChwLCAhMCk7XG4gICAgICAgIH1cbiAgICAgICAgYXBwbHlNZW1iZXJEZWMoYSwgbCwgYywgcCwgZiwgaCwgZCwgdSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwdXNoSW5pdGlhbGl6ZXJzKGEsIHIpLCBwdXNoSW5pdGlhbGl6ZXJzKGEsIG4pLCBhO1xuICB9XG4gIGZ1bmN0aW9uIHB1c2hJbml0aWFsaXplcnMoZSwgdCkge1xuICAgIHQgJiYgZS5wdXNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBmb3IgKHZhciByID0gMDsgciA8IHQubGVuZ3RoOyByKyspIHRbcl0uY2FsbChlKTtcbiAgICAgIHJldHVybiBlO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoZSwgdCwgcikge1xuICAgIHJldHVybiB7XG4gICAgICBlOiBhcHBseU1lbWJlckRlY3MoZSwgdCksXG4gICAgICBnZXQgYygpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgaWYgKHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yICh2YXIgciA9IFtdLCBuID0gZSwgYSA9IGUubmFtZSwgaSA9IHQubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgdmFyIHMgPSB7XG4gICAgICAgICAgICAgICAgdjogITFcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IHRbaV0obiwge1xuICAgICAgICAgICAgICAgICAga2luZDogXCJjbGFzc1wiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogYSxcbiAgICAgICAgICAgICAgICAgIGFkZEluaXRpYWxpemVyOiBjcmVhdGVBZGRJbml0aWFsaXplck1ldGhvZChyLCBzKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHMudiA9ICEwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZvaWQgMCAhPT0gbyAmJiAoYXNzZXJ0VmFsaWRSZXR1cm5WYWx1ZSgxMCwgbyksIG4gPSBvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbbiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IHIubGVuZ3RoOyBlKyspIHJbZV0uY2FsbChuKTtcbiAgICAgICAgICAgIH1dO1xuICAgICAgICAgIH1cbiAgICAgICAgfShlLCByKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufVxuZnVuY3Rpb24gX2FwcGx5RGVjczIyMDNSKGUsIHQsIHIpIHtcbiAgcmV0dXJuIChfYXBwbHlEZWNzMjIwM1IgPSBhcHBseURlY3MyMjAzUkZhY3RvcnkoKSkoZSwgdCwgcik7XG59XG5mdW5jdGlvbiBhcHBseURlY3MyMzAxRmFjdG9yeSgpIHtcbiAgZnVuY3Rpb24gY3JlYXRlQWRkSW5pdGlhbGl6ZXJNZXRob2QoZSwgdCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocikge1xuICAgICAgIWZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIGlmIChlLnYpIHRocm93IG5ldyBFcnJvcihcImF0dGVtcHRlZCB0byBjYWxsIFwiICsgdCArIFwiIGFmdGVyIGRlY29yYXRpb24gd2FzIGZpbmlzaGVkXCIpO1xuICAgICAgfSh0LCBcImFkZEluaXRpYWxpemVyXCIpLCBhc3NlcnRDYWxsYWJsZShyLCBcIkFuIGluaXRpYWxpemVyXCIpLCBlLnB1c2gocik7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBhc3NlcnRJbnN0YW5jZUlmUHJpdmF0ZShlLCB0KSB7XG4gICAgaWYgKCFlKHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXR0ZW1wdGVkIHRvIGFjY2VzcyBwcml2YXRlIGVsZW1lbnQgb24gbm9uLWluc3RhbmNlXCIpO1xuICB9XG4gIGZ1bmN0aW9uIG1lbWJlckRlYyhlLCB0LCByLCBuLCBhLCBpLCBzLCBvLCBjKSB7XG4gICAgdmFyIHU7XG4gICAgc3dpdGNoIChhKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHUgPSBcImFjY2Vzc29yXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICB1ID0gXCJtZXRob2RcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHUgPSBcImdldHRlclwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgdSA9IFwic2V0dGVyXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdSA9IFwiZmllbGRcIjtcbiAgICB9XG4gICAgdmFyIGwsXG4gICAgICBmLFxuICAgICAgcCA9IHtcbiAgICAgICAga2luZDogdSxcbiAgICAgICAgbmFtZTogcyA/IFwiI1wiICsgdCA6IHQsXG4gICAgICAgIHN0YXRpYzogaSxcbiAgICAgICAgcHJpdmF0ZTogc1xuICAgICAgfSxcbiAgICAgIGQgPSB7XG4gICAgICAgIHY6ICExXG4gICAgICB9O1xuICAgIGlmICgwICE9PSBhICYmIChwLmFkZEluaXRpYWxpemVyID0gY3JlYXRlQWRkSW5pdGlhbGl6ZXJNZXRob2QobiwgZCkpLCBzIHx8IDAgIT09IGEgJiYgMiAhPT0gYSkge1xuICAgICAgaWYgKDIgPT09IGEpIGwgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gYXNzZXJ0SW5zdGFuY2VJZlByaXZhdGUoYywgZSksIHIudmFsdWU7XG4gICAgICB9O2Vsc2Uge1xuICAgICAgICB2YXIgaCA9IDAgPT09IGEgfHwgMSA9PT0gYTtcbiAgICAgICAgKGggfHwgMyA9PT0gYSkgJiYgKGwgPSBzID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gYXNzZXJ0SW5zdGFuY2VJZlByaXZhdGUoYywgZSksIHIuZ2V0LmNhbGwoZSk7XG4gICAgICAgIH0gOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiByLmdldC5jYWxsKGUpO1xuICAgICAgICB9KSwgKGggfHwgNCA9PT0gYSkgJiYgKGYgPSBzID8gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICBhc3NlcnRJbnN0YW5jZUlmUHJpdmF0ZShjLCBlKSwgci5zZXQuY2FsbChlLCB0KTtcbiAgICAgICAgfSA6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgci5zZXQuY2FsbChlLCB0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGwgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGVbdF07XG4gICAgfSwgMCA9PT0gYSAmJiAoZiA9IGZ1bmN0aW9uIChlLCByKSB7XG4gICAgICBlW3RdID0gcjtcbiAgICB9KTtcbiAgICB2YXIgdiA9IHMgPyBjLmJpbmQoKSA6IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gdCBpbiBlO1xuICAgIH07XG4gICAgcC5hY2Nlc3MgPSBsICYmIGYgPyB7XG4gICAgICBnZXQ6IGwsXG4gICAgICBzZXQ6IGYsXG4gICAgICBoYXM6IHZcbiAgICB9IDogbCA/IHtcbiAgICAgIGdldDogbCxcbiAgICAgIGhhczogdlxuICAgIH0gOiB7XG4gICAgICBzZXQ6IGYsXG4gICAgICBoYXM6IHZcbiAgICB9O1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZShvLCBwKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgZC52ID0gITA7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGFzc2VydENhbGxhYmxlKGUsIHQpIHtcbiAgICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBlKSB0aHJvdyBuZXcgVHlwZUVycm9yKHQgKyBcIiBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gIH1cbiAgZnVuY3Rpb24gYXNzZXJ0VmFsaWRSZXR1cm5WYWx1ZShlLCB0KSB7XG4gICAgdmFyIHIgPSB0eXBlb2YgdDtcbiAgICBpZiAoMSA9PT0gZSkge1xuICAgICAgaWYgKFwib2JqZWN0XCIgIT09IHIgfHwgbnVsbCA9PT0gdCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcImFjY2Vzc29yIGRlY29yYXRvcnMgbXVzdCByZXR1cm4gYW4gb2JqZWN0IHdpdGggZ2V0LCBzZXQsIG9yIGluaXQgcHJvcGVydGllcyBvciB2b2lkIDBcIik7XG4gICAgICB2b2lkIDAgIT09IHQuZ2V0ICYmIGFzc2VydENhbGxhYmxlKHQuZ2V0LCBcImFjY2Vzc29yLmdldFwiKSwgdm9pZCAwICE9PSB0LnNldCAmJiBhc3NlcnRDYWxsYWJsZSh0LnNldCwgXCJhY2Nlc3Nvci5zZXRcIiksIHZvaWQgMCAhPT0gdC5pbml0ICYmIGFzc2VydENhbGxhYmxlKHQuaW5pdCwgXCJhY2Nlc3Nvci5pbml0XCIpO1xuICAgIH0gZWxzZSBpZiAoXCJmdW5jdGlvblwiICE9PSByKSB7XG4gICAgICB2YXIgbjtcbiAgICAgIHRocm93IG4gPSAwID09PSBlID8gXCJmaWVsZFwiIDogMTAgPT09IGUgPyBcImNsYXNzXCIgOiBcIm1ldGhvZFwiLCBuZXcgVHlwZUVycm9yKG4gKyBcIiBkZWNvcmF0b3JzIG11c3QgcmV0dXJuIGEgZnVuY3Rpb24gb3Igdm9pZCAwXCIpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBjdXJyeVRoaXMyKGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgIGUodGhpcywgdCk7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBhcHBseU1lbWJlckRlYyhlLCB0LCByLCBuLCBhLCBpLCBzLCBvLCBjKSB7XG4gICAgdmFyIHUsXG4gICAgICBsLFxuICAgICAgZixcbiAgICAgIHAsXG4gICAgICBkLFxuICAgICAgaCxcbiAgICAgIHYsXG4gICAgICBnID0gclswXTtcbiAgICBpZiAocyA/IHUgPSAwID09PSBhIHx8IDEgPT09IGEgPyB7XG4gICAgICBnZXQ6IChwID0gclszXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcCh0aGlzKTtcbiAgICAgIH0pLFxuICAgICAgc2V0OiBjdXJyeVRoaXMyKHJbNF0pXG4gICAgfSA6IDMgPT09IGEgPyB7XG4gICAgICBnZXQ6IHJbM11cbiAgICB9IDogNCA9PT0gYSA/IHtcbiAgICAgIHNldDogclszXVxuICAgIH0gOiB7XG4gICAgICB2YWx1ZTogclszXVxuICAgIH0gOiAwICE9PSBhICYmICh1ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCBuKSksIDEgPT09IGEgPyBmID0ge1xuICAgICAgZ2V0OiB1LmdldCxcbiAgICAgIHNldDogdS5zZXRcbiAgICB9IDogMiA9PT0gYSA/IGYgPSB1LnZhbHVlIDogMyA9PT0gYSA/IGYgPSB1LmdldCA6IDQgPT09IGEgJiYgKGYgPSB1LnNldCksIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZykgdm9pZCAwICE9PSAoZCA9IG1lbWJlckRlYyhnLCBuLCB1LCBvLCBhLCBpLCBzLCBmLCBjKSkgJiYgKGFzc2VydFZhbGlkUmV0dXJuVmFsdWUoYSwgZCksIDAgPT09IGEgPyBsID0gZCA6IDEgPT09IGEgPyAobCA9IGQuaW5pdCwgaCA9IGQuZ2V0IHx8IGYuZ2V0LCB2ID0gZC5zZXQgfHwgZi5zZXQsIGYgPSB7XG4gICAgICBnZXQ6IGgsXG4gICAgICBzZXQ6IHZcbiAgICB9KSA6IGYgPSBkKTtlbHNlIGZvciAodmFyIHkgPSBnLmxlbmd0aCAtIDE7IHkgPj0gMDsgeS0tKSB7XG4gICAgICB2YXIgbTtcbiAgICAgIGlmICh2b2lkIDAgIT09IChkID0gbWVtYmVyRGVjKGdbeV0sIG4sIHUsIG8sIGEsIGksIHMsIGYsIGMpKSkgYXNzZXJ0VmFsaWRSZXR1cm5WYWx1ZShhLCBkKSwgMCA9PT0gYSA/IG0gPSBkIDogMSA9PT0gYSA/IChtID0gZC5pbml0LCBoID0gZC5nZXQgfHwgZi5nZXQsIHYgPSBkLnNldCB8fCBmLnNldCwgZiA9IHtcbiAgICAgICAgZ2V0OiBoLFxuICAgICAgICBzZXQ6IHZcbiAgICAgIH0pIDogZiA9IGQsIHZvaWQgMCAhPT0gbSAmJiAodm9pZCAwID09PSBsID8gbCA9IG0gOiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGwgPyBsID0gW2wsIG1dIDogbC5wdXNoKG0pKTtcbiAgICB9XG4gICAgaWYgKDAgPT09IGEgfHwgMSA9PT0gYSkge1xuICAgICAgaWYgKHZvaWQgMCA9PT0gbCkgbCA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHJldHVybiB0O1xuICAgICAgfTtlbHNlIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGwpIHtcbiAgICAgICAgdmFyIGIgPSBsO1xuICAgICAgICBsID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICBmb3IgKHZhciByID0gdCwgbiA9IDA7IG4gPCBiLmxlbmd0aDsgbisrKSByID0gYltuXS5jYWxsKGUsIHIpO1xuICAgICAgICAgIHJldHVybiByO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIEkgPSBsO1xuICAgICAgICBsID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICByZXR1cm4gSS5jYWxsKGUsIHQpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgZS5wdXNoKGwpO1xuICAgIH1cbiAgICAwICE9PSBhICYmICgxID09PSBhID8gKHUuZ2V0ID0gZi5nZXQsIHUuc2V0ID0gZi5zZXQpIDogMiA9PT0gYSA/IHUudmFsdWUgPSBmIDogMyA9PT0gYSA/IHUuZ2V0ID0gZiA6IDQgPT09IGEgJiYgKHUuc2V0ID0gZiksIHMgPyAxID09PSBhID8gKGUucHVzaChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIGYuZ2V0LmNhbGwoZSwgdCk7XG4gICAgfSksIGUucHVzaChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIGYuc2V0LmNhbGwoZSwgdCk7XG4gICAgfSkpIDogMiA9PT0gYSA/IGUucHVzaChmKSA6IGUucHVzaChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIGYuY2FsbChlLCB0KTtcbiAgICB9KSA6IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBuLCB1KSk7XG4gIH1cbiAgZnVuY3Rpb24gYXBwbHlNZW1iZXJEZWNzKGUsIHQsIHIpIHtcbiAgICBmb3IgKHZhciBuLCBhLCBpLCBzID0gW10sIG8gPSBuZXcgTWFwKCksIGMgPSBuZXcgTWFwKCksIHUgPSAwOyB1IDwgdC5sZW5ndGg7IHUrKykge1xuICAgICAgdmFyIGwgPSB0W3VdO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobCkpIHtcbiAgICAgICAgdmFyIGYsXG4gICAgICAgICAgcCxcbiAgICAgICAgICBkID0gbFsxXSxcbiAgICAgICAgICBoID0gbFsyXSxcbiAgICAgICAgICB2ID0gbC5sZW5ndGggPiAzLFxuICAgICAgICAgIGcgPSBkID49IDUsXG4gICAgICAgICAgeSA9IHI7XG4gICAgICAgIGlmIChnID8gKGYgPSBlLCAwICE9PSAoZCAtPSA1KSAmJiAocCA9IGEgPSBhIHx8IFtdKSwgdiAmJiAhaSAmJiAoaSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIF9jaGVja0luUkhTKHQpID09PSBlO1xuICAgICAgICB9KSwgeSA9IGkpIDogKGYgPSBlLnByb3RvdHlwZSwgMCAhPT0gZCAmJiAocCA9IG4gPSBuIHx8IFtdKSksIDAgIT09IGQgJiYgIXYpIHtcbiAgICAgICAgICB2YXIgbSA9IGcgPyBjIDogbyxcbiAgICAgICAgICAgIGIgPSBtLmdldChoKSB8fCAwO1xuICAgICAgICAgIGlmICghMCA9PT0gYiB8fCAzID09PSBiICYmIDQgIT09IGQgfHwgNCA9PT0gYiAmJiAzICE9PSBkKSB0aHJvdyBuZXcgRXJyb3IoXCJBdHRlbXB0ZWQgdG8gZGVjb3JhdGUgYSBwdWJsaWMgbWV0aG9kL2FjY2Vzc29yIHRoYXQgaGFzIHRoZSBzYW1lIG5hbWUgYXMgYSBwcmV2aW91c2x5IGRlY29yYXRlZCBwdWJsaWMgbWV0aG9kL2FjY2Vzc29yLiBUaGlzIGlzIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkIGJ5IHRoZSBkZWNvcmF0b3JzIHBsdWdpbi4gUHJvcGVydHkgbmFtZSB3YXM6IFwiICsgaCk7XG4gICAgICAgICAgIWIgJiYgZCA+IDIgPyBtLnNldChoLCBkKSA6IG0uc2V0KGgsICEwKTtcbiAgICAgICAgfVxuICAgICAgICBhcHBseU1lbWJlckRlYyhzLCBmLCBsLCBoLCBkLCBnLCB2LCBwLCB5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHB1c2hJbml0aWFsaXplcnMocywgbiksIHB1c2hJbml0aWFsaXplcnMocywgYSksIHM7XG4gIH1cbiAgZnVuY3Rpb24gcHVzaEluaXRpYWxpemVycyhlLCB0KSB7XG4gICAgdCAmJiBlLnB1c2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgdC5sZW5ndGg7IHIrKykgdFtyXS5jYWxsKGUpO1xuICAgICAgcmV0dXJuIGU7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIChlLCB0LCByLCBuKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGU6IGFwcGx5TWVtYmVyRGVjcyhlLCB0LCBuKSxcbiAgICAgIGdldCBjKCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICBpZiAodC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciByID0gW10sIG4gPSBlLCBhID0gZS5uYW1lLCBpID0gdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICB2YXIgcyA9IHtcbiAgICAgICAgICAgICAgICB2OiAhMVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBvID0gdFtpXShuLCB7XG4gICAgICAgICAgICAgICAgICBraW5kOiBcImNsYXNzXCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBhLFxuICAgICAgICAgICAgICAgICAgYWRkSW5pdGlhbGl6ZXI6IGNyZWF0ZUFkZEluaXRpYWxpemVyTWV0aG9kKHIsIHMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgcy52ID0gITA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdm9pZCAwICE9PSBvICYmIChhc3NlcnRWYWxpZFJldHVyblZhbHVlKDEwLCBvKSwgbiA9IG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtuLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgci5sZW5ndGg7IGUrKykgcltlXS5jYWxsKG4pO1xuICAgICAgICAgICAgfV07XG4gICAgICAgICAgfVxuICAgICAgICB9KGUsIHIpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG59XG5mdW5jdGlvbiBfYXBwbHlEZWNzMjMwMShlLCB0LCByLCBuKSB7XG4gIHJldHVybiAoX2FwcGx5RGVjczIzMDEgPSBhcHBseURlY3MyMzAxRmFjdG9yeSgpKShlLCB0LCByLCBuKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUFkZEluaXRpYWxpemVyTWV0aG9kKGUsIHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChyKSB7XG4gICAgYXNzZXJ0Tm90RmluaXNoZWQodCwgXCJhZGRJbml0aWFsaXplclwiKSwgYXNzZXJ0Q2FsbGFibGUociwgXCJBbiBpbml0aWFsaXplclwiKSwgZS5wdXNoKHIpO1xuICB9O1xufVxuZnVuY3Rpb24gYXNzZXJ0SW5zdGFuY2VJZlByaXZhdGUoZSwgdCkge1xuICBpZiAoIWUodCkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJBdHRlbXB0ZWQgdG8gYWNjZXNzIHByaXZhdGUgZWxlbWVudCBvbiBub24taW5zdGFuY2VcIik7XG59XG5mdW5jdGlvbiBtZW1iZXJEZWMoZSwgdCwgciwgbiwgYSwgaSwgcywgbywgYywgbCkge1xuICB2YXIgdTtcbiAgc3dpdGNoIChpKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdSA9IFwiYWNjZXNzb3JcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHUgPSBcIm1ldGhvZFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgdSA9IFwiZ2V0dGVyXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQ6XG4gICAgICB1ID0gXCJzZXR0ZXJcIjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB1ID0gXCJmaWVsZFwiO1xuICB9XG4gIHZhciBmLFxuICAgIGQsXG4gICAgcCA9IHtcbiAgICAgIGtpbmQ6IHUsXG4gICAgICBuYW1lOiBvID8gXCIjXCIgKyByIDogcixcbiAgICAgIHN0YXRpYzogcyxcbiAgICAgIHByaXZhdGU6IG9cbiAgICB9LFxuICAgIGggPSB7XG4gICAgICB2OiAhMVxuICAgIH07XG4gIGlmICgwICE9PSBpICYmIChwLmFkZEluaXRpYWxpemVyID0gY3JlYXRlQWRkSW5pdGlhbGl6ZXJNZXRob2QoYSwgaCkpLCBvIHx8IDAgIT09IGkgJiYgMiAhPT0gaSkge1xuICAgIGlmICgyID09PSBpKSBmID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBhc3NlcnRJbnN0YW5jZUlmUHJpdmF0ZShsLCBlKSwgbi52YWx1ZTtcbiAgICB9O2Vsc2Uge1xuICAgICAgdmFyIHYgPSAwID09PSBpIHx8IDEgPT09IGk7XG4gICAgICAodiB8fCAzID09PSBpKSAmJiAoZiA9IG8gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gYXNzZXJ0SW5zdGFuY2VJZlByaXZhdGUobCwgZSksIG4uZ2V0LmNhbGwoZSk7XG4gICAgICB9IDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIG4uZ2V0LmNhbGwoZSk7XG4gICAgICB9KSwgKHYgfHwgNCA9PT0gaSkgJiYgKGQgPSBvID8gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgYXNzZXJ0SW5zdGFuY2VJZlByaXZhdGUobCwgZSksIG4uc2V0LmNhbGwoZSwgdCk7XG4gICAgICB9IDogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgbi5zZXQuY2FsbChlLCB0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIGYgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiBlW3JdO1xuICB9LCAwID09PSBpICYmIChkID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICBlW3JdID0gdDtcbiAgfSk7XG4gIHZhciB5ID0gbyA/IGwuYmluZCgpIDogZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gciBpbiBlO1xuICB9O1xuICBwLmFjY2VzcyA9IGYgJiYgZCA/IHtcbiAgICBnZXQ6IGYsXG4gICAgc2V0OiBkLFxuICAgIGhhczogeVxuICB9IDogZiA/IHtcbiAgICBnZXQ6IGYsXG4gICAgaGFzOiB5XG4gIH0gOiB7XG4gICAgc2V0OiBkLFxuICAgIGhhczogeVxuICB9O1xuICB0cnkge1xuICAgIHJldHVybiBlLmNhbGwodCwgYywgcCk7XG4gIH0gZmluYWxseSB7XG4gICAgaC52ID0gITA7XG4gIH1cbn1cbmZ1bmN0aW9uIGFzc2VydE5vdEZpbmlzaGVkKGUsIHQpIHtcbiAgaWYgKGUudikgdGhyb3cgbmV3IEVycm9yKFwiYXR0ZW1wdGVkIHRvIGNhbGwgXCIgKyB0ICsgXCIgYWZ0ZXIgZGVjb3JhdGlvbiB3YXMgZmluaXNoZWRcIik7XG59XG5mdW5jdGlvbiBhc3NlcnRDYWxsYWJsZShlLCB0KSB7XG4gIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGUpIHRocm93IG5ldyBUeXBlRXJyb3IodCArIFwiIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbn1cbmZ1bmN0aW9uIGFzc2VydFZhbGlkUmV0dXJuVmFsdWUoZSwgdCkge1xuICB2YXIgciA9IHR5cGVvZiB0O1xuICBpZiAoMSA9PT0gZSkge1xuICAgIGlmIChcIm9iamVjdFwiICE9PSByIHx8IG51bGwgPT09IHQpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhY2Nlc3NvciBkZWNvcmF0b3JzIG11c3QgcmV0dXJuIGFuIG9iamVjdCB3aXRoIGdldCwgc2V0LCBvciBpbml0IHByb3BlcnRpZXMgb3Igdm9pZCAwXCIpO1xuICAgIHZvaWQgMCAhPT0gdC5nZXQgJiYgYXNzZXJ0Q2FsbGFibGUodC5nZXQsIFwiYWNjZXNzb3IuZ2V0XCIpLCB2b2lkIDAgIT09IHQuc2V0ICYmIGFzc2VydENhbGxhYmxlKHQuc2V0LCBcImFjY2Vzc29yLnNldFwiKSwgdm9pZCAwICE9PSB0LmluaXQgJiYgYXNzZXJ0Q2FsbGFibGUodC5pbml0LCBcImFjY2Vzc29yLmluaXRcIik7XG4gIH0gZWxzZSBpZiAoXCJmdW5jdGlvblwiICE9PSByKSB7XG4gICAgdmFyIG47XG4gICAgdGhyb3cgbiA9IDAgPT09IGUgPyBcImZpZWxkXCIgOiA1ID09PSBlID8gXCJjbGFzc1wiIDogXCJtZXRob2RcIiwgbmV3IFR5cGVFcnJvcihuICsgXCIgZGVjb3JhdG9ycyBtdXN0IHJldHVybiBhIGZ1bmN0aW9uIG9yIHZvaWQgMFwiKTtcbiAgfVxufVxuZnVuY3Rpb24gY3VycnlUaGlzMShlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGUodGhpcyk7XG4gIH07XG59XG5mdW5jdGlvbiBjdXJyeVRoaXMyKGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgZSh0aGlzLCB0KTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGFwcGx5TWVtYmVyRGVjKGUsIHQsIHIsIG4sIGEsIGksIHMsIG8sIGMsIGwpIHtcbiAgdmFyIHUsXG4gICAgZixcbiAgICBkLFxuICAgIHAsXG4gICAgaCxcbiAgICB2LFxuICAgIHkgPSByWzBdO1xuICBuIHx8IEFycmF5LmlzQXJyYXkoeSkgfHwgKHkgPSBbeV0pLCBvID8gdSA9IDAgPT09IGkgfHwgMSA9PT0gaSA/IHtcbiAgICBnZXQ6IGN1cnJ5VGhpczEoclszXSksXG4gICAgc2V0OiBjdXJyeVRoaXMyKHJbNF0pXG4gIH0gOiAzID09PSBpID8ge1xuICAgIGdldDogclszXVxuICB9IDogNCA9PT0gaSA/IHtcbiAgICBzZXQ6IHJbM11cbiAgfSA6IHtcbiAgICB2YWx1ZTogclszXVxuICB9IDogMCAhPT0gaSAmJiAodSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgYSkpLCAxID09PSBpID8gZCA9IHtcbiAgICBnZXQ6IHUuZ2V0LFxuICAgIHNldDogdS5zZXRcbiAgfSA6IDIgPT09IGkgPyBkID0gdS52YWx1ZSA6IDMgPT09IGkgPyBkID0gdS5nZXQgOiA0ID09PSBpICYmIChkID0gdS5zZXQpO1xuICBmb3IgKHZhciBnID0gbiA/IDIgOiAxLCBtID0geS5sZW5ndGggLSAxOyBtID49IDA7IG0gLT0gZykge1xuICAgIHZhciBiO1xuICAgIGlmICh2b2lkIDAgIT09IChwID0gbWVtYmVyRGVjKHlbbV0sIG4gPyB5W20gLSAxXSA6IHZvaWQgMCwgYSwgdSwgYywgaSwgcywgbywgZCwgbCkpKSBhc3NlcnRWYWxpZFJldHVyblZhbHVlKGksIHApLCAwID09PSBpID8gYiA9IHAgOiAxID09PSBpID8gKGIgPSBwLmluaXQsIGggPSBwLmdldCB8fCBkLmdldCwgdiA9IHAuc2V0IHx8IGQuc2V0LCBkID0ge1xuICAgICAgZ2V0OiBoLFxuICAgICAgc2V0OiB2XG4gICAgfSkgOiBkID0gcCwgdm9pZCAwICE9PSBiICYmICh2b2lkIDAgPT09IGYgPyBmID0gYiA6IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZiA/IGYgPSBbZiwgYl0gOiBmLnB1c2goYikpO1xuICB9XG4gIGlmICgwID09PSBpIHx8IDEgPT09IGkpIHtcbiAgICBpZiAodm9pZCAwID09PSBmKSBmID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiB0O1xuICAgIH07ZWxzZSBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBmKSB7XG4gICAgICB2YXIgSSA9IGY7XG4gICAgICBmID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgZm9yICh2YXIgciA9IHQsIG4gPSBJLmxlbmd0aCAtIDE7IG4gPj0gMDsgbi0tKSByID0gSVtuXS5jYWxsKGUsIHIpO1xuICAgICAgICByZXR1cm4gcjtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB3ID0gZjtcbiAgICAgIGYgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICByZXR1cm4gdy5jYWxsKGUsIHQpO1xuICAgICAgfTtcbiAgICB9XG4gICAgZS5wdXNoKGYpO1xuICB9XG4gIDAgIT09IGkgJiYgKDEgPT09IGkgPyAodS5nZXQgPSBkLmdldCwgdS5zZXQgPSBkLnNldCkgOiAyID09PSBpID8gdS52YWx1ZSA9IGQgOiAzID09PSBpID8gdS5nZXQgPSBkIDogNCA9PT0gaSAmJiAodS5zZXQgPSBkKSwgbyA/IDEgPT09IGkgPyAoZS5wdXNoKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgcmV0dXJuIGQuZ2V0LmNhbGwoZSwgdCk7XG4gIH0pLCBlLnB1c2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICByZXR1cm4gZC5zZXQuY2FsbChlLCB0KTtcbiAgfSkpIDogMiA9PT0gaSA/IGUucHVzaChkKSA6IGUucHVzaChmdW5jdGlvbiAoZSwgdCkge1xuICAgIHJldHVybiBkLmNhbGwoZSwgdCk7XG4gIH0pIDogT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIGEsIHUpKTtcbn1cbmZ1bmN0aW9uIGFwcGx5TWVtYmVyRGVjcyhlLCB0LCByKSB7XG4gIGZvciAodmFyIG4sIGEsIGksIHMgPSBbXSwgbyA9IG5ldyBNYXAoKSwgYyA9IG5ldyBNYXAoKSwgbCA9IDA7IGwgPCB0Lmxlbmd0aDsgbCsrKSB7XG4gICAgdmFyIHUgPSB0W2xdO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHUpKSB7XG4gICAgICB2YXIgZixcbiAgICAgICAgZCxcbiAgICAgICAgcCA9IHVbMV0sXG4gICAgICAgIGggPSB1WzJdLFxuICAgICAgICB2ID0gdS5sZW5ndGggPiAzLFxuICAgICAgICB5ID0gMTYgJiBwLFxuICAgICAgICBnID0gISEoOCAmIHApLFxuICAgICAgICBtID0gcjtcbiAgICAgIGlmIChwICY9IDcsIGcgPyAoZiA9IGUsIDAgIT09IHAgJiYgKGQgPSBhID0gYSB8fCBbXSksIHYgJiYgIWkgJiYgKGkgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gX2NoZWNrSW5SSFModCkgPT09IGU7XG4gICAgICB9KSwgbSA9IGkpIDogKGYgPSBlLnByb3RvdHlwZSwgMCAhPT0gcCAmJiAoZCA9IG4gPSBuIHx8IFtdKSksIDAgIT09IHAgJiYgIXYpIHtcbiAgICAgICAgdmFyIGIgPSBnID8gYyA6IG8sXG4gICAgICAgICAgSSA9IGIuZ2V0KGgpIHx8IDA7XG4gICAgICAgIGlmICghMCA9PT0gSSB8fCAzID09PSBJICYmIDQgIT09IHAgfHwgNCA9PT0gSSAmJiAzICE9PSBwKSB0aHJvdyBuZXcgRXJyb3IoXCJBdHRlbXB0ZWQgdG8gZGVjb3JhdGUgYSBwdWJsaWMgbWV0aG9kL2FjY2Vzc29yIHRoYXQgaGFzIHRoZSBzYW1lIG5hbWUgYXMgYSBwcmV2aW91c2x5IGRlY29yYXRlZCBwdWJsaWMgbWV0aG9kL2FjY2Vzc29yLiBUaGlzIGlzIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkIGJ5IHRoZSBkZWNvcmF0b3JzIHBsdWdpbi4gUHJvcGVydHkgbmFtZSB3YXM6IFwiICsgaCk7XG4gICAgICAgIGIuc2V0KGgsICEoIUkgJiYgcCA+IDIpIHx8IHApO1xuICAgICAgfVxuICAgICAgYXBwbHlNZW1iZXJEZWMocywgZiwgdSwgeSwgaCwgcCwgZywgdiwgZCwgbSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBwdXNoSW5pdGlhbGl6ZXJzKHMsIG4pLCBwdXNoSW5pdGlhbGl6ZXJzKHMsIGEpLCBzO1xufVxuZnVuY3Rpb24gcHVzaEluaXRpYWxpemVycyhlLCB0KSB7XG4gIHQgJiYgZS5wdXNoKGZ1bmN0aW9uIChlKSB7XG4gICAgZm9yICh2YXIgciA9IDA7IHIgPCB0Lmxlbmd0aDsgcisrKSB0W3JdLmNhbGwoZSk7XG4gICAgcmV0dXJuIGU7XG4gIH0pO1xufVxuZnVuY3Rpb24gYXBwbHlDbGFzc0RlY3MoZSwgdCwgcikge1xuICBpZiAodC5sZW5ndGgpIHtcbiAgICBmb3IgKHZhciBuID0gW10sIGEgPSBlLCBpID0gZS5uYW1lLCBzID0gciA/IDIgOiAxLCBvID0gdC5sZW5ndGggLSAxOyBvID49IDA7IG8gLT0gcykge1xuICAgICAgdmFyIGMgPSB7XG4gICAgICAgIHY6ICExXG4gICAgICB9O1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIGwgPSB0W29dLmNhbGwociA/IHRbbyAtIDFdIDogdm9pZCAwLCBhLCB7XG4gICAgICAgICAga2luZDogXCJjbGFzc1wiLFxuICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgYWRkSW5pdGlhbGl6ZXI6IGNyZWF0ZUFkZEluaXRpYWxpemVyTWV0aG9kKG4sIGMpXG4gICAgICAgIH0pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgYy52ID0gITA7XG4gICAgICB9XG4gICAgICB2b2lkIDAgIT09IGwgJiYgKGFzc2VydFZhbGlkUmV0dXJuVmFsdWUoNSwgbCksIGEgPSBsKTtcbiAgICB9XG4gICAgcmV0dXJuIFthLCBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBlID0gMDsgZSA8IG4ubGVuZ3RoOyBlKyspIG5bZV0uY2FsbChhKTtcbiAgICB9XTtcbiAgfVxufVxuZnVuY3Rpb24gX2FwcGx5RGVjczIzMDUoZSwgdCwgciwgbiwgYSkge1xuICByZXR1cm4ge1xuICAgIGU6IGFwcGx5TWVtYmVyRGVjcyhlLCB0LCBhKSxcbiAgICBnZXQgYygpIHtcbiAgICAgIHJldHVybiBhcHBseUNsYXNzRGVjcyhlLCByLCBuKTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBfYXN5bmNHZW5lcmF0b3JEZWxlZ2F0ZSh0KSB7XG4gIHZhciBlID0ge30sXG4gICAgbiA9ICExO1xuICBmdW5jdGlvbiBwdW1wKGUsIHIpIHtcbiAgICByZXR1cm4gbiA9ICEwLCByID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKG4pIHtcbiAgICAgIG4odFtlXShyKSk7XG4gICAgfSksIHtcbiAgICAgIGRvbmU6ICExLFxuICAgICAgdmFsdWU6IG5ldyBfT3ZlcmxvYWRZaWVsZChyLCAxKVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIGVbXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sIGUubmV4dCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIG4gPyAobiA9ICExLCB0KSA6IHB1bXAoXCJuZXh0XCIsIHQpO1xuICB9LCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQudGhyb3cgJiYgKGUudGhyb3cgPSBmdW5jdGlvbiAodCkge1xuICAgIGlmIChuKSB0aHJvdyBuID0gITEsIHQ7XG4gICAgcmV0dXJuIHB1bXAoXCJ0aHJvd1wiLCB0KTtcbiAgfSksIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdC5yZXR1cm4gJiYgKGUucmV0dXJuID0gZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gbiA/IChuID0gITEsIHQpIDogcHVtcChcInJldHVyblwiLCB0KTtcbiAgfSksIGU7XG59XG5mdW5jdGlvbiBfYXN5bmNJdGVyYXRvcihyKSB7XG4gIHZhciBuLFxuICAgIHQsXG4gICAgbyxcbiAgICBlID0gMjtcbiAgZm9yIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgKHQgPSBTeW1ib2wuYXN5bmNJdGVyYXRvciwgbyA9IFN5bWJvbC5pdGVyYXRvcik7IGUtLTspIHtcbiAgICBpZiAodCAmJiBudWxsICE9IChuID0gclt0XSkpIHJldHVybiBuLmNhbGwocik7XG4gICAgaWYgKG8gJiYgbnVsbCAhPSAobiA9IHJbb10pKSByZXR1cm4gbmV3IEFzeW5jRnJvbVN5bmNJdGVyYXRvcihuLmNhbGwocikpO1xuICAgIHQgPSBcIkBAYXN5bmNJdGVyYXRvclwiLCBvID0gXCJAQGl0ZXJhdG9yXCI7XG4gIH1cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBpcyBub3QgYXN5bmMgaXRlcmFibGVcIik7XG59XG5mdW5jdGlvbiBBc3luY0Zyb21TeW5jSXRlcmF0b3Iocikge1xuICBmdW5jdGlvbiBBc3luY0Zyb21TeW5jSXRlcmF0b3JDb250aW51YXRpb24ocikge1xuICAgIGlmIChPYmplY3QocikgIT09IHIpIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKHIgKyBcIiBpcyBub3QgYW4gb2JqZWN0LlwiKSk7XG4gICAgdmFyIG4gPSByLmRvbmU7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyLnZhbHVlKS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogcixcbiAgICAgICAgZG9uZTogblxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gQXN5bmNGcm9tU3luY0l0ZXJhdG9yID0gZnVuY3Rpb24gKHIpIHtcbiAgICB0aGlzLnMgPSByLCB0aGlzLm4gPSByLm5leHQ7XG4gIH0sIEFzeW5jRnJvbVN5bmNJdGVyYXRvci5wcm90b3R5cGUgPSB7XG4gICAgczogbnVsbCxcbiAgICBuOiBudWxsLFxuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBBc3luY0Zyb21TeW5jSXRlcmF0b3JDb250aW51YXRpb24odGhpcy5uLmFwcGx5KHRoaXMucywgYXJndW1lbnRzKSk7XG4gICAgfSxcbiAgICByZXR1cm46IGZ1bmN0aW9uIChyKSB7XG4gICAgICB2YXIgbiA9IHRoaXMucy5yZXR1cm47XG4gICAgICByZXR1cm4gdm9pZCAwID09PSBuID8gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgdmFsdWU6IHIsXG4gICAgICAgIGRvbmU6ICEwXG4gICAgICB9KSA6IEFzeW5jRnJvbVN5bmNJdGVyYXRvckNvbnRpbnVhdGlvbihuLmFwcGx5KHRoaXMucywgYXJndW1lbnRzKSk7XG4gICAgfSxcbiAgICB0aHJvdzogZnVuY3Rpb24gKHIpIHtcbiAgICAgIHZhciBuID0gdGhpcy5zLnJldHVybjtcbiAgICAgIHJldHVybiB2b2lkIDAgPT09IG4gPyBQcm9taXNlLnJlamVjdChyKSA6IEFzeW5jRnJvbVN5bmNJdGVyYXRvckNvbnRpbnVhdGlvbihuLmFwcGx5KHRoaXMucywgYXJndW1lbnRzKSk7XG4gICAgfVxuICB9LCBuZXcgQXN5bmNGcm9tU3luY0l0ZXJhdG9yKHIpO1xufVxuZnVuY3Rpb24gX2F3YWl0QXN5bmNHZW5lcmF0b3IoZSkge1xuICByZXR1cm4gbmV3IF9PdmVybG9hZFlpZWxkKGUsIDApO1xufVxuZnVuY3Rpb24gX2NoZWNrSW5SSFMoZSkge1xuICBpZiAoT2JqZWN0KGUpICE9PSBlKSB0aHJvdyBUeXBlRXJyb3IoXCJyaWdodC1oYW5kIHNpZGUgb2YgJ2luJyBzaG91bGQgYmUgYW4gb2JqZWN0LCBnb3QgXCIgKyAobnVsbCAhPT0gZSA/IHR5cGVvZiBlIDogXCJudWxsXCIpKTtcbiAgcmV0dXJuIGU7XG59XG5mdW5jdGlvbiBfZGVmaW5lQWNjZXNzb3IoZSwgciwgbiwgdCkge1xuICB2YXIgYyA9IHtcbiAgICBjb25maWd1cmFibGU6ICEwLFxuICAgIGVudW1lcmFibGU6ICEwXG4gIH07XG4gIHJldHVybiBjW2VdID0gdCwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsIG4sIGMpO1xufVxuZnVuY3Rpb24gZGlzcG9zZV9TdXBwcmVzc2VkRXJyb3IociwgZSkge1xuICByZXR1cm4gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3VwcHJlc3NlZEVycm9yID8gZGlzcG9zZV9TdXBwcmVzc2VkRXJyb3IgPSBTdXBwcmVzc2VkRXJyb3IgOiAoZGlzcG9zZV9TdXBwcmVzc2VkRXJyb3IgPSBmdW5jdGlvbiAociwgZSkge1xuICAgIHRoaXMuc3VwcHJlc3NlZCA9IHIsIHRoaXMuZXJyb3IgPSBlLCB0aGlzLnN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG4gIH0sIGRpc3Bvc2VfU3VwcHJlc3NlZEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBkaXNwb3NlX1N1cHByZXNzZWRFcnJvcixcbiAgICAgIHdyaXRhYmxlOiAhMCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICB9XG4gIH0pKSwgbmV3IGRpc3Bvc2VfU3VwcHJlc3NlZEVycm9yKHIsIGUpO1xufVxuZnVuY3Rpb24gX2Rpc3Bvc2UociwgZSwgcykge1xuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGZvciAoOyByLmxlbmd0aCA+IDA7KSB0cnkge1xuICAgICAgdmFyIG8gPSByLnBvcCgpLFxuICAgICAgICBwID0gby5kLmNhbGwoby52KTtcbiAgICAgIGlmIChvLmEpIHJldHVybiBQcm9taXNlLnJlc29sdmUocCkudGhlbihuZXh0LCBlcnIpO1xuICAgIH0gY2F0Y2ggKHIpIHtcbiAgICAgIHJldHVybiBlcnIocik7XG4gICAgfVxuICAgIGlmIChzKSB0aHJvdyBlO1xuICB9XG4gIGZ1bmN0aW9uIGVycihyKSB7XG4gICAgcmV0dXJuIGUgPSBzID8gbmV3IGRpc3Bvc2VfU3VwcHJlc3NlZEVycm9yKHIsIGUpIDogciwgcyA9ICEwLCBuZXh0KCk7XG4gIH1cbiAgcmV0dXJuIG5leHQoKTtcbn1cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChyLCBsKSB7XG4gIHZhciB0ID0gbnVsbCA9PSByID8gbnVsbCA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiByW1N5bWJvbC5pdGVyYXRvcl0gfHwgcltcIkBAaXRlcmF0b3JcIl07XG4gIGlmIChudWxsICE9IHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIG4sXG4gICAgICBpLFxuICAgICAgdSxcbiAgICAgIGEgPSBbXSxcbiAgICAgIGYgPSAhMCxcbiAgICAgIG8gPSAhMTtcbiAgICB0cnkge1xuICAgICAgaWYgKGkgPSAodCA9IHQuY2FsbChyKSkubmV4dCwgMCA9PT0gbCkge1xuICAgICAgICBpZiAoT2JqZWN0KHQpICE9PSB0KSByZXR1cm47XG4gICAgICAgIGYgPSAhMTtcbiAgICAgIH0gZWxzZSBmb3IgKDsgIShmID0gKGUgPSBpLmNhbGwodCkpLmRvbmUpICYmIChhLnB1c2goZS52YWx1ZSksIGEubGVuZ3RoICE9PSBsKTsgZiA9ICEwKTtcbiAgICB9IGNhdGNoIChyKSB7XG4gICAgICBvID0gITAsIG4gPSByO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIWYgJiYgbnVsbCAhPSB0LnJldHVybiAmJiAodSA9IHQucmV0dXJuKCksIE9iamVjdCh1KSAhPT0gdSkpIHJldHVybjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBuO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfVxufVxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0TG9vc2UoZSwgcikge1xuICB2YXIgdCA9IGUgJiYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBlW1N5bWJvbC5pdGVyYXRvcl0gfHwgZVtcIkBAaXRlcmF0b3JcIl0pO1xuICBpZiAobnVsbCAhPSB0KSB7XG4gICAgdmFyIG8sXG4gICAgICBsID0gW107XG4gICAgZm9yICh0ID0gdC5jYWxsKGUpOyBlLmxlbmd0aCA8IHIgJiYgIShvID0gdC5uZXh0KCkpLmRvbmU7KSBsLnB1c2goby52YWx1ZSk7XG4gICAgcmV0dXJuIGw7XG4gIH1cbn1cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEU7XG5mdW5jdGlvbiBfanN4KGUsIHIsIEUsIGwpIHtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFIHx8IChSRUFDVF9FTEVNRU5UX1RZUEUgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBTeW1ib2wuZm9yICYmIFN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpIHx8IDYwMTAzKTtcbiAgdmFyIG8gPSBlICYmIGUuZGVmYXVsdFByb3BzLFxuICAgIG4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMztcbiAgaWYgKHIgfHwgMCA9PT0gbiB8fCAociA9IHtcbiAgICBjaGlsZHJlbjogdm9pZCAwXG4gIH0pLCAxID09PSBuKSByLmNoaWxkcmVuID0gbDtlbHNlIGlmIChuID4gMSkge1xuICAgIGZvciAodmFyIHQgPSBuZXcgQXJyYXkobiksIGYgPSAwOyBmIDwgbjsgZisrKSB0W2ZdID0gYXJndW1lbnRzW2YgKyAzXTtcbiAgICByLmNoaWxkcmVuID0gdDtcbiAgfVxuICBpZiAociAmJiBvKSBmb3IgKHZhciBpIGluIG8pIHZvaWQgMCA9PT0gcltpXSAmJiAocltpXSA9IG9baV0pO2Vsc2UgciB8fCAociA9IG8gfHwge30pO1xuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgdHlwZTogZSxcbiAgICBrZXk6IHZvaWQgMCA9PT0gRSA/IG51bGwgOiBcIlwiICsgRSxcbiAgICByZWY6IG51bGwsXG4gICAgcHJvcHM6IHIsXG4gICAgX293bmVyOiBudWxsXG4gIH07XG59XG5mdW5jdGlvbiBvd25LZXlzKGUsIHIpIHtcbiAgdmFyIHQgPSBPYmplY3Qua2V5cyhlKTtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgbyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7XG4gICAgciAmJiAobyA9IG8uZmlsdGVyKGZ1bmN0aW9uIChyKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCByKS5lbnVtZXJhYmxlO1xuICAgIH0pKSwgdC5wdXNoLmFwcGx5KHQsIG8pO1xuICB9XG4gIHJldHVybiB0O1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIoZSkge1xuICBmb3IgKHZhciByID0gMTsgciA8IGFyZ3VtZW50cy5sZW5ndGg7IHIrKykge1xuICAgIHZhciB0ID0gbnVsbCAhPSBhcmd1bWVudHNbcl0gPyBhcmd1bWVudHNbcl0gOiB7fTtcbiAgICByICUgMiA/IG93bktleXMoT2JqZWN0KHQpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgX2RlZmluZVByb3BlcnR5KGUsIHIsIHRbcl0pO1xuICAgIH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0KSkgOiBvd25LZXlzKE9iamVjdCh0KSkuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgcikpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBlO1xufVxuZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7IC8qISByZWdlbmVyYXRvci1ydW50aW1lIC0tIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLiAtLSBsaWNlbnNlIChNSVQpOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL0xJQ0VOU0UgKi9cbiAgX3JlZ2VuZXJhdG9yUnVudGltZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZTtcbiAgfTtcbiAgdmFyIHQsXG4gICAgZSA9IHt9LFxuICAgIHIgPSBPYmplY3QucHJvdG90eXBlLFxuICAgIG4gPSByLmhhc093blByb3BlcnR5LFxuICAgIG8gPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgfHwgZnVuY3Rpb24gKHQsIGUsIHIpIHtcbiAgICAgIHRbZV0gPSByLnZhbHVlO1xuICAgIH0sXG4gICAgaSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sID8gU3ltYm9sIDoge30sXG4gICAgYSA9IGkuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCIsXG4gICAgYyA9IGkuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiLFxuICAgIHUgPSBpLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuICBmdW5jdGlvbiBkZWZpbmUodCwgZSwgcikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgZSwge1xuICAgICAgdmFsdWU6IHIsXG4gICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICB3cml0YWJsZTogITBcbiAgICB9KSwgdFtlXTtcbiAgfVxuICB0cnkge1xuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKHQpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbiAodCwgZSwgcikge1xuICAgICAgcmV0dXJuIHRbZV0gPSByO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gd3JhcCh0LCBlLCByLCBuKSB7XG4gICAgdmFyIGkgPSBlICYmIGUucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gZSA6IEdlbmVyYXRvcixcbiAgICAgIGEgPSBPYmplY3QuY3JlYXRlKGkucHJvdG90eXBlKSxcbiAgICAgIGMgPSBuZXcgQ29udGV4dChuIHx8IFtdKTtcbiAgICByZXR1cm4gbyhhLCBcIl9pbnZva2VcIiwge1xuICAgICAgdmFsdWU6IG1ha2VJbnZva2VNZXRob2QodCwgciwgYylcbiAgICB9KSwgYTtcbiAgfVxuICBmdW5jdGlvbiB0cnlDYXRjaCh0LCBlLCByKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwibm9ybWFsXCIsXG4gICAgICAgIGFyZzogdC5jYWxsKGUsIHIpXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwidGhyb3dcIixcbiAgICAgICAgYXJnOiB0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBlLndyYXAgPSB3cmFwO1xuICB2YXIgaCA9IFwic3VzcGVuZGVkU3RhcnRcIixcbiAgICBsID0gXCJzdXNwZW5kZWRZaWVsZFwiLFxuICAgIGYgPSBcImV4ZWN1dGluZ1wiLFxuICAgIHMgPSBcImNvbXBsZXRlZFwiLFxuICAgIHkgPSB7fTtcbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG4gIHZhciBwID0ge307XG4gIGRlZmluZShwLCBhLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICB2YXIgZCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICB2ID0gZCAmJiBkKGQodmFsdWVzKFtdKSkpO1xuICB2ICYmIHYgIT09IHIgJiYgbi5jYWxsKHYsIGEpICYmIChwID0gdik7XG4gIHZhciBnID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUocCk7XG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyh0KSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRlZmluZSh0LCBlLCBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKGUsIHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcih0LCBlKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKHIsIG8sIGksIGEpIHtcbiAgICAgIHZhciBjID0gdHJ5Q2F0Y2godFtyXSwgdCwgbyk7XG4gICAgICBpZiAoXCJ0aHJvd1wiICE9PSBjLnR5cGUpIHtcbiAgICAgICAgdmFyIHUgPSBjLmFyZyxcbiAgICAgICAgICBoID0gdS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIGggJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgaCAmJiBuLmNhbGwoaCwgXCJfX2F3YWl0XCIpID8gZS5yZXNvbHZlKGguX19hd2FpdCkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdCwgaSwgYSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgdCwgaSwgYSk7XG4gICAgICAgIH0pIDogZS5yZXNvbHZlKGgpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICB1LnZhbHVlID0gdCwgaSh1KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgdCwgaSwgYSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgYShjLmFyZyk7XG4gICAgfVxuICAgIHZhciByO1xuICAgIG8odGhpcywgXCJfaW52b2tlXCIsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCwgbikge1xuICAgICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IGUoZnVuY3Rpb24gKGUsIHIpIHtcbiAgICAgICAgICAgIGludm9rZSh0LCBuLCBlLCByKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gciA9IHIgPyByLnRoZW4oY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChlLCByLCBuKSB7XG4gICAgdmFyIG8gPSBoO1xuICAgIHJldHVybiBmdW5jdGlvbiAoaSwgYSkge1xuICAgICAgaWYgKG8gPT09IGYpIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICBpZiAobyA9PT0gcykge1xuICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSBpKSB0aHJvdyBhO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiB0LFxuICAgICAgICAgIGRvbmU6ICEwXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBmb3IgKG4ubWV0aG9kID0gaSwgbi5hcmcgPSBhOzspIHtcbiAgICAgICAgdmFyIGMgPSBuLmRlbGVnYXRlO1xuICAgICAgICBpZiAoYykge1xuICAgICAgICAgIHZhciB1ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShjLCBuKTtcbiAgICAgICAgICBpZiAodSkge1xuICAgICAgICAgICAgaWYgKHUgPT09IHkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIHU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChcIm5leHRcIiA9PT0gbi5tZXRob2QpIG4uc2VudCA9IG4uX3NlbnQgPSBuLmFyZztlbHNlIGlmIChcInRocm93XCIgPT09IG4ubWV0aG9kKSB7XG4gICAgICAgICAgaWYgKG8gPT09IGgpIHRocm93IG8gPSBzLCBuLmFyZztcbiAgICAgICAgICBuLmRpc3BhdGNoRXhjZXB0aW9uKG4uYXJnKTtcbiAgICAgICAgfSBlbHNlIFwicmV0dXJuXCIgPT09IG4ubWV0aG9kICYmIG4uYWJydXB0KFwicmV0dXJuXCIsIG4uYXJnKTtcbiAgICAgICAgbyA9IGY7XG4gICAgICAgIHZhciBwID0gdHJ5Q2F0Y2goZSwgciwgbik7XG4gICAgICAgIGlmIChcIm5vcm1hbFwiID09PSBwLnR5cGUpIHtcbiAgICAgICAgICBpZiAobyA9IG4uZG9uZSA/IHMgOiBsLCBwLmFyZyA9PT0geSkgY29udGludWU7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBwLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IG4uZG9uZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXCJ0aHJvd1wiID09PSBwLnR5cGUgJiYgKG8gPSBzLCBuLm1ldGhvZCA9IFwidGhyb3dcIiwgbi5hcmcgPSBwLmFyZyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGUsIHIpIHtcbiAgICB2YXIgbiA9IHIubWV0aG9kLFxuICAgICAgbyA9IGUuaXRlcmF0b3Jbbl07XG4gICAgaWYgKG8gPT09IHQpIHJldHVybiByLmRlbGVnYXRlID0gbnVsbCwgXCJ0aHJvd1wiID09PSBuICYmIGUuaXRlcmF0b3IucmV0dXJuICYmIChyLm1ldGhvZCA9IFwicmV0dXJuXCIsIHIuYXJnID0gdCwgbWF5YmVJbnZva2VEZWxlZ2F0ZShlLCByKSwgXCJ0aHJvd1wiID09PSByLm1ldGhvZCkgfHwgXCJyZXR1cm5cIiAhPT0gbiAmJiAoci5tZXRob2QgPSBcInRocm93XCIsIHIuYXJnID0gbmV3IFR5cGVFcnJvcihcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ1wiICsgbiArIFwiJyBtZXRob2RcIikpLCB5O1xuICAgIHZhciBpID0gdHJ5Q2F0Y2gobywgZS5pdGVyYXRvciwgci5hcmcpO1xuICAgIGlmIChcInRocm93XCIgPT09IGkudHlwZSkgcmV0dXJuIHIubWV0aG9kID0gXCJ0aHJvd1wiLCByLmFyZyA9IGkuYXJnLCByLmRlbGVnYXRlID0gbnVsbCwgeTtcbiAgICB2YXIgYSA9IGkuYXJnO1xuICAgIHJldHVybiBhID8gYS5kb25lID8gKHJbZS5yZXN1bHROYW1lXSA9IGEudmFsdWUsIHIubmV4dCA9IGUubmV4dExvYywgXCJyZXR1cm5cIiAhPT0gci5tZXRob2QgJiYgKHIubWV0aG9kID0gXCJuZXh0XCIsIHIuYXJnID0gdCksIHIuZGVsZWdhdGUgPSBudWxsLCB5KSA6IGEgOiAoci5tZXRob2QgPSBcInRocm93XCIsIHIuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpLCByLmRlbGVnYXRlID0gbnVsbCwgeSk7XG4gIH1cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KHQpIHtcbiAgICB2YXIgZSA9IHtcbiAgICAgIHRyeUxvYzogdFswXVxuICAgIH07XG4gICAgMSBpbiB0ICYmIChlLmNhdGNoTG9jID0gdFsxXSksIDIgaW4gdCAmJiAoZS5maW5hbGx5TG9jID0gdFsyXSwgZS5hZnRlckxvYyA9IHRbM10pLCB0aGlzLnRyeUVudHJpZXMucHVzaChlKTtcbiAgfVxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KHQpIHtcbiAgICB2YXIgZSA9IHQuY29tcGxldGlvbiB8fCB7fTtcbiAgICBlLnR5cGUgPSBcIm5vcm1hbFwiLCBkZWxldGUgZS5hcmcsIHQuY29tcGxldGlvbiA9IGU7XG4gIH1cbiAgZnVuY3Rpb24gQ29udGV4dCh0KSB7XG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3tcbiAgICAgIHRyeUxvYzogXCJyb290XCJcbiAgICB9XSwgdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyksIHRoaXMucmVzZXQoITApO1xuICB9XG4gIGZ1bmN0aW9uIHZhbHVlcyhlKSB7XG4gICAgaWYgKGUgfHwgXCJcIiA9PT0gZSkge1xuICAgICAgdmFyIHIgPSBlW2FdO1xuICAgICAgaWYgKHIpIHJldHVybiByLmNhbGwoZSk7XG4gICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLm5leHQpIHJldHVybiBlO1xuICAgICAgaWYgKCFpc05hTihlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIG8gPSAtMSxcbiAgICAgICAgICBpID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIGZvciAoOyArK28gPCBlLmxlbmd0aDspIGlmIChuLmNhbGwoZSwgbykpIHJldHVybiBuZXh0LnZhbHVlID0gZVtvXSwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICAgICAgICByZXR1cm4gbmV4dC52YWx1ZSA9IHQsIG5leHQuZG9uZSA9ICEwLCBuZXh0O1xuICAgICAgICAgIH07XG4gICAgICAgIHJldHVybiBpLm5leHQgPSBpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHR5cGVvZiBlICsgXCIgaXMgbm90IGl0ZXJhYmxlXCIpO1xuICB9XG4gIHJldHVybiBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgbyhnLCBcImNvbnN0cnVjdG9yXCIsIHtcbiAgICB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgY29uZmlndXJhYmxlOiAhMFxuICB9KSwgbyhHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCB7XG4gICAgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uLFxuICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgfSksIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCB1LCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpLCBlLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiB0ICYmIHQuY29uc3RydWN0b3I7XG4gICAgcmV0dXJuICEhZSAmJiAoZSA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHwgXCJHZW5lcmF0b3JGdW5jdGlvblwiID09PSAoZS5kaXNwbGF5TmFtZSB8fCBlLm5hbWUpKTtcbiAgfSwgZS5tYXJrID0gZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHQsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKSA6ICh0Ll9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmUodCwgdSwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSksIHQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShnKSwgdDtcbiAgfSwgZS5hd3JhcCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9fYXdhaXQ6IHRcbiAgICB9O1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpLCBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGMsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3IsIGUuYXN5bmMgPSBmdW5jdGlvbiAodCwgciwgbiwgbywgaSkge1xuICAgIHZvaWQgMCA9PT0gaSAmJiAoaSA9IFByb21pc2UpO1xuICAgIHZhciBhID0gbmV3IEFzeW5jSXRlcmF0b3Iod3JhcCh0LCByLCBuLCBvKSwgaSk7XG4gICAgcmV0dXJuIGUuaXNHZW5lcmF0b3JGdW5jdGlvbihyKSA/IGEgOiBhLm5leHQoKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdC5kb25lID8gdC52YWx1ZSA6IGEubmV4dCgpO1xuICAgIH0pO1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoZyksIGRlZmluZShnLCB1LCBcIkdlbmVyYXRvclwiKSwgZGVmaW5lKGcsIGEsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGRlZmluZShnLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSksIGUua2V5cyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIGUgPSBPYmplY3QodCksXG4gICAgICByID0gW107XG4gICAgZm9yICh2YXIgbiBpbiBlKSByLnB1c2gobik7XG4gICAgcmV0dXJuIHIucmV2ZXJzZSgpLCBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgZm9yICg7IHIubGVuZ3RoOykge1xuICAgICAgICB2YXIgdCA9IHIucG9wKCk7XG4gICAgICAgIGlmICh0IGluIGUpIHJldHVybiBuZXh0LnZhbHVlID0gdCwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgfTtcbiAgfSwgZS52YWx1ZXMgPSB2YWx1ZXMsIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuICAgIHJlc2V0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKHRoaXMucHJldiA9IDAsIHRoaXMubmV4dCA9IDAsIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB0LCB0aGlzLmRvbmUgPSAhMSwgdGhpcy5kZWxlZ2F0ZSA9IG51bGwsIHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMuYXJnID0gdCwgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSksICFlKSBmb3IgKHZhciByIGluIHRoaXMpIFwidFwiID09PSByLmNoYXJBdCgwKSAmJiBuLmNhbGwodGhpcywgcikgJiYgIWlzTmFOKCtyLnNsaWNlKDEpKSAmJiAodGhpc1tyXSA9IHQpO1xuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5kb25lID0gITA7XG4gICAgICB2YXIgdCA9IHRoaXMudHJ5RW50cmllc1swXS5jb21wbGV0aW9uO1xuICAgICAgaWYgKFwidGhyb3dcIiA9PT0gdC50eXBlKSB0aHJvdyB0LmFyZztcbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHRocm93IGU7XG4gICAgICB2YXIgciA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobiwgbykge1xuICAgICAgICByZXR1cm4gYS50eXBlID0gXCJ0aHJvd1wiLCBhLmFyZyA9IGUsIHIubmV4dCA9IG4sIG8gJiYgKHIubWV0aG9kID0gXCJuZXh0XCIsIHIuYXJnID0gdCksICEhbztcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIG8gPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgbyA+PSAwOyAtLW8pIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLnRyeUVudHJpZXNbb10sXG4gICAgICAgICAgYSA9IGkuY29tcGxldGlvbjtcbiAgICAgICAgaWYgKFwicm9vdFwiID09PSBpLnRyeUxvYykgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgaWYgKGkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBjID0gbi5jYWxsKGksIFwiY2F0Y2hMb2NcIiksXG4gICAgICAgICAgICB1ID0gbi5jYWxsKGksIFwiZmluYWxseUxvY1wiKTtcbiAgICAgICAgICBpZiAoYyAmJiB1KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShpLmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGkuZmluYWxseUxvYyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShpLmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdSkgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGkuZmluYWxseUxvYyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICBmb3IgKHZhciByID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IHIgPj0gMDsgLS1yKSB7XG4gICAgICAgIHZhciBvID0gdGhpcy50cnlFbnRyaWVzW3JdO1xuICAgICAgICBpZiAoby50cnlMb2MgPD0gdGhpcy5wcmV2ICYmIG4uY2FsbChvLCBcImZpbmFsbHlMb2NcIikgJiYgdGhpcy5wcmV2IDwgby5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGkgPSBvO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpICYmIChcImJyZWFrXCIgPT09IHQgfHwgXCJjb250aW51ZVwiID09PSB0KSAmJiBpLnRyeUxvYyA8PSBlICYmIGUgPD0gaS5maW5hbGx5TG9jICYmIChpID0gbnVsbCk7XG4gICAgICB2YXIgYSA9IGkgPyBpLmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJldHVybiBhLnR5cGUgPSB0LCBhLmFyZyA9IGUsIGkgPyAodGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5uZXh0ID0gaS5maW5hbGx5TG9jLCB5KSA6IHRoaXMuY29tcGxldGUoYSk7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHQudHlwZSkgdGhyb3cgdC5hcmc7XG4gICAgICByZXR1cm4gXCJicmVha1wiID09PSB0LnR5cGUgfHwgXCJjb250aW51ZVwiID09PSB0LnR5cGUgPyB0aGlzLm5leHQgPSB0LmFyZyA6IFwicmV0dXJuXCIgPT09IHQudHlwZSA/ICh0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHQuYXJnLCB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCIsIHRoaXMubmV4dCA9IFwiZW5kXCIpIDogXCJub3JtYWxcIiA9PT0gdC50eXBlICYmIGUgJiYgKHRoaXMubmV4dCA9IGUpLCB5O1xuICAgIH0sXG4gICAgZmluaXNoOiBmdW5jdGlvbiAodCkge1xuICAgICAgZm9yICh2YXIgZSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBlID49IDA7IC0tZSkge1xuICAgICAgICB2YXIgciA9IHRoaXMudHJ5RW50cmllc1tlXTtcbiAgICAgICAgaWYgKHIuZmluYWxseUxvYyA9PT0gdCkgcmV0dXJuIHRoaXMuY29tcGxldGUoci5jb21wbGV0aW9uLCByLmFmdGVyTG9jKSwgcmVzZXRUcnlFbnRyeShyKSwgeTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNhdGNoOiBmdW5jdGlvbiAodCkge1xuICAgICAgZm9yICh2YXIgZSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBlID49IDA7IC0tZSkge1xuICAgICAgICB2YXIgciA9IHRoaXMudHJ5RW50cmllc1tlXTtcbiAgICAgICAgaWYgKHIudHJ5TG9jID09PSB0KSB7XG4gICAgICAgICAgdmFyIG4gPSByLmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKFwidGhyb3dcIiA9PT0gbi50eXBlKSB7XG4gICAgICAgICAgICB2YXIgbyA9IG4uYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uIChlLCByLCBuKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcixcbiAgICAgICAgbmV4dExvYzogblxuICAgICAgfSwgXCJuZXh0XCIgPT09IHRoaXMubWV0aG9kICYmICh0aGlzLmFyZyA9IHQpLCB5O1xuICAgIH1cbiAgfSwgZTtcbn1cbmZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59XG5mdW5jdGlvbiBfdXNpbmcobywgZSwgbikge1xuICBpZiAobnVsbCA9PSBlKSByZXR1cm4gZTtcbiAgaWYgKFwib2JqZWN0XCIgIT0gdHlwZW9mIGUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJ1c2luZyBkZWNsYXJhdGlvbnMgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIG9iamVjdHMsIG51bGwsIG9yIHVuZGVmaW5lZC5cIik7XG4gIGlmIChuKSB2YXIgciA9IGVbU3ltYm9sLmFzeW5jRGlzcG9zZSB8fCBTeW1ib2wuZm9yKFwiU3ltYm9sLmFzeW5jRGlzcG9zZVwiKV07XG4gIGlmIChudWxsID09IHIgJiYgKHIgPSBlW1N5bWJvbC5kaXNwb3NlIHx8IFN5bWJvbC5mb3IoXCJTeW1ib2wuZGlzcG9zZVwiKV0pLCBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm9wZXJ0eSBbU3ltYm9sLmRpc3Bvc2VdIGlzIG5vdCBhIGZ1bmN0aW9uLlwiKTtcbiAgcmV0dXJuIG8ucHVzaCh7XG4gICAgdjogZSxcbiAgICBkOiByLFxuICAgIGE6IG5cbiAgfSksIGU7XG59XG5mdW5jdGlvbiBfd3JhcFJlZ0V4cCgpIHtcbiAgX3dyYXBSZWdFeHAgPSBmdW5jdGlvbiAoZSwgcikge1xuICAgIHJldHVybiBuZXcgQmFiZWxSZWdFeHAoZSwgdm9pZCAwLCByKTtcbiAgfTtcbiAgdmFyIGUgPSBSZWdFeHAucHJvdG90eXBlLFxuICAgIHIgPSBuZXcgV2Vha01hcCgpO1xuICBmdW5jdGlvbiBCYWJlbFJlZ0V4cChlLCB0LCBwKSB7XG4gICAgdmFyIG8gPSBuZXcgUmVnRXhwKGUsIHQpO1xuICAgIHJldHVybiByLnNldChvLCBwIHx8IHIuZ2V0KGUpKSwgX3NldFByb3RvdHlwZU9mKG8sIEJhYmVsUmVnRXhwLnByb3RvdHlwZSk7XG4gIH1cbiAgZnVuY3Rpb24gYnVpbGRHcm91cHMoZSwgdCkge1xuICAgIHZhciBwID0gci5nZXQodCk7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHApLnJlZHVjZShmdW5jdGlvbiAociwgdCkge1xuICAgICAgdmFyIG8gPSBwW3RdO1xuICAgICAgaWYgKFwibnVtYmVyXCIgPT0gdHlwZW9mIG8pIHJbdF0gPSBlW29dO2Vsc2Uge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgdm9pZCAwID09PSBlW29baV1dICYmIGkgKyAxIDwgby5sZW5ndGg7KSBpKys7XG4gICAgICAgIHJbdF0gPSBlW29baV1dO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHI7XG4gICAgfSwgT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gIH1cbiAgcmV0dXJuIF9pbmhlcml0cyhCYWJlbFJlZ0V4cCwgUmVnRXhwKSwgQmFiZWxSZWdFeHAucHJvdG90eXBlLmV4ZWMgPSBmdW5jdGlvbiAocikge1xuICAgIHZhciB0ID0gZS5leGVjLmNhbGwodGhpcywgcik7XG4gICAgaWYgKHQpIHtcbiAgICAgIHQuZ3JvdXBzID0gYnVpbGRHcm91cHModCwgdGhpcyk7XG4gICAgICB2YXIgcCA9IHQuaW5kaWNlcztcbiAgICAgIHAgJiYgKHAuZ3JvdXBzID0gYnVpbGRHcm91cHMocCwgdGhpcykpO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbiAgfSwgQmFiZWxSZWdFeHAucHJvdG90eXBlW1N5bWJvbC5yZXBsYWNlXSA9IGZ1bmN0aW9uICh0LCBwKSB7XG4gICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHApIHtcbiAgICAgIHZhciBvID0gci5nZXQodGhpcyk7XG4gICAgICByZXR1cm4gZVtTeW1ib2wucmVwbGFjZV0uY2FsbCh0aGlzLCB0LCBwLnJlcGxhY2UoL1xcJDwoW14+XSspPi9nLCBmdW5jdGlvbiAoZSwgcikge1xuICAgICAgICB2YXIgdCA9IG9bcl07XG4gICAgICAgIHJldHVybiBcIiRcIiArIChBcnJheS5pc0FycmF5KHQpID8gdC5qb2luKFwiJFwiKSA6IHQpO1xuICAgICAgfSkpO1xuICAgIH1cbiAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBwKSB7XG4gICAgICB2YXIgaSA9IHRoaXM7XG4gICAgICByZXR1cm4gZVtTeW1ib2wucmVwbGFjZV0uY2FsbCh0aGlzLCB0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlID0gYXJndW1lbnRzO1xuICAgICAgICByZXR1cm4gXCJvYmplY3RcIiAhPSB0eXBlb2YgZVtlLmxlbmd0aCAtIDFdICYmIChlID0gW10uc2xpY2UuY2FsbChlKSkucHVzaChidWlsZEdyb3VwcyhlLCBpKSksIHAuYXBwbHkodGhpcywgZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGVbU3ltYm9sLnJlcGxhY2VdLmNhbGwodGhpcywgdCwgcCk7XG4gIH0sIF93cmFwUmVnRXhwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5mdW5jdGlvbiBfQXdhaXRWYWx1ZSh2YWx1ZSkge1xuICB0aGlzLndyYXBwZWQgPSB2YWx1ZTtcbn1cbmZ1bmN0aW9uIF93cmFwQXN5bmNHZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IF9Bc3luY0dlbmVyYXRvcihmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5mdW5jdGlvbiBfZGVmaW5lRW51bWVyYWJsZVByb3BlcnRpZXMob2JqLCBkZXNjcykge1xuICBmb3IgKHZhciBrZXkgaW4gZGVzY3MpIHtcbiAgICB2YXIgZGVzYyA9IGRlc2NzW2tleV07XG4gICAgZGVzYy5jb25maWd1cmFibGUgPSBkZXNjLmVudW1lcmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzYykgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCBkZXNjKTtcbiAgfVxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBvYmplY3RTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhkZXNjcyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3RTeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc3ltID0gb2JqZWN0U3ltYm9sc1tpXTtcbiAgICAgIHZhciBkZXNjID0gZGVzY3Nbc3ltXTtcbiAgICAgIGRlc2MuY29uZmlndXJhYmxlID0gZGVzYy5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzYykgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBzeW0sIGRlc2MpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX2RlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHtcbiAgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0cyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIHZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmNvbmZpZ3VyYWJsZSAmJiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBPYmplY3QoYXJndW1lbnRzW2ldKSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMucHVzaC5hcHBseShvd25LZXlzLCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSk7XG4gICAgfVxuICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG4gIHRyeSB7XG4gICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgaWYgKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdC5iaW5kKCk7XG4gIH0gZWxzZSB7XG4gICAgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7XG4gIHJldHVybiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKGZuKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSAhPT0gLTE7XG59XG5mdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gIHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7XG4gIF93cmFwTmF0aXZlU3VwZXIgPSBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSBudWxsIHx8ICFfaXNOYXRpdmVGdW5jdGlvbihDbGFzcykpIHJldHVybiBDbGFzcztcbiAgICBpZiAodHlwZW9mIENsYXNzICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpO1xuICAgICAgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFdyYXBwZXIoKSB7XG4gICAgICByZXR1cm4gX2NvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpO1xuICAgIH1cbiAgICBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogV3JhcHBlcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTtcbiAgfTtcbiAgcmV0dXJuIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpO1xufVxuZnVuY3Rpb24gX2luc3RhbmNlb2YobGVmdCwgcmlnaHQpIHtcbiAgaWYgKHJpZ2h0ICE9IG51bGwgJiYgdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiByaWdodFtTeW1ib2wuaGFzSW5zdGFuY2VdKSB7XG4gICAgcmV0dXJuICEhcmlnaHRbU3ltYm9sLmhhc0luc3RhbmNlXShsZWZ0KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGVmdCBpbnN0YW5jZW9mIHJpZ2h0O1xuICB9XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlQmFiZWxJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTtcbiAgdmFyIGNhY2hlTm9kZUludGVyb3AgPSBuZXcgV2Vha01hcCgpO1xuICByZXR1cm4gKF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIChub2RlSW50ZXJvcCkge1xuICAgIHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDtcbiAgfSkobm9kZUludGVyb3ApO1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqLCBub2RlSW50ZXJvcCkge1xuICBpZiAoIW5vZGVJbnRlcm9wICYmIG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7XG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChrZXkgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbmV3T2JqLmRlZmF1bHQgPSBvYmo7XG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cbiAgcmV0dXJuIG5ld09iajtcbn1cbmZ1bmN0aW9uIF9uZXdBcnJvd0NoZWNrKGlubmVyVGhpcywgYm91bmRUaGlzKSB7XG4gIGlmIChpbm5lclRoaXMgIT09IGJvdW5kVGhpcykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgaW5zdGFudGlhdGUgYW4gYXJyb3cgZnVuY3Rpb25cIik7XG4gIH1cbn1cbmZ1bmN0aW9uIF9vYmplY3REZXN0cnVjdHVyaW5nRW1wdHkob2JqKSB7XG4gIGlmIChvYmogPT0gbnVsbCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBkZXN0cnVjdHVyZSBcIiArIG9iaik7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG4gIHJldHVybiBzZWxmO1xufVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cbiAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkge1xuICB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkge1xuICAgIHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSxcbiAgICAgIHJlc3VsdDtcbiAgICBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkge1xuICAgICAgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtcbiAgICAgIHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpO1xuICB9O1xufVxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IF9nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBfZ2V0ID0gUmVmbGVjdC5nZXQuYmluZCgpO1xuICB9IGVsc2Uge1xuICAgIF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gX2dldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5zZXQpIHtcbiAgICBzZXQgPSBSZWZsZWN0LnNldDtcbiAgfSBlbHNlIHtcbiAgICBzZXQgPSBmdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgdmFyIGRlc2M7XG4gICAgICBpZiAoYmFzZSkge1xuICAgICAgICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG4gICAgICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgICAgIGRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICghZGVzYy53cml0YWJsZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocmVjZWl2ZXIsIHByb3BlcnR5KTtcbiAgICAgIGlmIChkZXNjKSB7XG4gICAgICAgIGlmICghZGVzYy53cml0YWJsZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBkZXNjLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgcHJvcGVydHksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHJlY2VpdmVyLCBwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcik7XG59XG5mdW5jdGlvbiBfc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlciwgaXNTdHJpY3QpIHtcbiAgdmFyIHMgPSBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyIHx8IHRhcmdldCk7XG4gIGlmICghcyAmJiBpc1N0cmljdCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ZhaWxlZCB0byBzZXQgcHJvcGVydHknKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKHN0cmluZ3MsIHJhdykge1xuICBpZiAoIXJhdykge1xuICAgIHJhdyA9IHN0cmluZ3Muc2xpY2UoMCk7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywge1xuICAgIHJhdzoge1xuICAgICAgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KVxuICAgIH1cbiAgfSkpO1xufVxuZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlKHN0cmluZ3MsIHJhdykge1xuICBpZiAoIXJhdykge1xuICAgIHJhdyA9IHN0cmluZ3Muc2xpY2UoMCk7XG4gIH1cbiAgc3RyaW5ncy5yYXcgPSByYXc7XG4gIHJldHVybiBzdHJpbmdzO1xufVxuZnVuY3Rpb24gX3JlYWRPbmx5RXJyb3IobmFtZSkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiXFxcIlwiICsgbmFtZSArIFwiXFxcIiBpcyByZWFkLW9ubHlcIik7XG59XG5mdW5jdGlvbiBfd3JpdGVPbmx5RXJyb3IobmFtZSkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiXFxcIlwiICsgbmFtZSArIFwiXFxcIiBpcyB3cml0ZS1vbmx5XCIpO1xufVxuZnVuY3Rpb24gX2NsYXNzTmFtZVREWkVycm9yKG5hbWUpIHtcbiAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwiQ2xhc3MgXFxcIlwiICsgbmFtZSArIFwiXFxcIiBjYW5ub3QgYmUgcmVmZXJlbmNlZCBpbiBjb21wdXRlZCBwcm9wZXJ0eSBrZXlzLlwiKTtcbn1cbmZ1bmN0aW9uIF90ZW1wb3JhbFVuZGVmaW5lZCgpIHt9XG5mdW5jdGlvbiBfdGR6KG5hbWUpIHtcbiAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKG5hbWUgKyBcIiBpcyBub3QgZGVmaW5lZCAtIHRlbXBvcmFsIGRlYWQgem9uZVwiKTtcbn1cbmZ1bmN0aW9uIF90ZW1wb3JhbFJlZih2YWwsIG5hbWUpIHtcbiAgcmV0dXJuIHZhbCA9PT0gX3RlbXBvcmFsVW5kZWZpbmVkID8gX3RkeihuYW1lKSA6IHZhbDtcbn1cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xufVxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXlMb29zZShhcnIsIGkpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdExvb3NlKGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xufVxuZnVuY3Rpb24gX3RvQXJyYXkoYXJyKSB7XG4gIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xufVxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cbmZ1bmN0aW9uIF9tYXliZUFycmF5TGlrZShuZXh0LCBhcnIsIGkpIHtcbiAgaWYgKGFyciAmJiAhQXJyYXkuaXNBcnJheShhcnIpICYmIHR5cGVvZiBhcnIubGVuZ3RoID09PSBcIm51bWJlclwiKSB7XG4gICAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gICAgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFyciwgaSAhPT0gdm9pZCAwICYmIGkgPCBsZW4gPyBpIDogbGVuKTtcbiAgfVxuICByZXR1cm4gbmV4dChhcnIsIGkpO1xufVxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcbiAgcmV0dXJuIGFycjI7XG59XG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8sIGFsbG93QXJyYXlMaWtlKSB7XG4gIHZhciBpdCA9IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdIHx8IG9bXCJAQGl0ZXJhdG9yXCJdO1xuICBpZiAoIWl0KSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgaWYgKGl0KSBvID0gaXQ7XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgczogRixcbiAgICAgICAgbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4ge1xuICAgICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IG9baSsrXVxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfSxcbiAgICAgICAgZjogRlxuICAgICAgfTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xuICB9XG4gIHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSxcbiAgICBkaWRFcnIgPSBmYWxzZSxcbiAgICBlcnI7XG4gIHJldHVybiB7XG4gICAgczogZnVuY3Rpb24gKCkge1xuICAgICAgaXQgPSBpdC5jYWxsKG8pO1xuICAgIH0sXG4gICAgbjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7XG4gICAgICBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lO1xuICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgfSxcbiAgICBlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgZGlkRXJyID0gdHJ1ZTtcbiAgICAgIGVyciA9IGU7XG4gICAgfSxcbiAgICBmOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXQucmV0dXJuICE9IG51bGwpIGl0LnJldHVybigpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGRpZEVycikgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UobywgYWxsb3dBcnJheUxpa2UpIHtcbiAgdmFyIGl0ID0gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0gfHwgb1tcIkBAaXRlcmF0b3JcIl07XG4gIGlmIChpdCkgcmV0dXJuIChpdCA9IGl0LmNhbGwobykpLm5leHQuYmluZChpdCk7XG4gIGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHtcbiAgICBpZiAoaXQpIG8gPSBpdDtcbiAgICB2YXIgaSA9IDA7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4ge1xuICAgICAgICBkb25lOiB0cnVlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiBvW2krK11cbiAgICAgIH07XG4gICAgfTtcbiAgfVxuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5mdW5jdGlvbiBfc2tpcEZpcnN0R2VuZXJhdG9yTmV4dChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpdCA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaXQubmV4dCgpO1xuICAgIHJldHVybiBpdDtcbiAgfTtcbn1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmICh0eXBlb2YgcmVzICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbn1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG4gIHJldHVybiB0eXBlb2Yga2V5ID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59XG5mdW5jdGlvbiBfaW5pdGlhbGl6ZXJXYXJuaW5nSGVscGVyKGRlc2NyaXB0b3IsIGNvbnRleHQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdEZWNvcmF0aW5nIGNsYXNzIHByb3BlcnR5IGZhaWxlZC4gUGxlYXNlIGVuc3VyZSB0aGF0ICcgKyAndHJhbnNmb3JtLWNsYXNzLXByb3BlcnRpZXMgaXMgZW5hYmxlZCBhbmQgcnVucyBhZnRlciB0aGUgZGVjb3JhdG9ycyB0cmFuc2Zvcm0uJyk7XG59XG5mdW5jdGlvbiBfaW5pdGlhbGl6ZXJEZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjcmlwdG9yLCBjb250ZXh0KSB7XG4gIGlmICghZGVzY3JpcHRvcikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwge1xuICAgIGVudW1lcmFibGU6IGRlc2NyaXB0b3IuZW51bWVyYWJsZSxcbiAgICBjb25maWd1cmFibGU6IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlLFxuICAgIHdyaXRhYmxlOiBkZXNjcmlwdG9yLndyaXRhYmxlLFxuICAgIHZhbHVlOiBkZXNjcmlwdG9yLmluaXRpYWxpemVyID8gZGVzY3JpcHRvci5pbml0aWFsaXplci5jYWxsKGNvbnRleHQpIDogdm9pZCAwXG4gIH0pO1xufVxuZnVuY3Rpb24gX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5LCBkZWNvcmF0b3JzLCBkZXNjcmlwdG9yLCBjb250ZXh0KSB7XG4gIHZhciBkZXNjID0ge307XG4gIE9iamVjdC5rZXlzKGRlc2NyaXB0b3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlc2Nba2V5XSA9IGRlc2NyaXB0b3Jba2V5XTtcbiAgfSk7XG4gIGRlc2MuZW51bWVyYWJsZSA9ICEhZGVzYy5lbnVtZXJhYmxlO1xuICBkZXNjLmNvbmZpZ3VyYWJsZSA9ICEhZGVzYy5jb25maWd1cmFibGU7XG4gIGlmICgndmFsdWUnIGluIGRlc2MgfHwgZGVzYy5pbml0aWFsaXplcikge1xuICAgIGRlc2Mud3JpdGFibGUgPSB0cnVlO1xuICB9XG4gIGRlc2MgPSBkZWNvcmF0b3JzLnNsaWNlKCkucmV2ZXJzZSgpLnJlZHVjZShmdW5jdGlvbiAoZGVzYywgZGVjb3JhdG9yKSB7XG4gICAgcmV0dXJuIGRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5LCBkZXNjKSB8fCBkZXNjO1xuICB9LCBkZXNjKTtcbiAgaWYgKGNvbnRleHQgJiYgZGVzYy5pbml0aWFsaXplciAhPT0gdm9pZCAwKSB7XG4gICAgZGVzYy52YWx1ZSA9IGRlc2MuaW5pdGlhbGl6ZXIgPyBkZXNjLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDA7XG4gICAgZGVzYy5pbml0aWFsaXplciA9IHVuZGVmaW5lZDtcbiAgfVxuICBpZiAoZGVzYy5pbml0aWFsaXplciA9PT0gdm9pZCAwKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIGRlc2MpO1xuICAgIGRlc2MgPSBudWxsO1xuICB9XG4gIHJldHVybiBkZXNjO1xufVxudmFyIGlkID0gMDtcbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZExvb3NlS2V5KG5hbWUpIHtcbiAgcmV0dXJuIFwiX19wcml2YXRlX1wiICsgaWQrKyArIFwiX1wiICsgbmFtZTtcbn1cbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZExvb3NlQmFzZShyZWNlaXZlciwgcHJpdmF0ZUtleSkge1xuICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZWNlaXZlciwgcHJpdmF0ZUtleSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHVzZSBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcbiAgfVxuICByZXR1cm4gcmVjZWl2ZXI7XG59XG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBfY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yKHJlY2VpdmVyLCBwcml2YXRlTWFwLCBcImdldFwiKTtcbiAgcmV0dXJuIF9jbGFzc0FwcGx5RGVzY3JpcHRvckdldChyZWNlaXZlciwgZGVzY3JpcHRvcik7XG59XG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gX2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgXCJzZXRcIik7XG4gIF9jbGFzc0FwcGx5RGVzY3JpcHRvclNldChyZWNlaXZlciwgZGVzY3JpcHRvciwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGREZXN0cnVjdHVyZVNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xuICB2YXIgZGVzY3JpcHRvciA9IF9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIFwic2V0XCIpO1xuICByZXR1cm4gX2NsYXNzQXBwbHlEZXNjcmlwdG9yRGVzdHJ1Y3R1cmVTZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IpO1xufVxuZnVuY3Rpb24gX2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgYWN0aW9uKSB7XG4gIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBcIiArIGFjdGlvbiArIFwiIHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xuICB9XG4gIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XG59XG5mdW5jdGlvbiBfY2xhc3NTdGF0aWNQcml2YXRlRmllbGRTcGVjR2V0KHJlY2VpdmVyLCBjbGFzc0NvbnN0cnVjdG9yLCBkZXNjcmlwdG9yKSB7XG4gIF9jbGFzc0NoZWNrUHJpdmF0ZVN0YXRpY0FjY2VzcyhyZWNlaXZlciwgY2xhc3NDb25zdHJ1Y3Rvcik7XG4gIF9jbGFzc0NoZWNrUHJpdmF0ZVN0YXRpY0ZpZWxkRGVzY3JpcHRvcihkZXNjcmlwdG9yLCBcImdldFwiKTtcbiAgcmV0dXJuIF9jbGFzc0FwcGx5RGVzY3JpcHRvckdldChyZWNlaXZlciwgZGVzY3JpcHRvcik7XG59XG5mdW5jdGlvbiBfY2xhc3NTdGF0aWNQcml2YXRlRmllbGRTcGVjU2V0KHJlY2VpdmVyLCBjbGFzc0NvbnN0cnVjdG9yLCBkZXNjcmlwdG9yLCB2YWx1ZSkge1xuICBfY2xhc3NDaGVja1ByaXZhdGVTdGF0aWNBY2Nlc3MocmVjZWl2ZXIsIGNsYXNzQ29uc3RydWN0b3IpO1xuICBfY2xhc3NDaGVja1ByaXZhdGVTdGF0aWNGaWVsZERlc2NyaXB0b3IoZGVzY3JpcHRvciwgXCJzZXRcIik7XG4gIF9jbGFzc0FwcGx5RGVzY3JpcHRvclNldChyZWNlaXZlciwgZGVzY3JpcHRvciwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBfY2xhc3NTdGF0aWNQcml2YXRlTWV0aG9kR2V0KHJlY2VpdmVyLCBjbGFzc0NvbnN0cnVjdG9yLCBtZXRob2QpIHtcbiAgX2NsYXNzQ2hlY2tQcml2YXRlU3RhdGljQWNjZXNzKHJlY2VpdmVyLCBjbGFzc0NvbnN0cnVjdG9yKTtcbiAgcmV0dXJuIG1ldGhvZDtcbn1cbmZ1bmN0aW9uIF9jbGFzc1N0YXRpY1ByaXZhdGVNZXRob2RTZXQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBzdGF0aWMgcHJpdmF0ZSBmaWVsZFwiKTtcbn1cbmZ1bmN0aW9uIF9jbGFzc0FwcGx5RGVzY3JpcHRvckdldChyZWNlaXZlciwgZGVzY3JpcHRvcikge1xuICBpZiAoZGVzY3JpcHRvci5nZXQpIHtcbiAgICByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7XG4gIH1cbiAgcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7XG59XG5mdW5jdGlvbiBfY2xhc3NBcHBseURlc2NyaXB0b3JTZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IsIHZhbHVlKSB7XG4gIGlmIChkZXNjcmlwdG9yLnNldCkge1xuICAgIGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWRlc2NyaXB0b3Iud3JpdGFibGUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXCIpO1xuICAgIH1cbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jbGFzc0FwcGx5RGVzY3JpcHRvckRlc3RydWN0dXJlU2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yKSB7XG4gIGlmIChkZXNjcmlwdG9yLnNldCkge1xuICAgIGlmICghKFwiX19kZXN0ck9ialwiIGluIGRlc2NyaXB0b3IpKSB7XG4gICAgICBkZXNjcmlwdG9yLl9fZGVzdHJPYmogPSB7XG4gICAgICAgIHNldCB2YWx1ZSh2KSB7XG4gICAgICAgICAgZGVzY3JpcHRvci5zZXQuY2FsbChyZWNlaXZlciwgdik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBkZXNjcmlwdG9yLl9fZGVzdHJPYmo7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFkZXNjcmlwdG9yLndyaXRhYmxlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCByZWFkIG9ubHkgcHJpdmF0ZSBmaWVsZFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jbGFzc1N0YXRpY1ByaXZhdGVGaWVsZERlc3RydWN0dXJlU2V0KHJlY2VpdmVyLCBjbGFzc0NvbnN0cnVjdG9yLCBkZXNjcmlwdG9yKSB7XG4gIF9jbGFzc0NoZWNrUHJpdmF0ZVN0YXRpY0FjY2VzcyhyZWNlaXZlciwgY2xhc3NDb25zdHJ1Y3Rvcik7XG4gIF9jbGFzc0NoZWNrUHJpdmF0ZVN0YXRpY0ZpZWxkRGVzY3JpcHRvcihkZXNjcmlwdG9yLCBcInNldFwiKTtcbiAgcmV0dXJuIF9jbGFzc0FwcGx5RGVzY3JpcHRvckRlc3RydWN0dXJlU2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yKTtcbn1cbmZ1bmN0aW9uIF9jbGFzc0NoZWNrUHJpdmF0ZVN0YXRpY0FjY2VzcyhyZWNlaXZlciwgY2xhc3NDb25zdHJ1Y3Rvcikge1xuICBpZiAocmVjZWl2ZXIgIT09IGNsYXNzQ29uc3RydWN0b3IpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBzdGF0aWMgYWNjZXNzIG9mIHdyb25nIHByb3ZlbmFuY2VcIik7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jbGFzc0NoZWNrUHJpdmF0ZVN0YXRpY0ZpZWxkRGVzY3JpcHRvcihkZXNjcmlwdG9yLCBhY3Rpb24pIHtcbiAgaWYgKGRlc2NyaXB0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gXCIgKyBhY3Rpb24gKyBcIiBwcml2YXRlIHN0YXRpYyBmaWVsZCBiZWZvcmUgaXRzIGRlY2xhcmF0aW9uXCIpO1xuICB9XG59XG5mdW5jdGlvbiBfZGVjb3JhdGUoZGVjb3JhdG9ycywgZmFjdG9yeSwgc3VwZXJDbGFzcywgbWl4aW5zKSB7XG4gIHZhciBhcGkgPSBfZ2V0RGVjb3JhdG9yc0FwaSgpO1xuICBpZiAobWl4aW5zKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtaXhpbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFwaSA9IG1peGluc1tpXShhcGkpO1xuICAgIH1cbiAgfVxuICB2YXIgciA9IGZhY3RvcnkoZnVuY3Rpb24gaW5pdGlhbGl6ZShPKSB7XG4gICAgYXBpLmluaXRpYWxpemVJbnN0YW5jZUVsZW1lbnRzKE8sIGRlY29yYXRlZC5lbGVtZW50cyk7XG4gIH0sIHN1cGVyQ2xhc3MpO1xuICB2YXIgZGVjb3JhdGVkID0gYXBpLmRlY29yYXRlQ2xhc3MoX2NvYWxlc2NlQ2xhc3NFbGVtZW50cyhyLmQubWFwKF9jcmVhdGVFbGVtZW50RGVzY3JpcHRvcikpLCBkZWNvcmF0b3JzKTtcbiAgYXBpLmluaXRpYWxpemVDbGFzc0VsZW1lbnRzKHIuRiwgZGVjb3JhdGVkLmVsZW1lbnRzKTtcbiAgcmV0dXJuIGFwaS5ydW5DbGFzc0ZpbmlzaGVycyhyLkYsIGRlY29yYXRlZC5maW5pc2hlcnMpO1xufVxuZnVuY3Rpb24gX2dldERlY29yYXRvcnNBcGkoKSB7XG4gIF9nZXREZWNvcmF0b3JzQXBpID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcGk7XG4gIH07XG4gIHZhciBhcGkgPSB7XG4gICAgZWxlbWVudHNEZWZpbml0aW9uT3JkZXI6IFtbXCJtZXRob2RcIl0sIFtcImZpZWxkXCJdXSxcbiAgICBpbml0aWFsaXplSW5zdGFuY2VFbGVtZW50czogZnVuY3Rpb24gKE8sIGVsZW1lbnRzKSB7XG4gICAgICBbXCJtZXRob2RcIiwgXCJmaWVsZFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChraW5kKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICBpZiAoZWxlbWVudC5raW5kID09PSBraW5kICYmIGVsZW1lbnQucGxhY2VtZW50ID09PSBcIm93blwiKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmluZUNsYXNzRWxlbWVudChPLCBlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfSxcbiAgICBpbml0aWFsaXplQ2xhc3NFbGVtZW50czogZnVuY3Rpb24gKEYsIGVsZW1lbnRzKSB7XG4gICAgICB2YXIgcHJvdG8gPSBGLnByb3RvdHlwZTtcbiAgICAgIFtcIm1ldGhvZFwiLCBcImZpZWxkXCJdLmZvckVhY2goZnVuY3Rpb24gKGtpbmQpIHtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgIHZhciBwbGFjZW1lbnQgPSBlbGVtZW50LnBsYWNlbWVudDtcbiAgICAgICAgICBpZiAoZWxlbWVudC5raW5kID09PSBraW5kICYmIChwbGFjZW1lbnQgPT09IFwic3RhdGljXCIgfHwgcGxhY2VtZW50ID09PSBcInByb3RvdHlwZVwiKSkge1xuICAgICAgICAgICAgdmFyIHJlY2VpdmVyID0gcGxhY2VtZW50ID09PSBcInN0YXRpY1wiID8gRiA6IHByb3RvO1xuICAgICAgICAgICAgdGhpcy5kZWZpbmVDbGFzc0VsZW1lbnQocmVjZWl2ZXIsIGVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9LFxuICAgIGRlZmluZUNsYXNzRWxlbWVudDogZnVuY3Rpb24gKHJlY2VpdmVyLCBlbGVtZW50KSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IGVsZW1lbnQuZGVzY3JpcHRvcjtcbiAgICAgIGlmIChlbGVtZW50LmtpbmQgPT09IFwiZmllbGRcIikge1xuICAgICAgICB2YXIgaW5pdGlhbGl6ZXIgPSBlbGVtZW50LmluaXRpYWxpemVyO1xuICAgICAgICBkZXNjcmlwdG9yID0ge1xuICAgICAgICAgIGVudW1lcmFibGU6IGRlc2NyaXB0b3IuZW51bWVyYWJsZSxcbiAgICAgICAgICB3cml0YWJsZTogZGVzY3JpcHRvci53cml0YWJsZSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlLFxuICAgICAgICAgIHZhbHVlOiBpbml0aWFsaXplciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5pdGlhbGl6ZXIuY2FsbChyZWNlaXZlcilcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgZWxlbWVudC5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH0sXG4gICAgZGVjb3JhdGVDbGFzczogZnVuY3Rpb24gKGVsZW1lbnRzLCBkZWNvcmF0b3JzKSB7XG4gICAgICB2YXIgbmV3RWxlbWVudHMgPSBbXTtcbiAgICAgIHZhciBmaW5pc2hlcnMgPSBbXTtcbiAgICAgIHZhciBwbGFjZW1lbnRzID0ge1xuICAgICAgICBzdGF0aWM6IFtdLFxuICAgICAgICBwcm90b3R5cGU6IFtdLFxuICAgICAgICBvd246IFtdXG4gICAgICB9O1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRQbGFjZW1lbnQoZWxlbWVudCwgcGxhY2VtZW50cyk7XG4gICAgICB9LCB0aGlzKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFfaGFzRGVjb3JhdG9ycyhlbGVtZW50KSkgcmV0dXJuIG5ld0VsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgICAgIHZhciBlbGVtZW50RmluaXNoZXJzRXh0cmFzID0gdGhpcy5kZWNvcmF0ZUVsZW1lbnQoZWxlbWVudCwgcGxhY2VtZW50cyk7XG4gICAgICAgIG5ld0VsZW1lbnRzLnB1c2goZWxlbWVudEZpbmlzaGVyc0V4dHJhcy5lbGVtZW50KTtcbiAgICAgICAgbmV3RWxlbWVudHMucHVzaC5hcHBseShuZXdFbGVtZW50cywgZWxlbWVudEZpbmlzaGVyc0V4dHJhcy5leHRyYXMpO1xuICAgICAgICBmaW5pc2hlcnMucHVzaC5hcHBseShmaW5pc2hlcnMsIGVsZW1lbnRGaW5pc2hlcnNFeHRyYXMuZmluaXNoZXJzKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgICAgaWYgKCFkZWNvcmF0b3JzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZWxlbWVudHM6IG5ld0VsZW1lbnRzLFxuICAgICAgICAgIGZpbmlzaGVyczogZmluaXNoZXJzXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB2YXIgcmVzdWx0ID0gdGhpcy5kZWNvcmF0ZUNvbnN0cnVjdG9yKG5ld0VsZW1lbnRzLCBkZWNvcmF0b3JzKTtcbiAgICAgIGZpbmlzaGVycy5wdXNoLmFwcGx5KGZpbmlzaGVycywgcmVzdWx0LmZpbmlzaGVycyk7XG4gICAgICByZXN1bHQuZmluaXNoZXJzID0gZmluaXNoZXJzO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIGFkZEVsZW1lbnRQbGFjZW1lbnQ6IGZ1bmN0aW9uIChlbGVtZW50LCBwbGFjZW1lbnRzLCBzaWxlbnQpIHtcbiAgICAgIHZhciBrZXlzID0gcGxhY2VtZW50c1tlbGVtZW50LnBsYWNlbWVudF07XG4gICAgICBpZiAoIXNpbGVudCAmJiBrZXlzLmluZGV4T2YoZWxlbWVudC5rZXkpICE9PSAtMSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRHVwbGljYXRlZCBlbGVtZW50IChcIiArIGVsZW1lbnQua2V5ICsgXCIpXCIpO1xuICAgICAgfVxuICAgICAga2V5cy5wdXNoKGVsZW1lbnQua2V5KTtcbiAgICB9LFxuICAgIGRlY29yYXRlRWxlbWVudDogZnVuY3Rpb24gKGVsZW1lbnQsIHBsYWNlbWVudHMpIHtcbiAgICAgIHZhciBleHRyYXMgPSBbXTtcbiAgICAgIHZhciBmaW5pc2hlcnMgPSBbXTtcbiAgICAgIGZvciAodmFyIGRlY29yYXRvcnMgPSBlbGVtZW50LmRlY29yYXRvcnMsIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBrZXlzID0gcGxhY2VtZW50c1tlbGVtZW50LnBsYWNlbWVudF07XG4gICAgICAgIGtleXMuc3BsaWNlKGtleXMuaW5kZXhPZihlbGVtZW50LmtleSksIDEpO1xuICAgICAgICB2YXIgZWxlbWVudE9iamVjdCA9IHRoaXMuZnJvbUVsZW1lbnREZXNjcmlwdG9yKGVsZW1lbnQpO1xuICAgICAgICB2YXIgZWxlbWVudEZpbmlzaGVyRXh0cmFzID0gdGhpcy50b0VsZW1lbnRGaW5pc2hlckV4dHJhcygoMCwgZGVjb3JhdG9yc1tpXSkoZWxlbWVudE9iamVjdCkgfHwgZWxlbWVudE9iamVjdCk7XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RmluaXNoZXJFeHRyYXMuZWxlbWVudDtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50UGxhY2VtZW50KGVsZW1lbnQsIHBsYWNlbWVudHMpO1xuICAgICAgICBpZiAoZWxlbWVudEZpbmlzaGVyRXh0cmFzLmZpbmlzaGVyKSB7XG4gICAgICAgICAgZmluaXNoZXJzLnB1c2goZWxlbWVudEZpbmlzaGVyRXh0cmFzLmZpbmlzaGVyKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV3RXh0cmFzID0gZWxlbWVudEZpbmlzaGVyRXh0cmFzLmV4dHJhcztcbiAgICAgICAgaWYgKG5ld0V4dHJhcykge1xuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbmV3RXh0cmFzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEVsZW1lbnRQbGFjZW1lbnQobmV3RXh0cmFzW2pdLCBwbGFjZW1lbnRzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXh0cmFzLnB1c2guYXBwbHkoZXh0cmFzLCBuZXdFeHRyYXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICBmaW5pc2hlcnM6IGZpbmlzaGVycyxcbiAgICAgICAgZXh0cmFzOiBleHRyYXNcbiAgICAgIH07XG4gICAgfSxcbiAgICBkZWNvcmF0ZUNvbnN0cnVjdG9yOiBmdW5jdGlvbiAoZWxlbWVudHMsIGRlY29yYXRvcnMpIHtcbiAgICAgIHZhciBmaW5pc2hlcnMgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLmZyb21DbGFzc0Rlc2NyaXB0b3IoZWxlbWVudHMpO1xuICAgICAgICB2YXIgZWxlbWVudHNBbmRGaW5pc2hlciA9IHRoaXMudG9DbGFzc0Rlc2NyaXB0b3IoKDAsIGRlY29yYXRvcnNbaV0pKG9iaikgfHwgb2JqKTtcbiAgICAgICAgaWYgKGVsZW1lbnRzQW5kRmluaXNoZXIuZmluaXNoZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGZpbmlzaGVycy5wdXNoKGVsZW1lbnRzQW5kRmluaXNoZXIuZmluaXNoZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50c0FuZEZpbmlzaGVyLmVsZW1lbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBlbGVtZW50cyA9IGVsZW1lbnRzQW5kRmluaXNoZXIuZWxlbWVudHM7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBlbGVtZW50cy5sZW5ndGggLSAxOyBqKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGsgPSBqICsgMTsgayA8IGVsZW1lbnRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgIGlmIChlbGVtZW50c1tqXS5rZXkgPT09IGVsZW1lbnRzW2tdLmtleSAmJiBlbGVtZW50c1tqXS5wbGFjZW1lbnQgPT09IGVsZW1lbnRzW2tdLnBsYWNlbWVudCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEdXBsaWNhdGVkIGVsZW1lbnQgKFwiICsgZWxlbWVudHNbal0ua2V5ICsgXCIpXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbGVtZW50czogZWxlbWVudHMsXG4gICAgICAgIGZpbmlzaGVyczogZmluaXNoZXJzXG4gICAgICB9O1xuICAgIH0sXG4gICAgZnJvbUVsZW1lbnREZXNjcmlwdG9yOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgdmFyIG9iaiA9IHtcbiAgICAgICAga2luZDogZWxlbWVudC5raW5kLFxuICAgICAgICBrZXk6IGVsZW1lbnQua2V5LFxuICAgICAgICBwbGFjZW1lbnQ6IGVsZW1lbnQucGxhY2VtZW50LFxuICAgICAgICBkZXNjcmlwdG9yOiBlbGVtZW50LmRlc2NyaXB0b3JcbiAgICAgIH07XG4gICAgICB2YXIgZGVzYyA9IHtcbiAgICAgICAgdmFsdWU6IFwiRGVzY3JpcHRvclwiLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH07XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBTeW1ib2wudG9TdHJpbmdUYWcsIGRlc2MpO1xuICAgICAgaWYgKGVsZW1lbnQua2luZCA9PT0gXCJmaWVsZFwiKSBvYmouaW5pdGlhbGl6ZXIgPSBlbGVtZW50LmluaXRpYWxpemVyO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuICAgIHRvRWxlbWVudERlc2NyaXB0b3JzOiBmdW5jdGlvbiAoZWxlbWVudE9iamVjdHMpIHtcbiAgICAgIGlmIChlbGVtZW50T2JqZWN0cyA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICByZXR1cm4gX3RvQXJyYXkoZWxlbWVudE9iamVjdHMpLm1hcChmdW5jdGlvbiAoZWxlbWVudE9iamVjdCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMudG9FbGVtZW50RGVzY3JpcHRvcihlbGVtZW50T2JqZWN0KTtcbiAgICAgICAgdGhpcy5kaXNhbGxvd1Byb3BlcnR5KGVsZW1lbnRPYmplY3QsIFwiZmluaXNoZXJcIiwgXCJBbiBlbGVtZW50IGRlc2NyaXB0b3JcIik7XG4gICAgICAgIHRoaXMuZGlzYWxsb3dQcm9wZXJ0eShlbGVtZW50T2JqZWN0LCBcImV4dHJhc1wiLCBcIkFuIGVsZW1lbnQgZGVzY3JpcHRvclwiKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9LFxuICAgIHRvRWxlbWVudERlc2NyaXB0b3I6IGZ1bmN0aW9uIChlbGVtZW50T2JqZWN0KSB7XG4gICAgICB2YXIga2luZCA9IFN0cmluZyhlbGVtZW50T2JqZWN0LmtpbmQpO1xuICAgICAgaWYgKGtpbmQgIT09IFwibWV0aG9kXCIgJiYga2luZCAhPT0gXCJmaWVsZFwiKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FuIGVsZW1lbnQgZGVzY3JpcHRvclxcJ3MgLmtpbmQgcHJvcGVydHkgbXVzdCBiZSBlaXRoZXIgXCJtZXRob2RcIiBvcicgKyAnIFwiZmllbGRcIiwgYnV0IGEgZGVjb3JhdG9yIGNyZWF0ZWQgYW4gZWxlbWVudCBkZXNjcmlwdG9yIHdpdGgnICsgJyAua2luZCBcIicgKyBraW5kICsgJ1wiJyk7XG4gICAgICB9XG4gICAgICB2YXIga2V5ID0gX3RvUHJvcGVydHlLZXkoZWxlbWVudE9iamVjdC5rZXkpO1xuICAgICAgdmFyIHBsYWNlbWVudCA9IFN0cmluZyhlbGVtZW50T2JqZWN0LnBsYWNlbWVudCk7XG4gICAgICBpZiAocGxhY2VtZW50ICE9PSBcInN0YXRpY1wiICYmIHBsYWNlbWVudCAhPT0gXCJwcm90b3R5cGVcIiAmJiBwbGFjZW1lbnQgIT09IFwib3duXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQW4gZWxlbWVudCBkZXNjcmlwdG9yXFwncyAucGxhY2VtZW50IHByb3BlcnR5IG11c3QgYmUgb25lIG9mIFwic3RhdGljXCIsJyArICcgXCJwcm90b3R5cGVcIiBvciBcIm93blwiLCBidXQgYSBkZWNvcmF0b3IgY3JlYXRlZCBhbiBlbGVtZW50IGRlc2NyaXB0b3InICsgJyB3aXRoIC5wbGFjZW1lbnQgXCInICsgcGxhY2VtZW50ICsgJ1wiJyk7XG4gICAgICB9XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IGVsZW1lbnRPYmplY3QuZGVzY3JpcHRvcjtcbiAgICAgIHRoaXMuZGlzYWxsb3dQcm9wZXJ0eShlbGVtZW50T2JqZWN0LCBcImVsZW1lbnRzXCIsIFwiQW4gZWxlbWVudCBkZXNjcmlwdG9yXCIpO1xuICAgICAgdmFyIGVsZW1lbnQgPSB7XG4gICAgICAgIGtpbmQ6IGtpbmQsXG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgICAgZGVzY3JpcHRvcjogT2JqZWN0LmFzc2lnbih7fSwgZGVzY3JpcHRvcilcbiAgICAgIH07XG4gICAgICBpZiAoa2luZCAhPT0gXCJmaWVsZFwiKSB7XG4gICAgICAgIHRoaXMuZGlzYWxsb3dQcm9wZXJ0eShlbGVtZW50T2JqZWN0LCBcImluaXRpYWxpemVyXCIsIFwiQSBtZXRob2QgZGVzY3JpcHRvclwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlzYWxsb3dQcm9wZXJ0eShkZXNjcmlwdG9yLCBcImdldFwiLCBcIlRoZSBwcm9wZXJ0eSBkZXNjcmlwdG9yIG9mIGEgZmllbGQgZGVzY3JpcHRvclwiKTtcbiAgICAgICAgdGhpcy5kaXNhbGxvd1Byb3BlcnR5KGRlc2NyaXB0b3IsIFwic2V0XCIsIFwiVGhlIHByb3BlcnR5IGRlc2NyaXB0b3Igb2YgYSBmaWVsZCBkZXNjcmlwdG9yXCIpO1xuICAgICAgICB0aGlzLmRpc2FsbG93UHJvcGVydHkoZGVzY3JpcHRvciwgXCJ2YWx1ZVwiLCBcIlRoZSBwcm9wZXJ0eSBkZXNjcmlwdG9yIG9mIGEgZmllbGQgZGVzY3JpcHRvclwiKTtcbiAgICAgICAgZWxlbWVudC5pbml0aWFsaXplciA9IGVsZW1lbnRPYmplY3QuaW5pdGlhbGl6ZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9LFxuICAgIHRvRWxlbWVudEZpbmlzaGVyRXh0cmFzOiBmdW5jdGlvbiAoZWxlbWVudE9iamVjdCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLnRvRWxlbWVudERlc2NyaXB0b3IoZWxlbWVudE9iamVjdCk7XG4gICAgICB2YXIgZmluaXNoZXIgPSBfb3B0aW9uYWxDYWxsYWJsZVByb3BlcnR5KGVsZW1lbnRPYmplY3QsIFwiZmluaXNoZXJcIik7XG4gICAgICB2YXIgZXh0cmFzID0gdGhpcy50b0VsZW1lbnREZXNjcmlwdG9ycyhlbGVtZW50T2JqZWN0LmV4dHJhcyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICBmaW5pc2hlcjogZmluaXNoZXIsXG4gICAgICAgIGV4dHJhczogZXh0cmFzXG4gICAgICB9O1xuICAgIH0sXG4gICAgZnJvbUNsYXNzRGVzY3JpcHRvcjogZnVuY3Rpb24gKGVsZW1lbnRzKSB7XG4gICAgICB2YXIgb2JqID0ge1xuICAgICAgICBraW5kOiBcImNsYXNzXCIsXG4gICAgICAgIGVsZW1lbnRzOiBlbGVtZW50cy5tYXAodGhpcy5mcm9tRWxlbWVudERlc2NyaXB0b3IsIHRoaXMpXG4gICAgICB9O1xuICAgICAgdmFyIGRlc2MgPSB7XG4gICAgICAgIHZhbHVlOiBcIkRlc2NyaXB0b3JcIixcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9O1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgU3ltYm9sLnRvU3RyaW5nVGFnLCBkZXNjKTtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcbiAgICB0b0NsYXNzRGVzY3JpcHRvcjogZnVuY3Rpb24gKG9iaikge1xuICAgICAgdmFyIGtpbmQgPSBTdHJpbmcob2JqLmtpbmQpO1xuICAgICAgaWYgKGtpbmQgIT09IFwiY2xhc3NcIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBIGNsYXNzIGRlc2NyaXB0b3JcXCdzIC5raW5kIHByb3BlcnR5IG11c3QgYmUgXCJjbGFzc1wiLCBidXQgYSBkZWNvcmF0b3InICsgJyBjcmVhdGVkIGEgY2xhc3MgZGVzY3JpcHRvciB3aXRoIC5raW5kIFwiJyArIGtpbmQgKyAnXCInKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGlzYWxsb3dQcm9wZXJ0eShvYmosIFwia2V5XCIsIFwiQSBjbGFzcyBkZXNjcmlwdG9yXCIpO1xuICAgICAgdGhpcy5kaXNhbGxvd1Byb3BlcnR5KG9iaiwgXCJwbGFjZW1lbnRcIiwgXCJBIGNsYXNzIGRlc2NyaXB0b3JcIik7XG4gICAgICB0aGlzLmRpc2FsbG93UHJvcGVydHkob2JqLCBcImRlc2NyaXB0b3JcIiwgXCJBIGNsYXNzIGRlc2NyaXB0b3JcIik7XG4gICAgICB0aGlzLmRpc2FsbG93UHJvcGVydHkob2JqLCBcImluaXRpYWxpemVyXCIsIFwiQSBjbGFzcyBkZXNjcmlwdG9yXCIpO1xuICAgICAgdGhpcy5kaXNhbGxvd1Byb3BlcnR5KG9iaiwgXCJleHRyYXNcIiwgXCJBIGNsYXNzIGRlc2NyaXB0b3JcIik7XG4gICAgICB2YXIgZmluaXNoZXIgPSBfb3B0aW9uYWxDYWxsYWJsZVByb3BlcnR5KG9iaiwgXCJmaW5pc2hlclwiKTtcbiAgICAgIHZhciBlbGVtZW50cyA9IHRoaXMudG9FbGVtZW50RGVzY3JpcHRvcnMob2JqLmVsZW1lbnRzKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVsZW1lbnRzOiBlbGVtZW50cyxcbiAgICAgICAgZmluaXNoZXI6IGZpbmlzaGVyXG4gICAgICB9O1xuICAgIH0sXG4gICAgcnVuQ2xhc3NGaW5pc2hlcnM6IGZ1bmN0aW9uIChjb25zdHJ1Y3RvciwgZmluaXNoZXJzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbmlzaGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbmV3Q29uc3RydWN0b3IgPSAoMCwgZmluaXNoZXJzW2ldKShjb25zdHJ1Y3Rvcik7XG4gICAgICAgIGlmIChuZXdDb25zdHJ1Y3RvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBuZXdDb25zdHJ1Y3RvciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmluaXNoZXJzIG11c3QgcmV0dXJuIGEgY29uc3RydWN0b3IuXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IG5ld0NvbnN0cnVjdG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gICAgfSxcbiAgICBkaXNhbGxvd1Byb3BlcnR5OiBmdW5jdGlvbiAob2JqLCBuYW1lLCBvYmplY3RUeXBlKSB7XG4gICAgICBpZiAob2JqW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihvYmplY3RUeXBlICsgXCIgY2FuJ3QgaGF2ZSBhIC5cIiArIG5hbWUgKyBcIiBwcm9wZXJ0eS5cIik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICByZXR1cm4gYXBpO1xufVxuZnVuY3Rpb24gX2NyZWF0ZUVsZW1lbnREZXNjcmlwdG9yKGRlZikge1xuICB2YXIga2V5ID0gX3RvUHJvcGVydHlLZXkoZGVmLmtleSk7XG4gIHZhciBkZXNjcmlwdG9yO1xuICBpZiAoZGVmLmtpbmQgPT09IFwibWV0aG9kXCIpIHtcbiAgICBkZXNjcmlwdG9yID0ge1xuICAgICAgdmFsdWU6IGRlZi52YWx1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICB9O1xuICB9IGVsc2UgaWYgKGRlZi5raW5kID09PSBcImdldFwiKSB7XG4gICAgZGVzY3JpcHRvciA9IHtcbiAgICAgIGdldDogZGVmLnZhbHVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICB9O1xuICB9IGVsc2UgaWYgKGRlZi5raW5kID09PSBcInNldFwiKSB7XG4gICAgZGVzY3JpcHRvciA9IHtcbiAgICAgIHNldDogZGVmLnZhbHVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICB9O1xuICB9IGVsc2UgaWYgKGRlZi5raW5kID09PSBcImZpZWxkXCIpIHtcbiAgICBkZXNjcmlwdG9yID0ge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfTtcbiAgfVxuICB2YXIgZWxlbWVudCA9IHtcbiAgICBraW5kOiBkZWYua2luZCA9PT0gXCJmaWVsZFwiID8gXCJmaWVsZFwiIDogXCJtZXRob2RcIixcbiAgICBrZXk6IGtleSxcbiAgICBwbGFjZW1lbnQ6IGRlZi5zdGF0aWMgPyBcInN0YXRpY1wiIDogZGVmLmtpbmQgPT09IFwiZmllbGRcIiA/IFwib3duXCIgOiBcInByb3RvdHlwZVwiLFxuICAgIGRlc2NyaXB0b3I6IGRlc2NyaXB0b3JcbiAgfTtcbiAgaWYgKGRlZi5kZWNvcmF0b3JzKSBlbGVtZW50LmRlY29yYXRvcnMgPSBkZWYuZGVjb3JhdG9ycztcbiAgaWYgKGRlZi5raW5kID09PSBcImZpZWxkXCIpIGVsZW1lbnQuaW5pdGlhbGl6ZXIgPSBkZWYudmFsdWU7XG4gIHJldHVybiBlbGVtZW50O1xufVxuZnVuY3Rpb24gX2NvYWxlc2NlR2V0dGVyU2V0dGVyKGVsZW1lbnQsIG90aGVyKSB7XG4gIGlmIChlbGVtZW50LmRlc2NyaXB0b3IuZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBvdGhlci5kZXNjcmlwdG9yLmdldCA9IGVsZW1lbnQuZGVzY3JpcHRvci5nZXQ7XG4gIH0gZWxzZSB7XG4gICAgb3RoZXIuZGVzY3JpcHRvci5zZXQgPSBlbGVtZW50LmRlc2NyaXB0b3Iuc2V0O1xuICB9XG59XG5mdW5jdGlvbiBfY29hbGVzY2VDbGFzc0VsZW1lbnRzKGVsZW1lbnRzKSB7XG4gIHZhciBuZXdFbGVtZW50cyA9IFtdO1xuICB2YXIgaXNTYW1lRWxlbWVudCA9IGZ1bmN0aW9uIChvdGhlcikge1xuICAgIHJldHVybiBvdGhlci5raW5kID09PSBcIm1ldGhvZFwiICYmIG90aGVyLmtleSA9PT0gZWxlbWVudC5rZXkgJiYgb3RoZXIucGxhY2VtZW50ID09PSBlbGVtZW50LnBsYWNlbWVudDtcbiAgfTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBlbGVtZW50ID0gZWxlbWVudHNbaV07XG4gICAgdmFyIG90aGVyO1xuICAgIGlmIChlbGVtZW50LmtpbmQgPT09IFwibWV0aG9kXCIgJiYgKG90aGVyID0gbmV3RWxlbWVudHMuZmluZChpc1NhbWVFbGVtZW50KSkpIHtcbiAgICAgIGlmIChfaXNEYXRhRGVzY3JpcHRvcihlbGVtZW50LmRlc2NyaXB0b3IpIHx8IF9pc0RhdGFEZXNjcmlwdG9yKG90aGVyLmRlc2NyaXB0b3IpKSB7XG4gICAgICAgIGlmIChfaGFzRGVjb3JhdG9ycyhlbGVtZW50KSB8fCBfaGFzRGVjb3JhdG9ycyhvdGhlcikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJEdXBsaWNhdGVkIG1ldGhvZHMgKFwiICsgZWxlbWVudC5rZXkgKyBcIikgY2FuJ3QgYmUgZGVjb3JhdGVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBvdGhlci5kZXNjcmlwdG9yID0gZWxlbWVudC5kZXNjcmlwdG9yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKF9oYXNEZWNvcmF0b3JzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgaWYgKF9oYXNEZWNvcmF0b3JzKG90aGVyKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwiRGVjb3JhdG9ycyBjYW4ndCBiZSBwbGFjZWQgb24gZGlmZmVyZW50IGFjY2Vzc29ycyB3aXRoIGZvciBcIiArIFwidGhlIHNhbWUgcHJvcGVydHkgKFwiICsgZWxlbWVudC5rZXkgKyBcIikuXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvdGhlci5kZWNvcmF0b3JzID0gZWxlbWVudC5kZWNvcmF0b3JzO1xuICAgICAgICB9XG4gICAgICAgIF9jb2FsZXNjZUdldHRlclNldHRlcihlbGVtZW50LCBvdGhlcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0VsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdFbGVtZW50cztcbn1cbmZ1bmN0aW9uIF9oYXNEZWNvcmF0b3JzKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQuZGVjb3JhdG9ycyAmJiBlbGVtZW50LmRlY29yYXRvcnMubGVuZ3RoO1xufVxuZnVuY3Rpb24gX2lzRGF0YURlc2NyaXB0b3IoZGVzYykge1xuICByZXR1cm4gZGVzYyAhPT0gdW5kZWZpbmVkICYmICEoZGVzYy52YWx1ZSA9PT0gdW5kZWZpbmVkICYmIGRlc2Mud3JpdGFibGUgPT09IHVuZGVmaW5lZCk7XG59XG5mdW5jdGlvbiBfb3B0aW9uYWxDYWxsYWJsZVByb3BlcnR5KG9iaiwgbmFtZSkge1xuICB2YXIgdmFsdWUgPSBvYmpbbmFtZV07XG4gIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkICdcIiArIG5hbWUgKyBcIicgdG8gYmUgYSBmdW5jdGlvblwiKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlTWV0aG9kR2V0KHJlY2VpdmVyLCBwcml2YXRlU2V0LCBmbikge1xuICBpZiAoIXByaXZhdGVTZXQuaGFzKHJlY2VpdmVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xuICB9XG4gIHJldHVybiBmbjtcbn1cbmZ1bmN0aW9uIF9jaGVja1ByaXZhdGVSZWRlY2xhcmF0aW9uKG9iaiwgcHJpdmF0ZUNvbGxlY3Rpb24pIHtcbiAgaWYgKHByaXZhdGVDb2xsZWN0aW9uLmhhcyhvYmopKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBpbml0aWFsaXplIHRoZSBzYW1lIHByaXZhdGUgZWxlbWVudHMgdHdpY2Ugb24gYW4gb2JqZWN0XCIpO1xuICB9XG59XG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRJbml0U3BlYyhvYmosIHByaXZhdGVNYXAsIHZhbHVlKSB7XG4gIF9jaGVja1ByaXZhdGVSZWRlY2xhcmF0aW9uKG9iaiwgcHJpdmF0ZU1hcCk7XG4gIHByaXZhdGVNYXAuc2V0KG9iaiwgdmFsdWUpO1xufVxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZU1ldGhvZEluaXRTcGVjKG9iaiwgcHJpdmF0ZVNldCkge1xuICBfY2hlY2tQcml2YXRlUmVkZWNsYXJhdGlvbihvYmosIHByaXZhdGVTZXQpO1xuICBwcml2YXRlU2V0LmFkZChvYmopO1xufVxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZU1ldGhvZFNldCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byByZWFzc2lnbiBwcml2YXRlIG1ldGhvZFwiKTtcbn1cbmZ1bmN0aW9uIF9pZGVudGl0eSh4KSB7XG4gIHJldHVybiB4O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9BcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59Il19