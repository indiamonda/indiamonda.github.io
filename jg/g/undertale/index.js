
const CHANGE_ASPECT_RATIO = true;

var bodyElement = document.getElementsByTagName("body")[0];
var statusElement = document.getElementById("status");
var progressElement = document.getElementById("progress");
var spinnerElement = document.getElementById("spinner");
var canvasElement = document.getElementById("canvas");
var outputElement = document.getElementById("output");
var outputContainerElement = document.getElementById("output-container");
var qrElement = document.getElementById("QRCode");
var qr2Element = document.getElementById("QR2Code");
var qrButton = document.getElementById("QRButton");
var qr2Button = document.getElementById("QR2Button");
var pauseMenu = document.getElementById("pauseMenuContainer");
var resumeButton = document.getElementById("resumeButton");
var quitButton = document.getElementById("quitButton");
canvasElement.addEventListener("click", function() { canvasElement.focus(); });

const messageContainerElement = document.getElementById("message-container");
const messagesElement = document.getElementById("messages");
let rollbackMessages = [];

let clearRollbackMessagesTimeoutId = -1;
const showRollbackMessage = function (message) {
  let messages = "";
  rollbackMessages.push(message);
  rollbackMessages.forEach(m => messages += "<p>" + m + "</p>");

  messagesElement.innerHTML = messages;
  messageContainerElement.style.display = 'block';

  if (clearRollbackMessagesTimeoutId === -1) {
    clearTimeout(clearRollbackMessagesTimeoutId);
  }
  clearRollbackMessagesTimeoutId = setTimeout(clearRollbackMessages, 5000);
};

const clearRollbackMessages = function () {
  clearRollbackMessagesTimeoutId = -1;
  rollbackMessages = [];
  messageContainerElement.style.display = 'none';
};

var startingHeight, startingWidth;
var startingAspect;
var Module = {
  preRun: [],
  postRun: [],
  print: (function () {
    var element = document.getElementById("output");
    if (element) element.value = ""; // clear browser cache
    return function (text) {
      if (arguments.length > 1)
        text = Array.prototype.slice.call(arguments).join(" ");
      // These replacements are necessary if you render to raw HTML
      //text = text.replace(/&/g, "&amp;");
      //text = text.replace(/</g, "&lt;");
      //text = text.replace(/>/g, "&gt;");
      //text = text.replace('\n', '<br>', 'g');
      console.log(text);
      if (text === "Entering main loop.") {
        // It seems that this text ensures game is loaded.
        ensureAspectRatio();
      }
      if (element) {
        element.value += text + "\n";
        element.scrollTop = element.scrollHeight; // focus on bottom
      }
    };
  })(),
  printErr: function (text) {
    if (arguments.length > 1)
      text = Array.prototype.slice.call(arguments).join(" ");
    console.error(text);
  },
  canvas: (function () {
    var canvas = document.getElementById("canvas");

    return canvas;
  })(),
  setStatus: function (text) {
    if (!Module.setStatus.last)
      Module.setStatus.last = { time: Date.now(), text: "" };
    if (text === Module.setStatus.last.text) return;
    var m = text.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);
    var now = Date.now();
    if (m && now - Module.setStatus.last.time < 30) return; // if this is a progress update, skip it if too soon
    Module.setStatus.last.time = now;
    Module.setStatus.last.text = text;
    if (m) {
      text = m[1];
      progressElement.value = parseInt(m[2]) * 100;
      progressElement.max = parseInt(m[4]) * 100;
      progressElement.hidden = false;
      spinnerElement.hidden = false;
    } else {
      progressElement.value = null;
      progressElement.max = null;
      progressElement.hidden = true;

      // If there are no status text, we are finished and can display
      // the canvas and hide the spinner
      if (!text) {
        spinnerElement.style.display = "none";
        canvasElement.style.display = "block";
      }
    }
    statusElement.innerHTML = text;
  },
  totalDependencies: 0,
  monitorRunDependencies: function (left) {
    this.totalDependencies = Math.max(this.totalDependencies, left);
    Module.setStatus(
      left
        ? "Preparing... (" +
            (this.totalDependencies - left) +
            "/" +
            this.totalDependencies +
            ")"
        : "All downloads complete."
    );
  },
};
Module.setStatus("Downloading...");
window.onerror = function (event) {
  // TODO: do not warn on ok events like simulating an infinite loop or exitStatus
  Module.setStatus("Exception thrown, see JavaScript console");
  spinnerElement.style.display = "none";
  Module.setStatus = function (text) {
    if (text) Module.printErr("[post-exception status] " + text);
  };
};

// Route URL GET parameters to argc+argv
if (typeof window === "object") {
  Module['arguments'] = window.location.search.substr(1).trim().split('&');
  // If no args were passed arguments = [''], in which case kill the single empty string.
  if (!Module['arguments'][0]) {
    Module['arguments'] = [];
  }
}

function toggleConsole() {
  var isShown = outputElement.style.display === "flex";
  if (isShown) {
    outputElement.style.display = "none";
    outputElement.scrollIntoView(false);
  } else {
    outputElement.style.display = "flex";
    outputElement.scrollIntoView(true);
  }
}

function toggleQRCode() {
  var isShown = !qrElement.hidden;
  if (isShown) {
    qrElement.hidden = true;
    qrButton.innerHTML = "Show QRCode";
  } else {
    qrElement.hidden = false;
    qrButton.innerHTML = "Hide QRCode";
  }
}

function toggleQRCode2() {
  var isShown = !qr2Element.hidden;
  if (isShown) {
    qr2Element.hidden = true;
    qr2Button.innerHTML = "Show Opera GX QRCode";
  } else {
    qr2Element.hidden = false;
    qr2Button.innerHTML = "Hide Opera GX QRCode";
  }
}

/*
var g_extLostContext = null;

function toggleWebGLContext() {
  if (g_extLostContext == null) {
    var canvas = document.getElementById('canvas');
    var gl = canvas.getContext('webgl2');
    g_extLostContext = gl.getExtension('WEBGL_lose_context');
  } // end if
  var button = document.getElementById("webglbutton");
  var text = button.textContent || button.innerText;
  if (text.trim() == "Lose WebGL Context") {
    g_extLostContext.loseContext();
    button.textContent = "Restore WebGL Context";
  } // end if
  else {
    g_extLostContext.restoreContext();
    button.textContent = "Lose WebGL Context";
    g_extLostContext = null;
  } // end else
}
*/
function toggleElement(id) {
  var elem = document.getElementById(id);
  if (elem) {
    elem.style.display = elem.style.display == 'block' ? 'none' : 'block';
  }
}

