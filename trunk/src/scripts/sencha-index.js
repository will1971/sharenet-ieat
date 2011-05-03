function addClassName(oHTMLElement, classNameToAdd) {
    if (typeof(oHTMLElement) == "string") {
        oHTMLElement = document.getElementById(oHTMLElement);
    }
    if (oHTMLElement) {
        var theClassName = oHTMLElement.className;
        if (theClassName && (theClassName.length > 0)) {
            var classNamesToAdd = classNameToAdd.split(" ");
            if (classNamesToAdd.length === 1 && ((" " + theClassName + " ").lastIndexOf(" " + classNameToAdd + " ") === -1)) {
                oHTMLElement.className = oHTMLElement.className + " " + classNameToAdd;
            } else {
                var theClassNames = theClassName.split(" "),
                    iEnd = classNamesToAdd.length,
                    aClassName, theClassNamesToAddArray = [];
                for (var i = 0; i < iEnd; i++) {
                    aClassName = classNamesToAdd[i];
                    if (theClassNames.indexOf(aClassName) === -1) {
                        theClassNamesToAddArray.push(aClassName);
                    }
                }
                oHTMLElement.className = oHTMLElement.className + " " + ((theClassNamesToAddArray.length > 1) ? theClassNamesToAddArray.join(" ") : theClassNamesToAddArray[0]);
                theClassNames = null;
                aClassName = null;
                theClassNamesToAddArray = null;
            }
        } else {
            oHTMLElement.className = classNameToAdd;
        }
        theClassName = null;
        classNamesToAdd = null;
    }
}
function hasClassName(oHTMLElement, classNameOfInterest) {
    return ((" " + oHTMLElement.className + " ").lastIndexOf(" " + classNameOfInterest + " ") > -1);
}
function removeClassName(oHTMLElement, classNameToRemove) {
    if (typeof(oHTMLElement) == "string") {
        oHTMLElement = document.getElementById(oHTMLElement);
    }
    if (oHTMLElement) {
        var theClassName = oHTMLElement.className;
        if (theClassName && (theClassName.length > 0)) {
            var theClassNameArray = theClassName.split(" "),
                classNamesToRemove = classNameToRemove.split(" "),
                iEnd = theClassNameArray.length,
                aClassName, theNewClassNameArray = [];
            for (var i = 0; i < iEnd; i++) {
                aClassName = theClassNameArray[i];
                if (classNamesToRemove.indexOf(aClassName) === -1) {
                    theNewClassNameArray.push(aClassName);
                }
            }
            switch (true) {
            case (theNewClassNameArray.length > 1):
                oHTMLElement.className = theNewClassNameArray.join(" ");
                break;
            case (theNewClassNameArray.length == 1):
                oHTMLElement.className = theNewClassNameArray[0];
                break;
            case (theNewClassNameArray.length == 0):
                oHTMLElement.className = "";
                break;
            }
            theClassNameArray = null;
            classNamesToRemove = null;
            aClassName = null;
            theNewClassNameArray = null;
        }
        theClassName = null;
    }
}

function createOrderStore() {
	//建立点选菜单的存储
	var store = new Ext.data.JsonStore( {
		model : 'Item',
		sorters : 'id',

		getGroupString : function(record) {
			return record.get('type');
		}
	});
	return store ;
}


/**
 * create tool bar, contains type and other things
 * @return
 */
var DishNum = 0; //桌号

function createToolBar(orderedList , self ){
	
	var extendOrderPad = function(btn, event) {
		orderedList.setCentered(false);
		orderedList.doLayout();
		orderedList.showBy(btn);
	} ;
	
	var operationButtonGroup = [ {
		text : '返回',
		ui : 'back' ,
		handler : function( btn, event ){
			DishNum = -1 ;
			self.mainPanel.setActiveItem(0);
		}
	}, {
		iconMask : true,
		iconCls : 'organize',
		text :'  桌号：'+ DishNum+'   已点菜（0份）',
		handler : extendOrderPad
	} ];

	var itemList = [ ] ;
	types.forEach(function(typeTxt){
		itemList.push({ text : typeTxt , id: typeTxt });
	});
	
	self.typetoggle = function ( up , button, pressed ) {
		var type = button.id ;
		var firstPage = typeStartIndex[type];
		
		if(firstPage >= 0){
			updateCurrentPage(self, firstPage) ;
		} ;
	};
		
	var typeButtonG = [ {
		height: '42px' ,
		xtype : 'segmentedbutton',
		items : itemList ,
		listeners : {
			toggle : self.typetoggle 
		}
	} ];

	operationButtonGroup.push( {
		xtype : 'spacer'
	});
    
	var toolbar = new Ext.Toolbar( {
		title : '<span class="logo push_8 grid_2">炫动美食</span>',
		height : '46px',
		width : '100%',
		dock : 'top',
		cls : 'toolbar',
		floating : true,
		floatingCls : 'toolbar-float',
		hideOnMaskTap : false,
		defaults : {
			ui : 'plain'
		},
		scroll : 'horizontal',
		layout : {
			pack : 'right'
		},
		defaults : {
			iconMask : true,
			ui : 'plain'
		},
		items : operationButtonGroup.concat(typeButtonG)
	});
	
	return toolbar ;
}


