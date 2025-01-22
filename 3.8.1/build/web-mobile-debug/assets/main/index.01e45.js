System.register("chunks:///_virtual/AdapterContent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, UITransform, Vec3, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "b7e58W4jq9D568mZxKnWRGk", "AdapterContent", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          type = _decorator.type;
      var AdapterContent = exports('AdapterContent', (_dec = ccclass('AdapterContent'), _dec2 = type(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AdapterContent, _Component);

        function AdapterContent() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "scroll", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = AdapterContent.prototype;

        _proto.start = function start() {
          this.sizeChanged();
          this.scroll.on(Node.EventType.SIZE_CHANGED, this.sizeChanged, this);
        };

        _proto.sizeChanged = function sizeChanged() {
          var contentSize = this.scroll.getComponent(UITransform).contentSize;
          var pos = this.node.position;
          this.node.setPosition(new Vec3(pos.x, contentSize.height / 2));
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return AdapterContent;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "scroll", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BackButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SceneList.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Vec3, game, ScrollView, director, Layout, v2, Component, sceneArray;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      game = module.game;
      ScrollView = module.ScrollView;
      director = module.director;
      Layout = module.Layout;
      v2 = module.v2;
      Component = module.Component;
    }, function (module) {
      sceneArray = module.sceneArray;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "b20edYWY5pMo6v9nvpXwDsb", "BackButton", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BackButton = exports('BackButton', (_dec = ccclass('BackButton'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BackButton, _Component);

        function BackButton() {
          return _Component.apply(this, arguments) || this;
        }

        BackButton.saveOffset = function saveOffset() {
          if (BackButton._scrollNode) {
            BackButton._offset = new Vec3(0, BackButton._scrollCom.getScrollOffset().y, 0);
          }
        };

        BackButton.saveIndex = function saveIndex(index) {
          BackButton._sceneIndex = index;
          BackButton.refreshButton();
        };

        BackButton.refreshButton = function refreshButton() {
          if (BackButton._sceneIndex === -1) {
            BackButton._prevNode.active = false;
            BackButton._nextNode.active = false;
          } else {
            BackButton._prevNode.active = true;
            BackButton._nextNode.active = true;
          }
        };

        var _proto = BackButton.prototype;

        _proto.__preload = function __preload() {
          // @ts-ignore
          var sceneInfo = game._sceneInfos;
          var firstIndex = 0;
          var lastIndex = 0;
          var sceneString = '';

          for (var i = 0; i < sceneInfo.length; i++) {
            sceneString = sceneInfo[i].url;
            firstIndex = sceneString.lastIndexOf('/') + 1;
            lastIndex = sceneString.lastIndexOf('.scene');
            sceneString = sceneString.substring(firstIndex, lastIndex);

            if (sceneString === 'test-list') {
              continue;
            }

            sceneArray.push(sceneString);
          }
        };

        _proto.start = function start() {
          game.addPersistRootNode(this.node);
          BackButton._scrollNode = this.node.getParent().getChildByPath('Canvas/ScrollView');

          if (BackButton._scrollNode) {
            BackButton._scrollCom = BackButton._scrollNode.getComponent(ScrollView);
          }

          BackButton._blockInput = this.node.getChildByName('BlockInput');
          BackButton._blockInput.active = false;
          BackButton._prevNode = this.node.getChildByName('PrevButton');
          BackButton._nextNode = this.node.getChildByName('NextButton');

          if (BackButton._prevNode && BackButton._nextNode) {
            BackButton.refreshButton();
          }
        };

        _proto.backToList = function backToList() {
          var _this = this;

          BackButton._blockInput.active = true;
          director.loadScene('test-list', function () {
            BackButton._sceneIndex = -1;
            BackButton.refreshButton();
            BackButton._scrollNode = _this.node.getParent().getChildByPath('Canvas/ScrollView');

            if (BackButton._scrollNode) {
              BackButton._scrollCom = BackButton._scrollNode.getComponent(ScrollView); // @ts-ignore

              BackButton._scrollCom._content.getComponent(Layout).updateLayout();

              BackButton._scrollCom.scrollToOffset(v2(BackButton.offset.x, BackButton.offset.y), 0.1, true);
            }

            BackButton._blockInput.active = false;
          });
        };

        _proto.nextscene = function nextscene() {
          BackButton._blockInput.active = true;
          this.updateSceneIndex(true);
          director.loadScene(this.getSceneName(), function () {
            BackButton._blockInput.active = false;
          });
        };

        _proto.prescene = function prescene() {
          BackButton._blockInput.active = true;
          this.updateSceneIndex(false);
          director.loadScene(this.getSceneName(), function () {
            BackButton._blockInput.active = false;
          });
        };

        _proto.updateSceneIndex = function updateSceneIndex(next) {
          if (next) {
            BackButton._sceneIndex + 1 >= sceneArray.length ? BackButton._sceneIndex = 0 : BackButton._sceneIndex += 1;
          } else {
            BackButton._sceneIndex - 1 < 0 ? BackButton._sceneIndex = sceneArray.length - 1 : BackButton._sceneIndex -= 1;
          }
        };

        _proto.getSceneName = function getSceneName() {
          return sceneArray[BackButton._sceneIndex];
        };

        _createClass(BackButton, null, [{
          key: "offset",
          get: function get() {
            return BackButton._offset;
          },
          set: function set(value) {
            BackButton._offset = value;
          }
        }]);

        return BackButton;
      }(Component), _class2._scrollNode = null, _class2._offset = new Vec3(), _class2._scrollCom = null, _class2._sceneIndex = -1, _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BackPackUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, ScrollView, instantiate, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      ScrollView = module.ScrollView;
      instantiate = module.instantiate;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "88c12+9VW9MSa0k23tDsf+r", "BackPackUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BackPackUI = exports('BackPackUI', (_dec = property({
        type: Prefab
      }), _dec2 = property({
        type: ScrollView
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BackPackUI, _Component);

        function BackPackUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "slotPrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "scrollView", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "totalCount", _descriptor3, _assertThisInitialized(_this));

          _this.home = null;
          _this.heroSlots = [];
          return _this;
        }

        var _proto = BackPackUI.prototype;

        _proto.init = function init(home) {
          this.heroSlots.length = 0;
          this.home = home;

          for (var i = 0; i < this.totalCount; ++i) {
            var heroSlot = this.addHeroSlot();
            this.heroSlots.push(heroSlot);
          }
        };

        _proto.addHeroSlot = function addHeroSlot() {
          var heroSlot = instantiate(this.slotPrefab);
          this.scrollView.content.addChild(heroSlot);
          return heroSlot;
        };

        _proto.show = function show() {
          this.node.active = true;
          this.node.emit('fade-in');
        };

        _proto.hide = function hide() {
          this.node.active = false;
          this.node.emit('fade-out');
        };

        return BackPackUI;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "slotPrefab", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "totalCount", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ButtonScaler.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec3, Button, tween, Input, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Button = module.Button;
      tween = module.tween;
      Input = module.Input;
      Component = module.Component;
    }],
    execute: function () {
      var _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "aeffbvAe81PUK6yo5lqC9d9", "ButtonScaler", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ButtonScaler = exports('ButtonScaler', ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ButtonScaler, _Component);

        function ButtonScaler() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "scaleTo", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "transDuration", _descriptor2, _assertThisInitialized(_this));

          _this.initScale = new Vec3();
          _this.button = null;
          _this._scale = new Vec3(1, 1, 1);
          _this._lastScale = new Vec3();
          _this._start = new Vec3();
          return _this;
        }

        var _proto = ButtonScaler.prototype; // use this for initialization

        _proto.onLoad = function onLoad() {
          var self = this;
          self.initScale = this.node.scale;
          self.button = self.getComponent(Button);
          var tweenDown = tween(this._scale);
          var tewenUp = tween(this._scale);
          this.node.getScale(this._start);
          tweenDown.to(this.transDuration, this.scaleTo, {
            easing: 'cubicInOut'
          });
          tewenUp.to(this.transDuration, this._start, {
            easing: 'cubicInOut'
          });

          this._lastScale.set(this._scale);

          function onTouchDown(event) {
            tweenDown.start();
          }

          function onTouchUp(event) {
            tweenDown.stop();
            tewenUp.start();
          }

          this.node.on(Input.EventType.TOUCH_START, onTouchDown, this);
          this.node.on(Input.EventType.TOUCH_END, onTouchUp, this);
          this.node.on(Input.EventType.TOUCH_CANCEL, onTouchUp, this);
        };

        _proto.update = function update() {
          if (!this._scale.equals(this._lastScale)) {
            this.node.setScale(this._scale);

            this._lastScale.set(this._scale);
          }
        };

        return ButtonScaler;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scaleTo", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(1.2, 1.2, 1.2);
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "transDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      })), _class2)) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ChallengeUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Vec3, Input, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Vec3 = module.Vec3;
      Input = module.Input;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "6cf851wT2xK+7apBEpV2PF2", "ChallengeUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ChallengeUI = exports('ChallengeUI', (_dec = ccclass("ChallengeUI"), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ChallengeUI, _Component);

        function ChallengeUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.home = null;

          _initializerDefineProperty(_this, "roleClkArea", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "role", _descriptor2, _assertThisInitialized(_this));

          _this._rot = new Vec3();
          return _this;
        }

        var _proto = ChallengeUI.prototype;

        _proto.start = function start() {// Your initialization goes here.
        };

        _proto.init = function init(home) {
          this.home = home;
          this.roleClkArea.on(Input.EventType.TOUCH_MOVE, this._rotateRole, this);

          this._rot.set(this.role.eulerAngles);
        };

        _proto.show = function show() {
          this.node.active = true;
          this.node.emit('fade-in');
        };

        _proto.hide = function hide() {
          this.node.active = false;
          this.node.emit('fade-out');
        };

        _proto._rotateRole = function _rotateRole(event) {
          var y = event.getDeltaX();

          if (y > 0) {
            this._rot.y += 5;
          } else if (y < 0) {
            this._rot.y -= 5;
          }

          this.role.eulerAngles = this._rot;

          this._rot.set(this.role.eulerAngles);
        };

        return ChallengeUI;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "roleClkArea", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "role", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ChargeUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _class;

      cclegacy._RF.push({}, "731777n3LdF7rEriG3jUd4K", "ChargeUI", undefined);

      var ccclass = _decorator.ccclass;
      var ChargeUI = exports('ChargeUI', ccclass(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ChargeUI, _Component);

        function ChargeUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.home = null;
          _this.parentBtns = null;
          return _this;
        }

        var _proto = ChargeUI.prototype;

        _proto.init = function init(home, parentBtns) {
          this.home = home;
          this.parentBtns = parentBtns;
        };

        _proto.show = function show() {
          this.node.active = true;
          this.node.emit('fade-in');
        };

        _proto.hide = function hide() {
          this.node.active = false;
          this.node.emit('fade-out');
        };

        return ChargeUI;
      }(Component)) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);

        function DebugViewRuntimeControl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));

          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }

        var _proto = DebugViewRuntimeControl.prototype;

        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);

          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }

          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
              y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
              height = 20; // new nodes

          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles'; // title

          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;

            var _labelComponent = newLabel.getComponent(Label);

            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }

          y -= height; // single

          var currentRow = 0;

          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }

            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }

          x += width; // buttons

          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent; // misc

          y -= 40;

          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);

            _newNode.setPosition(x, y - height * _i2, 0.0);

            _newNode.setScale(0.5, 0.5, 0.5);

            _newNode.parent = miscNode;

            var _textComponent = _newNode.getComponentInChildren(RichText);

            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;

            var toggleComponent = _newNode.getComponent(Toggle);

            toggleComponent.isChecked = _i2 ? true : false;

            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);

            this.miscModeToggleList[_i2] = _newNode;
          } // composite


          y -= 150;

          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;

            _newNode2.setPosition(x, y - height * _i3, 0.0);

            _newNode2.setScale(0.5, 0.5, 0.5);

            _newNode2.parent = this.compositeModeToggle.parent;

            var _textComponent2 = _newNode2.getComponentInChildren(RichText);

            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;

            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);

            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };

        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');

          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };

        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };

        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };

        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };

        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };

        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);

          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);

            _toggleComponent.isChecked = true;
          }

          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };

        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };

        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;

          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }

          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }

          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };

        _proto.onLoad = function onLoad() {};

        _proto.update = function update(deltaTime) {};

        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EnergyCounter.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, ProgressBar, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      ProgressBar = module.ProgressBar;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "ee01cuuXWdKPp3K6ZSH+XiO", "EnergyCounter", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var EnergyCounter = exports('EnergyCounter', (_dec = property({
        type: Label
      }), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: ProgressBar
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EnergyCounter, _Component);

        function EnergyCounter() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "timeToRecover", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "totalCount", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "currentCount", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "labelTimer", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "labelCount", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "progressBar", _descriptor6, _assertThisInitialized(_this));

          _this._timer = 0;
          return _this;
        }

        var _proto = EnergyCounter.prototype;

        _proto.onLoad = function onLoad() {
          this._timer = 0;
        };

        _proto.update = function update(dt) {
          var ratio = this._timer / this.timeToRecover;
          this.progressBar.progress = ratio;
          if (this.currentCount > this.totalCount) this.currentCount = this.totalCount;
          var timeLeft = Math.floor(this.timeToRecover - this._timer);
          this.labelCount.string = this.currentCount + '/' + this.totalCount;
          this.labelTimer.string = Math.floor(timeLeft / 60).toString() + ':' + (timeLeft % 60 < 10 ? '0' : '') + timeLeft % 60;
          this._timer += dt;

          if (this._timer >= this.timeToRecover) {
            this._timer = 0;
            this.currentCount++;
          }
        };

        return EnergyCounter;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "timeToRecover", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "totalCount", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "currentCount", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelTimer", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "labelCount", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/head-scale.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Camera, Vec3, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Camera = module.Camera;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "7b93dQiRfVEcq+OvZoAVmnO", "head-scale", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var HeadScale = exports('HeadScale', (_dec = ccclass("HeadScale"), _dec2 = property(Node), _dec3 = property(Camera), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HeadScale, _Component);

        function HeadScale() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "target", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "camera", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "distance", _descriptor3, _assertThisInitialized(_this));

          _this._lastWPos = new Vec3();
          _this._pos = new Vec3();
          return _this;
        }

        var _proto = HeadScale.prototype;

        _proto.update = function update() {
          var wpos = this.target.worldPosition; // @ts-ignore

          if (!this.camera._camera || this._lastWPos.equals(wpos)) {
            return;
          }

          this._lastWPos.set(wpos);

          var camera = this.camera; // [HACK]
          // @ts-ignore

          camera._camera.update();

          camera.convertToUINode(wpos, this.node.parent, this._pos);
          this.node.setPosition(this._pos); // @ts-ignore

          Vec3.transformMat4(this._pos, this.target.worldPosition, camera._camera.matView);
          var ratio = this.distance / Math.abs(this._pos.z);
          var value = Math.floor(ratio * 100) / 100;
          this.node.setScale(value, value, 1);
        };

        return HeadScale;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "distance", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HeroSlot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Label, Sprite, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Label = module.Label;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;

      cclegacy._RF.push({}, "57d15BvDjxLBLxQT6h/Vxab", "HeroSlot", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var getRandomInt = function getRandomInt(min, max) {
        var ratio = Math.random();
        return min + Math.floor((max - min) * ratio);
      };

      var HeroSlot = exports('HeroSlot', (_dec = property([SpriteFrame]), _dec2 = property([SpriteFrame]), _dec3 = property([SpriteFrame]), _dec4 = property([SpriteFrame]), _dec5 = property(Label), _dec6 = property(Sprite), _dec7 = property(Sprite), _dec8 = property(Sprite), _dec9 = property(Sprite), _dec10 = property([Sprite]), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HeroSlot, _Component);

        function HeroSlot() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "sfAttributes", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "sfRanks", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "sfHeroes", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "sfBorders", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "labelLevel", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "spHero", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "spRank", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "spAttribute", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "spBorder", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "spStars", _descriptor10, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = HeroSlot.prototype; // use this for initialization

        _proto.onLoad = function onLoad() {
          this.refresh();
        };

        _proto.refresh = function refresh() {
          var bgIdx = getRandomInt(0, this.sfBorders.length);
          var heroIdx = getRandomInt(0, this.sfHeroes.length);
          var starIdx = getRandomInt(0, this.spStars.length);
          var rankIdx = getRandomInt(0, this.sfRanks.length);
          var attIdx = getRandomInt(0, this.sfAttributes.length);
          var levelIdx = getRandomInt(0, 100);
          this.labelLevel.string = 'LV.' + levelIdx;
          this.spRank.spriteFrame = this.sfRanks[rankIdx];
          this.refreshStars(starIdx);
          this.spBorder.spriteFrame = this.sfBorders[bgIdx];
          this.spAttribute.spriteFrame = this.sfAttributes[attIdx];
          this.spHero.spriteFrame = this.sfHeroes[heroIdx];
        };

        _proto.refreshStars = function refreshStars(count) {
          for (var i = 0; i < this.spStars.length; ++i) {
            if (i <= count) this.spStars[i].enabled = true;else this.spStars[i].enabled = false;
          }
        };

        return HeroSlot;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sfAttributes", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sfRanks", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sfHeroes", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sfBorders", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "labelLevel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "spHero", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "spRank", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "spAttribute", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "spBorder", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "spStars", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HomeUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BackPackUI.ts', './ShopUI.ts', './ChallengeUI.ts', './PanelType.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Animation, Component, BackPackUI, ShopUI, ChallengeUI, PanelType;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Animation = module.Animation;
      Component = module.Component;
    }, function (module) {
      BackPackUI = module.BackPackUI;
    }, function (module) {
      ShopUI = module.ShopUI;
    }, function (module) {
      ChallengeUI = module.ChallengeUI;
    }, function (module) {
      PanelType = module.PanelType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "edc2a7itdpDQ5BDY+sVWkwJ", "HomeUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var HomeUI = exports('HomeUI', (_dec = property(Animation), _dec2 = property(BackPackUI), _dec3 = property(ShopUI), _dec4 = property(ChallengeUI), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HomeUI, _Component);

        function HomeUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "menuAnim", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "backPackUI", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "shopUI", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "challengeUI", _descriptor4, _assertThisInitialized(_this));

          _this.curPanel = PanelType.Home;
          return _this;
        }

        var _proto = HomeUI.prototype; // use this for initialization

        _proto.onLoad = function onLoad() {
          this.curPanel = PanelType.Home; // this.menuAnim.play('menu_reset');
        };

        _proto.start = function start() {
          var _this2 = this;

          this.backPackUI.init(this);
          this.shopUI.init(this, PanelType.Shop);
          this.challengeUI.init(this);
          this.scheduleOnce(function () {
            _this2.menuAnim.play('menu_intro');
          }, 0.5);
        };

        _proto.gotoShop = function gotoShop() {
          if (this.curPanel !== PanelType.Shop) {
            this.shopUI.show();
          }
        };

        _proto.gotoHome = function gotoHome() {
          if (this.curPanel === PanelType.Shop) {
            this.shopUI.hide();
            this.curPanel = PanelType.Home;
          }
        };

        return HomeUI;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "menuAnim", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "backPackUI", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "shopUI", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "challengeUI", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ItemList.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Prefab, instantiate, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _dec3, _dec4, _class4, _class5, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "65624vpQr9Gw44FPeQEHWhM", "ItemList", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Item = exports('Item', (_dec = ccclass('Item'), _dec2 = property(SpriteFrame), _dec(_class = (_class2 = function Item() {
        _initializerDefineProperty(this, "id", _descriptor, this);

        _initializerDefineProperty(this, "itemName", _descriptor2, this);

        _initializerDefineProperty(this, "itemPrice", _descriptor3, this);

        _initializerDefineProperty(this, "iconSF", _descriptor4, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemName", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "itemPrice", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "iconSF", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      var ItemList = exports('ItemList', (_dec3 = property([Item]), _dec4 = property(Prefab), ccclass(_class4 = (_class5 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ItemList, _Component);

        function ItemList() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "items", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "itemPrefab", _descriptor6, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = ItemList.prototype;

        _proto.onLoad = function onLoad() {
          for (var i = 0; i < this.items.length; ++i) {
            var item = instantiate(this.itemPrefab);
            var data = this.items[i];
            this.node.addChild(item);
            item.getComponent('ItemTemplate').init(data);
          }
        };

        return ItemList;
      }(Component), (_descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "items", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "itemPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class5)) || _class4));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ItemTemplate.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Label, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "34f7edJRM5MK6CXDaDOxmg0", "ItemTemplate", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ItemTemplate = exports('ItemTemplate', (_dec = property(Sprite), _dec2 = property(Label), _dec3 = property(Label), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ItemTemplate, _Component);

        function ItemTemplate() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "id", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "icon", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "itemName", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "itemPrice", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = ItemTemplate.prototype; // data: {id,iconSF,itemName,itemPrice}

        _proto.init = function init(data) {
          this.id = data.id;
          this.icon.spriteFrame = data.iconSF;
          this.itemName.string = data.itemName;
          this.itemPrice.string = data.itemPrice + '';
        };

        return ItemTemplate;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "itemName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "itemPrice", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ListItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BackButton.ts', './SceneList.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Label, Button, director, Component, BackButton, sceneArray;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      BackButton = module.BackButton;
    }, function (module) {
      sceneArray = module.sceneArray;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "dfb240gUk5FzLJW2+GbHJRv", "ListItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ListItem = exports('ListItem', (_dec = ccclass('ListItem'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ListItem, _Component);

        function ListItem() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.index = -1;
          _this._name = '';
          _this.label = null;
          _this.button = null;
          return _this;
        }

        var _proto = ListItem.prototype;

        _proto.onload = function onload() {};

        _proto.start = function start() {
          // Your initialization goes here.
          this.index = this.node.getSiblingIndex();
          this._name = '';

          if (this.node) {
            this.label = this.node.getComponentInChildren(Label);
            this.button = this.node.getComponent(Button);
          }

          this.updateItem(this.index, sceneArray[this.index]);
        };

        _proto.loadScene = function loadScene() {
          BackButton.saveOffset();
          BackButton.saveIndex(this.index);
          this.button.interactable = false;
          director.loadScene(this._name, BackButton.refreshButton);
        };

        _proto.updateItem = function updateItem(idx, name) {
          this.index = idx;
          this._name = name;
          this.label.string = name;
        };

        return ListItem;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './migrate-canvas.ts', './AdapterContent.ts', './BackPackUI.ts', './ButtonScaler.ts', './ChallengeUI.ts', './ChargeUI.ts', './EnergyCounter.ts', './HeroSlot.ts', './HomeUI.ts', './ItemList.ts', './ItemTemplate.ts', './PanelTransition.ts', './PanelType.ts', './ShopUI.ts', './SubBtnsUI.ts', './head-scale.ts', './rockerCtrl.ts', './MainMenu.ts', './MenuSidebar.ts', './TabCtrl.ts', './BackButton.ts', './ListItem.ts', './SceneList.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MainMenu.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MenuSidebar.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component, MenuSidebar;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      MenuSidebar = module.MenuSidebar;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "b6ee5hQ9UtBdIh1AYw2U+2g", "MainMenu", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MainMenu = exports('MainMenu', (_dec = property(MenuSidebar), _dec2 = property(Node), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MainMenu, _Component);

        function MainMenu() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "sidebar", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "roller", _descriptor2, _assertThisInitialized(_this));

          _this.panelWidth = 0;
          _this.tabSwitchDuration = 0;
          _this.curPanelIdx = 0;
          return _this;
        }

        var _proto = MainMenu.prototype; // use this for initialization

        _proto.onLoad = function onLoad() {
          var _this$sidebar, _this$roller;

          (_this$sidebar = this.sidebar) == null ? void 0 : _this$sidebar.init(this);
          this.curPanelIdx = 0;
          var pos = (_this$roller = this.roller) == null ? void 0 : _this$roller.position;

          if (pos != undefined) {
            var _this$roller2;

            (_this$roller2 = this.roller) == null ? void 0 : _this$roller2.setPosition(this.curPanelIdx * -this.panelWidth, pos.y, pos.z);
          }
        };

        _proto.switchPanel = function switchPanel(idx) {
          this.curPanelIdx = idx;
        };

        return MainMenu;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sidebar", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "roller", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MenuSidebar.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TabCtrl.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Prefab, Node, instantiate, Component, TabCtrl;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      TabCtrl = module.TabCtrl;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "f6bf2GPwW9BhJfhOpWds9DP", "MenuSidebar", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MenuSidebar = exports('MenuSidebar', (_dec = property([SpriteFrame]), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MenuSidebar, _Component);

        function MenuSidebar() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "tabIcons", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "tabPrefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "container", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "highlight", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "tabWidth", _descriptor5, _assertThisInitialized(_this));

          _this.curTabIdx = -1;
          _this.tabs = [];
          _this.mainMenu = null;
          _this.tabSwitchDuration = -1;
          return _this;
        }

        var _proto = MenuSidebar.prototype; // use this for initialization

        _proto.init = function init(mainMenu) {
          var _this$highlight;

          this.mainMenu = mainMenu;
          this.tabSwitchDuration = mainMenu.tabSwitchDuration;
          this.curTabIdx = 0;
          this.tabs = [];

          for (var i = 0; i < this.tabIcons.length; ++i) {
            var _this$container;

            var iconSF = this.tabIcons[i]; // use '!' to ensure that this overload is being accessed: `export function instantiate(prefab: Prefab): Node`

            var tabParent = instantiate(this.tabPrefab);
            var tab = tabParent.getComponent(TabCtrl);
            (_this$container = this.container) == null ? void 0 : _this$container.addChild(tab.node);
            -tab.init({
              sidebar: this,
              idx: i,
              iconSF: iconSF
            });
            this.tabs[i] = tab;
          }

          this.tabs[this.curTabIdx].turnBig();
          var pos = (_this$highlight = this.highlight) == null ? void 0 : _this$highlight.position;

          if (pos != null) {
            var _this$highlight2;

            (_this$highlight2 = this.highlight) == null ? void 0 : _this$highlight2.setPosition(this.curTabIdx * this.tabWidth, pos.y, pos.z);
          }
        };

        _proto.tabPressed = function tabPressed(idx) {
          var _this$mainMenu;

          for (var i = 0; i < this.tabs.length; ++i) {
            var tab = this.tabs[i];

            if (tab.idx === idx) {
              tab.turnBig();
            } else if (this.curTabIdx === tab.idx) {
              tab.turnSmall();
            }
          }

          this.curTabIdx = idx; // let highlightMove = cc.moveTo(this.tabSwitchDuration, cc.p(this.curTabIdx * this.tabWidth)).easing(cc.easeQuinticActionInOut());
          // this.highlight.stopAllActions();
          // this.highlight.runAction(highlightMove);

          (_this$mainMenu = this.mainMenu) == null ? void 0 : _this$mainMenu.switchPanel(this.curTabIdx);
        };

        return MenuSidebar;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tabIcons", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tabPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "container", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "highlight", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tabWidth", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/migrate-canvas.ts", ['cc'], function () {
  var cclegacy, director, Director, Canvas, Camera, game, Node;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      Director = module.Director;
      Canvas = module.Canvas;
      Camera = module.Camera;
      game = module.game;
      Node = module.Node;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2653cozn2JIcJV4YPvFCM+E", "migrate-canvas", undefined);

      var customLayerMask = 0x000fffff;
      var builtinLayerMask = 0xfff00000;
      director.on(Director.EVENT_AFTER_SCENE_LAUNCH, function () {
        var _director$getScene, _director$getScene2, _director$getScene3;

        var roots = (_director$getScene = director.getScene()) == null ? void 0 : _director$getScene.children;
        var allCanvases = (_director$getScene2 = director.getScene()) == null ? void 0 : _director$getScene2.getComponentsInChildren(Canvas);
        if (allCanvases.length <= 1) return;
        allCanvases = allCanvases.filter(function (x) {
          return !!x.cameraComponent;
        });
        var allCameras = (_director$getScene3 = director.getScene()) == null ? void 0 : _director$getScene3.getComponentsInChildren(Camera);
        var usedLayer = 0;
        allCameras.forEach(function (x) {
          return usedLayer |= x.visibility & customLayerMask;
        });
        var persistCanvas = [];

        for (var i = 0, l = roots.length; i < l; i++) {
          var root = roots[i];
          if (!game.isPersistRootNode(root)) continue;
          var canvases = root.getComponentsInChildren(Canvas);
          if (canvases.length === 0) continue;
          persistCanvas.push.apply(persistCanvas, canvases.filter(function (x) {
            return !!x.cameraComponent;
          }));
        }

        persistCanvas.forEach(function (val) {
          var isLayerCollided = allCanvases.find(function (x) {
            return x !== val && x.cameraComponent.visibility & val.cameraComponent.visibility & customLayerMask;
          });

          if (isLayerCollided) {
            var availableLayers = ~usedLayer;
            var lastAvailableLayer = availableLayers & ~(availableLayers - 1);
            val.cameraComponent.visibility = lastAvailableLayer | val.cameraComponent.visibility & builtinLayerMask;
            setChildrenLayer(val.node, lastAvailableLayer);
            usedLayer |= availableLayers;
          }
        });
      });

      function setChildrenLayer(node, layer) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          node.children[i].layer = layer;
          setChildrenLayer(node.children[i], layer);
        }
      }

      var setParentEngine = Node.prototype.setParent;
      {
        Node.prototype.setParent = function (value, keepWorldTransform) {
          setParentEngine.call(this, value, keepWorldTransform);
          if (!value) return; // find canvas

          var layer = getCanvasCameraLayer(this);

          if (layer) {
            this.layer = layer;
            setChildrenLayer(this, layer);
          }
        };
      }

      function getCanvasCameraLayer(node) {
        var layer = 0;
        var canvas = node.getComponent(Canvas);

        if (canvas && canvas.cameraComponent) {
          if (canvas.cameraComponent.visibility & canvas.node.layer) {
            layer = canvas.node.layer;
          } else {
            layer = canvas.cameraComponent.visibility & ~(canvas.cameraComponent.visibility - 1);
          }

          return layer;
        }

        if (node.parent) {
          layer = getCanvasCameraLayer(node.parent);
        }

        return layer;
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PanelTransition.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec3, Color, UIRenderer, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Color = module.Color;
      UIRenderer = module.UIRenderer;
      Component = module.Component;
    }],
    execute: function () {
      var _class, _class2, _descriptor;

      cclegacy._RF.push({}, "a254b2vmRVFr5nFhCR7Wwwb", "PanelTransition", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PanelTransition = exports('PanelTransition', ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PanelTransition, _Component);

        function PanelTransition() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "duration", _descriptor, _assertThisInitialized(_this));

          _this.outOfWorld = new Vec3();
          _this._color = new Color();
          return _this;
        }

        var _proto = PanelTransition.prototype; // use this for initialization

        _proto.onLoad = function onLoad() {
          this.outOfWorld = new Vec3(3000, 0, 0);
          this.node.setPosition(this.outOfWorld); // let cbFadeOut = cc.callFunc(this.onFadeOutFinish, this);
          // let cbFadeIn = cc.callFunc(this.onFadeInFinish, this);
          // this.actionFadeIn = cc.sequence(cc.spawn(cc.fadeTo(this.duration, 255), cc.scaleTo(this.duration, 1.0)), cbFadeIn);
          // this.actionFadeOut = cc.sequence(cc.spawn(cc.fadeTo(this.duration, 0), cc.scaleTo(this.duration, 2.0)), cbFadeOut);

          this.node.on('fade-in', this.startFadeIn, this);
        };

        _proto.startFadeIn = function startFadeIn() {
          this.node.setPosition(0, 0, 0);
          this.node.setScale(2, 2, 2);
          var renderComp = this.node.getComponent(UIRenderer);

          this._color.set(renderComp.color);

          this._color.a = 0;
          renderComp.color = this._color; // this.node.runAction(this.actionFadeIn);
        };

        _proto.onFadeOutFinish = function onFadeOutFinish() {
          this.node.setPosition(this.outOfWorld);
        };

        return PanelTransition;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "duration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _class2)) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PanelType.ts", ['cc'], function (exports) {
  var cclegacy, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "da599RZhJxDjaD13v8LTO7l", "PanelType", undefined);

      var PanelType = exports('PanelType', /*#__PURE__*/function (PanelType) {
        PanelType[PanelType["Home"] = -1] = "Home";
        PanelType[PanelType["Shop"] = -1] = "Shop";
        return PanelType;
      }({}));
      Enum(PanelType);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/rockerCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec3, Vec2, Node, Animation, input, Input, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Vec2 = module.Vec2;
      Node = module.Node;
      Animation = module.Animation;
      input = module.input;
      Input = module.Input;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "03934dWrlVKLJIbpPCFClz3", "rockerCtrl", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property; // 操作半径

      var TOUCH_RADIUS = 400;
      var ROLE_MOVE_FRAME = 0.2;

      var _tempPos = new Vec3();

      var _tempDelta = new Vec2();

      var Horizontal = new Vec2(1, 0);
      var MOVE_DELTA = 0.2;
      var RockerCtrl = exports('RockerCtrl', (_dec = ccclass("RockerCtrl"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Vec3), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RockerCtrl, _Component);

        function RockerCtrl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "ctrlSprite", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "role", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "originPos", _descriptor3, _assertThisInitialized(_this));

          _this._isTouch = false;
          _this._touchPos = new Vec2();
          _this._startPos = new Vec2();
          _this._movePos = new Vec2();
          _this._animComp = null;
          _this._animState = 'idle';
          return _this;
        }

        var _proto = RockerCtrl.prototype;

        _proto.start = function start() {
          this.ctrlSprite.setPosition(this.originPos);

          _tempPos.set(0, 90, 0);

          this.role.eulerAngles = _tempPos;
          this._animComp = this.role.getComponentInChildren(Animation);
          input.on(Input.EventType.TOUCH_START, this.touchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.touchMove, this);
          input.on(Input.EventType.TOUCH_END, this.touchEnd, this);
        };

        _proto.onDestroy = function onDestroy() {
          input.off(Input.EventType.TOUCH_START, this.touchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this.touchMove, this);
          input.off(Input.EventType.TOUCH_END, this.touchEnd, this);
        };

        _proto.touchStart = function touchStart(touch) {
          this.changeState('cocos_anim_run');
          touch.getUILocation(this._startPos);

          var distance = this._startPos.length();

          if (distance < TOUCH_RADIUS) {
            this._touchPos.set(this._startPos);

            this._movePos.set(this._startPos);

            _tempPos.set(this.ctrlSprite.position);

            this.ctrlSprite.setWorldPosition(this._startPos.x, this._startPos.y, _tempPos.z);
            this._isTouch = true;
          }
        };

        _proto.touchMove = function touchMove(touch) {
          if (!this._isTouch) {
            return;
          }

          touch.getUILocation(this._movePos);
          Vec2.subtract(_tempDelta, this._movePos, this._touchPos); // 计算角色的整体旋转值

          var deltaRadian = _tempDelta.angle(Horizontal);

          var angle = deltaRadian * 180 / Math.PI;
          var rot = this.role.eulerAngles;

          _tempPos.set(rot.x, 90 + Math.sign(_tempDelta.y) * angle, rot.z);

          this.role.eulerAngles = _tempPos; // 重新规划移动方向值

          _tempDelta.multiply2f(MOVE_DELTA, MOVE_DELTA);

          Vec2.add(this._movePos, this._startPos, _tempDelta);

          var distance = this._movePos.length(); // 是否超出限制半径


          if (distance > TOUCH_RADIUS) {
            var radian = this._movePos.angle(Horizontal);

            var x = Math.cos(radian) * TOUCH_RADIUS;
            var y = Math.sin(radian) * TOUCH_RADIUS;

            this._movePos.set(x, y);
          }

          this.ctrlSprite.setWorldPosition(this._movePos.x, this._movePos.y, 0);

          this._touchPos.set(this._movePos);
        };

        _proto.touchEnd = function touchEnd(touch) {
          this._isTouch = false;
          this.changeState('cocos_anim_idle');
          this.ctrlSprite.setPosition(this.originPos);
        };

        _proto.changeState = function changeState(name) {
          if (this._animState === name) {
            return;
          }

          this._animComp.play(name);

          this._animState = name;
        };

        _proto.update = function update() {
          if (!this._isTouch) {
            return;
          }

          _tempPos.set(0, 0, ROLE_MOVE_FRAME);

          this.role.translate(_tempPos);
        };

        return RockerCtrl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ctrlSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "role", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "originPos", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SceneList.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "56ce0MAdDJH2qBewyMuTQnW", "SceneList", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var sceneArray = exports('sceneArray', []);
      var SceneManager = exports('SceneManager', (_dec = ccclass('SceneManager'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SceneManager, _Component);

        function SceneManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "itemPrefab", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = SceneManager.prototype;

        _proto.onLoad = function onLoad() {
          if (this.itemPrefab) {
            for (var i = 0; i < sceneArray.length; i++) {
              var item = instantiate(this.itemPrefab);
              this.node.addChild(item);
            }
          }
        };

        _proto.start = function start() {};

        return SceneManager;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ShopUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ChargeUI.ts', './PanelType.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Animation, Sprite, Node, Component, ChargeUI, PanelType;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Animation = module.Animation;
      Sprite = module.Sprite;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      ChargeUI = module.ChargeUI;
    }, function (module) {
      PanelType = module.PanelType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "0d6f9QGL49Fa4UGVF9fmZrd", "ShopUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ShopUI = exports('ShopUI', (_dec = property(Animation), _dec2 = property(Sprite), _dec3 = property(Node), _dec4 = property(ChargeUI), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ShopUI, _Component);

        function ShopUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "anim", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "figure", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnsNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "chargeUI", _descriptor4, _assertThisInitialized(_this));

          _this._panelType = PanelType.Home;
          _this._home = null;
          return _this;
        }

        var _proto = ShopUI.prototype; // use this for initialization

        _proto.init = function init(home, panelType) {
          this._home = home;
          this.node.active = false;
          this.anim.play('shop_reset');
          this._panelType = panelType; // this.figure.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(1, 1, 0.96), cc.scaleTo(1, 1, 1))));

          this.chargeUI.init(home, this.btnsNode);
        };

        _proto.show = function show() {
          this.node.active = true;
          this.anim.play('shop_intro');
        };

        _proto.hide = function hide() {
          this.anim.play('shop_outro');
        };

        _proto.onFinishShow = function onFinishShow() {
          this._home.curPanel = this._panelType;
        };

        _proto.onFinishHide = function onFinishHide() {
          this.node.active = false;
        };

        return ShopUI;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "anim", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "figure", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnsNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "chargeUI", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SubBtnsUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Animation, Button, Node, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Animation = module.Animation;
      Button = module.Button;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "bc2c4zW09lHwpndXfuPHzZv", "SubBtnsUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SubBtnsUI = exports('SubBtnsUI', (_dec = property(Animation), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Node), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SubBtnsUI, _Component);

        function SubBtnsUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "subBtnsAnim", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnShowSub", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnHideSub", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnContainer", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = SubBtnsUI.prototype; // use this for initialization

        _proto.onLoad = function onLoad() {
          this.btnShowSub.node.active = true;
          this.btnHideSub.node.active = false;
        };

        _proto.showSubBtns = function showSubBtns() {
          this.btnContainer.active = true;
          this.subBtnsAnim.play('sub_pop');
        };

        _proto.hideSubBtns = function hideSubBtns() {
          this.subBtnsAnim.play('sub_fold');
        };

        _proto.onFinishAnim = function onFinishAnim(finishFold) {
          this.btnShowSub.node.active = finishFold;
          this.btnHideSub.node.active = !finishFold;
        };

        return SubBtnsUI;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "subBtnsAnim", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnShowSub", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnHideSub", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnContainer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TabCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Node, Animation, v3, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Node = module.Node;
      Animation = module.Animation;
      v3 = module.v3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "9e9b33B6eVBKrVUSHykREjo", "TabCtrl", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TabCtrl = exports('TabCtrl', (_dec = property(Sprite), _dec2 = property(Node), _dec3 = property(Animation), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TabCtrl, _Component);

        function TabCtrl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "idx", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "icon", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "arrow", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "anim", _descriptor4, _assertThisInitialized(_this));

          _this.sidebar = null;
          return _this;
        }

        var _proto = TabCtrl.prototype; // use this for initialization

        _proto.init = function init(tabInfo) {
          // sidebar, idx, iconSF
          this.sidebar = tabInfo.sidebar;
          this.idx = tabInfo.idx;

          if (this.icon != null) {
            this.icon.spriteFrame = tabInfo.iconSF;
          }

          this.node.on('touchstart', this.onPressed.bind(this), this.node);

          if (this.arrow) {
            this.arrow.scale = v3(0, 0);
          }
        };

        _proto.onPressed = function onPressed() {
          var _this$sidebar;

          (_this$sidebar = this.sidebar) == null ? void 0 : _this$sidebar.tabPressed(this.idx);
        };

        _proto.turnBig = function turnBig() {
          var _this$anim;

          (_this$anim = this.anim) == null ? void 0 : _this$anim.play('tab_turn_big');
        };

        _proto.turnSmall = function turnSmall() {
          var _this$anim2;

          (_this$anim2 = this.anim) == null ? void 0 : _this$anim2.play('tab_turn_small');
        };

        return TabCtrl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "idx", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "arrow", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "anim", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});