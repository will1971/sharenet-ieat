/* library.js
   ========== */
function isTransform3DAvailable() {
    var isTransform3DAvailable = false;
    if ('styleMedia' in window) {
        isTransform3DAvailable = window.styleMedia.matchMedium('(-webkit-transform-3d)');
    }
    else if ('media' in window) {
        isTransform3DAvailable = window.media.matchMedium('(-webkit-transform-3d)');
    }
    return AC.Detector.isiPad() || AC.Detector.isSnowLeopard() || AC.Detector.isiPhone() || isTransform3DAvailable;
}
function recycleObjectValueForKey(object, key) {
    var value = object[key];
    if (value && typeof value.recycle === "function") {
        value.recycle();
    }
    delete object[key];
    object[key] = null;
    value = null;
}
function constrainNumberWithin(number, min, max) {
    return (number < min) ? min : ((number > max) ? max : number);
};
if (Array.prototype.indexOf === undefined) {
    Array.prototype.indexOf = function(valueToSearchFor) {
        var iEnd = this.length;
        var retVal = -1;
        for (var i = 0; i < iEnd; i++) {
            if (this[i] == valueToSearchFor) {
                retVal = i;
                break;
            }
        }
        return retVal;
    };
}
String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/, "");
}
function addClassName(oHTMLElement, classNameToAdd) {
    if (typeof(oHTMLElement) == "string") {
        oHTMLElement = document.getElementById(oHTMLElement);
    }
    if (oHTMLElement) {
        var theClassName = oHTMLElement.className;
        if (theClassName && (theClassName.length > 0)) {
            var classNamesToAdd = classNameToAdd.split(" ");
            if (classNamesToAdd.length === 1 && ((" " + theClassName + " ").lastIndexOf(" " + classNameToAdd + " ") === -1)) {
                oHTMLElement.className = oHTMLElement.className + " " + classNameToAdd;
            } else {
                var theClassNames = theClassName.split(" "),
                    iEnd = classNamesToAdd.length,
                    aClassName, theClassNamesToAddArray = [];
                for (var i = 0; i < iEnd; i++) {
                    aClassName = classNamesToAdd[i];
                    if (theClassNames.indexOf(aClassName) === -1) {
                        theClassNamesToAddArray.push(aClassName);
                    }
                }
                oHTMLElement.className = oHTMLElement.className + " " + ((theClassNamesToAddArray.length > 1) ? theClassNamesToAddArray.join(" ") : theClassNamesToAddArray[0]);
                theClassNames = null;
                aClassName = null;
                theClassNamesToAddArray = null;
            }
        } else {
            oHTMLElement.className = classNameToAdd;
        }
        theClassName = null;
        classNamesToAdd = null;
    }
}
function hasClassName(oHTMLElement, classNameOfInterest) {
    return ((" " + oHTMLElement.className + " ").lastIndexOf(" " + classNameOfInterest + " ") > -1);
}
function removeClassName(oHTMLElement, classNameToRemove) {
    if (typeof(oHTMLElement) == "string") {
        oHTMLElement = document.getElementById(oHTMLElement);
    }
    if (oHTMLElement) {
        var theClassName = oHTMLElement.className;
        if (theClassName && (theClassName.length > 0)) {
            var theClassNameArray = theClassName.split(" "),
                classNamesToRemove = classNameToRemove.split(" "),
                iEnd = theClassNameArray.length,
                aClassName, theNewClassNameArray = [];
            for (var i = 0; i < iEnd; i++) {
                aClassName = theClassNameArray[i];
                if (classNamesToRemove.indexOf(aClassName) === -1) {
                    theNewClassNameArray.push(aClassName);
                }
            }
            switch (true) {
            case (theNewClassNameArray.length > 1):
                oHTMLElement.className = theNewClassNameArray.join(" ");
                break;
            case (theNewClassNameArray.length == 1):
                oHTMLElement.className = theNewClassNameArray[0];
                break;
            case (theNewClassNameArray.length == 0):
                oHTMLElement.className = "";
                break;
            }
            theClassNameArray = null;
            classNamesToRemove = null;
            aClassName = null;
            theNewClassNameArray = null;
        }
        theClassName = null;
    }
}
function setHidden(oHTMLElement, bHidden) {
    if (bHidden) {
        addClassName(oHTMLElement, "hidden");
    } else {
        removeClassName(oHTMLElement, "hidden");
    }
}

function setWebKitAnimation(oHTMLElement, webKitAnimationName) {
    if (typeof(oHTMLElement) == "string") {
        oHTMLElement = document.getElementById(oHTMLElement);
    }
    if (oHTMLElement && oHTMLElement.style) {
        oHTMLElement.style.webkitAnimationName = webKitAnimationName;
    }
}