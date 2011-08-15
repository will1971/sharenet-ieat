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
						'蔬菜': [19,20]
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
									name : '胡适一品锅',
									image : 'images/p0f1.png',
									desc : '清爽可口，口感醇厚',
									price : 60,
									detail : '肉类、豆制品等',
									hotarea : [ 125, 25, 455, 275]
								},{
									name : '爽芹手撕鸡',
									image : 'images/p0f2.png',
									desc : '清爽可口，口感醇厚',
									price : 50,
									detail : '肉类、豆制品等',
									hotarea : [ 350, 300, 675, 530 ]
							    },{
								    name : '巧味鱼头',
									image : 'images/p0f3.png',
									desc : '清爽可口，口感醇厚',
									price : 70,
									detail : '肉类、豆制品等',
									hotarea : [ 685, 295, 995, 530 ]
									} ]
							},{
								image : 'images/p1w.jpg',
								snapshot : 'images/p1ws.jpg',
								items : [ {
									name : '烧汁煎让杏苞菇',
									image : 'images/p1f1.png',
									desc : '鲜嫩爽口，营养丰富',
									price : 60,
									detail : '肉类、鲜菇等',
									hotarea : [ 25, 25, 415, 310 ]
								}, {
									name : '香辣龙井茶皇虾',
									image : 'images/p1f2.png',
									desc : '味道鲜美，肉质酥软',
									price : 60,
									detail : '鲜活大虾、葱等',
									hotarea : [ 25, 330, 415, 615 ]
								},{
									name : '刘安点丹',
									image : 'images/p1f3.png',
									desc : '粒粒滑爽，口感纯正',
									price : 60,
									detail : '葡萄糖酸、豆浆 <br>榨菜、花生米、辣酱等',
									hotarea : [ 725, 310, 995, 500 ]
								} ]
							},{
								image : 'images/p2w.jpg',
								snapshot : 'images/p2ws.jpg',
								items : [
										{
											name : '鲜露汁淋海蜇花',
											image : 'images/p2f1.png',
											desc : '清脆可口，滑嫩细爽，营养丰富，老少咸宜',
											price : 60,
											detail : '海蜇皮、萝卜丝',
											hotarea : [ 210, 35, 605, 315 ]
										},
										{
											name : '西关私房羊腩',
											image : 'images/p2f2.png',
											desc : '红润油亮，口感浓厚',
											price : 60,
											detail : '羊腩、高汤等',
											hotarea : [ 565, 360, 965, 645 ]
										} ]
							},{
								image : 'images/p3w.jpg',
								snapshot : 'images/p3ws.jpg',
								cls : 'page',
								items : [
										{
											name : '青椒闷肚条',
											image : 'images/p3f1.png',
											desc : '清爽滑嫩，口感爽韧',
											price : 37,
											detail : '牛肚、青椒等',
											hotarea : [ 530, 85, 900, 355 ]
										},
										{
											name : '凤城炭烧双拼',
											image : 'images/p3f2.png',
											desc : '营养丰富，口感鲜美',
											price : 50,
											detail : '肉类、葱、姜等',
											hotarea : [ 30, 390, 445, 685 ]
										} ]
							},{
								image : 'images/p4w.jpg',
								snapshot : 'images/p4ws.jpg',
								items : [ {
									name : '青芥爽横利',
									image : 'images/p4f1.png',
									desc : '脆嫩味浓，口感浓厚',
									price : 50,
									detail : '青芥、豆制品等',
									hotarea : [ 25, 25, 420, 310 ]
								}, {
									name : '鸡腿菇拼环虾',
									image : 'images/p4f2.png',
									desc : '鲜爽可口，香味不腻',
									price : 30,
									detail : '鸡腿、鲜虾等',
									hotarea : [ 565, 25, 865, 240 ]
								},{
									name : '青芥牛仔骨',
									image : 'images/p4f3.png',
									desc : '外香里嫩，口感独特',
									price : 30,
									detail : '排骨、胡萝卜等',
									hotarea : [ 710, 460, 975, 650 ]
								  } ]
							},{
								image : 'images/p5w.jpg',
								snapshot : 'images/p5ws.jpg',
								cls : 'page',
								items : [ {
									name : '水阳三宝',
									image : 'images/p5f1.png',
									desc : '喷香四溢，健牙生津',
									price : 30,
									detail : '鸭翅、鸭爪、香干',
									hotarea : [ 405, 25, 695, 310 ]
								}, {
									name : '五谷丰登',
									image : 'images/p5f2.png',
									desc : '色泽艳丽，香甜可口',
									price : 30,
									detail : '紫薯、南瓜、玉米、毛豆、菱角',
									hotarea : [ 40, 325, 315, 525 ]
								},{
									name : '田园煲时蔬',
									image : 'images/p5f3.png',
									desc : '清香爽口，滋味十足',
									price : 30,
									detail : '多种时令蔬菜搭配',
									hotarea : [ 710, 325, 985, 525 ]
								  } ]
							},{
								image : 'images/p6w.jpg',
								snapshot : 'images/p6ws.jpg',
								items : [ {
									name : '美极茶香鸭舌',
									image : 'images/p6f1.png',
									desc : '色泽美观，鲜爽不腻，入口即化，鲜醇浓香',
									price : 36,
									detail : '鸭舌、料酒等',
									hotarea : [ 165, 35, 585, 335 ]
								},{
									name : '露影双鲜',
									image : 'images/p6f2.png',
									desc : '菜形美观，脆爽可口',
									price : 22,
									detail : '肉类、豆制品等',
									hotarea : [ 565, 380, 975, 675 ]
								  } ]
							},{
								image : 'images/p7w.jpg',
								snapshot : 'images/p7ws.jpg',
								items : [ {
									name : '水晶徽韵',
									image : 'images/p7f1.png',
									desc : '瓜软肉香，汤味清香，减肥美容，色味俱佳',
									price : 45,
									detail : '火腿、冬瓜、高汤',
									hotarea : [ 25, 25, 420, 310 ]
								},{
									name : '鹅肝酱粉丝',
									image : 'images/p7f2.png',
									desc : '鲜美可口，补肝明目，营养丰富，老幼咸宜',
									price : 30,
									detail : '鹅肝酱、粉丝',
									hotarea : [ 565, 30, 865, 240 ]
								},{
									name : '金丝虾球',
									image : 'images/p7f3.png',
									desc : '色泽艳丽，酥脆爽口，鲜香诱人，风味独特',
									price : 30,
									detail : '土豆、鲜虾仁等',
									hotarea : [ 710, 460, 975, 655 ]
								  } ]
							},{
								image : 'images/p8w.jpg',
								snapshot : 'images/p8ws.jpg',
								items : [
										{
											name : '风味卤猪耳',
											image : 'images/p1f1.png',
											desc : '清爽可口，口感浓厚 <br>入口柔软，滋味纯正，清新',
											price : 16,
											detail : '新鲜猪耳、鲜汤 <br>花椒等香料佐料',
											hotarea : [ 555, 50, 985, 320 ]
										},
										{
											name : '吮指鸡翅',
											image : 'images/p1f1.png',
											desc : '喷香入味，果味浓厚，色泽艳丽 <br>风味独特，入口鲜甜，咸淡适宜',
											price : 30,
											detail : '鲜香鸡翅，料酒，鲜汤，油等 <br>八角等香料佐料',
											hotarea : [ 35, 360, 465, 635 ]
										} ]
							},{
								image : 'images/p9w.jpg',
								snapshot : 'images/p9ws.jpg',
								items : [ {
									name : '黄汁烩对虾',
									image : 'images/p9f1.png',
									desc : '个大体肥，色泽鲜亮 <br>肉色晶莹，味道鲜美',
									price : 50,
									detail : '对虾、油等',
									hotarea : [ 115, 30, 505, 310 ]
								 },{
									name : '茶树菇炒爽肉',
									image : 'images/p9f2.png',
									desc : '易嚼易咽，口感柔润 <br>质地脆软，别有风味',
									price : 30,
									detail : '肉类、茶树菇等',
									hotarea : [ 690, 140, 990, 350 ]
								},{ 
								    name : '虫草花螺片',
									image : 'images/p9f3.png',
									desc : '色泽艳丽，鲜香酥软',
									price : 30,
									detail : '螺肉、虫草花等',
									hotarea : [ 290, 500, 550, 690 ]
								   } ]
							},{
								image : 'images/p10w.jpg',
								snapshot : 'images/p10ws.jpg',
								items : [
										{
											name : '滑菇羊柳粒',
											image : 'images/p10f1.png',
											desc : '清嫩可口，油亮味浓',
											price : 55,
											detail : '鲜羊柳、鲜菇、彩椒',
											hotarea : [ 110, 30, 505, 310 ]
										},
										{
											name : '脆骨槐花浦蛋',
											image : 'images/p10f2.png',
											desc : '清香甘甜，口感清爽 <br>清热降火，老少咸宜',
											price : 30,
											detail : '肉类、豆制品等',
											hotarea : [ 640, 160, 940, 370 ]
										},{
											name : '小笼米粉牛肉',
											image : 'images/p10f3.png',
											desc : '肉香质软，风味独特',
											price : 30,
											detail : '牛肉、米粉等',
											hotarea : [ 295, 480, 560, 670 ]
										  } ]
							}, {
								image : 'images/p11w.jpg',
								snapshot : 'images/p11ws.jpg',
								items : [ {
									name : '福菜蹄膀',
									image : 'images/p11f1.png',
									desc : '瘦肉酥而不烂、皮和肥肉糯而不化 <br>入口奇香、口感纯正、回味悠长',
									price : 80,
									detail : '新鲜猪蹄膀、白果、福菜、八角 <br>桂皮、高汤等',
									hotarea : [ 35, 60, 395, 300 ]
								}, {
									name : '果汁煎肉脯',
									image : 'images/p11f2.png',
									desc : '清爽可口，果味浓厚，色泽艳丽 <br>风味独特，入口鲜甜，软化醇美 ',
									price : 60,
									detail : '瘦猪肉、虾片、果汁、鸡蛋 <br>花生油、高汤等',
									hotarea : [ 630, 385, 985, 625 ]
								} ]
							} , {
								image : 'images/p12w.jpg',
								snapshot : 'images/p12ws.jpg',
							    items : [ {
									name : '一品鲍鱼',
									image : 'images/p12f1.png',
									desc : '名贵海珍品，肉质细嫩 <br>营养丰富，清而味浓',
									price : 75,
									detail : '新鲜鲍鱼、油等',
									hotarea : [ 25, 25, 420, 310 ]
								},{
									name : '炕锅麻椒羊排',
									image : 'images/p12f2.png',
									desc : '肥瘦结合，质地松软 <br>色呈焦黄，香嫩可口',
									price : 55,
									detail : '羊排、孜然等',
									hotarea : [ 25, 335, 420, 615 ]
								  },{
									name : '砂锅炖肉',
									image : 'images/p12f3.png',
									desc : '肉软烂而不散，整齐 <br>肉味醇厚浓郁，食而不腻',
									price : 45,
									detail : '五花肉、酒糟等',
									hotarea : [ 725, 310, 995, 505 ]
								    } ]
							}, {
								image : 'images/p13w.jpg',
								snapshot : 'images/p13ws.jpg',
                                items : [ {
									name : '清蒸大闸蟹',
									image : 'images/p13f1.png',
									desc : '香醇爽口，低油低脂 <br>口感细腻，回味无穷',
									price : 79,
									detail : '鲜活大闸蟹、蒜 <br>辣椒、槐盐等',
									hotarea : [ 555, 55, 985, 320 ]
								},{
									name : '四季富贵',
									image : 'images/p13f2.png',
									desc : '爽口不腻，味道醇厚，色泽艳丽 <br>风味独特，入口香醇，咸淡适宜',
									price : 15,
									detail : '鸭肉、卤料、鸭蛋、海蜇等 <br>八角等香料佐料',
									hotarea : [ 35, 365, 470, 635 ]
									} ]
							}, {
								image : 'images/p14w.jpg',
								snapshot : 'images/p14ws.jpg',
								items : [ {
									name : '清蒸甲鱼',
									image : 'images/p14f1.png',
									desc : '肉质鲜美，营养丰富 <br>滋补佳品',
									price : 60,
									detail : '甲鱼、绍兴酒等',
									hotarea : [ 115, 40, 500, 320]
								},{
									name : '香蒸荷叶肉',
									image : 'images/p14f2.png',
									desc : '荷香袭人，肉软酥烂 <br>鲜香味没，营养丰富',
									price : 23,
									detail : '荷叶、肉类等',
									hotarea : [ 25, 350, 345, 585 ]
								},{
									name : '蜜汁南瓜',
									image : 'images/p14f3.png',
									desc : '香甜宜人，口感绵柔',
									price : 20,
									detail : '优质南瓜、冰糖、蜜糖等',
									hotarea : [ 680, 295, 995, 525 ]
								    } ]
							}, {
								image : 'images/p15w.jpg',
								snapshot : 'images/p15ws.jpg',
								items : [ {
									name : '豆馅糯米三明治',
									image : 'images/p15f1.png',
									desc : '色泽金黄油亮，入口柔滑细嫩 <br>柔软粘稠，齿颊留香，回味甘甜',
									price : 23,
									detail : '精致糯米、白糖、猪油、精盐 <br>甜栗子、豆沙等',
									hotarea : [ 40, 60, 400, 300 ]
								},{
								    name : '竹蒸米粉肉',
									image : 'images/p15f2.png',
									desc : '竹香浓郁，肉酥爽口，滋味丰富 <br>嫩而不糜，密封油润，粉糯而清香',
									price : 60,
									detail : '带皮花肉、姜、莲藕、葱丝 <br>花生油、高汤等',
									hotarea : [ 505, 385, 865, 620 ]
									}]
							}, {
								image : 'images/p16w.jpg',
								snapshot : 'images/p16ws.jpg',
								items : [ {
									name : '红烧狮子头',
									image : 'images/p16f1.png',
									desc : '肉红润油亮，肥瘦适宜 <br>肉香四溢，醇香味浓',
									price : 40,
									detail : '猪肉馅、胡萝卜等',
									hotarea : [ 205, 25, 600, 310 ]
								},{
									name : '脆口三鲜丝',
									image : 'images/p16f2.png',
									desc : '肥瘦结合，质地松软 <br>色呈焦黄，香嫩可口',
									price : 55,
									detail : '胡萝卜、黄瓜、红甜椒',
									hotarea : [ 25, 330, 415, 615 ]
								},{
									name : '香酥盐焦虾',
									image : 'images/p16f3.png',
									desc : '外焦香咸辣，肉软嫩鲜 <br>酥嫩金黄',
									price : 45,
									detail : '鲜河虾、植物油 <br>绍兴酒、大葱等',
									hotarea : [ 725, 310, 995, 505 ]
								  } ]
							}, {
								image : 'images/p17w.jpg',
								snapshot : 'images/p17ws.jpg',
								items : [ {
									name : '香酥春卷',
									image : 'images/p17f1.png',
									desc : '皮薄酥脆，馅心香软 <br>口感极佳，回味无穷',
									price : 18,
									detail : '春卷皮、花生酱 <br>蛋清、油、盐等',
									hotarea : [ 565, 25, 995, 295 ]
								},{
									name : '葱香鸡蛋羹',
									image : 'images/p17f2.png',
									desc : '爽口不腻，味道醇厚，色泽艳丽 <br>营养丰富，老少咸宜，味美质嫩',
									price : 28,
									detail : '鸡蛋、盐、水、葱花、油 <br>水等辅料',
									hotarea : [ 130, 360, 560, 635 ]
									} ]
							}, {
								image : 'images/p18w.jpg',
								snapshot : 'images/p18ws.jpg',
								items : [ {
									name : '翡翠笋芯',
									image : 'images/p18f1.png',
									desc : '色香味俱全，清新爽口，清淡 <br>颜色美观，齿颊留香，老少咸宜',
									price : 7,
									detail : '香醋、白糖、鸡精、精盐 <br>香油、辣油等',
									hotarea : [ 35, 60, 395, 295 ]
								},{
									name : '金玉满堂',
									image : 'images/p18f2.png',
									desc : '香味浓郁，口感爽滑，滋味丰富 <br>鲜甜可口，老少咸宜',
									price : 60,
									detail : '红椒、黄椒、盐、黄瓜、葱末 <br>姜丝、料酒、淀粉、香油、胡萝卜',
									hotarea : [ 625, 385, 985, 620 ]
									} ]
							}, {
								image : 'images/p19w.jpg',
								snapshot : 'images/p19ws.jpg',
								items : [ {
									name : '脆嫩豌豆',
									image : 'images/p19f1.png',
									desc : '色泽鲜脆，圆润，入口柔嫩 <br>可煮可煎，齿颊留香，回味甘甜',
									price : 10,
									detail : '豌豆',
									hotarea : [ 105, 60, 465, 295 ]
								},{
									name : '黄瓜紫茄',
									image : 'images/p19f2.png',
									desc : '清香爽嫩，鲜脆爽口，滋味丰富 <br>多种配合，凉拌烩炒，变化万千',
									price : 7,
									detail : '黄瓜、紫茄',
									hotarea : [ 615, 385, 970, 615 ]
									} ]
							},
							{
								image : 'images/p20w.jpg',
								snapshot : 'images/p20ws.jpg',
								items : [ {
									name : '梅菜扣肉',
									image : 'images/p20f1.png',
									desc : '酱红油亮，肉滑醇香 <br>汤粘稠鲜美，柔烂醇香',
									price : 27,
									detail : '五花肉、梅干菜',
									hotarea : [ 25, 25, 405, 300 ]
								},{
									name : '秘制东坡肉',
									image : 'images/p20f2.png',
									desc : '薄皮肉嫩，色泽红亮 <br>味醇汁浓，酥烂不腻',
									price : 65,
									detail : '五花肉、绍兴酒等',
									hotarea : [ 25, 350, 340, 585 ]
							   },{
								    name : '脆皮乳鸽',
									image : 'images/p20f3.png',
									desc : '乳鸽鲜美，皮脆肉嫩',
									price : 68,
									detail : '乳鸽、油、醋等',
									hotarea : [ 680, 285, 995, 515 ]
								  } ]
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
					},
					
					/**
					 * 取得指定用户的点菜信息
					 */
					getCustomeOrder : function(cid){
						if( ! this.orders[cid] ){
							this.orders[cid] = [] ;
						}
						return this.orders[cid] ;
					}
					
				});
