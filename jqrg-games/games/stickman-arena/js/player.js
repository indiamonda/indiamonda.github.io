class Player {
    constructor(id, x, y, color, inputType) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 60;
        this.originalColor = color || Utils.randomColor();
        this.color = this.originalColor;
        this.inputType = inputType; // 'keyboard_wasd', 'bot', etc.
        
        this.velocity = { x: 0, y: 0 };
        this.speed = 5;
        this.jumpForce = 12;
        this.gravity = 0.5;
        this.grounded = false;
        this.facing = 1; // 1 right, -1 left
        
        this.health = 100;
        this.maxHealth = 100;
        this.isDead = false;
        
        this.weapon = null;
        this.shieldActive = false;
        this.wings = false; // From bird crystal
        this.scale = 1;
        
        this.attackCooldown = 0;
        this.isBot = false;
        this.isBird = false; // Angel/Bird mode
        
        this.jumpCount = 0;
        this.maxJumps = 2;
        this.jumpPressed = false; // To prevent holding jump
        this.isLaying = false;
        this.kills = 0;
        this.onCloud = false;
    }

    update(game) {
        if (this.isDead) return;

        this.handleInput(game.inputManager);
        this.applyPhysics(game.level);
        this.checkWeaponPickup(game.weapons);
        
        if (this.grounded) {
            this.jumpCount = 0;
        }

        if (this.attackCooldown > 0) this.attackCooldown--;
        
        // Weapon update
        if (this.weapon) {
            // Calculate hand position relative to player center
            const centerX = this.x + this.width / 2;
            const centerY = this.y + this.height / 2;
            
            // Adjust for laying down
            let handX, handY;
            if (this.isLaying) {
                // If laying, hand is lower
                handX = centerX + (this.facing * 30);
                handY = centerY + 15;
            } else {
                handX = centerX + (this.facing * 25);
                handY = centerY - 5;
            }

            this.weapon.x = handX;
            this.weapon.y = handY;
            this.weapon.rotation = 0; // Rotation handled in weapon.draw via scale
            this.weapon.update();
            
            if (this.weapon.durability <= 0 && this.weapon.type !== 'bird_crystal') {
                this.weapon.active = false; // Mark as inactive to remove from game
                this.weapon = null;
            }
        }
        
        // Wings logic
        if (this.wings) {
            this.gravity = 0.35; // Slightly floatier than normal (0.5), but not too floaty
        }

        // Bird Touch Kill Logic
        if (this.isBird) {
             game.players.forEach(p => {
                 if (p !== this && !p.isDead && Utils.rectIntersect(this, p)) {
                     p.takeDamage(1, this); // Continuous damage instead of oneshot
                     if (game.frameCount % 10 === 0) { // Effect every few frames
                        game.createExplosion(p.x, p.y, 'red');
                        AudioSys.playHit();
                     }
                 }
             });
        }
        
        // Bounds check
        if (this.y > game.canvas.height + 100) {
            this.takeDamage(1000);
        }
    }

    handleInput(inputManager) {
        if (this.isBot) return; // Bots handle their own input

        const input = inputManager.getPlayerInput(this.id, this.inputType);
        
        if (this.isBird || this.onCloud) {
            // Bird/Angel/Cloud Flight Physics
            const flySpeed = this.speed * 1.5;
            if (input.x !== 0) this.velocity.x += input.x * 0.5;
            if (input.jump) this.velocity.y -= 0.5; // Fly up
            if (input.y > 0) this.velocity.y += 0.5; // Fly down
            
            // Cap speed
            const maxSpeed = 8;
            const speed = Math.sqrt(this.velocity.x**2 + this.velocity.y**2);
            if (speed > maxSpeed) {
                this.velocity.x = (this.velocity.x / speed) * maxSpeed;
                this.velocity.y = (this.velocity.y / speed) * maxSpeed;
            }

            if (input.x !== 0) this.facing = input.x > 0 ? 1 : -1;
            
            // Attack
            if (input.attack && this.attackCooldown <= 0) {
                this.attack();
            }
            return;
        }

        // Laying Down Logic
        if (input.y > 0.5 && this.grounded && !this.isBird && !this.onCloud) {
            if (!this.isLaying) {
                this.y += 30; // Shift down to keep feet on ground
                this.isLaying = true;
                this.height = 30; // Reduce hitbox
            }
            this.velocity.x = 0; // Stop moving
        } else {
            if (this.isLaying) {
                this.y -= 30; // Shift up to restore height
                this.isLaying = false;
                this.height = 60; // Restore hitbox
            }
        }

        // Movement
        if (!this.isLaying && input.x !== 0) {
            this.velocity.x = input.x * this.speed;
            // Only change facing if not aiming
            if (Math.abs(input.aimX) < 0.1) {
                this.facing = input.x > 0 ? 1 : -1;
            }
        } else if (!this.isLaying) {
            this.velocity.x *= 0.8; // Friction
        }

        // Aiming (Controller/Touch Right Stick)
        if (Math.abs(input.aimX) > 0.1) {
            this.facing = input.aimX > 0 ? 1 : -1;
        }

        // Jump
        if (input.jump) {
            if (!this.jumpPressed) {
                if (this.wings || this.onCloud) {
                    this.velocity.y = -5; // Fly
                } else if (this.grounded || this.jumpCount < this.maxJumps) {
                    let force = this.jumpForce;
                    if (input.isMobileJump) force *= 1.5; // Higher jump for mobile
                    
                    this.velocity.y = -force;
                    this.grounded = false;
                    this.jumpCount++;
                }
                this.jumpPressed = true;
            }
        } else {
            this.jumpPressed = false;
        }

        // Attack
        if (input.attack && this.attackCooldown <= 0) {
            this.attack();
        }

        // Shield
        if (input.shield && !this.shieldActive) {
            AudioSys.playShield();
        }
        this.shieldActive = input.shield;
    }

    applyPhysics(level) {
        if (this.isBird || this.onCloud) {
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            
            // Keep in bounds
            if (this.x < 0) { this.x = 0; this.velocity.x *= -1; }
            if (this.x > level.width - this.width) { this.x = level.width - this.width; this.velocity.x *= -1; }
            if (this.y < 0) { this.y = 0; this.velocity.y *= -1; }
            if (this.y > level.height - this.height) { this.y = level.height - this.height; this.velocity.y *= -1; }
            return;
        }

        this.velocity.y += this.gravity;
        this.grounded = false; // Reset grounded state
        
        if (!isNaN(this.velocity.x)) this.x += this.velocity.x;
        this.checkCollisions(level, 'x');
        
        if (!isNaN(this.velocity.y)) this.y += this.velocity.y;
        this.checkCollisions(level, 'y');
    }

    checkCollisions(level, axis) {
        // Simple AABB against level platforms
        for (const platform of level.platforms) {
            if (!platform.active) continue; // Ignore broken platforms
            
            if (Utils.rectIntersect(this, platform)) {
                if (axis === 'x') {
                    if (this.velocity.x > 0) this.x = platform.x - this.width;
                    else if (this.velocity.x < 0) this.x = platform.x + platform.width;
                    this.velocity.x = 0;
                } else {
                    if (this.velocity.y > 0) {
                        this.y = platform.y - this.height;
                        
                        if (platform.type === 'trampoline') {
                            // Bounce!
                            this.velocity.y = -20; // High jump
                            this.grounded = false;
                            AudioSys.playJump(); // Or a specific bounce sound
                        } else {
                            this.grounded = true;
                            this.velocity.y = 0;
                        }
                        
                        // Move with platform
                        if (platform.type === 'moving') {
                            this.x += platform.vx;
                        }
                    } else if (this.velocity.y < 0) {
                        this.y = platform.y + platform.height;
                        this.velocity.y = 0;
                    }
                }
            }
        }
    }

    checkWeaponPickup(weapons) {
        if (this.weapon) return; // Already has weapon

        for (let i = 0; i < weapons.length; i++) {
            const w = weapons[i];
            if (w.active && !w.owner && Utils.rectIntersect(this, w)) {
                this.weapon = w;
                w.owner = this;
                if (w.type === 'bird_crystal') {
                    this.wings = true;
                    this.isBird = true;
                    this.maxHealth = 300; // Boss Health
                    this.health = this.maxHealth; 
                    this.color = '#FFFFFF'; // White Angel
                    AudioSys.playAngelicaFinale(); // Dramatic music
                } else if (w.type === 'magic_stick') {
                    this.onCloud = true;
                    AudioSys.playPowerup();
                }
                break;
            }
        }
    }

    attack() {
        this.attackCooldown = 20;
        if (this.isBird) {
            this.wantsToExplode = true;
            return;
        }
        if (this.weapon) {
            // Use weapon logic (needs reference to game for projectiles)
            // We'll handle this in Game loop or pass Game to update
            // For now, we set a flag or event
            this.wantsToAttack = true; 
        } else {
            // Punch
            // Check for ice breaking
            this.wantsToPunch = true;
        }
    }

    takeDamage(amount, attacker) {
        if (this.shieldActive) amount *= 0.1; // Shield reduces damage
        if (this.isBird) amount *= 0.2; // Bird takes significantly less damage (Boss Mode)
        this.health -= amount;
        if (this.health <= 0 && !this.isDead) {
            this.health = 0;
            this.isDead = true;
            if (attacker && attacker !== this) {
                attacker.kills++;
            }
            // Drop weapon
            if (this.weapon) {
                this.weapon.owner = null;
                this.weapon.active = true;
                this.weapon.x = this.x;
                this.weapon.y = this.y;
                this.weapon = null;
                this.wings = false;
                this.onCloud = false;
            }
        }
    }

    draw(ctx, kingId) {
        if (this.isDead) return;
        if (isNaN(this.x) || isNaN(this.y)) {
            // Attempt to reset position if invalid
            this.x = 100;
            this.y = 100;
            this.velocity = {x:0, y:0};
        }

        ctx.save();
        // Deeper visual offset when laying
        const yOffset = this.isLaying ? 10 : 0;
        ctx.translate(this.x + this.width/2, this.y + this.height/2 + yOffset);
        
        // Rotate if laying down
        if (this.isLaying) {
            ctx.rotate(Math.PI / 2 * this.facing); // Rotate 90 degrees
            // Adjust position slightly to look grounded
            ctx.translate(0, -15); 
        }
        
        ctx.scale(this.facing * this.scale, this.scale); // Flip if facing left
        
        // Angel/Bird Glow
        if (this.isBird) {
            ctx.shadowBlur = 20;
            ctx.shadowColor = '#FFFFFF'; // White Glow
            this.color = '#FFFFFF'; // Force White
        }

        // Draw Stickman Model
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 4; // Slightly thinner
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Animation state
        const isMoving = Math.abs(this.velocity.x) > 0.5;
        const isJumping = !this.grounded;
        const runTime = Date.now() / 150;

        // Body parts positions
        const headY = -25;
        const bodyTopY = -10;
        const bodyBottomY = 15;

        // Head
        ctx.beginPath();
        ctx.arc(0, headY, 12, 0, Math.PI * 2);
        ctx.fillStyle = '#FFF'; // Face color
        ctx.fill();
        ctx.stroke();

        // Eyes (Angry/Normal)
        ctx.fillStyle = '#000';
        ctx.beginPath();
        if (this.wantsToAttack || this.attackCooldown > 0) {
            // Angry eyes
            ctx.moveTo(2, headY - 3);
            ctx.lineTo(8, headY);
        } else {
            // Normal eyes
            ctx.arc(5, headY - 2, 1.5, 0, Math.PI * 2);
        }
        ctx.fill();
        ctx.stroke();

        // Body
        ctx.beginPath();
        ctx.moveTo(0, bodyTopY);
        ctx.lineTo(0, bodyBottomY);
        ctx.stroke();

        // Helper for limbs (2 parts)
        const drawLimb = (startX, startY, angle1, len1, angle2, len2) => {
            const elbowX = startX + Math.sin(angle1) * len1;
            const elbowY = startY + Math.cos(angle1) * len1;
            const endX = elbowX + Math.sin(angle1 + angle2) * len2;
            const endY = elbowY + Math.cos(angle1 + angle2) * len2;
            
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(elbowX, elbowY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
        };

        // Arms
        if (this.weapon) {
            // Holding weapon
            drawLimb(0, bodyTopY + 5, 1.5, 15, -0.5, 15); // Front
            drawLimb(0, bodyTopY + 5, -0.5, 15, 0, 15); // Back
        } else if (this.attackCooldown > 0) {
             // Punch animation
             drawLimb(0, bodyTopY + 5, 1.5, 15, 0, 15); // Punch straight
             drawLimb(0, bodyTopY + 5, -0.5, 15, -1, 15); // Other arm back
        } else if (isJumping) {
             // Jump/Fall
             drawLimb(0, bodyTopY + 5, 2.5, 15, -0.5, 15);
             drawLimb(0, bodyTopY + 5, -2.5, 15, 0.5, 15);
        } else if (isMoving) {
            // Running
            const swing = Math.sin(runTime);
            drawLimb(0, bodyTopY + 5, swing, 15, 0.5, 15);
            drawLimb(0, bodyTopY + 5, -swing, 15, 0.5, 15);
        } else {
            // Idle
            drawLimb(0, bodyTopY + 5, 0.2, 15, 0.2, 15);
            drawLimb(0, bodyTopY + 5, -0.2, 15, -0.2, 15);
        }

        // Legs
        if (isJumping) {
            // Jump pose
            drawLimb(0, bodyBottomY, 0.5, 18, 1, 18);
            drawLimb(0, bodyBottomY, -0.5, 18, 1, 18);
        } else if (isMoving) {
            // Run Cycle
            const stride = Math.sin(runTime);
            drawLimb(0, bodyBottomY, stride, 18, Math.abs(stride)*0.5, 18);
            drawLimb(0, bodyBottomY, -stride, 18, Math.abs(stride)*0.5, 18);
        } else {
            // Stand
            drawLimb(0, bodyBottomY, 0.1, 18, 0, 18);
            drawLimb(0, bodyBottomY, -0.1, 18, 0, 18);
        }

        // Wings
        if (this.wings || this.isBird) {
            ctx.strokeStyle = this.isBird ? '#FFFFFF' : '#00FFFF';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(-5, -15);
            ctx.quadraticCurveTo(-40, -40, -15, -5);
            ctx.moveTo(5, -15);
            ctx.quadraticCurveTo(40, -40, 15, -5);
            ctx.stroke();
            
            if (this.isBird) {
                ctx.strokeStyle = '#FFFF00';
                ctx.beginPath();
                ctx.ellipse(0, -45, 15, 5, 0, 0, Math.PI * 2);
                ctx.stroke();
            }
        }

        // Cloud
        if (this.onCloud) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.beginPath();
            // Draw a fluffy cloud at the feet (Lowered to y+35)
            const cloudY = 35;
            ctx.arc(0, cloudY, 15, 0, Math.PI * 2);
            ctx.arc(-15, cloudY + 5, 12, 0, Math.PI * 2);
            ctx.arc(15, cloudY + 5, 12, 0, Math.PI * 2);
            ctx.arc(-8, cloudY + 10, 10, 0, Math.PI * 2);
            ctx.arc(8, cloudY + 10, 10, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Shield
        if (this.shieldActive) {
            ctx.strokeStyle = '#0000FF';
            ctx.lineWidth = 3;
            ctx.fillStyle = 'rgba(0, 0, 255, 0.2)';
            ctx.beginPath();
            ctx.arc(0, 0, 50, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }

        // Health Bar
        const barWidth = this.isBird ? 60 : 50; // Larger bar for Boss
        ctx.fillStyle = 'red';
        ctx.fillRect(-barWidth/2, -70, barWidth, 6);
        ctx.fillStyle = '#0F0';
        ctx.fillRect(-barWidth/2, -70, barWidth * (this.health / this.maxHealth), 6);
        
        // Player Indicator
        if (!this.isBot) {
            ctx.fillStyle = this.color;
            ctx.font = 'bold 12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(`P${this.id + 1}`, 0, -80);
        }

        ctx.restore();

        // Draw Weapon
        if (this.weapon) {
            this.weapon.draw(ctx);
        }
        
        // Draw Crown if King (Global coordinates)
        if (kingId === this.id) {
             ctx.save();
             ctx.translate(this.x + this.width/2, this.y);
             ctx.fillStyle = 'gold';
             ctx.beginPath();
             ctx.moveTo(-15, -10);
             ctx.lineTo(-15, -25);
             ctx.lineTo(-5, -15);
             ctx.lineTo(0, -25);
             ctx.lineTo(5, -15);
             ctx.lineTo(15, -25);
             ctx.lineTo(15, -10);
             ctx.fill();
             ctx.strokeStyle = 'orange';
             ctx.lineWidth = 2;
             ctx.stroke();
             ctx.restore();
        }
    }
}