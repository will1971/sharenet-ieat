/**
 * The entry point, page render start from here.
 */
   
Ext.setup( {
			tabletStartupScreen : 'images/tablet_startup.jpg',
			icon : 'images/icon.jpg',
			glossOnIcon : true,

			onReady : function() {
				// set the windows size
				// window.resizeTo(768,1024);
				
				
				
				//用CrossCarousel实现选择界面
				var items = [];
				
				for(var i = 0 ; i<= 9 ; i++){
					var v1 = new Ext.Carousel({
		                direction: 'vertical',
		                indicator: false ,
		            	defaults: {
		                	cls: "ovitem" 
		                },
					    items: [
					        new SH.ImagePanel({
					        	bgImg : "images/p1l_s.jpg" 
					        }),
					        new SH.ImagePanel({
					        	bgImg : "images/p1l_s.jpg" 
					        }),
					        new SH.ImagePanel({
					        	bgImg : "images/p1l_s.jpg" 
					        })
					    ]
					});
					items[i] = v1 ;
				}
								
				//var panelSize = {width : 192 , height : 256 } ;
				
				//用CrossCarousel实现选择界面
				var carousel = new SH.Overview({
					fullscreen: true,
					indicator: true,
					bodyWidth : 230 ,
					bodyHeight : 307,
				    items: items
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
    	var bodyMarginHeight = (viewSize.height - options.bodyHeight) / 2 ;
    	
        options = Ext.apply({}, options, {
        	cls: "ovpanel" ,
        	bodyCls: "ovbody" ,
        	bodyMargin: bodyMarginHeight + "px, " + bodyMarginWidth + "px, " + bodyMarginHeight + "px, " + bodyMarginWidth + "px",
        	bodyPadding: "0px, 5px, 0px, 5px" ,
            defaults: {
            	bodyCls: "ovbody" 
            }
        });
        
        SH.Overview.superclass.constructor.call(this, options);
    },
    
    initComponent: function() {
        var indicator = this.indicator;
        this.indicator = false;
        
        SH.Overview.superclass.initComponent.apply(this, arguments);
        
        if (indicator) {
            var cfg = Ext.isObject(this.indicator) ? this.indicator : {};
            
            this.indicator = new SH.Overview.Indicator(Ext.apply({}, cfg, {
                direction: this.direction,
                carousel: this,
                ui: this.ui
            }));
        }
    },
    
    afterRender: function() {
    	SH.Overview.superclass.afterRender.apply(this , arguments);
    }   
});

SH.Overview.Indicator = Ext.extend(Ext.Component, {
    baseCls: 'sh-carousel-indicator',

    initComponent: function() {
    	
        if (this.carousel.rendered) {
            this.render(this.carousel.body);
            this.onBeforeCardSwitch(null, null, this.carousel.items.indexOf(this.carousel.layout.getActiveItem()));
        }
        else {
            this.carousel.on('render', function() {
                this.render(this.carousel.body);
            }, this, {single: true});
        }
        SH.Overview.Indicator.superclass.initComponent.call(this);
    },

    // @private
    onRender: function() {
        
    	SH.Overview.Indicator.superclass.onRender.apply(this, arguments);

        for (var i = 0, ln = this.carousel.items.length; i < ln; i++) {
            this.createIndicator(i);
        }

        this.mon(this.carousel, {
            beforecardswitch: this.onBeforeCardSwitch,
            scope: this
        });
        
        this.el.addCls(this.baseCls + '-' + this.direction);
        
    },
    
    // @private
    onBeforeCardSwitch: function(carousel, card, old, index) {
    	if (Ext.isNumber(index) && index != -1 && this.indicators[index]) {
            this.indicators[index].radioCls('x-carousel-indicator-active');
        }
    },
    
    
    // @private
    createIndicator: function(item) {
        this.indicators = this.indicators || [];
        this.indicators.push(this.el.createChild({
            tag: 'span',
            html:'item'
        }));
    },
    
    // @private
    onBeforeCardSwitch: function(carousel, card, old, index) {
        if (Ext.isNumber(index) && index != -1 && this.indicators[index]) {
            this.indicators[index].radioCls('x-carousel-indicator-active');
        }
    },

    // @private
    onCardAdd: function() {
        if (this.rendered) {
            this.createIndicator();
        }
    },

    // @private
    onCardRemove: function() {
        if (this.rendered) {
            this.indicators.pop().remove();
        }
    }
    
}) ;


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

