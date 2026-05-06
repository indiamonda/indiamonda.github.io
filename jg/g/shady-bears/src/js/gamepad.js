const gamepad = {};
let isFullscreen = false;

function gamepadExternalCall(fName, params) {
  if (gamepad[fName]) {
    gamepad[fName](params);
  }
}

function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

function fsTest() {
  if (isFullscreen || !isTouchDevice()) {
    return;
  }

  var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }

  isFullscreen = true;
}

function getParams() {
  const params = {
    isTouchDevice: isTouchDevice(),
    tickScale: typeof window.SHADY_BEARS_TICK_SCALE === "number"
      ? window.SHADY_BEARS_TICK_SCALE
      : 0.5,
  };

  return Object.keys(params)
    .map((key) => key + "=" + params[key])
    .join("&");
}

const Button = function (color, keyCode, imgSrc) {
  this.color = color;
  this.keyCode = keyCode;
  this.isDown = false;
  this.x = 0;
  this.y = 0;
  this.w = 0;
  this.h = 0;

  this.imgSrc = imgSrc;

  this.setIsDown = function (isDown) {
    if (this.isDown !== isDown) {
      this.isDown = isDown;
      if (isDown) {
        gamepad.player.onKeyDown(this.keyCode);
      } else {
        gamepad.player.onKeyUp(this.keyCode);
      }
    }
  };

  this.setTransform = function (x, y, w, h) {
    this.x = x || 0;
    this.y = y || 0;
    this.w = w || 0;
    this.h = h || 0;
  };
  this.containsPoint = function (x, y) {
    if (x < this.x || x > this.x + this.w || y < this.y || y > this.y + this.h) {
      return false;
    }
    return true;
  };
};

gamepad.draw = function (canvas, container, player) {
  gamepad.canvas = canvas;
  gamepad.container = container;
  gamepad.player = player;
  gamepad.ctx = gamepad.canvas.getContext("2d");
  gamepad.scale = 2;
  gamepad.numOfPlayers = 2;

  gamepad.buttons = [
    new Button("rgba(247,244,210,1)", 37, "./gamepad/left-P1.svg"), //P1 left
    new Button("rgba(247,244,210,1)", 39, "./gamepad/right-P1.svg"), //P1 right
    new Button("rgba(247,244,210,1)", 32, "./gamepad/up-P1.svg"), //P1 jump (SPACE)

    new Button("rgba(247,244,210,1)", 65, "./gamepad/left-P2.svg"), //P2 left (A)
    new Button("rgba(247,244,210,1)", 68, "./gamepad/right-P2.svg"), //P2 right (D)
    new Button("rgba(247,244,210,1)", 87, "./gamepad/up-P2.svg"), //P2 jump (W)

    new Button("rgba(247,244,210,1)", 27, "./gamepad/pause.svg"), //esc - pause
  ];
  canvas.addEventListener("touchstart", testButtons);
  canvas.addEventListener("touchend", testButtons);
  canvas.addEventListener("touchmove", testButtons);

  window.addEventListener("resize", gamepad.resize, false);
  gamepad.resize();
};

function testButtons(e) {
  e.preventDefault();
  const btnIsDown = [];
  const rect = gamepad.canvas.getBoundingClientRect();
  for (let i = 0; i < gamepad.buttons.length; i++) {
    const btn = gamepad.buttons[i];
    btnIsDown[i] = false;
    for (let j = 0; j < e.touches.length; j++) {
      const x = e.touches[j].clientX - rect.left;
      const y = e.touches[j].clientY - rect.top;
      if (btn.containsPoint(x * gamepad.scale, y * gamepad.scale)) {
        btnIsDown[i] = true;
      }
    }
  }

  for (let i = 0; i < gamepad.buttons.length; i++) {
    gamepad.buttons[i].setIsDown(btnIsDown[i]);
  }
}

