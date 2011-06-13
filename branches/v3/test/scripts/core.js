//
// A package consisting of a variety of functions for detecting various
// capabilities about a specified user agent.
//
// While browser detection is frowned up, there is a definite need at times.
// Just use it for the right reasons.
//
// Be sure to check the extensive unit testing for this package in
// the sandbox. But keep in mind that optimizations made to this file have
// broken the tests. Specifically, anytime the result of the test is cached
// the test is not re-evaluated.
//

if (typeof(AC) === "undefined") {
    AC = {};
}

// == AC.Detector ==
// The package all detection functions are stored within.
AC.Detector = {

    // ** {{{ AC.Detector.getAgent() }}} **
    //
    // Returns the name of the user agent, normalized as all lower case.
    getAgent: function()
    {
        return navigator.userAgent.toLowerCase();
    },

    // ** {{{ AC.Detector.isMac() }}} **
    //
    // Returns whether or not the platform is a Mac.
    isMac: function(userAgent)
    {
        var agent = userAgent || this.getAgent();
        return !!agent.match(/mac/i);
    },

	// ** {{{ AC.Detector.isSnowLeopard() }}} **
	//
	// Returns whether or not the OS is Snow Leopard
	isSnowLeopard: function(userAgent)
	{
		var agent = userAgent || this.getAgent();
		return !!agent.match(/mac os x 10_6/i);
	},

    // ** {{{ AC.Detector.isWin() }}} **
    //
    // Returns whether or nor the platform is Windows, regardless of version.
    isWin: function(userAgent)
    {
        var agent = userAgent || this.getAgent();
        return !!agent.match(/win/i);
    },

    // ** {{{ AC.Detector.isWin2k() }}} **
    //
    // Returns whether or not the platform is Windows 2000.
    isWin2k: function(userAgent)
    {
        var agent = userAgent || this.getAgent();
        return this.isWin(agent) && (agent.match(/nt\s*5/i));
    },

    // ** {{{ AC.Detector.isWinVista() }}} **
    //
    // Returns whether or not the platform is Windows Vista.
    isWinVista: function(userAgent)
    {
        var agent = userAgent || this.getAgent();
        return this.isWin(agent) && (agent.match(/nt\s*6/i));
    },

    // ** {{{ AC.Detector.isWebKit() }}} **
    //
    // Returns whether or not the user agent is using the webkit engine.
    isWebKit: function(userAgent)
    {
        if(this._isWebKit === undefined) {
            var agent = userAgent || this.getAgent();
            this._isWebKit =  !!agent.match(/AppleWebKit/i);
            this.isWebKit = function() {
                return this._isWebKit;
            };
        }
        return this._isWebKit;
    },

    // ** {{{ AC.Detector.isSafari2() }}} **
    //
    // Returns whether or not the user agent is Safari 2.
    isSafari2: function(userAgent)
    {
        if(this._isSafari2 === undefined) {
            if (!this.isWebKit()) {
                this._isSafari2 = false;
            } else {
                var ua = navigator.userAgent.toLowerCase();
               var version = parseInt(parseFloat(ua.substring(ua.lastIndexOf('safari/') + 7)), 10);
                this._isSafari2 = (version >= 419);
            }
            this.isSafari2 = function() {
                return this._isSafari2;
            };
        }
        return this._isSafari2;
    },

	// ** {{{ AC.Detector.isChrome() }}} **
	//
	// Returns whether or not the user agent is Chrome.
	isChrome: function(userAgent)
	{
		if(this._isChrome === undefined) {
			var agent = userAgent || this.getAgent();
			this._isChrome = !!agent.match(/Chrome/i);
			this.isChrome = function() {
				return this._isChrome;
			};
		}
		return this._isChrome;
	},

    // ** {{{ AC.Detector.isOpera() }}} **
    //
    // Returns whether or not the user agent is Opera
    isOpera: function(userAgent)
    {
        var agent = userAgent || this.getAgent();
        return !!agent.match(/opera/i);
    },

    // ** {{{ AC.Detector.isIE() }}} **
    //
    // Returns whether or not the user agent reports that it is IE.
    isIE: function(userAgent)
    {
        var agent = userAgent || this.getAgent();
        return !!agent.match(/msie/i);
    },

    // ** {{{ AC.Detector.isIEStrict() }}} **
    //
    // Returns whether or not the is IE, and not another browser
    // masquerading as IE.
    isIEStrict: function(userAgent)
    {
        var agent = userAgent || this.getAgent();
        return agent.match(/msie/i) && !this.isOpera(agent);
    },

	// ** {{{ AC.Detector.isIE8() }}} **
	//
	// Returns whether or not the browser is IE8+
	isIE8: function(userAgent) {
		var agent = userAgent || this.getAgent();
		
		var match = agent.match(/msie\D*([\.\d]*)/i);
     	if (match && match[1]) {
        	version = match[1];
      	}
		
		return +version >= 8;
	},
	
    // ** {{{ AC.Detector.isFirefox() }}} **
    //
    // Returns whether or not the user agent is Firefox.
    isFirefox: function(userAgent)
    {
        var agent = userAgent || this.getAgent();
        return !!agent.match(/firefox/i);
    },

    //deprecated, use isMobile
    isiPhone: function(userAgent)
    {
        var agent = userAgent || this.getAgent();
        return this.isMobile(agent);
    },
	/*Returns an array with the version numbers*/
	iPhoneOSVersion: function(userAgent) {
		//OSString: Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/XXXXX Safari/525.20
        var agent = userAgent || this.getAgent(),
			isMobile = this.isMobile(agent),
			OSString, OSStringParts, version;
		if(isMobile) {
			//Now looks at user agent
			var OSString = agent.match(/.*CPU ([\w|\s]+) like/i);
			if(OSString && OSString[1]) {
				OSStringParts = OSString[1].split(" ");
				version = OSStringParts[2].split("_");
				return version;
			}
			else {
				//iPhone running  : Mozilla/5.0 (iPod; U; CPU iPhone OS 2_2_1 like Mac OS X; pl-pl) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5H11 Safari/525.20
				//iPod touch running iPhone OS 1.1.3 user agent string: Mozilla/5.0 (iPod; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/4A93 Safari/419.3
				//iPhone running iPhone OS 1.0 user agent string: Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A543 Safari/419.3

				return [1];
			}

		}
		else return null;

	},
	
	// ** {{{ AC.Detector.isiPad() }}} **
	//
	// Returns whether or not the platform is an iPad
    isiPad: function(userAgent)
    {
        var agent = userAgent || this.getAgent();
		//iPad running: Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10
        return !!(this.isWebKit(agent) && agent.match(/ipad/i));
    },

    // ** {{{ AC.Detector.isMobile() }}} **
    //
    // Returns whether or not the platform is an iPhone or an iPhone touch.
    isMobile: function(userAgent)
    {
        var agent = userAgent || this.getAgent();
        return this.isWebKit(agent) && (agent.match(/Mobile/i) && !this.isiPad(agent));
    },

    // ** {{{ AC.Detector.isiTunesOK() }}} **
    //
    // Returns whether or not the platform is compatible with iTunes.
    isiTunesOK: function(userAgent)
    {
        var agent = userAgent || this.getAgent();
        return this.isMac(agent) || this.isWin2k(agent);
    },

    // ** {{{ AC.Detector.isQTInstalled() }}} **
    //
    // Returns whether or not the QuickTime plugin is installed.
    //
    // Note that the iPhone is not regisetered by this, but is typically
    // treated as having QuickTime.

    _isQTInstalled: undefined,

    isQTInstalled: function()
    {

		if(this._isQTInstalled === undefined) {
	        var qtInstalled = false;

	        if (navigator.plugins && navigator.plugins.length) {

	            for(var i=0; i < navigator.plugins.length; i++ ) {
	                var plugin = navigator.plugins[i];

	                if (plugin.name.indexOf("QuickTime") > -1) {
	                    qtInstalled = true;
	                }
	            }
	        } else if (typeof(execScript) != 'undefined') {
	            qtObj = false; //global variable written to by vbscript for ie
	            execScript('on error resume next: qtObj = IsObject(CreateObject("QuickTimeCheckObject.QuickTimeCheck.1"))','VBScript');
	            qtInstalled = qtObj;
	        }

			this._isQTInstalled = qtInstalled;
		}
		return this._isQTInstalled;
    },

    // ** {{{ AC.Detector.getQTVersion() }}} **
    //
    // Returns the version of QuickTime installed.
    //
    getQTVersion: function()
    {
        var version = "0";

        if (navigator.plugins && navigator.plugins.length) {
            for (var i = 0; i < navigator.plugins.length; i++) {

                var plugin = navigator.plugins[i];

                //Match: QuickTime Plugin X.Y.Z
                var match = plugin.name.match(/quicktime\D*([\.\d]*)/i);
                if (match && match[1]) {
                    version = match[1];
                }
            }
        } else if (typeof(execScript) != 'undefined') {
            ieQTVersion=null;

            execScript('on error resume next: ieQTVersion = CreateObject("QuickTimeCheckObject.QuickTimeCheck.1").QuickTimeVersion','VBScript');

            if(ieQTVersion){
                // ieQTVersion is comes back as '76208000' when 7.6.2 is installed.
                version = ieQTVersion.toString(16);
                version = [version.charAt(0), version.charAt(1), version.charAt(2)].join('.');
            }
        }

        return version;
    },

    // ** {{{ AC.Detector.isQTCompatible(required, actual) }}} **
    //
    // Returns whether or not the {{{actual}}} version is considered
    // compatible with the {{{required}}} version.
    //
    // Note that versions are expressed as dot-delimited strings.
    //
    // {{{required}}}: The minimum version required
    //
    // {{{actual}}}: The actual version available
    //
    isQTCompatible: function(required, actual)
    {
        function areCompatible(required, actual) {

            var requiredValue = parseInt(required[0], 10);
            if (isNaN(requiredValue)) {
                requiredValue = 0;
            }

            var actualValue = parseInt(actual[0], 10);
            if (isNaN(actualValue)) {
                actualValue = 0;
            }

            if (requiredValue === actualValue) {
                if (required.length > 1) {
                    return areCompatible(required.slice(1), actual.slice(1));
                } else {
                    return true;
                }
            } else if (requiredValue < actualValue) {
                return true;
            } else {
                return false;
            }
        }

        var expectedVersion = required.split(/\./);
        var actualVersion = actual ? actual.split(/\./) : this.getQTVersion().split(/\./);

        return areCompatible(expectedVersion, actualVersion);
    },

    // ** {{{ AC.Detector.isValidQTAvailable(required) }}} **
    //
    // Returns whether or not the QuickTime plugin installed is compatible
    // with the {{{required}}} version.
    //
    // {{{required}}}: The minimum version required
    //
    isValidQTAvailable: function(required)
    {
        return this.isQTInstalled() && this.isQTCompatible(required);
    },

	// ** {{{ AC.Detector.isSBVDPAvailable(required) }}} **
    //
    // Returns whether or not the SBVDP plugin installed is compatible
    // with the {{{required}}} version.
    //
    // {{{required}}}: The minimum version required
	// *note* default should be 9.0.115 for h.264 encoded movies
    //
	isSBVDPAvailable: function(required) {
        return false;
	}

};