var g_pWadLoadCallback = undefined;
function setWadLoadCallback( _wadLoadCallback ) 
{
  g_pWadLoadCallback = _wadLoadCallback;
}

var g_pAddAsyncMethod = -1;

function setAddAsyncMethod( asyncMethod )
{
  g_pAddAsyncMethod = asyncMethod;
}

var g_pJSExceptionHandler = undefined;

function setJSExceptionHandler( exceptionHandler )
{
  if (typeof exceptionHandler == "function") {
      g_pJSExceptionHandler = exceptionHandler;
  } // end if
} // end setJSExceptionHandler

function hasJSExceptionHandler()
{
  return (g_pJSExceptionHandler != undefined) && (typeof g_pJSExceptionHandler == "function");
} // end hasJSExceptionHandler

function doJSExceptionHandler( exceptionJSON )
{
  if (typeof g_pJSExceptionHandler == "function") {
    var exception = JSON.parse( exceptionJSON );
    g_pJSExceptionHandler( exception );
  } // end if
} // end doJSExceptionHandler

function manifestFiles()
{
  return [ "runner.data",
"runner.js",
"runner.wasm",
"audio-worklet.js",
"game.unx",
"mus_alphysfix.ogg",
"mus_amalgam.ogg",
"mus_ambientwater.ogg",
"mus_anothermedium.ogg",
"mus_bad.ogg",
"mus_barrier.ogg",
"mus_battle1.ogg",
"mus_battle2.ogg",
"mus_bergentruckung.ogg",
"mus_bgflamea.ogg",
"mus_birdnoise.ogg",
"mus_birdsong.ogg",
"mus_boss1.ogg",
"mus_cast_1.ogg",
"mus_cast_2.ogg",
"mus_cast_3.ogg",
"mus_cast_4.ogg",
"mus_cast_5.ogg",
"mus_cast_6.ogg",
"mus_cast_7.ogg",
"mus_chokedup.ogg",
"mus_churchbell.ogg",
"mus_computer.ogg",
"mus_confession.ogg",
"mus_coolbeat.ogg",
"mus_core.ogg",
"mus_coretransition.ogg",
"mus_core_ambience.ogg",
"mus_creepy_ambience.ogg",
"mus_crickets.ogg",
"mus_cymbal.ogg",
"mus_dance_of_dog.ogg",
"mus_date.ogg",
"mus_date_fight.ogg",
"mus_date_tense.ogg",
"mus_deeploop2.ogg",
"mus_disturbing.ogg",
"mus_dogappear.ogg",
"mus_dogmeander.ogg",
"mus_dogroom.ogg",
"mus_dogshrine_1.ogg",
"mus_dogshrine_2.ogg",
"mus_dogshrine_xbox.ogg",
"mus_dogsong.ogg",
"mus_dontgiveup.ogg",
"mus_doorclose.ogg",
"mus_dooropen.ogg",
"mus_drone.ogg",
"mus_dummybattle.ogg",
"mus_dununnn.ogg",
"mus_elevator.ogg",
"mus_elevator_last.ogg",
"mus_endarea_parta.ogg",
"mus_endarea_partb.ogg",
"mus_endingexcerpt1.ogg",
"mus_endingexcerpt2.ogg",
"mus_express_myself.ogg",
"mus_fallendown2.ogg",
"mus_fearsting.ogg",
"mus_flowey.ogg",
"mus_f_6s_1.ogg",
"mus_f_6s_2.ogg",
"mus_f_6s_3.ogg",
"mus_f_6s_4.ogg",
"mus_f_6s_5.ogg",
"mus_f_6s_6.ogg",
"mus_f_alarm.ogg",
"mus_f_destroyed.ogg",
"mus_f_destroyed2.ogg",
"mus_f_destroyed3.ogg",
"mus_f_finale_1.ogg",
"mus_f_finale_1_l.ogg",
"mus_f_finale_2.ogg",
"mus_f_finale_3.ogg",
"mus_f_intro.ogg",
"mus_f_newlaugh.ogg",
"mus_f_newlaugh_low.ogg",
"mus_f_part1.ogg",
"mus_f_part2.ogg",
"mus_f_part3.ogg",
"mus_f_saved.ogg",
"mus_f_wind1.ogg",
"mus_f_wind2.ogg",
"mus_gameover.ogg",
"mus_ghostbattle.ogg",
"mus_harpnoise.ogg",
"mus_hereweare.ogg",
"mus_hotel.ogg",
"mus_hotel_battle.ogg",
"mus_house1.ogg",
"mus_house2.ogg",
"mus_intronoise.ogg",
"mus_kingdescription.ogg",
"mus_lab.ogg",
"mus_leave.ogg",
"mus_menu0.ogg",
"mus_menu1.ogg",
"mus_menu2.ogg",
"mus_menu3.ogg",
"mus_menu4.ogg",
"mus_menu5.ogg",
"mus_menu6.ogg",
"mus_mettafly.ogg",
"mus_mettatonbattle.ogg",
"mus_mettaton_ex.ogg",
"mus_mettaton_neo.ogg",
"mus_mettaton_pretransform.ogg",
"mus_mettmusical1.ogg",
"mus_mettmusical2.ogg",
"mus_mettmusical3.ogg",
"mus_mettmusical4.ogg",
"mus_mettsad.ogg",
"mus_mett_applause.ogg",
"mus_mett_cheer.ogg",
"mus_mode.ogg",
"mus_mtgameshow.ogg",
"mus_muscle.ogg",
"mus_musicbox.ogg",
"mus_myemeow.ogg",
"mus_mysteriousroom2.ogg",
"mus_mystery.ogg",
"mus_napstachords.ogg",
"mus_napstahouse.ogg",
"mus_news.ogg",
"mus_news_battle.ogg",
"mus_ohyes.ogg",
"mus_oogloop.ogg",
"mus_operatile.ogg",
"mus_options_fall.ogg",
"mus_options_summer.ogg",
"mus_options_winter.ogg",
"mus_papyrus.ogg",
"mus_papyrusboss.ogg",
"mus_piano.ogg",
"mus_prebattle1.ogg",
"mus_predummy.ogg",
"mus_race.ogg",
"mus_rain.ogg",
"mus_rain_deep.ogg",
"mus_repeat_1.ogg",
"mus_repeat_2.ogg",
"mus_reunited.ogg",
"mus_rimshot.ogg",
"mus_ruins.ogg",
"mus_ruinspiano.ogg",
"mus_sansdate.ogg",
"mus_sfx_a_grab.ogg",
"mus_sfx_chainsaw.ogg",
"mus_sfx_hypergoner_charge.ogg",
"mus_sfx_hypergoner_laugh.ogg",
"mus_sfx_rainbowbeam_hold.ogg",
"mus_shop.ogg",
"mus_sigh_of_dog.ogg",
"mus_silence.ogg",
"mus_smallshock.ogg",
"mus_smile.ogg",
"mus_snoresymphony.ogg",
"mus_snowwalk.ogg",
"mus_snowy.ogg",
"mus_spider.ogg",
"mus_spoopy.ogg",
"mus_spoopy_holiday.ogg",
"mus_spoopy_wave.ogg",
"mus_star.ogg",
"mus_sticksnap.ogg",
"mus_story.ogg",
"mus_story_stuck.ogg",
"mus_st_happytown.ogg",
"mus_st_him.ogg",
"mus_st_meatfactory.ogg",
"mus_st_troubledingle.ogg",
"mus_temshop.ogg",
"mus_temvillage.ogg",
"mus_tension.ogg",
"mus_tone2.ogg",
"mus_tone3.ogg",
"mus_toomuch.ogg",
"mus_toriel.ogg",
"mus_town.ogg",
"mus_tv.ogg",
"mus_undyneboss.ogg",
"mus_undynefast.ogg",
"mus_undynepiano.ogg",
"mus_undynescary.ogg",
"mus_undynetheme.ogg",
"mus_undynetruetheme.ogg",
"mus_vsasgore.ogg",
"mus_waterfall.ogg",
"mus_waterquiet.ogg",
"mus_wawa.ogg",
"mus_whoopee.ogg",
"mus_wind.ogg",
"mus_woofenstein.ogg",
"mus_woofenstein_loop.ogg",
"mus_wrongnumbersong.ogg",
"mus_wrongworld.ogg",
"mus_xpart.ogg",
"mus_xpart_2.ogg",
"mus_xpart_a.ogg",
"mus_xpart_b.ogg",
"mus_xpart_back.ogg",
"mus_x_undyne.ogg",
"mus_x_undyne_pre.ogg",
"mus_yourbestfriend_3.ogg",
"mus_zzz_c.ogg",
"mus_zzz_c2.ogg",
"mus_zz_megalovania.ogg",
"mus_z_ending.ogg",
"snd_ballchime.ogg",
"snd_curtgunshot.ogg",
"snd_mushroomdance.ogg",
"lang/lang_en.json",
"lang/lang_ja.json" ].join( ";");
}

