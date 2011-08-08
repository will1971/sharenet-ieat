/**
 * 控制器内，定义了大部分的控制方法
 */
function initControl(){
	ieat.control = new Ext.Controller({
	
	    index: function(options) {
	    	app.viewport.setActiveItem(
	    			app.views.contactsList, options.animation
	        );
	    }
	});
}
