// var game_file_list = [
//     //以下为自动修改，请勿修改
//     //----auto game_file_list start----
// 	"libs/modules/egret/egret.js",
// 	"libs/modules/egret/egret.native.js",
// 	"libs/modules/eui/eui.js",
// 	"libs/modules/assetsmanager/assetsmanager.js",
// 	"libs/modules/tween/tween.js",
// 	"libs/modules/game/game.js",
// 	"bin-debug/ForgetPwd.js",
// 	"bin-debug/commonTs/ThemeAdapter.js",
// 	"bin-debug/Home.js",
// 	"bin-debug/Login.js",
// 	"bin-debug/Main.js",
// 	"bin-debug/Register.js",
// 	"bin-debug/commonTs/AssetAdapter.js",
// 	"bin-debug/commonTs/LoadingUI.js",
// 	"bin-debug/Crops.js",
// 	"bin-debug/itemSkinTs/DuiHuan.js",
// 	"bin-debug/itemSkinTs/GoodInfo.js",
// 	"bin-debug/itemSkinTs/GoodsItem.js",
// 	"bin-debug/itemSkinTs/HouseImgItem.js",
// 	"bin-debug/itemSkinTs/LandUp.js",
// 	"bin-debug/itemSkinTs/RankItem.js",
// 	"bin-debug/itemSkinTs/ShopItem.js",
// 	"bin-debug/itemSkinTs/StatusItem.js",
// 	//----auto game_file_list end----
// ];

//自己设置需要加载的js文件 根据配置文件加载 
var manifest = JSON.parse(egret_native.readFileSync("manifest.json"));
var game_file_list = manifest.initial.concat(manifest.game);

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    if(egret_native.featureEnable) {
        //控制一些优化方案是否开启
        //Control whether some optimization options are open
        var result = egret_native.featureEnable({
            
        });
    }
    //egret.dom 为空实现
    egret_native.requireFiles();
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改        //----auto option start----
		entryClassName: "Main",
		frameRate: 60,
		scaleMode: "fixedWidth",
		contentWidth: 640,
		contentHeight: 1136,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel("/system/fonts/DroidSansFallback.ttf", 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};