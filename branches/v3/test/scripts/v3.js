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
		            	defaults: {
		                	cls: "ovitem" 
		                },
					    items: [
					        new SH.ImagePanel({
					        	bgImg : "images/p1.jpg" 
					        }),
					        new SH.ImagePanel({
					        	bgImg : "images/p1.jpg" 
					        }),
					        new SH.ImagePanel({
					        	bgImg : "images/p1.jpg" 
					        })
					    ]
					});
					items[i] = v1 ;
				}
				
				
				
				var panelSize = {width : 192 , height : 256 } ;
				
				//用CrossCarousel实现选择界面
				var carousel = new SH.Overview({
					bodyWidth : 192 ,
					bodyHeight : 256,
				    items: items
				});
				
				new Ext.Panel({
					fullscreen: true,
					layout: 'fit',
				    items:[carousel]
				});
			}
		});


Ext.ns("SH");

/**
 * 支持Cross卷动的Carousel Panel，能够支持在垂直或者水平方向上的移动。
 * 并且实现Buffered Create，不会再 
 */
SH.Overview = Ext.extend(Ext.Carousel, {
	
	

    constructor: function(options) {
    	var viewSize = Ext.Viewport.getSize();
    	
    	var bodyMarginWidth = (viewSize.width - options.bodyWidth ) / 2 ;
    	var bodyMarginHeight = (viewSize.height - options.bodyHeight)/2;
    	
        options = Ext.apply({}, options, {
        	cls: "ovpanel" ,
        	bodyCls: "ovbody" ,
        	bodyMargin: bodyMarginHeight + "px, " + bodyMarginWidth + "px, " + bodyMarginHeight + "px, " + bodyMarginWidth + "px",
        	bodyPadding: "0px, 5px, 0px, 5px" ,
            defaults: {
            	bodyCls: "ovbody" 
            }
        });
        
        console.dir(options) ;
        SH.Overview.superclass.constructor.call(this, options);
    },
    
    initComponent: function() {
        SH.Overview.superclass.initComponent.apply(this, arguments);

    },
    
    afterRender: function() {
    	SH.Overview.superclass.afterRender.apply(this , arguments);
    }   
});

SH.ImagePanel = Ext.extend(Ext.Panel, {

	defaultBgImg : "images/loading.gif" ,
	
	initComponent : function() {
		SH.ImagePanel.superclass.initComponent.call(this);
	    this.monitorOrientation = true;
        this.mon(this, "orientationChange", this.onOrientationChange, this);
	},
	
	afterRender: function() {
        SH.ImagePanel.superclass.afterRender.apply(this, arguments);
        this.setOrientation(Ext.getOrientation());
        var el = this.getEl();
        
        if(Ext.isDefined(this.bgImg)){
        	el.setStyle("background","url('"+this.bgImg+"') center no-repeat");
        }else{
        	el.setStyle("background","url('"+this.defaultBgImg+"') center no-repeat");
        }
    },
    
	onOrientationChange: function(target, orientation) {
		
    }

});