function manifestFilesMD5()
{
  return [ "df5bfcc85c4776fadfb79ce2dc9fae76",
"e326eaa5b8c4615cc473610459395225",
"f71a3a6a351db50641cec0b037fb7aa3",
"e8f1e8db8cf996f8715a6f2164c2e44e",
"be1043d478b3cae351f71616d26ac116",
"da78df4767592b0759de45f1a97f7c05",
"bc7c594cda5c6c1b0276fb86a11e175b",
"41833545251f09c1bec5c6dc9075c2d9",
"02e5c1016fbfdb38208f53ffbba7cc91",
"c822cce868d5d5da649042e0e0ebda87",
"69d74a2206407e2142852d93dd487c00",
"c874fac8074463f6553f31f187739d49",
"b21501e5480c84104fcd8c5bef3f794a",
"810736e47c62c892b35cd1351bb73253",
"ec530b41e8d5379630ce7d393e04010d",
"4c747a34751c7c4f929d0b327a16fd66",
"96f66dfb043bacc084456e0ce3a94ce1",
"fef4f2a0e5785983b50d59f1fa115301",
"2341ca2c35f2a794cef1a6a8b87297ea",
"f8930580c5cf369ee44e788d857bc812",
"cece597f19f2f58765583a4a0985bbbf",
"0133c414f18de420888ef91fa11e68d6",
"48354f04ed5cccdcd433e1338432b9e7",
"61ea58834a750cf19dce318bf14f872b",
"1a17b5d86a38824386f32dd5931fb9f5",
"993ab092a91281cef837031c27762eca",
"3bf0a505d6bed97ee719635cedb77ed0",
"8e697d78742f7ced3074d5b3de527bd2",
"c954bae75aecb0c5e0e61a623daa5058",
"0545056f0d3739fec900262d9cf3f71c",
"ee97d108bb6f00a9d5453ad92ba90ed4",
"c09d8614fc9e82c0ef9e8c3595eff48d",
"5a93189e2d83a227951409b2558dc20a",
"8da7797a0afc096c8ea80f7563a1a9e8",
"0a8d0a1a3a0f29edd196aaa9b25b965d",
"616bde2717ce1e3cfef6ecdc5d1e9cff",
"e6bbaf13bee8cf54abef390db8dc8043",
"7e9e17c8113258eb6841a0c19db50235",
"3cfb5982892bd0401ae51d487754469b",
"82376be6c01247648d2871d1e65670fe",
"6b5e3ddeaae0e7b266ad1dbe36f6c659",
"c2ef07fe8cf1065d7dc0ce7623afb461",
"34aac764846818ddfcd9fe51b1735840",
"bd620494ebf0d4c3f0e1420eb9ec29db",
"4174e48143428589c635ebd80be26ba4",
"d840f04fe2d489a493fb08b98fcd13f4",
"51297cd125bdf73dd20355076faf0686",
"2fa24b0cb78ee593cc46b6674adadbe6",
"0d7c7d90bf9bf7caffc9293baa6943ff",
"e71d40c71c88aefbfed05f4586f0b748",
"6bd25337cfc4b1953f6b5e89de525f60",
"f74d974714b5e30f7a6bddbb80a936c2",
"500e949e5553cffd7e74fcf53f7a8212",
"ec7a6f6a8ba9b9627818b22a4c4e60e5",
"f690c4f3644ed786ecfb2b9709f83a30",
"6cff8d3ca085b705737dce6821bee9d4",
"c18765d66495b4cedca021cab1892779",
"c548d533b1752d920c67a71e55d7c037",
"cd7e248be7d7e44ba4ab1cde58a2a698",
"ccb8c76d1fabe6a00900c260c8f60377",
"bdd050061a4f3acb331b24f2176a4372",
"477b5f728903d887f2fd7c324952619f",
"dc34c1a634d79e0e82f3d1c36b93139e",
"20c598f24e90dac10608ecd7cb0b1a88",
"69abab52827a32dbea1890dfcc47edd3",
"26753c34dab307bf604ac688309087d2",
"9ecacfbcc3d89804ad75557ca193286c",
"6101716cdcc8e729da8eda6a87ef9f14",
"62552e07865610b0cba57c9869de2401",
"8a4b010335b7beaddc8ac5c16ea7ed34",
"8578870bce59800cd8a928fa5fd4ad1b",
"4d31e6ac5eb05a80f32e3c601ddf8fec",
"19d021d650bf039d7bf85bde98120c56",
"0ce9d9e85f679905a1c18ca1baa0782b",
"4b1640dcf812a913d4dce69f1fe367ad",
"cfd7bfdd69ac76de8ae332c2f98bc948",
"4c0f1bfa9c6d60bd5ac7db8dca4f1c05",
"585d78ef45e579c5995cc2e8f5166c02",
"9cf26736eb1538df96ef22ddeae6cf1e",
"146db7658e6f5c595704313493da7071",
"2f9fef7ffb0cd349143dcf4b6d176658",
"36ed5ea40e8ae8e9514f0600bd2121e0",
"66a2b95cdf0f455aa466bc53cb7168a8",
"6710c4289b039b34bd30ac5fdb1750db",
"a1cfa99d1b1bbfb19a41e6dc1c516ad5",
"2efee86ec99598f51c243cb0b17dc15f",
"34f0a8d1d3c09d5d3ff820fcf609195c",
"5fe7944621b07bcc7cb8bc0c19742d79",
"9ff9e1a55aa5773201ee05fff26769cc",
"7a87bd383da4341f37f6812b17c71608",
"63f06968c583b4fa361d2872bdefde65",
"d926918de9a83dc7fc2e1229d8da974e",
"b1cc6eca637b37bef061e045fb0709fb",
"f0f6bb21d3e1d9d89af7d0613fe57b30",
"67a0d016462fc3579e4f6cb10d55c292",
"9e5182b87d248aafd6e2a11e03451e88",
"b36824389ff9122d7b21d383f76ebc9a",
"0351a00eec6902cbb945b82e8157aad8",
"60e7fbf5bba17bc754c5ed73c4cf2cc4",
"215e814833b0b295d9dc77f73424a927",
"22119044bd7163a6ef287c7ff8f44d93",
"682cfd2d63190792e90a446700006049",
"54c19b6cbd1e4843a25bfdcdd1c7e8c5",
"3218ef384b1cbe2fc25e5f0a4384ad3f",
"e4932be38e462f150790b5e3b9c4b8f9",
"7dc4b8849c4d59c07fb459056520fe02",
"8abff4631c86e01743bd797784d72444",
"6d5552fe33e1ba63593caa8cbea27154",
"d134f352d10695d1df309e66fe9af25b",
"318325bd0c1e0e30fe6ee6bc03b839de",
"dfd18d36b2fe83a6df0622562772ca67",
"f22b0910b3dcd87fefad32739911f254",
"318f7647b8633fcc78ccf3ecd1e00472",
"11214178c08bc4ff6c1e4153ad2fdb57",
"241eb6aac846b04de0ef88842d38d04b",
"2e05e6b6632a631ca584331d0883f879",
"591dbe91a6bb7a02a7997012eac176b7",
"3a1a149228180dc817c24abb052d0df0",
"0aa7d8ec42691b0917cc35ac731e7197",
"376b45ea459448c59176495b944a3c47",
"17f7bb881c3a2e010d0499257f97c3fb",
"39e201f39c9dacf6a61b3e82b5f23fbd",
"b16c38f631e93f7aa20c13df738da3f8",
"9f3154e798c6c0f224363c621c4a6c37",
"d616a3125a586a195629edd453610f1a",
"58afe5128c6debe061e8db4dd0a85a74",
"209f4dc46f070bcddb21d81a21e0c6e1",
"dd4c71773de6d1bc8b9cbdd19615c387",
"635f2a7d4fd56a1263b15e3a2b8023ab",
"54a537839b67aa3f714441163aefd7e8",
"4d5381f57585771d802ae50630807115",
"c14a14d94aa4ff21b0e41df35c23b456",
"be2e2f60dfc171596533200e5b48f937",
"1f732768f7048d0f731a5ff8d000ac2f",
"1cdc26560e7a51286ae5f6ada0d016e4",
"db41b8c83d1047089b7d6ecc4abab8e1",
"2fe041901d6b8ca2dd4cf95ff68a40ab",
"8d2ccf942cf631af6d2ebdeb1b059045",
"42c6da1ebeced3827ae1caacba31e75b",
"c2317932cce3bbb09607d4e5d63be3c1",
"568a7644a0365710f472d62f4bfb8418",
"fa311544cd39cfc95702ea51e40f00fc",
"0402adfe9c04d68f7abc361d54c357e2",
"1325bcfcbad515b7da08e499482e2516",
"f85c483a8b31c1fad2e0baadfa0857b4",
"53e4880b949686d31a09b24663209028",
"bdd03c6ef4f0addbc8fa2c5e2687dc53",
"716b582edd790f86bbb793bc7b78fedb",
"a328ccd3cd36e017f439f2af4311115b",
"f141e866d006c221609e94449450a76d",
"888b2a1adbdf1204a1aae3360d922f39",
"0b8697a09b0a61591e6a37760983ede7",
"5309cdf3e09e2e09cbcffd80dcf0a017",
"ed3b7afaa80d6f8c38bdd6a8299390d0",
"38b9b24895d830763ff507fc0b0afa32",
"40720c196ecd9958340529972480ba2f",
"6b2bf3b700cabbb7b508ffce3346828b",
"16db2039b368906470f55503da8d5169",
"01220afeec811fc56808faa077167d6f",
"5d3235b81d8500b31e6ceb2f87671569",
"4023b92ab4be3fb7d886daa1b122e3a6",
"948438ddd06e90813726c7f6c6e54bf8",
"ed9a555b41815270a181b257edb2b14a",
"efdb3eb023170311464126f66590ae28",
"edb5522c83c78e5e368fd3973abbc39e",
"dc682c776842e809cfee6e18aa820008",
"fbc9b8447bbaddc7e48fea0319ce40d3",
"afbffcc24ffab775f7d1fb0d28ec81a8",
"3a6905a36ff74139caeb3544b2e30e8f",
"1257acf00e253d95e8d6a5507a649d46",
"35a460242766b2df2bb4d7313f322dfb",
"75f1b4e92de4cf856dfebecef0e34158",
"05bedcc9f8a4f070972fcf9382d47c3c",
"d513016fc481d731cd38a6bae2aac3e1",
"1344e0cf66ce8366c4b152aed9da88ee",
"3eccb33888d5a963391b553b2393d1fe",
"30666f5f569bcc6c0d27b0ca52c45c39",
"34561ffe2507c9442be463ab25be9fc9",
"be36835ffe6ac8a0edbbcf35f0b8e0d8",
"63eca387303d5681440b4cfaac84b196",
"9ef01b4210a78e7b94c73c9d491f4859",
"74e2d70237d7b5ebcd508bd3f9c760a5",
"79e088ea1a4d4ea54bc39467174ab0c3",
"357c9755776d61ab22050ecb1be8f254",
"b324dad3e4cf89cdb45a94bcc5e3a3fe",
"f7aec17e2b187d496cf4b5465fba1a85",
"c633704bfd49470b4a0db47af2a87b9e",
"1a675a4b86626d986097b0f773277f0a",
"a2565e53ba3fda1ecd9d5f8052f851e6",
"1b2f4a710dcc7bf5883ca2dffd7e5a40",
"fe9ca2b9996bc9a7b385fa4b45199843",
"fc2af4edd8f1f399e49ea01c5988a44f",
"9ea4950364a7f592c89bcccf0eaeb322",
"b16aa92baca71fb77d0a744ac888b6e4",
"2b8198c8997e1a5414010334a1da81e5",
"639a5f915607bbae068e6a19cc3706a9",
"93e476326fc956008f705f22cdb7f9e4",
"7ace18338075b2914e78fc264a2eb934",
"fccd21261648b1cdbba0204d651746d5",
"df15bd9e1625d3cdaec94e86135fb8aa",
"121268d407994d04ae61d015eba20d5e",
"bc98c009f3f0bd0169e11ce663f8c298",
"adfefe6d1d9e80a90ed86233431928a0",
"b5afd6a71d09d9e97fb29cddbf2e3fe1",
"ff2d1e092e21f6c0aa77c1ddec8af823",
"886a07101fc0f98ccc90b63cc11ae3e9",
"6b33078dca0c53cf50b6b1c4f18d0c19",
"2bf06048e322754dc1cc4c98d5ee1c50",
"87395579cdf3fad32dbf1fcfbc8bcb10",
"1341aa450a89f60a8f8b5fa50f1fbb4d",
"dfe0ee8620f7f5b132b8890cfbd68fa4",
"f54e68ee70488442f4406e055bd3de64",
"29fd7ef535d0a61a8f1a8fc684f41246",
"3ea95393e37003490ed3707d3e9276f7",
"fc49ca134bbec186ac6b849740d208a8",
"68d404e8253721ac67ee2d530f837d91",
"d51094cea295befbdc753f8ade15141c",
"73d7332839c2582238a48f3b437e7c16" ];
}

