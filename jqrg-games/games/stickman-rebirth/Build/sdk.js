( () => {
    "use strict";
    var e = {
        268: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.isPreviewPage = s,
            t.initializeMissingResourcesReporter = function() {
                n.MissingResourcesReporter.getInstance()
            }
            ,
            t.shutDownMissingResourcesReporterIfNecessary = function(e) {
                s(e) || n.MissingResourcesReporter.getInstance().shutDown()
            }
            ;
            const n = r(3044);
            function s(e) {
                try {
                    if (!e)
                        return !1;
                    const {pathname: t} = new URL(e);
                    return /^\/preview\/[^/]+/.test(t)
                } catch {
                    return !1
                }
            }
        }
        ,
        361: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.AnalyticsError = t.PAYMENT_PROVIDERS = void 0;
            const n = r(1833)
              , s = r(7887);
            t.PAYMENT_PROVIDERS = s.PAYMENT_PROVIDERS;
            class o extends n.GeneralError {
                constructor(e, t) {
                    super(e, t),
                    this.code = e,
                    this.message = t
                }
            }
            t.AnalyticsError = o
        }
        ,
        433: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.MISSING_GAME_RESOURCE_ERROR_KEY = void 0,
            t.isInGameBannerSize = function(e) {
                return r.some(t => t === e)
            }
            ;
            const r = ["728x90", "300x250", "320x50", "468x60", "320x100"];
            t.MISSING_GAME_RESOURCE_ERROR_KEY = "missingGameResourceError"
        }
        ,
        659: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r(1833)
              , o = n(r(1916))
              , i = r(8457)
              , a = n(r(1984))
              , l = r(4888)
              , d = r(7063);
            t.default = class {
                constructor(e, t) {
                    if (this.sdk = e,
                    this.logger = new o.default("data"),
                    this.alreadySent = [],
                    "local" === t.handler)
                        this.dataHandler = new d.LocalDataHandler(t.data,e.game.id);
                    else if ("cloud" === t.handler)
                        this.dataHandler = new i.CloudDataHandler(e,!!t.doNotSync,t.data);
                    else {
                        if ("disabled" !== t.handler)
                            throw new s.GeneralError("unexpectedError",`Unknown data handler ${t.handler}`);
                        this.dataHandler = new l.DisabledDataHandler
                    }
                }
                clear() {
                    this.dataHandler.clear(),
                    this.logger.log("Clear data"),
                    this.sdk.postMessage({
                        type: "useDataModule",
                        data: {
                            action: "clear"
                        }
                    })
                }
                getItem(e) {
                    const t = this.dataHandler.getItem(e);
                    return this.logger.log(`Get "${e}", returning ${t}`),
                    this.debugEvent("getItem", e),
                    this.sdk.postMessage({
                        type: "useDataModule",
                        data: {
                            action: "getItem"
                        }
                    }),
                    t
                }
                removeItem(e) {
                    this.dataHandler.removeItem(e),
                    this.logger.log(`Remove "${e}"`),
                    this.sdk.postMessage({
                        type: "useDataModule",
                        data: {
                            action: "removeItem"
                        }
                    }),
                    this.debugEvent("removeItem", e)
                }
                setItem(e, t) {
                    this.dataHandler.setItem(e, t),
                    this.logger.log(`Set "${e}" = ${t}`),
                    this.sdk.postMessage({
                        type: "useDataModule",
                        data: {
                            action: "setItem"
                        }
                    }),
                    this.debugEvent("setItem", e, t)
                }
                syncUnityGameData() {
                    this.logger.log("Requesting to sync unity game data"),
                    this.sdk.postMessage({
                        type: "syncUnityGameData"
                    })
                }
                debugEvent(e, t, r) {
                    const n = `${e}-${t}`;
                    this.alreadySent.includes(n) || (this.alreadySent.push(n),
                    a.default.getInstance().sendDebugEvent("dataEventWithoutSDKPS", {
                        method: e,
                        key: t,
                        value: r
                    }, e => !!e.dataModule && "sdk" !== e.dataModule.apsStorageType))
                }
            }
        },
        771: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getQueryStringValue = function(e) {
                return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(e).replace(/[.+*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$","i"), "$1"))
            }
            ,
            t.addStyle = function(e) {
                const t = document.createElement("style");
                t.textContent = e,
                document.head.append(t)
            }
            ,
            t.wrapUserFn = function(e) {
                return t => {
                    try {
                        e(t)
                    } catch (e) {
                        console.error(e)
                    }
                }
            }
            ,
            t.isXsollaOrderArgumentValid = function(e) {
                return !("object" != typeof e || null === e || Array.isArray(e))
            }
            ,
            t.sendErrorToGf = function(e, t, r) {
                if (!n.GF_WINDOW)
                    return;
                const s = {
                    type: "sdkError",
                    data: {
                        errorName: e,
                        module: t,
                        specificValues: r || {}
                    }
                };
                n.GF_WINDOW.postMessage(s, "*")
            }
            ;
            const n = r(2925)
        }
        ,
        1025: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.loadGameDataFromLs = m,
            t.loadCachedCloudGameDataFromLs = p,
            t.checkDataLimits = function(e) {
                const t = (new TextEncoder).encode(e);
                if (t.length > s.MAX_DATA_LENGTH)
                    throw (0,
                    i.sendErrorToGf)("size-exceeded", "data", {
                        maxSize: s.MAX_DATA_LENGTH,
                        dataSize: t.length
                    }),
                    new s.DataError("dataLimitExcedeed",`Game data when converted to a JSON string cannot exceed ${s.MAX_DATA_LENGTH} bytes. Data was not saved`);
                t.length > .9 * s.MAX_DATA_LENGTH && u.warn(`You are approaching ${s.MAX_DATA_LENGTH} bytes data limit.`)
            }
            ,
            t.prepareInitialGameData = async function(e, t) {
                return t.isQaTool ? (u.verbose("Running in QA tool, always using local data here"),
                {
                    data: m(t.gameId),
                    handler: "local"
                }) : t.dataModule.isEnabled ? e ? new Promise(e => {
                    let r;
                    const n = async s => {
                        if ("sdkGameDataResponseNew" === s.data.type) {
                            u.verbose("Received game data from GF", s.data),
                            window.removeEventListener("message", n, !1),
                            void 0 !== r && window.clearTimeout(r);
                            const o = s.data.data;
                            if ("loaded" === o.status)
                                o.hasData ? e({
                                    data: o.data,
                                    handler: "cloud"
                                }) : ( () => {
                                    const r = (0,
                                    c.generateLsGameDataKey)(t.gameId);
                                    if (l.SafeLocalStorage.Instance.getItem(r)) {
                                        u.verbose("Cloud data missing but has local data, initialize with local data");
                                        const r = m(t.gameId);
                                        a.GF_WINDOW.postMessage({
                                            type: "saveSdkGameData",
                                            data: {
                                                jsonData: JSON.stringify(r)
                                            }
                                        }, "*"),
                                        e({
                                            data: r,
                                            handler: "cloud"
                                        })
                                    } else
                                        u.verbose("Cloud data and local data missing, initialize with empty data"),
                                        e({
                                            data: {},
                                            handler: "cloud"
                                        })
                                }
                                )();
                            else {
                                u.error("GF failed to load cloud game data, will load cached cloud data."),
                                (0,
                                i.sendErrorToGf)("gf-data-load-fail", "data");
                                const r = p(t.gameId);
                                u.verbose("Loaded cached cloud data, data will not be synced in this session", r),
                                e({
                                    data: r,
                                    handler: "cloud",
                                    doNotSync: !0
                                })
                            }
                        }
                    }
                    ;
                    u.verbose("Requesting game data from GF"),
                    window.addEventListener("message", n, !1),
                    a.GF_WINDOW.postMessage({
                        type: "requestSdkGameDataNew"
                    }, "*"),
                    r = window.setTimeout( () => {
                        u.error(`Did not get game data reply from GF in ${h}ms. Using cached cloud data if present. Disable data sync for this session.`),
                        (0,
                        i.sendErrorToGf)("gf-response-timeout", "data", {
                            timeoutMs: h
                        }),
                        window.removeEventListener("message", n, !1);
                        const r = p(t.gameId);
                        e({
                            data: r,
                            handler: "cloud",
                            doNotSync: !0
                        })
                    }
                    , h)
                }
                ) : (u.verbose("User signed out, loading data from LocalStorage"),
                {
                    data: m(t.gameId),
                    handler: "local"
                }) : {
                    handler: "disabled"
                }
            }
            ;
            const s = r(4915)
              , o = n(r(1916))
              , i = r(771)
              , a = r(2925)
              , l = r(3265)
              , d = r(8457)
              , c = r(7063)
              , h = 1e4
              , u = new o.default("data");
            function g(e, t, r) {
                try {
                    const t = l.SafeLocalStorage.Instance.getItem(e);
                    return t && JSON.parse(t).data || {}
                } catch (n) {
                    return u.error(`Failed to retrieve ${r} (${e}), initializing empty data. Error ${n}`),
                    (0,
                    i.sendErrorToGf)(t, "data"),
                    {}
                }
            }
            function m(e) {
                return g((0,
                c.generateLsGameDataKey)(e), "load-ls-fail", "local game data")
            }
            function p(e) {
                return g((0,
                d.generateCloudCacheLsGameDataKey)(e), "load-cached-cloud-fail", "cached cloud game data from localStorage")
            }
        },
        1366: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.renderFakeBanner = function(e) {
                a.log("Rendering fake banner", e);
                const t = document.getElementById(e.id);
                if (!t)
                    return void console.error(`Didn't find container #${e.id} for rendering fake banner`);
                let r = e.width
                  , n = e.height;
                if (e.isResponsive) {
                    const e = (0,
                    i.shuffle)(d).find(e => r >= e.width && n >= e.height);
                    if (!e)
                        throw new o.BannerError("noAvailableSizes","No available banner size has been found",t.id);
                    r = e.width,
                    n = e.height
                }
                t.innerHTML = "";
                const s = document.createElement("img");
                s.setAttribute("src", `${l}${r}x${n}.png`),
                s.setAttribute("width", `${r}px`),
                s.setAttribute("height", `${n}px`),
                t.appendChild(s),
                t.style.backgroundColor = "rgb(191, 173, 255, 0.25)"
            }
            ;
            const s = n(r(1916))
              , o = r(2637)
              , i = r(9919)
              , a = new s.default("banner")
              , l = "https://images.crazygames.com/crazygames-sdk/"
              , d = [{
                width: 970,
                height: 90
            }, {
                width: 320,
                height: 50
            }, {
                width: 160,
                height: 600
            }, {
                width: 336,
                height: 280
            }, {
                width: 728,
                height: 90
            }, {
                width: 300,
                height: 600
            }, {
                width: 468,
                height: 60
            }, {
                width: 970,
                height: 250
            }, {
                width: 300,
                height: 250
            }, {
                width: 250,
                height: 250
            }, {
                width: 120,
                height: 600
            }]
        },
        1833: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.GeneralError = t.INIT_STATE = t.SDKError = t.DOCS_URL = void 0,
            t.DOCS_URL = "docs.crazygames.com";
            class r extends Error {
            }
            var n;
            t.SDKError = r,
            function(e) {
                e[e.UNINITIALIZED = 0] = "UNINITIALIZED",
                e[e.REQUESTED = 1] = "REQUESTED",
                e[e.INITIALIZED = 2] = "INITIALIZED"
            }(n || (t.INIT_STATE = n = {})),
            t.GeneralError = class {
                constructor(e, t) {
                    this.code = e,
                    this.message = t
                }
            }
        }
        ,
        1853: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.ScriptLoadingError = void 0,
            t.loadScriptFromSource = async function(e, t={}) {
                return s({
                    type: "source",
                    src: e,
                    customProps: t
                })
            }
            ,
            t.loadScriptFromContent = function(e, t={}) {
                return s({
                    type: "content",
                    content: e,
                    customProps: t
                })
            }
            ;
            const n = r(2896);
            function s(e) {
                return new Promise( (t, r) => {
                    const s = document.createElement("script");
                    switch (s.onload = () => t(),
                    s.onerror = (t, n, s, i, a) => {
                        let l;
                        l = "string" == typeof t ? t : `type: ${t.type} - target: ${t.currentTarget}`,
                        r(new o(`LoadScript error (${function(e) {
                            switch (e.type) {
                            case "source":
                                return `from url ${e.src}`;
                            case "content":
                                return "from content"
                            }
                        }(e)}): ${l}.`,t,n,s,i,a))
                    }
                    ,
                    s.async = !0,
                    e.type) {
                    case "source":
                        s.src = e.src;
                        break;
                    case "content":
                        s.text = e.content
                    }
                    (0,
                    n.isDefined)(e.customProps) && Object.entries(e.customProps).forEach( ([e,t]) => {
                        s.setAttribute(e, t)
                    }
                    ),
                    document.head.appendChild(s)
                }
                )
            }
            class o extends Error {
                _event;
                _source;
                _lineNumber;
                _columnNumber;
                _error;
                constructor(e, t, r, n, s, o) {
                    super(e),
                    this._event = t,
                    this._source = r,
                    this._lineNumber = n,
                    this._columnNumber = s,
                    this._error = o
                }
                get event() {
                    return this._event
                }
                get source() {
                    return this._source
                }
                get lineNumber() {
                    return this._lineNumber
                }
                get columnNumber() {
                    return this._columnNumber
                }
                get error() {
                    return this._error
                }
                toString() {
                    return `${super.toString()}: event: ${this.event} - source: ${this.source} - lineNumber: ${this.lineNumber} - columnNumber: ${this.columnNumber} - error: ${this.error} `
                }
            }
            t.ScriptLoadingError = o
        }
        ,
        1916: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.DEBUG_ENABLED = t.MAIN_BADGE = void 0;
            const r = "border-radius: 3px; padding: 0px 4px; color: white;";
            t.MAIN_BADGE = ["%cHTML5 SDK", `background-color: #6842FF; ${r}`],
            t.DEBUG_ENABLED = window.location.href.includes("sdk_debug=true");
            class n {
                constructor(e) {
                    this.badge = e
                }
                isEnabled() {
                    return t.DEBUG_ENABLED || n.forceEnable
                }
                log(e, ...n) {
                    if (!this.isEnabled())
                        return;
                    if ("none" === this.badge)
                        return console.log(...t.MAIN_BADGE, e, ...n.length > 0 ? n : []);
                    let s = [];
                    switch (this.badge) {
                    case "game":
                        s = ["%cGAME", `background-color: #d48f06; ${r}`];
                        break;
                    case "user":
                        s = ["%cUSER", `background-color: #3498DB; ${r}`];
                        break;
                    case "ad":
                        s = ["%cAD", `background-color: #008A00; ${r}`];
                        break;
                    case "banner":
                        s = ["%cBANNER", `background-color: #00ABA9; ${r}`];
                        break;
                    case "data":
                        s = ["%cDATA", `background-color: #A21CAF; ${r}`];
                        break;
                    case "analytics":
                        s = ["%cANALYTICS", `background-color: #5c5c5c; ${r}`]
                    }
                    console.log(`${t.MAIN_BADGE[0]}%c ${s[0]}`, t.MAIN_BADGE[1], "", s[1], e, ...n.length > 0 ? n : [])
                }
                verbose(e, ...r) {
                    this.isEnabled() && console.debug(`${t.MAIN_BADGE[0]}%c %c${e}`, t.MAIN_BADGE[1], "", "color: #3d7fff", ...r.length > 0 ? r : [])
                }
                warn(e, ...r) {
                    this.isEnabled() && console.warn(...t.MAIN_BADGE, e, ...r.length > 0 ? r : [])
                }
                error(e, ...r) {
                    console.error(...t.MAIN_BADGE, e, ...r.length > 0 ? r : [])
                }
            }
            n.forceEnable = !1,
            t.default = n
        }
        ,
        1924: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = n(r(1916))
              , o = r(4080)
              , i = r(2896)
              , a = r(2228)
              , l = r(7470)
              , d = r(6793)
              , c = r(7563)
              , h = r(3012);
            t.default = class {
                constructor(e, t, r, n) {
                    this.sdk = e,
                    this._systemInfo = t,
                    this._userAccountAvailable = r,
                    this.user = null,
                    this.authDeferredPromise = null,
                    this.accountLinkDeferredPromise = null,
                    this.authListeners = [],
                    this.userTokenResolvers = [],
                    this.userTokenRequestInProgress = !1,
                    this.xsollaUserTokenRequestInProgress = !1,
                    this.xsollaUserTokenResolvers = [],
                    this.listFriendsDeferredPromise = null,
                    this.logger = new s.default("user"),
                    this.throttledListFriends = (0,
                    h.throttledMethod)(e => {
                        if (this.logger.log("Requesting friends list", e),
                        !(0,
                        i.isDefined)(this.user))
                            throw new o.UserError("userNotAuthenticated","The user is not signed in");
                        if ((0,
                        i.isDefined)(this.listFriendsDeferredPromise))
                            throw new o.UserError("requestInProgress","A friends list request is already in progress");
                        return new Promise( (t, r) => {
                            this.listFriendsDeferredPromise = {
                                resolve: t,
                                reject: r
                            },
                            this.sdk.postMessage({
                                type: "requestFriendsList",
                                data: {
                                    options: e
                                }
                            })
                        }
                        )
                    }
                    , {
                        delayMs: o.LIST_FRIENDS_THROTTLE_MS,
                        methodName: "listFriends",
                        throwIfThrottled: !0
                    }),
                    this.user = n
                }
                get isUserAccountAvailable() {
                    return this.sdk.postMessage({
                        type: "isUserAccountAvailable"
                    }),
                    !!this._userAccountAvailable
                }
                get systemInfo() {
                    return this.sdk.postMessage({
                        type: "getSystemInfo"
                    }),
                    this._systemInfo
                }
                async showAuthPrompt() {
                    if (this.logger.log("Requesting auth prompt"),
                    this.authDeferredPromise)
                        throw new o.UserError("showAuthPromptInProgress","The auth prompt is already opened");
                    if (this.user)
                        throw new o.UserError("userAlreadySignedIn","The user is already signed in");
                    return new Promise( (e, t) => {
                        this.authDeferredPromise = {
                            resolve: e,
                            reject: t
                        },
                        this.sdk.postMessage({
                            type: "showAuthPrompt"
                        })
                    }
                    )
                }
                handleAuthPromptResponse(e) {
                    if (this.logger.log("Received auth prompt response", e),
                    (0,
                    a.isShowAuthPromptResponseSuccess)(e)) {
                        const {user: t} = e;
                        this.user = null != t ? t : null,
                        this.authDeferredPromise && this.authDeferredPromise.resolve(this.user)
                    } else {
                        const {error: t} = e;
                        this.authDeferredPromise && this.authDeferredPromise.reject(new o.UserError(t.code,t.message))
                    }
                    this.authDeferredPromise = null
                }
                async showAccountLinkPrompt() {
                    if (this.logger.log("Requesting link account prompt"),
                    this.accountLinkDeferredPromise)
                        throw new o.UserError("showAccountLinkPromptInProgress","The account link prompt is already displayed");
                    if (!this.user)
                        throw new o.UserError("userNotAuthenticated","The user is not signed in");
                    return new Promise(async (e, t) => {
                        this.accountLinkDeferredPromise = {
                            resolve: e,
                            reject: t
                        },
                        this.sdk.postMessage({
                            type: "showAccountLinkPrompt"
                        })
                    }
                    )
                }
                handleAccountLinkPromptResponse(e) {
                    this.logger.log("Received account link prompt response", e);
                    const {response: t} = e.data;
                    this.accountLinkDeferredPromise && this.accountLinkDeferredPromise.resolve({
                        response: t
                    }),
                    this.accountLinkDeferredPromise = null
                }
                async getUser() {
                    return this.logger.log("Requesting user object"),
                    this.sdk.postMessage({
                        type: "getUser"
                    }),
                    this.user
                }
                async getUserToken() {
                    this.logger.log("Requesting user token"),
                    this.tokenExpiresAtMs && this.tokenExpiresAtMs < Date.now() && (this.logger.log("User token expired, clean it so it is requested again"),
                    this.userToken = null,
                    this.tokenExpiresAtMs = null),
                    this.tokenExpiresAtMs && !this.userTokenRequestInProgress && this.tokenExpiresAtMs - 3e4 < Date.now() && (this.logger.log("User token expires soon, request new one in background"),
                    this.requestNewUserToken());
                    let e = this.userToken;
                    if ((0,
                    i.isDefined)(e) && (0,
                    l.isJsSdkRequestUserTokenSuccessResponse)(e))
                        return this.logger.log("Returning cached user token"),
                        e.token;
                    if (this.userTokenRequestInProgress ? this.logger.log("User token request to portal in progress") : (this.logger.log("No user token present in the SDK, request one"),
                    this.requestNewUserToken()),
                    await new Promise(e => {
                        this.userTokenResolvers.push(async () => {
                            e()
                        }
                        )
                    }
                    ),
                    e = this.userToken,
                    !(0,
                    i.isDefined)(e))
                        throw this.logger.error("User token missing after portal request finished"),
                        new o.UserError("unexpectedError","User token missing after portal request finished");
                    if ((0,
                    l.isJsSdkRequestUserTokenErrorResponse)(e))
                        throw new o.UserError(e.error.code,e.error.message);
                    if (!e.token)
                        throw this.logger.error("User token missing, even though there isn't any error"),
                        new o.UserError("unexpectedError","User token missing, even though there isn't any error");
                    return e.token
                }
                handleUserTokenResponse(e) {
                    this.logger.log("Received token response from portal", e),
                    this.userToken = e,
                    this.userTokenRequestInProgress = !1,
                    (0,
                    l.isJsSdkRequestUserTokenSuccessResponse)(e) && (this.tokenExpiresAtMs = Date.now() + 1e3 * e.expiresIn),
                    this.userTokenResolvers.forEach(e => e()),
                    this.userTokenResolvers = []
                }
                requestNewUserToken() {
                    this.logger.log("Requesting user token from portal"),
                    this.sdk.postMessage({
                        type: "requestUserToken"
                    }),
                    this.userTokenRequestInProgress = !0
                }
                async getXsollaUserToken() {
                    this.logger.log("Requesting Xsolla user token"),
                    this.xsollaUserTokenExpiresAtMs && this.xsollaUserTokenExpiresAtMs < Date.now() && (this.logger.log("Xsolla user token expired, clean it so it is requested again"),
                    this.xsollaUserToken = null,
                    this.xsollaUserTokenExpiresAtMs = null),
                    this.xsollaUserTokenExpiresAtMs && !this.xsollaUserTokenRequestInProgress && this.xsollaUserTokenExpiresAtMs - 3e4 < Date.now() && (this.logger.log("Xsolla user token expires soon, request new one in background"),
                    this.requestNewXsollaUserToken());
                    let e = this.xsollaUserToken;
                    if ((0,
                    i.isDefined)(e) && (0,
                    d.isJsSdkRequestXsollaUserTokenSuccessResponse)(e))
                        return this.logger.log("Returning cached Xsolla user token"),
                        e.token;
                    if (this.xsollaUserTokenRequestInProgress ? this.logger.log("Xsolla user token request to portal in progress") : (this.logger.log("No Xsolla user token present in the SDK, request one"),
                    this.requestNewXsollaUserToken()),
                    await new Promise(e => {
                        this.xsollaUserTokenResolvers.push(async () => {
                            e()
                        }
                        )
                    }
                    ),
                    e = this.xsollaUserToken,
                    !(0,
                    i.isDefined)(e))
                        throw this.logger.error("Xsolla user token response missing after portal request finished"),
                        new o.UserError("unexpectedError","Xsolla user token missing after portal request finished");
                    if ((0,
                    d.isJsSdkRequestXsollaUserTokenErrorResponse)(e))
                        throw new o.UserError(e.error.code,e.error.message);
                    if (!e.token)
                        throw this.logger.error("Xsolla user token missing, even though there isn't any error"),
                        new o.UserError("unexpectedError","Xsolla user token missing, even though there isn't any error");
                    return e.token
                }
                handleXsollaUserTokenResponse(e) {
                    this.logger.log("Received Xsolla user token response from portal", e),
                    this.xsollaUserToken = e,
                    this.xsollaUserTokenRequestInProgress = !1,
                    (0,
                    d.isJsSdkRequestXsollaUserTokenSuccessResponse)(e) && (this.xsollaUserTokenExpiresAtMs = Date.now() + 1e3 * e.expiresIn),
                    this.xsollaUserTokenResolvers.forEach(e => e()),
                    this.xsollaUserTokenResolvers = []
                }
                requestNewXsollaUserToken() {
                    this.logger.log("Requesting Xsolla user token from portal"),
                    this.sdk.postMessage({
                        type: "requestXsollaUserToken"
                    }),
                    this.xsollaUserTokenRequestInProgress = !0
                }
                addScore(e) {
                    this.logger.warn("addScore is no longer supported.")
                }
                addScoreEncrypted(e, t) {
                    this.logger.warn("addScoreEncrypted is no longer supported.")
                }
                submitScore(e) {
                    this.logger.log("Submitting score.", e.encryptedScore),
                    this.sdk.postMessage({
                        type: "submitScore",
                        data: {
                            encryptedScore: e.encryptedScore,
                            requestId: this.generateRequestId()
                        }
                    })
                }
                async listFriends(e) {
                    return this.throttledListFriends(e)
                }
                handleListFriendsResponse(e) {
                    this.logger.log("Received friends list response", e);
                    const t = this.listFriendsDeferredPromise;
                    t ? ((0,
                    c.isJsSdkRequestFriendsListErrorResponse)(e) ? t.reject(new o.UserError(e.error.code,e.error.message)) : t.resolve(e.friendsPage),
                    this.listFriendsDeferredPromise = null) : this.logger.warn("Received friends list response but no request is in progress")
                }
                generateRequestId() {
                    return "undefined" != typeof crypto && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).substring(2)
                }
                handleEvent(e) {
                    switch (e.type) {
                    case "showAuthPromptResponse":
                        this.handleAuthPromptResponse(e);
                        break;
                    case "linkAccountResponse":
                        this.handleAccountLinkPromptResponse(e);
                        break;
                    case "userLoggedIn":
                        this.handleUserLoggedIn(e);
                        break;
                    case "requestUserTokenResponse":
                        this.handleUserTokenResponse(e);
                        break;
                    case "requestXsollaUserTokenResponse":
                        this.handleXsollaUserTokenResponse(e);
                        break;
                    case "requestFriendsListResponse":
                        this.handleListFriendsResponse(e)
                    }
                }
                addAuthListener(e) {
                    this.sdk.postMessage({
                        type: "addAuthListener"
                    }),
                    this.authListeners.push(e)
                }
                removeAuthListener(e) {
                    this.sdk.postMessage({
                        type: "removeAuthListener"
                    }),
                    this.authListeners = this.authListeners.filter(t => t !== e)
                }
                handleUserLoggedIn(e) {
                    var t;
                    this.user = null !== (t = e.data.user) && void 0 !== t ? t : null,
                    this.callAuthChangeListeners()
                }
                callAuthChangeListeners() {
                    this.authListeners.forEach(e => this.callAuthChangeListener(e))
                }
                callAuthChangeListener(e) {
                    try {
                        e(this.user)
                    } catch (e) {
                        console.error(e)
                    }
                }
            }
        },
        1930: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.InnerIdToContainerId = t.ContainerIdToInnerId = void 0,
            t.getBannerContainer = async function(e, r) {
                var o;
                if (!e)
                    throw new n.BannerError("missingId","Container id not specified",e);
                const i = await (0,
                s.getContainerInfo)(e)
                  , {visibleState: a} = i;
                if (r) {
                    if ("notCreated" === a)
                        throw new n.BannerError("notCreated","Container is not present on the page",e);
                    if ("notVisible" === a)
                        throw new n.BannerError("notVisible","Container is not entirely visible on the page",e)
                }
                const l = (0,
                t.ContainerIdToInnerId)(e);
                if (!document.getElementById(l)) {
                    const t = document.createElement("div");
                    t.id = l,
                    t.classList.add("crazygames-banner-container"),
                    null === (o = document.getElementById(e)) || void 0 === o || o.append(t)
                }
                return {
                    mainContainerId: e,
                    innerContainerId: l,
                    containerInfo: i
                }
            }
            ,
            t.getBannerSizeAsText = function(e) {
                return `${e.width}x${e.height}`
            }
            ;
            const n = r(2637)
              , s = r(2825);
            t.ContainerIdToInnerId = e => `${e}-crazygames-inner`,
            t.InnerIdToContainerId = e => `${e}`.replace("-crazygames-inner", "")
        }
        ,
        1945: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(1833);
            t.default = class {
                constructor() {
                    this.message = `CrazySDK is disabled on this domain. Check ${n.DOCS_URL} for more info.`,
                    this.code = "sdkDisabled"
                }
                get ad() {
                    throw new n.GeneralError(this.code,this.message)
                }
                get banner() {
                    throw new n.GeneralError(this.code,this.message)
                }
                get game() {
                    throw new n.GeneralError(this.code,this.message)
                }
                get user() {
                    throw new n.GeneralError(this.code,this.message)
                }
                get data() {
                    throw new n.GeneralError(this.code,this.message)
                }
                get analytics() {
                    throw new n.GeneralError(this.code,this.message)
                }
                get environment() {
                    return "disabled"
                }
                get isQaTool() {
                    return !1
                }
            }
        }
        ,
        1984: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(8629)
              , s = "https://cza.crazygames.com/event";
            class o {
                constructor() {
                    this.eventQueue = [],
                    this.initTimedOut = !1
                }
                static getInstance() {
                    return o.instance || (o.instance = new o),
                    o.instance
                }
                init(e, t) {
                    this.initInfo = t,
                    this.sdk = e,
                    this.sdk.postMessage({
                        type: "requestAnalyticsInfoFromSDK"
                    }),
                    this.initTimeoutId = window.setTimeout( () => {
                        this.instanceId || (this.initTimedOut = !0,
                        this.eventQueue = [])
                    }
                    , 1e4)
                }
                sendDebugEvent(e, t, r) {
                    if (this.initTimedOut)
                        return;
                    const n = {
                        type: "debug",
                        name: e,
                        data: JSON.stringify(t)
                    };
                    this.sendEvent(n, r)
                }
                handleEvent(e) {
                    "analyticsInfoResponseFromGF" === e.type && (this.initTimeoutId && window.clearTimeout(this.initTimeoutId),
                    this.instanceId = e.instanceId,
                    this.eventQueue.forEach(e => this.sendEvent(e.event, e.filter)),
                    this.eventQueue = [])
                }
                sendEvent(e, t) {
                    this.initInfo ? this.safeIdleCallback( () => {
                        var r, s;
                        if (this.initInfo.isQaTool)
                            return;
                        if (t && !t(this.initInfo))
                            return;
                        const o = new Date
                          , i = o.getTime()
                          , a = o.getTimezoneOffset()
                          , l = {
                            ...e,
                            time: i,
                            timezoneOffset: a,
                            version: "3.6.0",
                            source: "sdk",
                            type: "debug",
                            sampling: 1,
                            userId: "",
                            page: "",
                            instanceId: this.instanceId,
                            gameId: null === (r = this.initInfo) || void 0 === r ? void 0 : r.gameId,
                            buildId: null === (s = this.initInfo) || void 0 === s ? void 0 : s.buildId
                        }
                          , d = (0,
                        n.ch)(l);
                        l.__i = d,
                        this.sendData(l)
                    }
                    ) : this.eventQueue.push({
                        event: e,
                        filter: t
                    })
                }
                async sendData(e) {
                    const t = e
                      , r = async () => {
                        await window.fetch(s, {
                            method: "post",
                            body: JSON.stringify(t),
                            headers: {
                                "Content-Type": "text/plain"
                            }
                        })
                    }
                    ;
                    if (window.navigator) {
                        const e = {
                            type: "text/plain"
                        }
                          , n = new Blob([JSON.stringify(t)],e);
                        if (window.navigator.sendBeacon(s, n))
                            return Promise.resolve();
                        await r()
                    } else
                        await r()
                }
                safeIdleCallback(e) {
                    window.requestIdleCallback ? window.requestIdleCallback(e, {
                        timeout: 2e3
                    }) : window.setTimeout(e, 0)
                }
            }
            t.default = o
        }
        ,
        2091: function(e, t, r) {
            var n, s = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r);
                var s = Object.getOwnPropertyDescriptor(t, r);
                s && !("get"in s ? !t.__esModule : s.writable || s.configurable) || (s = {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                }),
                Object.defineProperty(e, n, s)
            }
            : function(e, t, r, n) {
                void 0 === n && (n = r),
                e[n] = t[r]
            }
            ), o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), i = this && this.__importStar || (n = function(e) {
                return n = Object.getOwnPropertyNames || function(e) {
                    var t = [];
                    for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
                    return t
                }
                ,
                n(e)
            }
            ,
            function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var r = n(e), i = 0; i < r.length; i++)
                        "default" !== r[i] && s(t, e, r[i]);
                return o(t, e),
                t
            }
            ), a = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const l = r(6100)
              , d = r(7067)
              , c = r(1833)
              , h = i(r(1916))
              , u = r(1025)
              , g = r(771)
              , m = r(2925)
              , p = a(r(5691))
              , f = a(r(1945))
              , v = a(r(8591))
              , y = a(r(2351))
              , w = r(7643)
              , b = a(r(3587));
            t.default = class {
                constructor() {
                    this.logger = new h.default("none"),
                    this.sdk = new y.default
                }
                async init(e) {
                    return this.initializingPromise || (this.initializingPromise = new Promise(async (t, r) => {
                        if (this.logger.log("Request init, options: ", e),
                        (0,
                        m.shouldInitLocalMode)())
                            h.default.forceEnable = !0,
                            this.sdk = new v.default,
                            await (0,
                            w.wait)(200);
                        else if ((await (0,
                        m.checkIsCrazyGames)()).isOnCrazyGames) {
                            if (!m.GF_WINDOW)
                                return r(new c.GeneralError("unexpectedError","Missing GF_WINDOW, even though running on CrazyGames"));
                            const [t,n] = await Promise.all([(0,
                            m.initSdk)(e), (0,
                            m.fetchSdkUser)()]);
                            if (null === t)
                                throw new c.GeneralError("initFailed","The SDK failed to initialize");
                            if (this.logger.log("Init response received from GF", t),
                            t.useFailModule)
                                this.sdk = new b.default(t);
                            else {
                                const e = await (0,
                                u.prepareInitialGameData)(n, t);
                                this.sdk = new p.default(t,e,n);
                                try {
                                    await (0,
                                    d.loadAdsIfNeeded)(t.rafvertizingUrl, this.sdk, t.clientInfo)
                                } catch (e) {
                                    (0,
                                    g.sendErrorToGf)("ads-script-load-fail", "ad", {
                                        error: (0,
                                        l.stringifyError)(e)
                                    }),
                                    this.logger.error("Failed to load ads", e)
                                }
                            }
                        } else
                            this.sdk = new f.default;
                        console.log(...h.MAIN_BADGE, "CrazyGames HTML SDK initialized", {
                            version: "3.5.0",
                            environment: this.sdk.environment,
                            initOptions: e
                        }),
                        t()
                    }
                    )),
                    this.initializingPromise
                }
                get instance() {
                    return this.sdk
                }
                get ad() {
                    return this.sdk.ad
                }
                get banner() {
                    return this.sdk.banner
                }
                get game() {
                    return this.sdk.game
                }
                get user() {
                    return this.sdk.user
                }
                get data() {
                    return this.sdk.data
                }
                get analytics() {
                    return this.sdk.analytics
                }
                get environment() {
                    return this.sdk.environment
                }
                get isQaTool() {
                    return this.sdk.isQaTool
                }
            }
        },
        2228: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.isShowAuthPromptResponseSuccess = function(e) {
                return "user"in e
            }
        }
        ,
        2351: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r(1833)
              , o = n(r(1916));
            t.default = class {
                constructor() {
                    this.logger = new o.default("none"),
                    this.code = "sdkNotInitialized",
                    this.message = `CrazySDK is not initialized yet. Check ${s.DOCS_URL} for more info.`
                }
                get ad() {
                    throw console.error(this.message),
                    new s.GeneralError(this.code,this.message)
                }
                get banner() {
                    throw console.error(this.message),
                    new s.GeneralError(this.code,this.message)
                }
                get game() {
                    throw console.error(this.message),
                    new s.GeneralError(this.code,this.message)
                }
                get user() {
                    throw console.error(this.message),
                    new s.GeneralError(this.code,this.message)
                }
                get data() {
                    throw console.error(this.message),
                    new s.GeneralError(this.code,this.message)
                }
                get analytics() {
                    throw console.error(this.message),
                    new s.GeneralError(this.code,this.message)
                }
                get environment() {
                    return "uninitialized"
                }
                get isQaTool() {
                    return !1
                }
            }
        },
        2529: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.isGfToSdkEvent = function(e) {
                return "sdk" === e.messageTarget
            }
        }
        ,
        2599: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = n(r(1916))
              , o = r(1025)
              , i = r(7063);
            t.default = class {
                constructor(e) {
                    this.logger = new s.default("data");
                    const t = (0,
                    o.loadGameDataFromLs)(e.game.id);
                    this.localDataHandler = new i.LocalDataHandler(t,e.game.id)
                }
                clear() {
                    this.logger.log("Clear data"),
                    this.localDataHandler.clear()
                }
                getItem(e) {
                    const t = this.localDataHandler.getItem(e);
                    return this.logger.log(`Get "${e}", returning ${t}`),
                    t
                }
                removeItem(e) {
                    this.logger.log(`Remove "${e}"`),
                    this.localDataHandler.removeItem(e)
                }
                setItem(e, t) {
                    this.logger.log(`Set "${e}" = ${t}`),
                    this.localDataHandler.setItem(e, t)
                }
                syncUnityGameData() {
                    this.logger.log("Requesting to sync unity PlayerPrefs (local)")
                }
            }
        },
        2637: function(e, t, r) {
            var n, s = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r);
                var s = Object.getOwnPropertyDescriptor(t, r);
                s && !("get"in s ? !t.__esModule : s.writable || s.configurable) || (s = {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                }),
                Object.defineProperty(e, n, s)
            }
            : function(e, t, r, n) {
                void 0 === n && (n = r),
                e[n] = t[r]
            }
            ), o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), i = this && this.__importStar || (n = function(e) {
                return n = Object.getOwnPropertyNames || function(e) {
                    var t = [];
                    for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
                    return t
                }
                ,
                n(e)
            }
            ,
            function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var r = n(e), i = 0; i < r.length; i++)
                        "default" !== r[i] && s(t, e, r[i]);
                return o(t, e),
                t
            }
            );
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.BannerError = void 0,
            t.isInGameBannerSize = c,
            t.matchesInGameBannerSize = function(e, t) {
                return c(`${e}x${t}`)
            }
            ;
            const a = r(1833)
              , l = r(433)
              , d = i(r(1916));
            function c(e) {
                return (0,
                l.isInGameBannerSize)(e)
            }
            const h = new d.default("banner");
            class u extends a.GeneralError {
                constructor(e, t, r) {
                    d.DEBUG_ENABLED && h.error(`[BannerError] Code: ${e} - Message: ${t} - ContainerId: ${r}`),
                    super(e, t),
                    this.code = e,
                    this.message = t,
                    this.containerId = r
                }
            }
            t.BannerError = u
        },
        2825: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getContainerInfo = async function(e) {
                const t = document.getElementById(e);
                return t ? async function(e) {
                    return new Promise(t => {
                        const n = new IntersectionObserver( ([s]) => {
                            const o = window.getComputedStyle(e)
                              , i = s.intersectionRatio > r;
                            t({
                                visibleState: i ? "visible" : "notVisible",
                                size: {
                                    width: Math.ceil("auto" !== o.width ? parseFloat(o.width) : s.boundingClientRect.width),
                                    height: Math.ceil("auto" !== o.height ? parseFloat(o.height) : s.boundingClientRect.height)
                                }
                            }),
                            n.disconnect()
                        }
                        );
                        n.observe(e)
                    }
                    )
                }(t) : {
                    visibleState: "notCreated",
                    size: {
                        width: 0,
                        height: 0
                    }
                }
            }
            ;
            const r = .95
        }
        ,
        2896: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.isDefined = function(e) {
                return null != e
            }
        }
        ,
        2925: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.GF_WINDOW = void 0,
            t.initSdk = function(e) {
                return new Promise(r => {
                    const n = window.setTimeout( () => {
                        window.removeEventListener("message", s, !1),
                        (0,
                        i.sendErrorToGf)("gf-init-response-timeout", null, {
                            timeoutMs: h
                        }),
                        c.error(`Gf Init response timeout ${h}ms`),
                        r(null)
                    }
                    , h)
                      , s = async e => {
                        if ("initialized" === e.data.type) {
                            c.verbose("Received init from GF", e.data),
                            window.clearTimeout(n),
                            window.removeEventListener("message", s, !1);
                            const t = e.data.data;
                            (0,
                            a.shutDownMissingResourcesReporterIfNecessary)(t.gameLink),
                            r(t)
                        }
                    }
                    ;
                    window.addEventListener("message", s, !1),
                    t.GF_WINDOW.postMessage({
                        type: "init-js-sdk",
                        data: {
                            version: "3.5.0",
                            sdkType: "js",
                            ...e
                        }
                    }, "*")
                }
                )
            }
            ,
            t.fetchSdkUser = function() {
                return new Promise(e => {
                    const t = window.setTimeout( () => {
                        window.removeEventListener("message", r, !1),
                        (0,
                        i.sendErrorToGf)("gf-user-response-timeout", null, {
                            timeoutMs: u
                        }),
                        c.error(`Gf user response timeout ${u}ms, continuing with "null" (signed out) user`),
                        e(null)
                    }
                    , u)
                      , r = async n => {
                        var o;
                        if (!(0,
                        s.isGfToSdkEvent)(n.data))
                            return;
                        const i = n.data;
                        if ("initialUserSet" === i.type) {
                            d.verbose("Received initial user from GF", i),
                            window.clearTimeout(t),
                            window.removeEventListener("message", r, !1);
                            const n = null !== (o = i.data.user) && void 0 !== o ? o : null;
                            e(n)
                        }
                    }
                    ;
                    window.addEventListener("message", r, !1)
                }
                )
            }
            ,
            t.shouldInitLocalMode = function() {
                return ["localhost", "127.0.0.1", "preview.construct.net"].includes(window.location.hostname) || "true" === (0,
                i.getQueryStringValue)("useLocalSdk")
            }
            ,
            t.checkIsCrazyGames = async function() {
                return { isOnCrazyGames: true };
            }
            ;
            const s = r(2529)
              , o = n(r(1916))
              , i = r(771)
              , a = r(268)
              , l = r(7643)
              , d = new o.default("user")
              , c = new o.default("none");
            t.GF_WINDOW = null;
            const h = 5e3
              , u = 5e3
              , g = 7e3
        },
        3012: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.throttledMethod = void 0;
            const s = r(1833)
              , o = new (n(r(1916)).default)("none");
            t.throttledMethod = (e, t) => {
                const {delayMs: r, methodName: n, throwIfThrottled: i=!1} = t;
                let a = 0;
                return (...t) => {
                    const l = (new Date).getTime();
                    if (l - a > r)
                        return a = l,
                        e(...t);
                    if (i)
                        throw new s.GeneralError("rateLimited",`${n}() call throttled, delay ${r}`);
                    o.error(`${n}() call throttled, delay ${r}`)
                }
            }
        },
        3044: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.MissingResourcesReporter = void 0;
            const s = n(r(5691));
            class o {
                constructor() {
                    this.QUEUE_FLUSH_INTERVAL_IN_MS = 100,
                    this.missingResourcesQueue = [],
                    this.queueInterval = null,
                    this.performanceObserver = null,
                    this.patchPerformanceObserver()
                }
                static getInstance() {
                    return o.instance || (o.instance = new o),
                    o.instance
                }
                shutDown() {
                    this.performanceObserver && (this.performanceObserver.disconnect(),
                    this.performanceObserver = null),
                    this.queueInterval && (clearInterval(this.queueInterval),
                    this.queueInterval = null),
                    this.missingResourcesQueue = []
                }
                patchPerformanceObserver() {
                    this.isPerformanceObserverAvailable() && (this.performanceObserver = new PerformanceObserver(e => {
                        const t = e.getEntries();
                        for (const e of t)
                            if (404 !== e.responseStatus) {
                                if (void 0 === e.responseStatus) {
                                    const t = e.duration
                                      , r = e.transferSize
                                      , n = e.encodedBodySize
                                      , s = e.decodedBodySize
                                      , o = 0 === t && (0 === r || 0 === n || 0 === s)
                                      , i = e.initiatorType
                                      , a = ["img", "script", "link", "fetch", "xmlhttprequest"].includes(i);
                                    o && a && this.enqueueOrSend(e.name)
                                }
                            } else
                                this.enqueueOrSend(e.name)
                    }
                    ),
                    this.performanceObserver.observe({
                        type: "resource",
                        buffered: !0
                    }))
                }
                isPerformanceObserverAvailable() {
                    return "PerformanceObserver"in window
                }
                enqueueOrSend(e) {
                    this.isSdkAvailable() ? this.sendMissingResourceErrorMessage(e) : (this.missingResourcesQueue.push(e),
                    this.queueInterval && clearInterval(this.queueInterval),
                    this.queueInterval = setInterval( () => this.flushQueue(), this.QUEUE_FLUSH_INTERVAL_IN_MS))
                }
                flushQueue() {
                    var e;
                    if (!this.isSdkAvailable())
                        return;
                    const t = null === (e = window.CrazyGames) || void 0 === e ? void 0 : e.SDK;
                    if (t && t.instance instanceof s.default) {
                        for (; this.missingResourcesQueue.length > 0; ) {
                            const e = this.missingResourcesQueue.shift();
                            this.sendMissingResourceErrorMessage(e)
                        }
                        this.queueInterval && (clearInterval(this.queueInterval),
                        this.queueInterval = null)
                    }
                }
                isSdkAvailable() {
                    var e;
                    const t = null === (e = window.CrazyGames) || void 0 === e ? void 0 : e.SDK;
                    return t && t.instance instanceof s.default
                }
                sendMissingResourceErrorMessage(e) {
                    const t = {
                        path: e
                    };
                    window.CrazyGames.SDK.instance.postMessage({
                        type: "missingGameResourceError",
                        data: t
                    })
                }
            }
            t.MissingResourcesReporter = o,
            o.instance = null
        },
        3201: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r(9491)
              , o = r(1366)
              , i = n(r(1916))
              , a = r(1930)
              , l = r(2637)
              , d = r(2896);
            t.default = class {
                constructor(e, t) {
                    this.sdk = e,
                    this.initInfo = t,
                    this.bannerQueue = {},
                    this.overlayBanners = {},
                    this.renderedBannerIds = new Set,
                    this.logger = new i.default("banner"),
                    this.useTestAds = t.useTestAds || !1,
                    this.disableBannerCheck = t.disableBannerCheck || !1
                }
                checkBannerAdsEnabled() {
                    if ("basic" === this.initInfo.launchFlow)
                        throw new l.BannerError("bannersDisabledBasicLaunch","Banners are disabled during basic launch");
                    if (!this.initInfo.systemInfo.applicationType)
                        throw new l.BannerError("missingApplicationType","Application type is not available in systemInfo");
                    if (function(e) {
                        switch (e) {
                        case "pwa":
                        case "web":
                            return !1;
                        case "apple_store":
                        case "google_play_store":
                            return !0
                        }
                    }(this.initInfo.systemInfo.applicationType))
                        throw new l.BannerError("bannersDisabledMobileApp","Banner Ads are disabled on the mobile apps")
                }
                isBannerAdsEnabled() {
                    try {
                        return this.checkBannerAdsEnabled(),
                        !0
                    } catch {
                        return !1
                    }
                }
                async requestBanner(e) {
                    this.checkBannerAdsEnabled(),
                    this.logger.log("Requesting banner with automatic rendering", e),
                    this.ensureVideoAdNotPlaying(e.id);
                    const t = await this.prefetchBanner(e);
                    return this.renderPrefetchedBanner(t)
                }
                async requestResponsiveBanner(e) {
                    this.checkBannerAdsEnabled(),
                    this.logger.log(`Requesting responsive banner with automatic rendering #${e}`),
                    this.ensureVideoAdNotPlaying(e);
                    const t = await (0,
                    a.getBannerContainer)(e, !this.disableBannerCheck)
                      , {width: r, height: n} = t.containerInfo.size
                      , s = await this.prefetchResponsiveBanner({
                        id: e,
                        width: r,
                        height: n
                    });
                    return this.renderPrefetchedBanner(s)
                }
                async prefetchBanner(e) {
                    this.checkBannerAdsEnabled(),
                    this.logger.log("Prefetch banner", e);
                    const t = (0,
                    a.ContainerIdToInnerId)(e.id)
                      , r = {
                        ...e,
                        id: t
                    };
                    return new Promise( (e, t) => {
                        this.bannerQueue[r.id] = {
                            banner: r,
                            resolve: e,
                            reject: t
                        },
                        this.sdk.postMessage({
                            type: "requestBanner",
                            data: [{
                                containerId: r.id,
                                size: (0,
                                a.getBannerSizeAsText)(r)
                            }]
                        })
                    }
                    )
                }
                async prefetchResponsiveBanner(e) {
                    this.checkBannerAdsEnabled(),
                    this.logger.log(`Prefetch responsive banner #${e.id}`);
                    const {width: t, height: r} = e
                      , n = {
                        id: (0,
                        a.ContainerIdToInnerId)(e.id),
                        width: t,
                        height: r,
                        isResponsive: !0
                    };
                    return new Promise( (e, s) => {
                        this.bannerQueue[n.id] = {
                            banner: n,
                            resolve: e,
                            reject: s
                        },
                        this.sdk.postMessage({
                            type: "requestResponsiveBanner",
                            data: [{
                                id: n.id,
                                width: t,
                                height: r
                            }]
                        })
                    }
                    )
                }
                async renderPrefetchedBanner(e) {
                    this.logger.log("Rendering prefetched banner", e);
                    const t = (0,
                    a.InnerIdToContainerId)(e.id);
                    return this.ensureVideoAdNotPlaying(t),
                    await (0,
                    a.getBannerContainer)(t, !this.disableBannerCheck),
                    this.renderedBannerIds.add(t),
                    new Promise( (t, r) => {
                        const {CrazygamesAds: n} = window
                          , {id: s, banner: i} = e;
                        (0,
                        d.isDefined)(n) ? n.render([s], {
                            ...e.renderOptions,
                            banner: {
                                callback: e => {
                                    if (delete this.bannerQueue[e.code],
                                    !e.empty)
                                        return this.logger.log("Banner rendered", i, "with options", e),
                                        this.sdk.postMessage({
                                            type: "bannerProcessed",
                                            data: {
                                                containerId: i.id,
                                                width: i.width,
                                                height: i.height,
                                                minPrice: e.minPrice,
                                                houseAd: e.houseAd,
                                                empty: e.empty
                                            }
                                        }),
                                        void t();
                                    if (this.useTestAds)
                                        (0,
                                        o.renderFakeBanner)(i),
                                        this.logger.log("Fake banner rendered", i),
                                        t();
                                    else {
                                        this.logger.log("No banner available", i);
                                        const t = "Sorry, no banner is available for the moment, please retry";
                                        this.sdk.postMessage({
                                            type: "bannerProcessed",
                                            data: {
                                                containerId: i.id,
                                                width: i.width,
                                                height: i.height,
                                                error: "UnitNotRendered" === e.type ? "Unit ignored for rendering" : t,
                                                minPrice: e.minPrice,
                                                houseAd: e.houseAd,
                                                empty: e.empty
                                            }
                                        }),
                                        r(new l.BannerError("other",t,i.id))
                                    }
                                }
                            }
                        }) : r(new l.BannerError("other","Cannot find CrazygamesAds",i.id))
                    }
                    )
                }
                requestOverlayBanners(e, t) {
                    this.logger.log("Requesting overlay banners", e);
                    const r = e.map(e => e.id);
                    Object.keys(this.overlayBanners).forEach(e => {
                        r.includes(e) || (this.logger.log("Remove overlay banner " + e),
                        this.overlayBanners[e].destroy(),
                        delete this.overlayBanners[e])
                    }
                    ),
                    e.forEach(e => {
                        if (this.overlayBanners[e.id])
                            return void this.logger.log("Skip overlay banner update " + e.id);
                        this.logger.log("Create overlay banner " + e.id);
                        const r = new s.OverlayBanner(e,this.disableBannerCheck,this,t);
                        this.overlayBanners[e.id] = r
                    }
                    )
                }
                handleEvent(e) {
                    switch (e.type) {
                    case "bannerError":
                        return void this.handleBannerErrorEvent(e);
                    case "requestBanner":
                        return void this.handleRequestBannerEvent(e)
                    }
                }
                handleBannerErrorEvent(e) {
                    const {error: t, containerId: r, code: n="other"} = e;
                    this.logger.log("Banner error happened", {
                        error: t,
                        containerId: r
                    });
                    const s = this.popFromBannerQueue(r);
                    if (!s)
                        return;
                    const {reject: o} = s;
                    o(new l.BannerError(n,`${t}`,r))
                }
                async handleRequestBannerEvent(e) {
                    const {request: t} = e;
                    this.logger.verbose("Received banner data from GF, will prefetch it now", t);
                    const r = t.request.units[0].adUnit.code
                      , n = this.popFromBannerQueue(r);
                    if (!n)
                        return void this.logger.verbose(`Banner ${r} missing in queue, not prefetching.`);
                    const {CrazygamesAds: s} = window;
                    if ((0,
                    d.isDefined)(s))
                        try {
                            await s.requestOnly(t.request, t.requestOptions),
                            this.logger.verbose(`Banner ${r} prefetched`),
                            n.resolve({
                                id: r,
                                banner: n.banner,
                                renderOptions: t.renderOptions
                            })
                        } catch {
                            n.reject(new l.BannerError("other","Failed to prefetch the banner",r))
                        }
                    else
                        n.reject(new l.BannerError("other","Cannot find CrazygamesAds",r))
                }
                popFromBannerQueue(e) {
                    const t = this.bannerQueue[e];
                    return t ? (delete this.bannerQueue[e],
                    t) : (this.logger.log(`Cannot retrieve element for id ${e} from the banner queue`),
                    null)
                }
                clearBanner(e) {
                    this.sdk.postMessage({
                        type: "clearBanner"
                    });
                    const t = document.getElementById((0,
                    a.ContainerIdToInnerId)(e));
                    if (!t)
                        return void this.logger.log(`There isn't a banner in container #${e}, not clearing anything.`);
                    t.remove(),
                    this.renderedBannerIds.delete(e);
                    const r = Object.values(this.overlayBanners).find(t => t.containerId === e);
                    r && (r.destroy(),
                    delete this.overlayBanners[r.bannerRequest.id]),
                    this.logger.log(`Cleared the banner from container #${e} ${r ? "(also overlay banner)" : ""}`)
                }
                clearAllBanners() {
                    this.sdk.postMessage({
                        type: "clearAllBanners"
                    });
                    const e = Array.from(this.renderedBannerIds.values());
                    this.logger.log("Clearing all banners, ids: ", e.map(e => `#${e}`).join(", ")),
                    e.forEach(e => {
                        this.clearBanner(e)
                    }
                    )
                }
                ensureVideoAdNotPlaying(e) {
                    if (this.sdk.ad.isAdPlaying)
                        throw new l.BannerError("videoAdPlaying","Banners cannot be rendered while a video ad is playing",e)
                }
                get activeBannersCount() {
                    return this.renderedBannerIds.size
                }
            }
        },
        3265: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.SafeLocalStorage = t.InMemoryStorage = void 0;
            const s = n(r(1916));
            class o {
                constructor() {
                    this.data = {},
                    this.clear()
                }
                setItem(e, t) {
                    this.data[e] = String(t)
                }
                getItem(e) {
                    return this.data.hasOwnProperty(e) ? this.data[e] : void 0
                }
                removeItem(e) {
                    delete this.data[e]
                }
                clear() {
                    this.data = {}
                }
            }
            t.InMemoryStorage = o,
            t.SafeLocalStorage = class {
                constructor() {
                    this.logger = new s.default("none"),
                    this.storage = this.getAvailableStorage()
                }
                static get Instance() {
                    return this._instance ? this._instance : this._instance = new this
                }
                getItem(e) {
                    return this.storage.getItem(e)
                }
                setItem(e, t) {
                    this.storage.setItem(e, t)
                }
                removeItem(e) {
                    this.storage.removeItem(e)
                }
                clear() {
                    return this.storage.clear()
                }
                isFunctioningStorage(e) {
                    try {
                        const t = `__SafeLocalStorage__${Date.now()}`
                          , r = "test";
                        return e.setItem(t, r),
                        e.getItem(t) === r && (window.localStorage.removeItem(t),
                        !0)
                    } catch {
                        return !1
                    }
                }
                getAvailableStorage() {
                    try {
                        return this.hasWorkingLocalStorage() ? (this.logger.verbose("[SafeLocalStorage] using localStorage"),
                        window.localStorage) : this.hasWorkingSessionStorage() ? (this.logger.verbose("[SafeLocalStorage] fallback to sessionStorage"),
                        window.sessionStorage) : (this.logger.verbose("[SafeLocalStorage] fallback to InMemoryStorage"),
                        new o)
                    } catch {
                        return this.logger.verbose("[SafeLocalStorage] fallback to InMemoryStorage"),
                        new o
                    }
                }
                hasWorkingLocalStorage() {
                    try {
                        if (!window.hasOwnProperty("localStorage"))
                            return !1;
                        const {localStorage: e} = window;
                        return this.isFunctioningStorage(e)
                    } catch {
                        return !1
                    }
                }
                hasWorkingSessionStorage() {
                    try {
                        if (!window.hasOwnProperty("sessionStorage"))
                            return !1;
                        const {sessionStorage: e} = window;
                        return this.isFunctioningStorage(e)
                    } catch {
                        return !1
                    }
                }
            }
        },
        3587: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(3710)
              , s = r(361)
              , o = r(2637)
              , i = r(4915)
              , a = r(1833)
              , l = r(4080)
              , d = "SDK Fail mode enabled";
            t.default = class {
                constructor(e) {
                    this.initReply = e,
                    console.log("%c[CrazyGames SDK] FAIL MODE ENABLED!", "color: red; font-size: 16px; font-weight: bold;", "\nAll the SDK methods will throw errors.")
                }
                get ad() {
                    return {
                        prefetchAd: function(e) {
                            throw new n.AdError("other",d)
                        },
                        requestAd: function(e, t) {
                            throw new n.AdError("other",d)
                        },
                        hasAdblock: function() {
                            throw new n.AdError("other",d)
                        },
                        addAdblockPopupListener() {},
                        removeAdblockPopupListener() {},
                        isAdPlaying: !1
                    }
                }
                get banner() {
                    return {
                        prefetchBanner: function(e) {
                            throw new o.BannerError("other",d,e.id)
                        },
                        requestBanner: function(e) {
                            throw new o.BannerError("other",d,e.id)
                        },
                        prefetchResponsiveBanner: function(e) {
                            throw new o.BannerError("other",d,e.id)
                        },
                        requestResponsiveBanner: function(e) {
                            throw new o.BannerError("other",d,e)
                        },
                        renderPrefetchedBanner: function(e) {
                            throw new o.BannerError("other",d,e.id)
                        },
                        clearBanner: function(e) {
                            throw new o.BannerError("other",d,e)
                        },
                        clearAllBanners: function() {
                            throw new o.BannerError("other",d,"")
                        },
                        requestOverlayBanners: function(e, t) {
                            throw new o.BannerError("other",d,"")
                        },
                        activeBannersCount: 0
                    }
                }
                get game() {
                    return {
                        link: this.initReply.gameLink,
                        id: this.initReply.gameId,
                        settings: {
                            disableChat: !!this.initReply.disableChat,
                            muteAudio: !1
                        },
                        isInstantJoin: window.location.search.includes("instantJoin=true"),
                        isInstantMultiplayer: window.location.search.includes("instantJoin=true"),
                        inviteParams: null,
                        happytime: function() {
                            throw new a.GeneralError("other",d)
                        },
                        gameplayStart: function() {
                            throw new a.GeneralError("other",d)
                        },
                        gameplayStop: function() {
                            throw new a.GeneralError("other",d)
                        },
                        loadingStart: function() {
                            throw new a.GeneralError("other",d)
                        },
                        loadingStop: function() {
                            throw new a.GeneralError("other",d)
                        },
                        inviteLink: function(e) {
                            throw new a.GeneralError("other",d)
                        },
                        showInviteButton: function(e) {
                            throw new a.GeneralError("other",d)
                        },
                        hideInviteButton: function() {
                            throw new a.GeneralError("other",d)
                        },
                        getInviteParam: function(e) {
                            throw new a.GeneralError("other",d)
                        },
                        addSettingsChangeListener: function() {
                            throw new a.GeneralError("other",d)
                        },
                        removeSettingsChangeListener: function() {
                            throw new a.GeneralError("other",d)
                        },
                        addJoinRoomListener: function() {
                            throw new a.GeneralError("other",d)
                        },
                        removeJoinRoomListener: function() {
                            throw new a.GeneralError("other",d)
                        },
                        updateRoom: function(e) {
                            throw new a.GeneralError("other",d)
                        },
                        leftRoom: function() {
                            throw new a.GeneralError("other",d)
                        }
                    }
                }
                get user() {
                    return {
                        isUserAccountAvailable: !0,
                        systemInfo: this.initReply.systemInfo,
                        showAuthPrompt: function() {
                            throw new l.UserError("other",d)
                        },
                        showAccountLinkPrompt: function() {
                            throw new l.UserError("other",d)
                        },
                        getUser: function() {
                            throw new l.UserError("other",d)
                        },
                        addAuthListener: function(e) {
                            throw new l.UserError("other",d)
                        },
                        removeAuthListener: function(e) {
                            throw new l.UserError("other",d)
                        },
                        getUserToken: function() {
                            throw new l.UserError("other",d)
                        },
                        getXsollaUserToken: function() {
                            throw new l.UserError("other",d)
                        },
                        submitScore: function(e) {
                            throw new l.UserError("other",d)
                        },
                        addScore: function(e) {
                            throw new l.UserError("other",d)
                        },
                        addScoreEncrypted: function(e, t) {
                            throw new l.UserError("other",d)
                        },
                        listFriends: function(e) {
                            throw new l.UserError("other",d)
                        }
                    }
                }
                get data() {
                    return {
                        clear: function() {
                            throw new i.DataError("other",d)
                        },
                        getItem: function(e) {
                            throw new i.DataError("other",d)
                        },
                        removeItem: function(e) {
                            throw new i.DataError("other",d)
                        },
                        setItem: function(e, t) {
                            throw new i.DataError("other",d)
                        },
                        syncUnityGameData: function() {
                            throw new i.DataError("other",d)
                        }
                    }
                }
                get analytics() {
                    return {
                        trackOrder: function(e, t) {
                            throw new s.AnalyticsError("other",d)
                        }
                    }
                }
                get environment() {
                    return "crazygames"
                }
                get isQaTool() {
                    return !1
                }
            }
        }
        ,
        3710: function(e, t, r) {
            var n, s = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r);
                var s = Object.getOwnPropertyDescriptor(t, r);
                s && !("get"in s ? !t.__esModule : s.writable || s.configurable) || (s = {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                }),
                Object.defineProperty(e, n, s)
            }
            : function(e, t, r, n) {
                void 0 === n && (n = r),
                e[n] = t[r]
            }
            ), o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), i = this && this.__importStar || (n = function(e) {
                return n = Object.getOwnPropertyNames || function(e) {
                    var t = [];
                    for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
                    return t
                }
                ,
                n(e)
            }
            ,
            function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var r = n(e), i = 0; i < r.length; i++)
                        "default" !== r[i] && s(t, e, r[i]);
                return o(t, e),
                t
            }
            );
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.AdError = t.adLogger = void 0;
            const a = i(r(1916))
              , l = r(1833);
            t.adLogger = new a.default("ad");
            class d extends l.GeneralError {
                constructor(e, r) {
                    a.DEBUG_ENABLED && t.adLogger.error(`[AdError] Code: ${e} - Message: ${r}`),
                    super(e, r),
                    this.code = e,
                    this.message = r
                }
            }
            t.AdError = d
        },
        4080: function(e, t, r) {
            var n, s = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r);
                var s = Object.getOwnPropertyDescriptor(t, r);
                s && !("get"in s ? !t.__esModule : s.writable || s.configurable) || (s = {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                }),
                Object.defineProperty(e, n, s)
            }
            : function(e, t, r, n) {
                void 0 === n && (n = r),
                e[n] = t[r]
            }
            ), o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), i = this && this.__importStar || (n = function(e) {
                return n = Object.getOwnPropertyNames || function(e) {
                    var t = [];
                    for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
                    return t
                }
                ,
                n(e)
            }
            ,
            function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var r = n(e), i = 0; i < r.length; i++)
                        "default" !== r[i] && s(t, e, r[i]);
                return o(t, e),
                t
            }
            );
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.UserError = t.LIST_FRIENDS_THROTTLE_MS = t.DEFAULT_MIN_TIME_BETWEEN_REWARDED_MS = t.DEFAULT_MIN_TIME_BETWEEN_MIDROLL_MS = void 0;
            const a = r(1833)
              , l = i(r(1916));
            t.DEFAULT_MIN_TIME_BETWEEN_MIDROLL_MS = 18e4,
            t.DEFAULT_MIN_TIME_BETWEEN_REWARDED_MS = 5e3,
            t.LIST_FRIENDS_THROTTLE_MS = 250;
            const d = new l.default("user");
            class c extends a.GeneralError {
                constructor(e, t) {
                    l.DEBUG_ENABLED && d.error(`[UserError] Code: ${e} - Message: ${t}`),
                    super(e, t),
                    this.code = e,
                    this.message = t
                }
            }
            t.UserError = c
        },
        4488: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r(4080)
              , o = r(771)
              , i = n(r(1916))
              , a = r(3012);
            function l() {
                const e = navigator.userAgent.toLowerCase()
                  , t = /mobile/i.test(e)
                  , r = /tablet/i.test(e) || t && /ipad/i.test(e);
                return t ? "mobile" : r ? "tablet" : "desktop"
            }
            t.default = class {
                constructor() {
                    this.systemInfo = {
                        browser: {
                            name: "demo",
                            version: "demo"
                        },
                        countryCode: "US",
                        locale: "en-US",
                        os: {
                            name: "demo",
                            version: "demo"
                        },
                        device: {
                            type: l()
                        },
                        applicationType: "web"
                    },
                    this.isUserAccountAvailable = "false" !== (0,
                    o.getQueryStringValue)("user_account_available"),
                    this.demoUser1 = {
                        username: "User1",
                        profilePictureUrl: "https://images.crazygames.com/userportal/avatars/1.png"
                    },
                    this.demoUser2 = {
                        username: "User2",
                        profilePictureUrl: "https://images.crazygames.com/userportal/avatars/2.png"
                    },
                    this.user1Token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJpZFVzZXIxIiwidXNlcm5hbWUiOiJVc2VyMSIsImdhbWVJZCI6InlvdXJHYW1lSWQiLCJwcm9maWxlUGljdHVyZVVybCI6Imh0dHBzOi8vaW1hZ2VzLmNyYXp5Z2FtZXMuY29tL3VzZXJwb3J0YWwvYXZhdGFycy8xLnBuZyIsImlhdCI6MTY2ODU5MzMxNCwiZXhwIjo0ODI0Mjg4NTE0fQ.u4N2DzCC6Vmo6Gys-XSl8rHQR0NUJAcWQWr29eLd54qMDPbCopPG0kye8TAidOU6dWAqNWO_kERbl75nTxNcJjbW4yqBS_bIPingIhuCCJsjvnQPkalfmVotmoZGQP21Q9MyZPfpjZNogioA3a0vm6APXAqzudTA9lTioztnT4YvgndISngOMQVNoDCJ_DgCbKy8GFQDcCN-AHFFb0WIVWiTYszv-9JZohUzULt-ueYL31pXVGHQ5C4rHESEg7LYzx1IaLKw1zcoYGxul0RxR35nm3yD_bGa6fQVzCfnKnhEBRifUZsIN1LfIHfNB23ZOh1llG7PEOdvtCSfIxP9ZK6t4gRkGn1VsqZFAMhq1LgJebO8hcm_Iqx0wF3WkdMysoQuWThTNKnwmphv9pguuALILYJluUP8UQll3qiF6gzoLPy1MfD_9l4TPZeP9Bv50B-Tm6Lk3OW248jyuFRKP_VgwZutTb5pJ7LggFcqWFXsBv5ZG3V2zsfVwpAPDhpmb4ykjoB2xLSuxjrvs1dzMhl02QAQjqTUgHj4fstgX-2jYowDyyPjj6JbT2ZC7vrrdmPvc8AcNvyCszamfRYjexElGaeJDDt6vtRuJw_JVwsCLaYHGif4UaKCoe6BECg3mRVUkH08Nm-qQPQw9slpYZmxckFEQQPCGkkPhgOBFkE",
                    this.user2Token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJpZFVzZXIyIiwidXNlcm5hbWUiOiJVc2VyMiIsImdhbWVJZCI6InlvdXJHYW1lSWQiLCJwcm9maWxlUGljdHVyZVVybCI6Imh0dHBzOi8vaW1hZ2VzLmNyYXp5Z2FtZXMuY29tL3VzZXJwb3J0YWwvYXZhdGFycy8yLnBuZyIsImlhdCI6MTY2ODU5MzMxNCwiZXhwIjo0ODI0Mjg4NTE0fQ.kh60HYKR8txKvLoCB6dQ9hQG8Mu1UgtneTGs3Y15HvBWrZoLKp3x3pTf_Vhq8xzs7fQYJKr94zYAxxFRztHey7Tv7PBBmPESUFo8Le-_s2xDy982sFhpM6XDt84ohhvEuJEsOW8wIcCaCK6wzm6UWY6n1bpw1cO1KNASyZRSkDRhfyzDVJ5e167OLgGe3euodTHgClJPDv0ZYhle9KH86PepWamCm0429VrzyOu6QdbtFcRlRNZVnTtgNrCpyvss4AyDhnY5qV9yng7xHVt4zlocP_Z7btBL_kxrzYskhJi6KYuQAYmqLxqHSDnehlIvgO4cdEpJA_FOTeACTohhEu8zjXRrfdAFvEe0W6qqUo5HNFoElRoxYWf11WGSdrJCjpF4Qei9BPgprFaVH2Xi-ITAjKyElQxeKs5p6VmvaMAGwdqZgM4fm7OSex8QQGK0HFJ7wFoCTV5PLl-MBVvTSTfemJMWEwc8od124gwT_uGdDKrASovT2pijgBsAi3jxwgfEr1RPq8uCgZtksrTqaAM9TMv9Z6Zv35pdgTrWzTrOn-G-uc4EPZq7iQaEnglWEFj8Qsm_nMQMgtIM7MYG8KwPC4if3-Yc8KwaAL_taVvkqyMaV3W5j4MX9b1bbf_fw3jrGt74MACb7FtgzKudxoz2CXKZqTppadxS_IOnlMk",
                    this.expiredToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJpZFVzZXIxIiwidXNlcm5hbWUiOiJVc2VyMSIsImdhbWVJZCI6InlvdXJHYW1lSWQiLCJwcm9maWxlUGljdHVyZVVybCI6Imh0dHBzOi8vaW1hZ2VzLmNyYXp5Z2FtZXMuY29tL3VzZXJwb3J0YWwvYXZhdGFycy8xLnBuZyIsImlhdCI6MTY2ODU5MzQ5MSwiZXhwIjoxNjY4NTkzNDkyfQ.l_0cyeD-suEM7n9l-Vb2nP5vTJi-e3HwZQWLUESJMdVTX1zPDuQhwnSgHhcGVGFnhG5Wvtni-ElpM8HnVNvY7hRthbeP23n2ScAJBvAX10vrzPuLJRn_Nj_5GcRQpK4fH813Ij8ZWuOaS2hD4gKaEUessZs5n5hNBTQN9T5j4wkNvfhuw9vqtVOha2aPveqeVy1eA5XAWI7IirHi31-Dw60MSVgsp3r4tpYEHTlUPktzLsQvO9Sk9IE7iybg9ycoFoS6L1eAvxGWVF1BMHRerPwdOV9CN0rtrqrTM3pyb1fpmFfgQpoA8AgPuVrU58mwyeTpUQ4WSrPrltGjxxfiGQOATBDBrJk5V173BfUgBEgAEP0TifWAQt02iijJa9G6q-V8p0GWto1EYSdvEDmG0YhoRBVxnOQH3U1Fu0yxMWGMm9VmZVVhVN8PpLjitEhP4Gn33IafpS05d1-Q0NFMb9-FvQCdtXjTaGbaBVIeBN-aO0r4ERvoBE9R0AUrywd9Z2zK_qKRvp35NyryLjnedsYt5Xrc9TA2uDMR77TjByyqsdQ_qv4zhLfhuiMiweXyPfYzltAiNJmEUohxlP7OvH33B6xpT7Qz2ZyEeMHBrQRQGGlT6MowcMYx_2LFNSK8PwZJNlMs0Uw_uCIu-4TvqleVleIg7sLhWiijw1cxtmM",
                    this.logger = new i.default("user"),
                    this.throttledListFriends = (0,
                    a.throttledMethod)(e => {
                        var t, r;
                        const n = [{
                            id: "1",
                            username: "Alice",
                            profilePictureUrl: "https://images.crazygames.com/userportal/avatars/3.png"
                        }, {
                            id: "2",
                            username: "Bob",
                            profilePictureUrl: "https://images.crazygames.com/userportal/avatars/4.png"
                        }]
                          , s = n.length
                          , o = null !== (t = e.page) && void 0 !== t ? t : 1
                          , i = null !== (r = e.size) && void 0 !== r ? r : 10
                          , a = Math.max(0, (o - 1) * i)
                          , l = Math.max(0, Math.min(i, s - a));
                        return {
                            friends: n.slice(a, a + l),
                            page: o,
                            size: i,
                            hasMore: a + l < s,
                            total: s
                        }
                    }
                    , {
                        delayMs: s.LIST_FRIENDS_THROTTLE_MS,
                        methodName: "listFriends",
                        throwIfThrottled: !0
                    })
                }
                async showAuthPrompt() {
                    switch (this.logger.log("Requesting auth prompt (local)"),
                    (0,
                    o.getQueryStringValue)("show_auth_prompt_response")) {
                    case "user1":
                    default:
                        return this.demoUser1;
                    case "user2":
                        return this.demoUser2;
                    case "user_cancelled":
                        throw new s.UserError("userCancelled","User cancelled the auth prompt")
                    }
                }
                async showAccountLinkPrompt() {
                    switch (this.logger.log("Requesting link account prompt (local)"),
                    (0,
                    o.getQueryStringValue)("link_account_response")) {
                    case "yes":
                    default:
                        return {
                            response: "yes"
                        };
                    case "no":
                        return {
                            response: "no"
                        };
                    case "logged_out":
                        throw new s.UserError("userNotAuthenticated","The user is not authenticated")
                    }
                }
                async getUser() {
                    switch (this.logger.log("Requesting user object (local)"),
                    (0,
                    o.getQueryStringValue)("user_response")) {
                    case "user1":
                    default:
                        return this.demoUser1;
                    case "user2":
                        return this.demoUser2;
                    case "logged_out":
                        return null
                    }
                }
                async getUserToken() {
                    switch (this.logger.log("Requesting user token (local)"),
                    (0,
                    o.getQueryStringValue)("token_response")) {
                    case "user1":
                    default:
                        return this.user1Token;
                    case "user2":
                        return this.user2Token;
                    case "expired_token":
                        return this.expiredToken;
                    case "logged_out":
                        throw new s.UserError("userNotAuthenticated","The user is not authenticated")
                    }
                }
                async getXsollaUserToken() {
                    return this.logger.log("Requesting Xsolla user token (local). Xsolla token not supported locally."),
                    "Xsolla token not supported locally"
                }
                addScore(e) {
                    this.logger.warn("addScore is no longer supported.")
                }
                addScoreEncrypted(e, t) {
                    this.logger.warn("addScoreEncrypted is no longer supported.")
                }
                submitScore(e) {
                    this.logger.log("Submitting score (local).", e.encryptedScore)
                }
                async listFriends(e) {
                    return this.throttledListFriends(e)
                }
                addAuthListener() {}
                removeAuthListener() {}
            }
        },
        4888: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.DisabledDataHandler = void 0;
            const n = r(1833);
            t.DisabledDataHandler = class {
                constructor() {
                    this.errorCode = "dataModuleDisabled",
                    this.errorMessage = "The data module is disabled. To enable it, please indicate on the Developer Portal that your game is using it."
                }
                clear() {
                    throw new n.GeneralError(this.errorCode,this.errorMessage)
                }
                getItem(e) {
                    throw new n.GeneralError(this.errorCode,this.errorMessage)
                }
                removeItem(e) {
                    throw new n.GeneralError(this.errorCode,this.errorMessage)
                }
                setItem(e, t) {
                    throw new n.GeneralError(this.errorCode,this.errorMessage)
                }
            }
        }
        ,
        4915: function(e, t, r) {
            var n, s = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r);
                var s = Object.getOwnPropertyDescriptor(t, r);
                s && !("get"in s ? !t.__esModule : s.writable || s.configurable) || (s = {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                }),
                Object.defineProperty(e, n, s)
            }
            : function(e, t, r, n) {
                void 0 === n && (n = r),
                e[n] = t[r]
            }
            ), o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), i = this && this.__importStar || (n = function(e) {
                return n = Object.getOwnPropertyNames || function(e) {
                    var t = [];
                    for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
                    return t
                }
                ,
                n(e)
            }
            ,
            function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var r = n(e), i = 0; i < r.length; i++)
                        "default" !== r[i] && s(t, e, r[i]);
                return o(t, e),
                t
            }
            );
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.DEFAULT_SAVE_INTERVAL_MS = t.MAX_DATA_LENGTH = t.DataError = void 0;
            const a = i(r(1916))
              , l = r(1833)
              , d = new a.default("data");
            class c extends l.GeneralError {
                constructor(e, t) {
                    a.DEBUG_ENABLED && d.error(`[DataError] Code: ${e} - Message: ${t}`),
                    super(e, t),
                    this.code = e,
                    this.message = t
                }
            }
            t.DataError = c,
            t.MAX_DATA_LENGTH = 1048576,
            t.DEFAULT_SAVE_INTERVAL_MS = 1e3
        },
        5366: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r(771)
              , o = n(r(1916))
              , i = r(3710)
              , a = {
                adFinished: () => {}
                ,
                adError: () => {}
                ,
                adStarted: () => {}
            }
              , l = "Ads are disabled during basic launch"
              , d = "adsDisabledBasicLaunch";
            t.default = class {
                constructor(e, t) {
                    this.sdk = e,
                    this.initInfo = t,
                    this.adCallbacks = a,
                    this.requestInProgress = !1,
                    this.adblockDetectionResolvers = [],
                    this.logger = new o.default("ad"),
                    this.adPlaying = !1,
                    this.adblockPopupListeners = [],
                    this.adblockDetectionTimeout = window.setTimeout( () => {
                        this.logger.log("Adblock timeout executed since there wasn't an adblock event in 5000ms"),
                        this.setAdblockDetectionResult(!1)
                    }
                    , 5e3)
                }
                prefetchAd(e) {
                    if ("basic" === this.initInfo.launchFlow)
                        throw new i.AdError(d,l);
                    this.logger.log(`Prefetching ${e} ad`),
                    this.sdk.postMessage({
                        type: "prefetchAd",
                        data: {
                            adType: e
                        }
                    })
                }
                async requestAd(e, t) {
                    if (this.adCallbacks = {
                        adFinished: (null == t ? void 0 : t.adFinished) || a.adFinished,
                        adError: (null == t ? void 0 : t.adError) || (null == t ? void 0 : t.adFinished) || a.adFinished,
                        adStarted: (null == t ? void 0 : t.adStarted) || a.adStarted
                    },
                    "basic" === this.initInfo.launchFlow)
                        return (0,
                        s.wrapUserFn)(this.adCallbacks.adError)(new i.AdError(d,l));
                    if (this.logger.log(`Requesting ${e} ad`),
                    this.requestInProgress) {
                        this.logger.log("Ad already requested");
                        const e = new i.AdError("other","An ad request is already in progress");
                        return (0,
                        s.wrapUserFn)(this.adCallbacks.adError)(e)
                    }
                    this.requestInProgress = !0,
                    this.sdk.postMessage({
                        type: "requestAd",
                        data: {
                            adType: e
                        }
                    })
                }
                async hasAdblock() {
                    return void 0 !== this.adblockDetectionResult ? this.adblockDetectionResult : (this.sdk.postMessage({
                        type: "hasAdblock"
                    }),
                    this.logger.log("Requesting adblock status"),
                    new Promise(e => {
                        this.adblockDetectionResolvers.push(e)
                    }
                    ))
                }
                handleEvent(e) {
                    var t, r;
                    switch (e.type) {
                    case "adblockDetectionExecuted":
                        return this.handleAdBlockDetectionExecutedEvent(e);
                    case "adError":
                        this.requestInProgress = !1;
                        const n = new i.AdError((null === (t = e.errorData) || void 0 === t ? void 0 : t.reason) || "other",(null === (r = e.errorData) || void 0 === r ? void 0 : r.message) || "Unknown message");
                        return this.adPlaying = !1,
                        (0,
                        s.wrapUserFn)(this.adCallbacks.adError)(n);
                    case "adFinished":
                        return this.adPlaying = !1,
                        this.requestInProgress = !1,
                        (0,
                        s.wrapUserFn)(this.adCallbacks.adFinished)();
                    case "adStarted":
                        return this.adPlaying = !0,
                        this.sdk.banner.activeBannersCount > 0 && this.sdk.banner.clearAllBanners(),
                        (0,
                        s.wrapUserFn)(this.adCallbacks.adStarted)();
                    case "adblockPopupShowed":
                        return void this.callAdblockPopupListeners("open")
                    }
                }
                handleAdBlockDetectionExecutedEvent(e) {
                    const {hasAdblock: t} = e
                      , r = !!t;
                    if (void 0 !== this.adblockDetectionResult)
                        return this.logger.log(`Received update for adblock state: (${r}).`),
                        void (this.adblockDetectionResult = r);
                    this.setAdblockDetectionResult(r),
                    clearTimeout(this.adblockDetectionTimeout)
                }
                setAdblockDetectionResult(e) {
                    this.adblockDetectionResult = e,
                    this.adblockDetectionResolvers.forEach(t => t(e)),
                    this.adblockDetectionResolvers = []
                }
                get isAdPlaying() {
                    return this.adPlaying
                }
                addAdblockPopupListener(e) {
                    this.adblockPopupListeners.push(e)
                }
                removeAdblockPopupListener(e) {
                    this.adblockPopupListeners = this.adblockPopupListeners.filter(t => t !== e)
                }
                callAdblockPopupListeners(e) {
                    this.adblockPopupListeners.forEach(t => {
                        try {
                            t(e)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    )
                }
            }
        },
        5430: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.extractInviteParams = function(e) {
                try {
                    const t = new URL(e)
                      , r = {};
                    return t.searchParams.forEach( (e, t) => {
                        r[t] = e
                    }
                    ),
                    delete r.czy_invite,
                    delete r.utm_source,
                    r
                } catch (e) {
                    return console.error("Failed to parse invite URL, returning {} params", e),
                    {}
                }
            }
        }
        ,
        5691: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = n(r(3201))
              , o = n(r(8617))
              , i = n(r(5366))
              , a = n(r(1924))
              , l = n(r(1916))
              , d = n(r(659))
              , c = n(r(1984))
              , h = r(2925)
              , u = n(r(8199))
              , g = r(2529);
            t.default = class {
                constructor(e, t, r) {
                    this.logger = new l.default("none"),
                    this._isQaTool = !1,
                    this.receiveMessage = async e => {
                        const t = e.data;
                        (0,
                        g.isGfToSdkEvent)(t) && t.type && (this.logger.verbose("Received message from GF", t),
                        this.bannerModule.handleEvent(t),
                        this.adModule.handleEvent(t),
                        this.userModule.handleEvent(t),
                        this.gameModule.handleEvent(t),
                        c.default.getInstance().handleEvent(t))
                    }
                    ,
                    !0 === e.debug && (l.default.forceEnable = !0),
                    this.adModule = new i.default(this,e),
                    this.bannerModule = new s.default(this,e),
                    this.gameModule = new o.default(this,e),
                    this.userModule = new a.default(this,e.systemInfo,!!e.userAccountAvailable,r),
                    this.dataModule = new d.default(this,t),
                    this.analyticsModule = new u.default(this),
                    window.addEventListener("message", this.receiveMessage, !1),
                    c.default.getInstance().init(this, e),
                    this.propagateErrors(),
                    this.addPointerLockDetection()
                }
                get environment() {
                    return this.postMessage({
                        type: "getEnvironment"
                    }),
                    "crazygames"
                }
                get isQaTool() {
                    return this.logger.warn("isQaTool is deprecated and should no longer be called."),
                    this.postMessage({
                        type: "isQATool"
                    }),
                    this._isQaTool
                }
                get banner() {
                    return this.bannerModule
                }
                get game() {
                    return this.gameModule
                }
                get user() {
                    return this.userModule
                }
                get ad() {
                    return this.adModule
                }
                get data() {
                    return this.dataModule
                }
                get analytics() {
                    return this.analyticsModule
                }
                propagateErrors() {
                    window.addEventListener("error", e => {
                        var t;
                        this.postMessage({
                            type: "error",
                            data: {
                                name: e.error.name || "Error",
                                message: e.message || "Unknown error",
                                filename: e.filename || "Unknown file",
                                lineno: e.lineno || 0,
                                colno: e.colno || 0,
                                stack: (null === (t = e.error) || void 0 === t ? void 0 : t.stack) || "No stack trace available",
                                url: window.location.href
                            }
                        })
                    }
                    ),
                    window.addEventListener("unhandledrejection", e => {
                        var t;
                        this.postMessage({
                            type: "error",
                            data: {
                                name: "UnhandledRejection",
                                message: e.reason,
                                stack: null === (t = e.reason) || void 0 === t ? void 0 : t.stack,
                                url: window.location.href
                            }
                        })
                    }
                    )
                }
                addPointerLockDetection() {
                    document.addEventListener("pointerlockchange", () => {
                        const e = !!document.pointerLockElement;
                        this.logger.verbose("Pointer lock " + (e ? "on" : "off")),
                        this.postMessage({
                            type: "pointerLockChanged",
                            data: {
                                isLocked: e
                            }
                        })
                    }
                    )
                }
                postMessage(e) {
                    this.logger.verbose("Message to GF", e),
                    h.GF_WINDOW ? h.GF_WINDOW.postMessage(e, "*") : this.logger.log("Missing GF_WINDOW, message won't be sent")
                }
            }
        },
        6100: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.stringifyError = function(e, t={}) {
                if (!e)
                    return r;
                let n = "";
                const {includeStack: s=!1} = t;
                if (e instanceof Error)
                    n = s && e.stack || e.message;
                else
                    try {
                        n = e.toString(),
                        n.startsWith("[object") && n.endsWith("]") && (n = JSON.stringify(e))
                    } catch {
                        try {
                            n = JSON.stringify(e)
                        } catch {
                            n = r
                        }
                    }
                if ("string" != typeof n)
                    try {
                        n = JSON.stringify(n)
                    } catch {
                        n = r
                    }
                return n
            }
            ;
            const r = "An error occurred"
        }
        ,
        6373: function(e, t, r) {
            var n, s = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r);
                var s = Object.getOwnPropertyDescriptor(t, r);
                s && !("get"in s ? !t.__esModule : s.writable || s.configurable) || (s = {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                }),
                Object.defineProperty(e, n, s)
            }
            : function(e, t, r, n) {
                void 0 === n && (n = r),
                e[n] = t[r]
            }
            ), o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), i = this && this.__importStar || (n = function(e) {
                return n = Object.getOwnPropertyNames || function(e) {
                    var t = [];
                    for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
                    return t
                }
                ,
                n(e)
            }
            ,
            function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var r = n(e), i = 0; i < r.length; i++)
                        "default" !== r[i] && s(t, e, r[i]);
                return o(t, e),
                t
            }
            );
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.GameError = t.ROOM_METHODS_DELAY = void 0;
            const a = i(r(1916))
              , l = r(1833);
            t.ROOM_METHODS_DELAY = 250;
            const d = new a.default("game");
            class c extends l.GeneralError {
                constructor(e, t) {
                    a.DEBUG_ENABLED && d.error(`[GameError] Code: ${e} - Message: ${t}`),
                    super(e, t),
                    this.code = e,
                    this.message = t
                }
            }
            t.GameError = c
        },
        6793: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.isJsSdkRequestXsollaUserTokenSuccessResponse = function(e) {
                return "token"in e
            }
            ,
            t.isJsSdkRequestXsollaUserTokenErrorResponse = function(e) {
                return "error"in e
            }
        }
        ,
        6868: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.GamePerformanceTracker = void 0;
            const n = r(2896);
            t.GamePerformanceTracker = class {
                constructor(e, t) {
                    var r;
                    if (this.logger = e,
                    this.sdk = t,
                    this.fpsList = [],
                    this.trackingInterval = null,
                    this.sendEventTimeout = null,
                    this.trackingInitializedOn = Date.now(),
                    this.isTabVisible = !0,
                    this.isInGameplay = !1,
                    this.onTabVisibilityChange = e => {
                        this.isTabVisible = e,
                        this.isTabVisible ? this.startTracking("tabVisible") : this.stopTracking("tabHidden")
                    }
                    ,
                    this.onGameplayStateChange = e => {
                        this.isInGameplay = e,
                        this.isInGameplay ? this.startTracking("gameplayStarted") : this.stopTracking("gameplayStopped")
                    }
                    ,
                    this.metricsInfo = null === (r = window.unityGameInstance) || void 0 === r ? void 0 : r.GetMetricsInfo,
                    "function" != typeof this.metricsInfo)
                        return e.verbose("No window.unityGameInstance.GetMetricsInfo function found, performance tracker will not run."),
                        void (this.isTrackingSupported = !1);
                    this.isTrackingSupported = !0,
                    document.addEventListener("visibilitychange", () => {
                        const e = "visible" === document.visibilityState;
                        this.onTabVisibilityChange(e)
                    }
                    )
                }
                get canStartTracking() {
                    return this.isTabVisible && this.isInGameplay && this.isTrackingSupported && !(0,
                    n.isDefined)(this.trackingInterval)
                }
                startTracking(e) {
                    this.canStartTracking && (this.logger.verbose(`Starting performance tracking, reason: ${e}`),
                    this.registerSendEventTimeout(),
                    this.trackingInterval = window.setInterval( () => {
                        this.track()
                    }
                    , 250))
                }
                stopTracking(e) {
                    (0,
                    n.isDefined)(this.trackingInterval) && (this.logger.verbose(`Stopping performance tracking, reason: ${e}`),
                    this.sendEvent("stopTracking"),
                    this.trackingInterval && (clearInterval(this.trackingInterval),
                    this.trackingInterval = null),
                    this.sendEventTimeout && (clearTimeout(this.sendEventTimeout),
                    this.sendEventTimeout = null))
                }
                track() {
                    const e = this.metricsInfo();
                    this.fpsList.push(Math.round(e.fps))
                }
                registerSendEventTimeout() {
                    this.sendEventTimeout = window.setTimeout( () => {
                        this.sendEvent("timeout"),
                        this.registerSendEventTimeout()
                    }
                    , this.sendEventDelay)
                }
                sendEvent(e) {
                    if (this.logger.verbose(`Sending performance event, reason: ${e}`),
                    0 === this.fpsList.length)
                        return void this.logger.verbose("No FPS data collected, skipping event");
                    const t = [[0, 9], [10, 19], [20, 29], [30, 39], [40, 49], [50, 59], [60, 69], [70, 79], [80, 89], [90, null]]
                      , r = {};
                    for (const [e,n] of t)
                        r[null === n ? `${e}+` : `${e}-${n}`] = 0;
                    for (const e of this.fpsList)
                        for (const [n,s] of t) {
                            if (null === s && e >= n) {
                                r[`${n}+`] += 250;
                                break
                            }
                            if (null !== s && e >= n && e <= s) {
                                r[`${n}-${s}`] += 250;
                                break
                            }
                        }
                    const n = this.metricsInfo()
                      , {totalWASMHeapSize: s, usedWASMHeapSize: o, totalJSHeapSize: i, usedJSHeapSize: a} = n
                      , l = {
                        fpsHistogram: r,
                        memory: {
                            totalWASMHeapSize: s,
                            usedWASMHeapSize: o,
                            totalJSHeapSize: i,
                            usedJSHeapSize: a
                        }
                    };
                    this.logger.verbose("Send performance event with data: ", l),
                    this.sdk.postMessage({
                        type: "analyticsTrackGamePerformance",
                        data: l
                    }),
                    this.fpsList = []
                }
                get sendEventDelay() {
                    const e = Date.now() - this.trackingInitializedOn;
                    return e < 6e4 ? 1e4 : e < 36e5 ? 6e4 : 12e4
                }
            }
        }
        ,
        7063: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.LocalDataHandler = void 0,
            t.generateLsGameDataKey = a;
            const s = n(r(1916))
              , o = r(3265)
              , i = r(1025);
            function a(e) {
                return `SDK_DATA_${e}`
            }
            t.LocalDataHandler = class {
                constructor(e, t) {
                    this.logger = new s.default("data"),
                    this.data = e,
                    this.lsKey = a(t),
                    this.logger.log("Local data handler initialized"),
                    this.logger.verbose("With this initial data: ", e)
                }
                clear() {
                    this.data = {},
                    this.saveData()
                }
                getItem(e) {
                    return this.data[e] || null
                }
                removeItem(e) {
                    delete this.data[e],
                    this.saveData()
                }
                setItem(e, t) {
                    this.data[e] = `${t}`,
                    this.saveData()
                }
                saveData() {
                    (0,
                    i.checkDataLimits)(JSON.stringify(this.data));
                    const e = {
                        data: this.data,
                        metadata: {
                            date: new Date
                        }
                    };
                    o.SafeLocalStorage.Instance.setItem(this.lsKey, JSON.stringify(e))
                }
            }
        },
        7067: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.loadAdsIfNeeded = function(e, t, r) {
                return window.CrazygamesAds || !t.banner.isBannerAdsEnabled() ? Promise.resolve() : function(e, t, r) {
                    return i || (i = (0,
                    n.loadScriptFromSource)(e).catch(t => {
                        throw new Error(`Error while loading script ${e}. Reason: ${(0,
                        s.stringifyError)(t)}`)
                    }
                    ).then( () => {
                        const e = window.CrazygamesAds;
                        if (!(0,
                        o.isDefined)(e))
                            throw new Error("CrazygamesAds not found, maybe using an adblocker.");
                        const n = e => {
                            t.postMessage({
                                type: "adsAnalyticsEvent",
                                data: {
                                    event: e
                                }
                            })
                        }
                        ;
                        try {
                            e.initAds({
                                analyticsEventHandler: n,
                                clientInfo: r
                            })
                        } catch (e) {
                            throw new Error(`Error in initAds. Reason: ${(0,
                            s.stringifyError)(e)}`)
                        }
                    }
                    ),
                    i)
                }(e, t, r)
            }
            ;
            const n = r(1853)
              , s = r(6100)
              , o = r(2896);
            let i
        }
        ,
        7470: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.isJsSdkRequestUserTokenSuccessResponse = function(e) {
                return "token"in e
            }
            ,
            t.isJsSdkRequestUserTokenErrorResponse = function(e) {
                return "error"in e
            }
        }
        ,
        7563: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.isJsSdkRequestFriendsListErrorResponse = function(e) {
                return "error"in e
            }
        }
        ,
        7643: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.wait = function(e) {
                return new Promise(t => setTimeout(t, e))
            }
        }
        ,
        7681: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.generateInviteLink = function(e, t) {
                if (!t)
                    return "An error happened when generating invite link";
                const r = new URL(t)
                  , n = r.searchParams;
                return n.set("czy_invite", "true"),
                n.set("utm_source", "invite"),
                Object.keys(e).forEach(t => {
                    n.set(t, e[t])
                }
                ),
                r.toString()
            }
        }
        ,
        7887: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.PAYMENT_PROVIDERS = void 0,
            t.PAYMENT_PROVIDERS = ["xsolla"]
        }
        ,
        8156: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r(771)
              , o = n(r(2091))
              , i = r(268);
            window.CrazyGames = {
                SDK: new o.default
            },
            (0,
            i.initializeMissingResourcesReporter)(),
            (0,
            s.addStyle)("\n.crazygames-banner-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n")
        },
        8199: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = n(r(1916))
              , o = r(771)
              , i = r(361);
            t.default = class {
                constructor(e) {
                    this.sdk = e,
                    this.logger = new s.default("analytics")
                }
                trackOrder(e, t) {
                    if (!(0,
                    o.isXsollaOrderArgumentValid)(t))
                        throw new i.AnalyticsError("invalidArgument","Order must be a JSON object.");
                    if (!i.PAYMENT_PROVIDERS.includes(e))
                        throw new i.AnalyticsError("invalidArgument",`Unsupported payment provider. Supported providers: ${i.PAYMENT_PROVIDERS.join(",")}`);
                    this.logger.log(`Track "${e}" order`, t),
                    this.sdk.postMessage({
                        type: "analyticsTrackIAPOrder",
                        data: {
                            paymentProvider: e,
                            orderJson: JSON.stringify(t)
                        }
                    })
                }
            }
        },
        8457: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.CloudDataHandler = void 0,
            t.generateCloudCacheLsGameDataKey = a;
            const s = n(r(1916))
              , o = r(1025)
              , i = r(3265);
            function a(e) {
                return `SDK_DATA_CLOUD_CACHE_${e}`
            }
            t.CloudDataHandler = class {
                constructor(e, t, r) {
                    this.sdk = e,
                    this.doNotSync = t,
                    this.data = r,
                    this.logger = new s.default("data"),
                    this.cacheLsKey = a(e.game.id),
                    this.logger.log("Cloud data handler initialized. " + (this.doNotSync ? "Data will not be synced due to failed cloud load." : "")),
                    this.logger.verbose("With this initial data: ", r)
                }
                clear() {
                    this.data = {},
                    this.saveData()
                }
                getItem(e) {
                    return this.data[e] || null
                }
                removeItem(e) {
                    delete this.data[e],
                    this.saveData()
                }
                setItem(e, t) {
                    this.data[e] = `${t}`,
                    this.saveData()
                }
                saveData() {
                    const e = JSON.stringify(this.data);
                    (0,
                    o.checkDataLimits)(e),
                    this.doNotSync || this.sdk.postMessage({
                        type: "saveSdkGameData",
                        data: {
                            jsonData: e
                        }
                    });
                    const t = {
                        data: this.data,
                        metadata: {
                            date: new Date
                        }
                    };
                    i.SafeLocalStorage.Instance.setItem(this.cacheLsKey, JSON.stringify(t))
                }
            }
        },
        8589: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r(9491)
              , o = r(1366)
              , i = n(r(1916))
              , a = r(1930)
              , l = r(2637);
            t.default = class {
                constructor(e) {
                    this.sdk = e,
                    this.disableBannerCheck = !1,
                    this.overlayBanners = {},
                    this.renderedBannerIds = new Set,
                    this.logger = new i.default("banner")
                }
                async requestBanner(e) {
                    this.logger.log("Requesting banner with automatic rendering", e),
                    this.ensureVideoAdNotPlaying(e.id);
                    const t = await this.prefetchBanner(e);
                    return this.renderPrefetchedBanner(t)
                }
                async requestResponsiveBanner(e) {
                    this.logger.log(`Requesting responsive banner with automatic rendering #${e}`),
                    this.ensureVideoAdNotPlaying(e);
                    const t = await (0,
                    a.getBannerContainer)(e, !this.disableBannerCheck)
                      , {width: r, height: n} = t.containerInfo.size
                      , s = await this.prefetchResponsiveBanner({
                        id: e,
                        width: r,
                        height: n
                    });
                    return this.renderPrefetchedBanner(s)
                }
                async prefetchBanner(e) {
                    if (this.logger.log("Prefetch banner", e),
                    !(0,
                    l.matchesInGameBannerSize)(e.width, e.height))
                        return Promise.reject("Invalid banner size");
                    const t = (0,
                    a.ContainerIdToInnerId)(e.id)
                      , r = {
                        ...e,
                        id: t
                    };
                    return {
                        id: r.id,
                        banner: r,
                        renderOptions: {}
                    }
                }
                async prefetchResponsiveBanner(e) {
                    this.logger.log(`Prefetch responsive banner #${e.id}`);
                    const {width: t, height: r} = e
                      , n = {
                        id: (0,
                        a.ContainerIdToInnerId)(e.id),
                        width: t,
                        height: r,
                        isResponsive: !0
                    };
                    return {
                        id: n.id,
                        banner: n,
                        renderOptions: {}
                    }
                }
                async renderPrefetchedBanner(e) {
                    this.logger.log("Rendering prefetched banner", e);
                    const t = (0,
                    a.InnerIdToContainerId)(e.id);
                    this.ensureVideoAdNotPlaying(t),
                    await (0,
                    a.getBannerContainer)(t, !0),
                    this.renderedBannerIds.add(t),
                    (0,
                    o.renderFakeBanner)(e.banner)
                }
                ensureVideoAdNotPlaying(e) {
                    if (this.sdk.ad.isAdPlaying)
                        throw new l.BannerError("videoAdPlaying","Banners cannot be rendered while a video ad is playing",e)
                }
                requestOverlayBanners(e, t) {
                    const r = e.map(e => e.id);
                    Object.keys(this.overlayBanners).forEach(e => {
                        r.includes(e) || (this.logger.log("Remove overlay banner " + e),
                        this.overlayBanners[e].destroy(),
                        delete this.overlayBanners[e])
                    }
                    ),
                    e.forEach(e => {
                        if (this.overlayBanners[e.id])
                            return void this.logger.log("Skip overlay banner update " + e.id);
                        this.logger.log("Create overlay banner " + e.id);
                        const r = new s.OverlayBanner(e,this.disableBannerCheck,this,t);
                        this.overlayBanners[e.id] = r
                    }
                    )
                }
                clearBanner(e) {
                    const t = document.getElementById((0,
                    a.ContainerIdToInnerId)(e));
                    t ? (t.remove(),
                    this.renderedBannerIds.delete(e),
                    this.logger.log(`Cleared the banner from container #${e}`)) : this.logger.log(`There isn't a banner in container #${e}, not clearing anything.`)
                }
                clearAllBanners() {
                    const e = Array.from(this.renderedBannerIds.values());
                    this.logger.log("Clearing all banners, ids: ", e.map(e => `#${e}`).join(", ")),
                    e.forEach(e => {
                        this.clearBanner(e)
                    }
                    )
                }
                get activeBannersCount() {
                    return this.renderedBannerIds.size
                }
            }
        },
        8591: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = n(r(9202))
              , o = n(r(8589))
              , i = n(r(4488))
              , a = r(771)
              , l = r(7681)
              , d = n(r(1916))
              , c = r(3012)
              , h = n(r(2599))
              , u = r(361)
              , g = r(8897);
            t.default = class {
                constructor() {
                    this.adModule = new s.default(this),
                    this.bannerModule = new o.default(this),
                    this.userModule = new i.default,
                    this.dataModule = new h.default(this),
                    this.gameLogger = new d.default("game"),
                    this.analyticsLogger = new d.default("analytics"),
                    this.throttledHappyTime = (0,
                    c.throttledMethod)( () => this.gameLogger.log("Requesting happytime (local)"), {
                        delayMs: 1e3,
                        methodName: "happytime"
                    }),
                    this.throttledGameplayStart = (0,
                    c.throttledMethod)( () => this.gameLogger.log("Requesting gameplay start (local)"), {
                        delayMs: 1e3,
                        methodName: "gameplayStart"
                    }),
                    this.throttledGameplayStop = (0,
                    c.throttledMethod)( () => this.gameLogger.log("Requesting gameplay stop (local)"), {
                        delayMs: 1e3,
                        methodName: "gameplayStop"
                    }),
                    this.showInviteButton = e => {
                        this.gameLogger.log("Show invite button (local)");
                        const t = (0,
                        l.generateInviteLink)(e, this.game.link);
                        return this.gameLogger.log(`Invite button link ${t}`),
                        t
                    }
                    ,
                    this.inviteLink = e => {
                        this.gameLogger.log("Requesting invite link (local)");
                        const t = (0,
                        l.generateInviteLink)(e, this.game.link);
                        return this.gameLogger.log(`Invite link is ${t}`),
                        t
                    }
                    ,
                    this.adModule.init(),
                    this.bannerModule.disableBannerCheck = "true" === (0,
                    a.getQueryStringValue)("disable_banner_check")
                }
                get ad() {
                    return this.adModule
                }
                get banner() {
                    return this.bannerModule
                }
                get user() {
                    return this.userModule
                }
                get data() {
                    return this.dataModule
                }
                get environment() {
                    return "local"
                }
                get isQaTool() {
                    return !1
                }
                get game() {
                    return {
                        link: "https://www.crazygames.com/game/your-game-will-appear-here",
                        id: "local",
                        isInstantJoin: window.location.search.includes("instantJoin=true"),
                        isInstantMultiplayer: window.location.search.includes("instantJoin=true"),
                        inviteParams: (0,
                        g.getInviteParams)(),
                        happytime: () => this.throttledHappyTime(),
                        gameplayStart: () => this.throttledGameplayStart(),
                        gameplayStop: () => this.throttledGameplayStop(),
                        loadingStart: () => this.gameLogger.log("Requesting game loading start (local)"),
                        loadingStop: () => this.gameLogger.log("Requesting game loading stop (local)"),
                        inviteLink: this.inviteLink,
                        showInviteButton: this.showInviteButton,
                        hideInviteButton: () => this.gameLogger.log("Hide invite button (local)"),
                        addSettingsChangeListener: () => this.gameLogger.log("Add settings change listener (local)"),
                        removeSettingsChangeListener: () => this.gameLogger.log("Remove settings change listener (local)"),
                        addJoinRoomListener: () => this.gameLogger.log("Add join room listener (local)"),
                        removeJoinRoomListener: () => this.gameLogger.log("Remove join room listener (local)"),
                        getInviteParam: e => new URLSearchParams(window.location.search).get(e),
                        updateRoom: e => {
                            this.gameLogger.log("Update room (local) with params:", e)
                        }
                        ,
                        leftRoom: () => {
                            this.gameLogger.log("Left room (local)")
                        }
                        ,
                        settings: {
                            disableChat: "true" === (0,
                            a.getQueryStringValue)("disableChat"),
                            muteAudio: "true" === (0,
                            a.getQueryStringValue)("muteAudio")
                        }
                    }
                }
                get analytics() {
                    return {
                        trackOrder: (e, t) => {
                            if (!(0,
                            a.isXsollaOrderArgumentValid)(t))
                                throw new u.AnalyticsError("invalidArgument","Order must be a JSON object.");
                            if (!u.PAYMENT_PROVIDERS.includes(e))
                                throw new u.AnalyticsError("invalidArgument",`Unsupported payment provider. Supported providers: ${u.PAYMENT_PROVIDERS.join(",")}`);
                            this.analyticsLogger.log(`Track "${e}" order`, t)
                        }
                    }
                }
            }
        },
        8617: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r(7681)
              , o = n(r(1916))
              , i = r(3012)
              , a = r(6373)
              , l = r(9919)
              , d = r(6868)
              , c = r(2896)
              , h = r(8897);
            t.default = class {
                constructor(e, t) {
                    var r, n;
                    this.sdk = e,
                    this.logger = new o.default("game"),
                    this.settings = {
                        disableChat: !1,
                        muteAudio: !1
                    },
                    this.isInstantJoin = window.location.search.includes("instantJoin=true"),
                    this.isInstantMultiplayer = window.location.search.includes("instantJoin=true"),
                    this.inviteParams = (0,
                    h.getInviteParams)(),
                    this.loadStatsSent = !1,
                    this.settingsChangeListeners = [],
                    this.joinRoomListener = [],
                    this.throttledHappyTime = (0,
                    i.throttledMethod)( () => {
                        this.logger.log("Requesting happytime"),
                        this.sdk.postMessage({
                            type: "happytime"
                        })
                    }
                    , {
                        delayMs: 1e3,
                        methodName: "happytime"
                    }),
                    this.throttledGameplayStart = (0,
                    i.throttledMethod)( () => {
                        this.logger.log("Requesting gameplay start"),
                        this.sdk.postMessage({
                            type: "gameplayStart"
                        })
                    }
                    , {
                        delayMs: 1e3,
                        methodName: "gameplayStart"
                    }),
                    this.throttledGameplayStop = (0,
                    i.throttledMethod)( () => {
                        this.logger.log("Requesting gameplay stop"),
                        this.sdk.postMessage({
                            type: "gameplayStop"
                        })
                    }
                    , {
                        delayMs: 1e3,
                        methodName: "gameplayStop"
                    }),
                    this.throttledUpdateRoom = (0,
                    i.throttledMethod)(e => {
                        if (!(0,
                        c.isDefined)(null == e ? void 0 : e.roomId))
                            throw new a.GameError("invalidRoomId","roomId is required to update room");
                        const {roomId: t, isJoinable: r, inviteParams: n} = e;
                        this.sdk.postMessage({
                            type: "updateMultiplayerRoomData",
                            data: {
                                roomId: `${t}`,
                                isJoinable: !!r,
                                inviteParams: null != n ? n : null
                            }
                        })
                    }
                    , {
                        delayMs: a.ROOM_METHODS_DELAY,
                        methodName: "updateRoom",
                        throwIfThrottled: !0
                    }),
                    this.throttledLeftRoom = (0,
                    i.throttledMethod)( () => {
                        this.sdk.postMessage({
                            type: "leftMultiplayerRoom"
                        })
                    }
                    , {
                        delayMs: a.ROOM_METHODS_DELAY,
                        methodName: "leftRoom",
                        throwIfThrottled: !0
                    }),
                    this.link = t.gameLink,
                    this.id = t.gameId,
                    this.settings.disableChat = null !== (r = t.disableChat) && void 0 !== r && r,
                    this.settings.muteAudio = null !== (n = t.muteAudio) && void 0 !== n && n,
                    this.performanceTracker = new d.GamePerformanceTracker(this.logger,e)
                }
                happytime() {
                    this.throttledHappyTime()
                }
                gameplayStart() {
                    if (this.throttledGameplayStart(),
                    this.performanceTracker.onGameplayStateChange(!0),
                    !this.loadStatsSent) {
                        this.loadStatsSent = !0;
                        let e = window.performance.getEntriesByType("resource").map(e => JSON.parse(JSON.stringify(e)));
                        e = (0,
                        l.uniqBy)(e, "name"),
                        this.sdk.postMessage({
                            type: "sdkGameLoadStats",
                            data: {
                                resources: e
                            }
                        })
                    }
                }
                gameplayStop() {
                    this.throttledGameplayStop(),
                    this.performanceTracker.onGameplayStateChange(!1)
                }
                loadingStart() {
                    this.logger.log("Requesting game loading start"),
                    this.sdk.postMessage({
                        type: "sdkGameLoadingStart"
                    })
                }
                loadingStop() {
                    this.logger.log("Requesting game loading stop"),
                    this.sdk.postMessage({
                        type: "sdkGameLoadingStop"
                    })
                }
                inviteLink(e) {
                    this.logger.log("Requesting invite link");
                    const t = (0,
                    s.generateInviteLink)(e, this.link);
                    return this.logger.log(`Invite link is ${t}`),
                    this.sdk.postMessage({
                        type: "inviteUrl",
                        data: {
                            inviteUrl: t
                        }
                    }),
                    t
                }
                showInviteButton(e) {
                    this.logger.log("Show invite button");
                    const t = (0,
                    s.generateInviteLink)(e, this.link);
                    return this.logger.log(`Invite button link ${t}`),
                    this.sdk.postMessage({
                        type: "showInviteButton",
                        data: {
                            inviteUrl: t
                        }
                    }),
                    t
                }
                hideInviteButton() {
                    this.logger.log("Hide invite button"),
                    this.sdk.postMessage({
                        type: "hideInviteButton"
                    })
                }
                getInviteParam(e) {
                    return new URLSearchParams(window.location.search).get(e)
                }
                addSettingsChangeListener(e) {
                    this.settingsChangeListeners.push(e)
                }
                removeSettingsChangeListener(e) {
                    this.settingsChangeListeners = this.settingsChangeListeners.filter(t => t !== e)
                }
                addJoinRoomListener(e) {
                    this.sdk.postMessage({
                        type: "registerJoinRoomListener"
                    }),
                    this.joinRoomListener.push(e)
                }
                removeJoinRoomListener(e) {
                    this.joinRoomListener = this.joinRoomListener.filter(t => t !== e)
                }
                updateRoom(e) {
                    if (e.isJoinable && void 0 === e.inviteParams)
                        throw new a.GameError("invalidArguments","inviteParams must be provided if isJoinable is true");
                    if (void 0 !== e.inviteParams && ("object" != typeof e.inviteParams || null === e.inviteParams || Array.isArray(e.inviteParams)))
                        throw new a.GameError("invalidArguments","inviteParams must be an object if provided");
                    this.throttledUpdateRoom(e)
                }
                leftRoom() {
                    this.throttledLeftRoom()
                }
                handleEvent(e) {
                    switch (e.type) {
                    case "focusStealAttempt":
                        this.restoreCanvasFocus();
                        break;
                    case "callJoinRoomListener":
                        const t = e.params;
                        this.logger.verbose("Calling join room listeners with params:", t),
                        this.joinRoomListener.forEach(e => {
                            try {
                                e(t)
                            } catch (e) {
                                this.logger.error(`Error while calling join room listener: ${e.message}`)
                            }
                        }
                        );
                        break;
                    case "audioChanged":
                        const r = e.muteAudio;
                        if (this.settings.muteAudio === r)
                            return;
                        this.settings.muteAudio = r,
                        this.settingsChangeListeners.forEach(e => {
                            try {
                                e(this.settings)
                            } catch (e) {
                                this.logger.error(`Error while calling settings changed listener: ${e.message}`)
                            }
                        }
                        )
                    }
                }
                restoreCanvasFocus() {
                    try {
                        const e = document.getElementsByTagName("canvas");
                        1 !== e.length ? this.logger.log(`There are ${e.length} canvases, don't restore focus`) : (this.logger.log("Restore focus to canvas"),
                        e[0].tabIndex = 1,
                        e[0].focus())
                    } catch {
                        this.logger.error("Failed to restore canvas focus")
                    }
                }
            }
        },
        8629: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.ch = function(e) {
                const t = JSON.parse(JSON.stringify(e))
                  , r = Object.keys(t).filter(e => void 0 !== t[e] && null !== t[e]).sort();
                let n = "";
                for (const e of r)
                    n += e + "_" + JSON.stringify(t[e]) + "_";
                return function(e) {
                    let t = 0;
                    if (0 === e.length)
                        return t;
                    for (let r = 0; r < e.length; r++)
                        t = (t << 5) - t + e.charCodeAt(r),
                        t |= 0;
                    return t
                }(n)
            }
        }
        ,
        8897: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getInviteParams = function() {
                return window.location.search.includes("czy_invite=true") ? (0,
                n.extractInviteParams)(window.location.href) : null
            }
            ;
            const n = r(5430)
        }
        ,
        9202: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r(3710)
              , o = r(771)
              , i = n(r(1916));
            t.default = class {
                constructor(e) {
                    this.sdk = e,
                    this.requestInProgress = !1,
                    this.overlay = null,
                    this.logger = new i.default("ad"),
                    this.adPlaying = !1
                }
                init() {
                    this.overlay = document.createElement("div"),
                    this.overlay.id = "local-overlay",
                    this.createOverlayStyle(),
                    document.body.appendChild(this.overlay)
                }
                prefetchAd(e) {
                    this.logger.log(`Prefetching ${e} ad`)
                }
                async requestAd(e, t) {
                    if (this.requestInProgress)
                        if (null == t ? void 0 : t.adError) {
                            const e = "An ad request is already in progress";
                            (0,
                            o.wrapUserFn)(t.adError)(new s.AdError("other",e))
                        } else
                            (null == t ? void 0 : t.adFinished) && (0,
                            o.wrapUserFn)(t.adFinished)();
                    else
                        this.adPlaying = !0,
                        (null == t ? void 0 : t.adStarted) && (0,
                        o.wrapUserFn)(t.adStarted)(),
                        this.sdk.banner.activeBannersCount > 0 && this.sdk.banner.clearAllBanners(),
                        await this.renderFakeAd(e),
                        this.adPlaying = !1,
                        (null == t ? void 0 : t.adFinished) && (0,
                        o.wrapUserFn)(t.adFinished)()
                }
                async hasAdblock() {
                    return this.logger.log("Requesting adblock status (always false) (local)"),
                    !1
                }
                addAdblockPopupListener() {}
                removeAdblockPopupListener() {}
                async renderFakeAd(e) {
                    return this.logger.log(`Requesting ${e} ad`),
                    this.requestInProgress = !0,
                    this.showOverlay(),
                    this.overlay.innerHTML = `<h1>A ${e} ad would appear here</h1>`,
                    new Promise(e => {
                        window.setTimeout( () => {
                            this.requestInProgress = !1,
                            this.hideOverlay(),
                            e()
                        }
                        , 5e3)
                    }
                    )
                }
                showOverlay() {
                    this.overlay.style.display = "flex"
                }
                hideOverlay() {
                    this.overlay.style.display = "none",
                    this.overlay.innerHTML = ""
                }
                createOverlayStyle() {
                    const e = {
                        position: "fixed",
                        display: "none",
                        inset: 0,
                        "font-family": "Arial, Helvetica, sans-serif",
                        color: "white",
                        "align-items": "center",
                        "justify-content": "center",
                        "background-color": "rgba(0,0,0,0.75)",
                        "z-index": "10000"
                    };
                    for (const t in e)
                        this.overlay.style[t] = e[t]
                }
                get isAdPlaying() {
                    return this.adPlaying
                }
            }
        },
        9491: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.OverlayBanner = void 0;
            const n = r(9919);
            t.OverlayBanner = class {
                constructor(e, t, r, s) {
                    this.bannerRequest = e,
                    this.onWindowResize = () => {
                        this.setContainerPosition()
                    }
                    ,
                    this.containerElement = document.createElement("div"),
                    this.containerId = "overlay-banner-" + e.id,
                    this.containerElement.id = this.containerId,
                    this.bannerRequest = e,
                    this.containerElement.style.position = "absolute",
                    this.containerElement.style.transformOrigin = "top left",
                    this.containerElement.style.userSelect = "none";
                    const o = document.getElementById("gfMainContainer");
                    o ? o.appendChild(this.containerElement) : document.body.appendChild(this.containerElement);
                    const i = e.size.split("x");
                    this.onScreenSize = {
                        width: parseInt(i[0]),
                        height: parseInt(i[1])
                    },
                    this.bannerModule = r,
                    this.callback = s,
                    this.disableBannerCheck = t,
                    this.debouncedWindowResize = (0,
                    n.debounce)(this.onWindowResize, 200),
                    window.addEventListener("resize", this.debouncedWindowResize),
                    this.renderBanner()
                }
                isVisible() {
                    const e = this.computeOverlay();
                    if (this.disableBannerCheck)
                        return !0;
                    const t = e.left + e.width * e.scale
                      , r = e.top + e.height * e.scale
                      , n = this.getGameContainerDimensions();
                    return !(e.top < -4 || e.left < -4 || t > window.innerWidth + 4 || r > n.height + 4)
                }
                computeOverlay() {
                    const e = this.getScale()
                      , t = this.getOnScreenPosition();
                    return {
                        width: this.onScreenSize.width,
                        height: this.onScreenSize.height,
                        top: t.y,
                        left: t.x,
                        scale: e
                    }
                }
                getGameContainerDimensions() {
                    const e = document.getElementById("game-container");
                    return e ? {
                        width: e.clientWidth,
                        height: e.clientHeight
                    } : {
                        width: window.innerWidth,
                        height: window.innerHeight
                    }
                }
                getScale() {
                    return this.getGameContainerDimensions().width / 922
                }
                getOnScreenPosition() {
                    const e = this.getGameContainerDimensions()
                      , t = this.bannerRequest.anchor.x * e.width
                      , r = (1 - this.bannerRequest.anchor.y) * e.height
                      , n = this.getScale()
                      , s = this.onScreenSize
                      , o = s.width * n
                      , i = s.height * n
                      , a = this.bannerRequest.pivot || {
                        x: .5,
                        y: .5
                    };
                    return {
                        x: t + this.bannerRequest.position.x * n - o * a.x,
                        y: r - this.bannerRequest.position.y * n - i * (1 - a.y)
                    }
                }
                setContainerPosition() {
                    const e = this.computeOverlay();
                    this.containerElement.style.width = `${e.width}px`,
                    this.containerElement.style.height = `${e.height}px`,
                    this.containerElement.style.top = `${e.top}px`,
                    this.containerElement.style.left = `${e.left}px`,
                    this.containerElement.style.transform = `scale(${e.scale})`,
                    this.containerElement.style.display = "block"
                }
                async renderBanner() {
                    if (this.setContainerPosition(),
                    !this.isVisible())
                        return this.callback(this.bannerRequest.id, "bannerError", "bannerNotEntirelyVisible"),
                        void (this.containerElement.style.display = "none");
                    try {
                        await this.bannerModule.requestBanner({
                            id: this.containerId,
                            ...this.onScreenSize
                        }),
                        this.callback(this.bannerRequest.id, "bannerRendered")
                    } catch (e) {
                        this.callback(this.bannerRequest.id, "bannerError", `${e}`)
                    }
                }
                destroy() {
                    this.containerElement && this.containerElement.remove(),
                    window.removeEventListener("resize", this.debouncedWindowResize)
                }
            }
        }
        ,
        9919: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.uniqBy = function(e, t) {
                const r = new Set
                  , n = [];
                for (const s of e) {
                    const e = s[t];
                    r.has(e) || (r.add(e),
                    n.push(s))
                }
                return n
            }
            ,
            t.shuffle = function(e) {
                const t = e.slice();
                for (let e = t.length - 1; e > 0; e--) {
                    const r = Math.floor(Math.random() * (e + 1))
                      , n = t[e];
                    t[e] = t[r],
                    t[r] = n
                }
                return t
            }
            ,
            t.debounce = function(e, t) {
                let r;
                return (...n) => {
                    void 0 !== r && clearTimeout(r),
                    r = setTimeout( () => {
                        r = void 0,
                        e(...n)
                    }
                    , t)
                }
            }
        }
    }
      , t = {};
    !function r(n) {
        var s = t[n];
        if (void 0 !== s)
            return s.exports;
        var o = t[n] = {
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r),
        o.exports
    }(8156)
}
)();
