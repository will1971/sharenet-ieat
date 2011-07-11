/**
 * The entry point, page render start from here.
 */
Ext.setup({
	tabletStartupScreen : 'images/tablet_startup.jpg',
	icon : 'images/icon.jpg',
	glossOnIcon : true,

	onReady : function() {

		var panel = new SH.ImagePanel({
			fullscreen : true,
			layout : 'fit',
			img : "images/p3-small.gif"
		});
	}
});
