/**
 * 详情页面，用于显示某个页面的详情，包括菜品介绍，相关信息等
 */
Ext.ns("SH");

SH.SuggestionSheet = Ext.extend(Ext.Sheet, {
	width :  600 ,
	enter : 'right',
	cls : 'suggestion',
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
    			html : "推荐菜品区"
    		}]
        });
    	
    	SH.SuggestionSheet.superclass.initComponent.apply(this, arguments);
	}
});