function createOrderedList(store){
	var list = new Ext.List(
			{
				grouped : true,
				pinHeaders : false ,
				itemTpl : new Ext.XTemplate(
						'<div class="loan">',
							'<img class="loan_img" src="{image}">',
							'<div class="desc">',
								'<span class="itemname">{name} </span>' ,
								'<span class="price">单价：{price}元</span>',
							'</div>' ,
						'</div>'),
				store : store,
				scroll : 'vertical' ,
                height: 700,
                selModel: {
                    mode: 'SINGLE',
                    allowDeselect: true
                },
                onItemDisclosure: 
                {
                scope: 'test',
                handler: function(record, btn, index) {
                   // alert('删除菜 ' + record.get('name'));
                    store.remove(record);
                    }
                } 
			});
        
        
        
	var overlay = new Ext.Panel( {
		floating : true,
		modal : true,
		centered : false,
		board: 2 ,
		padding: 2 ,
		cls: 'ordered grid_5' ,
		height: 750 ,
		items : [ list , {
			
		} ]
	});
	
    var tabpanel = new Ext.TabPanel({
		floating : true,
		modal : true,
		centered : false,
		board: 5 ,
		padding: 2 ,
		cls: 'ordered grid_5' ,
		height: 750 ,
        tabBar: {
            dock: 'bottom',
            layout: {
                pack: 'center'
            }
        },
        cardSwitchAnimation: {
            type: 'slide',
            cover: true
        },
        defaults: {
            scroll: 'vertical'
        },
        items: [{
            title: '点菜单',
            iconCls: 'info',
            items : [ list ],
            badgeText: '1'
        },{
            title: '有奖游戏',
            html: '<h1>砸金蛋送美食</h1><img src="images/egg.jpg">',
            iconCls: 'favorites'
        }]
    });
    
	//return overlay ;
    return tabpanel ;
}


/**
 * expand or unexpand the pagebar
 * @param self
 * @param expand
 */
function expandPageBar(self , expand){
	
	if(expand && !self.pageBarExtended){
		self.pagecarousel.setVisible(true);
		self.pagePanel.setHeight(self.pagePanelHeight
				+ self.pagecarouselHeight);
		self.pagePanel.doLayout();
		self.pagePanel.addCls('extend');
		self.pageBarExtended = true;
	}else if(!expand && self.pageBarExtended){
		self.pagePanel.setHeight(self.pagePanelHeight);
		self.pagecarousel.setVisible(false);
		self.pagePanel.doLayout();
		self.pagePanel.removeCls('extend');
		self.pageBarExtended = false;
	}
}


