class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        window.addEventListener('resize', () => this.resize());

        Graphics.init(); // Ensure textures are ready
        this.inputManager = new InputManager();
        this.level = new Level(this.canvas.width, this.canvas.height);
        
        this.players = [];
        this.weapons = [];
        this.particles = [];
        this.projectiles = [];
        
        this.state = 'MENU'; // MENU, PLAYING, GAMEOVER
        this.levelNum = 1;
        this.weaponTimer = 0;
        this.kingId = null; // Track who has the crown
        
        this.setupUI();
        
        // Try to start intro music on first interaction
        const startIntro = () => {
            AudioSys.init();
            AudioSys.playIntroMusic();
            // Remove listeners once started
            ['click', 'keydown', 'touchstart', 'mousemove', 'focus'].forEach(evt => 
                window.removeEventListener(evt, startIntro)
            );
            // Hide credits hint
            const credits = document.querySelector('.credits');
            if(credits) credits.style.display = 'none';
        };
        
        // Add more aggressive listeners to start audio ASAP
        ['click', 'keydown', 'touchstart', 'mousemove', 'focus'].forEach(evt => 
            window.addEventListener(evt, startIntro)
        );

        this.loop();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        if (this.level) {
            this.level.width = this.canvas.width;
            this.level.height = this.canvas.height;
            // Regenerate if level is empty (first load issue)
            if (this.level.platforms.length === 0 && this.state === 'PLAYING') {
                this.level.generate(this.levelNum);
            }
        }
    }

    setupUI() {
        document.getElementById('btn-start-pve').onclick = () => this.startGame('pve');
        document.getElementById('btn-start-pvp-local').onclick = () => this.startGame('pvp_local');
        document.getElementById('btn-start-pvp-controller').onclick = () => this.startGame('pvp_controller');
        
        document.getElementById('btn-resume').onclick = () => this.togglePause();
        document.getElementById('btn-quit').onclick = () => this.quitGame();
    }

    startGame(mode) {
        AudioSys.init();
        AudioSys.stopMusic(); // Stop intro music
        AudioSys.startMusic(); // Start game music
        
        this.state = 'PLAYING';
        document.getElementById('main-menu').style.display = 'none';
        document.getElementById('hud').style.display = 'flex';
        document.getElementById('pause-menu').style.display = 'none';
        
        this.players = [];
        this.weapons = [];
        this.projectiles = [];
        this.levelNum = 1;
        
        // Initialize level first
        this.level.generate(this.levelNum);

        // Detect Mobile
        const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const showMobileControls = isMobile && mode !== 'pvp_controller' && mode !== 'pvp_local'; 

        if (showMobileControls) {
            document.getElementById('mobile-controls').style.display = 'block';
            document.getElementById('btn-pause-mobile').style.display = 'flex';
        } else {
            document.getElementById('mobile-controls').style.display = 'none';
            document.getElementById('btn-pause-mobile').style.display = 'none';
        }

        if (mode === 'pve') {
            // Player 1 (Universal: WASD, Arrows, Touch, Gamepad) - Blue
            this.players.push(new Player(0, 100, 100, '#0088FF', 'universal'));
            // Bot
            const difficulty = document.getElementById('bot-difficulty').value;
            this.players.push(new Bot(1, this.canvas.width - 100, 100, difficulty));
        } else if (mode === 'pvp_local') {
            // Force keyboard for local PvP
            this.players.push(new Player(0, 100, 100, '#FF0000', 'keyboard_wasd'));
            this.players.push(new Player(1, this.canvas.width - 100, 100, '#0000FF', 'keyboard_arrows'));
            
            this.showMessage("P1: WASD + Q(Atk) + E/Shift(Shield) | P2: Arrows + Shift(Atk) + ./Numpad0(Shield)");
        } else if (mode === 'pvp_controller') {
            this.state = 'LOBBY';
            this.showMessage("Press 'A' on Controller to Join!");
        }
        
        // Call startLevel to handle weapon spawns and messages
        this.startLevel(false); // Don't regenerate, we just did
    }

    togglePause() {
        if (this.state === 'PLAYING') {
            this.state = 'PAUSED';
            document.getElementById('pause-menu').style.display = 'flex';
            AudioSys.stopMusic();
        } else if (this.state === 'PAUSED') {
            this.state = 'PLAYING';
            document.getElementById('pause-menu').style.display = 'none';
            AudioSys.startMusic();
        }
    }

    quitGame() {
        this.state = 'MENU';
        document.getElementById('pause-menu').style.display = 'none';
        document.getElementById('hud').style.display = 'none';
        document.getElementById('main-menu').style.display = 'flex';
        document.getElementById('mobile-controls').style.display = 'none';
        AudioSys.stopMusic();
    }

    startLevel(regenerate = true) {
        if (regenerate) this.level.generate(this.levelNum);
        this.weapons = [];
        this.projectiles = [];
        this.weaponTimer = 0;
        this.roundOver = false;
        this.slowMotion = false;
        this.winner = null;
        this.frameCount = 0;
        
        // Reset players positions
        this.players.forEach((p, i) => {
            p.x = 100 + i * 100;
            p.y = 100;
            p.velocity = {x:0, y:0};
            p.isDead = false;
            p.weapon = null;
            p.wings = false;
            p.isBird = false; // Reset bird status
            p.onCloud = false; // Reset cloud status
            p.jumpCount = 0; // Reset jumps
            p.maxHealth = 100; // Reset max health FIRST
            p.health = p.maxHealth; // Then reset health
            p.color = p.originalColor; // Restore original color
            // Note: p.kills is NOT reset here, so it persists
        });

        // Spawn Bird Crystal if magic level
        if (this.levelNum % 5 === 0) {
             // Spawn Crystal immediately
             const x = this.canvas.width / 2 - 15;
             this.weapons.push(new Weapon(x, -100, 'bird_crystal'));
             this.showMessage("THE CRYSTAL DESCENDS...");
             AudioSys.playDramaticIntro(); // Play solemn intro music
        } else {
            AudioSys.startMusic(); // Normal music
        }
        
        document.getElementById('level-display').innerText = this.levelNum;
        if (this.state !== 'LOBBY') {
            this.showMessage(`Level ${this.levelNum}`);
        }
    }

    loop() {
        requestAnimationFrame(() => this.loop());
        
        // Always check for pause toggle (Esc or Start button)
        if (this.inputManager.checkPause()) {
            this.togglePause();
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Slow Motion Logic
        let shouldUpdate = true;
        if (this.slowMotion) {
            this.frameCount++;
            if (this.frameCount % 4 !== 0) shouldUpdate = false;
        }

        if (this.state === 'PLAYING' || this.state === 'LOBBY') {
            if (shouldUpdate) {
                try {
                    this.update();
                } catch (e) {
                    console.error("Update Error:", e);
                    this.ctx.fillStyle = 'red';
                    this.ctx.font = '30px Arial';
                    this.ctx.fillText("Error: " + e.message, 50, 100);
                    this.ctx.fillText("Check Console for details", 50, 140);
                }
            }
            this.draw(); // Draw after update to show latest state
        } else if (this.state === 'PAUSED') {
            this.draw();
        }
    }

    update() {
        // Lobby Logic
        if (this.state === 'LOBBY') {
            // Draw Lobby Screen
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            
            this.ctx.fillStyle = 'white';
            this.ctx.font = '40px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText("Controller Lobby", this.canvas.width/2, 100);
            this.ctx.font = '20px Arial';
            this.ctx.fillText("Press 'A' to Join | Press 'Start' or 'RT' to Begin", this.canvas.width/2, 150);

            // Draw Slots
            const slots = 4;
            const slotWidth = 200;
            const startX = (this.canvas.width - (slots * slotWidth)) / 2;
            
            for(let i=0; i<slots; i++) {
                const x = startX + i * slotWidth;
                const y = 300;
                const player = this.players.find(p => p.inputType === `gamepad_${i}`);
                
                this.ctx.strokeStyle = 'white';
                this.ctx.strokeRect(x + 10, y, slotWidth - 20, 300);
                
                if (player) {
                    this.ctx.fillStyle = player.color;
                    this.ctx.fillRect(x + 20, y + 20, slotWidth - 40, 260);
                    this.ctx.fillStyle = 'white';
                    this.ctx.fillText(`P${i+1} Ready`, x + slotWidth/2, y + 150);
                } else {
                    this.ctx.fillStyle = 'gray';
                    this.ctx.fillText("Waiting...", x + slotWidth/2, y + 150);
                }
            }

            // Check for new controllers pressing A
            for (let i = 0; i < 4; i++) {
                const input = this.inputManager.getPlayerInput(i, `gamepad_${i}`);
                if (input.join) {
                    // Check if already joined
                    if (!this.players.find(p => p.inputType === `gamepad_${i}`)) {
                        this.players.push(new Player(this.players.length, 100 + this.players.length * 50, 100, null, `gamepad_${i}`));
                        this.showMessage(`Player ${this.players.length} Joined!`);
                        AudioSys.playPowerup();
                    }
                }
            }
            
            // Start if at least 1 player and someone presses Start (or just wait a bit? Let's say Jump to start)
            if (this.players.length > 0) {
                 // Check if any player pressed Jump to start
                 for (const p of this.players) {
                     const input = this.inputManager.getPlayerInput(p.id, p.inputType);
                     if (input.attack) { // Use Attack (RT) or something to start
                         this.state = 'PLAYING';
                         this.startLevel();
                         AudioSys.playJump();
                         break;
                     }
                 }
            }
            return; // Skip rest of update
        }

        // Level Cycle Logic
        if (this.state === 'PLAYING' && !this.roundOver) {
            const alivePlayers = this.players.filter(p => !p.isDead);
            
            // Check for Round End
            if ((alivePlayers.length <= 1 && this.players.length > 1) || (this.players.length === 1 && this.players[0].isDead)) {
                this.roundOver = true;
                this.slowMotion = true;
                this.winner = alivePlayers.length > 0 ? alivePlayers[0] : null;
                
                if (this.winner) {
                    this.kingId = this.winner.id; // Set new King
                    this.showMessage(`${this.winner.isBot ? 'Bot' : 'Player ' + (this.winner.id + 1)} Wins!`);
                    AudioSys.playPowerup(); // Victory sound
                    this.createExplosion(this.winner.x, this.winner.y, 'gold'); // Celebration
                } else {
                    this.showMessage("Draw!");
                }

                setTimeout(() => {
                    if (this.state === 'PLAYING') {
                        const isPvE = this.players.some(p => p.isBot);
                        const humanWon = this.winner && !this.winner.isBot;
                        
                        if (isPvE && !humanWon) {
                            this.startLevel(); // Restart level if bot wins
                        } else {
                            this.levelNum++;
                            this.startLevel(); // Next level
                        }
                    }
                }, 4000);
            }
        }

        // Check if King Died
        if (this.kingId !== null) {
            const king = this.players.find(p => p.id === this.kingId);
            if (king && king.isDead) {
                this.kingId = null; // King lost crown
            }
        }

        // Weapon Spawning
        this.weaponTimer++;
        if (this.weaponTimer > 600) { // 10 seconds (60fps)
            this.weaponTimer = 0;
            this.spawnRandomWeapon();
        }

        // Update Entities
        this.level.update(); // Update moving platforms
        
        this.players.forEach(p => {
            p.update(this);
            
            // Handle Attacks
            if (p.wantsToPunch) {
                this.createMeleeAttack(p, 40, 5);
                // Check Ice Breaking
                if (this.level.material === 'ice') {
                    const brokenPlat = this.level.breakPlatform(p.x + (p.facing * 40), p.y + 20);
                    if (brokenPlat) {
                        // Create Ice Shards
                        for(let i=0; i<10; i++) {
                            this.particles.push({
                                x: brokenPlat.x + Math.random() * brokenPlat.width,
                                y: brokenPlat.y + Math.random() * brokenPlat.height,
                                vx: (Math.random() - 0.5) * 5,
                                vy: (Math.random() - 0.5) * 5,
                                life: 60,
                                color: 'rgba(200, 230, 255, 0.8)',
                                type: 'shard'
                            });
                        }
                        AudioSys.playHit(); // Shatter sound
                    }
                }
                p.wantsToPunch = false;
            }
            if (p.wantsToAttack) {
                if (p.weapon) {
                    if (p.weapon.type === 'magic_stick') {
                        // Laser Beam
                        const beamLength = 400;
                        const beamHeight = 10;
                        const startX = p.x + p.width/2 + (p.facing * 20);
                        const startY = p.y + p.height/2;
                        
                        // Visual Beam
                        this.ctx.save(); // We can't draw here in update, so we'll add a particle effect or just rely on instant hit
                        // Add beam particle
                        this.particles.push({
                            type: 'beam',
                            x: startX,
                            y: startY,
                            length: beamLength,
                            facing: p.facing,
                            life: 10,
                            color: '#00FFFF'
                        });
                        
                        // Hitbox
                        const hitBox = {
                            x: p.facing === 1 ? startX : startX - beamLength,
                            y: startY - beamHeight/2,
                            width: beamLength,
                            height: beamHeight
                        };
                        
                        this.players.forEach(target => {
                            if (target !== p && !target.isDead && Utils.rectIntersect(hitBox, target)) {
                                target.takeDamage(15, p);
                                AudioSys.playHit();
                                this.createExplosion(target.x, target.y, '#00FFFF');
                            }
                        });
                        AudioSys.playShoot();

                    } else if (p.weapon.type === 'dagger') {
                        // Shockwave
                        this.createProjectile(p.x + (p.facing * 30), p.y + 20, p.facing, 'shockwave', p);
                    } else {
                        p.weapon.use(p, this);
                    }
                    p.wantsToAttack = false;
                }
            }
            
            // Handle Bird Explosion
            if (p.wantsToExplode) {
                this.createExplosion(p.x + p.width/2, p.y + p.height/2, '#FFFF00');
                // AOE Damage
                this.players.forEach(target => {
                    if (target !== p && !target.isDead) {
                        const dist = Math.hypot((p.x+p.width/2) - (target.x+target.width/2), (p.y+p.height/2) - (target.y+target.height/2));
                        if (dist < 150) {
                            target.takeDamage(20, p);
                            // Knockback away
                            const angle = Math.atan2(target.y - p.y, target.x - p.x);
                            target.velocity.x = Math.cos(angle) * 20;
                            target.velocity.y = Math.sin(angle) * 20;
                        }
                    }
                });
                p.wantsToExplode = false;
                AudioSys.playShoot(); // Explosion sound
            }
            
            // Check Capture (Collision with Bird) - REMOVED to make it a fight
            /*
            if (this.level.isMagicLevel && !this.roundOver) {
                const bird = this.players.find(pl => pl.isBird);
                if (bird && p !== bird && !p.isDead && !bird.isDead) {
                    if (Utils.rectIntersect(p, bird)) {
                        // Capture!
                        this.roundOver = true;
                        this.winner = p;
                        this.showMessage("ANGEL CAPTURED!");
                        AudioSys.stopMusic();
                        AudioSys.playAngelicaFinale();
                        
                        // Visuals
                        this.createExplosion(bird.x, bird.y, '#FFFFFF');
                        
                        setTimeout(() => {
                            this.levelNum++;
                            this.startLevel();
                            AudioSys.startMusic();
                        }, 8000); // Long wait for song
                    }
                }
            }
            */
        });

        this.weapons.forEach(w => w.update(this.level));
        // Remove inactive weapons
        this.weapons = this.weapons.filter(w => w.active);

        this.projectiles.forEach((p, i) => {
            p.update();
            if (!p.active) this.projectiles.splice(i, 1);
        });
        
        // Collisions: Projectiles vs Players
        this.checkCombatCollisions();
    }

    draw() {
        this.level.draw(this.ctx); // Draw level first (background)

        this.weapons.forEach(w => w.draw(this.ctx));
        this.players.forEach(p => p.draw(this.ctx, this.kingId)); // Pass kingId
        this.projectiles.forEach(p => p.draw(this.ctx));
        
        // Particles
        this.particles.forEach((p, i) => {
            p.life--;
            if (p.life <= 0) this.particles.splice(i, 1);
            
            this.ctx.fillStyle = p.color || 'rgba(255, 255, 255, 0.5)';
            this.ctx.beginPath();
            
            if (p.type === 'shard') {
                // Draw shard (triangle)
                this.ctx.moveTo(p.x, p.y);
                this.ctx.lineTo(p.x + 5, p.y + 10);
                this.ctx.lineTo(p.x - 5, p.y + 10);
            } else if (p.type === 'beam') {
                // Draw Laser Beam
                this.ctx.strokeStyle = p.color;
                this.ctx.lineWidth = 5;
                this.ctx.shadowBlur = 10;
                this.ctx.shadowColor = p.color;
                this.ctx.moveTo(p.x, p.y);
                this.ctx.lineTo(p.x + (p.facing * p.length), p.y);
                this.ctx.stroke();
                this.ctx.shadowBlur = 0;
            } else {
                this.ctx.arc(p.x += p.vx || 0, p.y += p.vy || 0, 5, 0, Math.PI*2);
            }
            this.ctx.fill();
            
            // Update position for shards too
            if (p.type === 'shard') {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.2; // Gravity for shards
            }
        });

        // Draw Winner Overlay
        if (this.roundOver && this.winner) {
            this.ctx.save();
            this.ctx.fillStyle = this.winner.color;
            this.ctx.globalAlpha = 0.3;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.restore();
            
            // Draw Crown on Winner (Handled in Player.draw now if we pass kingId, but let's keep overlay text)
            
            this.ctx.fillStyle = 'white';
            this.ctx.font = 'bold 60px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText("VICTORY!", this.canvas.width/2, this.canvas.height/2 - 50);
            this.ctx.font = '40px Arial';
            this.ctx.fillText(this.winner.isBot ? "Bot Wins" : `Player ${this.winner.id + 1} Wins`, this.canvas.width/2, this.canvas.height/2 + 20);
        }

        // Draw Controls in Corners
        if (this.state === 'PLAYING' && !this.roundOver) {
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            this.ctx.font = '14px Arial';
            
            // P1 Controls (Top Left)
            this.ctx.textAlign = 'left';
            this.ctx.fillText("P1: WASD + Q (Atk) + E (Shield) + W/Space (Jump)", 10, 20);
            
            // P2 Controls (Top Right)
            if (this.players.length > 1 && !this.players[1].isBot) {
                this.ctx.textAlign = 'right';
                this.ctx.fillText("P2: Arrows + / (Atk) + . (Shield) + Up/Ctrl (Jump)", this.canvas.width - 10, 20);
            }
        }

        // Draw Kills Board
        if (this.state === 'PLAYING' && !this.roundOver) {
            const boardX = this.canvas.width / 2;
            const boardY = 80; // Moved down to avoid overlapping with Level Counter
            
            this.ctx.save();
            this.ctx.textAlign = 'center';
            this.ctx.font = 'bold 20px Arial';
            
            // Background for board
            const playerCount = this.players.length;
            const width = 200;
            const height = 60 + (playerCount * 20);
            
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            this.ctx.fillRect(boardX - width/2, boardY - 25, width, height);
            
            this.ctx.fillStyle = 'white';
            this.ctx.fillText(`LEVEL ${this.levelNum}`, boardX, boardY - 5); // Level on top
            this.ctx.font = '14px Arial';
            this.ctx.fillText("KILLS", boardX, boardY + 15);
            
            this.ctx.font = '16px Arial';
            this.players.forEach((p, i) => {
                this.ctx.fillStyle = p.color;
                const name = p.isBot ? "Bot" : `Player ${p.id + 1}`;
                this.ctx.fillText(`${name}: ${p.kills}`, boardX, boardY + 40 + (i * 20));
            });
            
            this.ctx.restore();
        }
        
        // Debug Info (Temporary)
        // this.ctx.fillStyle = 'white';
        // this.ctx.textAlign = 'left';
        // this.ctx.fillText(`Players: ${this.players.length}`, 10, 50);
        // this.players.forEach((p, i) => {
        //    this.ctx.fillText(`P${i}: ${Math.round(p.x)},${Math.round(p.y)} Dead:${p.isDead}`, 10, 70 + i*20);
        // });
    }

    spawnRandomWeapon() {
        // Check for Crystal Level (Every 5 levels)
        // Only spawn if not already present and no one is a bird
        const crystalExists = this.weapons.some(w => w.type === 'bird_crystal');
        const birdExists = this.players.some(p => p.isBird);
        
        if (this.levelNum % 5 === 0 && !crystalExists && !birdExists) {
             // Spawn Crystal in center, high up
             const x = this.canvas.width / 2 - 15;
             this.weapons.push(new Weapon(x, -100, 'bird_crystal')); // Higher spawn
             this.showMessage("THE CRYSTAL APPEARS!");
             AudioSys.playPowerup();
             return;
        }

        const types = ['magic_stick', 'dagger', 'shooter', 'sword'];
        const type = types[Math.floor(Math.random() * types.length)];
        const x = Utils.random(50, this.canvas.width - 50);
        this.weapons.push(new Weapon(x, -50, type));
        AudioSys.playPowerup();
    }

    createProjectile(x, y, dir, type, owner) {
        this.projectiles.push(new Projectile(x, y, dir, type, owner));
        if (type === 'shockwave') AudioSys.playAttack();
        else AudioSys.playShoot();
    }

    createMeleeAttack(attacker, range, damage) {
        // Check hitbox
        const hitBox = {
            x: attacker.facing === 1 ? attacker.x + attacker.width : attacker.x - range,
            y: attacker.y,
            width: range,
            height: attacker.height
        };

        AudioSys.playAttack();

        this.players.forEach(p => {
            if (p !== attacker && !p.isDead && Utils.rectIntersect(hitBox, p)) {
                p.takeDamage(damage, attacker);
                // Knockback
                p.velocity.x = attacker.facing * 10;
                p.velocity.y = -5;
                AudioSys.playHit();
            }
        });
    }

    checkCombatCollisions() {
        this.projectiles.forEach(proj => {
            if (!proj.active) return;

            // Create hitbox for projectile (centered)
            const projHitbox = {
                x: proj.x - 5,
                y: proj.y - 5,
                width: 10,
                height: 10
            };

            this.players.forEach(p => {
                if (!proj.active) return; // Already hit someone

                if (p !== proj.owner && !p.isDead && Utils.rectIntersect(projHitbox, p)) {
                    p.takeDamage(10, proj.owner);
                    proj.active = false;
                    // Knockback
                    p.velocity.x = proj.direction * 5;
                    AudioSys.playHit();

                    // Special effect for shockwave hit
                    if (proj.type === 'shockwave') {
                        // Create a vertical slash effect
                        for(let i=0; i<15; i++) {
                            this.particles.push({
                                x: p.x + p.width/2,
                                y: p.y + p.height/2,
                                vx: (Math.random() - 0.5) * 15,
                                vy: (Math.random() - 0.5) * 15,
                                life: 30,
                                color: '#00FFFF',
                                type: 'spark'
                            });
                        }
                        // Add some white sparks
                        for(let i=0; i<10; i++) {
                            this.particles.push({
                                x: p.x + p.width/2,
                                y: p.y + p.height/2,
                                vx: (Math.random() - 0.5) * 20,
                                vy: (Math.random() - 0.5) * 20,
                                life: 20,
                                color: '#FFFFFF',
                                type: 'spark'
                            });
                        }
                    }
                }
            });
        });
    }

    showMessage(text) {
        const el = document.getElementById('message-area');
        el.innerText = text;
        el.style.opacity = 1;
        setTimeout(() => el.style.opacity = 0, 2000);
    }

    createExplosion(x, y, color) {
        for (let i = 0; i < 20; i++) {
            this.particles.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 10,
                vy: (Math.random() - 0.5) * 10,
                life: 60,
                color: color || 'orange',
                type: 'spark'
            });
        }
    }
}

// Start game
window.onload = () => {
    const game = new Game();
};