//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //定义变量 主题是否加载完成
        _this.isThemeLoadEnd = false;
        //定义变量 资源是否加载完成
        _this.isResourceLoadEnd = false;
        return _this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        //注入自定义的素材解析器
        //let 是es6中的命令 和var类似 不过let声明的变量 只能在let所在的代码块中可用
        var assetAdapter = new AssetAdapter();
        // //获取隐藏控件值获取宽度
        // var StageWidth:any;  
        // StageWidth=(document.getElementsByName("hdWidth")[0] as HTMLInputElement).value;
        // // this.stage.width=StageWidth;
        // this.stage.$stageWidth=StageWidth;
        this.stage.$stageWidth = 640;
        this.stage.$stageHeight = 1136;
        console.log(egret.MainContext.instance.stage.stageWidth);
        console.log(egret.MainContext.instance.stage.stageHeight);
        //调用两个接口 
        //IAssetAdapter 解析皮肤 
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        //IThemeAdapter 解析主题
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        //初始化Resource资源加载库
        //添加资源的事件侦听器 RES.ResourceEvent 资源加载事件 调用加载皮肤主题资源的方法
        //接收到该事件后执行特定的代码
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    /**
     * 配置文件加载完成 开始预加载皮肤主题和preload资源组
     */
    Main.prototype.onConfigComplete = function (event) {
        //移除事件侦听器
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        //加载皮肤主题配置文件，可以手动修改这个文件，替换默认皮肤。根据资源文件夹的配置文件创建一个主题实例
        var theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this); //ui的网络请求加载完成后 执行加载主题事件
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this); //资源加载完成后 执行事件 关闭事件侦听器
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this); //资源加载失败 在控制台输出错误信息
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this); //资源加载中 显示进度条
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this); //资源组加载失败  在控制台输出错误信息
        RES.loadGroup("loading"); //根据组名加载资源
    };
    /**
     * 主题文件加载完成,开始预加载
     */
    Main.prototype.onThemeLoadComplete = function () {
        this.isThemeLoadEnd = true;
        this.createScene();
    };
    /**
     * preload资源组加载完成
     */
    Main.prototype.onResourceLoadComplete = function (event) {
        //输出资源组名字
        console.log(event.groupName);
        //所有的资源都预加载完毕后 关闭事件侦听器 加载登录页面
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.isResourceLoadEnd = true;
            //加载登录页面的资源
            RES.loadGroup("login");
            //执行方法判断是否都加载完成 
            this.createScene();
        }
        else if (event.groupName == "loading") {
            //Config loading process interface
            //设置加载进度界面
            this.loadingView = new LoadingUI();
            this.stage.addChild(this.loadingView);
            RES.loadGroup("preload");
        }
        else if (event.groupName == "login") {
        }
    };
    /**
    * 判断主题和皮肤是否都加载完成
    */
    Main.prototype.createScene = function () {
        if (this.isThemeLoadEnd && this.isResourceLoadEnd) {
            this.startCreateScene();
        }
    };
    /**
    * 资源加载出错
    */
    Main.prototype.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     */
    Main.prototype.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     */
    Main.prototype.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    /**
     * 创建场景界面
     */
    Main.prototype.startCreateScene = function () {
        //移除资源加载视图
        this.stage.removeChild(this.loadingView);
        this.parent.addChild(Login.getInstance());
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map