//onDOMReady Event Extension
//http://clientside.cnet.com/code-snippets/event-scripting/a-dom-ready-extension-for-prototype/
Object.extend(Event, {
  _domReady : function() {
    if (arguments.callee.done) return;
    arguments.callee.done = true;

    if (this._timer)  clearInterval(this._timer);
    AC.isDomReady = true;
    if(this._readyCallbacks) this._readyCallbacks.each(function(f) { f() });
    this._readyCallbacks = null;
},

  onDOMReady : function(f) {
	if(AC.isDomReady) {
		f();
	}
    else {
		if (!this._readyCallbacks) {
			  var domReady = this._domReady.bind(this);
			  
			  if (document.addEventListener)
				document.addEventListener("DOMContentLoaded", domReady, false);
				
				if(document.all) {
						document.onreadystatechange = function() {
							if (this.readyState == "complete") domReady(); 
						};

//					/*@cc_on @*/
//					/*@if (@_win32)
//						document.write('<script type="text/javascript" id="__ie_onload" defer="defer" src=javascript:void(0)><\/script>');
//						document.getElementById("__ie_onload").onreadystatechange = function() {
//							if (this.readyState == "complete") domReady(); 
//						};
//					/*@end @*/
				}
				
				if (/WebKit/i.test(navigator.userAgent)) { 
				  this._timer = setInterval(function() {
					if (/loaded|complete/.test(document.readyState)) domReady(); 
				  }, 10);
				}
				
				Event.observe(window, 'load', domReady);
				Event._readyCallbacks =  [];
			}
			Event._readyCallbacks.push(f);
	  }
  }
});
//   onDOMReady : function(f) {
// 	if(AC.isDomReady) {
// 		f();
// 	}
//     else {
// 		if (!this._readyCallbacks) {
// 			  var domReady = this._domReady.bind(this);
// 			  
// 			  if (document.addEventListener)
// 				document.addEventListener("DOMContentLoaded", domReady, false);
// 				
// 				/*@cc_on @*/
// 				/*@if (@_win32)
// 					document.write("<script id=__ie_onload defer src=javascript:void(0)><\/script>");
// 					document.getElementById("__ie_onload").onreadystatechange = function() {
// 						if (this.readyState == "complete") domReady(); 
// 					};
// 				/*@end @*/
// 				
// 				if (/WebKit/i.test(navigator.userAgent)) { 
// 				  this._timer = setInterval(function() {
// 					if (/loaded|complete/.test(document.readyState)) domReady(); 
// 				  }, 10);
// 				}
// 				
// 				Event.observe(window, 'load', domReady);
// 				Event._readyCallbacks =  [];
// 			}
// 			Event._readyCallbacks.push(f);
// 	  }
//   }
// });


