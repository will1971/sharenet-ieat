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
	layout : 'fit',
	padding : '5 0 0 0', 
	scroll : false ,
	
	
	initComponent: function() {
		
		var pagestore = new Ext.data.Store({
		    fields: [
		             {name: 'index' , type: 'int' },
		             {name: 'snapshot', type: 'string'}
		    ],
			data : ieat.data.getPages() 
		});
		
		Ext.apply(this, {
			// head bar
        	dockedItems:[{
        		floatingCls : 'overview' ,
        		height: 60 ,
    			html : "热菜<br>胡氏一品锅 胡氏一品锅 胡氏一品锅"
    		}],
    		items: [{
    			xtype : 'tabpanel' ,
    			floatingCls : 'overview' ,
    		    tabBar: {
    		        dock: 'bottom',
    		        layout: {
    		            pack: 'center'
    		        }
    		    },
    		    cardSwitchAnimation: {
    		        type: 'slide',
    		        cover: true
    		    },
    		    items: [{
    		    	xtype: 'pageoverview' ,
    		        title: '凉菜',
    		        iconCls: 'info',
    		        store: pagestore 
    		    },{
    		    	xtype: 'pageoverview' ,
    		        title: '凉菜',
    		        iconCls: 'info',
    		        store: pagestore 
    		    },{
    		    	xtype: 'pageoverview' ,
    		        title: '凉菜',
    		        iconCls: 'info',
    		        store: pagestore 
    		    },{
    		    	xtype: 'pageoverview' ,
    		        title: '凉菜',
    		        iconCls: 'info',
    		        store: pagestore 
    		    }]
    		}]
        });
    	
    	SH.OverviewSheet.superclass.initComponent.apply(this, arguments);
	}
});


//Set up a model to use in our Store
Ext.regModel('pageoverview', {
    fields: [
        {name: 'index' , type: 'int' },
        {name: 'snapshot', type: 'string'}
    ]
});


SH.PageOverview = Ext.extend(Ext.DataView, {
	tpl : 
		'<div class="pageovcontainer">' +
		'<tpl for=".">' +
		'<div class="pageoverview" id="{index}" '+
		'style="background : url(\'{snapshot}\') center no-repeat ;'+ 
		'height:206px ; width: 284px"></div>' +
		'</tpl>' +
		'<div class="x-clear"></div></div>' ,
		
	selectedItemCls : 'selected',
	scroll : 'horizontal',
	itemSelector : 'div.pageoverview',
	emptyText : '没有缩略图数据 ...',
	autoHeight : true,
	selectedItemCls : 'selected',
	multiSelect : true,
	overItemCls : 'x-view-over',
	width: '100%',
	
	listeners:{
		itemtap : function(dv, index, item, e){
			console.log("index:"+ index);
			Ext.dispatch({
              	controller: ieat.control ,
                action: 'openPage',
                index : index
              });	
		}
	}
});

Ext.reg('pageoverview', SH.PageOverview);