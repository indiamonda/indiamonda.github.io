require("v8-compile-cache");

const {
  app,
  shell,
  clipboard,
  dialog,
  BrowserWindow,
  screen,
} = require("electron");
const discord = require("discord-rpc");
const Store = require("electron-store");
const config = new Store();
const path = require('path');
const OS = require("os");
const fs = require('fs');
const prompt = require("electron-prompt");
const fetch = require('node-fetch');

if (config.get("utilities_FPS") == null) {
  config.set("utilities_FPS", true);
}
if (config.get("utilities_D3D11OND12") == null) {
  config.set("utilities_D3D11OND12", true);
}
if (config.get("utilities_RPC") == null) {
  config.set("utilities_RPC", true);
}

if (config.get("utilities_FPS")) {
  if (OS.cpus().findIndex((cpu) => cpu.model.includes("AMD")) != -1) {
    app.commandLine.appendSwitch("enable-zero-copy");
  }
  app.commandLine.appendSwitch("disable-frame-rate-limit");
}
if (config.get("utilities_D3D11OND12")) {
  app.commandLine.appendSwitch("use-angle", "d3d11ond12");
  app.commandLine.appendSwitch("enable-webgl2-compute-context");
} else {
  app.commandLine.appendSwitch("use-angle", "d3d9");
}
app.commandLine.appendSwitch("enable-quic");
app.commandLine.appendSwitch("ignore-gpu-blacklist");
app.commandLine.appendSwitch("disable-gpu-vsync");
app.commandLine.appendSwitch("enable-pointer-lock-options");
app.commandLine.appendSwitch("disable-accelerated-video-decode", false);
app.commandLine.appendSwitch("autoplay-policy", "no-user-gesture-required");
app.commandLine.appendSwitch("enable-quic");
app.commandLine.appendSwitch("high-dpi-support", 1);

updateSeen = 0;


function addQuery(callback) {
  var fname = path.join(__dirname, 'index.html');
  var htmlData = fs.readFileSync(fname, 'utf8');
  htmlData = htmlData.replace(/(verified\.js).+/,"$1?n=" + (Math.random() * 1e7 | 0).toString(16) + '"></script>');
  callback();
}

function init() {
  addQuery(()=>{
    createInitWindow(`file:///${__dirname}/index.html`);
    autoUpdater.checkForUpdatesAndNotify();
  })
}
  
