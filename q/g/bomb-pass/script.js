const c = document.getElementById("game"),
  x = c.getContext("2d");
c.width = innerWidth;
c.height = innerHeight;
window.addEventListener("resize", () => {
  c.width = innerWidth;
  c.height = innerHeight;
});
const PLAYER_TOUCHBOX_SIZE = 16,
  PLAYER_SPRITE_WIDTH = 24,
  PLAYER_SPRITE_FALLBACK_HEIGHT = 32,
  BOMB_SELF_PICKUP_COOLDOWN_MS = 250,
  CAMERA_MIN_ZOOM = 1,
  CAMERA_MAX_ZOOM = 2.2,
  CAMERA_PADDING = 120,
  CAMERA_ZOOM_LERP = 0.12;
let TILE = 16,
  MAP = 500,
  map = [],
  players = [],
  bomb = null,
  gameState = "menu",
  cam = { x: 0, y: 0, zoom: CAMERA_MAX_ZOOM },
  playerCount = 2,
  playerSpeed = 5,
  bombSpeed = 34,
  timeLeft = 60;
const keys = {},
  ctrls = [
    { u: "w", d: "s", l: "a", r: "d", t: "q" },
    { u: "ArrowUp", d: "ArrowDown", l: "ArrowLeft", r: "ArrowRight", t: "/" },
    { u: "i", d: "k", l: "j", r: "l", t: "y" }, // Player 3 throw: Y
    { u: "t", d: "g", l: "f", r: "h", t: "r" }, // Player 4 throw: R
  ],
  assets = { wall: new Image(), ground: new Image(), bomb: new Image() };
assets.wall.src = "images/wall.png";
assets.ground.src = "images/ground-slab.png";
assets.bomb.src = "images/bomb.png";
for (let i = 1; i <= 4; i++) {
  assets["p" + i] = new Image();
  assets["p" + i].src = "images/player-" + i + ".png";
  assets["pb" + i] = new Image();
  assets["pb" + i].src = "images/player-" + i + "-bomb.png";
}
window.addEventListener("keydown", (e) => (keys[e.key] = true));
window.addEventListener("keyup", (e) => (keys[e.key] = false));
const menu = document.getElementById("menu"),
  settings = document.getElementById("settings"),
  startBtn = document.getElementById("startBtn"),
  backBtn = document.getElementById("backBtn"),
  timeInput = document.getElementById("timeInput"),
  timerEl = document.getElementById("timer"),
  winnerEl = document.getElementById("winner");
function swapImg(id, state) {
  const el = document.getElementById(id);
  const base = "images/button-" + id[1] + "-players";
  el.src =
    state === "lighter"
      ? base + "-lighter.png"
      : state === "press"
        ? base + "-press.png"
        : base + ".png";
}
function getPlayerTouchbox(player) {
  return {
    x: player.x - PLAYER_TOUCHBOX_SIZE / 2,
    y: player.y - PLAYER_TOUCHBOX_SIZE / 2,
    size: PLAYER_TOUCHBOX_SIZE,
  };
}

function isSolidAtPixel(px, py) {
  const tx = Math.floor(px / TILE);
  const ty = Math.floor(py / TILE);
  if (ty < 0 || ty >= MAP || tx < 0 || tx >= MAP) return true;
  return map[ty][tx] === 1;
}

function canMoveTo(nx, ny) {
  const half = PLAYER_TOUCHBOX_SIZE / 2;
  return (
    !isSolidAtPixel(nx - half, ny - half) &&
    !isSolidAtPixel(nx + half, ny - half) &&
    !isSolidAtPixel(nx - half, ny + half) &&
    !isSolidAtPixel(nx + half, ny + half)
  );
}

function drawPlayer(player, image) {
  const sourceWidth = image.naturalWidth || image.width || PLAYER_TOUCHBOX_SIZE;
  const sourceHeight =
    image.naturalHeight || image.height || PLAYER_SPRITE_FALLBACK_HEIGHT;
  const drawWidth = PLAYER_SPRITE_WIDTH;
  const drawHeight = (sourceHeight / sourceWidth) * drawWidth;
  const touchbox = getPlayerTouchbox(player);
  x.drawImage(
    image,
    touchbox.x + touchbox.size / 2 - drawWidth / 2,
    touchbox.y + touchbox.size - drawHeight,
    drawWidth,
    drawHeight,
  );
}

