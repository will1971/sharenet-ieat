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
									imagen : 'images/p0n1.png',
									descn :'清爽可口，口感醇厚',
									desc : '本菜发源于安徽省绩溪县上庄，又称绩溪一品锅，农家菜，属于徽菜；菜品咸鲜微辣，清爽可口，口感醇厚；现在在绩溪胡适一品锅已经成为徽菜的代表菜品；文人梁实秋先生品尝了“一品锅”之后，对此菜大加称赞，曾撰文做了详尽描述：”一只大铁锅，口径差不多二尺，热腾腾地端上来，里面还在滚沸，一层鸡、一层鸭、一层肉、一层油豆腐，点缀着一些蛋饺，紧底下是萝卜、青菜，味道好极”。',
									price : 60,
									detail : '肉类、豆制品等',
									hotarea : [ 125, 25, 455, 275]
								},{
									name : '爽芹手撕鸡',
									image : 'images/p0f2.png',
									imagen : 'images/p0n2.png',
									descn : '清爽可口，口感醇厚',
									desc : '手撕鸡采用放养的柴鸡，柴鸡肉较富弹性，喜食鸡皮者为免油腻，可将鸡冰冻后再撕，撕除鸡皮则只需将鸡放凉即可。对病后或产后虚弱，腰膝酸痛、气血亏虚等有极好的疗效，还对泄泻下痢、水肿、阴虚咳喘、肾虚耳聋、小便频繁等症有食疗效果。含有对人体生长发肓有重要作用的磷脂类，是中国人膳食结构中脂肪和磷脂的重要来源之一。',
									price : 50,
									detail : '肉类、豆制品等',
									hotarea : [ 350, 300, 675, 530 ]
							    },{
								    name : '巧味鱼头',
									image : 'images/p0f3.png',
									imagen : 'images/p0n3.png',
									descn : '清爽可口，口感醇厚',
									desc : '鱼头营养高、口味好，并对降低血脂、健脑及延缓衰老有好处；鲜香滑嫩，回味无穷。是绝好的滋补品，尤其适合秋冬食用；汤奶白、醇鱼鲜嫩、含蛋白质及脂肪、钙等多种维生素。鱼头温中意气、暖胃补虚，多食者可滋养肌肤，延年益寿。巧味鱼头是一道好菜，并非只是指它的味道好是纯粹的绿色食品。',
									price : 70,
									detail : '肉类、豆制品等',
									hotarea : [ 685, 295, 985, 530 ]
									} ]
							},{
								image : 'images/p1w.jpg',
								snapshot : 'images/p1ws.jpg',
								items : [ {
									name : '烧汁煎让杏苞菇',
									image : 'images/p1f1.png',
									imagen : 'images/p1n1.png',
									descn : '鲜嫩爽口，营养丰富',
									desc : '杏鲍菇营养丰富，富含蛋白质、碳水化合物、维生素及钙、镁、铜、锌等矿物质，可以提高人体免疫功能，对人体具有抗癌、降血脂、润肠胃以及美容等作用。',
									price : 60,
									detail : '肉类、鲜菇等',
									hotarea : [ 25, 25, 415, 310 ]
								}, {
									name : '香辣龙井茶皇虾',
									image : 'images/p1f2.png',
									imagen : 'images/p1n2.png',
									descn : '味道鲜美，肉质酥软',
									desc : '茶皇虾又名基围虾，营养丰富，其肉质松软，易消化，对身体虚弱以及病后需要调养的人是极好的食物；虾中含有丰富的镁，能很好的保护心血管系统，它可减少血液中胆固醇含量，防止动脉硬化，同时还能扩张冠状动脉，有利于预防高血压及心肌梗死；虾肉还有补肾壮阳，通乳抗毒、养血固精、化瘀解毒、益气滋阳、通络止痛、开胃化痰等功效。',
									price : 60,
									detail : '鲜活大虾、葱等',
									hotarea : [ 25, 330, 415, 615 ]
								},{
									name : '刘安点丹',
									image : 'images/p1f3.png',
									imagen : 'images/p1n3.png',
									descn : '粒粒滑爽，口感纯正',
									desc : '用豆浆倒入透明的碗中，两分钟后即可凝结豆腐；称这是世上最鲜嫩的豆腐，豆腐形貌细腻而光滑，美味非同寻常；粒粒滑爽，口感纯正，滑嫩细腻，酱鲜甜润。',
									price : 60,
									detail : '葡萄糖酸、豆浆 <br>榨菜、花生米、辣酱等',
									hotarea : [ 725, 310, 985, 500 ]
								} ]
							},{
								image : 'images/p2w.jpg',
								snapshot : 'images/p2ws.jpg',
								items : [
										{
											name : '鲜露汁淋海蜇花',
											image : 'images/p2f1.png',
											imagen : 'images/p2n1.png',
											descn : '清爽可口，滑嫩细爽，营养丰富，老少咸宜',
											desc : '海蜇凉拌后，色泽黄亮、咀嚼脆嫩、咸中带甜、葱香浓郁、质脆而韧、清凉爽口、清脆可口、滑嫩细爽、营养丰富、老少咸宜，是常用的佐酒佳肴；常吃海蜇可以加速新陈代谢、美容养颜、预防肥胖、消除困乏的作用。',
											price : 60,
											detail : '海蜇皮、萝卜丝',
											hotarea : [ 210, 35, 605, 315 ]
										},
										{
											name : '西关私房羊腩',
											image : 'images/p2f2.png',
											imagen : 'images/p2n2.png',
											descn : '红润油亮，口感浓厚',
											desc : '羊肉有益精气.疗虚劳.补肺肾气.养心肺.解热毒.润皮肤之效；天气渐渐凉了，吃点羊肉温补下，冬天也不怕冷；其中羊腩更是鲜美、清甜腩吃起来滑嫩肥美，香气四溢，红润油亮，口感浓厚。',
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
											imagen : 'images/p3n1.png',
											descn : '清爽滑嫩，口感爽韧',
											desc : '青椒含有丰富的维生素，肚含有蛋白质、脂肪、无机盐类等物质成分，具有补虚损，健脾胃的功效；此菜色泽翠绿，青椒脆嫩，肚片香烂，咸香清鲜，清爽滑嫩，口感爽韧。',
											price : 37,
											detail : '牛肚、青椒等',
											hotarea : [ 530, 85, 900, 355 ]
										},
										{
											name : '凤城炭烧双拼',
											image : 'images/p3f2.png',
											imagen : 'images/p3n2.png',
											descn : '营养丰富，口感鲜美',
											desc : '肉类属于高蛋白、高脂肪类的食品，适当取食和烹调可有补而不燥的功效，并且很容易被人体消化吸收，很适合爱美怕胖的女士食用，且营养丰富，口感鲜美。',
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
									imagen : 'images/p4n1.png',
									descn : '脆嫩味浓，口感浓厚',
									desc : '横利能够增强胰脏内分泌，有益肺、补脾、润躁的功效；此亦是糖尿病患者的食疗佳品，不但便宜，而且味道鲜美，而加入夏枯草即能清肝火、散郁结、对治颈淋巴结的结核、高血压有效，脆嫩味浓，口感浓厚。',
									price : 50,
									detail : '青芥、豆制品等',
									hotarea : [ 25, 25, 420, 310 ]
								}, {
									name : '鸡腿菇拼环虾',
									image : 'images/p4f2.png',
									imagen : 'images/p4n2.png',
									descn : '鲜爽可口，香味不腻',
									desc : '菇体洁白，美观，肉质细腻、营养丰富、味道鲜美、口感极好，经常食用有助于增进食欲、消化、增强人体免疫力，具有很高的营养价值；炒食，炖食，煲汤均久煮不烂，口感滑嫩，清香味美；虾仁口感脆嫩，有补肾壮阳，通乳抗毒、养血固精、化瘀解毒、益气滋阳、通络止痛、开胃化化痰等功效。',
									price : 30,
									detail : '鸡腿、鲜虾等',
									hotarea : [ 565, 25, 865, 240 ]
								},{
									name : '青芥牛仔骨',
									image : 'images/p4f3.png',
									imagen : 'images/p4n3.png',
									descn : '外香里嫩，口感独特',
									desc : '　牛肉含有丰富的营养成分，能增长气力，培补中气，尤其是青壮年，孕妇，进食牛肉，极之有益。以青芥做牛仔骨使其味更加鲜美、促进消化、增进食欲的作用。',
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
									imagen : 'images/p5n1.png',
									descn : '喷香四溢，健牙生津',
									desc :'水阳三宝指的是水阳干子、鸭脚包、鸭翅；鸭脚包采用特殊腌制的鸭脚，每个鸭脚的中间裹以特殊腌制的鸭心，外面用特殊腌制的鸭肠缠绕；蒸熟后香气四溢，咬起来筋斗而生津；水阳鸭翅外观色泽鲜艳，香味独特，肉美而坚，骨酥而松，嚼之喷香，健牙生津，滋阴壮阳。',
									price : 30,
									detail : '鸭翅、鸭爪、香干',
									hotarea : [ 405, 25, 695, 310 ]
								}, {
									name : '五谷丰登',
									image : 'images/p5f2.png',
									imagen : 'images/p5n2.png',
									descn : '色泽艳丽，香甜可口',
									desc : '此菜讲究火候，制出的菜肴注重色、香、味、形，口味上以清、鲜、嫩、脆为主，讲究清而不淡、鲜而不俗、嫩而不生、油而不腻、时令性强，夏秋力求清淡，冬春偏重浓郁。',
									price : 30,
									detail : '紫薯、南瓜、玉米、毛豆、菱角',
									hotarea : [ 40, 325, 315, 525 ]
								},{
									name : '田园煲时蔬',
									image : 'images/p5f3.png',
									imagen : 'images/p5n3.png',
									descn : '清香爽口，滋味十足',
									desc : '本菜肴色、味、形俱佳口味一流、又极其健康、很对胃口、色艳味美、营养丰富、清新又爽口，在医学上有清热、杀菌、降血脂的功效。',
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
									imagen : 'images/p6n1.png',
									descn : '色泽美观，鲜爽不腻，入口即化，鲜醇浓香',
									desc :'将鸭舌风至半干，配以香茶卤制，使其茶香四溢,颜色酱紫，茶香扑鼻，味道醇厚甜美，在口中细嚼，韧性十足，颇为耐嚼，鲜醇浓香,菜形美观，回味无穷。',
									price : 36,
									detail : '鸭舌、料酒等',
									hotarea : [ 165, 35, 585, 335 ]
								},{
									name : '露影双鲜',
									image : 'images/p6f2.png',
									imagen : 'images/p6n2.png',
									descn : '菜形美观，脆爽可口',
									desc :'此菜色彩艳丽,口味鲜咸,口感香醇,菜品中肉去汤之香，汤吸肉之鲜，味香鲜而清淡，营养丰富，拥有对营养不良，虚劳贫血体质的人群具有很好的调理功效，又以其独特的风味，大众化的特质，更是同等菜品中难得的佳品。',
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
									imagen : 'images/p7n1.png',
									descn : '瓜软肉香，汤味清香，减肥美容，色味俱佳',
									desc :'此汤味道鲜美，清香，老幼咸宜，其中冬瓜具有润肺生津，化痰止渴，利尿消肿，清热祛暑，清热解毒，滋养脏腑，美容抗皱，解毒排脓的功效，经常食用冬瓜，能去掉人体内过剩的脂肪，且内含蛋白质和大量维生素与矿物质，对护肤美白有不可忽视的作用。',
									price : 45,
									detail : '火腿、冬瓜、高汤',
									hotarea : [ 25, 25, 420, 310 ]
								},{
									name : '鹅肝酱粉丝',
									image : 'images/p7f2.png',
									imagen : 'images/p7n2.png',
									descn : '鲜美可口，补肝明目，营养丰富，老幼咸宜',
									desc :'浓腴无比，细腻滑润，入口即化，带一点淡淡的鹅肝香，不腥，口感浓重，充分体现了鹅肝的诱惑，伴以营养丰富的黑菌、松茸及美味的蒜味奶油及粉丝，使其成为冬季的进补佳肴。',
									price : 30,
									detail : '鹅肝酱、粉丝',
									hotarea : [ 565, 30, 865, 240 ]
								},{
									name : '金丝虾球',
									image : 'images/p7f3.png',
									imagen : 'images/p7n3.png',
									descn : '色泽艳丽，酥脆爽口，鲜香诱人，风味独特',
									desc :'外观形似金丝球，质地外酥内嫩，鲜香可口，色泽无可挑剔，营养丰富，选用大虾仁制作，吃法多样，无论味道，口感都是肯德基的千丝万缕虾无法比拟的。',
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
											image : 'images/p8f1.png',
											imagen : 'images/p8n1.png',
											descn : '清爽可口，口感浓厚 ，入口柔软，滋味纯正，清新',
											desc : '此菜品历史悠久，在民间具有浓厚的文化基础，尤以其衍生的品种繁多，风味独特和经济实惠著称，是中华饮食文化百花园中的一朵奇葩，早已享誉大江南北。 ',
											price : 16,
											detail : '新鲜猪耳、鲜汤 <br>花椒等香料佐料',
											hotarea : [ 555, 50, 985, 320 ]
										},
										{
											name : '吮指鸡翅',
											image : 'images/p8f2.png',
											imagen : 'images/p8n2.png',
											descn : '喷香入味，果味浓厚，色泽艳丽 ，风味独特，入口鲜甜，咸淡适宜',
											desc : '鸡翅又名鸡翼、大转弯。肉少，皮富胶质。又分“鸡膀”“膀尖”两种。鸡膀，连接鸡体至鸡翅的第一关节处，肉质较多；鸡翅有温中益气、补精添髓、强腰健胃等功效，鸡中翅相对翅尖和翅根来说，它的胶原蛋白含量丰富，对于保持皮肤光泽、增强皮肤弹性均有好处。',
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
									imagen : 'images/p9n1.png',
									descn : '个大体肥，色泽鲜亮 ，肉色晶莹，味道鲜美',
									desc : '菜肴虾仁玉白鲜嫩，形态饱满，清爽利落，熘汁香郁适口，口感鲜嫩，清淡爽口，虾仁蛋白质，钙质丰富，开胃补肾，易于消化，老幼皆宜，而深受食客欢迎。',
									price : 50,
									detail : '对虾、油等',
									hotarea : [ 115, 30, 505, 310 ]
								 },{
									name : '茶树菇炒爽肉',
									image : 'images/p9f2.png',
									imagen : 'images/p9n2.png',
									descn : '易嚼易咽，口感柔润 ，质地脆软，别有风味',
									desc : '茶树菇，又名茶薪菇，是集高蛋白，低脂肪，低糖份，保健食疗于一身的纯天然无公害保健食用菌。其味美，柄脆，香浓纯正，为宾馆，家庭宴席高级保健食品。',
									price : 30,
									detail : '肉类、茶树菇等',
									hotarea : [ 690, 140, 990, 350 ]
								},{ 
								    name : '虫草花螺片',
									image : 'images/p9f3.png',
									imagen : 'images/p9n3.png',
									descn : '色泽艳丽，鲜香酥软',
									desc : '虫草花含有丰富的蛋白质、氨基酸以及虫草素、甘露醇、SOD、多糖类等成分，其中虫草酸和虫草素能够综合调理人机体内环境，增强体内巨噬细胞的功能，对增强和调节人体免疫功能、提高人体抗病能力有一定的作用。',
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
											imagen : 'images/p10n1.png',
											descn : '清嫩可口，油亮味浓',
											desc : '滑菇外观亮丽、味道鲜美，鲜滑菇口感极佳，具有滑、鲜、嫩、脆的特点；羊肉能暖中补虚，补中益气，开胃健身，益肾气，养胆明目，治虚劳寒冷，五劳七伤。',
											price : 55,
											detail : '鲜羊柳、鲜菇、彩椒',
											hotarea : [ 110, 30, 505, 310 ]
										},
										{
											name : '脆骨槐花浦蛋',
											image : 'images/p10f2.png',
											imagen : 'images/p10n2.png',
											descn : '清香甘甜，口感清爽 ，清热降火，老少咸宜',
											desc : '脆骨入口即化，非常适合需要补钙的老人和儿童。脆骨，又称掌中宝，它以其独特的口感而倍受食客青睐；槐花味道清香甘甜，富含维生素和多种矿物质，同时还具有清热解毒、凉血润肺、降血压、预防中风的功效。',
											price : 30,
											detail : '肉类、豆制品等',
											hotarea : [ 640, 160, 940, 370 ]
										},{
											name : '小笼米粉牛肉',
											image : 'images/p10f3.png',
											imagen : 'images/p10n3.png',
											descn : '肉香质软，风味独特',
											desc : '柔韧筋道，色泽白亮，吸水率高；牛肉码煨火靠呈酱红色，软烂鲜香而微甜；牛肉有补中益气、滋养脾胃、强健筋骨、化痰息风、止渴止涎的功效。适用于中气下陷、气短体虚，筋骨酸软和贫血久病及面黄目眩之人食用。',
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
									imagen : 'images/p11n1.png',
									descn : '瘦肉酥而不烂、皮和肥肉糯而不化 ，入口奇香、口感纯正、回味悠长',
									desc : '.猪蹄髈营养很丰富，含较多的蛋白质，特别是含有大量的胶原蛋白质，和肉皮一样，是使皮肤丰满、润泽，强体增肥的食疗佳品；且其又具有味甘咸，性平，和血脉、润肌肤、填肾精、健腰脚的作用。',
									price : 80,
									detail : '新鲜猪蹄膀、白果、福菜、八角 <br>桂皮、高汤等',
									hotarea : [ 35, 60, 395, 300 ]
								}, {
									name : '果汁煎肉脯',
									image : 'images/p11f2.png',
									imagen : 'images/p11n2.png',
									descn : '清爽可口，果味浓厚，色泽艳丽 ，风味独特，入口鲜甜，软化醇美 ',
									desc : '肉脯，它的风味独特、工艺古老，讲究色、香、味、形一体。色，具有特有的红褐色、油润均匀有光泽，略带透明感；香，它散发出的是猪肉烘烤的自然香气；味，具有特有的红曲醇味、咸中微甜带植物香辛，耐咀嚼有韧性感，回甘留香；形，厚薄均匀，纤维完整。',
									price : 60,
									detail : '瘦猪肉、虾片、果汁、鸡蛋 <br>花生油、高汤等',
									hotarea : [ 630, 385, 985, 625]
								} ]
							} , {
								image : 'images/p12w.jpg',
								snapshot : 'images/p12ws.jpg',
							    items : [ {
									name : '一品鲍鱼',
									image : 'images/p12f1.png',
									imagen : 'images/p12n1.png',
									descn : '名贵海珍品，肉质细嫩 ，营养丰富，清而味浓',
									desc : '鲍鱼是中国传统的名贵食材，四大海味之首；肉质细嫩，鲜而不腻；营养丰富，清而味浓，烧菜、调汤，妙味无穷；中医称鲍鱼功效可平肝潜阳，解热明目，止渴通淋；主治肝热上逆，头晕目眩，骨蒸劳热，青肓内障，高血压眼底出血等症。',
									price : 75,
									detail : '新鲜鲍鱼、油等',
									hotarea : [ 25, 25, 420, 310]
								},{
									name : '炕锅麻椒羊排',
									image : 'images/p12f2.png',
									imagen : 'images/p12n2.png',
									descn : '肥瘦结合，质地松软 ，色呈焦黄，香嫩可口',
									desc : '羊肉营养丰富性温，冬季常吃羊肉，不仅可以增加人体热量，抵御寒冷，而且还能增加消化酶，保护胃壁，修复胃粘膜，帮助脾胃消化，起到抗衰老的作用.',
									price : 55,
									detail : '羊排、孜然等',
									hotarea : [ 25, 335, 420, 615]
								  },{
									name : '砂锅炖肉',
									image : 'images/p12f3.png',
									imagen : 'images/p12n3.png',
									descn : '肉软烂而不散，整齐 ，肉味醇厚浓郁，食而不腻',
									desc : '砂锅炖肉是中国菜系西北菜菜系中很有特色的菜式之一，砂锅炖肉以五花肉为主要材料，烹饪以砂锅为主，口味属于咸鲜。砂锅炖肉的特色：汤菜合一，汤味浓厚，鲜美可口。',
									price : 45,
									detail : '五花肉、酒糟等',
									hotarea : [ 725, 310, 985, 505]
								    } ]
							}, {
								image : 'images/p13w.jpg',
								snapshot : 'images/p13ws.jpg',
                                items : [ {
									name : '清蒸大闸蟹',
									image : 'images/p13f1.png',
									imagen : 'images/p13n1.png',
									descn : '香醇爽口，低油低脂 ，口感细腻，回味无穷',
									desc : '大闸蟹是河蟹的一种，在我国北起辽河南至珠江，漫长的海岸线上广泛分布，其中以长江水系产量最大，口感最鲜美。大闸蟹也有多味：蟹肉一味，蟹膏一味，蟹黄一味，蟹子又一味。而蟹肉之中，又分“四味”：大腿肉，丝短纤细，味同干贝；小腿肉，丝长细嫩，美如银鱼；蟹身肉，洁白晶莹，胜似白鱼；蟹黄，妙不可言，无法比喻。',
									price : 79,
									detail : '鲜活大闸蟹、蒜 <br>辣椒、槐盐等',
									hotarea : [ 555, 55, 985, 320]
								},{
									name : '四季富贵',
									image : 'images/p13f2.png',
									imagen : 'images/p13n2.png',
									descn : '爽口不腻，味道醇厚，色泽艳丽，风味独特，入口香醇，咸淡适宜',
									desc : '在中医中，鸭子吃的食物多为水生物，故其肉性味甘、寒，入肺胃肾经，有滋补、养胃、补肾、除痨热骨蒸、消水肿、止热痢、止咳化痰等作用；海蜇有清热解毒、化痰软坚、降压消肿之功。',
									price : 15,
									detail : '鸭肉、卤料、鸭蛋、海蜇等 <br>八角等香料佐料',
									hotarea : [ 35, 365, 470, 635]
									} ]
							}, {
								image : 'images/p14w.jpg',
								snapshot : 'images/p14ws.jpg',
								items : [ {
									name : '清蒸甲鱼',
									image : 'images/p14f1.png',
									imagen : 'images/p14n1.png',
									descn : '肉质鲜美，营养丰富，滋补佳品',
									desc : '以甲鱼为原料，用沙锅蒸制而成；甲鱼是滋补佳品，肉质鲜美，营养丰富，有较高的食疗养生价值；其性寒，味咸，富含蛋白质、脂肪、铁、钙、动物胶、角质白及多种维生素等；具有滋阴凉血、补益调中、补肾健骨、散结消痞等作用　可防治身虚体弱、肝脾肿大、肺结核等症。',
									price : 60,
									detail : '甲鱼、绍兴酒等',
									hotarea : [ 115, 40, 500, 320]
								},{
									name : '香蒸荷叶肉',
									image : 'images/p14f2.png',
									imagen : 'images/p14n2.png',
									descn : '荷香袭人，肉软酥烂，鲜香味没，营养丰富',
									desc : '荷叶具有扩张血管，清热解暑，有降血压的作用，同时还有清热解毒、凉血、止血的作用，也是减肥的良药；猪肉软嫩酥烂，鲜香味美，营养丰富，并有清热解暑，散瘀止血之功效。',
									price : 23,
									detail : '荷叶、肉类等',
									hotarea : [ 25, 350, 345, 585]
								},{
									name : '蜜汁南瓜',
									image : 'images/p14f3.png',
									imagen : 'images/p14n3.png',
									descn : '香甜宜人，口感绵柔',
									desc : '南瓜含丰富的维生素E。富含胡萝卜素，是上榜的抗癌食品，也有降血糖和减肥的功效;用陕北优质八棱南瓜，削皮去籽，平刨两半，在顺天然瓜沟切成若干小瓣，拼复完整，入锅蒸熟后，浇以糖汁；口感绵软，香甜怡人。',
									price : 20,
									detail : '优质南瓜、冰糖、蜜糖等',
									hotarea : [ 680, 295, 985, 525]
								    } ]
							}, {
								image : 'images/p15w.jpg',
								snapshot : 'images/p15ws.jpg',
								items : [ {
									name : '豆馅糯米三明治',
									image : 'images/p15f1.png',
									imagen : 'images/p15n1.png',
									descn : '色泽金黄油亮，入口柔滑细嫩，柔软粘稠，齿颊留香，回味甘甜',
									desc : '糯米营养丰富，为温补强壮食品，具有补中益气，健脾养胃，止虚汗之功效，对食欲不佳，腹胀腹泻有一定缓解作用；又有收涩作用，对尿频、自汗有较好的食疗效果。',
									price : 23,
									detail : '精致糯米、白糖、猪油、精盐 <br>甜栗子、豆沙等',
									hotarea : [ 40, 60, 400, 300]
								},{
								    name : '竹蒸米粉肉',
									image : 'images/p15f2.png',
									imagen : 'images/p15n2.png',
									descn : '竹香浓郁，肉酥爽口，滋味丰富，嫩而不糜，密封油润，粉糯而清香',
									desc : '粉蒸肉（又名面面肉），为中国传统的待客名菜。粉蒸肉糯而清香，酥而爽口，软、嫩、甜、香、咸，滋味丰富，食性温和。以主料带皮花肉加稻米和其他调味料制作而成。“粉蒸肉”有肥有瘦，红白相间，嫩而不糜，米粉油润，五香味浓郁。成菜时以老藕垫底，色泽粉红，粉糯而清香，更为添色。',
									price : 60,
									detail : '带皮花肉、姜、莲藕、葱丝 <br>花生油、高汤等',
									hotarea : [ 505, 385, 865, 620]
									}]
							}, {
								image : 'images/p16w.jpg',
								snapshot : 'images/p16ws.jpg',
								items : [ {
									name : '红烧狮子头',
									image : 'images/p16f1.png',
									imagen : 'images/p16n1.png',
									descn : '肉红润油亮，肥瘦适宜 ，肉香四溢，醇香味浓',
									desc : '红烧狮子头，是中国逢年过节常吃的一道菜，也称四喜丸子，是取其吉祥之意。这是一道淮扬名菜，有肥有瘦的肉红润油亮，配上翠绿青菜掩映，鲜艳的色彩加上扑鼻的香味，光看就引动食欲，醇香味浓的肉块与汁液，是令人无法抵挡的顶级美味；狮子头要柔软好吃，肉最好自己剁，另一个重点是在容器上，要细火慢炖，以砂锅为最佳。',
									price : 40,
									detail : '猪肉馅、胡萝卜等',
									hotarea : [ 28, 28, 418, 309]
								},{
									name : '脆口三鲜丝',
									image : 'images/p16f2.png',
									imagen : 'images/p16n2.png',
									descn : '肥瘦结合，质地松软，色呈焦黄，香嫩可口',
									desc : '脆口三鲜丝是一道常见菜，做法简单;脆口三鲜丝口味属于家常味，做法属炒菜类，可以根据自己的口味习惯进行细节调整。',
									price : 55,
									detail : '胡萝卜、黄瓜、红甜椒',
									hotarea : [ 25, 330, 415, 615]
								},{
									name : '香酥盐焦虾',
									image : 'images/p16f3.png',
									imagen : 'images/p16n3.png',
									descn : '外焦香咸辣，肉软嫩鲜，酥嫩金黄',
									desc : '外酥肉嫩金黄，具有西餐风味，辣椒酱油佐食，味道更加鲜美，营养丰富，易消化,对身体虚弱以及病后需要调养的人是极好的食物;且虾中含有丰富的镁，镁对心脏活动具有重要的调节作用，能很好的保护心血管系统，它可减少血液中胆固醇含量，防止动脉硬化。',
									price : 45,
									detail : '鲜河虾、植物油 <br>绍兴酒、大葱等',
									hotarea : [ 725, 310, 985, 505]
								  } ]
							}, {
								image : 'images/p17w.jpg',
								snapshot : 'images/p17ws.jpg',
								items : [ {
									name : '香酥春卷',
									image : 'images/p17f1.png',
									imagen : 'images/p17n1.png',
									descn : '皮薄酥脆，馅心香软，口感极佳，回味无穷',
									desc : '春卷是用上白面粉加少许水和盐拌揉捏，放在平底锅中摊烙成圆形皮子，然后将制好的陷心（肉末、豆沙、菜猪油等）摊放在皮子上，将两头折起，卷成长卷下油锅炸成金黄色即可；春卷皮薄酥脆、馅心香软，别具风味，是春季的时令佳品。',
									price : 18,
									detail : '春卷皮、花生酱 <br>蛋清、油、盐等',
									hotarea : [ 565, 25, 985, 295]
								},{
									name : '葱香鸡蛋羹',
									image : 'images/p17f2.png',
									imagen : 'images/p17n2.png',
									descn : '爽口不腻，味道醇厚，色泽艳丽，营养丰富，老少咸宜，味美质嫩',
									desc : '鸡蛋羹几乎是家里必做的一道菜，体虚牙口不好的老人、病后恢复中的家人、刚断奶的幼儿，都可以吃这个来补充营养。鸡蛋羹也是属于发挥性很大的一道菜，因为本身味道清淡， 可以根据个人口味添加各种调味料或者会和一些配料蒸入其中。',
									price : 28,
									detail : '鸡蛋、盐、水、葱花、油 <br>水等辅料',
									hotarea : [ 38, 365 , 465, 634]
									} ]
							}, {
								image : 'images/p18w.jpg',
								snapshot : 'images/p18ws.jpg',
								items : [ {
									name : '翡翠笋芯',
									image : 'images/p18f1.png',
									imagen : 'images/p18n1.png',
									descn : '色香味俱全，清新爽口，清淡，颜色美观，齿颊留香，老少咸宜',
									desc : '莴笋具有镇静作用，经常食用有助于消除紧张，帮助睡眠；不同于一般蔬菜的是它含有非常丰富的氟元素，可参与牙和骨的生长。能改善消化系统和肝脏功能；刺激消化液的分泌，促进食欲，有助于抵御风湿性疾病和痛风。',
									price : 7,
									detail : '莴笋、香醋、白糖、鸡精、精盐 <br>香油、辣油等',
									hotarea : [ 35, 60, 395, 295]
								},{
									name : '金玉满堂',
									image : 'images/p18f2.png',
									imagen : 'images/p18n2.png',
									descn : '香味浓郁，口感爽滑，滋味丰富，鲜甜可口，老少咸宜',
									desc : '本菜品是以松仁玉米为主料，玉米中含有大量的钙质，还有丰富的卵磷脂和维生素E等营养素；这些物质有降低胆固醇、防止细胞衰老以及减缓脑功能退化等功效；松仁中富含不饱和脂肪酸，能降低血脂，预防心血管疾病，且所含大量矿物质如钙、铁、钾等，能给机体组织提供丰富的营养成分，强壮筋骨，消除疲劳，对老年人保健有极大的益处。',
									price : 60,
									detail : '红椒、黄椒、盐、黄瓜、葱末 <br>姜丝、料酒、淀粉、香油、胡萝卜',
									hotarea : [ 625, 385, 985, 620]
									} ]
							}, {
								image : 'images/p19w.jpg',
								snapshot : 'images/p19ws.jpg',
								items : [ {
									name : '脆嫩豌豆',
									image : 'images/p19f1.png',
									imagen : 'images/p19n1.png',
									descn : '色泽鲜脆，圆润，入口柔嫩 ，可煮可煎，齿颊留香，回味甘甜',
									desc : '豌豆中富含人体所需的各种营养物质，尤其是含有优质蛋白质，可以提高机体的抗病能力和康复能力；中富含胡萝卜素，食用后可防止人体致癌物质的合成，从而减少癌细胞的形成，降低人体癌症的发病率。',
									price : 10,
									detail : '豌豆',
									hotarea : [ 105, 60, 465, 295]
								},{
									name : '黄瓜紫茄',
									image : 'images/p19f2.png',
									imagen : 'images/p19n2.png',
									descn : '清香爽嫩，鲜脆爽口，滋味丰富，多种配合，凉拌烩炒，变化万千',
									desc : '黄瓜性凉，味甘，清热利水，解毒消肿，生津止渴；其营养丰富，具有提高人体免疫功能，可延年益寿，抗衰老的作用；其中的黄瓜酶，有很强的生物活性，能有效地促进机体的新陈代谢，尤其所含的丙氨酸、精氨酸和谷胺酰胺对肝脏病人，特别是对酒精性肝硬化患者有一定辅助治疗作用，可防治酒精中毒；茄子的营养，也较丰富，含有蛋白质、脂肪、碳水化合物、维 生素以及钙、磷、铁等多种营养成分。',
									price : 7,
									detail : '黄瓜、紫茄',
									hotarea : [ 615, 385, 970, 615]
									} ]
							},
							{
								image : 'images/p20w.jpg',
								snapshot : 'images/p20ws.jpg',
								items : [ {
									name : '梅菜扣肉',
									image : 'images/p20f1.png',
									imagen : 'images/p20n1.png',
									descn : '酱红油亮，肉滑醇香，汤粘稠鲜美，柔烂醇香',
									desc : '梅菜扣肉即我们常称之烧白，因地域不同而名字颇多，其特点在于颜色酱红油亮，汤汁黏稠鲜美，扣肉滑溜醇香，肥而不腻，食之软烂醇香，梅菜浓郁芳香；食之具有贫血调理，滋阴调理，健脾开胃调理的功效。',
									price : 27,
									detail : '五花肉、梅干菜',
									hotarea : [ 25, 25, 405, 300]
								},{
									name : '秘制东坡肉',
									image : 'images/p20f2.png',
									imagen : 'images/p20n2.png',
									descn : '薄皮肉嫩，色泽红亮，味醇汁浓，酥烂不腻',
									desc : '追本溯源，“东坡肉”最早在徐州创制，《徐州古今名馔》记载，苏轼任徐州知州时，黄河决口，苏轼身先士卒，和全城百姓筑堤保城。徐州人民杀猪宰羊，上府慰劳，苏轼推辞不掉，便指点家人烧成红烧肉回赠给老百姓，百姓食后，都觉得肥而不腻、酥香味美，便称之为“回赠肉”。苏轼贬谪黄州时，作有煮肉歌，人们开始竞相仿制，并戏称为“东坡肉”。苏轼二任杭州知州时，因疏浚西湖有功。大家抬酒担肉给他拜年，苏轼便命将猪肉和酒烧好后给民工吃，家人误听为黄酒和猪肉同烧，大家吃后反而觉得更加酥香味美。“东坡肉”美名便慢慢传遍全国。',
									price : 65,
									detail : '五花肉、绍兴酒等',
									hotarea : [ 25, 350, 340, 585]
							   },{
								    name : '脆皮乳鸽',
									image : 'images/p20f3.png',
									imagen : 'images/p20n3.png',
									descn : '乳鸽鲜美，皮脆肉嫩',
									desc : '鸽肉味咸、性平、无毒；具有滋补肝肾之作用，可以补气血，托毒排脓；可用以治疗恶疮、久病虚赢、消渴等症。常吃可使身体强健，清肺顺气。对于肾虚体弱、心神不宁、儿童成长、体力透支者均有功效。乳鸽的骨内含丰富的软骨素，常食能增加皮肤弹性，改善血液循环。乳鸽肉含有较多的支链氨基酸和精氨酸，可促进体内蛋白质的合成，加快创伤愈合；实属滋补之佳品。',
									price : 68,
									detail : '乳鸽、油、醋等',
									hotarea : [ 680, 285, 985, 515]
								  }]
							},
							{
								image : 'images/logo.jpg',
								items : [ {
									hotarea : [ 0, 0, 0, 0]
								}]
							}
							 ],

					//推荐菜系
					suggestionIndex : [ [1,1] , [ 1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ] ] ,
					
					//推荐菜数据，在initData()函数中初始化
					suggestionData : [],
					
					//缺菜记录
					oosItems : [[1,1] , [2,1] , [3,1] , [4,1] , [5,1]] ,
							
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
					
					//点餐数据 Map
					// eg : { USER1_ID: [] , USER2_ID: [] }
					orders : {} ,
					
					/**
					 * 初始化所有数据，在这个函数中处理原始数据，
					 * 需要的话可以编制二次索引和HaspMap，提高查询速度。
					 */
					initData : function (){
						var gindex = 0 ;
						//初始化页面数据
						for(var i=0; i<=this.pages.length - 1 ; i++){
							this.pages[i].index = i ;
							var items = this.pages[i].items ;
							for(var j =0 ; j<= items.length -1 ; j++){
								items[j].pindex = i ;
								items[j].index = j ;
								items[j].hotarea[1] += 50 ;
								items[j].hotarea[3] += 50 ;
								items[j].gindex = gindex++ ;
								items[j].outofSales = false ;
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
					},
					

					/**
					 * oosItems 缺菜列表，格式为： OBJ[items1 , items2 ....]
					 */
					refreshOutofSalesStatus : function(oosItemSet) {
						
						//初始化页面数据
						for(var i=0; i<=this.pages.length - 1 ; i++){
							this.pages[i].index = i ;
							var items = this.pages[i].items ;
							for(var j =0 ; j<= items.length -1 ; j++){
								var gid = items[j].gindex ;
								
								if(oosItemSet[gid] != undefined){
									console.log(items[j].name +":" + items[j].gindex + "：缺菜 =================");
									items[j].outofSales = true;
								}else{
									console.log(items[j].name +":" + items[j].gindex + "：不缺菜");
									items[j].outofSales = false ;
								}
							}
						}
					}
					
				});
