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

SH.AnimPanel = Ext.extend(Ext.Panel, {

	html:'<ol><li id="scene-0"><div class="AN-sObj-stage" id="ext-gen2196"><div class="AN-Object" id="AN-sObj-19"><div id="AN-sObj-val-19"><img src="images/bg.jpg"></div></div><div class="AN-Object" id="AN-sObj-20"><div id="AN-sObj-val-20"><img src="images/title.png"></div></div><div class="AN-Object" id="AN-sObj-21"><div id="AN-sObj-val-21"><img src="images/main.png"></div></div><div class="AN-Object" id="AN-sObj-24"><div id="AN-sObj-val-24"><img src="images/f1.png"></div></div></div></li></ol>' ,
	initComponent : function() {
		SH.AnimPanel.superclass.initComponent.call(this);
	    this.monitorOrientation = true;
        this.mon(this, "orientationChange", this.onOrientationChange, this);
	}, 
		afterRender: function() {
        SH.AnimPanel.superclass.afterRender.apply(this, arguments);
        this.setOrientation(Ext.getOrientation());
        setup();

    },
	onOrientationChange: function(target, orientation) {
		
    }

});
