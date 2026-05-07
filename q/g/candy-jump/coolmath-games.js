/*
	ADAPTERS
 */
famobi_adapters = {
	"analytics": {
		"trackEvent": function(event, params) {

			//console.log("event: "+event);

			switch(event) {
				case "EVENT_LEVELSTART":

                    try{
                        window.parent.cmgGameEvent('start', ''+params.levelName);
                    } catch(e) {
                        console.info("window.parent.cmgGameEvent('start' ...)");
                    }

                    /*
					window.top.postMessage({
						scope: window.famobi_gameID,
						event: 'start',
						level: params.levelName
					}, "*");
                    */

					break;

				case "EVENT_LEVELRESTART":

					try{
                        window.parent.cmgGameEvent('replay', ""+params.levelName);
                    } catch(e) {
                        console.info("window.parent.cmgGameEvent('replay' ...)");
                    }

                    /*
					window.top.postMessage({
						scope: window.famobi_gameID,
						event: 'restart',
						level: params.levelName
					}, "*");
                    */

					break;
				default:
					// ...
			}
		},
		"trackScreen": function(screen, pageTitle) {

			// console.log("screen: "+screen);

			switch(event) {
				case "SCREEN_HOME":
					// ...
					break;
				default:
					// ...
			}
		}
	}
};

/*
	STARTING GAME AFTER SITE LOCK CHECK
 */
var siteRegEx = /^([-a-zA-Z0-9\.]+)\coolmath-games\.com(\/|$)/;
if (false && siteRegEx.test(document.domain) === false) {
    throw new Error('not playable');
} else {
    window.famobi_gameID = "candy-jump";
    window.famobi_gameJS = ['js/all.js', function(){

        // Pause and resume on page becoming visible/invisible
        function onVisibilityChanged() {
        	if (document.hidden || document.mozHidden || document.webkitHidden || document.msHidden)
        		cr_setSuspended(true);
        	else
        		cr_setSuspended(false);
        };

        document.addEventListener("visibilitychange", onVisibilityChanged, false);
        document.addEventListener("mozvisibilitychange", onVisibilityChanged, false);
        document.addEventListener("webkitvisibilitychange", onVisibilityChanged, false);
        document.addEventListener("msvisibilitychange", onVisibilityChanged, false);

        function OnRegisterSWError(e)
        {
        	console.warn("Failed to register service worker: ", e);
        };

        // Runtime calls this global method when ready to start caching (i.e. after startup).
        // This registers the service worker which caches resources for offline support.
        window.C2_RegisterSW = function C2_RegisterSW()
        {
        	if (!navigator.serviceWorker)
        		return;		// no SW support, ignore call

        	try {
        		navigator.serviceWorker.register("sw.js", { scope: "./" })
        		.then(function (reg)
        		{
        			console.log("Registered service worker on " + reg.scope);
        		})
        		.catch(OnRegisterSWError);
        	}
        	catch (e)
        	{
        		OnRegisterSWError(e);
        	}
        };

        // Create new runtime using the c2canvas
        cr_createRuntime("c2canvas");
    }];

    (function (document, url, fgJS, firstJS) {
            fgJS = document.createElement('script');
            firstJS = document.getElementsByTagName('script')[0];
            fgJS.src = url + encodeURIComponent(document.location.href);
            firstJS.parentNode.insertBefore(fgJS, firstJS);
    })(document, 'html5games/gameapi/v1.js?e=');
}

/*
	UNLOCK ALL LEVELS
 */
window.unlockAllLevels = function() {
    // nothing to do here...
};
