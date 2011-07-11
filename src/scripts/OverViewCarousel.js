Ext.ns("SH");

/**
 * OverView Carousel
 */
SH.OverViewCarousel = Ext.extend(SH.BufferedCarousel , {

    constructor: function(options) {
        options = Ext.apply({}, options, {
            bufferSize: 5
        });
        SH.OverViewCarousel.superclass.constructor.call(this, options);
    },
    
    initComponent: function() {
        var indicator = this.indicator;
        this.indicator = false;
        
        SH.OverViewCarousel.superclass.initComponent.apply(this, arguments);
        
        if (indicator) {
            var cfg = Ext.isObject(this.indicator) ? this.indicator : {};
            this.indicator = new SH.OverViewCarousel.Indicator(Ext.apply({}, cfg, {
                direction: this.direction,
                carousel: this,
                ui: this.ui
            }));
        }
    },
    
    afterRender: function() {
    	SH.OverViewCarousel.superclass.afterRender.apply(this , arguments);
    },
    
    onTouchStart: function() {
        this.onTransitionEnd();
    },

    handleCardSwitch: function(carousel, card , oldCard, index,
			animated) {
        this.bufferCards(card.carouselPosition);
    }
});


/**
 * OverView Carousel Indicator
 */
SH.OverViewCarousel.Indicator = Ext.extend(Ext.Carousel.Indicator, {
	    baseCls: 'x-carousel-indicator',

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
	        SH.BufferedCarousel.Indicator.superclass.initComponent.call(this);
	    },

	    // @private
	    onRender: function() {
	        Ext.Carousel.Indicator.superclass.onRender.apply(this, arguments);

	        for (var i = 0, ln = this.carousel.itemCount; i < ln; i++) {
	            this.createIndicator();
	        }

	        this.mon(this.el, {
	            tap: this.onTap,
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
	    onCardAdd: function() {
	    	// overwrite the default behavior
	    },

	    // @private
	    onCardRemove: function() {
	    	// overwrite the default behavior
	    }

}) ; 