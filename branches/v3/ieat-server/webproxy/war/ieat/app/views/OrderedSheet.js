/**
 * 快速页面预览，提供对多个页面的快速预览，从Pad下方滑出，可以快速拉动。
 * 拉到某个页面后，标题栏中显示该页面的文字介绍。
 */
Ext.ns("SH");

SH.OrderedSheet = Ext.extend(Ext.Sheet, {
	width :  450 ,
	enter : 'left',
	cls : 'ordered',
    hideOnMaskTap : true,
	modal: false,
	stretchX: false,
    stretchY: true,
	layout : {
		pack : 'right'
	},
	padding: '0 0 0 0',
	
	initComponent: function() {
		
		// TODO 把store的创建过程推后可以改善交互体验
		var store = new Ext.data.Store({
			fields: [
			         {name: 'id', type: 'string'},
			         {name: 'item', type: 'auto'},
			         {name: 'count', type: 'int'}
			     ],
			data : ieat.data.getCustomeOrder('default')
		});
		
		
		Ext.apply(this, {
			store : store ,
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
    	        },{xtype:'spacer'},{
    	            text: '提交',
    	            listeners: {
                        scope : this,
                        tap: function(){
                        	
                        		var orderItem = [] ;
                        		store.each(function(record){
                        			var itemId = (record.get('item').gindex) * 5 + 1 ;
                        			var item = [itemId , record.get('count')] ;
                        			orderItem.push(item);
                        		});
                        		
                        		var PDU = Ext.util.JSON.encode( [ store.getCount() , "MD5" , 
                        		             "000001" , "000001" , "000001", orderItem ] );
                        		//
                        		if( ieat.submitmask == undefined ){
                        			ieat.submitmask = new Ext.LoadMask(ieat.ordered.el , {msg:"正在提交..."});
                        		}
                        		ieat.submitmask.show();
                        		
                        		//提交菜单到服务器
	                        	Ext.Ajax.request({
	    	                        url: '/webproxy/op',
	    	                        method : 'POST' ,
	    	                        jsonData : PDU ,				                       	
	    	                     success: function(response, opts) {
	    	                    	 	console.dir(response) ;
	    	                    	 	//遍历所有的菜，设置缺菜状态
	    	                    	 	oosItems = Ext.decode(response.responseText) ;
	    	                    	 	if(oosItems.length > 1 && oosItems[0] != ieat.oosVersion){
	    	                    	 		var oosSet = {} ;
	    	                    	 		for(var i = 1; i<= oosItems.length -1 ; i++){
	    	                    	 			var gindex = oosItems[i] ;
	    	                    	 			oosSet[gindex] = true ;
	    	                    	 		}
	    	                    	 		
	    	                    	 		ieat.data.refreshOutofSalesStatus(oosSet);
	    	                    	 	}
	    	                    	 	
	    	                    	 	//点菜发送成功，调用清空方法
	    	                    	 	ieat.submitmask.hide();
	    	                        }
	    	                    });
                        	}
    	            }
    	        }]
    		}],
    		
    		items: [new SH.OrderItemsList({
		        store: store 
		    })]
        });
    	
    	SH.OrderedSheet.superclass.initComponent.apply(this, arguments);
	},
	
	order : function( item ){
		var id = this.getItemId(item) ;
		var target = this.store.getById(id) ;
		if( target != undefined ){
			target.set('count', target.get('count') + 1 );
		}else{
			this.store.add( {
				id : id,
				item : item ,
				count : 1 
				} );
		}
	},
	
	addOrderByIdx : function(index){
		var target = this.store.getAt(index) ;
		if( target != undefined ){
			target.set('count', target.get('count') + 1 );
		}
	},
	
	minusOrderByIdx : function(index){
		var target = this.store.getAt(index) ;
		if( target != undefined && target.get('count') > 0){
			target.set('count', target.get('count') - 1 );
		}
	},
	
	removeOrderByIdx : function(index){
		this.store.removeAt(index) ;
	},
	
	getOrdered : function ( item ){
		return this.store.getById(this.getItemId(item)) ;
	} ,
	
	getItemId : function(item){
		return 'p'+ item.pindex + 'f' + item.index ;
	}
});

SH.OrderItemsList = Ext.extend(Ext.DataView, {
	tpl :  new Ext.XTemplate(
		'<tpl for=".">' +
	         '<div class="item">',
	            '<div class="itemimg" style="background: url({item.image}) center no-repeat ; width:88px ; height: 100%; position: absolute; left: 0px; top: 0px;"></div>',
	            '<h1>{item.name}</h1>',
	            '<table>',
	            '<tr><td width="200px" height="40px"><h2>单价:￥{item.price}元</h2></td>',
	            '<td><div class="itemctl"><img class="add"/><span>{count}份</span><img class="minus"/><img class="remove"/></div></td>',
	        '</tr></table>',
	        '</div>',
        '</tpl>'),
    selectedItemCls : 'selected',
	itemSelector : 'div.item',
	emptyText : '尚未点菜...',
	height : '100%',
	selectedItemCls : 'selected',
	scroll: 'vertical',
	
	listeners:{
		itemtap : function(dv, index, item, e){
			var target = e.target ;
			
			if(target.className == 'add'){
				ieat.ordered.addOrderByIdx(index) ;
			}else if(target.className == 'minus'){
				ieat.ordered.minusOrderByIdx(index) ;
			}else if(target.className == 'remove'){
				ieat.ordered.removeOrderByIdx(index) ;
			}else{
				var pindex = this.store.getAt(index).get('item').pindex ;
				console.dir(pindex);
				Ext.dispatch({
	              	controller: ieat.control ,
	                action: 'openPage',
	                index: pindex
	              });
				return ;
			}
			
			Ext.dispatch({
              	controller: ieat.control ,
                action: 'refereshCurrentItemStatus'
              });
		}
	}
});
