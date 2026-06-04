const HOSTs= [
    "ubg77.gitlab.io",
    "ubg76.gitlab.io",
    "ubg66.gitlab.io",
    "ubgw.gitlab.io",
    "class6x.gitlab.io",
    "ubg6969.gitlab.io",
    "cmug.gitlab.io",
    "ubg67.gitlab.io",
    "ubg911.gitlab.io",
    "unblockedgamess3.gitlab.io",
    "sportsgames.gitlab.io",
    "dressupgames.gitlab.io",
];
let FETCHs= [];
const CLONER_URL= "https://gamecloner.wp235.workers.dev/";
const HOST= (self.location.href.split("://")?.[1]?? "").split("/")[0];
const GROUP= (self.location.href.split("?")?.[1]?? "").split("/")?.[1]?? "";
const GAME= (self.location.href.split("?")?.[1]?? "").split("/")?.[2]?? "";
const GAME_SLUG= GAME.split("=")[0];
const GAME_PATH= `${self.location.href.split("?")[0].split("&")[0].split("/cloner-sw-v")[0]}/`;


self.addEventListener("install", (event) => {
//   console.log(`clonerSW Installed HOST--${HOST}-- GROUP--${GROUP}-- GAME--${GAME}-- GAME_SLUG--${GAME_SLUG}-- GAME_PATH--${GAME_PATH}--`);
  self.skipWaiting();
});


self.addEventListener("activate", (event) => {
//   console.log(`clonerSW Activated HOST--${HOST}-- GROUP--${GROUP}-- GAME--${GAME}-- GAME_SLUG--${GAME_SLUG}-- GAME_PATH--${GAME_PATH}--`);
  event.waitUntil(self.clients.claim());
});


