var adblocked  = false;
var SDKLoaded  = false;

var vitag = vitag || {};

window.aiptag = window.aiptag || {cmd: []};
aiptag.cmd.display = aiptag.cmd.display || [];	aiptag.cmd.player = aiptag.cmd.player || [];
aiptag.gdprShowConsentTool = true;
aiptag.gdprConsentToolPosition = "bottom";

if(typeof blockAdBlock === 'undefined') {
    adblocked = true;
}else{
    blockAdBlock.onDetected(function(){
        adblocked = true
    });
}

var adsProvider = {
	defaultProvider : 'Poki',
	type : 'Poki',
	init : function(){
		this.type = this.setAdsProvider();
		this.initalizeSDK();
	},
	initalizeSDK : function(){
	    if(this.type == 'MobileAds'){
	        this.onMobileAds();
	    }else if(this.type == 'Poki'){
	        this.initalizePokiSDK();
	    }else if(this.type == 'VLI'){
	        this.initalizeVLISDK();
	    }else{
	        this.initalizeAdinplay();
	    }
	    
	    console.log('Ads provider : ', this.type);
	},

	onMobileAds : function(){
	    var self = this;
	    
	    mobileAds.onAdsEnd = function(){
	        self.onPrerollCompleted();
	    };
	    
	    SDKLoaded = true;
	},

	onAdinplay : function(){
	    var self = this;
	    
	    aiptag.cmd.player.push(function() {
			adplayer = new aipPlayer({			
				AD_WIDTH: 960,
				AD_HEIGHT: 540,
				AD_FULLSCREEN: true,
				AD_CENTERPLAYER: false,
				LOADING_TEXT: 'Loading Advertisement',
				PREROLL_ELEM: function(){ return document.getElementById('preroll'); },
				AIP_COMPLETE: function ()  {
	                self.onPrerollCompleted();
				},
				AIP_REMOVE: function ()  {

				}
			});
		});
	    
	    SDKLoaded = true;
	},

	onVLI : function(){
	    var self = this;
	    
	    vitag.videoConfig = {
	        width  : window.innerWidth, 
	        height : window.innerHeight, 
	        loadingText: "Loading advertisement..", 
	        complete: function () {
	            self.onPrerollCompleted();
	        }, 
	        error: function () {
	            self.onPrerollCompleted();
	        }
	    };
	    
	    var prerollContainer = document.createElement('div');
	        prerollContainer.innerHTML = '<div class="adsbyvli" data-ad-slot="' + 
	                              this.prerollSlotId + '"></div>';
	    
	    document.body.appendChild(prerollContainer);
	    
	    SDKLoaded = true;
	},

	onPokiSDK : function(){
	    PokiSDK.init().then(function(){
	        console.log('Poki SDK successfully initialized');
	        SDKLoaded = true;
	    }).catch(function(){
	        console.log('Initialized, but the user likely has adblock');
	    });
	},

	initalizePokiSDK : function(){
		/*
	    var self = this;
	    var script = document.createElement('script');
	        script.src = '//game-cdn.poki.com/scripts/v2/poki-sdk.js';
	        script.onload = function(){
	            self.onPokiSDK();
	        };
	    
	    document.head.appendChild(script);
	    */
	    this.onPokiSDK();
	},
	initalizeAdinplay : function(){
	    var self = this;
	    var script = document.createElement('script');
	        script.src = '//api.adinplay.com/libs/aiptag/pub/SHP/venge.io/tag.min.js';
	        script.onload = function(){
	            self.onAdinplay();
	        };
	    
	    document.head.appendChild(script);
	},
	initalizeVLISDK : function(){
	    var self = this;
	    var script = document.createElement('script');
	        script.src = '//services.vlitag.com/adv1/?q=88c341984e92f1782076da0b24e5bffb';
	        script.onload = function(){
	            self.onVLI();
	        };
	    
	    document.head.appendChild(script);
	},
	setAdsProvider : function(){
	    var domains = [
	        "paisdelosjuegos.com.ar", 
	        "poki.at", 
	        "poki.by", 
	        "poki.be", 
	        "poki.com.br", 
	        "moiteigri.com", 
	        "paisdelosjuegos.cl", 
	        "poki.cn", 
	        "paisdelosjuegos.com.co", 
	        "paisdelosjuegos.cr", 
	        "poki.cz", 
	        "poki.dk", 
	        "paisdelosjuegos.com.do", 
	        "paisdelosjuegos.com.ec", 
	        "123pelit.com", 
	        "jeuxjeuxjeux.fr", 
	        "poki.de", 
	        "poki.gr", 
	        "megajatek.hu", 
	        "poki.com/id", 
	        "poki.co.il", 
	        "poki.it", 
	        "poki.jp", 
	        "paisdelosjuegos.com.mx", 
	        "poki.no", 
	        "paisdelosjuegos.com.pa", 
	        "paisdelosjuegos.com.pe", 
	        "poki.pl", 
	        "poki.pt", 
	        "poki.ro", 
	        "superigri.ru", 
	        "hrajhry.sk", 
	        "paisdelosjuegos.es", 
	        "megaspel.se", 
	        "jeuxjeuxjeux.ch", 
	        "spielyeti.ch", 
	        "poki.nl", 
	        "1001oyun.com", 
	        "gamesfreak.net", 
	        "poki.com", 
	        "paisdelosjuegos.com.uy", 
	        "paisdelosjuegos.co.ve", 
	        "trochoi.net", 
	        "qa.po.ki",
	        "po.ki", 
	        "game-cdn.poki.com"
	    ];
	    
	    if(typeof mobileAds !== 'undefined'){
	        return 'MobileAds';   
	    }else if(window.location && window.location.href.search('poki') > -1){
	        return 'Poki';   
	    }else{
	        return this.defaultProvider;
	    }
	}
};

adsProvider.init();