/**
 * 控制器内，定义了大部分的控制方法
 */
Ext.regController("control", {

	/**
	 * 显示封面
	 * @param options
	 */
	showCover : function(options) {
		ieat.viewport.setActiveItem(app.views.cover, options.animation);
	},

	/**
	 * 显示内页
	 * @param options
	 */
	showViewPage : function(options) {
		ieat.viewport.setActiveItem(app.views.viewpage, options.animation);
	}
});