if (typeof(AC) == "undefined") AC = {};

AC.decorateSearchInput = function(field, options) {
	
	var searchField = $(field);
	var standIn = null;

	var results = 0;
	var placeholder = '';
	var autosave = '';

	if(options) {
		
		if(options.results) { results = options.results; }
		if(options.placeholder) { placeholder = options.placeholder; }
		if(options.autosave) { autosave = options.autosave; }
		
	}
	
	if(AC.Detector.isWebKit()) {

        if(AC.Detector.isWin()) {
            searchField.addClassName('not-round');
        }

		searchField.setAttribute('type', 'search');
		if(!searchField.getAttribute('results')) {
			searchField.setAttribute('results', results);
		}
		
		if(null != placeholder) {
			searchField.setAttribute('placeholder', placeholder);
			searchField.setAttribute('autosave', autosave);
		}
		
	} else {
		
		//prevent browser from doing its own autocomplete, threw odd xul 
		//error on reset sometimes, although this feels a little
		//heavy handed
		searchField.setAttribute('autocomplete', 'off');
		
		//replace the field with a standin while we create the wrapper
		//we can't lose the reference to this field as other objects may
		//have already registered listeners on this field
		
		standIn = document.createElement('input');
		searchField.parentNode.replaceChild(standIn, searchField)

		var left = document.createElement('span');
		Element.addClassName(left, 'left');
	
		var right = document.createElement('span');
		Element.addClassName(right, 'right');
		
		var reset = document.createElement('div');
		Element.addClassName(reset, 'reset');
		
		var wrapper = document.createElement('div');
		Element.addClassName(wrapper, 'search-wrapper');
		
		var alreadyHasPlaceholder = field.value == placeholder;
		var isEmpty = field.value.length == 0;
		
		if (alreadyHasPlaceholder || isEmpty) {
			searchField.value = placeholder;
			Element.addClassName(wrapper, 'blurred');
			Element.addClassName(wrapper, 'empty');
		}
	
		wrapper.appendChild(left);
		wrapper.appendChild(searchField);
		wrapper.appendChild(right);
		wrapper.appendChild(reset);
	
		var focus = function() {
			
			var blurred = Element.hasClassName(wrapper, 'blurred');

			//need to check for flag AND placeholder lest somebody need to 
			//search for the placeholder text itself
			if(searchField.value == placeholder && blurred) {
				searchField.value = '';
			}
			
			Element.removeClassName(wrapper, 'blurred');
		}
		Event.observe(searchField, 'focus', focus);
		
		var blur = function() {
			
			if(searchField.value == '') {
				Element.addClassName(wrapper, 'empty');
				searchField.value = placeholder;
			}
			
			Element.addClassName(wrapper, 'blurred');
		}
		Event.observe(searchField, 'blur', blur);
		
		
		var toggleReset = function() {
			
			if(searchField.value.length >= 0) {
				Element.removeClassName(wrapper, 'empty');
			}
		}
		Event.observe(searchField, 'keydown', toggleReset);
	
	
		var resetField = function() {
			return( function(evt) {
				
				var escaped = false;
				
				if(evt.type == 'keydown') {
					if(evt.keyCode != 27) {
						return; //if it's not escape ignore it
					} else {
						escaped = true;
					}
				}
				
				searchField.blur(); //can't change value while in field
				searchField.value = '';
				Element.addClassName(wrapper, 'empty');
				searchField.focus();

			})
		}
		Event.observe(reset, 'mousedown', resetField());
		Event.observe(searchField, 'keydown', resetField());
	
		if (standIn) {
			standIn.parentNode.replaceChild(wrapper, standIn);
		}
		
	}
}

