Ext.ns("SH");

/**
 * 缓冲Carousel，因为当Carousel的页面过多的时候，页面的翻动速度会变的很慢
 * 需要在将要翻到该页面的时候才提前创建页面
 */
SH.BufferedCarousel = Ext.extend(Ext.Carousel, {

    constructor: function(options) {
        options = Ext.apply({}, options, {
            bufferSize: 1
        });
        SH.BufferedCarousel.superclass.constructor.call(this, options);
    },
    
    initComponent: function() {
    	this.items = [];
        var indicator = this.indicator;
        this.indicator = false;
        
        SH.BufferedCarousel.superclass.initComponent.apply(this, arguments);
        
        if (indicator) {
            var cfg = Ext.isObject(this.indicator) ? this.indicator : {};
            this.indicator = new SH.BufferedCarousel.Indicator(Ext.apply({}, cfg, {
                direction: this.direction,
                carousel: this,
                ui: this.ui
            }));
        }
    },
    
    afterRender: function() {
    	SH.BufferedCarousel.superclass.afterRender.apply(this , arguments);
    	
        this.body.on({
            touchstart: this.onTouchStart,
            scope: this
        });
        
        this.bufferCards(this.initialCarouselPosition || 0);
        this.el.repaint();
        this.mon(this, 'cardswitch', this.handleCardSwitch, this);
    },
    
    /**
     * TODO: what is this working for?
     */
    onTouchStart: function() {
        this.onTransitionEnd();
    },

    handleCardSwitch: function(carousel, card , oldCard, index,
			animated) {
        this.bufferCards(card.carouselPosition);
        this.fireEvent('afterswitch', card , oldCard , index);
    },
    
    /**
     * Creates/removes cards to the left and right of the current card
     */    
    bufferCards: function(index) {
    	
    	// Quick return if there is nothing to do
        if (this.lastBufferedIndex == index) { return; }
        this.lastBufferedIndex = index;
        
        this.fireEvent('buffer', this, index);
        
        // Initialize variables
        var
            // size of the window
            bufferSize = this.bufferSize,
            // constrained start index of the window
            start = Ext.util.Numbers.constrain(index-bufferSize , 0, this.itemCount-1),
            // constrained end index of the window
            end = Ext.util.Numbers.constrain( index+bufferSize , 0, this.itemCount-1), 
            items = this.items,
            // flag to determine if any items were added/removed
            changed = false,
            // will be set to the item where its position == index
            activeCard;

        // make sure the index is within bounds
        index = Ext.util.Numbers.constrain(index , 0, this.itemCount-1);

        // cull existing items
        var i = 0;
        while (i < items.length) {
            var item = items.get(i),
                itemIndex = item.carouselPosition;
            
            if (itemIndex < start || itemIndex > end) {
                this.remove(item, true);
                changed = true;
            }
            else {
            	if(itemIndex == index){
            		activeCard = item;
            	}
                i++;
            }
        }
        
        // function to create a card and add to the carousel
        var createCard = function(carouselPos, layoutPos) {
            var card = this.createItem(i);
            
            if (card) {
                card.carouselPosition = carouselPos;
                if (layoutPos != null) {
                    this.insert(layoutPos, card);
                }
                else {
                    this.add(card);
                }
                
                if (carouselPos == index) {
                    activeCard = card;
                }
                changed = true;
            }
        };
        
        // add new items
        if (items.length) { // if existing items, add to the left and right
            var first = items.first().carouselPosition,
                last = items.last().carouselPosition;
            for (var i = first-1; i>=start; i--) {
                if (i >= 0) {
                    createCard.call(this, i, 0);
                }
            }
            
            for (var i = last+1; i<=end; i++) {
                createCard.call(this, i);
            }
        }
        else { // if no existing items, just add cards
            for (var i = start; i<=end; i++) {
                if (i >= 0) {
                    createCard.call(this, i);
                }
            }
        }
        
        // if changed, make sure the layout is updated
        // also, update the active item if needed
        if (changed) {
            this.doLayout();
            
            var activeItem = this.layout.getActiveItem();
            
            if (activeCard && activeItem != activeCard) {
                this.layout.setActiveItem(activeCard , { type:'fade' , duration: 500 });
                this.doLayout();
            }            
        }
    },
    
    /**
     * set the current page at index position
     * @index the active item index, if index > itemCount - 1 or <-0 will 
     * set to 0 or itemCount - 1 
     */
    setActiveItemByIndex: function(index){
    	index = Ext.util.Numbers.constrain(index , 0, this.itemCount-1);
    	this.bufferCards(index);
    },
    
    
    getIndex: function() {
        var activeItem = this.layout.getActiveItem();
        return activeItem ? activeItem.carouselPosition : -1;
    },
    
    
    getActiveItem: function(){
    	return this.layout.getActiveItem();
    },
    
    /**
     * The afterLayout method on the carousel just makes sure the active card
     * is still into view. It also makes sure the indicator is pointing to
     * the right card.
     * @private
     */    
    afterLayout : function() {
        Ext.Carousel.superclass.afterLayout.apply(this, arguments);
        
        this.currentSize = this.body.getSize();
        this.currentScroll = {x: 0, y: 0};
        
        this.updateCardPositions();
       
        var activeItem = this.layout.getActiveItem();        
        if (activeItem && this.indicator) {  
        	this.indicator.onBeforeCardSwitch(this, activeItem, null, this.getIndex());
        }
    }     
});

SH.BufferedCarousel.Indicator = Ext.extend(Ext.Carousel.Indicator, {
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



SH.PageView = Ext.extend(SH.BufferedCarousel, {

	initComponent : function() {
		
		ieat.headbar = new SH.HeadBar({
				//xtype: 'ieatheadbar',
		    title: '柒零捌零电子菜单'
		});
		
		Ext.apply(this, {
        	// head bar
        	dockedItems:[ieat.headbar] ,
			
			indicator : false,
			itemCount : ieat.data.getPages().length
		});

		SH.PageView.superclass.initComponent.apply(this, arguments);
		
		this.mon(this, "afterswitch", this.onAfterSwitch , this);
	},

	/**
	 * 创建Page
	 * @param index
	 * @returns {SH.ImagePanel}
	 */
	createItem : function(index) {
		var page = ieat.data.getPage(index);
		return new SH.ImagePanel({
			bgImg : page.image,  
			page : page
		});
	},
	
	getCurrentPageIdx: function(){
		return this.getIndex();
	},
	
	getCurrentPage: function(){
		return this.layout.getActiveItem();
	},
	
	afterRender: function() {
    	SH.PageView.superclass.afterRender.apply(this , arguments);
    	
        Ext.defer( function(){
			this.getCurrentPage().showItemStatus();
		} , 200 , this );
    },
	
	onAfterSwitch : function( card , oldCard , index ){
		Ext.defer( function(){
			card.showItemStatus();
		} , 200 , this );
	}

});
