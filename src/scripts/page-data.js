/**
 * Type Define
 */
var moduleDefined = false ;
//food type
var types = ['凉菜' , '热菜'	, '酒水' , '点心' , '特色推荐'];

//each food type start position, will using for jump page
var typeStartIndex = { '凉菜' : 1 , '热菜' : 3 , '酒水' : 11 , 
		'点心' : 10 , '特色推荐' : 9 } ;

/**
 * create data store module
 */
function createStoreModule(){
	
	// the page define module
	if(!moduleDefined){
		
		Ext.regModel('Page', {
			fields : [ 'id' , 'pageIndex', 'image', 'snapshot' ,'type', 'cls'] 
		});
	
		Ext.regModel('Item', {
			fields : [ 'id' , 'page_id' , 'name', 'image', 'desc', 'price',
					'type', 'detail', 'cls' ]
		});
		
		Ext.regModel('Table', {
			fields : [ 'id' , 'desc' /* 其他信息 */ , 'state' /*当前状态*/ ,] 
		});
		
		moduleDefined = false ;
	}
}


/**
 * create a store object for the order list
 * @return
 */
function createPageStore(){
	
	/* Page : 'id' , 'pageIndex', 'image', 'snapshot' ,'type', 'cls' 
	 * Item : 'id' , 'page_id' , 'name', 'image', 'desc', 'price' 
	 *        'type', 'detail', 'cls'  */
	var pageStore = new Ext.data.JsonStore({
		model : 'Page',
		sorters : 'id',

		/**
		 * the page define JSON, the object must follow the index of page
		 * otherwize, maybe out of control.
		 * total : 20 sheet , '凉菜'： 2 , '热菜'： 10 , '点心' ： 2 ,'酒水'： 1 , '特色推荐' : 3
		 */
		data : [
		 /*
		  * 封面和使用说明   
		  */    
		{
			id: -2 , image : 'images/p0-1.jpg', cls : 'cover-page' , 
			html : '<div id="AN-sObj-stage" class="push_5 vpush_2 grid_2"><div class="AN-Object" id="AN-sObj-1" style="-webkit-transform: scale3d(1, 1, 1); opacity: 1; -webkit-animation-name: AN-ani-2; -webkit-animation-duration: 2s; "><div id="AN-sObj-val-1"><img src="images/lou.png"></div></div><div class="AN-Object" id="AN-sObj-2" style="-webkit-transform: scale3d(1, 1, 1); opacity: 1; -webkit-animation-name: AN-ani-1; -webkit-animation-duration: 1.5s; "><div id="AN-sObj-val-2"><img src="images/qing.png"></div></div><div class="AN-Object" id="AN-sObj-3" style="-webkit-transform: scale3d(1, 1, 1); opacity: 1; -webkit-animation-name: AN-ani-0; -webkit-animation-duration: 0.99s; "><div id="AN-sObj-val-3"><img src="images/tong.png"></div></div></div>' 
		},{
			id: -1 ,image : 'images/p0-3.jpg', cls : 'cover-page' , 
			html : '<div class="itemctl f11 vpush_5 push_3"><span class="desc">翻页</span></div> <div class="itemctl f11 vpush_10 push_3"> <span class="desc">选择菜类</span></div> <div class="itemctl f11 vpush_5 push_9"><span class="desc">点菜</span></div> <div class="itemctl f11  vpush_10 push_9"><span class="desc">快速翻页</span></div>'  
		},
		{
			id : 0 , pageIndex : 1 , 
			image : 'images/p1.jpg', snapshot : 'images/p1-small.jpg',
			type : types[0], cls : 'page' ,
			items : [{
				id : 0 , page_id: 0 , name: '翡翠黄瓜' , image : 'images/p1f1-small.gif' ,
				desc: '清热解毒   富含维生素   绿白相间   赏心悦目' , price: 10 , type: types[0] , detail: '黄瓜 木耳 茭白木耳适量', 
				controlCls: 'push_5 vpush_1 f1'
			},{
				id : 1 , page_id: 0 , name: '蜜汁卤肉' , image : 'images/p1f2-small.gif' ,
				desc: '富含蛋白质  滋阴润燥 补虚养血 美容养颜' , price: 25 , type: types[0] , detail: '优质猪肉', 
			    controlCls: 'push_7 vpush_4 f2'
			}] 
		},{
			id : 1 , pageIndex : 2 , 
			image : 'images/p2.jpg', snapshot : 'images/p2-small.jpg',
			type : types[0], cls : 'page' ,
			items : [{
				id : 2 , page_id: 1 , name: '荷叶虾仁' , image : 'images/p2f1-small.gif' ,
				desc: '清脆爽口 味鲜色美 荤素兼之 营养丰富' , price: 35 , type: types[1] , detail: '黄瓜 虾仁 腰果蒜籽等适量',
			    controlCls: 'push_2 vpush_2 f2'
			},{
				id : 3 , page_id: 1 , name: '冰雪羊肉' , image : 'images/p2f2-small.gif' ,
				desc: '羊肉暖胃 帮助消化 滋阴补肾 <br>令人垂涎 尤其适用于体虚胃寒者' , price: 60 , type: types[1] ,	detail: '高品质瘦羊肉', 
			    controlCls: 'push_1 vpush_5 grid_5 f1'
			}]
		},{
			id : 2 , pageIndex : 3 , 
			image : 'images/p3.jpg', snapshot : 'images/p3-small.jpg',
			type : types[1] ,  cls : 'page' ,
			items : [{
				id : 4 , page_id: 2 , name: '鸡蛋锅贴' , image : 'images/p3f1-small.gif' ,
				desc: '气血双补  滋阴补肾 香脆可口 营养丰富' , price: 10 , type: types[1] , detail: '猪瘦肉 鸡蛋 小麦面粉 胡萝卜等', 
				controlCls: 'push_4 vpush_1 grid_4 f2'
			},{
				id : 5 , page_id: 2 , name: '银丝鸡蛋面' , image : 'images/p3f2-small.gif' ,
				desc: '汤面暖胃  安神润燥  鲜香清淡  营养丰富' , price: 15 , type: types[1] , detail: '银丝面 鸡蛋', 
				controlCls: 'push_4 vpush_4 grid_4 f2'
			},{
				id : 6 , page_id: 2 , name: '海鲜靓汤' , image : 'images/p3f3-small.gif' ,
				desc: '富含蛋白质 谷氨酸等人体必须物质  滋阴养胃  明目润肤  美容佳品' , price: 15 , type: types[1] , detail: '鱿鱼 鲜虾 蛤蜊 三菇（金针菇 香菇 鸡腿菇） 粉丝 白菜 葱白', 
				controlCls: 'push_1 vpush_6 grid_5 f2'
			}]
		},{
			id : 3 , pageIndex : 4 , 
			image : 'images/p4.jpg', snapshot : 'images/p4-small.jpg',
			type : types[1] ,  cls : 'page' ,
			items : [{
				id : 7 , page_id: 3 , name: '吴山贡鹅' , image : 'images/p4f1-small.gif' , 
				desc: '富含蛋白质 矿物质和维生素E 暖胃生津 补虚益气 ' , price: 55 , type: types[1], 
				detail: '优质白鹅', cls: 'f1',
			    controlCls: 'push_1 vpush_5 grid_4 f2'
			},{
				id : 8 , page_id: 3 , name: '花式豆腐皮' ,  image : 'images/p4f2-small.gif' , 
				desc: '含有丰富的优质蛋白 生津润燥 清热解毒' , price: 15 , type: types[1] , detail: '薄豆腐皮', 
			    controlCls: 'push_8 vpush_8 grid_4 f2'
			}]
		},{
			id : 4 , pageIndex : 5 , 
			image : 'images/p5.jpg', snapshot : 'images/p5-small.jpg',
			type : types[1] ,  cls : 'page' ,
			items : [{
				id : 9 , page_id: 4 , name: '扣肉白馍' ,  image : 'images/p5f1-small.gif' , 
				desc: '甘而不腻 猪肉富含维生素B1 高蛋白质 具补虚养身之功效' , price: 38 , type: types[1] , detail: '五花肉 白馍',
				controlCls: 'push_1 vpush_2 grid_5 f2'
			},{
				id : 10 , page_id: 4 , name: '年糕西兰花' , image : 'images/p5f2-small.gif' , 
				desc: '年糕富含蛋白质及人体所需的微量元素 西兰花有防癌抗癌的功效  健脑' , price: 10 , type: types[1] , detail: '小年糕 西兰花',
				controlCls: 'push_1 vpush_5 grid_6 f2'
			}]
		},{
			id : 5 , pageIndex : 6 , 
			image : 'images/p6.jpg', snapshot : 'images/p6-small.jpg',
			type : types[1] ,  cls : 'page' ,
			items : [{
				id : 11 , page_id: 5 , name: '片儿鸭' , image : 'images/p6f1-small.gif' , 
				desc: '补虚滋阴 养胃生津 汁液丰富 垂涎欲滴 老少皆宜' , price: 60 , type: types[1] , detail: '美味烤鸭 黄瓜段 葱白 面皮 花生酱',
				controlCls: 'push_1 vpush_9 f11'
			}]
		},{
			id : 6 , pageIndex : 7 , 
			image : 'images/p7.jpg', snapshot : 'images/p7-small.jpg', 
			type : types[1] ,  cls : 'page' ,
			items : [{
				id : 12 , page_id: 6 , name: '东坡肉' , image : 'images/p7-small.jpg' , 
				desc: '含有丰富的优质蛋白质和必需的脂肪酸 补肾养血 滋阴润燥 肥而不腻' , price: 38 , type: types[1] , detail: '优质五花肉 西兰花',
				controlCls: 'push_1 vpush_8 grid_5 f2'
			}]
		}, {
			id : 7 , pageIndex : 8 , 
			image : 'images/p8.jpg', snapshot : 'images/p8-small.jpg',
			type : types[1] ,  cls : 'page' ,
			items : [{
				id : 13 , page_id: 7 , name: '蜜汁龙虾' ,  image : 'images/p8f1-small.gif' , 
				desc: '补肾壮阳 通乳滋阴 养血固精 化瘀解毒 老少皆宜' , price: 10 , type: types[1] , detail: '澳洲大龙虾',
				controlCls: 'push_4 vpush_1 grid_4 f2'
			},{
				id : 14 , page_id: 7 , name: '滋补牛肚汤' ,  image : 'images/p8f2-small.gif' , 
				desc: '牛肚含蛋白质等对人体有益元素 补益脾胃 补气养血 补虚益精 为一款滋补类靓汤' , price: 50 , type: types[1] , detail: '牛肚 香茹 西兰花等',
				controlCls: 'push_1 vpush_5 grid_6 f2'
			}]
		},{
			id : 8 , pageIndex : 9 , 
			image : 'images/p9.jpg', snapshot : 'images/p9-small.jpg',
			type : types[1] ,  cls : 'page' ,
			items : [{
				id : 15 , page_id: 8 , name: '密汁凤爪' ,  image : 'images/p9f1-small.gif' , 
				desc: '具有软化血管 美容养颜功效  是一款休闲 喝酒上好小菜' , price: 25 , type: types[1] , detail: '优质鸡爪',
				controlCls: 'push_1 vpush_2 grid_5 f2'
			},{
				id : 16 , page_id: 8 , name: '人参乳鸽汤' ,  image : 'images/p9f2-small.gif' , 
				desc: '补气生血 健脾益胃 强心提神 滋补肝肾 为养生滋补之佳品' , price: 99 , type: types[1] , detail: '东北人参 乳鸽 枸杞',
				controlCls: 'push_1 vpush_5 grid_5 f2'
			}] 
		}/*
		  * FIXIT: if the data huge than 
		  */
		,{
			id : 9 , pageIndex : 10 , 
			image : 'images/p10.jpg', snapshot : 'images/p10-small.jpg',
			type : types[2] ,  cls : 'page' ,
			items : [{
				id : 17 , page_id: 9 , name: '翡翠黑米糕' ,  image : 'images/p10f2-small.gif' , 
				desc: '黑米含蛋白质及多种人体所需微量元素 益气补血 润肺止咳 暖胃健脾 滋补肝肾 营养丰富' , price: 30 , type: types[3] , detail: '黑米 新鲜豌豆',
				controlCls: 'push_9 vpush_2 f2'
			},{
				id : 18 , page_id: 9 , name: '美味肉粽' , image : 'images/p10f1-small.gif' , 
				desc: '补中益气 健脾养胃 滋阴润燥 为中国特色美食' , price: 50 , type: types[3] , detail: '糯米 鲜瘦肉',
				controlCls: 'push_1 vpush_6 grid_3 f2'
			}]
		},
		{
			id : 10 , pageIndex : 11 , 
			image : 'images/p11.jpg', snapshot : 'images/p11-small.jpg',
			type : types[2] ,  cls : 'page' ,
			items : [{
				id : 19 , page_id: 10 , name: '法国香槟' , image: 'images/p11f1-small.gif' , 
				desc: '馥郁芳香 口感绵延持久 乃节日庆典 必备良酒' , price: 680 , type: types[2] , detail: 'Food1 is a good Food',
				controlCls: 'push_2 vpush_4 grid_4 f11'
			},{
				id : 20 , page_id: 10 , name: '手调果酒' , image: 'images/p11f2-small.gif' , 
				desc: '果酒有利于调节 情绪保持身材  有益健康 ' , price: 80 , type: types[2] , detail: 'Food1 is a good Food',
				controlCls: 'push_1 vpush_8 grid_3 f11'
			}]
		},
		/**
		 * 封底
		 */
		{
			id: 1002 , image : 'images/p0-2.jpg', cls : 'cover-page' , 
			html : "" 
		}]
	});
	return pageStore ;
}

function createTableStore(){
	var tableStore = new Ext.data.JsonStore({
		/**
		 * 'id' , 'desc' , 'state' 
		 */
		model : 'Table',
		sorters : 'id',
		data : [
		    { id : 1 , desc : '一号桌，四座' , state: '未定' } ,
		    { id : 2 , desc : '二号桌，四座' , state: '未定' } ,
		    { id : 3 , desc : '三号桌，四座' , state: '未定' } ,
		    { id : 4 , desc : '四号桌，四座' , state: '未定' } ,
		    { id : 5 , desc : '五号桌，四座' , state: '未定' } ,
		    { id : 6 , desc : '六号桌，四座' , state: '未定' } ,
		    { id : 7 , desc : '七号桌，四座' , state: '未定' } 
		]
	}) ;
	return tableStore ;
}