function onFirstFrameRendered()
{
    //console.log("First frame rendered!");
}

function onGameSetWindowSize(width,height)
{
    console.log("Window size set to width: " + width + ", height: " + height);

    startingHeight = height;
    startingWidth = width;
    startingAspect = startingWidth / startingHeight;
}

function triggerAd(adId, _callback_beforeAd, _callback_afterAd, _callback_adDismissed, _callback_adViewed, _callback_adbreakDone) {
 // need to take a copy of the RValues represented
 var pRValueCopy = triggerAdPrefix( _callback_beforeAd, _callback_afterAd, _callback_adDismissed, _callback_adViewed, _callback_adbreakDone );
 var pCallbackBeforeAd = pRValueCopy + (0*16);
 var pCallbackAfterAd = pRValueCopy + (1*16);
 var pCallbackAdDismissed = pRValueCopy + (2*16);
 var pCallbackAdViewed = pRValueCopy + (3*16);
 var pCallbackAdBreakDone = pRValueCopy + (4*16);

 adBreak({
   "type": "reward",                    // The type of this placement
   "name": adId,                        // A descriptive name for this placement

   "beforeAd": () => {                  // Prepare for the ad. Mute and pause the game flow
     console.log("beforeAd");
     // trigger _callback_beforeAd to game
     doGMLCallback( pCallbackBeforeAd, { id:adId } );
   },
   "afterAd" : () => {                   // Resume the game and re-enable sound
     console.log("afterAd");
     // trigger _callback_afterAd to game
     doGMLCallback( pCallbackAfterAd, { id:adId } );
   },
   "beforeReward": (showAdFn) => {      // Show reward prompt (call showAdFn() if clicked)
     console.log("beforeReward");
     showAdFn();
     // Setup native prompt to indicate ad will load
     // Will not be setup by dev so this UX controlled by GXC
   },
   "adDismissed": () => {               // Player dismissed the ad before it finished
     console.log("adDismissed");
     // trigger _callback_adDismissed to game
     doGMLCallback( pCallbackAdDismissed, { id:adId } );
   },
   "adViewed": () => {                  // Player watched the ad–give them the reward.
     console.log("adViewed");
     // trigger _callback_adViewed to game
     doGMLCallback( pCallbackAdViewed, { id:adId } );
   },
   "adBreakDone": (placementInfo) => {  // Always called (if provided) even if an ad didn't show
     console.log("adBreakDone");
     // trigger _callback_adBreakDone to game
     doGMLCallback( pCallbackAdBreakDone, { id:adId } );
     triggerAdPostfix( pRValueCopy );
   }, 
 });
}

