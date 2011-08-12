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
				console.log("错误：无效的页面索引 index=" + index) ;
			}	
		}
	}
	
});
