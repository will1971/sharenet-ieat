
ChooseNum = 0;
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


function createToolBar(orderedList , self ){
	
	var extendOrderPad = function(btn, event) {
		orderedList.setCentered(false);
		orderedList.doLayout();
		orderedList.showBy(btn);
	} ;
	
	 self.btnback = new Ext.Button({
			text : '返回特色菜单',
			ui : 'confirm-round' ,
			handler : function(){
				
				self.toolbar.setVisible(false);
				self.btnback.setVisible(false);
				pagePanel.setVisible(false);
				self.mainPanel.setActiveItem(self.guideListPanel);
			}	
	});
	self.btnback.setVisible(false);
	
	
	var operationButtonGroup = [ {
		text : '点菜完成',
		ui : 'forward' ,
		handler : function( btn, event ){
			
			self.toolbar.setVisible(false);
			self.dishbar.setVisible(true);
			updateDishStatus( self );
			pagePanel.setVisible(false);
			self.mainPanel.setActiveItem(3);
		}
	}, 
	{
		
		iconMask : true,
		iconCls : 'organize',
		text :'已点菜（0份）',
		handler : extendOrderPad
	},self.btnback];
	
	
	
    var itemList = [ ] ;
	types.forEach(function(typeTxt){
		itemList.push({ text : typeTxt , id: typeTxt });
	});
	
	self.typetoggle = function ( up , button, pressed ) {
		var type = button.id ;
		var firstPage = typeStartIndex[type]+1;//这里firstPage为数字序号，考虑-2.-1又从0开始故+1
		
		if(firstPage >= 0 ){
			updateCurrentPage(self, firstPage) ;
		} 
		else if(firstPage == -9)//进入套餐选取中
			{
			self.toolbar.setVisible(false);
			self.pagepanel.setVisible(false);
			self.mainPanel.setActiveItem(2);
			}
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
		title : '',
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



function createOrderedList(self){
	var store= self.orderStore;
	var list = new Ext.List(
			{
				id:'oredrlist',
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
                height: 1000,
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
                    updateOrderStatus(self);
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
/*已点菜单工具栏*/
  function createDishToolBar(orderedList , self ){
	function noAction()
	{
		;
	}
	

	
	
	var operationButtonGroup = [  {
		iconMask : true,
		iconCls : 'organize',
		text :'已点菜（0份)',
		handle:noAction
	} ];
	
	
	
    var itemList = [ ] ;
	types.forEach(function(typeTxt){
		itemList.push({ text : typeTxt , id: typeTxt });
	});
	
	self.typetoggle = function ( up , button, pressed ) {
		var type = button.id ;
		var firstPage = typeStartIndex[type]+1;
		
		if(firstPage >= 0){
			self.mainPanel.setActiveItem(1);
			self.toolbar.setVisible(true);
			updateCurrentPage(self, firstPage) ;
			updateOrderStatus(self);
			
		} 
		else if(firstPage == -9)//进入套餐选取中
		{
		self.toolbar.setVisible(false);
		self.pagepanel.setVisible(false);
		self.mainPanel.setActiveItem(2);
		}
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
    
	var dishtoolbar = new Ext.Toolbar( {
		title :'', //'<span class="logo push_8 grid_2">已点菜单</span>',
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
	
	return dishtoolbar ;
}
 



/**
 * 已点菜单汇总
 */
function createDishPanel(self)
{
	
	//var store= self.orderStore;
	
	var list = new Ext.List(
			{
				id:'Dishlist',
				//grouped : true,
				//pinHeaders : false ,
				itemTpl : new Ext.XTemplate(
						'<div class="dish" id="pos_horizontal">',
							'<img class="loan_img" src="{image}" >',
							/*'<div class="dish" id="pos_horizontal">',*/
								'<div class="box itemname">{name} </div>' ,
								'<div class="box price">{price}元</div>',
								/*'<div class="box desc">{desc}</div>',*/
								//'</div>',
							//'</div>' ,
						'</div>'),
				store : self.orderStore,
				//scroll : 'vertical' ,
				//region:'center',
                height: 480,
                selModel: {
                    mode: 'SINGLE',
                    allowDeselect: true
                },
                onItemDisclosure: 
                {
                scope: 'test',
                handler: function(record, btn, index) {
                   // alert('删除菜 ' + record.get('name'));
                	self.orderStore.remove(record);
                    updateDishStatus(self);
                    
                    }
                } 
			});
	
	var listform ={title: 'Basic',
	        xtype: 'panel',
	        id: 'listform',
	        scroll: 'vertical',
	        height:480,
	        margin:10,
	        items: [list]};
	
	var clickCus = function(button,text)
	{
		var score = Math.ceil(self.totalprice/10);
		var coupon = Math.ceil(self.totalprice/10);
		
		if(button=='ok')
	{ 
			if (!this.popup) {
                this.popup = new Ext.Panel({
                    floating: true,
                    modal: true,
                    centered: true,
                    width: 300,
                    height: 200,
                    styleHtmlContent: true,
                    scroll: 'vertical',
                    html: '<p>尊敬的客户，您本次消费共计'+self.totalprice+' 元，获得积分'+score+',可获取赠券'+ coupon+'元一张，已发送电子赠券至您手机，请注意查收.</p>',
                    dockedItems: [{
                        dock: 'top',
                        xtype: 'toolbar',
                        title: '客户积分信息'
                    }]
                });
            }
            this.popup.show('pop');
	}
	
	};
	
     var btn = new Ext.Button(
    		 { 
    			 cls:'ok-button',
                 ui  : 'decline', 
                 scope: this,
                 height:50,
    		   text: '请确认菜单',
    		   centerd:true,
    		   
    		   hasDisabled:false,
    		   listeners:
    		   {
    			 tap:function(btn){
    			 var form = Ext.getCmp('listform');

                 if (btn.hasDisabled) {
                	 
                     form.enable();
                     btn.hasDisabled = false;
                     btn.setText('确认提交');                      
                 } else {
                     form.disable();
                     btn.hasDisabled = true;
                     btn.setText('已锁定，点击解锁');
                     //积分号输入和查询
                     Ext.Msg.prompt("客户积分", "请输入您的客户号（手机号）",clickCus);
                     
                 }
    	        }  
    			 
    		 }
    		   });

	var tablenum ="";
	var numfield =
			 {
                 xtype: 'textfield',
                 id:'tablebum',
                 name : 'number',
                 label: '桌号',
                 margin:5,
                 useClearIcon: true,
                 listeners:{
                	 blur:function(){
                	tablenum = Ext.getCmp('tablebum').getValue(); 
                	 }
                 }
                 //autoCapitalize : false
             };
	  
	var submitbtn = new Ext.Button({
		    id:'btnsubmit',
			cls:'submit-button',
			ui  : 'confirm-round', 
			scope: this,
			height:30,
			margin:5,
			text: '提交后台',
            handler: function() {
            	var jsondata=tablenum+',';
            	self.orderStore.each(function(item){
            		jsondata += item.get('name');
            		jsondata+=',';
            		jsondata += item.get('price');
            		jsondata+=',';
            	});
            	//console.log(jsondata);
            	 Ext.Ajax.request({
                     url: '/ExtAjax/CustomerServlet',
                     method : 'POST' ,
                     jsonData : {
                    	type: 'dishsubmit' , // "download"
                        data:jsondata
                    	} ,				                       	
                     success: function(response, opts) {
                     	console.log(response.responseText);
                     	Ext.Msg.alert('', response.responseText , Ext.emptyFn);
                     }
                 });
            }		
	});
	
    var resetbtn = new Ext.Button({
    	id:'reset',
    	cls:'reset-button',
    	ui:'decline-round',
    	scope: this,
    	margin:5,
		height:30,
		text: '重           置',
        handler: function() {
        	Ext.Msg.confirm("提示信息", "您确认是要重置本菜单?" , 
        			function(button,text)
        			{ if(button=='yes')
        			{ 
        			tablenum = "";
        			self.totalprice = 0;
                	self.orderStore.removeAll();
                	 Ext.getCmp('tablebum').setValue(tablenum);
                	self.mainPanel.setActiveItem(self.csPanel);
                	}
        			
        			});
        			
        	      
        	
        	
        }//handle
    });
	
	var btngroup =new Ext.Panel({
	        id: 'btngroup',	 
	        margin:25,
	        centered:true,
	        left:50,
	        height:40,
	        widht:800,
	        items: [submitbtn,resetbtn]});
    
	var dishPanel = new Ext.Panel( {
		//floating : true,
		id:'dishpanel',
		modal : true,
		centered : false,
		cls: 'dishpanel' ,
		height: 1280,
		width:820,
		layout: {
		    type: 'vbox'
		    //align: 'center'
		},
		 /*cardSwitchAnimation: {
            type: 'slide',
            cover: true
        },*/
        defaults: {
            //scroll: 'vertical'
        },
		items : [self.dishbar,btn,listform,numfield,btngroup]});
    
	updateOrderStatus( self );
	return dishPanel ;
    
}
//获取套餐的列表对象
function getPackList(index,self)//由index获取套餐列表
{   
  
	var packarray = self.packStore.getById(index).data.items;
	var packCount = packarray.length;
	var dishStore = new Ext.data.JsonStore( {
		model : 'Item',
		sorters : 'id',

		getGroupString : function(record) {
			return record.get('type');
		}
	});
	
	
	 
	for (var i = 0;i<packCount;i++)
	{
	    var pageid = packarray[i]['pageid'];//页码
	    var id   = packarray[i]['id'];      //菜码
	  
	    
		var items = self.pageStore.getById(pageid).data.items;
		
		var founded = false ;
		items.forEach(function(item){
			if(item['id'] == id && !founded){
				dishStore.add(item);
				founded = true ;
			}
		}) ;
		
		
	}//for 形成dishStore
    ;
	 
    self.tempStore.push(dishStore);
    
		var list = new Ext.List(
				{
					id:'packlist'+index,
					grouped : true,
					pinHeaders : false ,
					itemTpl : new Ext.XTemplate(
							'<div class="dish" id="pos_horizontal">',
							'<img class="loan_img" src="{image}" >',
							/*'<div class="dish" id="pos_horizontal">',*/
								'<div class="box itemname">{name} </div>' ,
								'<div class="box price">单价：{price}元</div>',
								'</div>'),
					store : dishStore,
					region:'center',
					scroll : 'vertical' ,
	                height: 400,
	                selModel: {
	                    mode: 'SINGLE',
	                    allowDeselect: true
	                }
	               /* listeners: 
	                {
	                
	                	itemdoubletap: function(list, index, item, e)  {
	                   // alert('删除菜 ' + record.get('name'));
	                   console.log("busy");
	                    }
	                } */
				});
		
		
		return list;
}

// 由名称获取选取的套餐
 function SearchStoreFromPackName(self,name)
 {
	 var store= self.packStore;
	 index = 1;
	 var getindex= 0;
	 
	 store.each(function(record)
	 { 
	
		if(name == record.get("desc")){
			getindex = index;
			
		} 
		else{
			index+=1;
		}
	 });
	 
	 return getindex;
	 
 }
 
 

/*创建套餐选取界面*/
 function createPackagePanel(self)
 {   
	 self.toolbar.setVisible(false);
	 	 
	 
	 var store= self.packStore;
	 var itemList = [ ] ;
	 var index = 1;
	 
	 store.each(function(record)
	 {   
		 var list = getPackList(index,self);
		 
		
		
		 itemList.push({ title : record.get('desc'), cls:'card'+record.get('id') ,items:[{
	            title: record.get('desc'),
	            html: '<h1 style="text-align:center;">'+record.get('desc')+'</h1><div align="center"><img src="'+record.get('image')+'" width="240" height="180"></div>',
	            region:'north',
	            iconCls: 'pack'
	        },
	        new Ext.Button({
	        	cls:'x-packbutton',
                ui  : 'decline',
                text: '选此套餐',
                width: 300,
                centerd:true,
                margin:2,
                listeners:{
	        	tap:function()
	        	{   
	        	
	        	var storenum = SearchStoreFromPackName(self,self.packPanel.getActiveItem().title);
	        	//self.orderStore.removeAll();
	        	
	        	var num = self.tempStore[storenum-1].getCount();
	        	//console.log(self.tempStore[storenum-1]);
	        	var items = self.tempStore[storenum-1].data.items;
	        	items.forEach(function(item){
	        		
	        			self.orderStore.add(item) ;
	        			
	        	}) ;
	        	
	        	//self.orderStore = self.tempStore[storenum-1];
	        	//console.log(self.orderStore);
	        	//强制写入orderStore
	        	//self.dishPanel.items.items[1].store= self.orderStore;
	        	
	        	        	
	        	self.toolbar.setVisible(false);
				self.dishbar.setVisible(true);
				updateDishStatus( self );
				self.pagePanel.setVisible(false);
				
				self.mainPanel.setActiveItem(3);
	        	
	        	}
	        }
            }),
	        list]});
	     index+=1;
	 });
	 
	 
	 
 
			    
	 var PackagePanel = new Ext.TabPanel({
         fullscreen: false,
         layout:'border',
         type: 'light',
         sortable: true,
         cardSwitchAnimation: {
             type: 'fade',
             cover: true
         },
         items: [itemList]
     });
	 
	
	 
	 return PackagePanel;
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
				
			});
			

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
	
	var txt = "已点菜（" + count + "份）价格:" + price + "元";
	self.toolbar.items.items[1].setText( txt  ) ;
	
}

function updateDishStatus( self ){
	var count = 0 ; 
	var price = 0 ;
	self.orderStore.each(function(item){
		count ++ ;
		price += item.get('price');
	});
	
	var txt ="已点菜（" + count + "份）总价格:" + price + "元";
	self.dishbar.items.items[0].setText( txt  ) ;
	self.totalprice = price;
	
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
		id: "tablepanel" ,
		items: [{
            xtype: 'list',
            onItemDisclosure: function(record, btn, index) {
			self.DishNum = index+1 ;
            self.toolbar.setVisible(true);
			self.mainPanel.setActiveItem(1);
			updateOrderStatus(self);
            },
            store: tableStore,
            itemTpl: '<div class="contact"><strong>{desc}</strong><br>{state}</div>'
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
	
	var page = self.pageStore.getAt(index);
	var type = page.get('type') ;
	
	var pressedBtn = self.toolbar.items.get(4).getPressed();
	if(!pressedBtn || (pressedBtn.id != type) ){
		// FIXIT: the segment button is toolbar.items.get(3), buggie
		self.toolbar.items.get(4).un("toggle",self.typetoggle); // for stop the event when change page
		self.toolbar.items.get(4).setPressed(type , true);
		self.toolbar.items.get(4).on("toggle",self.typetoggle); // for enable the event when change page
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
			icon : 'images/icon.jpg',
			glossOnIcon : true,

			onReady : function() {
				
				
				/*
				 * prepare the controls
				 */
	             //建立应用通用变量
				 this.DishNum = 0;
				 this.totalprice = 0; //最后总价
				 //建立点菜单
				createStoreModule();
				this.orderStore = createOrderStore();
				this.orderedList = createOrderedList(this) ;
				
		     
				
				//建立工具栏
				//最终点菜栏
				this.dishbar = createDishToolBar(this.orderedList , this) ;
				this.dishbar.setVisible(false);
				//工具栏
				this.toolbar = createToolBar(this.orderedList , this) ;
				this.toolbar.setVisible(true);
		
				// 建立页面内容
				this.pageStore = createPageStore();
				
				//建立多页浏览
				// create page snapview panel
				pagePanel = createPageBar(this , this.pageStore);
				pagePanel.setVisible(false);
				this.showControls = true ;
				
				
				
                //创建菜单页面 , 并翻倒第一页
				createPage(this.pageStore , this);
				//updateCurrentPage(this , 0) ;
				//创建最终点菜页面
				
				this.dishPanel = createDishPanel(this);
				
				//创建套餐信息缓存数组
				this.tempStore = [];
				//创建套餐选取页面
				this.packStore = createPackageStore();
				this.packPanel = createPackagePanel(this);
				
				
				
				
				
				
				//创建选桌面页面
				this.tableStore = createTableStore() ;
			
				createTablePanel(this.tableStore, this) ;
				//创建是否新老客户查询界面（可选）
				this.csPanel =createcsPanel(this);
				//创建引导界面（可选）
				this.guideStore= createGuideDishesStore();
				this.guidePanel = createguidePanel(this);
				//创建引导list界面（可选）
				this.guideListPanel=createguideListPanel(this);
				
				//创建主界面
				this.mainPanel = new Ext.Panel({
			        fullscreen: true,
			        layout: 'card',
			       
			        items: [this.tablepanel , this.pagepanel ,this.packPanel,this.dishPanel,this.csPanel,this.guidePanel,this.guideListPanel]
			    });
				
				
				//显示开台页 
								
				this.mainPanel.setActiveItem(this.csPanel);
			}
		});
