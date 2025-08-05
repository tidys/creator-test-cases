System.register("chunks:///_virtual/back-to-asset-bundle.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, director, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "08a78TLL5ZAp5sJNvOPvzaG", "back-to-asset-bundle", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BackToAssetBundle = exports('BackToAssetBundle', (_dec = ccclass('BackToAssetBundle'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BackToAssetBundle, _Component);
        function BackToAssetBundle() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = BackToAssetBundle.prototype;
        _proto.start = function start() {
          // Your initialization goes here.
        };
        _proto.onClick = function onClick() {
          return new Promise(function (resovle, reject) {
            director.loadScene('asset-bundle', function (err) {
              err ? reject(err) : resovle();
            });
          });
        };
        return BackToAssetBundle;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TestBundle", ['./back-to-asset-bundle.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/TestBundle', 'chunks:///_virtual/TestBundle'); 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ZpbGU6L0Q6L3Byb2plY3QtY29jb3MvZXhhbXBsZS1jYXNlLzMuOC42L2NvY29zLXRlc3QtcHJvamVjdHMvYXNzZXRzL2Nhc2VzL2Fzc2V0L3Rlc3QtYnVuZGxlL2ZpbGU6L0Q6L3Byb2plY3QtY29jb3MvZXhhbXBsZS1jYXNlLzMuOC42L2NvY29zLXRlc3QtcHJvamVjdHMvYXNzZXRzL2Nhc2VzL2Fzc2V0L3Rlc3QtYnVuZGxlL2JhY2stdG8tYXNzZXQtYnVuZGxlLnRzIl0sIm5hbWVzIjpbImNjY2xhc3MiLCJfZGVjb3JhdG9yIiwicHJvcGVydHkiLCJCYWNrVG9Bc3NldEJ1bmRsZSIsIl9kZWMiLCJfY2xhc3MiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzTG9vc2UiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9wcm90byIsInByb3RvdHlwZSIsInN0YXJ0Iiwib25DbGljayIsIlByb21pc2UiLCJyZXNvdmxlIiwicmVqZWN0IiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJlcnIiLCJDb21wb25lbnQiLCJfUkYiLCJwb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O01BRUEsSUFBUUEsT0FBTyxHQUFlQyxVQUFVLENBQWhDRCxPQUFPO1FBQUVFLFFBQVEsR0FBS0QsVUFBVSxDQUF2QkMsUUFBUTtVQUdaQyxpQkFBaUIsaUNBQUFDLElBQUEsR0FEN0JKLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFBSSxJQUFBLENBQUFDLE1BQUEsMEJBQUFDLFVBQUE7UUFBQUMsY0FBQSxDQUFBSixpQkFBQSxFQUFBRyxVQUFBO1FBQUEsU0FBQUg7VUFBQSxPQUFBRyxVQUFBLENBQUFFLEtBQUEsT0FBQUMsU0FBQTs7UUFBQSxJQUFBQyxNQUFBLEdBQUFQLGlCQUFBLENBQUFRLFNBQUE7UUFBQUQsTUFBQSxDQUd6QkUsS0FBSyxHQUFMLFNBQUFBLFFBQVM7O1NBRVI7UUFBQUYsTUFBQSxDQUVERyxPQUFPLEdBQVAsU0FBQUEsVUFBVTtVQUNOLE9BQU8sSUFBSUMsT0FBTyxDQUFPLFVBQUNDLE9BQU8sRUFBRUMsTUFBTSxFQUFLO1lBQzFDQyxRQUFRLENBQUNDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsVUFBQ0MsR0FBRyxFQUFLO2NBQ3hDQSxHQUFHLEdBQUdILE1BQU0sQ0FBQ0csR0FBRyxDQUFDLEdBQUdKLE9BQU8sRUFBRTthQUNoQyxDQUFDO1dBQ0wsQ0FBQztTQUNMO1FBQUEsT0FBQVosaUJBQUE7TUFBQSxFQVprQ2lCLFNBQVMsTUFBQWYsTUFBQTtjQWEvQyxDQUFBZ0IsR0FBQSxDQUFBQyxHQUFBIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGFzc2V0TWFuYWdlciwgZGlyZWN0b3IgfSBmcm9tICdjYyc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnQmFja1RvQXNzZXRCdW5kbGUnKVxyXG5leHBvcnQgY2xhc3MgQmFja1RvQXNzZXRCdW5kbGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb3ZsZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGRpcmVjdG9yLmxvYWRTY2VuZSgnYXNzZXQtYnVuZGxlJywgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXJyID8gcmVqZWN0KGVycikgOiByZXNvdmxlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIl19