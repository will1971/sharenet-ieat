/**
 * 注册ieat应用程序
 */ 
Ext.regApplication({
    name: "ieat",
    
    icon: 'images/icon.jpg',
    glossOnIcon: false,
    tabletStartupScreen: 'images/screen.jpg',
    
    /**
     * This function is automatically called when the document has finished loading. All we do here
     * is launch the application by calling the loans controller's 'list' action (see app/controllers/loans.js)
     */
    launch: function() {
    	//播放启动动画，后台创建其他控件
    	
    	//创建数据
    	ieat.data = new SH.Data();
    	
    	//创建对象
    	Ext.apply(ieat.views , {
            cover: new SH.ImagePanel({ bgImg:'images/p1w.jpg' }),
            viewpage: new SH.BufferedCarousel({ 
            	indicator : false ,
            	dockedItems:[{
        		    xtype: 'ieatheadbar',
        		    title: '标题栏'
        		}] ,
            	items: ['1','2','3','4','5','6'],
            	
            	/**
                 * 创建Page
                 * @param index
                 * @returns {SH.ImagePanel}
                 */
                createItem : function(index) {
                	if( ( index % 2 ) == 0){
	                	return new SH.ImagePanel({ 
	                		id: index , 
	                		bgImg:'images/p1w.jpg' 
	                	});
                	}else{
                		return new SH.ImagePanel({ 
	                		id: index , 
	                		bgImg:'images/p2w.jpg' 
	                	});
                	}
                }
            })
        });
    	
    	ieat.viewport = new SH.Viewport() ;
    }
});