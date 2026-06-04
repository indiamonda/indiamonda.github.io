class Bot extends Player {
    constructor(id, x, y, difficulty) {
        super(id, x, y, '#FF3333', 'bot'); // Red color for Bot
        this.difficulty = difficulty; // 'easy', 'medium', 'hard'
        this.isBot = true;
        this.target = null;
        this.reactionTimer = 0;
        this.moveTimer = 0;
        this.currentMove = 0;
    }

    update(game) {
        this.findTarget(game.players);
        this.decideAction(game);
        super.update(game);
    }

    findTarget(players) {
        let minDist = Infinity;
        this.target = null;
        
        for (const p of players) {
            if (p === this || p.isDead) continue;
            
            const dx = p.x - this.x;
            const dy = p.y - this.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            
            if (dist < minDist) {
                minDist = dist;
                this.target = p;
            }
        }
    }

    decideAction(game) {
        if (this.isDead) return;

        // Reset inputs
        this.velocity.x *= 0.8;
        let jump = false;
        let attack = false;
        let shield = false;
        let moveX = 0;

        // Reaction delay based on difficulty
        if (this.reactionTimer > 0) {
            this.reactionTimer--;
            return;
        }

        // Logic
        if (this.target) {
            const dx = this.target.x - this.x;
            const dy = this.target.y - this.y;
            const dist = Math.sqrt(dx*dx + dy*dy);

            // Movement
            if (Math.abs(dx) > 50) {
                moveX = dx > 0 ? 1 : -1;
            }

            // Jump if target is higher or obstacle ahead
            if (this.target.y < this.y - 50 || this.checkObstacle(game.level, moveX)) {
                if (this.grounded || this.wings) jump = true;
            }
            
            // Fly down if target is lower (Bird only)
            if (this.wings && this.target.y > this.y + 50) {
                this.velocity.y += 0.5;
            }

            // Attack logic
            if (dist < 100) {
                if (this.difficulty === 'hard' || (this.difficulty === 'medium' && Math.random() < 0.1)) {
                    attack = true;
                } else if (this.difficulty === 'easy' && Math.random() < 0.05) {
                    attack = true;
                }
            }

            // Shield logic (Hard/Medium only)
            if (this.difficulty !== 'easy' && this.target.wantsToAttack && dist < 150) {
                shield = true;
            }
        }

        // Weapon seeking
        if (!this.weapon) {
            let nearestWeapon = null;
            let minWepDist = Infinity;
            
            for (const w of game.weapons) {
                if (!w.active || w.owner) continue;
                const d = Math.sqrt(Math.pow(w.x - this.x, 2) + Math.pow(w.y - this.y, 2));
                if (d < minWepDist) {
                    minWepDist = d;
                    nearestWeapon = w;
                }
            }

            if (nearestWeapon && minWepDist < 300) {
                // Override target movement to get weapon
                const wx = nearestWeapon.x - this.x;
                moveX = wx > 0 ? 1 : -1;
                if (nearestWeapon.y < this.y - 50 && (this.grounded || this.wings)) jump = true;
            }
        }

        // Apply inputs
        if (moveX !== 0) {
            this.velocity.x = moveX * this.speed;
            this.facing = moveX;
        }
        
        if (jump) {
             if (!this.jumpPressed) {
                 if (this.wings) {
                     this.velocity.y = -5;
                 } else if (this.grounded || this.jumpCount < this.maxJumps) {
                     this.velocity.y = -this.jumpForce;
                     this.grounded = false;
                     this.jumpCount++;
                 }
                 this.jumpPressed = true;
             }
        } else {
            this.jumpPressed = false;
        }

        if (attack && this.attackCooldown <= 0) {
            this.attack();
        }

        this.shieldActive = shield;

        // Reset reaction timer
        if (this.difficulty === 'easy') this.reactionTimer = 20;
        else if (this.difficulty === 'medium') this.reactionTimer = 10;
        else this.reactionTimer = 5;
    }

    attack() {
        this.attackCooldown = 20;
        if (this.weapon) {
            this.wantsToAttack = true; 
        } else {
            this.wantsToPunch = true;
        }
    }

    checkObstacle(level, dir) {
        // Simple raycast ahead
        const checkX = this.x + (dir * 50);
        // Check if there is a platform at checkX, this.y
        for (const p of level.platforms) {
            if (checkX > p.x && checkX < p.x + p.width && 
                this.y > p.y && this.y < p.y + p.height) {
                return true; // Wall ahead
            }
        }
        // Also jump if stuck (not moving much)
        if (Math.abs(this.velocity.x) < 0.5 && this.target) {
             return Math.random() < 0.05;
        }
        return false;
    }
}