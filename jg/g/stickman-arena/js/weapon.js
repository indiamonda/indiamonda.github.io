class Weapon {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;
        this.type = type;
        this.durability = 20;
        this.active = true;
        this.owner = null;
        this.color = '#FFF';
        
        // Visual properties
        this.rotation = 0;
    }

    update(level) {
        if (!this.active) return;
        
        // Gravity
        if (!this.owner) {
            // Slow fall for crystal
            const gravity = this.type === 'bird_crystal' ? 0.5 : 5;
            this.y += gravity; 
            
            // Collision with platforms
            if (level) {
                for (const platform of level.platforms) {
                    if (this.x < platform.x + platform.width &&
                        this.x + this.width > platform.x &&
                        this.y + this.height > platform.y &&
                        this.y < platform.y + platform.height) {
                        
                        this.y = platform.y - this.height;
                    }
                }
                // Floor collision
                if (this.y > level.height - 50) {
                    this.y = level.height - 50 - this.height;
                }
            }
        }
    }

    draw(ctx) {
        if (!this.active) return;
        
        ctx.save();
        ctx.translate(this.x, this.y);
        if (this.owner) {
            // Scale X to flip weapon if facing left, instead of rotating 180
            // This keeps "Up" as "Up"
            if (this.owner.facing === -1) {
                ctx.scale(-1, 1);
            }
        }
        
        switch(this.type) {
            case 'magic_stick':
                ctx.save();
                ctx.scale(2, 2); // Make it bigger
                // Nimbus Staff Visuals
                // Red Shaft
                ctx.fillStyle = '#8B0000'; 
                ctx.fillRect(-2, -20, 4, 40); 
                
                // Silver Ends
                ctx.fillStyle = '#C0C0C0';
                // Top Cap
                ctx.beginPath();
                ctx.moveTo(-3, -20);
                ctx.lineTo(3, -20);
                ctx.lineTo(4, -25);
                ctx.lineTo(-4, -25);
                ctx.fill();
                
                // Bottom Cap
                ctx.beginPath();
                ctx.moveTo(-3, 20);
                ctx.lineTo(3, 20);
                ctx.lineTo(4, 25);
                ctx.lineTo(-4, 25);
                ctx.fill();
                
                ctx.restore();
                break;
            case 'dagger':
                // Bleach Blade Visuals (Zangetsu-ish)
                ctx.save();
                ctx.scale(1.5, 1.5);
                
                // Handle wrapped in white cloth
                ctx.fillStyle = '#FFFFFF';
                ctx.fillRect(-3, 0, 6, 12);
                ctx.strokeStyle = '#000';
                ctx.lineWidth = 0.5;
                ctx.strokeRect(-3, 0, 6, 12);
                
                // Big Black Blade
                ctx.fillStyle = '#111';
                ctx.beginPath();
                ctx.moveTo(-3, 0);
                ctx.lineTo(3, 0); // Guard width
                ctx.lineTo(8, -30); // Back of blade curve
                ctx.lineTo(0, -45); // Tip
                ctx.lineTo(-8, -10); // Edge curve
                ctx.lineTo(-3, 0);
                ctx.fill();
                
                // Silver Edge
                ctx.fillStyle = '#DDD';
                ctx.beginPath();
                ctx.moveTo(-8, -10);
                ctx.lineTo(0, -45);
                ctx.lineTo(-2, -10);
                ctx.fill();
                
                ctx.restore();
                break;
            case 'shooter': // Pistol
                ctx.fillStyle = '#333';
                // Grip (at 0,0)
                ctx.fillRect(-4, 0, 8, 10); 
                // Barrel (forward)
                ctx.fillRect(-4, -6, 20, 8); 
                break;
            case 'sword':
                // Handle (at grip 0,0)
                ctx.fillStyle = '#654321';
                ctx.fillRect(-3, 0, 6, 10);
                // Guard
                ctx.fillStyle = '#FFD700';
                ctx.fillRect(-10, -2, 20, 4);
                // Blade
                ctx.fillStyle = '#E0E0E0';
                ctx.fillRect(-2, -35, 4, 35);
                // Tip
                ctx.beginPath();
                ctx.moveTo(-2, -35);
                ctx.lineTo(2, -35);
                ctx.lineTo(0, -40);
                ctx.fill();
                break;
            case 'bird_crystal':
                ctx.fillStyle = '#FF00FF';
                ctx.beginPath();
                ctx.moveTo(0, -10);
                ctx.lineTo(10, 0);
                ctx.lineTo(0, 10);
                ctx.lineTo(-10, 0);
                ctx.fill();
                // Glow
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#FF00FF';
                break;
        }
        
        ctx.restore();
    }

    use(player, game) {
        if (this.durability <= 0 && this.type !== 'bird_crystal') {
            player.dropWeapon();
            return;
        }

        switch(this.type) {
            case 'magic_stick':
                // Fly on cloud / Grow bigger
                player.velocity.y = -10; // Fly up
                player.scale = 1.5;
                setTimeout(() => player.scale = 1, 1000);
                this.createCloud(player, game);
                break;
            case 'dagger':
                // Shockwave / Push forward
                player.velocity.x = player.facing * 20; // Dash
                game.createProjectile(player.x, player.y, player.facing, 'shockwave', player);
                break;
            case 'shooter':
                game.createProjectile(player.x, player.y, player.facing, 'bullet', player);
                // Recoil
                player.velocity.x = -player.facing * 2;
                // Particle
                game.particles.push({
                    x: player.x + (player.facing * 30),
                    y: player.y,
                    vx: player.facing * 5,
                    vy: (Math.random() - 0.5) * 2,
                    life: 10,
                    color: 'yellow',
                    type: 'spark'
                });
                break;
            case 'sword':
                // Melee hitbox
                game.createMeleeAttack(player, 60, 25);
                break;
            case 'bird_crystal':
                // Passive effect handled in player update (wings)
                break;
        }

        if (this.type !== 'bird_crystal') {
            this.durability--;
        }
    }

    createCloud(player, game) {
        // Visual effect
        for (let i = 0; i < 5; i++) {
            game.particles.push({
                x: player.x + (Math.random() - 0.5) * 20,
                y: player.y + 20 + (Math.random() - 0.5) * 10,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() * 2), // Float down slightly
                life: 60,
                color: '#FFFF00', // Yellow cloud
                type: 'cloud'
            });
        }
    }
}

class Projectile {
    constructor(x, y, direction, type, owner) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.type = type;
        this.owner = owner;
        this.speed = type === 'shockwave' ? 15 : 10;
        this.active = true;
        this.width = type === 'shockwave' ? 30 : 10;
        this.height = type === 'shockwave' ? 30 : 10;
        this.life = 100;
    }

    update() {
        this.x += this.speed * this.direction;
        this.life--;
        if (this.life <= 0) this.active = false;
    }

    draw(ctx) {
        if (this.type === 'shockwave') {
            // Getsuga Tenshou style wave
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.scale(this.direction, 1); // Flip based on direction
            
            ctx.fillStyle = '#00FFFF'; // Cyan core
            ctx.shadowBlur = 20;
            ctx.shadowColor = '#00FFFF';
            
            ctx.beginPath();
            // Crescent shape
            ctx.moveTo(0, -30);
            ctx.quadraticCurveTo(20, 0, 0, 30);
            ctx.quadraticCurveTo(-10, 0, 0, -30);
            ctx.fill();
            
            // Outer glow/particles
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            ctx.restore();
        } else {
            ctx.fillStyle = '#FFFF00';
            ctx.beginPath();
            ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}