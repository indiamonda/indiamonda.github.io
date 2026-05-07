document.xURL = "https://poki.com/";

if (typeof consoleLog == 'undefined') {
    consoleLog = console.log;
}

var originalEval = eval;
eval = function () {
    // //consoleLog("--dumv--eval--", arguments[0]);
    // debugger;
    arguments[0] = arguments[0].replace("aHR0cHM6Ly9wb2tpLmNvbS9zaXRlbG9jaw==", "I3ViZzIzNQ==");
    arguments[0] = arguments[0].replace("'location'", "'xlocation'");
    arguments[0] = arguments[0].replace("] = _0x3296f7;", "]==_0x3296f7;");
    arguments[0] = arguments[0].replace("] = window[_0xcdc9(", "]==window[_0xcdc9(");


    return originalEval.apply(this, arguments);
}

navigator.sendBeacon = function () {
    //consoleLog("--dumv--navigator.sendBeacon--", arguments);
}

WebSocket = function () {

}

xlocation = new Proxy(location, {
    get: function (target, property, receiver) {
        //consoleLog("--dumv--xlocation--get--property--", property);
        let targetObj = target[property];
        if (typeof targetObj == "function") {
            return (...args) => target[property].apply(target, args);
        } else {
            if (property == "host" || property == "hostname") {
                return "localhost";
            }
            if (property == "href") {
                return "https://localhost/";
            }
            if (property == "origin") {
                return "https://localhost/";
            }
            return targetObj;
        }
    },
    set: function (target, property, receiver) {
        //consoleLog("--dumv--xlocation--set--property--", property, receiver);
        return true;
    }
});

xwindow = new Proxy(window, {
    get: function (target, property, receiver) {
        // //consoleLog("--dumv--xWindow--property--", property, receiver);
        if (typeof target[property] == "function") {
            return (...args) => target[property].apply(target, args);
        } else {
            if (property == "location") {
                return target["xlocation"];
            }
            // //consoleLog("--dumv--xwindow--targetObj--", targetObj);
            return target[property];
        }
    }
});
// consoleLog(xwindow.location.href);
// //consoleLog("window.xlocation.href", window.xlocation.href);

PokiSDK = function () {
    // ***** UTILS *****
    function loadJS(FILE_URL, callback,reward) {
        let scriptEle = document.createElement("script");

        scriptEle.setAttribute("src", FILE_URL);
        scriptEle.setAttribute("type", "text/javascript");
        scriptEle.setAttribute("async", true);

        document.body.appendChild(scriptEle);

        // Success
        scriptEle.addEventListener("load", () => {
            //consoleLog("--dumv--PokiSDK--loadJS Done--");
            if(reward){
                adsRewardedDmvF(function(ok) {
                    callback(ok);
                });
            }else{
                adsCommercialDmvF(function() {
                    callback(true);
                });
            }
        });

        // Error
        scriptEle.addEventListener("error", () => {
            //consoleLog("--dumv--PokiSDK--loadJS Error--");
            callback(false);
        });
    }

    this.getURLParam = function (name) {
        return "";
    }

    // ***** INIT *****
    this.init = function () {
        return new Promise((resolve, reject) => {
            resolve("InitDone");
        });
    }

    this.setDebug = function (debug) {
        //consoleLog("--dumv--PokiSDK--setDebug--", debug);
    }

    this.setDebugTouchOverlayController = function (debug) {
        //consoleLog("--dumv--PokiSDK--setDebugTouchOverlayController--", debug);
    }

    this.isAdBlocked = function () {
        //consoleLog("--dumv--PokiSDK--isAdBlocked--");
        return false;
    }

    this.happyTime = function (scale) {
        //consoleLog("--dumv--PokiSDK--happyTime--", scale);
    }

    // ***** LOADING *****
    this.gameLoadingStart = function () {
        //consoleLog("--dumv--PokiSDK--gameLoadingStart--");
    }

    this.gameLoadingProgress = function (progress) {
        //consoleLog("--dumv--PokiSDK--gameLoadingProgress--", progress);
    }

    this.gameLoadingFinished = function () {
        //consoleLog("--dumv--PokiSDK--gameLoadingFinished--");
    }

    // ***** GAME CONTROL *****
    this.gameplayStart = function () {
        //consoleLog("--dumv--PokiSDK--gameplayStart--");
    }

    this.gameplayStop = function () {
        //consoleLog("--dumv--PokiSDK--gameplayStop--");
    }

    // ***** ADS CONTROL *****
    this.commercialBreak = function () {
        //consoleLog("--------------------------dumv--PokiSDK--commercialBreak--");
        return new Promise((resolve, reject) => {
            loadJS("sdk/null.js", resolve,false);
        });
    }

    this.rewardedBreak = function () {
        //consoleLog("--dumv--PokiSDK--rewardedBreak--");
        return new Promise((resolve, reject) => {
            loadJS("sdk/null.js", resolve, true);
        });
    }

    this.displayAd = function () {
        //consoleLog("--dumv--PokiSDK--displayAd--", arguments);
    }

    this.destroyAd = function () {
        //consoleLog("--dumv--PokiSDK--destroyAd--", arguments);
    }
}

PokiSDK.prototype.initWithVideoHB = function () {
    //consoleLog("--dumv--PokiSDK--initWithVideoHB--");
    return new Promise((resolve, reject) => {
        resolve("")
    });
}

PokiSDK.prototype.customEvent = function () {
    //consoleLog("--dumv--PokiSDK--customEvent--");
}

PokiSDK = new PokiSDK();