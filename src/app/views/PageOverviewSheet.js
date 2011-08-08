/**
 * 快速页面预览，提供对多个页面的快速预览，从Pad下方滑出，可以快速拉动。
 * 拉到某个页面后，标题栏中显示该页面的文字介绍。
 */
Ext.ns("SH");

SH.OverviewSheet = Ext.extend(Ext.Sheet, {
	height : '500px',
	dock : 'buttom',
	cls : 'overview',
    hideOnMaskTap : true,
	modal: true,
	stretchX: true,
	scroll : 'horizontal',
	layout : {
		pack : 'right'
	},
	
	initComponent: function() {
		Ext.apply(this, {
    		items: [{
    			html : "预览区"
    		}]
        });
    	
    	SH.OverviewSheet.superclass.initComponent.apply(this, arguments);
	}
});