function triggerPayment(itemId, _callback_PaymentComplete) {
  var pRValueCopy = triggerPaymentPrefix(_callback_PaymentComplete);
  setTimeout(() => {
    console.log("triggerPayment");
    doGMLCallback(pRValueCopy, { id:itemId });        
  }, 1000);
  triggerPaymentPostfix();
}

function ensureAspectRatio() {
  if (canvasElement === undefined) {
    return;
  }

  if (!CHANGE_ASPECT_RATIO) {
    return;
  }
  
  if (startingHeight === undefined && startingWidth === undefined) {
    return;
  }

  canvasElement.classList.add("active");

  const maxWidth = window.innerWidth;
  const maxHeight = window.innerHeight;
  var newHeight, newWidth;

  // Find the limiting dimension.
  var heightQuotient = startingHeight / maxHeight;
  var widthQuotient = startingWidth / maxWidth;

  if (heightQuotient > widthQuotient) {
    // Max out on height.
    newHeight = maxHeight;
    newWidth = newHeight * startingAspect;
  } else {
    // Max out on width.
    newWidth = maxWidth;
    newHeight = newWidth / startingAspect;
  }

  canvasElement.style.height = newHeight + "px";
  canvasElement.style.width = newWidth + "px";
}

function pause() { // Don't change the name - GX Mobile calls it when the app becomes inactive.
  if (!canvasElement.classList.contains("active")) { // Wait for the canvas to load.
    return
  }
  
  GM_pause();
  pauseMenu.hidden = false;
  canvasElement.classList.add("paused");
}

