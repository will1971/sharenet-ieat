/**
 * 定义菜品和页面模型 ,为了提高性能，不使用Sencha Touch的DataStore，而使用 最快速高效的数组和自定义对象
 */
SH.Data = Ext.extend(Object, {
																			// 类别数据
					types : [ '特色徽菜', '精品凉菜', '鲜美肉类', '海鲜', '特色主食','蔬菜' ],

					// 每页类别数据
					typesIndex : {
						'特色徽菜' : [ 0 , 1, 2, 3, 4],
						'精品凉菜' : [ 5, 6, 7, 8 ],
						'鲜美肉类' : [ 9, 10, 11, 12, 13],
						'海鲜' : [ 14 , 15 ],
						'特色主食' : [ 16, 17, 18 ],
						'蔬菜': [19]
					},
					
					//在initData()函数中对typePages数据进行初始化
					typePages : {
						'特色徽菜' : [], 
						'精品凉菜' : [], 
						'鲜美肉类' : [], 
						'海鲜' :[] , 
						'特色主食' : [],
						'蔬菜' : [] 
					},

					// 封面，封底数据
					covers : [{
								image : 'images/p0-1.jpg',
								cls : 'cover-page',
								html : '<div id="AN-sObj-stage" class="push_5 vpush_2 grid_2"><div class="AN-Object" id="AN-sObj-1" style="-webkit-transform: scale3d(1, 1, 1); opacity: 1; -webkit-animation-name: AN-ani-2; -webkit-animation-duration: 2s; "><div id="AN-sObj-val-1"><img src="images/lou.png"></div></div><div class="AN-Object" id="AN-sObj-2" style="-webkit-transform: scale3d(1, 1, 1); opacity: 1; -webkit-animation-name: AN-ani-1; -webkit-animation-duration: 1.5s; "><div id="AN-sObj-val-2"><img src="images/qing.png"></div></div><div class="AN-Object" id="AN-sObj-3" style="-webkit-transform: scale3d(1, 1, 1); opacity: 1; -webkit-animation-name: AN-ani-0; -webkit-animation-duration: 0.99s; "><div id="AN-sObj-val-3"><img src="images/tong.png"></div></div></div>'
							},

							/**
							 * 封底
							 */
							{
								image : 'images/p0-2.jpg',
								cls : 'cover-page',
								html : ""
							}],

					// 页面数据，指定任何一个菜都需要给出 [页面index , 菜品index]
					pages : [{
								image : 'images/p0w.jpg',
								snapshot : 'images/p0ws.jpg',
								items : [ {
									name : '特色菜',
									image : 'images/p11f1-small.gif',
									desc : '馥郁芳香 口感绵延持久 乃节日庆典 必备良酒',
									price : 680,
									detail : ''
								}]
							},{
								image : 'images/p1w.jpg',
								snapshot : 'images/p1ws.jpg',
								items : [ {
									name : '翡翠黄瓜',
									image : 'images/p1f1.png',
									desc : '清热解毒   富含维生素   绿白相间   赏心悦目',
									price : 10,
									detail : '黄瓜 木耳 茭白木耳适量',
									hotarea : [ 10, 10, 20, 20 ]
								}, {
									name : '蜜汁卤肉',
									image : 'images/p1f1.png',
									desc : '富含蛋白质  滋阴润燥 补虚养血 美容养颜',
									price : 25,
									detail : '优质猪肉',
									hotarea : [ 10, 10, 200, 200 ]
								} ]
							},{
								image : 'images/p2w.jpg',
								snapshot : 'images/p2ws.jpg',
								items : [
										{
											name : '荷叶虾仁',
											image : 'images/p1f1.png',
											desc : '清脆爽口 味鲜色美 荤素兼之 营养丰富',
											price : 35,
											detail : '黄瓜 虾仁 腰果蒜籽等适量'
										},
										{
											name : '冰雪羊肉',
											image : 'images/p1f1.png',
											desc : '羊肉暖胃 帮助消化 滋阴补肾 <br>令人垂涎 尤其适用于体虚胃寒者',
											price : 60,
											detail : '高品质瘦羊肉',
											hotarea : [ 10, 10, 20, 20 ]
										} ]
							},{
								image : 'images/p3w.jpg',
								snapshot : 'images/p3ws.jpg',
								cls : 'page',
								items : [
										{
											name : '鸡蛋锅贴',
											image : 'images/p1f1.png',
											desc : '气血双补  滋阴补肾 香脆可口 营养丰富',
											price : 10,
											detail : '猪瘦肉 鸡蛋 小麦面粉 胡萝卜等',
											hotarea : [ 10, 10, 20, 20 ]
										},
										{
											name : '银丝鸡蛋面',
											image : 'images/p1f1.png',
											desc : '汤面暖胃  安神润燥  鲜香清淡  营养丰富',
											price : 15,
											detail : '银丝面 鸡蛋',
											hotarea : [ 10, 10, 20, 20 ]
										},
										{
											name : '海鲜靓汤',
											image : 'images/p1f1.png',
											desc : '富含蛋白质 谷氨酸等人体必须物质  滋阴养胃  明目润肤  美容佳品',
											price : 15,
											detail : '鱿鱼 鲜虾 蛤蜊 三菇（金针菇 香菇 鸡腿菇） 粉丝 白菜 葱白',
											hotarea : [ 10, 10, 20, 20 ]
										} ]
							},{
								image : 'images/p4w.jpg',
								snapshot : 'images/p4ws.jpg',
								items : [ {
									name : '吴山贡鹅',
									image : 'images/p1f1.png',
									desc : '富含蛋白质 矿物质和维生素E 暖胃生津 补虚益气 ',
									price : 55,
									detail : '优质白鹅',
									hotarea : [ 10, 10, 20, 20 ]
								}, {
									name : '花式豆腐皮',
									image : 'images/p4f2-small.gif',
									desc : '含有丰富的优质蛋白 生津润燥 清热解毒',
									price : 15,
									detail : '薄豆腐皮',
									hotarea : [ 10, 10, 20, 20 ]
								} ]
							},{
								image : 'images/p5w.jpg',
								snapshot : 'images/p5ws.jpg',
								cls : 'page',
								items : [ {
									name : '扣肉白馍',
									image : 'images/p1f1.png',
									desc : '甘而不腻 猪肉富含维生素B1 高蛋白质 具补虚养身之功效',
									price : 38,
									detail : '五花肉 白馍'
								}, {
									name : '年糕西兰花',
									image : 'images/p1f1.png',
									desc : '年糕富含蛋白质及人体所需的微量元素 西兰花有防癌抗癌的功效  健脑',
									price : 10,
									detail : '小年糕 西兰花'
								} ]
							},{
								image : 'images/p6w.jpg',
								snapshot : 'images/p6ws.jpg',
								items : [ {
									name : '片儿鸭',
									image : 'images/p1f1.png',
									desc : '补虚滋阴 养胃生津 汁液丰富 垂涎欲滴 老少皆宜',
									price : 60,
									detail : '美味烤鸭 黄瓜段 葱白 面皮 花生酱'
								} ]
							},{
								image : 'images/p7w.jpg',
								snapshot : 'images/p7ws.jpg',
								items : [ {
									name : '东坡肉',
									image : 'images/p1f1.png',
									desc : '含有丰富的优质蛋白质和必需的脂肪酸 补肾养血 滋阴润燥 肥而不腻',
									price : 38,
									detail : '优质五花肉 西兰花'
								} ]
							},{
								image : 'images/p8w.jpg',
								snapshot : 'images/p8ws.jpg',
								items : [
										{
											name : '蜜汁龙虾',
											image : 'images/p1f1.png',
											desc : '补肾壮阳 通乳滋阴 养血固精 化瘀解毒 老少皆宜',
											detail : '澳洲大龙虾'
										},
										{
											name : '滋补牛肚汤',
											image : 'images/p1f1.png',
											desc : '牛肚含蛋白质等对人体有益元素 补益脾胃 补气养血 补虚益精 为一款滋补类靓汤',
											price : 50,
											detail : '牛肚 香茹 西兰花等'
										} ]
							},{
								image : 'images/p9w.jpg',
								snapshot : 'images/p9ws.jpg',
								items : [ {
									name : '密汁凤爪',
									image : 'images/p1f1.png',
									desc : '具有软化血管 美容养颜功效  是一款休闲 喝酒上好小菜',
									price : 25,
									detail : '优质鸡爪'
								}, {
									name : '人参乳鸽汤',
									image : 'images/p1f1.png',
									desc : '补气生血 健脾益胃 强心提神 滋补肝肾 为养生滋补之佳品',
									price : 99,
									detail : '东北人参 乳鸽 枸杞'
								} ]
							},{
								image : 'images/p10w.jpg',
								snapshot : 'images/p10ws.jpg',
								items : [
										{
											name : '翡翠黑米糕',
											image : 'images/p10f2-small.gif',
											desc : '黑米含蛋白质及多种人体所需微量元素 益气补血 润肺止咳 暖胃健脾 滋补肝肾 营养丰富',
											price : 30,
											detail : '黑米 新鲜豌豆'
										},
										{
											name : '美味肉粽',
											image : 'images/p10f1-small.gif',
											desc : '补中益气 健脾养胃 滋阴润燥 为中国特色美食',
											price : 50,
											detail : '糯米 鲜瘦肉'
										} ]
							}, {
								image : 'images/p11w.jpg',
								snapshot : 'images/p11ws.jpg',
								items : [ {
									name : '法国香槟',
									image : 'images/p11f1-small.gif',
									desc : '馥郁芳香 口感绵延持久 乃节日庆典 必备良酒',
									price : 680,
									detail : ''
								}, {
									name : '手调果酒',
									image : 'images/p11f2-small.gif',
									desc : '果酒有利于调节 情绪保持身材  有益健康 ',
									price : 80,
									detail : ''
								} ]
							} , {
								image : 'images/p12w.jpg',
								snapshot : 'images/p12ws.jpg',
								items : [ {
									name : '特色菜',
									image : 'images/p11f1-small.gif',
									desc : '馥郁芳香 口感绵延持久 乃节日庆典 必备良酒',
									price : 680,
									detail : ''
								}]
							}, {
								image : 'images/p13w.jpg',
								snapshot : 'images/p13ws.jpg',
								items : [ {
									name : '特色菜',
									image : 'images/p11f1-small.gif',
									desc : '馥郁芳香 口感绵延持久 乃节日庆典 必备良酒',
									price : 680,
									detail : ''
								}]
							}, {
								image : 'images/p14w.jpg',
								snapshot : 'images/p14ws.jpg',
								items : [ {
									name : '特色菜',
									image : 'images/p11f1-small.gif',
									desc : '馥郁芳香 口感绵延持久 乃节日庆典 必备良酒',
									price : 680,
									detail : ''
								}]
							}, {
								image : 'images/p15w.jpg',
								snapshot : 'images/p15ws.jpg',
								items : [ {
									name : '特色菜',
									image : 'images/p11f1-small.gif',
									desc : '馥郁芳香 口感绵延持久 乃节日庆典 必备良酒',
									price : 680,
									detail : ''
								}]
							}, {
								image : 'images/p16w.jpg',
								snapshot : 'images/p16ws.jpg',
								items : [ {
									name : '特色菜',
									image : 'images/p11f1-small.gif',
									desc : '馥郁芳香 口感绵延持久 乃节日庆典 必备良酒',
									price : 680,
									detail : ''
								}]
							}, {
								image : 'images/p17w.jpg',
								snapshot : 'images/p17ws.jpg',
								items : [ {
									name : '特色菜',
									image : 'images/p11f1-small.gif',
									desc : '馥郁芳香 口感绵延持久 乃节日庆典 必备良酒',
									price : 680,
									detail : ''
								}]
							}, {
								image : 'images/p18w.jpg',
								snapshot : 'images/p18ws.jpg',
								items : [ {
									name : '特色菜',
									image : 'images/p11f1-small.gif',
									desc : '馥郁芳香 口感绵延持久 乃节日庆典 必备良酒',
									price : 680,
									detail : ''
								}]
							}, {
								image : 'images/p19w.jpg',
								snapshot : 'images/p19ws.jpg',
								items : [ {
									name : '特色菜',
									image : 'images/p11f1-small.gif',
									desc : '馥郁芳香 口感绵延持久 乃节日庆典 必备良酒',
									price : 680,
									detail : ''
								}]
							},
							{
								image : 'images/p20w.jpg',
								snapshot : 'images/p20ws.jpg',
								items : [ {
									name : '特色菜',
									image : 'images/p11f1-small.gif',
									desc : '馥郁芳香 口感绵延持久 乃节日庆典 必备良酒',
									price : 680,
									detail : ''
								}]
							} 
							
							 ],

					//推荐菜系
					suggestionIndex : [ [1,1] , [ 1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ] ] ,
					
					//推荐菜数据，在initData()函数中初始化
					suggestionData : [],
							
					//套餐数据
					packageData : [ {
						desc : '情侣套餐(188元)',
						price : 188,
						image : 'images/pack1.jpg',
						items : [ [ 1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ] ]
					}, {
						desc : '家常套餐(188元)',
						price : 188,
						image : 'images/pack2.jpg',
						items : [ [ 1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ] ]
					}, {
						desc : '豪华套餐(1888元)',
						price : 1888,
						image : 'images/pack3.jpg',
						items : [ [ 1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ] ]
					} ] ,
					
					
					/**
					 * 初始化所有数据，在这个函数中处理原始数据，
					 * 需要的话可以编制二次索引和HaspMap，提高查询速度。
					 */
					initData : function (){
						//初始化页面数据
						for(var i=0; i<=this.pages.length - 1 ; i++){
							this.pages[i].index = i ;
							var items = this.pages[i].items ;
							for(var j =0 ; j<= items.length -1 ; j++){
								items[j].pindex = i ;
								items[j].index = j ;
							}
						}
						//初始化类别数据
						for(var i=0; i<= this.types.length - 1 ; i++){
							var pageIndexArrayOfType = this.typesIndex[this.types[i]] ;
							var pagesOfType = this.typePages[this.types[i]];
							
							for(var j = 0 ; j<= pageIndexArrayOfType.length -1 ; j++){
								pagesOfType.push( this.getPage( pageIndexArrayOfType[j] ));
							}
						}
						//初始化推荐菜数据
						for(var i=0; i<= this.suggestionIndex.length -1 ; i++){
							var itemIndex = this.suggestionIndex[i] ;
							this.suggestionData.push( this.getItems( itemIndex[0], itemIndex[1])) ;
						}
						
					},
					
					/**
					 * 返回所有的类型
					 * @returns
					 */
					getTypes : function(){
						return this.types ;
					},
					
					/**
					 * 返回每种类型对应的页面列表，用户构建该类型对应的OverView
					 * @param type
					 * @returns
					 */
					getPagesOfType : function(type){
						return this.typePages[type] ;
					},
					
					/**
					 * 返回指定页面
					 * @param index
					 * @returns
					 */
					getPage : function (index){
						if(index >= 0 && index<= this.pages.length -1 ){
							return this.pages[index] ;
						}else{ return null ;} 
					},
					
					getPages : function(){
						return this.pages ;
					},
					
					
					/**
					 * 返回指定的菜
					 * @param pageIndex 页面索引
					 * @param itemIndex 在该页面中的菜的索引
					 * @returns
					 */
					getItems : function(pageIndex ,itemIndex){
						var page = this.getPage(pageIndex);
						if(page != null){
							return page.items[itemIndex] ;
						}
						
						return null ;
					},
					
					/**
					 * 返回推荐菜
					 */
					getSuggestion : function(){
						return this.suggestionData ;
					}
					
				});
