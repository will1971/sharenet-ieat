Ext.ns("SH");

SH.ImagePanel = Ext.extend(Ext.Panel, {

	defaultBgImg : "images/loading.gif" ,
	
	initComponent : function() {
		
		Ext.apply( this, arguments );
		
		SH.ImagePanel.superclass.initComponent.call(this);
	    this.monitorOrientation = true;
        this.mon(this, "orientationChange", this.onOrientationChange, this);
    },
	
	afterRender: function() {
        SH.ImagePanel.superclass.afterRender.apply(this, arguments);
        this.setOrientation(Ext.getOrientation());
        var el = this.getEl();
        
        if(Ext.isDefined(this.bgImg)){
        	el.setStyle("background","url('"+this.bgImg+"') no-repeat left top");
        }else{
        	el.setStyle("background","url('"+this.defaultBgImg+"') no-repeat left top");
        }
        
        this.mon(el, "tap", this.onTap , this);
    },
    
	onOrientationChange: function(target, orientation) {
		
    },
    
	onTap: function( event , target ){
		var items = this.page.items ;
		
		for(var i = 0 ; i<= items.length - 1 ; i++){
			var hotarea = items[i].hotarea ;
			if( hotarea[0] <= event.pageX && hotarea[1] <= event.pageY &&
					hotarea[2] >= event.pageX && hotarea[3] >= event.pageY){
				Ext.dispatch({
			       	controller: ieat.control ,
			        action: 'takeOrder',
			        pindex : this.page.index ,
			        index : items[i].index ,
			        item : items[i],
			        event : event
			    });
				return ;
			}
		}
		
		//如果没有点中某个菜，就弹出预览框
		Ext.dispatch({
          	controller: ieat.control ,
            action: 'showOverView'
          });
	},
	
	
	/**
	 * 显示当前页面的点菜状态
	 */
	showItemStatus : function(){
		if(ieat.ordered == undefined){
			return ;
		}
		
		var items = this.page.items ;
		var divs = [] ;
		for(var i = 0 ; i<= items.length - 1 ; i++ ){
			var item = items[i] ;
			var ordered = ieat.ordered.getOrdered(item) ;
			var id = ieat.ordered.getItemId(item);
			var div = this.getEl().child("#" + id) ;
	
			if(ordered && div){
				div.setHTML( ordered.get('count') );
			}else if(ordered && !div){
				divs.push( {tag: 'div', id: id , style: 'position: absolute; width:60px; height: 60px; top: '+ (item.hotarea[3] - 110) 
						+ 'px; left: '+ ( item.hotarea[2] - 30 ) +'px ; ' ,  cls : 'orderedbox' , html : ordered.get('count') } );
			}else if(!ordered && div){
				div.remove();
			}
		}
		
		if(divs.length > 0){
			Ext.DomHelper.append( this.getEl() , divs);
		}
	}

});
