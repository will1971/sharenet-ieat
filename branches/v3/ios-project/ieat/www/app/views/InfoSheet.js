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
	padding: '0 0 0 0',
	
	initComponent: function() {
		
		this.foodinfo = new Ext.data.Store({
			fields: [
			         {name: 'image', type: 'string'},
			         {name: 'name', type: 'string'},
			         {name: 'desc', type: 'string'},
			         {name: 'price', type: 'string'},
			     ],
			data : ieat.data.getPage(0).items
		});
		
		Ext.apply(this, {
			
			dockedItems: [{
				cls: 'sheethead',
			    xtype: 'toolbar',
			    title: '菜品详细介绍',
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
    		items: [{
    			html : "详细信息区"
    		}],
			items: [new SH.ItemsList({
		        store:this.foodinfo
		    })]
        });
    	
    	SH.InfoSheet.superclass.initComponent.apply(this, arguments);
	},
	setPage: function(pindex){
		this.foodinfo.loadData(ieat.data.getPage(pindex).items);
	}
});

SH.ItemsList = Ext.extend(Ext.DataView, {
	tpl :  new Ext.XTemplate(
		'<tpl for=".">' +
	         '<div class="item">',
	            '<div class="itemimg" style="background: url({image}) center no-repeat;position: 50% 50%;"></div>',
	            '<h3>{name}</h3>',
	            '<h2>{desc}</h2>',
	            '<h2>￥{price}元</h2>',
	        '</div>',
        '</tpl>'),
    selectedItemCls : 'selected',
	itemSelector : 'div.item',
	emptyText : '当前菜单没有详情说明 ...',
	height : '100%',
	selectedItemCls : 'selected',
	scroll: 'vertical'
});