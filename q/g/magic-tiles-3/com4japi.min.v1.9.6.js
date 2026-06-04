var MGEvent = function() {
    function MGEvent(type) {
        this.data = null;
        this.type = type
    }
    MGEvent.REWARD_AD = "REWARD_AD";
    MGEvent.LOAD_START = "LOAD_START";
    MGEvent.LOAD_PROGRESS = "LOAD_PROGRESS";
    MGEvent.LOAD_COMPLETE = "LOAD_COMPLETE";
    MGEvent.LOAD_ERROR = "LOAD_ERROR";
    MGEvent.START_GAME = "START_GAME";
    MGEvent.PAUSE_GAME = "PAUSE_GAME";
    MGEvent.WIN_GAME = "WIN_GAME";
    MGEvent.LOSE_GAME = "LOSE_GAME";
    MGEvent.ENTER_GAME = "ENTER_GAME";
    MGEvent.ADDED_TO_STAGE = "ADDED_TO_STAGE";
    MGEvent.FRAMEWORK_INFO_REQUEST = "FRAMEWORK_INFO_REQUEST";
    MGEvent.FRAMEWORK_INFO_RESPONSE = "FRAMEWORK_INFO_RESPONSE";
    MGEvent.CLICK_MORE = "CLICK_MORE";
    MGEvent.CLICK_MINILOGO = "CLICK_MINILOGO";
    MGEvent.OPEN_URL = "OPEN_URL";
    MGEvent.OPEN_EMAIL = "OPEN_EMAIL";
    MGEvent.SHARE = "SHARE";
    MGEvent.CLICK_CREDITS = "CLICK_CREDITS";
    MGEvent.SHOW_WIN = "SHOW_WIN";
    MGEvent.SHOW_LOSE = "SHOW_LOSE";
    MGEvent.LEVEL_FAIL = "LEVEL_FAIL";
    MGEvent.LEVEL_WIN = "LEVEL_WIN";
    MGEvent.SCREENSHOT = "SCREENSHOT";
    MGEvent.DOWNLOAD_APP = "DOWNLOAD_APP";
    MGEvent.CONTINUE_GAME = "CONTINUE_GAME";
    MGEvent.CHANGE_SCENE = "CHANGE_SCENE";
    MGEvent.FULLSCREEN = "FULLSCREEN";
    MGEvent.GAME_STARTUP = "GAME_STARTUP";
    return MGEvent
}();
MGEvent.prototype.__class__ = "MGEvent";
window.MGEvent = MGEvent;
var MGDelegate = function() {
    function MGDelegate() {}
    MGDelegate.getListenerIndex = function(type, listener, thisObject) {
        if (!MGDelegate._eventMap[type]) {
            return -1
        }
        for (var i = 0; i < MGDelegate._eventMap[type].length; i++) {
            var itm = MGDelegate._eventMap[type][i];
            if (itm[0] == listener && itm[1] == thisObject) {
                return i
            }
        }
        return -1
    };
    MGDelegate.hasListener = function(type) {
        if (!MGDelegate._eventMap[type]) {
            return false
        }
        return true
    };
    MGDelegate.addEventListener = function(type, listener, thisObject) {
        if (!MGDelegate._eventMap[type]) {
            MGDelegate._eventMap[type] = []
        }
        if (MGDelegate.getListenerIndex(type, listener, thisObject) == -1) {
            MGDelegate._eventMap[type].push([listener, thisObject])
        }
    };
    MGDelegate.removeEventListener = function(type, listener, thisObject) {
        if (!MGDelegate._eventMap[type]) {
            return
        }
        var index = MGDelegate.getListenerIndex(type, listener, thisObject);
        if (index != -1) {
            MGDelegate._eventMap[type].splice(index, 1)
        }
        if (MGDelegate._eventMap[type].length == 0) {
            delete MGDelegate._eventMap[type]
        }
    };
    MGDelegate.dispatcherEvent = function(event) {
        var type = event["type"];
        if (!MGDelegate._eventMap[type]) {
            return
        }
        var jobs = MGDelegate._eventMap[type];
        for (var i = 0; i < jobs.length; i++) {
            var itm = jobs[i];
            var func = itm[0];
            var thisObj = itm[1];
            func.call(thisObj, event)
        }
    };
    MGDelegate._eventMap = {};
    return MGDelegate
}();
MGDelegate.prototype.__class__ = "MGDelegate";
window.MGDelegate = MGDelegate;
var com4j = {
    VERSION: "1.9.6",
    initCallbackObj: null,
    _isFullscreen: false,
    get fullscreenEnabled() {
        var enabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;
        return !!enabled
    },
    fullscreen: function(fullScreenElement) {
        if (!com4j.fullscreenEnabled) {
            com4j.debug("Can not fullscreen, please check and set iframe allowfullscreen = 'allowfullscreen'");
            return
        }
        if (!fullScreenElement) {
            fullScreenElement = document.documentElement
        }
        if (fullScreenElement.requestFullscreen) {
            fullScreenElement.requestFullscreen()
        } else if (fullScreenElement.msRequestFullscreen) {
            fullScreenElement.msRequestFullscreen()
        } else if (fullScreenElement.mozRequestFullScreen) {
            fullScreenElement.mozRequestFullScreen()
        } else if (fullScreenElement.webkitRequestFullScreen) {
            fullScreenElement.webkitRequestFullScreen()
        }
    },
    exitFullscreen: function() {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
        }
    },
    onFullscreenChanged: function(event) {
        com4j._isFullscreen = !com4j._isFullscreen
    }
};
com4j.config = {
    _isReady: false,
    parameters: {},
    getParam: function(key) {
        if (this.parameters.hasOwnProperty(key)) {
            if (this.parameters[key] === undefined || this.parameters[key] === null) {
                return true
            } else {
                return this.parameters[key]
            }
        } else {
            return undefined
        }
    },
    get isReady() {
        return this._isReady
    },
    set isReady(v) {
        this._isReady = true;
        com4j.game.start()
    },
    engineType: "unknow",
    canvasName: "gameCanvas",
    canvasId: "#gameCanvas",
    host: "",
    ForJoyH5_pubid: "default",
    ForJoyH5_Fullscreen: true,
    ForJoyH5_ShowPreGameAd: false,
    ForJoyH5_PreGameAdType: "0,1",
    ForJoyH5_InGameAdInterval: 0,
    ForJoyH5_InGameAdType: "0,1",
    ForJoyH5_ShowCreditsButton: false,
    get ForJoy_gameid() {
        return window.hasOwnProperty("ForJoy_gameid") ? ForJoy_gameid : 293
    },
    ForJoyH5_DefaultBigLogo: "default_b.png?1466980738",
    _ForJoyH5_BigLogo: "default_b.png?1466980738",
    get ForJoyH5_BigLogo() {
        if (this.ForJoyH5_stats === false) {
            return this.ForJoyH5_DefaultBigLogo
        }
        return this._ForJoyH5_BigLogo
    },
    set ForJoyH5_BigLogo(v) {
        this._ForJoyH5_BigLogo = v
    },
    ForJoyH5_DefaultSmallLogo: "default_s.png?1466980738",
    _ForJoyH5_SmallLogo: "default_s.png?1466980738",
    get ForJoyH5_SmallLogo() {
        if (this.ForJoyH5_stats === false) {
            return this.ForJoyH5_DefaultSmallLogo
        }
        return this._ForJoyH5_SmallLogo
    },
    set ForJoyH5_SmallLogo(v) {
        this._ForJoyH5_SmallLogo = v
    },
    ForJoyH5_ShowMoreGamesDivWhenClickLogo: false,
    ForJoyH5_AdChannel: null,
    ForJoyH5_stats: false,
    ForJoyH5_ShowAd: false,
    ForJoyH5_ShowMoreGamesButton: false,
    _ForJoyH5_DefaultBgColor: "#008BCC",
    _ForJoyH5_BgColor: "#008BCC",
    get ForJoyH5_BgColor() {
        if (this.ForJoyH5_stats === false) {
            return this._ForJoyH5_DefaultBgColor
        }
        return this._ForJoyH5_BgColor
    },
    set ForJoyH5_BgColor(v) {
        this._ForJoyH5_BgColor = v
    },
    ForJoyH5_ShowCopyright: false,
    ForJoyH5_ShowAppLink: false,
    ForJoyH5_MoreGamesUrl: "no",
    ForJoyH5_ShowMoreGamesDivWhenGameOver: false,
    _ForJoyH5_Default_Website: "http://www.gamessumo.com",
    _ForJoyH5_Website: "http://www.gamessumo.com",
    get ForJoyH5_Website() {
        if (this.ForJoyH5_stats === false) {
            return this._ForJoyH5_Default_Website
        }
        return this._ForJoyH5_Website
    },
    set ForJoyH5_Website(v) {
        this._ForJoyH5_Website = v
    },
    ForJoyH5_mid: 19,
    NameID: "allgames",
    v: "",
    debug: false,
    devMode: false,
    showmsgs: [],
    sharemsgs: [],
    language: "en",
    HasScreenshot: false,
    touchEnabled: "ontouchstart" in window,
    init: function() {
        var path = window.location.pathname;
        var reg = /(test\/|games\/|games-test\/)?([^/]+)/g;
       
        
        var reg = /(\s*)(.+)(\s*)/g;
        if (document.cookie.length > 0) {
            var cookieObj = {};
            var arr = document.cookie.split(";");
            for (var i = 0; i < arr.length; i++) {
                var kv = arr[i].split("=");
                var key = kv[0].replace(reg, "$2");
                var value = decodeURIComponent(kv[1]);
                cookieObj[key] = value
            }
        }
        $(document.body).css("background", com4j.config.ForJoyH5_BgColor)
    }
};
com4j.loadScript = function(src, callback, context) {
    var script = document.createElement("script"),
        body = document.body;
    script.type = "text/javascript";
    script.charset = "UTF-8";
    script.src = src;
    if (script.addEventListener) {
        script.addEventListener("load", function() {
            callback && callback.apply(context, [context])
        }, false)
    } else if (script.attachEvent) {
        script.attachEvent("onreadystatechange", function() {
            var target = window.event.srcElement;
            if (target.readyState == "loaded") {
                callback && callback.apply(context, [context])
            }
        })
    }
    document.body.appendChild(script)
};
com4j.resize = {
    _timerID: null,
    _queue: [],
    get sw() {
        return $(window).width()
    },
    get sh() {
        return $(window).height()
    },
    indexOf: function(callback, context) {
        var i = 0,
            len = this._queue.length;
        for (i = 0; i < len; i++) {
            var node = this._queue[i];
            if (node.callback == callback && node.context == context) {
                return i
            }
        }
        return -1
    },
    add: function(callback, context, params) {
        var index = this.indexOf(callback, context);
        if (index == -1) {
            if (params && params.constructor != Array) {
                params = [params]
            }
            this._queue.push({
                callback: callback,
                context: context,
                params: params
            })
        } else {
            com4j.debug("has event")
        }
    },
    remove: function(callbackOrIndex, context) {
        var index = -1;
        if (callbackOrIndex.constructor == Number) {
            index = callbackOrIndex
        } else {
            index = this.indexOf(callbackOrIndex, context)
        }
        if (index > -1) {
            delete this._queue[index];
            this._queue.splice(index, 1)
        } else {
            com4j.debug("has event")
        }
    },
    handler: function(event) {
        if (com4j.resize._timerID) {
            clearTimeout(com4j.resize._timerID)
        }
        com4j.resize._timerID = setTimeout(com4j.resize._onHandler, 1)
    },
    _onHandler: function(event) {
        var i = 0,
            len = com4j.resize._queue.length;
        for (i = 0; i < len; i++) {
            var node = com4j.resize._queue[i];
            try {
                var func = node.callback;
                var context = node.context;
                var params = node.params;
                func.apply(context, params)
            } catch (e) {
                this.remove();
                com4j.debug("Can not execute, maybe deleted.")
            }
        }
    }
};
com4j.moregames = {
    hasData: false,
    moreData: null,
    MoreInterval: 60,
    _lastTime: -1,
    get showable() {
        if (this._lastTime === -1) {
            return true
        }
        var now = (new Date).getTime();
        var interval = now - this._lastTime;
        if (interval >= this.MoreInterval * 1e3) {
            return true
        } else {
            var least = Math.ceil(this.MoreInterval - interval / 1e3);
            com4j.debug("Please call com4j.more.show() later, wait " + least + "s");
            return false
        }
    },
    updateLastTime: function() {
        var now = (new Date).getTime();
        this._lastTime = now
    },
    init: function() {
        var container = $(".new_ui_box-content");
        var uiList = $(".new_ui_games-list");
        var now = Math.floor((new Date).getTime() / 432e6);
        

        function resizeHandler() {
            var left = ($(window).height() - container.height()) / 2;
            if (left < 0) {
                left = 0
            }
            var top = ($(window).width() - container.width()) / 2;
            if (top < 0) {
                top = 0
            }
            container.css("margin-top", left + "px");
            container.css("margin-left", top + "px");
            uiList.css("height", container.height() - 60 + "px")
        }
        com4j.resize.add(resizeHandler, com4j.moregames);
        com4j.resize.handler();
        var evtStr = com4j.config.touchEnabled ? "touchstart touchend" : "mouseup";
        $("#closeMoreBtn").bind(evtStr, function(event) {
            if ($("#moregames").css("visibility") === "hidden") {
                return
            }
            com4j.moregames.close();
            event.stopPropagation();
            event.preventDefault()
        })
    },
    randomInit: function() {
        if (!com4j.moregames.moreData) {
            return
        }
        var data = com4j.moregames.moreData.concat();
        $(".new_ui_games-list").empty();
        var strVar = "";
        while (data.length > 0) {
            var index = Math.floor(Math.random() * data.length);
            var obj = data[index];
            data.splice(index, 1);
            if (!com4j.config.ForJoyH5_ShowCopyright && obj.hasOwnProperty("copyright") && obj["copyright"] == true) {
                continue
            }
            var href = com4j.config.host + obj.nameid + "/index.php?pubid=" + com4j.config.ForJoyH5_pubid;
            strVar += "<a href='" + href + "'>";
            strVar += "<div class='new_ui_big-button-menu new_ui_single-game-row'>";
            var imgUrl = com4j.config.host + "thumb/" + obj.nameid + ".jpg";
            strVar += "<img class='new_ui_img-icon' src='" + imgUrl + "'>";
            strVar += "<p class='new_ui_game-info'>";
            strVar += "<span class='new_ui_game-name'>" + obj.name + "</span>";
            strVar += "<span class='new_ui_stars-container'>";
            for (var s = 1; s <= 5; s++) {
                if (s < obj.rating5) {
                    strVar += "<span class='new_ui_sprite new_ui_star-yellow'></span>"
                } else if (s > Math.floor(obj.rating5) && s <= Math.ceil(obj.rating5)) {
                    strVar += "<span class='new_ui_sprite new_ui_star-yellow-grey'></span>"
                } else {
                    strVar += "<span class='new_ui_sprite new_ui_star-grey'></span>"
                }
            }
            strVar += "</span>";
            strVar += "</p>";
            strVar += "<span class='new_ui_sprite new_ui_button-next new_ui_icon-right-big-button'></span>";
            strVar += "</div>";
            strVar += "</a>"
        }
        $(".new_ui_games-list").append(strVar)
    },
    show: function(force) {
        if (com4j.moregames.hasData == false) {
            com4j.debug("get moregames data error.");
            return
        }
        if (force) {
            com4j.moregames.randomInit();
            $("#moregames").css("visibility", "visible");
            com4j.modal.show();
            return
        }
        if (this.showable) {
            this.updateLastTime();
            com4j.moregames.randomInit();
            $("#moregames").css("visibility", "visible");
            com4j.modal.show()
        }
    },
    close: function() {
        if (com4j.moregames.hasData == false) {
            return
        }
        $("#moregames").css("visibility", "hidden");
        com4j.modal.hide()
    }
};
com4j.ad = {
    _callbackObj: null,
    intervalID: -1,
    _lastInGameAdTime: -1,
    _loaded: false,
    _requesting: false,
    _imaContainer: null,
    _videoContent: null,
    _adsManager: null,
    _adsLoader: null,
    _adsRequest: null,
    _finishedPre: false,
    get finishedPre() {
        return this._finishedPre
    },
    set finishedPre(value) {
        this._finishedPre = value
    },
    get adType() {
        var typeSrc = com4j.config.ForJoyH5_PreGameAdType;
        if (com4j.ad.finishedPre) {
            typeSrc = com4j.config.ForJoyH5_InGameAdType
        }
        switch (typeSrc) {
            case 0:
                return "all";
                break;
            case 1:
                return "onlyskipable";
                break;
            case 2:
                return "no";
                break
        }
    },
    get adTagUrl() {
        
        var _adTagUrl = null;
        return _adTagUrl
    },
    check: function() {
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
            com4j.config.debug = true;
            return true
        }
        if (typeof google == "undefined" || typeof google.ima == "undefined") {
            com4j.loading.hideLoadingGif();
            setTimeout(function() {
                $("#blocktip").css("visibility", "visible")
            }, 1);
            return false
        }
        return true
    },
    _init: function() {
       
        com4j.ad._imaContainer = $("#imaContainer")[0];
        com4j.ad._videoContent = $("#imaVideo")[0];
       
    },
    init: function() {
        var refer = document.referrer;
        refer = refer.substr(refer.indexOf("://") + 1);
        if ((com4j.config.ForJoyH5_ShowPreGameAd || refer.indexOf(com4j.config.host) == 0) && com4j.config.ForJoyH5_stats) {
            com4j.ad.show()
        } else {
            com4j.ad.onAdClose()
        }
    },
    onAdsManagerLoaded: function(adsManagerLoadedEvent) {
        com4j.ad._adsManager = adsManagerLoadedEvent.getAdsManager(com4j.ad._videoContent);
        com4j.ad._adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, com4j.ad.onAdError);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, com4j.ad.onAllAdsCompleted);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, com4j.ad.onUserClose);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, com4j.ad.onAdComplete);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, com4j.ad.onAdLoaded);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.AD_BREAK_READY, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.AD_METADATA, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.DURATION_CHANGE, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.IMPRESSION, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.LINEAR_CHANGED, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.LOG, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.MIDPOINT, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE, com4j.ad.onTypeTest);
        com4j.ad._adsManager.init(window.innerWidth, window.innerHeight, google.ima.ViewMode.FULLSCREEN);
        com4j.ad._adsManager.start()
    },
    onTypeTest: function(event) {},
    onAdLoaded: function(event) {
        clearTimeout(com4j.ad.intervalID);
        $(com4j.ad._imaContainer).css("visibility", "visible");
        $(com4j.ad._imaContainer).children(":first").css("visibility", "visible");
        com4j.ad._loaded = true;
        var contentType = com4j.ad._adsManager.getCurrentAd().getContentType();
        var type = 0;
        if (contentType == "text") {
            type = 0
        } else if (contentType == "image/png") {
            type = 1
        } else {
            type = 2
        }
        var evt = new MGEvent("CMD_AD_TYPE_LOG");
        evt.data = {
            ad_type: type
        };
        MGDelegate.dispatcherEvent(evt)
    },
    contentEndedListener: function() {
        com4j.ad._adsLoader.contentComplete()
    },
    onAdError: function(adErrorEvent) {
        console.warn(adErrorEvent.getError());
        com4j.ad.onAdClose()
    },
    onAdComplete: function(event) {},
    onAllAdsCompleted: function(event) {
        com4j.ad.onAdClose()
    },
    onAdClose: function() {
        var type = "AD_CLOSE";
        if (com4j.ad.finishedPre == false) {
            type = type + "_PRE";
            com4j.ad.finishedPre = true
        }
        com4j.ad.close();
        MGDelegate.dispatcherEvent(new MGEvent(type))
    },
    onUserClose: function(event) {
        com4j.ad.onAdClose()
    },
    resizeAd: function() {
        if (com4j.ad._adsManager) {
            com4j.ad._adsManager.resize($(window).width(), $(window).height(), google.ima.ViewMode.FULLSCREEN)
        }
    },
    _onFinishedAd: function() {
        com4j.modal.hide();
        var obj = com4j.ad._callbackObj;
        if (!obj) {
            return
        }
        var callback = obj.callback;
        var thisObj = obj.thisObj;
        var args = obj.args;
        callback.apply(thisObj, args);
        com4j.ad._callbackObj = null
    },
    getShowable: function(force) {
        if (com4j.ad._lastInGameAdTime === -1 || force) {
            return true
        }
        var now = (new Date).getTime();
        var interval = now - com4j.ad._lastInGameAdTime;
        if (interval >= com4j.config.ForJoyH5_InGameAdInterval * 1e3) {
            return true
        } else {
            var least = Math.ceil(com4j.config.ForJoyH5_InGameAdInterval - interval / 1e3);
            com4j.debug("Please call com4j.ad.show() later, wait " + least + "s");
            return false
        }
    },
    updateLastInGameAdTime: function() {
        var now = (new Date).getTime();
        com4j.ad._lastInGameAdTime = now
    },
    show: function(callbackObj, force) {
        if (!com4j.config.ForJoyH5_ShowAd) {
            if (callbackObj) {
                var obj = callbackObj;
                var callback = obj.callback;
                var thisObj = obj.thisObj;
                var args = obj.args;
                callback.apply(thisObj, args);
                com4j.ad._callbackObj = null
            }
            return
        }
        if (!this.check()) {
            return
        }
        var canShow = this.getShowable(force);
        if (!canShow && callbackObj) {
            var obj = callbackObj;
            var callback = obj.callback;
            var thisObj = obj.thisObj;
            var args = obj.args;
            callback.apply(thisObj, args);
            com4j.ad._callbackObj = null;
            return
        }
        com4j.ad._callbackObj = callbackObj;
        if (!com4j.ad._adsRequest) {
            com4j.ad._init()
        }
        if (!com4j.config.ForJoyH5_stats && !force) {
            com4j.ad._onFinishedAd();
            return
        }
        if (com4j.ad._requesting) {
            com4j.debug("Is requesting Ad....");
            return
        }
      
            com4j.ad._onFinishedAd()
        
    },
    close: function() {
        if (com4j.ad._loaded == true) {
            com4j.ad.updateLastInGameAdTime()
        }
        com4j.ad._requesting = false;
        com4j.loading.hideLoadingGif();
        com4j.ad._loaded = false;
        clearTimeout(com4j.ad.intervalID);
        com4j.ad._adsManager && com4j.ad._adsManager.destroy();
        $(com4j.ad._imaContainer).css("display", "none");
        com4j.ad._onFinishedAd();
        MGDelegate.dispatcherEvent(new MGEvent("CMD_AD_CLOSE"));
        com4j.modal.hide()
    }
};
com4j.game = {
    _isReady: false,
    get isReady() {
        return this._isReady
    },
    set isReady(v) {
        this._isReady = v;
        if (v && com4j.config.isReady) {
            com4j.game.start()
        }
    },
    game_url: "",
    inited: false,
    _enterGameEnabled: false,
    _lastLeft: NaN,
    _lastTop: NaN,
    set enterGameEnabled(value) {
        this._enterGameEnabled = value;
        if (value) {
            this.enterGame()
        }
    },
    get enterGameEnabled() {
        return this._enterGameEnabled
    },
    c2Ready: function(element) {
        com4j.config.engineType = "c2";
        $(com4j.config.canvasId).css("position", "absolute");
        $(element).attr("onload", com4j.game.c2GameLoaded)
    },
    c2GameLoaded: function() {
        com4j.game.isReady = true
    },
    c2GameStart: function() {
        cr_createRuntime(com4j.config.canvasName);
        cr.runtime.prototype._progress = 0;
        window["cr_getC2Runtime"] = function() {
            var canvas = document.getElementById("gameCanvas");
            if (canvas) return canvas["c2runtime"];
            else if (window["c2runtime"]) return window["c2runtime"];
            else return null
        };
        Object.defineProperty(cr.runtime.prototype, "progress", {
            get: function() {
                return cr.runtime.prototype._progress
            },
            set: function(value) {
                if (value < 1) {
                    var evt = new MGEvent(MGEvent.LOAD_PROGRESS);
                    evt.data = {
                        percent: value * 100
                    };
                    MGDelegate.dispatcherEvent(evt)
                } else {
                    MGDelegate.dispatcherEvent(new MGEvent(MGEvent.LOAD_COMPLETE))
                }
                cr.runtime.prototype._progress = value
            }
        });

        function onVisibilityChanged() {
            if (document.hidden || document.mozHidden || document.webkitHidden || document.msHidden) {
                cr_setSuspended(true)
            } else {
                cr_setSuspended(false)
            }
        }
        document.addEventListener("visibilitychange", onVisibilityChanged, false);
        document.addEventListener("mozvisibilitychange", onVisibilityChanged, false);
        document.addEventListener("webkitvisibilitychange", onVisibilityChanged, false);
        document.addEventListener("msvisibilitychange", onVisibilityChanged, false)
    },
    cocosReady: function(element) {
        com4j.config.engineType = "cocos";
        $(element).attr("onload", com4j.game.cocosEngineLoaded);
        element = $("script[src='game.js']")[0];
        $(element).attr("onload", com4j.game.cocosGameLoaded)
    },
    cocosEngineLoaded: function() {
        $(com4j.config.canvasId).css("position", "")
    },
    cocosGameLoaded: function(element) {
        com4j.game.isReady = true
    },
    cocosStart: function() {
        if (MGDelegate.hasListener(MGEvent.GAME_STARTUP)) {
            MGDelegate.dispatcherEvent(new MGEvent(MGEvent.GAME_STARTUP))
        } else {
            try {
                cc.game.run()
            } catch (e) {
                com4j.debug("cc.game.run() not found")
            }
        }
    },
    createJsReady: function(element) {
        com4j.config.engineType = "createjs"
    },
    createJsStart: function() {},
    preInit: function() {
        com4j.game._listenEvents();
        MGDelegate.addEventListener("AD_CLOSE_PRE", function(event) {
          
                com4j.game.init()
         
        }, this);
        if ($("script[data-load]").data("load")) {
            com4j.config.engineType = "cocos";
            $(com4j.config.canvasId).css("position", "");
            $vers = $("script[data-load]").data("load").split(",");
            com4j.loading.totalStep = $vers.length;
            var loadCount = 0;
            for (var i = 0; i < $vers.length - 1; i++) {
                com4j.loadScript($vers[i], function() {
                    loadCount++;
                    if (loadCount == $vers.length - 1) {
                        if (com4j.game.inited == true) {
                            com4j.game.init()
                        } else {
                            com4j.game.inited = true
                        }
                    }
                }, com4j.game)
            }
            this.game_url = $vers[$vers.length - 1]
        }
    },
    _listenEvents: function() {
        var eventHandler = function(event) {
            com4j.debug(event.type);
            switch (event.type) {
                case MGEvent.CLICK_CREDITS:
                    com4j.ga.sendEvent("GAME", event.type);
                    com4j.credits.show();
                    break;
                case MGEvent.CLICK_MINILOGO:
                    com4j.ga.sendEvent("GAME", event.type);
                    if (com4j.config.ForJoyH5_stats === false) {
                        window.open(com4j.config.ForJoyH5_Website, "_blank")
                    } else {
                        if (com4j.config.ForJoyH5_MoreGamesUrl !== "no") {
                            window.open(com4j.config.ForJoyH5_MoreGamesUrl, "_blank")
                        } else {
                            if (com4j.config.ForJoyH5_ShowMoreGamesDivWhenClickLogo) {
                                com4j.moregames.show(true)
                            }
                        }
                    }
                    break;
                case MGEvent.CLICK_MORE:
                    com4j.ga.sendEvent("GAME", event.type);
                    if (com4j.config.ForJoyH5_stats === false) {
                        window.open(com4j.config.ForJoyH5_Website, "_blank")
                    } else {
                        if (com4j.config.ForJoyH5_MoreGamesUrl !== "no") {
                            window.open(com4j.config.ForJoyH5_MoreGamesUrl, "_blank")
                        } else {
                            com4j.moregames.show(true)
                        }
                    }
                    break;
                case MGEvent.DOWNLOAD_APP:
                    var platform = event.data.platform;
                    com4j.ga.sendEvent("GAME", event.type, platform);
                    break;
                case MGEvent.FRAMEWORK_INFO_REQUEST:
                    var evt = new MGEvent(MGEvent.FRAMEWORK_INFO_RESPONSE);
                    evt.data = {
                        debug: com4j.config.debug,
                        gamename: com4j.config.NameID,
                        nameid: com4j.config.NameID,
                        miniLogoUrl: com4j.config.ForJoyH5_SmallLogo,
                        showmsgs: com4j.config.showmsgs,
                        sharemsgs: com4j.config.sharemsgs,
                        language: com4j.config.language,
                        HasScreenshot: com4j.config.HasScreenshot,
                        showCredits: com4j.config.ForJoyH5_ShowCreditsButton,
                        showMoreGamesButton: com4j.config.ForJoyH5_ShowMoreGamesButton,
                        fullscreenEnabled: com4j.config.ForJoyH5_Fullscreen
                    };
                    MGDelegate.dispatcherEvent(evt);
                    break;
                case MGEvent.LOAD_COMPLETE:
                    break;
                case MGEvent.PAUSE_GAME:
                    com4j.ga.sendEvent("GAME", event.type);
                    break;
                case MGEvent.SCREENSHOT:
                    com4j.ga.sendEvent("GAME", event.type);
                    break;
                case MGEvent.SHARE:
                    com4j.ga.sendEvent("GAME", event.type);
                    break;
                case MGEvent.SHOW_LOSE:
                    com4j.ga.sendEvent("GAME", event.type);
                    if (com4j.config.ForJoyH5_ShowMoreGamesDivWhenGameOver) {
                        com4j.moregames.show(false)
                    }
                    com4j.ad.show();
                    break;
                case MGEvent.SHOW_WIN:
                    com4j.ga.sendEvent("GAME", event.type);
                    if (com4j.config.ForJoyH5_ShowMoreGamesDivWhenGameOver) {
                        com4j.moregames.show(false)
                    }
                    com4j.ad.show();
                    break;
                case MGEvent.LEVEL_FAIL:
                    var level = event.data.level;
                    com4j.ga.sendEvent("GAME", event.type, level);
                    if (com4j.config.ForJoyH5_ShowMoreGamesDivWhenGameOver) {
                        com4j.moregames.show(false)
                    }
                    com4j.ad.show();
                    break;
                case MGEvent.LEVEL_WIN:
                    var level = event.data.level;
                    com4j.ga.sendEvent("GAME", event.type, level);
                    if (com4j.config.ForJoyH5_ShowMoreGamesDivWhenGameOver) {
                        com4j.moregames.show()
                    }
                    break;
                case MGEvent.START_GAME:
                    com4j.ga.sendEvent("GAME", event.type);
                    break;
                case MGEvent.CONTINUE_GAME:
                    com4j.ga.sendEvent("GAME", event.type);
                    break;
                case MGEvent.ADDED_TO_STAGE:
                    com4j.ga.sendEvent("GAME", event.type);
                    break;
                case MGEvent.CHANGE_SCENE:
                    com4j.ad.show(event.data);
                    break;
                case MGEvent.FULLSCREEN:
                     window.open(com4j.config.ForJoyH5_Website, "_blank")
                    break;
                case MGEvent.REWARD_AD:
                    com4j.ad.show(event.data, true);
                    break;
                default:
                    break
            }
        };
        var events = [MGEvent.CLICK_CREDITS, MGEvent.CLICK_MINILOGO, MGEvent.CLICK_MORE, MGEvent.DOWNLOAD_APP, MGEvent.FRAMEWORK_INFO_REQUEST, MGEvent.LOAD_COMPLETE, MGEvent.PAUSE_GAME, MGEvent.SCREENSHOT, MGEvent.SHARE, MGEvent.SHOW_LOSE, MGEvent.SHOW_WIN, MGEvent.LEVEL_FAIL, MGEvent.LEVEL_WIN, MGEvent.START_GAME, MGEvent.CONTINUE_GAME, MGEvent.ADDED_TO_STAGE, MGEvent.CHANGE_SCENE, MGEvent.FULLSCREEN, MGEvent.REWARD_AD];
        for (var i = 0, len = events.length; i < len; i++) {
            MGDelegate.addEventListener(events[i], eventHandler, this)
        }
        MGDelegate.addEventListener(MGEvent.LOAD_START, this.onLoadStart, this);
        MGDelegate.addEventListener(MGEvent.LOAD_PROGRESS, this.onLoadProgress, this);
        MGDelegate.addEventListener(MGEvent.LOAD_COMPLETE, this.onLoadComplete, this)
    },
    init: function() {
        com4j.game.start()
        com4j.loading.hideLoadingGif()
    },
    onLoadStart: function(event) {},
    onLoadProgress: function(event) {
        var percent = event.data["percent"];
        com4j.loading.setProgress(percent)
    },
    onLoadComplete: function(event) {
        var percent = 100;
        com4j.loading.setProgress(percent);
        var interval = (new Date).getTime() - com4j.ga._loadStart;
        com4j.ga.sendTiming("LOAD_TIME", interval);
        var showEffect = function() {
            $("#preloaded").animate({
                opacity: 1,
                marginTop: 0,
                height: 80,
                width: 80
            }, 200, "linear")
        };
        var hideEffect = function() {
            $("#preloaded").animate({
                opacity: 1,
                marginTop: 4,
                height: 72,
                width: 72
            }, 100, "linear", showEffect)
        };
        $("#hourglass").animate({
            opacity: 0
        }, 200);
        $("#preloadingB").animate({
            opacity: 0
        }, 200, function() {
            $("#hourglass").remove();
            $("#preloaded").animate({
                opacity: 1,
                marginTop: 0,
                height: 80,
                width: 80
            }, 300, "linear", function() {
                hideEffect();
                $("#preloaded").on("click", function() {
                   com4j.game.enterGameEnabled = true
                    $("#preloaded").remove()
                })
            })
        });
         com4j.game.resizeGame()
        com4j.resize.handler()
    },
    enterGame: function() {
        setTimeout(function() {
            MGDelegate.dispatcherEvent(new MGEvent(MGEvent.ENTER_GAME));
            com4j.loading.destroy()
        }, 1)
    },
    resizeGame: function() {
        var w = $(com4j.config.canvasId).width();
        var h = $(com4j.config.canvasId).height();
        var left = Math.floor((com4j.resize.sw - w) / 2);
        var top = Math.floor((com4j.resize.sh - h) / 2);
        if (com4j.game._lastLeft != left || com4j.game._lastTop != top) {
            $(com4j.config.canvasId).css("left", left + "px");
            $(com4j.config.canvasId).css("top", top + "px")
        }
    },
    start: function() {
        if (com4j.config.engineType == "cocos") {
            this.cocosStart()
        } else if (com4j.config.engineType == "c2") {
            this.c2GameStart()
        }
    }
};
com4j.ga = {
    _loadStart: (new Date).getTime(),
    send: function() {
        var args = ["send"].concat(arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
        if (typeof window.ga !== "function") {
            com4j.debug("'ga' can not found!");
            return
        } else {
            com4j.debug("ga", args)
        }
        window.ga.apply(window, args)
    },
    sendEvent: function(eventCategory, evebtAction, eventLabel, eventValue, fieldsObject) {
        var args = ["event", com4j.config.NameID].concat(arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
        this.send.apply(window, args)
    },
    sendTiming: function(timingCategory, timingVar, timingValue, timingLabel, fieldsObject) {
        var args = ["timing", com4j.config.NameID].concat(arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
        this.send.apply(window, args)
    },
    sendSocial: function(socialNetwork, socialAction, socialTarget, fieldsObject) {
        var args = ["social", com4j.config.NameID].concat(arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
        this.send.apply(window, args)
    },
    sendException: function(exDescription, exFatal) {
        var args = ["exception"].concat(arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
        this.send.apply(window, args)
    }
};
com4j.share = {
    config: null,
    init: function() {
        com4j.share.config = {
            qq: com4j.share._toQQ,
            weibo: com4j.share._toWeibo,
            weixin: com4j.share._toWeixin,
            twitter: com4j.share._toTwitter,
            facebook: com4j.share._toFacebook
        }
    },
    to: function(platform, NameID, Title, Content, pubid) {
        platform = platform.toLowerCase();
        var func = com4j.share.config[platform];
        if (func) {
            NameID = encodeURIComponent(NameID);
            Title = encodeURIComponent(Title);
            Content = encodeURIComponent(Content);
            pubid = encodeURIComponent(pubid);
            func.apply(this, [NameID, Title, Content, pubid])
        }
    },
    _toWeixin: function(NameID, Title, Content, pubid) {
        try {
            if (typeof wxInfo == "undefined") {} else {
                wxInfo["desc"] = Content;
                UpdateWeiXin()
            }
        } catch (e) {}
    },
    _getTopHref: function() {
        try {
            return top.location.href
        } catch (e) {
            return false
        }
    },
    _toQQ: function(NameID, Title, Content, pubid) {
        var openURL = com4j.share._getTopHref() || com4j.config.host + NameID + "/index.php?pubid=" + pubid;
        openURL = encodeURIComponent(openURL);
        var url = "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + openURL + "&title=" + Title + " &pics=" + com4j.config.host + "thumb/" + NameID + ".jpg&summary=" + Content;
        window.open(url)
    },
    _toWeibo: function(NameID, Title, Content, pubid) {
        var openURL = com4j.share._getTopHref() || com4j.config.host + NameID + "/index.php?pubid=" + pubid;
        openURL = encodeURIComponent(openURL);
        var url = "https://service.weibo.com/share/share.php?url=" + openURL + "&title=" + Content + "&searchPic=true&pic=" + com4j.config.host + "thumb/" + NameID + ".jpg";
        window.open(url)
    },
    _toFacebook: function(NameID, Title, Content, pubid) {
        var openURL = com4j.share._getTopHref() || com4j.config.host + NameID + "/index.php?pubid=" + pubid;
        openURL = encodeURIComponent(openURL);
        var url = "https://www.facebook.com/dialog/feed?app_id= 1692226401062334&display=popup&caption=" + Content + "&link=" + openURL + "&redirect_uri=" + openURL + "&picture=" + com4j.config.host + "thumb/" + NameID + ".jpg";
        window.open(url)
    },
    _toTwitter: function(NameID, Title, Content, pubid) {
        var openURL = com4j.share._getTopHref() || com4j.config.host + NameID + "/index.php?pubid=" + pubid;
        openURL = encodeURIComponent(openURL);
        var url = "https://twitter.com/share?text=" + Content + "&url=" + openURL;
        window.open(url)
    }
};
com4j.credits = {
    init: function() {
        var evtStr = com4j.config.touchEnabled ? "touchstart touchend" : "mouseup";
        $("#closeCreditsBtn").bind(evtStr, function(event) {
            if ($("#credtis").css("visibility") === "hidden") {
                return
            }
            com4j.credits.close();
            event.stopPropagation();
            event.preventDefault()
        })
    },
    show: function() {
        $("#credits").css("visibility", "visible");
        com4j.modal.show()
    },
    close: function() {
        $("#credits").css("visibility", "hidden");
        com4j.modal.hide()
    }
};
com4j.modal = {
    intervalID: -1,
    init: function() {
        function onClickHandler(event) {
            if ($(this).css("visibility") === "hidden") {
                return
            }
            if (event.target == event.currentTarget) {
                event.stopPropagation();
                event.preventDefault()
            }
        }
        $("#modal").bind("touchstart touchend touchmove mousedown mouseup mousemove", onClickHandler)
    },
    show: function(bgAlpha) {
        $("#modal").css("visibility", "visible");
        bgAlpha = typeof bgAlpha === "undefined" ? 0 : bgAlpha;
        $("#modal").css("background", "rgba(0,0,0," + bgAlpha + ")")
    },
    checkAllHide: function() {},
    hide: function() {
        var allHide = true;
        $("body > div").each(function(index, element) {
            if ($(this)[0] != $("#modal")[0]) {
                if ($(this)[0].id == "moregames" && $(this)[0].id == "credits" && $(this)[0].id == "imaContainer") {
                    if ($(this).css("display") == "none" || $(this).css("visibility") == "hidden") {} else {
                        allHide = false
                    }
                }
            }
        });
        if (allHide) {
            if (com4j.modal.intervalID) {
                clearTimeout(com4j.modal.intervalID)
            }
            com4j.modal.intervalID = setTimeout(function() {
                $("#modal").css("visibility", "hidden")
            }, 1)
        }
    }
};
com4j.loading = {
    currentStep: 0,
    totalStep: 1,
    init: function() {
        $("#preloadingRoot").css("background", com4j.config.ForJoyH5_BgColor);
        $("#logoImg").attr("src", com4j.config.ForJoyH5_BigLogo);
        $("#logoImg").load(function() {
            com4j.loading.resizeLogo();
            $("#preloadingContainer").css("visibility", "visible")
        });
        com4j.resize.add(com4j.loading.resizeLogo, this)
    },
    resizeLogo: function() {
        $("#preloadingContainer").css("left", (com4j.resize.sw - $("#preloadingContainer").width()) / 2 + "px");
        $("#preloadingContainer").css("top", (com4j.resize.sh - $("#preloadingContainer").height()) / 2 + "px")
    },
    setProgress: function(percent) {
        $("#preloadingF").css("width", percent + "%")
    },
    showLoadingGif: function() {
        $("#loadingGif").css("display", "");
        com4j.modal.show()
    },
    hideLoadingGif: function() {
        $("#loadingGif").css("display", "none");
        com4j.modal.hide()
    },
    show: function() {
        com4j.loading.resizeLogo();
        $("#preloadingRoot").css("visibility", "visible")
    },
    hide: function() {
        com4j.loading.resizeLogo();
        $("#preloadingRoot").css("visibility", "hidden");
        com4j.modal.hide()
    },
    destroy: function() {
        $("#preloadingRoot").remove();
        com4j.modal.hide()
    }
};
com4j.debug = function() {
    var log = function() {
        console.group();
        var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
        for (var i = 0, len = args.length; i < len; i++) {
            var arg = args[i];
            if (typeof arg === "string") {
                var styleStr = "color:yellow;background:green;";
                var fmt = "%c%s";
                if (com4j.config.devMode) {
                    console.trace(fmt, styleStr, arg)
                } else {
                    console.log(fmt, styleStr, arg)
                }
            } else {
                if (com4j.config.devMode) {
                    console.trace(arg)
                } else {
                    console.log(arg)
                }
            }
        }
        console.groupEnd()
    };
    if (com4j.config.debug) {
        var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
        log.apply(null, args)
    }
};
com4j.ready = function() {
    function onClickHandler(event) {
        if ($(this).css("visibility") === "hidden") {
            return
        }
        if (event.target == event.currentTarget) {
            event.stopPropagation();
            event.preventDefault()
        }
    }
    $("body > div").bind("touchstart touchend mousedown mouseup", onClickHandler);
    $("script[src]").each(function(index, element) {
        if ($(element).attr("src").indexOf("c2runtime.js") != -1) {
            com4j.game.c2Ready(element)
        } else if ($(element).attr("src").indexOf("cocos") != -1) {
            com4j.game.cocosReady(element)
        } else if ($(element).attr("src").indexOf("createjs") != -1) {
            com4j.game.createJsReady(element)
        }
    })
};
com4j.init = function() {
    var styleStr = "color:yellow;background:green;";
    var fmt = "%c%s";
    console.log(fmt, styleStr, "Com4jAPI VERSION " + this.VERSION);
    window.addEventListener("resize", com4j.resize.handler);
    window.onorientationchange = com4j.resize.handler;
    document.addEventListener("fullscreenchange", com4j.onFullscreenChanged, false);
    document.addEventListener("mozfullscreenchange", com4j.onFullscreenChanged, false);
    document.addEventListener("webkitfullscreenchange", com4j.onFullscreenChanged, false);
    document.addEventListener("msfullscreenchange", com4j.onFullscreenChanged, false);
    com4j.config.init();
    com4j.game.preInit();
    var strVar = "" + '<canvas id="gameCanvas" style="position: absolute;" width="0" height="0"></canvas>' + '<div id="modal"></div>' + '<div id="preloadingRoot">' + '<div id="preloadingContainer">' + '<img id="logoImg">' + '<div id="preloadingB" style="overflow: auto;">' + '<div id="preloadingF"></div>' + "</div>" + '<div id="hourglass"></div>' + '<div id="preloaded"></div>' + "</div>" + "</div>" + '<div id="loadingGif">' + '<div class="new_ui_loading-gif"></div>' + "</div>" + '<div id="moregames" class="more_container">' + '<div class="new_ui_box-content">' + '<p id="closeMoreBtn" class="new_ui_sprite new_ui_button-close"></p>' + '<div class="new_ui_games-list">' + "</div>" + "</div>" + "</div>" + '<div id="imaContainer">' + '<video id="imaVideo"></video>' + "</div>" + '<div id="credits">' + '<p id="closeCreditsBtn" class="new_ui_sprite new_ui_button-close"></p>' + '<a href="https://w.4j.com/html5games" target="_blank">' + '<img src="' + com4j.config.ForJoyH5_BigLogo + '">' + "<p>" + "Developed By 4J.Com" + "<br>" + "Free HTML5 Games For Your Site" + "</p>" + "</a>" + "</div>" + '<div id="blocktip">' + "<p>Please disable the ad blocker, and then refresh the page to enjoy the game, for free! </p>" + "<br>" + "<p>Thank you for your support.</p>" + "<br>" + '<a href="//help.stan.com.au/hc/en-us/articles/204778087-How-do-I-disable-AdBlock-" target="_blank">How to disable it?</a>' + "</div> ";
    $(document.body).append(strVar);
    
   

     com4j.credits.init();
        com4j.moregames.init();
        com4j.ad.init();
        com4j.loading.init();
        com4j.share.init();
        com4j.config.isReady = true;
        
        $(document.body).css("background", com4j.config.ForJoyH5_BgColor);
        $(document.documentElement).css("background", com4j.config.ForJoyH5_BgColor);
        com4j.resize.handler();
        if (com4j.initCallbackObj) {
            var callback = com4j.initCallbackObj.callback;
            var context = com4j.initCallbackObj.context;
            var params = com4j.initCallbackObj.params;
            callback.apply(context, params)
        }
};
window.com4j = com4j;
$(document).ready(function() {
    com4j.init();
    com4j.ready()
});