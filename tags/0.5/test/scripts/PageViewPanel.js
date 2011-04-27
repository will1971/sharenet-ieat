(function() {
    
    SH.PageViewPanel = Ext.extend(Ext.Panel, {
        cls: 'productlist-panel',
        
        // portrait(肖像画）：竖向放置ipad - this is the default state
        portraitPageTpl : new Ext.XTemplate(
        	    '<div style="background-image: url({image});" class="{cls}">', 
        	    '{html}', 
        		'<tpl for="items">',
        		    '<div id="{page_id}-{id}" class="itemctl {controlCls}">',
        			    '<div class="control"><span class="name">{name}</span><img class="order"/></div>',
        			    '<span class="desc">{desc}</span>' ,
        			    '<span class="stuff">主料：{detail}</span>' ,
        			    '<span class="price">价格：{price}元</span>',
        		    '</div>',
        			'<img id="img-{page_id}-{id}" class="itemimg {controlCls}" src="{image}"/>',
        		'</tpl>',
        		'',
        		'</div>'),
        		
        // landscape(风景画)：横向放置 ipad
        landscapePageTpl : new Ext.XTemplate(
        	    '<div style="background-image: url({land-image});" class="{cls}">',
        	    '{html}', 
        		'<tpl for="items">',
        		    '<div id="{page_id}-{id}" class="itemctl {land-controlCls}">',
        			    '<div class="control"><span class="name">{name}</span><img class="order"/></div>',
        			    '<span class="desc">{desc}</span>' ,
        			    '<span class="stuff">主料：{detail}</span>' ,
        			    '<span class="price">价格：{price}元</span>',
        		    '</div>',
        			'<img id="img-{page_id}-{id}" class="itemimg {land-controlCls}" src="{image}"/>',
        		'</tpl>',
        		'</div>'),
        
        initComponent: function() {
            this.addEvents('itemSelected');
            this.enableBubble('itemSelected');

            //verify the page data
            if(!this.pageData){ 
            	throw "have not give the pagedata, need call createPageStore() to create on and specify by configure " ; 
            }
            
            this.layout = "card";
            SH.PageViewPanel.superclass.initComponent.call(this);
                
            this.mon(this, "itemtap", this.onItemTap, this);
            
            /** TODO : add support for orientation change */
            this.monitorOrientation = false;
            this.mon(this, "orientationChange", this.onOrientationChange, this);
            
        },
        
        afterRender: function() {
            SH.PageViewPanel.superclass.afterRender.apply(this, arguments);
            this.setOrientation(Ext.getOrientation());
        },
        /**
         * Displays products for the indicated category
         */    
        showItemsPage: function(defaultPageIndex) {
            this._setState('PAGE');
                        
            this.removeAll(true);
            this.doLayout();
            if ( this._isPage() ) {
                var totalPages = this.pageData.getCount() ;
                
                var createItemfun = Ext.util.Functions.createDelegate( this.onCreateItem , this) ;
                if (totalPages > 0) {
                    var carousel = new SH.BufferedCarousel({
                    	cls : 'pagesheets' ,
                    	
                        createItem: createItemfun ,
                        itemCount: totalPages,
                        initialCarouselPosition: defaultPageIndex != null ? defaultPageIndex : 0,
                        direction: 'horizontal',
						indicator: false ,
						fullscreen : true,
						defaults : {
							cls : 'card',
							flex : 1
						},
						listeners : {
							cardswitch : this.pageContentSwitch
						}
                    });
                    this.add(carousel);
                    carousel.mon(carousel, 'buffer', this.onCarouselBuffer, this);
                    this.card = carousel ;
                } else {
                    this.add({html: '<div class="item-panel-empty"><span>没有发现菜品数据，请联系软件服务商解决。 http://www.share-net.cn </span></div>'})
                }
                
                // set the food panel as current panel
                this.layout.setActiveItem(this.items.get(0));
                this.doLayout();
            }
        },
        
        /**
         * show Game panel
         * @param defaultPageIndex
         */
        showGame : function(defaultPageIndex){
        	this._setState('GAME') ;
        },
        
        /**
         * set the status :
         * PAGE / GAME
         * @param status
         */
        _setState : function(status){
        	this.state = status ;
        } ,
        
        _isPage : function(){
        	return this.state == 'PAGE' ;
        },
        
        _isGame : function(status){
        	return this.state == 'GAME' ;
        },

        /**
         * set the item page to given category
         * @param category
         * @param index
         */
        showCategoryByIndex : function(category , index){
        	this.category = category ;
        	this.card.setActiveItemByIndex(index) ;
        },
        
        getPageIndex : function (){
        	return this.card.getIndex();
        } ,
        
        /**
         * Creates each card individually as needed by the carousel
         */
        onCreateItem: function(itemIndex) {        	
            var pageData = this.pageData , 
            	totalPages = pageData.getCount() ;
            
            if (totalPages != null && itemIndex >= totalPages) { return; }
            
            var endOrderingAnimation = function(event){
        		removeClassName(event.target , "ordering");
        		this.fireEvent('afterorder', this , event);
        	};
            
            var component = new Ext.Component({
                listeners: {
                    afterrender: function() {
                        this.mon(component.el, 'tap', function(e) {
                        	var item = e.getTarget('.page .itemctl', component.el);
                            
                            if (item) {
                                var index = component.items.indexOf(item),
                                    data = component.pageData[index];
                                
                                if (Ext.isObject(data)) {
            						this.fireEvent('order', this, component.pageData[index]);

                                    var id = item.id ;
            						var imgObj = Ext.get("img-"+id) ;
            						if(imgObj){
            							var img = imgObj.dom ;
            						}
            						addClassName(img , "ordering");
            						
            						var endOrderFun = Ext.util.Functions.createDelegate( endOrderingAnimation , this) ;
            						img.addEventListener('webkitAnimationEnd', endOrderFun , false);
                                }
                                e.stopPropagation();
                            }
                        }, this);
                    },
                    scope: this
                }
            });
            
            //var tpl = ( Ext.getOrientation() == "landscape" ? this.landscapePageTpl : this.portraitPageTpl );
            var tpl = this.portraitPageTpl ;
                
            var results = pageData.getAt(itemIndex);
            component.pageData =  results.data.items ; // fill current page data
            
            var renderData = function() {            	
                tpl.overwrite(component.el, results.data);
                component.el.repaint();
                component.items = new Ext.CompositeElementLite();
                component.items.fill(Ext.query('.itemctl', component.el.dom));
            };
            
            if (component.rendered) {
                renderData();
            }
            else {
                component.on('render', renderData, this, {single: true});
            } ;
            
            return component;
        },
        
        onOrientationChange: function(target, orientation) {
            //var changed = newProductsPerItem != productsPerItem;
        	// TODO check the orientation change
        	var changed = true;
        	
            if (changed) {
            	
                var carousel = this.items.get(0);
                if (carousel && carousel instanceof SH.BufferedCarousel) {
                    var currentItemIndex = carousel.getIndex(),
                        currentProductIndex = currentItemIndex;
                }
                
                this.showItemsPage(currentProductIndex);
            }
        },
        
        onCarouselBuffer: function(carousel, i) {
            if (i <= 0 || i >= carousel.itemCount-1) {
                carousel.el.dom.style.backgroundColor = '';
            }
            else {
                carousel.el.dom.style.backgroundColor = 'white';
            }
        }
    });
    
    Ext.reg('sh-pageview-panel', SH.PageViewPanel);
})();