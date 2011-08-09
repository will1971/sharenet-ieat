/**
 * 快速页面预览，提供对多个页面的快速预览，从Pad下方滑出，可以快速拉动。
 * 拉到某个页面后，标题栏中显示该页面的文字介绍。
 */
Ext.ns("SH");

SH.OverviewSheet = Ext.extend(Ext.Sheet, {
	height : '500px',
	dock : 'buttom',
	cls : 'overview',
    hideOnMaskTap : true,
	modal: true,
	stretchX: true,
	scroll : 'horizontal',
	layout : 'fit',
	
	initComponent: function() {
		Ext.apply(this, {
			// head bar
        	dockedItems:[{
    			html : "预览区Head"
    		}],
    		items: [{
    			xtype : 'tabpanel' ,
    		    tabBar: {
    		        dock: 'bottom',
    		        ui: 'light',
    		        layout: {
    		            pack: 'center'
    		        }
    		    },
    		    cardSwitchAnimation: {
    		        type: 'slide',
    		        cover: true
    		    },
    		    defaults: {
    		        scroll: 'vertical'
    		    },
    		    items: [{
    		        title: 'About',
    		        html: '<p>Docking tabs to the bottom will automatically change their style. The tabs below are ui="light", though the standard type is dark. Badges (like the 4 below) can be added by setting <code>badgeText</code> when creating a tab/card or by using <code>setBadge()</code> on the tab later.</p>',
    		        iconCls: 'info',
    		        cls: 'card card1'
    		    },
    		    {
    		        title: 'Favorites',
    		        html: 'Favorites Card',
    		        iconCls: 'favorites',
    		        cls: 'card card2',
    		        badgeText: '4'
    		    },
    		    {
    		        title: 'Downloads',
    		        id: 'tab3',
    		        html: 'Downloads Card',
    		        badgeText: 'Text can go here too, but it will be cut off if it is too long.',
    		        cls: 'card card3',
    		        iconCls: 'download'
    		    },
    		    {
    		        title: 'Settings',
    		        html: 'Settings Card',
    		        cls: 'card card4',
    		        iconCls: 'settings'
    		    },
    		    {
    		        title: 'User',
    		        html: 'User Card',
    		        cls: 'card card5',
    		        iconCls: 'user'
    		    }]
    		}]
        });
    	
    	SH.OverviewSheet.superclass.initComponent.apply(this, arguments);
	}
});