function getNearestTargetDirection(fromIndex) {
  const from = players[fromIndex];
  if (!from) return { x: 1, y: 0 };

  let nearest = null;
  let nearestDistSq = Infinity;

  for (let i = 0; i < players.length; i++) {
    if (i === fromIndex) continue;
    const target = players[i];
    if (!target.alive) continue;
    const dx = target.x - from.x;
    const dy = target.y - from.y;
    const distSq = dx * dx + dy * dy;
    if (distSq < nearestDistSq) {
      nearestDistSq = distSq;
      nearest = { dx, dy };
    }
  }

  if (!nearest || nearestDistSq === 0) {
    return { x: from.dirX || 1, y: from.dirY || 0 };
  }

  const len = Math.hypot(nearest.dx, nearest.dy);
  return { x: nearest.dx / len, y: nearest.dy / len };
}

function recallBombToThrower() {
  if (!bomb || bomb.lastThrower === null) return false;
  const thrower = players[bomb.lastThrower];
  if (!thrower || !thrower.alive) return false;
  bomb.owner = bomb.lastThrower;
  bomb.vx = 0;
  bomb.vy = 0;
  bomb.x = thrower.x;
  bomb.y = thrower.y;
  players.forEach((player, index) => {
    player.hasBomb = index === bomb.owner;
  });
  return true;
}
["b2", "b3", "b4"].forEach((id) => {
  const el = document.getElementById(id);
  el.onmouseenter = () => swapImg(id, "lighter");
  el.onmouseleave = () => swapImg(id, "");
  el.onmousedown = () => swapImg(id, "press");
  el.onmouseup = () => swapImg(id, "lighter");
});
document.getElementById("b2").onclick = () => {
  playerCount = 2;
  showSettings();
};
document.getElementById("b3").onclick = () => {
  playerCount = 3;
  showSettings();
};
document.getElementById("b4").onclick = () => {
  playerCount = 4;
  showSettings();
};
backBtn.onclick = () => {
  settings.style.display = "none";
  menu.style.display = "block";
};
function showSettings() {
  menu.style.display = "none";
  settings.style.display = "block";
}
timeInput.oninput = () => {
  const v = parseInt(timeInput.value);
  if (v >= 5 && v <= 300) {
    startBtn.src = "images/start.png";
    startBtn.onclick = startGame;
  } else {
    startBtn.src = "images/start-gray.png";
    startBtn.onclick = null;
  }
};
timeInput.oninput();

function startGame() {
  settings.style.display = "none";
  gameState = "playing";
  winnerEl.textContent = "";
  initMap();
  initPlayers();
  assignBomb();
  timeLeft = parseInt(timeInput.value);
  timerEl.textContent = "Time: " + timeLeft;
  requestAnimationFrame(loop);
  countdown();
}

function getLoserIndexAtTimeout() {
  if (!bomb) return -1;
  if (bomb.owner !== null) return bomb.owner;

  let nearest = -1;
  let nearestDistSq = Infinity;
  for (let i = 0; i < players.length; i++) {
    const p = players[i];
    if (!p.alive) continue;
    const dx = p.x - bomb.x;
    const dy = p.y - bomb.y;
    const distSq = dx * dx + dy * dy;
    if (distSq < nearestDistSq) {
      nearest = i;
      nearestDistSq = distSq;
    }
  }
  return nearest;
}

