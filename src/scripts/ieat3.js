
/**
 * The entry point, page render start from here.
 */
   
Ext.setup( {
			tabletStartupScreen : 'images/screen.jpg',
			icon : 'images/icon.jpg',
			glossOnIcon : true,

			onReady : function() {
				
				
				
				/*
				 * prepare the controls
				 */
				var overView = new Ext.Carousel({
			        fullscreen: true,
					bodyMargin : "256,400" ,
					bodyPadding : 5 ,
					cls: "overview" ,
					items: [{
						html : "this is test 1"
					},{
						html : "this is test 2"
					}] 
				});
			}
		});
