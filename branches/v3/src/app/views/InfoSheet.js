/**
 * 详情页面，用于显示某个页面的详情，包括菜品介绍，相关信息等
 */
Ext.ns("SH");

SH.InfoSheet = Ext.extend(Ext.Sheet, {
	width :  400 ,
	enter : 'right',
	cls : 'info',
    hideOnMaskTap : true,
	modal: false,
	stretchX: false,
    stretchY: true,
	scroll : 'vertical',
	layout : {
		pack : 'right'
	},
	
	initComponent: function() {
		Ext.apply(this, {
    		items: [{
    			html : "详细信息区"
    		}]
        });
    	
    	SH.InfoSheet.superclass.initComponent.apply(this, arguments);
	}
});