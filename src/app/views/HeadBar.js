/**
 * 标题栏，始终显示在页面顶端，使用全黑色背景，与Ipad的标题栏融为一体。
 * 提供各种功能的入口，包括：已点菜浏览，调出快速浏览Panel，TODO： 
 */
SH.HeadBar = Ext.extend(Ext.Toolbar, {
	height : '50px',
	dock : 'top',
	cls : 'toolbar',
	defaults : {
		ui : 'dark'
	},
	defaults : {
		iconMask : true
	},
	
	initComponent: function() {
		Ext.apply(this, {
    		items: [
			{
				xtype : 'button' ,
				text : '返回'
			}, {
				xtype : 'button' ,
				text : '结单'
			}, {
				xtype : 'button' ,
				text : '已点菜'
			}, {xtype : 'spacer'} ,{
    			xtype : 'button' ,
    			text : '类别',listeners: {
                    scope : this,
                    tap: function(){
                    	if( ieat.overview == undefined ){
                    		ieat.overview = new SH.OverviewSheet();
                    	}
                    	ieat.overview.show();
                    }
                }	
    		}, {
    			xtype : 'button' ,
    			text : '推荐'
    		}]
        });
    	
    	SH.HeadBar.superclass.initComponent.apply(this, arguments);
	}
});

Ext.reg('ieatheadbar', SH.HeadBar);