self.addEventListener("fetch", (event) => {
    const url= event.request.url;

    if (!url.startsWith(GAME_PATH)) {
        console.log("clonerSW CORS", url);
        const REPLACEs= {
            //Poki
            "https://devs-api.poki.com/gameinfo/": "./patch/null.json",
            "https://api.poki.com/ads/settings": "./patch/null.json",
            "https://geo.poki.io/": "./patch/poki/geo.json",
            "https://a.poki-cdn.com/prebid/": "./patch/null.js",

            // Famobi
            "https://games.cdn.famobi.com/html5games/gameapi/v1.js": "./patch/famobi/v1.js",
            "https://tools.famobi.com/api/simple-highscore/api.js": "./patch/famobi/api.js",

            // FreezeNova
            "https://unblocked-games.s3.amazonaws.com/games/unblocked.js": "./patch/freezenova/unblocked.js",
            "https://unblocked-games.s3.amazonaws.com/games/unblocked-gm.js": "./patch/freezenova/unblocked.js",

            // CoolMathGames
            "https://www.coolmathgames.com/sites/default/files/cmg-ads.js": "./patch/coolmathgames/cmg-ads.js",

            // CrazyGames
            "https://sdk.crazygames.com/": "./patch/crazygames/+",

            // GameDistribution
            "https://html5.api.gamedistribution.com/main.min.js": "./patch/gamedistribution/main.js",
            "https://html5.api.gamedistribution.com/libs/gd/api.js": "./patch/gamedistribution/api.js",

            // YGGGames
            "https://h5gamessdk.yyggames.com/sdk/YYGGames_modules/module_frogames/LayaEngineGame/module_forgames_LayaEngineGame.js": "./patch/yyggames/module_forgames_LayaEngineGameRS.js",

            // PlayTouch
            "https://games.playtouch.net/games-config/": "./patch/playtouch/games-config.json",

            // Kiz10
            "https://cdn.kiz10.com/template/plugins/md5.pack.js": "./patch/kiz10/md5.pack.js",
            "https://cdn.kiz10.com/applications/controllers/js/_apiKiz10.js": "./patch/kiz10/_apiKiz10.js",

            // itch.io
            "https://static.itch.io/htmlgame.js": "./patch/itch-io/htmlgame.js",

            "https://scripts.gd.sbs.softgames.de/sdk/": "./patch/null.js?",

            // CDN
            "https://cdn.fbrq.io/": "./patch/cdn-fbrq-io/+",
            "https://cdn.jsdelivr.net/": "./patch/cdn-jsdelivr-net/+",

            // Google
            "https://securepubads.g.doubleclick.net/tag/js/gpt.js": "./patch/google/gpt.js",
            "https://imasdk.googleapis.com/js/sdkloader/ima3.js": "./patch/google/ima3.js",
            "https://www.googletagmanager.com/gtag/js": "./patch/google/gtag.js",
            "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js": "./patch/google/adsbygoogle.js",
            "https://script.google.com/macros/s/": "./patch/null.js?",

            // Cloudflare
            "https://ajax.cloudflare.com/cdn-cgi/scripts/04b3eb47/cloudflare-static/mirage2.min.js": "./patch/cloudflare/mirage2.min.js",
            "https://static.cloudflareinsights.com/beacon.min.js": "./patch/cloudflare/beacon.js",

            // Unity
            "http://api.brainsoftware.org/get.php": "./patch/unity/get.json",
            "https://api.brainsoftware.org/get.php": "./patch/unity/get.json",
            "https://config.uca.cloud.unity3d.com": "./patch/unity/config.json",
            "https://remote-config-prd.uca.cloud.unity3d.com/settings": "./patch/unity/config.json",
            "https://cdp.cloud.unity3d.com/v1/events": "./patch/unity/events.json",
            "https://cdp1cloud.unity3d.com/v1/events": "./patch/unity/events.json",
            "https://api.uca.cloud.unity3d.com/v1/events": "./patch/unity/events.json",
            "https://collect.analytics.unity3d.com/api/analytics/": "./patch/unity/analytics.json",

            "https://accessanywheremahdi.herokuapp.com/": "./patch/null.json",

            // Other
            "https://rubick.gameanalytics.com/v2/command_center": "./patch/null.json",
            "https://api.gameanalytics.com/": "./patch/null.json",
            "https://lablockedgames.com/main.min.js": "./patch/null.js",
            "https://api.adinplay.com/": "./patch/null.js",
            "https://c.amazon-adsystem.com/aax2/apstag.js": "./patch/null.js",
            "http://localhost:8080/": "./",
        };

        for (const [matchUrl, replaceUrl] of Object.entries(REPLACEs)) {
            if (url.startsWith(matchUrl)) {
                let replace_url= `${replaceUrl}?${matchUrl}`;
                if (replaceUrl.endsWith("+")) {
                    replace_url= `${replaceUrl.replace("+", "")}${url.replace(matchUrl, "")}`;
                }
                console.log("clonerSW REPLACE", url, "→", replace_url);
                event.respondWith(
                    fetch(replace_url)
                    .then((response)=> {
                        if (response.status=== 404) {
                            if (HOSTs.includes(HOST)) {
                                const FULL_ASSET_URL= `${CLONER_URL}${GROUP}/${GAME}/${replace_url}`.replace("/./", "/");
                                return fetch(FULL_ASSET_URL, {
                                    method: "GET",
                                    headers: {
                                        "Client": "Cloner Assets"
                                    },
                                });
                            }
                        }
                        return response;
                    })
                );
                return;
            }
        }

        if ([
            url.startsWith("https://ubg235.pages.dev/"),
            url.startsWith("https://www.ubg235.com/"),
            url.startsWith("https://ubg235.com/"),
            url.startsWith("https://ipwho.is/"),
        ].includes(true)) {
            console.log("clonerSW ALLOWED", url);
            event.respondWith(fetch(event.request));
            return;
        }

        console.log("clonerSW BLOCKED", url);
        event.respondWith(fetch("./patch/blocked.xhtml"));
        return;
    }

    event.respondWith(
        fetch(event.request)
        .then((response) => {
            if (response.status === 404) {
                console.warn("clonerSW 404", url);
                // Change URL
                const ASSET_URL= url.replace(GAME_PATH, "");
                if (HOSTs.includes(HOST)) {
                    const FULL_ASSET_URL= `${CLONER_URL}${GROUP}/${GAME}/${ASSET_URL}`;
                    if (url!= FULL_ASSET_URL && !FETCHs.includes(FULL_ASSET_URL)) {
                        FETCHs.push(FULL_ASSET_URL);
                        console.log("clonerSW Retry", FULL_ASSET_URL);
                        return fetch(FULL_ASSET_URL, {
                            method: "GET",
                            headers: {
                                "Client": "Cloner Assets"
                            },
                        }).catch((err) => {
                            console.error("clonerSW Failed", err);
                            return response;
                        });
                    }
                }
            }
            return response;
        })
        .catch((error) => {
            console.error("clonerSW Error", url, error);
            throw error;
        })
    );
});