function createInitWindow(url) {
  if (checkURL(url) == "social") size = 0.9;
  else size = 1.1;
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  var initWin = new BrowserWindow({
    width: width * size,
    height: height * size,
    show: false,
  });

  initWin.loadURL(url);
  initWin.removeMenu();
  if (checkURL(url) == "social") initWin.setSimpleFullScreen(false);
  else initWin.setSimpleFullScreen(true);

  if (
    config.get("utilities_RPC") &&
    checkURL(url) != "social" &&
    checkURL(url) != "unknown"
  ) {
    DiscordRPC();
  }
  initWin.on("ready-to-show", () => {
    setTimeout(() => {
      initWin.show();
    }, 500);
  });
  function DiscordRPC() {
    var c = {
      a: "Idling",
      b: "In a Game",
      c: "Spectating a Match",
      d: "Looking for a Game",
      e: "In Menu",
      f: "Loading...",
    };
    const rpc = new discord.Client({
      transport: "ipc",
    });
    rpc.login({
      clientId: "750116161890287657",
    });
    var date = Date.now();
    rpc.once("connected", () => {
      setRPCActivity(c.f);
      setInterval(() => {
        updateDiscord();
      }, 1e3);
    });

    app.on('before-quit',() => rpc.destroy())
    
    function setRPCActivity(msg) {
      rpc.setActivity({
        largeImageKey: "verified-icon-nexi",
        largeImageText: `NeXi-Client v${app.getVersion()}`,
        startTimestamp: date,
        details: `${msg}`,
      });
    }

    function updateDiscord() {
      let url = initWin.webContents.getURL();
      let e = null;
      let determineURL = checkURL(url);
      switch (determineURL) {
        case "menu":
          e = c.e;
          break;
        case "game":
          e = c.b;
          break;
        case "spectate":
          e = c.c;
          break;
        case "searching for game":
          e = c.d;
          break;
        default:
          e = c.a;
          break;
      }

      setRPCActivity(e);
    }
  }

  const shortcut = require("electron-localshortcut");
  shortcut.register(initWin, "F1", () => {
    //prevent cache
    addQuery(()=>{
          autoUpdater.checkForUpdatesAndNotify();
          switch (checkURL(url)) {
            case "social":
              initWin.loadURL("https://social.venge.io");
              break;
            default:
              initWin.loadURL(`file:///${__dirname}/index.html`);
              break;
          }
    })
  });

  shortcut.register(initWin, "F2", () => {
    switch (checkURL(url)) {
      case "social":
        return;
      default:
        LinkBox();
        return;
    }
  });

  shortcut.register(initWin, "F3", () => {
      var game = initWin.webContents.getURL().split('#').pop();
      var url = "https://venge.io/#"+game;
      clipboard.writeText(url);
      initWin.webContents.executeJavaScript('pc.app.fire("Chat:Message", "NeXi-Client", "Link copied!")').catch(e=>{});
  })

  shortcut.register(initWin, "Alt+F4", () => {
    switch (checkURL(url)) {
      case "social":
        initWin.close();
        break;
      default:
        app.quit();
        break;
    }
  });
  shortcut.register(initWin, "Ctrl+F5", () => {
    addQuery(()=>{
      initWin.webContents.reloadIgnoringCache();
    })
  });
  shortcut.register(initWin, "F12", () => {
    initWin.webContents.openDevTools();
  });
  shortcut.register(initWin, "F11", () => {
    initWin.setSimpleFullScreen(!initWin.isSimpleFullScreen());
  });
  shortcut.register(initWin, "ESC", () => {
    initWin.webContents.executeJavaScript(`
                  document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock;
                  document.exitPointerLock();
    `);
  });
  shortcut.register(initWin, "F10", () => {
    createSettingsWindow();
  });
  initWin.webContents.on("will-prevent-unload", (event) =>
    event.preventDefault()
  );
  initWin.webContents.on("dom-ready", (event) => {
    initWin.setTitle(`NeXi-Client V${app.getVersion()}`);
    event.preventDefault();
  });
  initWin.webContents.on("new-window", (event, url) => {
    let e = checkURL(url);
    switch (e) {
      case "social":
        event.preventDefault();
        createInitWindow(url, false, 0.75, false);
        break;
      case "unknown":
        event.preventDefault();
        shell.openExternal(url);
        break;
      case "weird thing should die":
        app.relaunch();
        app.quit();
        return;
    }
  });

  function checkURL(url) {
    if (url.indexOf("social.venge.io") != -1) return "social";
    if (url.includes("index.html") == false) return "unknown";
    url = url.split("/");
    let newURL = url[url.length - 1];
    let path = newURL.substring("index.html".length);
    switch (path.length) {
      case 0:
        return "menu";
      case 1:
        return "searching for game";
      case 6:
        return "game";
      case 15:
        return "spectate";
      default:
        return "weird thing should die";
    }
  }

  function createSettingsWindow() {
    const settings = dialog.showMessageBoxSync(initWin, {
      type: "question",
      buttons: ["General"],
      title: "Settings",
      message: "",
      defaultId: 0,
      cancelId: 2,
    });
    if (settings === 0) {
      openGeneralSettings();
    }

    function openGeneralSettings() {
      if (config.get("utilities_FPS", true)) {
        var fps = "Enable";
      } else {
        var fps = "Disable";
      }

      if (config.get("utilities_D3D11OND12", true)) {
        var d3d11ond12 = "Disable";
      } else {
        var d3d11ond12 = "Enable";
      }
      if (config.get("utilities_RPC", true)) {
        var dc = "Disable";
      } else {
        var dc = "Enable";
      }
      const options = dialog.showMessageBoxSync(initWin, {
        type: "question",
        buttons: [
          `${fps} Frame Rate Limit Cap`,
          `${d3d11ond12} D3D11OND12`,
          `${dc} Discord RPC`,
        ],
        title: "Settings",
        message: "",
        defaultId: 0,
        cancelId: 3,
      });

      if (options === 0) {
        if (config.get("utilities_FPS", true)) {
          config.set("utilities_FPS", false);
        } else {
          config.set("utilities_FPS", true);
        }
        app.relaunch();
        app.quit();
      }
      if (options === 1) {
        if (config.get("utilities_D3D11OND12", true)) {
          config.set("utilities_D3D11OND12", false);
        } else {
          config.set("utilities_D3D11OND12", true);
        }
        app.relaunch();
        app.quit();
      }
      if (options === 2) {
        if (config.get("utilities_RPC", true)) {
          config.set("utilities_RPC", false);
        } else {
          config.set("utilities_RPC", true);
        }
        app.relaunch();
        app.quit();
      }
    }
  }

  
  function LinkBox() {
    function input(msg) {
      var prompting = prompt({
        title: msg,
        label: "Please enter your Invite link here",
        value: paste,
        inputAttrs: {
          type: "url",
        },
        type: "input",
      });
      return prompting;
    }


    function question() {
      const choice = dialog.showMessageBoxSync(initWin, {
        type: "question",
        buttons: ["Play", "Spectate"],
        title: "Join",
        message: "Would you like to spectate or play?",
        defaultId: 0,
        cancelId: 3,
      });
      return choice;
    }

    function isPaste(message, isSpectate) {
      let arr1 = message.split("#");
      let inviteCode = arr1[arr1.length - 1];

      if (isSpectate) {
        initWin.loadURL(`${__dirname}/index.html#Spectate:${inviteCode}`);
      } else {
        initWin.loadURL(`${__dirname}/index.html#${inviteCode}`);
      }
    }

    // !!!!! CHECKS IF LINK IS ALREADY COPIED !!!!!
    let paste = clipboard.readText();
    var choice = question();
    if (paste.indexOf("venge.io/#") === -1) {
      paste = "https://venge.io/#00000";
      if (choice === 0) {
        input("Play").then((r) => {
          isPaste(r, false);
        });
      } else {
        if (choice === 1) {
          input("Spectate").then((r) => {
            isPaste(r, true);
          });
        }
      }
    } else {
      if (choice === 0) {
        isPaste(paste, false);
      } else {
        if (choice === 1) {
          isPaste(paste, true);
        }
      }
    }
  }
}
const { autoUpdater } = require('electron-updater');
autoUpdater.logger = require('electron-log');
autoUpdater.logger.transports.file.level = 'info';
autoUpdater.on('checking-for-update', () => {
    console.log('Checking for updates...');
});
autoUpdater.on('update-available', (info) => {
    const dialogOpts = {
        type: 'info',
        buttons: ['Alright!'],
        title: 'NeXi-Client Update',
        message: 'New Version of NeXi-Client has been released',
        detail: 'It will be downloaded in the background and notify you when the download is finished.'
       }
  
       dialog.showMessageBox(dialogOpts).then((returnValue) => {
         if (returnValue.response === 0)
         console.log('User saw New Version message')
       })
});
autoUpdater.on('update-not-available', () => {
    console.log('Version is up-to-date');
});
autoUpdater.on('download-progress', (progressObj) => {
    console.log(`Download Speed: ${progressObj.bytesPerSecond} - Downloaded ${progressObj.transferred} + '/ ${progressObj.total}`);
});
autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
    const dialogOpts = {
      type: 'info',
      buttons: ['Restart', 'Later'],
      title: 'Application Update',
      message: process.platform === 'win32' ? releaseNotes : releaseName,
      detail: 'A new version has been downloaded. Restart the application to apply the updates.'
     }

     dialog.showMessageBox(dialogOpts).then((returnValue) => {
       if (returnValue.response === 0) autoUpdater.quitAndInstall()
     })
   })
autoUpdater.on('error', (error) => {
    console.log(error)
})

app.on("ready", init);