function createPageBar(self , pageStore){
	
	var extendBarFn = function() {
		if (!self.pageBarExtended) {
			self.pagecarousel.setVisible(true);
			self.pagePanel.setHeight(self.pagePanelHeight
					+ self.pagecarouselHeight);
			self.pagePanel.doLayout();
			self.pagePanel.addCls('extend');
			self.pageBarExtended = true;
		} else {
			self.pagePanel.setHeight(self.pagePanelHeight);
			self.pagecarousel.setVisible(false);
			self.pagePanel.doLayout();
			self.pagePanel.removeCls('extend');
			self.pageBarExtended = false;
		}
	};
	

	self.pageTitleBar = new Ext.Toolbar({
		dock : 'top',
		layout : 'vbox',
		ui : 'dark',
		height : '46',
		cls : 'topbar',
		layout : {
			pack : 'left'
		},
		defaults : {
			iconMask : true,
			ui : 'plain'
		},
		items : [ {
			iconCls : 'action',
			text : '多页概览'
		} ],
		listeners : {
			tap : {
				element : 'el',
				fn : extendBarFn
			}
		}
	});
	
	var pageViewTpl = new Ext.XTemplate(
		     '<div class="imgdiv">',
		        '<tpl for=".">',
		            '<img src="{snapshot}" class="snapview" id="{id}"/>',
		        '</tpl>',
		    '</div>' 
		);
	
	var creatDataView = function(data){
		
		var store = new Ext.data.JsonStore({
			model : 'Item',
			data: data
		});
		
		var pv = new Ext.DataView({
		        store: store,
		        tpl: pageViewTpl,
		        itemSelector:'.imgdiv .snapview',
		        selectedItemCls : 'selected',
		        scroll: false ,
		        listeners:{
					itemtap : function(dv, index, item, e){
						var pageIndex = pageStore.find('id' , parseInt(item.id) ) ;
						updateCurrentPage(self , pageIndex) ;
					}
				}
		    });
		return pv ;
	};
	
	// create page view
	var pageViews = [] ;
	var oneViewData = [] ;
	var i = 0 ; 
	pageStore.each(function(page){
		// create data view for each page
		if(page.data['cls']=='page'){
			oneViewData.push(page.data) ;
		}
		
		if(oneViewData.length == 3 ){
			pageViews.push(creatDataView(oneViewData)) ;
			oneViewData = [] ;
		}
		
	});
	
	if(oneViewData.length > 0 ){
		pageViews.push(creatDataView(oneViewData));
	}
	
	// Create a Carousel of Items
	self.pagecarousel = new Ext.Carousel(
			{
				id: 'pagecarousel' ,
				layout : 'card',
				hidden : true,
				width : '100%',
				height : 210,
				items : pageViews,
				listeners : {
					cardswitch : function(container, newCard, oldCard, index,
							animated) {
						var selecteds = oldCard.getSelectedRecords() ;
						if(selecteds.length > 0 ){
							oldCard.deselect(selecteds , true);
						}
					}
				}
				
			}
			)

	self.pagePanel = new Ext.Panel( {
		id : 'pagepanel' ,
		cls : 'pagepanel push_2 grid_8 ',
		floating : true,
		hideOnMaskTap : false,
		// FIXIT: it was not good with 50px height within chrome, but maybe OK at 
		// iPad, for unknown resonses.
		height : 46,  
		ui: "dark" ,
		board: 0 ,
		padding: 0 ,
		dockedItems : [ self.pageTitleBar ],
		items : [ self.pagecarousel ]
	});

	// because the object not show, so only can't call getHeight()
	self.pageBarExtended = false;
	self.pagecarouselHeight = self.pagecarousel.height;
	self.pagePanelHeight = self.pagePanel.height;
	return self.pagePanel ;
}

var pageTpl = new Ext.XTemplate(
	    '<div style="background-image: url({image});" class="{cls}">', 
		'<tpl for="items">',
		    '<div id="{page_id}-{id}" class="itemctl {controlCls}">',
			    '<div class="control"><span class="name">{name}</span><img class="order"/></div>',
			    '<span class="desc">{desc}</span>' ,
			    '<span class="price">价格：{price}元</span>',
		    '</div>',
			'<img id="img-{page_id}-{id}" class="itemimg {controlCls}" src="{image}"/>',
		'</tpl>',
		'</div>');

var controlTpl = new Ext.XTemplate(
		'<span class="item-name">{name}</span>',
		'<span class="price">{price}元</span>'
	);


function takeOrder(self , pageId , itemId){
	var page =self.pageStore.getById(pageId);
	
	var items = page.data.items ;
	var founded = false ;
	items.forEach(function(item){
		if(item['id'] == itemId && !founded){
			self.orderStore.add(item) ;
			founded = true ;
		}
	}) ;
	
	if(!founded){
		console.error("在当前页中找不到点的菜，请检查page-data.js page:" + pageId + " item:" + itemId);
	}else{
		//updateOrderStatus( self );
	}
}


function updateOrderStatus( self ){
	var count = 0 ; 
	var price = 0 ;
	self.orderStore.each(function(item){
		count ++ ;
		price += item.get('price');
	});
	
	var txt = '  桌号：'+ DishNum + "   已点菜（" + count + "份）价格:" + price + "元";
	self.toolbar.items.items[1].setText( txt  ) ;
}

/**
 * create the page store object, which is the main contains of whole manu
 * fields : [ 'id' , 'pageIndex', 'image', 'snapshot' ,'type', 'cls'] 
 */
