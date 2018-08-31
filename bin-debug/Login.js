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
 *登录界面
 * @author
 *
 */
var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/LoginSkin.exml";
        _this.eventListen();
        return _this;
    }
    Login.getInstance = function () {
        if (Login.instance == null) {
            Login.instance = new Login();
        }
        return Login.instance;
    };
    Login.prototype.eventListen = function () {
        this.register_btn.touchEnabled = true;
        this.register_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.toRegister, this);
        this.login_btn.touchEnabled = true;
        this.login_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.toLogin, this);
        //使用验证码登录 暂不需要忘记密码功能
        // this.forget_btn.touchEnabled = true;
        // this.forget_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.forgetPwd, this);
    };
    Login.prototype.toRegister = function () {
        this.parent.addChild(Register.getInstance());
        this.parent.removeChild(this);
    };
    Login.prototype.toLogin = function () {
        this.parent.addChild(Home.getInstance());
        this.parent.removeChild(this);
    };
    //    单例模式
    Login.instance = null;
    return Login;
}(eui.Component));
__reflect(Login.prototype, "Login");
//# sourceMappingURL=Login.js.map