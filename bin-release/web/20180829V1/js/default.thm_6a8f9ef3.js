window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/commons/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/commons/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/commons/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/commons/HSliderSkin.exml","eui.Panel":"resource/eui_skins/commons/PanelSkin.exml","eui.TextInput":"resource/eui_skins/commons/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/commons/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/commons/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/commons/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/commons/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/commons/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/commons/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/commons/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/commons/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/commons/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/commons/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/commons/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/commons/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/commons/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/commons/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "load1_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/commons/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/commons/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 10;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/commons/TabBar.exml'] = window.TabBar = (function (_super) {
	__extends(TabBar, _super);
	var TabBar$Skin1 = 	(function (_super) {
		__extends(TabBar$Skin1, _super);
		function TabBar$Skin1() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","button_down_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","alpha",0.5)
					])
			];
			
			eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this._Label1,"text");
		}
		var _proto = TabBar$Skin1.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.minHeight = 48;
			t.percentWidth = 100;
			t.elementsContent = [this._Image1_i(),this._Label1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(1,3,8,8);
			t.source = "button_up_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			this._Label1 = t;
			t.bottom = 0;
			t.fontFamily = "Tahoma";
			t.left = 20;
			t.right = 30;
			t.size = 26;
			t.textColor = 0xFFFFFF;
			t.top = 0;
			t.verticalAlign = "middle";
			return t;
		};
		return TabBar$Skin1;
	})(eui.Skin);

	function TabBar() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 3.14;
		this.width = 24.86;
		this.layout = this._VerticalLayout1_i();
		this.itemRendererSkinName = TabBar$Skin1;
	}
	var _proto = TabBar.prototype;

	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = -2;
		t.horizontalAlign = "justify";
		t.verticalAlign = "contentJustify";
		return t;
	};
	return TabBar;
})(eui.TabBar);generateEUI.paths['resource/eui_skins/commons/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 20;
		t.fillAlpha = 0;
		t.fillColor = 0xFFFFFF;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.bold = true;
		t.percentHeight = 100;
		t.horizontalCenter = "0";
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.background = false;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/commons/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/commons/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/commons/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CropsSkin.exml'] = window.CropsSkin = (function (_super) {
	__extends(CropsSkin, _super);
	function CropsSkin() {
		_super.call(this);
		this.skinParts = ["tudi","plant","crops_gp"];
		
		this.height = 103;
		this.width = 143;
		this.elementsContent = [this.crops_gp_i()];
	}
	var _proto = CropsSkin.prototype;

	_proto.crops_gp_i = function () {
		var t = new eui.Group();
		this.crops_gp = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 103;
		t.left = 0;
		t.width = 143;
		t.elementsContent = [this.tudi_i(),this.plant_i()];
		return t;
	};
	_proto.tudi_i = function () {
		var t = new eui.Image();
		this.tudi = t;
		t.bottom = 0;
		t.left = 0;
		t.source = "tudi03";
		t.width = 143;
		return t;
	};
	_proto.plant_i = function () {
		var t = new eui.Image();
		this.plant = t;
		t.source = "plants04";
		t.x = 0;
		return t;
	};
	return CropsSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/DuiHuanSkin.exml'] = window.DuiHuanSkin = (function (_super) {
	__extends(DuiHuanSkin, _super);
	function DuiHuanSkin() {
		_super.call(this);
		this.skinParts = ["good_img","wupin_left","wupin_right","goods_cont"];
		
		this.height = 110;
		this.width = 439;
		this.elementsContent = [this._Group2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.icon"],[0],this._Image14,"source");
	}
	var _proto = DuiHuanSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 95.91;
		t.width = 427.28;
		t.x = 0;
		t.y = 3;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this.good_img_i(),this.wupin_left_i(),this.wupin_right_i(),this._Rect1_i(),this._TextInput1_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this.goods_cont_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(28,34,108,41);
		t.source = "wenzi_json.wenzi_08";
		t.width = 431.97;
		t.x = 5.39;
		t.y = -2.35;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.48;
		t.source = "tubiao_json.tibiao_26";
		t.width = 78.94;
		t.x = 331.77;
		t.y = 35.08;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 30;
		t.size = 25;
		t.text = "兑换";
		t.textAlign = "center";
		t.textColor = 0x7a4401;
		t.verticalAlign = "middle";
		t.width = 66.06;
		t.x = 338.21;
		t.y = 38.82;
		return t;
	};
	_proto.good_img_i = function () {
		var t = new eui.Group();
		this.good_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 65;
		t.x = 11;
		t.y = 20;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 63;
		t.source = "panel_png";
		t.width = 64;
		t.x = 1;
		t.y = -2;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51;
		t.horizontalCenter = 0;
		t.source = "plants_json.plants09";
		t.verticalCenter = 0;
		t.width = 46;
		return t;
	};
	_proto.wupin_left_i = function () {
		var t = new eui.Group();
		this.wupin_left = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37;
		t.width = 36;
		t.x = 94;
		t.y = 38;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Label2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "gongju_json.gongju_53";
		t.width = 37;
		t.x = 0;
		t.y = -0.5;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.scale9Grid = new egret.Rectangle(20,13,3,3);
		t.source = "wenzi_json.wenzi_09";
		t.width = 53;
		t.x = 6.5;
		t.y = -27;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.size = 12;
		t.text = "70";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 39;
		t.x = 14;
		t.y = -22;
		return t;
	};
	_proto.wupin_right_i = function () {
		var t = new eui.Group();
		this.wupin_right = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37;
		t.width = 38;
		t.x = 172.38;
		t.y = 38;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Label3_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "gongju_json.gongju_66";
		t.width = 41;
		t.x = -1;
		t.y = -5;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.scale9Grid = new egret.Rectangle(20,13,3,3);
		t.source = "wenzi_json.wenzi_09";
		t.width = 53;
		t.x = -5.62;
		t.y = -27;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.size = 12;
		t.text = "70";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 38;
		t.x = 3;
		t.y = -24;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 20;
		t.fillColor = 0x753A03;
		t.height = 25;
		t.width = 90;
		t.x = 224;
		t.y = 27;
		return t;
	};
	_proto._TextInput1_i = function () {
		var t = new eui.TextInput();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.prompt = "1";
		t.width = 87;
		t.x = 226;
		t.y = 27;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "tubiao_json.tibiao_15";
		t.x = 139;
		t.y = 46;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.source = "tubiao_json.tibiao_29";
		t.width = 34;
		t.x = 278;
		t.y = 62;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.source = "tubiao_json.tibiao_24";
		t.width = 35;
		t.x = 227;
		t.y = 62;
		return t;
	};
	_proto.goods_cont_i = function () {
		var t = new eui.Group();
		this.goods_cont = t;
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 96;
		t.visible = false;
		t.x = 35;
		t.y = -4;
		t.elementsContent = [this._Image12_i(),this._Label4_i(),this._Label5_i(),this._Group1_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(17,21,102,82);
		t.source = "wenzi_json.wenzi_13";
		t.width = 190;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 23;
		t.text = "南瓜";
		t.textColor = 0xf27904;
		t.x = 100.5;
		t.y = 5;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "南瓜可用于黑土地升级金土地";
		t.textColor = 0xe87904;
		t.width = 116;
		t.x = 70;
		t.y = 33;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59;
		t.width = 61;
		t.x = 5;
		t.y = 16;
		t.elementsContent = [this._Image13_i(),this._Image14_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58;
		t.source = "panel_png";
		t.width = 61;
		t.x = -1;
		t.y = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		this._Image14 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return DuiHuanSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ForgetPwdSkin.exml'] = window.ForgetPwdSkin = (function (_super) {
	__extends(ForgetPwdSkin, _super);
	function ForgetPwdSkin() {
		_super.call(this);
		this.skinParts = ["go_back","forgetPwd"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.forgetPwd_i()];
	}
	var _proto = ForgetPwdSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1136;
		t.source = "login_bg_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.forgetPwd_i = function () {
		var t = new eui.Group();
		this.forgetPwd = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 528;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 840;
		t.scale9Grid = new egret.Rectangle(80,130,105,50);
		t.source = "tibiao_01";
		t.width = 590;
		t.x = -34;
		t.y = -40;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 750;
		t.scale9Grid = new egret.Rectangle(65,184,394,21);
		t.source = "img_01";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "img_02";
		t.x = -35;
		t.y = -5;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.rotation = 360;
		t.skewY = 180;
		t.source = "img_02";
		t.x = 551;
		t.y = -8;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 64;
		t.horizontalCenter = 0.5;
		t.width = 411;
		t.y = 241;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._TextInput1_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "font_10";
		t.x = -19;
		t.y = 8;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.scale9Grid = new egret.Rectangle(25,26,28,11);
		t.source = "border_02";
		t.width = 256;
		t.x = 144;
		t.y = -3;
		return t;
	};
	_proto._TextInput1_i = function () {
		var t = new eui.TextInput();
		t.displayAsPassword = true;
		t.prompt = "请输入有效身份证号码";
		t.width = 228;
		t.x = 161;
		t.y = 7;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 64;
		t.horizontalCenter = 0.5;
		t.width = 411;
		t.x = 10;
		t.y = 315;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._TextInput2_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "font_02";
		t.x = -25;
		t.y = 8;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.scale9Grid = new egret.Rectangle(25,26,28,11);
		t.source = "border_02";
		t.width = 256;
		t.x = 144;
		t.y = -3;
		return t;
	};
	_proto._TextInput2_i = function () {
		var t = new eui.TextInput();
		t.displayAsPassword = true;
		t.prompt = "请输入密码";
		t.width = 228;
		t.x = 161;
		t.y = 7;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 64;
		t.horizontalCenter = 0.5;
		t.width = 411;
		t.x = 20;
		t.y = 389;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this._TextInput3_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "font_03";
		t.x = -27;
		t.y = 8;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.scale9Grid = new egret.Rectangle(25,26,28,11);
		t.source = "border_02";
		t.width = 256;
		t.x = 144;
		t.y = -3;
		return t;
	};
	_proto._TextInput3_i = function () {
		var t = new eui.TextInput();
		t.displayAsPassword = true;
		t.prompt = "请确认密码";
		t.width = 228;
		t.x = 161;
		t.y = 7;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 64;
		t.horizontalCenter = -0.5;
		t.width = 411;
		t.x = 30;
		t.y = 454;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this._TextInput4_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "font_19";
		t.x = 10;
		t.y = 8;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.scale9Grid = new egret.Rectangle(25,26,28,11);
		t.source = "border_02";
		t.width = 256;
		t.x = 144;
		t.y = -3;
		return t;
	};
	_proto._TextInput4_i = function () {
		var t = new eui.TextInput();
		t.displayAsPassword = true;
		t.prompt = "请输入推荐人号码";
		t.width = 228;
		t.x = 161;
		t.y = 7;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 64;
		t.horizontalCenter = -0.5;
		t.width = 411;
		t.x = 40;
		t.y = 527;
		t.elementsContent = [this._Image14_i(),this._Image15_i(),this._TextInput5_i(),this._Image16_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "font_12";
		t.x = -19;
		t.y = 7;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.scale9Grid = new egret.Rectangle(25,26,28,11);
		t.source = "border_02";
		t.width = 154;
		t.x = 246;
		t.y = -3;
		return t;
	};
	_proto._TextInput5_i = function () {
		var t = new eui.TextInput();
		t.displayAsPassword = true;
		t.width = 136;
		t.x = 253;
		t.y = 7;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 34;
		t.width = 70;
		t.x = 156;
		t.y = 14;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 64;
		t.horizontalCenter = -0.5;
		t.width = 411;
		t.x = 50;
		t.y = 599;
		t.elementsContent = [this._Image17_i(),this._Image18_i(),this._TextInput6_i(),this._Image19_i(),this._Label1_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "font_11";
		t.x = -20;
		t.y = 8;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.scale9Grid = new egret.Rectangle(25,26,28,11);
		t.source = "border_02";
		t.width = 154;
		t.x = 246;
		t.y = -3;
		return t;
	};
	_proto._TextInput6_i = function () {
		var t = new eui.TextInput();
		t.displayAsPassword = true;
		t.width = 136;
		t.x = 253;
		t.y = 7;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.height = 44;
		t.source = "tibiao_26";
		t.verticalCenter = -3;
		t.width = 95;
		t.x = 144;
		t.y = 30;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.height = 35;
		t.text = "获取";
		t.textAlign = "center";
		t.textColor = 0x7B2400;
		t.verticalAlign = "middle";
		t.width = 87;
		t.x = 147;
		t.y = 11;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 56;
		t.horizontalCenter = 0;
		t.width = 402;
		t.y = 159;
		t.elementsContent = [this._Image20_i(),this._Image21_i(),this._TextInput7_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "font_09";
		t.x = -27;
		t.y = 6;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.scale9Grid = new egret.Rectangle(25,26,28,11);
		t.source = "border_02";
		t.width = 256;
		t.x = 139;
		t.y = -3;
		return t;
	};
	_proto._TextInput7_i = function () {
		var t = new eui.TextInput();
		t.prompt = "请输入真是姓名";
		t.width = 228;
		t.x = 152;
		t.y = 7;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 56;
		t.horizontalCenter = 0;
		t.width = 402;
		t.x = 10;
		t.y = 81;
		t.elementsContent = [this._Image22_i(),this._Image23_i(),this._TextInput8_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "font_06";
		t.x = -27;
		t.y = 7;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.scale9Grid = new egret.Rectangle(25,26,28,11);
		t.source = "border_02";
		t.width = 256;
		t.x = 139;
		t.y = -3;
		return t;
	};
	_proto._TextInput8_i = function () {
		var t = new eui.TextInput();
		t.prompt = "请输入11位手机号";
		t.width = 228;
		t.x = 152;
		t.y = 7;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 56;
		t.horizontalCenter = 0.5;
		t.width = 417;
		t.y = 679;
		t.elementsContent = [this._Image24_i(),this._Image25_i(),this.go_back_i(),this._Label2_i()];
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "tibiao_26";
		t.verticalCenter = 0;
		t.x = -19;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.source = "tibiao_26";
		t.verticalCenter = 0;
		t.x = 218;
		return t;
	};
	_proto.go_back_i = function () {
		var t = new eui.Label();
		this.go_back = t;
		t.bold = true;
		t.height = 46;
		t.text = "返回";
		t.textAlign = "center";
		t.textColor = 0x7D2E09;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 158;
		t.x = -16;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.height = 47;
		t.text = "注册";
		t.textAlign = "center";
		t.textColor = 0x7D2E09;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 159;
		t.x = 222;
		return t;
	};
	return ForgetPwdSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GoodInfoSkin.exml'] = window.GoodInfoSkin = (function (_super) {
	__extends(GoodInfoSkin, _super);
	function GoodInfoSkin() {
		_super.call(this);
		this.skinParts = ["goods_cont"];
		
		this.height = 100;
		this.width = 190;
		this.elementsContent = [this.goods_cont_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.icon"],[0],this._Image3,"source");
	}
	var _proto = GoodInfoSkin.prototype;

	_proto.goods_cont_i = function () {
		var t = new eui.Group();
		this.goods_cont = t;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this._Label2_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(17,21,102,82);
		t.source = "wenzi_json.wenzi_13";
		t.width = 190;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 23;
		t.text = "南瓜";
		t.textColor = 0xf27904;
		t.x = 100.5;
		t.y = 5;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14;
		t.text = "南瓜可用于黑土地升级金土地";
		t.textColor = 0xe87904;
		t.width = 116;
		t.x = 70;
		t.y = 33;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59;
		t.width = 61;
		t.x = 5;
		t.y = 16;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58;
		t.source = "panel_png";
		t.width = 61;
		t.x = -1;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return GoodInfoSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HomeSkin.exml'] = window.HomeSkin = (function (_super) {
	__extends(HomeSkin, _super);
	var HomeSkin$Skin2 = 	(function (_super) {
		__extends(HomeSkin$Skin2, _super);
		function HomeSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90),
						new eui.SetProperty("_Image1","source","icon_json.icon_03")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomeSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "icon_json.icon_03";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomeSkin$Skin2;
	})(eui.Skin);

	var HomeSkin$Skin3 = 	(function (_super) {
		__extends(HomeSkin$Skin3, _super);
		function HomeSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay2"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90),
						new eui.SetProperty("_Image1","source","icon_json.icon_04")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomeSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "icon_json.icon_04";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay2_i = function () {
			var t = new eui.Label();
			this.labelDisplay2 = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomeSkin$Skin3;
	})(eui.Skin);

	var HomeSkin$Skin4 = 	(function (_super) {
		__extends(HomeSkin$Skin4, _super);
		function HomeSkin$Skin4() {
			_super.call(this);
			this.skinParts = [];
			
			this.height = 53;
			this.elementsContent = [this._Group1_i()];
			this._Image1_i();
			
			this._Label1_i();
			
			this._Image2_i();
			
			this._Label2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image1","_Group1",0,""),
						new eui.AddItems("_Label1","_Group1",1,""),
						new eui.SetProperty("_Label1","width",138),
						new eui.SetProperty("_Label1","height",48),
						new eui.SetProperty("_Label1","y",0),
						new eui.SetProperty("_Label1","x",0),
						new eui.SetProperty("_Label1","strokeColor",0xe26d04),
						new eui.SetProperty("_Label1","textColor",0xe26d04),
						new eui.SetProperty("_Group1","x",-1),
						new eui.SetProperty("_Group1","y",2),
						new eui.SetProperty("_Group1","width",141),
						new eui.SetProperty("_Group1","height",49),
						new eui.SetProperty("","width",142)
					])
				,
				new eui.State ("down",
					[
						new eui.AddItems("_Image2","_Group1",1,""),
						new eui.AddItems("_Label2","_Group1",1,""),
						new eui.SetProperty("_Label1","width",137),
						new eui.SetProperty("_Label1","height",52),
						new eui.SetProperty("_Label1","y",5),
						new eui.SetProperty("_Label1","stroke",3),
						new eui.SetProperty("_Label1","strokeColor",0xe26d04),
						new eui.SetStateProperty(this, ["hostComponent.data"],[0],this._Label1,"text"),
						new eui.SetProperty("_Group1","y",-6),
						new eui.SetProperty("_Group1","height",63),
						new eui.SetProperty("_Group1","x",-3)
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","alpha",0.5)
					])
			];
			
			eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this._Label1,"text");
			eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this._Label2,"text");
		}
		var _proto = HomeSkin$Skin4.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			this._Group1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 54;
			t.minHeight = 48;
			t.width = 142;
			t.x = -3;
			t.y = 0;
			t.elementsContent = [];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 53;
			t.scale9Grid = new egret.Rectangle(14,12,66,22);
			t.source = "wenzi_51";
			t.width = 142;
			t.x = -2;
			t.y = -4;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			this._Label1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.fontFamily = "huakang";
			t.percentHeight = 100;
			t.size = 26;
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.width = 137;
			t.x = 3;
			t.y = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 62;
			t.scale9Grid = new egret.Rectangle(16,17,76,27);
			t.source = "wenzi_14";
			t.width = 153;
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto._Label2_i = function () {
			var t = new eui.Label();
			this._Label2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.fontFamily = "huakang";
			t.height = 49;
			t.size = 25;
			t.textAlign = "center";
			t.textColor = 0xe00030;
			t.verticalAlign = "middle";
			t.width = 132;
			t.x = 6;
			t.y = 8;
			return t;
		};
		return HomeSkin$Skin4;
	})(eui.Skin);

	var HomeSkin$Skin5 = 	(function (_super) {
		__extends(HomeSkin$Skin5, _super);
		var HomeSkin$Skin5$Skin6 = 		(function (_super) {
			__extends(HomeSkin$Skin5$Skin6, _super);
			function HomeSkin$Skin5$Skin6() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this.thumb_i()];
			}
			var _proto = HomeSkin$Skin5$Skin6.prototype;

			_proto.thumb_i = function () {
				var t = new eui.Image();
				this.thumb = t;
				t.scale9Grid = new egret.Rectangle(1,1,4,4);
				t.source = "hScrollBar02_png";
				t.width = 8;
				return t;
			};
			return HomeSkin$Skin5$Skin6;
		})(eui.Skin);

		function HomeSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HomeSkin$Skin5.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.percentHeight = 100;
			t.minHeight = 100;
			t.right = 0;
			t.width = 8;
			t.skinName = HomeSkin$Skin5$Skin6;
			return t;
		};
		return HomeSkin$Skin5;
	})(eui.Skin);

	var HomeSkin$Skin7 = 	(function (_super) {
		__extends(HomeSkin$Skin7, _super);
		var HomeSkin$Skin7$Skin8 = 		(function (_super) {
			__extends(HomeSkin$Skin7$Skin8, _super);
			function HomeSkin$Skin7$Skin8() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this.thumb_i()];
			}
			var _proto = HomeSkin$Skin7$Skin8.prototype;

			_proto.thumb_i = function () {
				var t = new eui.Image();
				this.thumb = t;
				t.scale9Grid = new egret.Rectangle(1,1,4,4);
				t.source = "hScrollBar02_png";
				t.width = 8;
				return t;
			};
			return HomeSkin$Skin7$Skin8;
		})(eui.Skin);

		function HomeSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HomeSkin$Skin7.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.percentHeight = 100;
			t.minHeight = 100;
			t.right = 0;
			t.width = 8;
			t.skinName = HomeSkin$Skin7$Skin8;
			return t;
		};
		return HomeSkin$Skin7;
	})(eui.Skin);

	var HomeSkin$Skin9 = 	(function (_super) {
		__extends(HomeSkin$Skin9, _super);
		var HomeSkin$Skin9$Skin10 = 		(function (_super) {
			__extends(HomeSkin$Skin9$Skin10, _super);
			function HomeSkin$Skin9$Skin10() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this.thumb_i()];
			}
			var _proto = HomeSkin$Skin9$Skin10.prototype;

			_proto.thumb_i = function () {
				var t = new eui.Image();
				this.thumb = t;
				t.scale9Grid = new egret.Rectangle(1,1,4,4);
				t.source = "hScrollBar02_png";
				t.width = 8;
				return t;
			};
			return HomeSkin$Skin9$Skin10;
		})(eui.Skin);

		function HomeSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HomeSkin$Skin9.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.percentHeight = 100;
			t.minHeight = 100;
			t.right = 0;
			t.width = 8;
			t.skinName = HomeSkin$Skin9$Skin10;
			return t;
		};
		return HomeSkin$Skin9;
	})(eui.Skin);

	var HomeSkin$Skin11 = 	(function (_super) {
		__extends(HomeSkin$Skin11, _super);
		function HomeSkin$Skin11() {
			_super.call(this);
			this.skinParts = [];
			
			this.height = 53;
			this.elementsContent = [this._Group1_i()];
			this._Image1_i();
			
			this._Label1_i();
			
			this._Image2_i();
			
			this._Label2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image1","_Group1",0,""),
						new eui.AddItems("_Label1","_Group1",1,""),
						new eui.SetProperty("_Label1","width",99),
						new eui.SetProperty("_Label1","height",52),
						new eui.SetProperty("_Label1","y",0),
						new eui.SetProperty("_Label1","x",0),
						new eui.SetProperty("_Label1","strokeColor",0xe26d04),
						new eui.SetProperty("_Label1","textColor",0xe26d04),
						new eui.SetProperty("_Group1","x",-1),
						new eui.SetProperty("_Group1","y",1),
						new eui.SetProperty("_Group1","width",100),
						new eui.SetProperty("_Group1","height",53),
						new eui.SetProperty("","width",100)
					])
				,
				new eui.State ("down",
					[
						new eui.AddItems("_Image2","_Group1",1,""),
						new eui.AddItems("_Label2","_Group1",1,""),
						new eui.SetProperty("_Label1","width",137),
						new eui.SetProperty("_Label1","height",52),
						new eui.SetProperty("_Label1","y",5),
						new eui.SetProperty("_Label1","stroke",3),
						new eui.SetProperty("_Label1","strokeColor",0xe26d04),
						new eui.SetStateProperty(this, ["hostComponent.data"],[0],this._Label1,"text"),
						new eui.SetProperty("_Group1","y",-4),
						new eui.SetProperty("_Group1","height",63),
						new eui.SetProperty("_Group1","x",-3),
						new eui.SetProperty("_Group1","width",103)
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","alpha",0.5)
					])
			];
			
			eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this._Label1,"text");
			eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this._Label2,"text");
		}
		var _proto = HomeSkin$Skin11.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			this._Group1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 62;
			t.minHeight = 48;
			t.width = 107;
			t.x = -3;
			t.y = -7;
			t.elementsContent = [];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 49;
			t.scale9Grid = new egret.Rectangle(14,12,66,22);
			t.source = "wenzi_51";
			t.width = 106;
			t.x = -2;
			t.y = 1;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			this._Label1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.fontFamily = "huakang";
			t.percentHeight = 100;
			t.size = 26;
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.width = 101;
			t.x = 3;
			t.y = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 60;
			t.scale9Grid = new egret.Rectangle(16,17,76,27);
			t.source = "wenzi_14";
			t.width = 115;
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto._Label2_i = function () {
			var t = new eui.Label();
			this._Label2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.fontFamily = "huakang";
			t.height = 50;
			t.size = 25;
			t.textAlign = "center";
			t.textColor = 0xe00030;
			t.verticalAlign = "middle";
			t.width = 94;
			t.x = 6;
			t.y = 8;
			return t;
		};
		return HomeSkin$Skin11;
	})(eui.Skin);

	var HomeSkin$Skin12 = 	(function (_super) {
		__extends(HomeSkin$Skin12, _super);
		function HomeSkin$Skin12() {
			_super.call(this);
			this.skinParts = [];
			
			this.height = 53;
			this.elementsContent = [this._Group1_i()];
			this._Image1_i();
			
			this._Label1_i();
			
			this._Image2_i();
			
			this._Label2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image1","_Group1",0,""),
						new eui.AddItems("_Label1","_Group1",1,""),
						new eui.SetProperty("_Label1","width",128),
						new eui.SetProperty("_Label1","height",52),
						new eui.SetProperty("_Label1","y",0),
						new eui.SetProperty("_Label1","x",0),
						new eui.SetProperty("_Label1","strokeColor",0xe26d04),
						new eui.SetProperty("_Label1","textColor",0xe26d04),
						new eui.SetProperty("_Group1","x",-1),
						new eui.SetProperty("_Group1","y",1),
						new eui.SetProperty("_Group1","width",129),
						new eui.SetProperty("_Group1","height",53),
						new eui.SetProperty("","width",129)
					])
				,
				new eui.State ("down",
					[
						new eui.AddItems("_Image2","_Group1",1,""),
						new eui.AddItems("_Label2","_Group1",1,""),
						new eui.SetProperty("_Label1","width",137),
						new eui.SetProperty("_Label1","height",52),
						new eui.SetProperty("_Label1","y",5),
						new eui.SetProperty("_Label1","stroke",3),
						new eui.SetProperty("_Label1","strokeColor",0xe26d04),
						new eui.SetStateProperty(this, ["hostComponent.data"],[0],this._Label1,"text"),
						new eui.SetProperty("_Group1","y",-4),
						new eui.SetProperty("_Group1","height",63),
						new eui.SetProperty("_Group1","x",-3),
						new eui.SetProperty("_Group1","width",135)
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","alpha",0.5)
					])
			];
			
			eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this._Label1,"text");
			eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this._Label2,"text");
		}
		var _proto = HomeSkin$Skin12.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			this._Group1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 62;
			t.minHeight = 48;
			t.width = 107;
			t.x = -3;
			t.y = -7;
			t.elementsContent = [];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 49;
			t.scale9Grid = new egret.Rectangle(14,12,66,22);
			t.source = "wenzi_51";
			t.width = 132;
			t.x = -2;
			t.y = 1;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			this._Label1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.fontFamily = "huakang";
			t.percentHeight = 100;
			t.size = 26;
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.width = 101;
			t.x = 3;
			t.y = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 60;
			t.scale9Grid = new egret.Rectangle(16,17,76,27);
			t.source = "wenzi_14";
			t.width = 146;
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto._Label2_i = function () {
			var t = new eui.Label();
			this._Label2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.fontFamily = "huakang";
			t.height = 50;
			t.size = 25;
			t.textAlign = "center";
			t.textColor = 0xe00030;
			t.verticalAlign = "middle";
			t.width = 128;
			t.x = 6;
			t.y = 8;
			return t;
		};
		return HomeSkin$Skin12;
	})(eui.Skin);

	var HomeSkin$Skin13 = 	(function (_super) {
		__extends(HomeSkin$Skin13, _super);
		function HomeSkin$Skin13() {
			_super.call(this);
			this.skinParts = [];
			
			this.height = 53;
			this.elementsContent = [this._Group1_i()];
			this._Image1_i();
			
			this._Label1_i();
			
			this._Image2_i();
			
			this._Label2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image1","_Group1",0,""),
						new eui.AddItems("_Label1","_Group1",1,""),
						new eui.SetProperty("_Label1","width",99),
						new eui.SetProperty("_Label1","height",52),
						new eui.SetProperty("_Label1","y",0),
						new eui.SetProperty("_Label1","x",0),
						new eui.SetProperty("_Label1","strokeColor",0xe26d04),
						new eui.SetProperty("_Label1","textColor",0xe26d04),
						new eui.SetProperty("_Group1","x",-1),
						new eui.SetProperty("_Group1","y",1),
						new eui.SetProperty("_Group1","width",100),
						new eui.SetProperty("_Group1","height",53),
						new eui.SetProperty("","width",100)
					])
				,
				new eui.State ("down",
					[
						new eui.AddItems("_Image2","_Group1",1,""),
						new eui.AddItems("_Label2","_Group1",1,""),
						new eui.SetProperty("_Label1","width",137),
						new eui.SetProperty("_Label1","height",52),
						new eui.SetProperty("_Label1","y",5),
						new eui.SetProperty("_Label1","stroke",3),
						new eui.SetProperty("_Label1","strokeColor",0xe26d04),
						new eui.SetStateProperty(this, ["hostComponent.data"],[0],this._Label1,"text"),
						new eui.SetProperty("_Group1","y",-4),
						new eui.SetProperty("_Group1","height",63),
						new eui.SetProperty("_Group1","x",-3),
						new eui.SetProperty("_Group1","width",103)
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","alpha",0.5)
					])
			];
			
			eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this._Label1,"text");
			eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this._Label2,"text");
		}
		var _proto = HomeSkin$Skin13.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			this._Group1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 62;
			t.minHeight = 48;
			t.width = 107;
			t.x = -3;
			t.y = -7;
			t.elementsContent = [];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 49;
			t.scale9Grid = new egret.Rectangle(14,12,66,22);
			t.source = "wenzi_51";
			t.width = 106;
			t.x = -2;
			t.y = 1;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			this._Label1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.fontFamily = "huakang";
			t.percentHeight = 100;
			t.size = 26;
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.width = 101;
			t.x = 3;
			t.y = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 60;
			t.scale9Grid = new egret.Rectangle(16,17,76,27);
			t.source = "wenzi_14";
			t.width = 115;
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto._Label2_i = function () {
			var t = new eui.Label();
			this._Label2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.fontFamily = "huakang";
			t.height = 50;
			t.size = 25;
			t.textAlign = "center";
			t.textColor = 0xe00030;
			t.verticalAlign = "middle";
			t.width = 94;
			t.x = 6;
			t.y = 8;
			return t;
		};
		return HomeSkin$Skin13;
	})(eui.Skin);

	var HomeSkin$Skin14 = 	(function (_super) {
		__extends(HomeSkin$Skin14, _super);
		var HomeSkin$Skin14$Skin15 = 		(function (_super) {
			__extends(HomeSkin$Skin14$Skin15, _super);
			function HomeSkin$Skin14$Skin15() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this.thumb_i()];
			}
			var _proto = HomeSkin$Skin14$Skin15.prototype;

			_proto.thumb_i = function () {
				var t = new eui.Image();
				this.thumb = t;
				t.scale9Grid = new egret.Rectangle(1,1,4,4);
				t.source = "hScrollBar02_png";
				t.width = 8;
				return t;
			};
			return HomeSkin$Skin14$Skin15;
		})(eui.Skin);

		function HomeSkin$Skin14() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HomeSkin$Skin14.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.percentHeight = 100;
			t.minHeight = 100;
			t.right = 0;
			t.width = 8;
			t.skinName = HomeSkin$Skin14$Skin15;
			return t;
		};
		return HomeSkin$Skin14;
	})(eui.Skin);

	var HomeSkin$Skin16 = 	(function (_super) {
		__extends(HomeSkin$Skin16, _super);
		var HomeSkin$Skin16$Skin17 = 		(function (_super) {
			__extends(HomeSkin$Skin16$Skin17, _super);
			function HomeSkin$Skin16$Skin17() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this.thumb_i()];
			}
			var _proto = HomeSkin$Skin16$Skin17.prototype;

			_proto.thumb_i = function () {
				var t = new eui.Image();
				this.thumb = t;
				t.scale9Grid = new egret.Rectangle(1,1,4,4);
				t.source = "hScrollBar02_png";
				t.width = 8;
				return t;
			};
			return HomeSkin$Skin16$Skin17;
		})(eui.Skin);

		function HomeSkin$Skin16() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HomeSkin$Skin16.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.percentHeight = 100;
			t.minHeight = 100;
			t.right = 0;
			t.width = 8;
			t.skinName = HomeSkin$Skin16$Skin17;
			return t;
		};
		return HomeSkin$Skin16;
	})(eui.Skin);

	var HomeSkin$Skin18 = 	(function (_super) {
		__extends(HomeSkin$Skin18, _super);
		var HomeSkin$Skin18$Skin19 = 		(function (_super) {
			__extends(HomeSkin$Skin18$Skin19, _super);
			function HomeSkin$Skin18$Skin19() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this.thumb_i()];
			}
			var _proto = HomeSkin$Skin18$Skin19.prototype;

			_proto.thumb_i = function () {
				var t = new eui.Image();
				this.thumb = t;
				t.scale9Grid = new egret.Rectangle(1,1,4,4);
				t.source = "hScrollBar02_png";
				t.width = 8;
				return t;
			};
			return HomeSkin$Skin18$Skin19;
		})(eui.Skin);

		function HomeSkin$Skin18() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HomeSkin$Skin18.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.percentHeight = 100;
			t.minHeight = 100;
			t.right = 0;
			t.width = 8;
			t.skinName = HomeSkin$Skin18$Skin19;
			return t;
		};
		return HomeSkin$Skin18;
	})(eui.Skin);

	var HomeSkin$Skin20 = 	(function (_super) {
		__extends(HomeSkin$Skin20, _super);
		var HomeSkin$Skin20$Skin21 = 		(function (_super) {
			__extends(HomeSkin$Skin20$Skin21, _super);
			function HomeSkin$Skin20$Skin21() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this.thumb_i()];
			}
			var _proto = HomeSkin$Skin20$Skin21.prototype;

			_proto.thumb_i = function () {
				var t = new eui.Image();
				this.thumb = t;
				t.scale9Grid = new egret.Rectangle(1,1,4,4);
				t.source = "hScrollBar02_png";
				t.width = 8;
				return t;
			};
			return HomeSkin$Skin20$Skin21;
		})(eui.Skin);

		function HomeSkin$Skin20() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HomeSkin$Skin20.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.percentHeight = 100;
			t.minHeight = 100;
			t.right = 0;
			t.width = 8;
			t.skinName = HomeSkin$Skin20$Skin21;
			return t;
		};
		return HomeSkin$Skin20;
	})(eui.Skin);

	var HomeSkin$Skin22 = 	(function (_super) {
		__extends(HomeSkin$Skin22, _super);
		function HomeSkin$Skin22() {
			_super.call(this);
			this.skinParts = [];
			
			this.height = 53;
			this.elementsContent = [this._Group1_i()];
			this._Image1_i();
			
			this._Label1_i();
			
			this._Image2_i();
			
			this._Label2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image1","_Group1",0,""),
						new eui.AddItems("_Label1","_Group1",1,""),
						new eui.SetProperty("_Label1","width",99),
						new eui.SetProperty("_Label1","height",52),
						new eui.SetProperty("_Label1","y",0),
						new eui.SetProperty("_Label1","x",0),
						new eui.SetProperty("_Label1","strokeColor",0xe26d04),
						new eui.SetProperty("_Label1","textColor",0xe26d04),
						new eui.SetProperty("_Group1","x",-1),
						new eui.SetProperty("_Group1","y",1),
						new eui.SetProperty("_Group1","width",100),
						new eui.SetProperty("_Group1","height",53),
						new eui.SetProperty("","width",100)
					])
				,
				new eui.State ("down",
					[
						new eui.AddItems("_Image2","_Group1",1,""),
						new eui.AddItems("_Label2","_Group1",1,""),
						new eui.SetProperty("_Label1","width",137),
						new eui.SetProperty("_Label1","height",52),
						new eui.SetProperty("_Label1","y",5),
						new eui.SetProperty("_Label1","stroke",3),
						new eui.SetProperty("_Label1","strokeColor",0xe26d04),
						new eui.SetStateProperty(this, ["hostComponent.data"],[0],this._Label1,"text"),
						new eui.SetProperty("_Group1","y",-4),
						new eui.SetProperty("_Group1","height",63),
						new eui.SetProperty("_Group1","x",-3),
						new eui.SetProperty("_Group1","width",103)
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","alpha",0.5)
					])
			];
			
			eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this._Label1,"text");
			eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this._Label2,"text");
		}
		var _proto = HomeSkin$Skin22.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			this._Group1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 62;
			t.minHeight = 48;
			t.width = 107;
			t.x = -3;
			t.y = -7;
			t.elementsContent = [];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 49;
			t.scale9Grid = new egret.Rectangle(14,12,66,22);
			t.source = "wenzi_51";
			t.width = 106;
			t.x = -2;
			t.y = 1;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			this._Label1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.fontFamily = "huakang";
			t.percentHeight = 100;
			t.size = 26;
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.width = 101;
			t.x = 3;
			t.y = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.height = 60;
			t.scale9Grid = new egret.Rectangle(16,17,76,27);
			t.source = "wenzi_14";
			t.width = 115;
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto._Label2_i = function () {
			var t = new eui.Label();
			this._Label2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.fontFamily = "huakang";
			t.height = 50;
			t.size = 25;
			t.textAlign = "center";
			t.textColor = 0xe00030;
			t.verticalAlign = "middle";
			t.width = 94;
			t.x = 6;
			t.y = 8;
			return t;
		};
		return HomeSkin$Skin22;
	})(eui.Skin);

	var HomeSkin$Skin23 = 	(function (_super) {
		__extends(HomeSkin$Skin23, _super);
		var HomeSkin$Skin23$Skin24 = 		(function (_super) {
			__extends(HomeSkin$Skin23$Skin24, _super);
			function HomeSkin$Skin23$Skin24() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this.thumb_i()];
			}
			var _proto = HomeSkin$Skin23$Skin24.prototype;

			_proto.thumb_i = function () {
				var t = new eui.Image();
				this.thumb = t;
				t.scale9Grid = new egret.Rectangle(1,1,4,4);
				t.source = "hScrollBar02_png";
				t.width = 8;
				return t;
			};
			return HomeSkin$Skin23$Skin24;
		})(eui.Skin);

		function HomeSkin$Skin23() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HomeSkin$Skin23.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.percentHeight = 100;
			t.minHeight = 100;
			t.right = 0;
			t.width = 8;
			t.skinName = HomeSkin$Skin23$Skin24;
			return t;
		};
		return HomeSkin$Skin23;
	})(eui.Skin);

	var HomeSkin$Skin25 = 	(function (_super) {
		__extends(HomeSkin$Skin25, _super);
		var HomeSkin$Skin25$Skin26 = 		(function (_super) {
			__extends(HomeSkin$Skin25$Skin26, _super);
			function HomeSkin$Skin25$Skin26() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this.thumb_i()];
			}
			var _proto = HomeSkin$Skin25$Skin26.prototype;

			_proto.thumb_i = function () {
				var t = new eui.Image();
				this.thumb = t;
				t.scale9Grid = new egret.Rectangle(1,1,4,4);
				t.source = "hScrollBar02_png";
				t.width = 8;
				return t;
			};
			return HomeSkin$Skin25$Skin26;
		})(eui.Skin);

		function HomeSkin$Skin25() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HomeSkin$Skin25.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.percentHeight = 100;
			t.minHeight = 100;
			t.right = 0;
			t.width = 8;
			t.skinName = HomeSkin$Skin25$Skin26;
			return t;
		};
		return HomeSkin$Skin25;
	})(eui.Skin);

	var HomeSkin$Skin27 = 	(function (_super) {
		__extends(HomeSkin$Skin27, _super);
		var HomeSkin$Skin27$Skin28 = 		(function (_super) {
			__extends(HomeSkin$Skin27$Skin28, _super);
			function HomeSkin$Skin27$Skin28() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this.thumb_i()];
			}
			var _proto = HomeSkin$Skin27$Skin28.prototype;

			_proto.thumb_i = function () {
				var t = new eui.Image();
				this.thumb = t;
				t.scale9Grid = new egret.Rectangle(1,1,4,4);
				t.source = "hScrollBar02_png";
				t.width = 8;
				return t;
			};
			return HomeSkin$Skin27$Skin28;
		})(eui.Skin);

		function HomeSkin$Skin27() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HomeSkin$Skin27.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.percentHeight = 100;
			t.minHeight = 100;
			t.right = 0;
			t.width = 8;
			t.skinName = HomeSkin$Skin27$Skin28;
			return t;
		};
		return HomeSkin$Skin27;
	})(eui.Skin);

	var HomeSkin$Skin29 = 	(function (_super) {
		__extends(HomeSkin$Skin29, _super);
		var HomeSkin$Skin29$Skin30 = 		(function (_super) {
			__extends(HomeSkin$Skin29$Skin30, _super);
			function HomeSkin$Skin29$Skin30() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this.thumb_i()];
			}
			var _proto = HomeSkin$Skin29$Skin30.prototype;

			_proto.thumb_i = function () {
				var t = new eui.Image();
				this.thumb = t;
				t.scale9Grid = new egret.Rectangle(1,1,4,4);
				t.source = "hScrollBar02_png";
				t.width = 8;
				return t;
			};
			return HomeSkin$Skin29$Skin30;
		})(eui.Skin);

		function HomeSkin$Skin29() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HomeSkin$Skin29.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.percentHeight = 100;
			t.minHeight = 100;
			t.right = 0;
			t.width = 8;
			t.skinName = HomeSkin$Skin29$Skin30;
			return t;
		};
		return HomeSkin$Skin29;
	})(eui.Skin);

	var HomeSkin$Skin31 = 	(function (_super) {
		__extends(HomeSkin$Skin31, _super);
		var HomeSkin$Skin31$Skin32 = 		(function (_super) {
			__extends(HomeSkin$Skin31$Skin32, _super);
			function HomeSkin$Skin31$Skin32() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this.thumb_i()];
			}
			var _proto = HomeSkin$Skin31$Skin32.prototype;

			_proto.thumb_i = function () {
				var t = new eui.Image();
				this.thumb = t;
				t.scale9Grid = new egret.Rectangle(1,1,4,4);
				t.source = "hScrollBar02_png";
				t.width = 8;
				return t;
			};
			return HomeSkin$Skin31$Skin32;
		})(eui.Skin);

		function HomeSkin$Skin31() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HomeSkin$Skin31.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.percentHeight = 100;
			t.minHeight = 100;
			t.right = 0;
			t.width = 8;
			t.skinName = HomeSkin$Skin31$Skin32;
			return t;
		};
		return HomeSkin$Skin31;
	})(eui.Skin);

	function HomeSkin() {
		_super.call(this);
		this.skinParts = ["cancle_chose","up_house","status_gp","paihang","rizhi","chongzhi","nongchang","up_down_panel","user_panel","up_down","open_user_msg","dog_gp","crops_bottom","crops_top","crops_mask","tishi_right","tishi_left","crops_tishi","guoyuan_gp","open_zhuangban","open_duihuan","open_save_house","open_shop","jiayuan_gp","my_jiayuan","my_guoyuan","index_page","black_mask01","close_rizhi","day_record","tabBar","crops_list","friends_list","pets_list","viewStack","search_player","close_paihang","rank_gp","black_mask02","close_save_house","houseTabBar","guoshi_list","cailiao_list","baoshi_list","daoju_list","houseViewStack","save_house","close_build_center","buildTabBar","landup_list","buildViewStack","build_center","close_search_player","find_player","close_user_msg","user_msg","up_level","close_land_info","land_info","close_bozhong","bozhong","close_chongzhi","more_money","close_shop","shopTabBar","rexiao_list","gongju_list","baoxiang_list","chongwu_list","shopViewStack","shop","close_duihuan","duihuanTabBar","sucai_list","shenxiang_list","beijing_list","gouliang_list","duihuanViewStack","duihuan","close_zhuangban","zhuangban_list","zhuangban","home_bg"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.home_bg_i()];
		
		eui.Binding.$bindProperties(this, ["viewStack"],[0],this.tabBar,"dataProvider");
		eui.Binding.$bindProperties(this, ["houseViewStack"],[0],this.houseTabBar,"dataProvider");
		eui.Binding.$bindProperties(this, ["buildViewStack"],[0],this.buildTabBar,"dataProvider");
		eui.Binding.$bindProperties(this, ["shopViewStack"],[0],this.shopTabBar,"dataProvider");
		eui.Binding.$bindProperties(this, ["duihuanViewStack"],[0],this.duihuanTabBar,"dataProvider");
	}
	var _proto = HomeSkin.prototype;

	_proto.home_bg_i = function () {
		var t = new eui.Group();
		this.home_bg = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.index_page_i(),this.black_mask01_i(),this.day_record_i(),this.rank_gp_i(),this.black_mask02_i(),this.save_house_i(),this.build_center_i(),this.find_player_i(),this.user_msg_i(),this.land_info_i(),this.bozhong_i(),this.more_money_i(),this.shop_i(),this.duihuan_i(),this.zhuangban_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1136;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "home_bg_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.index_page_i = function () {
		var t = new eui.Group();
		this.index_page = t;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.cancle_chose_i(),this.up_house_i(),this.status_gp_i(),this._Group2_i(),this.dog_gp_i(),this._Group3_i(),this.guoyuan_gp_i(),this.jiayuan_gp_i(),this.my_jiayuan_i(),this.my_guoyuan_i()];
		return t;
	};
	_proto.cancle_chose_i = function () {
		var t = new eui.Group();
		this.cancle_chose = t;
		t.anchorOffsetY = 0;
		t.height = 886;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 250;
		return t;
	};
	_proto.up_house_i = function () {
		var t = new eui.Image();
		this.up_house = t;
		t.height = 314;
		t.source = "house04";
		t.width = 354;
		t.x = 303;
		t.y = 244;
		return t;
	};
	_proto.status_gp_i = function () {
		var t = new eui.Group();
		this.status_gp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.width = 420.67;
		t.x = -0.67;
		t.y = 480;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 174;
		t.width = 637;
		t.x = 3;
		t.y = 2;
		t.elementsContent = [this.up_down_panel_i(),this.user_panel_i(),this._Label1_i(),this.up_down_i(),this.open_user_msg_i(),this._Group1_i()];
		return t;
	};
	_proto.up_down_panel_i = function () {
		var t = new eui.Group();
		this.up_down_panel = t;
		t.height = 106;
		t.width = 447;
		t.x = 180;
		t.y = 110;
		t.elementsContent = [this._Image2_i(),this.paihang_i(),this.rizhi_i(),this.chongzhi_i(),this.nongchang_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 106;
		t.source = "icon_json.icon_02";
		t.percentWidth = 100;
		t.x = 8;
		t.y = -18;
		return t;
	};
	_proto.paihang_i = function () {
		var t = new eui.Image();
		this.paihang = t;
		t.height = 74;
		t.source = "icon_json.icon_05";
		t.width = 83;
		t.x = 142;
		t.y = 3;
		return t;
	};
	_proto.rizhi_i = function () {
		var t = new eui.Image();
		this.rizhi = t;
		t.height = 75;
		t.source = "icon_json.icon_12";
		t.width = 90;
		t.x = 36;
		t.y = 4;
		return t;
	};
	_proto.chongzhi_i = function () {
		var t = new eui.Image();
		this.chongzhi = t;
		t.height = 76;
		t.source = "icon_json.icon_41";
		t.width = 73;
		t.x = 240;
		t.y = 1;
		return t;
	};
	_proto.nongchang_i = function () {
		var t = new eui.Image();
		this.nongchang = t;
		t.height = 79;
		t.source = "nongchang_png";
		t.width = 81;
		t.x = 331;
		t.y = -1;
		return t;
	};
	_proto.user_panel_i = function () {
		var t = new eui.Image();
		this.user_panel = t;
		t.height = 183;
		t.horizontalCenter = -11.5;
		t.source = "icon_json.icon_01";
		t.width = 652;
		t.y = -14;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 22;
		t.text = "千叶祥龙的家园";
		t.textAlign = "center";
		t.verticalCenter = -19;
		t.width = 215;
		t.x = 264;
		return t;
	};
	_proto.up_down_i = function () {
		var t = new eui.Image();
		this.up_down = t;
		t.source = "trangle_png";
		t.x = 545;
		t.y = 38;
		return t;
	};
	_proto.open_user_msg_i = function () {
		var t = new eui.Image();
		this.open_user_msg = t;
		t.height = 92;
		t.source = "user01_png";
		t.width = 92;
		t.x = 33;
		t.y = 24;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 40;
		t.width = 456;
		t.x = 137;
		t.y = 3;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 34;
		t.source = "gongju_50";
		t.verticalCenter = 0;
		t.width = 47;
		t.x = 16;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 34;
		t.source = "gongju_64";
		t.verticalCenter = 0;
		t.width = 44;
		t.x = 132;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 34;
		t.source = "gongju_36";
		t.verticalCenter = 0;
		t.width = 47;
		t.x = 243;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.source = "gongju_60";
		t.verticalCenter = 1;
		t.width = 36;
		t.x = 358;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 32;
		t.size = 20;
		t.text = "1000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 60;
		t.x = 68;
		t.y = 6;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.height = 32;
		t.size = 20;
		t.text = "3000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 60;
		t.x = 179;
		t.y = 5;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.height = 32;
		t.size = 20;
		t.text = "5000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 60;
		t.x = 292;
		t.y = 5;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.height = 32;
		t.size = 20;
		t.text = "8000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 60;
		t.x = 398;
		t.y = 5;
		return t;
	};
	_proto.dog_gp_i = function () {
		var t = new eui.Group();
		this.dog_gp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 95;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 84;
		t.x = 332;
		t.y = 525;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 267;
		t.rotation = 1.24;
		t.width = 536.34;
		t.x = 55.65;
		t.y = 607.91;
		t.elementsContent = [this._Image7_i(),this.crops_bottom_i(),this.crops_top_i(),this.crops_mask_i(),this.crops_tishi_i(),this._Image32_i(),this._Image33_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 183.1;
		t.anchorOffsetY = 40.04;
		t.height = 240.08;
		t.pixelHitTest = true;
		t.rotation = 2.72;
		t.source = "weilan02";
		t.touchEnabled = false;
		t.width = 495.85;
		t.x = 315.91;
		t.y = -54.91;
		return t;
	};
	_proto.crops_bottom_i = function () {
		var t = new eui.Group();
		this.crops_bottom = t;
		t.anchorOffsetX = 537.19;
		t.anchorOffsetY = 0.32;
		t.height = 257.05;
		t.rotation = 359.85;
		t.width = 536.26;
		t.x = 537;
		t.y = -1;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "tudi_json.tudi03";
		t.x = -51.77;
		t.y = 59.63;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "tudi_json.tudi02";
		t.x = 38.01;
		t.y = 7.6;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "tudi_json.tudi01";
		t.x = 123.82;
		t.y = -43.9;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "tudi_json.tudi03";
		t.x = 46.05;
		t.y = 111.29;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "tudi_json.tudi02";
		t.x = 136.16;
		t.y = 58.73;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "tudi_json.tudi01";
		t.x = 220.83;
		t.y = 9.56;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "tudi_json.tudi03";
		t.x = 139.79;
		t.y = 165.41;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "tudi_json.tudi02";
		t.x = 231.08;
		t.y = 112.84;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "tudi_json.tudi01";
		t.x = 317.59;
		t.y = 61.34;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "tudi_json.tudi03";
		t.x = 238.4;
		t.y = 218.24;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "tudi_json.tudi02";
		t.x = 330.37;
		t.y = 165.34;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "tudi_json.tudi01";
		t.x = 415.55;
		t.y = 112.84;
		return t;
	};
	_proto.crops_top_i = function () {
		var t = new eui.Group();
		this.crops_top = t;
		t.anchorOffsetX = 537.19;
		t.anchorOffsetY = 0.32;
		t.height = 257.05;
		t.rotation = 359.85;
		t.touchEnabled = false;
		t.width = 536.26;
		t.x = 537;
		t.y = -1;
		t.elementsContent = [this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Image29_i(),this._Image30_i(),this._Image31_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "tudi_json.tudi01";
		t.touchEnabled = false;
		t.visible = false;
		t.x = -51.77;
		t.y = 59.63;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "tudi_json.tudi01";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 38.01;
		t.y = 7.6;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "tudi_json.tudi01";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 123.82;
		t.y = -43.9;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "tudi_json.tudi01";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 46.05;
		t.y = 111.29;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "tudi_json.tudi01";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 136.16;
		t.y = 58.73;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.source = "tudi_json.tudi01";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 220.83;
		t.y = 9.56;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.source = "tudi_json.tudi01";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 139.79;
		t.y = 165.41;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.source = "tudi_json.tudi01";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 231.08;
		t.y = 112.84;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.source = "tudi_json.tudi01";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 317.59;
		t.y = 61.34;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.source = "tudi_json.tudi01";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 238.4;
		t.y = 218.24;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.source = "tudi_json.tudi01";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 330.37;
		t.y = 165.34;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.source = "tudi_json.tudi01";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 415.55;
		t.y = 112.84;
		return t;
	};
	_proto.crops_mask_i = function () {
		var t = new eui.Image();
		this.crops_mask = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 103.01;
		t.source = "touming1_png";
		t.touchEnabled = false;
		t.visible = false;
		t.width = 177.99;
		t.x = -54.83;
		t.y = 56.66;
		return t;
	};
	_proto.crops_tishi_i = function () {
		var t = new eui.Group();
		this.crops_tishi = t;
		t.anchorOffsetX = 88.37;
		t.anchorOffsetY = 115.29;
		t.height = 114.41;
		t.touchEnabled = false;
		t.visible = false;
		t.width = 177.52;
		t.x = 205;
		t.y = -3.71;
		t.elementsContent = [this.tishi_right_i(),this.tishi_left_i()];
		return t;
	};
	_proto.tishi_right_i = function () {
		var t = new eui.Image();
		this.tishi_right = t;
		t.source = "icon_json.icon_33";
		t.x = 94.22;
		t.y = -3.04;
		return t;
	};
	_proto.tishi_left_i = function () {
		var t = new eui.Image();
		this.tishi_left = t;
		t.source = "icon_json.icon_32";
		t.x = -4.01;
		t.y = -2.16;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 144.01;
		t.anchorOffsetY = 76.82;
		t.height = 242.33;
		t.pixelHitTest = true;
		t.rotation = 2.81;
		t.source = "weilan05";
		t.touchEnabled = false;
		t.width = 635.83;
		t.x = 93.84;
		t.y = 202.76;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.source = "touming1";
		t.visible = false;
		t.x = -51.77;
		t.y = 58.3;
		return t;
	};
	_proto.guoyuan_gp_i = function () {
		var t = new eui.Group();
		this.guoyuan_gp = t;
		t.height = 230;
		t.width = 250;
		t.x = 0;
		t.y = 906;
		t.elementsContent = [this._Image34_i(),this._Image35_i(),this._Image36_i(),this._Image37_i()];
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.height = 71;
		t.source = "icon_json.icon_09";
		t.width = 67;
		t.x = 8;
		t.y = -3;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.height = 71;
		t.source = "icon_json.icon_11";
		t.width = 67;
		t.x = 89;
		t.y = 8;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.height = 71;
		t.source = "icon_json.icon_10";
		t.width = 67;
		t.x = 152;
		t.y = 68;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.height = 71;
		t.source = "icon_json.icon_23";
		t.width = 67;
		t.x = 160;
		t.y = 151;
		return t;
	};
	_proto.jiayuan_gp_i = function () {
		var t = new eui.Group();
		this.jiayuan_gp = t;
		t.height = 232;
		t.width = 240;
		t.x = 400;
		t.y = 903;
		t.elementsContent = [this.open_zhuangban_i(),this.open_duihuan_i(),this.open_save_house_i(),this.open_shop_i()];
		return t;
	};
	_proto.open_zhuangban_i = function () {
		var t = new eui.Image();
		this.open_zhuangban = t;
		t.height = 71;
		t.source = "icon_json.icon_07";
		t.width = 67;
		t.x = 12;
		t.y = 153;
		return t;
	};
	_proto.open_duihuan_i = function () {
		var t = new eui.Image();
		this.open_duihuan = t;
		t.height = 71;
		t.source = "icon_json.icon_08";
		t.width = 70;
		t.x = 20;
		t.y = 68;
		return t;
	};
	_proto.open_save_house_i = function () {
		var t = new eui.Image();
		this.open_save_house = t;
		t.height = 71;
		t.source = "icon_json.icon_19";
		t.width = 67;
		t.x = 75;
		t.y = 5;
		return t;
	};
	_proto.open_shop_i = function () {
		var t = new eui.Image();
		this.open_shop = t;
		t.height = 71;
		t.source = "icon_json.icon_40";
		t.width = 67;
		t.x = 159;
		t.y = -3;
		return t;
	};
	_proto.my_jiayuan_i = function () {
		var t = new eui.Button();
		this.my_jiayuan = t;
		t.x = 491;
		t.y = 1001;
		t.skinName = HomeSkin$Skin2;
		return t;
	};
	_proto.my_guoyuan_i = function () {
		var t = new eui.Button();
		this.my_guoyuan = t;
		t.width = 138;
		t.x = 0;
		t.y = 1001;
		t.skinName = HomeSkin$Skin3;
		return t;
	};
	_proto.black_mask01_i = function () {
		var t = new eui.Rect();
		this.black_mask01 = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.day_record_i = function () {
		var t = new eui.Group();
		this.day_record = t;
		t.height = 714;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 560;
		t.x = 40;
		t.y = 211;
		t.elementsContent = [this._Image38_i(),this._Image39_i(),this._Image40_i(),this._Image41_i(),this._Scroller1_i(),this._Image43_i(),this.close_rizhi_i()];
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(117,134,51,51);
		t.source = "tibiao_01";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.height = 84;
		t.scale9Grid = new egret.Rectangle(168,24,42,20);
		t.source = "wenzi_12";
		t.width = 543;
		t.x = 7;
		t.y = -12;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.source = "icon_12";
		t.x = 140;
		t.y = -22;
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		t.source = "wenzi_38";
		t.x = 257;
		t.y = -26;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.enabled = true;
		t.height = 567;
		t.width = 472;
		t.x = 44;
		t.y = 82;
		t.viewport = this._Group5_i();
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Group4_i(),this._List1_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 78;
		t.horizontalCenter = 0;
		t.width = 448;
		t.y = 34;
		t.elementsContent = [this._Image42_i(),this._Label6_i(),this._Label7_i()];
		return t;
	};
	_proto._Image42_i = function () {
		var t = new eui.Image();
		t.height = 78;
		t.scale9Grid = new egret.Rectangle(18,20,98,86);
		t.source = "wenzi_13";
		t.width = 444;
		t.x = 6;
		t.y = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.percentHeight = 40;
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.text = "2017-05-09 17：52：04";
		t.textAlign = "left";
		t.textColor = 0x643B01;
		t.verticalAlign = "middle";
		t.width = 411;
		t.y = 10;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.percentHeight = 40;
		t.lineSpacing = 20;
		t.size = 20;
		t.text = "【5】号土地施肥扣除化肥一袋";
		t.textColor = 0x643B01;
		t.verticalAlign = "middle";
		t.width = 421;
		t.x = 11;
		t.y = 44;
		return t;
	};
	_proto._List1_i = function () {
		var t = new eui.List();
		t.height = 200;
		t.width = 200;
		t.x = 112;
		t.y = 314;
		return t;
	};
	_proto._Image43_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "tibiao_25";
		t.width = 183;
		t.y = 641;
		return t;
	};
	_proto.close_rizhi_i = function () {
		var t = new eui.Label();
		this.close_rizhi = t;
		t.bold = true;
		t.height = 49;
		t.horizontalCenter = 0.5;
		t.text = "离开";
		t.textAlign = "center";
		t.textColor = 0x522604;
		t.verticalAlign = "middle";
		t.width = 171;
		t.y = 651;
		return t;
	};
	_proto.rank_gp_i = function () {
		var t = new eui.Group();
		this.rank_gp = t;
		t.height = 769;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0.5;
		t.visible = false;
		t.width = 560;
		t.x = 40;
		t.y = 184;
		t.elementsContent = [this._Image44_i(),this._Group12_i(),this._Image46_i(),this._Image47_i(),this._Image48_i(),this.search_player_i(),this._Image49_i(),this.close_paihang_i()];
		return t;
	};
	_proto._Image44_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(117,134,51,51);
		t.source = "tibiao_01";
		t.width = 558;
		t.y = 0;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.height = 621;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 492;
		t.elementsContent = [this._Image45_i(),this.tabBar_i(),this.viewStack_i()];
		return t;
	};
	_proto._Image45_i = function () {
		var t = new eui.Image();
		t.height = 577;
		t.horizontalCenter = 0.5;
		t.pixelHitTest = true;
		t.scale9Grid = new egret.Rectangle(154,60,56,40);
		t.source = "wenzi_01";
		t.verticalCenter = -5;
		t.width = 473;
		return t;
	};
	_proto.tabBar_i = function () {
		var t = new eui.TabBar();
		this.tabBar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54.67;
		t.horizontalCenter = -5.5;
		t.verticalCenter = -270;
		t.width = 457;
		t.layout = this._HorizontalLayout1_i();
		t.itemRendererSkinName = HomeSkin$Skin4;
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.viewStack_i = function () {
		var t = new eui.ViewStack();
		this.viewStack = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 474.24;
		t.horizontalCenter = 0;
		t.selectedIndex = 0;
		t.width = 450;
		t.y = 68.38;
		t.elementsContent = [this._Group7_i(),this._Group9_i(),this._Group11_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 500;
		t.name = "农场排名";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 3;
		t.elementsContent = [this._Group6_i(),this._Scroller2_i()];
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.width = 443;
		t.x = 4;
		t.y = -0.71;
		t.elementsContent = [this._Label8_i(),this._Label9_i(),this._Label10_i(),this._Label11_i(),this._Label12_i()];
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "huakang";
		t.height = 21;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x9c460b;
		t.text = "排名";
		t.textAlign = "center";
		t.textColor = 0xffcc00;
		t.verticalCenter = 0;
		t.width = 81;
		t.x = 3;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "huakang";
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x9c460b;
		t.text = "游戏昵称";
		t.textAlign = "center";
		t.textColor = 0xffcc00;
		t.verticalCenter = 0;
		t.width = 98;
		t.x = 94;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "huakang";
		t.height = 18;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x9c460b;
		t.text = "等级";
		t.textAlign = "center";
		t.textColor = 0xffcc00;
		t.verticalCenter = 0;
		t.width = 79;
		t.x = 203.5;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "huakang";
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x9c460b;
		t.text = "财富";
		t.textAlign = "center";
		t.textColor = 0xffcc00;
		t.verticalCenter = 0;
		t.width = 51;
		t.x = 292.5;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "huakang";
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x9c460b;
		t.text = "家园";
		t.textAlign = "center";
		t.textColor = 0xffcc00;
		t.verticalCenter = 0;
		t.width = 51;
		t.x = 369.5;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 449.33;
		t.horizontalCenter = 0;
		t.skinName = "skins.ScrollerSkin";
		t.width = 450;
		t.y = 50;
		t.skinName = HomeSkin$Skin5;
		t.viewport = this.crops_list_i();
		return t;
	};
	_proto.crops_list_i = function () {
		var t = new eui.List();
		this.crops_list = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 30;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 500;
		t.name = "好友排名";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 3;
		t.elementsContent = [this._Group8_i(),this._Scroller3_i()];
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.width = 443;
		t.x = 4;
		t.y = -0.71;
		t.elementsContent = [this._Label13_i(),this._Label14_i(),this._Label15_i(),this._Label16_i(),this._Label17_i()];
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "huakang";
		t.height = 21;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x9c460b;
		t.text = "排名";
		t.textAlign = "center";
		t.textColor = 0xffcc00;
		t.verticalCenter = 0;
		t.width = 81;
		t.x = 3;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "huakang";
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x9c460b;
		t.text = "游戏昵称";
		t.textAlign = "center";
		t.textColor = 0xffcc00;
		t.verticalCenter = 0;
		t.width = 98;
		t.x = 94;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "huakang";
		t.height = 18;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x9c460b;
		t.text = "等级";
		t.textAlign = "center";
		t.textColor = 0xffcc00;
		t.verticalCenter = 0;
		t.width = 79;
		t.x = 203.5;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "huakang";
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x9c460b;
		t.text = "财富";
		t.textAlign = "center";
		t.textColor = 0xffcc00;
		t.verticalCenter = 0;
		t.width = 51;
		t.x = 292.5;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "huakang";
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x9c460b;
		t.text = "家园";
		t.textAlign = "center";
		t.textColor = 0xffcc00;
		t.verticalCenter = 0;
		t.width = 51;
		t.x = 369.5;
		return t;
	};
	_proto._Scroller3_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 449.33;
		t.horizontalCenter = 0;
		t.skinName = "skins.ScrollerSkin";
		t.width = 450;
		t.y = 50;
		t.skinName = HomeSkin$Skin7;
		t.viewport = this.friends_list_i();
		return t;
	};
	_proto.friends_list_i = function () {
		var t = new eui.List();
		this.friends_list = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 30;
		t.layout = this._VerticalLayout2_i();
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 500;
		t.name = "宠物排名";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 3;
		t.elementsContent = [this._Group10_i(),this._Scroller4_i()];
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.width = 443;
		t.x = 4;
		t.y = -0.71;
		t.elementsContent = [this._Label18_i(),this._Label19_i(),this._Label20_i(),this._Label21_i(),this._Label22_i()];
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "huakang";
		t.height = 21;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x9c460b;
		t.text = "排名";
		t.textAlign = "center";
		t.textColor = 0xffcc00;
		t.verticalCenter = 0;
		t.width = 81;
		t.x = 3;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "huakang";
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x9c460b;
		t.text = "宠物昵称";
		t.textAlign = "center";
		t.textColor = 0xffcc00;
		t.verticalCenter = 0;
		t.width = 98;
		t.x = 94;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "huakang";
		t.height = 18;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x9c460b;
		t.text = "主人昵称";
		t.textAlign = "center";
		t.textColor = 0xffcc00;
		t.verticalCenter = 0;
		t.width = 79;
		t.x = 203.5;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "huakang";
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x9c460b;
		t.text = "等级";
		t.textAlign = "center";
		t.textColor = 0xffcc00;
		t.verticalCenter = 0;
		t.width = 51;
		t.x = 292.5;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "huakang";
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x9c460b;
		t.text = "评分";
		t.textAlign = "center";
		t.textColor = 0xffcc00;
		t.verticalCenter = 0;
		t.width = 51;
		t.x = 369.5;
		return t;
	};
	_proto._Scroller4_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 449.33;
		t.horizontalCenter = 0;
		t.skinName = "skins.ScrollerSkin";
		t.width = 450;
		t.y = 50;
		t.skinName = HomeSkin$Skin9;
		t.viewport = this.pets_list_i();
		return t;
	};
	_proto.pets_list_i = function () {
		var t = new eui.List();
		this.pets_list = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 30;
		t.layout = this._VerticalLayout3_i();
		return t;
	};
	_proto._VerticalLayout3_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Image46_i = function () {
		var t = new eui.Image();
		t.height = 84;
		t.scale9Grid = new egret.Rectangle(168,24,42,20);
		t.source = "wenzi_12";
		t.width = 543;
		t.x = 7;
		t.y = -12;
		return t;
	};
	_proto._Image47_i = function () {
		var t = new eui.Image();
		t.source = "wenzi_18";
		t.x = 215;
		t.y = -25;
		return t;
	};
	_proto._Image48_i = function () {
		var t = new eui.Image();
		t.source = "icon_05";
		t.x = 110;
		t.y = -28;
		return t;
	};
	_proto.search_player_i = function () {
		var t = new eui.Image();
		this.search_player = t;
		t.source = "rank_14";
		t.x = 454;
		t.y = -8;
		return t;
	};
	_proto._Image49_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "tibiao_25";
		t.width = 183;
		t.y = 696;
		return t;
	};
	_proto.close_paihang_i = function () {
		var t = new eui.Label();
		this.close_paihang = t;
		t.bold = true;
		t.height = 49;
		t.horizontalCenter = 0.5;
		t.text = "离开";
		t.textAlign = "center";
		t.textColor = 0x522604;
		t.verticalAlign = "middle";
		t.width = 171;
		t.y = 706;
		return t;
	};
	_proto.black_mask02_i = function () {
		var t = new eui.Rect();
		this.black_mask02 = t;
		t.fillAlpha = 0.4;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.save_house_i = function () {
		var t = new eui.Group();
		this.save_house = t;
		t.height = 700;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 560;
		t.x = 40;
		t.y = 218;
		t.elementsContent = [this._Image50_i(),this._Image51_i(),this.close_save_house_i(),this._Image52_i(),this._Image53_i(),this._Group17_i()];
		return t;
	};
	_proto._Image50_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(117,134,51,51);
		t.source = "tibiao_01";
		t.width = 558;
		t.y = 0;
		return t;
	};
	_proto._Image51_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "tibiao_25";
		t.width = 183;
		t.y = 624;
		return t;
	};
	_proto.close_save_house_i = function () {
		var t = new eui.Label();
		this.close_save_house = t;
		t.bold = true;
		t.height = 49;
		t.horizontalCenter = 0.5;
		t.text = "离开";
		t.textAlign = "center";
		t.textColor = 0x522604;
		t.verticalAlign = "middle";
		t.width = 171;
		t.y = 634;
		return t;
	};
	_proto._Image52_i = function () {
		var t = new eui.Image();
		t.source = "wenzi_03";
		t.x = 192;
		t.y = -27;
		return t;
	};
	_proto._Image53_i = function () {
		var t = new eui.Image();
		t.source = "tibiao_31";
		t.width = 87;
		t.x = 96;
		t.y = -26;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 475;
		t.horizontalCenter = -2;
		t.verticalCenter = -11.5;
		t.width = 492;
		t.elementsContent = [this._Image54_i(),this.houseTabBar_i(),this.houseViewStack_i()];
		return t;
	};
	_proto._Image54_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 464.52;
		t.scale9Grid = new egret.Rectangle(29,16,175,30);
		t.source = "tabPanel_png";
		t.width = 471.48;
		t.x = 13.62;
		t.y = 51;
		return t;
	};
	_proto.houseTabBar_i = function () {
		var t = new eui.TabBar();
		this.houseTabBar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54.67;
		t.horizontalCenter = 4;
		t.verticalCenter = -207;
		t.width = 428.21;
		t.layout = this._HorizontalLayout2_i();
		t.itemRendererSkinName = HomeSkin$Skin11;
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.houseViewStack_i = function () {
		var t = new eui.ViewStack();
		this.houseViewStack = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 438.24;
		t.horizontalCenter = 6;
		t.selectedIndex = 3;
		t.width = 450;
		t.y = 64.88;
		t.elementsContent = [this._Group13_i(),this._Group14_i(),this._Group15_i(),this._Group16_i()];
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 434;
		t.horizontalCenter = 0;
		t.name = "果实";
		t.percentWidth = 100;
		t.y = 3;
		t.elementsContent = [this.guoshi_list_i()];
		return t;
	};
	_proto.guoshi_list_i = function () {
		var t = new eui.List();
		this.guoshi_list = t;
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.width = 462.13;
		t.x = -3;
		t.y = 1.24;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.orientation = "rows";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 500;
		t.name = "材料";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 3;
		t.elementsContent = [this.cailiao_list_i()];
		return t;
	};
	_proto.cailiao_list_i = function () {
		var t = new eui.List();
		this.cailiao_list = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = -3;
		t.y = 1.24;
		t.layout = this._TileLayout2_i();
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.orientation = "rows";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 500;
		t.name = "宝石";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 3;
		t.elementsContent = [this.baoshi_list_i()];
		return t;
	};
	_proto.baoshi_list_i = function () {
		var t = new eui.List();
		this.baoshi_list = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = -3;
		t.y = 1.24;
		t.layout = this._TileLayout3_i();
		return t;
	};
	_proto._TileLayout3_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.orientation = "rows";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 500;
		t.name = "道具";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 3;
		t.elementsContent = [this.daoju_list_i()];
		return t;
	};
	_proto.daoju_list_i = function () {
		var t = new eui.List();
		this.daoju_list = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = -3;
		t.y = 1.24;
		t.layout = this._TileLayout4_i();
		return t;
	};
	_proto._TileLayout4_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.orientation = "rows";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.build_center_i = function () {
		var t = new eui.Group();
		this.build_center = t;
		t.height = 700;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 560;
		t.x = 50;
		t.y = 228;
		t.elementsContent = [this._Image55_i(),this._Image56_i(),this.close_build_center_i(),this._Image57_i(),this._Image58_i(),this._Group23_i()];
		return t;
	};
	_proto._Image55_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(117,134,51,51);
		t.source = "tibiao_01";
		t.width = 558;
		t.y = 0;
		return t;
	};
	_proto._Image56_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "tibiao_25";
		t.width = 183;
		t.y = 624;
		return t;
	};
	_proto.close_build_center_i = function () {
		var t = new eui.Label();
		this.close_build_center = t;
		t.bold = true;
		t.height = 49;
		t.horizontalCenter = 0.5;
		t.text = "离开";
		t.textAlign = "center";
		t.textColor = 0x522604;
		t.verticalAlign = "middle";
		t.width = 171;
		t.y = 634;
		return t;
	};
	_proto._Image57_i = function () {
		var t = new eui.Image();
		t.source = "wenzi_json.wenzi_05";
		t.x = 196.56;
		t.y = -27;
		return t;
	};
	_proto._Image58_i = function () {
		var t = new eui.Image();
		t.source = "tubiao_json.tibiao_07";
		t.width = 87;
		t.x = 100.56;
		t.y = -26;
		return t;
	};
	_proto._Group23_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 475;
		t.horizontalCenter = -2;
		t.verticalCenter = -11.5;
		t.width = 492;
		t.elementsContent = [this._Image59_i(),this.buildTabBar_i(),this.buildViewStack_i()];
		return t;
	};
	_proto._Image59_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 464.52;
		t.scale9Grid = new egret.Rectangle(29,16,175,30);
		t.source = "tabPanel_png";
		t.width = 471.48;
		t.x = 13.62;
		t.y = 51;
		return t;
	};
	_proto.buildTabBar_i = function () {
		var t = new eui.TabBar();
		this.buildTabBar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54.67;
		t.horizontalCenter = 4;
		t.verticalCenter = -207;
		t.width = 428.21;
		t.layout = this._HorizontalLayout3_i();
		t.itemRendererSkinName = HomeSkin$Skin12;
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.buildViewStack_i = function () {
		var t = new eui.ViewStack();
		this.buildViewStack = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 438.24;
		t.horizontalCenter = 6;
		t.selectedIndex = 0;
		t.width = 450;
		t.y = 64.88;
		t.elementsContent = [this._Group21_i(),this._Group22_i()];
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 434;
		t.name = "房屋升级";
		t.visible = false;
		t.width = 448;
		t.x = 0;
		t.y = 3;
		t.elementsContent = [this._Group18_i(),this._Label24_i(),this._Group19_i(),this._Group20_i()];
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 228;
		t.width = 394;
		t.x = 28;
		t.y = 14;
		t.elementsContent = [this._Image60_i(),this._Image61_i(),this._Image62_i(),this._Image63_i(),this._Image64_i(),this._Image65_i(),this._Image66_i(),this._Image67_i(),this._Image68_i(),this._Image69_i(),this._Label23_i()];
		return t;
	};
	_proto._Image60_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 217;
		t.source = "houseImg_json.house_img5_png";
		t.width = 365;
		t.x = 10;
		t.y = 6.62;
		return t;
	};
	_proto._Image61_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 161;
		t.source = "house_json.house02";
		t.width = 188;
		t.x = 98.86;
		t.y = 29.62;
		return t;
	};
	_proto._Image62_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37;
		t.source = "wenzi_json.wenzi_32";
		t.width = 36;
		t.x = 344.48;
		t.y = -7.38;
		return t;
	};
	_proto._Image63_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 64;
		t.source = "rank_json.rank_07";
		t.width = 101;
		t.x = -7;
		t.y = -10;
		return t;
	};
	_proto._Image64_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.source = "number_json.10";
		t.width = 18;
		t.x = 8;
		t.y = 13.12;
		return t;
	};
	_proto._Image65_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27;
		t.source = "number_json.9";
		t.width = 19;
		t.x = 23.5;
		t.y = 11.62;
		return t;
	};
	_proto._Image66_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 11;
		t.source = "number_json.12";
		t.width = 11;
		t.x = 40;
		t.y = 21;
		return t;
	};
	_proto._Image67_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.source = "number_json.2";
		t.width = 21;
		t.x = 50.93;
		t.y = -1.88;
		return t;
	};
	_proto._Image68_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.source = "rank_json.rank_02";
		t.width = 119;
		t.x = 127;
		t.y = 189;
		return t;
	};
	_proto._Image69_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47;
		t.source = "rank_json.rank_05";
		t.touchEnabled = false;
		t.width = 37;
		t.x = 202;
		t.y = 185;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "huakang";
		t.height = 36;
		t.size = 28;
		t.text = "升级";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 66;
		t.x = 140;
		t.y = 195.5;
		return t;
	};
	_proto._Label24_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.size = 20;
		t.text = "房屋等级每提升1级，将获得1块新土地";
		t.textAlign = "center";
		t.textColor = 0xef0202;
		t.verticalAlign = "middle";
		t.width = 418;
		t.x = 19;
		t.y = 263;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 94;
		t.x = 66;
		t.y = 296;
		t.elementsContent = [this._Image70_i(),this._Image71_i(),this._Label25_i()];
		return t;
	};
	_proto._Image70_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 124;
		t.source = "rank_json.rank_01";
		t.width = 93;
		t.x = 7;
		t.y = 0;
		return t;
	};
	_proto._Image71_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "gongju_json.gongju_50";
		t.y = 25.120000000000005;
		return t;
	};
	_proto._Label25_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 24;
		t.size = 20;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0x562402;
		t.verticalAlign = "middle";
		t.width = 71;
		t.x = 19;
		t.y = 91;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 100;
		t.x = 248;
		t.y = 295;
		t.elementsContent = [this._Image72_i(),this._Image73_i(),this._Label26_i()];
		return t;
	};
	_proto._Image72_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 124;
		t.source = "rank_json.rank_01";
		t.width = 93;
		t.x = 5;
		t.y = 0;
		return t;
	};
	_proto._Image73_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "gongju_json.gongju_60";
		t.y = 25.120000000000005;
		return t;
	};
	_proto._Label26_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 24;
		t.size = 20;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0x562402;
		t.verticalAlign = "middle";
		t.width = 71;
		t.x = 19;
		t.y = 91;
		return t;
	};
	_proto._Group22_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 434;
		t.name = "土地升级";
		t.width = 446;
		t.x = 0;
		t.y = 3;
		t.elementsContent = [this.landup_list_i()];
		return t;
	};
	_proto.landup_list_i = function () {
		var t = new eui.List();
		this.landup_list = t;
		t.anchorOffsetY = 0;
		t.height = 444;
		t.percentWidth = 100;
		t.x = -3;
		t.y = 1.24;
		t.layout = this._VerticalLayout4_i();
		return t;
	};
	_proto._VerticalLayout4_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.find_player_i = function () {
		var t = new eui.Group();
		this.find_player = t;
		t.height = 379;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -0.5;
		t.visible = false;
		t.width = 480;
		t.x = 80;
		t.y = 378;
		t.elementsContent = [this._Image74_i(),this.close_search_player_i(),this._Image75_i(),this._Image76_i(),this._Image77_i(),this._Group24_i(),this._Rect2_i()];
		return t;
	};
	_proto._Image74_i = function () {
		var t = new eui.Image();
		t.height = 304;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(49,56,83,24);
		t.source = "tibiao_02";
		t.verticalCenter = 0;
		t.width = 439;
		return t;
	};
	_proto.close_search_player_i = function () {
		var t = new eui.Image();
		this.close_search_player = t;
		t.height = 62;
		t.source = "tibiao_38";
		t.width = 65;
		t.x = 408;
		t.y = 15;
		return t;
	};
	_proto._Image75_i = function () {
		var t = new eui.Image();
		t.height = 51;
		t.source = "wenzi_20";
		t.width = 66;
		t.x = 87;
		t.y = 25;
		return t;
	};
	_proto._Image76_i = function () {
		var t = new eui.Image();
		t.source = "wenzi_43";
		t.x = 346;
		t.y = 36;
		return t;
	};
	_proto._Image77_i = function () {
		var t = new eui.Image();
		t.height = 64;
		t.source = "rank_18";
		t.width = 205;
		t.x = 149;
		t.y = 13;
		return t;
	};
	_proto._Group24_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 359;
		t.x = 58;
		t.y = 105;
		t.elementsContent = [this._Label27_i(),this._Rect1_i(),this._TextInput1_i(),this._Image78_i(),this._Label28_i()];
		return t;
	};
	_proto._Label27_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "按ID查找玩家";
		t.textColor = 0xCC6C0D;
		t.x = 10;
		t.y = 15;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 20;
		t.fillColor = 0x753A03;
		t.height = 37;
		t.width = 142;
		t.x = 136;
		t.y = 7;
		return t;
	};
	_proto._TextInput1_i = function () {
		var t = new eui.TextInput();
		t.height = 37;
		t.prompt = "请输入账号";
		t.width = 139;
		t.x = 140;
		t.y = 7;
		return t;
	};
	_proto._Image78_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.source = "tibiao_26";
		t.verticalCenter = 0.5;
		t.width = 63;
		t.x = 291;
		return t;
	};
	_proto._Label28_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.height = 31;
		t.size = 20;
		t.text = "查找";
		t.textAlign = "center";
		t.textColor = 0x7D2E09;
		t.verticalAlign = "middle";
		t.width = 52;
		t.x = 295;
		t.y = 11;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x713800;
		t.height = 1;
		t.strokeColor = 0xF30E38;
		t.strokeWeight = 0;
		t.width = 342;
		t.x = 67;
		t.y = 168;
		return t;
	};
	_proto.user_msg_i = function () {
		var t = new eui.Group();
		this.user_msg = t;
		t.height = 379;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -0.5;
		t.visible = false;
		t.width = 480;
		t.x = 80;
		t.y = 378;
		t.elementsContent = [this._Image79_i(),this.close_user_msg_i(),this._Image80_i(),this._Image81_i(),this._Image82_i(),this._Image83_i(),this._Group25_i(),this._Image89_i()];
		return t;
	};
	_proto._Image79_i = function () {
		var t = new eui.Image();
		t.height = 304;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(49,56,83,24);
		t.source = "tibiao_02";
		t.verticalCenter = 0;
		t.width = 439;
		return t;
	};
	_proto.close_user_msg_i = function () {
		var t = new eui.Image();
		this.close_user_msg = t;
		t.height = 62;
		t.source = "tibiao_38";
		t.width = 65;
		t.x = 408;
		t.y = 15;
		return t;
	};
	_proto._Image80_i = function () {
		var t = new eui.Image();
		t.height = 51;
		t.source = "wenzi_20";
		t.width = 66;
		t.x = 87;
		t.y = 25;
		return t;
	};
	_proto._Image81_i = function () {
		var t = new eui.Image();
		t.source = "wenzi_43";
		t.x = 346;
		t.y = 36;
		return t;
	};
	_proto._Image82_i = function () {
		var t = new eui.Image();
		t.height = 71;
		t.source = "usermsg_01";
		t.width = 208;
		t.x = 151;
		t.y = 11;
		return t;
	};
	_proto._Image83_i = function () {
		var t = new eui.Image();
		t.height = 142;
		t.source = "border_05";
		t.width = 128;
		t.x = 60;
		t.y = 99;
		return t;
	};
	_proto._Group25_i = function () {
		var t = new eui.Group();
		t.height = 161;
		t.width = 212;
		t.x = 197;
		t.y = 92;
		t.elementsContent = [this._Image84_i(),this._Image85_i(),this._Image86_i(),this._Image87_i(),this._Label29_i(),this._Label30_i(),this._Label31_i(),this._Label32_i(),this._Image88_i()];
		return t;
	};
	_proto._Image84_i = function () {
		var t = new eui.Image();
		t.source = "usermsg_04";
		t.x = 8;
		t.y = 7;
		return t;
	};
	_proto._Image85_i = function () {
		var t = new eui.Image();
		t.source = "usermsg_05";
		t.x = 12;
		t.y = 43;
		return t;
	};
	_proto._Image86_i = function () {
		var t = new eui.Image();
		t.source = "usermsg_02";
		t.x = 6;
		t.y = 80;
		return t;
	};
	_proto._Image87_i = function () {
		var t = new eui.Image();
		t.source = "usermsg_03";
		t.x = 8;
		t.y = 114;
		return t;
	};
	_proto._Label29_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.border = false;
		t.size = 20;
		t.stroke = 1;
		t.strokeColor = 0x9C3803;
		t.text = "千叶祥龙";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 101;
		t.x = 111;
		t.y = 13;
		return t;
	};
	_proto._Label30_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.border = false;
		t.height = 26;
		t.size = 20;
		t.stroke = 1;
		t.strokeColor = 0x9C3803;
		t.text = "10010";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 101;
		t.x = 107;
		t.y = 48;
		return t;
	};
	_proto._Label31_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.border = false;
		t.height = 26;
		t.size = 20;
		t.stroke = 1;
		t.strokeColor = 0x9C3803;
		t.text = "LV.12";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 101;
		t.x = 108;
		t.y = 80;
		return t;
	};
	_proto._Label32_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.border = false;
		t.height = 26;
		t.size = 20;
		t.stroke = 1;
		t.strokeColor = 0x9C3803;
		t.text = "80222";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 66;
		t.x = 145;
		t.y = 114;
		return t;
	};
	_proto._Image88_i = function () {
		var t = new eui.Image();
		t.height = 29;
		t.source = "gongju_39";
		t.width = 30;
		t.x = 112;
		t.y = 113;
		return t;
	};
	_proto._Image89_i = function () {
		var t = new eui.Image();
		t.height = 96;
		t.source = "user01_png";
		t.width = 96;
		t.x = 76;
		t.y = 118;
		return t;
	};
	_proto.land_info_i = function () {
		var t = new eui.Group();
		this.land_info = t;
		t.height = 379;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -0.5;
		t.visible = false;
		t.width = 480;
		t.x = 90;
		t.y = 388;
		t.elementsContent = [this._Image90_i(),this._Image91_i(),this.up_level_i(),this.close_land_info_i(),this._Image92_i(),this._Image93_i(),this._Image94_i(),this._Label33_i(),this._Label34_i(),this._Label35_i()];
		return t;
	};
	_proto._Image90_i = function () {
		var t = new eui.Image();
		t.height = 304;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(49,56,83,24);
		t.source = "tibiao_02";
		t.verticalCenter = 0;
		t.width = 439;
		return t;
	};
	_proto._Image91_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "tubiao_json.tibiao_26";
		t.width = 112;
		t.x = 185;
		t.y = 280;
		return t;
	};
	_proto.up_level_i = function () {
		var t = new eui.Label();
		this.up_level = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "huakang";
		t.height = 33;
		t.size = 25;
		t.text = "升级";
		t.textAlign = "center";
		t.textColor = 0x4C2002;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 190.5;
		t.y = 285;
		return t;
	};
	_proto.close_land_info_i = function () {
		var t = new eui.Image();
		this.close_land_info = t;
		t.height = 62;
		t.source = "tibiao_38";
		t.width = 65;
		t.x = 408;
		t.y = 15;
		return t;
	};
	_proto._Image92_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.source = "gongju_json.gongju_05";
		t.width = 72;
		t.x = 85;
		t.y = 25;
		return t;
	};
	_proto._Image93_i = function () {
		var t = new eui.Image();
		t.source = "wenzi_43";
		t.x = 346;
		t.y = 36;
		return t;
	};
	_proto._Image94_i = function () {
		var t = new eui.Image();
		t.height = 71;
		t.source = "tiShiFont_json.panel_title_land0_png";
		t.width = 208;
		t.x = 151;
		t.y = 11;
		return t;
	};
	_proto._Label33_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "介绍：普通的土地，只能种出最普通的作物，";
		t.textColor = 0x72420a;
		t.width = 335;
		t.y = 104;
		return t;
	};
	_proto._Label34_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "产出：苹果、萝卜";
		t.textColor = 0x5e3f07;
		t.x = 76;
		t.y = 167;
		return t;
	};
	_proto._Label35_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "《可升级至红土地》";
		t.textColor = 0xba380b;
		t.y = 222;
		return t;
	};
	_proto.bozhong_i = function () {
		var t = new eui.Group();
		this.bozhong = t;
		t.height = 379;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -0.5;
		t.visible = false;
		t.width = 480;
		t.x = 100;
		t.y = 398;
		t.elementsContent = [this._Image95_i(),this._Image96_i(),this._Image97_i(),this._Image98_i(),this._Label36_i(),this._Label37_i(),this._Image99_i(),this.close_bozhong_i(),this._Image100_i(),this._Label38_i()];
		return t;
	};
	_proto._Image95_i = function () {
		var t = new eui.Image();
		t.height = 304;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(49,56,83,24);
		t.source = "tibiao_02";
		t.verticalCenter = 0;
		t.width = 439;
		return t;
	};
	_proto._Image96_i = function () {
		var t = new eui.Image();
		t.height = 51;
		t.source = "wenzi_20";
		t.width = 66;
		t.x = 115;
		t.y = 21;
		return t;
	};
	_proto._Image97_i = function () {
		var t = new eui.Image();
		t.source = "wenzi_43";
		t.x = 346;
		t.y = 36;
		return t;
	};
	_proto._Image98_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 61;
		t.source = "wenzi_json.wenzi_30";
		t.width = 114;
		t.x = 189;
		t.y = 15;
		return t;
	};
	_proto._Label36_i = function () {
		var t = new eui.Label();
		t.text = "种子不足";
		t.textColor = 0x5b3201;
		t.x = 179;
		t.y = 107;
		return t;
	};
	_proto._Label37_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 16;
		t.size = 18;
		t.text = "种子不足，点击确定到商店购买";
		t.textAlign = "center";
		t.textColor = 0xea0909;
		t.verticalAlign = "middle";
		t.width = 373;
		t.x = 48;
		t.y = 172;
		return t;
	};
	_proto._Image99_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "tubiao_json.tibiao_26";
		t.width = 112;
		t.x = 92;
		t.y = 219;
		return t;
	};
	_proto.close_bozhong_i = function () {
		var t = new eui.Label();
		this.close_bozhong = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "huakang";
		t.height = 33;
		t.size = 25;
		t.text = "取消";
		t.textAlign = "center";
		t.textColor = 0x4c2002;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 97.5;
		t.y = 224;
		return t;
	};
	_proto._Image100_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "tubiao_json.tibiao_26";
		t.width = 112;
		t.x = 246;
		t.y = 219;
		return t;
	};
	_proto._Label38_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "huakang";
		t.height = 33;
		t.size = 25;
		t.text = "确定";
		t.textAlign = "center";
		t.textColor = 0x4C2002;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 251.5;
		t.y = 224;
		return t;
	};
	_proto.more_money_i = function () {
		var t = new eui.Group();
		this.more_money = t;
		t.height = 450;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 488;
		t.x = 76;
		t.y = 343;
		t.elementsContent = [this._Image101_i(),this._Image102_i(),this._Image103_i(),this._Image104_i(),this._Image105_i(),this._Group26_i(),this._Group27_i(),this._Group28_i(),this._Group29_i(),this._Group30_i(),this._Image117_i(),this._Image118_i()];
		return t;
	};
	_proto._Image101_i = function () {
		var t = new eui.Image();
		t.height = 492;
		t.scale9Grid = new egret.Rectangle(80,130,105,50);
		t.source = "tibiao_01";
		t.width = 556;
		t.x = -34;
		t.y = -40;
		return t;
	};
	_proto._Image102_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.scale9Grid = new egret.Rectangle(65,184,394,21);
		t.source = "img_01";
		t.width = 484;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image103_i = function () {
		var t = new eui.Image();
		t.height = 76;
		t.scale9Grid = new egret.Rectangle(161,8,116,33);
		t.source = "wenzi_12";
		t.width = 535;
		t.x = -19;
		t.y = -60;
		return t;
	};
	_proto._Image104_i = function () {
		var t = new eui.Image();
		t.source = "img_02";
		t.width = 148;
		t.x = -40;
		t.y = -3;
		return t;
	};
	_proto._Image105_i = function () {
		var t = new eui.Image();
		t.rotation = 360;
		t.skewY = 180;
		t.source = "img_02";
		t.width = 140;
		t.x = 527;
		t.y = -8;
		return t;
	};
	_proto._Group26_i = function () {
		var t = new eui.Group();
		t.height = 56;
		t.horizontalCenter = 0.5;
		t.width = 417;
		t.y = 387;
		t.elementsContent = [this._Image106_i(),this.close_chongzhi_i()];
		return t;
	};
	_proto._Image106_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tibiao_26";
		t.verticalCenter = 0;
		return t;
	};
	_proto.close_chongzhi_i = function () {
		var t = new eui.Label();
		this.close_chongzhi = t;
		t.bold = true;
		t.height = 46;
		t.horizontalCenter = 0;
		t.text = "离开";
		t.textAlign = "center";
		t.textColor = 0x7D2E09;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 158;
		return t;
	};
	_proto._Group27_i = function () {
		var t = new eui.Group();
		t.height = 173;
		t.width = 145;
		t.x = 39;
		t.y = 173;
		t.elementsContent = [this._Image107_i(),this._Image108_i(),this._Image109_i(),this._Label39_i()];
		return t;
	};
	_proto._Image107_i = function () {
		var t = new eui.Image();
		t.height = 171;
		t.source = "rank_01";
		t.width = 138;
		t.x = -13;
		t.y = -5;
		return t;
	};
	_proto._Image108_i = function () {
		var t = new eui.Image();
		t.height = 92;
		t.source = "img_04";
		t.width = 107;
		t.x = 6;
		t.y = 27;
		return t;
	};
	_proto._Image109_i = function () {
		var t = new eui.Image();
		t.height = 67;
		t.source = "img_06";
		t.width = 79;
		t.x = 20;
		t.y = 41;
		return t;
	};
	_proto._Label39_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "10 钻";
		t.textColor = 0xF8A100;
		t.x = 55;
		t.y = 80;
		return t;
	};
	_proto._Group28_i = function () {
		var t = new eui.Group();
		t.height = 173;
		t.width = 144;
		t.x = 186;
		t.y = 173;
		t.elementsContent = [this._Image110_i(),this._Image111_i(),this._Image112_i(),this._Label40_i()];
		return t;
	};
	_proto._Image110_i = function () {
		var t = new eui.Image();
		t.height = 171;
		t.source = "rank_01";
		t.width = 136;
		t.x = -12;
		t.y = -5;
		return t;
	};
	_proto._Image111_i = function () {
		var t = new eui.Image();
		t.height = 92;
		t.source = "img_04";
		t.width = 107;
		t.x = 0;
		t.y = 27;
		return t;
	};
	_proto._Image112_i = function () {
		var t = new eui.Image();
		t.height = 67;
		t.source = "img_06";
		t.width = 79;
		t.x = 10;
		t.y = 42;
		return t;
	};
	_proto._Label40_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "10 钻";
		t.textColor = 0xF8A100;
		t.x = 55;
		t.y = 80;
		return t;
	};
	_proto._Group29_i = function () {
		var t = new eui.Group();
		t.height = 173;
		t.width = 134;
		t.x = 335;
		t.y = 177;
		t.elementsContent = [this._Image113_i(),this._Image114_i(),this._Image115_i(),this._Label41_i()];
		return t;
	};
	_proto._Image113_i = function () {
		var t = new eui.Image();
		t.height = 171;
		t.source = "rank_01";
		t.width = 142;
		t.x = -16;
		t.y = -5;
		return t;
	};
	_proto._Image114_i = function () {
		var t = new eui.Image();
		t.height = 92;
		t.source = "img_04";
		t.width = 107;
		t.x = 1;
		t.y = 27;
		return t;
	};
	_proto._Image115_i = function () {
		var t = new eui.Image();
		t.height = 67;
		t.source = "img_06";
		t.width = 79;
		t.x = 22;
		t.y = 41;
		return t;
	};
	_proto._Label41_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "10 钻";
		t.textColor = 0xF8A100;
		t.x = 55;
		t.y = 80;
		return t;
	};
	_proto._Group30_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.width = 446;
		t.x = 32;
		t.y = 76;
		t.elementsContent = [this._Image116_i(),this._Label42_i(),this._Label43_i()];
		return t;
	};
	_proto._Image116_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.source = "tibiao_25";
		t.width = 136;
		t.x = 305;
		t.y = 19;
		return t;
	};
	_proto._Label42_i = function () {
		var t = new eui.Label();
		t.text = "账户余额：0.875金币";
		t.x = 5;
		t.y = 28;
		return t;
	};
	_proto._Label43_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.height = 36;
		t.size = 23;
		t.text = "金币充值";
		t.textAlign = "center";
		t.textColor = 0x692E04;
		t.verticalAlign = "middle";
		t.width = 113;
		t.x = 317;
		t.y = 24;
		return t;
	};
	_proto._Image117_i = function () {
		var t = new eui.Image();
		t.source = "tibiao_41";
		t.x = 138;
		t.y = -88;
		return t;
	};
	_proto._Image118_i = function () {
		var t = new eui.Image();
		t.source = "wenzi_33";
		t.x = 220;
		t.y = -92;
		return t;
	};
	_proto.shop_i = function () {
		var t = new eui.Group();
		this.shop = t;
		t.anchorOffsetY = 0;
		t.height = 766.67;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 33.5;
		t.visible = false;
		t.width = 560;
		t.x = 50;
		t.y = 228;
		t.elementsContent = [this._Image119_i(),this._Image120_i(),this.close_shop_i(),this._Image121_i(),this._Image122_i(),this._Group35_i()];
		return t;
	};
	_proto._Image119_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(117,134,51,51);
		t.source = "tibiao_01";
		t.width = 558;
		t.y = 0;
		return t;
	};
	_proto._Image120_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "tibiao_25";
		t.width = 183;
		t.y = 693.74;
		return t;
	};
	_proto.close_shop_i = function () {
		var t = new eui.Label();
		this.close_shop = t;
		t.bold = true;
		t.height = 49;
		t.horizontalCenter = 0.5;
		t.text = "离开";
		t.textAlign = "center";
		t.textColor = 0x522604;
		t.verticalAlign = "middle";
		t.width = 171;
		t.y = 703.74;
		return t;
	};
	_proto._Image121_i = function () {
		var t = new eui.Image();
		t.source = "wenzi_json.wenzi_06";
		t.x = 192;
		t.y = -27;
		return t;
	};
	_proto._Image122_i = function () {
		var t = new eui.Image();
		t.source = "icon_json.icon_40";
		t.width = 87;
		t.x = 96;
		t.y = -26;
		return t;
	};
	_proto._Group35_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 573;
		t.horizontalCenter = -3.5;
		t.verticalCenter = 6.1650000000000205;
		t.width = 477;
		t.elementsContent = [this._Image123_i(),this.shopTabBar_i(),this.shopViewStack_i()];
		return t;
	};
	_proto._Image123_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 530;
		t.horizontalCenter = 4.5;
		t.scale9Grid = new egret.Rectangle(146,19,59,28);
		t.source = "tabPanel_png";
		t.width = 468;
		t.y = 50.24;
		return t;
	};
	_proto.shopTabBar_i = function () {
		var t = new eui.TabBar();
		this.shopTabBar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54.67;
		t.horizontalCenter = 3.5;
		t.verticalCenter = -258;
		t.width = 428.21;
		t.layout = this._HorizontalLayout4_i();
		t.itemRendererSkinName = HomeSkin$Skin13;
		return t;
	};
	_proto._HorizontalLayout4_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.shopViewStack_i = function () {
		var t = new eui.ViewStack();
		this.shopViewStack = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 497.34;
		t.horizontalCenter = 3.5;
		t.selectedIndex = 1;
		t.width = 450;
		t.y = 64.88;
		t.elementsContent = [this._Group31_i(),this._Group32_i(),this._Group33_i(),this._Group34_i()];
		return t;
	};
	_proto._Group31_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 494;
		t.name = "热销";
		t.visible = false;
		t.percentWidth = 100;
		t.x = 5;
		t.y = 3;
		t.elementsContent = [this.rexiao_list_i(),this._Scroller5_i()];
		return t;
	};
	_proto.rexiao_list_i = function () {
		var t = new eui.List();
		this.rexiao_list = t;
		t.height = 500;
		t.width = 450;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout5_i();
		return t;
	};
	_proto._VerticalLayout5_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Scroller5_i = function () {
		var t = new eui.Scroller();
		t.height = 500;
		t.width = 450;
		t.x = 0;
		t.y = 0;
		t.skinName = HomeSkin$Skin14;
		return t;
	};
	_proto._Group32_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 500;
		t.name = "道具";
		t.visible = false;
		t.width = 449.48;
		t.x = 5;
		t.y = 3;
		t.elementsContent = [this._Scroller6_i()];
		return t;
	};
	_proto._Scroller6_i = function () {
		var t = new eui.Scroller();
		t.height = 500;
		t.width = 450;
		t.x = 0;
		t.y = 0;
		t.skinName = HomeSkin$Skin16;
		t.viewport = this.gongju_list_i();
		return t;
	};
	_proto.gongju_list_i = function () {
		var t = new eui.List();
		this.gongju_list = t;
		t.height = 500;
		t.width = 450;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout6_i();
		return t;
	};
	_proto._VerticalLayout6_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Group33_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 500;
		t.name = "宝箱";
		t.visible = false;
		t.width = 449.48;
		t.x = 5;
		t.y = 3;
		t.elementsContent = [this._Scroller7_i()];
		return t;
	};
	_proto._Scroller7_i = function () {
		var t = new eui.Scroller();
		t.height = 500;
		t.width = 450;
		t.x = 0;
		t.y = 0;
		t.skinName = HomeSkin$Skin18;
		t.viewport = this.baoxiang_list_i();
		return t;
	};
	_proto.baoxiang_list_i = function () {
		var t = new eui.List();
		this.baoxiang_list = t;
		t.height = 500;
		t.width = 450;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout7_i();
		return t;
	};
	_proto._VerticalLayout7_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Group34_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 500;
		t.name = "宠物";
		t.width = 449.48;
		t.x = 5;
		t.y = 3;
		t.elementsContent = [this._Scroller8_i()];
		return t;
	};
	_proto._Scroller8_i = function () {
		var t = new eui.Scroller();
		t.height = 500;
		t.width = 450;
		t.x = 0;
		t.y = 0;
		t.skinName = HomeSkin$Skin20;
		t.viewport = this.chongwu_list_i();
		return t;
	};
	_proto.chongwu_list_i = function () {
		var t = new eui.List();
		this.chongwu_list = t;
		t.height = 500;
		t.width = 450;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout8_i();
		return t;
	};
	_proto._VerticalLayout8_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.duihuan_i = function () {
		var t = new eui.Group();
		this.duihuan = t;
		t.anchorOffsetY = 0;
		t.height = 766.67;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 33.5;
		t.visible = false;
		t.width = 560;
		t.x = 60;
		t.y = 238;
		t.elementsContent = [this._Image124_i(),this._Image125_i(),this.close_duihuan_i(),this._Image126_i(),this._Image127_i(),this._Group40_i()];
		return t;
	};
	_proto._Image124_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(117,134,51,51);
		t.source = "tibiao_01";
		t.width = 558;
		t.y = 0;
		return t;
	};
	_proto._Image125_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "tibiao_25";
		t.width = 183;
		t.y = 693.74;
		return t;
	};
	_proto.close_duihuan_i = function () {
		var t = new eui.Label();
		this.close_duihuan = t;
		t.bold = true;
		t.height = 49;
		t.horizontalCenter = 0.5;
		t.text = "离开";
		t.textAlign = "center";
		t.textColor = 0x522604;
		t.verticalAlign = "middle";
		t.width = 171;
		t.y = 703.74;
		return t;
	};
	_proto._Image126_i = function () {
		var t = new eui.Image();
		t.source = "wenzi_json.wenzi_04";
		t.x = 192;
		t.y = -27;
		return t;
	};
	_proto._Image127_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76;
		t.source = "tubiao_json.tibiao_32";
		t.width = 83;
		t.x = 96;
		t.y = -25;
		return t;
	};
	_proto._Group40_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 573;
		t.horizontalCenter = -3.5;
		t.verticalCenter = 6.1650000000000205;
		t.width = 477;
		t.elementsContent = [this._Image128_i(),this.duihuanTabBar_i(),this.duihuanViewStack_i()];
		return t;
	};
	_proto._Image128_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 530;
		t.horizontalCenter = 4.5;
		t.scale9Grid = new egret.Rectangle(146,19,59,28);
		t.source = "tabPanel_png";
		t.width = 468;
		t.y = 50.24;
		return t;
	};
	_proto.duihuanTabBar_i = function () {
		var t = new eui.TabBar();
		this.duihuanTabBar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54.67;
		t.horizontalCenter = 3.5;
		t.verticalCenter = -258;
		t.width = 428.21;
		t.layout = this._HorizontalLayout5_i();
		t.itemRendererSkinName = HomeSkin$Skin22;
		return t;
	};
	_proto._HorizontalLayout5_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.duihuanViewStack_i = function () {
		var t = new eui.ViewStack();
		this.duihuanViewStack = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 497.34;
		t.horizontalCenter = 3.5;
		t.selectedIndex = 3;
		t.width = 450;
		t.y = 64.88;
		t.elementsContent = [this._Group36_i(),this._Group37_i(),this._Group38_i(),this._Group39_i()];
		return t;
	};
	_proto._Group36_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 494;
		t.name = "材料";
		t.percentWidth = 100;
		t.x = 5;
		t.y = 3;
		t.elementsContent = [this._Scroller9_i()];
		return t;
	};
	_proto._Scroller9_i = function () {
		var t = new eui.Scroller();
		t.height = 500;
		t.width = 450;
		t.x = 0;
		t.y = 0;
		t.skinName = HomeSkin$Skin23;
		t.viewport = this.sucai_list_i();
		return t;
	};
	_proto.sucai_list_i = function () {
		var t = new eui.List();
		this.sucai_list = t;
		t.anchorOffsetY = 0;
		t.height = 500;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 450;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout9_i();
		return t;
	};
	_proto._VerticalLayout9_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Group37_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 500;
		t.name = "神像";
		t.width = 449.48;
		t.x = 5;
		t.y = 3;
		t.elementsContent = [this._Scroller10_i()];
		return t;
	};
	_proto._Scroller10_i = function () {
		var t = new eui.Scroller();
		t.height = 500;
		t.width = 450;
		t.x = 0;
		t.y = 0;
		t.skinName = HomeSkin$Skin25;
		t.viewport = this.shenxiang_list_i();
		return t;
	};
	_proto.shenxiang_list_i = function () {
		var t = new eui.List();
		this.shenxiang_list = t;
		t.height = 500;
		t.width = 450;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout10_i();
		return t;
	};
	_proto._VerticalLayout10_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Group38_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 500;
		t.name = "背景";
		t.width = 449.48;
		t.x = 5;
		t.y = 3;
		t.elementsContent = [this._Scroller11_i()];
		return t;
	};
	_proto._Scroller11_i = function () {
		var t = new eui.Scroller();
		t.height = 500;
		t.width = 450;
		t.x = 0;
		t.y = 0;
		t.skinName = HomeSkin$Skin27;
		t.viewport = this.beijing_list_i();
		return t;
	};
	_proto.beijing_list_i = function () {
		var t = new eui.List();
		this.beijing_list = t;
		t.height = 500;
		t.width = 450;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout11_i();
		return t;
	};
	_proto._VerticalLayout11_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Group39_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 500;
		t.name = "狗粮";
		t.width = 449.48;
		t.x = 5;
		t.y = 3;
		t.elementsContent = [this._Scroller12_i()];
		return t;
	};
	_proto._Scroller12_i = function () {
		var t = new eui.Scroller();
		t.height = 500;
		t.width = 450;
		t.x = 0;
		t.y = 0;
		t.skinName = HomeSkin$Skin29;
		t.viewport = this.gouliang_list_i();
		return t;
	};
	_proto.gouliang_list_i = function () {
		var t = new eui.List();
		this.gouliang_list = t;
		t.height = 500;
		t.width = 450;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout12_i();
		return t;
	};
	_proto._VerticalLayout12_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.zhuangban_i = function () {
		var t = new eui.Group();
		this.zhuangban = t;
		t.anchorOffsetY = 0;
		t.height = 766.67;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 33.5;
		t.visible = false;
		t.width = 560;
		t.x = 70;
		t.y = 248;
		t.elementsContent = [this._Image129_i(),this._Image130_i(),this.close_zhuangban_i(),this._Image131_i(),this._Image132_i(),this._Group41_i()];
		return t;
	};
	_proto._Image129_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(117,134,51,51);
		t.source = "tibiao_01";
		t.width = 558;
		t.y = 0;
		return t;
	};
	_proto._Image130_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "tibiao_25";
		t.width = 183;
		t.y = 693.74;
		return t;
	};
	_proto.close_zhuangban_i = function () {
		var t = new eui.Label();
		this.close_zhuangban = t;
		t.bold = true;
		t.height = 49;
		t.horizontalCenter = 0.5;
		t.text = "离开";
		t.textAlign = "center";
		t.textColor = 0x522604;
		t.verticalAlign = "middle";
		t.width = 171;
		t.y = 703.74;
		return t;
	};
	_proto._Image131_i = function () {
		var t = new eui.Image();
		t.source = "wenzi_json.wenzi_23";
		t.x = 224;
		t.y = -27;
		return t;
	};
	_proto._Image132_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 86;
		t.source = "icon_json.icon_07";
		t.width = 84;
		t.x = 127;
		t.y = -28;
		return t;
	};
	_proto._Group41_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 565;
		t.horizontalCenter = 0.5;
		t.verticalCenter = 10.16500000000002;
		t.width = 459;
		t.elementsContent = [this._Scroller13_i()];
		return t;
	};
	_proto._Scroller13_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 552;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 450;
		t.x = 5;
		t.y = 3.5;
		t.skinName = HomeSkin$Skin31;
		t.viewport = this.zhuangban_list_i();
		return t;
	};
	_proto.zhuangban_list_i = function () {
		var t = new eui.List();
		this.zhuangban_list = t;
		t.anchorOffsetY = 1.94;
		t.height = 535;
		t.x = 0;
		t.y = 18.94;
		t.layout = this._VerticalLayout13_i();
		return t;
	};
	_proto._VerticalLayout13_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 30;
		t.paddingTop = 25;
		return t;
	};
	return HomeSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HouseImgSkin.exml'] = window.HouseImgSkin = (function (_super) {
	__extends(HouseImgSkin, _super);
	function HouseImgSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 249;
		this.width = 429;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = HouseImgSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 249;
		t.width = 430;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 235;
		t.source = "houseImg_json.house_img5_png";
		t.width = 425;
		t.x = 1.5;
		t.y = 7.67;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 198;
		t.source = "houseImg_json.house_img1_png";
		t.width = 389;
		t.x = 22.5;
		t.y = 25.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68;
		t.horizontalCenter = 0;
		t.source = "wenzi_json.wenzi_02";
		t.width = 187;
		t.y = -24;
		return t;
	};
	return HouseImgSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LandUpSkin.exml'] = window.LandUpSkin = (function (_super) {
	__extends(LandUpSkin, _super);
	function LandUpSkin() {
		_super.call(this);
		this.skinParts = ["wupin_left","wupin_center","wupin_right"];
		
		this.height = 129;
		this.width = 448;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = LandUpSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 123;
		t.width = 447;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Image3_i(),this._Image4_i(),this._Group1_i(),this._Label3_i(),this.wupin_left_i(),this.wupin_center_i(),this.wupin_right_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 129;
		t.source = "panel_bg_png";
		t.width = 445;
		t.x = -0.5;
		t.y = -3;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.48;
		t.source = "tubiao_json.tibiao_26";
		t.width = 78.94;
		t.x = 342.77;
		t.y = 45.08;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 30;
		t.size = 25;
		t.text = "升级";
		t.textAlign = "center";
		t.textColor = 0x7A4401;
		t.verticalAlign = "middle";
		t.width = 66.06;
		t.x = 349.21;
		t.y = 48.82;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "tubiao_json.tibiao_15";
		t.x = 185;
		t.y = 60;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "tubiao_json.tibiao_15";
		t.x = 253;
		t.y = 58;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 30;
		t.y = 6;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Label2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 111.38;
		t.rotation = 9.81;
		t.source = "rank_json.rank_01";
		t.width = 83.51;
		t.x = 5;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "gongju_json.gongju_10";
		t.width = 61;
		t.x = 9;
		t.y = 27.450000000000003;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 20.69;
		t.rotation = 9.05;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0x3a1d02;
		t.text = "红土地";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 64.53;
		t.x = 0;
		t.y = 83;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.size = 18;
		t.stroke = 1;
		t.strokeColor = 0x3a1c01;
		t.text = "升级红土地消耗";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 164;
		t.x = 133;
		t.y = 4;
		return t;
	};
	_proto.wupin_left_i = function () {
		var t = new eui.Group();
		this.wupin_left = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37;
		t.width = 36;
		t.x = 142;
		t.y = 52;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Label4_i(),this._Label5_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "gongju_json.gongju_53";
		t.width = 37;
		t.x = 0;
		t.y = -0.5;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.scale9Grid = new egret.Rectangle(20,13,3,3);
		t.source = "wenzi_json.wenzi_09";
		t.width = 53;
		t.x = 6.5;
		t.y = -26;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.size = 12;
		t.text = "70";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 39;
		t.x = 14;
		t.y = -22;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 16;
		t.size = 18;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x3d2402;
		t.verticalAlign = "middle";
		t.width = 29;
		t.x = 3;
		t.y = 38;
		return t;
	};
	_proto.wupin_center_i = function () {
		var t = new eui.Group();
		this.wupin_center = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37;
		t.width = 38;
		t.x = 214.38;
		t.y = 52;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Label6_i(),this._Label7_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "gongju_json.gongju_66";
		t.width = 41;
		t.x = -1;
		t.y = -5;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.scale9Grid = new egret.Rectangle(20,13,3,3);
		t.source = "wenzi_json.wenzi_09";
		t.width = 53;
		t.x = -5.62;
		t.y = -27;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.size = 12;
		t.text = "70";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 38;
		t.x = 3;
		t.y = -24;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 16;
		t.size = 18;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x3D2402;
		t.verticalAlign = "middle";
		t.width = 29;
		t.x = 5;
		t.y = 37;
		return t;
	};
	_proto.wupin_right_i = function () {
		var t = new eui.Group();
		this.wupin_right = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37;
		t.width = 38;
		t.x = 282.38;
		t.y = 51;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Label8_i(),this._Label9_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "gongju_json.gongju_66";
		t.width = 41;
		t.x = -1;
		t.y = -5;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.scale9Grid = new egret.Rectangle(20,13,3,3);
		t.source = "wenzi_json.wenzi_09";
		t.width = 53;
		t.x = -5.62;
		t.y = -27;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.size = 12;
		t.text = "70";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 38;
		t.x = 3;
		t.y = -24;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 16;
		t.size = 18;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x3D2402;
		t.verticalAlign = "middle";
		t.width = 29;
		t.x = 2;
		t.y = 38;
		return t;
	};
	return LandUpSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LoadingSkin.exml'] = window.Loading = (function (_super) {
	__extends(Loading, _super);
	function Loading() {
		_super.call(this);
		this.skinParts = ["progress"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.progress_i()];
	}
	var _proto = Loading.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(19,19,118,117);
		t.source = "load_json.load4_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 5;
		t.source = "load_json.load3_png";
		t.y = 174;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "load_json.load2_png";
		t.x = 98.65;
		t.y = 405;
		return t;
	};
	_proto.progress_i = function () {
		var t = new eui.Image();
		this.progress = t;
		t.source = "load_json.load1_png";
		t.width = 0;
		t.x = 139.65;
		t.y = 440.32;
		return t;
	};
	return Loading;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LoginSkin.exml'] = window.LoginSkin = (function (_super) {
	__extends(LoginSkin, _super);
	function LoginSkin() {
		_super.call(this);
		this.skinParts = ["register_btn","login_btn","forget_btn","login"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.login_i(),this._Image20_i()];
	}
	var _proto = LoginSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1136;
		t.source = "login_bg_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.login_i = function () {
		var t = new eui.Group();
		this.login = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.width = 528;
		t.y = 285;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Label1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this.forget_btn_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 690;
		t.scale9Grid = new egret.Rectangle(80,130,105,50);
		t.source = "tibiao_01";
		t.width = 590;
		t.x = -34;
		t.y = -40;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 600;
		t.scale9Grid = new egret.Rectangle(65,184,394,21);
		t.source = "img_01";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "img_02";
		t.x = -35;
		t.y = -5;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.rotation = 360;
		t.skewY = 180;
		t.source = "img_02";
		t.x = 551;
		t.y = -8;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "logo_png";
		t.x = 4;
		t.y = -234;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "lvhua_png";
		t.x = -15;
		t.y = 560;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "请使用夺金通行证登录";
		t.y = 85;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 64;
		t.horizontalCenter = 0.5;
		t.width = 411;
		t.y = 241;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._TextInput1_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "font_08";
		t.x = 0;
		t.y = 8;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(25,26,28,11);
		t.source = "border_02";
		t.width = 256;
		t.x = 144;
		t.y = -3;
		return t;
	};
	_proto._TextInput1_i = function () {
		var t = new eui.TextInput();
		t.displayAsPassword = true;
		t.prompt = "请输入密码";
		t.width = 228;
		t.x = 161;
		t.y = 7;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 56;
		t.horizontalCenter = 0;
		t.width = 402;
		t.y = 159;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this._TextInput2_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "font_07";
		t.x = 0;
		t.y = -2;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(25,26,28,11);
		t.source = "border_02";
		t.width = 256;
		t.x = 139;
		t.y = -3;
		return t;
	};
	_proto._TextInput2_i = function () {
		var t = new eui.TextInput();
		t.prompt = "请输入账号";
		t.width = 228;
		t.x = 152;
		t.y = 7;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 55;
		t.horizontalCenter = 0;
		t.width = 403;
		t.y = 332;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "font_14";
		t.x = 269;
		t.y = 10;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "font_18";
		t.x = 54;
		t.y = 9;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "font_16";
		t.x = 6;
		t.y = 9;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "font_16";
		t.x = 225;
		t.y = 9;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.source = "font_20";
		t.width = 44;
		t.x = 7;
		t.y = 4;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.source = "font_20";
		t.width = 44;
		t.x = 228;
		t.y = 5;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 56;
		t.horizontalCenter = 0;
		t.width = 417;
		t.y = 411;
		t.elementsContent = [this._Image18_i(),this._Image19_i(),this.register_btn_i(),this.login_btn_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "tibiao_26";
		t.verticalCenter = 0;
		t.x = 12;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "tibiao_26";
		t.verticalCenter = 0;
		t.x = 234;
		return t;
	};
	_proto.register_btn_i = function () {
		var t = new eui.Label();
		this.register_btn = t;
		t.bold = true;
		t.height = 48;
		t.text = "注册";
		t.textAlign = "center";
		t.textColor = 0x7D2E09;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 157;
		t.x = 16;
		return t;
	};
	_proto.login_btn_i = function () {
		var t = new eui.Label();
		this.login_btn = t;
		t.bold = true;
		t.height = 49;
		t.text = "登录";
		t.textAlign = "center";
		t.textColor = 0x7D2E09;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 160;
		t.x = 235;
		return t;
	};
	_proto.forget_btn_i = function () {
		var t = new eui.Label();
		this.forget_btn = t;
		t.horizontalCenter = 0;
		t.text = "忘记密码";
		t.textColor = 0x1307F6;
		t.y = 514;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "font_01";
		t.width = 565;
		t.y = 1012;
		return t;
	};
	return LoginSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PaiHangSkin.exml'] = window.PaiHangSkin = (function (_super) {
	__extends(PaiHangSkin, _super);
	function PaiHangSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 62;
		this.width = 440;
		this.elementsContent = [this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.icon"],[0],this._Image2,"source");
	}
	var _proto = PaiHangSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.name = "农场";
		t.width = 440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.source = "rank_13";
		t.verticalCenter = 0;
		t.width = 442;
		t.x = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.verticalCenter = 0;
		t.x = 14;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "千叶祥龙";
		t.textAlign = "center";
		t.textColor = 0xAA7B05;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 120;
		t.x = 67;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "8";
		t.textAlign = "center";
		t.textColor = 0xAA7B05;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 49;
		t.x = 188;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.height = 34;
		t.size = 20;
		t.text = "1234567890";
		t.textAlign = "center";
		t.textColor = 0xAA7B05;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 241;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 59;
		t.source = "rank_19";
		t.verticalCenter = -1.5;
		t.width = 61;
		t.x = 379;
		return t;
	};
	return PaiHangSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RegisterSkin.exml'] = window.RegisterSkin = (function (_super) {
	__extends(RegisterSkin, _super);
	function RegisterSkin() {
		_super.call(this);
		this.skinParts = ["go_back","forgetPwd"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.forgetPwd_i()];
	}
	var _proto = RegisterSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1136;
		t.source = "login_bg_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.forgetPwd_i = function () {
		var t = new eui.Group();
		this.forgetPwd = t;
		t.height = 600;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 528;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 690;
		t.scale9Grid = new egret.Rectangle(80,130,105,50);
		t.source = "tibiao_01";
		t.width = 590;
		t.x = -34;
		t.y = -40;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 600;
		t.scale9Grid = new egret.Rectangle(65,184,394,21);
		t.source = "img_01";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "img_02";
		t.x = -35;
		t.y = -5;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.rotation = 360;
		t.skewY = 180;
		t.source = "img_02";
		t.x = 551;
		t.y = -8;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 64;
		t.horizontalCenter = 10.5;
		t.width = 411;
		t.x = 10;
		t.y = 183;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._TextInput1_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "font_02";
		t.x = -25;
		t.y = 8;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.scale9Grid = new egret.Rectangle(25,26,28,11);
		t.source = "border_02";
		t.width = 256;
		t.x = 144;
		t.y = -3;
		return t;
	};
	_proto._TextInput1_i = function () {
		var t = new eui.TextInput();
		t.displayAsPassword = true;
		t.prompt = "请输入密码";
		t.width = 228;
		t.x = 161;
		t.y = 7;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 64;
		t.horizontalCenter = 12.5;
		t.width = 411;
		t.x = 20;
		t.y = 260;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._TextInput2_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "font_03";
		t.x = -27;
		t.y = 8;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.scale9Grid = new egret.Rectangle(25,26,28,11);
		t.source = "border_02";
		t.width = 256;
		t.x = 144;
		t.y = -3;
		return t;
	};
	_proto._TextInput2_i = function () {
		var t = new eui.TextInput();
		t.displayAsPassword = true;
		t.prompt = "请确认密码";
		t.width = 228;
		t.x = 161;
		t.y = 7;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 64;
		t.horizontalCenter = 11.5;
		t.width = 411;
		t.x = 40;
		t.y = 332;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this._TextInput3_i(),this._Image12_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "font_12";
		t.x = -19;
		t.y = 7;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.scale9Grid = new egret.Rectangle(25,26,28,11);
		t.source = "border_02";
		t.width = 154;
		t.x = 246;
		t.y = -3;
		return t;
	};
	_proto._TextInput3_i = function () {
		var t = new eui.TextInput();
		t.displayAsPassword = true;
		t.width = 136;
		t.x = 253;
		t.y = 7;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 34;
		t.width = 70;
		t.x = 156;
		t.y = 14;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 64;
		t.horizontalCenter = 11.5;
		t.width = 411;
		t.x = 50;
		t.y = 405;
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this._TextInput4_i(),this._Image15_i(),this._Label1_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "font_11";
		t.x = -20;
		t.y = 8;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.scale9Grid = new egret.Rectangle(25,26,28,11);
		t.source = "border_02";
		t.width = 154;
		t.x = 246;
		t.y = -3;
		return t;
	};
	_proto._TextInput4_i = function () {
		var t = new eui.TextInput();
		t.displayAsPassword = true;
		t.height = 43;
		t.width = 136;
		t.x = 253;
		t.y = 4;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 44;
		t.source = "tibiao_26";
		t.verticalCenter = -3;
		t.width = 95;
		t.x = 144;
		t.y = 30;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.height = 35;
		t.text = "获取";
		t.textAlign = "center";
		t.textColor = 0x7B2400;
		t.verticalAlign = "middle";
		t.width = 82;
		t.x = 149;
		t.y = 11;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 56;
		t.horizontalCenter = 12;
		t.width = 402;
		t.x = 10;
		t.y = 108;
		t.elementsContent = [this._Image16_i(),this._Image17_i(),this._TextInput5_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "font_06";
		t.x = -27;
		t.y = 7;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.scale9Grid = new egret.Rectangle(25,26,28,11);
		t.source = "border_02";
		t.width = 256;
		t.x = 139;
		t.y = -3;
		return t;
	};
	_proto._TextInput5_i = function () {
		var t = new eui.TextInput();
		t.prompt = "请输入11位手机号";
		t.width = 228;
		t.x = 152;
		t.y = 7;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 56;
		t.horizontalCenter = 12.5;
		t.width = 417;
		t.y = 497;
		t.elementsContent = [this._Image18_i(),this._Image19_i(),this.go_back_i(),this._Label2_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "tibiao_26";
		t.verticalCenter = 0;
		t.x = -19;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "tibiao_26";
		t.verticalCenter = 0;
		t.x = 218;
		return t;
	};
	_proto.go_back_i = function () {
		var t = new eui.Label();
		this.go_back = t;
		t.bold = true;
		t.height = 46;
		t.text = "返回";
		t.textAlign = "center";
		t.textColor = 0x7D2E09;
		t.verticalAlign = "middle";
		t.width = 159;
		t.x = -18;
		t.y = 4;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.height = 49;
		t.text = "注册";
		t.textAlign = "center";
		t.textColor = 0x7D2E09;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 155;
		t.x = 222;
		return t;
	};
	return RegisterSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/SaveStore.exml'] = window.SaveStoreSkin = (function (_super) {
	__extends(SaveStoreSkin, _super);
	function SaveStoreSkin() {
		_super.call(this);
		this.skinParts = ["goods_cont","goodsItem"];
		
		this.height = 70;
		this.width = 70;
		this.elementsContent = [this.goodsItem_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.icon"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.icon"],[0],this._Image5,"source");
	}
	var _proto = SaveStoreSkin.prototype;

	_proto.goodsItem_i = function () {
		var t = new eui.Group();
		this.goodsItem = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.width = 70;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this.goods_cont_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.source = "panel_png";
		t.width = 70;
		t.x = -1;
		t.y = -1;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 2;
		t.height = 18;
		t.right = 7;
		t.size = 14;
		t.text = "X199";
		t.textAlign = "right";
		t.textColor = 0xA36A00;
		t.verticalAlign = "middle";
		t.width = 64;
		return t;
	};
	_proto.goods_cont_i = function () {
		var t = new eui.Group();
		this.goods_cont = t;
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 96;
		t.visible = false;
		t.x = 35;
		t.y = -4;
		t.elementsContent = [this._Image3_i(),this._Label2_i(),this._Label3_i(),this._Group1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(17,21,102,82);
		t.source = "wenzi_json.wenzi_13";
		t.width = 190;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 23;
		t.text = "南瓜";
		t.textColor = 0xf27904;
		t.x = 100.5;
		t.y = 5;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "南瓜可用于黑土地升级金土地";
		t.textColor = 0xe87904;
		t.width = 116;
		t.x = 70;
		t.y = 33;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59;
		t.width = 61;
		t.x = 5;
		t.y = 16;
		t.elementsContent = [this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58;
		t.source = "panel_png";
		t.width = 61;
		t.x = -1;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		this._Image5 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return SaveStoreSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ShopSkin.exml'] = window.ShopSkin = (function (_super) {
	__extends(ShopSkin, _super);
	function ShopSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 110;
		this.width = 439;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = ShopSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 95.91;
		t.width = 427.28;
		t.x = 0;
		t.y = 3;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this._Image2_i(),this._Label2_i(),this._Image3_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(28,34,108,41);
		t.source = "wenzi_json.wenzi_08";
		t.width = 431.97;
		t.x = 5.39;
		t.y = -2.35;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "种子 x1000";
		t.textColor = 0x895309;
		t.x = 87.73;
		t.y = 15.56;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "wenzi_json.wenzi_34";
		t.x = 199.39;
		t.y = 1.71;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43.19;
		t.size = 16;
		t.text = "谜一样的种子，不知道种下去得到的是什么";
		t.textColor = 0x422a03;
		t.width = 225.12;
		t.x = 85.67;
		t.y = 47;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43.48;
		t.source = "tubiao_json.tibiao_26";
		t.width = 85.94;
		t.x = 324.77;
		t.y = 14.08;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 30;
		t.size = 25;
		t.text = "购买";
		t.textAlign = "center";
		t.textColor = 0x7a4401;
		t.verticalAlign = "middle";
		t.width = 66.06;
		t.x = 333.57;
		t.y = 19.48;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19.39;
		t.size = 17;
		t.stroke = 2;
		t.strokeColor = 0x593504;
		t.text = "1600";
		t.textAlign = "left";
		t.verticalAlign = "bottom";
		t.width = 52.79;
		t.x = 244.4;
		t.y = 16.52;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 17;
		t.text = "剩余 75.4万";
		t.textColor = 0x000000;
		t.width = 100;
		t.x = 319.28;
		t.y = 63.95;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.width = 76;
		t.x = 10;
		t.y = 14;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Label6_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.source = "panel_png";
		t.width = 73;
		t.x = 1;
		t.y = -2;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51;
		t.horizontalCenter = 0;
		t.source = "plants_json.plants09";
		t.verticalCenter = -6;
		t.width = 46;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 17;
		t.size = 13;
		t.text = "X1000";
		t.textAlign = "right";
		t.textColor = 0x4f2a03;
		t.width = 60;
		t.x = 8;
		t.y = 57;
		return t;
	};
	return ShopSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/StatusSkin.exml'] = window.StatusSkin = (function (_super) {
	__extends(StatusSkin, _super);
	function StatusSkin() {
		_super.call(this);
		this.skinParts = ["nvShenImg","labelDisplay3","instro"];
		
		this.height = 142;
		this.width = 100;
		this.elementsContent = [this.nvShenImg_i(),this.labelDisplay3_i(),this.instro_i()];
	}
	var _proto = StatusSkin.prototype;

	_proto.nvShenImg_i = function () {
		var t = new eui.Image();
		this.nvShenImg = t;
		t.percentHeight = 100;
		t.source = "";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay3_i = function () {
		var t = new eui.Label();
		this.labelDisplay3 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.instro_i = function () {
		var t = new eui.Group();
		this.instro = t;
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 105;
		t.visible = false;
		t.x = 50;
		t.y = 15;
		t.elementsContent = [this._Rect1_i(),this._Label1_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 15;
		t.ellipseWidth = 15;
		t.fillColor = 0xe2e2e2;
		t.height = 105;
		t.width = 180;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.size = 18;
		t.text = "雨露之神（激活中）";
		t.textAlign = "center";
		t.textColor = 0x34e80d;
		t.width = 174;
		t.x = 2.5;
		t.y = 3;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58;
		t.size = 15;
		t.text = "激活后保护所有的土地产量最大化，";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.width = 173;
		t.x = 6.5;
		t.y = 21;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.size = 15;
		t.text = "16天20时30分50秒后到";
		t.textColor = 0x6baa0a;
		t.width = 171;
		t.x = 6.5;
		t.y = 74;
		return t;
	};
	return StatusSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);