function resume() {
  GM_unpause();
  pauseMenu.hidden = true;
  canvasElement.classList.remove("paused");
  canvasElement.classList.add("unpaused");
  enterFullscreenIfSupported();
  lockOrientationIfSupported();
}

function quitIfSupported() {
  if (window.oprt && window.oprt.closeTab) { /* GX Mobile API */
    window.oprt.closeTab();
  } else if (window.chrome && window.chrome.runtime && window.chrome.runtime.sendMessage) {
    window.chrome.runtime.sendMessage('mpojjmidmnpcpopbebmecmjdkdbgdeke', { command: 'closeTab' })
  }
}

function enterFullscreenIfSupported() {
  if (!window.oprt || !window.oprt.enterFullscreen) { /* GX Mobile API */
    return;
  }

  window.oprt.enterFullscreen();
  let viewStatus = GM_get_view_status();
  viewStatus.fullscreen = true;
  GM_set_view_status(viewStatus);
}

function lockOrientationIfSupported() {
  if (!window.oprt || !window.oprt.lockPortraitOrientation || !window.oprt.lockLandscapeOrientation) { /* GX Mobile API */
    return;
  }

  let viewStatus = GM_get_view_status();
  if (viewStatus.landscape === true && viewStatus.portrait === false) {
    window.oprt.lockPortraitOrientation();
  } else if (viewStatus.landscape === false && viewStatus.portrait === true) {
    window.oprt.lockPortraitOrientation();
  }
}

/* Observe the dimensions of body and ensureAspectRatio of the canvas (whilst taking up maximum space)
 *
 * NOTE(robertz):
 *  We also need to request an Animation Frame to do this, if we do not, resizeObserver might throw error
 *  "ResizeObserver loop limit exceeded", which means that
 *  "[...] ResizeObserver was not able to deliver all observations within a single animation frame"
 *  https://stackoverflow.com/a/50387233 (source).
 *
 *  There are different ways to solve the issue, since the error is benign (meaning it wont crash anything)
 *  we could choose to ignore it via changing the window.onerror method, i.e
 *  ```
 *  window.onerror((event)=> {
 *    if(event==="ResizeObserver loop limit exceeded") {
 *       return
 *    }
 *     ///...rest
 *  }
 *  ```
 *  But for now we request an animationFrame which seems to be the recommended way to go about it.
 *
 * NOTE(ddrechny):
 *  window.innerWidth/Height value updates are sometimes delayed in WebKit on iOS after an orientation
 *  change. Hence we're calling ensureAspectRatio one more time after a delay to minimize the risk of
 *  sizing the canvas with outdated values.
 */
const resizeObserver = new ResizeObserver(() => {
  window.requestAnimationFrame(ensureAspectRatio);
  setTimeout(() => window.requestAnimationFrame(ensureAspectRatio), 100);
});
resizeObserver.observe(document.body);

/* NOTE(ddrechny):
 *  Body needs to be scrollable on desktop browsers for debug buttons to be accessible.
 *  On mobile browsers scrolling can be activated accidentally and debug buttons aren't useful,
 *  so it's better to disable it.
 */
if (/Android|iPhone|iPod/i.test(navigator.userAgent)) {
  bodyElement.className = "scrollingDisabled";
  canvasElement.classList.add("animatedSizeTransitions");
  outputContainerElement.hidden = true;
}

document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState != "visible") {
    pause();
  } else if (isMultiplayer()) {
    resume();
  }
});

window.addEventListener("load", (event) => {
  if ((!window.oprt || !window.oprt.enterFullscreen) && (!window.chrome || !window.chrome.runtime || !window.chrome.runtime.sendMessage)) {
    quitButton.hidden = true;
  }
});

setWadLoadCallback(() => {
  enterFullscreenIfSupported();
  lockOrientationIfSupported();
});

var read_ptr = 0;
read_int = () => {
  var heap_slice = Module["HEAPU8"].subarray(read_ptr, read_ptr + 4);
  var buffer = new ArrayBuffer(4);
  var barray = new Uint8Array(buffer);
  for (var i = 0; i < 4; i++) barray[i] = heap_slice[i];
  var int_array = new Int32Array(buffer);
  var int = int_array[0];
  read_ptr += 4;
  return int;
};

read_pointer = () => {
  var ptr = Module.getValue(read_ptr, "*");
  read_ptr += 8;
  return ptr;
};

readPeer = () => {
  var peer = {
    peer: read_int(),
    local_frames_ahead: read_int(),
    rtt: read_int(),
    remote_frame_rate: read_int(),
    remote_frame_delay: read_int(),
  }

  return peer;
}

readStats = (s) => {
  read_ptr = s;

  var stats = {
    kbps_sent: read_int(),
    kbps_received: read_int(),
    pps_sent: read_int(),
    pps_received: read_int(),
    frame_rate: read_int(),
    rollbacks: read_int(),
    frame_delay: read_int(),
    skipped_frames: read_int(),
    rejected_inputs: read_int(),
    relay_rtt: read_int(),
    peer: read_int(),
    num_peers: read_int(),

    serialization_stats: {
      state_size: read_int(),
      managed_instances_num: read_int()
    },
    peers: []
  }

  read_ptr = read_pointer();
  for (var j = 0; j < stats.num_peers; ++j) {
    stats.peers.push(readPeer());
  }

  return stats;

}

var acceptable_rollback_frames = 0;
var set_acceptable_rollback = (frames) => {
  acceptable_rollback_frames = frames;
}

drawLocal = (peers_elem, frame_delay_elem, relay_rtt_elem, peer_name, relay_rtt, frame_delay) => {
    drawPeer(peers_elem, frame_delay_elem, peer_name, 0, frame_delay, 0);

    const per_pixel = 100/16;
    const frames_rtt = relay_rtt/16; // To ceil, or not to ceil - that's the question.

    const y = 100 - frames_rtt * per_pixel;

    const relay_rtt_marker = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    relay_rtt_marker.setAttribute('x1', -2);
    relay_rtt_marker.setAttribute('y1', y);
    relay_rtt_marker.setAttribute('x2', 2);
    relay_rtt_marker.setAttribute('y2', y);

    relay_rtt_marker.setAttribute('data-relay-rtt', relay_rtt);

    relay_rtt_marker.classList.add(peer_name);
    relay_rtt_marker.classList.add('relay-rtt');

    relay_rtt_elem.appendChild(relay_rtt_marker);
}