gamepad.resize = function () {
  const w = gamepad.container.clientWidth * gamepad.scale;
  const h = gamepad.container.clientHeight * 0.2 * gamepad.scale;

  gamepad.canvas.width = w;
  gamepad.canvas.height = h;
  gamepad.canvas.style.width = w / gamepad.scale + "px";
  gamepad.canvas.style.height = h / gamepad.scale + "px";

  gamepad.ctx.fillStyle = "rgba(0,0,0,0.66)";
  gamepad.ctx.beginPath();
  gamepad.ctx.rect(0, 0, w, h);
  gamepad.ctx.fill();

  if (gamepad.numOfPlayers === 1) {
    gamepad.buttons[0].setTransform(h * 0.2, h * 0.1, h * 1.2, h * 0.8); //left
    gamepad.buttons[1].setTransform(h * 1.4, h * 0.1, h * 1.2, h * 0.8); //right
    gamepad.buttons[2].setTransform(w - h * 2.6, h * 0.1, h * 2.4, h * 0.8); //jump

    gamepad.buttons[3].setTransform(-w, 0, 0, 0); //nothing
    gamepad.buttons[4].setTransform(-w, 0, 0, 0); //nothing
    gamepad.buttons[5].setTransform(-w, 0, 0, 0); //nothing
  } else {
    gamepad.buttons[0].setTransform(w - h * 3.8, h * 0.1, h * 1.2, h * 0.8); //P1 left
    gamepad.buttons[1].setTransform(w - h * 2.6, h * 0.1, h * 1.2, h * 0.8); //P1 right
    gamepad.buttons[2].setTransform(w - h * 1.4, h * 0.1, h * 1.2, h * 0.8); //P1 jump

    gamepad.buttons[3].setTransform(h * 0.2, h * 0.1, h * 1.2, h * 0.8); //P2 left
    gamepad.buttons[4].setTransform(h * 1.4, h * 0.1, h * 1.2, h * 0.8); //P2 right
    gamepad.buttons[5].setTransform(h * 2.6, h * 0.1, h * 1.2, h * 0.8); //P2 jump
  }

  gamepad.buttons[6].setTransform(w * 0.5 - h * 0.2, h * 0.5 - h * 0.2, h * 0.4, h * 0.4);

  for (let i = 0; i < gamepad.buttons.length; i++) {
    const btn = gamepad.buttons[i];
    if (gamepad.ctx.roundRect) {
      gamepad.ctx.fillStyle = btn.color;
      gamepad.ctx.beginPath();
      gamepad.ctx.roundRect(btn.x, btn.y, btn.w, btn.h, h);
      gamepad.ctx.fill();
    } else {
      gamepad.ctx.fillStyle = btn.color;
      gamepad.ctx.beginPath();
      gamepad.ctx.rect(btn.x + h * 0.02, btn.y, btn.w - h * 0.02, btn.h);
      gamepad.ctx.fill();
    }

    gamepad.buttons[i].img = new Image();
    gamepad.buttons[i].img.onload = function () {
      const cX = gamepad.buttons[i].x + gamepad.buttons[i].w / 2 - h * 0.15;
      const cY = gamepad.buttons[i].y + gamepad.buttons[i].h / 2 - h * 0.15;
      gamepad.ctx.drawImage(gamepad.buttons[i].img, cX, cY, h * 0.3, h * 0.3);
    };
    gamepad.buttons[i].img.src = gamepad.buttons[i].imgSrc;
  }
};

gamepad.setNumOfPlayers = function (numOfPlayers) {
  gamepad.numOfPlayers = numOfPlayers;
  gamepad.resize();
};

gamepad.show = function (numOfPlayers) {
  gamepad.canvas.style.bottom = "0";
};

gamepad.hide = function () {
  gamepad.canvas.style.bottom = "-20%";
};

// WASD-as-P1 shim. The SWF natively listens for both P1 (Arrow + Space)
// and P2 (W/A/D). In two-player mode that is correct - keep WASD with P2.
// In single-player mode P2 doesn't exist, so WASD does nothing on its own;
// we map W/A/D into P1's keycodes via the same ExternalInterface bridge
// (`player.onKeyDown` / `onKeyUp`) the on-screen touch buttons use, so a
// solo desktop player can use either Arrow keys or WASD.
gamepad.attachKeyboardShim = function (player) {
  gamepad.player = player;
  var WASD_TO_P1 = {
    KeyA: 37, // ArrowLeft
    KeyD: 39, // ArrowRight
    KeyW: 32, // Space (jump)
  };
  function singlePlayer() { return gamepad.numOfPlayers === 1; }
  function fire(type, kc) {
    if (!gamepad.player) return;
    var fn = type === "keydown" ? "onKeyDown" : "onKeyUp";
    if (typeof gamepad.player[fn] === "function") {
      try { gamepad.player[fn](kc); } catch (_) {}
    }
  }
  // Capture-phase listeners so we get the event before any element handler
  // can call stopPropagation. `e.repeat` is filtered on keydown so holding
  // a key doesn't flood the SWF with redundant down events.
  document.addEventListener("keydown", function (e) {
    if (!singlePlayer()) return;
    if (e.repeat) return;
    var kc = WASD_TO_P1[e.code];
    if (kc != null) fire("keydown", kc);
  }, true);
  document.addEventListener("keyup", function (e) {
    if (!singlePlayer()) return;
    var kc = WASD_TO_P1[e.code];
    if (kc != null) fire("keyup", kc);
  }, true);
};
