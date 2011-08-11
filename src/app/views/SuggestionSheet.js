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
	scroll : false,
	layout : {
		pack : 'right'
	},
	padding: '0 0 0 0',
	
	initComponent: function() {
		// TODO 把store的创建过程推后可以改善交互体验
		var pagestore = new Ext.data.Store({
			fields: [
			         {name: 'image', type: 'string'},
			         {name: 'name', type: 'string'},
			         {name: 'desc', type: 'string'},
			         {name: 'price', type: 'string'},
			     ],
			data : ieat.data.getSuggestion()
		});
	
		Ext.apply(this, {
			dockedItems: [{
				cls: 'sheethead',
    		    xtype: 'toolbar',
    		    title: '精品推荐',
    		    height : '50px',
    			dock : 'top',
    			defaults : {
    				ui : 'dark'
    			},
    		    items:[{xtype:'spacer'},{
    	            text: '收回',
    	            ui: 'forward',
    	            listeners: {
                        scope : this,
                        tap: function(){
                        	this.setVisible(false);
                        }
    	            }
    	        }]
    		}],
    		items: [new SH.ItemsList({
		        store: pagestore 
		    })]
        });
    	
    	SH.SuggestionSheet.superclass.initComponent.apply(this, arguments);
	}
});

//Set up a model to use in our Store
Ext.regModel('itemview', {
    
});


SH.ItemsList = Ext.extend(Ext.DataView, {
	tpl :  new Ext.XTemplate(
		'<tpl for=".">' +
	         '<div class="item">',
	            '<div class="itemimg" style="background: url({image}) center no-repeat ; width:88px ; height: 61px ;"></div>',
	            '<h1>{name}</h1>',
	            '<h2>{desc} {price}元</h2>',
	        '</div>',
        '</tpl>'),
    selectedItemCls : 'selected',
	itemSelector : 'div.item',
	emptyText : '没有设置推荐菜 ...',
	height : '100%',
	selectedItemCls : 'selected',
	scroll: 'vertical'
});