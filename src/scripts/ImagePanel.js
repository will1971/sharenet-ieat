Ext.ns("SH");

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
