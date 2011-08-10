/**
 * 快速页面预览，提供对多个页面的快速预览，从Pad下方滑出，可以快速拉动。
 * 拉到某个页面后，标题栏中显示该页面的文字介绍。
 */
Ext.ns("SH");

SH.OverviewSheet = Ext.extend(Ext.Sheet, {
	height : '440px',
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
        		height: 140 ,
    			html : '<div class="pageintro"> <span>胡氏一品锅</span> <span>胡氏一品锅</span> <span>胡氏一品锅</span></div>'
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
		'height:199px ; width: 284px"></div>' +
		'</tpl>' +
		'<div class="x-clear"></div></div>' ,
		
	selectedItemCls : 'selected',
	itemSelector : 'div.pageoverview',
	emptyText : '没有缩略图数据 ...',
	autoHeight : true,
	selectedItemCls : 'selected',
	multiSelect : true,
	overItemCls : 'x-view-over',
	width: '100%',
	gridWidth : 304 ,
	
	listeners:{
		itemtap : function(dv, index, item, e){
			console.log("index:"+ index);
			Ext.dispatch({
              	controller: ieat.control ,
                action: 'openPage',
                index : index
              });	
		}
	} ,
	
	/**
     * @private
     */
    initComponent : function() {
        this.scroll = {
                direction: 'horizontal',
                friction: 0.7,
                acceleration: 25,
                snapDuration: 200 ,
                animationDuration: 200
            };
        SH.PageOverview.superclass.initComponent.call(this);
    },
	
	
	/**
     * @private
     */
    setupBar: function() {
    	this.scroller.updateBoundary();
        this.scroller.setSnap(this.gridWidth);
    },
    
    /**
     * @private
     */
    afterComponentLayout: function() {
        // 延迟执行，等待所有资源创建完成
        Ext.defer(this.setupBar, 200, this);
    },
    
    /**
     * @private
     */
    initEvents: function() {
        this.mon(this.scroller, {
            scrollend: this.onScrollEnd,
            scroll : this.onScroll,
            scope: this
        });
    },
    
    /**
     * 滚动结束事件
     * @private
     */
    onScrollEnd: function(scroller, offset) {
    	this.selectedNode = this.getNode(Math.round(offset.x / this.gridWidth));
        this.selectedIndex = this.indexOf(this.selectedNode);
        this.onSlot(this.selectedIndex , this.selectedNode);
    },
    
    onSlot :  function(index, item){
		//TODO 改变窗口内的页面样式
	},
    
    /**
     * 滚动事件
     */
    onScroll: function(scroller , offset) {
    	var grid = Math.round(offset.x / this.gridWidth) + 1 ;
    	
    	if(grid != this.grid){
    		var oldgrid = this.grid ;
    		this.grid = grid ;
    		this.onWindowChange(this.grid , oldgrid );
    	}
    },
    
    onWindowChange : function(grid, oldgrid){
    	console.log("===onWindowChagne, Grid=" + grid );
    	
    	Ext.dispatch({
          	controller: ieat.control ,
            action: 'showPageIntoInfo',
            index : grid
          });
    }

});

Ext.reg('pageoverview', SH.PageOverview);

SH.PageIntroPanel = Ext.extend(Ext.Panel , {
	
});
