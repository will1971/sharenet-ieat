//用于对客户初次登陆本系统的问卷调查，看用户是新老顾客。
function createcsPanel(self)
{
	var btn1 = new Ext.Button({
		text: '是的，我是第一次来本餐厅就餐！',
        ui: 'round',
        width:'350px',
        height:'50px',
		cls:'test',
        handler: function() {
            self.mainPanel.setActiveItem(5);
        }
	});
	
	var btn2 = new Ext.Button({
		text: '否，我是老顾客了！',
        ui: 'confirm',
        width:'350px',
        height:'50px',
		cls:'test',
        handler: function() {
            self.mainPanel.setActiveItem(1);
        }
	});
	
	var csPanel = new Ext.Panel({
		    cls:'csPanel',
		    layout: {
		    type: 'vbox',
	        pack: 'center',
	        align: 'center'
		    },
		    height : '1000px',
		    
		    items:[{
		    	
		    	html: '<p><font style=font-size:24px face="方正隶书简体">欢迎光临本餐厅您是否首次光临本店？</font></p>',
	            cls: 'welcome'
		    	
		    },
		    btn1,btn2
		    ]
	});
	
	return csPanel;
}