function showWinner() {
  const loser = getLoserIndexAtTimeout();
  const winners = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].alive && i !== loser) winners.push(i + 1);
  }

  if (winners.length === 0) {
    winnerEl.textContent = "No winner this round";
    return;
  }

  if (winners.length === 1) {
    winnerEl.textContent = "Winner: Player " + winners[0];
    return;
  }

  winnerEl.textContent = "Winners: " + winners.map((n) => "P" + n).join(", ");
}
function initMap() {
  map = [];
  for (let y = 0; y < MAP; y++) {
    map[y] = [];
    for (let x = 0; x < MAP; x++) map[y][x] = 0;
  }
  for (let x = 0; x < MAP; x++) {
    map[0][x] = 1;
    map[MAP - 1][x] = 1;
  }
  for (let y = 0; y < MAP; y++) {
    map[y][0] = 1;
    map[y][MAP - 1] = 1;
  }
  const clusterSeeds = [];
  const clusterCount = 700;
  for (let i = 0; i < clusterCount; i++) {
    const size = 2 + Math.floor(Math.random() * 6);
    let x0;
    let y0;

    if (clusterSeeds.length > 0 && Math.random() < 0.8) {
      const seed = clusterSeeds[Math.floor(Math.random() * clusterSeeds.length)];
      const spread = 10;
      x0 = seed.x + Math.floor((Math.random() * 2 - 1) * spread);
      y0 = seed.y + Math.floor((Math.random() * 2 - 1) * spread);
      x0 = Math.max(1, Math.min(MAP - size - 1, x0));
      y0 = Math.max(1, Math.min(MAP - size - 1, y0));
    } else {
      x0 = 1 + Math.floor(Math.random() * (MAP - size - 1));
      y0 = 1 + Math.floor(Math.random() * (MAP - size - 1));
      clusterSeeds.push({ x: x0, y: y0 });
      if (clusterSeeds.length > 50) clusterSeeds.shift();
    }

    for (let y = y0; y < y0 + size; y++) {
      for (let x = x0; x < x0 + size; x++) map[y][x] = 1;
    }
  }
}
function initPlayers() {
  players = [];
  const region = { x: Math.floor(MAP / 2), y: Math.floor(MAP / 2) };
  for (let i = 0; i < playerCount; i++) {
    let placed = false;
    while (!placed) {
      const sx = region.x + Math.floor(Math.random() * 8) - 4,
        sy = region.y + Math.floor(Math.random() * 8) - 4;
      if (map[sy] && map[sy][sx] === 0) {
        players.push({
          x: sx * TILE,
          y: sy * TILE,
          vx: 0,
          vy: 0,
          dirX: 1,
          dirY: 0,
          alive: true,
          ctrl: ctrls[i],
          hasBomb: false,
        });
        placed = true;
      }
    }
  }
}
function assignBomb() {
  const r = Math.floor(Math.random() * players.length);
  players[r].hasBomb = true;
  bomb = {
    x: players[r].x,
    y: players[r].y,
    owner: r,
    vx: 0,
    vy: 0,
    lastThrower: null,
    noPickupUntil: 0,
  };
}
function loop() {
  if (gameState !== "playing") return;
  requestAnimationFrame(loop);
  update();
  render();
}
function update() {
  for (let i = 0; i < players.length; i++) {
    const p = players[i];
    if (!p.alive) continue;
    const spd = playerSpeed * (p.hasBomb ? 1.6 : 1);

    const inputX = (keys[p.ctrl.r] ? 1 : 0) - (keys[p.ctrl.l] ? 1 : 0);
    const inputY = (keys[p.ctrl.d] ? 1 : 0) - (keys[p.ctrl.u] ? 1 : 0);

    let moveX = inputX;
    let moveY = inputY;
    if (moveX !== 0 || moveY !== 0) {
      const len = Math.hypot(moveX, moveY);
      moveX /= len;
      moveY /= len;
      p.dirX = moveX;
      p.dirY = moveY;
    }

    const nextX = p.x + moveX * spd;
    const nextY = p.y + moveY * spd;

    if (canMoveTo(nextX, p.y)) p.x = nextX;
    if (canMoveTo(p.x, nextY)) p.y = nextY;

    if (keys[p.ctrl.t] && bomb && bomb.owner === i) {
      // Find the closest player to throw to
      let minDist = Infinity;
      let targetIndex = -1;
      for (let j = 0; j < players.length; j++) {
        if (j === i) continue;
        const target = players[j];
        if (!target.alive) continue;
        const dx = target.x - p.x;
        const dy = target.y - p.y;
        const dist = dx * dx + dy * dy;
        if (dist < minDist) {
          minDist = dist;
          targetIndex = j;
        }
      }
      let throwDir = { x: p.dirX || 1, y: p.dirY || 0 };
      if (targetIndex !== -1) {
        const target = players[targetIndex];
        const dx = target.x - p.x;
        const dy = target.y - p.y;
        const len = Math.hypot(dx, dy);
        if (len > 0) {
          throwDir = { x: dx / len, y: dy / len };
        }
      }
      bomb.owner = null;
      bomb.vx = throwDir.x * bombSpeed;
      bomb.vy = throwDir.y * bombSpeed;
      bomb.x = p.x;
      bomb.y = p.y;
      bomb.lastThrower = i;
      bomb.noPickupUntil = performance.now() + BOMB_SELF_PICKUP_COOLDOWN_MS;
      p.hasBomb = false;
    }
  }

  if (!bomb) {
    cameraFollow();
    return;
  }

  if (bomb.owner !== null) {
    const owner = players[bomb.owner];
    if (owner && owner.alive) {
      bomb.x = owner.x;
      bomb.y = owner.y;
      bomb.lastThrower = null;
      bomb.noPickupUntil = 0;
      players.forEach((player, index) => {
        player.hasBomb = index === bomb.owner;
      });
    } else {
      bomb.owner = null;
      bomb.vx = (Math.random() - 0.5) * bombSpeed;
      bomb.vy = (Math.random() - 0.5) * bombSpeed;
    }
  } else {
    const halfBomb = 8;
    const nextBombX = bomb.x + bomb.vx;
    const nextBombY = bomb.y + bomb.vy;

    const hitX =
      isSolidAtPixel(nextBombX - halfBomb, bomb.y - halfBomb) ||
      isSolidAtPixel(nextBombX + halfBomb, bomb.y - halfBomb) ||
      isSolidAtPixel(nextBombX - halfBomb, bomb.y + halfBomb) ||
      isSolidAtPixel(nextBombX + halfBomb, bomb.y + halfBomb);
    const hitY =
      isSolidAtPixel(bomb.x - halfBomb, nextBombY - halfBomb) ||
      isSolidAtPixel(bomb.x + halfBomb, nextBombY - halfBomb) ||
      isSolidAtPixel(bomb.x - halfBomb, nextBombY + halfBomb) ||
      isSolidAtPixel(bomb.x + halfBomb, nextBombY + halfBomb);

    if (hitX) bomb.vx *= -1;
    else bomb.x = nextBombX;

    if (hitY) bomb.vy *= -1;
    else bomb.y = nextBombY;

    const viewWidth = c.width / cam.zoom;
    const viewHeight = c.height / cam.zoom;
    const isOutsideScreen =
      bomb.x + halfBomb < cam.x ||
      bomb.x - halfBomb > cam.x + viewWidth ||
      bomb.y + halfBomb < cam.y ||
      bomb.y - halfBomb > cam.y + viewHeight;

    if (isOutsideScreen) {
      if (recallBombToThrower()) {
        cameraFollow();
        return;
      }
    }

    for (let i = 0; i < players.length; i++) {
      const p = players[i];
      if (!p.alive) continue;
      if (
        i === bomb.lastThrower &&
        performance.now() < bomb.noPickupUntil
      ) {
        continue;
      }
      const dx = p.x - bomb.x;
      const dy = p.y - bomb.y;
      const distSq = dx * dx + dy * dy;
      const pickupDist = PLAYER_TOUCHBOX_SIZE;
      if (distSq <= pickupDist * pickupDist) {
        bomb.owner = i;
        bomb.vx = 0;
        bomb.vy = 0;
        players.forEach((player, index) => {
          player.hasBomb = index === i;
        });
        break;
      }
    }
  }

  cameraFollow();
}
function cameraFollow() {
  const alive = players.filter((p) => p.alive);
  if (alive.length === 0) return;

  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity;
  for (const p of alive) {
    if (p.x < minX) minX = p.x;
    if (p.x > maxX) maxX = p.x;
    if (p.y < minY) minY = p.y;
    if (p.y > maxY) maxY = p.y;
  }

  const spreadX = maxX - minX + CAMERA_PADDING * 2;
  const spreadY = maxY - minY + CAMERA_PADDING * 2;
  const zoomX = c.width / Math.max(spreadX, 1);
  const zoomY = c.height / Math.max(spreadY, 1);
  const targetZoom = Math.max(
    CAMERA_MIN_ZOOM,
    Math.min(CAMERA_MAX_ZOOM, Math.min(zoomX, zoomY)),
  );

  cam.zoom += (targetZoom - cam.zoom) * CAMERA_ZOOM_LERP;

  const centerX = (minX + maxX) / 2;
  const centerY = (minY + maxY) / 2;
  cam.x = centerX - c.width / (2 * cam.zoom);
  cam.y = centerY - c.height / (2 * cam.zoom);
}
function render() {
  x.clearRect(0, 0, c.width, c.height);
  x.save();
  x.scale(cam.zoom, cam.zoom);
  x.translate(-cam.x, -cam.y);
  const viewWidth = c.width / cam.zoom;
  const viewHeight = c.height / cam.zoom;
  const startY = Math.max(0, Math.floor(cam.y / TILE) - 1);
  const endY = Math.min(MAP - 1, Math.ceil((cam.y + viewHeight) / TILE) + 1);
  const startX = Math.max(0, Math.floor(cam.x / TILE) - 1);
  const endX = Math.min(MAP - 1, Math.ceil((cam.x + viewWidth) / TILE) + 1);

  for (let y = startY; y <= endY; y++)
    for (let z = startX; z <= endX; z++)
      x.drawImage(
        map[y][z] ? assets.wall : assets.ground,
        z * TILE,
        y * TILE,
        TILE,
        TILE,
      );
  for (let i = 0; i < players.length; i++) {
    const p = players[i];
    if (p.alive)
      drawPlayer(p, p.hasBomb ? assets["pb" + (i + 1)] : assets["p" + (i + 1)]);
  }
  if (bomb && bomb.owner === null)
    x.drawImage(assets.bomb, bomb.x - 8, bomb.y - 8, 16, 16);
  x.restore();
}
function countdown() {
  const t = setInterval(() => {
    if (gameState !== "playing") {
      clearInterval(t);
      return;
    }
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
      clearInterval(t);
      showWinner();
      gameState = "menu";
      menu.style.display = "block";
    }
  }, 1000);
}
