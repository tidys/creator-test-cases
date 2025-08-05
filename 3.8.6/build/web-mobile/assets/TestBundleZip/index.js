System.register("chunks:///_virtual/back-to-asset-bundle-zip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "f41baua30VOAZvJNcu9E9KG", "back-to-asset-bundle-zip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BackToAssetBundleZip = exports('BackToAssetBundleZip', (_dec = ccclass('BackToAssetBundleZip'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BackToAssetBundleZip, _Component);
        function BackToAssetBundleZip() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = BackToAssetBundleZip.prototype;
        _proto.onClick = function onClick() {
          return new Promise(function (resovle, reject) {
            director.loadScene('asset-bundle-zip', function (err) {
              err ? reject(err) : resovle();
            });
          });
        };
        return BackToAssetBundleZip;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TestBundleZip", ['./back-to-asset-bundle-zip.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/TestBundleZip', 'chunks:///_virtual/TestBundleZip'); 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ZpbGU6L0Q6L3Byb2plY3QtY29jb3MvZXhhbXBsZS1jYXNlLzMuOC42L2NvY29zLXRlc3QtcHJvamVjdHMvYXNzZXRzL2Nhc2VzL2Fzc2V0L3Rlc3QtYnVuZGxlLXppcC9maWxlOi9EOi9wcm9qZWN0LWNvY29zL2V4YW1wbGUtY2FzZS8zLjguNi9jb2Nvcy10ZXN0LXByb2plY3RzL2Fzc2V0cy9jYXNlcy9hc3NldC90ZXN0LWJ1bmRsZS16aXAvYmFjay10by1hc3NldC1idW5kbGUtemlwLnRzIl0sIm5hbWVzIjpbImNjY2xhc3MiLCJfZGVjb3JhdG9yIiwicHJvcGVydHkiLCJCYWNrVG9Bc3NldEJ1bmRsZVppcCIsIl9kZWMiLCJfY2xhc3MiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzTG9vc2UiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uQ2xpY2siLCJQcm9taXNlIiwicmVzb3ZsZSIsInJlamVjdCIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiZXJyIiwiQ29tcG9uZW50IiwiX1JGIiwicG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztNQUVBLElBQVFBLE9BQU8sR0FBZUMsVUFBVSxDQUFoQ0QsT0FBTztRQUFFRSxRQUFRLEdBQUtELFVBQVUsQ0FBdkJDLFFBQVE7VUFHWkMsb0JBQW9CLG9DQUFBQyxJQUFBLEdBRGhDSixPQUFPLENBQUMsc0JBQXNCLENBQUMsRUFBQUksSUFBQSxDQUFBQyxNQUFBLDBCQUFBQyxVQUFBO1FBQUFDLGNBQUEsQ0FBQUosb0JBQUEsRUFBQUcsVUFBQTtRQUFBLFNBQUFIO1VBQUEsT0FBQUcsVUFBQSxDQUFBRSxLQUFBLE9BQUFDLFNBQUE7O1FBQUEsSUFBQUMsTUFBQSxHQUFBUCxvQkFBQSxDQUFBUSxTQUFBO1FBQUFELE1BQUEsQ0FHNUJFLE9BQU8sR0FBUCxTQUFBQSxVQUFVO1VBQ04sT0FBTyxJQUFJQyxPQUFPLENBQU8sVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7WUFDMUNDLFFBQVEsQ0FBQ0MsU0FBUyxDQUFDLGtCQUFrQixFQUFFLFVBQUNDLEdBQUcsRUFBSztjQUM1Q0EsR0FBRyxHQUFHSCxNQUFNLENBQUNHLEdBQUcsQ0FBQyxHQUFHSixPQUFPLEVBQUU7YUFDaEMsQ0FBQztXQUNMLENBQUM7U0FDTDtRQUFBLE9BQUFYLG9CQUFBO01BQUEsRUFScUNnQixTQUFTLE1BQUFkLE1BQUE7Y0FTbEQsQ0FBQWUsR0FBQSxDQUFBQyxHQUFBIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGRpcmVjdG9yIH0gZnJvbSAnY2MnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0JhY2tUb0Fzc2V0QnVuZGxlWmlwJylcclxuZXhwb3J0IGNsYXNzIEJhY2tUb0Fzc2V0QnVuZGxlWmlwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBvbkNsaWNrKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb3ZsZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGRpcmVjdG9yLmxvYWRTY2VuZSgnYXNzZXQtYnVuZGxlLXppcCcsIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGVyciA/IHJlamVjdChlcnIpIDogcmVzb3ZsZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=