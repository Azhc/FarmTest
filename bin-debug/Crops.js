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
var Crops = (function (_super) {
    __extends(Crops, _super);
    function Crops() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/CropsSkin.exml";
        egret.callLater(_this.creatPlants, _this);
        return _this;
    }
    Crops.prototype.creatPlants = function () {
        this.plant.anchorOffsetX = this.plant.width / 2;
        this.plant.anchorOffsetY = this.plant.height;
        this.plant.x = this.crops_gp.width / 2;
        this.plant.y = this.crops_gp.height / 2;
        this.crops_gp.x = 0;
    };
    return Crops;
}(eui.ItemRenderer));
__reflect(Crops.prototype, "Crops");
