/**
 * The entry point, page render start from here.
 */
Ext.setup( {
		tabletStartupScreen : 'images/tablet_startup.jpg',
		icon : 'icon.png',
		glossOnIcon : true,
		
		onReady : function() {

			//算幸运数字    弟子不必贤于师  师不必不如弟子
			
				
			
			var randomNumber;
			  CreateRanNum();
			var x="v"+randomNumber;    
			  function CreateRanNum(){
			  randomNumber = Math.round((2-1) * Math.random()+1);
			  }
			  this.lucky = x ;
	          
	          
			new Ext.Panel({
				
				fullscreen : true,
				
			    layout: {
			        type: 'hbox',
			        pack: 'center'
			    },
			    
			    items: [
			            {
			        id: 'v1' ,
			        xtype: 'video',
			        /*url: 'video/egg_win.mp4',*/
			        loop: true,
			        cls: 'egg grid_6' ,
			        height: 300,
			        posterUrl: 'video/egg_01.jpg' ,
					listeners : {
						click : {
							element : 'el',
							fn : eggHandler ,
							scope : this 
						}
					}
			        	
			    } ,
		         {
			        id: 'v2' ,
			        xtype: 'video',
			        /*url: 'video/space.mp4',*/			        
			        loop: true,
			        cls: 'egg grid_6' ,
			        height: 300,
			        posterUrl: 'video/egg_01.jpg',
			        
					listeners : {
						tap : {
							element : 'el',
							fn : eggHandler,
							scope : this 
						}
					}
			    } ,
		         /*{
			        id: 2 ,
			        xtype: 'video',
			        url: 'video/space.mp4',
			        loop: true,
			        cls: 'egg grid_5' ,
			        height: 250,
			        posterUrl: 'video/egg_01.jpg' ,
					listeners : {
						tap : {
							element : 'body',
							fn : eggHandler
						}
					}
			    } ,*/
		         /*{
			        id: 3 ,
			        xtype: 'video',
			        url: 'video/space.mp4',
			        loop: true, 
			        cls: 'egg grid_5' ,
			        height: 250,
			        posterUrl: 'video/egg_01.jpg',
					listeners : {
						tap : {
							element : 'body',
							fn : eggHandler
						}
					}
			    }*/
			   ]
			});

		}
		
});


function eggHandler(event){
	console.log(this.lucky);
	console.log(event.target.parentElement.id);
	if(this.lucky == event.target.parentElement.id){
		//event.target.src = "video/egg_win.mp4" ;	
    
    var str="<body background=video/bg_05.jpg><h1>恭喜您中奖了！</h1></body>" +
    		"<p><EMBED pluginspage= http://www.macromedia.com/go/getflashplayer src=video/eggs_s.swf width=730 height=750 type=application/x-shockwave-flash quality=high allowNetworking=internal allowScriptAccess=never> </p>";
    document.write(str);
	}else{
		//event.target.src = "video/space.mp4" ;egg_faild_1.mp4
		
		var str="<body background=video/bg_05.jpg><h1>祝您下次中奖！</h1></body>" +
		"<p><video width=400 height=300 controls=controls><source src=video/egg_faild_1.mp4 type=video/mp4></p>";
		document.write(str);
	}
}

