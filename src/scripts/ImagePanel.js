Ext.ns("SH");

SH.ImagePanel = Ext.extend(Ext.Panel, {

	img : "images/loading.gif" ,
	tpl : new Ext.XTemplate('<img src="{src}"/>') ,

	
	initComponent : function() {
		this.cls = "imgpanel" ;
		this.html = '<img style=" width : 100% ; height : 100% " src="'+ this.img +'"/>';
		
		SH.ImagePanel.superclass.initComponent.call(this);
	}

});
