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
        	el.setStyle("background","url('"+this.bgImg+"') center no-repeat");
        }else{
        	el.setStyle("background","url('"+this.defaultBgImg+"') center no-repeat");
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
	}

});
