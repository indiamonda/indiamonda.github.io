window.boot = function () {
    var settings = window._CCSettings;
    window._CCSettings = undefined;
    var onProgress = null;

    var RESOURCES = cc.AssetManager.BuiltinBundleName.RESOURCES;
    var INTERNAL = cc.AssetManager.BuiltinBundleName.INTERNAL;
    var MAIN = cc.AssetManager.BuiltinBundleName.MAIN;

    function setLoadingDisplay() {
        var splash = document.getElementById('splash');
        var logo = document.getElementById('splash-logo');
        splash.style.display = 'flex';
        splash.style.backgroundColor = '#FFFFFF';

        // Fade in logo
        setTimeout(function () {
            logo.style.opacity = '1';
        }, 100);

        cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
            // Fade out logo
            setTimeout(function () {
                logo.style.opacity = '0';
                // Hide splash screen after fade out
                setTimeout(function () {
                    splash.style.display = 'none';
                }, 500);
            }, 1000);
        });
    }

    var onStart = function () {

        cc.view.enableRetina(true);
        cc.view.resizeWithBrowserSize(true);

        if (cc.sys.isBrowser) {
            setLoadingDisplay();
        }

        /* Lock orientation on real mobile devices so a phone held in
         * landscape still renders the rhythm board upright. Cocos2d's
         * `setOrientation(PORTRAIT)` rotates the canvas 90° internally when
         * the viewport is wider than tall, which is exactly what we want for
         * a fullscreen vertical tile-tapper. We deliberately gate this on
         * `cc.sys.isMobile` so desktop users (whose browser window is almost
         * always landscape) never see a rotated canvas — on desktop the
         * engine's letterboxing already keeps the play field correct.
         *
         * `enableAutoFullScreen` is intentionally NOT enabled here: this
         * page is loaded inside the site's #game-frame iframe, and the
         * fullscreen escape hatch is provided by the parent's toolbar.
         * Auto-firing requestFullscreen() on first touch fights with the
         * jqrg-loader sound gate and can leave the page in a half-fullscreen
         * state on browsers that block iframe fullscreen requests. */
        if (cc.sys.isMobile) {
            if (settings.orientation === 'landscape') {
                cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
            } else if (settings.orientation === 'portrait') {
                cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
            }
        }

        /* Belt-and-suspenders: the cocos2d input manager registers touch
         * listeners with `useCapture=false` and no `passive` flag, which
         * means the *first* touchmove the engine sees is non-passive and
         * `preventDefault()` works. But Chrome on Android occasionally
         * promotes a long-running touchmove sequence to passive mid-gesture
         * if the page is doing heavy work — at which point pull-to-refresh
         * fires. Reattaching a non-passive sentinel here keeps that from
         * happening for the lifetime of the page. */
        try {
            var canvas = document.getElementById('GameCanvas');
            if (canvas && canvas.addEventListener) {
                var blockMove = function (ev) {
                    if (ev && ev.cancelable) ev.preventDefault();
                };
                canvas.addEventListener('touchstart', blockMove, { passive: false });
                canvas.addEventListener('touchmove', blockMove, { passive: false });
                canvas.addEventListener('touchend', blockMove, { passive: false });
                canvas.addEventListener('touchcancel', blockMove, { passive: false });
            }
        } catch (_) {}

        // Limit downloading max concurrent task to 2,
        // more tasks simultaneously may cause performance draw back on some android system / browsers.
        // You can adjust the number based on your own test result, you have to set it before any loading process to take effect.
        if (cc.sys.isBrowser && cc.sys.os === cc.sys.OS_ANDROID) {
            cc.assetManager.downloader.maxConcurrency = 2;
            cc.assetManager.downloader.maxRequestsPerFrame = 2;
        }

        var launchScene = settings.launchScene;
        var bundle = cc.assetManager.bundles.find(function (b) {
            return b.getSceneInfo(launchScene);
        });

        bundle.loadScene(launchScene, null, onProgress,
            function (err, scene) {
                if (!err) {
                    cc.director.runSceneImmediate(scene);
                    if (cc.sys.isBrowser) {
                        // show canvas
                        var canvas = document.getElementById('GameCanvas');
                        canvas.style.visibility = '';
                        var div = document.getElementById('GameDiv');
                        if (div) {
                            div.style.backgroundImage = '';
                        }
                        console.log('Success to load scene: ' + launchScene);
                    }
                }
            }
        );

    };

    var option = {
        id: 'GameCanvas',
        debugMode: settings.debug ? cc.debug.DebugMode.INFO : cc.debug.DebugMode.ERROR,
        showFPS: settings.debug,
        frameRate: 60,
        groupList: settings.groupList,
        collisionMatrix: settings.collisionMatrix,
    };

    cc.assetManager.init({
        bundleVers: settings.bundleVers,
        remoteBundles: settings.remoteBundles,
        server: settings.server
    });

    var bundleRoot = [INTERNAL, "mt3"];
    settings.hasResourcesBundle && bundleRoot.push(RESOURCES);

    var count = 0;
    function cb(err) {
        if (err) return console.error(err.message, err.stack);
        count++;
        if (count === bundleRoot.length + 1) {
            cc.assetManager.loadBundle(MAIN, function (err) {
                if (!err) cc.game.run(option, onStart);
            });
        }
    }

    cc.assetManager.loadScript(settings.jsList.map(function (x) { return 'src/' + x; }), cb);

    for (var i = 0; i < bundleRoot.length; i++) {
        cc.assetManager.loadBundle(bundleRoot[i], cb);
    }
};

if (window.jsb) {
    var isRuntime = (typeof loadRuntime === 'function');
    if (isRuntime) {
        require('src/settings.js');
        require('src/cocos2d-runtime.js');
        if (CC_PHYSICS_BUILTIN || CC_PHYSICS_CANNON) {
            require('src/physics.js');
        }
        require('jsb-adapter/engine/index.js');
    }
    else {
        require('src/settings.js');
        require('src/cocos2d-jsb.js');
        if (CC_PHYSICS_BUILTIN || CC_PHYSICS_CANNON) {
            require('src/physics.js');
        }
        require('jsb-adapter/jsb-engine.js');
    }

    cc.macro.CLEANUP_IMAGE_CACHE = true;
    window.boot();
}