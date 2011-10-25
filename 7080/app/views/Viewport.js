Ext.ns("SH");

SH.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    
    initComponent: function() {

    	//put instances of cards into viewport
    	Ext.apply(this, {
            items: [
               ieat.views.cover , 
               ieat.views.viewpage
            ]
        });
    	
    	SH.Viewport.superclass.initComponent.apply(this, arguments);
    }

});
