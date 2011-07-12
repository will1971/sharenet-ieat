Ext.ns("SH");

SH.ImagePanel = Ext.extend(Ext.Panel, {

	img : "images/loading.gif" ,
	tpl : new Ext.XTemplate('<img src="{src}"/>') ,

	
	initComponent : function() {
		//this.cls = "imgpanel" ;
		this.bodyCls = "imgpanel" ;
		//this.html = '<div class="inner"><img src="images/loading.gif"/><div>';		
		SH.ImagePanel.superclass.initComponent.call(this);
	
        this.monitorOrientation = true;
        this.mon(this, "orientationChange", this.onOrientationChange, this);
	},
	
	afterRender: function() {
        SH.ImagePanel.superclass.afterRender.apply(this, arguments);
        this.setOrientation(Ext.getOrientation());
    },
    
	onOrientationChange: function(target, orientation) {
		
    }

});
