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
var DuiHuanItem = (function (_super) {
    __extends(DuiHuanItem, _super);
    function DuiHuanItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "DuiHuanSkin";
        return _this;
        // this.addEventListener(eui.UIEvent.CREATION_COMPLETE,this.eventListen,this);
    }
    DuiHuanItem.getInstance = function () {
        if (DuiHuanItem.instance == null) {
            DuiHuanItem.instance = new DuiHuanItem();
        }
        return DuiHuanItem.instance;
    };
    //    单例模式
    DuiHuanItem.instance = null;
    return DuiHuanItem;
}(eui.ItemRenderer));
__reflect(DuiHuanItem.prototype, "DuiHuanItem");
