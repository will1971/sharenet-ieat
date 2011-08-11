/**
 * 快速页面预览，提供对多个页面的快速预览，从Pad下方滑出，可以快速拉动。
 * 拉到某个页面后，标题栏中显示该页面的文字介绍。
 */
Ext.ns("SH");

SH.OrderedSheet = Ext.extend(Ext.Sheet, {
	width :  400 ,
	enter : 'left',
	cls : 'ordered',
    hideOnMaskTap : true,
	modal: false,
	stretchX: false,
    stretchY: true,
	scroll : 'vertical',
	layout : {
		pack : 'right'
	},
	padding: '0 0 0 0',
	
	initComponent: function() {
		Ext.apply(this, {
			dockedItems: [{
				cls: 'sheethead',
    		    xtype: 'toolbar',
    		    title: '已点菜',
    		    height : '50px',
    			dock : 'top',
    			defaults : {
    				ui : 'dark'
    			},
    		    items:[{
    	            text: '收回',
    	            ui: 'back',
    	            listeners: {
                        scope : this,
                        tap: function(){
                        	this.setVisible(false);
                        }
    	            }
    	        },{xtype:'spacer'}]
    		}],
    		
    		items: [{
    			html : "已点菜区"
    		}]
        });
    	
    	SH.OrderedSheet.superclass.initComponent.apply(this, arguments);
	}
});