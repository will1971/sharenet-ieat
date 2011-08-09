/**
 * 定义菜品和页面模型 ,为了提高性能，不使用Sencha Touch的DataStore，而使用 最快速高效的数组和自定义对象
 */
SH.Data = Ext.extend(Object, {
																			// 类别数据
					types : [ '凉菜', '热菜', '酒水', '点心', '特色套餐' ],

					// 每页类别数据
					typesIndex : {
						'凉菜' : [ 1, 2, 3, 4, 5 ],
						'热菜' : [ 5, 6, 7, 8, 9 ],
						'酒水' : [ 9, 10, 11 ],
						'点心' : [ 12, 13, 14 ],
						'特色套餐' : [ 15, 16, 17, 18, 19, 20 ]
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
								image : 'images/p1.jpg',
								snapshot : 'images/p1-small.jpg',
								items : [ {
									name : '翡翠黄瓜',
									image : 'images/p1f1-small.gif',
									desc : '清热解毒   富含维生素   绿白相间   赏心悦目',
									price : 10,
									detail : '黄瓜 木耳 茭白木耳适量',
									hotarea : [ 10, 10, 20, 20 ]
								}, {
									name : '蜜汁卤肉',
									image : 'images/p1f2-small.gif',
									desc : '富含蛋白质  滋阴润燥 补虚养血 美容养颜',
									price : 25,
									detail : '优质猪肉',
									hotarea : [ 10, 10, 20, 20 ]
								} ]
							},{
								image : 'images/p2.jpg',
								snapshot : 'images/p2-small.jpg',
								items : [
										{
											name : '荷叶虾仁',
											image : 'images/p2f1-small.gif',
											desc : '清脆爽口 味鲜色美 荤素兼之 营养丰富',
											price : 35,
											detail : '黄瓜 虾仁 腰果蒜籽等适量'
										},
										{
											name : '冰雪羊肉',
											image : 'images/p2f2-small.gif',
											desc : '羊肉暖胃 帮助消化 滋阴补肾 <br>令人垂涎 尤其适用于体虚胃寒者',
											price : 60,
											detail : '高品质瘦羊肉',
											hotarea : [ 10, 10, 20, 20 ]
										} ]
							},{
								image : 'images/p3.jpg',
								snapshot : 'images/p3-small.jpg',
								cls : 'page',
								items : [
										{
											name : '鸡蛋锅贴',
											image : 'images/p3f1-small.gif',
											desc : '气血双补  滋阴补肾 香脆可口 营养丰富',
											price : 10,
											detail : '猪瘦肉 鸡蛋 小麦面粉 胡萝卜等',
											hotarea : [ 10, 10, 20, 20 ]
										},
										{
											name : '银丝鸡蛋面',
											image : 'images/p3f2-small.gif',
											desc : '汤面暖胃  安神润燥  鲜香清淡  营养丰富',
											price : 15,
											detail : '银丝面 鸡蛋',
											hotarea : [ 10, 10, 20, 20 ]
										},
										{
											name : '海鲜靓汤',
											image : 'images/p3f3-small.gif',
											desc : '富含蛋白质 谷氨酸等人体必须物质  滋阴养胃  明目润肤  美容佳品',
											price : 15,
											detail : '鱿鱼 鲜虾 蛤蜊 三菇（金针菇 香菇 鸡腿菇） 粉丝 白菜 葱白',
											hotarea : [ 10, 10, 20, 20 ]
										} ]
							},{
								image : 'images/p4.jpg',
								snapshot : 'images/p4-small.jpg',
								items : [ {
									name : '吴山贡鹅',
									image : 'images/p4f1-small.gif',
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
								image : 'images/p5.jpg',
								snapshot : 'images/p5-small.jpg',
								cls : 'page',
								items : [ {
									name : '扣肉白馍',
									image : 'images/p5f1-small.gif',
									desc : '甘而不腻 猪肉富含维生素B1 高蛋白质 具补虚养身之功效',
									price : 38,
									detail : '五花肉 白馍',
									controlCls : 'push_1 vpush_2 grid_5 f2'
								}, {
									name : '年糕西兰花',
									image : 'images/p5f2-small.gif',
									desc : '年糕富含蛋白质及人体所需的微量元素 西兰花有防癌抗癌的功效  健脑',
									price : 10,
									detail : '小年糕 西兰花',
									controlCls : 'push_1 vpush_5 grid_6 f2'
								} ]
							},{
								image : 'images/p6.jpg',
								snapshot : 'images/p6-small.jpg',
								items : [ {
									name : '片儿鸭',
									image : 'images/p6f1-small.gif',
									desc : '补虚滋阴 养胃生津 汁液丰富 垂涎欲滴 老少皆宜',
									price : 60,
									detail : '美味烤鸭 黄瓜段 葱白 面皮 花生酱',
									controlCls : 'push_1 vpush_9 f11'
								} ]
							},{
								image : 'images/p7.jpg',
								snapshot : 'images/p7-small.jpg',
								items : [ {
									name : '东坡肉',
									image : 'images/p7-small.jpg',
									desc : '含有丰富的优质蛋白质和必需的脂肪酸 补肾养血 滋阴润燥 肥而不腻',
									price : 38,
									detail : '优质五花肉 西兰花'
								} ]
							},{
								image : 'images/p8.jpg',
								snapshot : 'images/p8-small.jpg',
								items : [
										{
											name : '蜜汁龙虾',
											image : 'images/p8f1-small.gif',
											desc : '补肾壮阳 通乳滋阴 养血固精 化瘀解毒 老少皆宜',
											detail : '澳洲大龙虾'
										},
										{
											name : '滋补牛肚汤',
											image : 'images/p8f2-small.gif',
											desc : '牛肚含蛋白质等对人体有益元素 补益脾胃 补气养血 补虚益精 为一款滋补类靓汤',
											price : 50,
											detail : '牛肚 香茹 西兰花等'
										} ]
							},{
								image : 'images/p9.jpg',
								snapshot : 'images/p9-small.jpg',
								items : [ {
									name : '密汁凤爪',
									image : 'images/p9f1-small.gif',
									desc : '具有软化血管 美容养颜功效  是一款休闲 喝酒上好小菜',
									price : 25,
									detail : '优质鸡爪'
								}, {
									name : '人参乳鸽汤',
									image : 'images/p9f2-small.gif',
									desc : '补气生血 健脾益胃 强心提神 滋补肝肾 为养生滋补之佳品',
									price : 99,
									detail : '东北人参 乳鸽 枸杞'
								} ]
							},{
								image : 'images/p10.jpg',
								snapshot : 'images/p10-small.jpg',
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
								image : 'images/p11.jpg',
								snapshot : 'images/p11-small.jpg',
								cls : 'page',
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
							} ],

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
					 * 初始化所有数据
					 */
					initData : function (){
						
					},
					
					/**
					 * 返回指定页面
					 * @param index
					 * @returns
					 */
					getPage : function (index){
						return pages[index] ;
					}
					
				});
