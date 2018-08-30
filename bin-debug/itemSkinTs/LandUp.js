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
/**
 *
 * @author
 *
 */
var LandUpItem = (function (_super) {
    __extends(LandUpItem, _super);
    function LandUpItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "LandUpSkin";
        return _this;
        // this.addEventListener(eui.UIEvent.CREATION_COMPLETE,this.eventListen,this);
    }
    LandUpItem.getInstance = function () {
        if (LandUpItem.instance == null) {
            LandUpItem.instance = new LandUpItem();
        }
        return LandUpItem.instance;
    };
    //    单例模式
    LandUpItem.instance = null;
    return LandUpItem;
}(eui.ItemRenderer));
__reflect(LandUpItem.prototype, "LandUpItem");