// this is called Element2 because
// adding methods to Element BLOWS UP IE7 
// for a reason I still haven't got to the bottom
// of.  It appears to be fine though, as long
// as you don't try to add additional methods
// to Element itself.
var Element2 = {};
Element2.Methods = {
	
	getInnerDimensions: function(element) {
    	
		element = $(element);
		var d = Element.getDimensions(element);
		
		var innerHeight = d.height;
		var styleOf = Element.getStyle;
		innerHeight -= styleOf(element, 'border-top-width') && styleOf(element, 'border-top-width') != 'medium' ? parseInt(styleOf(element, 'border-top-width'), 10) : 0;
		innerHeight -= styleOf(element, 'border-bottom-width') && styleOf(element, 'border-bottom-width') != 'medium' ? parseInt(styleOf(element, 'border-bottom-width'), 10) : 0;
		innerHeight -= styleOf(element, 'padding-top') ? parseInt(styleOf(element, 'padding-top'), 10) : 0;
		innerHeight -= styleOf(element, 'padding-bottom') ? parseInt(styleOf(element, 'padding-bottom'), 10) : 0;

		var innerWidth = d.width;
		innerWidth -= styleOf(element, 'border-left-width') && styleOf(element, 'border-left-width') != 'medium' ? parseInt(styleOf(element, 'border-left-width'), 10) : 0;
		innerWidth -= styleOf(element, 'border-right-width') && styleOf(element, 'border-right-width') != 'medium' ? parseInt(styleOf(element, 'border-right-width'), 10) : 0;
		innerWidth -= styleOf(element, 'padding-left') ? parseInt(styleOf(element, 'padding-left'), 10) : 0;
		innerWidth -= styleOf(element, 'padding-right') ? parseInt(styleOf(element, 'padding-right'), 10) : 0;

	    return {width: innerWidth, height: innerHeight};
	},
	
	getOuterDimensions: function(element) {
		element = $(element);
		var clone = element.cloneNode(true);
		
		document.body.appendChild(clone);
		Element.setStyle(clone, { position: "absolute", visibility: "hidden" });
		var d = Element.getDimensions(clone);
		
		var outerHeight = d.height;
		var styleOf = Element.getStyle;
		outerHeight += styleOf(clone, 'margin-top') ? parseInt(styleOf(clone, 'margin-top'), 10) : 0;
		outerHeight += styleOf(clone, 'margin-bottom') ? parseInt(styleOf(clone, 'margin-bottom'), 10) : 0;

		var outerWidth = d.width;
		outerWidth += styleOf(clone, 'margin-left') ? parseInt(styleOf(clone, 'margin-left'), 10) : 0;
		outerWidth += styleOf(clone, 'margin-right') ? parseInt(styleOf(clone, 'margin-right'), 10) : 0;

		Element.remove(clone);
		
		return {width: outerWidth, height: outerHeight};
	},
	
	removeAllChildNodes: function(element) {
		element = $(element);
		if(! element) { return; }
		
		while (element.hasChildNodes()) {
	  		element.removeChild(element.lastChild);
		}
	}
	
};

