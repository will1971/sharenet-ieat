/**
 * 标题栏，始终显示在页面顶端，使用全黑色背景，与Ipad的标题栏融为一体。
 * 提供各种功能的入口，包括：已点菜浏览，调出快速浏览Panel，TODO： 
 */
SH.HeadBar = Ext.extend(Ext.Toolbar, {
	height : '60px',
	dock : 'top',
	cls : 'toolbar',
	floating : true,
	floatingCls : 'toolbar-float',
	hideOnMaskTap : false,
	defaults : {
		ui : 'plain'
	},
	scroll : 'horizontal',
	layout : {
		pack : 'right'
	},
	defaults : {
		iconMask : true,
		ui : 'plain'
	},
	
	initComponent: function() {
		Ext.apply(this, {
    		items: operationButtonGroup.concat(typeButtonG)
        });
    	
    	SH.HeadBar.superclass.initComponent.apply(this, arguments);
	}
});