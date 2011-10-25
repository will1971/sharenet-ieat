/**
 * 定义菜品和页面模型 ,为了提高性能，不使用Sencha Touch的DataStore，而使用 最快速高效的数组和自定义对象
 */
SH.Data = Ext.extend(Object, {
																			// 类别数据
					types : [ '传统菜肴', '创意中国菜' ],

					// 每页类别数据
					typesIndex : {
						'传统菜肴' : [ 0 , 1 ],
						'创意中国菜' : [ 2 , 3 ]
					},
					
					//在initData()函数中对typePages数据进行初始化
					typePages : {
						'传统菜肴' : [], 
						'创意中国菜' : []
					},
					
					typeHotareas :[
					   	{ pos : [872, 89, 993, 144] , pindex: 0 },
					   	{ pos : [892, 254, 1009, 319] , pindex: 2}
					   	//{ pos : [19, 292, 179, 399] , pindex: 2},
					   	//{ pos : [458, 292, 618, 399], pindex: 3}
				    ] ,

					// 封面，封底数据
					covers : [{
								image : 'images/p0-1.jpg',
								cls : 'cover-page',
								html : '<div id="AN-sObj-stage" class="push_5 vpush_2 grid_2">' +
										'<div class="AN-Object" id="AN-sObj-1" style="-webkit-transform: scale3d(1, 1, 1); opacity: 1; -webkit-animation-name: AN-ani-2; -webkit-animation-duration: 2s; ">' +
										'<div id="AN-sObj-val-1"><img src="images/lou.png"></div></div>' +
										'<div class="AN-Object" id="AN-sObj-2" style="-webkit-transform: scale3d(1, 1, 1); opacity: 1; -webkit-animation-name: AN-ani-1; -webkit-animation-duration: 1.5s; ">' +
										'<div id="AN-sObj-val-2"><img src="images/qing.png"></div></div><div class="AN-Object" id="AN-sObj-3" style="-webkit-transform: scale3d(1, 1, 1); opacity: 1; -webkit-animation-name: AN-ani-0; -webkit-animation-duration: 0.99s; ">' +
										'<div id="AN-sObj-val-3"><img src="images/tong.png"></div></div></div>'
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
					// snapshot : 'images/p0ws.jpg',
					items : [{
								name : '西冷牛排',
								image : 'images/p1f1.jpg',
								imagen : 'images/p1d1.jpg',
								descn : '清爽可口，口感醇厚',
								desc : '本菜发源于安徽省绩溪县上庄，又称绩溪一品锅，农家菜，属于徽菜；菜品咸鲜微辣，清爽可口，口感醇厚；现在在绩溪胡适一品锅已经成为徽菜的代表菜品；文人梁实秋先生品尝了“一品锅”之后，对此菜大加称赞，曾撰文做了详尽描述：”一只大铁锅，口径差不多二尺，热腾腾地端上来，里面还在滚沸，味道好极”。',
								price : 88,
								detail : '肉类、豆制品等',
								hotarea : [19, 148, 179, 255],
								infohotare : [180,  209,  260,  316]
							}, {
								name : '松鼠鲈鱼',
								image : 'images/p1f2.jpg',
								imagen : 'images/p1d2.jpg',
								descn : '清爽可口，口感醇厚',
								desc : '手撕鸡采用放养的柴鸡，柴鸡肉较富弹性，喜食鸡皮者为免油腻，可将鸡冰冻后再撕，撕除鸡皮则只需将鸡放凉即可。对病后或产后虚弱，腰膝酸痛、气血亏虚等有极好的疗效，还对泄泻下痢、水肿、阴虚咳喘、肾虚耳聋、小便频繁等症有食疗效果。含有对人体生长发肓有重要作用的磷脂类，是中国人膳食结构中脂肪和磷脂的重要来源之一。',
								price : 88,
								detail : '肉类、豆制品等',
								hotarea : [458, 148, 618, 255],
								infohotare : [377, 189, 457, 296]
							}, {
								name : '红焖砂锅脆肠',
								image : 'images/p1f3.jpg',
								imagen : 'images/p1d3.jpg',
								descn : '清爽可口，口感醇厚',
								desc : '鱼头营养高、口味好，并对降低血脂、健脑及延缓衰老有好处；鲜香滑嫩，回味无穷。是绝好的滋补品，尤其适合秋冬食用；汤奶白、醇鱼鲜嫩、含蛋白质及脂肪、钙等多种维生素。鱼头温中意气、暖胃补虚，多食者可滋养肌肤，延年益寿。巧味鱼头是一道好菜，并非只是指它的味道好是纯粹的绿色食品。',
								price : 88,
								detail : '肉类、豆制品等',
								hotarea : [19, 292, 179, 399],
								infohotare : [180, 353, 260, 460]
							}, {
								name : '黑椒焗仔骨',
								image : 'images/p1f4.jpg',
								imagen : 'images/p1d4.jpg',
								descn : '清爽可口，口感醇厚',
								desc : '鱼头营养高、口味好，并对降低血脂、健脑及延缓衰老有好处；鲜香滑嫩，回味无穷。是绝好的滋补品，尤其适合秋冬食用；汤奶白、醇鱼鲜嫩、含蛋白质及脂肪、钙等多种维生素。鱼头温中意气、暖胃补虚，多食者可滋养肌肤，延年益寿。',
								price : 88,
								detail : '肉类、豆制品等',
								hotarea : [458, 292, 618, 399],
								infohotare : [377, 333, 457, 440]
							}, {
								name : '梅菜肉碎焖凉瓜',
								image : 'images/p1f5.jpg',
								imagen : 'images/p1d5.jpg',
								descn : '清爽可口，口感醇厚',
								desc : '鱼头营养高、口味好，并对降低血脂、健脑及延缓衰老有好处；鲜香滑嫩，回味无穷。是绝好的滋补品，尤其适合秋冬食用；汤奶白、醇鱼鲜嫩、含蛋白质及脂肪、钙等多种维生素。鱼头温中意气、暖胃补虚，多食者可滋养肌肤，延年益寿。',
								price : 88,
								detail : '肉类、豆制品等',
								hotarea : [19, 436, 179, 543],
								infohotare : [180, 496, 260, 603]
							}, {
								name : '香煎黄花鱼',
								image : 'images/p1f6.jpg',
								imagen : 'images/p1d6.jpg',
								descn : '清爽可口，口感醇厚',
								desc : '鱼头营养高、口味好，并对降低血脂、健脑及延缓衰老有好处；鲜香滑嫩，回味无穷。是绝好的滋补品，尤其适合秋冬食用；汤奶白、醇鱼鲜嫩、含蛋白质及脂肪、钙等多种维生素。鱼头温中意气、暖胃补虚，多食者可滋养肌肤，延年益寿。',
								price : 88,
								detail : '肉类、豆制品等',
								hotarea : [458, 436, 618, 543],
								infohotare : [377, 477, 457, 584]
							}, {
								name : '美极茶树菇炒虾仁',
								image : 'images/p1f7.jpg',
								imagen : 'images/p1d7.jpg',
								descn : '清爽可口，口感醇厚',
								desc : '鱼头营养高、口味好，并对降低血脂、健脑及延缓衰老有好处；鲜香滑嫩，回味无穷。是绝好的滋补品，尤其适合秋冬食用；汤奶白、醇鱼鲜嫩、含蛋白质及脂肪、钙等多种维生素。鱼头温中意气、暖胃补虚，多食者可滋养肌肤，延年益寿。',
								price : 88,
								detail : '肉类、豆制品等',
								hotarea : [19, 583, 179, 690],
								infohotare : [180, 644, 260, 751]
							}, {
								name : '招牌口味蛙',
								image : 'images/p1f8.jpg',
								imagen : 'images/p1d8.jpg',
								descn : '清爽可口，口感醇厚',
								desc : '鱼头营养高、口味好，并对降低血脂、健脑及延缓衰老有好处；鲜香滑嫩，回味无穷。是绝好的滋补品，尤其适合秋冬食用；汤奶白、醇鱼鲜嫩、含蛋白质及脂肪、钙等多种维生素。鱼头温中意气、暖胃补虚，多食者可滋养肌肤，延年益寿。',
								price : 88,
								detail : '肉类、豆制品等',
								hotarea : [458, 583, 618, 690],
								infohotare : [377, 623, 457, 731]
							}]
							},{
								image : 'images/p2.jpg',
								//snapshot : 'images/p1ws.jpg',
								items : [ {
									name : '菲力牛排',
									image : 'images/p2f1.png',
									imagen : 'images/p2d1.jpg',
									descn : '鲜嫩爽口，营养丰富',
									desc : '杏鲍菇营养丰富，富含蛋白质、碳水化合物、维生素及钙、镁、铜、锌等矿物质，可以提高人体免疫功能，对人体具有抗癌、降血脂、润肠胃以及美容等作用。',
									price : 60,
									detail : '肉类、鲜菇等',
									hotarea : [ 19, 148, 179, 255 ],
									infohotare : [180,  211,  207,  255]
								}, {
									name : '干烧鳜鱼',
									image : 'images/p2f2.png',
									imagen : 'images/p2d2.jpg',
									descn : '味道鲜美，肉质酥软',
									desc : '茶皇虾又名基围虾，营养丰富，其肉质松软，易消化，对身体虚弱以及病后需要调养的人是极好的食物；虾中含有丰富的镁，能很好的保护心血管系统，它可减少血液中胆固醇含量，防止动脉硬化，同时还能扩张冠状动脉，有利于预防高血压及心肌梗死；虾肉还有补肾壮阳，通乳抗毒、养血固精、化瘀解毒、益气滋阳、通络止痛、开胃化痰等功效。',
									price : 60,
									detail : '鲜活大虾、葱等',
									hotarea : [ 458, 148, 618, 255 ],
									infohotare : [430, 148, 457, 192]
								},{
									name : '土匪猪肝',
									image : 'images/p2f3.png',
									imagen : 'images/p2d3.jpg',
									descn : '粒粒滑爽，口感纯正',
									desc : '用豆浆倒入透明的碗中，两分钟后即可凝结豆腐；称这是世上最鲜嫩的豆腐，豆腐形貌细腻而光滑，美味非同寻常；粒粒滑爽，口感纯正，滑嫩细腻，酱鲜甜润。',
									price : 60,
									detail : '葡萄糖酸、豆浆 <br>榨菜、花生米、辣酱等',
									hotarea : [ 19, 292, 179, 399 ],
									infohotare : [180, 355, 207, 399]
								},{
									name : '百果泉水鱼',
									image : 'images/p2f4.png',
									imagen : 'images/p2d4.jpg',
									descn : '粒粒滑爽，口感纯正',
									desc : '用豆浆倒入透明的碗中，两分钟后即可凝结豆腐；称这是世上最鲜嫩的豆腐，豆腐形貌细腻而光滑，美味非同寻常；粒粒滑爽，口感纯正，滑嫩细腻，酱鲜甜润。',
									price : 60,
									detail : '葡萄糖酸、豆浆 <br>榨菜、花生米、辣酱等',
									hotarea : [ 458, 292, 618, 399 ],
									infohotare : [430, 292, 457, 336]
								} ,{
									name : '秘制红焖鱼头',
									image : 'images/p2f5.png',
									imagen : 'images/p2d5.jpg',
									descn : '粒粒滑爽，口感纯正',
									desc : '用豆浆倒入透明的碗中，两分钟后即可凝结豆腐；称这是世上最鲜嫩的豆腐，豆腐形貌细腻而光滑，美味非同寻常；粒粒滑爽，口感纯正，滑嫩细腻，酱鲜甜润。',
									price : 60,
									detail : '葡萄糖酸、豆浆 <br>榨菜、花生米、辣酱等',
									hotarea : [ 19, 436, 179, 543 ],
									infohotare : [180, 499, 207, 543]
								},{
									name : '巴蜀驴肉锅',
									image : 'images/p2f6.png',
									imagen : 'images/p2d6.jpg',
									descn : '粒粒滑爽，口感纯正',
									desc : '用豆浆倒入透明的碗中，两分钟后即可凝结豆腐；称这是世上最鲜嫩的豆腐，豆腐形貌细腻而光滑，美味非同寻常；粒粒滑爽，口感纯正，滑嫩细腻，酱鲜甜润。',
									price : 60,
									detail : '葡萄糖酸、豆浆 <br>榨菜、花生米、辣酱等',
									hotarea : [ 458, 436, 618, 543 ],
									infohotare : [430, 436, 457, 480]
								},{
									name : '安格斯T骨牛排',
									image : 'images/p2f7.png',
									imagen : 'images/p2d7.jpg',
									descn : '粒粒滑爽，口感纯正',
									desc : '用豆浆倒入透明的碗中，两分钟后即可凝结豆腐；称这是世上最鲜嫩的豆腐，豆腐形貌细腻而光滑，美味非同寻常；粒粒滑爽，口感纯正，滑嫩细腻，酱鲜甜润。',
									price : 60,
									detail : '葡萄糖酸、豆浆 <br>榨菜、花生米、辣酱等',
									hotarea : [ 19, 583, 179, 690 ],
									infohotare : [180, 640, 207, 690]
								}]
							},{
								image : 'images/p3.jpg',
								//snapshot : 'images/p1ws.jpg',
								items : [ {
									name : '玫瑰虾球',
									image : 'images/p3f1.png',
									imagen : 'images/p3d1.jpg',
									descn : '鲜嫩爽口，营养丰富',
									desc : '杏鲍菇营养丰富，富含蛋白质、碳水化合物、维生素及钙、镁、铜、锌等矿物质，可以提高人体免疫功能，对人体具有抗癌、降血脂、润肠胃以及美容等作用。',
									price : 60,
									detail : '肉类、鲜菇等',
									hotarea : [ 19, 148, 179, 255 ],
									infohotare : [180,  211,  207,  255]
								}, {
									name : '辣子油条虾',
									image : 'images/p3f2.png',
									imagen : 'images/p3d2.jpg',
									descn : '味道鲜美，肉质酥软',
									desc : '茶皇虾又名基围虾，营养丰富，其肉质松软，易消化，对身体虚弱以及病后需要调养的人是极好的食物；虾中含有丰富的镁，能很好的保护心血管系统，它可减少血液中胆固醇含量，防止动脉硬化，同时还能扩张冠状动脉，有利于预防高血压及心肌梗死；虾肉还有补肾壮阳，通乳抗毒、养血固精、化瘀解毒、益气滋阳、通络止痛、开胃化痰等功效。',
									price : 60,
									detail : '鲜活大虾、葱等',
									hotarea : [ 458, 148, 618, 255 ],
									infohotare : [430, 148, 457, 192]
								},{
									name : '凉瓜XO酱爆炒安格斯牛',
									image : 'images/p3f3.png',
									imagen : 'images/p3d3.jpg',
									descn : '粒粒滑爽，口感纯正',
									desc : '用豆浆倒入透明的碗中，两分钟后即可凝结豆腐；称这是世上最鲜嫩的豆腐，豆腐形貌细腻而光滑，美味非同寻常；粒粒滑爽，口感纯正，滑嫩细腻，酱鲜甜润。',
									price : 60,
									detail : '葡萄糖酸、豆浆 <br>榨菜、花生米、辣酱等',
									hotarea : [ 19, 292, 179, 399 ],
									infohotare : [180, 355, 207, 399]
								},{
									name : '梅子猪手',
									image : 'images/p3f4.png',
									imagen : 'images/p3d3.jpg',
									descn : '粒粒滑爽，口感纯正',
									desc : '用豆浆倒入透明的碗中，两分钟后即可凝结豆腐；称这是世上最鲜嫩的豆腐，豆腐形貌细腻而光滑，美味非同寻常；粒粒滑爽，口感纯正，滑嫩细腻，酱鲜甜润。',
									price : 60,
									detail : '葡萄糖酸、豆浆 <br>榨菜、花生米、辣酱等',
									hotarea : [ 458, 292, 618, 399 ],
									infohotare : [430, 292, 457, 336]
								} ,{
									name : '咖啡豆烤鳕鱼',
									image : 'images/p3f5.png',
									imagen : 'images/p3d5.jpg',
									descn : '粒粒滑爽，口感纯正',
									desc : '用豆浆倒入透明的碗中，两分钟后即可凝结豆腐；称这是世上最鲜嫩的豆腐，豆腐形貌细腻而光滑，美味非同寻常；粒粒滑爽，口感纯正，滑嫩细腻，酱鲜甜润。',
									price : 60,
									detail : '葡萄糖酸、豆浆 <br>榨菜、花生米、辣酱等',
									hotarea : [ 19, 436, 179, 543 ],
									infohotare : [180, 499, 207, 543]
								},{
									name : '秘制纸包鲈鱼',
									image : 'images/p3f6.png',
									imagen : 'images/p3d6.jpg',
									descn : '粒粒滑爽，口感纯正',
									desc : '用豆浆倒入透明的碗中，两分钟后即可凝结豆腐；称这是世上最鲜嫩的豆腐，豆腐形貌细腻而光滑，美味非同寻常；粒粒滑爽，口感纯正，滑嫩细腻，酱鲜甜润。',
									price : 60,
									detail : '葡萄糖酸、豆浆 <br>榨菜、花生米、辣酱等',
									hotarea : [ 458, 436, 618, 543 ],
									infohotare : [430, 436, 457, 480]
								},{
									name : '浓情面包汤',
									image : 'images/p3f7.png',
									imagen : 'images/p3d7.jpg',
									descn : '粒粒滑爽，口感纯正',
									desc : '用豆浆倒入透明的碗中，两分钟后即可凝结豆腐；称这是世上最鲜嫩的豆腐，豆腐形貌细腻而光滑，美味非同寻常；粒粒滑爽，口感纯正，滑嫩细腻，酱鲜甜润。',
									price : 60,
									detail : '葡萄糖酸、豆浆 <br>榨菜、花生米、辣酱等',
									hotarea : [ 19, 583, 179, 690 ],
									infohotare : [180, 640, 207, 690]
								},{
									name : '奇妙里脊脆',
									image : 'images/p3f8.png',
									imagen : 'images/p3d8.jpg',
									descn : '粒粒滑爽，口感纯正',
									desc : '用豆浆倒入透明的碗中，两分钟后即可凝结豆腐；称这是世上最鲜嫩的豆腐，豆腐形貌细腻而光滑，美味非同寻常；粒粒滑爽，口感纯正，滑嫩细腻，酱鲜甜润。',
									price : 60,
									detail : '葡萄糖酸、豆浆 <br>榨菜、花生米、辣酱等',
									hotarea : [458, 583, 618, 690],
									infohotare : [430, 583, 457, 627]
								}]
							},{
								image : 'images/p4.jpg',
								//snapshot : 'images/p1ws.jpg',
								items : [ {
									name : '青瓜芥末培根卷',
									image : 'images/p4f1.png',
									imagen : 'images/p4d1.jpg',
									descn : '鲜嫩爽口，营养丰富',
									desc : '杏鲍菇营养丰富，富含蛋白质、碳水化合物、维生素及钙、镁、铜、锌等矿物质，可以提高人体免疫功能，对人体具有抗癌、降血脂、润肠胃以及美容等作用。',
									price : 60,
									detail : '肉类、鲜菇等',
									hotarea : [ 19, 148, 179, 255 ],
									infohotare : [180,  211,  207,  255]
								}, {
									name : '水果锅巴',
									image : 'images/p4f2.png',
									imagen : 'images/p4d2.jpg',
									descn : '味道鲜美，肉质酥软',
									desc : '茶皇虾又名基围虾，营养丰富，其肉质松软，易消化，对身体虚弱以及病后需要调养的人是极好的食物；虾中含有丰富的镁，能很好的保护心血管系统，它可减少血液中胆固醇含量，防止动脉硬化，同时还能扩张冠状动脉，有利于预防高血压及心肌梗死；虾肉还有补肾壮阳，通乳抗毒、养血固精、化瘀解毒、益气滋阳、通络止痛、开胃化痰等功效。',
									price : 60,
									detail : '鲜活大虾、葱等',
									hotarea : [ 458, 148, 618, 255 ],
									infohotare : [430, 148, 457, 192]
								},{
									name : '脆皮牛排',
									image : 'images/p4f3.png',
									imagen : 'images/p4d3.jpg',
									descn : '粒粒滑爽，口感纯正',
									desc : '用豆浆倒入透明的碗中，两分钟后即可凝结豆腐；称这是世上最鲜嫩的豆腐，豆腐形貌细腻而光滑，美味非同寻常；粒粒滑爽，口感纯正，滑嫩细腻，酱鲜甜润。',
									price : 60,
									detail : '葡萄糖酸、豆浆 <br>榨菜、花生米、辣酱等',
									hotarea : [ 19, 292, 179, 399 ],
									infohotare : [180, 355, 207, 399]
								},{
									name : '泰汁加吉鱼',
									image : 'images/p4f4.png',
									imagen : 'images/p4d3.jpg',
									descn : '粒粒滑爽，口感纯正',
									desc : '用豆浆倒入透明的碗中，两分钟后即可凝结豆腐；称这是世上最鲜嫩的豆腐，豆腐形貌细腻而光滑，美味非同寻常；粒粒滑爽，口感纯正，滑嫩细腻，酱鲜甜润。',
									price : 60,
									detail : '葡萄糖酸、豆浆 <br>榨菜、花生米、辣酱等',
									hotarea : [ 458, 292, 618, 399 ],
									infohotare : [430, 292, 457, 336]
								} ,{
									name : '铁板香葱鸡',
									image : 'images/p4f5.png',
									imagen : 'images/p4d5.jpg',
									descn : '粒粒滑爽，口感纯正',
									desc : '用豆浆倒入透明的碗中，两分钟后即可凝结豆腐；称这是世上最鲜嫩的豆腐，豆腐形貌细腻而光滑，美味非同寻常；粒粒滑爽，口感纯正，滑嫩细腻，酱鲜甜润。',
									price : 60,
									detail : '葡萄糖酸、豆浆 <br>榨菜、花生米、辣酱等',
									hotarea : [ 19, 436, 179, 543 ],
									infohotare : [180, 499, 207, 543]
								},{
									name : '竹笼猪手',
									image : 'images/p4f6.png',
									imagen : 'images/p4d6.jpg',
									descn : '粒粒滑爽，口感纯正',
									desc : '用豆浆倒入透明的碗中，两分钟后即可凝结豆腐；称这是世上最鲜嫩的豆腐，豆腐形貌细腻而光滑，美味非同寻常；粒粒滑爽，口感纯正，滑嫩细腻，酱鲜甜润。',
									price : 60,
									detail : '葡萄糖酸、豆浆 <br>榨菜、花生米、辣酱等',
									hotarea : [ 458, 436, 618, 543 ],
									infohotare : [430, 436, 457, 480]
								},{
									name : '山椒肉碎生菜包',
									image : 'images/p4f7.png',
									imagen : 'images/p4d7.jpg',
									descn : '粒粒滑爽，口感纯正',
									desc : '用豆浆倒入透明的碗中，两分钟后即可凝结豆腐；称这是世上最鲜嫩的豆腐，豆腐形貌细腻而光滑，美味非同寻常；粒粒滑爽，口感纯正，滑嫩细腻，酱鲜甜润。',
									price : 60,
									detail : '葡萄糖酸、豆浆 <br>榨菜、花生米、辣酱等',
									hotarea : [ 19, 583, 179, 690 ],
									infohotare : [180, 640, 207, 690]
								},{
									name : '四碗鱿鱼',
									image : 'images/p4f8.png',
									imagen : 'images/p4d8.jpg',
									descn : '粒粒滑爽，口感纯正',
									desc : '用豆浆倒入透明的碗中，两分钟后即可凝结豆腐；称这是世上最鲜嫩的豆腐，豆腐形貌细腻而光滑，美味非同寻常；粒粒滑爽，口感纯正，滑嫩细腻，酱鲜甜润。',
									price : 60,
									detail : '葡萄糖酸、豆浆 <br>榨菜、花生米、辣酱等',
									hotarea : [458, 583, 618, 690],
									infohotare : [430, 583, 457, 627]
								}]
							}
							
							 ],

					//推荐菜系
					suggestionIndex : [ [0,1] ,  [ 1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 3, 5 ] ] ,
					
					//推荐菜数据，在initData()函数中初始化
					suggestionData : [],
					
					//缺菜记录
					oosItems : [[1,1] , [2,3] ] ,
							
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
								items[j].gindex += gindex ;
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
					 * oosItems 缺菜列表，格式为： [[1,1] , [2,1]] 
					 */
						refreshOutofSalesStatus : function(oosItems){
						for(var i = 0; i <= oosItems.length; i++){
							var items = this.pages[i].items ;
							for(var j = 0; j<= oosItems[i].length; j++){
								items[j].outofSales = true ;
							}
						}
					}
					
				});
