System.register("chunks:///_virtual/back-to-asset-loading.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "f0a37xDA3xHMoLKQ53Qiv0O", "back-to-asset-loading", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BackToAssetLoading = exports('BackToAssetLoading', (_dec = ccclass('BackToAssetLoading'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BackToAssetLoading, _Component);
        function BackToAssetLoading() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sceneToBack", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BackToAssetLoading.prototype;
        _proto.start = function start() {
          // Your initialization goes here.
        };
        _proto.onClick = function onClick() {
          var _this2 = this;
          return new Promise(function (resovle, reject) {
            director.loadScene(_this2.sceneToBack, function (err) {
              err ? reject(err) : resovle();
            });
          });
        };
        return BackToAssetLoading;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "sceneToBack", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/resources", ['./back-to-asset-loading.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ZpbGU6L0Q6L3Byb2plY3QtY29jb3MvZXhhbXBsZS1jYXNlLzMuOC42L2NvY29zLXRlc3QtcHJvamVjdHMvYXNzZXRzL3Jlc291cmNlcy90ZXN0X2Fzc2V0cy9maWxlOi9EOi9wcm9qZWN0LWNvY29zL2V4YW1wbGUtY2FzZS8zLjguNi9jb2Nvcy10ZXN0LXByb2plY3RzL2Fzc2V0cy9yZXNvdXJjZXMvdGVzdF9hc3NldHMvYmFjay10by1hc3NldC1sb2FkaW5nLnRzIl0sIm5hbWVzIjpbImNjY2xhc3MiLCJfZGVjb3JhdG9yIiwicHJvcGVydHkiLCJCYWNrVG9Bc3NldExvYWRpbmciLCJfZGVjIiwiX2NsYXNzIiwiX2NsYXNzMiIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHNMb29zZSIsIl90aGlzIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJfaW5pdGlhbGl6ZXJEZWZpbmVQcm9wZXJ0eSIsIl9kZXNjcmlwdG9yIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIl9wcm90byIsInByb3RvdHlwZSIsInN0YXJ0Iiwib25DbGljayIsIl90aGlzMiIsIlByb21pc2UiLCJyZXNvdmxlIiwicmVqZWN0IiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJzY2VuZVRvQmFjayIsImVyciIsIkNvbXBvbmVudCIsIl9hcHBseURlY29yYXRlZERlc2NyaXB0b3IiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJpbml0aWFsaXplciIsIl9SRiIsInBvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFRQSxJQUFRQSxPQUFPLEdBQWVDLFVBQVUsQ0FBaENELE9BQU87UUFBRUUsUUFBUSxHQUFLRCxVQUFVLENBQXZCQyxRQUFRO1VBR1pDLGtCQUFrQixrQ0FBQUMsSUFBQSxHQUQ5QkosT0FBTyxDQUFDLG9CQUFvQixDQUFDLEVBQUFJLElBQUEsQ0FBQUMsTUFBQSxJQUFBQyxPQUFBLDBCQUFBQyxVQUFBO1FBQUFDLGNBQUEsQ0FBQUwsa0JBQUEsRUFBQUksVUFBQTtRQUFBLFNBQUFKO1VBQUEsSUFBQU0sS0FBQTtVQUFBLFNBQUFDLElBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQUFDLElBQUEsT0FBQUMsS0FBQSxDQUFBSixJQUFBLEdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7WUFBQUYsSUFBQSxDQUFBRSxJQUFBLElBQUFKLFNBQUEsQ0FBQUksSUFBQTs7VUFBQU4sS0FBQSxHQUFBRixVQUFBLENBQUFTLElBQUEsQ0FBQUMsS0FBQSxDQUFBVixVQUFBLFNBQUFXLE1BQUEsQ0FBQUwsSUFBQTtVQUFBTSwwQkFBQSxDQUFBVixLQUFBLGlCQUFBVyxXQUFBLEVBQUFDLHNCQUFBLENBQUFaLEtBQUE7VUFBQSxPQUFBQSxLQUFBOztRQUFBLElBQUFhLE1BQUEsR0FBQW5CLGtCQUFBLENBQUFvQixTQUFBO1FBQUFELE1BQUEsQ0FLMUJFLEtBQUssR0FBTCxTQUFBQSxRQUFTOztTQUVSO1FBQUFGLE1BQUEsQ0FFREcsT0FBTyxHQUFQLFNBQUFBLFVBQVU7VUFBQSxJQUFBQyxNQUFBO1VBQ04sT0FBTyxJQUFJQyxPQUFPLENBQU8sVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7WUFDMUNDLFFBQVEsQ0FBQ0MsU0FBUyxDQUFDTCxNQUFJLENBQUNNLFdBQVcsRUFBRSxVQUFDQyxHQUFHLEVBQUs7Y0FDM0NBLEdBQUcsR0FBR0osTUFBTSxDQUFDSSxHQUFHLENBQUMsR0FBR0wsT0FBTyxFQUFFO2FBQy9CLENBQUM7V0FDTCxDQUFDO1NBQ0w7UUFBQSxPQUFBekIsa0JBQUE7TUFBQSxFQWRtQytCLFNBQVMsR0FBQWQsV0FBQSxHQUFBZSx5QkFBQSxDQUFBN0IsT0FBQSxDQUFBaUIsU0FBQSxrQkFDNUNyQixRQUFRO1FBQUFrQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsUUFBQTtRQUFBQyxXQUFBLFdBQUFBO1VBQUEsT0FDSyxFQUFFOztNQUFBLElBQUFqQyxPQUFBLE1BQUFELE1BQUE7Y0FhbkIsQ0FBQW1DLEdBQUEsQ0FBQUMsR0FBQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGRpcmVjdG9yIH0gZnJvbSAnY2MnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0JhY2tUb0Fzc2V0TG9hZGluZycpXHJcbmV4cG9ydCBjbGFzcyBCYWNrVG9Bc3NldExvYWRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzY2VuZVRvQmFjayA9ICcnO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb3ZsZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGRpcmVjdG9yLmxvYWRTY2VuZSh0aGlzLnNjZW5lVG9CYWNrLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgIGVyciA/IHJlamVjdChlcnIpIDogcmVzb3ZsZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=