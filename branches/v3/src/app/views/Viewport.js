Ext.ns("SH");

SH.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    
    initComponent: function() {
    	

    	
    	ieat.fgaudio = new Ext.Audio();

    	//put instances of cards into viewport
    	Ext.apply(this, {
            items: [
               ieat.views.cover , 
               ieat.views.viewpage,
               ieat.bgaudio ,
               ieat.fgaudio
            ]
        });
    	
    	SH.Viewport.superclass.initComponent.apply(this, arguments);
    }

});