function createPage(pageStore , self ){
	
	var afterOrderFun = function(event){
		updateOrderStatus(self);
	};
	
	var orderFun = function(target , data){
		if(!self.showControls){
			self._tempHidenControls = true ;
			showControlsFun(self , true);
		}else{
			self._tempHidenControls = false ;
		}
		
		takeOrder(self ,  data.page_id , data.id);	
	};
	
	self.pagepanel = new SH.PageViewPanel(
			{
				//fullscreen : true,
				layout : 'card',
				cls : 'pagesheets' , 
				defaults : {
					cls : 'card',
					flex : 1
				},
				pageData : createPageStore(),
				listeners : {
					tap : {
						element : 'body',
						// property on the panel
						fn : toggleControls,
						scope : self
					}
				},
				pageContentSwitch : function(container, newCard, oldCard, index,
						animated) {
					var pageIndex = newCard.carouselPosition ;
					updateCurrentPage(self, pageIndex);
					expandPageBar(self , false) ;
					
					if(	self._tempHidenControls ){
						showControlsFun(self , false);
						self._tempHidenControls = false ;
					}
				}
			}
		) ;
	

	
	self.pagepanel.on('order', orderFun , this);
	self.pagepanel.on('afterorder', afterOrderFun , this);	
}


function createTablePanel(tableStore , self ){
	self.tablepanel = new Ext.Panel({
		items: [{
            xtype: 'list',
            onItemDisclosure: function(record, btn, index) {
            	DishNum = index ;
				self.mainPanel.setActiveItem(1);
            },
            store: tableStore,
            itemTpl: '<div class="contact"><strong>{desc}</strong> {state}</div>'
        }]
    });
}

/**
 * show out the controls
 * @param self
 * @param show
 * @returns {showControls}
 */
function showControlsFun( self , show ){
	if(show && !self.showControls ){
		self.toolbar.setVisible(true);
		self.pagePanel.setVisible(true);
		self.showControls = true ;
	}else if(!show && self.showControls){
		self.toolbar.setVisible(false);
		self.pagePanel.setVisible(false);
		self.showControls = false ;
	}
}

/**
 * this funtion will toggleControls, if the controls was visible, will hidden
 * them, if not visible, will show them.
 * 
 * @param self
 * @return
 */
function toggleControls(){	
	if(this.showControls){
		showControlsFun( this , false) ;
	}else{
		showControlsFun( this , true) ;
	}
}



var COVER_SIZE = 2 ;

// change status of currentPage, include the typeButton , pageBar status
function updateCurrentPage(self , index){
	var page =self.pageStore.getAt(index);
	var type = page.get('type') ;
	var pressedBtn = self.toolbar.items.get(3).getPressed();
	if(!pressedBtn || (pressedBtn.id != type) ){
		// FIXIT: the segment button is toolbar.items.get(3), buggie
		self.toolbar.items.get(3).un("toggle",self.typetoggle); // for stop the event when change page
		self.toolbar.items.get(3).setPressed(type , true);
		self.toolbar.items.get(3).on("toggle",self.typetoggle); // for enable the event when change page
	}

	if(index != self.pagepanel.getPageIndex()){
		self.pagepanel.showCategoryByIndex( "Food" , index );
	}
	
	var pageBarIndex = Math.floor(  ( index  - COVER_SIZE ) / 3) ;
	if( ( self.pagecarousel.getActiveIndex() >= 0 )  &&  (pageBarIndex != self.pagecarousel.getActiveIndex()) ){
		self.pagecarousel.setActiveItem(pageBarIndex , "slide") ;
	}
}

/**
 * The entry point, page render start from here.
 */

Ext.setup( {
			tabletStartupScreen : 'images/tablet_startup.jpg',
			icon : 'icon.png',
			glossOnIcon : true,

			onReady : function() {
				
				
				/*
				 * prepare the controls
				 */
				 //建立点菜单
				createStoreModule();
				this.orderStore = createOrderStore();
				this.orderedList = createOrderedList(this.orderStore) ;
				
		     
				
				//建立工具栏
				this.toolbar = createToolBar(this.orderedList , this) ;
				this.toolbar.setVisible(true);
		
				// 建立页面内容
				this.pageStore = createPageStore();
				
				//建立多页浏览
				// create page snapview panel
				var pagePanel = createPageBar(this , this.pageStore);
				pagePanel.setVisible(true);
				this.showControls = true ;
				
				
                //创建菜单页面 , 并翻倒第一页
				createPage(this.pageStore , this);
				//updateCurrentPage(this , 0) ;
				
				this.tableStore = createTableStore() ;
				createTablePanel(this.tableStore, this) ;
				
				this.mainPanel = new Ext.Panel({
			        fullscreen: true,
			        layout: 'card',
			        items: [this.tablepanel , this.pagepanel ]
			    });
				
				//显示开台页 
				this.mainPanel.setActiveItem(0);
			}
		});
