!function(e) {
    var o = {};
    function t(n) {
        if (o[n])
            return o[n].exports;
        var r = o[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, t),
        r.l = !0,
        r.exports
    }
    t.m = e,
    t.c = o,
    t.d = function(e, o, n) {
        t.o(e, o) || Object.defineProperty(e, o, {
            enumerable: !0,
            get: n
        })
    }
    ,
    t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    t.t = function(e, o) {
        if (1 & o && (e = t(e)),
        8 & o)
            return e;
        if (4 & o && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (t.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & o && "string" != typeof e)
            for (var r in e)
                t.d(n, r, function(o) {
                    return e[o]
                }
                .bind(null, r));
        return n
    }
    ,
    t.n = function(e) {
        var o = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(o, "a", o),
        o
    }
    ,
    t.o = function(e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
    }
    ,
    t.p = "",
    t(t.s = 68)
}({
    68: function(e, o) {
        var t = new (function() {
            function e() {
                var e = this;
                this.queue = [],
                this.init = function(o) {
                    return void 0 === o && (o = {}),
                    new Promise((function(t, n) {
                        e.enqueue("init", o, t, n)
                    }
                    ))
                }
                ,
                this.rewardedBreak = function() {
                    return new Promise((function(e) {
                        e(!1)
                    }
                    ))
                }
                ,
                this.setDebug = function(o) {
                    void 0 === o && (o = !0),
                    e.enqueue("setDebug", o)
                }
                ,
                this.handleAutoResolvePromise = function() {
                    return new Promise((function(e) {
                        e()
                    }
                    ))
                }
                ,
                this.handleAutoResolvePromiseObj = function() {
                    return new Promise((function(e) {
                        e()
                    }
                    ))
                }
                ,
                this.throwNotLoaded = function() {
                    console.debug("PokiSDK is not loaded yet. Not all methods are available.")
                }
            }
            return e.prototype.enqueue = function(e, o, t, n) {
                var r = {
                    fn: e,
                    options: o,
                    resolveFn: t,
                    rejectFn: n
                };
                this.queue.push(r)
            }
            ,
            e.prototype.dequeue = function() {
                for (var e = function() {
                    var e = o.queue.shift()
                      , t = e
                      , n = t.fn
                      , r = t.options;
                    "function" == typeof window.PokiSDK[n] ? (null == e ? void 0 : e.resolveFn) || (null == e ? void 0 : e.rejectFn) ? window.PokiSDK[n](r).then((function() {
                        for (var o = [], t = 0; t < arguments.length; t++)
                            o[t] = arguments[t];
                        "function" == typeof e.resolveFn && e.resolveFn.apply(e, o)
                    }
                    )).catch((function() {
                        for (var o = [], t = 0; t < arguments.length; t++)
                            o[t] = arguments[t];
                        "function" == typeof e.rejectFn && e.rejectFn.apply(e, o)
                    }
                    )) : void 0 !== (null == e ? void 0 : e.fn) && window.PokiSDK[n](r) : console.error("Cannot execute " + e.fn)
                }, o = this; this.queue.length > 0; )
                    e()
            }
            ,
            e
        }());
        window.PokiSDK = {
            init: t.init,
            setDebug: t.setDebug,
            initWithVideoHB: t.handleAutoResolvePromise,
            gameLoadingProgress: t.throwNotLoaded,
            disableProgrammatic: t.throwNotLoaded,
            gameLoadingStart: t.throwNotLoaded,
            gameLoadingFinished: t.throwNotLoaded,
            gameplayStart: t.throwNotLoaded,
            gameInteractive: t.throwNotLoaded,
            gameplayStop: t.throwNotLoaded,
            roundStart: t.throwNotLoaded,
            roundEnd: t.throwNotLoaded,
            customEvent: t.throwNotLoaded,
            commercialBreak: t.handleAutoResolvePromise,
            rewardedBreak: t.rewardedBreak,
            happyTime: t.throwNotLoaded,
            muteAd: t.throwNotLoaded,
            setPlayerAge: t.throwNotLoaded,
            togglePlayerAdvertisingConsent: t.throwNotLoaded,
            toggleNonPersonalized: t.throwNotLoaded,
            setConsentString: t.throwNotLoaded,
            displayAd: t.throwNotLoaded,
            destroyAd: t.throwNotLoaded,
            logError: t.throwNotLoaded,
            sendHighscore: t.throwNotLoaded,
            setDebugTouchOverlayController: t.throwNotLoaded,
            getLeaderboard: t.handleAutoResolvePromiseObj
        };
        var n, r = "https://game-cdn.poki.com/scripts/" + ((n = RegExp("[?&]ab=([^&]*)").exec(window.location.search)) && decodeURIComponent(n[1].replace(/\+/g, " ")) || "v2") + "/poki-sdk-core.js", i = document.createElement("script");
        i.setAttribute("src", r),
        i.setAttribute("type", "text/javascript"),
        i.onload = function() {
            return t.dequeue()
        }
        ,
        document.head.appendChild(i)
    }
});
