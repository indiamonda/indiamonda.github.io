( () => {
    "use strict";
    var e = {
        540: e => {
            e.exports = function(e) {
                var t = document.createElement("style");
                return e.setAttributes(t, e.attributes),
                e.insert(t, e.options),
                t
            }
        }
        ,
        1113: e => {
            e.exports = function(e, t) {
                if (t.styleSheet)
                    t.styleSheet.cssText = e;
                else {
                    for (; t.firstChild; )
                        t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(e))
                }
            }
        }
        ,
        1601: e => {
            e.exports = function(e) {
                return e[1]
            }
        }
        ,
        4503: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var r = n(1601)
              , o = n.n(r)
              , a = n(6314)
              , c = n.n(a)()(o());
            c.push([e.id, "#error-screen {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: max(10px, var(--safe-area-top-unscaled)) max(10px, var(--safe-area-right-unscaled)) max(10px, var(--safe-area-bottom-unscaled)) max(10px, var(--safe-area-left-unscaled));\n\tbox-sizing: border-box;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tz-index: 1000;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: var(--surface-color);\n}\n\n#error-screen > .title {\n\tfont-size: 28px;\n\tcolor: var(--text-color);\n}\n\n#error-screen > .version, #error-screen > .platform, #error-screen > .user-agent {\n\tfont-size: 20px;\n\tcolor: var(--text-color);\n\topacity: 0.5;\n}\n\n#error-screen > textarea {\n\tmargin: 10px 0;\n\theight: 100%;\n\tflex-grow: 1;\n\tbackground-color: var(--surface-tertiary-color);\n\tborder: none;\n\tresize: none;\n\tcolor: var(--text-color);\n\tword-break: break-word;\n\tfont-size: 20px;\n}\n#error-screen > textarea:focus-visible {\n\toutline: none;\n}\n\n#error-screen > .button-container {\n\tdisplay: flex;\n}\n\n#error-screen > .button-container > button:first-of-type {\n\tmargin-right: auto;\n}\n", ""]);
            const i = c
        }
        ,
        5056: (e, t, n) => {
            e.exports = function(e) {
                var t = n.nc;
                t && e.setAttribute("nonce", t)
            }
        }
        ,
        5072: e => {
            var t = [];
            function n(e) {
                for (var n = -1, r = 0; r < t.length; r++)
                    if (t[r].identifier === e) {
                        n = r;
                        break
                    }
                return n
            }
            function r(e, r) {
                for (var a = {}, c = [], i = 0; i < e.length; i++) {
                    var s = e[i]
                      , l = r.base ? s[0] + r.base : s[0]
                      , d = a[l] || 0
                      , u = "".concat(l, " ").concat(d);
                    a[l] = d + 1;
                    var p = n(u)
                      , f = {
                        css: s[1],
                        media: s[2],
                        sourceMap: s[3],
                        supports: s[4],
                        layer: s[5]
                    };
                    if (-1 !== p)
                        t[p].references++,
                        t[p].updater(f);
                    else {
                        var m = o(f, r);
                        r.byIndex = i,
                        t.splice(i, 0, {
                            identifier: u,
                            updater: m,
                            references: 1
                        })
                    }
                    c.push(u)
                }
                return c
            }
            function o(e, t) {
                var n = t.domAPI(t);
                n.update(e);
                return function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer)
                            return;
                        n.update(e = t)
                    } else
                        n.remove()
                }
            }
            e.exports = function(e, o) {
                var a = r(e = e || [], o = o || {});
                return function(e) {
                    e = e || [];
                    for (var c = 0; c < a.length; c++) {
                        var i = n(a[c]);
                        t[i].references--
                    }
                    for (var s = r(e, o), l = 0; l < a.length; l++) {
                        var d = n(a[l]);
                        0 === t[d].references && (t[d].updater(),
                        t.splice(d, 1))
                    }
                    a = s
                }
            }
        }
        ,
        6314: e => {
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map((function(t) {
                        var n = ""
                          , r = void 0 !== t[5];
                        return t[4] && (n += "@supports (".concat(t[4], ") {")),
                        t[2] && (n += "@media ".concat(t[2], " {")),
                        r && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")),
                        n += e(t),
                        r && (n += "}"),
                        t[2] && (n += "}"),
                        t[4] && (n += "}"),
                        n
                    }
                    )).join("")
                }
                ,
                t.i = function(e, n, r, o, a) {
                    "string" == typeof e && (e = [[null, e, void 0]]);
                    var c = {};
                    if (r)
                        for (var i = 0; i < this.length; i++) {
                            var s = this[i][0];
                            null != s && (c[s] = !0)
                        }
                    for (var l = 0; l < e.length; l++) {
                        var d = [].concat(e[l]);
                        r && c[d[0]] || (void 0 !== a && (void 0 === d[5] || (d[1] = "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {").concat(d[1], "}")),
                        d[5] = a),
                        n && (d[2] ? (d[1] = "@media ".concat(d[2], " {").concat(d[1], "}"),
                        d[2] = n) : d[2] = n),
                        o && (d[4] ? (d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}"),
                        d[4] = o) : d[4] = "".concat(o)),
                        t.push(d))
                    }
                }
                ,
                t
            }
        }
        ,
        7659: e => {
            var t = {};
            e.exports = function(e, n) {
                var r = function(e) {
                    if (void 0 === t[e]) {
                        var n = document.querySelector(e);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                            try {
                                n = n.contentDocument.head
                            } catch (e) {
                                n = null
                            }
                        t[e] = n
                    }
                    return t[e]
                }(e);
                if (!r)
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                r.appendChild(n)
            }
        }
        ,
        7825: e => {
            e.exports = function(e) {
                if ("undefined" == typeof document)
                    return {
                        update: function() {},
                        remove: function() {}
                    };
                var t = e.insertStyleElement(e);
                return {
                    update: function(n) {
                        !function(e, t, n) {
                            var r = "";
                            n.supports && (r += "@supports (".concat(n.supports, ") {")),
                            n.media && (r += "@media ".concat(n.media, " {"));
                            var o = void 0 !== n.layer;
                            o && (r += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")),
                            r += n.css,
                            o && (r += "}"),
                            n.media && (r += "}"),
                            n.supports && (r += "}");
                            var a = n.sourceMap;
                            a && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")),
                            t.styleTagTransform(r, e, t.options)
                        }(t, e, n)
                    },
                    remove: function() {
                        !function(e) {
                            if (null === e.parentNode)
                                return !1;
                            e.parentNode.removeChild(e)
                        }(t)
                    }
                }
            }
        }
    }
      , t = {};
    function n(r) {
        var o = t[r];
        if (void 0 !== o)
            return o.exports;
        var a = t[r] = {
            id: r,
            exports: {}
        };
        return e[r](a, a.exports, n),
        a.exports
    }
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }),
        t
    }
    ,
    n.d = (e, t) => {
        for (var r in t)
            n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
    }
    ,
    n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    n.nc = void 0;
    var r = n(5072)
      , o = n.n(r)
      , a = n(7825)
      , c = n.n(a)
      , i = n(7659)
      , s = n.n(i)
      , l = n(5056)
      , d = n.n(l)
      , u = n(540)
      , p = n.n(u)
      , f = n(1113)
      , m = n.n(f)
      , v = n(4503)
      , h = {};
    h.styleTagTransform = m(),
    h.setAttributes = d(),
    h.insert = s().bind(null, "head"),
    h.domAPI = c(),
    h.insertStyleElement = p();
    o()(v.A, h);
    v.A && v.A.locals && v.A.locals;
    const y = ( () => {
        let e = "polytrack_v5_";
        return e += "prod_",
        e
    }
    )()
      , x = {
        migrationFinishedKey: y + "migrated",
        startupInfoKey: y + "startup_info",
        recordKeyPrefix: y + "record_",
        trackKeyPrefix: y + "track_",
        userProfileSlotKey: y + "user_slot",
        userProfileKeyPrefix: y + "user_",
        isMusicEnabledKey: y + "is_music_enabled",
        settingsKey: y + "settings",
        keyBindingsKey: y + "key_bindings",
        trackSelectionTabKey: y + "selected_track_tab",
        unlockedCarStylesKey: y + "unlocked_car_styles"
    };
    Object.freeze(x);
    const g = x;
    let b = null
      , C = !1;
    function w(e) {
        if (!C) {
            if (null == b) {
                const e = document.createElement("div");
                e.id = "error-screen",
                document.body.appendChild(e);
                const t = document.createElement("div");
                t.className = "title",
                t.textContent = "Oh no! PolyTrack encountered an unexpected error!",
                e.appendChild(t);
                const n = document.createElement("div");
                n.className = "version",
                n.textContent = "Version: 0.6.1",
                null != window.polytrackModConfiguration?.modName && (n.textContent += " (Modded)"),
                e.appendChild(n);
                const r = document.createElement("div");
                r.className = "platform",
                r.textContent = "Platform: itch (" + window.location.hostname + ")",
                e.appendChild(r);
                const o = document.createElement("div");
                o.className = "user-agent",
                o.textContent = "User Agent: " + navigator.userAgent,
                e.appendChild(o);
                const a = document.createElement("textarea");
                a.readOnly = !0,
                e.appendChild(a);
                const c = document.createElement("div");
                c.className = "button-container",
                e.appendChild(c);
                const i = document.createElement("button");
                i.className = "button",
                i.textContent = "Reload",
                i.addEventListener("click", ( () => {
                    window.location.reload()
                }
                )),
                c.appendChild(i);
                const s = document.createElement("button");
                s.className = "button",
                s.textContent = "Close",
                s.addEventListener("click", ( () => {
                    document.body.removeChild(e),
                    b = null,
                    C = !0
                }
                )),
                c.appendChild(s);
                {
                    const e = document.createElement("button");
                    e.className = "button",
                    e.textContent = "Reset Settings",
                    e.addEventListener("click", ( () => {
                        try {
                            window.localStorage.removeItem(g.settingsKey),
                            e.disabled = !0
                        } catch (e) {
                            console.error("Failed to reset settings:", e)
                        }
                    }
                    )),
                    c.appendChild(e)
                }
                b = {
                    element: e,
                    textArea: a
                }
            }
            b.textArea.value = e + "\n" + b.textArea.value
        }
    }
    window.addEventListener("error", (e => {
        w(`${e.message}\nSource: ${e.filename}\nLine: ${e.lineno.toString()}\nColumn: ${e.colno.toString()}\n`)
    }
    )),
    window.addEventListener("unhandledrejection", (e => {
        let t;
        e.reason instanceof Error ? (t = `Unhandled Rejection:\n${e.reason.message}`,
        null != e.reason.stack && (t += `\nStack:\n${e.reason.stack}`)) : t = `Unhandled Rejection:\n${String(e.reason)}`,
        w(t)
    }
    ))
}
)();
