window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  "3d-model": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5f96dFONrhFoosfPR7q5e94", "3d-model");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        playingIndex: 0
      },
      start: function start() {
        this.playNextAnimation();
      },
      playNextAnimation: function playNextAnimation() {
        var animation = this.getComponent(cc.Animation);
        var clips = animation.getClips();
        clips[this.playingIndex] || (this.playingIndex = 0);
        animation.play(clips[this.playingIndex].name);
        this.playingIndex++;
      }
    });
    cc._RF.pop();
  }, {} ],
  "3d-support-info": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aa6e94UfYREzbFN94D3Gupk", "3d-support-info");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        displayNode: cc.Node
      },
      start: function start() {
        if (cc.sys.browserType === cc.sys.BROWSER_TYPE_IE) {
          this.displayNode.active = false;
          this.node.active = true;
        } else {
          this.displayNode.active = true;
          this.node.active = false;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  ActionCallback: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2881e6K1edLBbgvc+6/YN7o", "ActionCallback");
    "use strict";
    cc.Class({
      extends: cc.Component,
      onLoad: function onLoad() {
        var touchEvent = this.getComponent("TouchEvent");
        var mouseEvent = this.getComponent("MouseEvent");
        var event = touchEvent || mouseEvent;
        event._callback = function() {
          this.node.runAction(cc.sequence(cc.scaleTo(.5, 2, 1), cc.scaleTo(.25, 1, 1)));
        };
      }
    });
    cc._RF.pop();
  }, {} ],
  AdaptiveSprite: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4edf1JTF/BHIKZVY3FaAqsT", "AdaptiveSprite");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        padding: 20,
        label: {
          default: null,
          type: cc.Node
        },
        backgroup: {
          default: null,
          type: cc.Node
        }
      },
      update: function update() {
        this.backgroup.width !== this.label.width && (this.backgroup.width = this.label.width + this.padding);
        this.backgroup.height !== this.label.height && (this.backgroup.height = this.label.height + this.padding);
      }
    });
    cc._RF.pop();
  }, {} ],
  AnimateCustomPropertyCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fb14cmn7KJJCo4qVcOy/GmS", "AnimateCustomPropertyCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        hp: 0,
        emissionRote: 0,
        num: 0,
        hpBar: cc.ProgressBar,
        particle: cc.ParticleSystem,
        score: cc.Label
      },
      update: function update(dt) {
        this.hpBar.progress = this.hp;
        this.particle.emissionRate = this.emissionRote;
        this.score.string = Math.ceil(this.num);
      }
    });
    cc._RF.pop();
  }, {} ],
  AnimationCallback: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3d311umYuNAM61hHscTxwkq", "AnimationCallback");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        playLabel: {
          default: null,
          type: cc.Label
        },
        pauseLabel: {
          default: null,
          type: cc.Label
        },
        stateLabel: {
          default: null,
          type: cc.Label
        },
        animation: {
          default: null,
          type: cc.Animation
        }
      },
      onEnable: function onEnable() {
        var animation = this.animation;
        animation.on("play", this.onPlay, this);
        animation.on("stop", this.onStop, this);
        animation.on("lastframe", this.onLastFrame, this);
        animation.on("finished", this.onFinished, this);
        animation.on("pause", this.onPause, this);
        animation.on("resume", this.onResume, this);
      },
      onDisable: function onDisable() {
        var animation = this.animation;
        animation.off("play", this.onPlay, this);
        animation.off("stop", this.onStop, this);
        animation.off("lastframe", this.onLastFrame, this);
        animation.off("finished", this.onFinished, this);
        animation.off("pause", this.onPause, this);
        animation.off("resume", this.onResume, this);
      },
      onPlayButtonClicked: function onPlayButtonClicked() {
        if ("play" === this.playLabel.string) {
          this.playLabel.string = "stop";
          this.animation.play("linear");
        } else {
          this.playLabel.string = "play";
          this.animation.stop("linear");
        }
      },
      onPauseButtonClicked: function onPauseButtonClicked() {
        if ("pause" === this.pauseLabel.string) {
          this.pauseLabel.string = "resume";
          this.animation.pause("linear");
        } else {
          this.pauseLabel.string = "pause";
          this.animation.resume("linear");
        }
      },
      onPlay: function onPlay() {
        cc.log("onPlay");
        this.stateLabel.string = "onPlay";
      },
      onStop: function onStop() {
        cc.log("onStop");
        this.stateLabel.string = "onStop";
        this.playLabel.string = "play";
      },
      onLastFrame: function onLastFrame() {
        cc.log("onLastFrame");
        this.stateLabel.string = "onLastFrame";
      },
      onFinished: function onFinished() {
        cc.log("onFinished");
        this.stateLabel.string = "onFinished";
      },
      onPause: function onPause() {
        cc.log("onPause");
        this.stateLabel.string = "onPause";
      },
      onResume: function onResume() {
        cc.log("onResume");
        this.stateLabel.string = "onResume";
      }
    });
    cc._RF.pop();
  }, {} ],
  AnimationEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1dc09SR4TdLU74RjGBArlm0", "AnimationEvent");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var node = cc.find("Canvas/Label");
        this._label = node.getComponent(cc.Label);
        this._animCtrl = this.node.getComponent(cc.Animation);
      },
      onNextAnimation: function onNextAnimation(step) {
        this._animCtrl.play("step_" + step);
        this._label.string = i18n.t("cases/03_gameplay/03_animation/AnimationEvent.js.1") + step + "\u4e2a\u52a8\u753b";
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  AssetLoading: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "65aa6czKHtKGZog+yjK1bc6", "AssetLoading");
    "use strict";
    var _cc$Class;
    var i18n = require("i18n");
    cc.Class((_cc$Class = {
      extends: cc.Component,
      properties: {
        showWindow: cc.Node,
        loadAnimTestPrefab: cc.Prefab,
        loadTips: cc.Label,
        loadList: {
          default: [],
          type: cc.Node
        },
        assets: []
      },
      onLoad: function onLoad() {
        this._curType = "";
        this._lastType = "";
        this._curRes = null;
        this._btnLabel = null;
        this._audioSource = null;
        this._isLoading = false;
        this._urls = {
          Audio: "test_assets/audio",
          Txt: "test_assets/text",
          Texture: "test_assets/PurpleMonster",
          Font: "test_assets/font",
          Plist: "test_assets/atom",
          SpriteFrame: "test_assets/image",
          Prefab: "test_assets/prefab",
          Animation: "test_assets/sprite-anim",
          Scene: "test_assets/scene",
          Spine: "spineboy/spineboy",
          CORS: "https://download.cocos.com/test-case/logo.png"
        };
        this._onRegisteredEvent();
      },
      onDestroy: function onDestroy() {},
      _onRegisteredEvent: function _onRegisteredEvent() {
        for (var i = 0; i < this.loadList.length; ++i) this.loadList[i].on(cc.Node.EventType.TOUCH_END, this._onClick.bind(this));
      },
      _onClick: function _onClick(event) {
        if (this._isLoading) return;
        this._onClear();
        this._curType = event.target.name.split("_")[1];
        if ("" !== this._lastType && this._curType === this._lastType) {
          this._onShowResClick(event);
          return;
        }
        this._btnLabel && (this._btnLabel.textKey = i18n.t("cases/05_scripting/07_asset_loading/AssetLoading.js.1") + this._lastType);
        this._lastType = this._curType;
        this._btnLabel = event.target.getChildByName("Label").getComponent("cc.Label");
        this.loadTips.textKey = this._curType + " Loading....";
        this._isLoading = true;
        this._load();
      },
      _load: function _load() {
        var url = this._urls[this._curType];
        var loadCallBack = this._loadCallBack.bind(this);
        switch (this._curType) {
         case "SpriteFrame":
          cc.resources.load(url, cc.SpriteFrame, loadCallBack);
          break;

         case "Spine":
          cc.resources.load(url, sp.SkeletonData, loadCallBack);
          break;

         case "Font":
          cc.resources.load(url, cc.Font, loadCallBack);
          break;

         case "Plist":
          cc.resources.load(url, cc.ParticleAsset, loadCallBack);
          break;

         case "Animation":
         case "Prefab":
         case "Texture":
         case "Txt":
         case "Audio":
          cc.resources.load(url, loadCallBack);
          break;

         case "Scene":
          cc.resources.loadScene(url, loadCallBack);
          break;

         case "CORS":
          cc.assetManager.loadRemote(url, loadCallBack);
          this.loadTips.textKey = "CORS image should report texImage2D error under WebGL and works ok under Canvas";
          break;

         default:
          cc.assetManager.loadRemote(url, loadCallBack);
        }
      },
      _loadCallBack: function _loadCallBack(err, res) {
        this._isLoading = false;
        if (err) {
          cc.log("Error url [" + err + "]");
          return;
        }
        res instanceof cc.SceneAsset || this.assets.push(res.addRef());
        this._curRes = res;
        "Audio" === this._curType ? this._btnLabel.textKey = i18n.t("cases/05_scripting/07_asset_loading/AssetLoading.js.2") : this._btnLabel.textKey = i18n.t("cases/05_scripting/07_asset_loading/AssetLoading.js.3");
        this._btnLabel.textKey += this._curType;
        this.loadTips.textKey = this._curType + " Loaded Successfully!";
      },
      _onClear: function _onClear() {
        this.showWindow.removeAllChildren(true);
        this._audioSource && this._audioSource instanceof cc.AudioSource && this._audioSource.stop();
      },
      _onShowResClick: function _onShowResClick(event) {
        if ("Scene" === this._curType) {
          cc.director.runScene(this._curRes);
          return;
        }
        this._createNode(this._curType, this._curRes);
      },
      _createNode: function _createNode(type, res) {
        this.loadTips.textKey = "";
        var node = new cc.Node("New " + type);
        node.setPosition(0, 0);
        var component = null;
        switch (this._curType) {
         case "SpriteFrame":
          component = node.addComponent(cc.Sprite);
          component.spriteFrame = res;
          break;

         case "Texture":
         case "CORS":
          component = node.addComponent(cc.Sprite);
          component.spriteFrame = new cc.SpriteFrame(res);
          break;

         case "Audio":
          component = node.addComponent(cc.AudioSource);
          component.clip = res;
          component.play();
          this._audioSource = component;
          this.loadTips.textKey = i18n.t("cases/05_scripting/07_asset_loading/AssetLoading.js.4");
          break;

         case "Txt":
          component = node.addComponent(cc.Label);
          component.lineHeight = 40;
          component.string = res;
          break;

         case "Font":
          component = node.addComponent(cc.Label);
          component.font = res;
          component.lineHeight = 40;
          component.string = "This is BitmapFont!";
          break;

         case "Plist":
          component = node.addComponent(cc.ParticleSystem);
          component.file = res;
          component.resetSystem();
          break;

         case "Prefab":
          var prefab = cc.instantiate(res);
          prefab.parent = node;
          prefab.setPosition(0, 0);
          break;

         case "Animation":
          var loadAnim = cc.instantiate(this.loadAnimTestPrefab);
          loadAnim.parent = node;
          loadAnim.setPosition(0, 0);
          var AanimCtrl = loadAnim.getComponent(cc.Animation);
          AanimCtrl.addClip(res);
          AanimCtrl.play(res.name);
          break;

         case "Spine":
          component = node.addComponent(sp.Skeleton);
          component.skeletonData = res;
          component.animation = "walk";
          node.y = -248;
        }
        this.showWindow.addChild(node);
      }
    }, _cc$Class["onDestroy"] = function onDestroy() {
      this.assets.forEach(function(x) {
        return x.decRef();
      });
      this.assets = null;
    }, _cc$Class));
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  AudioCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5696eq9jEBM7KysA0oiKxfR", "AudioCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        timeLabel: {
          default: null,
          type: cc.Label
        },
        _audioTask: null,
        _audioID: null
      },
      setAudioTask: function setAudioTask(audio) {
        this._audioTask = audio;
      },
      playAudio: function playAudio() {
        this._audioID = cc.audioEngine.play(this._audioTask, false);
      },
      stopAudio: function stopAudio() {
        cc.audioEngine.stop(this._audioID);
      },
      pauseAudio: function pauseAudio() {
        cc.audioEngine.pause(this._audioID);
      },
      resumeAudio: function resumeAudio() {
        cc.audioEngine.resume(this._audioID);
      },
      stopAllAudio: function stopAllAudio() {
        cc.audioEngine.stopAll();
      },
      pauseAllAudio: function pauseAllAudio() {
        cc.audioEngine.pauseAll();
      },
      resumeAllAudio: function resumeAllAudio() {
        cc.audioEngine.resumeAll();
      },
      currentTime: function currentTime() {
        if (!this._audioTask || null === this._audioID) return;
        var currentTime = cc.audioEngine.getCurrentTime(this._audioID).toFixed(1);
        var durationTime = cc.audioEngine.getDuration(this._audioID).toFixed(1);
        this.timeLabel.string = currentTime + " s / " + durationTime + " s";
      }
    });
    cc._RF.pop();
  }, {} ],
  AudioEngineControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "251cfXAScNHQqBfLlu2ffSn", "AudioEngineControl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        audio: {
          type: cc.AudioClip,
          default: null
        },
        label: {
          type: cc.Label,
          default: null
        }
      },
      _updateLabel: function _updateLabel() {
        this.label.string = "Instance: " + this.audioPool.length + " / " + this.maxNum;
      },
      onLoad: function onLoad() {
        this.maxNum = cc.audioEngine.getMaxAudioInstance();
        this.audioPool = [];
        this._updateLabel();
        [ "playMusic", "playEffect" ].forEach(function(name) {
          cc.audioEngine[name] || cc.warn("." + name + " is not found!");
        });
      },
      onDestroy: function onDestroy() {
        cc.audioEngine.stopAll();
      },
      removeAudio: function removeAudio(id) {
        var idx = this.audioPool.indexOf(id);
        idx > -1 && this.audioPool.splice(idx, 1);
        this._updateLabel();
      },
      play: function play() {
        if (!this.audio || this.audioPool.length === this.maxNum) return;
        var id = cc.audioEngine.play(this.audio, false, 1);
        this.audioPool.push(id);
        this._updateLabel();
        cc.audioEngine.setFinishCallback(id, this.removeAudio.bind(this, id));
      },
      stopAll: function stopAll() {
        cc.audioEngine.stopAll();
        this.audioPool = [];
        this._updateLabel();
      },
      pauseAll: function pauseAll() {
        cc.audioEngine.pauseAll();
      },
      resumeAll: function resumeAll() {
        cc.audioEngine.resumeAll();
      }
    });
    cc._RF.pop();
  }, {} ],
  AudioSourceControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "21d1aBwz85GW7Z3zNuBJcwB", "AudioSourceControl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        audioSource: {
          type: cc.AudioSource,
          default: null
        },
        label: {
          type: cc.Label,
          default: null
        }
      },
      onLoad: function onLoad() {},
      update: function update() {
        if (!this.label) return;
        var audio = this.audioSource;
        this.label.string = audio.getCurrentTime().toFixed(1) + " s / " + audio.getDuration().toFixed(1) + " s";
      },
      play: function play() {
        this.audioSource.play();
      },
      pause: function pause() {
        this.audioSource.pause();
      },
      stop: function stop() {
        this.audioSource.stop();
      },
      resume: function resume() {
        this.audioSource.resume();
      }
    });
    cc._RF.pop();
  }, {} ],
  BackToPreloadAssets: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ad9fd5HvapE3Zc5dYHrtBBi", "BackToPreloadAssets");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.onclick = function() {
        cc.director.loadScene("PreloadAssets.fire");
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  BasicEventCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "72ce1xP/UlG/rNZB/cIXQ2q", "BasicEventCtrl");
    "use strict";
    var TipsManager = require("TipsManager");
    cc.Class({
      extends: cc.Component,
      properties: {
        basicNode: cc.Node,
        preNode: cc.Node,
        childNode: cc.Node,
        tip: cc.Label
      },
      start: function start() {
        TipsManager.init();
      },
      changePosition: function changePosition() {
        this.resetNode();
        function positionChanged() {
          this.tip.string = "Position_changed successd";
        }
        this.basicNode.on(cc.Node.EventType.POSITION_CHANGED, positionChanged, this);
        this.basicNode.x -= 40;
        this.basicNode.y += 10;
        this.basicNode.off(cc.Node.EventType.POSITION_CHANGED, positionChanged, this);
      },
      changeScale: function changeScale() {
        this.resetNode();
        function scaleChanged() {
          this.tip.string = "Scale_changed successd";
        }
        this.basicNode.on(cc.Node.EventType.SCALE_CHANGED, scaleChanged, this);
        this.basicNode.scaleX += .2;
        this.basicNode.scaleY += .2;
        this.basicNode.off(cc.Node.EventType.POSITION_CHANGED, scaleChanged, this);
      },
      changeSize: function changeSize() {
        this.resetNode();
        function sizeChanged(oldSize) {
          this.tip.string = "Size_changed successd";
        }
        this.basicNode.on(cc.Node.EventType.SIZE_CHANGED, sizeChanged, this);
        this.basicNode.width += 100;
        this.basicNode.height += 100;
        this.basicNode.off(cc.Node.EventType.SIZE_CHANGED, sizeChanged, this);
      },
      changeAnchor: function changeAnchor() {
        this.resetNode();
        function anchorChanged() {
          this.tip.string = "Anchor_changed successd";
        }
        this.basicNode.on(cc.Node.EventType.ANCHOR_CHANGED, anchorChanged, this);
        this.basicNode.anchorX -= .05;
        this.basicNode.anchorY -= .1;
        this.basicNode.off(cc.Node.EventType.ANCHOR_CHANGED, anchorChanged, this);
      },
      changeColor: function changeColor() {
        this.resetNode();
        function colorChanged() {
          this.tip.string = "Color_changed successd";
        }
        this.basicNode.on(cc.Node.EventType.COLOR_CHANGED, colorChanged, this);
        this.basicNode.color = new cc.Color(100, 100, 100);
        this.basicNode.off(cc.Node.EventType.COLOR_CHANGED, colorChanged, this);
      },
      addingChild: function addingChild() {
        function childAdded(child) {
          this.tip.string = "Add_child successd\n zIndex order: " + this.getChildrenContent();
          console.log(child);
        }
        this.preNode.on(cc.Node.EventType.CHILD_ADDED, childAdded, this);
        if (2 !== this.preNode.children.length) {
          TipsManager.createTips("Only support when there is 2 stars existing");
          return;
        }
        this.preNode.addChild(this.childNode);
        this.preNode.off(cc.Node.EventType.CHILD_ADDED, childAdded, this);
      },
      removingChild: function removingChild() {
        this.resetChildNode();
        function childRemoved(child) {
          this.tip.string = "Remove_child successd\n zIndex order: " + this.getChildrenContent();
          console.log(child);
        }
        this.preNode.on(cc.Node.EventType.CHILD_REMOVED, childRemoved, this);
        if (3 !== this.preNode.children.length) {
          TipsManager.createTips("Only support when there is 3 stars existing");
          return;
        }
        this.preNode.removeChild(this.childNode);
        this.preNode.off(cc.Node.EventType.CHILD_REMOVED, childRemoved, this);
      },
      reorderChild: function reorderChild() {
        this.resetChildNode();
        function childReordered(parent) {
          this.tip.string = "Reorder_child successd\n zIndex order: " + this.getChildrenContent();
          console.log(parent);
        }
        this.preNode.on(cc.Node.EventType.CHILD_REORDER, childReordered, this);
        this.preNode.children[0].zIndex = 10;
        this.preNode.sortAllChildren();
        this.preNode.off(cc.Node.EventType.CHILD_REORDER, childReordered, this);
      },
      changeGroup: function changeGroup() {
        this.resetNode();
        function groupChanged(node) {
          this.tip.string = "Group_changed successd: " + this.basicNode.group;
          console.log(node);
        }
        this.basicNode.on(cc.Node.EventType.GROUP_CHANGED, groupChanged, this);
        this.basicNode.group = "Collider";
        this.basicNode.off(cc.Node.EventType.GROUP_CHANGED, groupChanged, this);
      },
      resetNode: function resetNode() {
        this.basicNode.x = -200;
        this.basicNode.y = 75;
        this.basicNode.scaleX = 1;
        this.basicNode.scaleY = 1;
        this.basicNode.width = 256;
        this.basicNode.height = 256;
        this.basicNode.anchorX = .5;
        this.basicNode.anchorY = .5;
        this.basicNode.color = new cc.Color(255, 255, 255);
        this.basicNode.group = "Default";
      },
      resetChildNode: function resetChildNode() {
        var children = this.preNode.children;
        for (var i = 0; i < children.length; i++) switch (children[i].name) {
         case "star1":
          children[i].zIndex = 0;
          break;

         case "star2":
          children[i].zIndex = 1;
          break;

         case "star3":
          children[i].zIndex = 2;
        }
        this.preNode.sortAllChildren();
      },
      getChildrenContent: function getChildrenContent() {
        var str = "";
        var children = this.preNode.children.sort(function(a, b) {
          return a.zIndex - b.zIndex;
        });
        var tempObj = children[0];
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          child.zIndex > tempObj.zIndex && (tempObj = child);
          str += child.name + " ";
          child.color = new cc.Color(255, 255, 255);
        }
        tempObj.color = new cc.Color(255, 0, 0);
        return str;
      }
    });
    cc._RF.pop();
  }, {
    TipsManager: "TipsManager"
  } ],
  Bullet: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "20d7dzfVhZNh4gNZzwaQgEl", "Bullet");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        speed: 100
      },
      onLoad: function onLoad() {},
      onCollisionEnter: function onCollisionEnter(other, self) {
        this.node.destroy();
      },
      update: function update(dt) {
        this.node.y += this.speed * dt;
      }
    });
    cc._RF.pop();
  }, {} ],
  ButtonTransition: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d6525ck4GdCHbg0bUMMfDYY", "ButtonTransition");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        btn: cc.Button
      },
      onInteractable: function onInteractable(event) {
        this.btn.interactable = event.isChecked;
      },
      onColorTransition: function onColorTransition(event) {
        this.btn.transition = cc.Button.Transition.COLOR;
      },
      onSpriteTransition: function onSpriteTransition(event) {
        this.btn.transition = cc.Button.Transition.SPRITE;
      },
      onScaleTransition: function onScaleTransition(event) {
        this.btn.transition = cc.Button.Transition.SCALE;
      }
    });
    cc._RF.pop();
  }, {} ],
  CameraController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fa80dEAmgNHnLqhex15JFoQ", "CameraController");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Vec3 = cc.Vec3;
    var Quat = cc.Quat;
    var CameraController = function(_super) {
      __extends(CameraController, _super);
      function CameraController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.translateDelta = 1;
        _this.rotateDelta = 5;
        _this._rotateDelta = 0;
        _this._temp_vec3 = new Vec3();
        _this._temp_quat = new Quat();
        _this._quat = new Quat();
        return _this;
      }
      CameraController.prototype.start = function() {
        this._rotateDelta = cc.math.toRadian(this.rotateDelta);
      };
      CameraController.prototype.translate = function(leftRight, backForth, dt) {
        Vec3.set(this._temp_vec3, leftRight * this.translateDelta * dt, 0, backForth * this.translateDelta * dt);
        this.node.x += this._temp_vec3.x;
        this.node.y += this._temp_vec3.y;
        this.node.z += this._temp_vec3.z;
      };
      CameraController.prototype.rotate = function(longitudinal, perpendicular, dt) {
        Quat.fromEuler(this._temp_quat, perpendicular * this.rotateDelta * dt, longitudinal * this.rotateDelta * dt, 0);
        Quat.normalize(this._temp_quat, this._temp_quat);
        this.node.getRotation(this._quat);
        this._quat.multiply(this._temp_quat);
        this.node.setRotation(this._quat);
      };
      CameraController.prototype.onPushJoystick = function(event, customEventData) {
        var dt = .2;
        switch (customEventData) {
         case "F":
          this.translate(0, -1, dt);
          break;

         case "B":
          this.translate(0, 1, dt);
          break;

         case "L":
          this.translate(-1, 0, dt);
          break;

         case "R":
          this.translate(1, 0, dt);
          break;

         case "U":
          this.rotate(0, 1, dt);
          break;

         case "D":
          this.rotate(0, -1, dt);
          break;

         case "RL":
          this.rotate(1, 0, dt);
          break;

         case "RR":
          this.rotate(-1, 0, dt);
        }
      };
      __decorate([ property ], CameraController.prototype, "translateDelta", void 0);
      __decorate([ property ], CameraController.prototype, "rotateDelta", void 0);
      CameraController = __decorate([ ccclass ], CameraController);
      return CameraController;
    }(cc.Component);
    exports.default = CameraController;
    cc._RF.pop();
  }, {} ],
  ColliderListener: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9d60fXxtXFNeI79PM6EXYuZ", "ColliderListener");
    "use strict";
    cc.Class({
      extends: cc.Component,
      onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
        this.touchingNumber = 0;
      },
      onCollisionEnter: function onCollisionEnter(other) {
        this.node.color = cc.Color.RED;
        this.touchingNumber++;
      },
      onCollisionStay: function onCollisionStay(other) {},
      onCollisionExit: function onCollisionExit() {
        this.touchingNumber--;
        0 === this.touchingNumber && (this.node.color = cc.Color.WHITE);
      }
    });
    cc._RF.pop();
  }, {} ],
  ComeBackToAssetLoad: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cb585k+cxFKjohloTN1+FuU", "ComeBackToAssetLoad");
    "use strict";
    cc.Class({
      extends: cc.Component,
      onComeBlack: function onComeBlack() {
        cc.director.loadScene("AssetLoading.fire");
      }
    });
    cc._RF.pop();
  }, {} ],
  CreateClipCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0c450SopmNKmbcQu50ror3a", "CreateClipCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        atlas: null
      },
      onLoad: function onLoad() {
        var _this = this;
        var animation = this.getComponent(cc.Animation);
        cc.resources.load("test_assets/atlas", cc.SpriteAtlas, function(err, atlas) {
          _this.atlas = atlas.addRef();
          var spriteFrames = atlas.getSpriteFrames();
          var clip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, 10);
          clip.name = "run";
          clip.wrapMode = cc.WrapMode.Loop;
          animation.addClip(clip);
          animation.play("run");
        });
      },
      onDestroy: function onDestroy() {
        this.atlas.decRef();
        this.atlas = null;
      }
    });
    cc._RF.pop();
  }, {} ],
  CurveAnimation: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "20246VSYL1F6qh0RGAPZpcH", "CurveAnimation");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        size: {
          default: null,
          type: cc.CurveRange,
          serializable: true
        },
        sheep: {
          default: null,
          type: cc.Sprite,
          serializable: true
        }
      },
      start: function start() {},
      onEnable: function onEnable() {
        this.duration = 10;
        this._time = 0;
      },
      update: function update(dt) {
        this._time += dt;
        this._time >= this.duration && (this._time = 0);
        var scale = this.size.evaluate(this._time / this.duration);
        this.sheep.node.setScale(scale, scale);
      }
    });
    cc._RF.pop();
  }, {} ],
  CustomEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5cc23aoYcxIKazRFwKWGEI7", "CustomEvent");
    "use strict";
    cc.Class({
      extends: cc.Component,
      onLoad: function onLoad() {
        var touchEvent = this.getComponent("TouchEvent");
        touchEvent._callback = function() {
          this.node.emit("CUSTOM_EVENT");
        }.bind(this);
        var addButton = cc.find("Canvas/add");
        var cancelButton = cc.find("Canvas/cancel");
        function onCustomEvent(event) {
          this.runAction(cc.sequence(cc.scaleTo(.5, 2, 1), cc.scaleTo(.25, 1, 1)));
        }
        this.node.on("CUSTOM_EVENT", onCustomEvent, addButton);
        this.node.on("CUSTOM_EVENT", onCustomEvent, cancelButton);
      }
    });
    cc._RF.pop();
  }, {} ],
  DeferredLoading: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "913f0DeXrtBvoJoIgZLDjkI", "DeferredLoading");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.start = function() {};
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  DestroySelf: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c07302m/oFJeIq2igPCJbWE", "DestroySelf");
    "use strict";
    cc.Class({
      extends: cc.Component,
      onLoad: function onLoad() {
        console.log("Pos: " + this.node.getPosition().x + ", " + this.node.getPosition().y);
        this.node.runAction(cc.sequence(cc.moveBy(2, 200, 0), cc.callFunc(function() {
          console.log("Pos: " + this.node.x + ", " + this.node.y);
          this.node.destroy();
        }, this)));
      }
    });
    cc._RF.pop();
  }, {} ],
  DeviceMotionCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "189c1ckoZZHULnR52/pnCkv", "DeviceMotionCtrl");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Component,
      properties: {
        speed: 200,
        target: cc.Node,
        btn_label: cc.Label,
        _time: 0,
        _range: cc.v2(0, 0),
        _acc: cc.v2(0, 0)
      },
      onLoad: function onLoad() {
        this._enabled = false;
        var screenSize = cc.view.getVisibleSize();
        this._range.x = screenSize.width / 2 - this.target.width / 2;
        this._range.y = screenSize.height / 2 - this.target.height / 2;
        cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
      },
      onOpenAccelerometer: function onOpenAccelerometer() {
        this._enabled = !this._enabled;
        this._enabled ? this.btn_label.textKey = i18n.t("cases/03_gameplay/01_player_control/On/DeviceMotion.fire.2") : this.btn_label.textKey = i18n.t("cases/03_gameplay/01_player_control/On/DeviceMotion.fire.1");
        if (!this._enabled) {
          this._acc.x = 0;
          this._acc.y = 0;
          this._time = 0;
        }
        cc.systemEvent.setAccelerometerEnabled(this._enabled);
      },
      onDestroy: function onDestroy() {
        cc.systemEvent.setAccelerometerEnabled(false);
        cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
      },
      onDeviceMotionEvent: function onDeviceMotionEvent(event) {
        this._acc.x = event.acc.x;
        this._acc.y = event.acc.y;
      },
      update: function update(dt) {
        var target = this.target, range = this._range;
        this._time += 5;
        target.x += this._acc.x * dt * (this.speed + this._time);
        target.x = cc.misc.clampf(target.x, -range.x, range.x);
        target.y += this._acc.y * dt * (this.speed + this._time);
        target.y = cc.misc.clampf(target.y, -range.y, range.y);
        (target.x <= -range.x || target.x >= range.x || target.y <= -range.y || target.y >= range.y) && (this._time = 0);
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  DownloaderCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "354a9KeL3pPRKzLyRBzHqyl", "DownloaderCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        label: cc.Label,
        sprite: cc.Sprite,
        imgUrl: "https://download.cocos.com/test-case/logo.png",
        txtUrl: "https://download.cocos.com/test-case/LICENSE.md",
        tempImgUrl: "https://www.cocos.com/wp-content/uploads/2018/03/%E9%BB%98%E8%AE%A4%E6%A0%87%E9%A2%98_%E5%85%AC%E4%BC%97%E5%8F%B7%E5%BA%95%E9%83%A8%E4%BA%8C%E7%BB%B4%E7%A0%81_2018.03.08.png",
        audioUrl: "https://download.cocos.com/test-case/ss.mp3",
        _downloader: null,
        _imgTask: null,
        _txtTask: null,
        _audioTask: null,
        _storagePath: "",
        _inited: false,
        _downloading: false
      },
      onLoad: function onLoad() {
        true;
        this.label.string = "Downloader is a NATIVE ONLY feature.";
        return;
      },
      onSucceed: function onSucceed(task) {
        var _this = this;
        -1 !== this._audioID && cc.audioEngine.stop(this._audioID);
        switch (task.requestURL) {
         case this.imgUrl:
          cc.assetManager.loadRemote(task.storagePath, function(err, tex) {
            _this.sprite.spriteFrame = new cc.SpriteFrame(tex);
            _this.sprite.node.active = true;
            _this.label.node.active = false;
          });
          break;

         case this.txtUrl:
          var content = jsb.fileUtils.getStringFromFile(task.storagePath);
          this.sprite.node.active = false;
          this.label.node.active = true;
          this.label.string = content.substr(0, 350);
          break;

         case this.audioUrl:
          this.sprite.node.active = false;
          this.label.node.active = true;
          this.label.string = "Audio Download Complete.";
          cc.assetManager.loadRemote(task.storagePath, function(err, clip) {
            _this._audioID = cc.audioEngine.play(clip);
          });
        }
        this._downloading = false;
      },
      onProgress: function onProgress(task, bytesReceived, totalBytesReceived, totalBytesExpected) {},
      onError: function onError(task, errorCode, errorCodeInternal, errorStr) {
        this._downloading = false;
        this.sprite.node.active = false;
        this.label.node.active = true;
        this.label.string = "Failed to download file (" + task.requestURL + "): " + errorStr + "(" + errorCode + ")";
      },
      downloadImg: function downloadImg() {
        if (!this.imgUrl || !this._inited || this._downloading) return;
        this.sprite.node.active = false;
        this.label.node.active = true;
        this.label.string = "Downloading image";
        this._imgTask = this._downloader.createDownloadFileTask(this.imgUrl, this._storagePath + "download1.png");
        this._downloading = true;
      },
      loadImg: function loadImg() {
        var _this2 = this;
        if (!this.tempImgUrl || !this._inited || this._downloading) return;
        this._downloading = true;
        this.label.string = "Downloading image (mem)";
        cc.assetManager.loadRemote(this.tempImgUrl, function(error, tex) {
          _this2._downloading = false;
          if (error) console.log("Load remote image failed: " + error); else {
            _this2.sprite.spriteFrame = new cc.SpriteFrame(tex);
            _this2.sprite.node.active = true;
            _this2.label.node.active = false;
            cc.audioEngine.stop(_this2._audioID);
          }
        });
      },
      downloadTxt: function downloadTxt() {
        if (!this.txtUrl || !this._inited || this._downloading) return;
        this.label.node.active = true;
        this.sprite.node.active = false;
        this.label.string = "Downloading Text";
        this._downloading = true;
        this._txtTask = this._downloader.createDownloadFileTask(this.txtUrl, this._storagePath + "imagine.txt");
      },
      downloadAudio: function downloadAudio() {
        if (!this.audioUrl || !this._inited || this._downloading) return;
        this.sprite.node.active = false;
        this.label.node.active = true;
        this.label.string = "Downloading Audio";
        -1 !== this._audioID && cc.audioEngine.stop(this._audioID);
        this._downloading = true;
        this._audioTask = this._downloader.createDownloadFileTask(this.audioUrl, this._storagePath + "audioTest.mp3");
      },
      onDisable: function onDisable() {
        cc.audioEngine.stop(this._audioID);
      }
    });
    cc._RF.pop();
  }, {} ],
  DragonBonesAttach: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dd42bvM/xJDHKcFipNcxQZJ", "DragonBonesAttach");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        skeleton: {
          type: dragonBones.ArmatureDisplay,
          default: null
        },
        targetPrefab: {
          type: cc.Prefab,
          default: null
        },
        modeLabel: {
          type: cc.Label,
          default: null
        },
        redBoneName: "",
        greenBoneName: "",
        blueBoneName: ""
      },
      generateAllNodes: function generateAllNodes() {
        var attachUtil = this.skeleton.attachUtil;
        attachUtil.generateAllAttachedNodes();
        var boneNodes = attachUtil.getAttachedNodes(this.redBoneName);
        var boneNode = boneNodes[0];
        if (boneNode) {
          var targetNode = cc.instantiate(this.targetPrefab);
          targetNode.color = cc.color(255, 0, 0);
          boneNode.addChild(targetNode);
        }
        boneNodes = attachUtil.getAttachedNodes(this.blueBoneName);
        boneNode = boneNodes[0];
        if (boneNode) {
          var _targetNode = cc.instantiate(this.targetPrefab);
          _targetNode.color = cc.color(0, 0, 255);
          boneNode.addChild(_targetNode);
        }
      },
      destroyUnusual: function destroyUnusual() {
        var attachUtil = this.skeleton.attachUtil;
        var boneNodes = attachUtil.getAttachedNodes("root");
        var boneNode = boneNodes[0];
        boneNode && boneNode.destroy();
      },
      destroyAllNodes: function destroyAllNodes() {
        var attachUtil = this.skeleton.attachUtil;
        attachUtil.destroyAllAttachedNodes();
      },
      generateSomeNodes: function generateSomeNodes() {
        var attachUtil = this.skeleton.attachUtil;
        var boneNodes = attachUtil.generateAttachedNodes(this.greenBoneName);
        var boneNode = boneNodes[0];
        if (boneNode) {
          var targetNode = cc.instantiate(this.targetPrefab);
          targetNode.color = cc.color(0, 255, 0);
          boneNode.addChild(targetNode);
        }
      },
      destroySomeNodes: function destroySomeNodes() {
        var attachUtil = this.skeleton.attachUtil;
        attachUtil.destroyAttachedNodes(this.greenBoneName);
      },
      changeMode: function changeMode() {
        var isCached = this.skeleton.isAnimationCached();
        if (isCached) {
          this.skeleton.setAnimationCacheMode(dragonBones.ArmatureDisplay.AnimationCacheMode.REALTIME);
          this.modeLabel.string = "cache";
        } else {
          this.skeleton.setAnimationCacheMode(dragonBones.ArmatureDisplay.AnimationCacheMode.SHARED_CACHE);
          this.modeLabel.string = "realtime";
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  DragonBonesCollider: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bc72dk4AitNwKGh/9zb4UjM", "DragonBonesCollider");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {
        this.collisionManager = cc.director.getCollisionManager();
        this.collisionManager.enabled = true;
        this.collisionManager.enabledDebugDraw = false;
        cc.director.once(cc.Director.EVENT_AFTER_DRAW, function() {
          this.collisionManager.enabledDebugDraw = true;
        }.bind(this));
        this.stayCount = 0;
      },
      onDestroy: function onDestroy() {
        this.collisionManager.enabledDebugDraw = false;
      },
      onCollisionEnter: function onCollisionEnter(other, self) {
        this.stayCount++;
      },
      onCollisionExit: function onCollisionExit(other, self) {
        this.stayCount--;
      },
      update: function update() {
        this.stayCount > 0 ? this.node.color = cc.color(0, 200, 200) : this.node.color = cc.color(255, 255, 255);
      }
    });
    cc._RF.pop();
  }, {} ],
  DragonBonesCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "51a99xQI4JAXqBjenKXSIjl", "DragonBonesCtrl");
    "use strict";
    if (!cc.runtime) {
      var NORMAL_ANIMATION_GROUP = "normal";
      var AIM_ANIMATION_GROUP = "aim";
      var ATTACK_ANIMATION_GROUP = "attack";
      var JUMP_SPEED = -20;
      var NORMALIZE_MOVE_SPEED = 3.6;
      var MAX_MOVE_SPEED_FRONT = 1.4 * NORMALIZE_MOVE_SPEED;
      var MAX_MOVE_SPEED_BACK = 1 * NORMALIZE_MOVE_SPEED;
      var WEAPON_R_LIST = [ "weapon_1502b_r", "weapon_1005", "weapon_1005b", "weapon_1005c", "weapon_1005d", "weapon_1005e" ];
      var WEAPON_L_LIST = [ "weapon_1502b_l", "weapon_1005", "weapon_1005b", "weapon_1005c", "weapon_1005d" ];
      var SKINS = [ "mecha_1502b", "skin_a", "skin_b", "skin_c" ];
      var GROUND = -200;
      var G = -.6;
      cc.Class({
        extends: cc.Component,
        editor: {
          requireComponent: dragonBones.ArmatureDisplay
        },
        properties: {
          touchHandler: {
            default: null,
            type: cc.Node
          },
          upButton: {
            default: null,
            type: cc.Node
          },
          downButton: {
            default: null,
            type: cc.Node
          },
          leftButton: {
            default: null,
            type: cc.Node
          },
          rightButton: {
            default: null,
            type: cc.Node
          },
          weaponArmature: {
            default: null,
            type: dragonBones.ArmatureDisplay
          },
          skinArmature: {
            default: null,
            type: dragonBones.ArmatureDisplay
          },
          _bullets: [],
          _left: false,
          _right: false,
          _isJumpingA: false,
          _isJumpingB: false,
          _isSquating: false,
          _isAttackingA: false,
          _isAttackingB: false,
          _weaponRIndex: 0,
          _weaponLIndex: 0,
          _skinIndex: 0,
          _faceDir: 1,
          _aimDir: 0,
          _moveDir: 0,
          _aimRadian: 0,
          _speedX: 0,
          _speedY: 0,
          _armature: null,
          _armatureDisplay: null,
          _weaponR: null,
          _weaponL: null,
          _aimState: null,
          _walkState: null,
          _attackState: null,
          _target: cc.v2(0, 0)
        },
        onLoad: function onLoad() {
          var _this = this;
          this._armatureDisplay = this.getComponent(dragonBones.ArmatureDisplay);
          this._armature = this._armatureDisplay.armature();
          this._armatureDisplay.addEventListener(dragonBones.EventObject.FADE_IN_COMPLETE, this._animationEventHandler, this);
          this._armatureDisplay.addEventListener(dragonBones.EventObject.FADE_OUT_COMPLETE, this._animationEventHandler, this);
          this._armatureDisplay.addEventListener(dragonBones.EventObject.COMPLETE, this._animationEventHandler, this);
          this._weaponR = this._armature.getSlot("weapon_r").childArmature;
          this._weaponL = this._armature.getSlot("weapon_l").childArmature;
          this._weaponR.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);
          this._weaponL.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);
          for (var i = 1; i < SKINS.length; i++) this.skinArmature.armatureName = SKINS[i];
          for (var _i = 1; _i < WEAPON_R_LIST.length; _i++) this.weaponArmature.armatureName = WEAPON_R_LIST[_i];
          this._updateAnimation();
          if (this.touchHandler) {
            this.touchHandler.on(cc.Node.EventType.TOUCH_START, function(event) {
              _this._mouseDown_ = true;
              var touches = event.getTouches();
              var touchLoc = touches[0].getLocation();
              _this.aim(touchLoc.x, touchLoc.y);
              _this.attack(true);
            }, this);
            this.touchHandler.on(cc.Node.EventType.TOUCH_END, function(event) {
              _this._mouseDown_ = false;
              _this.attack(false);
            }, this);
            this.touchHandler.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
              var touches = event.getTouches();
              var touchLoc = touches[0].getLocation();
              _this.aim(touchLoc.x, touchLoc.y);
            }, this);
          }
          this.upButton && this.upButton.on(cc.Node.EventType.TOUCH_START, function(event) {
            _this.jump();
          }, this);
          if (this.downButton) {
            this.downButton.on(cc.Node.EventType.TOUCH_START, function(event) {
              _this.squat(true);
            }, this);
            this.downButton.on(cc.Node.EventType.TOUCH_END, function(event) {
              _this.squat(false);
            }, this);
            this.downButton.on(cc.Node.EventType.TOUCH_CANCEL, function(event) {
              _this.squat(false);
            }, this);
          }
          if (this.leftButton) {
            this.leftButton.on(cc.Node.EventType.TOUCH_START, function(event) {
              _this._left = true;
              _this._updateMove(-1);
            }, this);
            this.leftButton.on(cc.Node.EventType.TOUCH_END, function(event) {
              _this._left = false;
              _this._updateMove(-1);
            }, this);
            this.leftButton.on(cc.Node.EventType.TOUCH_CANCEL, function(event) {
              _this._left = false;
              _this._updateMove(-1);
            }, this);
          }
          if (this.rightButton) {
            this.rightButton.on(cc.Node.EventType.TOUCH_START, function(event) {
              _this._right = true;
              _this._updateMove(1);
            }, this);
            this.rightButton.on(cc.Node.EventType.TOUCH_END, function(event) {
              _this._right = false;
              _this._updateMove(1);
            }, this);
            this.rightButton.on(cc.Node.EventType.TOUCH_CANCEL, function(event) {
              _this._right = false;
              _this._updateMove(1);
            }, this);
          }
          cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function(event) {
            this._keyHandler(event.keyCode, true);
          }, this);
          cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function(event) {
            this._keyHandler(event.keyCode, false);
          }, this);
        },
        _keyHandler: function _keyHandler(keyCode, isDown) {
          switch (keyCode) {
           case cc.macro.KEY.a:
           case cc.macro.KEY.left:
            this._left = isDown;
            this._updateMove(-1);
            break;

           case cc.macro.KEY.d:
           case cc.macro.KEY.right:
            this._right = isDown;
            this._updateMove(1);
            break;

           case cc.macro.KEY.w:
           case cc.macro.KEY.up:
            isDown && this.jump();
            break;

           case cc.macro.KEY.s:
           case cc.macro.KEY.down:
            this.squat(isDown);
            break;

           case cc.macro.KEY.q:
            isDown && this.switchWeaponR();
            break;

           case cc.macro.KEY.e:
            isDown && this.switchWeaponL();
            break;

           case cc.macro.KEY.space:
            if (isDown) {
              this.switchWeaponR();
              this.switchWeaponL();
            }
            break;

           default:
            return;
          }
        },
        _updateMove: function _updateMove(dir) {
          this._left && this._right ? this.move(dir) : this._left ? this.move(-1) : this._right ? this.move(1) : this.move(0);
        },
        move: function move(dir) {
          if (this._moveDir === dir) return;
          this._moveDir = dir;
          this._updateAnimation();
        },
        jump: function jump() {
          if (this._isJumpingA) return;
          this._isJumpingA = true;
          this._armature.animation.fadeIn("jump_1", -1, -1, 0, NORMAL_ANIMATION_GROUP);
          this._walkState = null;
        },
        squat: function squat(isSquating) {
          if (this._isSquating === isSquating) return;
          this._isSquating = isSquating;
          this._updateAnimation();
        },
        attack: function attack(isAttacking) {
          if (this._isAttackingA == isAttacking) return;
          this._isAttackingA = isAttacking;
        },
        switchWeaponL: function switchWeaponL() {
          this._weaponL.removeEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);
          this._weaponLIndex++;
          this._weaponLIndex >= WEAPON_L_LIST.length && (this._weaponLIndex = 0);
          var newWeaponName = WEAPON_L_LIST[this._weaponLIndex];
          var factory = dragonBones.CCFactory.getInstance();
          this._weaponL = factory.buildArmature(newWeaponName);
          this._armature.getSlot("weapon_l").childArmature = this._weaponL;
          this._weaponL.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);
        },
        switchWeaponR: function switchWeaponR() {
          this._weaponR.removeEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);
          this._weaponRIndex++;
          this._weaponRIndex >= WEAPON_R_LIST.length && (this._weaponRIndex = 0);
          var newWeaponName = WEAPON_R_LIST[this._weaponRIndex];
          var factory = dragonBones.CCFactory.getInstance();
          this._weaponR = factory.buildArmature(newWeaponName);
          this._armature.getSlot("weapon_r").childArmature = this._weaponR;
          this._weaponR.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);
        },
        switchSkin: function switchSkin() {
          this._skinIndex++;
          this._skinIndex >= SKINS.length && (this._skinIndex = 0);
          var skinName = SKINS[this._skinIndex];
          var factory = dragonBones.CCFactory.getInstance();
          var skinData = factory.getArmatureData(skinName).defaultSkin;
          factory.replaceSkin(this._armatureDisplay.armature(), skinData, false, [ "weapon_l", "weapon_r" ]);
        },
        aim: function aim(x, y) {
          0 === this._aimDir && (this._aimDir = 10);
          this._target = this.node.parent.convertToNodeSpaceAR(cc.v2(x, y));
        },
        update: function update(dt) {
          this._updatePosition();
          this._updateAim();
          this._updateAttack();
          this._enterFrameHandler(dt);
        },
        onDisable: function onDisable() {
          for (var i = this._bullets.length - 1; i >= 0; i--) {
            var bullet = this._bullets[i];
            bullet.enabled = false;
          }
          this._bullets = [];
        },
        addBullet: function addBullet(bullet) {
          this._bullets.push(bullet);
        },
        _enterFrameHandler: function _enterFrameHandler(dt) {
          for (var i = this._bullets.length - 1; i >= 0; i--) {
            var bullet = this._bullets[i];
            bullet.update() && this._bullets.splice(i, 1);
          }
        },
        _animationEventHandler: function _animationEventHandler(event) {
          if (event.type === dragonBones.EventObject.FADE_IN_COMPLETE) if ("jump_1" === event.animationState.name) {
            this._isJumpingB = true;
            this._speedY = -JUMP_SPEED;
            0 != this._moveDir && (this._moveDir * this._faceDir > 0 ? this._speedX = MAX_MOVE_SPEED_FRONT * this._faceDir : this._speedX = -MAX_MOVE_SPEED_BACK * this._faceDir);
            this._armature.animation.fadeIn("jump_2", -1, -1, 0, NORMAL_ANIMATION_GROUP).resetToPose = false;
          } else "jump_4" === event.animationState.name && this._updateAnimation(); else if (event.type === dragonBones.EventObject.FADE_OUT_COMPLETE) {
            if ("attack_01" === event.animationState.name) {
              this._isAttackingB = false;
              this._attackState = null;
            }
          } else if (event.type === dragonBones.EventObject.COMPLETE && "jump_4" === event.animationState.name) {
            this._isJumpingA = false;
            this._isJumpingB = false;
            this._updateAnimation();
          }
        },
        _frameEventHandler: function _frameEventHandler(event) {
          if ("fire" === event.name) {
            var localPoint = cc.v2(event.bone.global.x, event.bone.global.y);
            var display = event.armature.display;
            var globalPoint = display.node.convertToWorldSpace(localPoint);
            this._fire(globalPoint);
          }
        },
        _fire: function _fire(firePoint) {
          firePoint.x += 2 * Math.random() - 1;
          firePoint.y += 2 * Math.random() - 1;
          var armature = this._armatureDisplay.buildArmature("bullet_01");
          var effect = this._armatureDisplay.buildArmature("fire_effect_01");
          var radian = this._faceDir < 0 ? Math.PI - this._aimRadian : this._aimRadian;
          var bullet = new DragonBullet();
          bullet.init(this.node.parent, armature, effect, radian + .02 * Math.random() - .01, 40, firePoint);
          this.addBullet(bullet);
        },
        _updateAnimation: function _updateAnimation() {
          if (this._isJumpingA) return;
          if (this._isSquating) {
            this._speedX = 0;
            this._armature.animation.fadeIn("squat", -1, -1, 0, NORMAL_ANIMATION_GROUP).resetToPose = false;
            this._walkState = null;
            return;
          }
          if (0 === this._moveDir) {
            this._speedX = 0;
            this._armature.animation.fadeIn("idle", -1, -1, 0, NORMAL_ANIMATION_GROUP).resetToPose = false;
            this._walkState = null;
          } else {
            if (!this._walkState) {
              this._walkState = this._armature.animation.fadeIn("walk", -1, -1, 0, NORMAL_ANIMATION_GROUP);
              this._walkState.resetToPose = false;
            }
            this._moveDir * this._faceDir > 0 ? this._walkState.timeScale = MAX_MOVE_SPEED_FRONT / NORMALIZE_MOVE_SPEED : this._walkState.timeScale = -MAX_MOVE_SPEED_BACK / NORMALIZE_MOVE_SPEED;
            this._moveDir * this._faceDir > 0 ? this._speedX = MAX_MOVE_SPEED_FRONT * this._faceDir : this._speedX = -MAX_MOVE_SPEED_BACK * this._faceDir;
          }
        },
        _updatePosition: function _updatePosition() {
          if (0 !== this._speedX) {
            this.node.x += this._speedX;
            var minX = -cc.visibleRect.width / 2;
            var maxX = cc.visibleRect.width / 2;
            this.node.x < minX ? this.node.x = minX : this.node.x > maxX && (this.node.x = maxX);
          }
          if (0 != this._speedY) {
            this._speedY > 5 && this._speedY + G <= 5 && (this._armature.animation.fadeIn("jump_3", -1, -1, 0, NORMAL_ANIMATION_GROUP).resetToPose = false);
            this._speedY += G;
            this.node.y += this._speedY;
            if (this.node.y < GROUND) {
              this.node.y = GROUND;
              this._speedY = 0;
              this._armature.animation.fadeIn("jump_4", -1, -1, 0, NORMAL_ANIMATION_GROUP).resetToPose = false;
            }
          }
        },
        _updateAim: function _updateAim() {
          if (!this._mouseDown_) return;
          if (0 === this._aimDir) return;
          this._faceDir = this._target.x > this.node.x ? 1 : -1;
          if (this.node.scaleX * this._faceDir < 0) {
            this.node.scaleX *= -1;
            this._moveDir && this._updateAnimation();
          }
          var aimOffsetY = this._armature.getBone("chest").global.y * this.node.scaleY;
          if (this._faceDir > 0) this._aimRadian = Math.atan2(this._target.y - this.node.y - aimOffsetY, this._target.x - this.node.x); else {
            this._aimRadian = Math.PI - Math.atan2(this._target.y - this.node.y - aimOffsetY, this._target.x - this.node.x);
            this._aimRadian > Math.PI && (this._aimRadian -= 2 * Math.PI);
          }
          var aimDir = 0;
          aimDir = this._aimRadian > 0 ? 1 : -1;
          if (this._aimDir != aimDir) {
            this._aimDir = aimDir;
            this._aimDir >= 0 ? this._aimState = this._armature.animation.fadeIn("aim_up", -1, -1, 0, AIM_ANIMATION_GROUP) : this._aimState = this._armature.animation.fadeIn("aim_down", -1, -1, 0, AIM_ANIMATION_GROUP);
            this._aimState.resetToPose = false;
          }
          this._aimState.weight = Math.abs(this._aimRadian / Math.PI * 2);
          this._armature.invalidUpdate();
        },
        _updateAttack: function _updateAttack() {
          if (!this._isAttackingA || this._isAttackingB) return;
          this._isAttackingB = true;
          this._attackState = this._armature.animation.fadeIn("attack_01", -1, -1, 0, ATTACK_ANIMATION_GROUP, dragonBones.AnimationFadeOutMode.SameGroup);
          this._attackState.resetToPose = false;
          this._attackState.autoFadeOutTime = this._attackState.fadeTotalTime;
        }
      });
      var DragonBullet = cc.Class({
        name: "DragonBullet",
        _speedX: 0,
        _speedY: 0,
        _armature: null,
        _armatureDisplay: null,
        _effect: null,
        init: function init(parentNode, armature, effect, radian, speed, position) {
          this._speedX = Math.cos(radian) * speed;
          this._speedY = Math.sin(radian) * speed;
          var thePos = parentNode.convertToNodeSpaceAR(position);
          armature.playAnimation("idle");
          var armatureNode = armature.node;
          armatureNode.setPosition(thePos);
          armatureNode.angle = radian * cc.macro.DEG;
          this._armature = armature;
          if (effect) {
            this._effect = effect;
            var effectDisplay = this._effect.node;
            effectDisplay.angle = radian * cc.macro.DEG;
            effectDisplay.setPosition(thePos);
            effectDisplay.scaleX = 1 + 1 * Math.random();
            effectDisplay.scaleY = 1 + .5 * Math.random();
            Math.random() < .5 && (effectDisplay.scaleY *= -1);
            this._effect.playAnimation("idle");
            parentNode.addChild(effectDisplay);
          }
          parentNode.addChild(armatureNode);
        },
        update: function update() {
          var armatureNode = this._armature.node;
          armatureNode.x += this._speedX;
          armatureNode.y += this._speedY;
          var worldPos = armatureNode.parent.convertToWorldSpaceAR(armatureNode.getPosition());
          if (worldPos.x < -100 || worldPos.x >= cc.visibleRect.width + 100 || worldPos.y < -100 || worldPos.y >= cc.visibleRect.height + 100) {
            this.doClean();
            return true;
          }
          return false;
        },
        onDisable: function onDisable() {
          this.doClean();
        },
        doClean: function doClean() {
          this._armature.node.removeFromParent();
          this._effect && this._effect.node.removeFromParent();
        }
      });
    }
    cc._RF.pop();
  }, {} ],
  DragonBonesMode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e8dc46nxuNKebKNWx98iFc4", "DragonBonesMode");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        grayMaterial: cc.Material,
        normalMaterial: cc.Material,
        db0: dragonBones.ArmatureDisplay,
        db1: dragonBones.ArmatureDisplay,
        db2: dragonBones.ArmatureDisplay,
        batchLabel: cc.Label,
        cacheLabel: cc.Label,
        matLabel: cc.Label
      },
      onGray: function onGray() {
        this.isGray = !this.isGray;
        var label = "gray";
        this.isGray && (label = "normal");
        this.matLabel.string = label;
        var material = this.grayMaterial;
        this.isGray || (material = this.normalMaterial);
        this.db0.setMaterial(0, material);
        this.db0.markForRender(true);
        this.db1.setMaterial(0, material);
        this.db1.markForRender(true);
        this.db2.setMaterial(0, material);
        this.db2.markForRender(true);
      },
      onBatch: function onBatch() {
        this.isBatch = !this.isBatch;
        var label = "batch";
        this.isBatch && (label = "no batch");
        this.batchLabel.string = label;
        this.db0.enableBatch = this.isBatch;
        this.db1.enableBatch = this.isBatch;
        this.db2.enableBatch = this.isBatch;
      },
      onCache: function onCache() {
        this.isCache = !this.isCache;
        var label = "cache";
        this.isCache && (label = "no cache");
        this.cacheLabel.string = label;
        var mode = dragonBones.ArmatureDisplay.AnimationCacheMode.SHARED_CACHE;
        this.isCache || (mode = dragonBones.ArmatureDisplay.AnimationCacheMode.REALTIME);
        this.db0.setAnimationCacheMode(mode);
        this.db1.setAnimationCacheMode(mode);
        this.db2.setAnimationCacheMode(mode);
      }
    });
    cc._RF.pop();
  }, {} ],
  EditBoxEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5984fyb0ONArqT4eV/OjCgP", "EditBoxEvent");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        editBox: cc.EditBox,
        eventDisplay: cc.Label,
        _isEditingReturn: false
      },
      editingDidBegan: function editingDidBegan(event) {
        this.eventDisplay.string = "editing did began";
      },
      textChanged: function textChanged(event) {
        this.eventDisplay.string = "text changed: " + event;
      },
      editingDidEnded: function editingDidEnded(event) {
        if (this._isEditingReturn) {
          this.eventDisplay.string = "editing returned and ended";
          this._isEditingReturn = false;
        } else this.eventDisplay.string = "editing did ended";
      },
      editingReturn: function editingReturn(event) {
        this._isEditingReturn = true;
      }
    });
    cc._RF.pop();
  }, {} ],
  EditboxCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dd654DFPoRNVKRWOuQdLiEE", "EditboxCtrl");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Component,
      properties: {
        singleLineText: {
          default: null,
          type: cc.EditBox
        },
        singleLinePassword: {
          default: null,
          type: cc.EditBox
        },
        multiLineText: {
          default: null,
          type: cc.EditBox
        },
        showEditorBoxLabel: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {},
      singleLineEditBoxDidBeginEditing: function singleLineEditBoxDidBeginEditing(sender) {
        cc.log(sender.node.name + " single line editBoxDidBeginEditing");
      },
      singleLineEditBoxDidChanged: function singleLineEditBoxDidChanged(text, sender) {
        cc.log(sender.node.name + " single line editBoxDidChanged: " + text);
      },
      singleLineEditBoxDidEndEditing: function singleLineEditBoxDidEndEditing(sender) {
        cc.log(sender.node.name + " single line editBoxDidEndEditing: " + this.singleLineText.string);
      },
      singleLinePasswordEditBoxDidBeginEditing: function singleLinePasswordEditBoxDidBeginEditing(sender) {
        cc.log(sender.node.name + " single line password editBoxDidBeginEditing");
      },
      singleLinePasswordEditBoxDidChanged: function singleLinePasswordEditBoxDidChanged(text, sender) {
        cc.log(sender.node.name + " single line password editBoxDidChanged: " + text);
      },
      singleLinePasswordEditBoxDidEndEditing: function singleLinePasswordEditBoxDidEndEditing(sender) {
        cc.log(sender.node.name + " single line password editBoxDidEndEditing: " + this.singleLinePassword.string);
      },
      multiLinePasswordEditBoxDidBeginEditing: function multiLinePasswordEditBoxDidBeginEditing(sender) {
        cc.log(sender.node.name + " multi line editBoxDidBeginEditing");
      },
      multiLinePasswordEditBoxDidChanged: function multiLinePasswordEditBoxDidChanged(text, sender) {
        cc.log(sender.node.name + " multi line editBoxDidChanged: " + text);
      },
      multiLinePasswordEditBoxDidEndEditing: function multiLinePasswordEditBoxDidEndEditing(sender) {
        cc.log(sender.node.name + " multi line editBoxDidEndEditing: " + this.multiLineText.string);
      },
      buttonClicked: function buttonClicked() {
        cc.log("button Clicked!");
        "" !== this.singleLineText.string ? this.showEditorBoxLabel.string = i18n.t("cases/02_ui/07_editBox/editbox.js.1") + this.singleLineText.string : this.showEditorBoxLabel.string = "";
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  Helpers: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c8640M3ozRErrV/Go3uTknt", "Helpers");
    "use strict";
    false;
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    module.exports = {
      getRandomInt: getRandomInt
    };
    cc._RF.pop();
  }, {} ],
  HeroControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "339d2dg1QpEKKxBJBzHiDJ0", "HeroControl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        speed: cc.v2(0, 0),
        maxSpeed: cc.v2(2e3, 2e3),
        gravity: -1e3,
        drag: 1e3,
        direction: 0,
        jumpSpeed: 300,
        _lastSpeedY: 0
      },
      onLoad: function onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPressed, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyReleased, this);
        this.collisionX = 0;
        this.collisionY = 0;
        this.jumping = true;
        this.prePosition = cc.v2();
        this.preStep = cc.v2();
        this.touchingNumber = 0;
      },
      onEnable: function onEnable() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
      },
      onDisable: function onDisable() {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
      },
      onKeyPressed: function onKeyPressed(event) {
        var keyCode = event.keyCode;
        switch (keyCode) {
         case cc.macro.KEY.a:
         case cc.macro.KEY.left:
          this.direction = -1;
          break;

         case cc.macro.KEY.d:
         case cc.macro.KEY.right:
          this.direction = 1;
          break;

         case cc.macro.KEY.w:
         case cc.macro.KEY.up:
          if (!this.jumping) {
            this.jumping = true;
            this.speed.y = this.jumpSpeed > this.maxSpeed.y ? this.maxSpeed.y : this.jumpSpeed;
            this._lastSpeedY = this.jumpSpeed > this.maxSpeed.y ? this.maxSpeed.y : this.jumpSpeed;
          }
        }
      },
      onKeyReleased: function onKeyReleased(event) {
        var keyCode = event.keyCode;
        switch (keyCode) {
         case cc.macro.KEY.a:
         case cc.macro.KEY.left:
         case cc.macro.KEY.d:
         case cc.macro.KEY.right:
          this.direction = 0;
        }
      },
      onCollisionEnter: function onCollisionEnter(other, self) {
        this.node.color = cc.Color.RED;
        this.touchingNumber++;
        var otherAabb = other.world.aabb;
        var otherPreAabb = other.world.preAabb.clone();
        var selfAabb = self.world.aabb;
        var selfPreAabb = self.world.preAabb.clone();
        selfPreAabb.x = selfAabb.x;
        otherPreAabb.x = otherAabb.x;
        if (cc.Intersection.rectRect(selfPreAabb, otherPreAabb)) {
          if (this.speed.x < 0 && selfPreAabb.xMax > otherPreAabb.xMax) {
            this.node.x = otherPreAabb.xMax - this.node.parent.x;
            this.collisionX = -1;
          } else if (this.speed.x > 0 && selfPreAabb.xMin < otherPreAabb.xMin) {
            this.node.x = otherPreAabb.xMin - selfPreAabb.width - this.node.parent.x;
            this.collisionX = 1;
          }
          this.speed.x = 0;
          other.touchingX = true;
          return;
        }
        selfPreAabb.y = selfAabb.y;
        otherPreAabb.y = otherAabb.y;
        if (cc.Intersection.rectRect(selfPreAabb, otherPreAabb)) {
          if (this.speed.y < 0 && selfPreAabb.yMax > otherPreAabb.yMax) {
            this.node.y = otherPreAabb.yMax - this.node.parent.y;
            this.jumping = false;
            this.collisionY = -1;
          } else if (this.speed.y > 0 && selfPreAabb.yMin < otherPreAabb.yMin) {
            this.node.y = otherPreAabb.yMin - selfPreAabb.height - this.node.parent.y;
            this.collisionY = 1;
          }
          this.speed.y = 0;
          this._lastSpeedY = 0;
          other.touchingY = true;
        }
      },
      onCollisionStay: function onCollisionStay(other, self) {
        if (-1 === this.collisionY && "Platform" === other.node.group) {
          var motion = other.node.getComponent("PlatformMotion");
          motion && (this.node.x += motion._movedDiff);
        }
      },
      onCollisionExit: function onCollisionExit(other) {
        this.touchingNumber--;
        0 === this.touchingNumber && (this.node.color = cc.Color.WHITE);
        if (other.touchingX) {
          this.collisionX = 0;
          other.touchingX = false;
        } else if (other.touchingY) {
          other.touchingY = false;
          this.collisionY = 0;
          this.jumping = true;
        }
      },
      update: function update(dt) {
        if (this.jumping) {
          this.speed.y += this.gravity * dt;
          Math.abs(this.speed.y) > this.maxSpeed.y && (this.speed.y = this.speed.y > 0 ? this.maxSpeed.y : -this.maxSpeed.y);
        }
        if (0 === this.direction) {
          if (this.speed.x > 0) {
            this.speed.x -= this.drag * dt;
            this.speed.x <= 0 && (this.speed.x = 0);
          } else if (this.speed.x < 0) {
            this.speed.x += this.drag * dt;
            this.speed.x >= 0 && (this.speed.x = 0);
          }
        } else {
          this.speed.x += (this.direction > 0 ? 1 : -1) * this.drag * dt;
          Math.abs(this.speed.x) > this.maxSpeed.x && (this.speed.x = this.speed.x > 0 ? this.maxSpeed.x : -this.maxSpeed.x);
        }
        this.speed.x * this.collisionX > 0 && (this.speed.x = 0);
        this.prePosition.x = this.node.x;
        this.prePosition.y = this.node.y;
        this.preStep.x = this.speed.x * dt;
        this.preStep.y = this.speed.y * dt;
        this.node.x += this.speed.x * dt;
        0 === this._lastSpeedY || 0 === this.speed.y || this._lastSpeedY / Math.abs(this._lastSpeedY) === this.speed.y / Math.abs(this.speed.y) ? this.node.y += (this._lastSpeedY + this.speed.y) * dt / 2 : this.node.y += -this._lastSpeedY / this.gravity / 2 * this._lastSpeedY + this.speed.y / this.gravity / 2 * this.speed.y;
        this._lastSpeedY = this.speed.y;
      }
    });
    cc._RF.pop();
  }, {} ],
  Hittest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "49ade5wuu9ILKDuwPmdIALx", "Hittest");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        collider: {
          default: null,
          type: cc.PolygonCollider
        },
        title: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
        this.title.string = "normal";
        this.node.on(cc.Node.EventType.TOUCH_START, function(touch, event) {
          var touchLoc = touch.getLocation();
          cc.Intersection.pointInPolygon(touchLoc, this.collider.world.points) ? this.title.string = "Hit" : this.title.string = "Not hit";
        }, this);
      },
      onDisable: function onDisable() {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
        this.node.off(cc.Node.EventType.TOUCH_START);
      }
    });
    cc._RF.pop();
  }, {} ],
  InitData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3ae4cUsGcBIE4q7Ksp4ZX/H", "InitData");
    "use strict";
    var _monsterInfo = {
      name: "Slime",
      hp: 100,
      lv: 1,
      atk: 10,
      defense: 5,
      imageUrl: "test_assets/PurpleMonster"
    };
    module.exports = {
      monsterInfo: _monsterInfo
    };
    cc._RF.pop();
  }, {} ],
  Instruction: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6a871gy73FDLap3Eje/2h6i", "Instruction");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        text: {
          default: "",
          multiline: true
        }
      },
      onLoad: function onLoad() {}
    });
    cc._RF.pop();
  }, {} ],
  Item: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "920c8a5MahAhbCTSvmQvaB+", "Item");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Component,
      properties: {
        label: {
          default: null,
          type: cc.Label
        },
        tmplID: 0,
        itemID: 0
      },
      onLoad: function onLoad() {
        this.node.on("touchend", function() {
          console.log("Item " + this.itemID + " clicked");
        }, this);
      },
      initItem: function initItem(tmplID, itemID) {
        this.tmplID = tmplID;
        this.itemID = itemID;
        this.label.textKey = i18n.t("cases/02_ui/05_scrollView/Item.js.1") + this.tmplID + " Item#" + this.itemID;
      },
      updateItem: function updateItem(itemID) {
        this.itemID = itemID;
        this.label.textKey = i18n.t("cases/02_ui/05_scrollView/Item.js.1") + this.tmplID + " Item#" + this.itemID;
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  LabelAttributes: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8aafeSxy+BNZ54pjtkdkRxp", "LabelAttributes");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label_size = null;
        _this.label_color = null;
        _this.label_align = null;
        _this.label_lineheight = null;
        _this.label_effects = null;
        _this.label_overflow = null;
        _this.text = "hello";
        return _this;
      }
      NewClass.prototype.schedule_attributes = function(label, ani, idx) {
        var _this = this;
        "undefined" === typeof idx && (idx = 0);
        if (!!!ani.list[idx]) return;
        var cfg = ani.list[idx];
        if ("step" in cfg) {
          var array = [];
          var _loop_1 = function(v) {
            var delay = cfg.duration * (v - cfg.from) / (cfg.to - cfg.from);
            this_1.scheduleOnce(function() {
              cfg.attr && (label[cfg.attr] = v);
            }, delay);
          };
          var this_1 = this;
          for (var v = cfg.from; v < cfg.to; v += cfg.step) _loop_1(v);
          var lastValue_1 = cfg.to;
          this.scheduleOnce(function() {
            cfg.attr && (label[cfg.attr] = lastValue_1);
          }, cfg.duration);
          this.scheduleOnce(function() {
            ani.loop ? idx = (idx + 1) % ani.list.length : idx += 1;
            _this.schedule_attributes(label, ani, idx);
          }, cfg.duration + cfg.step);
        } else if ("values" in cfg) {
          var step = cfg.duration / cfg.values.length;
          var vs_1 = cfg.values;
          var cb_1 = cfg.callback;
          var _loop_2 = function(i) {
            this_2.scheduleOnce(function() {
              cfg.attr && (label[cfg.attr] = vs_1[i]);
              cb_1 && cb_1(vs_1[i]);
            }, i * step);
          };
          var this_2 = this;
          for (var i = 0; i < cfg.values.length; i++) _loop_2(i);
          this.scheduleOnce(function() {
            cfg.attr && (label[cfg.attr] = vs_1[vs_1.length - 1]);
            cb_1 && cb_1(vs_1[vs_1.length - 1]);
          }, cfg.duration);
          this.scheduleOnce(function() {
            ani.loop ? idx = (idx + 1) % ani.list.length : idx += 1;
            _this.schedule_attributes(label, ani, idx);
          }, cfg.duration + cfg.stay);
        } else if ("update" in cfg) {
          if (void 0 == cfg._time && cfg.before) {
            var ret = cfg.before(cfg.from, cfg.to);
            void 0 != ret && cfg.attr && (label[cfg.attr] = ret);
            cfg._time = 1;
          }
          var times_1 = Math.floor(cfg.duration / cfg.interval);
          var i_1 = 0;
          var updatecb_1 = cfg.update;
          var from_1 = cfg.from;
          var to_1 = cfg.to;
          var after_1 = cfg.after;
          this.schedule(function() {
            var ret = updatecb_1(i_1 / times_1, from_1, to_1);
            void 0 != ret && cfg.attr && (label[cfg.attr] = ret);
            i_1 += 1;
            if (i_1 >= times_1) {
              after_1 && after_1(from_1, to_1);
              delete cfg._time;
            }
          }, cfg.interval, times_1, 0);
          this.scheduleOnce(function() {
            ani.loop ? idx = (idx + 1) % ani.list.length : idx += 1;
            _this.schedule_attributes(label, ani, idx);
          }, cfg.duration + cfg.stay);
        }
      };
      NewClass.prototype.start = function() {
        this.setup_fontsize();
        this.setup_font_color();
        this.setup_label_align();
        this.setup_line_height();
        this.setup_label_decoration();
        this.setup_label_overflow();
      };
      NewClass.prototype.setup_fontsize = function() {
        var label = "Update FontSize/Anchor";
        this.label_size.string = label;
        var label_size = this.label_size;
        this.schedule_attributes(this.label_size, {
          loop: true,
          list: [ {
            attr: "fontSize",
            values: [ 25, 10, 30, 22 ],
            duration: 3,
            stay: 1
          }, {
            from: new cc.Vec2(0, 0),
            to: new cc.Vec2(1, 1),
            update: function(p, f, t) {
              var x = f.x * (1 - p) + p * t.y;
              var y = f.y * (1 - p) + p * t.y;
              label_size.node.setAnchorPoint(x, y);
              label_size.string = "Update Node Anchor: " + x.toFixed(2) + ", " + y.toFixed(2);
            },
            duration: 3,
            stay: 1,
            interval: .2,
            before: function(f, t) {
              label_size.string = "Update Node Anchor";
            },
            after: function(f, t) {
              label_size.string = label;
              label_size.node.setAnchorPoint(.5, .5);
            }
          } ]
        });
      };
      NewClass.prototype.setup_font_color = function() {
        var label = "Update Font Color";
        this.label_color.string = label;
        var label_color = this.label_color;
        var old_color = label_color.node.color;
        this.schedule_attributes(this.label_color, {
          loop: true,
          list: [ {
            from: new cc.Color(255, 0, 0),
            to: new cc.Color(255, 255, 0),
            update: function(p, f, t) {
              var r = f.getR() * (1 - p) + p * t.getR();
              var g = f.getG() * (1 - p) + p * t.getG();
              var b = f.getB() * (1 - p) + p * t.getB();
              var c = new cc.Color(r, g, b);
              label_color.node.color = c;
            },
            duration: 3,
            stay: 1,
            interval: .1,
            before: function(f, t) {
              label_color.string = "Update Node Color";
              label_color.node.color = old_color;
              label_color.node.opacity = 255;
            },
            after: function(f, t) {
              label_color.node.color = old_color;
            }
          }, {
            from: 0,
            to: 255,
            update: function(p, f, t) {
              label_color.node.opacity = (1 - p) * f + t * p;
            },
            duration: 3,
            stay: 1,
            interval: .1,
            before: function(f, t) {
              label_color.string = "Update Node Alpha";
              label_color.node.opacity = 255;
            },
            after: function(f, t) {
              label_color.node.opacity = 255;
            }
          } ]
        });
      };
      NewClass.prototype.setup_label_align = function() {
        var label = "Update Label \nParamaters\nLines";
        this.label_align.string = label;
        var label_align = this.label_align;
        this.schedule_attributes(label_align, {
          loop: true,
          list: [ {
            attr: "horizontalAlign",
            values: [ 0, 1, 2 ],
            duration: 3,
            stay: 1
          }, {
            attr: "verticalAlign",
            values: [ 0, 1, 2 ],
            duration: 3,
            stay: 1
          } ]
        });
      };
      NewClass.prototype.setup_line_height = function() {
        var label = "Update Label Line Height\nSpaceing x";
        this.label_lineheight.string = label;
        var label_lineheight = this.label_lineheight;
        this.schedule_attributes(label_lineheight, {
          loop: true,
          list: [ {
            attr: "lineHeight",
            values: [ 10, 20, 30 ],
            duration: 3,
            stay: 1
          }, {
            attr: "spacingX",
            from: 0,
            to: 10,
            update: function(p, f, t) {
              return (1 - p) * f + p * t;
            },
            duration: 3,
            stay: 1,
            interval: .1,
            after: function() {
              label_lineheight.spacingX = 0;
            }
          } ]
        });
      };
      NewClass.prototype.setup_label_decoration = function() {
        var label = "Update Label LDecoration";
        this.label_effects.string = label;
        var label_effects = this.label_effects;
        label_effects.fontSize = 20;
        label_effects.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
        var values = [];
        for (var i = 0; i <= 4; i++) values.push({
          enableItalic: 1 == (i >> 0 & 1),
          enableUnderline: 1 == (i >> 1 & 1)
        });
        this.schedule_attributes(label_effects, {
          loop: true,
          list: [ {
            values: values,
            duration: 8,
            stay: 1,
            callback: function(value) {
              label_effects.enableBold = value.enableBold;
              label_effects.enableUnderline = value.enableUnderline;
              var tex = [];
              for (var k in value) tex.push(k + ": " + value[k]);
              label_effects.string = tex.join("\n");
            }
          } ]
        });
      };
      NewClass.prototype.setup_label_overflow = function() {
        var label = "Update Label \nOverFlow\nLong Line Text\n";
        this.label_overflow.string = label;
        var label_overflow = this.label_overflow;
        label_overflow.fontSize = 40;
        var values = [ cc.Label.Overflow.NONE, cc.Label.Overflow.CLAMP, cc.Label.Overflow.RESIZE_HEIGHT, cc.Label.Overflow.SHRINK ];
        this.schedule_attributes(label_overflow, {
          loop: true,
          list: [ {
            attr: "overflow",
            values: values,
            duration: 4,
            stay: 1,
            callback: function(v) {
              label_overflow.string = label + v;
            }
          } ]
        });
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "label_size", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "label_color", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "label_align", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "label_lineheight", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "label_effects", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "label_overflow", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  LabelLocalized: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e4f88adp3hERoJ48DZ2PSAl", "LabelLocalized");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Label,
      properties: {
        textKey: {
          default: "TEXT_KEY",
          multiline: true,
          tooltip: "Enter i18n key here",
          notify: function notify() {
            this.string = this.localizedString;
          }
        },
        localizedString: {
          override: true,
          tooltip: "Here shows the localized string of Text Key",
          get: function get() {
            return i18n.t(this.textKey);
          },
          set: function set(value) {
            this.textKey = value;
            false;
          }
        }
      },
      onLoad: function onLoad() {
        this._super();
        this.localizedString && (this.string = this.localizedString);
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  LayoutResizeContainerCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2bbedtV3blCVJbmf2E9h/0V", "LayoutResizeContainerCtrl");
    "use strict";
    var info = cc.Class({
      name: "info",
      properties: {
        target: cc.Node,
        num: 0
      }
    });
    cc.Class({
      extends: cc.Component,
      properties: {
        itemTemp: {
          default: null,
          type: cc.Prefab
        },
        targetAry: {
          default: [],
          type: [ info ]
        }
      },
      onLoad: function onLoad() {
        this._curTime = 0;
        this._curIndex = 0;
      },
      _createItem: function _createItem(parentNode, idx) {
        var item = cc.instantiate(this.itemTemp);
        var label = item.getComponentInChildren(cc.Label);
        label.string = idx;
        item.parent = parentNode;
      },
      update: function update(dt) {
        this._curTime += dt;
        if (this._curTime >= 1) {
          this._curTime = 0;
          for (var i = 0; i < this.targetAry.length; ++i) {
            var num = this.targetAry[i].num;
            var target = this.targetAry[i].target;
            target && this._curIndex < num && this._createItem(target, this._curIndex);
          }
          this._curIndex++;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  ListItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aa63bWNE8hBf4P4Sp0X2uT0", "ListItem");
    "use strict";
    var TipsManager = require("TipsManager");
    cc.Class({
      extends: cc.Component,
      properties: {
        label: {
          default: null,
          type: cc.Label
        },
        url: "",
        bg: cc.Sprite,
        btn: cc.Button
      },
      init: function init(menu) {
        this.index = -1;
        this.__name = "";
        this.menu = menu;
      },
      loadExample: function loadExample() {
        this.url && TipsManager.hasSupport(this.__name) && this.menu.loadScene(this.url);
      },
      updateItem: function updateItem(idx, y, name, url) {
        var isDir = !url;
        this.index = idx;
        this.node.y = y;
        this.node.x = isDir ? 50 : 100;
        this.label.string = this.__name = name;
        this.url = url;
        this.bg.enabled = !isDir;
        this.btn.interactable = !isDir;
      }
    });
    cc._RF.pop();
  }, {
    TipsManager: "TipsManager"
  } ],
  ListViewCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e6458+hf5VAnIXocmvhggqC", "ListViewCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        itemTemplate: {
          default: null,
          type: cc.Node
        },
        scrollView: {
          default: null,
          type: cc.ScrollView
        },
        spawnCount: 0,
        totalCount: 0,
        spacing: 0,
        bufferZone: 0,
        lblScrollEvent: cc.Label,
        btnAddItem: cc.Button,
        btnRemoveItem: cc.Button,
        btnJumpToPosition: cc.Button,
        lblJumpPosition: cc.Label,
        lblTotalItems: cc.Label
      },
      onLoad: function onLoad() {
        this.content = this.scrollView.content;
        this.items = [];
        this.initialize();
        this.updateTimer = 0;
        this.updateInterval = .2;
        this.lastContentPosY = 0;
      },
      initialize: function initialize() {
        this.content.height = this.totalCount * (this.itemTemplate.height + this.spacing) + this.spacing;
        for (var i = 0; i < this.spawnCount; ++i) {
          var item = cc.instantiate(this.itemTemplate);
          this.content.addChild(item);
          item.setPosition(0, -item.height * (.5 + i) - this.spacing * (i + 1));
          item.getComponent("Item").initItem(i, i);
          this.items.push(item);
        }
      },
      getPositionInView: function getPositionInView(item) {
        var worldPos = item.parent.convertToWorldSpaceAR(item.position);
        var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
      },
      update: function update(dt) {
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) return;
        this.updateTimer = 0;
        var items = this.items;
        var buffer = this.bufferZone;
        var isDown = this.scrollView.content.y < this.lastContentPosY;
        var offset = (this.itemTemplate.height + this.spacing) * items.length;
        for (var i = 0; i < items.length; ++i) {
          var viewPos = this.getPositionInView(items[i]);
          if (isDown) {
            if (viewPos.y < -buffer && items[i].y + offset < 0) {
              items[i].y = items[i].y + offset;
              var item = items[i].getComponent("Item");
              var itemId = item.itemID - items.length;
              item.updateItem(itemId);
            }
          } else if (viewPos.y > buffer && items[i].y - offset > -this.content.height) {
            items[i].y = items[i].y - offset;
            var _item = items[i].getComponent("Item");
            var _itemId = _item.itemID + items.length;
            _item.updateItem(_itemId);
          }
        }
        this.lastContentPosY = this.scrollView.content.y;
        this.lblTotalItems.textKey = "Total Items: " + this.totalCount;
      },
      scrollEvent: function scrollEvent(sender, event) {
        switch (event) {
         case 0:
          this.lblScrollEvent.string = "Scroll to Top";
          break;

         case 1:
          this.lblScrollEvent.string = "Scroll to Bottom";
          break;

         case 2:
          this.lblScrollEvent.string = "Scroll to Left";
          break;

         case 3:
          this.lblScrollEvent.string = "Scroll to Right";
          break;

         case 4:
          this.lblScrollEvent.string = "Scrolling";
          break;

         case 5:
          this.lblScrollEvent.string = "Bounce Top";
          break;

         case 6:
          this.lblScrollEvent.string = "Bounce bottom";
          break;

         case 7:
          this.lblScrollEvent.string = "Bounce left";
          break;

         case 8:
          this.lblScrollEvent.string = "Bounce right";
          break;

         case 9:
          this.lblScrollEvent.string = "Auto scroll ended";
        }
      },
      addItem: function addItem() {
        this.content.height = (this.totalCount + 1) * (this.itemTemplate.height + this.spacing) + this.spacing;
        this.totalCount = this.totalCount + 1;
      },
      removeItem: function removeItem() {
        if (this.totalCount - 1 < 30) {
          cc.error("can't remove item less than 30!");
          return;
        }
        this.content.height = (this.totalCount - 1) * (this.itemTemplate.height + this.spacing) + this.spacing;
        this.totalCount = this.totalCount - 1;
        this.moveBottomItemToTop();
      },
      moveBottomItemToTop: function moveBottomItemToTop() {
        var offset = (this.itemTemplate.height + this.spacing) * this.items.length;
        var length = this.items.length;
        var item = this.getItemAtBottom();
        if (item.y + offset < 0) {
          item.y = item.y + offset;
          var itemComp = item.getComponent("Item");
          var itemId = itemComp.itemID - length;
          itemComp.updateItem(itemId);
        }
      },
      getItemAtBottom: function getItemAtBottom() {
        var item = this.items[0];
        for (var i = 1; i < this.items.length; ++i) item.y > this.items[i].y && (item = this.items[i]);
        return item;
      },
      scrollToFixedPosition: function scrollToFixedPosition() {
        this.scrollView.scrollToOffset(cc.v2(0, 500), 2);
      }
    });
    cc._RF.pop();
  }, {} ],
  LoadLongText: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8f9ffOfy1FLq7R8nYvyayWd", "LoadLongText");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        var _this = this;
        this.label.string = "loading";
        var longtext = "\u8bdd\u8bf4\u5929\u4e0b\u5927\u52bf\uff0c\u5206\u4e45\u5fc5\u5408\uff0c\u5408\u4e45\u5fc5\u5206\u3002\u5468\u672b\u4e03\u56fd\u5206\u4e89\uff0c\u5e76\u5165\u4e8e\u79e6\u3002\u53ca\u79e6\u706d\u4e4b\u540e\uff0c\u695a\u3001\u6c49\u5206\u4e89\uff0c\u53c8\u5e76\u5165\u4e8e\u6c49\u3002\u6c49\u671d\u81ea\u9ad8\u7956\u65a9\u767d\u86c7\u800c\u8d77\u4e49\uff0c\u4e00\u7edf\u5929\u4e0b\u3002\u540e\u6765\u5149\u6b66\u4e2d\u5174\uff0c\u4f20\u81f3\u732e\u5e1d\uff0c\u9042\u5206\u4e3a\u4e09\u56fd\u3002\u63a8\u5176\u81f4\u4e71\u4e4b\u7531\uff0c\u6b86\u59cb\u4e8e\u6853\u3001\u7075\u4e8c\u5e1d\u3002\u6853\u5e1d\u7981\u9522\u5584\u7c7b\uff0c\u5d07\u4fe1\u5ba6\u5b98\u3002\u53ca\u6853\u5e1d\u5d29\uff0c\u7075\u5e1d\u5373\u4f4d\uff0c\u5927\u5c06\u519b\u7aa6\u6b66\u3001\u592a\u5085\u9648\u8543\uff0c\u5171\u76f8\u8f85\u4f50\u3002\u65f6\u6709\u5ba6\u5b98\u66f9\u8282\u7b49\u5f04\u6743\uff0c\u7aa6\u6b66\u3001\u9648\u8543\u8c0b\u8bdb\u4e4b\uff0c\u4f5c\u4e8b\u4e0d\u5bc6\uff0c\u53cd\u4e3a\u6240\u5bb3\u3002\u4e2d\u6d93\u81ea\u6b64\u6108\u6a2a\u3002\n\n        \u5efa\u5b81\u4e8c\u5e74\u56db\u6708\u671b\u65e5\uff0c\u5e1d\u5fa1\u6e29\u5fb7\u6bbf\u3002\u65b9\u5347\u5ea7\uff0c\u6bbf\u89d2\u72c2\u98ce\u9aa4\u8d77\uff0c\u53ea\u89c1\u4e00\u6761\u5927\u9752\u86c7\uff0c\u4ece\u6881\u4e0a\u98de\u5c06\u4e0b\u6765\uff0c\u87e0\u4e8e\u6905\u4e0a\u3002\u5e1d\u60ca\u5012\uff0c\u5de6\u53f3\u6025\u6551\u5165\u5bab\uff0c\u767e\u5b98\u4ff1\u5954\u907f\u3002\u987b\u81fe\uff0c\u86c7\u4e0d\u89c1\u4e86\u3002\u5ffd\u7136\u5927\u96f7\u5927\u96e8\uff0c\u52a0\u4ee5\u51b0\u96f9\uff0c\u843d\u5230\u534a\u591c\u65b9\u6b62\uff0c\u574f\u5374\u623f\u5c4b\u65e0\u6570\u3002\u5efa\u5b81\u56db\u5e74\u4e8c\u6708\uff0c\u6d1b\u9633\u5730\u9707\uff1b\u53c8\u6d77\u6c34\u6cdb\u6ea2\uff0c\u6cbf\u6d77\u5c45\u6c11\uff0c\u5c3d\u88ab\u5927\u6d6a\u5377\u5165\u6d77\u4e2d\u3002\u5149\u548c\u5143\u5e74\uff0c\u96cc\u9e21\u5316\u96c4\u3002\u516d\u6708\u6714\uff0c\u9ed1\u6c14\u5341\u4f59\u4e08\uff0c\u98de\u5165\u6e29\u5fb7\u6bbf\u4e2d\u3002\u79cb\u4e03\u6708\uff0c\u6709\u8679\u73b0\u4e8e\u7389\u5802\uff1b\u4e94\u539f\u5c71\u5cb8\uff0c\u5c3d\u7686\u5d29\u88c2\u3002\u79cd\u79cd\u4e0d\u7965\uff0c\u975e\u6b62\u4e00\u7aef\u3002\u5e1d\u4e0b\u8bcf\u95ee\u7fa4\u81e3\u4ee5\u707e\u5f02\u4e4b\u7531\uff0c\u8bae\u90ce\u8521\u9095\u4e0a\u758f\uff0c\u4ee5\u4e3a\u9713\u5815\u9e21\u5316\uff0c\u4e43\u5987\u5bfa\u5e72\u653f\u4e4b\u6240\u81f4\uff0c\u8a00\u9887\u5207\u76f4\u3002\u5e1d\u89c8\u594f\u53f9\u606f\uff0c\u56e0\u8d77\u66f4\u8863\u3002\u66f9\u8282\u5728\u540e\u7a83\u89c6\uff0c\u6089\u5ba3\u544a\u5de6\u53f3\uff1b\u9042\u4ee5\u4ed6\u4e8b\u9677\u9095\u4e8e\u7f6a\uff0c\u653e\u5f52\u7530\u91cc\u3002\u540e\u5f20\u8ba9\u3001\u8d75\u5fe0\u3001\u5c01\u8c1e\u3001\u6bb5\u572d\u3001\u66f9\u8282\u3001\u4faf\u89c8\u3001\u8e47\u7855\u3001\u7a0b\u65f7\u3001\u590f\u607d\u3001\u90ed\u80dc\u5341\u4eba\u670b\u6bd4\u4e3a\u5978\uff0c\u53f7\u4e3a\u201c\u5341\u5e38\u4f8d\u201d\u3002\u5e1d\u5c0a\u4fe1\u5f20\u8ba9\uff0c\u547c\u4e3a\u201c\u963f\u7236\u201d\uff0c\u671d\u653f\u65e5\u975e\uff0c\u4ee5\u81f4\u5929\u4e0b\u4eba\u5fc3\u601d\u4e71\uff0c\u76d7\u8d3c\u8702\u8d77\u3002\n        \n        \n         \n        \u65f6\u5de8\u9e7f\u90e1\u6709\u5144\u5f1f\u4e09\u4eba\uff1a\u4e00\u540d\u5f20\u89d2\uff0c\u4e00\u540d\u5f20\u5b9d\uff0c\u4e00\u540d\u5f20\u6881\u3002\u90a3\u5f20\u89d2\u672c\u662f\u4e2a\u4e0d\u7b2c\u79c0\u624d\uff0c\u56e0\u5165\u5c71\u91c7\u836f\uff0c\u9047\u4e00\u8001\u4eba\uff0c\u78a7\u773c\u7ae5\u989c\uff0c\u624b\u6267\u85dc\u6756\uff0c\u5524\u89d2\u81f3\u4e00\u6d1e\u4e2d\uff0c\u4ee5\u5929\u4e66\u4e09\u5377\u6388\u4e4b\u66f0\uff1a\u201c\u6b64\u540d\u592a\u5e73\u8981\u672f\u3002\u6c5d\u5f97\u4e4b\uff0c\u5f53\u4ee3\u5929\u5ba3\u5316\uff0c\u666e\u6551\u4e16\u4eba\uff1b\u82e5\u840c\u5f02\u5fc3\uff0c\u5fc5\u83b7\u6076\u62a5\u3002\u201d\u89d2\u62dc\u95ee\u59d3\u540d\u3002\u8001\u4eba\u66f0\uff1a\u201c\u543e\u4e43\u5357\u534e\u8001\u4ed9\u4e5f\u3002\u201d\u8a00\u8bab\uff0c\u5316\u9635\u6e05\u98ce\u800c\u53bb\u3002\u89d2\u5f97\u6b64\u4e66\uff0c\u6653\u591c\u653b\u4e60\uff0c\u80fd\u547c\u98ce\u5524\u96e8\uff0c\u53f7\u4e3a\u201c\u592a\u5e73\u9053\u4eba\u201d\u3002\u4e2d\u5e73\u5143\u5e74\u6b63\u6708\u5185\uff0c\u75ab\u6c14\u6d41\u884c\uff0c\u5f20\u89d2\u6563\u65bd\u7b26\u6c34\uff0c\u4e3a\u4eba\u6cbb\u75c5\uff0c\u81ea\u79f0\u201c\u5927\u8d24\u826f\u5e08\u201d\u3002\u89d2\u6709\u5f92\u5f1f\u4e94\u767e\u4f59\u4eba\uff0c\u4e91\u6e38\u56db\u65b9\uff0c\u7686\u80fd\u4e66\u7b26\u5ff5\u5492\u3002\u6b21\u540e\u5f92\u4f17\u65e5\u591a\uff0c\u89d2\u4e43\u7acb\u4e09\u5341\u516d\u65b9\uff0c\u5927\u65b9\u4e07\u4f59\u4eba\uff0c\u5c0f\u65b9\u516d\u4e03\u5343\uff0c\u5404\u7acb\u6e20\u5e05\uff0c\u79f0\u4e3a\u5c06\u519b\uff1b\u8bb9\u8a00\u201c\u82cd\u5929\u5df2\u6b7b\uff0c\u9ec4\u5929\u5f53\u7acb\uff1b\u5c81\u5728\u7532\u5b50\uff0c\u5929\u4e0b\u5927\u5409\u201d\uff1b\u4ee4\u4eba\u5404\u4ee5\u767d\u571f\uff0c\u4e66 \u201c\u7532\u5b50\u201d\u4e8c\u5b57\u4e8e\u5bb6\u4e2d\u5927\u95e8\u4e0a\u3002\u9752\u3001\u5e7d\u3001\u5f90\u3001\u5180\u3001\u8346\u3001\u626c\u3001\u5156\u3001\u8c6b\u516b\u5dde\u4e4b\u4eba\uff0c\u5bb6\u5bb6\u4f8d\u5949\u5927\u8d24\u826f\u5e08\u5f20\u89d2\u540d\u5b57\u3002\u89d2\u9063\u5176\u515a\u9a6c\u5143\u4e49\uff0c\u6697\u8d4d\u91d1\u5e1b\uff0c\u7ed3\u4ea4\u4e2d\u6d93\u5c01\u8c1e\uff0c\u4ee5\u4e3a\u5185\u5e94\u3002\u89d2\u4e0e\u4e8c\u5f1f\u5546\u8bae\u66f0\uff1a\u201c\u81f3\u96be\u5f97\u8005\uff0c\u6c11\u5fc3\u4e5f\u3002\u4eca\u6c11\u5fc3\u5df2\u987a\uff0c\u82e5\u4e0d\u4e58\u52bf\u53d6\u5929\u4e0b\uff0c\u8bda\u4e3a\u53ef\u60dc\u3002\u201d\u9042\u4e00\u9762\u79c1\u9020\u9ec4\u65d7\uff0c\u7ea6\u671f\u4e3e\u4e8b\uff1b\u4e00\u9762\u4f7f\u5f1f\u5b50\u5510\u5dde\uff0c\u9a70\u4e66\u62a5\u5c01\u8c1e\u3002\u5510\u5dde\u4e43\u5f84\u8d74\u7701\u4e2d\u544a\u53d8\u3002\u5e1d\u53ec\u5927\u5c06\u519b\u4f55\u8fdb\u8c03\u5175\u64d2\u9a6c\u5143\u4e49\uff0c\u65a9\u4e4b\uff1b\u6b21\u6536\u5c01\u8c1e\u7b49\u4e00\u5e72\u4eba\u4e0b\u72f1\u3002\u5f20\u89d2\u95fb\u77e5\u4e8b\u9732\uff0c\u661f\u591c\u4e3e\u5175\uff0c\u81ea\u79f0\u201c\u5929\u516c\u5c06\u519b\u201d\uff0c\u5f20\u5b9d\u79f0\u201c\u5730\u516c\u5c06\u519b\u201d\uff0c\u5f20\u6881\u79f0\u201c\u4eba\u516c\u5c06\u519b\u201d\uff1b\u7533\u8a00\u4e8e\u4f17\u66f0\uff1a\u201c\u4eca\u6c49\u8fd0\u5c06\u7ec8\uff0c\u5927\u5723\u4eba\u51fa\u3002\u6c5d\u7b49\u7686\u5b9c\u987a\u5929\u4ece\u6b63\uff0c\u4ee5\u4e50\u592a\u5e73\u3002\u201d\u56db\u65b9\u767e\u59d3\uff0c\u88f9\u9ec4\u5dfe\u4ece\u5f20\u89d2\u53cd\u8005\u56db\u4e94\u5341\u4e07\u3002\u8d3c\u52bf\u6d69\u5927\uff0c\u5b98\u519b\u671b\u98ce\u800c\u9761\u3002\u4f55\u8fdb\u594f\u5e1d\u706b\u901f\u964d\u8bcf\uff0c\u4ee4\u5404\u5904\u5907\u5fa1\uff0c\u8ba8\u8d3c\u7acb\u529f\uff1b\u4e00\u9762\u9063\u4e2d\u90ce\u5c06\u5362\u690d\u3001\u7687\u752b\u5d69\u3001\u6731\u96bd\uff0c\u5404\u5f15\u7cbe\u5175\uff0c\u5206\u4e09\u8def\u8ba8\u4e4b\u3002\n        \n        \n         \n        \u4e14\u8bf4\u5f20\u89d2\u4e00\u519b\uff0c\u524d\u72af\u5e7d\u5dde\u754c\u5206\u3002\u5e7d\u5dde\u592a\u5b88\u5218\u7109\uff0c\u4e43\u6c5f\u590f\u7adf\u9675\u4eba\u6c0f\uff0c\u6c49\u9c81\u606d\u738b\u4e4b\u540e\u4e5f\uff1b\u5f53\u65f6\u95fb\u5f97\u8d3c\u5175\u5c06\u81f3\uff0c\u53ec\u6821\u5c09\u90b9\u9756\u8ba1\u8bae\u3002\u9756\u66f0\uff1a\u201c\u8d3c\u5175\u4f17\uff0c\u6211\u5175\u5be1\uff0c\u660e\u516c\u5b9c\u4f5c\u901f\u62db\u519b\u5e94\u654c\u3002\u201d\u5218\u7109\u7136\u5176\u8bf4\uff0c\u968f\u5373\u51fa\u699c\u62db\u52df\u4e49\u5175\u3002\u699c\u6587\u884c\u5230\u6dbf\u53bf\uff0c\u5f15\u51fa\u6dbf\u53bf\u4e2d\u4e00\u4e2a\u82f1\u96c4\u3002\u90a3\u4eba\u4e0d\u751a\u597d\u8bfb\u4e66\uff1b\u6027\u5bbd\u548c\uff0c\u5be1\u8a00\u8bed\uff0c\u559c\u6012\u4e0d\u5f62\u4e8e\u8272\uff1b\u7d20\u6709\u5927\u5fd7\uff0c\u4e13\u597d\u7ed3\u4ea4\u5929\u4e0b\u8c6a\u6770\uff1b\u751f\u5f97\u8eab\u957f\u4e03\u5c3a\u4e94\u5bf8\uff0c\u4e24\u8033\u5782\u80a9\uff0c\u53cc\u624b\u8fc7\u819d\uff0c\u76ee\u80fd\u81ea\u987e\u5176\u8033\uff0c\u9762\u5982\u51a0\u7389\uff0c\u5507\u82e5\u6d82\u8102\uff1b\u4e2d\u5c71\u9756\u738b\u5218\u80dc\u4e4b\u540e\uff0c\u6c49\u666f\u5e1d\u9601\u4e0b\u7384\u5b59\uff1b\u59d3\u5218\uff0c\u540d\u5907\uff0c\u5b57\u7384\u5fb7\u3002\u6614\u5218\u80dc\u4e4b\u5b50\u5218\u8d1e\uff0c\u6c49\u6b66\u65f6\u5c01\u6dbf\u9e7f\u4ead\u4faf\uff0c\u540e\u5750\u914e\u91d1\u5931\u4faf\uff0c\u56e0\u6b64\u9057\u8fd9\u4e00\u652f\u5728\u6dbf\u53bf\u3002\u7384\u5fb7\u7956\u5218\u96c4\uff0c\u7236\u5218\u5f18\u3002\u5f18\u66fe\u4e3e\u5b5d\u5ec9\uff0c\u4ea6\u5c1d\u4f5c\u540f\uff0c\u65e9\u4e27\u3002\u7384\u5fb7\u5e7c\u5b64\uff0c\u4e8b\u6bcd\u81f3\u5b5d\uff1b\u5bb6\u8d2b\uff0c\u8d29\u5c66\u7ec7\u5e2d\u4e3a\u4e1a\u3002\u5bb6\u4f4f\u672c\u53bf\u697c\u6851\u6751\u3002\u5176\u5bb6\u4e4b\u4e1c\u5357\uff0c\u6709\u4e00\u5927\u6851\u6811\uff0c\u9ad8\u4e94\u4e08\u4f59\uff0c\u9065\u671b\u4e4b\uff0c\u7ae5\u7ae5\u5982\u8f66\u76d6\u3002\u76f8\u8005\u4e91\uff1a\u201c\u6b64\u5bb6\u5fc5\u51fa\u8d35\u4eba\u3002\u201d\u7384\u5fb7\u5e7c\u65f6\uff0c\u4e0e\u4e61\u4e2d\u5c0f\u513f\u620f\u4e8e\u6811\u4e0b\uff0c\u66f0\uff1a\u201c\u6211\u4e3a\u5929\u5b50\uff0c\u5f53\u4e58\u6b64\u8f66\u76d6\u3002\u201d\u53d4\u7236\u5218\u5143\u8d77\u5947\u5176\u8a00\uff0c\u66f0\uff1a\u201c\u6b64\u513f\u975e\u5e38\u4eba\u4e5f\uff01\u201d\u56e0\u89c1\u7384\u5fb7\u5bb6\u8d2b\uff0c\u5e38\u8d44\u7ed9\u4e4b\u3002\u5e74\u5341\u4e94\u5c81\uff0c\u6bcd\u4f7f\u6e38\u5b66\uff0c\u5c1d\u5e08\u4e8b\u90d1\u7384\u3001\u5362\u690d\uff1b\u4e0e\u516c\u5b59\u74d2\u7b49\u4e3a\u53cb\u3002\u53ca\u5218\u7109\u53d1\u699c\u62db\u519b\u65f6\uff0c\u7384\u5fb7\u5e74\u5df2\u4e8c\u5341\u516b\u5c81\u77e3\u3002\n        \n        \u5f53\u65e5\u89c1\u4e86\u699c\u6587\uff0c\u6168\u7136\u957f\u53f9\u3002\u968f\u540e\u4e00\u4eba\u5389\u58f0\u8a00\u66f0\uff1a\u201c\u5927\u4e08\u592b\u4e0d\u4e0e\u56fd\u5bb6\u51fa\u529b\uff0c\u4f55\u6545\u957f\u53f9\uff1f\u201d\u7384\u5fb7\u56de\u89c6\u5176\u4eba\uff0c\u8eab\u957f\u516b\u5c3a\uff0c\u8c79\u5934\u73af\u773c\uff0c\u71d5\u9894\u864e\u987b\uff0c\u58f0\u82e5\u5de8\u96f7\uff0c\u52bf\u5982\u5954\u9a6c\u3002\u7384\u5fb7\u89c1\u5176\u5f62\u8c8c\u5f02\u5e38\uff0c\u95ee\u5176\u59d3\u540d\u3002\u5176\u4eba\u66f0\uff1a\u201c\u67d0\u59d3\u5f20\uff0c\u540d\u98de\uff0c\u5b57\u7ffc\u5fb7\u3002\u4e16\u5c45\u6dbf\u90e1\uff0c\u9887\u6709\u5e84\u7530\uff0c\u5356\u9152\u5c60\u732a\uff0c\u4e13\u597d\u7ed3\u4ea4\u5929\u4e0b\u8c6a\u6770\u3002\u9002\u624d\u89c1\u516c\u770b\u699c\u800c\u53f9\uff0c\u6545\u6b64\u76f8\u95ee\u3002\u201d\u7384\u5fb7\u66f0\uff1a\u201c\u6211\u672c\u6c49\u5ba4\u5b97\u4eb2\uff0c\u59d3\u5218\uff0c\u540d\u5907\u3002\u4eca\u95fb\u9ec4\u5dfe\u5021\u4e71\uff0c\u6709\u5fd7\u6b32\u7834\u8d3c\u5b89\u6c11\uff0c\u6068\u529b\u4e0d\u80fd\uff0c\u6545\u957f\u53f9\u8033\u3002\u201d\u98de\u66f0\uff1a\u201c\u543e\u9887\u6709\u8d44\u8d22\uff0c\u5f53\u62db\u52df\u4e61\u52c7\uff0c\u4e0e\u516c\u540c\u4e3e\u5927\u4e8b\uff0c\u5982\u4f55\uff1f\u201d\u7384\u5fb7\u751a\u559c\uff0c\u9042\u4e0e\u540c\u5165\u6751\u5e97\u4e2d\u996e\u9152\u3002\u6b63\u996e\u95f4\uff0c\u89c1\u4e00\u5927\u6c49\uff0c\u63a8\u7740\u4e00\u8f86\u8f66\u5b50\uff0c\u5230\u5e97\u95e8\u9996\u6b47\u4e86\uff1b\u5165\u5e97\u5750\u4e0b\uff0c\u4fbf\u5524\u9152\u4fdd\uff1a\u201c\u5feb\u659f\u9152\u6765\u5403\uff0c\u6211\u5f85\u8d76\u5165\u57ce\u53bb\u6295\u519b\u3002\u201d\u7384\u5fb7\u770b\u5176\u4eba\uff0c\u8eab\u957f\u4e5d\u5c3a\uff0c\u9aef\u957f\u4e8c\u5c3a\uff1b\u9762\u5982\u91cd\u67a3\uff0c\u5507\u82e5\u6d82\u8102\uff1b\u4e39\u51e4\u773c\uff0c\u5367\u8695\u7709\uff1b\u76f8\u8c8c\u5802\u5802\uff0c\u5a01\u98ce\u51db\u51db\u3002\u7384\u5fb7\u5c31\u9080\u4ed6\u540c\u5750\uff0c\u53e9\u5176\u59d3\u540d\u3002\u5176\u4eba\u66f0\uff1a\u201c\u543e\u59d3\u5173\uff0c\u540d\u7fbd\uff0c\u5b57\u5bff\u957f\uff0c\u540e\u6539\u4e91\u957f\uff0c\u6cb3\u4e1c\u89e3\u826f\u4eba\u4e5f\u3002\u56e0\u672c\u5904\u52bf\u8c6a\uff0c\u501a\u52bf\u51cc\u4eba\uff0c\u88ab\u543e\u6740\u4e86\uff1b\u9003\u96be\u6c5f\u6e56\uff0c\u4e94\u516d\u5e74\u77e3\u3002\u4eca\u95fb\u6b64\u5904\u62db\u519b\u7834\u8d3c\uff0c\u7279\u6765\u5e94\u52df\u3002\u201d\u7384\u5fb7\u9042\u4ee5\u5df1\u5fd7\u544a\u4e4b\u3002\u4e91\u957f\u5927\u559c\uff0c\u540c\u5230\u5f20\u98de\u5e84\u4e0a\uff0c\u5171\u8bae\u5927\u4e8b\u3002\n        \n        \n         \n        \u98de\u66f0\uff1a\u201c\u543e\u5e84\u540e\u6709\u4e00\u6843\u56ed\uff0c\u82b1\u5f00\u6b63\u76db\uff1b\u660e\u65e5\u5f53\u4e8e\u56ed\u4e2d\u796d\u544a\u5929\u5730\uff0c\u6211\u4e09\u4eba\u7ed3\u4e3a\u5144\u5f1f\uff0c\u534f\u529b\u540c\u5fc3\uff0c\u7136\u540e\u53ef\u56fe\u5927\u4e8b\u3002\u201d\u7384\u5fb7\u3001\u4e91\u957f\u9f50\u58f0\u5e94\u66f0\uff1a\u201c\u5982\u6b64\u751a\u597d\u3002\u201d\u6b21\u65e5\uff0c\u4e8e\u6843\u56ed\u4e2d\uff0c\u5907\u4e0b\u4e4c\u725b\u767d\u9a6c\u796d\u793c\u7b49\u9879\uff0c\u4e09\u4eba\u711a\u9999\uff0c\u518d\u62dc\u800c\u8bf4\u8a93\u66f0\uff1a\u201c\u5ff5\u5218\u5907\u3001\u5173\u7fbd\u3001\u5f20\u98de\uff0c\u867d\u7136\u5f02\u59d3\uff0c\u65e2\u7ed3\u4e3a\u5144\u5f1f\uff0c\u5219\u540c\u5fc3\u534f\u529b\uff0c\u6551\u56f0\u6276\u5371\uff1b\u4e0a\u62a5\u56fd\u5bb6\uff0c\u4e0b\u5b89\u9ece\u5eb6\uff1b\u4e0d\u6c42\u540c\u5e74\u540c\u6708\u540c\u65e5\u751f\uff0c\u4f46\u613f\u540c\u5e74\u540c\u6708\u540c\u65e5\u6b7b\u3002\u7687\u5929\u540e\u571f\uff0c\u5b9e\u9274\u6b64\u5fc3\u3002\u80cc\u4e49\u5fd8\u6069\uff0c\u5929\u4eba\u5171\u622e\u3002\u201d\u8a93\u6bd5\uff0c\u62dc\u7384\u5fb7\u4e3a\u5144\uff0c\u5173\u7fbd\u6b21\u4e4b\uff0c\u5f20\u98de\u4e3a\u5f1f\u3002\u796d\u7f62\u5929\u5730\uff0c\u590d\u5bb0\u725b\u8bbe\u9152\uff0c\u805a\u4e61\u4e2d\u52c7\u58eb\uff0c\u5f97\u4e09\u767e\u4f59\u4eba\uff0c\u5c31\u6843\u56ed\u4e2d\u75db\u996e\u4e00\u9189\u3002\u6765\u65e5\u6536\u62fe\u519b\u5668\uff0c\u4f46\u6068\u65e0\u9a6c\u5339\u53ef\u4e58\u3002\u6b63\u601d\u8651\u95f4\uff0c\u4eba\u62a5\u6709\u4e24\u4e2a\u5ba2\u4eba\uff0c\u5f15\u4e00\u4f19\u4f34\u5f53\uff0c\u8d76\u4e00\u7fa4\u9a6c\uff0c\u6295\u5e84\u4e0a\u6765\u3002\u7384\u5fb7\u66f0\uff1a\u201c\u6b64\u5929\u4f51\u6211\u4e5f\uff01\u201d\u4e09\u4eba\u51fa\u5e84\u8fce\u63a5\u3002\u539f\u6765\u4e8c\u5ba2\u4e43\u4e2d\u5c71\u5927\u5546\uff1a\u4e00\u540d\u5f20\u4e16\u5e73\uff0c\u4e00\u540d\u82cf\u53cc\uff0c\u6bcf\u5e74\u5f80\u5317\u8d29\u9a6c\uff0c\u8fd1\u56e0\u5bc7\u53d1\u800c\u56de\u3002\u7384\u5fb7\u8bf7\u4e8c\u4eba\u5230\u5e84\uff0c\u7f6e\u9152\u6b3e\u5f85\uff0c\u8bc9\u8bf4\u6b32\u8ba8\u8d3c\u5b89\u6c11\u4e4b\u610f\u3002\u4e8c\u5ba2\u5927\u559c\uff0c\u613f\u5c06\u826f\u9a6c\u4e94\u5341\u5339\u76f8\u9001\uff1b\u53c8\u8d60\u91d1\u94f6\u4e94\u767e\u4e24\uff0c\u9554\u94c1\u4e00\u5343\u65a4\uff0c\u4ee5\u8d44\u5668\u7528\u3002\u7384\u5fb7\u8c22\u522b\u4e8c\u5ba2\uff0c\u4fbf\u547d\u826f\u5320\u6253\u9020\u53cc\u80a1\u5251\u3002\u4e91\u957f\u9020\u9752\u9f99\u5043\u6708\u5200\uff0c\u53c8\u540d\u51b7\u8273\u952f\uff0c\u91cd\u516b\u5341\u4e8c\u65a4\u3002\u5f20\u98de\u9020\u4e08\u516b\u70b9\u94a2\u77db\u3002\u5404\u7f6e\u5168\u8eab\u94e0\u7532\u3002\u5171\u805a\u4e61\u52c7\u4e94\u767e\u4f59\u4eba\uff0c\u6765\u89c1\u90b9\u9756\u3002\u90b9\u9756\u5f15\u89c1\u592a\u5b88\u5218\u7109\u3002\u4e09\u4eba\u53c2\u89c1\u6bd5\uff0c\u5404\u901a\u59d3\u540d\u3002\u7384\u5fb7\u8bf4\u8d77\u5b97\u6d3e\uff0c\u5218\u7109\u5927\u559c\uff0c\u9042\u8ba4\u7384\u5fb7\u4e3a\u4f84\u3002\n        \n        \u4e0d\u6570\u65e5\uff0c\u4eba\u62a5\u9ec4\u5dfe\u8d3c\u5c06\u7a0b\u8fdc\u5fd7\u7edf\u5175\u4e94\u4e07\u6765\u72af\u6dbf\u90e1\u3002\u5218\u7109\u4ee4\u90b9\u9756\u5f15\u7384\u5fb7\u7b49\u4e09\u4eba\uff0c\u7edf\u5175\u4e94\u767e\uff0c\u524d\u53bb\u7834\u654c\u3002\u7384\u5fb7\u7b49\u6b23\u7136\u9886\u519b\u524d\u8fdb\uff0c\u76f4\u81f3\u5927\u5174\u5c71\u4e0b\uff0c\u4e0e\u8d3c\u76f8\u89c1\u3002\u8d3c\u4f17\u7686\u62ab\u53d1\uff0c\u4ee5\u9ec4\u5dfe\u62b9\u989d\u3002\u5f53\u4e0b\u4e24\u519b\u76f8\u5bf9\uff0c\u7384\u5fb7\u51fa\u9a6c\uff0c\u5de6\u6709\u4e91\u957f\uff0c\u53f3\u6709\u7ffc\u5fb7\uff1b\u626c\u97ad\u5927\u9a82\uff1a\u201c\u53cd\u56fd\u9006\u8d3c\uff0c\u4f55\u4e0d\u65e9\u964d\uff01\u201d\u7a0b\u8fdc\u5fd7\u5927\u6012\uff0c\u9063\u526f\u5c06\u9093\u8302\u51fa\u6218\u3002\u5f20\u98de\u633a\u4e08\u516b\u86c7\u77db\u76f4\u51fa\uff0c\u624b\u8d77\u5904\uff0c\u523a\u5165\u9093\u8302\u5fc3\u7a9d\uff0c\u7ffb\u8eab\u843d\u9a6c\u3002\u7a0b\u8fdc\u5fd7\u89c1\u6298\u4e86\u9093\u8302\uff0c\u62cd\u9a6c\u821e\u5200\uff0c\u76f4\u53d6\u5f20\u98de\u3002\u4e91\u957f\u821e\u52a8\u5927\u5200\uff0c\u7eb5\u9a6c\u98de\u8fce\u3002\u7a0b\u8fdc\u5fd7\u89c1\u4e86\uff0c\u65e9\u5403\u4e00\u60ca\uff1b\u63aa\u624b\u4e0d\u53ca\uff0c\u88ab\u4e91\u957f\u5200\u8d77\u5904\uff0c\u6325\u4e3a\u4e24\u6bb5\u3002\u540e\u4eba\u6709\u8bd7\uff0c\u8d5e\u4e8c\u4eba\u66f0\uff1a\n        \n        \u82f1\u96c4\u9732\u9896\u5728\u4eca\u671d\uff0c\u4e00\u8bd5\u77db\u516e\u4e00\u8bd5\u5200\u3002\u521d\u51fa\u4fbf\u5c06\u5a01\u529b\u5c55\uff0c\u4e09\u5206\u597d\u628a\u59d3\u540d\u6807\u3002\n        \n        \u4f17\u8d3c\u89c1\u7a0b\u8fdc\u5fd7\u88ab\u65a9\uff0c\u7686\u5012\u6208\u800c\u8d70\u3002\u7384\u5fb7\u6325\u519b\u8ffd\u8d76\uff0c\u6295\u964d\u8005\u4e0d\u8ba1\u5176\u6570\uff0c\u5927\u80dc\u800c\u56de\u3002\u5218\u7109\u4eb2\u81ea\u8fce\u63a5\uff0c\u8d4f\u52b3\u519b\u58eb\u3002\u6b21\u65e5\uff0c\u63a5\u5f97\u9752\u5dde\u592a\u5b88\u9f9a\u666f\u7252\u6587\uff0c\u8a00\u9ec4\u5dfe\u8d3c\u56f4\u57ce\u5c06\u9677\uff0c\u4e5e\u8d50\u6551\u63f4\u3002\u5218\u7109\u4e0e\u7384\u5fb7\u5546\u8bae\u3002\u7384\u5fb7\u66f0\uff1a\u201c\u5907\u613f\u5f80\u6551\u4e4b\u3002\u201d\u5218\u7109\u4ee4\u90b9\u9756\u5c06\u5175\u4e94\u5343\uff0c\u540c\u7384\u5fb7\u3001\u5173\u3001\u5f20\uff0c\u6295\u9752\u5dde\u6765\u3002\u8d3c\u4f17\u89c1\u6551\u519b\u81f3\uff0c\u5206\u5175\u6df7\u6218\u3002\u7384\u5fb7\u5175\u5be1\u4e0d\u80dc\uff0c\u9000\u4e09\u5341\u91cc\u4e0b\u5be8\u3002\u7384\u5fb7\u8c13\u5173\u3001\u5f20\u66f0\uff1a\u201c\u8d3c\u4f17\u6211\u5be1\uff0c\u5fc5\u51fa\u5947\u5175\uff0c\u65b9\u53ef\u53d6\u80dc\u3002\u201d\u4e43\u5206\u5173\u516c\u5f15\u4e00\u5343\u519b\u4f0f\u5c71\u5de6\uff0c\u5f20\u98de\u5f15\u4e00\u5343\u519b\u4f0f\u5c71\u53f3\uff0c\u9e23\u91d1\u4e3a\u53f7\uff0c\u9f50\u51fa\u63a5\u5e94\u3002\u6b21\u65e5\uff0c\u7384\u5fb7\u4e0e\u90b9\u9756\uff0c\u5f15\u519b\u9f13\u566a\u800c\u8fdb\u3002\u8d3c\u4f17\u8fce\u6218\uff0c\u7384\u5fb7\u5f15\u519b\u4fbf\u9000\u3002\u8d3c\u4f17\u4e58\u52bf\u8ffd\u8d76\uff0c\u65b9\u8fc7\u5c71\u5cad\uff0c\u7384\u5fb7\u519b\u4e2d\u4e00\u9f50\u9e23\u91d1\uff0c\u5de6\u53f3\u4e24\u519b\u9f50\u51fa\uff0c\u7384\u5fb7\u9ebe\u519b\u56de\u8eab\u590d\u6740\u3002\u4e09\u8def\u5939\u653b\uff0c\u8d3c\u4f17\u5927\u6e83\u3002\u76f4\u8d76\u81f3\u9752\u5dde\u57ce\u4e0b\uff0c\u592a\u5b88\u9f9a\u666f\u4ea6\u7387\u6c11\u5175\u51fa\u57ce\u52a9\u6218\u3002\u8d3c\u52bf\u5927\u8d25\uff0c\u527f\u622e\u6781\u591a\uff0c\u9042\u89e3\u9752\u5dde\u4e4b\u56f4\u3002\u540e\u4eba\u6709\u8bd7\u8d5e\u7384\u5fb7\u66f0\uff1a\n        \n        \u8fd0\u7b79\u51b3\u7b97\u6709\u795e\u529f\uff0c\u4e8c\u864e\u8fd8\u987b\u900a\u4e00\u9f99\u3002\u521d\u51fa\u4fbf\u80fd\u5782\u4f1f\u7ee9\uff0c\u81ea\u5e94\u5206\u9f0e\u5728\u5b64\u7a77\u3002\n        \n        \u9f9a\u666f\u7292\u519b\u6bd5\uff0c\u90b9\u9756\u6b32\u56de\uff0c\u7384\u5fb7\u66f0\uff1a\u201c\u8fd1\u95fb\u4e2d\u90ce\u5c06\u5362\u690d\u4e0e\u8d3c\u9996\u5f20\u89d2\u6218\u4e8e\u5e7f\u5b97\uff0c\u5907\u6614\u66fe\u5e08\u4e8b\u5362\u690d\uff0c\u6b32\u5f80\u52a9\u4e4b\u3002\u201d\u4e8e\u662f\u90b9\u9756\u5f15\u519b\u81ea\u56de\uff0c\u7384\u5fb7\u4e0e\u5173\u3001\u5f20\u5f15\u672c\u90e8\u4e94\u767e\u4eba\u6295\u5e7f\u5b97\u6765\u3002\u81f3\u5362\u690d\u519b\u4e2d\uff0c\u5165\u5e10\u65bd\u793c\uff0c\u5177\u9053\u6765\u610f\u3002\u5362\u690d\u5927\u559c\uff0c\u7559\u5728\u5e10\u524d\u542c\u8c03\u3002\n        \n        \u65f6\u5f20\u89d2\u8d3c\u4f17\u5341\u4e94\u4e07\uff0c\u690d\u5175\u4e94\u4e07\uff0c\u76f8\u62d2\u4e8e\u5e7f\u5b97\uff0c\u672a\u89c1\u80dc\u8d1f\u3002\u690d\u8c13\u7384\u5fb7\u66f0\uff1a\u201c\u6211\u4eca\u56f4\u8d3c\u5728\u6b64\uff0c\u8d3c\u5f1f\u5f20\u6881\u3001\u5f20\u5b9d\uff0c\u5728\u988d\u5ddd\u4e0e\u7687\u752b\u5d69\u3001\u6731\u96bd\u5bf9\u5792\u3002\u6c5d\u53ef\u5f15\u672c\u90e8\u4eba\u9a6c\uff0c\u6211\u66f4\u52a9\u6c5d\u4e00\u5343\u5b98\u519b\uff0c\u524d\u53bb\u988d\u5ddd\u6253\u63a2\u6d88\u606f\uff0c\u7ea6\u671f\u527f\u6355\u3002\u201d\u7384\u5fb7\u9886\u547d\uff0c\u5f15\u519b\u661f\u591c\u6295\u988d\u5ddd\u6765\u3002\u65f6\u7687\u752b\u5d69\u3001\u6731\u96bd\u9886\u519b\u62d2\u8d3c\uff0c\u8d3c\u6218\u4e0d\u5229\uff0c\u9000\u5165\u957f\u793e\uff0c\u4f9d\u8349\u7ed3\u8425\u3002\u5d69\u4e0e\u96bd\u8ba1\u66f0\uff1a\u201c\u8d3c\u4f9d\u8349\u7ed3\u8425\uff0c\u5f53\u7528\u706b\u653b\u4e4b\u3002\u201d\u9042\u4ee4\u519b\u58eb\uff0c\u6bcf\u4eba\u675f\u8349\u4e00\u628a\uff0c\u6697\u5730\u57cb\u4f0f\u3002\u5176\u591c\u5927\u98ce\u5ffd\u8d77\u3002\u4e8c\u66f4\u4ee5\u540e\uff0c\u4e00\u9f50\u7eb5\u706b\uff0c\u5d69\u4e0e\u96bd\u5404\u5f15\u5175\u653b\u6218\uff0c\u8d3c\u5be8\u706b\u7130\u5f20\u5929\u3002\u8d3c\u4f17\u60ca\u614c\uff0c\u9a6c\u4e0d\u53ca\u978d\uff0c\u4eba\u4e0d\u53ca\u7532\uff0c\u56db\u6563\u5954\u8d70\u3002\n        \n        \n         \n        \u6740\u5230\u5929\u660e\uff0c\u5f20\u6881\u3001\u5f20\u5b9d\u5f15\u8d25\u6b8b\u519b\u58eb\uff0c\u593a\u8def\u800c\u8d70\u3002\u5ffd\u89c1\u4e00\u5f6a\u519b\u9a6c\uff0c\u5c3d\u6253\u7ea2\u65d7\uff0c\u5f53\u5934\u6765\u5230\uff0c\u622a\u4f4f\u53bb\u8def\u3002\u4e3a\u9996\u95ea\u51fa\u4e00\u5c06\uff0c\u8eab\u957f\u4e03\u5c3a\uff0c\u7ec6\u773c\u957f\u987b\uff1b\u5b98\u62dc\u9a91\u90fd\u5c09\uff1b\u6c9b\u56fd\u8c2f\u90e1\u4eba\u4e5f\uff1b\u59d3\u66f9\uff0c\u540d\u64cd\uff0c\u5b57\u5b5f\u5fb7\u3002\u64cd\u7236\u66f9\u5d69\uff0c\u672c\u59d3\u590f\u4faf\u6c0f\uff1b\u56e0\u4e3a\u4e2d\u5e38\u4f8d\u66f9\u817e\u4e4b\u517b\u5b50\uff0c\u6545\u5192\u59d3\u66f9\u3002\u66f9\u5d69\u751f\u64cd\uff0c\u5c0f\u5b57\u963f\u7792\uff0c\u4e00\u540d\u5409\u5229\u3002\u64cd\u5e7c\u65f6\uff0c\u597d\u6e38\u730e\uff0c\u559c\u6b4c\u821e\uff1b\u6709\u6743\u8c0b\uff0c\u591a\u673a\u53d8\u3002\u64cd\u6709\u53d4\u7236\uff0c\u89c1\u64cd\u6e38\u8361\u65e0\u5ea6\uff0c\u5c1d\u6012\u4e4b\uff0c\u8a00\u4e8e\u66f9\u5d69\u3002\u5d69\u8d23\u64cd\uff0c\u64cd\u5ffd\u5fc3\u751f\u4e00\u8ba1\uff1a\u89c1\u53d4\u7236\u6765\uff0c\u8bc8\u5012\u4e8e\u5730\uff0c\u4f5c\u4e2d\u98ce\u4e4b\u72b6\u3002\u53d4\u7236\u60ca\u544a\u5d69\uff0c\u5d69\u6025\u89c6\u4e4b\uff0c\u64cd\u6545\u65e0\u6059\u3002\u5d69\u66f0\uff1a\u201c\u53d4\u8a00\u6c5d\u4e2d\u98ce\uff0c\u4eca\u5df2\u6108\u4e4e\uff1f\u201d\u64cd\u66f0\uff1a\u201c\u513f\u81ea\u6765\u65e0\u6b64\u75c5\uff1b\u56e0\u5931\u7231\u4e8e\u53d4\u7236\uff0c\u6545\u89c1\u7f54\u8033\u3002\u201d\u5d69\u4fe1\u5176\u8a00\u3002\u540e\u53d4\u7236\u4f46\u8a00\u64cd\u8fc7\uff0c\u5d69\u5e76\u4e0d\u542c\u3002\u56e0\u6b64\uff0c\u64cd\u5f97\u6063\u610f\u653e\u8361\u3002\u65f6\u4eba\u6709\u6865\u7384\u8005\uff0c\u8c13\u64cd\u66f0\uff1a\u201c\u5929\u4e0b\u5c06\u4e71\uff0c\u975e\u547d\u4e16\u4e4b\u624d\u4e0d\u80fd\u6d4e\u3002\u80fd\u5b89\u4e4b\u8005\uff0c\u5176\u5728\u541b\u4e4e\uff1f\u201d\u5357\u9633\u4f55\u9899\u89c1\u64cd\uff0c\u8a00\uff1a\u201c\u6c49\u5ba4\u5c06\u4ea1\uff0c\u5b89\u5929\u4e0b\u8005\uff0c\u5fc5\u6b64\u4eba\u4e5f\u3002\u201d\u6c5d\u5357\u8bb8\u52ad\uff0c\u6709\u77e5\u4eba\u4e4b\u540d\u3002\u64cd\u5f80\u89c1\u4e4b\uff0c\u95ee\u66f0\uff1a\u201c\u6211\u4f55\u5982\u4eba\uff1f\u201d\u52ad\u4e0d\u7b54\u3002\u53c8\u95ee\uff0c\u52ad\u66f0\uff1a\u201c\u5b50\u6cbb\u4e16\u4e4b\u80fd\u81e3\uff0c\u4e71\u4e16\u4e4b\u5978\u96c4\u4e5f\u3002\u201d\u64cd\u95fb\u8a00\u5927\u559c\u3002\u5e74\u4e8c\u5341\uff0c\u4e3e\u5b5d\u5ec9\uff0c\u4e3a\u90ce\uff0c\u9664\u6d1b\u9633\u5317\u90fd\u5c09\u3002\u521d\u5230\u4efb\uff0c\u5373\u8bbe\u4e94\u8272\u68d2\u5341\u4f59\u6761\u4e8e\u53bf\u4e4b\u56db\u95e8\u3002\u6709\u72af\u7981\u8005\uff0c\u4e0d\u907f\u8c6a\u8d35\uff0c\u7686\u8d23\u4e4b\u3002\u4e2d\u5e38\u4f8d\u8e47\u7855\u4e4b\u53d4\uff0c\u63d0\u5200\u591c\u884c\uff0c\u64cd\u5de1\u591c\u62cf\u4f4f\uff0c\u5c31\u68d2\u8d23\u4e4b\u3002\u7531\u662f\uff0c\u5185\u5916\u83ab\u6562\u72af\u8005\uff0c\u5a01\u540d\u9887\u9707\u3002\u540e\u4e3a\u987f\u4e18\u4ee4\u3002\u56e0\u9ec4\u5dfe\u8d77\uff0c\u62dc\u4e3a\u9a91\u90fd\u5c09\uff0c\u5f15\u9a6c\u6b65\u519b\u4e94\u5343\uff0c\u524d\u6765\u988d\u5ddd\u52a9\u6218\u3002\u6b63\u503c\u5f20\u6881\u3001\u5f20\u5b9d\u8d25\u8d70\uff0c\u66f9\u64cd\u62e6\u4f4f\uff0c\u5927\u6740\u4e00\u9635\uff0c\u65a9\u9996\u4e07\u4f59\u7ea7\uff0c\u593a\u5f97\u65d7\u5e61\u3001\u91d1\u9f13\u3001\u9a6c\u5339\u6781\u591a\u3002\u5f20\u6881\u3001\u5f20\u5b9d\u6b7b\u6218\u5f97\u8131\u3002\u64cd\u89c1\u8fc7\u7687\u752b\u5d69\u3001\u6731\u96bd\uff0c\u968f\u5373\u5f15\u5175\u8ffd\u88ad\u5f20\u6881\u5f20\u5b9d\u53bb\u4e86\u3002\n        \n        \u5374\u8bf4\u7384\u5fb7\u5f15\u5173\u3001\u5f20\u6765\u988d\u5ddd\uff0c\u542c\u5f97\u558a\u6740\u4e4b\u58f0\uff0c\u53c8\u671b\u89c1\u706b\u5149\u70db\u5929\uff0c\u6025\u5f15\u5175\u6765\u65f6\uff0c\u8d3c\u5df2\u8d25\u6563\u3002\u7384\u5fb7\u89c1\u7687\u752b\u5d69\u3001\u6731\u96bd\uff0c\u5177\u9053\u5362\u690d\u4e4b\u610f\u3002\u5d69\u66f0\uff1a\u201c\u5f20\u6881\u3001\u5f20\u5b9d\u52bf\u7a77\u529b\u4e4f\uff0c\u5fc5\u6295\u5e7f\u5b97\uff0c\u53bb\u4f9d\u5f20\u89d2\u3002\u7384\u5fb7\u53ef\u5373\u661f\u591c\u5f80\u52a9\u3002\u201d\u7384\u5fb7\u9886\u547d\uff0c\u9042\u5f15\u5175\u590d\u56de\u3002\u5230\u5f97\u534a\u8def\uff0c\u53ea\u89c1\u4e00\u7c07\u519b\u9a6c\uff0c\u62a4\u9001\u4e00\u8f86\u69db\u8f66\uff1b\u8f66\u4e2d\u4e4b\u56da\uff0c\u4e43\u5362\u690d\u4e5f\u3002\u7384\u5fb7\u5927\u60ca\uff0c\u6eda\u978d\u4e0b\u9a6c\uff0c\u95ee\u5176\u7f18\u6545\u3002\u690d\u66f0\uff1a\u201c\u6211\u56f4\u5f20\u89d2\uff0c\u5c06\u6b21\u53ef\u7834\uff1b\u56e0\u89d2\u7528\u5996\u672f\uff0c\u672a\u80fd\u5373\u80dc\u3002\u671d\u5ef7\u5dee\u9ec4\u95e8\u5de6\u4e30\u524d\u6765\u6253\u63a2\uff0c\u95ee\u6211\u7d22\u53d6\u8d3f\u8d42\u3002\u6211\u7b54\u66f0\uff1a\u2018\u519b\u7cae\u5c1a\u7f3a\uff0c\u5b89\u6709\u4f59\u94b1\u5949\u627f\u5929\u4f7f\uff1f\u2019\u5de6\u4e30\u631f\u6068\uff0c\u56de\u594f\u671d\u5ef7\uff0c\u8bf4\u6211\u9ad8\u5792\u4e0d\u6218\uff0c\u60f0\u6162\u519b\u5fc3\uff1b\u56e0\u6b64\u671d\u5ef7\u9707\u6012\uff0c\u9063\u4e2d\u90ce\u5c06\u8463\u5353\u6765\u4ee3\u5c06\u6211\u5175\uff0c\u53d6\u6211\u56de\u4eac\u95ee\u7f6a\u3002\u201d\u5f20\u98de\u542c\u7f62\uff0c\u5927\u6012\uff0c\u8981\u65a9\u62a4\u9001\u519b\u4eba\uff0c\u4ee5\u6551\u5362\u690d\u3002\u7384\u5fb7\u6025\u6b62\u4e4b\u66f0\uff1a\u201c\u671d\u5ef7\u81ea\u6709\u516c\u8bba\uff0c\u6c5d\u5c82\u53ef\u9020\u6b21\uff1f\u201d\u519b\u58eb\u7c07\u62e5\u5362\u690d\u53bb\u4e86\u3002\n        \n        \u5173\u516c\u66f0\uff1a\u201c\u5362\u4e2d\u90ce\u5df2\u88ab\u902e\uff0c\u522b\u4eba\u9886\u5175\uff0c\u6211\u7b49\u53bb\u65e0\u6240\u4f9d\uff0c\u4e0d\u5982\u4e14\u56de\u6dbf\u90e1\u3002\u201d\u7384\u5fb7\u4ece\u5176\u8a00\uff0c\u9042\u5f15\u519b\u5317\u884c\u3002\u884c\u65e0\u4e8c\u65e5\uff0c\u5ffd\u95fb\u5c71\u540e\u558a\u58f0\u5927\u9707\u3002\u7384\u5fb7\u5f15\u5173\u3001\u5f20\u7eb5\u9a6c\u4e0a\u9ad8\u5188\u671b\u4e4b\uff0c\u89c1\u6c49\u519b\u5927\u8d25\uff0c\u540e\u9762\u6f2b\u5c71\u585e\u91ce\uff0c\u9ec4\u5dfe\u76d6\u5730\u800c\u6765\uff0c\u65d7\u4e0a\u5927\u4e66\u201c\u5929\u516c\u5c06\u519b\u201d\u3002\u7384\u5fb7\u66f0\uff1a\u201c\u6b64\u5f20\u89d2\u4e5f\uff01\u53ef\u901f\u6218\uff01\u201d\u4e09\u4eba\u98de\u9a6c\u5f15\u519b\u800c\u51fa\u3002\u5f20\u89d2\u6b63\u6740\u8d25\u8463\u5353\uff0c\u4e58\u52bf\u8d76\u6765\uff0c\u5ffd\u9047\u4e09\u4eba\u51b2\u6740\uff1b\u89d2\u519b\u5927\u4e71\uff0c\u8d25\u8d70\u4e94\u5341\u4f59\u91cc\u3002\u4e09\u4eba\u6551\u4e86\u8463\u5353\u56de\u5be8\u3002\u5353\u95ee\u4e09\u4eba\u73b0\u5c45\u4f55\u804c\u3002\u7384\u5fb7\u66f0\uff1a\u201c\u767d\u8eab\u3002\u201d\u5353\u751a\u8f7b\u4e4b\uff0c\u4e0d\u4e3a\u793c\u3002\u7384\u5fb7\u51fa\uff0c\u5f20\u98de\u5927\u6012\u66f0\uff1a\u201c\u6211\u7b49\u4eb2\u8d74\u8840\u6218\uff0c\u6551\u4e86\u8fd9\u53ae\uff0c\u4ed6\u5374\u5982\u6b64\u65e0\u793c\uff1b\u82e5\u4e0d\u6740\u4e4b\uff0c\u96be\u6d88\u6211\u6c14\uff01\u201d\u4fbf\u8981\u63d0\u5200\u5165\u5e10\u6765\u6740\u8463\u5353\u3002\n        \n        \u6b63\u662f\uff1a\n        \n        \u4eba\u60c5\u52bf\u5229\u53e4\u72b9\u4eca\uff0c\u8c01\u8bc6\u82f1\u96c4\u662f\u767d\u8eab\uff1f\u5b89\u5f97\u5feb\u4eba\u5982\u7ffc\u5fb7\uff0c\u5c3d\u8bdb\u4e16\u4e0a\u8d1f\u5fc3\u4eba\uff01\u6bd5\u7adf\u8463\u5353\u6027\u547d\u5982\u4f55\uff0c\u4e14\u542c\u4e0b\u6587\u5206\u89e3\u3002";
        longtext = longtext.split("\n").map(function(x) {
          return x.trim();
        }).filter(function(x) {
          return x.length > 0;
        }).map(function(x) {
          return _this.split_by_length(x, 40);
        }).join("\n");
        this.scheduleOnce(function() {
          _this.label.string = longtext;
        }, 0);
      };
      NewClass.prototype.split_by_length = function(str, len) {
        var m = Array.from(str);
        var idx = 0;
        var total = m.length;
        var ret = [];
        while (idx < total) {
          var l = Math.min(len, total - idx);
          if (!(l > 0)) break;
          ret.push(m.slice(idx, l + idx).join(""));
          idx += l;
        }
        return ret.join("\n");
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  LoadModuleCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9e702GubHpK+4vAb3yu2OW5", "LoadModuleCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        monsterTemp: {
          default: null,
          type: cc.Prefab
        },
        btn_createMonster: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.btn_createMonster.on(cc.Node.EventType.TOUCH_END, this.createMoster.bind(this));
      },
      createMoster: function createMoster() {
        var monster = cc.instantiate(this.monsterTemp);
        var Monster = require("Monster");
        var monsterComp = monster.getComponent(Monster);
        var InitData = require("InitData");
        monsterComp.initInfo(InitData.monsterInfo);
        monster.parent = this.node;
        monster.setPosition(cc.v2(0, 0));
        this.btn_createMonster.active = false;
      }
    });
    cc._RF.pop();
  }, {
    InitData: "InitData",
    Monster: "Monster"
  } ],
  LoadRes_example: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d7c19DG8M5Dp7vHrQu5a8gK", "LoadRes_example");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        content: cc.Node,
        _url: [],
        _assets: []
      },
      onLoad: function onLoad() {
        this._url = [ "test_assets/atlas", "test_assets/prefab" ];
      },
      loadSpriteFrame: function loadSpriteFrame() {
        var _this = this;
        var url = this._url[0];
        this._removeAllChildren();
        cc.resources.load(url, cc.SpriteAtlas, function(err, atlas) {
          _this._assets.push(atlas.addRef());
          _this._removeAllChildren();
          var node = new cc.Node();
          _this.content.addChild(node);
          node.position = cc.v2(0, 0);
          var sprite = node.addComponent(cc.Sprite);
          sprite.spriteFrame = atlas.getSpriteFrame("sheep_run_0");
        });
      },
      loadPrefab: function loadPrefab() {
        var _this2 = this;
        var url = this._url[1];
        this._removeAllChildren();
        cc.resources.load(url, cc.Prefab, function(err, prefab) {
          _this2._assets.push(prefab.addRef());
          _this2._removeAllChildren();
          var node = cc.instantiate(prefab);
          _this2.content.addChild(node);
          node.position = cc.v2(0, 0);
        });
      },
      onDisable: function onDisable() {
        this._assets.forEach(function(x) {
          return x.decRef();
        });
        this._assets = null;
      },
      _removeAllChildren: function _removeAllChildren() {
        this.content.removeAllChildren(true);
      }
    });
    cc._RF.pop();
  }, {} ],
  LoadSpine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "282b2tQFyZNyISOFPjrcQoM", "LoadSpine");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Component,
      editor: {
        requireComponent: sp.Skeleton
      },
      properties: {
        label: {
          default: null,
          type: cc.Label
        }
      },
      start: function start() {
        cc.resources.load("loadSpine/alien-ess", sp.SkeletonData, this.onProcess.bind(this), this.onComplete.bind(this));
      },
      onProcess: function onProcess(completeCount, totalCount, item) {},
      onComplete: function onComplete(err, res) {
        if (err) {
          this.label.textKey = i18n.t("sprite_loadRes_asset_failed");
          cc.error(err);
        }
        var spine = this.getComponent("sp.Skeleton");
        spine.skeletonData = res;
        var animate = spine.setAnimation(0, "run", true);
        this.label.textKey = i18n.t("sprite_loadRes_asset_success");
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  LoadingBarCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "102a9wU40RJd4SnQqQQzQT9", "LoadingBarCtrl");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Component,
      properties: {
        progressBar: {
          default: null,
          type: cc.ProgressBar
        },
        progressTips: {
          default: null,
          type: cc.Label
        },
        laodBg: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this._urls = [ "audio/ding", "audio/cheering", "audio/music_logo", "test_assets/audio", "loadingBar/font", "loadingBar/mikado_outline_shadow", "loadingBar/enligsh-chinese" ];
        this.resource = null;
        this.progressBar.progress = 0;
        this._clearAll();
        this.progressTips.textKey = i18n.t("cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.3");
        this.node.on(cc.Node.EventType.TOUCH_START, function() {
          if (this.resource) return;
          cc.resources.load(this._urls, this._progressCallback.bind(this), this._completeCallback.bind(this));
        }, this);
      },
      _clearAll: function _clearAll() {
        for (var i = 0; i < this._urls.length; ++i) {
          var url = this._urls[i];
          cc.resources.release(url);
        }
      },
      _progressCallback: function _progressCallback(completedCount, totalCount, res) {
        this.progress = completedCount / totalCount;
        this.resource = res;
        this.completedCount = completedCount;
        this.totalCount = totalCount;
      },
      _completeCallback: function _completeCallback(error, res) {},
      update: function update(dt) {
        if (!this.resource) return;
        var progress = this.progressBar.progress;
        if (progress >= 1) {
          this.progressTips.textKey = i18n.t("cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.1");
          this.laodBg.active = false;
          this.progressBar.node.active = false;
          this.enabled = false;
          return;
        }
        progress < this.progress && (progress += dt);
        this.progressBar.progress = progress;
        this.progressTips.textKey = i18n.t("cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.2") + this.resource.id + " (" + this.completedCount + "/" + this.totalCount + ")";
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  MaskCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c324aDRcOtM1oTGYSemsKTY", "MaskCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        mask: cc.Mask,
        slider: cc.Slider,
        label: cc.Label
      },
      onLoad: function onLoad() {
        this.slider.progress = this.mask.alphaThreshold;
      },
      update: function update(dt) {
        if (cc.game.renderType !== cc.game.RENDER_TYPE_WEBGL && true) return;
        this.mask.alphaThreshold = this.slider.progress;
        this.label.string = this.slider.progress.toFixed(1);
      }
    });
    cc._RF.pop();
  }, {} ],
  Menu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "04525pyYBlN26SWawaUF3dA", "Menu");
    "use strict";
    var i18n = require("i18n");
    var SceneList = require("SceneList");
    var TipsManager = require("TipsManager");
    var MainScene = "TestList.fire";
    cc.Class({
      extends: cc.Component,
      properties: {
        text: cc.Label,
        readme: cc.ScrollView,
        btnInfo: cc.Button,
        btnBack: cc.Button,
        testList: cc.ScrollView,
        uiCamera: cc.Camera,
        sceneTitle: cc.Label,
        searchBlock: cc.Node
      },
      onLoad: function onLoad() {
        this._isLoadingScene = false;
        this.showDebugDraw = false;
        cc.game.addPersistRootNode(this.node);
        this.currentSceneUrl = MainScene;
        this.contentPos = null;
        this.btnBack.node.active = false;
        this.loadInstruction(this.currentSceneUrl);
        this.storage = this.node.getComponent("StorageUtil");
        cc.game.addPersistRootNode(this.searchBlock);
        cc.game.addPersistRootNode(this.testList.node);
        if (this.testList && this.testList.content) {
          this.sceneList = this.testList.content.getComponent(SceneList);
          this.sceneList.init(this);
        }
        "undefined" !== typeof cocosAnalytics && cocosAnalytics.isInited && cocosAnalytics.isInited() && cocosAnalytics.CAEvent.onEvent({
          eventName: "\u6253\u5f00\u8303\u4f8b"
        });
        cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, this._onSceneLaunched, this);
        var url = this.storage.getCurrentScene();
        url && this.loadScene(url);
      },
      _onSceneLaunched: function _onSceneLaunched() {
        var cameras = cc.Camera.cameras;
        for (var i = 0, l = cameras.length; i < l; i++) {
          var camera = cameras[i];
          camera === this.uiCamera ? camera.cullingMask = 1 << this.node.groupIndex : camera.cullingMask = camera.cullingMask & ~(1 << this.node.groupIndex);
        }
      },
      backToList: function backToList() {
        this.loadScene(MainScene);
      },
      loadScene: function loadScene(url) {
        if (this._isLoadingScene) return;
        var result = cc.director.loadScene(url, this.onLoadSceneFinish.bind(this));
        if (!result) {
          this.storage.setCurrentScene("");
          return;
        }
        this._isLoadingScene = true;
        this.showReadme(null, false);
        this.contentPos = this.testList.getContentPosition();
        this.currentSceneUrl = url;
        "undefined" !== typeof cocosAnalytics && cocosAnalytics.isInited && cocosAnalytics.isInited() && cocosAnalytics.CALevels.begin({
          level: url
        });
      },
      onLoadSceneFinish: function onLoadSceneFinish() {
        var url = this.currentSceneUrl;
        this.loadInstruction(url);
        this.storage.setCurrentScene(url);
        this.testList.node.active = false;
        var isMenu = url.endsWith(MainScene);
        this.btnBack.node.active = this.sceneTitle.node.active = !isMenu;
        this.testList.node.active = isMenu;
        isMenu ? this.contentPos && this.testList.setContentPosition(this.contentPos) : this.sceneTitle.string = url.replace("db://assets/cases/", "");
        this._isLoadingScene = false;
      },
      _getAdjacentScenes: function _getAdjacentScenes() {
        var _this = this;
        var res = {
          next: "",
          prev: ""
        };
        var sceneList = this.sceneList.sceneList;
        function findAvailableScene(startIndex, step) {
          for (var i = startIndex; 0 <= i && i < sceneList.length; i += step) {
            var url = sceneList[i].url;
            if (url) {
              var sceneName = cc.path.basename(url, ".fire");
              var available = TipsManager.hasSupport(sceneName, true);
              if (available) return url;
            }
          }
          return MainScene;
        }
        if (this.currentSceneUrl.endsWith(MainScene)) {
          res.next = findAvailableScene(0, 1);
          res.prev = findAvailableScene(sceneList.length - 1, -1);
        } else {
          var i = -1;
          sceneList.some(function(item, index) {
            if (item.url === _this.currentSceneUrl) {
              i = index;
              return true;
            }
            return false;
          });
          if (-1 !== i) {
            res.next = findAvailableScene(i + 1, 1);
            res.prev = findAvailableScene(i - 1, -1);
          }
        }
        return res;
      },
      nextScene: function nextScene() {
        var _this$_getAdjacentSce = this._getAdjacentScenes(), next = _this$_getAdjacentSce.next;
        next && this.loadScene(next);
      },
      prevScene: function prevScene() {
        var _this$_getAdjacentSce2 = this._getAdjacentScenes(), prev = _this$_getAdjacentSce2.prev;
        prev && this.loadScene(prev);
      },
      loadInstruction: function loadInstruction(url) {
        var self = this;
        var urlArr = url.split("/");
        var fileName = urlArr[urlArr.length - 1].replace(".fire", "");
        cc.resources.load("readme/" + fileName, cc.TextAsset, function(err, asset) {
          if (err) {
            self.text.string = i18n.t("scripts/Global/Menu.js.1");
            return;
          }
          self.text.string = asset.text;
        });
      },
      showReadme: function showReadme(event, active) {
        void 0 === active && (active = !this.readme.node.active);
        this.readme.node.active = active;
        active && this.readme.scrollToTop();
        var enabledDebugDraw = cc.director.getCollisionManager().enabledDebugDraw;
        if (this.readme.node.active) {
          this.showDebugDraw = enabledDebugDraw;
          cc.director.getCollisionManager().enabledDebugDraw = false;
        } else cc.director.getCollisionManager().enabledDebugDraw = this.showDebugDraw;
        var videoPlayer = cc.find("Canvas/VideoPlayer");
        videoPlayer && (videoPlayer.active = !this.readme.node.active);
      },
      restart: function restart() {
        cc.game.restart();
      },
      gc: function gc() {
        cc.sys.garbageCollect();
      }
    });
    cc._RF.pop();
  }, {
    SceneList: "SceneList",
    TipsManager: "TipsManager",
    i18n: "i18n"
  } ],
  MonsterPrefab: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8cb4dm2QEpJ7pnaS/cjrvgF", "MonsterPrefab");
    "use strict";
    var Helpers = require("Helpers");
    cc.Class({
      extends: cc.Component,
      properties: {
        spriteList: {
          default: [],
          type: [ cc.SpriteFrame ]
        }
      },
      onLoad: function onLoad() {
        var randomIdx = Helpers.getRandomInt(0, this.spriteList.length);
        var sprite = this.getComponent(cc.Sprite);
        sprite.spriteFrame = this.spriteList[randomIdx];
      }
    });
    cc._RF.pop();
  }, {
    Helpers: "Helpers"
  } ],
  Monster: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e31b0+PoDRJXIDHFxy60vEs", "Monster");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        nickname: {
          default: null,
          type: cc.Label
        },
        lv: {
          default: null,
          type: cc.Label
        },
        hp: {
          default: null,
          type: cc.Label
        },
        atk: {
          default: null,
          type: cc.Label
        },
        defense: {
          default: null,
          type: cc.Label
        },
        image: {
          default: null,
          type: cc.Sprite
        },
        loadSpriteFrame: null
      },
      initInfo: function initInfo(info) {
        this.nickname.string = info.name;
        this.lv.string = info.lv;
        this.hp.string = info.hp;
        this.atk.string = info.atk;
        this.defense.string = info.defense;
        var image = this.image;
        var self = this;
        cc.resources.load(info.imageUrl, cc.SpriteFrame, function(error, spriteFrame) {
          if (!error) {
            self.loadSpriteFrame = spriteFrame.addRef();
            image.spriteFrame = spriteFrame;
          }
        });
      },
      onDestroy: function onDestroy() {
        this.loadSpriteFrame && this.loadSpriteFrame.decRef();
        this.image.spriteFrame = null;
      }
    });
    cc._RF.pop();
  }, {} ],
  MotionStreakCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f7722zlKP5HoKMY5VvWPCON", "MotionStreakCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        motionStreak: cc.MotionStreak,
        newTexture: {
          default: null,
          type: cc.Texture2D
        }
      },
      onLoad: function onLoad() {
        this._changed = true;
        this.oldTexture = this.motionStreak.texture;
        this.animationCom = this.motionStreak.node.getComponent(cc.Animation);
      },
      onClick: function onClick() {
        this._changed ? this.setMotionStreak(2, 3, 20, this.newTexture) : this.setMotionStreak(.5, 1, 30, this.oldTexture);
        this._changed = !this._changed;
      },
      setMotionStreak: function setMotionStreak(fadeTime, minSeg, stroke, texture) {
        this.motionStreak.fadeTime = fadeTime;
        this.motionStreak.minSeg = minSeg;
        this.motionStreak.stroke = stroke;
        this.motionStreak.texture = texture;
      },
      lateUpdate: function lateUpdate() {
        this.animationCom.getAnimationState("move_around").isPlaying || this.animationCom.play();
      },
      onDisable: function onDisable() {
        this.motionStreak.node.getComponent(cc.Animation).stop();
      }
    });
    cc._RF.pop();
  }, {} ],
  MouseDragger: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2412ev9NSRMeI28JHH2OS8r", "MouseDragger");
    "use strict";
    var TouchDragger = cc.Class({
      extends: cc.Component,
      properties: {
        propagate: {
          default: false
        }
      },
      onLoad: function onLoad() {
        this._down = false;
        this.node.opacity = 160;
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function(event) {
          cc.log("Drag stated ...");
          this.node.opacity = 255;
          this._down = true;
          this.propagate || event.stopPropagation();
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_MOVE, function(event) {
          if (!this._down) {
            event.stopPropagation();
            return;
          }
          this.node.opacity = 255;
          var delta = event.getDelta();
          this.node.x += delta.x;
          this.node.y += delta.y;
          this.propagate || event.stopPropagation();
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, function(event) {
          if (!this._down) {
            event.stopPropagation();
            return;
          }
          this.node.opacity = 160;
          cc.log("Drag leave ...");
          this._down = false;
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, function(event) {
          if (!this._down) {
            event.stopPropagation();
            return;
          }
          cc.log("Drag done ...");
          this.node.opacity = 160;
          this._down = false;
        }, this);
      }
    });
    cc._RF.pop();
  }, {} ],
  MouseEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6df0ft1jy5Jg4cQ039jt8jC", "MouseEvent");
    "use strict";
    cc.Class({
      extends: cc.Component,
      move: function move(event) {
        this.node.x += event.getDeltaX();
        this.node.y += event.getDeltaY();
      },
      onLoad: function onLoad() {
        this.scroll = 0;
        this.node.opacity = 50;
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function() {
          this.node.opacity = 255;
          this.node.on(cc.Node.EventType.MOUSE_MOVE, this.move, this);
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_ENTER, function() {
          this.node.opacity = 160;
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, function() {
          this.node.opacity = 50;
          this.node.off(cc.Node.EventType.MOUSE_MOVE, this.move, this);
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, function() {
          this.node.opacity = 50;
          this.node.off(cc.Node.EventType.MOUSE_MOVE, this.move, this);
          this._callback && this._callback();
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_WHEEL, function(event) {
          this.scroll += event.getScrollY();
          var h = this.node.height;
          this.scroll = cc.misc.clampf(this.scroll, -2 * h, .7 * h);
          this.node.scale = 1 - this.scroll / h;
        }, this);
      }
    });
    cc._RF.pop();
  }, {} ],
  MoveAction: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ddd4eaLxVZFlZbzaPaqdL9D", "MoveAction");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        moveTo: cc.Node,
        moveBy: cc.Node
      },
      onLoad: function onLoad() {
        var moveTo = cc.moveTo(.5, cc.v2(0, 0));
        var moveBy = cc.moveBy(.5, cc.v2(100, 100));
        this.moveTo.runAction(moveTo);
        this.moveBy.runAction(moveBy);
      }
    });
    cc._RF.pop();
  }, {} ],
  MoveAnimationCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1dc95dq3mVI658br0l2Zbi0", "MoveAnimationCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        target: {
          default: null,
          type: cc.Animation
        },
        nodes: {
          default: [],
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.onRegisteredEvent();
      },
      onRegisteredEvent: function onRegisteredEvent() {
        for (var i = 0; i < this.nodes.length; ++i) this.nodes[i].on(cc.Node.EventType.TOUCH_END, this.onPlayAnimation.bind(this));
      },
      onPlayAnimation: function onPlayAnimation(event) {
        this.target.stop();
        switch (event.target._name) {
         case "Linear":
          this.target.play("linear");
          break;

         case "CaseIn_Expo":
          this.target.play("caseIn-expo");
          break;

         case "CaseOut_Expo":
          this.target.play("caseOut-expo");
          break;

         case "CaseInOut_Expo":
          this.target.play("caseInOut-expo");
          break;

         case "Back_Forward":
          this.target.play("back-forward");
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  MyCustomComponent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6b8baEpLuxACIMNlIL2vw2W", "MyCustomComponent");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        power: 10
      },
      getPower: function getPower() {
        return this.power;
      }
    });
    cc._RF.pop();
  }, {} ],
  NativeCallCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5245dIEBoFFB4RdXwoJQM2G", "NativeCallCtrl");
    "use strict";
    var tips = null;
    cc.TestNativeCallJS = function() {
      tips.string = "The test was successful...";
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        button: cc.Node
      },
      start: function start() {
        var tipNode = cc.find("Canvas/New Label");
        tips = tipNode.getComponent(cc.Label);
        tips.string = "Native Call Test";
      },
      onClick: function onClick() {
        if (cc.sys.os === cc.sys.OS_ANDROID) {
          var className = "org/cocos2dx/javascript/AppActivity";
          var methodName = "showAlertDialog";
          var methodSignature = "(Ljava/lang/String;Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, "Title", "Native Call Test");
        } else cc.sys.os !== cc.sys.OS_IOS && cc.sys.os !== cc.sys.OS_OSX || jsb.reflection.callStaticMethod("AppController", "showAlertDialog:withMessage:", "Title", "Native Call Test");
      }
    });
    cc._RF.pop();
  }, {} ],
  NetworkCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "10908h1aHRPPowxQQzUCVMD", "NetworkCtrl");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Component,
      properties: {
        xhr: cc.Label,
        xhrAB: cc.Label,
        xhrTimeout: cc.Label,
        websocket: cc.Label,
        socketIO: cc.Label,
        xhrResp: cc.Label,
        xhrABResp: cc.Label,
        xhrTimeoutResp: cc.Label,
        websocketResp: cc.Label,
        socketIOResp: cc.Label,
        wssCacert: {
          type: cc.Asset,
          default: null
        },
        _reconnectCount: 0
      },
      onLoad: function onLoad() {
        this._wsiSendBinary = null;
        this._xhrXHR = null;
        this._xhrHRAB = null;
        this._xhrXHRTimeout = null;
        this.xhrResp.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.1");
        this.xhrABResp.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.2");
        this.xhrTimeoutResp.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.2");
        this.websocketResp.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.3");
        this.socketIOResp.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.4");
        this.sendXHR();
        this.sendXHRAB();
        this.sendXHRTimeout();
        this.prepareWebSocket();
        this.sendSocketIO();
      },
      onDisable: function onDisable() {
        var wsiSendBinary = this._wsiSendBinary;
        if (wsiSendBinary) {
          wsiSendBinary.onopen = null;
          wsiSendBinary.onmessage = null;
          wsiSendBinary.onerror = null;
          wsiSendBinary.onclose = null;
          wsiSendBinary.close();
        }
        this.rmXhrEventListener(this._xhrXHR);
        this.rmXhrEventListener(this._xhrHRAB);
        this.rmXhrEventListener(this._xhrXHRTimeout);
      },
      sendXHR: function sendXHR() {
        var xhr = new XMLHttpRequest();
        this.streamXHREventsToLabel(xhr, this.xhr, this.xhrResp, "GET");
        xhr.open("GET", "https://httpbin.org/get?show_env=1", true);
        cc.sys.isNative && xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
        xhr.timeout = 1e4;
        xhr.send();
        this._xhrXHR = xhr;
      },
      sendXHRAB: function sendXHRAB() {
        var xhr = new XMLHttpRequest();
        this.streamXHREventsToLabel(xhr, this.xhrAB, this.xhrABResp, "POST");
        xhr.open("POST", "https://httpbin.org/post");
        xhr.setRequestHeader("Content-Type", "text/plain");
        xhr.send(new Uint8Array([ 1, 2, 3, 4, 5 ]));
        this._xhrHRAB = xhr;
      },
      sendXHRTimeout: function sendXHRTimeout() {
        var xhr = new XMLHttpRequest();
        this.streamXHREventsToLabel(xhr, this.xhrTimeout, this.xhrTimeoutResp, "GET");
        xhr.open("GET", "https://192.168.22.222", true);
        xhr.timeout = 5e3;
        xhr.send();
        this._xhrXHRTimeout = xhr;
      },
      prepareWebSocket: function prepareWebSocket() {
        var self = this;
        var websocketLabel = this.websocket;
        var respLabel = this.websocketResp;
        this._wsiSendBinary = new WebSocket("wss://echo.websocket.org", [], this.wssCacert.nativeUrl);
        this._wsiSendBinary.binaryType = "arraybuffer";
        this._wsiSendBinary.onopen = function(evt) {
          websocketLabel.textKey = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.5");
          respLabel.string = "Opened!";
        };
        this._wsiSendBinary.onmessage = function(evt) {
          var binary = new Uint16Array(evt.data);
          var binaryStr = "response bin msg: ";
          var str = "";
          for (var i = 0; i < binary.length; i++) if (0 === binary[i]) str += "'\\0'"; else {
            var hexChar = "0x" + binary[i].toString("16").toUpperCase();
            str += String.fromCharCode(hexChar);
          }
          binaryStr += str;
          respLabel.string = binaryStr;
          websocketLabel.textKey = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.6");
        };
        this._wsiSendBinary.onerror = function(evt) {
          websocketLabel.textKey = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.7");
          respLabel.string = "Error!";
        };
        this._wsiSendBinary.onclose = function(evt) {
          websocketLabel.textKey = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.8");
          self._wsiSendBinary = null;
          respLabel.string = "Close!";
        };
        this.scheduleOnce(this.sendWebSocketBinary, 1);
      },
      sendWebSocketBinary: function sendWebSocketBinary(sender) {
        if (!this._wsiSendBinary) return;
        if (this._wsiSendBinary.readyState === WebSocket.OPEN) {
          this.websocket.textKey = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.9");
          var buf = "Hello WebSocket\u4e2d\u6587,\0 I'm\0 a\0 binary\0 message\0.";
          var arrData = new Uint16Array(buf.length);
          for (var i = 0; i < buf.length; i++) arrData[i] = buf.charCodeAt(i);
          this._wsiSendBinary.send(arrData.buffer);
        } else {
          var warningStr = "send binary websocket instance wasn't ready...";
          this.websocket.textKey = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.10") + warningStr;
          this.scheduleOnce(function() {
            this.sendWebSocketBinary();
          }, 1);
        }
      },
      testevent: function testevent(data) {
        if (!this.socketIO) return;
        var msg = this.tag + " says 'testevent' with data: " + data;
        this.socketIO.textKey = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.11") + msg;
      },
      message: function message(data) {
        if (!this.socketIO) return;
        var msg = this.tag + " received message: " + data;
        this.socketIOResp.string = msg;
      },
      disconnection: function disconnection() {
        if (!this.socketIO) return;
        var msg = this.tag + " disconnected!";
        this.socketIO.textKey = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.12") + msg;
        this.socketIOResp.string = msg;
      },
      reconnecting: function reconnecting() {
        if (!this.socketIO) return;
        this._reconnectCount++;
        var msg = this.tag + " is reconnecting(" + this._reconnectCount + ")";
        this.socketIO.textKey = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.12") + msg;
        this.socketIOResp.string = "Reconnecting...";
      },
      sendSocketIO: function sendSocketIO() {
        var self = this;
        if ("undefined" === typeof io) {
          cc.error("You should import the socket.io.js as a plugin!");
          return;
        }
        var sioclient = io.connect("ws://tools.itharbors.com:4000", {
          "force new connection": true
        });
        this._sioClient = sioclient;
        this.tag = sioclient.tag = "Test Client";
        sioclient.on("connect", function() {
          if (!self.socketIO) return;
          var msg = sioclient.tag + " Connected!";
          self.socketIO.textKey = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.13") + msg;
          self._sioClient.send("Hello Socket.IO!");
        });
        sioclient.on("message", this.message.bind(this));
        sioclient.on("echotest", function(data) {
          if (!self.socketIO) return;
          cc.log("echotest 'on' callback fired!");
          var msg = self.tag + " says 'echotest' with data: " + data;
          self.socketIO.textKey = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.14") + msg;
        });
        sioclient.on("testevent", this.testevent.bind(this));
        sioclient.on("disconnect", this.disconnection.bind(this));
        sioclient.on("reconnecting", this.reconnecting.bind(this));
      },
      streamXHREventsToLabel: function streamXHREventsToLabel(xhr, eventLabel, label, method, responseHandler) {
        var handler = responseHandler || function(response) {
          return method + " Response (30 chars): " + response.substring(0, 30) + "...";
        };
        var eventLabelOrigin = eventLabel.string;
        [ "loadstart", "abort", "error", "load", "loadend", "timeout" ].forEach(function(eventname) {
          xhr["on" + eventname] = function() {
            eventLabel.string = eventLabelOrigin + "\nEvent : " + eventname;
            "timeout" === eventname ? label.string += "(timeout)" : "loadend" === eventname && "(timeout)" !== eventname && (label.string += "...loadend!");
          };
        });
        xhr.onreadystatechange = function() {
          4 === xhr.readyState && xhr.status >= 200 ? label.string = handler(xhr.responseText) : 404 === xhr.status ? label.string = "404 page not found!" : 3 === xhr.readyState ? label.string = "Request dealing!" : 2 === xhr.readyState ? label.string = "Request received!" : 1 === xhr.readyState ? label.string = "Server connection established! Request hasn't been received" : 0 === xhr.readyState && (label.string = "Request hasn't been initiated!");
        };
      },
      rmXhrEventListener: function rmXhrEventListener(xhr) {
        if (!xhr) return;
        [ "loadstart", "abort", "error", "load", "loadend", "timeout" ].forEach(function(eventname) {
          xhr["on" + eventname] = null;
        });
        xhr.onreadystatechange = null;
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  NodeGenerator: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c2149G/5j1JIKd2GGzQfS72", "NodeGenerator");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        prefab: cc.Prefab,
        hint: cc.Label,
        regionOrigin: cc.Vec2,
        regionSize: cc.Size
      },
      onLoad: function onLoad() {
        this.schedule(this.generateNode, 2);
        this._pool = new cc.NodePool("PoolHandler");
        this._count = 0;
      },
      generateNode: function generateNode() {
        var monster = this._pool.get();
        if (!monster) {
          monster = cc.instantiate(this.prefab);
          this._count++;
          this.hint.string = "Node Created: " + this._count;
          monster.addComponent("PoolHandler");
        }
        monster.x = this.regionOrigin.x + Math.floor(Math.random() * this.regionSize.width);
        monster.y = this.regionOrigin.y + Math.floor(Math.random() * this.regionSize.height);
        var angle = Math.random() * Math.PI * 2;
        var dx = 500 * Math.cos(angle);
        var dy = 500 * Math.sin(angle);
        monster.runAction(cc.sequence(cc.moveBy(5, dx, dy), cc.callFunc(this.removeNode, this, monster)));
        this.node.addChild(monster);
      },
      removeNode: function removeNode(sender, monster) {
        this._pool.put(monster);
      }
    });
    cc._RF.pop();
  }, {} ],
  NodeGroupControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bd4a2+britAlof0UdMCVB8c", "NodeGroupControl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        nodeList: {
          default: [],
          type: [ cc.Node ]
        }
      },
      onLoad: function onLoad() {
        var self = this;
        this.inervalId = setInterval(function() {
          self.toggleNodesVisibility();
        }, 1e3);
      },
      onDestroy: function onDestroy() {
        clearInterval(this.inervalId);
      },
      toggleNodesVisibility: function toggleNodesVisibility() {
        console.log("toggle visibility");
        for (var i = 0; i < this.nodeList.length; ++i) this.nodeList[i].active = !this.nodeList[i].active;
      }
    });
    cc._RF.pop();
  }, {} ],
  ObjectGroupImage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9277fnpG9BFd6uvLH0LCrFA", "ObjectGroupImage");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {
        cc.director.getCollisionManager().enabled = true;
        this._speed = 1e3;
        var useless = cc.find("Canvas/tiledmap/game/img58");
        useless.active = false;
        var theParent = cc.find("Canvas/tiledmap");
        this.node.parent = theParent;
      },
      update: function update(dt) {
        this.node.x += dt * this._speed;
      },
      onCollisionEnter: function onCollisionEnter(other) {
        var otherName = other.node.name;
        switch (otherName) {
         case "to-right":
          this._speed = 1e3;
          this.node.scaleX = 1.3;
          break;

         case "to-index-1":
          this.node.setSiblingIndex(1);
          break;

         case "to-left":
          this._speed = -1e3;
          this.node.scaleX = -1.3;
          break;

         case "to-index-4":
          this.node.setSiblingIndex(6);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  OnMultiTouchCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "53fc1wMwRRPOYCB8ko36drD", "OnMultiTouchCtrl");
    "use strict";
    var TipManager = require("../../../../scripts/Tips/TipsManager");
    cc.Class({
      extends: cc.Component,
      properties: {
        canvas: cc.Node,
        target: cc.Node
      },
      onLoad: function onLoad() {
        TipManager.init();
        var self = this, parent = this.node.parent;
        self.canvas.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
          var touches = event.getTouches();
          if (touches.length >= 2) {
            var touch1 = touches[0], touch2 = touches[1];
            var delta1 = touch1.getDelta(), delta2 = touch2.getDelta();
            var touchPoint1 = parent.convertToNodeSpaceAR(touch1.getLocation());
            var touchPoint2 = parent.convertToNodeSpaceAR(touch2.getLocation());
            var distance = touchPoint1.sub(touchPoint2);
            var delta = delta1.sub(delta2);
            var scale = 1;
            scale = Math.abs(distance.x) > Math.abs(distance.y) ? (distance.x + delta.x) / distance.x * self.target.scale : (distance.y + delta.y) / distance.y * self.target.scale;
            self.target.scale = scale < .1 ? .1 : scale;
          }
        }, self.node);
      },
      onEnable: function onEnable() {
        cc.sys.browserType === cc.sys.BROWSER_TYPE_UC && cc.screen.fullScreen() && TipManager.createTips("Can't support UC mobile browser, please touch screen go back");
      }
    });
    cc._RF.pop();
  }, {
    "../../../../scripts/Tips/TipsManager": "TipsManager"
  } ],
  OnTouchCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f9b352jbGtMIqjEuud60Wpx", "OnTouchCtrl");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Component,
      properties: {
        canvas: cc.Node,
        touchLocationDisplay: {
          default: null,
          type: cc.Label
        },
        follower: {
          default: null,
          type: cc.Node
        },
        followSpeed: 200
      },
      onLoad: function onLoad() {
        var self = this;
        self.moveToPos = cc.v2(0, 0);
        self.isMoving = false;
        self.canvas.on(cc.Node.EventType.TOUCH_START, function(event) {
          var touches = event.getTouches();
          var touchLoc = touches[0].getLocation();
          self.isMoving = true;
          self.moveToPos = self.follower.parent.convertToNodeSpaceAR(touchLoc);
          self.touchLocationDisplay.textKey = i18n.t("cases/03_gameplay/01_player_control/On/OnTouchCtrl.js.1") + Math.floor(touchLoc.x) + ", " + Math.floor(touchLoc.y) + ")";
        }, self.node);
        self.canvas.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
          var touches = event.getTouches();
          var touchLoc = touches[0].getLocation();
          self.moveToPos = self.follower.parent.convertToNodeSpaceAR(touchLoc);
          self.touchLocationDisplay.textKey = i18n.t("cases/03_gameplay/01_player_control/On/OnTouchCtrl.js.1") + Math.floor(touchLoc.x) + ", " + Math.floor(touchLoc.y) + ")";
        }, self.node);
        self.canvas.on(cc.Node.EventType.TOUCH_END, function(event) {
          self.isMoving = false;
        }, self.node);
      },
      update: function update(dt) {
        if (!this.isMoving) return;
        var oldPos = this.follower.position;
        var direction = this.moveToPos.sub(oldPos).normalize();
        var newPos = oldPos.add(direction.mul(this.followSpeed * dt));
        this.follower.setPosition(newPos);
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  OrderSwitcher: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "385fbE9eghB1IwH34WHGHmk", "OrderSwitcher");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        container: cc.Node
      },
      switch: function _switch() {
        var children = this.container.children;
        var length = children.length;
        if (length > 1) {
          var src = Math.floor(Math.random() * length);
          var node = children[src];
          var dst = src === length - 1 ? 0 : src + 1;
          node.setSiblingIndex(dst);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  PageViewCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "becf9ZpBi5KG43ard9opUPT", "PageViewCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        curNum: 3,
        curTotal: 10,
        pageTeample: cc.Prefab,
        target: cc.PageView,
        label: cc.Label
      },
      _createPage: function _createPage() {
        var page = cc.instantiate(this.pageTeample);
        page.position = new cc.v2(0, 0);
        var color = new cc.Color();
        color.r = Math.floor(255 * Math.random());
        color.g = Math.floor(255 * Math.random());
        color.b = Math.floor(255 * Math.random());
        page.color = color;
        return page;
      },
      onLoad: function onLoad() {
        this.target.setCurrentPageIndex(0);
      },
      update: function update() {
        this.label.string = "\u7b2c" + (this.target.getCurrentPageIndex() + 1) + "\u9875";
      },
      onJumpHome: function onJumpHome() {
        this.target.scrollToPage(0);
      },
      plusPage: function plusPage(callback) {
        if (this.curNum > this.curTotal) return;
        this.curNum++;
        callback && callback();
      },
      lessPageNum: function lessPageNum(callback) {
        if (this.curNum <= 0) return;
        this.curNum--;
        callback && callback();
      },
      onAddPage: function onAddPage() {
        var _this = this;
        this.plusPage(function() {
          _this.target.addPage(_this._createPage());
        });
      },
      onInsertPage: function onInsertPage() {
        var _this2 = this;
        this.plusPage(function() {
          _this2.target.insertPage(_this2._createPage(), _this2.target.getCurrentPageIndex());
        });
      },
      onRemovePage: function onRemovePage() {
        var _this3 = this;
        this.lessPageNum(function() {
          var pages = _this3.target.getPages();
          _this3.target.removePage(pages[pages.length - 1]);
        });
      },
      onRemovePageAtIndex: function onRemovePageAtIndex() {
        var _this4 = this;
        this.lessPageNum(function() {
          _this4.target.removePageAtIndex(_this4.target.getCurrentPageIndex());
        });
      },
      onRemoveAllPage: function onRemoveAllPage() {
        this.target.removeAllPages();
        this.curNum = 0;
      },
      onPageEvent: function onPageEvent(sender, eventType) {
        if (eventType !== cc.PageView.EventType.PAGE_TURNING) return;
        console.log("\u5f53\u524d\u6240\u5728\u7684\u9875\u9762\u7d22\u5f15:" + sender.getCurrentPageIndex());
      }
    });
    cc._RF.pop();
  }, {} ],
  ParticleControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "79ae3hiP+JAhIKehaWyiKuh", "ParticleControl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        particle: cc.ParticleSystem
      },
      toggleParticlePlay: function toggleParticlePlay() {
        var myParticle = this.particle;
        myParticle.particleCount > 0 ? myParticle.stopSystem() : myParticle.resetSystem();
      }
    });
    cc._RF.pop();
  }, {} ],
  PlatformMotion: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0f761EZmKhNLKJpUXTrb4fF", "PlatformMotion");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        speed: 10,
        distance: 200
      },
      onLoad: function onLoad() {
        this._movedDistance = this.distance / 2;
        this._direction = 1;
        this._movedDiff = 0;
      },
      update: function update(dt) {
        var d = this.speed * this._direction * dt;
        this._movedDistance += Math.abs(d);
        if (this._movedDistance > this.distance) {
          d = this.distance - this._movedDistance;
          this._movedDistance = 0;
          this._direction *= -1;
        }
        this.node.x += d;
        this._movedDiff = d;
      }
    });
    cc._RF.pop();
  }, {} ],
  PoolHandler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ea9ac+t92JFY6hOUuiIHUAT", "PoolHandler");
    "use strict";
    var lastClick = 0;
    function pauseresume() {
      var now = Date.now();
      if (now - lastClick < 300) {
        this.stopAllActions();
        var pool = this.getComponent("PoolHandler")._pool;
        pool ? pool.put(this) : this.removeFromParent(true);
      } else {
        this.paused ? cc.director.getActionManager().resumeTarget(this) : cc.director.getActionManager().pauseTarget(this);
        this.paused = !this.paused;
      }
      lastClick = now;
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        _pool: null
      },
      onLoad: function onLoad() {
        this.reuse();
      },
      unuse: function unuse() {
        this.node.off(cc.Node.EventType.TOUCH_END, pauseresume, this.node);
      },
      reuse: function reuse() {
        this.node.paused = false;
        this.node.on(cc.Node.EventType.TOUCH_END, pauseresume, this.node);
      }
    });
    cc._RF.pop();
  }, {} ],
  PopulatePrefab: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "75518I0ImJHXqWNNGRIOmJg", "PopulatePrefab");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        root: {
          default: null,
          type: cc.Node
        },
        prefab: {
          default: null,
          type: cc.Prefab
        },
        canvas: {
          default: null,
          type: cc.Canvas
        },
        numberToSpawn: 0,
        spawnInterval: 0
      },
      addSpawn: function addSpawn() {
        if (this.spawnCount >= this.numberToSpawn) {
          this.clearRepeater();
          return;
        }
        var monster = cc.instantiate(this.prefab);
        monster.parent = this.root;
        monster.position = this.getRandomPosition();
        this.spawnCount++;
      },
      onLoad: function onLoad() {
        var self = this;
        self.randomRange = cc.v2(300, 200);
        self.spawnCount = 0;
        self.schedule(self.addSpawn, self.spawnInterval);
      },
      getRandomPosition: function getRandomPosition() {
        return cc.v2(2 * (Math.random() - .5) * this.randomRange.x, 2 * (Math.random() - .5) * this.randomRange.y);
      },
      clearRepeater: function clearRepeater() {
        this.unschedule(this.addSpawn);
      }
    });
    cc._RF.pop();
  }, {} ],
  PreloadAssets: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "96285lXeytOt5O96qg4Yw+j", "PreloadAssets");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var i18n = require("../../../../i18n/i18n");
    var PreloadAssets = function(_super) {
      __extends(PreloadAssets, _super);
      function PreloadAssets() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.loadTips = null;
        _this.showWindow = null;
        _this.loadAnimTestPrefab = null;
        _this.loadList = [];
        _this._curType = "";
        _this._lastType = "";
        _this._btnLabel = null;
        _this._audioSource = null;
        _this._isLoading = false;
        _this._urls = null;
        _this._assets = [];
        return _this;
      }
      PreloadAssets.prototype.onLoad = function() {
        this._urls = {
          Audio: "test_assets/audio",
          Txt: "test_assets/text",
          Texture: "test_assets/PurpleMonster",
          Font: "test_assets/font",
          Plist: "test_assets/atom",
          SpriteFrame: "test_assets/image",
          Prefab: "test_assets/prefab",
          Animation: "test_assets/sprite-anim",
          Scene: "test_assets/preloadscene",
          Spine: "spineboy/spineboy",
          Dir: "audio"
        };
        this._onRegisteredEvent();
      };
      PreloadAssets.prototype._onRegisteredEvent = function() {
        for (var i = 0; i < this.loadList.length; ++i) this.loadList[i].on(cc.Node.EventType.TOUCH_END, this._onClick.bind(this));
      };
      PreloadAssets.prototype._onClick = function(event) {
        if (this._isLoading) return;
        this._onClear();
        this._curType = event.target.name.split("_")[1];
        if ("" !== this._lastType && this._curType === this._lastType) {
          this._onShowResClick(event);
          return;
        }
        this._btnLabel && (this._btnLabel.textKey = i18n.t("cases/05_scripting/07_asset_loading/PreloadAssets.js.1") + this._lastType);
        this._lastType = this._curType;
        this._btnLabel = event.target.getChildByName("Label").getComponent("cc.Label");
        this.loadTips.textKey = this._curType + " Loading....";
        this._isLoading = true;
        this._load();
      };
      PreloadAssets.prototype._load = function() {
        var url = this._urls[this._curType];
        var loadCallBack = this._loadCallBack.bind(this);
        switch (this._curType) {
         case "SpriteFrame":
          cc.resources.preload(url, cc.SpriteFrame, loadCallBack);
          break;

         case "Spine":
          cc.resources.preload(url, sp.SkeletonData, loadCallBack);
          break;

         case "Font":
          cc.resources.preload(url, cc.Font, loadCallBack);
          break;

         case "Plist":
          cc.resources.preload(url, cc.ParticleAsset, loadCallBack);
          break;

         case "Animation":
         case "Prefab":
         case "Texture":
         case "Txt":
         case "Audio":
          cc.resources.preload(url, loadCallBack);
          break;

         case "Scene":
          cc.resources.preloadScene(url, loadCallBack);
          break;

         case "Dir":
          cc.resources.preloadDir(url, loadCallBack);
        }
      };
      PreloadAssets.prototype._loadCallBack = function(err, res) {
        this._isLoading = false;
        if (err) {
          cc.log("Error url [" + err + "]");
          return;
        }
        "Audio" === this._curType ? this._btnLabel.textKey = i18n.t("cases/05_scripting/07_asset_loading/PreloadAssets.js.2") : this._btnLabel.textKey = i18n.t("cases/05_scripting/07_asset_loading/PreloadAssets.js.3");
        this._btnLabel.textKey += this._curType;
        this.loadTips.textKey = this._curType + " preloaded Successfully!";
      };
      PreloadAssets.prototype._onClear = function() {
        this.showWindow.removeAllChildren(true);
        this._audioSource && this._audioSource instanceof cc.AudioSource && this._audioSource.stop();
      };
      PreloadAssets.prototype._onShowResClick = function(event) {
        var _this = this;
        var url = this._urls[this._curType];
        switch (this._curType) {
         case "SpriteFrame":
          cc.resources.load(url, cc.SpriteFrame, function(err, res) {
            _this._assets.push(res.addRef());
            _this._createNode(_this._curType, res);
          });
          break;

         case "Spine":
          cc.resources.load(url, sp.SkeletonData, function(err, res) {
            _this._assets.push(res.addRef());
            _this._createNode(_this._curType, res);
          });
          break;

         case "Font":
          cc.resources.load(url, cc.Font, function(err, res) {
            _this._assets.push(res.addRef());
            _this._createNode(_this._curType, res);
          });
          break;

         case "Plist":
          cc.resources.load(url, cc.ParticleAsset, function(err, res) {
            _this._assets.push(res.addRef());
            _this._createNode(_this._curType, res);
          });
          break;

         case "Animation":
         case "Prefab":
         case "Texture":
         case "Txt":
         case "Audio":
          cc.resources.load(url, function(err, res) {
            _this._assets.push(res.addRef());
            _this._createNode(_this._curType, res);
          });
          break;

         case "Scene":
          cc.resources.loadScene(url, function(err, res) {
            cc.director.runScene(res);
          });
          break;

         case "Dir":
          cc.resources.loadDir(url, function(err, res) {
            _this.loadTips.textKey = "The asset loaded: ";
            res.forEach(function(r) {
              _this._assets.push(r.addRef());
              _this.loadTips.textKey += r.name + ";";
            });
          });
        }
      };
      PreloadAssets.prototype._createNode = function(type, res) {
        this.loadTips.textKey = "";
        var node = new cc.Node("New " + type);
        node.setPosition(0, 0);
        var component = null;
        switch (this._curType) {
         case "SpriteFrame":
          component = node.addComponent(cc.Sprite);
          component.spriteFrame = res;
          break;

         case "Texture":
         case "CORS":
          component = node.addComponent(cc.Sprite);
          component.spriteFrame = new cc.SpriteFrame(res);
          break;

         case "Audio":
          component = node.addComponent(cc.AudioSource);
          component.clip = res;
          component.play();
          this._audioSource = component;
          this.loadTips.textKey = i18n.t("cases/05_scripting/07_asset_loading/PreloadAssets.js.4");
          break;

         case "Txt":
          component = node.addComponent(cc.Label);
          component.lineHeight = 40;
          component.string = res;
          break;

         case "Font":
          component = node.addComponent(cc.Label);
          component.font = res;
          component.lineHeight = 40;
          component.string = "This is BitmapFont!";
          break;

         case "Plist":
          component = node.addComponent(cc.ParticleSystem);
          component.file = res;
          component.resetSystem();
          break;

         case "Prefab":
          var prefab = cc.instantiate(res);
          prefab.parent = node;
          prefab.setPosition(0, 0);
          break;

         case "Animation":
          var loadAnim = cc.instantiate(this.loadAnimTestPrefab);
          loadAnim.parent = node;
          loadAnim.setPosition(0, 0);
          var AanimCtrl = loadAnim.getComponent(cc.Animation);
          AanimCtrl.addClip(res);
          AanimCtrl.play(res.name);
          break;

         case "Spine":
          component = node.addComponent(sp.Skeleton);
          component.skeletonData = res;
          component.animation = "walk";
          node.y = -248;
        }
        this.showWindow.addChild(node);
      };
      PreloadAssets.prototype.onDestroy = function() {
        this._assets.forEach(function(x) {
          return x.decRef();
        });
        this._assets = null;
      };
      __decorate([ property(cc.Label) ], PreloadAssets.prototype, "loadTips", void 0);
      __decorate([ property(cc.Node) ], PreloadAssets.prototype, "showWindow", void 0);
      __decorate([ property(cc.Prefab) ], PreloadAssets.prototype, "loadAnimTestPrefab", void 0);
      __decorate([ property({
        type: [ cc.Node ]
      }) ], PreloadAssets.prototype, "loadList", void 0);
      PreloadAssets = __decorate([ ccclass ], PreloadAssets);
      return PreloadAssets;
    }(cc.Component);
    exports.default = PreloadAssets;
    cc._RF.pop();
  }, {
    "../../../../i18n/i18n": "i18n"
  } ],
  ProgressBarCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "84a43yb9OxBX6HMQxPzHQyz", "ProgressBarCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        speed: 10,
        horizontalBar: {
          type: cc.ProgressBar,
          default: null
        },
        horizontalBarReverse: {
          type: cc.ProgressBar,
          default: null
        },
        verticalBar: {
          type: cc.ProgressBar,
          default: null
        },
        verticalBarReverse: {
          type: cc.ProgressBar,
          default: null
        }
      },
      onLoad: function onLoad() {
        this._pingpong = true;
        this.verticalBar.progress = 0;
        this.horizontalBar.progress = 0;
        this.verticalBarReverse.progress = 0;
        this.horizontalBarReverse.progress = 0;
      },
      update: function update(dt) {
        this._updateProgressBar(this.verticalBar, dt);
        this._updateProgressBar(this.horizontalBar, dt);
        this._updateProgressBar(this.verticalBarReverse, dt);
        this._updateProgressBar(this.horizontalBarReverse, dt);
      },
      _updateProgressBar: function _updateProgressBar(progressBar, dt) {
        var progress = progressBar.progress;
        if (progress < 1 && this._pingpong) progress += dt * this.speed; else {
          progress -= dt * this.speed;
          this._pingpong = progress <= 0;
        }
        progressBar.progress = progress;
      }
    });
    cc._RF.pop();
  }, {} ],
  Puzzle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6289cZl6zJEcLVQd60JnAzW", "Puzzle");
    "use strict";
    var MoveDirection = cc.Enum({
      NONE: 0,
      UP: 1,
      DOWN: 2,
      LEFT: 3,
      RIGHT: 4
    });
    var minTilesCount = 2;
    var mapMoveStep = 1;
    var minMoveValue = 50;
    cc.Class({
      extends: cc.Component,
      editor: {
        requireComponent: cc.TiledMap
      },
      properties: {
        _touchStartPos: {
          default: null,
          serializable: false
        },
        _touching: {
          default: false,
          serializable: false
        },
        _isMapLoaded: {
          default: false,
          serializable: false
        },
        floorLayerName: {
          default: "floor"
        },
        barrierLayerName: {
          default: "barrier"
        },
        objectGroupName: {
          default: "players"
        },
        startObjectName: {
          default: "SpawnPoint"
        },
        successObjectName: {
          default: "SuccessPoint"
        }
      },
      onLoad: function onLoad() {
        var _this = this;
        this._player = this.node.getChildByName("player");
        this._isMapLoaded || (this._player.active = false);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this._onKeyPressed, this);
        this.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          _this._touching = true;
          _this._touchStartPos = event.touch.getLocation();
        });
        this.node.on(cc.Node.EventType.TOUCH_END, function(event) {
          if (!_this._touching || !_this._isMapLoaded || _this._succeedLayer.active) return;
          _this._touching = false;
          var touchPos = event.touch.getLocation();
          var movedX = touchPos.x - _this._touchStartPos.x;
          var movedY = touchPos.y - _this._touchStartPos.y;
          var movedXValue = Math.abs(movedX);
          var movedYValue = Math.abs(movedY);
          if (movedXValue < minMoveValue && movedYValue < minMoveValue) return;
          var newTile = cc.v2(_this._curTile.x, _this._curTile.y);
          var mapMoveDir = MoveDirection.NONE;
          if (movedXValue >= movedYValue) if (movedX > 0) {
            newTile.x += 1;
            mapMoveDir = MoveDirection.LEFT;
          } else {
            newTile.x -= 1;
            mapMoveDir = MoveDirection.RIGHT;
          } else if (movedY > 0) {
            newTile.y -= 1;
            mapMoveDir = MoveDirection.DOWN;
          } else {
            newTile.y += 1;
            mapMoveDir = MoveDirection.UP;
          }
          _this._tryMoveToNewTile(newTile, mapMoveDir);
        });
      },
      onDestroy: function onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this._onKeyPressed, this);
      },
      restartGame: function restartGame() {
        this._succeedLayer.active = false;
        this._initMapPos();
        this._curTile = this._startTile;
        this._updatePlayerPos();
      },
      start: function start(err) {
        if (err) return;
        this._initMapPos();
        this._succeedLayer = this.node.getParent().getChildByName("succeedLayer");
        this._succeedLayer.active = false;
        this._tiledMap = this.node.getComponent("cc.TiledMap");
        var objectGroup = this._tiledMap.getObjectGroup(this.objectGroupName);
        if (!objectGroup) return;
        var startObj = objectGroup.getObject(this.startObjectName);
        var endObj = objectGroup.getObject(this.successObjectName);
        if (!startObj || !endObj) return;
        var startPos = cc.v2(startObj.x, startObj.y);
        var endPos = cc.v2(endObj.x, endObj.y);
        this._layerFloor = this._tiledMap.getLayer(this.floorLayerName);
        this._layerBarrier = this._tiledMap.getLayer(this.barrierLayerName);
        if (!this._layerFloor || !this._layerBarrier) return;
        this._curTile = this._startTile = this._getTilePos(startPos);
        this._endTile = this._getTilePos(endPos);
        if (this._player) {
          this._updatePlayerPos();
          this._player.active = true;
        }
        this._isMapLoaded = true;
      },
      _initMapPos: function _initMapPos() {
        this.node.setPosition(cc.visibleRect.bottomLeft);
      },
      _updatePlayerPos: function _updatePlayerPos() {
        var pos = this._layerFloor.getPositionAt(this._curTile);
        this._player.setPosition(pos);
      },
      _getTilePos: function _getTilePos(posInPixel) {
        var mapSize = this.node.getContentSize();
        var tileSize = this._tiledMap.getTileSize();
        var x = Math.floor(posInPixel.x / tileSize.width);
        var y = Math.floor((mapSize.height - posInPixel.y) / tileSize.height);
        return cc.v2(x, y);
      },
      _onKeyPressed: function _onKeyPressed(event) {
        if (!this._isMapLoaded || this._succeedLayer.active) return;
        var newTile = cc.v2(this._curTile.x, this._curTile.y);
        var mapMoveDir = MoveDirection.NONE;
        switch (event.keyCode) {
         case cc.macro.KEY.up:
          newTile.y -= 1;
          mapMoveDir = MoveDirection.DOWN;
          break;

         case cc.macro.KEY.down:
          newTile.y += 1;
          mapMoveDir = MoveDirection.UP;
          break;

         case cc.macro.KEY.left:
          newTile.x -= 1;
          mapMoveDir = MoveDirection.RIGHT;
          break;

         case cc.macro.KEY.right:
          newTile.x += 1;
          mapMoveDir = MoveDirection.LEFT;
          break;

         default:
          return;
        }
        this._tryMoveToNewTile(newTile, mapMoveDir);
      },
      _tryMoveToNewTile: function _tryMoveToNewTile(newTile, mapMoveDir) {
        var mapSize = this._tiledMap.getMapSize();
        if (newTile.x < 0 || newTile.x >= mapSize.width) return;
        if (newTile.y < 0 || newTile.y >= mapSize.height) return;
        if (this._layerBarrier.getTileGIDAt(newTile)) {
          cc.log("This way is blocked!");
          return false;
        }
        this._curTile = newTile;
        this._updatePlayerPos();
        this._tryMoveMap(mapMoveDir);
        if (this._curTile.equals(this._endTile)) {
          cc.log("succeed");
          this._succeedLayer.active = true;
        }
      },
      _tryMoveMap: function _tryMoveMap(moveDir) {
        var mapContentSize = this.node.getContentSize();
        var mapPos = this.node.getPosition();
        var playerPos = this._player.getPosition();
        var viewSize = cc.size(cc.visibleRect.width, cc.visibleRect.height);
        var tileSize = this._tiledMap.getTileSize();
        var minDisX = minTilesCount * tileSize.width;
        var minDisY = minTilesCount * tileSize.height;
        var disX = playerPos.x + mapPos.x;
        var disY = playerPos.y + mapPos.y;
        var newPos;
        switch (moveDir) {
         case MoveDirection.UP:
          disY < minDisY && (newPos = cc.v2(mapPos.x, mapPos.y + tileSize.height * mapMoveStep));
          break;

         case MoveDirection.DOWN:
          viewSize.height - disY - tileSize.height < minDisY && (newPos = cc.v2(mapPos.x, mapPos.y - tileSize.height * mapMoveStep));
          break;

         case MoveDirection.LEFT:
          viewSize.width - disX - tileSize.width < minDisX && (newPos = cc.v2(mapPos.x - tileSize.width * mapMoveStep, mapPos.y));
          break;

         case MoveDirection.RIGHT:
          disX < minDisX && (newPos = cc.v2(mapPos.x + tileSize.width * mapMoveStep, mapPos.y));
          break;

         default:
          return;
        }
        if (newPos) {
          var minX = viewSize.width - mapContentSize.width - cc.visibleRect.left;
          var maxX = cc.visibleRect.left.x;
          var minY = viewSize.height - mapContentSize.height - cc.visibleRect.bottom;
          var maxY = cc.visibleRect.bottom.y;
          newPos.x < minX && (newPos.x = minX);
          newPos.x > maxX && (newPos.x = maxX);
          newPos.y < minY && (newPos.y = minY);
          newPos.y > maxY && (newPos.y = maxY);
          if (!newPos.equals(mapPos)) {
            cc.log("Move the map to new position: ", newPos);
            this.node.setPosition(newPos);
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  ReferenceTypeProperties: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9341f3fDdBMjJLKh4D+kJJK", "ReferenceTypeProperties");
    "use strict";
    var MyCustomComponent = require("MyCustomComponent");
    cc.Class({
      extends: cc.Component,
      properties: {
        myNode: {
          default: null,
          type: cc.Node
        },
        mySprite: {
          default: null,
          type: cc.Sprite
        },
        myLabel: {
          default: null,
          type: cc.Label
        },
        myComponent: {
          default: null,
          type: MyCustomComponent
        },
        mySpriteFrame: {
          default: null,
          type: cc.SpriteFrame
        },
        myAtlas: {
          default: null,
          type: cc.SpriteAtlas
        },
        myPrefab: {
          default: null,
          type: cc.Prefab
        },
        myAudioClip: {
          default: null,
          type: cc.AudioClip
        }
      },
      onLoad: function onLoad() {
        this.myLabel.string = this.myComponent.getPower().toString();
      },
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {
    MyCustomComponent: "MyCustomComponent"
  } ],
  RepeatAction: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "66d74aG3cdDq4lLyUUjOCk/", "RepeatAction");
    "use strict";
    var MAX_VALUE = 5;
    var TIPS_STR = "repeat count: " + MAX_VALUE + " / value";
    cc.Class({
      extends: cc.Component,
      properties: {
        tips: cc.Label
      },
      onLoad: function onLoad() {
        var _this = this;
        this.setTips(0);
        var count = 0;
        var action1 = cc.delayTime(1);
        var action2 = cc.callFunc(function() {
          count++;
          _this.setTips(count);
        }, this);
        this.node.runAction(cc.repeat(cc.sequence(action1, action2), 5));
      },
      setTips: function setTips(count) {
        this.tips.string = TIPS_STR.replace(/value/, count);
      }
    });
    cc._RF.pop();
  }, {} ],
  ReplaceSlotDisplay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "972e5Ii4p5AYa4e91UP427+", "ReplaceSlotDisplay");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        armatureDisplay: {
          type: dragonBones.ArmatureDisplay,
          default: null
        },
        replaceArmatureDisplay: {
          type: dragonBones.ArmatureDisplay,
          default: null
        }
      },
      start: function start() {
        this.replaceArmatureDisplay.node.active = false;
        this._leftWeaponIndex = 0;
        this._rightDisplayIndex = 0;
        this._rightDisplayNames = [ "weapon_1004_r", "weapon_1004d_r" ];
        this._rightDisplayOffset = [ {
          x: 0,
          y: 0
        }, {
          x: -60,
          y: 100
        } ];
      },
      left: function left() {
        var armature = this.armatureDisplay.armature();
        var slot = armature.getSlot("weapon_hand_l");
        slot.displayIndex = 0 == slot.displayIndex ? 4 : 0;
      },
      right: function right() {
        this._rightDisplayIndex++;
        this._rightDisplayIndex %= this._rightDisplayNames.length;
        var armature = this.armatureDisplay.armature();
        var slot = armature.getSlot("weapon_hand_r");
        var displayName = this._rightDisplayNames[this._rightDisplayIndex];
        var factory = dragonBones.CCFactory.getInstance();
        factory.replaceSlotDisplay(this.replaceArmatureDisplay.getArmatureKey(), "weapon", "weapon_r", displayName, slot);
        var offset = this._rightDisplayOffset[this._rightDisplayIndex];
        slot.parent.offset.x = offset.x;
        slot.parent.offset.y = offset.y;
        armature.invalidUpdate();
      }
    });
    cc._RF.pop();
  }, {} ],
  RichText: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ce4b5HKaNtMU4kQr7fbr5VH", "RichText");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        positionMessage: cc.Label
      },
      clickme: function clickme(event) {
        var clickPosition = event.touch.getLocation();
        this.positionMessage.string = "Clicked at: x = " + parseInt(parseFloat(clickPosition.x)) + ", y = " + parseInt(parseFloat(clickPosition.y));
      }
    });
    cc._RF.pop();
  }, {} ],
  RotationCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "325ba8DYO5K6Yfgi5UmP4+L", "RotationCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        rotationToNode: cc.Node,
        rotateByNode: cc.Node
      },
      onToClick: function onToClick() {
        var rotationTo = cc.rotateTo(1, 90);
        this.rotationToNode.runAction(rotationTo);
      },
      onReverseToClick: function onReverseToClick() {
        var rotationTo = cc.rotateTo(1, 180);
        this.rotationToNode.runAction(rotationTo);
      },
      onToRecoverClick: function onToRecoverClick() {
        this.rotationToNode.angle = 0;
      },
      onByClick: function onByClick() {
        var rotateBy = cc.rotateBy(1, 90);
        this.rotateByNode.runAction(rotateBy);
      },
      onReverseByClick: function onReverseByClick() {
        var rotateBy = cc.rotateBy(1, 180);
        this.rotateByNode.runAction(rotateBy);
      },
      onByRecoverClick: function onByRecoverClick() {
        this.rotateByNode.angle = 0;
      }
    });
    cc._RF.pop();
  }, {} ],
  RuntimeLabel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5530cLc2wJFVpWkBxALC33G", "RuntimeLabel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var isRuntime = "undefined" !== typeof runtime;
        isRuntime || (this.node.active = false);
      }
    });
    cc._RF.pop();
  }, {} ],
  SceneList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "473b8wxs55OsJvoxVdYCzTF", "SceneList");
    "use strict";
    var TipsManager = require("TipsManager");
    var SceneList = cc.Class({
      extends: cc.Component,
      properties: {
        itemPrefab: {
          default: null,
          type: cc.Prefab
        },
        initItemCount: 0,
        scrollView: cc.ScrollView,
        bufferZone: 0,
        searchBlock: cc.Node
      },
      createItem: function createItem(x, y, name, url) {
        var item = cc.instantiate(this.itemPrefab);
        var itemComp = item.getComponent("ListItem");
        var label = itemComp.label;
        label.string = name;
        url && (itemComp.url = url);
        item.x = x;
        item.y = y;
        this.node.addChild(item);
        return item;
      },
      init: function init(menu) {
        this.menu = menu;
        this.sceneList = [];
        this.itemList = [];
        this.updateTimer = 0;
        this.updateInterval = .2;
        this.lastContentPosY = 0;
        TipsManager.init();
        this.initList();
      },
      initList: function initList() {
        var scenes = cc.game._sceneInfos;
        var dict = {};
        if (scenes) for (var i = 0; i < scenes.length; ++i) {
          var url = scenes[i].url;
          if (!url.startsWith("db://assets/cases/")) continue;
          var dirname = cc.path.dirname(url).replace("db://assets/cases/", "");
          var scenename = cc.path.basename(url, ".fire");
          dirname || (dirname = "_root");
          dict[dirname] || (dict[dirname] = {});
          dict[dirname][scenename] = url;
        } else cc.error("failed to get scene list!");
        var dirs = Object.keys(dict);
        dirs.sort();
        for (var _i = 0; _i < dirs.length; ++_i) {
          this.sceneList.push({
            name: dirs[_i],
            url: null
          });
          var scenenames = Object.keys(dict[dirs[_i]]);
          scenenames.sort();
          for (var j = 0; j < scenenames.length; ++j) {
            var name = scenenames[j];
            var _url = dict[dirs[_i]][name];
            this.sceneList.push({
              name: name,
              url: _url
            });
          }
        }
        var y = 0;
        this.node.height = 50 * (this.sceneList.length + 1);
        var initItemCount = Math.min(this.initItemCount, this.sceneList.length);
        for (var _i2 = 0; _i2 < initItemCount; ++_i2) {
          var item = cc.instantiate(this.itemPrefab).getComponent("ListItem");
          var itemInfo = this.sceneList[_i2];
          item.init(this.menu);
          this.node.addChild(item.node);
          y -= 50;
          item.updateItem(_i2, y, itemInfo.name, itemInfo.url);
          this.itemList.push(item);
        }
        var searchComp = this.searchBlock.getComponent("SearchBlock");
        searchComp.init(this.menu);
        searchComp.setItemList(this.sceneList);
      },
      getPositionInView: function getPositionInView(item) {
        var worldPos = item.parent.convertToWorldSpaceAR(item.position);
        var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
      },
      update: function update(dt) {
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) return;
        this.updateTimer = 0;
        var items = this.itemList;
        var buffer = this.bufferZone;
        var isDown = this.node.y < this.lastContentPosY;
        var curItemCount = this.itemList.length;
        var offset = 50 * curItemCount;
        for (var i = 0; i < curItemCount; ++i) {
          var item = items[i];
          var itemNode = item.node;
          var viewPos = this.getPositionInView(itemNode);
          if (isDown) {
            if (viewPos.y < -buffer && itemNode.y + offset < 0) {
              var newIdx = item.index - curItemCount;
              var newInfo = this.sceneList[newIdx];
              item.updateItem(newIdx, itemNode.y + offset, newInfo.name, newInfo.url);
            }
          } else if (viewPos.y > buffer && itemNode.y - offset > -this.node.height) {
            var _newIdx = item.index + curItemCount;
            var _newInfo = this.sceneList[_newIdx];
            item.updateItem(_newIdx, itemNode.y - offset, _newInfo.name, _newInfo.url);
          }
        }
        this.lastContentPosY = this.node.y;
      }
    });
    cc._RF.pop();
  }, {
    TipsManager: "TipsManager"
  } ],
  SearchBlock: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5fac7sHbOhNlpzkn8js40Bz", "SearchBlock");
    "use strict";
    var TipsManager = require("TipsManager");
    cc.Class({
      extends: cc.Component,
      properties: {
        editBox: cc.EditBox,
        _itemList: [],
        _isShow: false
      },
      init: function init(menu) {
        this.menu = menu;
      },
      setItemList: function setItemList(list) {
        this._itemList = list;
      },
      loadExample: function loadExample() {
        var sceneName = this.editBox.string;
        var url = this.findItemUrl(sceneName);
        if (!url) {
          TipsManager.createTips("Doesn't find that scene.");
          return;
        }
        if (TipsManager.hasSupport(sceneName)) {
          this.showSearchBlock();
          this.editBox.string = "";
          this.menu.loadScene(url);
        }
      },
      findItemUrl: function findItemUrl(sceneName) {
        for (var i = 0; i < this._itemList.length; i++) {
          var item = this._itemList[i];
          if (item.name === sceneName) return item.url;
        }
      },
      showSearchBlock: function showSearchBlock() {
        this._isShow = !this._isShow;
        var action = null;
        action = this._isShow ? cc.moveBy(.5, cc.v2(0, -48)) : cc.moveBy(.5, cc.v2(0, 48));
        this.node.runAction(action);
      }
    });
    cc._RF.pop();
  }, {
    TipsManager: "TipsManager"
  } ],
  SequenceAction: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9f1d440juJBgqdwVALTCD4k", "SequenceAction");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        label: {
          default: null,
          type: cc.Label
        }
      },
      start: function start() {
        var _this = this;
        var startTime = 0;
        var eachTime = .5;
        var sequence1 = cc.sequence(cc.moveBy(eachTime, cc.v2(0, -300)), cc.moveBy(eachTime / 2, cc.v2(0, 300))).repeat(2);
        var sequence2 = cc.sequence(cc.moveBy(eachTime, cc.v2(0, -200)), cc.moveBy(eachTime, cc.v2(0, 200))).repeat(2);
        this.node.runAction(cc.sequence(cc.callFunc(function() {
          startTime = Date.now();
        }), sequence1, sequence2, cc.callFunc(function() {
          var difference = Math.abs(Date.now() - startTime) / 1e3;
          if (difference - 7 * eachTime >= .05) {
            _this.label.string = "Failed - ElapseTime: " + difference.toFixed(1);
            _this.label.node.color = cc.color(255, 0, 0);
          } else {
            _this.label.string = "Succeed - ElapseTime: " + difference.toFixed(1);
            _this.label.node.color = cc.color(0, 255, 0);
          }
        })));
      }
    });
    cc._RF.pop();
  }, {} ],
  SheepAnimationCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ae6fcR8cuFGRYHW525VJD/k", "SheepAnimationCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        sheepAnim: {
          default: null,
          type: cc.Animation
        }
      },
      onLoad: function onLoad() {
        var anim = this.sheepAnim;
        this._playAnimCallback = function() {
          anim.play("sheep_jump");
        };
        this.scheduleOnce(this._playAnimCallback, 2);
      },
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {} ],
  ShieldNode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "11d749OX3BDRqOfPVpy+u7u", "ShieldNode");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        tiledLayer: {
          type: cc.TiledLayer,
          default: null
        }
      },
      onLoad: function onLoad() {
        cc.resources.load("tilemap/shieldNode", function(err, prefab) {
          if (err) {
            cc.error("tilemap/shieldNode resources load failed");
            return;
          }
          this.initScene(prefab);
        }.bind(this));
      },
      initScene: function initScene(prefab) {
        var _this = this;
        var posArr = [ cc.v2(-249, 96), cc.v2(-150, 76), cc.v2(-60, 54), cc.v2(-248, -144), cc.v2(-89, -34) ];
        var _loop = function _loop() {
          var shieldNode = cc.instantiate(prefab);
          shieldNode.x = posArr[i].x;
          shieldNode.y = posArr[i].y;
          _this.tiledLayer.addUserNode(shieldNode);
          shieldNode.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
            var deltaMove = event.getLocation().sub(event.getPreviousLocation());
            shieldNode.x += deltaMove.x;
            shieldNode.y += deltaMove.y;
          });
        };
        for (var i = 0; i < posArr.length; i++) _loop();
      }
    });
    cc._RF.pop();
  }, {} ],
  Shooter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "092a3wYF7pBULdP9SLwGUBQ", "Shooter");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        bullet: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
        var canvas = cc.find("Canvas");
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
      },
      onTouchBegan: function onTouchBegan(event) {
        var scene = cc.director.getScene();
        var touchLoc = event.touch.getLocation();
        var bullet = cc.instantiate(this.bullet);
        bullet.position = touchLoc;
        bullet.active = true;
        scene.addChild(bullet);
      },
      onDisable: function onDisable() {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  ShowCollider: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5a6dfRzhTBMp5U3il8DJmBZ", "ShowCollider");
    "use strict";
    cc.Class({
      extends: cc.Component,
      onLoad: function onLoad() {},
      onBtnClick: function onBtnClick(event) {
        var target = event.target;
        var shapeClassName = "cc." + target.name + "Collider";
        var nodePath = "Canvas/root/" + target.parent.name;
        var collider = cc.find(nodePath).getComponent(shapeClassName);
        collider.enabled = !collider.enabled;
        var label = target.getChildByName("Label").getComponent(cc.Label);
        collider.enabled ? label.string = label.string.replace("Show", "Hide") : label.string = label.string.replace("Hide", "Show");
      }
    });
    cc._RF.pop();
  }, {} ],
  ShowSubMenu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19224TiKDhPbZ8/hTkQA7ey", "ShowSubMenu");
    "use strict";
    cc.Class({
      extends: cc.Component,
      toggle: function toggle() {
        var shown = this.node.y < 0;
        var animation = this.getComponent(cc.Animation);
        animation.play(shown ? "hide menu" : "show menu");
      }
    });
    cc._RF.pop();
  }, {} ],
  ShowTips: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b71d3yctLlH0bVfbZXKVJIY", "ShowTips");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShowTips = function(_super) {
      __extends(ShowTips, _super);
      function ShowTips() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tips = null;
        _this.ifshow = false;
        return _this;
      }
      ShowTips.prototype.showtip = function() {
        this.tips.active = !this.tips.active;
      };
      ShowTips.prototype.start = function() {
        this.tips = this.node.getChildByName("tips");
      };
      ShowTips = __decorate([ ccclass ], ShowTips);
      return ShowTips;
    }(cc.Component);
    exports.default = ShowTips;
    cc._RF.pop();
  }, {} ],
  SimpleAction: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b6067a1+J5FW4G30nmVLU/d", "SimpleAction");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        jumper: {
          default: null,
          type: cc.Node
        },
        colorNode: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.squashAction = cc.scaleTo(.2, 1, .6);
        this.stretchAction = cc.scaleTo(.2, 1, 1.2);
        this.scaleBackAction = cc.scaleTo(.1, 1, 1);
        this.moveUpAction = cc.moveBy(1, cc.v2(0, 200)).easing(cc.easeCubicActionOut());
        this.moveDownAction = cc.moveBy(1, cc.v2(0, -200)).easing(cc.easeCubicActionIn());
        var seq = cc.sequence(this.squashAction, this.stretchAction, this.moveUpAction, this.scaleBackAction, this.moveDownAction, this.squashAction, this.scaleBackAction, cc.callFunc(this.callback.bind(this)));
        this.jumper.runAction(seq);
        this.colorNode.runAction(cc.sequence(cc.tintTo(2, 255, 0, 0), cc.delayTime(.5), cc.fadeOut(1), cc.delayTime(.5), cc.fadeIn(1), cc.delayTime(.5), cc.tintTo(2, 255, 255, 255)).repeat(2));
      },
      callback: function callback() {
        this.node.removeFromParent();
      }
    });
    cc._RF.pop();
  }, {} ],
  SimpleButtonCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "68675KwfElAdaumPl1byNh7", "SimpleButtonCtrl");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Component,
      properties: {
        buttonLeft: cc.Button,
        buttonRight: cc.Button,
        display: cc.Label
      },
      onBtnLeftClicked: function onBtnLeftClicked() {
        console.log("Left button clicked!");
        this.display.textKey = i18n.t("cases/02_ui/03_button/SimpleButton.js.1");
      },
      onBtnRightClicked: function onBtnRightClicked() {
        console.log("Right button clicked!");
        this.display.textKey = i18n.t("cases/02_ui/03_button/SimpleButton.js.2");
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  SimpleKeyboardMovement: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c3f971iyCdIh6xdaO49XP0F", "SimpleKeyboardMovement");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        sheep: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.turnRight();
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
      },
      onDestroy: function onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
      },
      onKeyDown: function onKeyDown(event) {
        var macro = cc.macro;
        switch (event.keyCode) {
         case macro.KEY.a:
         case macro.KEY.left:
          console.log("turn left");
          this.turnLeft();
          break;

         case macro.KEY.d:
         case macro.KEY.right:
          console.log("turn right");
          this.turnRight();
        }
      },
      update: function update(dt) {
        this.sheep.x += this.speed * dt;
      },
      turnLeft: function turnLeft() {
        this.speed = -100;
        this.sheep.scaleX = 1;
      },
      turnRight: function turnRight() {
        this.speed = 100;
        this.sheep.scaleX = -1;
      }
    });
    cc._RF.pop();
  }, {} ],
  SimpleMotion: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fde33rWt81MvZWO7QQ3jv3j", "SimpleMotion");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        moveSpeed: 100,
        rotationSpeed: 90
      },
      onLoad: function onLoad() {},
      update: function update(dt) {
        this.node.x += dt * this.moveSpeed;
        this.node.angle += dt * this.rotationSpeed;
      }
    });
    cc._RF.pop();
  }, {} ],
  SingletonCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fcfefvjPgdGEKnfOwuoIVJD", "SingletonCtrl");
    "use strict";
    var Singleton = require("Singleton");
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {
        var node = new cc.Node("Monster");
        var sprite = node.addComponent(cc.Sprite);
        sprite.spriteFrame = Singleton.instance.monsterIcon;
        node.parent = this.node;
      }
    });
    cc._RF.pop();
  }, {
    Singleton: "Singleton"
  } ],
  Singleton: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "379d2K4GUtCv7pB9+wuz4Lb", "Singleton");
    "use strict";
    var Singleton = cc.Class({
      extends: cc.Component,
      properties: {
        monsterIcon: {
          default: null,
          type: cc.SpriteFrame
        }
      },
      statics: {
        instance: null
      },
      onLoad: function onLoad() {
        Singleton.instance = this;
      }
    });
    cc._RF.pop();
  }, {} ],
  SliderCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "051d5Epx65ARZ9itjsuO9NL", "SliderCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        image: cc.Node,
        music: cc.AudioSource,
        slider_h: cc.Slider,
        slider_v: cc.Slider
      },
      onLoad: function onLoad() {
        this.slider_v.progress = .5;
        this.slider_h.progress = .5;
        this._updateImageOpacity(this.slider_v.progress);
        this._updateMusicVolume(this.slider_h.progress);
      },
      _updateImageOpacity: function _updateImageOpacity(progress) {
        this.image.opacity = 255 * progress;
      },
      _updateMusicVolume: function _updateMusicVolume(progress) {
        this.music.volume = progress;
      },
      onSliderVEvent: function onSliderVEvent(sender, eventType) {
        this._updateImageOpacity(sender.progress);
      },
      onSliderHEvent: function onSliderHEvent(sender, eventType) {
        this._updateMusicVolume(sender.progress);
      }
    });
    cc._RF.pop();
  }, {} ],
  SpineAttach: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d2104r6tvhC7qEefqkgfYyg", "SpineAttach");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        skeleton: {
          type: sp.Skeleton,
          default: null
        },
        targetPrefab: {
          type: cc.Prefab,
          default: null
        },
        modeLabel: {
          type: cc.Label,
          default: null
        },
        redBoneName: "",
        greenBoneName: "",
        blueBoneName: ""
      },
      generateAllNodes: function generateAllNodes() {
        var attachUtil = this.skeleton.attachUtil;
        attachUtil.generateAllAttachedNodes();
        var boneNodes = attachUtil.getAttachedNodes(this.redBoneName);
        var boneNode = boneNodes[0];
        if (boneNode) {
          var targetNode = cc.instantiate(this.targetPrefab);
          targetNode.color = cc.color(255, 0, 0);
          boneNode.addChild(targetNode);
        }
        boneNodes = attachUtil.getAttachedNodes(this.blueBoneName);
        boneNode = boneNodes[0];
        if (boneNode) {
          var _targetNode = cc.instantiate(this.targetPrefab);
          _targetNode.color = cc.color(0, 0, 255);
          boneNode.addChild(_targetNode);
        }
      },
      destroyAllNodes: function destroyAllNodes() {
        var attachUtil = this.skeleton.attachUtil;
        attachUtil.destroyAllAttachedNodes();
      },
      destroyUnusual: function destroyUnusual() {
        var attachUtil = this.skeleton.attachUtil;
        var boneNodes = attachUtil.getAttachedNodes("root");
        var boneNode = boneNodes[0];
        boneNode && boneNode.destroy();
      },
      generateSomeNodes: function generateSomeNodes() {
        var attachUtil = this.skeleton.attachUtil;
        var boneNodes = attachUtil.generateAttachedNodes(this.greenBoneName);
        var boneNode = boneNodes[0];
        if (boneNode) {
          var targetNode = cc.instantiate(this.targetPrefab);
          targetNode.color = cc.color(0, 255, 0);
          boneNode.addChild(targetNode);
        }
      },
      destroySomeNodes: function destroySomeNodes() {
        var attachUtil = this.skeleton.attachUtil;
        attachUtil.destroyAttachedNodes(this.greenBoneName);
      },
      changeMode: function changeMode() {
        var isCached = this.skeleton.isAnimationCached();
        if (isCached) {
          this.skeleton.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
          this.modeLabel.string = "cache";
        } else {
          this.skeleton.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
          this.modeLabel.string = "realtime";
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  SpineCollider: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "318b3Y0citJN6RZS4dOnAn0", "SpineCollider");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {
        this.collisionManager = cc.director.getCollisionManager();
        this.collisionManager.enabled = true;
        this.collisionManager.enabledDebugDraw = false;
        cc.director.once(cc.Director.EVENT_AFTER_DRAW, function() {
          this.collisionManager.enabledDebugDraw = true;
        }.bind(this));
        this.stayCount = 0;
      },
      onDestroy: function onDestroy() {
        this.collisionManager.enabledDebugDraw = false;
      },
      onCollisionEnter: function onCollisionEnter(other, self) {
        this.stayCount++;
      },
      onCollisionExit: function onCollisionExit(other, self) {
        this.stayCount--;
      },
      update: function update() {
        this.stayCount > 0 ? this.node.color = cc.color(0, 200, 200) : this.node.color = cc.color(255, 255, 255);
      }
    });
    cc._RF.pop();
  }, {} ],
  SpineCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "91115OWZ9hJkIXaqCNRUsZC", "SpineCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      editor: {
        requireComponent: sp.Skeleton
      },
      properties: {
        mixTime: .2
      },
      onLoad: function onLoad() {
        var _this = this;
        var spine = this.spine = this.getComponent("sp.Skeleton");
        this._setMix("walk", "run");
        this._setMix("run", "jump");
        this._setMix("walk", "jump");
        spine.setStartListener(function(trackEntry) {
          var animationName = trackEntry.animation ? trackEntry.animation.name : "";
          cc.log("[track %s][animation %s] start.", trackEntry.trackIndex, animationName);
        });
        spine.setInterruptListener(function(trackEntry) {
          var animationName = trackEntry.animation ? trackEntry.animation.name : "";
          cc.log("[track %s][animation %s] interrupt.", trackEntry.trackIndex, animationName);
        });
        spine.setEndListener(function(trackEntry) {
          var animationName = trackEntry.animation ? trackEntry.animation.name : "";
          cc.log("[track %s][animation %s] end.", trackEntry.trackIndex, animationName);
        });
        spine.setDisposeListener(function(trackEntry) {
          var animationName = trackEntry.animation ? trackEntry.animation.name : "";
          cc.log("[track %s][animation %s] will be disposed.", trackEntry.trackIndex, animationName);
        });
        spine.setCompleteListener(function(trackEntry) {
          var animationName = trackEntry.animation ? trackEntry.animation.name : "";
          "shoot" === animationName && _this.spine.clearTrack(1);
          var loopCount = Math.floor(trackEntry.trackTime / trackEntry.animationEnd);
          cc.log("[track %s][animation %s] complete: %s", trackEntry.trackIndex, animationName, loopCount);
        });
        spine.setEventListener(function(trackEntry, event) {
          var animationName = trackEntry.animation ? trackEntry.animation.name : "";
          cc.log("[track %s][animation %s] event: %s, %s, %s, %s", trackEntry.trackIndex, animationName, event.data.name, event.intValue, event.floatValue, event.stringValue);
        });
        this._hasStop = false;
      },
      toggleDebugSlots: function toggleDebugSlots() {
        this.spine.debugSlots = !this.spine.debugSlots;
      },
      toggleDebugBones: function toggleDebugBones() {
        this.spine.debugBones = !this.spine.debugBones;
      },
      toggleTimeScale: function toggleTimeScale() {
        1 === this.spine.timeScale ? this.spine.timeScale = .3 : this.spine.timeScale = 1;
      },
      stop: function stop() {
        this.spine.clearTrack(0);
        this._hasStop = true;
      },
      walk: function walk() {
        this.spine.setAnimation(0, "walk", true);
        this._hasStop = false;
      },
      run: function run() {
        this.spine.setAnimation(0, "run", true);
        this._hasStop = false;
      },
      jump: function jump() {
        var oldAnim = this.spine.animation;
        this.spine.setAnimation(0, "jump", false);
        oldAnim && !this._hasStop && this.spine.addAnimation(0, "run" === oldAnim ? "run" : "walk", true, 0);
      },
      shoot: function shoot() {
        this.spine.setAnimation(1, "shoot", false);
      },
      _setMix: function _setMix(anim1, anim2) {
        this.spine.setMix(anim1, anim2, this.mixTime);
        this.spine.setMix(anim2, anim1, this.mixTime);
      }
    });
    cc._RF.pop();
  }, {} ],
  SpineMode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7fa3163/tVA2oO0IuiaM79C", "SpineMode");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        grayMaterial: cc.Material,
        normalMaterial: cc.Material,
        sp0: sp.Skeleton,
        sp1: sp.Skeleton,
        sp2: sp.Skeleton,
        batchLabel: cc.Label,
        cacheLabel: cc.Label,
        matLabel: cc.Label,
        tintLabel: cc.Label
      },
      onGray: function onGray() {
        this.isGray = !this.isGray;
        var label = "gray";
        this.isGray && (label = "normal");
        this.matLabel.string = label;
        var material = this.grayMaterial;
        this.isGray || (material = this.normalMaterial);
        this.sp0.setMaterial(0, material);
        this.sp0.markForRender(true);
        this.sp1.setMaterial(0, material);
        this.sp1.markForRender(true);
        this.sp2.setMaterial(0, material);
        this.sp2.markForRender(true);
      },
      onBatch: function onBatch() {
        this.isBatch = !this.isBatch;
        var label = "batch";
        this.isBatch && (label = "no batch");
        this.batchLabel.string = label;
        this.sp0.enableBatch = this.isBatch;
        this.sp1.enableBatch = this.isBatch;
        this.sp2.enableBatch = this.isBatch;
      },
      onCache: function onCache() {
        this.isCache = !this.isCache;
        var label = "cache";
        this.isCache && (label = "no cache");
        this.cacheLabel.string = label;
        var mode = dragonBones.ArmatureDisplay.AnimationCacheMode.SHARED_CACHE;
        this.isCache || (mode = dragonBones.ArmatureDisplay.AnimationCacheMode.REALTIME);
        this.sp0.setAnimationCacheMode(mode);
        this.sp1.setAnimationCacheMode(mode);
        this.sp2.setAnimationCacheMode(mode);
      },
      onTint: function onTint() {
        this.isTint = !this.isTint;
        var label = "tint";
        this.isTint && (label = "no tint");
        this.tintLabel.string = label;
        this.sp0.useTint = this.isTint;
        this.sp1.useTint = this.isTint;
        this.sp2.useTint = this.isTint;
      }
    });
    cc._RF.pop();
  }, {} ],
  SpineSkin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9dc947ZsNtBXYqCPSgN0fAB", "SpineSkin");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        goblin: {
          type: sp.Skeleton,
          default: null
        },
        goblingirl: {
          type: sp.Skeleton,
          default: null
        }
      },
      start: function start() {
        this._skinIdx = 0;
        this.parts = [ "left-arm", "left-hand", "left-shoulder" ];
      },
      change: function change() {
        if (0 == this._skinIdx) {
          this._skinIdx = 1;
          for (var i = 0; i < this.parts.length; i++) {
            var goblin = this.goblin.findSlot(this.parts[i]);
            var goblingirl = this.goblingirl.findSlot(this.parts[i]);
            var attachment = goblingirl.getAttachment();
            goblin.setAttachment(attachment);
          }
        } else if (1 == this._skinIdx) {
          this._skinIdx = 0;
          this.goblin.setSkin("goblin");
          this.goblin.setSlotsToSetupPose();
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  StorageUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9bf9cWgTmNAapAWiQT08YdJ", "StorageUtil");
    "use strict";
    cc.Class({
      extends: cc.Component,
      setCurrentScene: function setCurrentScene(sceneName) {
        true;
        return;
      },
      getCurrentScene: function getCurrentScene() {
        true;
        return;
        var scene;
      },
      clearStorage: function clearStorage() {
        cc.sys.localStorage.clear();
      }
    });
    cc._RF.pop();
  }, {} ],
  TagColliderListener: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cc2a1tfAtlEWoLmkfLbgQS3", "TagColliderListener");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        label: {
          default: null,
          type: cc.Label
        }
      },
      onEnable: function onEnable() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
      },
      onDisable: function onDisable() {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
      },
      onCollisionEnter: function onCollisionEnter(other, self) {
        this.label.string = "Collision on tag : " + self.tag;
      }
    });
    cc._RF.pop();
  }, {} ],
  TiledTile: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f47ccRZveFP2o2cCRmfZTTo", "TiledTile");
    "use strict";
    cc.Class({
      extends: cc.Component,
      start: function start() {
        var layer = this.getComponent(cc.TiledLayer);
        var tile = layer.getTiledTileAt(0, 22, true);
        var tileNode = tile.node;
        tileNode.runAction(cc.spawn(cc.scaleTo(2, 3, 3), cc.rotateTo(2, 90), cc.moveTo(2, 600, 300)));
      }
    });
    cc._RF.pop();
  }, {} ],
  TipsCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8ae30fCf3BOT5yZGmirBXJi", "TipsCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        content: require("LabelLocalized")
      },
      onDestroySelf: function onDestroySelf() {
        this.node.destroy();
      },
      setContent: function setContent(str) {
        str && (this.content.textKey = str);
      }
    });
    cc._RF.pop();
  }, {
    LabelLocalized: "LabelLocalized"
  } ],
  TipsManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6c9bezFtu5AHZUcydh+6QJj", "TipsManager");
    "use strict";
    var isAndroid = cc.sys.platform === cc.sys.ANDROID;
    var isNative = cc.sys.isNative;
    var isNativeWindows = isNative && cc.sys.os === cc.sys.OS_WINDOWS;
    var isNativeMacOS = isNative && cc.sys.os === cc.sys.OS_OSX;
    var isBrowser = cc.sys.isBrowser;
    var isMobile = cc.sys.isMobile;
    var isIphone = cc.sys.platform === cc.sys.IPHONE;
    var isDesktopBrowser = cc.sys.platform === cc.sys.DESKTOP_BROWSER;
    var isWechat = cc.sys.platform === cc.sys.WECHAT_GAME;
    var isQQPlay = cc.sys.platform === cc.sys.QQ_PLAY;
    var isBaidu = cc.sys.platform === cc.sys.BAIDU_GAME;
    var isVivo = cc.sys.platform === cc.sys.VIVO_GAME;
    var isOPPO = cc.sys.platform === cc.sys.OPPO_GAME;
    var isXiaomi = cc.sys.platform === cc.sys.XIAOMI_GAME;
    var isHuawei = cc.sys.platform === cc.sys.HUAWEI_GAME;
    var isJkw = cc.sys.platform === cc.sys.JKW_GAME;
    var isAlipay = cc.sys.platform === cc.sys.ALIPAY_GAME;
    module.exports = {
      tispPrefab: null,
      SupportConfig: function SupportConfig(name) {
        console.log(name);
        switch (name) {
         case "downloader-web":
          return !isNative;

         case "EditBoxTabIndex":
          return !isNative && !isAlipay;

         case "EditBox":
         case "EditBoxEvent":
          return !isAlipay;

         case "OnMultiTouchInput":
          return isMobile;

         case "webp-test":
          return cc.sys.capabilities["webp"];

         case "DeviceMotion":
          return isMobile && !isQQPlay && !isVivo;

         case "Native_Call":
          return isMobile && (isAndroid || isIphone) && true;

         case "TTFFontLabel":
          return !isQQPlay;

         case "MousePropagation":
          return isNative && !isMobile && !isWechat && !isQQPlay && !isXiaomi && !isHuawei && !isAlipay || isDesktopBrowser;

         case "downloader-native":
          return isNative && true;

         case "capture_to_native":
          return isNative && !isVivo && !isOPPO;

         case "SafeArea":
          return (isIphone || isAndroid) && isNative;

         case "capture_to_wechat":
          return isWechat;

         case "capture_to_web":
         case "ShadowLabel":
         case "videoPlayer-stayOnBottom":
          return isBrowser;

         case "MotionStreak":
         case "Mask_IMAGE_STENCIL":
         case "Mask_NESTED":
          return cc.game.renderType === cc.game.RENDER_TYPE_WEBGL;

         case "KeyboardInput":
         case "platform":
          return !isMobile && !isBaidu && !isXiaomi && !isHuawei && !isAlipay;

         case "videoPlayer":
          return !isNativeWindows && !isNativeMacOS && !isQQPlay && !isBaidu && !isXiaomi && !isHuawei && !isAlipay;

         case "webview":
          return (isMobile || isBrowser) && !isQQPlay && !isWechat && !isBaidu && !isXiaomi && !isHuawei && !isAlipay;

         case "mesh":
          return !isVivo && !isOPPO;
        }
      },
      init: function init() {
        var _this = this;
        if (this.tipsPrefab) return;
        cc.resources.load("tips/Tips", function(err, prefab) {
          _this.tipsPrefab = prefab;
        });
      },
      createTips: function createTips(content) {
        var node = cc.instantiate(this.tipsPrefab);
        var tipsCtrl = node.getComponent("TipsCtrl");
        content && tipsCtrl.setContent(content);
        node.parent = cc.director.getScene();
      },
      hasSupport: function hasSupport(name, hideTip) {
        var support = this.SupportConfig(name);
        if (!support && void 0 !== support) {
          hideTip || this.createTips();
          return false;
        }
        return true;
      }
    };
    cc._RF.pop();
  }, {} ],
  TouchDragger: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "95021X5KjxP369OONe316sH", "TouchDragger");
    "use strict";
    var TouchDragger = cc.Class({
      extends: cc.Component,
      properties: {
        propagate: {
          default: false
        }
      },
      onLoad: function onLoad() {
        this.node.opacity = 160;
        this.node.on(cc.Node.EventType.TOUCH_START, function() {
          cc.log("Drag stated ...");
          this.opacity = 255;
        }, this.node);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
          this.opacity = 255;
          var delta = event.touch.getDelta();
          this.x += delta.x;
          this.y += delta.y;
          this.getComponent(TouchDragger).propagate && event.stopPropagation();
        }, this.node);
        this.node.on(cc.Node.EventType.TOUCH_END, function() {
          this.opacity = 160;
        }, this.node);
      }
    });
    cc._RF.pop();
  }, {} ],
  TouchEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a14bfaD+gRJKrTVjKwitc53", "TouchEvent");
    "use strict";
    cc.Class({
      extends: cc.Component,
      _callback: null,
      onLoad: function onLoad() {
        this.node.opacity = 100;
        this.node.on(cc.Node.EventType.TOUCH_START, function() {
          this.node.opacity = 255;
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function() {
          this.node.opacity = 100;
          this._callback && this._callback();
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function() {
          this.node.opacity = 100;
        }, this);
      }
    });
    cc._RF.pop();
  }, {} ],
  TransformController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cd33cZWBSxM+52OyVSI00UY", "TransformController");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Node = cc.Node;
    var Vec3 = cc.Vec3;
    var _temp_num = 0;
    var TransformController = function(_super) {
      __extends(TransformController, _super);
      function TransformController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.particle1 = null;
        _this.particle2 = null;
        _this.particle3 = null;
        _this.particle4 = null;
        _this.check1 = null;
        _this.check2 = null;
        _this.check3 = null;
        _this.check4 = null;
        _this._translate = new Vec3();
        _this._rotate = new Vec3();
        return _this;
      }
      TransformController.prototype.start = function() {};
      TransformController.prototype.onTranslateChanged = function(slider, data) {
        this._translate.set(cc.v3(0, 0, 10 * slider.progress - _temp_num));
        _temp_num = 10 * slider.progress;
        if (this.check1.isChecked) {
          this.particle1.x += this._translate.x;
          this.particle1.y += this._translate.y;
          this.particle1.z += this._translate.z;
        }
        if (this.check2.isChecked) {
          this.particle2.x += this._translate.x;
          this.particle2.y += this._translate.y;
          this.particle2.z += this._translate.z;
        }
        if (this.check3.isChecked) {
          this.particle3.x += this._translate.x;
          this.particle4.y += this._translate.y;
          this.particle3.z += this._translate.z;
        }
        if (this.check4.isChecked) {
          this.particle4.x += this._translate.x;
          this.particle4.y += this._translate.y;
          this.particle4.z += this._translate.z;
        }
      };
      TransformController.prototype.onRotateChanged = function(slider, data) {
        this._rotate.set(cc.v3(90 * slider.progress, 0, 0));
        this.check1.isChecked && (this.particle1.eulerAngles = cc.v3(0, this._rotate.x, 0));
        this.check2.isChecked && (this.particle2.eulerAngles = cc.v3(0, this._rotate.x, 0));
        this.check3.isChecked && (this.particle3.eulerAngles = cc.v3(0, this._rotate.x, 0));
        this.check4.isChecked && (this.particle4.eulerAngles = cc.v3(0, this._rotate.x, 0));
      };
      __decorate([ property({
        type: Node
      }) ], TransformController.prototype, "particle1", void 0);
      __decorate([ property({
        type: Node
      }) ], TransformController.prototype, "particle2", void 0);
      __decorate([ property({
        type: Node
      }) ], TransformController.prototype, "particle3", void 0);
      __decorate([ property({
        type: Node
      }) ], TransformController.prototype, "particle4", void 0);
      __decorate([ property({
        type: cc.Toggle
      }) ], TransformController.prototype, "check1", void 0);
      __decorate([ property({
        type: cc.Toggle
      }) ], TransformController.prototype, "check2", void 0);
      __decorate([ property({
        type: cc.Toggle
      }) ], TransformController.prototype, "check3", void 0);
      __decorate([ property({
        type: cc.Toggle
      }) ], TransformController.prototype, "check4", void 0);
      TransformController = __decorate([ ccclass ], TransformController);
      return TransformController;
    }(cc.Component);
    exports.default = TransformController;
    cc._RF.pop();
  }, {} ],
  ValueTypeProperties: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d9bf6bFb+tF779stLEmjzTV", "ValueTypeProperties");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        myNumber: {
          default: 0,
          type: cc.Integer
        },
        myString: {
          default: "default text"
        },
        myVec2: {
          default: cc.Vec2.ZERO
        },
        myColor: {
          default: cc.Color.WHITE
        },
        myOtherNumber: 0,
        myOtherString: "no type definition",
        myOtherVec2: cc.Vec2.ONE,
        myOtherColor: cc.Color.BLACK
      },
      onLoad: function onLoad() {},
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {} ],
  VertexEffect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b1897ILwdBEsoce3TaJvAgZ", "VertexEffect");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        skeleton: {
          type: sp.Skeleton,
          default: null
        }
      },
      start: function start() {
        this._swirlTime = 0;
        this._maxEffect = 3;
        this._index = 0;
        this._bound = cc.size(this.skeleton.node.width, this.skeleton.node.height);
        this._swirlEffect = new sp.VertexEffectDelegate();
        this._swirlEffect.initSwirlWithPowOut(0, 2);
        this._jitterEffect = new sp.VertexEffectDelegate();
        this._jitterEffect.initJitter(20, 20);
      },
      switchEffect: function switchEffect() {
        this._index++;
        this._index >= this._maxEffect && (this._index = 0);
        switch (this._index) {
         case 0:
          this.skeleton.setVertexEffectDelegate(null);
          break;

         case 1:
          this.skeleton.setVertexEffectDelegate(this._jitterEffect);
          break;

         case 2:
          this.skeleton.setVertexEffectDelegate(this._swirlEffect);
        }
      },
      update: function update(dt) {
        if (2 == this._index) {
          this._swirlTime += dt;
          var percent = this._swirlTime % 2;
          percent > 1 && (percent = 1 - (percent - 1));
          var bound = this._bound;
          var swirlEffect = this._swirlEffect.getSwirlVertexEffect();
          swirlEffect.angle = 360 * percent;
          swirlEffect.centerX = .5 * bound.width;
          swirlEffect.centerY = .5 * bound.height;
          swirlEffect.radius = percent * Math.sqrt(bound.width * bound.width + bound.height * bound.height);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  VideoPlayerCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "100b5UtyNJLNaih42ednEgN", "VideoPlayerCtrl");
    "use strict";
    var i18n = require("i18n");
    var TipsManager = require("TipsManager");
    function getStatus(event) {
      switch (event) {
       case cc.VideoPlayer.EventType.PLAYING:
        return "PLAYING";

       case cc.VideoPlayer.EventType.PAUSED:
        return "PAUSED";

       case cc.VideoPlayer.EventType.STOPPED:
        return "STOPPED";

       case cc.VideoPlayer.EventType.COMPLETED:
        return "COMPLETED";

       case cc.VideoPlayer.EventType.META_LOADED:
        return "META_LOADED";

       case cc.VideoPlayer.EventType.CLICKED:
        return "CLICKED";

       case cc.VideoPlayer.EventType.READY_TO_PLAY:
        return "READY_TO_PLAY";

       default:
        return "NONE";
      }
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        videoPlayer: cc.VideoPlayer,
        statusLabel: cc.Label,
        currentTime: cc.Label,
        resSwitchBtnLabel: cc.Label,
        controlButtons: cc.Node,
        keep_Ratio_Switch: cc.Node,
        playVideoArea: cc.Node,
        visibility: cc.Label
      },
      start: function start() {
        var _this = this;
        TipsManager.init();
        this.controlButtons.active = false;
        this.keep_Ratio_Switch.active = !(cc.sys.isBrowser || cc.sys.platform === cc.sys.WECHAT_GAME);
        this.playVideoArea.on("touchend", function() {
          _this.videoPlayer.play();
        });
      },
      onVideoPlayerEvent: function onVideoPlayerEvent(sender, event) {
        this.statusLabel.string = "Status: " + getStatus(event);
        if (event === cc.VideoPlayer.EventType.CLICKED) this.videoPlayer.isPlaying() ? this.videoPlayer.pause() : this.videoPlayer.play(); else if (event === cc.VideoPlayer.EventType.READY_TO_PLAY || event === cc.VideoPlayer.EventType.META_LOADED) {
          this.controlButtons.active = true;
          this.playVideoArea.active = true;
        } else event === cc.VideoPlayer.EventType.PLAYING && (this.playVideoArea.active = false);
      },
      toggleFullscreen: function toggleFullscreen() {
        if (cc.sys.isBrowser && cc.sys.browserType === cc.sys.BROWSER_TYPE_MOBILE_QQ && cc.sys.browserVersion <= 7.2 && /Nexus 6/.test(navigator.userAgent)) {
          TipsManager.createTips(i18n.t("cases/02_ui/09_videoplayer/videoPlayer.nonsupport_fullscreen"));
          return cc.log("May be crash, so prohibit full screen");
        }
        this.videoPlayer.isFullscreen = true;
      },
      toggleVisibility: function toggleVisibility(event) {
        this.videoPlayer.node.active = !this.videoPlayer.node.active;
        this.playVideoArea.active = this.videoPlayer.node.active;
        this.visibility.string = "Visibility: " + this.videoPlayer.node.active;
      },
      keepRatioSwitch: function keepRatioSwitch() {
        this.videoPlayer.keepAspectRatio = !this.videoPlayer.keepAspectRatio;
      },
      switchOnlineVideo: function switchOnlineVideo() {
        this.videoPlayer.remoteURL = "https://www.w3school.com.cn/i/movie.mp4";
        this.videoPlayer.resourceType = cc.VideoPlayer.ResourceType.REMOTE;
        this.playVideoArea.active = true;
      },
      switchLoaclVide: function switchLoaclVide() {
        this.videoPlayer.resourceType = cc.VideoPlayer.ResourceType.LOCAL;
        this.playVideoArea.active = true;
      },
      play: function play() {
        this.videoPlayer.play();
        this.playVideoArea.active = false;
      },
      pause: function pause() {
        this.videoPlayer.pause();
      },
      stop: function stop() {
        this.videoPlayer.stop();
      },
      update: function update() {
        this.currentTime && this.videoPlayer.currentTime >= 0 && (this.currentTime.string = this.videoPlayer.currentTime.toFixed(2) + " / " + this.videoPlayer.getDuration().toFixed(2));
      }
    });
    cc._RF.pop();
  }, {
    TipsManager: "TipsManager",
    i18n: "i18n"
  } ],
  Wall: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1a279oXNoxFFI516fswAbVo", "Wall");
    "use strict";
    var WallType = cc.Enum({
      Left: 0,
      Right: 1,
      Top: 2,
      Bottom: 3
    });
    cc.Class({
      extends: cc.Component,
      properties: {
        type: {
          default: WallType.Left,
          type: WallType
        },
        width: 5
      },
      start: function start() {
        var collider = this.getComponent(cc.BoxCollider);
        if (!collider) return;
        var node = this.node;
        var type = this.type;
        var width = cc.winSize.width;
        var height = cc.winSize.height;
        var wallWidth = this.width;
        if (type === WallType.Left) {
          node.height = height;
          node.width = wallWidth;
          node.x = 0;
          node.y = height / 2;
        } else if (type === WallType.Right) {
          node.height = height;
          node.width = wallWidth;
          node.x = width;
          node.y = height / 2;
        } else if (type === WallType.Top) {
          node.width = width;
          node.height = wallWidth;
          node.x = width / 2;
          node.y = height;
        } else if (type === WallType.Bottom) {
          node.width = width;
          node.height = wallWidth;
          node.x = width / 2;
          node.y = 0;
        }
        collider.size = node.getContentSize();
      }
    });
    cc._RF.pop();
  }, {} ],
  WebviewCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f8de1gmPM1CLoiv+P/T9HnJ", "WebviewCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        labelStatus: cc.Label,
        webview: cc.WebView,
        url: cc.EditBox
      },
      onWebFinishLoad: function onWebFinishLoad(sender, event) {
        var loadStatus = "";
        event === cc.WebView.EventType.LOADED ? loadStatus = " is loaded!" : event === cc.WebView.EventType.LOADING ? loadStatus = " is loading!" : event === cc.WebView.EventType.ERROR && (loadStatus = " load error!");
        this.labelStatus.string = this.webview.url + loadStatus;
      },
      visitURL: function visitURL() {
        this.webview.url = this.url.string;
      }
    });
    cc._RF.pop();
  }, {} ],
  arc: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a556aaUmwpNjJWPRek7CPtI", "arc");
    "use strict";
    cc.Class({
      extends: cc.Component,
      onLoad: function onLoad() {
        var g = this.getComponent(cc.Graphics);
        g.lineWidth = 5;
        g.fillColor.fromHEX("#ff0000");
        g.arc(0, 0, 100, Math.PI / 2, Math.PI, false);
        g.lineTo(0, 0);
        g.close();
        g.stroke();
        g.fill();
        g.fillColor.fromHEX("#00ff00");
        g.arc(-10, 10, 100, Math.PI / 2, Math.PI, true);
        g.lineTo(-10, 10);
        g.close();
        g.stroke();
        g.fill();
      }
    });
    cc._RF.pop();
  }, {} ],
  "asset-bundle": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a1593ZAlz9Fk4nHnFYUp3O+", "asset-bundle");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var i18n = require("../../i18n/i18n");
    var AssetBundle = function(_super) {
      __extends(AssetBundle, _super);
      function AssetBundle() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.loadTips = null;
        _this.showWindow = null;
        _this.labels = [];
        _this._audioSource = null;
        _this._isLoading = false;
        return _this;
      }
      AssetBundle.prototype.onLoad = function() {
        var testBundle = cc.assetManager.getBundle("TestBundle");
        testBundle && (this.labels[0].textKey = i18n.t("cases/AssetBundle.12"));
      };
      AssetBundle.prototype.onClickBundle = function() {
        var _this = this;
        var testBundle = cc.assetManager.getBundle("TestBundle");
        if (testBundle || this._isLoading) return;
        this._onClear();
        this._isLoading = true;
        this.loadTips.textKey = "Bundle Loading....";
        cc.assetManager.loadBundle("TestBundle", function(err) {
          if (err) {
            cc.log("Error url [" + err + "]");
            return;
          }
          _this._isLoading = false;
          _this.loadTips.textKey = "Bundle loaded Successfully!";
          _this.labels[0].textKey = i18n.t("cases/AssetBundle.12");
        });
      };
      AssetBundle.prototype.onClickTexture = function() {
        var _this = this;
        if (this._isLoading) return;
        var testBundle = cc.assetManager.getBundle("TestBundle");
        if (!testBundle) {
          this.loadTips.textKey = "cases/AssetBundle.9";
          return;
        }
        this._onClear();
        this._isLoading = true;
        this.loadTips.textKey = "Texture Loading....";
        testBundle.load("gold", function(err, asset) {
          if (err) {
            cc.log("Error url [" + err + "]");
            return;
          }
          _this._isLoading = false;
          _this.loadTips.textKey = "";
          var node = new cc.Node("New Node");
          node.setPosition(0, 0);
          var component = node.addComponent(cc.Sprite);
          component.spriteFrame = new cc.SpriteFrame(asset);
          _this.labels[1].textKey = i18n.t("cases/AssetBundle.12");
          _this.showWindow.addChild(node);
        });
      };
      AssetBundle.prototype.onClickAudio = function() {
        var _this = this;
        if (this._isLoading) return;
        var testBundle = cc.assetManager.getBundle("TestBundle");
        if (!testBundle) {
          this.loadTips.textKey = "cases/AssetBundle.9";
          return;
        }
        this._onClear();
        this._isLoading = true;
        this.loadTips.textKey = "Audio Loading....";
        testBundle.load("ss", function(err, asset) {
          if (err) {
            cc.log("Error url [" + err + "]");
            return;
          }
          _this._isLoading = false;
          _this.loadTips.textKey = "";
          var node = new cc.Node("New Node");
          node.setPosition(0, 0);
          var component = node.addComponent(cc.AudioSource);
          component.clip = asset;
          component.play();
          _this._audioSource = component;
          _this.loadTips.textKey = "cases/AssetBundle.15";
          _this.labels[2].textKey = i18n.t("cases/AssetBundle.12");
          _this.showWindow.addChild(node);
        });
      };
      AssetBundle.prototype.onClickScene = function() {
        var _this = this;
        if (this._isLoading) return;
        var testBundle = cc.assetManager.getBundle("TestBundle");
        if (!testBundle) {
          this.loadTips.textKey = "cases/AssetBundle.9";
          return;
        }
        this._onClear();
        this._isLoading = true;
        this.loadTips.textKey = "Scene Loading....";
        testBundle.loadScene("sub-scene", function(err, asset) {
          if (err) {
            cc.log("Error url [" + err + "]");
            return;
          }
          _this._isLoading = false;
          _this.loadTips.textKey = "";
          cc.director.runScene(asset);
        });
      };
      AssetBundle.prototype.onClickDestroy = function() {
        if (this._isLoading) return;
        var testBundle = cc.assetManager.getBundle("TestBundle");
        if (!testBundle) {
          this.loadTips.textKey = "cases/AssetBundle.9";
          return;
        }
        this._onClear();
        cc.assetManager.removeBundle(testBundle);
        this.loadTips.textKey = "cases/AssetBundle.17";
        this.labels[0].textKey = "cases/AssetBundle.2";
        this.labels[1].textKey = "cases/AssetBundle.4";
        this.labels[2].textKey = "cases/AssetBundle.3";
        this.labels[3].textKey = "cases/AssetBundle.5";
      };
      AssetBundle.prototype.onClickRelease = function() {
        if (this._isLoading) return;
        var testBundle = cc.assetManager.getBundle("TestBundle");
        if (!testBundle) {
          this.loadTips.textKey = "cases/AssetBundle.9";
          return;
        }
        this._onClear();
        testBundle.releaseAll();
        this.loadTips.textKey = "cases/AssetBundle.16";
        this.labels[1].textKey = "cases/AssetBundle.4";
        this.labels[2].textKey = "cases/AssetBundle.3";
        this.labels[3].textKey = "cases/AssetBundle.5";
      };
      AssetBundle.prototype._onClear = function() {
        this.showWindow.removeAllChildren(true);
        this._audioSource && this._audioSource instanceof cc.AudioSource && this._audioSource.stop();
      };
      __decorate([ property(cc.Label) ], AssetBundle.prototype, "loadTips", void 0);
      __decorate([ property(cc.Node) ], AssetBundle.prototype, "showWindow", void 0);
      __decorate([ property({
        type: [ cc.Label ]
      }) ], AssetBundle.prototype, "labels", void 0);
      AssetBundle = __decorate([ ccclass ], AssetBundle);
      return AssetBundle;
    }(cc.Component);
    exports.default = AssetBundle;
    cc._RF.pop();
  }, {
    "../../i18n/i18n": "i18n"
  } ],
  born: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e5090+j3atD2ZM4RN9dA8qa", "born");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Born = function(_super) {
      __extends(Born, _super);
      function Born() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ball = null;
        _this.checkNode = null;
        _this.box = null;
        return _this;
      }
      Born.prototype.start = function() {
        this.checkNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.rotate();
      };
      Born.prototype.rotate = function() {
        this.box.runAction(cc.repeatForever(cc.sequence(cc.rotate3DTo(1, 1, 0, 20), cc.rotate3DTo(1, 1, 0, -20))));
      };
      Born.prototype.onTouchStart = function(event) {
        var newBall = cc.instantiate(this.ball);
        newBall.active = true;
        this.node.addChild(newBall);
      };
      __decorate([ property({
        type: cc.Node
      }) ], Born.prototype, "ball", void 0);
      __decorate([ property({
        type: cc.Node
      }) ], Born.prototype, "checkNode", void 0);
      __decorate([ property({
        type: cc.Node
      }) ], Born.prototype, "box", void 0);
      Born = __decorate([ ccclass ], Born);
      return Born;
    }(cc.Component);
    exports.default = Born;
    cc._RF.pop();
  }, {} ],
  capture_to_native: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1a65pebNpA27eOgsyL77g/", "capture_to_native");
    "use strict";
    cc.Class({
      extends: require("./textureRenderUtils"),
      properties: {
        _width: 0,
        _height: 0
      },
      start: function start() {
        var _this = this;
        this.init();
        this.camera.enabled = true;
        this.schedule(function() {
          var picData = _this.initImage();
          _this.createCanvas(picData);
          _this.label.string = "Showing the capture";
          _this.saveFile(picData);
          _this.camera.enabled = false;
        }, 1, 0);
      },
      initImage: function initImage() {
        var data = this.texture.readPixels();
        this._width = this.texture.width;
        this._height = this.texture.height;
        var picData = this.filpYImage(data, this._width, this._height);
        return picData;
      },
      createCanvas: function createCanvas(picData) {
        var _this2 = this;
        var texture = new cc.Texture2D();
        texture.initWithData(picData, 32, this._width, this._height);
        var spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(texture);
        var node = new cc.Node();
        var sprite = node.addComponent(cc.Sprite);
        sprite.spriteFrame = spriteFrame;
        node.zIndex = cc.macro.MAX_ZINDEX;
        node.parent = cc.director.getScene();
        var width = cc.winSize.width;
        var height = cc.winSize.height;
        node.x = width / 2;
        node.y = height / 2;
        node.on(cc.Node.EventType.TOUCH_START, function() {
          node.parent = null;
          _this2.label.string = "";
          node.destroy();
        });
        this.captureAction(node, width, height);
      },
      saveFile: function saveFile(picData) {
        var filePath;
        var success;
        false;
      },
      filpYImage: function filpYImage(data, width, height) {
        var picData = new Uint8Array(width * height * 4);
        var rowBytes = 4 * width;
        for (var row = 0; row < height; row++) {
          var srow = height - 1 - row;
          var start = srow * width * 4;
          var reStart = row * width * 4;
          for (var i = 0; i < rowBytes; i++) picData[reStart + i] = data[start + i];
        }
        return picData;
      }
    });
    cc._RF.pop();
  }, {
    "./textureRenderUtils": "textureRenderUtils"
  } ],
  capture_to_web: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5ac74J4RCNKq6XeV8GboJXx", "capture_to_web");
    "use strict";
    cc.Class({
      extends: require("./textureRenderUtils"),
      start: function start() {
        var _this = this;
        this.init();
        this.createCanvas();
        var img = this.createImg();
        this.scheduleOnce(function() {
          _this.showImage(img);
          _this.label.string = "Showing the capture";
        }, 1);
      }
    });
    cc._RF.pop();
  }, {
    "./textureRenderUtils": "textureRenderUtils"
  } ],
  capture_to_wechat: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0ed55wVxhhB5p1/Ob9bQHCL", "capture_to_wechat");
    "use strict";
    cc.Class({
      extends: require("./textureRenderUtils"),
      start: function start() {
        var _this = this;
        this.init();
        this.scheduleOnce(function() {
          var canvas = _this.createCanvas();
          _this.createImg();
          _this.saveFile(canvas);
        }, 1);
      },
      saveFile: function saveFile(tempCanvas) {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
          var self = this;
          var data = {
            x: 0,
            y: 0,
            width: canvas.width,
            height: canvas.height,
            destWidth: canvas.width,
            destHeight: canvas.height,
            fileType: "png",
            quality: 1
          };
          var _tempFilePath = tempCanvas.toTempFilePathSync(data);
          cc.log("Capture file success!" + _tempFilePath);
          self.label.string = "\u56fe\u7247\u52a0\u8f7d\u5b8c\u6210\uff0c\u7b49\u5f85\u672c\u5730\u9884\u89c8";
          wx.previewImage({
            urls: [ _tempFilePath ],
            success: function success(res) {
              cc.log("Preview image success.");
              self.label.string = "";
            }
          });
        } else {
          var _self = this;
          _self.label.string = "\u8be5\u6837\u4f8b\u53ea\u652f\u6301\u5fae\u4fe1\u5c0f\u6e38\u620f\u5e73\u53f0";
          cc.log("\u8be5\u6837\u4f8b\u53ea\u652f\u6301\u5fae\u4fe1\u5c0f\u6e38\u620f\u5e73\u53f0");
        }
      }
    });
    cc._RF.pop();
  }, {
    "./textureRenderUtils": "textureRenderUtils"
  } ],
  checkbox: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ca244RHY8xLbprnCDD9dH+B", "checkbox");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        checkbox: {
          default: null,
          type: cc.Toggle
        },
        checkBoxEventString: {
          default: null,
          type: cc.Label
        },
        radioButtonEventString: {
          default: null,
          type: cc.Label
        },
        radioButton: {
          default: [],
          type: cc.Toggle
        }
      },
      onLoad: function onLoad() {
        this.checkbox && this._updateToggleEventString("CheckBox", this.checkBoxEventString, this.checkbox);
      },
      _updateToggleEventString: function _updateToggleEventString(title, label, toggle) {
        toggle.isChecked ? label.string = title + " is checked." : label.string = title + " is unchecked.";
      },
      radioButtonClicked: function radioButtonClicked(toggle) {
        var index = this.radioButton.indexOf(toggle);
        var title = "RadioButton";
        switch (index) {
         case 0:
          title += "1";
          break;

         case 1:
          title += "2";
          break;

         case 2:
          title += "3";
        }
        this._updateToggleEventString(title, this.radioButtonEventString, toggle);
      },
      checkBoxClicked: function checkBoxClicked(toggle) {
        this._updateToggleEventString("CheckBox", this.checkBoxEventString, toggle);
      }
    });
    cc._RF.pop();
  }, {} ],
  chroma: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "72facZSAJZETLpI+W596C1k", "chroma");
    "use strict";
    (function() {
      var a, b, c, d, e, f, g, h, i, j, k, l, m, n, _o, _p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa, xa, ya, za, Aa, Ba, Ca = [].slice;
      xa = function() {
        var a, b, c, d, e;
        for (a = {}, e = "Boolean Number String Function Array Date RegExp Undefined Null".split(" "), 
        d = 0, b = e.length; d < b; d++) c = e[d], a["[object " + c + "]"] = c.toLowerCase();
        return function(b) {
          var c;
          return c = Object.prototype.toString.call(b), a[c] || "object";
        };
      }(), U = function U(a, b, c) {
        return null == b && (b = 0), null == c && (c = 1), a < b && (a = b), a > c && (a = c), 
        a;
      }, ya = function ya(a) {
        return a.length >= 3 ? Array.prototype.slice.call(a) : a[0];
      }, u = function u(a) {
        var b, c;
        for (a._clipped = !1, a._unclipped = a.slice(0), b = c = 0; c < 3; b = ++c) b < 3 ? ((a[b] < 0 || a[b] > 255) && (a._clipped = !0), 
        a[b] < 0 && (a[b] = 0), a[b] > 255 && (a[b] = 255)) : 3 === b && (a[b] < 0 && (a[b] = 0), 
        a[b] > 1 && (a[b] = 1));
        return a._clipped || delete a._unclipped, a;
      }, d = Math.PI, sa = Math.round, w = Math.cos, B = Math.floor, ba = Math.pow, V = Math.log, 
      ua = Math.sin, va = Math.sqrt, n = Math.atan2, Y = Math.max, m = Math.abs, g = 2 * d, 
      e = d / 3, b = d / 180, f = 180 / d, t = function t() {
        return arguments[0] instanceof a ? arguments[0] : function(a, b, c) {
          c.prototype = a.prototype;
          var d = new c(), e = a.apply(d, b);
          return Object(e) === e ? e : d;
        }(a, arguments, function() {});
      }, t["default"] = t, l = [], "undefined" != typeof module && null !== module && null != module.exports && (module.exports = t), 
      "function" == typeof define && define.amd ? define([], function() {
        return t;
      }) : (ra = "undefined" != typeof exports && null !== exports ? exports : this || window, 
      ra.chroma = t), t.version = "1.3.7", k = {}, i = [], j = !1, a = function() {
        function a() {
          var a, b, c, d, e, f, g, h, l;
          for (f = this, b = [], h = 0, d = arguments.length; h < d; h++) null != (a = arguments[h]) && b.push(a);
          if (b.length > 1 && (g = b[b.length - 1]), null != k[g]) f._rgb = u(k[g](ya(b.slice(0, -1)))); else {
            for (j || (i = i.sort(function(a, b) {
              return b.p - a.p;
            }), j = !0), l = 0, e = i.length; l < e && (c = i[l], !(g = c.test.apply(c, b))); l++) ;
            g && (f._rgb = u(k[g].apply(k, b)));
          }
          null == f._rgb && console.warn("unknown format: " + b), null == f._rgb && (f._rgb = [ 0, 0, 0 ]), 
          3 === f._rgb.length && f._rgb.push(1);
        }
        return a.prototype.toString = function() {
          return this.hex();
        }, a.prototype.clone = function() {
          return t(me._rgb);
        }, a;
      }(), t._input = k, t.brewer = r = {
        OrRd: [ "#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000" ],
        PuBu: [ "#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858" ],
        BuPu: [ "#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b" ],
        Oranges: [ "#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704" ],
        BuGn: [ "#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b" ],
        YlOrBr: [ "#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506" ],
        YlGn: [ "#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529" ],
        Reds: [ "#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d" ],
        RdPu: [ "#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a" ],
        Greens: [ "#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b" ],
        YlGnBu: [ "#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58" ],
        Purples: [ "#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d" ],
        GnBu: [ "#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081" ],
        Greys: [ "#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000" ],
        YlOrRd: [ "#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026" ],
        PuRd: [ "#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f" ],
        Blues: [ "#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b" ],
        PuBuGn: [ "#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636" ],
        Viridis: [ "#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825" ],
        Spectral: [ "#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2" ],
        RdYlGn: [ "#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837" ],
        RdBu: [ "#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061" ],
        PiYG: [ "#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419" ],
        PRGn: [ "#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b" ],
        RdYlBu: [ "#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695" ],
        BrBG: [ "#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30" ],
        RdGy: [ "#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a" ],
        PuOr: [ "#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b" ],
        Set2: [ "#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3" ],
        Accent: [ "#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666" ],
        Set1: [ "#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999" ],
        Set3: [ "#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f" ],
        Dark2: [ "#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666" ],
        Paired: [ "#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928" ],
        Pastel2: [ "#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc" ],
        Pastel1: [ "#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2" ]
      }, function() {
        var a, b;
        b = [];
        for (a in r) b.push(r[a.toLowerCase()] = r[a]);
      }(), za = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflower: "#6495ed",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        laserlemon: "#ffff54",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrod: "#fafad2",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        maroon2: "#7f0000",
        maroon3: "#b03060",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        purple2: "#7f007f",
        purple3: "#a020f0",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
      }, t.colors = za, P = function P() {
        var a, b, d, e, f, g, h, i, j;
        return b = ya(arguments), f = b[0], a = b[1], d = b[2], i = (f + 16) / 116, h = isNaN(a) ? i : i + a / 500, 
        j = isNaN(d) ? i : i - d / 200, i = c.Yn * Q(i), h = c.Xn * Q(h), j = c.Zn * Q(j), 
        g = Ba(3.2404542 * h - 1.5371385 * i - .4985314 * j), e = Ba(-.969266 * h + 1.8760108 * i + .041556 * j), 
        d = Ba(.0556434 * h - .2040259 * i + 1.0572252 * j), [ g, e, d, b.length > 3 ? b[3] : 1 ];
      }, Ba = function Ba(a) {
        return 255 * (a <= .00304 ? 12.92 * a : 1.055 * ba(a, 1 / 2.4) - .055);
      }, Q = function Q(a) {
        return a > c.t1 ? a * a * a : c.t2 * (a - c.t0);
      }, c = {
        Kn: 18,
        Xn: .95047,
        Yn: 1,
        Zn: 1.08883,
        t0: .137931034,
        t1: .206896552,
        t2: .12841855,
        t3: .008856452
      }, ja = function ja() {
        var a, b, c, d, e, f, g, h;
        return d = ya(arguments), c = d[0], b = d[1], a = d[2], e = oa(c, b, a), f = e[0], 
        g = e[1], h = e[2], [ 116 * g - 16, 500 * (f - g), 200 * (g - h) ];
      }, pa = function pa(a) {
        return (a /= 255) <= .04045 ? a / 12.92 : ba((a + .055) / 1.055, 2.4);
      }, Aa = function Aa(a) {
        return a > c.t3 ? ba(a, 1 / 3) : a / c.t2 + c.t0;
      }, oa = function oa() {
        var a, b, d, e, f, g, h;
        return e = ya(arguments), d = e[0], b = e[1], a = e[2], d = pa(d), b = pa(b), a = pa(a), 
        f = Aa((.4124564 * d + .3575761 * b + .1804375 * a) / c.Xn), g = Aa((.2126729 * d + .7151522 * b + .072175 * a) / c.Yn), 
        h = Aa((.0193339 * d + .119192 * b + .9503041 * a) / c.Zn), [ f, g, h ];
      }, t.lab = function() {
        return function(a, b, c) {
          c.prototype = a.prototype;
          var d = new c(), e = a.apply(d, b);
          return Object(e) === e ? e : d;
        }(a, Ca.call(arguments).concat([ "lab" ]), function() {});
      }, k.lab = P, a.prototype.lab = function() {
        return ja(this._rgb);
      }, _o = function o(a) {
        var b, c, d, e, f, g, h, i, j, k, l;
        return a = function() {
          var b, c, d;
          for (d = [], c = 0, b = a.length; c < b; c++) e = a[c], d.push(t(e));
          return d;
        }(), 2 === a.length ? (j = function() {
          var b, c, d;
          for (d = [], c = 0, b = a.length; c < b; c++) e = a[c], d.push(e.lab());
          return d;
        }(), f = j[0], g = j[1], b = function b(a) {
          var b, c;
          return c = function() {
            var c, d;
            for (d = [], b = c = 0; c <= 2; b = ++c) d.push(f[b] + a * (g[b] - f[b]));
            return d;
          }(), t.lab.apply(t, c);
        }) : 3 === a.length ? (k = function() {
          var b, c, d;
          for (d = [], c = 0, b = a.length; c < b; c++) e = a[c], d.push(e.lab());
          return d;
        }(), f = k[0], g = k[1], h = k[2], b = function b(a) {
          var b, c;
          return c = function() {
            var c, d;
            for (d = [], b = c = 0; c <= 2; b = ++c) d.push((1 - a) * (1 - a) * f[b] + 2 * (1 - a) * a * g[b] + a * a * h[b]);
            return d;
          }(), t.lab.apply(t, c);
        }) : 4 === a.length ? (l = function() {
          var b, c, d;
          for (d = [], c = 0, b = a.length; c < b; c++) e = a[c], d.push(e.lab());
          return d;
        }(), f = l[0], g = l[1], h = l[2], i = l[3], b = function b(a) {
          var b, c;
          return c = function() {
            var c, d;
            for (d = [], b = c = 0; c <= 2; b = ++c) d.push((1 - a) * (1 - a) * (1 - a) * f[b] + 3 * (1 - a) * (1 - a) * a * g[b] + 3 * (1 - a) * a * a * h[b] + a * a * a * i[b]);
            return d;
          }(), t.lab.apply(t, c);
        }) : 5 === a.length && (c = _o(a.slice(0, 3)), d = _o(a.slice(2, 5)), b = function b(a) {
          return a < .5 ? c(2 * a) : d(2 * (a - .5));
        }), b;
      }, t.bezier = function(a) {
        var b;
        return b = _o(a), b.scale = function() {
          return t.scale(b);
        }, b;
      }, t.cubehelix = function(a, b, c, d, e) {
        var f, h, i;
        return null == a && (a = 300), null == b && (b = -1.5), null == c && (c = 1), null == d && (d = 1), 
        null == e && (e = [ 0, 1 ]), f = 0, "array" === xa(e) ? h = e[1] - e[0] : (h = 0, 
        e = [ e, e ]), i = function i(_i) {
          var j, k, l, m, n, o, p, q, r;
          return j = g * ((a + 120) / 360 + b * _i), p = ba(e[0] + h * _i, d), o = 0 !== f ? c[0] + _i * f : c, 
          k = o * p * (1 - p) / 2, m = w(j), r = ua(j), q = p + k * (-.14861 * m + 1.78277 * r), 
          n = p + k * (-.29227 * m - .90649 * r), l = p + k * (1.97294 * m), t(u([ 255 * q, 255 * n, 255 * l ]));
        }, i.start = function(b) {
          return null == b ? a : (a = b, i);
        }, i.rotations = function(a) {
          return null == a ? b : (b = a, i);
        }, i.gamma = function(a) {
          return null == a ? d : (d = a, i);
        }, i.hue = function(a) {
          return null == a ? c : (c = a, "array" === xa(c) ? 0 === (f = c[1] - c[0]) && (c = c[1]) : f = 0, 
          i);
        }, i.lightness = function(a) {
          return null == a ? e : ("array" === xa(a) ? (e = a, h = a[1] - a[0]) : (e = [ a, a ], 
          h = 0), i);
        }, i.scale = function() {
          return t.scale(i);
        }, i.hue(c), i;
      }, t.random = function() {
        var b, c, d;
        for (c = "0123456789abcdef", b = "#", d = 0; d < 6; ++d) b += c.charAt(B(16 * Math.random()));
        return new a(b);
      }, l = [], I = function I(a, b, c, d) {
        var e, f, g, h;
        for (null == c && (c = .5), null == d && (d = "rgb"), "object" !== xa(a) && (a = t(a)), 
        "object" !== xa(b) && (b = t(b)), g = 0, f = l.length; g < f; g++) if (e = l[g], 
        d === e[0]) {
          h = e[1](a, b, c, d);
          break;
        }
        if (null == h) throw "color mode " + d + " is not supported";
        return h.alpha(a.alpha() + c * (b.alpha() - a.alpha()));
      }, t.interpolate = I, a.prototype.interpolate = function(a, b, c) {
        return I(this, a, b, c);
      }, t.mix = I, a.prototype.mix = a.prototype.interpolate, k.rgb = function() {
        var a, b, c, d;
        b = ya(arguments), c = [];
        for (a in b) d = b[a], c.push(d);
        return c;
      }, t.rgb = function() {
        return function(a, b, c) {
          c.prototype = a.prototype;
          var d = new c(), e = a.apply(d, b);
          return Object(e) === e ? e : d;
        }(a, Ca.call(arguments).concat([ "rgb" ]), function() {});
      }, a.prototype.rgb = function(a) {
        return null == a && (a = !0), a ? this._rgb.map(Math.round).slice(0, 3) : this._rgb.slice(0, 3);
      }, a.prototype.rgba = function(a) {
        return null == a && (a = !0), a ? [ Math.round(this._rgb[0]), Math.round(this._rgb[1]), Math.round(this._rgb[2]), this._rgb[3] ] : this._rgb.slice(0);
      }, i.push({
        p: 3,
        test: function test(a) {
          var b;
          return b = ya(arguments), "array" === xa(b) && 3 === b.length ? "rgb" : 4 === b.length && "number" === xa(b[3]) && b[3] >= 0 && b[3] <= 1 ? "rgb" : void 0;
        }
      }), k.lrgb = k.rgb, L = function L(b, c, d, e) {
        var f, g;
        return f = b._rgb, g = c._rgb, new a(va(ba(f[0], 2) * (1 - d) + ba(g[0], 2) * d), va(ba(f[1], 2) * (1 - d) + ba(g[1], 2) * d), va(ba(f[2], 2) * (1 - d) + ba(g[2], 2) * d), e);
      }, h = function h(b) {
        var c, d, e, f, g, h;
        for (d = 1 / b.length, h = [ 0, 0, 0, 0 ], f = 0, e = b.length; f < e; f++) c = b[f], 
        g = c._rgb, h[0] += ba(g[0], 2) * d, h[1] += ba(g[1], 2) * d, h[2] += ba(g[2], 2) * d, 
        h[3] += g[3] * d;
        return h[0] = va(h[0]), h[1] = va(h[1]), h[2] = va(h[2]), new a(h);
      }, l.push([ "lrgb", L ]), t.average = function(a, b) {
        var c, e, f, g, i, j, k, l, m, o, p, q, r;
        if (null == b && (b = "rgb"), m = a.length, a = a.map(function(a) {
          return t(a);
        }), k = a.splice(0, 1)[0], "lrgb" === b) return h(a);
        q = k.get(b), g = [], i = 0, j = 0;
        for (l in q) q[l] = q[l] || 0, g.push(isNaN(q[l]) ? 0 : 1), "h" !== b.charAt(l) || isNaN(q[l]) || (c = q[l] / 180 * d, 
        i += w(c), j += ua(c));
        for (e = k.alpha(), p = 0, o = a.length; p < o; p++) {
          f = a[p], r = f.get(b), e += f.alpha();
          for (l in q) isNaN(r[l]) || (g[l] += 1, "h" === b.charAt(l) ? (c = r[l] / 180 * d, 
          i += w(c), j += ua(c)) : q[l] += r[l]);
        }
        for (l in q) if ("h" === b.charAt(l)) {
          for (c = n(j / g[l], i / g[l]) / d * 180; c < 0; ) c += 360;
          for (;c >= 360; ) c -= 360;
          q[l] = c;
        } else q[l] = q[l] / g[l];
        return t(q, b).alpha(e / m);
      }, D = function D(a) {
        var b, c, d, e, f, g;
        if (a.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) return 4 !== a.length && 7 !== a.length || (a = a.substr(1)), 
        3 === a.length && (a = a.split(""), a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]), 
        g = parseInt(a, 16), e = g >> 16, d = g >> 8 & 255, c = 255 & g, [ e, d, c, 1 ];
        if (a.match(/^#?([A-Fa-f0-9]{8})$/)) return 9 === a.length && (a = a.substr(1)), 
        g = parseInt(a, 16), e = g >> 24 & 255, d = g >> 16 & 255, c = g >> 8 & 255, b = sa((255 & g) / 255 * 100) / 100, 
        [ e, d, c, b ];
        if (null != k.css && (f = k.css(a))) return f;
        throw "unknown color: " + a;
      }, fa = function fa(a, b) {
        var c, d, e, f, g, h, i;
        return null == b && (b = "rgb"), g = a[0], e = a[1], d = a[2], c = a[3], g = Math.round(g), 
        e = Math.round(e), d = Math.round(d), i = g << 16 | e << 8 | d, h = "000000" + i.toString(16), 
        h = h.substr(h.length - 6), f = "0" + sa(255 * c).toString(16), f = f.substr(f.length - 2), 
        "#" + function() {
          switch (b.toLowerCase()) {
           case "rgba":
            return h + f;

           case "argb":
            return f + h;

           default:
            return h;
          }
        }();
      }, k.hex = function(a) {
        return D(a);
      }, t.hex = function() {
        return function(a, b, c) {
          c.prototype = a.prototype;
          var d = new c(), e = a.apply(d, b);
          return Object(e) === e ? e : d;
        }(a, Ca.call(arguments).concat([ "hex" ]), function() {});
      }, a.prototype.hex = function(a) {
        return null == a && (a = "rgb"), fa(this._rgb, a);
      }, i.push({
        p: 4,
        test: function test(a) {
          if (1 === arguments.length && "string" === xa(a)) return "hex";
        }
      }), G = function G() {
        var a, b, c, d, e, f, g, h, i, j, k, l, m, n;
        if (a = ya(arguments), e = a[0], k = a[1], g = a[2], 0 === k) i = d = b = 255 * g; else {
          for (n = [ 0, 0, 0 ], c = [ 0, 0, 0 ], m = g < .5 ? g * (1 + k) : g + k - g * k, 
          l = 2 * g - m, e /= 360, n[0] = e + 1 / 3, n[1] = e, n[2] = e - 1 / 3, f = h = 0; h <= 2; f = ++h) n[f] < 0 && (n[f] += 1), 
          n[f] > 1 && (n[f] -= 1), 6 * n[f] < 1 ? c[f] = l + 6 * (m - l) * n[f] : 2 * n[f] < 1 ? c[f] = m : 3 * n[f] < 2 ? c[f] = l + (m - l) * (2 / 3 - n[f]) * 6 : c[f] = l;
          j = [ sa(255 * c[0]), sa(255 * c[1]), sa(255 * c[2]) ], i = j[0], d = j[1], b = j[2];
        }
        return a.length > 3 ? [ i, d, b, a[3] ] : [ i, d, b ];
      }, ha = function ha(a, b, c) {
        var d, e, f, g, h;
        return void 0 !== a && a.length >= 3 && (g = a, a = g[0], b = g[1], c = g[2]), a /= 255, 
        b /= 255, c /= 255, f = Math.min(a, b, c), Y = Math.max(a, b, c), e = (Y + f) / 2, 
        Y === f ? (h = 0, d = Number.NaN) : h = e < .5 ? (Y - f) / (Y + f) : (Y - f) / (2 - Y - f), 
        a === Y ? d = (b - c) / (Y - f) : b === Y ? d = 2 + (c - a) / (Y - f) : c === Y && (d = 4 + (a - b) / (Y - f)), 
        d *= 60, d < 0 && (d += 360), [ d, h, e ];
      }, t.hsl = function() {
        return function(a, b, c) {
          c.prototype = a.prototype;
          var d = new c(), e = a.apply(d, b);
          return Object(e) === e ? e : d;
        }(a, Ca.call(arguments).concat([ "hsl" ]), function() {});
      }, k.hsl = G, a.prototype.hsl = function() {
        return ha(this._rgb);
      }, H = function H() {
        var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;
        if (a = ya(arguments), e = a[0], p = a[1], r = a[2], r *= 255, 0 === p) i = d = b = r; else switch (360 === e && (e = 0), 
        e > 360 && (e -= 360), e < 0 && (e += 360), e /= 60, f = B(e), c = e - f, g = r * (1 - p), 
        h = r * (1 - p * c), q = r * (1 - p * (1 - c)), f) {
         case 0:
          j = [ r, q, g ], i = j[0], d = j[1], b = j[2];
          break;

         case 1:
          k = [ h, r, g ], i = k[0], d = k[1], b = k[2];
          break;

         case 2:
          l = [ g, r, q ], i = l[0], d = l[1], b = l[2];
          break;

         case 3:
          m = [ g, h, r ], i = m[0], d = m[1], b = m[2];
          break;

         case 4:
          n = [ q, g, r ], i = n[0], d = n[1], b = n[2];
          break;

         case 5:
          o = [ r, g, h ], i = o[0], d = o[1], b = o[2];
        }
        return [ i, d, b, a.length > 3 ? a[3] : 1 ];
      }, ia = function ia() {
        var a, b, c, d, e, f, g, h, i;
        return g = ya(arguments), f = g[0], c = g[1], a = g[2], e = Math.min(f, c, a), Y = Math.max(f, c, a), 
        b = Y - e, i = Y / 255, 0 === Y ? (d = Number.NaN, h = 0) : (h = b / Y, f === Y && (d = (c - a) / b), 
        c === Y && (d = 2 + (a - f) / b), a === Y && (d = 4 + (f - c) / b), (d *= 60) < 0 && (d += 360)), 
        [ d, h, i ];
      }, t.hsv = function() {
        return function(a, b, c) {
          c.prototype = a.prototype;
          var d = new c(), e = a.apply(d, b);
          return Object(e) === e ? e : d;
        }(a, Ca.call(arguments).concat([ "hsv" ]), function() {});
      }, k.hsv = H, a.prototype.hsv = function() {
        return ia(this._rgb);
      }, _ = function _(a) {
        var b, c, d;
        return "number" === xa(a) && a >= 0 && a <= 16777215 ? (d = a >> 16, c = a >> 8 & 255, 
        b = 255 & a, [ d, c, b, 1 ]) : (console.warn("unknown num color: " + a), [ 0, 0, 0, 1 ]);
      }, ma = function ma() {
        var a, b, c, d;
        return d = ya(arguments), c = d[0], b = d[1], a = d[2], (c << 16) + (b << 8) + a;
      }, t.num = function(b) {
        return new a(b, "num");
      }, a.prototype.num = function(a) {
        return null == a && (a = "rgb"), ma(this._rgb, a);
      }, k.num = _, i.push({
        p: 1,
        test: function test(a) {
          if (1 === arguments.length && "number" === xa(a) && a >= 0 && a <= 16777215) return "num";
        }
      }), C = function C() {
        var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t;
        if (c = ya(arguments), h = c[0], e = c[1], b = c[2], e /= 100, g = g / 100 * 255, 
        a = 255 * e, 0 === e) l = g = d = b; else switch (360 === h && (h = 0), h > 360 && (h -= 360), 
        h < 0 && (h += 360), h /= 60, i = B(h), f = h - i, j = b * (1 - e), k = j + a * (1 - f), 
        s = j + a * f, t = j + a, i) {
         case 0:
          m = [ t, s, j ], l = m[0], g = m[1], d = m[2];
          break;

         case 1:
          n = [ k, t, j ], l = n[0], g = n[1], d = n[2];
          break;

         case 2:
          o = [ j, t, s ], l = o[0], g = o[1], d = o[2];
          break;

         case 3:
          p = [ j, k, t ], l = p[0], g = p[1], d = p[2];
          break;

         case 4:
          q = [ s, j, t ], l = q[0], g = q[1], d = q[2];
          break;

         case 5:
          r = [ t, j, k ], l = r[0], g = r[1], d = r[2];
        }
        return [ l, g, d, c.length > 3 ? c[3] : 1 ];
      }, ea = function ea() {
        var a, b, c, d, e, f, g, h, i;
        return i = ya(arguments), h = i[0], e = i[1], b = i[2], g = Math.min(h, e, b), Y = Math.max(h, e, b), 
        d = Y - g, c = 100 * d / 255, a = g / (255 - d) * 100, 0 === d ? f = Number.NaN : (h === Y && (f = (e - b) / d), 
        e === Y && (f = 2 + (b - h) / d), b === Y && (f = 4 + (h - e) / d), (f *= 60) < 0 && (f += 360)), 
        [ f, c, a ];
      }, t.hcg = function() {
        return function(a, b, c) {
          c.prototype = a.prototype;
          var d = new c(), e = a.apply(d, b);
          return Object(e) === e ? e : d;
        }(a, Ca.call(arguments).concat([ "hcg" ]), function() {});
      }, k.hcg = C, a.prototype.hcg = function() {
        return ea(this._rgb);
      }, x = function x(a) {
        var b, c, d, e, f, g, h, i;
        if (a = a.toLowerCase(), null != t.colors && t.colors[a]) return D(t.colors[a]);
        if (f = a.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)) {
          for (h = f.slice(1, 4), e = g = 0; g <= 2; e = ++g) h[e] = +h[e];
          h[3] = 1;
        } else if (f = a.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/)) for (h = f.slice(1, 5), 
        e = i = 0; i <= 3; e = ++i) h[e] = +h[e]; else if (f = a.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
          for (h = f.slice(1, 4), e = b = 0; b <= 2; e = ++b) h[e] = sa(2.55 * h[e]);
          h[3] = 1;
        } else if (f = a.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
          for (h = f.slice(1, 5), e = c = 0; c <= 2; e = ++c) h[e] = sa(2.55 * h[e]);
          h[3] = +h[3];
        } else (f = a.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) ? (d = f.slice(1, 4), 
        d[1] *= .01, d[2] *= .01, h = G(d), h[3] = 1) : (f = a.match(/hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) && (d = f.slice(1, 4), 
        d[1] *= .01, d[2] *= .01, h = G(d), h[3] = +f[4]);
        return h;
      }, da = function da(a) {
        var b;
        return b = a[3] < 1 ? "rgba" : "rgb", "rgb" === b ? b + "(" + a.slice(0, 3).map(sa).join(",") + ")" : "rgba" === b ? b + "(" + a.slice(0, 3).map(sa).join(",") + "," + a[3] + ")" : void 0;
      }, qa = function qa(a) {
        return sa(100 * a) / 100;
      }, F = function F(a, b) {
        var c;
        return c = b < 1 ? "hsla" : "hsl", a[0] = qa(a[0] || 0), a[1] = qa(100 * a[1]) + "%", 
        a[2] = qa(100 * a[2]) + "%", "hsla" === c && (a[3] = b), c + "(" + a.join(",") + ")";
      }, k.css = function(a) {
        return x(a);
      }, t.css = function() {
        return function(a, b, c) {
          c.prototype = a.prototype;
          var d = new c(), e = a.apply(d, b);
          return Object(e) === e ? e : d;
        }(a, Ca.call(arguments).concat([ "css" ]), function() {});
      }, a.prototype.css = function(a) {
        return null == a && (a = "rgb"), "rgb" === a.slice(0, 3) ? da(this._rgb) : "hsl" === a.slice(0, 3) ? F(this.hsl(), this.alpha()) : void 0;
      }, k.named = function(a) {
        return D(za[a]);
      }, i.push({
        p: 5,
        test: function test(a) {
          if (1 === arguments.length && null != za[a]) return "named";
        }
      }), a.prototype.name = function(a) {
        var b, c;
        arguments.length && (za[a] && (this._rgb = D(za[a])), this._rgb[3] = 1), b = this.hex();
        for (c in za) if (b === za[c]) return c;
        return b;
      }, R = function R() {
        var a, c, d, e;
        return e = ya(arguments), d = e[0], a = e[1], c = e[2], c *= b, [ d, w(c) * a, ua(c) * a ];
      }, S = function S() {
        var a, b, c, d, e, f, g, h, i, j, k;
        return c = ya(arguments), h = c[0], e = c[1], g = c[2], j = R(h, e, g), a = j[0], 
        b = j[1], d = j[2], k = P(a, b, d), i = k[0], f = k[1], d = k[2], [ i, f, d, c.length > 3 ? c[3] : 1 ];
      }, O = function O() {
        var a, b, c, d, e, g;
        return g = ya(arguments), e = g[0], a = g[1], b = g[2], c = va(a * a + b * b), d = (n(b, a) * f + 360) % 360, 
        0 === sa(1e4 * c) && (d = Number.NaN), [ e, c, d ];
      }, ka = function ka() {
        var a, b, c, d, e, f, g;
        return f = ya(arguments), e = f[0], c = f[1], b = f[2], g = ja(e, c, b), d = g[0], 
        a = g[1], b = g[2], O(d, a, b);
      }, t.lch = function() {
        var b;
        return b = ya(arguments), new a(b, "lch");
      }, t.hcl = function() {
        var b;
        return b = ya(arguments), new a(b, "hcl");
      }, k.lch = S, k.hcl = function() {
        var a, b, c, d;
        return d = ya(arguments), b = d[0], a = d[1], c = d[2], S([ c, a, b ]);
      }, a.prototype.lch = function() {
        return ka(this._rgb);
      }, a.prototype.hcl = function() {
        return ka(this._rgb).reverse();
      }, ca = function ca(a) {
        var b, c, d, e, f, g, h, i, j;
        return null == a && (a = "rgb"), i = ya(arguments), h = i[0], e = i[1], b = i[2], 
        h /= 255, e /= 255, b /= 255, f = 1 - Math.max(h, Math.max(e, b)), d = f < 1 ? 1 / (1 - f) : 0, 
        c = (1 - h - f) * d, g = (1 - e - f) * d, j = (1 - b - f) * d, [ c, g, j, f ];
      }, v = function v() {
        var a, b, c, d, e, f, g, h, i;
        return b = ya(arguments), d = b[0], g = b[1], i = b[2], f = b[3], a = b.length > 4 ? b[4] : 1, 
        1 === f ? [ 0, 0, 0, a ] : (h = d >= 1 ? 0 : 255 * (1 - d) * (1 - f), e = g >= 1 ? 0 : 255 * (1 - g) * (1 - f), 
        c = i >= 1 ? 0 : 255 * (1 - i) * (1 - f), [ h, e, c, a ]);
      }, k.cmyk = function() {
        return v(ya(arguments));
      }, t.cmyk = function() {
        return function(a, b, c) {
          c.prototype = a.prototype;
          var d = new c(), e = a.apply(d, b);
          return Object(e) === e ? e : d;
        }(a, Ca.call(arguments).concat([ "cmyk" ]), function() {});
      }, a.prototype.cmyk = function() {
        return ca(this._rgb);
      }, k.gl = function() {
        var a, b, c, d, e;
        for (d = function() {
          var a, c;
          a = ya(arguments), c = [];
          for (b in a) e = a[b], c.push(e);
          return c;
        }.apply(this, arguments), a = c = 0; c <= 2; a = ++c) d[a] *= 255;
        return d;
      }, t.gl = function() {
        return function(a, b, c) {
          c.prototype = a.prototype;
          var d = new c(), e = a.apply(d, b);
          return Object(e) === e ? e : d;
        }(a, Ca.call(arguments).concat([ "gl" ]), function() {});
      }, a.prototype.gl = function() {
        var a;
        return a = this._rgb, [ a[0] / 255, a[1] / 255, a[2] / 255, a[3] ];
      }, la = function la(a, b, c) {
        var d;
        return d = ya(arguments), a = d[0], b = d[1], c = d[2], a = W(a), b = W(b), c = W(c), 
        .2126 * a + .7152 * b + .0722 * c;
      }, W = function W(a) {
        return a /= 255, a <= .03928 ? a / 12.92 : ba((a + .055) / 1.055, 2.4);
      }, N = function N(b, c, d, e) {
        var f, g;
        return f = b._rgb, g = c._rgb, new a(f[0] + d * (g[0] - f[0]), f[1] + d * (g[1] - f[1]), f[2] + d * (g[2] - f[2]), e);
      }, l.push([ "rgb", N ]), a.prototype.luminance = function(a, b) {
        var c, d, e, f, _g;
        return null == b && (b = "rgb"), arguments.length ? (f = this._rgb, 0 === a ? f = [ 0, 0, 0, this._rgb[3] ] : 1 === a ? f = [ 255, 255, 255, this[3] ] : (c = la(this._rgb), 
        d = 1e-7, e = 20, _g = function g(c, f) {
          var h, i;
          return i = c.interpolate(f, .5, b), h = i.luminance(), Math.abs(a - h) < d || !e-- ? i : h > a ? _g(c, i) : _g(i, f);
        }, f = c > a ? _g(t("black"), this).rgba() : _g(this, t("white")).rgba()), t(f).alpha(this.alpha())) : la(this._rgb);
      }, wa = function wa(a) {
        var b, c, d, e;
        return e = a / 100, e < 66 ? (d = 255, c = -155.25485562709179 - .44596950469579133 * (c = e - 2) + 104.49216199393888 * V(c), 
        b = e < 20 ? 0 : .8274096064007395 * (b = e - 10) - 254.76935184120902 + 115.67994401066147 * V(b)) : (d = 351.97690566805693 + .114206453784165 * (d = e - 55) - 40.25366309332127 * V(d), 
        c = 325.4494125711974 + .07943456536662342 * (c = e - 50) - 28.0852963507957 * V(c), 
        b = 255), [ d, c, b ];
      }, na = function na() {
        var a, b, c, d, e, f, g, h;
        for (f = ya(arguments), e = f[0], f[1], a = f[2], d = 1e3, c = 4e4, b = .4; c - d > b; ) h = .5 * (c + d), 
        g = wa(h), g[2] / g[0] >= a / e ? c = h : d = h;
        return sa(h);
      }, t.temperature = t.kelvin = function() {
        return function(a, b, c) {
          c.prototype = a.prototype;
          var d = new c(), e = a.apply(d, b);
          return Object(e) === e ? e : d;
        }(a, Ca.call(arguments).concat([ "temperature" ]), function() {});
      }, k.temperature = k.kelvin = k.K = wa, a.prototype.temperature = function() {
        return na(this._rgb);
      }, a.prototype.kelvin = a.prototype.temperature, t.contrast = function(b, c) {
        var d, e, f, g;
        return "string" !== (f = xa(b)) && "number" !== f || (b = new a(b)), "string" !== (g = xa(c)) && "number" !== g || (c = new a(c)), 
        d = b.luminance(), e = c.luminance(), d > e ? (d + .05) / (e + .05) : (e + .05) / (d + .05);
      }, t.distance = function(b, c, d) {
        var e, f, g, h, i, j, k;
        null == d && (d = "lab"), "string" !== (i = xa(b)) && "number" !== i || (b = new a(b)), 
        "string" !== (j = xa(c)) && "number" !== j || (c = new a(c)), g = b.get(d), h = c.get(d), 
        k = 0;
        for (f in g) e = (g[f] || 0) - (h[f] || 0), k += e * e;
        return Math.sqrt(k);
      }, t.deltaE = function(b, c, e, f) {
        var g, h, i, j, k, l, o, p, q, r, s, t, u, v, x, y, z, A, B, C, D, E, F, G, H, I, J;
        for (null == e && (e = 1), null == f && (f = 1), "string" !== (z = xa(b)) && "number" !== z || (b = new a(b)), 
        "string" !== (A = xa(c)) && "number" !== A || (c = new a(c)), B = b.lab(), g = B[0], 
        i = B[1], k = B[2], C = c.lab(), h = C[0], j = C[1], l = C[2], o = va(i * i + k * k), 
        p = va(j * j + l * l), F = g < 16 ? .511 : .040975 * g / (1 + .01765 * g), D = .0638 * o / (1 + .0131 * o) + .638, 
        y = o < 1e-6 ? 0 : 180 * n(k, i) / d; y < 0; ) y += 360;
        for (;y >= 360; ) y -= 360;
        return G = y >= 164 && y <= 345 ? .56 + m(.2 * w(d * (y + 168) / 180)) : .36 + m(.4 * w(d * (y + 35) / 180)), 
        q = o * o * o * o, x = va(q / (q + 1900)), E = D * (x * G + 1 - x), v = g - h, u = o - p, 
        s = i - j, t = k - l, r = s * s + t * t - u * u, H = v / (e * F), I = u / (f * D), 
        J = E, va(H * H + I * I + r / (J * J));
      }, a.prototype.get = function(a) {
        var b, c, d, e, f, g;
        return d = this, f = a.split("."), e = f[0], b = f[1], g = d[e](), b ? (c = e.indexOf(b), 
        c > -1 ? g[c] : console.warn("unknown channel " + b + " in mode " + e)) : g;
      }, a.prototype.set = function(a, b) {
        var c, d, e, f, g, h;
        if (e = this, g = a.split("."), f = g[0], c = g[1], c) if (h = e[f](), (d = f.indexOf(c)) > -1) if ("string" === xa(b)) switch (b.charAt(0)) {
         case "+":
         case "-":
          h[d] += +b;
          break;

         case "*":
          h[d] *= +b.substr(1);
          break;

         case "/":
          h[d] /= +b.substr(1);
          break;

         default:
          h[d] = +b;
        } else h[d] = b; else console.warn("unknown channel " + c + " in mode " + f); else h = b;
        return t(h, f).alpha(e.alpha());
      }, a.prototype.clipped = function() {
        return this._rgb._clipped || !1;
      }, a.prototype.alpha = function(a) {
        return arguments.length ? t.rgb([ this._rgb[0], this._rgb[1], this._rgb[2], a ]) : this._rgb[3];
      }, a.prototype.darken = function(a) {
        var b, d;
        return null == a && (a = 1), d = this, b = d.lab(), b[0] -= c.Kn * a, t.lab(b).alpha(d.alpha());
      }, a.prototype.brighten = function(a) {
        return null == a && (a = 1), this.darken(-a);
      }, a.prototype.darker = a.prototype.darken, a.prototype.brighter = a.prototype.brighten, 
      a.prototype.saturate = function(a) {
        var b, d;
        return null == a && (a = 1), d = this, b = d.lch(), b[1] += a * c.Kn, b[1] < 0 && (b[1] = 0), 
        t.lch(b).alpha(d.alpha());
      }, a.prototype.desaturate = function(a) {
        return null == a && (a = 1), this.saturate(-a);
      }, a.prototype.premultiply = function() {
        var a, b;
        return b = this.rgb(), a = this.alpha(), t(b[0] * a, b[1] * a, b[2] * a, a);
      }, _p = function p(a, b, c) {
        if (!_p[c]) throw "unknown blend mode " + c;
        return _p[c](a, b);
      }, q = function q(a) {
        return function(b, c) {
          var d, e;
          return d = t(c).rgb(), e = t(b).rgb(), t(a(d, e), "rgb");
        };
      }, A = function A(a) {
        return function(b, c) {
          var d, e, f;
          for (f = [], d = e = 0; e <= 3; d = ++e) f[d] = a(b[d], c[d]);
          return f;
        };
      }, $ = function $(a, b) {
        return a;
      }, Z = function Z(a, b) {
        return a * b / 255;
      }, y = function y(a, b) {
        return a > b ? b : a;
      }, T = function T(a, b) {
        return a > b ? a : b;
      }, ta = function ta(a, b) {
        return 255 * (1 - (1 - a / 255) * (1 - b / 255));
      }, aa = function aa(a, b) {
        return b < 128 ? 2 * a * b / 255 : 255 * (1 - 2 * (1 - a / 255) * (1 - b / 255));
      }, s = function s(a, b) {
        return 255 * (1 - (1 - b / 255) / (a / 255));
      }, z = function z(a, b) {
        return 255 === a ? 255 : (a = b / 255 * 255 / (1 - a / 255), a > 255 ? 255 : a);
      }, _p.normal = q(A($)), _p.multiply = q(A(Z)), _p.screen = q(A(ta)), _p.overlay = q(A(aa)), 
      _p.darken = q(A(y)), _p.lighten = q(A(T)), _p.dodge = q(A(z)), _p.burn = q(A(s)), 
      t.blend = _p, t.analyze = function(a) {
        var b, c, d, e;
        for (d = {
          min: Number.MAX_VALUE,
          max: -1 * Number.MAX_VALUE,
          sum: 0,
          values: [],
          count: 0
        }, c = 0, b = a.length; c < b; c++) null == (e = a[c]) || isNaN(e) || (d.values.push(e), 
        d.sum += e, e < d.min && (d.min = e), e > d.max && (d.max = e), d.count += 1);
        return d.domain = [ d.min, d.max ], d.limits = function(a, b) {
          return t.limits(d, a, b);
        }, d;
      }, t.scale = function(a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, u, v, w, x;
        return k = "rgb", l = t("#ccc"), p = 0, !1, g = [ 0, 1 ], o = [], n = [ 0, 0 ], 
        c = !1, e = [], m = !1, j = 0, i = 1, f = !1, d = {}, q = !0, h = 1, w = function w(a) {
          var b, c, d, f, g, h;
          if (null == a && (a = [ "#fff", "#000" ]), null != a && "string" === xa(a) && null != t.brewer && (a = t.brewer[a] || t.brewer[a.toLowerCase()] || a), 
          "array" === xa(a)) {
            for (a = a.slice(0), b = d = 0, f = a.length - 1; 0 <= f ? d <= f : d >= f; b = 0 <= f ? ++d : --d) c = a[b], 
            "string" === xa(c) && (a[b] = t(c));
            for (o.length = 0, b = h = 0, g = a.length - 1; 0 <= g ? h <= g : h >= g; b = 0 <= g ? ++h : --h) o.push(b / (a.length - 1));
          }
          return v(), e = a;
        }, s = function s(a) {
          var b, d;
          if (null != c) {
            for (d = c.length - 1, b = 0; b < d && a >= c[b]; ) b++;
            return b - 1;
          }
          return 0;
        }, x = function x(a) {
          return a;
        }, function(a) {
          var b, d, e, f, g;
          return g = a, c.length > 2 && (f = c.length - 1, b = s(a), e = c[0] + (c[1] - c[0]) * (0 + .5 * p), 
          d = c[f - 1] + (c[f] - c[f - 1]) * (1 - .5 * p), g = j + (c[b] + .5 * (c[b + 1] - c[b]) - e) / (d - e) * (i - j)), 
          g;
        }, u = function u(a, b) {
          var f, g, m, p, r, u, v, w;
          if (null == b && (b = !1), isNaN(a)) return l;
          if (b ? w = a : c && c.length > 2 ? (f = s(a), w = f / (c.length - 2)) : w = i !== j ? (a - j) / (i - j) : 1, 
          b || (w = x(w)), 1 !== h && (w = ba(w, h)), w = n[0] + w * (1 - n[0] - n[1]), w = Math.min(1, Math.max(0, w)), 
          p = Math.floor(1e4 * w), q && d[p]) g = d[p]; else {
            if ("array" === xa(e)) for (m = r = 0, v = o.length - 1; 0 <= v ? r <= v : r >= v; m = 0 <= v ? ++r : --r) {
              if (u = o[m], w <= u) {
                g = e[m];
                break;
              }
              if (w >= u && m === o.length - 1) {
                g = e[m];
                break;
              }
              if (w > u && w < o[m + 1]) {
                w = (w - u) / (o[m + 1] - u), g = t.interpolate(e[m], e[m + 1], w, k);
                break;
              }
            } else "function" === xa(e) && (g = e(w));
            q && (d[p] = g);
          }
          return g;
        }, v = function v() {
          return d = {};
        }, w(a), r = function r(a) {
          var b;
          return b = t(u(a)), m && b[m] ? b[m]() : b;
        }, r.classes = function(a) {
          var b;
          return null != a ? ("array" === xa(a) ? (c = a, g = [ a[0], a[a.length - 1] ]) : (b = t.analyze(g), 
          c = 0 === a ? [ b.min, b.max ] : t.limits(b, "e", a)), r) : c;
        }, r.domain = function(a) {
          var b, c, d, f, h, k, l;
          if (!arguments.length) return g;
          if (j = a[0], i = a[a.length - 1], o = [], d = e.length, a.length === d && j !== i) for (h = 0, 
          f = a.length; h < f; h++) c = a[h], o.push((c - j) / (i - j)); else for (b = l = 0, 
          k = d - 1; 0 <= k ? l <= k : l >= k; b = 0 <= k ? ++l : --l) o.push(b / (d - 1));
          return g = [ j, i ], r;
        }, r.mode = function(a) {
          return arguments.length ? (k = a, v(), r) : k;
        }, r.range = function(a, b) {
          return w(a, b), r;
        }, r.out = function(a) {
          return m = a, r;
        }, r.spread = function(a) {
          return arguments.length ? (p = a, r) : p;
        }, r.correctLightness = function(a) {
          return null == a && (a = !0), f = a, v(), x = f ? function(a) {
            var b, c, d, e, f, g, h, i, j;
            for (b = u(0, !0).lab()[0], c = u(1, !0).lab()[0], h = b > c, d = u(a, !0).lab()[0], 
            f = b + (c - b) * a, e = d - f, i = 0, j = 1, g = 20; Math.abs(e) > .01 && g-- > 0; ) !function() {
              h && (e *= -1), e < 0 ? (i = a, a += .5 * (j - a)) : (j = a, a += .5 * (i - a)), 
              d = u(a, !0).lab()[0], e = d - f;
            }();
            return a;
          } : function(a) {
            return a;
          }, r;
        }, r.padding = function(a) {
          return null != a ? ("number" === xa(a) && (a = [ a, a ]), n = a, r) : n;
        }, r.colors = function(b, d) {
          var f, h, i, j, k, l, m, n;
          if (arguments.length < 2 && (d = "hex"), k = [], 0 === arguments.length) k = e.slice(0); else if (1 === b) k = [ r(.5) ]; else if (b > 1) h = g[0], 
          f = g[1] - h, k = function() {
            l = [];
            for (var a = 0; 0 <= b ? a < b : a > b; 0 <= b ? a++ : a--) l.push(a);
            return l;
          }.apply(this).map(function(a) {
            return r(h + a / (b - 1) * f);
          }); else {
            if (a = [], m = [], c && c.length > 2) for (i = n = 1, j = c.length; 1 <= j ? n < j : n > j; i = 1 <= j ? ++n : --n) m.push(.5 * (c[i - 1] + c[i])); else m = g;
            k = m.map(function(a) {
              return r(a);
            });
          }
          return t[d] && (k = k.map(function(a) {
            return a[d]();
          })), k;
        }, r.cache = function(a) {
          return null != a ? (q = a, r) : q;
        }, r.gamma = function(a) {
          return null != a ? (h = a, r) : h;
        }, r;
      }, null == t.scales && (t.scales = {}), t.scales.cool = function() {
        return t.scale([ t.hsl(180, 1, .9), t.hsl(250, .7, .4) ]);
      }, t.scales.hot = function() {
        return t.scale([ "#000", "#f00", "#ff0", "#fff" ], [ 0, .25, .75, 1 ]).mode("rgb");
      }, t.analyze = function(a, b, c) {
        var d, e, f, g, h, i, j;
        if (h = {
          min: Number.MAX_VALUE,
          max: -1 * Number.MAX_VALUE,
          sum: 0,
          values: [],
          count: 0
        }, null == c && (c = function c() {
          return !0;
        }), d = function d(a) {
          null == a || isNaN(a) || (h.values.push(a), h.sum += a, a < h.min && (h.min = a), 
          a > h.max && (h.max = a), h.count += 1);
        }, j = function j(a, e) {
          if (c(a, e)) return d(null != b && "function" === xa(b) ? b(a) : null != b && "string" === xa(b) || "number" === xa(b) ? a[b] : a);
        }, "array" === xa(a)) for (g = 0, f = a.length; g < f; g++) i = a[g], j(i); else for (e in a) i = a[e], 
        j(i, e);
        return h.domain = [ h.min, h.max ], h.limits = function(a, b) {
          return t.limits(h, a, b);
        }, h;
      }, t.limits = function(a, b, c) {
        var d, e, f, g, h, i, j, k, l, n, o, p, q, r, s, u, v, w, x, y, z, A, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, W, X, Z, $, _, aa, ca, da, ea, fa, ga, ha, ia, ja;
        if (null == b && (b = "equal"), null == c && (c = 7), "array" === xa(a) && (a = t.analyze(a)), 
        E = a.min, Y = a.max, a.sum, ia = a.values.sort(function(a, b) {
          return a - b;
        }), 1 === c) return [ E, Y ];
        if (C = [], "c" === b.substr(0, 1) && (C.push(E), C.push(Y)), "e" === b.substr(0, 1)) {
          for (C.push(E), y = K = 1, O = c - 1; 1 <= O ? K <= O : K >= O; y = 1 <= O ? ++K : --K) C.push(E + y / c * (Y - E));
          C.push(Y);
        } else if ("l" === b.substr(0, 1)) {
          if (E <= 0) throw "Logarithmic scales are only possible for values > 0";
          for (F = Math.LOG10E * V(E), D = Math.LOG10E * V(Y), C.push(E), y = ja = 1, P = c - 1; 1 <= P ? ja <= P : ja >= P; y = 1 <= P ? ++ja : --ja) C.push(ba(10, F + y / c * (D - F)));
          C.push(Y);
        } else if ("q" === b.substr(0, 1)) {
          for (C.push(E), y = d = 1, W = c - 1; 1 <= W ? d <= W : d >= W; y = 1 <= W ? ++d : --d) L = (ia.length - 1) * y / c, 
          M = B(L), M === L ? C.push(ia[M]) : (N = L - M, C.push(ia[M] * (1 - N) + ia[M + 1] * N));
          C.push(Y);
        } else if ("k" === b.substr(0, 1)) {
          for (H = ia.length, r = new Array(H), w = new Array(c), ea = !0, I = 0, u = null, 
          u = [], u.push(E), y = e = 1, X = c - 1; 1 <= X ? e <= X : e >= X; y = 1 <= X ? ++e : --e) u.push(E + y / c * (Y - E));
          for (u.push(Y); ea; ) {
            for (z = f = 0, Z = c - 1; 0 <= Z ? f <= Z : f >= Z; z = 0 <= Z ? ++f : --f) w[z] = 0;
            for (y = g = 0, $ = H - 1; 0 <= $ ? g <= $ : g >= $; y = 0 <= $ ? ++g : --g) {
              for (ha = ia[y], G = Number.MAX_VALUE, z = h = 0, _ = c - 1; 0 <= _ ? h <= _ : h >= _; z = 0 <= _ ? ++h : --h) (x = m(u[z] - ha)) < G && (G = x, 
              s = z);
              w[s]++, r[y] = s;
            }
            for (J = new Array(c), z = i = 0, aa = c - 1; 0 <= aa ? i <= aa : i >= aa; z = 0 <= aa ? ++i : --i) J[z] = null;
            for (y = j = 0, ca = H - 1; 0 <= ca ? j <= ca : j >= ca; y = 0 <= ca ? ++j : --j) v = r[y], 
            null === J[v] ? J[v] = ia[y] : J[v] += ia[y];
            for (z = k = 0, da = c - 1; 0 <= da ? k <= da : k >= da; z = 0 <= da ? ++k : --k) J[z] *= 1 / w[z];
            for (ea = !1, z = l = 0, Q = c - 1; 0 <= Q ? l <= Q : l >= Q; z = 0 <= Q ? ++l : --l) if (J[z] !== u[y]) {
              ea = !0;
              break;
            }
            u = J, I++, I > 200 && (ea = !1);
          }
          for (A = {}, z = n = 0, R = c - 1; 0 <= R ? n <= R : n >= R; z = 0 <= R ? ++n : --n) A[z] = [];
          for (y = o = 0, S = H - 1; 0 <= S ? o <= S : o >= S; y = 0 <= S ? ++o : --o) v = r[y], 
          A[v].push(ia[y]);
          for (fa = [], z = p = 0, T = c - 1; 0 <= T ? p <= T : p >= T; z = 0 <= T ? ++p : --p) fa.push(A[z][0]), 
          fa.push(A[z][A[z].length - 1]);
          for (fa = fa.sort(function(a, b) {
            return a - b;
          }), C.push(fa[0]), y = q = 1, U = fa.length - 1; q <= U; y = q += 2) ga = fa[y], 
          isNaN(ga) || -1 !== C.indexOf(ga) || C.push(ga);
        }
        return C;
      }, E = function E(a, b, c) {
        var d, f, h, i;
        return d = ya(arguments), a = d[0], b = d[1], c = d[2], isNaN(a) && (a = 0), a /= 360, 
        a < 1 / 3 ? (f = (1 - b) / 3, i = (1 + b * w(g * a) / w(e - g * a)) / 3, h = 1 - (f + i)) : a < 2 / 3 ? (a -= 1 / 3, 
        i = (1 - b) / 3, h = (1 + b * w(g * a) / w(e - g * a)) / 3, f = 1 - (i + h)) : (a -= 2 / 3, 
        h = (1 - b) / 3, f = (1 + b * w(g * a) / w(e - g * a)) / 3, i = 1 - (h + f)), i = U(c * i * 3), 
        h = U(c * h * 3), f = U(c * f * 3), [ 255 * i, 255 * h, 255 * f, d.length > 3 ? d[3] : 1 ];
      }, ga = function ga() {
        var a, b, c, d, e, f, h, i;
        return h = ya(arguments), f = h[0], b = h[1], a = h[2], g = 2 * Math.PI, f /= 255, 
        b /= 255, a /= 255, e = Math.min(f, b, a), d = (f + b + a) / 3, i = 1 - e / d, 0 === i ? c = 0 : (c = (f - b + (f - a)) / 2, 
        c /= Math.sqrt((f - b) * (f - b) + (f - a) * (b - a)), c = Math.acos(c), a > b && (c = g - c), 
        c /= g), [ 360 * c, i, d ];
      }, t.hsi = function() {
        return function(a, b, c) {
          c.prototype = a.prototype;
          var d = new c(), e = a.apply(d, b);
          return Object(e) === e ? e : d;
        }(a, Ca.call(arguments).concat([ "hsi" ]), function() {});
      }, k.hsi = E, a.prototype.hsi = function() {
        return ga(this._rgb);
      }, J = function J(a, b, c, d) {
        var e, f, g, h, i, j, k, l, m, n, o, p;
        return "hsl" === d ? (o = a.hsl(), p = b.hsl()) : "hsv" === d ? (o = a.hsv(), p = b.hsv()) : "hcg" === d ? (o = a.hcg(), 
        p = b.hcg()) : "hsi" === d ? (o = a.hsi(), p = b.hsi()) : "lch" !== d && "hcl" !== d || (d = "hcl", 
        o = a.hcl(), p = b.hcl()), "h" === d.substr(0, 1) && (g = o[0], m = o[1], j = o[2], 
        h = p[0], n = p[1], k = p[2]), isNaN(g) || isNaN(h) ? isNaN(g) ? isNaN(h) ? f = Number.NaN : (f = h, 
        1 !== j && 0 !== j || "hsv" === d || (l = n)) : (f = g, 1 !== k && 0 !== k || "hsv" === d || (l = m)) : (e = h > g && h - g > 180 ? h - (g + 360) : h < g && g - h > 180 ? h + 360 - g : h - g, 
        f = g + c * e), null == l && (l = m + c * (n - m)), i = j + c * (k - j), t[d](f, l, i);
      }, l = l.concat(function() {
        var a, b, c, d;
        for (c = [ "hsv", "hsl", "hsi", "hcl", "lch", "hcg" ], d = [], b = 0, a = c.length; b < a; b++) X = c[b], 
        d.push([ X, J ]);
        return d;
      }()), M = function M(a, b, c, d) {
        var e, f;
        return e = a.num(), f = b.num(), t.num(e + (f - e) * c, "num");
      }, l.push([ "num", M ]), K = function K(b, c, d, e) {
        var f, g;
        return f = b.lab(), g = c.lab(), new a(f[0] + d * (g[0] - f[0]), f[1] + d * (g[1] - f[1]), f[2] + d * (g[2] - f[2]), e);
      }, l.push([ "lab", K ]);
    }).call(void 0);
    cc._RF.pop();
  }, {} ],
  custom_material: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cf55fSDhJtE4YLQLmUchrgd", "custom_material");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        backgroud: cc.Sprite,
        content: cc.Sprite,
        customEffects: [ cc.EffectAsset ],
        contentTexture: {
          default: null,
          type: cc.Texture2D
        },
        gold: {
          default: null,
          type: cc.Texture2D
        },
        speed: .1,
        _effectIndex: 0
      },
      onEnable: function onEnable() {
        this.originState = cc.dynamicAtlasManager.enabled;
        cc.dynamicAtlasManager.enabled = false;
      },
      onDisable: function onDisable() {
        cc.dynamicAtlasManager.enabled = this.originState;
      },
      start: function start() {
        this.time = 0;
        this.bgSpriteMaterial = this.backgroud.getMaterial(0);
        this.contentSpriteMaterial = this.content.getMaterial(0);
      },
      changeEffect: function changeEffect() {
        this.time = 0;
        this._effectIndex >= this.customEffects.length && (this._effectIndex = 0);
        this.newMaterial = new cc.Material();
        var newEffect = this.customEffects[this._effectIndex];
        this._effectIndex++;
        this.newMaterial.effectAsset = newEffect;
        this.newMaterial.name = newEffect.name;
        if ("custom_material" === newEffect.name) {
          this.newMaterial.setProperty("texture", this.contentTexture);
          this.newMaterial.setProperty("texture2", this.gold);
        }
        this.content.setMaterial(0, this.newMaterial);
      },
      update: function update(dt) {
        if (!this.bgSpriteMaterial || !this.contentSpriteMaterial) return;
        this.time += dt * this.speed;
        this.newMaterial ? this.newMaterial.setProperty("time", this.time) : this.contentSpriteMaterial.setProperty("time", this.time);
        this.bgSpriteMaterial.setProperty("time", 10 * this.time);
      }
    });
    cc._RF.pop();
  }, {} ],
  doodle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "136e6rUnNlCbZ7UezYhQDoQ", "doodle");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        reactivity: .5,
        debug: false
      },
      onEnable: function onEnable() {
        this.graphics = this.getComponent(cc.Graphics);
        this.nodes = [];
        this.ripples = [];
        this.mouse = {
          x: 0,
          y: 0
        };
        this.color = {
          r: 0,
          g: 0,
          b: 0,
          a: 255
        };
        this.cycle = 90;
        this.createBezierNodes();
        var canvas = cc.find("Canvas");
        canvas.on(cc.Node.EventType.TOUCH_START, function(touch, event) {
          this.mouse = touch.getLocation();
          this.addRipple();
        }, this);
        canvas.on(cc.Node.EventType.TOUCH_END, function() {
          this.input = false;
        }, this);
      },
      createBezierNodes: function createBezierNodes() {
        this.updateColorCycle();
        for (var quantity = 0, len = 6; quantity < len; quantity++) {
          var theta = 2 * Math.PI * quantity / len;
          var x = .5 * cc.winSize.width + 0 * Math.cos(theta);
          var y = .5 * cc.winSize.height + 0 * Math.sin(theta);
          this.nodes.push({
            x: x,
            y: y,
            vx: 0,
            vy: 0,
            lastX: x,
            lastY: y,
            min: 150,
            max: 250,
            disturb: 150,
            orbit: 20,
            angle: Math.random() * Math.PI * 2,
            speed: .05 + .05 * Math.random(),
            theta: theta
          });
        }
      },
      addRipple: function addRipple() {
        this.input = true;
        if (0 === this.ripples.length) {
          this.updateColorCycle();
          this.ripples.push({
            x: this.mouse.x,
            y: this.mouse.y,
            reactivity: 0,
            fade: 1
          });
        }
      },
      updateColorCycle: function updateColorCycle() {
        this.cycle = 100 !== Math.min(this.cycle + this.reactivity + .3, 100) ? this.cycle += this.reactivity + .3 : 0;
        var color = this.color;
        color.r = ~~(127 * Math.sin(.3 * this.cycle + 0) + 128);
        color.g = ~~(127 * Math.sin(.3 * this.cycle + 2) + 128);
        color.b = ~~(127 * Math.sin(.3 * this.cycle + 4) + 128);
      },
      update: function update(dt) {
        var _this = this;
        var nodes = this.nodes;
        var ripples = this.ripples;
        var ease = .01, friction = .98;
        for (var index = 0; index < ripples.length; index++) {
          var ripple = ripples[index];
          ripple.reactivity += 5;
          ripple.fade -= .05;
          ripple.fade <= 0 && ripples.splice(index, 1);
        }
        [].forEach.call(nodes, function(node, index) {
          node.lastX += .08 * (.5 * cc.winSize.width + node.disturb * Math.cos(node.theta) - node.lastX);
          node.lastY += .08 * (.5 * cc.winSize.height + node.disturb * Math.sin(node.theta) - node.lastY);
          node.x += .08 * (node.lastX + Math.cos(node.angle) * node.orbit - node.x);
          node.y += .08 * (node.lastY + Math.sin(node.angle) * node.orbit - node.y);
          node.vx += (node.min - node.disturb) * ease;
          node.vx *= friction;
          node.disturb += node.vx;
          _this.input && (node.disturb += (node.max - node.disturb) * _this.reactivity);
          node.angle += node.speed;
        });
        this.render();
      },
      render: function render() {
        var _this2 = this;
        var nodes = this.nodes;
        var ripples = this.ripples;
        var graphics = this.graphics;
        var color = this.color;
        var currentIndex, nextIndex, xc, yc;
        color.a = this.debug ? 255 : 127.5;
        graphics.clear();
        [].forEach.call(nodes, function(node, index) {
          currentIndex = nodes[nodes.length - 1];
          nextIndex = nodes[0];
          xc = currentIndex.x + .5 * (nextIndex.x - currentIndex.x);
          yc = currentIndex.y + .5 * (nextIndex.y - currentIndex.y);
          var strokeColor = cc.color().fromHEX(_this2.debug ? "#a9a9a9" : "#e5e5e5");
          strokeColor.a = _this2.debug ? 255 : 127.5;
          graphics.strokeColor = strokeColor;
          graphics.fillColor = color;
          graphics.lineWidth = _this2.debug ? 1 : 5;
          graphics.moveTo(xc, yc);
          for (var N = 0; N < nodes.length; N++) {
            currentIndex = nodes[N];
            nextIndex = N + 1 > nodes.length - 1 ? nodes[N - nodes.length + 1] : nodes[N + 1];
            xc = currentIndex.x + .5 * (nextIndex.x - currentIndex.x);
            yc = currentIndex.y + .5 * (nextIndex.y - currentIndex.y);
            graphics.quadraticCurveTo(currentIndex.x, currentIndex.y, xc, yc);
          }
          _this2.debug ? null : graphics.fill();
          graphics.stroke();
          graphics.lineWidth = 1;
          graphics.lineCap = cc.Graphics.LineCap.ROUND;
          graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
          graphics.strokeColor.fromHEX("#a9a9a9");
          graphics.fillColor.fromHEX("#a9a9a9");
          for (var N = 0; N < nodes.length; N++) {
            currentIndex = nodes[N];
            nextIndex = N + 1 > nodes.length - 1 ? nodes[N - nodes.length + 1] : nodes[N + 1];
            xc = currentIndex.x + .8 * (nextIndex.x - currentIndex.x);
            yc = currentIndex.y + .8 * (nextIndex.y - currentIndex.y);
            graphics.moveTo(xc, yc);
            currentIndex = nextIndex;
            nextIndex = N + 2 > nodes.length - 1 ? nodes[N - nodes.length + 2] : nodes[N + 2];
            xc = currentIndex.x + .2 * (nextIndex.x - currentIndex.x);
            yc = currentIndex.y + .2 * (nextIndex.y - currentIndex.y);
            graphics.lineTo(xc, yc);
            graphics.stroke();
            currentIndex = nodes[N];
            nextIndex = N + 1 > nodes.length - 1 ? nodes[N - nodes.length + 1] : nodes[N + 1];
            xc = currentIndex.x + .8 * (nextIndex.x - currentIndex.x);
            yc = currentIndex.y + .8 * (nextIndex.y - currentIndex.y);
            graphics.circle(xc, yc, 2);
            graphics.fill();
            currentIndex = nextIndex;
            nextIndex = N + 2 > nodes.length - 1 ? nodes[N - nodes.length + 2] : nodes[N + 2];
            xc = currentIndex.x + .2 * (nextIndex.x - currentIndex.x);
            yc = currentIndex.y + .2 * (nextIndex.y - currentIndex.y);
            graphics.circle(xc, yc, 2);
            graphics.fill();
          }
        });
        for (var index = 0; index < ripples.length; index++) {
          var ripple = ripples[index];
          var fillColor = cc.color().fromHEX("#ffffff");
          fillColor.a = 255 * ripple.fade;
          graphics.fillColor = fillColor;
          graphics.circle(ripple.x, ripple.y, ripple.reactivity);
          graphics.fill();
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  "downloader-audio": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0c2cc2alblHzIYTnubkC9U7", "downloader-audio");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Component,
      properties: {
        remindLabel: {
          default: null,
          type: cc.Label
        },
        inputUrlBox: {
          default: null,
          type: cc.EditBox
        },
        _audioPlayer: null,
        _audioUrl: "http://tools.itharbors.com/christmas/res/sounds/ss.mp3"
      },
      onLoad: function onLoad() {
        this.remindLabel.textKey = "";
        this._audioPlayer = this.node.getComponent("AudioCtrl");
      },
      startLoad: function startLoad() {
        this._audioUrl = this.inputUrlBox.string;
        if (this._audioUrl) {
          cc.assetManager.loadRemote(this._audioUrl, this.audioLoadComplete.bind(this));
          this.remindLabel.textKey = i18n.t("cases/05_scripting/11_network/download-web.fire.2");
        } else this.remindLabel.textKey = i18n.t("cases/05_scripting/11_network/download-web.fire.10");
      },
      audioLoadComplete: function audioLoadComplete(err, res) {
        if (err || !res) {
          console.log(err);
          this.remindLabel.textKey = i18n.t("cases/05_scripting/11_network/download-web.fire.5.1");
          return;
        }
        this.remindLabel.textKey = i18n.t("cases/05_scripting/11_network/download-web.fire.4.1");
        this._audioPlayer.setAudioTask(res);
      },
      update: function update() {
        this._audioPlayer.currentTime();
      },
      onDisable: function onDisable() {
        this._audioPlayer.stopAllAudio();
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  "downloader-picture": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3d00dQT3HNGKavyQVCwTT1h", "downloader-picture");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Component,
      properties: {
        remindLabel: {
          default: null,
          type: cc.Label
        },
        inputUrlBox: {
          default: null,
          type: cc.EditBox
        },
        picNode: {
          default: null,
          type: cc.Sprite
        },
        _picUrl: "http://tools.itharbors.com/christmas/res/tree.png"
      },
      onLoad: function onLoad() {
        this.remindLabel.textKey = "";
      },
      startLoad: function startLoad() {
        this._picUrl = this.inputUrlBox.string;
        if (this._picUrl) {
          cc.assetManager.loadRemote(this._picUrl, this.picLoadComplete.bind(this));
          this.remindLabel.textKey = i18n.t("cases/05_scripting/11_network/download-web.fire.2");
        } else this.remindLabel.textKey = i18n.t("cases/05_scripting/11_network/download-web.fire.10");
      },
      picLoadComplete: function picLoadComplete(err, res) {
        if (err || !res) {
          console.log(err);
          this.remindLabel.textKey = i18n.t("cases/05_scripting/11_network/download-web.fire.5.2");
          return;
        }
        this.remindLabel.textKey = i18n.t("cases/05_scripting/11_network/download-web.fire.4.2");
        var spriteFrame = new cc.SpriteFrame(res);
        this.picNode.spriteFrame = spriteFrame;
        this.picNode.node.active = true;
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  "draw-line": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9956e8stcdOCqj54TY/HidB", "draw-line");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.touches = [];
        _this.graphics = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        var canvas = cc.find("Canvas");
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.graphics = this.getComponent(cc.Graphics);
        this.graphics.moveTo(0, 0);
        this.graphics.lineTo(.1, 0);
        this.graphics.lineTo(-.11, 0);
        this.graphics.stroke();
      };
      NewClass.prototype.onTouchStart = function(event) {
        this.touches.length = 0;
        this.touches.push(event.touch.getLocation());
      };
      NewClass.prototype.onTouchMove = function(event) {
        var touches = this.touches;
        touches.push(event.touch.getLocation());
        var MIN_POINT_DISTANCE = 2;
        this.graphics.clear();
        var worldPos = this.node.convertToWorldSpaceAR(cc.v2());
        this.graphics.moveTo(touches[0].x - worldPos.x, touches[0].y - worldPos.y);
        var lastIndex = 0;
        for (var i = 1, l = touches.length; i < l; i++) {
          if (touches[i].sub(touches[lastIndex]).mag() < MIN_POINT_DISTANCE) continue;
          lastIndex = i;
          this.graphics.lineTo(touches[i].x - worldPos.x, touches[i].y - worldPos.y);
        }
        this.graphics.stroke();
      };
      NewClass.prototype.onTouchEnd = function(event) {};
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  "dynamic-load-material": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "93268zvFsZAKpSHQw+2ixa3", "dynamic-load-material");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        meshRenderer: cc.MeshRenderer,
        _material: cc.Material
      },
      start: function start() {
        var _this = this;
        this.scheduleOnce(function() {
          cc.resources.load("materials/dynamic-load-material", cc.Material, function(err, material) {
            if (err) {
              cc.error(err);
              return;
            }
            _this._material = material.addRef();
            _this.meshRenderer.setMaterial(0, material);
          });
        }, 1);
      },
      onDestroy: function onDestroy() {
        this._material && this._material.decRef();
        this._material = null;
      }
    });
    cc._RF.pop();
  }, {} ],
  "dynamic-tiledmap": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cad2cnE69BPqr+Aejz96TlC", "dynamic-tiledmap");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        map_root: cc.Node
      },
      onLoadTileMap: function onLoadTileMap(url) {
        var _this = this;
        cc.resources.load(url, cc.TiledMapAsset, function(err, tmxAsset) {
          if (err) {
            cc.error(err);
            return;
          }
          _this.onCreateTileMap(tmxAsset);
        });
      },
      onCreateTileMap: function onCreateTileMap(tmxAsset) {
        this.map_root.destroyAllChildren();
        var node = new cc.Node();
        this.map_root.addChild(node);
        var tileMap = node.addComponent(cc.TiledMap);
        tileMap.tmxAsset = tmxAsset;
      },
      onBtnCreateTileMap: function onBtnCreateTileMap() {
        var url = "tilemap/tile_iso_offset";
        this.onLoadTileMap(url);
      },
      onBtnCreateTileMapWithTsx: function onBtnCreateTileMapWithTsx() {
        var url = "tilemap/tile_iso_offset_with_tsx";
        this.onLoadTileMap(url);
      }
    });
    cc._RF.pop();
  }, {} ],
  ellipse: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c7e65GQDltH+6fpuWTVubaZ", "ellipse");
    "use strict";
    cc.Class({
      extends: cc.Component,
      onLoad: function onLoad() {
        var g = this.getComponent(cc.Graphics);
        g.lineWidth = 10;
        g.fillColor.fromHEX("#ff0000");
        g.circle(150, 0, 100);
        g.ellipse(-150, 0, 100, 70);
        g.stroke();
        g.fill();
      }
    });
    cc._RF.pop();
  }, {} ],
  "enable-physics3d": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c4021KQFRRMpq8Rl1Z07uGF", "enable-physics3d");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EnablePhysics3D = function(_super) {
      __extends(EnablePhysics3D, _super);
      function EnablePhysics3D() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.needPhysics = false;
        _this.needPhysicsWord = null;
        return _this;
      }
      EnablePhysics3D.prototype.onLoad = function() {
        cc.director.getPhysics3DManager().enabled = true;
        var showWarn = this.needPhysics && false;
        this.needPhysicsWord && (this.needPhysicsWord.active = showWarn);
      };
      __decorate([ property ], EnablePhysics3D.prototype, "needPhysics", void 0);
      __decorate([ property({
        type: cc.Node
      }) ], EnablePhysics3D.prototype, "needPhysicsWord", void 0);
      EnablePhysics3D = __decorate([ ccclass ], EnablePhysics3D);
      return EnablePhysics3D;
    }(cc.Component);
    exports.default = EnablePhysics3D;
    cc._RF.pop();
  }, {} ],
  "enable-rigidbody": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d459cABJ6ZF6J+hdiAOrLd4", "enable-rigidbody");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EnableRigidBody = function(_super) {
      __extends(EnableRigidBody, _super);
      function EnableRigidBody() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.toState = null;
        _this.rigidBody = null;
        return _this;
      }
      EnableRigidBody.prototype.switchState = function() {
        var toStateStr = this.toState.string;
        if ("disable" == toStateStr) {
          this.disableRigidBody();
          this.toState.string = "enable";
        } else {
          this.enableRigidBody();
          this.toState.string = "disable";
        }
      };
      EnableRigidBody.prototype.enableRigidBody = function() {
        this.rigidBody.enabled = true;
      };
      EnableRigidBody.prototype.disableRigidBody = function() {
        this.rigidBody.enabled = false;
      };
      __decorate([ property(cc.Label) ], EnableRigidBody.prototype, "toState", void 0);
      __decorate([ property(cc.RigidBody3D) ], EnableRigidBody.prototype, "rigidBody", void 0);
      EnableRigidBody = __decorate([ ccclass ], EnableRigidBody);
      return EnableRigidBody;
    }(cc.Component);
    exports.default = EnableRigidBody;
    cc._RF.pop();
  }, {} ],
  "enable-shape": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c372auEmopBg5i6QilLDSVd", "enable-shape");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EnableAllShapde = function(_super) {
      __extends(EnableAllShapde, _super);
      function EnableAllShapde() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.toState = null;
        return _this;
      }
      EnableAllShapde.prototype.start = function() {};
      EnableAllShapde.prototype.switchState = function() {
        var toStateStr = this.toState.string;
        if ("disable" == toStateStr) {
          this.disableAllShape();
          this.toState.string = "enable";
        } else {
          this.enableAllShape();
          this.toState.string = "disable";
        }
      };
      EnableAllShapde.prototype.enableAllShape = function() {
        var children = this.node.children;
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          var collider = child.getComponent(cc.Collider3D);
          collider.enabled = true;
        }
      };
      EnableAllShapde.prototype.disableAllShape = function() {
        var children = this.node.children;
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          var collider = child.getComponent(cc.Collider3D);
          collider.enabled = false;
        }
      };
      __decorate([ property({
        type: cc.Label
      }) ], EnableAllShapde.prototype, "toState", void 0);
      EnableAllShapde = __decorate([ ccclass ], EnableAllShapde);
      return EnableAllShapde;
    }(cc.Component);
    exports.default = EnableAllShapde;
    cc._RF.pop();
  }, {} ],
  en: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "920c5VLzJxKjYCAoIUwUHym", "en");
    "use strict";
    module.exports = {
      example_case_tips_content: "The example case not support the current platform",
      example_case_nonsupport_native_desktop_tips: "The example case nonsupport the Mac platform and Windows platform",
      example_case_nonsupport_runtime_tips: "The example case does not support the runtime platform",
      example_case_nonsupport_mobile_tips: "The example case nonsupport mobile platforms",
      example_case_nonsupport_web_canvas_tips: "The example case nonsupport Canvas mode",
      example_case_support_webGl_tips: "The example case only supports WebGL mode",
      example_case_support_mobile_tips: "The example case only supports mobile platforms",
      example_case_support_mobile_android_tips: "The example case only supports Android mobile platform",
      example_case_support_native_chrome_tips: "The example case only supports Chrome browser (Native)",
      example_case_support_native_desktop_tips: "The example case only supports the Mac platform and Windows platform",
      example_case_nonsupport_preview_tips: "The example case nonsupport Preview",
      example_case_nonsupport_qqplay_tips: "The example case nonsupport QQplay",
      example_case_nonsupport_Wechatgame_tips: "The example case nonsupport Wechatgame",
      "cases/01_graphics/01_sprite/AtlasSprite.fire.7": "This is Spirte Single.",
      "cases/01_graphics/01_sprite/AtlasSprite.fire.11": "This is Spirte From Atlas.",
      "cases/01_graphics/01_sprite/FilledSprite.fire.9": "Fill Type: HORIZONTAL",
      "cases/01_graphics/01_sprite/FilledSprite.fire.15": "Fill Type: VERTICAL",
      "cases/01_graphics/01_sprite/FilledSprite.fire.23": "FILL Type: RADIAL",
      "cases/01_graphics/01_sprite/SimpleSprite.fire.7": "This is Simple Sprite.",
      "cases/01_graphics/01_sprite/SlicedSprite.fire.7": "This is Sliced Sprite.",
      "cases/01_graphics/01_sprite/TiledSprite.fire.6": "This is Tiled Sprite.",
      "cases/01_graphics/01_sprite/ChangeColor.fire.1": "Draw Call will be changed when change color.",
      "cases/01_graphics/01_sprite/TrimmedSprite.fire.7": "TRIMMED ",
      "cases/01_graphics/01_sprite/TrimmedSprite.fire.12": "No TRIMMED",
      "cases/01_graphics/02_particle/AutoRemoveParticle.fire.9": 'Particle 1\n"Auto Remove On Finish" disabled',
      "cases/01_graphics/02_particle/AutoRemoveParticle.fire.13": 'Particle 2\n"Auto Remove On Finish" enabled',
      "cases/01_graphics/02_particle/ToggleParticle.fire.6": 'Press "Button" to toggle particle play',
      "cases/02_ui/01_widget/AdvancedWidget.fire.7": "Top Left",
      "cases/02_ui/01_widget/AdvancedWidget.fire.9": "top: 10% left: 6%",
      "cases/02_ui/01_widget/AdvancedWidget.fire.14": "Top Left",
      "cases/02_ui/01_widget/AdvancedWidget.fire.16": "top: -34px",
      "cases/02_ui/01_widget/AdvancedWidget.fire.21": "Top Right",
      "cases/02_ui/01_widget/AdvancedWidget.fire.23": "top: 10% right: 6%",
      "cases/02_ui/01_widget/AdvancedWidget.fire.28": "Left",
      "cases/02_ui/01_widget/AdvancedWidget.fire.30": "left: -50px",
      "cases/02_ui/01_widget/AdvancedWidget.fire.35": "Right",
      "cases/02_ui/01_widget/AdvancedWidget.fire.37": "right: -50px",
      "cases/02_ui/01_widget/AdvancedWidget.fire.42": "Bottom Left",
      "cases/02_ui/01_widget/AdvancedWidget.fire.44": "bottom: 10% left: 6%",
      "cases/02_ui/01_widget/AdvancedWidget.fire.49": "Bottom",
      "cases/02_ui/01_widget/AdvancedWidget.fire.51": "bottom: -34px",
      "cases/02_ui/01_widget/AdvancedWidget.fire.56": "Bottom Right",
      "cases/02_ui/01_widget/AdvancedWidget.fire.58": "bottom:10% right:6%",
      "cases/02_ui/01_widget/AdvancedWidget.fire.63": "This is Advanced WIdget.",
      "cases/02_ui/01_widget/AlignOnceWidget.fire.1": "AlignOne is false, It is always aligns",
      "cases/02_ui/01_widget/AlignOnceWidget.fire.2": "AlignOne is true, It aligns only once",
      "cases/02_ui/01_widget/AnimatedWidget.fire.9": "This is Animation Widget.",
      "cases/02_ui/01_widget/AutoResize.fire.13": "This is Widget Auto Resize.",
      "cases/02_ui/01_widget/WidgetAlign.fire.18": "This is Widget Align.",
      "cases/02_ui/02_label/GoldBeatingAnime.js.1": "0",
      "cases/02_ui/02_label/AlignFontLabel.fire.6": "Align Label",
      "cases/02_ui/02_label/AlignFontLabel.fire.9": "Horizontal Align",
      "cases/02_ui/02_label/AlignFontLabel.fire.14": "Hello! \nWelcome Come To \nCocos Creator",
      "cases/02_ui/02_label/AlignFontLabel.fire.16": "Align: LEFT",
      "cases/02_ui/02_label/AlignFontLabel.fire.21": "Hello! \nWelcome Come To \nCocos Creator",
      "cases/02_ui/02_label/AlignFontLabel.fire.23": "Align: CENTER",
      "cases/02_ui/02_label/AlignFontLabel.fire.28": "Hello! \nWelcome Come To \nCocos Creator",
      "cases/02_ui/02_label/AlignFontLabel.fire.30": "Align: RIGHT",
      "cases/02_ui/02_label/AlignFontLabel.fire.33": "Vertical Align",
      "cases/02_ui/02_label/AlignFontLabel.fire.38": "Welcome Come To \nCocos Creator",
      "cases/02_ui/02_label/AlignFontLabel.fire.40": "Align: TOP",
      "cases/02_ui/02_label/AlignFontLabel.fire.45": "Welcome Come To \nCocos Creator",
      "cases/02_ui/02_label/AlignFontLabel.fire.47": "Align: CENTER",
      "cases/02_ui/02_label/AlignFontLabel.fire.52": "Welcome Come To \nCocos Creator",
      "cases/02_ui/02_label/AlignFontLabel.fire.54": "Align: BOTTOM",
      "cases/02_ui/02_label/SystemFontLabel.fire.6": "System Font",
      "cases/02_ui/02_label/SystemFontLabel.fire.9": "Wrap",
      "cases/02_ui/02_label/SystemFontLabel.fire.14": "This is System Font",
      "cases/02_ui/02_label/SystemFontLabel.fire.16": "Overflow: CLAMP",
      "cases/02_ui/02_label/SystemFontLabel.fire.21": "This is System Font",
      "cases/02_ui/02_label/SystemFontLabel.fire.23": "Overflow: SHRINK",
      "cases/02_ui/02_label/SystemFontLabel.fire.26": "No Wrap",
      "cases/02_ui/02_label/SystemFontLabel.fire.31": "This is System Font",
      "cases/02_ui/02_label/SystemFontLabel.fire.33": "Overflow: CLAMP",
      "cases/02_ui/02_label/SystemFontLabel.fire.38": "This is System Font",
      "cases/02_ui/02_label/SystemFontLabel.fire.40": "Overflow: SHRINK",
      "cases/02_ui/02_label/SystemFontLabel.fire.45": "Hello! Welcome Come To Cocos Creator",
      "cases/02_ui/02_label/SystemFontLabel.fire.47": "Overflow: RESZIE_HEIGHT",
      "cases/02_ui/03_button/ButtonInScroll.js.1": "Top button clicked!",
      "cases/02_ui/03_button/ButtonInScroll.js.2": "Bottom button clicked!",
      "cases/02_ui/03_button/ButtonInScroll.fire.21": "Which button is clicked?",
      "cases/02_ui/03_button/ButtonInScroll.fire.27": "drag to reveal more buttons",
      "cases/02_ui/03_button/SimpleButton.js.1": "Left button clicked!",
      "cases/02_ui/03_button/SimpleButton.js.2": "Right button clicked!",
      "cases/02_ui/03_button/ButtonInteractable.fire.7": "PLAY",
      "cases/02_ui/03_button/ButtonInteractable.fire.16": "STOP",
      "cases/02_ui/03_button/ButtonInteractable.fire.21": "interactable: true",
      "cases/02_ui/03_button/ButtonInteractable.fire.23": "interactable: false",
      "cases/02_ui/03_button/ButtonInteractable.js.1": "interactable: ",
      "cases/02_ui/03_button/ButtonInteractable.js.2": "interactable: ",
      "cases/02_ui/03_button/ButtonSizeMode.fire": "Buttons with different hit areas",
      "cases/02_ui/03_button/SimpleButton.fire.6": "Which button is clicked?",
      "cases/02_ui/04_progressbar/progressbar.fire.7": "Horizontal bar with progress 0.3",
      "cases/02_ui/04_progressbar/progressbar.fire.11": "Horizontal bar reverse with progress 1.0",
      "cases/02_ui/04_progressbar/progressbar.fire.15": "Vertical bar \nfrom bottom",
      "cases/02_ui/04_progressbar/progressbar.fire.19": "Vertical bar \nfrom top",
      "cases/02_ui/04_progressbar/progressbar.fire.23": "Progress bar with sprite",
      "cases/02_ui/04_progressbar/progressbar.fire.28": "Progress bar with child sprite",
      "cases/02_ui/05_scrollView/Item.js.1": "Tmpl#",
      "cases/02_ui/05_scrollView/ListView.fire.23": "Item #00",
      "cases/02_ui/05_scrollView/ScrollView.fire.7": "Scrollview full functionality",
      "cases/02_ui/05_scrollView/ScrollView.fire.30": "Scrollview without inertia",
      "cases/02_ui/05_scrollView/ScrollView.fire.53": "Scrollview without elastic",
      "cases/02_ui/05_scrollView/ScrollView.fire.76": "Scrollview horizontal scroll only",
      "cases/02_ui/05_scrollView/ScrollView.fire.93": "Scrollview vertical only",
      "cases/02_ui/05_scrollView/ScrollView.fire.110": "Scrollview no scrollbar",
      "cases/02_ui/06_layout/LayoutResizeContainer.fire.6": "Basic",
      "cases/02_ui/06_layout/LayoutResizeContainer.fire.31": "Horizontal",
      "cases/02_ui/06_layout/LayoutResizeContainer.fire.36": "Vertical",
      "cases/02_ui/06_layout/LayoutResizeContainer.fire.41": "Grid Layout Axis horizontal",
      "cases/02_ui/06_layout/LayoutResizeContainer.fire.46": "Grid Layout Axis vertical",
      "cases/02_ui/06_layout/LayoutResizeChildren.fire.6": "Horizontal layout none",
      "cases/02_ui/06_layout/LayoutResizeChildren.fire.31": "Vertical layout none",
      "cases/02_ui/06_layout/LayoutResizeChildren.fire.48": "Grid start axis horizontal none",
      "cases/02_ui/06_layout/LayoutResizeChildren.fire.85": "Grid start axis vertical none",
      "cases/02_ui/06_layout/LayoutInScrollView.fire.6": "ScrollView with vertical  layout",
      "cases/02_ui/06_layout/LayoutInScrollView.fire.40": "ScrollView with horizontal layout",
      "cases/02_ui/06_layout/LayoutInScrollView.fire.74": "ScrollView with Grid Layout\nstart axis: horizontal ",
      "cases/02_ui/06_layout/LayoutInScrollView.fire.144": "ScrollView with Grid Layout\nstart axis: vertical ",
      "cases/02_ui/06_layout/LayoutNone.fire.6": "Basic layout, Type: None\nResize container",
      "cases/02_ui/06_layout/LayoutNone.fire.35": "Horizontal layout None\nNo resize",
      "cases/02_ui/06_layout/LayoutNone.fire.60": "Vertical layout, Type: None\nNo resize",
      "cases/02_ui/06_layout/LayoutNone.fire.77": "Grid start axis: horizontal, Type: None\nNo resize",
      "cases/02_ui/06_layout/LayoutNone.fire.142": "Grid start axis: vertical, Type: None\nNo resize",
      "cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.8": "x:0, y:0",
      "cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.12": "x:480, y:320",
      "cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.16": "x:960, y:640",
      "cases/02_ui/07_editBox/editbox.js.1": "Enter Text: ",
      "cases/02_ui/07_editBox/EditBox.fire.25": "Single Line Password:",
      "cases/02_ui/07_editBox/EditBox.fire.27": "Single Line Text:",
      "cases/02_ui/07_editBox/EditBox.fire.29": "Mutiple Line Text:",
      "cases/02_ui/07_editBox/EditBox.fire.32": "Click",
      "cases/02_ui/07_editBox/EditBox.fire.38": "Button must be on top of EditBox, \nand it should enable click.",
      "cases/02_ui/09_videoplayer/fullscreenVideo.fire": "When you touch the screen, video will be played. \n It will be removed when video complete.",
      "cases/02_ui/09_videoplayer/videoPlayer.nonsupport_fullscreen": "currect device does nonsupport fullscreen.",
      "cases/03_gameplay/01_player_control/EventManager/KeyboardInput.fire.6": "Press 'A' or 'D' to control sheep",
      "cases/03_gameplay/01_player_control/On/OnTouchCtrl.js.1": "touch (",
      "cases/03_gameplay/01_player_control/On/OnTouchInput.fire.10": "Try touching anywhere.",
      "cases/03_gameplay/01_player_control/On/OnMultiTouchInput.fire.20": "The sample can only be effective on mobile platforms!",
      "cases/03_gameplay/01_player_control/On/OnMultiTouchInput.fire.21": "Use your fingers to zoom image!",
      "cases/03_gameplay/01_player_control/On/DeviceMotion.fire.1": "Open Accelerometer",
      "cases/03_gameplay/01_player_control/On/DeviceMotion.fire.2": "Close Accelerometer",
      "cases/03_gameplay/02_actions/SimpleAction.fire.13": "This is Simple Action.",
      "cases/03_gameplay/03_animation/AnimateCustomProperty.fire.14": "Label",
      "cases/03_gameplay/03_animation/AnimateCustomProperty.fire.18": "This is Animate Custom Property.",
      "cases/03_gameplay/03_animation/AnimationEvent.fire.6": "Start the first animation",
      "cases/03_gameplay/03_animation/AnimationEvent.fire.14": "This is Animation Event.",
      "cases/03_gameplay/03_animation/AnimationEvent.js.1": "Start the",
      "cases/03_gameplay/03_animation/MoveAnimation.fire.11": "Linear",
      "cases/03_gameplay/03_animation/MoveAnimation.fire.17": "Case In Expo",
      "cases/03_gameplay/03_animation/MoveAnimation.fire.23": "Case Out Expo",
      "cases/03_gameplay/03_animation/MoveAnimation.fire.29": "Case Out In Expo",
      "cases/03_gameplay/03_animation/MoveAnimation.fire.35": "Back Forward",
      "cases/03_gameplay/03_animation/MoveAnimation.fire.41": "This is Move Animation.",
      "cases/03_gameplay/03_animation/CurveAnimation.fire.42": "This is Curve Animation.",
      "cases/03_gameplay/03_animation/SpriteAnimation.fire.9": "This is SprieFrame Animation.",
      "cases/03_gameplay/03_animation/CreateClip.fire.1": "Dynamic Creating AnimationClip",
      "cases/04_audio/SimpleAudio.fire.6": "Enjoy the music!",
      "cases/05_scripting/01_properties/NodeArray.fire.14": "This is Node Array.",
      "cases/05_scripting/01_properties/NonSerialized.fire.6": "Label",
      "cases/05_scripting/01_properties/NonSerialized.fire.8": "Label",
      "cases/05_scripting/01_properties/NonSerialized.fire.10": "This is Non Serialized.",
      "cases/05_scripting/01_properties/ReferenceType.fire.8": "Label",
      "cases/05_scripting/01_properties/ReferenceType.fire.11": "This example does not include the runtime demonstration",
      "cases/05_scripting/01_properties/ValueType.fire.6": "This example does not include the runtime demonstration",
      "cases/05_scripting/02_prefab/InstantiatePrefab.fire.7": "This is Instantiate Prefab.",
      "cases/05_scripting/03_events/EventInMask.fire.23": "Change order of nodes",
      "cases/05_scripting/03_events/SimpleEvent.fire.19": "Touch event can support click",
      "cases/05_scripting/03_events/SimpleEvent.fire.21": "Mouse event can support click, hover, wheel",
      "cases/05_scripting/03_events/SimpleEvent.fire.23": "Custom event can be triggered manually\n(Click button above)",
      "cases/05_scripting/03_events/SimpleEvent.fire.25": "This is Simple Event.",
      "cases/05_scripting/03_events/TouchPropagation.fire.15": "This is Touch Propagation.",
      "cases/05_scripting/03_events/MousePropagation.fire.1": "This is Mouse Propagation.",
      "cases/05_scripting/04_scheduler/scheduleCallbacks.js.1": "5.00 s",
      "cases/05_scripting/04_scheduler/scheduler.fire.9": "5.00 s",
      "cases/05_scripting/04_scheduler/scheduler.fire.12": "Repeat Schedule",
      "cases/05_scripting/04_scheduler/scheduler.fire.18": "Cancel Schedules",
      "cases/05_scripting/04_scheduler/scheduler.fire.24": "Schedule Once",
      "cases/05_scripting/04_scheduler/scheduler.fire.29": "Counter use update function to change string value each frame",
      "cases/05_scripting/04_scheduler/scheduler.fire.31": "This is Scheduler.",
      "cases/05_scripting/04_scheduler/recursiveScheduler.fire.0": "Click button to start recursive tasks, you should see task2 invoked at last.",
      "cases/05_scripting/04_scheduler/recursiveScheduler.fire.1": "Task1 invoked",
      "cases/05_scripting/04_scheduler/recursiveScheduler.fire.2": "Task2 invoked",
      "cases/05_scripting/04_scheduler/recursiveScheduler.fire.3": "Start tasks",
      "cases/05_scripting/05_cross_reference/CrossReference.fire.7": "Label",
      "cases/05_scripting/05_cross_reference/CrossReference.fire.12": "Label",
      "cases/05_scripting/05_cross_reference/CrossReference.fire.14": "This is Cross Reference.",
      "cases/05_scripting/06_life_cycle/life_cycle.fire.6": "This is Life cycle.",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.5": "Asset Loading",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.9": "Load SpriteFrame",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.15": "Load Texture",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.21": "Load Audio",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.27": "Load Txt",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.33": "Load Font",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.39": "Load Plist",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.45": "Load Prefab",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.51": "Load Scene",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.57": "Load Animation",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.59": "Load Spine",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.65": "Not currently loaded Entity.",
      "cases/05_scripting/07_asset_loading/AssetLoading.js.1": "Loaded ",
      "cases/05_scripting/07_asset_loading/AssetLoading.js.2": "Play ",
      "cases/05_scripting/07_asset_loading/AssetLoading.js.3": "Create ",
      "cases/05_scripting/07_asset_loading/AssetLoading.js.4": "Playing Music.",
      "cases/05_scripting/07_asset_loading/AssetLoading.js.5": "This is Font!",
      "cases/05_scripting/07_asset_loading/LoadRes.fire.7": "By Type",
      "cases/05_scripting/07_asset_loading/LoadRes.fire.10": "Load SpriteFrame",
      "cases/05_scripting/07_asset_loading/LoadRes.fire.17": "By Url",
      "cases/05_scripting/07_asset_loading/LoadRes.fire.20": "Load Prefab",
      "cases/05_scripting/07_asset_loading/LoadResAll.fire.6": "LoadResDir",
      "cases/05_scripting/07_asset_loading/LoadResAll.fire.24": "Load All",
      "cases/05_scripting/07_asset_loading/LoadResAll.fire.30": "Load SpriteFrame All",
      "cases/05_scripting/07_asset_loading/LoadResAll.fire.36": "Clear All",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.1": "Preload Assets",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.2": "PreLoad SpriteFrame",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.3": "Preload Texture",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.4": "Preload Audio",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.5": "Preload Txt",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.6": "Preload Font",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.7": "Preload Plist",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.8": "Preload Prefab",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.9": "Preload Scene",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.10": "Preload Animation",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.11": "Preload Spine",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.12": "Not currently preloaded Entity.",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.13": "Preload Dir",
      "cases/05_scripting/07_asset_loading/PreloadAssets.js.1": "Loaded ",
      "cases/05_scripting/07_asset_loading/PreloadAssets.js.2": "Play ",
      "cases/05_scripting/07_asset_loading/PreloadAssets.js.3": "Create ",
      "cases/05_scripting/07_asset_loading/PreloadAssets.js.4": "Playing Music.",
      "cases/05_scripting/07_asset_loading/PreloadAssets.js.5": "This is Font!",
      "cases/05_scripting/07_asset_loading/DeferredLoading.fire.1": "Deferred Loading",
      "cases/05_scripting/08_module/load_module.fire.6": "Load Module",
      "cases/05_scripting/08_module/load_module.fire.10": "Create Monster",
      "cases/05_scripting/09_singleton/Singleton.fire.6": "This example does not include the runtime demonstration",
      "cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.1": "download complete!!",
      "cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.2": "dowloading: ",
      "cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.3": "click anywhere to download...",
      "cases/05_scripting/10_loadingBar/loadingBar.fire.7": "Loading Completed",
      "cases/05_scripting/10_loadingBar/loadingBar.fire.18": "Dowloading",
      "cases/05_scripting/11_network/NetworkCtrl.js.1": "waiting...",
      "cases/05_scripting/11_network/NetworkCtrl.js.2": "waiting...",
      "cases/05_scripting/11_network/NetworkCtrl.js.3": "waiting...",
      "cases/05_scripting/11_network/NetworkCtrl.js.4": "waiting...",
      "cases/05_scripting/11_network/NetworkCtrl.js.5": "WebSocket\\nSend Binary WS was opened.",
      "cases/05_scripting/11_network/NetworkCtrl.js.6": "WebSocket\\nResponse get.",
      "cases/05_scripting/11_network/NetworkCtrl.js.7": "WebSocket\\nsendBinary Error was fired.",
      "cases/05_scripting/11_network/NetworkCtrl.js.8": "WebSocket\\nwebsocket instance closed.",
      "cases/05_scripting/11_network/NetworkCtrl.js.9": "WebSocket\\nSend Binary WS is waiting...",
      "cases/05_scripting/11_network/NetworkCtrl.js.10": "WebSocket\\n",
      "cases/05_scripting/11_network/NetworkCtrl.js.11": "SocketIO\\n",
      "cases/05_scripting/11_network/NetworkCtrl.js.12": "SocketIO\\n",
      "cases/05_scripting/11_network/NetworkCtrl.js.13": "SocketIO\\n",
      "cases/05_scripting/11_network/NetworkCtrl.js.14": "SocketIO\\n",
      "cases/05_scripting/11_network/network.fire.7": "Label",
      "cases/05_scripting/11_network/network.fire.6": "XMLHttpRequest",
      "cases/05_scripting/11_network/network.fire.11": "Label",
      "cases/05_scripting/11_network/network.fire.10": "XMLHttpRequest (ArrayBuffer)",
      "cases/05_scripting/11_network/network.fire.15": "Label",
      "cases/05_scripting/11_network/network.fire.14": "WebSocket",
      "cases/05_scripting/11_network/network.fire.19": "Label",
      "cases/05_scripting/11_network/network.fire.18": "SocketIO",
      "cases/05_scripting/11_network/download-web.fire.1.1": "Remote Audio DownLoad",
      "cases/05_scripting/11_network/download-web.fire.1.2": "Remote Picture DownLoad",
      "cases/05_scripting/11_network/download-web.fire.2": "Wait For DownLoading...",
      "cases/05_scripting/11_network/download-web.fire.3": "DownLoad Process\uff1a",
      "cases/05_scripting/11_network/download-web.fire.4.1": "Audio DownLoad Completed",
      "cases/05_scripting/11_network/download-web.fire.4.2": "Picture DownLoad Completed",
      "cases/05_scripting/11_network/download-web.fire.5.1": "Audio DownLoad Failed",
      "cases/05_scripting/11_network/download-web.fire.5.2": "Picture DownLoad Failed",
      "cases/05_scripting/11_network/download-web.fire.6": "Remote Url:",
      "cases/05_scripting/11_network/download-web.fire.7": "download",
      "cases/05_scripting/11_network/download-web.fire.8": "SlideToNext",
      "cases/05_scripting/11_network/download-web.fire.9": "SlideToPreview",
      "cases/05_scripting/11_network/download-web.fire.10": "Url Is Unavailable",
      "cases/native_call/native_call.fire.1": "JS to JAVA reflection only works Android mobile platform!",
      "cases/native_call/native_call.fire.2": "Click on the button calls the static method!",
      "cases/native_call/native_call.fire.3": "Click",
      "cases/collider/Category.fire.3": "Group: Collider",
      "cases/collider/Category.fire.5": "Group: Collider",
      "cases/collider/Category.fire.7": "Group: Collider",
      "cases/collider/Category.fire.9": "Group: Default",
      "cases/collider/Shape.fire.20": "Show Polygon",
      "cases/collider/Shape.fire.27": "Show Circle",
      "cases/collider/Shape.fire.34": "Show Box",
      "cases/collider/Shape.fire.43": "Show Polygon",
      "cases/collider/Shape.fire.50": "Show Circle",
      "cases/collider/Shape.fire.57": "Show Box",
      "cases/motionStreak/MotionStreak.fire.1": "Change MotionStreak",
      "cases/spine/SpineBoy.fire.11": "Debug Slots",
      "cases/spine/SpineBoy.fire.18": "Debug Bones",
      "cases/spine/SpineBoy.fire.25": "Time Scale",
      "cases/spine/SpineBoy.fire.36": "Stop",
      "cases/spine/SpineBoy.fire.43": "Walk",
      "cases/spine/SpineBoy.fire.50": "Run",
      "cases/spine/SpineBoy.fire.58": "Jump",
      "cases/spine/SpineBoy.fire.65": "Shoot",
      "cases/tiledmap/Puzzle.fire.18": "You Win",
      "cases/tiledmap/Puzzle.fire.21": "Restart",
      "cases/tiledmap/Dynamic-Tiledmap.fire.22": "Dynamically created TiledMap",
      "res/prefabs/ListItem.prefab.2": "Label ssss",
      "res/prefabs/Monster.prefab.3": "Name:",
      "res/prefabs/Monster.prefab.11": "Level :",
      "res/prefabs/Monster.prefab.19": "Hp :",
      "res/prefabs/Monster.prefab.27": "Attack :",
      "res/prefabs/Monster.prefab.35": "Defense :",
      "res/prefabs/loadItem.prefab.1": "Label",
      "resources/test_assets/prefab.prefab.2": "This is Prefab",
      "resources/test_assets/scene.fire.3": "Return Asset Loading Scene",
      "resources/test_assets/preloadscene.fire.3": "Return Preloading Scene",
      "resources/test_assets/scene.fire.6": "Return",
      "scripts/Global/Menu.js.1": "Temporary lack of introduction",
      "cases/AssetBundle.1": "Asset Bundle",
      "cases/AssetBundle.2": "Load Bundle",
      "cases/AssetBundle.3": "Load Audio",
      "cases/AssetBundle.4": "Load Texture",
      "cases/AssetBundle.5": "Load Scene",
      "cases/AssetBundle.6": "Release Assets",
      "cases/AssetBundle.7": "Destroy Bundle",
      "cases/AssetBundle.8": "Enterred",
      "cases/AssetBundle.9": "Failed, Please load bundle first",
      "cases/AssetBundle.10": "Back to Asset Bundle",
      "cases/AssetBundle.11": "Nothing loaded",
      "cases/AssetBundle.12": "Loaded ",
      "cases/AssetBundle.13": "Play ",
      "cases/AssetBundle.14": "Create ",
      "cases/AssetBundle.15": "Playing Music",
      "cases/AssetBundle.16": "Assets are released",
      "cases/AssetBundle.17": "Asset Bundle is destroyed",
      "scripts/AudioCtrl_Play": "Play",
      "scripts/AUdioCtrl_Stop": "Stop",
      "scripts/AUdioCtrl_Pause": "Pause",
      "scripts/AUdioCtrl_Resume": "Resume",
      "scripts/AUdioCtrl_StopAll": "StopAll",
      "scripts/AUdioCtrl_PauseAll": "PauseAll",
      "scripts/AUdioCtrl_ResumeAll": "ResumeAll",
      sprite_loadRes_asset_success: "Load Success",
      sprite_loadRes_asset_failed: "Load Failed",
      "cases/particle3d.color": "Left one: a single color \n Left two: a gradient color \n Left three: several single color variations \n Left four: two gradient colors \n Left five: random colors",
      "cases/particle3d.force.transform": "Transform",
      "cases/particle3d.force.rotate": "Rotate",
      "cases/particle3d.main": "1. Left one, left two are contrasts, the effect is the same \n2. Left three, left five particles are doubled, and the center distance between particles is doubled.\n3.Left four left six particles are doubled, the center distance between the particles is not changed\n4. The left seventh generates two particles every five seconds, and the time interval between the two particles is 0.5 seconds \n5. The left eight can be viewed in the scene editor. Each particle is dragged to generate a particle.",
      "cases/particle3d.renderer": "Left one: Particles always face the camera. \nLeft Two: Particles always remain horizontal. \nLeft three: Particles always remain vertical and face the camera.\nLeft four: Particles always remain vertical and face the camera, but are stretched.\nLeft five: Particle is a model",
      "cases/particle3d.rotation": "Particles rotate according to the set curve",
      "cases/particle3d.shape": "          Particle emitter shape    Particle generation position\nLeft one          Cube                 Internal\nLeft two          Cube                 Frame\nLeft three          Cube                 Surface\nLeft four              Circle             Along a circle\nLeft five              Circle             Generate particles in a circle\n                                      Cycle direction is the same\nLeft six              Circle             Generate particles in a circle\n                                      Cycles in opposite directions\nLeft seven            Cone                   Internal\nLeft eight            Cone                Cone bottom circle\nLeft nine            Cone                    Surface\nLeft ten            Cone               Cone bottom circumference\nLeft eleven       Cone       Cone-bottom circular circulation generates particles\n                                 Particles move obliquely upward\nLeft twelve        Sphere                     Internal\nLeft thirteen        Sphere                     Surface\nLeft fourteen      Hemisphere                    Internal\nLeft fifteen      Hemisphere                    Surface",
      "cases/particle3d.size": "The particle size changes according to the set curve."
    };
    cc._RF.pop();
  }, {} ],
  follow: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d96400vNFFPIpzg48kPuXVc", "follow");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        target: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.node.active = !cc.sys.isMobile;
        if (!this.target) return;
        var follow = cc.follow(this.target, cc.rect(0, 0, 2e3, 2e3));
        this.node.runAction(follow);
      }
    });
    cc._RF.pop();
  }, {} ],
  i18n: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "93789C/shtIL6entYsZPjee", "i18n");
    "use strict";
    var Polyglot = require("polyglot");
    var data = "zh" === cc.sys.language ? require("zh") : require("en");
    var polyglot = new Polyglot({
      phrases: data,
      allowMissing: true
    });
    module.exports = {
      init: function init(language) {
        lang = language;
        data = require("zh" === language ? "zh" : "en");
        polyglot.replace(data);
      },
      t: function t(key, opt) {
        return polyglot.t(key, opt);
      }
    };
    cc._RF.pop();
  }, {
    en: "en",
    polyglot: "polyglot",
    zh: "zh"
  } ],
  impulse: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c86d9dH8xxCO5ledaP2gIZs", "impulse");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Impulse = function(_super) {
      __extends(Impulse, _super);
      function Impulse() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.impulse = new cc.Vec3();
        _this.worldPoint = new cc.Vec3();
        _this.localPoint = new cc.Vec3();
        return _this;
      }
      Impulse.prototype.start = function() {};
      Impulse.prototype.onWorldImpulse = function() {
        var rigidbody = this.getComponent(cc.RigidBody3D);
        rigidbody && rigidbody.applyImpulse(this.impulse, this.worldPoint);
      };
      Impulse.prototype.onLocalImpulse = function() {
        var rigidbody = this.getComponent(cc.RigidBody3D);
        rigidbody && rigidbody.applyLocalImpulse(this.impulse, this.localPoint);
      };
      __decorate([ property ], Impulse.prototype, "impulse", void 0);
      __decorate([ property ], Impulse.prototype, "worldPoint", void 0);
      __decorate([ property ], Impulse.prototype, "localPoint", void 0);
      Impulse = __decorate([ ccclass ], Impulse);
      return Impulse;
    }(cc.Component);
    exports.default = Impulse;
    cc._RF.pop();
  }, {} ],
  lineTo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3ed7bVI5mxF+I75PHb0k24q", "lineTo");
    "use strict";
    cc.Class({
      extends: cc.Component,
      onLoad: function onLoad() {
        var g = this.getComponent(cc.Graphics);
        g.lineWidth = 10;
        g.fillColor.fromHEX("#ff0000");
        g.moveTo(-20, 0);
        g.lineTo(0, -100);
        g.lineTo(20, 0);
        g.lineTo(0, 100);
        g.close();
        g.stroke();
        g.fill();
      }
    });
    cc._RF.pop();
  }, {} ],
  linejoin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "23e05St68tC7aM880aEaUaS", "linejoin");
    "use strict";
    var LineJoin = cc.Graphics.LineJoin;
    var LineCap = cc.Graphics.LineCap;
    cc.Class({
      extends: cc.Component,
      onLoad: function onLoad() {
        this.graphics = this.getComponent(cc.Graphics);
        this.graphics.lineWidth = 20;
        this.time = 0;
        this.radius = 100;
        this.draw();
      },
      update: function update(dt) {
        this.time += .5 * dt;
        this.draw();
      },
      draw: function draw() {
        var graphics = this.graphics;
        graphics.clear();
        var rx = this.radius * Math.sin(this.time);
        var ry = -this.radius * Math.cos(this.time);
        graphics.lineCap = LineCap.BUTT;
        graphics.lineJoin = LineJoin.BEVEL;
        this.drawLine(-200, 0, rx, ry);
        graphics.lineJoin = LineJoin.MITER;
        this.drawLine(0, 0, rx, ry);
        graphics.lineJoin = LineJoin.ROUND;
        this.drawLine(200, 0, rx, ry);
        graphics.lineJoin = LineJoin.MITER;
        graphics.lineCap = LineCap.BUTT;
        this.drawLine(0, -125, rx, ry);
        graphics.lineCap = LineCap.SQUARE;
        this.drawLine(-200, -125, rx, ry);
        graphics.lineCap = LineCap.ROUND;
        this.drawLine(200, -125, rx, ry);
      },
      drawLine: function drawLine(x, y, rx, ry) {
        var graphics = this.graphics;
        graphics.moveTo(x + rx, y + ry);
        graphics.lineTo(x, y);
        graphics.lineTo(x - rx, y + ry);
        graphics.stroke();
      }
    });
    cc._RF.pop();
  }, {} ],
  loadDragonBonesCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a9c63c/3U5Gv7w0rm3g5wvj", "loadDragonBonesCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        dragonBone: {
          default: null,
          type: dragonBones.ArmatureDisplay
        }
      },
      dynamicCreate: function dynamicCreate() {
        var _this = this;
        if (this.dragonBone.dragonAtlasAsset) return;
        cc.resources.load("dragonBones/NewDragonTest", dragonBones.DragonBonesAsset, function(err, res) {
          err && cc.error(err);
          _this.dragonBone.dragonAsset = res;
          cc.resources.load("dragonBones/texture", dragonBones.DragonBonesAtlasAsset, _this.onComplete.bind(_this));
        });
      },
      onComplete: function onComplete(err, res) {
        err && cc.error(err);
        this.dragonBone.dragonAtlasAsset = res;
        this.dragonBone.armatureName = "armatureName";
        this.dragonBone.playAnimation("stand", 0);
      }
    });
    cc._RF.pop();
  }, {} ],
  loadResDir_example: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fee3dcLoaZCvrJ9FZrBngbb", "loadResDir_example");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        btnClearAll: cc.Node,
        label: cc.Prefab,
        scrollView: cc.ScrollView
      },
      _init: function _init() {
        this._assets = [];
        this._hasLoading = false;
        this.scrollView.content.height = 0;
        this.btnClearAll.active = false;
      },
      onLoad: function onLoad() {
        this._init();
      },
      _createLabel: function _createLabel(text) {
        var node = cc.instantiate(this.label);
        var label = node.getComponent(cc.Label);
        label.textKey = text;
        this.scrollView.content.addChild(node);
      },
      _clear: function _clear() {
        this.scrollView.content.removeAllChildren(true);
        for (var i = 0; i < this._assets.length; ++i) {
          var asset = this._assets[i];
          cc.assetManager.releaseAsset(asset);
        }
      },
      onClearAll: function onClearAll() {
        this.scrollView.content.height = 0;
        this.btnClearAll.active = false;
        this._clear();
      },
      onLoadAll: function onLoadAll() {
        var _this = this;
        if (this._hasLoading) return;
        this._hasLoading = true;
        this._clear();
        this._createLabel("Load All Assets");
        this.scrollView.scrollToTop();
        this.btnClearAll.active = false;
        cc.resources.loadDir("test_assets", function(err, assets) {
          if (!_this.isValid) return;
          _this._assets = assets;
          for (var i = 0; i < assets.length; ++i) {
            var asset = assets[i];
            var info = asset.toString();
            info || (info = asset instanceof cc.JsonAsset ? JSON.stringify(asset.json, null, 4) : info || asset.name || cc.js.getClassName(asset));
            _this._createLabel(info);
          }
          _this._hasLoading = false;
          _this.btnClearAll.active = true;
        });
      },
      onLoadSpriteFrameAll: function onLoadSpriteFrameAll() {
        var _this2 = this;
        if (this._hasLoading) return;
        this._hasLoading = true;
        this._clear();
        this._createLabel("Load All Sprite Frame");
        this.scrollView.scrollToTop();
        this.btnClearAll.active = false;
        cc.resources.loadDir("test_assets", cc.SpriteFrame, function(err, assets) {
          if (!_this2.isValid) return;
          _this2._assets = assets;
          for (var i = 0; i < assets.length; ++i) {
            var asset = assets[i];
            _this2._createLabel(asset.name);
          }
          _this2._hasLoading = false;
          _this2.btnClearAll.active = true;
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  "mesh-texture": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "95a3dIihBlE1bM4psBuANTA", "mesh-texture");
    "use strict";
    var gfx = cc.gfx;
    cc.Class({
      extends: cc.Component,
      editor: {
        executeInEditMode: true
      },
      properties: {
        speed: 50
      },
      start: function start() {
        var vfmt = new gfx.VertexFormat([ {
          name: gfx.ATTR_POSITION,
          type: gfx.ATTR_TYPE_FLOAT32,
          num: 2
        }, {
          name: gfx.ATTR_UV0,
          type: gfx.ATTR_TYPE_FLOAT32,
          num: 2
        } ]);
        var mesh = new cc.Mesh();
        mesh.init(vfmt, 9, true);
        this.mesh = mesh;
        this.vertexes = [ cc.v2(-100, 100), cc.v2(0, 100), cc.v2(100, 100), cc.v2(-100, 0), cc.v2(0, 0), cc.v2(100, 0), cc.v2(-100, -100), cc.v2(0, -100), cc.v2(100, -100) ];
        mesh.setVertices(gfx.ATTR_POSITION, this.vertexes);
        mesh.setVertices(gfx.ATTR_UV0, [ cc.v2(0, 0), cc.v2(.5, 0), cc.v2(1, 0), cc.v2(0, .5), cc.v2(.5, .5), cc.v2(1, .5), cc.v2(0, 1), cc.v2(.5, 1), cc.v2(1, 1) ]);
        mesh.setIndices([ 0, 1, 3, 1, 4, 3, 1, 2, 4, 2, 5, 4, 3, 4, 6, 4, 7, 6, 4, 5, 7, 5, 8, 7 ]);
        var renderer = this.node.getComponent(cc.MeshRenderer);
        renderer || (renderer = this.node.addComponent(cc.MeshRenderer));
        renderer.mesh = mesh;
        this.mesh = mesh;
      },
      update: function update(dt) {
        false;
        var lm = this.vertexes[3];
        var rm = this.vertexes[5];
        (lm.x < -200 && this.speed < 0 || lm.x > 0 && this.speed > 0) && (this.speed *= -1);
        lm.x += dt * this.speed;
        rm.x += -dt * this.speed;
        this.mesh.setVertices(gfx.ATTR_POSITION, this.vertexes);
      }
    });
    cc._RF.pop();
  }, {} ],
  mesh: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "85b7cwUbltFwab1+S5HCilZ", "mesh");
    "use strict";
    var chroma = require("chroma");
    var gfx = cc.gfx;
    cc.Class({
      extends: cc.Component,
      editor: {
        executeInEditMode: true
      },
      properties: {},
      start: function start() {
        this.lighten = 0;
        this.lightenDirection = 1;
        this.c1 = cc.color();
        this.c2 = cc.color();
        var vfmtPosColor = new gfx.VertexFormat([ {
          name: gfx.ATTR_POSITION,
          type: gfx.ATTR_TYPE_FLOAT32,
          num: 3
        }, {
          name: gfx.ATTR_COLOR,
          type: gfx.ATTR_TYPE_UINT8,
          num: 4,
          normalize: true
        } ]);
        var mesh = new cc.Mesh();
        mesh.init(vfmtPosColor, 8, true);
        this.mesh = mesh;
        mesh.setVertices(gfx.ATTR_POSITION, [ cc.v3(-100, 100, 100), cc.v3(-100, -100, 100), cc.v3(100, 100, 100), cc.v3(100, -100, 100), cc.v3(-100, 100, -100), cc.v3(-100, -100, -100), cc.v3(100, 100, -100), cc.v3(100, -100, -100) ]);
        mesh._minPos = cc.v3(-100, -100, -100);
        mesh._maxPos = cc.v3(100, 100, 100);
        this.updateColor(cc.Color.RED, cc.Color.BLUE);
        mesh.setIndices([ 0, 1, 2, 1, 3, 2, 0, 6, 4, 0, 2, 6, 2, 7, 6, 2, 3, 7, 0, 5, 4, 0, 1, 5, 1, 7, 5, 1, 3, 7, 4, 5, 6, 5, 7, 6 ]);
        var renderer = this.node.getComponent(cc.MeshRenderer);
        renderer || (renderer = this.node.addComponent(cc.MeshRenderer));
        renderer.mesh = mesh;
      },
      updateColor: function updateColor(c1, c2) {
        this.mesh.setVertices(gfx.ATTR_COLOR, [ c1, c1, c1, c1, c2, c2, c2, c2 ]);
      },
      update: function update(dt) {
        false;
        var c1 = chroma.hsl(330, 1, this.lighten);
        var c2 = chroma.hsl(100, 1, 1 - this.lighten);
        this.lighten += .1 * dt * this.lightenDirection;
        (this.lighten > 1 && this.lightenDirection > 0 || this.lighten < 0 && this.lightenDirection < 0) && (this.lightenDirection *= -1);
        this.c1.fromHEX(c1.toString());
        this.c2.fromHEX(c2.toString());
        this.updateColor(this.c1, this.c2);
      }
    });
    cc._RF.pop();
  }, {
    chroma: "chroma"
  } ],
  "minimap-with-camera-rect": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1cac6uuFWFDhbIanRytsZ2s", "minimap-with-camera-rect");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
    var MINI_CAMERA_Z = 100;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.miniMapCamera = null;
        _this.cameraInfo = null;
        _this.cameraPos = cc.v3(0, 0, MINI_CAMERA_Z);
        _this.cameraOrthoSize = 1;
        _this._tweens = [];
        return _this;
      }
      NewClass.prototype.start = function() {
        true;
        var t = cc.tween(this.target).by(6, {
          angle: 360
        }).repeatForever().start();
        this._tweens.push(t);
        t = cc.tween(this).set({
          cameraPos: cc.v3(0, 0, MINI_CAMERA_Z),
          cameraOrthoSize: cc.Canvas.instance.node.height / 2
        }).to(6, {
          cameraOrthoSize: this.target.width / 2
        }).delay(1).to(3, {
          cameraPos: cc.v3(100, 0, MINI_CAMERA_Z)
        }).union().repeatForever().start();
        this._tweens.push(t);
      };
      NewClass.prototype.onDestroy = function() {
        this._tweens.forEach(function(t) {
          t.stop();
        });
      };
      NewClass.prototype.update = function(dt) {
        var _a = cc.Canvas.instance.node, canvasWidth = _a.width, canvasHeight = _a.height;
        var deviceWidth = canvasWidth, deviceHeight = canvasHeight;
        true;
        deviceWidth = cc.game.canvas.width / cc.view._scaleX;
        deviceHeight = cc.game.canvas.height / cc.view._scaleY;
        var orthoHeight = this.cameraOrthoSize;
        var orthoWidth = orthoHeight * (deviceWidth / deviceHeight);
        var rect = this.miniMapCamera.rect;
        this.cameraInfo.clear();
        this.cameraInfo.rect((rect.x - .5) * deviceWidth, (rect.y - .5) * deviceHeight, rect.width * deviceWidth, rect.height * deviceHeight);
        this.cameraInfo.strokeColor = cc.Color.YELLOW;
        this.cameraInfo.stroke();
        this.cameraInfo.rect(this.cameraPos.x - orthoWidth, this.cameraPos.y - orthoHeight, 2 * orthoWidth, 2 * orthoHeight);
        this.cameraInfo.strokeColor = cc.Color.BLUE;
        this.cameraInfo.stroke();
        this.miniMapCamera.node.position = this.cameraPos;
        this.miniMapCamera.orthoSize = this.cameraOrthoSize;
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "target", void 0);
      __decorate([ property(cc.Camera) ], NewClass.prototype, "miniMapCamera", void 0);
      __decorate([ property(cc.Graphics) ], NewClass.prototype, "cameraInfo", void 0);
      NewClass = __decorate([ ccclass, executeInEditMode ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  "minimap-with-rendertexture": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "98c5bSgS09EEplaizshzGVD", "minimap-with-rendertexture");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
    var MINI_CAMERA_Z = 100;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.miniMapCamera = null;
        _this.cameraInfo = null;
        _this.renderTextureSprite = null;
        _this.cameraPos = cc.v3(0, 0, MINI_CAMERA_Z);
        _this.cameraOrthoSize = 1;
        _this._renderTexture = new cc.RenderTexture();
        _this._tweens = [];
        return _this;
      }
      NewClass.prototype.onEnable = function() {
        cc.view.on("design-resolution-changed", this._delayInitRenderTexture, this);
      };
      NewClass.prototype.onDisable = function() {
        cc.view.off("design-resolution-changed", this._delayInitRenderTexture, this);
      };
      NewClass.prototype._delayInitRenderTexture = function() {
        this.scheduleOnce(this._initRenderTexture.bind(this), .1);
      };
      NewClass.prototype._initRenderTexture = function() {
        var _a = cc.Canvas.instance.node, canvasWidth = _a.width, canvasHeight = _a.height;
        var width = .2 * canvasWidth;
        var height = .2 * canvasHeight;
        this._renderTexture.initWithSize(width, height);
        this.miniMapCamera.targetTexture = this._renderTexture;
        var spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(this._renderTexture);
        this.renderTextureSprite.spriteFrame = spriteFrame;
        var deviceWidth = canvasWidth, deviceHeight = canvasHeight;
        true;
        deviceWidth = cc.game.canvas.width / cc.view._scaleX;
        deviceHeight = cc.game.canvas.height / cc.view._scaleY;
        var node = this.renderTextureSprite.node;
        node.x = deviceWidth / 2 - width / 2;
        node.y = deviceHeight / 2 - height / 2;
        node.width = width;
        node.height = height;
      };
      NewClass.prototype.start = function() {
        this._initRenderTexture();
        true;
        var t = cc.tween(this.target).by(6, {
          angle: 360
        }).repeatForever().start();
        this._tweens.push(t);
        t = cc.tween(this).set({
          cameraPos: cc.v3(0, 0, MINI_CAMERA_Z),
          cameraOrthoSize: cc.Canvas.instance.node.height / 2
        }).to(6, {
          cameraOrthoSize: this.target.width / 2
        }).delay(1).to(3, {
          cameraPos: cc.v3(100, 0, MINI_CAMERA_Z)
        }).union().repeatForever().start();
        this._tweens.push(t);
      };
      NewClass.prototype.onDestroy = function() {
        this._tweens.forEach(function(t) {
          t.stop();
        });
      };
      NewClass.prototype.update = function(dt) {
        var orthoHeight = this.cameraOrthoSize;
        var orthoWidth = orthoHeight * (this._renderTexture.width / this._renderTexture.height);
        this.cameraInfo.clear();
        var renderTextureNode = this.renderTextureSprite.node;
        this.cameraInfo.rect(renderTextureNode.x - renderTextureNode.width / 2, renderTextureNode.y - renderTextureNode.height / 2, renderTextureNode.width, renderTextureNode.height);
        this.cameraInfo.strokeColor = cc.Color.YELLOW;
        this.cameraInfo.stroke();
        this.cameraInfo.rect(this.cameraPos.x - orthoWidth, this.cameraPos.y - orthoHeight, 2 * orthoWidth, 2 * orthoHeight);
        this.cameraInfo.strokeColor = cc.Color.BLUE;
        this.cameraInfo.stroke();
        this.miniMapCamera.node.position = this.cameraPos;
        this.miniMapCamera.orthoSize = this.cameraOrthoSize;
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "target", void 0);
      __decorate([ property(cc.Camera) ], NewClass.prototype, "miniMapCamera", void 0);
      __decorate([ property(cc.Graphics) ], NewClass.prototype, "cameraInfo", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "renderTextureSprite", void 0);
      NewClass = __decorate([ ccclass, executeInEditMode ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  move: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "862fcTVf5BPxrSAyb+WPVzB", "move");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Move = function(_super) {
      __extends(Move, _super);
      function Move() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.mx = true;
        _this.my = true;
        _this.mz = true;
        _this.originPos = new cc.Vec3();
        _this.nowPos = new cc.Vec3();
        _this.speed = 1;
        _this.dis = 30;
        return _this;
      }
      Move.prototype.start = function() {
        this.nowPos.x = this.originPos.x = this.node.x;
        this.nowPos.y = this.originPos.y = this.node.y;
        this.nowPos.z = this.originPos.z = this.node.z;
        Math.random() > .5 && (this.speed *= -1);
      };
      Move.prototype.update = function(dt) {
        var dis = cc.Vec3.distance(this.originPos, this.nowPos);
        dis > this.dis && (this.speed *= -1);
        if (this.mx) {
          this.nowPos.x += this.speed;
          this.node.x = this.nowPos.x;
        }
        if (this.my) {
          this.nowPos.y += this.speed;
          this.node.y = this.nowPos.y;
        }
        if (this.mz) {
          this.nowPos.z += this.speed;
          this.node.z = this.nowPos.z;
        }
      };
      __decorate([ property ], Move.prototype, "mx", void 0);
      __decorate([ property ], Move.prototype, "my", void 0);
      __decorate([ property ], Move.prototype, "mz", void 0);
      __decorate([ property ], Move.prototype, "speed", void 0);
      __decorate([ property ], Move.prototype, "dis", void 0);
      Move = __decorate([ ccclass ], Move);
      return Move;
    }(cc.Component);
    exports.default = Move;
    cc._RF.pop();
  }, {} ],
  "moving-objects": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6d056HwAmhA7ZTa6tqf8K23", "moving-objects");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        tempPrefab: {
          default: null,
          type: cc.Node
        },
        camera: {
          default: null,
          type: cc.Node
        },
        root: {
          default: null,
          type: cc.Node
        },
        moveSpeed: 100,
        nodeCount: 2e3,
        _useCamera: true,
        useCamera: {
          get: function get() {
            return this._useCamera;
          },
          set: function set(v) {
            if (this._useCamera === v) return;
            this._useCamera = v;
            if (true, this.movingNode) {
              this.movingNode = v ? this.camera : this.root;
              this.camera.x = this.root.x = 0;
              this.moveSpeed = -this.moveSpeed;
            }
          }
        }
      },
      onEnable: function onEnable() {},
      onDisable: function onDisable() {},
      onLoad: function onLoad() {
        console.time("move-objects : onLoad");
        for (var i = 0; i < this.nodeCount; i++) {
          var node = cc.instantiate(this.tempPrefab);
          node.x = 960 * (Math.random() - .5);
          node.y = 640 * (Math.random() - .5);
          node.parent = this.root;
        }
        this.movingNode = this._useCamera ? this.camera : this.root;
        console.timeEnd("move-objects : onLoad");
      },
      update: function update(dt) {
        this.movingNode.x += this.moveSpeed * dt;
        (this.moveSpeed > 0 && this.movingNode.x > 900 || this.moveSpeed < 0 && this.movingNode.x < -900) && (this.moveSpeed *= -1);
      },
      useCameraChanged: function useCameraChanged(toggle) {
        this.useCamera = toggle.isChecked;
        this.root.group = this.useCamera ? "Actor" : "Default";
      }
    });
    cc._RF.pop();
  }, {} ],
  polyglot: [ function(require, module, exports) {
    (function(global) {
      "use strict";
      cc._RF.push(module, "69decSgpRlE1rzEKp0RzG3V", "polyglot");
      "use strict";
      (function(root, factory) {
        "function" === typeof define && define.amd ? define([], function() {
          return factory(root);
        }) : "object" === typeof exports ? module.exports = factory(root) : root.Polyglot = factory(root);
      })("undefined" !== typeof global ? global : void 0, function(root) {
        var replace = String.prototype.replace;
        function Polyglot(options) {
          options = options || {};
          this.phrases = {};
          this.extend(options.phrases || {});
          this.currentLocale = options.locale || "en";
          this.allowMissing = !!options.allowMissing;
          this.warn = options.warn || warn;
        }
        Polyglot.VERSION = "1.0.0";
        Polyglot.prototype.locale = function(newLocale) {
          newLocale && (this.currentLocale = newLocale);
          return this.currentLocale;
        };
        Polyglot.prototype.extend = function(morePhrases, prefix) {
          var phrase;
          for (var key in morePhrases) if (morePhrases.hasOwnProperty(key)) {
            phrase = morePhrases[key];
            prefix && (key = prefix + "." + key);
            "object" === typeof phrase ? this.extend(phrase, key) : this.phrases[key] = phrase;
          }
        };
        Polyglot.prototype.unset = function(morePhrases, prefix) {
          var phrase;
          if ("string" === typeof morePhrases) delete this.phrases[morePhrases]; else for (var key in morePhrases) if (morePhrases.hasOwnProperty(key)) {
            phrase = morePhrases[key];
            prefix && (key = prefix + "." + key);
            "object" === typeof phrase ? this.unset(phrase, key) : delete this.phrases[key];
          }
        };
        Polyglot.prototype.clear = function() {
          this.phrases = {};
        };
        Polyglot.prototype.replace = function(newPhrases) {
          this.clear();
          this.extend(newPhrases);
        };
        Polyglot.prototype.t = function(key, options) {
          var phrase, result;
          options = null == options ? {} : options;
          "number" === typeof options && (options = {
            smart_count: options
          });
          if ("string" === typeof this.phrases[key]) phrase = this.phrases[key]; else if ("string" === typeof options._) phrase = options._; else if (this.allowMissing) phrase = key; else {
            this.warn('Missing translation for key: "' + key + '"');
            result = key;
          }
          if ("string" === typeof phrase) {
            options = clone(options);
            result = choosePluralForm(phrase, this.currentLocale, options.smart_count);
            result = interpolate(result, options);
          }
          return result;
        };
        Polyglot.prototype.has = function(key) {
          return key in this.phrases;
        };
        var delimeter = "||||";
        var pluralTypes = {
          chinese: function chinese(n) {
            return 0;
          },
          german: function german(n) {
            return 1 !== n ? 1 : 0;
          },
          french: function french(n) {
            return n > 1 ? 1 : 0;
          },
          russian: function russian(n) {
            return n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
          },
          czech: function czech(n) {
            return 1 === n ? 0 : n >= 2 && n <= 4 ? 1 : 2;
          },
          polish: function polish(n) {
            return 1 === n ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
          },
          icelandic: function icelandic(n) {
            return n % 10 !== 1 || n % 100 === 11 ? 1 : 0;
          }
        };
        var pluralTypeToLanguages = {
          chinese: [ "fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh" ],
          german: [ "da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv" ],
          french: [ "fr", "tl", "pt-br" ],
          russian: [ "hr", "ru" ],
          czech: [ "cs", "sk" ],
          polish: [ "pl" ],
          icelandic: [ "is" ]
        };
        function langToTypeMap(mapping) {
          var type, langs, l, ret = {};
          for (type in mapping) if (mapping.hasOwnProperty(type)) {
            langs = mapping[type];
            for (l in langs) ret[langs[l]] = type;
          }
          return ret;
        }
        var trimRe = /^\s+|\s+$/g;
        function trim(str) {
          return replace.call(str, trimRe, "");
        }
        function choosePluralForm(text, locale, count) {
          var ret, texts, chosenText;
          if (null != count && text) {
            texts = text.split(delimeter);
            chosenText = texts[pluralTypeIndex(locale, count)] || texts[0];
            ret = trim(chosenText);
          } else ret = text;
          return ret;
        }
        function pluralTypeName(locale) {
          var langToPluralType = langToTypeMap(pluralTypeToLanguages);
          return langToPluralType[locale] || langToPluralType.en;
        }
        function pluralTypeIndex(locale, count) {
          return pluralTypes[pluralTypeName(locale)](count);
        }
        var dollarRegex = /\$/g;
        var dollarBillsYall = "$$$$";
        function interpolate(phrase, options) {
          for (var arg in options) if ("_" !== arg && options.hasOwnProperty(arg)) {
            var replacement = options[arg];
            "string" === typeof replacement && (replacement = replace.call(options[arg], dollarRegex, dollarBillsYall));
            phrase = replace.call(phrase, new RegExp("%\\{" + arg + "\\}", "g"), replacement);
          }
          return phrase;
        }
        function warn(message) {
          root.console && root.console.warn && root.console.warn("WARNING: " + message);
        }
        function clone(source) {
          var ret = {};
          for (var prop in source) ret[prop] = source[prop];
          return ret;
        }
        return Polyglot;
      });
      cc._RF.pop();
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {} ],
  raycast: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "99487EWEA1JVpLMAPptRiG6", "raycast");
    "use strict";
    var WHITE = cc.Color.WHITE;
    cc.Class({
      extends: cc.Component,
      properties: {
        mesh: cc.Node
      },
      start: function start() {
        var canvas = cc.find("Canvas");
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.touchPos = null;
        this.results = [];
      },
      onTouchStart: function onTouchStart(event) {
        this.touchPos = event.touch.getLocation();
      },
      onTouchMove: function onTouchMove(event) {
        this.touchPos = event.touch.getLocation();
      },
      onTouchEnd: function onTouchEnd(event) {
        this.touchPos = null;
      },
      raycast: function raycast(pos) {
        var ray = cc.Camera.main.getRay(pos);
        return cc.geomUtils.intersect.raycast(this.node, ray);
      },
      update: function update(dt) {
        for (var i = 0; i < this.results.length; i++) this.results[i].node.opacity = 255;
        this.results.length = 0;
        if (!this.touchPos) return;
        var ray = cc.Camera.main.getRay(this.touchPos);
        var results = cc.geomUtils.intersect.raycast(this.node, ray);
        if (results.length > 0) {
          var distance = results[0].distance;
          var d = cc.vmath.vec3.normalize(cc.v3(), ray.d);
          var p = cc.vmath.vec3.scaleAndAdd(cc.v3(), ray.o, d, distance);
          this.mesh.position = p;
        }
        this.results = results;
      }
    });
    cc._RF.pop();
  }, {} ],
  raytest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "938eaQ89X9EKrhzOMm1ufOB", "raytest");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ERaycastType;
    (function(ERaycastType) {
      ERaycastType[ERaycastType["ALL"] = 0] = "ALL";
      ERaycastType[ERaycastType["CLOSEST"] = 1] = "CLOSEST";
    })(ERaycastType || (ERaycastType = {}));
    var RayTest = function(_super) {
      __extends(RayTest, _super);
      function RayTest() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.defaultMaterial = null;
        _this.rayMaterial = null;
        _this.rayState = null;
        _this._raycastType = ERaycastType.ALL;
        _this._maxDistance = 1e5;
        _this._rayTool = null;
        return _this;
      }
      RayTest.prototype.start = function() {
        this._rayTool = cc.director.getPhysics3DManager();
        var canvas = cc.find("Canvas");
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
      };
      RayTest.prototype.switchRay = function() {
        if (this._raycastType == ERaycastType.ALL) {
          this._raycastType = ERaycastType.CLOSEST;
          this.rayState.string = "ray close";
        } else {
          this._raycastType = ERaycastType.ALL;
          this.rayState.string = "ray all";
        }
      };
      RayTest.prototype.onTouchStart = function(event) {
        this.resetAll();
        var touchLoc = event.touch.getLocation();
        var ray = cc.Camera.main.getRay(touchLoc);
        switch (this._raycastType) {
         case ERaycastType.ALL:
          var results = this._rayTool.raycast(ray, "Ball", this._maxDistance);
          if (results) for (var i = 0; i < results.length; i++) {
            var item = results[i];
            var modelCom = item.collider.node.getComponent(cc.MeshRenderer);
            modelCom.setMaterial(0, this.rayMaterial);
            modelCom.markForRender(true);
          }
          break;

         case ERaycastType.CLOSEST:
          var result = this._rayTool.raycastClosest(ray, "Ball", this._maxDistance);
          if (result) {
            var modelCom = result.collider.node.getComponent(cc.MeshRenderer);
            modelCom.setMaterial(0, this.rayMaterial);
            modelCom.markForRender(true);
          }
        }
      };
      RayTest.prototype.resetAll = function() {
        for (var i = 0; i < this.node.children.length; i++) {
          if ("Sphere2" == this.node.children[i].name) continue;
          var mesh = this.node.children[i].getComponent(cc.MeshRenderer);
          mesh.setMaterial(0, this.defaultMaterial);
          mesh.markForRender(true);
        }
      };
      __decorate([ property({
        type: cc.Material
      }) ], RayTest.prototype, "defaultMaterial", void 0);
      __decorate([ property({
        type: cc.Material
      }) ], RayTest.prototype, "rayMaterial", void 0);
      __decorate([ property({
        type: cc.Label
      }) ], RayTest.prototype, "rayState", void 0);
      RayTest = __decorate([ ccclass ], RayTest);
      return RayTest;
    }(cc.Component);
    exports.default = RayTest;
    cc._RF.pop();
  }, {} ],
  rect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2a7cahCMIJCaZpdzIZPkHsp", "rect");
    "use strict";
    cc.Class({
      extends: cc.Component,
      onLoad: function onLoad() {
        var g = this.getComponent(cc.Graphics);
        g.lineWidth = 10;
        g.fillColor.fromHEX("#ff0000");
        g.rect(-250, 0, 200, 100);
        g.roundRect(50, 0, 200, 100, 20);
        g.stroke();
        g.fill();
      }
    });
    cc._RF.pop();
  }, {} ],
  recursiveTask: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1bdf4Sc2zlNZI/eLikUgkJ3", "recursiveTask");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        label: require("LabelLocalized")
      },
      run: function run() {
        this.schedule(this.task1, 1, 0, 1);
      },
      task1: function task1() {
        this.unschedule(this.task1);
        this.label.textKey = "cases/05_scripting/04_scheduler/recursiveScheduler.fire.1";
        this.schedule(this.task2, 1, 0, 1);
      },
      task2: function task2() {
        this.label.textKey = "cases/05_scripting/04_scheduler/recursiveScheduler.fire.2";
      }
    });
    cc._RF.pop();
  }, {
    LabelLocalized: "LabelLocalized"
  } ],
  rotatetest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1483bYge1xKMZsPxGtmoqbR", "rotatetest");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Rotate = function(_super) {
      __extends(Rotate, _super);
      function Rotate() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.mx = true;
        _this.my = true;
        _this.mz = true;
        _this.speed = 1;
        _this.tempAngle = new cc.Vec3();
        return _this;
      }
      Rotate.prototype.start = function() {
        Math.random() > .5 && (this.speed *= -1);
        cc.Vec3.copy(this.tempAngle, this.node.eulerAngles);
      };
      Rotate.prototype.update = function(dt) {
        var euler = this.tempAngle;
        this.mx && (euler.x += this.speed);
        this.my && (euler.y += this.speed);
        this.mz && (euler.z += this.speed);
        Math.abs(euler.x - 90) < .001 && (euler.x = 0);
        Math.abs(euler.y - 90) < .001 && (euler.y = 0);
        Math.abs(euler.z - 90) < .001 && (euler.z = 0);
        this.node.eulerAngles = euler;
      };
      __decorate([ property ], Rotate.prototype, "mx", void 0);
      __decorate([ property ], Rotate.prototype, "my", void 0);
      __decorate([ property ], Rotate.prototype, "mz", void 0);
      __decorate([ property ], Rotate.prototype, "speed", void 0);
      Rotate = __decorate([ ccclass ], Rotate);
      return Rotate;
    }(cc.Component);
    exports.default = Rotate;
    cc._RF.pop();
  }, {} ],
  rotate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b8182lpDXBKXKHB4KDgd7AY", "rotate");
    "use strict";
    cc.Class({
      extends: cc.Component,
      update: function update() {
        this.node.eulerAngles = cc.v3(0, Date.now() / 10, 0);
      }
    });
    cc._RF.pop();
  }, {} ],
  scale: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a8f60b0mmhIS4jYmUffQjsT", "scale");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Scale = function(_super) {
      __extends(Scale, _super);
      function Scale() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.mx = true;
        _this.my = true;
        _this.mz = true;
        _this.speed = .001;
        _this.originScale = new cc.Vec3(1, 1, 1);
        _this.tempScale = new cc.Vec3(1, 1, 1);
        return _this;
      }
      Scale.prototype.start = function() {
        this.originScale.x = this.node.scaleX;
        this.originScale.y = this.node.scaleY;
        this.originScale.z = this.node.scaleZ;
        cc.Vec3.copy(this.tempScale, this.originScale);
      };
      Scale.prototype.update = function(dt) {
        var scale = this.tempScale;
        this.mx && (scale.x += this.speed);
        this.my && (scale.y += this.speed);
        this.mz && (scale.z += this.speed);
        (scale.x - this.originScale.x > 200 || scale.x - this.originScale.x < 0 || scale.y - this.originScale.y > 200 || scale.y - this.originScale.y < 0 || scale.z - this.originScale.z > 200 || scale.z - this.originScale.z < 0) && (this.speed *= -1);
        this.node.scaleX = scale.x;
        this.node.scaleY = scale.y;
        this.node.scaleZ = scale.z;
      };
      __decorate([ property ], Scale.prototype, "mx", void 0);
      __decorate([ property ], Scale.prototype, "my", void 0);
      __decorate([ property ], Scale.prototype, "mz", void 0);
      __decorate([ property ], Scale.prototype, "speed", void 0);
      Scale = __decorate([ ccclass ], Scale);
      return Scale;
    }(cc.Component);
    exports.default = Scale;
    cc._RF.pop();
  }, {} ],
  scheduleCallbacks: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "930deImxoZIkp6ugjMU5ULW", "scheduleCallbacks");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        time: {
          default: 5
        },
        counter: cc.Label
      },
      _callback: function _callback() {
        this.node.stopAllActions();
        this.node.runAction(this.seq);
        this.repeat ? this.counting = true : this.counting = false;
        this.time = 5;
        this.counter.string = this.time.toFixed(2) + " s";
      },
      onLoad: function onLoad() {
        var squashAction = cc.scaleTo(.2, 1, .6);
        var stretchAction = cc.scaleTo(.2, 1, 1.2);
        var scaleBackAction = cc.scaleTo(.1, 1, 1);
        var moveUpAction = cc.moveBy(1, cc.v2(0, 100)).easing(cc.easeCubicActionOut());
        var moveDownAction = cc.moveBy(1, cc.v2(0, -100)).easing(cc.easeCubicActionIn());
        this.seq = cc.sequence(squashAction, stretchAction, moveUpAction, scaleBackAction, moveDownAction, squashAction, scaleBackAction);
        this.counter.string = this.time.toFixed(2) + " s";
        this.counting = false;
        this.repeat = false;
      },
      update: function update(dt) {
        if (this.counting) {
          this.time -= dt;
          this.counter.string = this.time.toFixed(2) + " s";
        }
      },
      stopCounting: function stopCounting() {
        this.unscheduleAllCallbacks();
        this.counting = false;
        this.time = 5;
        this.counter.string = this.time.toFixed(2) + " s";
      },
      repeatSchedule: function repeatSchedule() {
        this.stopCounting();
        this.schedule(this._callback, 5);
        this.repeat = true;
        this.counting = true;
      },
      oneSchedule: function oneSchedule() {
        this.stopCounting();
        this.scheduleOnce(this._callback, 5);
        this.repeat = false;
        this.counting = true;
      },
      cancelSchedules: function cancelSchedules() {
        this.repeat = false;
        this.stopCounting();
      }
    });
    cc._RF.pop();
  }, {} ],
  "screen-to-world-point": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ca9ec5p7O9EHYbE772Zf4dj", "screen-to-world-point");
    "use strict";
    var WHITE = cc.Color.WHITE;
    cc.Class({
      extends: cc.Component,
      properties: {
        box: cc.Node,
        distanceLabel: cc.Label
      },
      start: function start() {
        var canvas = cc.find("Canvas");
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.distance = .5;
      },
      onTouchStart: function onTouchStart(event) {
        this.moveBox(event.touch.getLocation());
      },
      onTouchMove: function onTouchMove(event) {
        this.moveBox(event.touch.getLocation());
      },
      moveBox: function moveBox(touchPos) {
        var camera = cc.Camera.findCamera(this.box);
        var pos = camera.getScreenToWorldPoint(cc.v3(touchPos.x, touchPos.y, this.distance));
        this.box.position = this.box.parent.convertToNodeSpaceAR(pos);
      },
      distanceChanged: function distanceChanged(slider) {
        this.distance = parseFloat(slider.progress.toFixed(2));
        this.distanceLabel.string = "distance : " + this.distance;
      }
    });
    cc._RF.pop();
  }, {} ],
  "sine-waves": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "65147r484dHPoeDmtu3n5DT", "sine-waves");
    "use strict";
    var PI180 = Math.PI / 180;
    var PI2 = 2 * Math.PI;
    var HALFPI = Math.PI / 2;
    var Ease = {};
    Ease.linear = function(percent, amplitude) {
      return amplitude;
    };
    Ease.sinein = function(percent, amplitude) {
      return amplitude * (Math.sin(percent * Math.PI - HALFPI) + 1) * .5;
    };
    Ease.sineout = function(percent, amplitude) {
      return amplitude * (Math.sin(percent * Math.PI + HALFPI) + 1) * .5;
    };
    Ease.sineinout = function(percent, amplitude) {
      return amplitude * (Math.sin(percent * PI2 - HALFPI) + 1) * .5;
    };
    var EaseEnumOptins = {};
    for (var k in Ease) EaseEnumOptins[k] = -1;
    Ease.Enum = cc.Enum(EaseEnumOptins);
    var Waves = {};
    Waves.sine = function(x) {
      return Math.sin(x);
    };
    Waves.sign = function(x) {
      x = +x;
      if (0 === x || isNaN(x)) return x;
      return x > 0 ? 1 : -1;
    };
    Waves.square = function(x) {
      return Waves.sign(Math.sin(x * PI2));
    };
    Waves.sawtooth = function(x) {
      return 2 * (x - Math.floor(x + .5));
    };
    Waves.triangle = function(x) {
      return Math.abs(Waves.sawtooth(x));
    };
    var WavesEnumOptins = {};
    for (var _k in Waves) WavesEnumOptins[_k] = -1;
    Waves.Enum = cc.Enum(WavesEnumOptins);
    var Wave = cc.Class({
      name: "Wave",
      properties: {
        timeModifier: 1,
        amplitude: 50,
        wavelength: 50,
        segmentLength: 10,
        lineWidth: 1,
        waveType: {
          default: Waves.Enum.sine,
          type: Waves.Enum
        },
        easeType: {
          default: Ease.Enum.sinein,
          type: Ease.Enum
        },
        strokeColor: cc.color(255, 255, 255, 100)
      }
    });
    var SineWaves = cc.Class({
      extends: cc.Component,
      properties: {
        speed: 1,
        waves: {
          default: function _default() {
            return [ new Wave() ];
          },
          type: [ Wave ]
        }
      },
      onLoad: function onLoad() {
        this.time = 0;
        this.ctx = this.getComponent(cc.Graphics);
        this.ctx.lineCap = cc.Graphics.LineCap.BUTT;
        this.ctx.lineJoin = cc.Graphics.LineJoin.ROUND;
        var waves = this.waves;
        for (var i = 0, l = waves.length; i < l; i++) {
          waves[i].waveFn = Waves[Waves.Enum[waves[i].waveType]].bind(Waves);
          waves[i].easeFn = Ease[Ease.Enum[waves[i].easeType]].bind(Ease);
        }
      },
      update: function update(dt) {
        this.ctx.clear();
        this.yAxis = cc.visibleRect.height / 2;
        this.width = cc.visibleRect.width;
        this.waveWidth = .95 * this.width;
        this.waveLeft = .25 * this.width;
        this.time += dt;
        var waves = this.waves;
        for (var i = 0, l = waves.length; i < l; i++) {
          var timeModifier = this.waves[i].timeModifier || 1;
          this.drawWave(this.time * timeModifier, waves[i]);
        }
      },
      drawWave: function drawWave(time, options) {
        this.ctx.lineWidth = options.lineWidth;
        this.ctx.strokeColor = options.strokeColor;
        this.ctx.moveTo(0, this.yAxis);
        this.ctx.lineTo(this.waveLeft, this.yAxis);
        for (var i = 0; i < this.waveWidth; i += options.segmentLength) {
          var point = this.getPoint(time, i, options);
          this.ctx.lineTo(point.x, point.y);
        }
        this.ctx.lineTo(this.width, this.yAxis);
        this.ctx.stroke();
      },
      getPoint: function getPoint(time, position, options) {
        var x = time * this.speed + (-this.yAxis + position) / options.wavelength;
        var y = options.waveFn(x);
        var amplitude = options.easeFn(position / this.waveWidth, options.amplitude);
        x = position + this.waveLeft;
        y = amplitude * y + this.yAxis;
        return {
          x: x,
          y: y
        };
      }
    });
    module.exports = SineWaves;
    cc._RF.pop();
  }, {} ],
  stayOnBottomCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fd033SfPFpNVpqiToS/UUHg", "stayOnBottomCtrl");
    "use strict";
    cc.macro.ENABLE_TRANSPARENT_CANVAS = true;
    function randomNum(min, max) {
      return Math.random() * (max - min + 1) + min;
    }
    var TIPS = [ "\u8fd9\u4e2a\u662f\u4e00\u4e2a\u8303\u4f8b\uff0c\u8be5\u8303\u4f8b\u662f\u8ba9\u7528\u6237\u77e5\u9053\u5982\u4f55\u628a UI \u6e32\u67d3\u5230 VideoPlayer \u4e0a", "UI \u6e32\u67d3\u5230 VideoPlayer \u4e0a\u53ea\u9700\u4e09\u4e2a\u6b65\u9aa4\uff1a1\u3002\u521b\u5efa\u4ee3\u7801\u5f00\u542f cc.macro.ENABLE_TRANSPARENT_CANVAS 2\u3002\u8bbe\u7f6e\u6444\u50cf\u673a\u7684\u80cc\u666f\u989c\u8272\u7684\u900f\u660e\u5ea6\u4e3a\u96f6 3\u3002\u52fe\u9009 VideoPlayer \u7ec4\u4ef6\u4e0a\u7684 stayOnBottom \u5c5e\u6027 -- \u5c31 OK \u4e86", "UI \u5c45\u7136\u53ef\u4ee5\u663e\u793a\u5728 VidePlayer \u4e0a\u9762\u4e86\uff0c\ud83d\udc4d\ud83d\udc4d\ud83d\udc4d\ud83d\udc4d\ud83d\udc4d", "\u54c7\uff0c\u53ef\u4ee5\u505a\u5f39\u5e55\u529f\u80fd\u4e86... \ud83d\udc90\ud83d\udc90\ud83d\udc90\ud83d\udc90\ud83d\udc90", "\u54c7\uff0c\u53ef\u4ee5\u505a\u7ea6\u4f1a\u6e38\u620f\u4e86... \ud83d\udc90\ud83d\udc90\ud83d\udc90\ud83d\udc90\ud83d\udc90", "\u6ce8\u610f\uff1a\u8be5\u529f\u80fd\u53ea\u652f\u6301 web \u5e73\u53f0", "\u6ce8\u610f\uff1a\u8be5\u529f\u80fd\u7684\u6548\u679c\u5728\u5404\u4e2a\u6d4f\u89c8\u5668\u7684\u9650\u5236\u4e0b\u4e0d\u80fd\u4fdd\u6301\u6548\u679c\u4e00\u81f4", "\u6211\u662f\u6253\u9171\u6cb9\u7684...", "Cococs Creator \u662f\u6700\u68d2\u7684\uff0c\u4e0d\u63a5\u6536\u53cd\u9a73...", "\u524d\u9762\u7684\u8bf4\u7684\u5bf9...", "\u5176\u5b9e\u6211\u4e5f\u4e0d\u77e5\u9053\u8981\u8bf4\u4ec0\u4e48\uff0c\u53cd\u6b63\u53ea\u662f\u4e3a\u4e86\u5145\u6570\u7528\u800c\u5df2" ];
    cc.Class({
      extends: cc.Component,
      properties: {
        tempBarrage: cc.Prefab,
        videoPlayer: cc.VideoPlayer,
        barrageRoot: cc.Node,
        tips: cc.Node
      },
      start: function start() {
        this.__id = 0;
        this._animList = [];
        var node = cc.find("Canvas/Play");
        this.btnPlay = node.getComponent(cc.Button);
        this.btnPlay.interactable = true;
        node = cc.find("Canvas/Pause");
        this.btnPause = node.getComponent(cc.Button);
        this.btnPause.interactable = false;
        node = cc.find("Canvas/Stop");
        this.btnStop = node.getComponent(cc.Button);
        this.btnStop.interactable = false;
      },
      onCreateBarrage: function onCreateBarrage() {
        var _this = this;
        var node = cc.instantiate(this.tempBarrage);
        ++this.__id;
        node.___id = this.__id;
        node.y = randomNum(300, -120);
        node.parent = this.node;
        var r = randomNum(0, 255);
        var g = randomNum(0, 255);
        var b = randomNum(0, 255);
        node.color = cc.color(r, g, b);
        var label = node.getComponent(cc.Label);
        var idx = Math.floor(randomNum(0, TIPS.length - 1));
        label.string = TIPS[idx];
        var animComp = node.getComponent(cc.Animation);
        animComp.on("stop", function() {
          delete _this._animList[node.___id];
          node.destroy();
        });
        this._animList[this.__id] = animComp;
      },
      onClearBarrages: function onClearBarrages() {
        this._intervalID && clearInterval(this._intervalID);
        var keys = Object.keys(this._animList);
        for (var i = 0, len = keys.length; i < len; ++i) {
          var key = keys[i];
          var anim = this._animList[key];
          anim.node.destroy();
        }
        this._animList.length = 0;
      },
      onOpenBarrages: function onOpenBarrages() {
        var _this2 = this;
        this._intervalID = setInterval(function() {
          _this2.onCreateBarrage();
        }, 1e3);
        this.onPlayAnim();
      },
      onCloseBarrages: function onCloseBarrages() {
        this._intervalID && clearInterval(this._intervalID);
        this.onPauseAnim();
      },
      onPlayAnim: function onPlayAnim() {
        var keys = Object.keys(this._animList);
        for (var i = 0, len = keys.length; i < len; ++i) {
          var key = keys[i];
          var anim = this._animList[key];
          anim.getAnimationState("barrage-animClip").isPaused ? anim.resume() : anim.play();
        }
      },
      onPauseAnim: function onPauseAnim() {
        for (var key in this._animList) {
          var anim = this._animList[key];
          anim.pause();
        }
      },
      play: function play() {
        this.tips.active = false;
        this.btnPlay.interactable = false;
        this.btnPause.interactable = true;
        this.btnStop.interactable = true;
        this.videoPlayer.play();
        this.onOpenBarrages();
      },
      pause: function pause() {
        this.btnPlay.interactable = true;
        this.btnPause.interactable = false;
        this.btnStop.interactable = true;
        this.videoPlayer.pause();
        this.onCloseBarrages();
      },
      stop: function stop() {
        this.tips.active = true;
        this.btnPlay.interactable = true;
        this.btnPause.interactable = false;
        this.btnStop.interactable = false;
        this.videoPlayer.stop();
        this.onClearBarrages();
      }
    });
    cc._RF.pop();
  }, {} ],
  textureRenderUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a886773x+pEaJGtwGtEiE9q", "textureRenderUtils");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        camera: cc.Camera,
        label: cc.Label,
        _canvas: null
      },
      init: function init() {
        this.label.string = "";
        var texture = new cc.RenderTexture();
        texture.initWithSize(cc.visibleRect.width, cc.visibleRect.height, cc.gfx.RB_FMT_S8);
        this.camera.targetTexture = texture;
        this.texture = texture;
      },
      createImg: function createImg() {
        var dataURL = this._canvas.toDataURL("image/png");
        var img = document.createElement("img");
        img.src = dataURL;
        return img;
      },
      createCanvas: function createCanvas() {
        var width = this.texture.width;
        var height = this.texture.height;
        if (this._canvas) this.clearCanvas(); else {
          this._canvas = document.createElement("canvas");
          this._canvas.width = width;
          this._canvas.height = height;
        }
        var ctx = this._canvas.getContext("2d");
        this.camera.render();
        var data = this.texture.readPixels();
        var rowBytes = 4 * width;
        for (var row = 0; row < height; row++) {
          var srow = height - 1 - row;
          var imageData = ctx.createImageData(width, 1);
          var start = srow * width * 4;
          for (var i = 0; i < rowBytes; i++) imageData.data[i] = data[start + i];
          ctx.putImageData(imageData, 0, row);
        }
        return this._canvas;
      },
      showImage: function showImage(img) {
        var _this = this;
        var texture = new cc.Texture2D();
        texture.initWithElement(img);
        var spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(texture);
        var node = new cc.Node();
        var sprite = node.addComponent(cc.Sprite);
        sprite.spriteFrame = spriteFrame;
        node.zIndex = cc.macro.MAX_ZINDEX;
        node.parent = cc.director.getScene();
        var width = cc.winSize.width;
        var height = cc.winSize.height;
        node.x = width / 2;
        node.y = height / 2;
        node.on(cc.Node.EventType.TOUCH_START, function() {
          node.parent = null;
          _this.label.string = "";
          node.destroy();
        });
        this.captureAction(node, width, height);
      },
      captureAction: function captureAction(capture, width, height) {
        var scaleAction = cc.scaleTo(1, .3);
        var targetPos = cc.v2(width - width / 6, height / 4);
        var moveAction = cc.moveTo(1, targetPos);
        var spawn = cc.spawn(scaleAction, moveAction);
        capture.runAction(spawn);
        var blinkAction = cc.blink(.1, 1);
        this.node.runAction(blinkAction);
      },
      clearCanvas: function clearCanvas() {
        var ctx = this._canvas.getContext("2d");
        ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
      }
    });
    cc._RF.pop();
  }, {} ],
  "trigger-testing": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c094fuCuPBLNLvV8sYgZ74l", "trigger-testing");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.triggertesting = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var triggertesting = function(_super) {
      __extends(triggertesting, _super);
      function triggertesting() {
        var _this = _super.call(this) || this;
        _this._prev = [];
        _this.colliderMaterial = null;
        _this.unColliderMaterial = null;
        _this._colliderCount = 0;
        _this._enterType = "collision-enter";
        _this._stayType = "collision-stay";
        _this._exitType = "collision-exit";
        _this.isTrigger = false;
        _this.id = triggertesting_1._idCounter++;
        return _this;
      }
      triggertesting_1 = triggertesting;
      triggertesting.prototype.start = function() {
        if (this.isTrigger || false) {
          this._enterType = "trigger-enter";
          this._stayType = "trigger-stay";
          this._exitType = "trigger-exit";
        }
        var trigger = this.getComponent(cc.Collider3D);
        if (trigger) {
          trigger.on(this._enterType, this.onTrigger, this);
          trigger.on(this._stayType, this.onTrigger, this);
          trigger.on(this._exitType, this.onTrigger, this);
        }
      };
      triggertesting.prototype.onTrigger = function(event) {
        if (event.type == this._enterType) this._colliderCount++; else if (event.type == this._stayType) {
          if (this._prev[event.otherCollider._id]) return;
          this._prev[event.otherCollider._id] = true;
        } else if (event.type == this._exitType) {
          this._prev[event.otherCollider._id] = false;
          this._colliderCount--;
        }
        var modelCom = this.node.getComponent(cc.MeshRenderer);
        if (this._colliderCount > 0) {
          modelCom.setMaterial(0, this.colliderMaterial);
          modelCom.markForRender(true);
        } else {
          modelCom.setMaterial(0, this.unColliderMaterial);
          modelCom.markForRender(true);
        }
      };
      var triggertesting_1;
      triggertesting._idCounter = 0;
      __decorate([ property({
        type: cc.Material
      }) ], triggertesting.prototype, "colliderMaterial", void 0);
      __decorate([ property({
        type: cc.Material
      }) ], triggertesting.prototype, "unColliderMaterial", void 0);
      __decorate([ property ], triggertesting.prototype, "isTrigger", void 0);
      triggertesting = triggertesting_1 = __decorate([ ccclass ], triggertesting);
      return triggertesting;
    }(cc.Component);
    exports.triggertesting = triggertesting;
    cc._RF.pop();
  }, {} ],
  "tween-demo": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1ad8dW61zxGsrp51I5maibs", "tween-demo");
    "use strict";
    var t = cc.tween;
    cc.Class({
      extends: cc.Component,
      properties: {
        nodes: [ cc.Node ]
      },
      start: function start() {
        var nodes = this.nodes;
        for (var i = 0; i < nodes.length; i++) {
          var node = nodes[i];
          t(node).delay(.5 + .2 * i).repeat(1e3, t().set({
            opacity: 0,
            scale: 10,
            x: 0,
            rotation: 0
          }).parallel(t().to(1, {
            opacity: 255,
            scale: 1
          }, {
            easing: "quintInOut"
          }), t().to(2.5, {
            x: node.x
          }, {
            easing: "backOut"
          })).delay(.5).to(.8, {
            rotation: 360
          }, {
            easing: "cubicInOut"
          }).delay(1).to(.3, {
            opacity: 0,
            scale: 3
          }, {
            easing: "quintIn"
          }).delay(1)).start();
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  use_reversed_rotateBy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "044f7WaJ39MCa3IgkcqHzgT", "use_reversed_rotateBy");
    "use strict";
    cc.RotateBy._reverse = true;
    cc._RF.pop();
  }, {} ],
  velocity: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aba27g6ntRDMpLd693yFPdQ", "velocity");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var tempVec3 = new cc.Vec3();
    var Velocity = function(_super) {
      __extends(Velocity, _super);
      function Velocity() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Velocity.prototype.start = function() {};
      Velocity.prototype.rotate = function() {
        var rigidBody = this.node.getComponent(cc.RigidBody3D);
        if (rigidBody) {
          rigidBody.isSleeping && rigidBody.wakeUp();
          tempVec3.x = 0;
          tempVec3.y = 10;
          tempVec3.z = 0;
          rigidBody.setAngularVelocity(tempVec3);
        }
      };
      Velocity.prototype.jump = function() {
        var rigidBody = this.node.getComponent(cc.RigidBody3D);
        if (rigidBody) {
          rigidBody.isSleeping && rigidBody.wakeUp();
          tempVec3.x = 0;
          tempVec3.y = 10;
          tempVec3.z = 0;
          rigidBody.setLinearVelocity(tempVec3);
        }
      };
      Velocity = __decorate([ ccclass ], Velocity);
      return Velocity;
    }(cc.Component);
    exports.default = Velocity;
    cc._RF.pop();
  }, {} ],
  zh: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "87f1fs0gohHDIfNg4aePXbt", "zh");
    "use strict";
    module.exports = {
      example_case_tips_content: "\u8be5\u6d4b\u8bd5\u7528\u4f8b\u4e0d\u652f\u6301\u5f53\u524d\u5e73\u53f0",
      example_case_nonsupport_native_desktop_tips: "\u8be5\u6d4b\u8bd5\u7528\u4f8b\u4e0d\u652f\u6301 Mac \u5e73\u53f0\u548c Windows \u5e73\u53f0",
      example_case_nonsupport_runtime_tips: "\u8be5\u6d4b\u8bd5\u7528\u4f8b\u4e0d\u652f\u6301 Runtime \u5e73\u53f0",
      example_case_nonsupport_mobile_tips: "\u8be5\u6d4b\u8bd5\u7528\u4f8b\u4e0d\u652f\u6301\u79fb\u52a8\u5e73\u53f0",
      example_case_nonsupport_web_canvas_tips: "\u8be5\u6d4b\u8bd5\u7528\u4f8b\u4e0d\u652f\u6301 Canvas \u6a21\u5f0f",
      example_case_nonsupport_wechat_game_tips: "\u8be5\u6d4b\u8bd5\u7528\u4f8b\u4e0d\u652f\u6301 wechatGame \u5e73\u53f0",
      example_case_support_webGl_tips: "\u8be5\u6d4b\u8bd5\u7528\u4f8b\u53ea\u652f\u6301 WebGL \u6a21\u5f0f",
      example_case_support_mobile_tips: "\u8be5\u6d4b\u8bd5\u7528\u4f8b\u53ea\u652f\u6301\u79fb\u52a8\u5e73\u53f0",
      example_case_support_mobile_android_tips: "\u8be5\u6d4b\u8bd5\u7528\u4f8b\u53ea\u652f\u6301 Android \u79fb\u52a8\u5e73\u53f0",
      example_case_support_native_chrome_tips: "\u8be5\u6d4b\u8bd5\u7528\u4f8b\u53ea\u652f\u6301 PC \u5e73\u53f0\u4e0a\u7684 Chrome \u6d4f\u89c8\u5668",
      example_case_support_native_desktop_tips: "\u8be5\u6d4b\u8bd5\u7528\u4f8b\u53ea\u652f\u6301 Mac \u5e73\u53f0\u548c Windows \u5e73\u53f0",
      example_case_support_wechat_game_tips: "\u8be5\u6d4b\u8bd5\u7528\u4f8b\u652f\u6301 wechatGame \u5e73\u53f0",
      example_case_nonsupport_qqplay_tips: "\u8be5\u6d4b\u8bd5\u7528\u4f8b\u4e0d\u652f\u6301 QQplay \u5e73\u53f0",
      example_case_nonsupport_Wechatgame_tips: "\u8be5\u6d4b\u8bd5\u7528\u4f8b\u4e0d\u652f\u6301 Wechatgame \u5e73\u53f0",
      "cases/01_graphics/01_sprite/AtlasSprite.fire.7": "\u8fd9\u4e2a\u7cbe\u7075\u6765\u81ea\u5355\u5f20\u56fe\u7247",
      "cases/01_graphics/01_sprite/AtlasSprite.fire.11": "\u8fd9\u4e2a\u7cbe\u7075\u6765\u81ea\u56fe\u96c6",
      "cases/01_graphics/01_sprite/FilledSprite.fire.9": "\u586b\u5145\u7c7b\u578b\uff1a\u6c34\u5e73",
      "cases/01_graphics/01_sprite/FilledSprite.fire.15": "\u586b\u5145\u7c7b\u578b\uff1a\u5782\u76f4",
      "cases/01_graphics/01_sprite/FilledSprite.fire.23": "\u586b\u5145\u7c7b\u578b\uff1a\u5706\u5f62",
      "cases/01_graphics/01_sprite/SimpleSprite.fire.7": "\u8fd9\u662f\u666e\u901a\u7cbe\u7075",
      "cases/01_graphics/01_sprite/SlicedSprite.fire.7": "\u8fd9\u662f\u4e5d\u5bab\u683c\u7cbe\u7075",
      "cases/01_graphics/01_sprite/TiledSprite.fire.6": "\u8fd9\u662f\u5e73\u94fa\u7cbe\u7075",
      "cases/01_graphics/01_sprite/ChangeColor.fire.1": "\u6539\u53d8\u989c\u8272 Draw Call \u7684\u503c\u4e0d\u53d1\u751f\u6539\u53d8",
      "cases/01_graphics/01_sprite/TrimmedSprite.fire.7": "\u81ea\u52a8\u526a\u88c1 ",
      "cases/01_graphics/01_sprite/TrimmedSprite.fire.12": "\u672a\u81ea\u52a8\u526a\u88c1",
      "cases/01_graphics/02_particle/AutoRemoveParticle.fire.9": '\u7c92\u5b50 1\n"\u5b8c\u6210\u65f6\u81ea\u52a8\u79fb\u9664" \u7981\u6b62',
      "cases/01_graphics/02_particle/AutoRemoveParticle.fire.13": '\u7c92\u5b50 2\n"\u5b8c\u6210\u65f6\u81ea\u52a8\u79fb\u9664" \u5f00\u542f',
      "cases/01_graphics/02_particle/ToggleParticle.fire.6": '\u6309 "\u6309\u94ae" \u8fdb\u884c\u5f00\u5173\u7c92\u5b50\u64ad\u653e',
      "cases/02_ui/01_widget/AdvancedWidget.fire.7": "\u5de6\u4e0a",
      "cases/02_ui/01_widget/AdvancedWidget.fire.9": "top: 10% left: 6%",
      "cases/02_ui/01_widget/AdvancedWidget.fire.14": "\u4e0a",
      "cases/02_ui/01_widget/AdvancedWidget.fire.16": "top: -34px",
      "cases/02_ui/01_widget/AdvancedWidget.fire.21": "\u53f3\u4e0a",
      "cases/02_ui/01_widget/AdvancedWidget.fire.23": "top: 10% right: 6%",
      "cases/02_ui/01_widget/AdvancedWidget.fire.28": "\u5de6",
      "cases/02_ui/01_widget/AdvancedWidget.fire.30": "left: -50px",
      "cases/02_ui/01_widget/AdvancedWidget.fire.35": "\u53f3",
      "cases/02_ui/01_widget/AdvancedWidget.fire.37": "right: -50px",
      "cases/02_ui/01_widget/AdvancedWidget.fire.42": "\u5de6\u4e0b",
      "cases/02_ui/01_widget/AdvancedWidget.fire.44": "bottom: 10% left: 6%",
      "cases/02_ui/01_widget/AdvancedWidget.fire.49": "\u4e0b",
      "cases/02_ui/01_widget/AdvancedWidget.fire.51": "bottom: -34px",
      "cases/02_ui/01_widget/AdvancedWidget.fire.56": "\u53f3\u4e0b",
      "cases/02_ui/01_widget/AdvancedWidget.fire.58": "bottom:10% right:6%",
      "cases/02_ui/01_widget/AdvancedWidget.fire.63": "\u9ad8\u7ea7\u6302\u4ef6",
      "cases/02_ui/01_widget/AlignOnceWidget.fire.1": "AlignOne \u4e3a false \u65f6\uff0c\u4f1a\u4e00\u76f4\u4fdd\u6301\u5bf9\u9f50",
      "cases/02_ui/01_widget/AlignOnceWidget.fire.2": "AlignOne \u4e3a true \u65f6\uff0c\u53ea\u5728 Widget \u751f\u6548\u65f6\u5bf9\u9f50\u4e00\u6b21",
      "cases/02_ui/01_widget/AnimatedWidget.fire.9": "\u52a8\u753b\u6302\u4ef6\u3002",
      "cases/02_ui/01_widget/WidgetAlign.fire.18": "\u6302\u4ef6\u5bf9\u9f50\u65b9\u5f0f\u3002",
      "cases/02_ui/01_widget/AutoResize.fire.13": "\u6302\u4ef6\u81ea\u52a8\u8c03\u6574\u5927\u5c0f\u3002",
      "cases/02_ui/02_label/GoldBeatingAnime.js.1": "0",
      "cases/02_ui/02_label/AlignFontLabel.fire.6": "\u6587\u672c\u5bf9\u9f50",
      "cases/02_ui/02_label/AlignFontLabel.fire.9": "\u6c34\u5e73\u5bf9\u9f50",
      "cases/02_ui/02_label/AlignFontLabel.fire.14": "\u54c8\u5570\uff01\n\u6b22\u8fce\u4f7f\u7528 \nCocos Creator",
      "cases/02_ui/02_label/AlignFontLabel.fire.16": "\u5bf9\u9f50: \u9760\u5de6",
      "cases/02_ui/02_label/AlignFontLabel.fire.21": "\u54c8\u5570\uff01\n\u6b22\u8fce\u4f7f\u7528 \nCocos Creator",
      "cases/02_ui/02_label/AlignFontLabel.fire.23": "\u5bf9\u9f50: \u5c45\u4e2d",
      "cases/02_ui/02_label/AlignFontLabel.fire.28": "\u54c8\u5570\uff01\n\u6b22\u8fce\u4f7f\u7528 \nCocos Creator",
      "cases/02_ui/02_label/AlignFontLabel.fire.30": "\u5bf9\u9f50: \u9760\u53f3",
      "cases/02_ui/02_label/AlignFontLabel.fire.33": "\u5782\u76f4\u5bf9\u9f50",
      "cases/02_ui/02_label/AlignFontLabel.fire.38": "\u6b22\u8fce\u4f7f\u7528 \nCocos Creator",
      "cases/02_ui/02_label/AlignFontLabel.fire.40": "\u5bf9\u9f50: \u9876\u90e8",
      "cases/02_ui/02_label/AlignFontLabel.fire.45": "\u6b22\u8fce\u4f7f\u7528 \nCocos Creator",
      "cases/02_ui/02_label/AlignFontLabel.fire.47": "\u5bf9\u9f50: \u5c45\u4e2d",
      "cases/02_ui/02_label/AlignFontLabel.fire.52": "\u6b22\u8fce\u4f7f\u7528 \nCocos Creator",
      "cases/02_ui/02_label/AlignFontLabel.fire.54": "\u5bf9\u9f50: \u5e95\u90e8",
      "cases/02_ui/02_label/SystemFontLabel.fire.6": "\u7cfb\u7edf\u5b57\u4f53",
      "cases/02_ui/02_label/SystemFontLabel.fire.9": "\u6362\u884c",
      "cases/02_ui/02_label/SystemFontLabel.fire.14": "\u8fd9\u662f\u7cfb\u7edf\u9ed8\u8ba4\u5b57\u4f53",
      "cases/02_ui/02_label/SystemFontLabel.fire.16": "Overflow: CLAMP",
      "cases/02_ui/02_label/SystemFontLabel.fire.21": "\u8fd9\u662f\u7cfb\u7edf\u9ed8\u8ba4\u5b57\u4f53",
      "cases/02_ui/02_label/SystemFontLabel.fire.23": "Overflow: SHRINK",
      "cases/02_ui/02_label/SystemFontLabel.fire.26": "\u4e0d\u6362\u884c",
      "cases/02_ui/02_label/SystemFontLabel.fire.31": "\u8fd9\u662f\u7cfb\u7edf\u9ed8\u8ba4\u5b57\u4f53",
      "cases/02_ui/02_label/SystemFontLabel.fire.33": "Overflow: CLAMP",
      "cases/02_ui/02_label/SystemFontLabel.fire.38": "\u8fd9\u662f\u7cfb\u7edf\u9ed8\u8ba4\u5b57\u4f53",
      "cases/02_ui/02_label/SystemFontLabel.fire.40": "Overflow: SHRINK",
      "cases/02_ui/02_label/SystemFontLabel.fire.45": "\u54c8\u55bd! \u6b22\u8fce\u4f7f\u7528 Cocos Creator",
      "cases/02_ui/02_label/SystemFontLabel.fire.47": "Overflow: RESZIE_HEIGHT",
      "cases/02_ui/03_button/ButtonInScroll.js.1": "\u9876\u90e8\u6309\u94ae\u88ab\u70b9\u51fb\uff01",
      "cases/02_ui/03_button/ButtonInScroll.js.2": "\u5e95\u90e8\u6309\u94ae\u88ab\u70b9\u51fb\uff01",
      "cases/02_ui/03_button/ButtonInScroll.fire.21": "\u54ea\u4e2a\u6309\u94ae\u88ab\u70b9\u51fb\uff1f",
      "cases/02_ui/03_button/ButtonInScroll.fire.27": "\u62d6\u52a8\u663e\u793a\u66f4\u591a\u6309\u94ae",
      "cases/02_ui/03_button/SimpleButton.js.1": "\u5de6\u8fb9\u7684\u6309\u94ae\u88ab\u70b9\u51fb\uff01",
      "cases/02_ui/03_button/SimpleButton.js.2": "\u53f3\u8fb9\u7684\u6309\u94ae\u88ab\u70b9\u51fb\uff01",
      "cases/02_ui/03_button/ButtonInteractable.fire.7": "\u64ad\u653e",
      "cases/02_ui/03_button/ButtonInteractable.fire.16": "\u505c\u6b62",
      "cases/02_ui/03_button/ButtonInteractable.fire.21": "\u4ea4\u4e92(interactable): true",
      "cases/02_ui/03_button/ButtonInteractable.fire.23": "\u4ea4\u4e92(interactable): false",
      "cases/02_ui/03_button/ButtonInteractable.js.1": "\u4ea4\u4e92(interactable): ",
      "cases/02_ui/03_button/ButtonInteractable.js.2": "\u4ea4\u4e92(interactable): ",
      "cases/02_ui/03_button/ButtonSizeMode.fire": "\u4e0d\u540c\u7684\u6309\u94ae\u7684\u54cd\u5e94\u533a\u57df",
      "cases/02_ui/03_button/SimpleButton.fire.6": "\u54ea\u4e2a\u6309\u94ae\u88ab\u70b9\u51fb\uff1f",
      "cases/02_ui/05_scrollView/Item.js.1": "Tmpl#",
      "cases/02_ui/04_progressbar/progressbar.fire.7": "\u6c34\u5e73\u8fdb\u5ea6\u6761\uff0c\u8fdb\u5ea6 0.3",
      "cases/02_ui/04_progressbar/progressbar.fire.11": "\u53cd\u5411\u6c34\u5e73\u8fdb\u5ea6\u6761\uff0c\u8fdb\u5ea6 1.0",
      "cases/02_ui/04_progressbar/progressbar.fire.15": "\u5782\u76f4\u8fdb\u5ea6\u6761 \n\u4ece\u4e0b\u5411\u4e0a",
      "cases/02_ui/04_progressbar/progressbar.fire.19": "\u5782\u76f4\u8fdb\u5ea6\u6761 \n\u4ece\u4e0a\u5411\u4e0b",
      "cases/02_ui/04_progressbar/progressbar.fire.23": "\u8bbe\u7f6e\u4e86\u7cbe\u7075\u7684\u8fdb\u5ea6\u6761",
      "cases/02_ui/04_progressbar/progressbar.fire.28": "\u8bbe\u7f6e\u4e86\u7cbe\u7075\uff08\u5b50\u63a7\u4ef6\uff09\u7684\u8fdb\u5ea6\u6761",
      "cases/02_ui/05_scrollView/ListView.fire.23": "Item #00",
      "cases/02_ui/05_scrollView/ScrollView.fire.7": "Scrollview \u5b8c\u6574\u529f\u80fd",
      "cases/02_ui/05_scrollView/ScrollView.fire.30": "Scrollview \u6ca1\u6709\u60ef\u6027",
      "cases/02_ui/05_scrollView/ScrollView.fire.53": "Scrollview \u6ca1\u6709\u5f39\u6027",
      "cases/02_ui/05_scrollView/ScrollView.fire.76": "Scrollview \u53ea\u80fd\u6c34\u5e73\u6eda\u52a8",
      "cases/02_ui/05_scrollView/ScrollView.fire.93": "Scrollview \u53ea\u80fd\u5782\u76f4\u6eda\u52a8",
      "cases/02_ui/05_scrollView/ScrollView.fire.110": "Scrollview \u6ca1\u6709\u6eda\u52a8\u6761",
      "cases/02_ui/06_layout/LayoutInScrollView.fire.6": "ScrollView \u548c\u5782\u76f4\u5e03\u5c40\u5bb9\u5668",
      "cases/02_ui/06_layout/LayoutInScrollView.fire.40": "ScrollView \u548c\u6c34\u5e73\u5e03\u5c40\u5bb9\u5668",
      "cases/02_ui/06_layout/LayoutInScrollView.fire.74": "ScrollView \u548c\u6a2a\u5411\u7f51\u683c\u5e03\u5c40\u5bb9\u5668 ",
      "cases/02_ui/06_layout/LayoutInScrollView.fire.144": "ScrollView \u548c\u7eb5\u5411\u7f51\u683c\u5e03\u5c40\u5bb9\u5668 ",
      "cases/02_ui/06_layout/LayoutResizeChildren.fire.6": "\u6c34\u5e73\u5e03\u5c40\u5bb9\u5668",
      "cases/02_ui/06_layout/LayoutResizeChildren.fire.31": "\u5782\u76f4\u5e03\u5c40\u5bb9\u5668",
      "cases/02_ui/06_layout/LayoutResizeChildren.fire.48": "\u6a2a\u5411\u7f51\u683c\u5e03\u5c40\u5bb9\u5668",
      "cases/02_ui/06_layout/LayoutResizeChildren.fire.85": "\u7eb5\u5411\u7f51\u683c\u5e03\u5c40\u5bb9\u5668",
      "cases/02_ui/06_layout/LayoutResizeContainer.fire.6": "\u57fa\u672c",
      "cases/02_ui/06_layout/LayoutResizeContainer.fire.31": "\u6c34\u5e73",
      "cases/02_ui/06_layout/LayoutResizeContainer.fire.36": "\u5782\u76f4",
      "cases/02_ui/06_layout/LayoutResizeContainer.fire.41": "\u6a2a\u5411\u7f51\u683c\u5e03\u5c40\u5bb9\u5668",
      "cases/02_ui/06_layout/LayoutResizeContainer.fire.46": "\u7eb5\u5411\u7f51\u683c\u5e03\u5c40\u5bb9\u5668",
      "cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.8": "x:0, y:0",
      "cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.12": "x:480, y:320",
      "cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.16": "x:960, y:640",
      "cases/02_ui/07_editBox/editbox.js.1": "\u8f93\u5165\u6587\u672c: ",
      "cases/02_ui/06_layout/LayoutNone.fire.6": "\u57fa\u672c\u5e03\u5c40\u5bb9\u5668, \u7c7b\u578b: None\n\u81ea\u52a8\u8c03\u6574\u5927\u5c0f",
      "cases/02_ui/06_layout/LayoutNone.fire.35": "\u6c34\u5e73\u5e03\u5c40\u5bb9\u5668\uff0c\u7c7b\u578b: None\n\u4e0d\u81ea\u52a8\u8c03\u6574\u5927\u5c0f",
      "cases/02_ui/06_layout/LayoutNone.fire.60": "\u5782\u76f4\u5e03\u5c40\u5bb9\u5668\uff0c\u7c7b\u578b: None\n\u4e0d\u81ea\u52a8\u8c03\u6574\u5927\u5c0f",
      "cases/02_ui/06_layout/LayoutNone.fire.77": "\u6a2a\u5411\u7f51\u683c\u5e03\u5c40\u5bb9\u5668\uff0c\u7c7b\u578b: None\n\u4e0d\u81ea\u52a8\u8c03\u6574\u5927\u5c0f",
      "cases/02_ui/06_layout/LayoutNone.fire.142": "\u7eb5\u5411\u7f51\u683c\u5e03\u5c40\u5bb9\u5668\uff0c\u7c7b\u578b: None\n\u4e0d\u81ea\u52a8\u8c03\u6574\u5927\u5c0f",
      "cases/02_ui/07_editBox/EditBox.fire.25": "\u5355\u884c\u5bc6\u7801\u6846:",
      "cases/02_ui/07_editBox/EditBox.fire.27": "\u5355\u884c\u6587\u672c\u6846:",
      "cases/02_ui/07_editBox/EditBox.fire.29": "\u591a\u884c\u6587\u672c\u6846:",
      "cases/02_ui/07_editBox/EditBox.fire.32": "\u70b9\u51fb",
      "cases/02_ui/07_editBox/EditBox.fire.38": "\u6309\u94ae\u5fc5\u987b\u5728 EditBox \u7684\u4e0a\u9762, \n\u5e76\u4e14\u5b83\u5e94\u8be5\u5141\u8bb8\u70b9\u51fb.",
      "cases/02_ui/09_videoplayer/fullscreenVideo.fire": "\u5f53\u60a8\u89e6\u6478\u5c4f\u5e55\u65f6\uff0c\u5c06\u64ad\u653e\u89c6\u9891\u3002\n \u89c6\u9891\u5b8c\u6210\u540e\uff0c\u5b83\u5c06\u88ab\u5220\u9664\u3002",
      "cases/02_ui/09_videoplayer/videoPlayer.nonsupport_fullscreen": "\u5f53\u524d\u8bbe\u5907\u4e0d\u652f\u6301\u5168\u5c4f\u64ad\u653e",
      "cases/03_gameplay/01_player_control/EventManager/KeyboardInput.fire.6": "\u6309 'A' \u6216 'D' \u952e\u63a7\u5236\u5c0f\u7ef5\u7f8a",
      "cases/03_gameplay/01_player_control/On/OnTouchCtrl.js.1": "touch (",
      "cases/03_gameplay/01_player_control/On/OnTouchInput.fire.10": "\u8bf7\u89e6\u6478\u4efb\u610f\u4f4d\u7f6e\u8bd5\u8bd5",
      "cases/03_gameplay/01_player_control/On/OnMultiTouchInput.fire.20": "\u7528\u4f60\u7684\u624b\u6307\u653e\u7f29\u56fe\u7247\uff01",
      "cases/03_gameplay/01_player_control/On/DeviceMotion.fire.1": "\u5f00\u542f \u91cd\u529b\u611f\u5e94",
      "cases/03_gameplay/01_player_control/On/DeviceMotion.fire.2": "\u5173\u95ed \u91cd\u529b\u611f\u5e94",
      "cases/03_gameplay/02_actions/SimpleAction.fire.13": "\u7b80\u5355\u7684\u52a8\u4f5c",
      "cases/03_gameplay/03_animation/AnimateCustomProperty.fire.14": "Label",
      "cases/03_gameplay/03_animation/AnimateCustomProperty.fire.18": "\u81ea\u5b9a\u4e49\u52a8\u753b\u5c5e\u6027",
      "cases/03_gameplay/03_animation/AnimationEvent.js.1": "\u5f00\u59cb\u7b2c",
      "cases/03_gameplay/03_animation/AnimationEvent.fire.6": "\u5f00\u59cb\u7b2c1\u4e2a\u52a8\u753b",
      "cases/03_gameplay/03_animation/AnimationEvent.fire.14": "\u52a8\u753b\u4e8b\u4ef6",
      "cases/03_gameplay/03_animation/MoveAnimation.fire.11": "Linear",
      "cases/03_gameplay/03_animation/MoveAnimation.fire.17": "Case In Expo",
      "cases/03_gameplay/03_animation/MoveAnimation.fire.23": "Case Out Expo",
      "cases/03_gameplay/03_animation/MoveAnimation.fire.29": "Case Out In Expo",
      "cases/03_gameplay/03_animation/MoveAnimation.fire.35": "Back Forward",
      "cases/03_gameplay/03_animation/MoveAnimation.fire.41": "\u8fd9\u662f\u4e00\u4e2a\u79fb\u52a8\u52a8\u753b\u3002",
      "cases/03_gameplay/03_animation/CurveAnimation.fire.42": "\u8fd9\u662f\u4e00\u4e2a\u66f2\u7ebf\u52a8\u753b\u3002",
      "cases/03_gameplay/03_animation/SpriteAnimation.fire.9": "\u8fd9\u662f\u7cbe\u7075\u5e27\u52a8\u753b",
      "cases/03_gameplay/03_animation/CreateClip.fire.1": "\u52a8\u6001\u521b\u5efa\u52a8\u753b\u526a\u8f91",
      "cases/04_audio/SimpleAudio.fire.6": "\u4eab\u53d7\u97f3\u4e50!",
      "cases/05_scripting/01_properties/NodeArray.fire.14": "\u8fd9\u662f\u8282\u70b9\u6570\u7ec4",
      "cases/05_scripting/01_properties/NonSerialized.fire.6": "Label",
      "cases/05_scripting/01_properties/NonSerialized.fire.8": "Label",
      "cases/05_scripting/01_properties/NonSerialized.fire.10": "\u8fd9\u662f\u975e\u5e8f\u5217\u5316",
      "cases/05_scripting/01_properties/ReferenceType.fire.8": "Label",
      "cases/05_scripting/01_properties/ReferenceType.fire.11": "\u8fd9\u4e2a\u4f8b\u5b50\u4e0d\u5305\u62ec\u8fd0\u884c\u65f6\u6f14\u793a",
      "cases/05_scripting/01_properties/ValueType.fire.6": "\u8fd9\u4e2a\u4f8b\u5b50\u4e0d\u5305\u62ec\u8fd0\u884c\u65f6\u6f14\u793a",
      "cases/05_scripting/02_prefab/InstantiatePrefab.fire.7": "\u5b9e\u4f8b\u5316\u9884\u5236\u8d44\u6e90",
      "cases/05_scripting/03_events/EventInMask.fire.23": "\u66f4\u6539\u8282\u70b9\u6392\u5e8f",
      "cases/05_scripting/03_events/SimpleEvent.fire.19": "\u89e6\u6478\u4e8b\u4ef6\u53ef\u4ee5\u652f\u6301\u70b9\u51fb",
      "cases/05_scripting/03_events/SimpleEvent.fire.21": "\u9f20\u6807\u4e8b\u4ef6\u53ef\u4ee5\u652f\u6301\u5355\u51fb\u3001\u60ac\u505c\u3001\u6eda\u8f6e",
      "cases/05_scripting/03_events/SimpleEvent.fire.23": "\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u53ef\u4ee5\u624b\u52a8\u89e6\u53d1\n(\u70b9\u51fb\u4e0a\u9762\u7684\u6309\u94ae)",
      "cases/05_scripting/03_events/SimpleEvent.fire.25": "\u57fa\u672c\u4e8b\u4ef6",
      "cases/05_scripting/03_events/TouchPropagation.fire.15": "\u89e6\u6478\u4e8b\u4ef6\u5192\u6ce1",
      "cases/05_scripting/03_events/MousePropagation.fire.1": "\u9f20\u6807\u4e8b\u4ef6\u5192\u6ce1",
      "cases/05_scripting/04_scheduler/scheduleCallbacks.js.1": "5.00 s",
      "cases/05_scripting/04_scheduler/scheduler.fire.9": "5.00 s",
      "cases/05_scripting/04_scheduler/scheduler.fire.12": "\u91cd\u590d\u5b9a\u65f6\u5668",
      "cases/05_scripting/04_scheduler/scheduler.fire.18": "\u53d6\u6d88\u5b9a\u65f6\u5668",
      "cases/05_scripting/04_scheduler/scheduler.fire.24": "\u5b9a\u65f6\u6267\u884c1\u6b21",
      "cases/05_scripting/04_scheduler/scheduler.fire.29": "\u4f7f\u7528 update \u51fd\u6570\u6bcf\u5e27\u66f4\u65b0\u8ba1\u6570",
      "cases/05_scripting/04_scheduler/scheduler.fire.31": "\u5b9a\u65f6\u5668",
      "cases/05_scripting/04_scheduler/recursiveScheduler.fire.0": "\u70b9\u51fb\u6309\u94ae\u5f00\u59cb\u6267\u884c\u9012\u5f52\u4efb\u52a1\uff0c\u4f60\u6700\u7ec8\u5e94\u8be5\u770b\u5230'\u4efb\u52a12\u6267\u884c\u5b8c\u6210'",
      "cases/05_scripting/04_scheduler/recursiveScheduler.fire.1": "\u4efb\u52a1 1 \u6267\u884c\u5b8c\u6210",
      "cases/05_scripting/04_scheduler/recursiveScheduler.fire.2": "\u4efb\u52a1 2 \u6267\u884c\u5b8c\u6210",
      "cases/05_scripting/04_scheduler/recursiveScheduler.fire.3": "\u5f00\u59cb\u4efb\u52a1",
      "cases/05_scripting/05_cross_reference/CrossReference.fire.7": "Label",
      "cases/05_scripting/05_cross_reference/CrossReference.fire.12": "Label",
      "cases/05_scripting/05_cross_reference/CrossReference.fire.14": "\u4ea4\u53c9\u5f15\u7528",
      "cases/05_scripting/06_life_cycle/life_cycle.fire.6": "\u751f\u547d\u5468\u671f",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.5": "\u8d44\u6e90\u52a0\u8f7d",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.9": "\u52a0\u8f7d SpriteFrame",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.15": "\u52a0\u8f7d Texture",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.21": "\u52a0\u8f7d Audio",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.27": "\u52a0\u8f7d Txt",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.33": "\u52a0\u8f7d Font",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.39": "\u52a0\u8f7d Plist",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.45": "\u52a0\u8f7d Prefab",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.51": "\u52a0\u8f7d Scene",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.57": "\u52a0\u8f7d Animation",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.59": "\u52a0\u8f7d Spine",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.65": "\u5f53\u524d\u5c1a\u65e0\u52a0\u8f7d\u3002",
      "cases/05_scripting/07_asset_loading/AssetLoading.js.1": "\u5df2\u52a0\u8f7d ",
      "cases/05_scripting/07_asset_loading/AssetLoading.js.2": "\u64ad\u653e ",
      "cases/05_scripting/07_asset_loading/AssetLoading.js.3": "\u521b\u5efa ",
      "cases/05_scripting/07_asset_loading/AssetLoading.js.4": "\u64ad\u653e\u97f3\u4e50\u3002",
      "cases/05_scripting/07_asset_loading/AssetLoading.js.5": "\u8fd9\u662f\u5b57\u4f53\uff01",
      "cases/05_scripting/07_asset_loading/LoadRes.fire.7": "\u6309\u7c7b\u578b",
      "cases/05_scripting/07_asset_loading/LoadRes.fire.10": "\u52a0\u8f7d SpriteFrame",
      "cases/05_scripting/07_asset_loading/LoadRes.fire.17": "\u6309 Url",
      "cases/05_scripting/07_asset_loading/LoadRes.fire.20": "\u52a0\u8f7d\u9884\u5236\u8d44\u6e90",
      "cases/05_scripting/07_asset_loading/LoadResAll.fire.6": "\u8fd9\u4e2a\u4f8b\u5b50\u4e0d\u5305\u62ec\u8fd0\u884c\u65f6\u6f14\u793a",
      "cases/05_scripting/07_asset_loading/LoadResAll.fire.24": "\u5168\u90e8\u52a0\u8f7d",
      "cases/05_scripting/07_asset_loading/LoadResAll.fire.30": "\u52a0\u8f7d\u5168\u90e8\u7684SpriteFrame",
      "cases/05_scripting/07_asset_loading/LoadResAll.fire.36": "\u6e05\u7a7a",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.1": "\u9884\u52a0\u8f7d\u8d44\u6e90",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.2": "\u9884\u52a0\u8f7d SpriteFrame",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.3": "\u9884\u52a0\u8f7d Texture",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.4": "\u9884\u52a0\u8f7d Audio",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.5": "\u9884\u52a0\u8f7d Txt",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.6": "\u9884\u52a0\u8f7d Font",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.7": "\u9884\u52a0\u8f7d Plist",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.8": "\u9884\u52a0\u8f7d Prefab",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.9": "\u9884\u52a0\u8f7d Scene",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.10": "\u9884\u52a0\u8f7d Animation",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.11": "\u9884\u52a0\u8f7d Spine",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.12": "\u5f53\u524d\u5c1a\u65e0\u9884\u52a0\u8f7d",
      "cases/05_scripting/07_asset_loading/PreloadAssets.fire.13": "\u9884\u52a0\u8f7d\u6587\u4ef6\u5939",
      "cases/05_scripting/07_asset_loading/PreloadAssets.js.1": "\u5df2\u52a0\u8f7d ",
      "cases/05_scripting/07_asset_loading/PreloadAssets.js.2": "\u64ad\u653e ",
      "cases/05_scripting/07_asset_loading/PreloadAssets.js.3": "\u521b\u5efa ",
      "cases/05_scripting/07_asset_loading/PreloadAssets.js.4": "\u64ad\u653e\u97f3\u4e50\u3002",
      "cases/05_scripting/07_asset_loading/PreloadAssets.js.5": "\u8fd9\u662f\u5b57\u4f53\uff01",
      "cases/05_scripting/07_asset_loading/DeferredLoading.fire.1": "\u5ef6\u8fdf\u52a0\u8f7d",
      "cases/05_scripting/08_module/load_module.fire.6": "\u52a0\u8f7d\u6a21\u5757",
      "cases/05_scripting/08_module/load_module.fire.10": "\u521b\u5efa\u602a\u7269",
      "cases/05_scripting/09_singleton/Singleton.fire.6": "\u8fd9\u4f8b\u5b50\u4e0d\u5305\u542b\u8fd0\u884c\u65f6\u6f14\u793a",
      "cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.1": "\u4e0b\u8f7d\u5b8c\u6210!!",
      "cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.2": "\u6b63\u5728\u4e0b\u8f7d: ",
      "cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.3": "\u70b9\u51fb\u4efb\u610f\u5730\u65b9\u8fdb\u884c\u4e0b\u8f7d...",
      "cases/05_scripting/10_loadingBar/loadingBar.fire.7": "\u52a0\u8f7d\u5b8c\u6210",
      "cases/05_scripting/10_loadingBar/loadingBar.fire.18": "\u6b63\u5728\u4e0b\u8f7d",
      "cases/05_scripting/11_network/NetworkCtrl.js.1": "\u8bf7\u7a0d\u7b49...",
      "cases/05_scripting/11_network/NetworkCtrl.js.2": "\u8bf7\u7a0d\u7b49...",
      "cases/05_scripting/11_network/NetworkCtrl.js.3": "\u8bf7\u7a0d\u7b49...",
      "cases/05_scripting/11_network/NetworkCtrl.js.4": "\u8bf7\u7a0d\u7b49...",
      "cases/05_scripting/11_network/NetworkCtrl.js.5": "WebSocket\n\u53d1\u9001\u4e8c\u8fdb\u5236WS\u5df2\u6253\u5f00.",
      "cases/05_scripting/11_network/NetworkCtrl.js.6": "WebSocket\n\u6536\u5230\u54cd\u5e94.",
      "cases/05_scripting/11_network/NetworkCtrl.js.7": "WebSocket\n\u53d1\u9001\u4e8c\u8fdb\u5236\u9047\u5230\u9519\u8bef.",
      "cases/05_scripting/11_network/NetworkCtrl.js.8": "WebSocket\nwebsocket \u5b9e\u4f8b\u5df2\u5173\u95ed.",
      "cases/05_scripting/11_network/NetworkCtrl.js.9": "WebSocket\n\u53d1\u9001\u4e8c\u8fdb\u5236WS\u7b49\u5f85\u4e2d...",
      "cases/05_scripting/11_network/NetworkCtrl.js.10": "WebSocket\n",
      "cases/05_scripting/11_network/NetworkCtrl.js.11": "SocketIO\n",
      "cases/05_scripting/11_network/NetworkCtrl.js.12": "SocketIO\n",
      "cases/05_scripting/11_network/NetworkCtrl.js.13": "SocketIO\n",
      "cases/05_scripting/11_network/NetworkCtrl.js.14": "SocketIO\n",
      "cases/05_scripting/11_network/network.fire.7": "Label",
      "cases/05_scripting/11_network/network.fire.6": "XMLHttpRequest",
      "cases/05_scripting/11_network/network.fire.11": "Label",
      "cases/05_scripting/11_network/network.fire.10": "XMLHttpRequest (ArrayBuffer)",
      "cases/05_scripting/11_network/network.fire.15": "Label",
      "cases/05_scripting/11_network/network.fire.14": "WebSocket",
      "cases/05_scripting/11_network/network.fire.19": "Label",
      "cases/05_scripting/11_network/network.fire.18": "SocketIO",
      "cases/05_scripting/11_network/download-web.fire.1.1": "\u8fdc\u7a0b\u97f3\u9891\u8d44\u6e90\u4e0b\u8f7d",
      "cases/05_scripting/11_network/download-web.fire.1.2": "\u8fdc\u7a0b\u56fe\u7247\u8d44\u6e90\u4e0b\u8f7d",
      "cases/05_scripting/11_network/download-web.fire.2": "\u7b49\u5f85\u4e0b\u8f7d\u4e2d...",
      "cases/05_scripting/11_network/download-web.fire.3": "\u4e0b\u8f7d\u8fdb\u5ea6\uff1a",
      "cases/05_scripting/11_network/download-web.fire.4.1": "\u8fdc\u7a0b\u97f3\u9891\u8d44\u6e90\u4e0b\u8f7d\u5b8c\u6210",
      "cases/05_scripting/11_network/download-web.fire.4.2": "\u8fdc\u7a0b\u56fe\u7247\u8d44\u6e90\u4e0b\u8f7d\u5b8c\u6210",
      "cases/05_scripting/11_network/download-web.fire.5.1": "\u8fdc\u7a0b\u97f3\u9891\u8d44\u6e90\u4e0b\u8f7d\u5931\u8d25",
      "cases/05_scripting/11_network/download-web.fire.5.2": "\u8fdc\u7a0b\u56fe\u7247\u8d44\u6e90\u4e0b\u8f7d\u5931\u8d25",
      "cases/05_scripting/11_network/download-web.fire.6": "\u8d44\u6e90\u5730\u5740\uff1a",
      "cases/05_scripting/11_network/download-web.fire.7": "\u4e0b\u8f7d",
      "cases/05_scripting/11_network/download-web.fire.8": "\u6ed1\u52a8\u5230\u4e0b\u4e00\u9875",
      "cases/05_scripting/11_network/download-web.fire.9": "\u6ed1\u52a8\u5230\u4e0a\u4e00\u9875",
      "cases/05_scripting/11_network/download-web.fire.10": "\u52a0\u8f7d\u5730\u5740\u65e0\u6548",
      "cases/native_call/native_call.fire.1": "\u70b9\u51fb\u6309\u94ae\u8c03\u7528\u9759\u6001\u65b9\u6cd5\uff01",
      "cases/native_call/native_call.fire.2": "\u70b9\u51fb",
      "cases/collider/Category.fire.3": "\u7ec4: \u78b0\u649e",
      "cases/collider/Category.fire.5": "\u7ec4: \u78b0\u649e",
      "cases/collider/Category.fire.7": "\u7ec4: \u78b0\u649e",
      "cases/collider/Category.fire.9": "\u7ec4: \u9ed8\u8ba4",
      "cases/collider/Shape.fire.20": "\u663e\u793a\u591a\u8fb9\u5f62",
      "cases/collider/Shape.fire.27": "\u663e\u793a\u5706",
      "cases/collider/Shape.fire.34": "\u663e\u793a\u76d2\u5b50",
      "cases/collider/Shape.fire.43": "\u663e\u793a\u591a\u8fb9\u5f62",
      "cases/collider/Shape.fire.50": "\u663e\u793a\u5706",
      "cases/collider/Shape.fire.57": "\u663e\u793a\u76d2\u5b50",
      "cases/motionStreak/MotionStreak.fire.1": "\u6539\u53d8\u62d6\u5c3e",
      "cases/spine/SpineBoy.fire.11": "\u8c03\u8bd5\u63d2\u69fd",
      "cases/spine/SpineBoy.fire.18": "\u8c03\u8bd5\u5173\u8282",
      "cases/spine/SpineBoy.fire.25": "\u65f6\u95f4\u7f29\u653e",
      "cases/spine/SpineBoy.fire.36": "\u505c\u6b62",
      "cases/spine/SpineBoy.fire.43": "\u8d70",
      "cases/spine/SpineBoy.fire.50": "\u8dd1",
      "cases/spine/SpineBoy.fire.58": "\u8df3",
      "cases/spine/SpineBoy.fire.65": "\u5c04\u51fb",
      "cases/tiledmap/Puzzle.fire.18": "\u4f60\u8d62\u4e86",
      "cases/tiledmap/Puzzle.fire.21": "\u91cd\u65b0\u5f00\u59cb",
      "cases/tiledmap/Dynamic-Tiledmap.fire.22": "\u52a8\u6001\u521b\u5efa TiledMap",
      "res/prefabs/ListItem.prefab.2": "Label ssss",
      "res/prefabs/Monster.prefab.3": "\u540d\u5b57:",
      "res/prefabs/Monster.prefab.11": "\u7b49\u7ea7 :",
      "res/prefabs/Monster.prefab.19": "\u8840\u91cf :",
      "res/prefabs/Monster.prefab.27": "\u653b\u51fb :",
      "res/prefabs/Monster.prefab.35": "\u9632\u5fa1 :",
      "res/prefabs/loadItem.prefab.1": "Label",
      "resources/test_assets/prefab.prefab.2": "\u8fd9\u662f\u4e00\u4e2a\u9884\u5236",
      "resources/test_assets/scene.fire.3": "\u8fd4\u56de\u8d44\u6e90\u52a0\u8f7d\u573a\u666f",
      "resources/test_assets/scene.fire.6": "\u8fd4\u56de",
      "resources/test_assets/preloadscene.fire.3": "\u8fd4\u56de\u9884\u52a0\u8f7d\u573a\u666f",
      "scripts/Global/Menu.js.1": "\u8bf4\u660e\u6682\u7f3a",
      "cases/AssetBundle.1": "\u8d44\u6e90\u5206\u5305",
      "cases/AssetBundle.2": "\u52a0\u8f7d Asset Bundle",
      "cases/AssetBundle.3": "\u52a0\u8f7d Audio",
      "cases/AssetBundle.4": "\u52a0\u8f7d Texture",
      "cases/AssetBundle.5": "\u52a0\u8f7d Scene",
      "cases/AssetBundle.6": "\u91ca\u653e\u5206\u5305\u8d44\u6e90",
      "cases/AssetBundle.7": "\u9500\u6bc1\u5206\u5305",
      "cases/AssetBundle.8": "\u8fdb\u5165\u5206\u5305\u573a\u666f",
      "cases/AssetBundle.9": "\u64cd\u4f5c\u5931\u8d25\uff0c\u8bf7\u5148\u52a0\u8f7d Asset Bundle",
      "cases/AssetBundle.10": "\u8fd4\u56de\u52a0\u8f7d\u5206\u5305\u573a\u666f",
      "cases/AssetBundle.11": "\u5f53\u524d\u5c1a\u65e0\u52a0\u8f7d",
      "cases/AssetBundle.12": "\u5df2\u52a0\u8f7d ",
      "cases/AssetBundle.13": "\u64ad\u653e ",
      "cases/AssetBundle.14": "\u521b\u5efa ",
      "cases/AssetBundle.15": "\u64ad\u653e\u97f3\u4e50",
      "cases/AssetBundle.16": "\u8d44\u6e90\u5df2\u88ab\u91ca\u653e",
      "cases/AssetBundle.17": "\u5206\u5305\u5df2\u88ab\u9500\u6bc1",
      "scripts/AudioCtrl_Play": "\u64ad\u653e",
      "scripts/AUdioCtrl_Stop": "\u505c\u6b62",
      "scripts/AUdioCtrl_Pause": "\u6682\u505c",
      "scripts/AUdioCtrl_Resume": "\u6062\u590d",
      "scripts/AUdioCtrl_StopAll": "\u505c\u6b62\u6240\u6709",
      "scripts/AUdioCtrl_PauseAll": "\u6682\u505c\u6240\u6709",
      "scripts/AUdioCtrl_ResumeAll": "\u6062\u590d\u6240\u6709",
      sprite_loadRes_asset_success: "\u8d44\u6e90\u52a0\u8f7d\u6210\u529f",
      sprite_loadRes_asset_failed: "\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25",
      "cases/particle3d.color": "\u5de6\u4e00\uff1a\u4e00\u79cd\u5355\u4e00\u989c\u8272\n\u5de6\u4e8c\uff1a\u4e00\u79cd\u6e10\u53d8\u8272\n\u5de6\u4e09\uff1a\u51e0\u79cd\u5355\u4e00\u989c\u8272\u53d8\u5316\n\u5de6\u56db\uff1a\u4e24\u79cd\u6e10\u53d8\u8272\n\u5de6\u4e94\uff1a\u968f\u673a\u989c\u8272",
      "cases/particle3d.force.transform": "\u5e73\u79fb",
      "cases/particle3d.force.rotate": "\u65cb\u8f6c",
      "cases/particle3d.main": "1.\u5de6\u4e00\u5de6\u4e8c\u4e3a\u5bf9\u6bd4\uff0c\u6548\u679c\u76f8\u540c\n2.\u5de6\u4e09\u5de6\u4e94\u7c92\u5b50\u653e\u5927\u4e24\u500d\uff0c\u7c92\u5b50\u4e0e\u7c92\u5b50\u7684\u4e2d\u5fc3\u95f4\u9694\u653e\u5927\u4e24\u500d\n3.\u5de6\u56db\u5de6\u516d\u7c92\u5b50\u653e\u5927\u4e24\u500d\uff0c\u7c92\u5b50\u4e0e\u7c92\u5b50\u7684\u4e2d\u5fc3\u95f4\u9694\u6ca1\u53d8\n4.\u5de6\u4e03\u6bcf\u4e94\u79d2\u4ea7\u751f\u4e24\u4e2a\u7c92\u5b50\uff0c\u4e24\u4e2a\u7c92\u5b50\u4ea7\u751f\u7684\u65f6\u95f4\u95f4\u9694\u4e3a0.5\u79d2\n5.\u5de6\u516b\u53ef\u5728\u573a\u666f\u7f16\u8f91\u5668\u67e5\u770b\u6548\u679c\uff0c\u6bcf\u62d6\u52a8\u4e00\u5355\u4f4d\u8ddd\u79bb\u4ea7\u751f\u4e00\u4e2a\u7c92\u5b50",
      "cases/particle3d.renderer": "\u5de6\u4e00\uff1a\u7c92\u5b50\u59cb\u7ec8\u9762\u671d\u6444\u50cf\u673a\n\u5de6\u4e8c\uff1a\u7c92\u5b50\u59cb\u7ec8\u4fdd\u6301\u6c34\u5e73\n\u5de6\u4e09\uff1a\u7c92\u5b50\u59cb\u7ec8\u4fdd\u6301\u7ad6\u76f4\u5e76\u671d\u5411\u6444\u50cf\u673a\u65b9\u5411\n\u5de6\u56db\uff1a\u7c92\u5b50\u59cb\u7ec8\u4fdd\u6301\u7ad6\u76f4\uff0c\u671d\u5411\u6444\u50cf\u673a\u65b9\u5411\uff0c\u4f46\u88ab\u62c9\u4f38\n\u5de6\u4e94\uff1a\u7c92\u5b50\u4e3a\u4e00\u4e2a\u6a21\u578b",
      "cases/particle3d.rotation": "\u7c92\u5b50\u6309\u7167\u8bbe\u5b9a\u66f2\u7ebf\u65cb\u8f6c",
      "cases/particle3d.shape": "          \u7c92\u5b50\u53d1\u5c04\u5668\u5f62\u72b6    \u7c92\u5b50\u4ea7\u751f\u4f4d\u7f6e\n\u5de6\u4e00          \u6b63\u65b9\u4f53                 \u5185\u90e8\n\u5de6\u4e8c          \u6b63\u65b9\u4f53                 \u8fb9\u6846\n\u5de6\u4e09          \u6b63\u65b9\u4f53                 \u8868\u9762\n\u5de6\u56db              \u5706             \u6cbf\u5706\u5185\u7684\u4e00\u5708\n\u5de6\u4e94              \u5706             \u6cbf\u5706\u5468\u5faa\u73af\u4ea7\u751f\u7c92\u5b50\n                                      \u5faa\u73af\u65b9\u5411\u76f8\u540c\n\u5de6\u516d              \u5706             \u6cbf\u5706\u5468\u5faa\u73af\u4ea7\u751f\u7c92\u5b50\n                                      \u5faa\u73af\u65b9\u5411\u76f8\u53cd\n\u5de6\u4e03            \u5706\u9525                   \u5185\u90e8\n\u5de6\u516b            \u5706\u9525                \u9525\u5e95\u7684\u5706\n\u5de6\u4e5d            \u5706\u9525                    \u8868\u9762\n\u5de6\u5341            \u5706\u9525               \u9525\u5e95\u7684\u5706\u5468\n\u5de6\u5341\u4e00        \u5706\u9525       \u9525\u5e95\u5706\u5468\u5faa\u73af\u4ea7\u751f\u7c92\u5b50\n                                 \u7c92\u5b50\u659c\u5411\u4e0a\u79fb\u52a8\n\u5de6\u5341\u4e8c        \u7403\u4f53                     \u5185\u90e8\n\u5de6\u5341\u4e09        \u7403\u4f53                     \u8868\u9762\n\u5de6\u5341\u56db      \u534a\u7403\u4f53                    \u5185\u90e8\n\u5de6\u5341\u4e94      \u534a\u7403\u4f53                    \u8868\u9762",
      "cases/particle3d.size": "\u7c92\u5b50\u5927\u5c0f\u6309\u7167\u8bbe\u5b9a\u66f2\u7ebf\u53d8\u5316"
    };
    cc._RF.pop();
  }, {} ]
}, {}, [ "ParticleControl", "LabelAttributes", "LoadLongText", "ButtonTransition", "SimpleButtonCtrl", "ProgressBarCtrl", "Item", "ListViewCtrl", "LayoutResizeContainerCtrl", "EditBoxEvent", "EditboxCtrl", "stayOnBottomCtrl", "VideoPlayerCtrl", "WebviewCtrl", "RichText", "SliderCtrl", "checkbox", "PageViewCtrl", "MaskCtrl", "DeviceMotionCtrl", "SimpleKeyboardMovement", "OnMultiTouchCtrl", "OnTouchCtrl", "MoveAction", "RepeatAction", "RotationCtrl", "SequenceAction", "SimpleAction", "AnimateCustomPropertyCtrl", "AnimationCallback", "AnimationEvent", "CreateClipCtrl", "CurveAnimation", "MoveAnimationCtrl", "SheepAnimationCtrl", "tween-demo", "AudioEngineControl", "AudioSourceControl", "MyCustomComponent", "NodeGroupControl", "ReferenceTypeProperties", "ValueTypeProperties", "MonsterPrefab", "PopulatePrefab", "ActionCallback", "BasicEventCtrl", "CustomEvent", "MouseDragger", "MouseEvent", "OrderSwitcher", "TouchDragger", "TouchEvent", "recursiveTask", "scheduleCallbacks", "DestroySelf", "AssetLoading", "ComeBackToAssetLoad", "DeferredLoading", "loadResDir_example", "LoadRes_example", "BackToPreloadAssets", "PreloadAssets", "InitData", "LoadModuleCtrl", "Monster", "Singleton", "SingletonCtrl", "LoadingBarCtrl", "NetworkCtrl", "DownloaderCtrl", "downloader-audio", "downloader-picture", "NodeGenerator", "PoolHandler", "custom_material", "capture_to_native", "capture_to_web", "capture_to_wechat", "textureRenderUtils", "CameraController", "ShowTips", "TransformController", "3d-model", "3d-support-info", "dynamic-load-material", "mesh-texture", "mesh", "raycast", "rotate", "screen-to-world-point", "born", "enable-physics3d", "enable-rigidbody", "enable-shape", "impulse", "move", "raytest", "rotatetest", "scale", "trigger-testing", "velocity", "asset-bundle", "minimap-with-camera-rect", "minimap-with-rendertexture", "moving-objects", "ColliderListener", "Hittest", "HeroControl", "follow", "ShowCollider", "Bullet", "Shooter", "TagColliderListener", "PlatformMotion", "SimpleMotion", "Wall", "DragonBonesAttach", "DragonBonesCollider", "DragonBonesCtrl", "DragonBonesMode", "ReplaceSlotDisplay", "loadDragonBonesCtrl", "RuntimeLabel", "doodle", "draw-line", "sine-waves", "arc", "ellipse", "lineTo", "linejoin", "rect", "MotionStreakCtrl", "NativeCallCtrl", "LoadSpine", "SpineAttach", "SpineCollider", "SpineCtrl", "SpineMode", "SpineSkin", "VertexEffect", "ObjectGroupImage", "Puzzle", "ShieldNode", "TiledTile", "dynamic-tiledmap", "LabelLocalized", "en", "zh", "i18n", "polyglot", "chroma", "Menu", "ShowSubMenu", "StorageUtil", "use_reversed_rotateBy", "AudioCtrl", "SearchBlock", "AdaptiveSprite", "Helpers", "Instruction", "ListItem", "SceneList", "TipsCtrl", "TipsManager" ]);