Object.extend(Element, Element2.Methods);

Element.Methods.childNodeWithNodeTypeAtIndex = function(element, nodeType,index) {
	var node = element.firstChild;
    if (!node) return null;
	var i=0;
    while (node) {
		if(node.nodeType === nodeType) {
			if(index === i) {
				return node;
			}
			i++;
		}
		node = node.nextSibling;
	}
    return null;
};



/* String Extensions Begin */
String.prototype.lastPathComponent = function() {
	var index = this.lastIndexOf("/");
	if(index != -1) {
		return this.substring(index+1,this.length-1);
	}
	else return null;
}

String.prototype.stringByDeletingLastPathComponent = function() {
	var index = this.lastIndexOf("/");
	if(index != -1) {
		return this.slice(0,index);
	}
	else return null;
}

String.prototype.stringByAppendingPathComponent = function(value) {
 	return (this.lastIndexOf("/") !== (this.length-1)) ? (this+"/"+value) : (this+value);
}

String.prototype.stringByRemovingPrefix = function(value) {
	var index = this.indexOf(value);
	if(index > -1) {
		var result = this.substring(index+value.length,this.length);
		return result;
	}
	else {
		return this;
	}
}
String.prototype.pathExtension = function() {
	var lastPathComponent = this.lastPathComponent();
	var index = lastPathComponent.lastIndexOf(".");
	if(index != -1) {
		return lastPathComponent.slice(index,lastPathComponent.length);
	}
	else return "";
}


