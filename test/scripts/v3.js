/**
 * The entry point, page render start from here.
 */
   
Ext.setup( {
			tabletStartupScreen : 'images/tablet_startup.jpg',
			icon : 'images/icon.jpg',
			glossOnIcon : true,

			onReady : function() {
				//用CrossCarousel实现选择界面
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
				
				//用CrossCarousel实现选择界面
				var v2 = new Ext.Carousel({
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
				
				
				//用CrossCarousel实现选择界面
				var carousel = new Ext.Carousel({
	                floating: true,
	                width: 350,
	                height: 370,
	                centered: true,
	                hideOnMaskTap: false,
				    items: [
				       v1, v2
				    ]
				});
				
				carousel.show();
			}
		});
