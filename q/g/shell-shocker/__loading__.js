if(typeof VERSION !== 'undefined'){
    pc.Asset.prototype.getFileUrl = function () {
        var file = this.getPreferredFile();

        if (! file || ! file.url)
            return null;

        var url = file.url;

        if (this.registry && this.registry.prefix && ! ABSOLUTE_URL.test(url))
            url = this.registry.prefix + url;

        return url + '?v=' + VERSION;
    };
}

//initalized commands
window.addEventListener('keydown', function(e) {
    if(e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
    }
    
    if(e.which == 9 && (e.target == document.body || pc.isMapLoaded)) { 
        e.preventDefault(); 
    }
});

window.addEventListener('keyup', function(e) {
    if(e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
    }
    
    if(e.which == 9 && e.target == document.body) { 
        e.preventDefault(); 
    }
});

if(window.location && window.location.href.search('isMobile') > -1){
    pc.isMobile = true;
}else{
    pc.isMobile = false;
}

var wrapper;

pc.script.createLoadingScreen(function (app) {
    var showSplash = function () {
        var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 519.31 91.33"><defs><style>.cls-1{fill:none;stroke:#fff;stroke-miterlimit:10;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-1" points="0.51 1.2 2.35 90.83 42.1 90.83 96.85 1.2 64.59 1.2 30.04 59.81 29.72 1.2 0.51 1.2"/><path class="cls-1" d="M121.29,1.2,187.44.62s6.19-.77,5.54,3.46-4.56,12.71-4.56,12.71-.65,2.94-6.84,2.94H134.33l-6.52,16h42a2.74,2.74,0,0,1,1.3,3.26c-.65,2.28-5.87,16.62-5.87,16.62h-44l-7.17,16.62h54.1L160.4,90.83H89.68s-14.66-.72-9.78-17l23.14-59S107.6,2.23,121.29,1.2Z"/><path class="cls-1" d="M209,.62,234,.56S237,.5,238.28,4.41s15,41.6,15,41.6L271.52,1.2H302.8L270.22,90.83h-29L224.59,45.69,206.67,90.83H174.73Z"/><path class="cls-1" d="M333.76.62,400.57.56s11.08-1.69,13,12.65l-7.17,18.25H373.68l3.42-11.73-30.63-.66-20.2,53.45h31.61l4.89-13.36-9.46-19.23H402.2L388.51,78.71s-5.87,12.12-20.2,12.12H299.87S286.51,88.16,293,70.56l22.48-57S322.68.41,333.76.62Z"/><path class="cls-1" d="M447.07,1.17,513.22.59s6.19-.77,5.54,3.46-4.56,12.71-4.56,12.71-.66,2.93-6.85,2.93H460.1l-6.52,16h42a2.74,2.74,0,0,1,1.31,3.26c-.66,2.28-5.87,16.62-5.87,16.62h-44L439.9,72.16H494L486.17,90.8H415.46s-14.67-.72-9.78-17l23.14-59S433.38,2.2,447.07,1.17Z"/></g></g></svg>';
        
        wrapper = document.createElement('div');
        wrapper.id = 'application-splash-wrapper';
        document.body.appendChild(wrapper);

        var splash = document.createElement('div');
        splash.id = 'application-splash';
        
        wrapper.appendChild(splash);
        
        var hints = [
            '"NeXi Boosting Service = $5 ❤" - NeXi2k#9174', 
            '"Daddy can i have your Credit cards? For what this time? I NEED VG COINS!!" - Vatr1x. ツ#3087',
            '"Resort ..... never again ....never again (RS2:V)" - Prophet#1487',
            '"Come join me on Twitch! Geno_TTV" - KaG | Geno#1073',
            '"Izzi aint no baby." - Izzibaby#5917',
            '"lemons are created to be eaten" - Powered#3959',
            '"I have a massive black c**k that prophet likes a lot" - ooops#0001',
            '"KaG on top" - Slimecube#1925',
            '"Sub to me on youtube and follow me on twitch (or if not I will find you and kill you >:)" - Nipotino333#2482',
            '"Hapiness is not thinking of the past or the present" - Deepanshu9#9117',
            '"A idiot admires complexity. But a genius admires simplicity" - Anonymous'
        ];
        
        var description = document.createElement('div');
            description.innerText = '' + hints[
                Math.floor(Math.random() * hints.length)
            ];
            description.id = 'description';
        
        wrapper.appendChild(description);

        var logo = document.createElement('div');
            logo.id = 'logo';
            logo.innerHTML = svg;
        
        splash.appendChild(logo);
        
        var _version = 'DEV';
        
        if(typeof VERSION_CODE != 'undefined'){
            _version = VERSION_CODE;
        }
        
        var footer = document.createElement('div');
            footer.id = 'footer';
            footer.innerHTML = '';
        
        splash.appendChild(footer);
        splash.appendChild(logo);
        
        var container = document.createElement('div');
        container.id = 'progress-bar-container';
        splash.appendChild(container);

        var bar = document.createElement('div');
        bar.id = 'progress-bar';
        container.appendChild(bar);
        
        //Poki SDK code block
        if(typeof PokiSDK !== 'undefined'){
            PokiSDK.gameLoadingStart();
        }
    };

    var hideSplash = function () {
        var splash = document.getElementById('application-splash-wrapper');
        
        if(splash && splash.parentElement){
            splash.parentElement.removeChild(splash);
        }
        
        //Poki SDK code block
        if(typeof PokiSDK !== 'undefined'){
            PokiSDK.gameLoadingFinished();
        }
    };

    var setProgress = function (value) {
        var bar = document.getElementById('progress-bar');
        if(bar) {
            value = Math.min(1, Math.max(0, value));
            bar.style.width = value * 100 + '%';
        }
        
        //Poki SDK code block
        if(typeof PokiSDK !== 'undefined'){
            var data = {};
                data.percentageDone = value;
                data.kbLoaded = value * 100;
                data.kbTotal  = 100;
                data.fileNameLoaded = 'game.json';
                data.filesLoaded = 1;
                data.filesTotal  = 1;

            PokiSDK.gameLoadingProgress(data);
        }
    };

    var createCss = function () {
        var css = [
            'body {',
            '-webkit-touch-callout: none;',
            '  -webkit-user-select: none;',
            '   -khtml-user-select: none;',
            '     -moz-user-select: moz-none;',
            '      -ms-user-select: none;',
            '       -o-user-select: none;',
            '          user-select: none;',

            '-webkit-touch-callout: default;',
            '  -webkit-user-select: text;',
            '   -khtml-user-select: text;',
            '     -moz-user-select: text;',
            '      -ms-user-select: text;',
            '       -o-user-select: text;',
            '          user-select: text;',
            '}',
            
            '*:not(input):not(textarea){',
            '    -webkit-user-select: none;',
            '    -webkit-touch-callout: none;',
            '}',
            
            'input:disabled, textarea:disabled, ',
            'input:disabled::placeholder, textarea:disabled::placeholder{',
            '    -webkit-text-fill-color: currentcolor;',
            '    opacity: 1;',
            '}',
            
            '#application-splash-wrapper {',
            '    position: absolute;',
            '    top: 0;',
            '    left: 0;',
            '    height: 100%;',
            '    width: 100%;',
            '    background-image: url("files/assets/34136044/1/Mistle-Blur.jpg");',
            '}',

            '#application-splash {',
            '    position: absolute;',
            '    top: calc(50% - 28px);',
            '    width: 350px;',
            '    left: calc(50% - 175px);',
            '}',

            '#application-splash img {',
            '    width: 100%;',
            '}',
            
            '#footer {',
            '    position: fixed;',
            '    bottom: 1vh;',
            '    color: #decafe;',
            '    text-align: center;',
            '    font-size: 1vw;',
            '    font-family: monospace;',
            '    right: 1vw;',
            '}',
            
            '#description {',
            '    position: absolute;',
            '    bottom: 6vh;',
            '    left: 50%;',
            '    padding: 10px 5px;',
            '    transform: translate(-50%, 0%);',
            '    text-align: center;',
            '    background-color: rgba(32, 32, 32, 0.75);',
            '    color: #fff;',
            '    width: 400px;',
            '    border-radius: 99px;',
            '    font-size: 16px;',
            '}',

            '#progress-bar-container {',
            '    margin-top: 20px;',
            '    height: 5px;',
            '    width: calc(100% - 1px);',
            '    background-color: #1d292c;',
            '}',
            
            '#animated-loading-image-1 {',
            '    height: 50vh;',
            '    left: 0px;',
            '    opacity: 0;',
            '    bottom: 0px;',
            '    position: absolute;',
            '    animation-name: loading-image-1;',
            '    animation-duration: 6s;',
            '}',
        
            
            '#animated-loading-image-2 {',
            '    height: 20vh;',
            '    right: 30px;',
            '    bottom: 0px;',
            '    opacity: 0;',
            '    position: absolute;',
            '    animation-name: loading-image-2;',
            '    animation-duration: 6s;',
            '    animation-delay: 2s;',
            '}',
            
            'button {',
            '    background-color: #4f237c;',
            '    border: none;',
            '    border-radius: 0.2vw;',
            '    color: #fff;',
            '    box-shadow: 0px 0.05vw 0.2vw rgba(0, 0, 0, 0.4);',
            '    padding: 0.4vw 0.9vw !important;',
            '    font-size: 0.8vw;',
            '    border-top: solid 1px rgba(255, 255, 255, 0.1);',
            '    cursor:pointer;',
            '    outline:none;',
            '    white-space: nowrap;',
            '}',

            '#progress-bar {',
            '    width: 0%;',
            '    height: 100%;',
            '    background-color: #ffffff;',
            '    box-shadow: 0px 0px 30px #ffffff;',
            '}',
            '@media (max-width: 480px) {',
            '    #application-splash {',
            '        width: 170px;',
            '        left: calc(50% - 85px);',
            '    }',
            '}',
            
            '.cls-1 {',
            '   stroke-dasharray: 1000;',
            '   stroke-dashoffset: 1000;',
            '   stroke-width: 2;',
            '   animation: dash 3.0s linear normal infinite;',
            '}',
            
            '@keyframes dash {',
            '   from {',
            '       stroke-dashoffset: 1000;',
            '   }',
            '   to {',
            '       stroke-dashoffset: -1000;',
            '   }',
            '}'
        ].join("\n");

        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }

        document.head.appendChild(style);
    };


    createCss();
    showSplash();
        
    app.on('preload:start', function () {
        var randomImage = new Image();
            randomImage.src = pc.app.assets.find('Echo-Thumbnail-1').getFileUrl();
            randomImage.id  = 'animated-loading-image-1';
        
        wrapper.appendChild(randomImage);
    });
    
    app.on('preload:end', function () {
        app.off('preload:progress');
    });
    app.on('preload:progress', setProgress);
    app.on('start', hideSplash);
});