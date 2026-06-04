(function(){
    ClonerLog || (ClonerLog = console.log);


    window.GameMonetize= {
        SDK: function() {
            return {
                showBanner: function(gameKey) {
                    ClonerLog("sdk.showBanner", gameKey, arguments);
                    try {
                        SDK_OPTIONS.onEvent({
                            name: "SDK_READY",
                            message: "SDK Ready",
                            status: "warning"
                        });
                    } catch (e) {}
                    return new Promise((resolve)=> {
                        ClonerAd(()=> {
                            try {
                                SDK_OPTIONS.onEvent({
                                    name: "SDK_GAME_START",
                                    message: "SDK Game Start",
                                    status: "warning"
                                });
                            } catch (e) {}
                            resolve(true);
                        });
                    });
                }
            }
        }
    }


    window.sdk = new window.GameMonetize.SDK();
})();
