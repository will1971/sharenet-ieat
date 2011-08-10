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
	 * 显示该页的相关信息
	 * @param index
	 */
	showPageIntoInfo : function(options) {
		if(ieat.overview.isVisible()){
			var page = ieat.data.getPage(options.index);
			
			if(page != null){
				var ovheader = ieat.overview.getDockedItems()[0].getEl().query('.pageintro');
				console.log(ovheader);
				ovheader[0].innerHTML= "页："+options.index ;
			}else{
				console.log("错误：无效的页面索引 index=" + index) ;
			}	
		}
	}
	
});
