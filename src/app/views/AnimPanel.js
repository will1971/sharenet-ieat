Ext.ns("SH");
function setConfig(configObject) {
	config = configObject;
	
	//get ol list and children
    var ol = document.body.getElementsByTagName('ol')[0];
    scenes = ol.children;

	currentSceneIndex = -1;
}

function start() {	
	goToScene(0);
}
function goToSceneID(id) {
	for (var i=0; i < config.length; i++) {
		if (config[i].id === id) {
			goToScene(i);
			return;
		}
	}
}
//function to go directly to any scene
function goToScene(index) {
    
    //go to scene
    startScene(index);

	//set up timer if jumping on done
	if (config[index].jump !== -1) {
		applyTimeout(config[index].jump, config[index].duration);
	}
	
}

function startScene(index) {
    
	//restart current scene without flicker
	if (index === currentSceneIndex) {
		scenes[index].setAttribute('class','run restart');
		setTimeout(function(){
	        scenes[index].setAttribute('class','run');
			},0);
		return;
	}

    //add the class "run" to the scene currently running and remove it from anybody else
    var scene;
    for (var i=0; i < scenes.length; i++) {
        scene = scenes[i];
        if (i === index) {
            scene.setAttribute('class','run');
        } else {
            scene.setAttribute('class','');
        }
        
    }

	currentSceneIndex = index;
    
}
function applyTimeout(index,time) {
    setTimeout(function(){
        goToScene(index);
    },time);
}
function setup() {
setConfig([{"jump":-1,"duration":2750,"id":0}]);
start();
}
SH.AnimPanel = Ext.extend(Ext.Panel,{
	html:'<ol><li id="scene-0"><div class="AN-sObj-stage" id="ext-gen878"><div class="AN-Object" id="AN-sObj-65"><div id="AN-sObj-val-65"><img src="images/bg.jpg"></div></div><div class="AN-Object" id="AN-sObj-66"><div id="AN-sObj-val-66"><img src="images/title.png"></div></div><div class="AN-Object" id="AN-sObj-68"><div id="AN-sObj-val-68"><img src="images/f1.png"></div></div></div></li></ol>',
	afterRender: function() {
        setup();
   }
});