/* String Extensions End */

/* Array Extensions Begin */

Array.prototype.addObjectsFromArray = function(array) {
	if(array.constructor === Array) {
		this.push.apply(this,array);
	}
	else {
		for(var i=0,item;(item = array[i]);i++) {
			this[this.length] = item;
		}
	}
}

//To let an array behave like a node list
Array.prototype.item = function(index) {
	return this[index];
}
 
/* Array Extensions End */


document._importNode = function(node, allChildren) {
	/* find the node type to import */
	if (node.nodeType === Node.ELEMENT_NODE) {
			/* create a new element */
			var newNode = document.createElement(node.nodeName);
			var i, il;
			/* does the node have any attributes to add? */
			if (node.attributes && node.attributes.length > 0)
				/* add all of the attributes */
				var nodeAttributes = node.attributes;
				var iNodeName, iNodeValue;
				for (i = 0, il = node.attributes.length; i < il;) {
					iNodeName = nodeAttributes[i].nodeName;
					iNodeValue = node.getAttribute(nodeAttributes[i++].nodeName);
					if(iNodeName === "class") {
						//iNodeName = "className";
						newNode.setAttribute("className", iNodeValue);
					}
					newNode.setAttribute(iNodeName, iNodeValue);
				}
			/* are we going after children too, and does the node have any? */
			if (allChildren && node.childNodes && node.childNodes.length > 0){
				/* recursively get all of the child nodes */
				for (i = 0, il = node.childNodes.length; i < il;i++) {
                    //NOSCRIPT doesn't support the appendChild of even a text node, so we'll skip it
                    if(newNode.tagName === "NOSCRIPT") {
                        continue;
                    }
                    newNode.appendChild(document._importNode(node.childNodes[i], allChildren));
                }
			}
			return newNode;
	}
		else if (node.nodeType === Node.TEXT_NODE) {
			return document.createTextNode(node.nodeValue);
		}
		else if(node.nodeType === Node.COMMENT_NODE) {
			return document.createComment(node.nodeValue);
		}
		else if(node.nodeType === Node.CDATA_SECTION_NODE) {
			return document.createCDATASection(node.nodeValue);
		}
		else return null;
};
if(!document.importNode) {
	document.importNode = document._importNode;
}

if(AC.Detector.isIEStrict()) {

	Element.Methods.hasAttribute = function(element, attributeName ) {
		if ( attributeName == "class") attributeName = "className";
		else if(attributeName == "for") attributeName = "htmlFor";
		var result = element.getAttribute(attributeName);
		return ((result != null) && (result !== ""));
		
	};

	document._getElementsByName = document.getElementsByName;
	document._HTMLElementsWithName = ["a","apple","button","form","frame","iframe","img","input","object","map","meta","param","textarea","select"];

	document.getElementsByName = function(name) {
		var _HTMLElementsWithName = this._HTMLElementsWithName;
		var result = [], ieResult, i, iNode;
		for(var e=0, element;(element = _HTMLElementsWithName[e]);e++) {
			ieResult = document.getElementsByTagName(element);
			for(i = 0;(iNode=ieResult[i]); i++) {
				if(iNode.name === name) {
					 result[result.length] = iNode;
				}
			}
		}

		return result;
	}
}

/**
 * AC.Storage
 * 
 * localStorage/cookie handling
 */
AC.Storage = {
	setItem: function(key, value, days){
		if (window.localStorage) localStorage.setItem(key, value);
		else this.createCookie(key, value, days);
	},
	getItem: function(key){
		var value;
		return (window.localStorage && (value = localStorage.getItem(key))) ? value : this.readCookie(key);
	},
	removeItem: function(key){
		if (window.localStorage) localStorage.removeItem(key);
		this.eraseCookie(key);
	},

	// cookie fallbacks
	createCookie: function(key, value, days) {
		if (days === null) days = 365;
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = '; expires='+date.toGMTString();
		}
		else var expires = '';
		document.cookie = key+'='+value+expires+'; path=/';
	},
	readCookie: function(key) {
		var keyEQ = key + '=';
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1, c.length);
			if (c.indexOf(keyEQ) == 0) return c.substring(keyEQ.length, c.length);
		}
		return null;
	},
	eraseCookie: function(key) {
		this.createCookie(key,'',-1);
	}
};


