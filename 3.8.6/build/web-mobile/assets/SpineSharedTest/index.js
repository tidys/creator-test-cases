System.register("chunks:///_virtual/SharedCacheBundle.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, assetManager, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      assetManager = module.assetManager;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "722ddFlBRtCHatLVN+cn88+", "SharedCacheBundle", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SharedCacheBundle = exports('SharedCacheBundle', (_dec = ccclass('SharedCacheBundle'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SharedCacheBundle, _Component);
        function SharedCacheBundle() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = SharedCacheBundle.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        _proto.onClick = function onClick() {
          this.node.destroy();
          var bundle = assetManager.getBundle("SpineSharedTest");
          if (bundle) {
            bundle.releaseAll();
            assetManager.removeBundle(bundle);
          }
        };
        return SharedCacheBundle;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpineSharedTest", ['./SharedCacheBundle.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/SpineSharedTest', 'chunks:///_virtual/SpineSharedTest'); 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ZpbGU6L0Q6L3Byb2plY3QtY29jb3MvZXhhbXBsZS1jYXNlLzMuOC42L2NvY29zLXRlc3QtcHJvamVjdHMvYXNzZXRzL2Nhc2VzL21pZGRsZXdhcmUvc3BpbmUvU3BpbmVTaGFyZWRUZXN0L2ZpbGU6L0Q6L3Byb2plY3QtY29jb3MvZXhhbXBsZS1jYXNlLzMuOC42L2NvY29zLXRlc3QtcHJvamVjdHMvYXNzZXRzL2Nhc2VzL21pZGRsZXdhcmUvc3BpbmUvU3BpbmVTaGFyZWRUZXN0L1NoYXJlZENhY2hlQnVuZGxlLnRzIl0sIm5hbWVzIjpbImNjY2xhc3MiLCJfZGVjb3JhdG9yIiwicHJvcGVydHkiLCJTaGFyZWRDYWNoZUJ1bmRsZSIsIl9kZWMiLCJfY2xhc3MiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzTG9vc2UiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9wcm90byIsInByb3RvdHlwZSIsInN0YXJ0IiwidXBkYXRlIiwiZGVsdGFUaW1lIiwib25DbGljayIsIm5vZGUiLCJkZXN0cm95IiwiYnVuZGxlIiwiYXNzZXRNYW5hZ2VyIiwiZ2V0QnVuZGxlIiwicmVsZWFzZUFsbCIsInJlbW92ZUJ1bmRsZSIsIkNvbXBvbmVudCIsIl9SRiIsInBvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7TUFDQSxJQUFRQSxPQUFPLEdBQWVDLFVBQVUsQ0FBaENELE9BQU87UUFBRUUsUUFBUSxHQUFLRCxVQUFVLENBQXZCQyxRQUFRO1VBR1pDLGlCQUFpQixpQ0FBQUMsSUFBQSxHQUQ3QkosT0FBTyxDQUFDLG1CQUFtQixDQUFDLEVBQUFJLElBQUEsQ0FBQUMsTUFBQSwwQkFBQUMsVUFBQTtRQUFBQyxjQUFBLENBQUFKLGlCQUFBLEVBQUFHLFVBQUE7UUFBQSxTQUFBSDtVQUFBLE9BQUFHLFVBQUEsQ0FBQUUsS0FBQSxPQUFBQyxTQUFBOztRQUFBLElBQUFDLE1BQUEsR0FBQVAsaUJBQUEsQ0FBQVEsU0FBQTtRQUFBRCxNQUFBLENBRXpCRSxLQUFLLEdBQUwsU0FBQUEsUUFBUSxFQUVQO1FBQUFGLE1BQUEsQ0FFREcsTUFBTSxHQUFOLFNBQUFBLE9BQU9DLFNBQWlCLEVBQUUsRUFFekI7UUFBQUosTUFBQSxDQUVESyxPQUFPLEdBQVAsU0FBQUEsVUFBVTtVQUNOLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLEVBQUU7VUFDbkIsSUFBTUMsTUFBTSxHQUFHQyxZQUFZLENBQUNDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQztVQUN4RCxJQUFJRixNQUFNLEVBQUU7WUFDUkEsTUFBTSxDQUFDRyxVQUFVLEVBQUU7WUFDbkJGLFlBQVksQ0FBQ0csWUFBWSxDQUFDSixNQUFNLENBQUM7O1NBRXhDO1FBQUEsT0FBQWYsaUJBQUE7TUFBQSxFQWhCa0NvQixTQUFTLE1BQUFsQixNQUFBO2NBaUIvQyxDQUFBbUIsR0FBQSxDQUFBQyxHQUFBIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIGFzc2V0TWFuYWdlciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSAnY2MnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ1NoYXJlZENhY2hlQnVuZGxlJylcclxuZXhwb3J0IGNsYXNzIFNoYXJlZENhY2hlQnVuZGxlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KClcclxuICAgICAgICBjb25zdCBidW5kbGUgPSBhc3NldE1hbmFnZXIuZ2V0QnVuZGxlKFwiU3BpbmVTaGFyZWRUZXN0XCIpO1xyXG4gICAgICAgIGlmIChidW5kbGUpIHtcclxuICAgICAgICAgICAgYnVuZGxlLnJlbGVhc2VBbGwoKVxyXG4gICAgICAgICAgICBhc3NldE1hbmFnZXIucmVtb3ZlQnVuZGxlKGJ1bmRsZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==