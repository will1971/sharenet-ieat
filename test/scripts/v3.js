/**
 * The entry point, page render start from here.
 */
   
Ext.setup( {
			tabletStartupScreen : 'images/tablet_startup.jpg',
			icon : 'images/icon.jpg',
			glossOnIcon : true,

			onReady : function() {
				//用CrossCarousel实现选择界面
				
				var items = []
				
				for(var i = 0 ; i<= 9 ; i++){
					var v1 = new Ext.Carousel({
		                direction: 'vertical',
					    items: [
					        {
					            html: '<p>Navigate the carousel on this page by swiping left/right.</p>',
					            cls : 'card card1'
					        },
					        {
					            html: '<p>Clicking on either side of the indicators below</p>',
					            cls : 'card card2'
					        },
					        {
					            html: 'Card #3',
					            cls : 'card card3'
					        }
					    ]
					});
					items[i] = v1 ;
				}
				
				//用CrossCarousel实现选择界面
				var carousel = new Ext.Carousel({
					cls: "overview" ,
					bodyMargin: "300px, 300px, 300px, 300px" ,
				    items: items
				});
				
				new Ext.Panel({
					fullscreen: true,
					layout: 'fit',
				    items:[carousel]
				});
			}
		});