drawPeer = (peers_elem, frame_delay_elem, peer_name, rtt, frame_delay, frames_ahead) => {
  const per_pixel = 100/16;
  const frames_rtt = rtt/16; // To ceil, or not to ceil - that's the question.
  const x = 50 + frames_ahead * per_pixel;
  const y = 100 - frames_rtt * per_pixel;

  const peer = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  peer.setAttribute('cx', x);
  peer.setAttribute('cy', y);
  peer.setAttribute('r', 1);

  peer.setAttribute('data-rtt', rtt);
  peer.setAttribute('data-frame-delay', frame_delay);
  peer.setAttribute('data-frames-ahead', frames_ahead);

  peer.classList.add(peer_name);
  peer.classList.add('peer');

  peers_elem.appendChild(peer);

  const peer_frame_delay = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  peer_frame_delay.setAttribute('cx', x);
  peer_frame_delay.setAttribute('cy', y);
  peer_frame_delay.setAttribute('r', frame_delay * per_pixel);

  peer_frame_delay.classList.add(peer_name);
  peer_frame_delay.classList.add('peer-frame-delay');

  frame_delay_elem.appendChild(peer_frame_delay);

  if (acceptable_rollback_frames > 0) {
    const peer_acceptable_rollback = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    peer_acceptable_rollback.setAttribute('cx', x);
    peer_acceptable_rollback.setAttribute('cy', y);
    peer_acceptable_rollback.setAttribute('r', (frame_delay + acceptable_rollback_frames) * per_pixel);

    peer_acceptable_rollback.classList.add(peer_name);
    peer_acceptable_rollback.classList.add('peer-acceptable-rollback');
    frame_delay_elem.appendChild(peer_acceptable_rollback);
  }
}

report_stats = (stats_data) => {

  var stats = readStats(stats_data);

  var peers_elem = document.getElementById("stats-network-peers");
  var frame_delay_elem = document.getElementById("stats-network-peer-frame-delays");
  var relay_rtt_elem = document.getElementById("stats-network-relay-rtt");

  peers_elem.innerHTML = '';
  frame_delay_elem.innerHTML = '';
  relay_rtt_elem.innerHTML = '';

  stats.peers.forEach(p => {
    drawPeer(peers_elem, frame_delay_elem, 'peer' + p.peer, p.rtt, p.remote_frame_delay, p.local_frames_ahead);
  });

  drawLocal(peers_elem, frame_delay_elem, relay_rtt_elem, 'peer' + stats.peer, stats.relay_rtt, stats.frame_delay);
}

let wallpaperConfig = {};
const wallpaperConfigKey = 'wallpaper-config';

function wallpaper_init_config_controls(definitions) {
  const wallpaperContainer = document.getElementById("wallpaper-container");
  wallpaperContainer.style.display = "block";

  let configStyle = '<style type="text/css">' +
    'body { color: white; font-family: Averta, -apple-system, "Segoe UI", system-ui, sans-serif; font-style: normal; font-size: 10px; }' +
    '.config-row { display: flex; justify-content: flex-start; align-items: center; padding: .5em; }' +
    '.config-row > label { flex: 1 }' +
    '.config-row > input { flex: initial; }' +
    '.config-row > textarea { flex: 1; }' +
    '.config-row-label { font-size: 12px; font-weight: 600; }' +
    'button { padding: 8px 16px; border-radius: 4px; background-color: unset; border-color: rgb(199, 159, 234); color: rgb(199, 159, 234); }' +
    '</style>';
  let configHTML = '<html><head><title></title>' + configStyle + '</head><body>' +
    '<div class="wallpaper-header"><h1>Live Wallpaper Configurator</h1><button id="wallpaper-reset-parameters">Reset parameters</button></div>' +
    '<div class="wallpaper-config" id="wallpaper-config"></div>' +
    '</body></html>'

  const wallpaperConfigDocument = document.getElementById("wallpaper-config-iframe").contentDocument;
  wallpaperConfigDocument.open();
  wallpaperConfigDocument.write(configHTML);
  wallpaperConfigDocument.close();

  const storedConfig = JSON.parse(localStorage.getItem(wallpaperConfigKey));
  if (storedConfig) {
    wallpaperConfig = storedConfig;
  }

  const configElement = wallpaperConfigDocument.getElementById("wallpaper-config");
  const resetButton = wallpaperConfigDocument.getElementById("wallpaper-reset-parameters");
  resetButton.addEventListener("click", (e) => {
    wallpaper_reset_config();
    wallpaperConfig = {};
    add_config_elems(configElement, definitions);
    notify_config_change();
  }, false);

  add_config_elems(configElement, definitions);
  notify_config_change();
}

function add_config_elems(configElement, definitions) {
  while (configElement.hasChildNodes()) {
    configElement.removeChild(configElement.lastChild);
  }

  definitions.value
    .map(d => create_elems(d, wallpaperConfig, ""))
    .filter(e => e !== null && e !== undefined)
    .map(e => configElement.appendChild(e));
}

function create_elems(definition, config, prefixId) {
    if (definition.type === undefined || definition.name === undefined) {
      console.log("missing definition name or type for: ", definition);
      return null;
    }

    if  (definition.type === "section") {
      return create_section_elem(definition, config, prefixId);
    }


    if (definition.value === undefined ) {
      console.log("missing definition value for: ", definition);
      return null;
    }

    if (definition.type === "range") {
      return create_range_elem(definition, config, prefixId);
    }

    if (definition.type === "boolean") {
      return create_checkbox_elem(definition, config, prefixId);
    }

    if (definition.type === "color" || definition.type === "colour") {
      return create_color_elem(definition, config, prefixId);
    }

    if (definition.type === "string") {
      return create_text_elem(definition, config, prefixId);
    }

    if (definition.type === "string_multiline") {
      return create_multiline_text_elem(definition, config, prefixId);
    }

    if (definition.type === "select") {
      return create_select_elem(definition, config, prefixId);
    }

    if (definition.type === "file" || definition.type === "folder") {
      return create_not_supported_elem(definition, config);
    }
    
    console.log("missing config value for: ", definition);
    return null;
}

