/**
 * 控制器内，定义了大部分的控制方法
 */
ieat.control = Ext.regController("control", {
	
	/**
	 * 显示封面
	 * @param options
	 */
	showCover : function(options) {
		ieat.viewport.setActiveItem(ieat.views.cover, options.animation);
	},

	/**
	 * 显示内页
	 * @param options
	 */
	showViewPage : function(options) {
		ieat.viewport.setActiveItem(ieat.views.viewpage, options.animation);
	},
	
	/**
	 * 显示菜单，并转到指定页
	 * @param {} options
	 */
	showViewPageAtIndex : function(options) {
		//console.log("显示菜单，并转到指定页:" + options.pindex);
		ieat.viewport.setActiveItem(ieat.views.viewpage, options.animation);
		ieat.views.viewpage.setActiveItemByIndex(options.pindex) ;
	},
	
	
	/**
	 * 翻到指定页
	 */
	openPage : function(options) {
		ieat.views.viewpage.setActiveItemByIndex(options.index) ;
	},
	
	/**
	 * 显示预览窗口
	 * @param options
	 */
	showOverView : function(options) {
		if( ieat.overview == undefined ){
    		ieat.overview = new SH.OverviewSheet();
    	}
		
		ieat.overview.show();
	},
	
	/**
	 * 显示点菜窗口
	 */
	showOrderedView : function(options) {
		if( ieat.ordered == undefined ){
			ieat.ordered = new SH.OrderedSheet();
		}
		ieat.ordered.show();
	},
	
	/**
	 * 显示该页的相关信息
	 * @param index
	 */
	showPageIntoInfo : function(options) {
		if(ieat.overview.isVisible()){
			var page = ieat.data.getPage(options.index);
			
			if(page != null && page.items.length > 0){
				var divs = [] ;
				for(var i = 0 ; i <= page.items.length - 1 ; i++){
					divs.push( {tag: 'h1', html: page.items[i].name } );
					divs.push( {tag: 'h2', html: page.items[i].desc } );
				}
				var ovheader = ieat.overview.getDockedItems()[0].getEl().query('.pageintro');
				var list = Ext.DomHelper.overwrite( ovheader[0] , divs);
				
			}else{
				console.log("错误：无效的页面索引 index=" + options.index) ;
			}	
		}
	},
	
	/**
	 * 将指定的菜加入已点菜簿
	 * @param pindex
	 * @param index
	 * @param item
	 */
	takeOrder : function( options /*pindex , index, item , event*/ ){
		if( ieat.ordered == undefined ){
			ieat.ordered = new SH.OrderedSheet();
		}
		ieat.ordered.order(options.item);
		
		if(ieat.fly == undefined){
			ieat.fly = Ext.getBody().child('#orderingfood') ; 
			ieat.fly.on('webkitAnimationEnd' , function(){
				
				ieat.fly.applyStyles('');
				ieat.fly.removeCls('ordering');
				// TODO the store object should move to ieat.data object
				ieat.headbar.udpateOrder( ieat.ordered.store.getCount() , "NoUsed") ;	
			} , this );
		}
		
		ieat.fly.applyStyles("display: block; background: url('"+ options.item.image +"') center no-repeat ; "+"" +
				"width:88px ; height: 61px ; top: "+ 
				(options.event.pageY - 30) +"px ; left: "+ (options.event.pageX - 44) +"px ;");
		ieat.fly.addCls('ordering');
		
		// 点菜之后更新菜品的显示状况
		this.showItemStatus(options.pindex) ;
		
	},
	
	
	/**
	 * 清空已点菜
	 * @param {} pindex
	 */
	cleanOrder : function(options){
		if( ieat.ordered == undefined ){
			return ;
		}
		
		ieat.ordered.removeAllOrder();
		this.showItemStatus(options.pindex) ;
		Ext.dispatch({
              	controller: ieat.control ,
                action: 'refereshCurrentItemStatus'
              });
	},
	
	
	/**
	 * 设置某页面中的菜品点中情况
	 */
	showItemStatus : function(pindex) {
		//只显示当前页的状况
		if( pindex == ieat.views.viewpage.getCurrentPageIdx() ){
			ieat.views.viewpage.getCurrentPage().showItemStatus();
		}
	},
	
	/**
	 * 刷新当前页面的点菜状况
	 */
	refereshCurrentItemStatus : function(options) {
		ieat.headbar.udpateOrder( ieat.ordered.store.getCount() , "NoUsed") ;	
		ieat.views.viewpage.getCurrentPage().showItemStatus();
	},
	
	/**
	 * 显示某页的详细信息
 	 */
	 showDetails : function(option){
		  if( ieat.infoview == undefined){
          	ieat.infoview = new SH.InfoSheet();
          }
		  
		  ieat.infoview.show();
		  ieat.infoview.setPage(option.pindex);
		  
	 },
	 
	/**
	 * 显示某菜的详细信息
 	 */
	 showFoodDetails : function(option){
		  if( ieat.infoview == undefined){
          	ieat.infoview = new SH.InfoSheet();
          }
		  
		  ieat.infoview.show();
		  ieat.infoview.setItem(option.item);
	 },
	 
	 
	 /**
	  * 显示积分和赠券对话框
	  */
	 showDeals : function(option){
		 if( ieat.dealform == undefined ){
			 ieat.dealform = new Ext.form.FormPanel({
					modal: false,
				    hideOnMaskTap : true,
					floating : true ,
					items : [{
			            xtype: 'fieldset',
			            title: '输入客户信息',
			            instructions: '请输入您的客户信息，可以开始使用积分或者赠券',
			            defaults: {
			                labelWidth: '35%'
			            },
			            items: [{
			                xtype: 'textfield',
			                name: 'name',
			                label: '姓名或电话',
			                placeHolder: '姓名或电话',
			                autoCapitalize : true,
			                required: true,
			                useClearIcon: true
			            }]
			        }]
				});
		 }
			
		 ieat.dealform.showBy(this);
	 }
	
	
	/**
	  * 缺菜管理
	  */

});
