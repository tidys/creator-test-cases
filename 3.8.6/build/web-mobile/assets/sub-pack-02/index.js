System.register("chunks:///_virtual/sub-pack-02", ['./subScript02.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/subScript02.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, director, Component;
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
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "67b3aCPJTtC8rtEG2nssjlx", "subScript02", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var subScript02 = exports('subScript02', (_dec = ccclass("subScript02"), _dec2 = property({
        type: Label
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(subScript02, _Component);
        function subScript02() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "tips", _descriptor, _assertThisInitialized(_this));
          _this.backRoot = null;
          return _this;
        }
        var _proto = subScript02.prototype;
        _proto.start = function start() {
          // Your initialization goes here.
          this.backRoot = this.node.getParent().getChildByName('backRoot');
          if (this.backRoot) {
            this.backRoot.active = false;
          }
          console.log('subScript02 load finish');
          this.tips.string = "subScript02 load finish!";
        }

        // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        _proto.backToList = function backToList() {
          var _this2 = this;
          return new Promise(function (resovle, reject) {
            if (_this2.backRoot) {
              _this2.backRoot.active = true;
            }
            director.loadScene('sub-packages', function (error) {
              error ? reject(error) : resovle();
            });
          });
        };
        return subScript02;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "tips", [_dec2], {
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

(function(r) {
  r('virtual:///prerequisite-imports/sub-pack-02', 'chunks:///_virtual/sub-pack-02'); 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ZpbGU6L0Q6L3Byb2plY3QtY29jb3MvZXhhbXBsZS1jYXNlLzMuOC42L2NvY29zLXRlc3QtcHJvamVjdHMvYXNzZXRzL2Nhc2VzL2Fzc2V0L3N1Yi1wYWNrYWdlcy9zdWItcGFjay0wMi9maWxlOi9EOi9wcm9qZWN0LWNvY29zL2V4YW1wbGUtY2FzZS8zLjguNi9jb2Nvcy10ZXN0LXByb2plY3RzL2Fzc2V0cy9jYXNlcy9hc3NldC9zdWItcGFja2FnZXMvc3ViLXBhY2stMDIvc3ViU2NyaXB0MDIudHMiXSwibmFtZXMiOlsiY2NjbGFzcyIsIl9kZWNvcmF0b3IiLCJwcm9wZXJ0eSIsInN1YlNjcmlwdDAyIiwiX2RlYyIsIl9kZWMyIiwidHlwZSIsIkxhYmVsIiwiX2NsYXNzIiwiX2NsYXNzMiIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHNMb29zZSIsIl90aGlzIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJfaW5pdGlhbGl6ZXJEZWZpbmVQcm9wZXJ0eSIsIl9kZXNjcmlwdG9yIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsImJhY2tSb290IiwiX3Byb3RvIiwicHJvdG90eXBlIiwic3RhcnQiLCJub2RlIiwiZ2V0UGFyZW50IiwiZ2V0Q2hpbGRCeU5hbWUiLCJhY3RpdmUiLCJjb25zb2xlIiwibG9nIiwidGlwcyIsInN0cmluZyIsImJhY2tUb0xpc3QiLCJfdGhpczIiLCJQcm9taXNlIiwicmVzb3ZsZSIsInJlamVjdCIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiZXJyb3IiLCJDb21wb25lbnQiLCJfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiaW5pdGlhbGl6ZXIiLCJfUkYiLCJwb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFDQSxJQUFRQSxPQUFPLEdBQWVDLFVBQVUsQ0FBaENELE9BQU87UUFBRUUsUUFBUSxHQUFLRCxVQUFVLENBQXZCQyxRQUFRO1VBR1pDLFdBQVcsMkJBQUFDLElBQUEsR0FEdkJKLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBQUssS0FBQSxHQUdsQkgsUUFBUSxDQUFDO1FBQUNJLElBQUksRUFBRUM7TUFBSyxDQUFDLENBQUMsRUFBQUgsSUFBQSxDQUFBSSxNQUFBLElBQUFDLE9BQUEsMEJBQUFDLFVBQUE7UUFBQUMsY0FBQSxDQUFBUixXQUFBLEVBQUFPLFVBQUE7UUFBQSxTQUFBUDtVQUFBLElBQUFTLEtBQUE7VUFBQSxTQUFBQyxJQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUFBQyxJQUFBLE9BQUFDLEtBQUEsQ0FBQUosSUFBQSxHQUFBSyxJQUFBLE1BQUFBLElBQUEsR0FBQUwsSUFBQSxFQUFBSyxJQUFBO1lBQUFGLElBQUEsQ0FBQUUsSUFBQSxJQUFBSixTQUFBLENBQUFJLElBQUE7O1VBQUFOLEtBQUEsR0FBQUYsVUFBQSxDQUFBUyxJQUFBLENBQUFDLEtBQUEsQ0FBQVYsVUFBQSxTQUFBVyxNQUFBLENBQUFMLElBQUE7VUFBQU0sMEJBQUEsQ0FBQVYsS0FBQSxVQUFBVyxXQUFBLEVBQUFDLHNCQUFBLENBQUFaLEtBQUE7VUFBQUEsS0FBQSxDQUdqQmEsUUFBUSxHQUFnQixJQUFJO1VBQUEsT0FBQWIsS0FBQTs7UUFBQSxJQUFBYyxNQUFBLEdBQUF2QixXQUFBLENBQUF3QixTQUFBO1FBQUFELE1BQUEsQ0FFbkNFLEtBQUssR0FBTCxTQUFBQSxRQUFTOztVQUVMLElBQUksQ0FBQ0gsUUFBUSxHQUFHLElBQUksQ0FBQ0ksSUFBSSxDQUFDQyxTQUFTLEVBQUUsQ0FBRUMsY0FBYyxDQUFDLFVBQVUsQ0FBQztVQUNqRSxJQUFJLElBQUksQ0FBQ04sUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDQSxRQUFRLENBQUNPLE1BQU0sR0FBRyxLQUFLOztVQUVoQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMseUJBQXlCLENBQUM7VUFDdEMsSUFBSSxDQUFDQyxJQUFJLENBQUNDLE1BQU0sR0FBRywwQkFBMEI7Ozs7Ozs7O1FBS2pEVixNQUFBLENBRUFXLFVBQVUsR0FBVixTQUFBQSxhQUFhO1VBQUEsSUFBQUMsTUFBQTtVQUNULE9BQU8sSUFBSUMsT0FBTyxDQUFPLFVBQUNDLE9BQU8sRUFBRUMsTUFBTSxFQUFLO1lBQzFDLElBQUlILE1BQUksQ0FBQ2IsUUFBUSxFQUFFO2NBQ2ZhLE1BQUksQ0FBQ2IsUUFBUSxDQUFDTyxNQUFNLEdBQUcsSUFBSTs7WUFFL0JVLFFBQVEsQ0FBQ0MsU0FBUyxDQUFDLGNBQWMsRUFBRyxVQUFDQyxLQUFVLEVBQUs7Y0FDaERBLEtBQUssR0FBR0gsTUFBTSxDQUFDRyxLQUFLLENBQUMsR0FBR0osT0FBTyxFQUFFO2FBQ3BDLENBQUM7V0FDTCxDQUFDO1NBQ0w7UUFBQSxPQUFBckMsV0FBQTtNQUFBLEVBOUI0QjBDLFNBQVMsR0FBQXRCLFdBQUEsR0FBQXVCLHlCQUFBLENBQUFyQyxPQUFBLENBQUFrQixTQUFBLFdBQUF0QixLQUFBO1FBQUEwQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsUUFBQTtRQUFBQyxXQUFBLFdBQUFBO1VBQUEsT0FHakIsSUFBSTs7TUFBQSxJQUFBekMsT0FBQSxNQUFBRCxNQUFBO2NBNEI1QixDQUFBMkMsR0FBQSxDQUFBQyxHQUFBIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgZGlyZWN0b3IsIExhYmVsIH0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcInN1YlNjcmlwdDAyXCIpXHJcbmV4cG9ydCBjbGFzcyBzdWJTY3JpcHQwMiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBMYWJlbH0pXHJcbiAgICBwdWJsaWMgdGlwczogTGFiZWwgPSBudWxsITtcclxuXHJcbiAgICBwdWJsaWMgYmFja1Jvb3Q6IE5vZGUgfCBudWxsID0gbnVsbCE7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIHRoaXMuYmFja1Jvb3QgPSB0aGlzLm5vZGUuZ2V0UGFyZW50KCkhLmdldENoaWxkQnlOYW1lKCdiYWNrUm9vdCcpO1xyXG4gICAgICAgIGlmICh0aGlzLmJhY2tSb290KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFja1Jvb3QuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWJTY3JpcHQwMiBsb2FkIGZpbmlzaCcpO1xyXG4gICAgICAgIHRoaXMudGlwcy5zdHJpbmcgPSBcInN1YlNjcmlwdDAyIGxvYWQgZmluaXNoIVwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgYmFja1RvTGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc292bGUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5iYWNrUm9vdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrUm9vdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpcmVjdG9yLmxvYWRTY2VuZSgnc3ViLXBhY2thZ2VzJywgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlcnJvciA/IHJlamVjdChlcnJvcikgOiByZXNvdmxlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==