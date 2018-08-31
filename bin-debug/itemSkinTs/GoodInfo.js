var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
// TypeScript file
/**
 *
 * @author
 *
 */
var GoodInfo = (function (_super) {
    __extends(GoodInfo, _super);
    function GoodInfo() {
        var _this = _super.call(this) || this;
        _this.skinName = "GoodInfoSkin";
        return _this;
    }
    GoodInfo.getInstance = function () {
        if (GoodInfo.instance == null) {
            GoodInfo.instance = new GoodInfo();
        }
        return GoodInfo.instance;
    };
    //    单例模式
    GoodInfo.instance = null;
    return GoodInfo;
}(eui.ItemRenderer));
__reflect(GoodInfo.prototype, "GoodInfo");
//# sourceMappingURL=GoodInfo.js.map