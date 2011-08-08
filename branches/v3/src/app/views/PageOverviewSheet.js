/**
 * 快速页面预览，提供对多个页面的快速预览，从Pad下方滑出，可以快速拉动。
 * 拉到某个页面后，标题栏中显示该页面的文字介绍。
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