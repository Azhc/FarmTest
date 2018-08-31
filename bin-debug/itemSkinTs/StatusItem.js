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
var StatusItem = (function (_super) {
    __extends(StatusItem, _super);
    function StatusItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "StatusSkin";
        _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.eventListen, _this);
        return _this;
    }
    StatusItem.getInstance = function () {
        if (StatusItem.instance == null) {
            StatusItem.instance = new StatusItem();
        }
        return StatusItem.instance;
    };
    StatusItem.prototype.eventListen = function () {
        this.nvShenImg.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.showInstro, this);
        this.nvShenImg.addEventListener(egret.TouchEvent.TOUCH_END, this.hideInstro, this);
    };
    // 显示雕像使用说明
    StatusItem.prototype.showInstro = function () {
        this.instro.visible = true;
        egret.Tween.get(this.instro).to({ visible: true, scaleX: 1.1, scaleY: 1.1 }, 200, egret.Ease.backOut);
    };
    // 隐藏雕像使用说明
    StatusItem.prototype.hideInstro = function () {
        egret.Tween.get(this.instro).to({ visible: false, scaleX: 0, scaleY: 0 }, 200, egret.Ease.backIn);
    };
    //    单例模式
    StatusItem.instance = null;
    return StatusItem;
}(eui.ItemRenderer));
__reflect(StatusItem.prototype, "StatusItem");
//# sourceMappingURL=StatusItem.js.map