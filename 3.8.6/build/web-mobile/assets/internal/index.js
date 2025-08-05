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
          _this.hideButtonLabel = void 0;
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
            height = 20;

          // new nodes
          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles';

          // title
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
          y -= height;
          // single
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
          x += width;
          // buttons
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
          this.hideButtonLabel = labelComponent;

          // misc
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
          }

          // composite
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

System.register("chunks:///_virtual/internal", ['./debug-view-runtime-control.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/internal', 'chunks:///_virtual/internal'); 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ZpbGU6L0Q6L2NvY29zL2VkaXRvcnMvQ3JlYXRvci8zLjguNi9yZXNvdXJjZXMvcmVzb3VyY2VzLzNkL2VuZ2luZS9lZGl0b3IvYXNzZXRzL3Rvb2xzL2ZpbGU6L0Q6L2NvY29zL2VkaXRvcnMvQ3JlYXRvci8zLjguNi9yZXNvdXJjZXMvcmVzb3VyY2VzLzNkL2VuZ2luZS9lZGl0b3IvYXNzZXRzL3Rvb2xzL2RlYnVnLXZpZXctcnVudGltZS1jb250cm9sLnRzIl0sIm5hbWVzIjpbImNjY2xhc3MiLCJfZGVjb3JhdG9yIiwicHJvcGVydHkiLCJEZWJ1Z1ZpZXdSdW50aW1lQ29udHJvbCIsIl9kZWMiLCJfZGVjMiIsIk5vZGUiLCJfZGVjMyIsIl9kZWM0IiwiX2NsYXNzIiwiX2NsYXNzMiIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHNMb29zZSIsIl90aGlzIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJfaW5pdGlhbGl6ZXJEZWZpbmVQcm9wZXJ0eSIsIl9kZXNjcmlwdG9yIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIl9kZXNjcmlwdG9yMiIsIl9kZXNjcmlwdG9yMyIsIl9zaW5nbGUiLCJzdHJTaW5nbGUiLCJzdHJDb21wb3NpdGUiLCJzdHJNaXNjIiwiY29tcG9zaXRlTW9kZVRvZ2dsZUxpc3QiLCJzaW5nbGVNb2RlVG9nZ2xlTGlzdCIsIm1pc2NNb2RlVG9nZ2xlTGlzdCIsInRleHRDb21wb25lbnRMaXN0IiwibGFiZWxDb21wb25lbnRMaXN0IiwidGV4dENvbnRlbnRMaXN0IiwiaGlkZUJ1dHRvbkxhYmVsIiwiX2N1cnJlbnRDb2xvckluZGV4Iiwic3RyQ29sb3IiLCJjb2xvciIsIkNvbG9yIiwiV0hJVEUiLCJCTEFDSyIsIlJFRCIsIkdSRUVOIiwiQkxVRSIsIl9wcm90byIsInByb3RvdHlwZSIsInN0YXJ0IiwiY2FudmFzIiwibm9kZSIsInBhcmVudCIsImdldENvbXBvbmVudCIsIkNhbnZhcyIsImNvbnNvbGUiLCJlcnJvciIsInVpVHJhbnNmb3JtIiwiVUlUcmFuc2Zvcm0iLCJoYWxmU2NyZWVuV2lkdGgiLCJ3aWR0aCIsImhhbGZTY3JlZW5IZWlnaHQiLCJoZWlnaHQiLCJ4IiwieSIsIm1pc2NOb2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJidXR0b25Ob2RlIiwiaW5zdGFudGlhdGUiLCJuYW1lIiwidGl0bGVOb2RlIiwiaSIsIm5ld0xhYmVsIiwiRW5hYmxlQWxsQ29tcG9zaXRlTW9kZUJ1dHRvbiIsInNldFBvc2l0aW9uIiwic2V0U2NhbGUiLCJsYWJlbENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwib3ZlcmZsb3ciLCJjdXJyZW50Um93IiwibmV3Tm9kZSIsInNpbmdsZU1vZGVUb2dnbGUiLCJ0ZXh0Q29tcG9uZW50IiwiZ2V0Q29tcG9uZW50SW5DaGlsZHJlbiIsIlJpY2hUZXh0Iiwib24iLCJUb2dnbGUiLCJFdmVudFR5cGUiLCJUT0dHTEUiLCJ0b2dnbGVTaW5nbGVNb2RlIiwiQnV0dG9uIiwiQ0xJQ0siLCJlbmFibGVBbGxDb21wb3NpdGVNb2RlIiwiY2hhbmdlQ29sb3JCdXR0b24iLCJjaGFuZ2VUZXh0Q29sb3IiLCJIaWRlQnV0dG9uIiwiaGlkZVVJIiwiY29tcG9zaXRlTW9kZVRvZ2dsZSIsInRvZ2dsZUNvbXBvbmVudCIsImlzQ2hlY2tlZCIsInRvZ2dsZUxpZ2h0aW5nV2l0aEFsYmVkbyIsInRvZ2dsZUNTTUNvbG9yYXRpb24iLCJ0b2dnbGVDb21wb3NpdGVNb2RlIiwiaXNUZXh0TWF0Y2hlZCIsInRleHRVSSIsInRleHREZXNjcmlwdGlvbiIsInRlbXBUZXh0IiwiU3RyaW5nIiwiZmluZEluZGV4Iiwic2VhcmNoIiwic3Vic3RyIiwidG9nZ2xlIiwiZGVidWdWaWV3IiwiZGlyZWN0b3IiLCJyb290Iiwic2luZ2xlTW9kZSIsImVuYWJsZUNvbXBvc2l0ZU1vZGUiLCJsaWdodGluZ1dpdGhBbGJlZG8iLCJjc21MYXllckNvbG9yYXRpb24iLCJidXR0b24iLCJhY3RpdmVWYWx1ZSIsImFjdGl2ZSIsIm9uTG9hZCIsInVwZGF0ZSIsImRlbHRhVGltZSIsIkNvbXBvbmVudCIsIl9hcHBseURlY29yYXRlZERlc2NyaXB0b3IiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJpbml0aWFsaXplciIsIl9SRiIsInBvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFDQSxJQUFRQSxPQUFPLEdBQWVDLFVBQVUsQ0FBaENELE9BQU87UUFBRUUsUUFBUSxHQUFLRCxVQUFVLENBQXZCQyxRQUFRO1VBR1pDLHVCQUF1Qix1Q0FBQUMsSUFBQSxHQURuQ0osT0FBTyxDQUFDLGtDQUFrQyxDQUFDLEVBQUFLLEtBQUEsR0FFdkNILFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLEVBQUFDLEtBQUEsR0FFZEwsUUFBUSxDQUFDSSxJQUFJLENBQUMsRUFBQUUsS0FBQSxHQUVkTixRQUFRLENBQUNJLElBQUksQ0FBQyxFQUFBRixJQUFBLENBQUFLLE1BQUEsSUFBQUMsT0FBQSwwQkFBQUMsVUFBQTtRQUFBQyxjQUFBLENBQUFULHVCQUFBLEVBQUFRLFVBQUE7UUFBQSxTQUFBUjtVQUFBLElBQUFVLEtBQUE7VUFBQSxTQUFBQyxJQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUFBQyxJQUFBLE9BQUFDLEtBQUEsQ0FBQUosSUFBQSxHQUFBSyxJQUFBLE1BQUFBLElBQUEsR0FBQUwsSUFBQSxFQUFBSyxJQUFBO1lBQUFGLElBQUEsQ0FBQUUsSUFBQSxJQUFBSixTQUFBLENBQUFJLElBQUE7O1VBQUFOLEtBQUEsR0FBQUYsVUFBQSxDQUFBUyxJQUFBLENBQUFDLEtBQUEsQ0FBQVYsVUFBQSxTQUFBVyxNQUFBLENBQUFMLElBQUE7VUFBQU0sMEJBQUEsQ0FBQVYsS0FBQSx5QkFBQVcsV0FBQSxFQUFBQyxzQkFBQSxDQUFBWixLQUFBO1VBQUFVLDBCQUFBLENBQUFWLEtBQUEsc0JBQUFhLFlBQUEsRUFBQUQsc0JB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TixTQUFBQSxPQUFPQyxTQUFpQixFQUFFLEVBQ3pCO1FBQUEsT0FBQTNILHVCQUFBO01BQUEsRUF4VHdDNEgsU0FBUyxJQUFBdkcsV0FBQSxHQUFBd0cseUJBQUEsQ0FBQXRILE9BQUEsQ0FBQXVDLFNBQUEsMEJBQUE1QyxLQUFBO1FBQUE0SCxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsUUFBQTtRQUFBQyxXQUFBLFdBQUFBO1VBQUEsT0FFZixJQUFJOztNQUFBLElBQUExRyxZQUFBLEdBQUFzRyx5QkFBQSxDQUFBdEgsT0FBQSxDQUFBdUMsU0FBQSx1QkFBQTFDLEtBQUE7UUFBQTBILFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxRQUFBO1FBQUFDLFdBQUEsV0FBQUE7VUFBQSxPQUVQLElBQUk7O01BQUEsSUFBQXpHLFlBQUEsR0FBQXFHLHlCQUFBLENBQUF0SCxPQUFBLENBQUF1QyxTQUFBLG1DQUFBekMsS0FBQTtRQUFBeUgsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFFBQUE7UUFBQUMsV0FBQSxXQUFBQTtVQUFBLE9BRVEsSUFBSTs7TUFBQSxLQUFBMUgsT0FBQSxNQUFBRCxNQUFBO2NBbVRuRCxDQUFBNEgsR0FBQSxDQUFBQyxHQUFBIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbG9yLCBDYW52YXMsIFVJVHJhbnNmb3JtLCBpbnN0YW50aWF0ZSwgbWF0aCwgVG9nZ2xlLCBUZXh0dXJlQ3ViZSwgX2RlY29yYXRvciwgQ29tcG9uZW50LCBCdXR0b24sIGxhYmVsQXNzZW1ibGVyLCBnYW1lLCBkaXJlY3RvciwgTm9kZSwgU2NlbmUsIHJlbmRlcmVyLCBDYW1lcmFDb21wb25lbnQsIExhYmVsLCBGb3J3YXJkUGlwZWxpbmUsIFJpY2hUZXh0IH0gZnJvbSAnY2MnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ2ludGVybmFsLkRlYnVnVmlld1J1bnRpbWVDb250cm9sJylcclxuZXhwb3J0IGNsYXNzIERlYnVnVmlld1J1bnRpbWVDb250cm9sIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShOb2RlKVxyXG4gICAgY29tcG9zaXRlTW9kZVRvZ2dsZTogTm9kZSB8IG51bGwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KE5vZGUpXHJcbiAgICBzaW5nbGVNb2RlVG9nZ2xlOiBOb2RlIHwgbnVsbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoTm9kZSlcclxuICAgIEVuYWJsZUFsbENvbXBvc2l0ZU1vZGVCdXR0b246IE5vZGUgfCBudWxsID0gbnVsbDtcclxuXHRfc2luZ2xlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgc3RyU2luZ2xlOiBzdHJpbmdbXSA9IFtcclxuICAgICAgICAnTm8gU2luZ2xlIERlYnVnJyxcclxuICAgICAgICAnVmVydGV4IENvbG9yJyxcclxuICAgICAgICAnVmVydGV4IE5vcm1hbCcsXHJcbiAgICAgICAgJ1ZlcnRleCBUYW5nZW50JyxcclxuICAgICAgICAnV29ybGQgUG9zaXRpb24nLFxyXG4gICAgICAgICdWZXJ0ZXggTWlycm9yJyxcclxuICAgICAgICAnRmFjZSBTaWRlJyxcclxuICAgICAgICAnVVYwJyxcclxuICAgICAgICAnVVYxJyxcclxuICAgICAgICAnVVYgTGlnaHRtYXAnLFxyXG4gICAgICAgICdQcm9qZWN0IERlcHRoJyxcclxuICAgICAgICAnTGluZWFyIERlcHRoJyxcclxuXHJcbiAgICAgICAgJ0ZyYWdtZW50IE5vcm1hbCcsXHJcbiAgICAgICAgJ0ZyYWdtZW50IFRhbmdlbnQnLFxyXG4gICAgICAgICdGcmFnbWVudCBCaW5vcm1hbCcsXHJcbiAgICAgICAgJ0Jhc2UgQ29sb3InLFxyXG4gICAgICAgICdEaWZmdXNlIENvbG9yJyxcclxuICAgICAgICAnU3BlY3VsYXIgQ29sb3InLFxyXG4gICAgICAgICdUcmFuc3BhcmVuY3knLFxyXG4gICAgICAgICdNZXRhbGxpYycsXHJcbiAgICAgICAgJ1JvdWdobmVzcycsXHJcbiAgICAgICAgJ1NwZWN1bGFyIEludGVuc2l0eScsXHJcbiAgICAgICAgJ0lPUicsXHJcblxyXG4gICAgICAgICdEaXJlY3QgRGlmZnVzZScsXHJcbiAgICAgICAgJ0RpcmVjdCBTcGVjdWxhcicsXHJcbiAgICAgICAgJ0RpcmVjdCBBbGwnLFxyXG4gICAgICAgICdFbnYgRGlmZnVzZScsXHJcbiAgICAgICAgJ0VudiBTcGVjdWxhcicsXHJcbiAgICAgICAgJ0VudiBBbGwnLFxyXG4gICAgICAgICdFbWlzc2l2ZScsXHJcbiAgICAgICAgJ0xpZ2h0IE1hcCcsXHJcbiAgICAgICAgJ1NoYWRvdycsXHJcbiAgICAgICAgJ0FPJyxcclxuXHJcbiAgICAgICAgJ0ZyZXNuZWwnLFxyXG4gICAgICAgICdEaXJlY3QgVHJhbnNtaXQgRGlmZnVzZScsXHJcbiAgICAgICAgJ0RpcmVjdCBUcmFuc21pdCBTcGVjdWxhcicsXHJcbiAgICAgICAgJ0VudiBUcmFuc21pdCBEaWZmdXNlJyxcclxuICAgICAgICAnRW52IFRyYW5zbWl0IFNwZWN1bGFyJyxcclxuICAgICAgICAnVHJhbnNtaXQgQWxsJyxcclxuICAgICAgICAnRGlyZWN0IEludGVybmFsIFNwZWN1bGFyJyxcclxuICAgICAgICAnRW52IEludGVybmFsIFNwZWN1bGFyJyxcclxuICAgICAgICAnSW50ZXJuYWwgQWxsJyxcclxuXHJcbiAgICAgICAgJ0ZvZycsXHJcbiAgICBdO1xyXG4gICAgcHJpdmF0ZSBzdHJDb21wb3NpdGU6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICdEaXJlY3QgRGlmZnVzZScsXHJcbiAgICAgICAgJ0RpcmVjdCBTcGVjdWxhcicsXHJcbiAgICAgICAgJ0VudiBEaWZmdXNlJyxcclxuICAgICAgICAnRW52IFNwZWN1bGFyJyxcclxuICAgICAgICAnRW1pc3NpdmUnLFxyXG4gICAgICAgICdMaWdodCBNYXAnLFxyXG4gICAgICAgICdTaGFkb3cnLFxyXG4gICAgICAgICdBTycsXHJcblxyXG4gICAgICAgICdOb3JtYWwgTWFwJyxcclxuICAgICAgICAnRm9nJyxcclxuXHJcbiAgICAgICAgJ1RvbmUgTWFwcGluZycsXHJcbiAgICAgICAgJ0dhbW1hIENvcnJlY3Rpb24nLFxyXG5cclxuICAgICAgICAnRnJlc25lbCcsXHJcbiAgICAgICAgJ1RyYW5zbWl0IERpZmZ1c2UnLFxyXG4gICAgICAgICdUcmFuc21pdCBTcGVjdWxhcicsXHJcbiAgICAgICAgJ0ludGVybmFsIFNwZWN1bGFyJyxcclxuICAgICAgICAnVFQnLFxyXG4gICAgXTtcclxuICAgIHByaXZhdGUgc3RyTWlzYzogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgJ0NTTSBMYXllciBDb2xvcmF0aW9uJyxcclxuICAgICAgICAnTGlnaHRpbmcgV2l0aCBBbGJlZG8nLFxyXG4gICAgXTtcclxuXHJcbiAgICBwcml2YXRlIGNvbXBvc2l0ZU1vZGVUb2dnbGVMaXN0OiBOb2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgc2luZ2xlTW9kZVRvZ2dsZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBtaXNjTW9kZVRvZ2dsZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSB0ZXh0Q29tcG9uZW50TGlzdDogUmljaFRleHRbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBsYWJlbENvbXBvbmVudExpc3Q6IExhYmVsW10gPSBbXTtcclxuICAgIHByaXZhdGUgdGV4dENvbnRlbnRMaXN0OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBoaWRlQnV0dG9uTGFiZWw6IExhYmVsO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gZ2V0IGNhbnZhcyByZXNvbHV0aW9uXHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoQ2FudmFzKTtcclxuICAgICAgICBpZiAoIWNhbnZhcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdkZWJ1Zy12aWV3LXJ1bnRpbWUtY29udHJvbCBzaG91bGQgYmUgY2hpbGQgb2YgQ2FudmFzJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHVpVHJhbnNmb3JtID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoVUlUcmFuc2Zvcm0pO1xyXG4gICAgICAgIGNvbnN0IGhhbGZTY3JlZW5XaWR0aCA9IHVpVHJhbnNmb3JtLndpZHRoICogMC41O1xyXG4gICAgICAgIGNvbnN0IGhhbGZTY3JlZW5IZWlnaHQgPSB1aVRyYW5zZm9ybS5oZWlnaHQgKiAwLjU7XHJcblxyXG4gICAgICAgIGxldCB4ID0gLWhhbGZTY3JlZW5XaWR0aCArIGhhbGZTY3JlZW5XaWR0aCAqIDAuMSwgeSA9IGhhbGZTY3JlZW5IZWlnaHQgLSBoYWxmU2NyZWVuSGVpZ2h0ICogMC4xO1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gMjAwLCBoZWlnaHQgPSAyMDtcclxuXHJcbiAgICAgICAgLy8gbmV3IG5vZGVzXHJcbiAgICAgICAgY29uc3QgbWlzY05vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ01pc2NNb2RlJyk7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uTm9kZSA9IGluc3RhbnRpYXRlKG1pc2NOb2RlKTtcclxuICAgICAgICBidXR0b25Ob2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBidXR0b25Ob2RlLm5hbWUgPSAnQnV0dG9ucyc7XHJcbiAgICAgICAgY29uc3QgdGl0bGVOb2RlID0gaW5zdGFudGlhdGUobWlzY05vZGUpO1xyXG4gICAgICAgIHRpdGxlTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgdGl0bGVOb2RlLm5hbWUgPSAnVGl0bGVzJztcclxuXHJcbiAgICAgICAgLy8gdGl0bGVcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdMYWJlbCA9IGluc3RhbnRpYXRlKHRoaXMuRW5hYmxlQWxsQ29tcG9zaXRlTW9kZUJ1dHRvbi5nZXRDaGlsZEJ5TmFtZSgnTGFiZWwnKSk7XHJcbiAgICAgICAgICAgIG5ld0xhYmVsLnNldFBvc2l0aW9uKHggKyAoaSA+IDAgPyA1MCArIHdpZHRoICogMiA6IDE1MCksIHksIDAuMCk7XHJcbiAgICAgICAgICAgIG5ld0xhYmVsLnNldFNjYWxlKDAuNzUsIDAuNzUsIDAuNzUpO1xyXG4gICAgICAgICAgICBuZXdMYWJlbC5wYXJlbnQgPSB0aXRsZU5vZGU7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsQ29tcG9uZW50ID0gbmV3TGFiZWwuZ2V0Q29tcG9uZW50KExhYmVsKTtcclxuICAgICAgICAgICAgbGFiZWxDb21wb25lbnQuc3RyaW5nID0gaSA/ICctLS0tLS0tLS0tQ29tcG9zaXRlIE1vZGUtLS0tLS0tLS0tJyA6ICctLS0tLS0tLS0tU2luZ2xlIE1vZGUtLS0tLS0tLS0tJztcclxuICAgICAgICAgICAgbGFiZWxDb21wb25lbnQuY29sb3IgPSBDb2xvci5XSElURTtcclxuICAgICAgICAgICAgbGFiZWxDb21wb25lbnQub3ZlcmZsb3cgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsQ29tcG9uZW50TGlzdFt0aGlzLmxhYmVsQ29tcG9uZW50TGlzdC5sZW5ndGhdID0gbGFiZWxDb21wb25lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB5IC09IGhlaWdodDtcclxuICAgICAgICAvLyBzaW5nbGVcclxuICAgICAgICBsZXQgY3VycmVudFJvdyA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0clNpbmdsZS5sZW5ndGg7IGkrKywgY3VycmVudFJvdysrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID09PSB0aGlzLnN0clNpbmdsZS5sZW5ndGggPj4gMSkge1xyXG4gICAgICAgICAgICAgICAgeCArPSB3aWR0aDtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRSb3cgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld05vZGUgPSBpID8gaW5zdGFudGlhdGUodGhpcy5zaW5nbGVNb2RlVG9nZ2xlKSA6IHRoaXMuc2luZ2xlTW9kZVRvZ2dsZTtcclxuICAgICAgICAgICAgbmV3Tm9kZS5zZXRQb3NpdGlvbih4LCB5IC0gaGVpZ2h0ICogY3VycmVudFJvdywgMC4wKTtcclxuICAgICAgICAgICAgbmV3Tm9kZS5zZXRTY2FsZSgwLjUsIDAuNSwgMC41KTtcclxuICAgICAgICAgICAgbmV3Tm9kZS5wYXJlbnQgPSB0aGlzLnNpbmdsZU1vZGVUb2dnbGUucGFyZW50O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGV4dENvbXBvbmVudCA9IG5ld05vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihSaWNoVGV4dCk7XHJcbiAgICAgICAgICAgIHRleHRDb21wb25lbnQuc3RyaW5nID0gdGhpcy5zdHJTaW5nbGVbaV07XHJcbiAgICAgICAgICAgIHRoaXMudGV4dENvbXBvbmVudExpc3RbdGhpcy50ZXh0Q29tcG9uZW50TGlzdC5sZW5ndGhdID0gdGV4dENvbXBvbmVudDtcclxuICAgICAgICAgICAgdGhpcy50ZXh0Q29udGVudExpc3RbdGhpcy50ZXh0Q29udGVudExpc3QubGVuZ3RoXSA9IHRleHRDb21wb25lbnQuc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgbmV3Tm9kZS5vbihUb2dnbGUuRXZlbnRUeXBlLlRPR0dMRSwgdGhpcy50b2dnbGVTaW5nbGVNb2RlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlTW9kZVRvZ2dsZUxpc3RbaV0gPSBuZXdOb2RlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgeCArPSB3aWR0aDtcclxuICAgICAgICAvLyBidXR0b25zXHJcbiAgICAgICAgdGhpcy5FbmFibGVBbGxDb21wb3NpdGVNb2RlQnV0dG9uLnNldFBvc2l0aW9uKHggKyAxNSwgeSwgMC4wKTtcclxuICAgICAgICB0aGlzLkVuYWJsZUFsbENvbXBvc2l0ZU1vZGVCdXR0b24uc2V0U2NhbGUoMC41LCAwLjUsIDAuNSk7XHJcbiAgICAgICAgdGhpcy5FbmFibGVBbGxDb21wb3NpdGVNb2RlQnV0dG9uLm9uKEJ1dHRvbi5FdmVudFR5cGUuQ0xJQ0ssIHRoaXMuZW5hYmxlQWxsQ29tcG9zaXRlTW9kZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5FbmFibGVBbGxDb21wb3NpdGVNb2RlQnV0dG9uLnBhcmVudCA9IGJ1dHRvbk5vZGU7XHJcbiAgICAgICAgbGV0IGxhYmVsQ29tcG9uZW50ID0gdGhpcy5FbmFibGVBbGxDb21wb3NpdGVNb2RlQnV0dG9uLmdldENvbXBvbmVudEluQ2hpbGRyZW4oTGFiZWwpO1xyXG4gICAgICAgIHRoaXMubGFiZWxDb21wb25lbnRMaXN0W3RoaXMubGFiZWxDb21wb25lbnRMaXN0Lmxlbmd0aF0gPSBsYWJlbENvbXBvbmVudDtcclxuXHJcbiAgICAgICAgY29uc3QgY2hhbmdlQ29sb3JCdXR0b24gPSBpbnN0YW50aWF0ZSh0aGlzLkVuYWJsZUFsbENvbXBvc2l0ZU1vZGVCdXR0b24pO1xyXG4gICAgICAgIGNoYW5nZUNvbG9yQnV0dG9uLnNldFBvc2l0aW9uKHggKyA5MCwgeSwgMC4wKTtcclxuICAgICAgICBjaGFuZ2VDb2xvckJ1dHRvbi5zZXRTY2FsZSgwLjUsIDAuNSwgMC41KTtcclxuICAgICAgICBjaGFuZ2VDb2xvckJ1dHRvbi5vbihCdXR0b24uRXZlbnRUeXBlLkNMSUNLLCB0aGlzLmNoYW5nZVRleHRDb2xvciwgdGhpcyk7XHJcbiAgICAgICAgY2hhbmdlQ29sb3JCdXR0b24ucGFyZW50ID0gYnV0dG9uTm9kZTtcclxuICAgICAgICBsYWJlbENvbXBvbmVudCA9IGNoYW5nZUNvbG9yQnV0dG9uLmdldENvbXBvbmVudEluQ2hpbGRyZW4oTGFiZWwpO1xyXG4gICAgICAgIGxhYmVsQ29tcG9uZW50LnN0cmluZyA9ICdUZXh0Q29sb3InO1xyXG4gICAgICAgIHRoaXMubGFiZWxDb21wb25lbnRMaXN0W3RoaXMubGFiZWxDb21wb25lbnRMaXN0Lmxlbmd0aF0gPSBsYWJlbENvbXBvbmVudDtcclxuXHJcbiAgICAgICAgY29uc3QgSGlkZUJ1dHRvbiA9IGluc3RhbnRpYXRlKHRoaXMuRW5hYmxlQWxsQ29tcG9zaXRlTW9kZUJ1dHRvbik7XHJcbiAgICAgICAgSGlkZUJ1dHRvbi5zZXRQb3NpdGlvbih4ICsgMjAwLCB5LCAwLjApO1xyXG4gICAgICAgIEhpZGVCdXR0b24uc2V0U2NhbGUoMC41LCAwLjUsIDAuNSk7XHJcbiAgICAgICAgSGlkZUJ1dHRvbi5vbihCdXR0b24uRXZlbnRUeXBlLkNMSUNLLCB0aGlzLmhpZGVVSSwgdGhpcyk7XHJcbiAgICAgICAgSGlkZUJ1dHRvbi5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgIGxhYmVsQ29tcG9uZW50ID0gSGlkZUJ1dHRvbi5nZXRDb21wb25lbnRJbkNoaWxkcmVuKExhYmVsKTtcclxuICAgICAgICBsYWJlbENvbXBvbmVudC5zdHJpbmcgPSAnSGlkZSBVSSc7XHJcbiAgICAgICAgdGhpcy5sYWJlbENvbXBvbmVudExpc3RbdGhpcy5sYWJlbENvbXBvbmVudExpc3QubGVuZ3RoXSA9IGxhYmVsQ29tcG9uZW50O1xyXG4gICAgICAgIHRoaXMuaGlkZUJ1dHRvbkxhYmVsID0gbGFiZWxDb21wb25lbnQ7XHJcblxyXG4gICAgICAgIC8vIG1pc2NcclxuICAgICAgICB5IC09IDQwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdHJNaXNjLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld05vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmNvbXBvc2l0ZU1vZGVUb2dnbGUpO1xyXG4gICAgICAgICAgICBuZXdOb2RlLnNldFBvc2l0aW9uKHgsIHkgLSBoZWlnaHQgKiBpLCAwLjApO1xyXG4gICAgICAgICAgICBuZXdOb2RlLnNldFNjYWxlKDAuNSwgMC41LCAwLjUpO1xyXG4gICAgICAgICAgICBuZXdOb2RlLnBhcmVudCA9IG1pc2NOb2RlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGV4dENvbXBvbmVudCA9IG5ld05vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihSaWNoVGV4dCk7XHJcbiAgICAgICAgICAgIHRleHRDb21wb25lbnQuc3RyaW5nID0gdGhpcy5zdHJNaXNjW2ldO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRDb21wb25lbnRMaXN0W3RoaXMudGV4dENvbXBvbmVudExpc3QubGVuZ3RoXSA9IHRleHRDb21wb25lbnQ7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dENvbnRlbnRMaXN0W3RoaXMudGV4dENvbnRlbnRMaXN0Lmxlbmd0aF0gPSB0ZXh0Q29tcG9uZW50LnN0cmluZztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRvZ2dsZUNvbXBvbmVudCA9IG5ld05vZGUuZ2V0Q29tcG9uZW50KFRvZ2dsZSk7XHJcbiAgICAgICAgICAgIHRvZ2dsZUNvbXBvbmVudC5pc0NoZWNrZWQgPSBpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICBuZXdOb2RlLm9uKFRvZ2dsZS5FdmVudFR5cGUuVE9HR0xFLCBpID8gdGhpcy50b2dnbGVMaWdodGluZ1dpdGhBbGJlZG8gOiB0aGlzLnRvZ2dsZUNTTUNvbG9yYXRpb24sIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm1pc2NNb2RlVG9nZ2xlTGlzdFtpXSA9IG5ld05vZGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb21wb3NpdGVcclxuICAgICAgICB5IC09IDE1MDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RyQ29tcG9zaXRlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld05vZGUgPSBpID8gaW5zdGFudGlhdGUodGhpcy5jb21wb3NpdGVNb2RlVG9nZ2xlKSA6IHRoaXMuY29tcG9zaXRlTW9kZVRvZ2dsZTtcclxuICAgICAgICAgICAgbmV3Tm9kZS5zZXRQb3NpdGlvbih4LCB5IC0gaGVpZ2h0ICogaSwgMC4wKTtcclxuICAgICAgICAgICAgbmV3Tm9kZS5zZXRTY2FsZSgwLjUsIDAuNSwgMC41KTtcclxuICAgICAgICAgICAgbmV3Tm9kZS5wYXJlbnQgPSB0aGlzLmNvbXBvc2l0ZU1vZGVUb2dnbGUucGFyZW50O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGV4dENvbXBvbmVudCA9IG5ld05vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihSaWNoVGV4dCk7XHJcbiAgICAgICAgICAgIHRleHRDb21wb25lbnQuc3RyaW5nID0gdGhpcy5zdHJDb21wb3NpdGVbaV07XHJcbiAgICAgICAgICAgIHRoaXMudGV4dENvbXBvbmVudExpc3RbdGhpcy50ZXh0Q29tcG9uZW50TGlzdC5sZW5ndGhdID0gdGV4dENvbXBvbmVudDtcclxuICAgICAgICAgICAgdGhpcy50ZXh0Q29udGVudExpc3RbdGhpcy50ZXh0Q29udGVudExpc3QubGVuZ3RoXSA9IHRleHRDb21wb25lbnQuc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgbmV3Tm9kZS5vbihUb2dnbGUuRXZlbnRUeXBlLlRPR0dMRSwgdGhpcy50b2dnbGVDb21wb3NpdGVNb2RlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9zaXRlTW9kZVRvZ2dsZUxpc3RbaV0gPSBuZXdOb2RlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc1RleHRNYXRjaGVkKHRleHRVSSwgdGV4dERlc2NyaXB0aW9uKSA6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCB0ZW1wVGV4dCA9IG5ldyBTdHJpbmcodGV4dFVJKTtcclxuICAgICAgICBjb25zdCBmaW5kSW5kZXggPSB0ZW1wVGV4dC5zZWFyY2goJz4nKTtcclxuICAgICAgICBpZiAoZmluZEluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dFVJID09PSB0ZXh0RGVzY3JpcHRpb247XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGVtcFRleHQgPSB0ZW1wVGV4dC5zdWJzdHIoZmluZEluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIHRlbXBUZXh0ID0gdGVtcFRleHQuc3Vic3RyKDAsIHRlbXBUZXh0LnNlYXJjaCgnPCcpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRlbXBUZXh0ID09PSB0ZXh0RGVzY3JpcHRpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdG9nZ2xlU2luZ2xlTW9kZSh0b2dnbGU6IFRvZ2dsZSkge1xyXG4gICAgICAgIGNvbnN0IGRlYnVnVmlldyA9IGRpcmVjdG9yLnJvb3QhLmRlYnVnVmlldztcclxuICAgICAgICBjb25zdCB0ZXh0Q29tcG9uZW50ID0gdG9nZ2xlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oUmljaFRleHQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdHJTaW5nbGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNUZXh0TWF0Y2hlZCh0ZXh0Q29tcG9uZW50LnN0cmluZywgdGhpcy5zdHJTaW5nbGVbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z1ZpZXcuc2luZ2xlTW9kZSA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0b2dnbGVDb21wb3NpdGVNb2RlKHRvZ2dsZTogVG9nZ2xlKSB7XHJcbiAgICAgICAgY29uc3QgZGVidWdWaWV3ID0gZGlyZWN0b3Iucm9vdCEuZGVidWdWaWV3O1xyXG4gICAgICAgIGNvbnN0IHRleHRDb21wb25lbnQgPSB0b2dnbGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihSaWNoVGV4dCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0ckNvbXBvc2l0ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1RleHRNYXRjaGVkKHRleHRDb21wb25lbnQuc3RyaW5nLCB0aGlzLnN0ckNvbXBvc2l0ZVtpXSkpIHtcclxuICAgICAgICAgICAgICAgIGRlYnVnVmlldy5lbmFibGVDb21wb3NpdGVNb2RlKGksIHRvZ2dsZS5pc0NoZWNrZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdG9nZ2xlTGlnaHRpbmdXaXRoQWxiZWRvKHRvZ2dsZTogVG9nZ2xlKSB7XHJcbiAgICAgICAgY29uc3QgZGVidWdWaWV3ID0gZGlyZWN0b3Iucm9vdCEuZGVidWdWaWV3O1xyXG4gICAgICAgIGRlYnVnVmlldy5saWdodGluZ1dpdGhBbGJlZG8gPSB0b2dnbGUuaXNDaGVja2VkO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlQ1NNQ29sb3JhdGlvbih0b2dnbGU6IFRvZ2dsZSkge1xyXG4gICAgICAgIGNvbnN0IGRlYnVnVmlldyA9IGRpcmVjdG9yLnJvb3QhLmRlYnVnVmlldztcclxuICAgICAgICBkZWJ1Z1ZpZXcuY3NtTGF5ZXJDb2xvcmF0aW9uID0gdG9nZ2xlLmlzQ2hlY2tlZDtcclxuICAgIH1cclxuICAgIGVuYWJsZUFsbENvbXBvc2l0ZU1vZGUoYnV0dG9uOiBCdXR0b24pIHtcclxuICAgICAgICBjb25zdCBkZWJ1Z1ZpZXcgPSBkaXJlY3Rvci5yb290IS5kZWJ1Z1ZpZXc7XHJcbiAgICAgICAgZGVidWdWaWV3LmVuYWJsZUFsbENvbXBvc2l0ZU1vZGUodHJ1ZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbXBvc2l0ZU1vZGVUb2dnbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZ2dsZUNvbXBvbmVudCA9IHRoaXMuY29tcG9zaXRlTW9kZVRvZ2dsZUxpc3RbaV0uZ2V0Q29tcG9uZW50KFRvZ2dsZSk7XHJcbiAgICAgICAgICAgIHRvZ2dsZUNvbXBvbmVudC5pc0NoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRvZ2dsZUNvbXBvbmVudCA9IHRoaXMubWlzY01vZGVUb2dnbGVMaXN0WzBdLmdldENvbXBvbmVudChUb2dnbGUpO1xyXG4gICAgICAgIHRvZ2dsZUNvbXBvbmVudC5pc0NoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICBkZWJ1Z1ZpZXcuY3NtTGF5ZXJDb2xvcmF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgdG9nZ2xlQ29tcG9uZW50ID0gdGhpcy5taXNjTW9kZVRvZ2dsZUxpc3RbMV0uZ2V0Q29tcG9uZW50KFRvZ2dsZSk7XHJcbiAgICAgICAgdG9nZ2xlQ29tcG9uZW50LmlzQ2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgZGVidWdWaWV3LmxpZ2h0aW5nV2l0aEFsYmVkbyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBoaWRlVUkoYnV0dG9uOiBCdXR0b24pIHtcclxuICAgICAgICBjb25zdCB0aXRsZU5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1RpdGxlcycpO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVZhbHVlID0gIXRpdGxlTm9kZS5hY3RpdmU7XHJcbiAgICAgICAgdGhpcy5zaW5nbGVNb2RlVG9nZ2xlTGlzdFswXS5wYXJlbnQuYWN0aXZlID0gYWN0aXZlVmFsdWU7XHJcbiAgICAgICAgdGhpcy5taXNjTW9kZVRvZ2dsZUxpc3RbMF0ucGFyZW50LmFjdGl2ZSA9IGFjdGl2ZVZhbHVlO1xyXG4gICAgICAgIHRoaXMuY29tcG9zaXRlTW9kZVRvZ2dsZUxpc3RbMF0ucGFyZW50LmFjdGl2ZSA9IGFjdGl2ZVZhbHVlO1xyXG4gICAgICAgIHRoaXMuRW5hYmxlQWxsQ29tcG9zaXRlTW9kZUJ1dHRvbi5wYXJlbnQuYWN0aXZlID0gYWN0aXZlVmFsdWU7XHJcbiAgICAgICAgdGl0bGVOb2RlLmFjdGl2ZSA9IGFjdGl2ZVZhbHVlO1xyXG4gICAgICAgIHRoaXMuaGlkZUJ1dHRvbkxhYmVsLnN0cmluZyA9IGFjdGl2ZVZhbHVlID8gJ0hpZGUgVUknIDogJ1Nob3cgVUknO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2N1cnJlbnRDb2xvckluZGV4ID0gMDtcclxuICAgIHByaXZhdGUgc3RyQ29sb3I6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICc8Y29sb3I9I2ZmZmZmZj4nLFxyXG4gICAgICAgICc8Y29sb3I9IzAwMDAwMD4nLFxyXG4gICAgICAgICc8Y29sb3I9I2ZmMDAwMD4nLFxyXG4gICAgICAgICc8Y29sb3I9IzAwZmYwMD4nLFxyXG4gICAgICAgICc8Y29sb3I9IzAwMDBmZj4nLFxyXG4gICAgXTtcclxuICAgIHByaXZhdGUgY29sb3I6IENvbG9yW10gPSBbXHJcbiAgICAgICAgQ29sb3IuV0hJVEUsXHJcbiAgICAgICAgQ29sb3IuQkxBQ0ssXHJcbiAgICAgICAgQ29sb3IuUkVELFxyXG4gICAgICAgIENvbG9yLkdSRUVOLFxyXG4gICAgICAgIENvbG9yLkJMVUUsXHJcbiAgICBdO1xyXG4gICAgY2hhbmdlVGV4dENvbG9yKGJ1dHRvbjogQnV0dG9uKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudENvbG9ySW5kZXgrKztcclxuICAgICAgICBpZiAodGhpcy5fY3VycmVudENvbG9ySW5kZXggPj0gdGhpcy5zdHJDb2xvci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudENvbG9ySW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGV4dENvbXBvbmVudExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0Q29tcG9uZW50TGlzdFtpXS5zdHJpbmcgPSB0aGlzLnN0ckNvbG9yW3RoaXMuX2N1cnJlbnRDb2xvckluZGV4XSArIHRoaXMudGV4dENvbnRlbnRMaXN0W2ldICsgJzwvY29sb3I+JztcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxhYmVsQ29tcG9uZW50TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsQ29tcG9uZW50TGlzdFtpXS5jb2xvciA9IHRoaXMuY29sb3JbdGhpcy5fY3VycmVudENvbG9ySW5kZXhdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgIH1cclxufVxyXG4iXX0=