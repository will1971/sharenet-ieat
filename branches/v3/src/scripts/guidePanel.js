


//建立用户使用引导界面，包括初次应用套餐引导界面
function createguidePanel(self)
{
	//更改store内容
	function updateGuideListStore(self,index)
	{
		self.GuideStore.removeAll();
		
		
		var packarray = self.GuideDishStore.getById(index).data.items;
		var packCount = packarray.length;
		for (var i = 0;i<packCount;i++)
		{
		    var pageid = packarray[i]['pageid'];//页码
		    var id   = packarray[i]['id'];      //菜码	    
			var items = self.pageStore.getById(pageid).data.items;
			
			var founded = false ;
			items.forEach(function(item){
				if(item['id'] == id && !founded){
					self.GuideStore.add(item);
					founded = true ;
				}
			}) ;
			
			
		}//for 形成GuideStore
	    ;
	}
	
	function getDishList(button)
	{
		self.btnindex= button.id;
		console.log("button id:"+self.btnindex);
		self.guideListPanel.items.items[0].html='<p><font style=font-size:24px>顾客，请浏览本店的特色菜:'+button.text+'</font></p>';
		
		updateGuideListStore(self,self.btnindex);
		self.mainPanel.setActiveItem(self.guideListPanel);
		
	}
	 self.GuideDishStore= createGuideDishesStore();
	 
		var btn1 = new Ext.Button({
			id:1,
			text: '咖喱风味菜',
	        ui: 'round',
	        width:'450px',
	        height:'150px',
	        handler:getDishList
		});
		
		var btn2 = new Ext.Button({
			id:2,
			text: '麻辣风味菜',
	        ui: 'confirm',
	        width:'450px',
	        height:'150px',
	        handler:getDishList
		});
		
		var btn3 = new Ext.Button({
			id:3,
			text: '家常风味菜',
	        ui: 'confirm',
	        width:'450px',
	        height:'150px',
	        handler:getDishList
		});
		
		var guidePanel = new Ext.Panel({
			    cls:'csPanel',
			    layout: {
			    type: 'vbox',
		        pack: 'center',
		        align: 'stretch'
			    },
			    height : '1000px',
			    
			    items:[{
			    	
			    	html: '<p><font style=font-size:24px>顾客，您好！欢迎光临本餐厅，本餐厅提供以下风味菜肴，您更喜欢：</font></p>',
		            cls: 'welcome'
			    	
			    },
			    btn1,btn2,btn3]
		});
		
		return guidePanel;
	
}

function getGuideList(self)//由index获取套餐列表
{   
  
	//console.log(packCount);
	self.GuideStore = new Ext.data.JsonStore( {
		model : 'Item',
		sorters : 'id',

		getGroupString : function(record) {
			return record.get('type');
		}
	});
	
	
	/*var packarray = self.GuideDishStore.getById(index).data.items;
	var packCount = packarray.length;
	for (var i = 0;i<packCount;i++)
	{
	    var pageid = packarray[i]['pageid'];//页码
	    var id   = packarray[i]['id'];      //菜码
	  
	    
		var items = self.pageStore.getById(pageid).data.items;
		
		var founded = false ;
		items.forEach(function(item){
			if(item['id'] == id && !founded){
				self.GuideStore.add(item);
				founded = true ;
			}
		}) ;
		
		
	}//for 形成GuideStore
    ;
    //console.log(self.GuideStore); 
*/    
    
		var list = new Ext.List(
				{
					id:'guidelist',
					title:"欢迎品尝风味菜！",
					grouped : true,
					pinHeaders : false ,
					itemTpl : new Ext.XTemplate(
							'<div class="dish" id="pos_horizontal">',
							'<img class="loan_img" src="{image}" >',
							/*'<div class="dish" id="pos_horizontal">',*/
								'<div class="box itemname">{name} </div>' ,
								'<div class="box price">单价：{price}元</div>',
								'</div>'),
					store : self.GuideStore,
					region:'center',
					scroll : 'vertical' ,
	                height: 1000,
	                selModel: {
	                    mode: 'SINGLE',
	                    allowDeselect: true
	                },
	              listeners: 
	                {
	                
	                	itemdoubletap: function(list, index,item, e)  {
	                  // index = self.btnindex;
	                   console.log(self.btnindex);
	                   var packarray = self.GuideDishStore.getById(self.btnindex).data.items;
	                   console.log(packarray[index]);
	                   var id = packarray[index]['pageid']+2;//update用的是store.getAt,考虑+2
	                   
	                   self.btnback.setVisible(true);
	                   self.mainPanel.setActiveItem(self.pagepanel);
	                   updateCurrentPage(self,id);
	                    }
	                } 
				}				);
		
		console.log(list);
		return list;
}

function createguideListPanel(self)
{
	/*创建套餐选取界面*/
	   
		 self.toolbar.setVisible(false);
		 	 
		 self.guideitem='';
		
		 var itemList = [ ] ;
		 //初始化为1，建立初始列表
		 self.btnindex = 1;
		 
		 var intruduction = {
				    html: '<p><font style=font-size:24px>顾客，请浏览本店的特色菜:'+self.guideitem+'</font></p>',
		            cls: 'guidelist'
			        };
		 var backbtn = new Ext.Button
		 ({
			 
			 text : '返回上级菜单',
			 ui : 'back' ,
			 width: 200,
				handler : function(){
					self.mainPanel.setActiveItem(self.guidePanel);
				}	
		 });
		 var list = getGuideList(self,1);
		
		
				    
		 var GuideListPanel = new Ext.Panel({
			 id:'guidelistPanel',
	         fullscreen: false,
	         sortable: true,
	         
	         cardSwitchAnimation: {
	             type: 'fade',
	             cover: true
	         },
	         items: [intruduction,backbtn,list]
	     });
		 
		console.log(GuideListPanel);
		 
		 return GuideListPanel;
	 
}