function create_section_elem(definition, config, prefixId) {
  const divElem = document.createElement("div");

  const headerElem = document.createElement("h2");
  headerElem.innerHTML = definition.label;

  divElem.appendChild(headerElem);

  const sectionId = prefixId + definition.name + "-"
  if (!config[definition.name]) {
    config[definition.name] = {};
  }

  definition.children
    .map(c => create_elems(c, config[definition.name], sectionId))
    .filter(e => e !== null && e !== undefined)
    .map(e => divElem.appendChild(e));

  return divElem;
}

function get_initial_value(definition, config) {
  let value =  definition.value;
  const configValue = config[definition.name];
  if (configValue && (typeof(configValue) === typeof(value))) {
    value = configValue;
  }

  return value;
}

function wrap_with_label(inputElem, definition, prefixId) {
  const controlElem = document.createElement("div");
  controlElem.classList.add(definition.name + "-control");
  controlElem.classList.add("config-row");

  const labelElem = document.createElement("label");
  labelElem.htmlFor = prefixId + definition.name;
  labelElem.innerHTML = "<span class='config-row-label'>" + (definition.label || definition.name) + "</span>";
  if (definition.description) {
    labelElem.innerHTML += "<p>" + definition.description + "</p>";
  }
  controlElem.appendChild(labelElem);

  inputElem.id = prefixId + definition.name;
  controlElem.appendChild(inputElem);

  return controlElem;
}

function create_range_elem(definition, config, prefixId) {
  const value = get_initial_value(definition, config);

  const valueElem = document.createElement("span");
  valueElem.style = "margin: 0.5em";
  valueElem.innerHTML = "(" + value + ")";

  const stepElem = document.createElement("input");
  stepElem.id = prefixId + definition.name;
  stepElem.type = "range";
  stepElem.min = definition.min || 0;
  stepElem.max = definition.max || 100;
  stepElem.step = definition.step || 1;
  stepElem.value = value;

  config[definition.name] = value;
  function range_value_updated(e) {
    const valueUpdate = Number(e.target.value);
    config[definition.name] = valueUpdate;
    valueElem.innerHTML = "(" + valueUpdate + ")";

    notify_config_change();
  }

  stepElem.addEventListener("change", range_value_updated, false);
  stepElem.addEventListener("input", range_value_updated, false);

  const valueWrapper = document.createElement("span");
  valueWrapper.appendChild(valueElem);
  valueWrapper.appendChild(stepElem);

  return wrap_with_label(valueWrapper, definition, prefixId);
}

function create_checkbox_elem(definition, config, prefixId) {
  const value = get_initial_value(definition, config);

  const checkboxElem = document.createElement("input");
  checkboxElem.type = "checkbox";
  checkboxElem.checked = value;
  
  config[definition.name] = value;
  checkboxElem.addEventListener("change", (e) => {
    const valueUpdate = Boolean(e.target.checked);
    config[definition.name] = valueUpdate;
    notify_config_change();
  });

  return wrap_with_label(checkboxElem, definition, prefixId);
}

function create_color_elem(definition, config, prefixId) {
  const value = get_initial_value(definition, config);

  const bgrColor = value;
  const r = (bgrColor & 0x0000ff);
  const g = (bgrColor & 0x00ff00) >> 8;
  const b = (bgrColor & 0xff0000) >> 16;
  const rgbColor = (r << 16) + (g << 8) + b;
  const color = "#" + rgbColor.toString(16).padStart(6, '0');

  const colorElem = document.createElement("input");
  colorElem.type = "color";
  colorElem.value = color;

  config[definition.name] = value;
  function color_value_updated(e) {
    const color = e.target.value;
    const rgbColor = parseInt(color.slice(1), 16);
    const r = (rgbColor & 0xff0000) >> 16;
    const g = (rgbColor & 0x00ff00) >> 8;
    const b = (rgbColor & 0x0000ff);
    const bgrColor = (b << 16) + (g << 8) + r;

    config[definition.name] = bgrColor;
    notify_config_change();
  }

  colorElem.addEventListener("change", color_value_updated, false);
  colorElem.addEventListener("input", color_value_updated, false);
  
  return wrap_with_label(colorElem, definition, prefixId);
}

function create_text_elem(definition, config, prefixId) {
  const value = get_initial_value(definition, config);

  const textElem = document.createElement("input");
  textElem.type = "text";
  textElem.value = value;
  console.log("text", value)
  if (definition.max_length && definition.max_length > 0) {
    textElem.maxLength = definition.max_length;
  }

  config[definition.name] = value;
  textElem.addEventListener("input", (e) => {
    config[definition.name] = e.target.value;
    notify_config_change();
  });
  
  return wrap_with_label(textElem, definition, prefixId);
}

function create_multiline_text_elem(definition, config, prefixId) {
  const value = get_initial_value(definition, config);

  const textareaElem = document.createElement("textarea");
  textareaElem.rows = 5;
  textareaElem.cols = 50;
  textareaElem.value = value;
  if (definition.max_length && definition.max_length > 0) {
    textareaElem.maxLength = definition.max_length;
  }

  config[definition.name] = value;
  textareaElem.addEventListener("input", (e) => {
    config[definition.name] = e.target.value;
    notify_config_change();
  });
  
  return wrap_with_label(textareaElem, definition, prefixId);
}

function create_select_elem(definition, config, prefixId) {
  const value = get_initial_value(definition, config);

  const selectElem = document.createElement("select");
  selectElem.value = value;
  
  const options = definition.options || [];
  options.forEach(o => {
    const option = document.createElement("option");
    option.value = o;
    option.text = o;
    option.selected = o == value ? "selected" : "";
    selectElem.appendChild(option);
  })

  config[definition.name] = value;
  selectElem.addEventListener("change", (e) => {
    e.selected = "selected";
    config[definition.name] = e.target.value;
    notify_config_change();
  });
  
  return wrap_with_label(selectElem, definition, prefixId);
}

function create_not_supported_elem(definition, config, prefixId) {
  const labelElem = document.createElement("label");
  labelElem.innerHTML = "Not supported in browser";

  config[definition.name] = definition.value;
  return wrap_with_label(labelElem, definition, prefixId);
}

function notify_config_change() {
  console.log(wallpaperConfig)
  localStorage.setItem(wallpaperConfigKey, JSON.stringify(wallpaperConfig));

  wallpaper_update_config(JSON.stringify(wallpaperConfig));
}