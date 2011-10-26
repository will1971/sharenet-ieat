/**
 * 标题栏，始终显示在页面顶端，使用全黑色背景，与Ipad的标题栏融为一体。
 * 提供各种功能的入口，包括：已点菜浏览，调出快速浏览Panel，TODO： 
 */
SH.HeadBar = Ext.extend(Ext.Toolbar, {
	height : '50px',
	dock : 'top',
	id : 'headbar',
	defaults : {
		ui : 'dark'
	},
	defaults : {
		iconMask : true
	},
	
	initComponent: function() {
		Ext.apply(this, {
			defaults : {
				iconMask: true,
				ui: 'plain'
			},
    		items: [{
    			xtype : 'button' ,
    			iconCls: 'search' ,
    			text : '选择菜系',
    			html:'&nbsp;&nbsp;&nbsp;',
    			listeners: {
                    scope : this,
                    tap: function(){
            			Ext.dispatch({
                          	controller: ieat.control ,
                            action: 'showOverView'
                          });
                    }
                }	
    		},
			/*	{
				xtype : 'button' ,
				text : '积分赠券' ,
				iconCls: 'arrow_down' ,
				listeners: {
                    scope : this,
                    tap: function(){
                    	Ext.dispatch({
                          	controller: ieat.control ,
                            action: 'showDeals'
                          });
                    }
				}
			},  */
				{
				xtype : 'button' ,
				iconCls: 'arrow_down' ,
				text : '结单' ,
				html:'&nbsp;&nbsp;&nbsp;',
				listeners: {
                    scope : this,
                    tap: function(){
						var form = new Ext.form.FormPanel({
							modal: false,
						    hideOnMaskTap : true,
							floating : true ,
							items : [{
					            xtype: 'fieldset',
					            title: '输入服务员编号',
					            instructions: '请输入服务员编号，确认接单',
					            defaults: {
					                labelWidth: '35%'
					            },
					            items: [{
					                xtype: 'textfield',
					                name: 'name',
					                label: '服务员编号',
					                placeHolder: '服务员编号',
					                autoCapitalize : true,
					                required: true,
					                useClearIcon: true
					            }]
					        }]
						});
						
						form.showBy(this);
                    }
				}
			},{
				xtype : 'button' ,
				text : '开新台',
				html:'&nbsp;&nbsp;&nbsp;',
				iconCls: 'arrow_down' ,
				listeners: {
                    scope : this,
                    tap: function(){
						var form = new Ext.form.FormPanel({
							modal: false,
						    hideOnMaskTap : true,
							floating : true ,
							items : [{
					            xtype: 'fieldset',
					            title: '输入台号',
					            //instructions: '输入新的台号来开始点菜，当前座的点菜信息不会丢失，在以后可以重新输入台号取出',
					            defaults: {
					                labelWidth: '35%'
					            },
					            items: [{
					                xtype: 'textfield',
					                name: 'name',
					                label: '新台号',
					                placeHolder: '新台号',
					                autoCapitalize : true,
					                required: true,
					                useClearIcon: true
					            }, {
					                xtype: 'textfield',
					                name: 'emid',
					                label: '服务员编号',
					                placeHolder: '服务员编号',
					                autoCapitalize : true,
					                required: true,
					                useClearIcon: true
					            },{
					            	xtype: 'button',
					                name: 'ok',
					                text: 'OK',
					                listeners :{
					                	//清空已点菜,  关闭窗口
					                	tap: function(){
					                		//取当前页序号
					                		var pindex = ieat.views.viewpage.getCurrentPageIdx();
					                		
					                		//清除已点菜
											Ext.dispatch({
												controller : ieat.control,
												action : 'cleanOrder',
												pindex : pindex
											});
					                		
	                    	                form.setVisible(false);
					                	}
					                }
					            }]
					        }]
						});
						
						form.showBy(this);
                    }
				}
			} , {xtype : 'spacer'} ,{
				xtype : 'button' ,
				text : '满意度调查' ,
				html:'&nbsp;&nbsp;&nbsp;',
				iconCls: 'team',
				listeners: {
                    scope : this,
                    tap: function(){
						var form = new Ext.form.FormPanel({
							modal: false,
						    hideOnMaskTap : true,
							floating : true ,
							items : [{
					            xtype: 'fieldset',
					            title: '满意度',
					            instructions: '请花几秒钟给我们打个分，谢谢您的时间，我们会基于您的建议改进我们的服务',
					            defaults: {
					                // labelAlign: 'right'
					                labelWidth: '35%'
					            },
					            items: [{
					                xtype: 'textfield',
					                name: 'name',
					                label: '名字或电话',
					                placeHolder: '您的名字或电话号码',
					                autoCapitalize : true,
					                required: true,
					                useClearIcon: true
					            }, {
					                xtype: 'selectfield',
					                name: 'rank',
					                label: '评分',
					                options: [{
					                    text: '满意',
					                    value: 'master'
					                },{
					                    text: '满意',
					                    value: 'master'
					                }, {
					                    text: '很满意',
					                    value: 'journeyman'
					                }, {
					                    text: '不满意',
					                    value: 'apprentice'
					                },{
					                    text: '很不满意',
					                    value: 'apprentice'
					                }]
					            }, {
					                xtype: 'textareafield',
					                name: 'bio',
					                label: '其他'
					            }]
					        }]
						});
						
						form.showBy(this);
                    }
				}
			} , 
		/*		{
    			xtype : 'button' ,
    			text : '详情',
    			iconCls: 'info',
    			listeners: {
                    scope : this,
                    tap: function(){
                        var pindex = ieat.views.viewpage.getCurrentPageIdx();
            			Ext.dispatch({
                          	controller: ieat.control ,
                            action: 'showDetails',
							pindex: pindex
                          });
                    }
                }
    		},   */
    			{
    			xtype : 'button' ,
    			text : '推荐菜' ,
    			html:'&nbsp;&nbsp;&nbsp;',
    			iconCls: 'star',
    			listeners: {
                    scope : this,
                    tap: function(){
                    	if( ieat.suggestion == undefined ){
                    		ieat.suggestion = new SH.SuggestionSheet();
                    	}
                    	ieat.suggestion.show();
                    }
                }
    		},
    		{
				xtype : 'button' ,
				iconCls: 'compose',
				text : '已点菜' , 
				html:'&nbsp;',
				listeners: {
                    scope : this,
                    tap: function(){
                    	Ext.dispatch({
                          	controller: ieat.control ,
                            action: 'showOrderedView'
                          });
                    }
                }	
			}]
        });
    	
    	SH.HeadBar.superclass.initComponent.apply(this, arguments);
	},
	
	udpateOrder : function(count , price ){
		this.items.get(5).setBadge(count) ;
	} 
});

Ext.reg('ieatheadbar', SH.HeadBar);