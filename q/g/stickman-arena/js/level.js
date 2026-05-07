class Level {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.platforms = [];
        this.levelNum = 1;
        this.material = 'dirt'; // dirt, stone, magic, cloud, ice
        this.isMagicLevel = false;
    }

    generate(levelNum) {
        this.levelNum = levelNum;
        this.platforms = [];
        
        // Determine cycle position (1-23)
        // Magic bird level every 5 levels
        this.isMagicLevel = (levelNum % 5 === 0);
        
        // Determine material
        const materials = ['dirt', 'stone', 'cloud', 'ice'];
        this.material = materials[Math.floor(Math.random() * materials.length)];
        if (this.isMagicLevel) this.material = 'magic';

        // Better Generation Logic
        // Always have a floor or safe spawn area
        this.createPlatform(50, this.height - 100, 200, 40); // P1 Spawn
        this.createPlatform(this.width - 250, this.height - 100, 200, 40); // P2 Spawn

        const layoutType = Math.random();

        if (layoutType < 0.15) {
            // Arena / Box
            this.createPlatform(0, this.height - 50, this.width, 50); // Floor
            this.createPlatform(0, 0, 50, this.height); // Left Wall
            this.createPlatform(this.width - 50, 0, 50, this.height); // Right Wall
            
            // Floating steps
            for(let i=1; i<4; i++) {
                this.createPlatform(this.width/2 - 100, this.height - (i * 150), 200, 20);
            }
        } else if (layoutType < 0.3) {
            // Islands
            const levels = 4;
            for (let i = 0; i < levels; i++) {
                const y = this.height - 100 - (i * 150);
                const count = Utils.randomInt(2, 3);
                const spacing = this.width / count;
                for (let j = 0; j < count; j++) {
                    const w = Utils.random(150, 300);
                    const x = (j * spacing) + (spacing/2) - (w/2) + Utils.random(-50, 50);
                    this.createPlatform(x, y, w, 30);
                }
            }
        } else if (layoutType < 0.45) {
            // "The Tower" - Vertical climb
            this.createPlatform(0, this.height - 50, this.width, 50); // Floor
            let y = this.height - 150;
            let x = 100;
            for(let i=0; i<6; i++) {
                this.createPlatform(x, y, 150, 20);
                x = (x === 100) ? this.width - 250 : 100; // Zig zag
                y -= 120;
            }
            // Top platform
            this.createPlatform(this.width/2 - 100, 150, 200, 20);
        } else if (layoutType < 0.6) {
            // "Trampoline Park"
            this.createPlatform(0, this.height - 50, this.width, 50); // Floor
            
            // Bouncy platforms
            this.createPlatform(200, this.height - 150, 100, 20, 'trampoline');
            this.createPlatform(this.width - 300, this.height - 150, 100, 20, 'trampoline');
            this.createPlatform(this.width/2 - 50, this.height - 300, 100, 20, 'trampoline');
            
            // Some normal ones
            this.createPlatform(0, this.height/2, 150, 20);
            this.createPlatform(this.width - 150, this.height/2, 150, 20);
        } else if (layoutType < 0.75) {
            // "The Pit"
            this.createPlatform(0, this.height - 200, 300, 200); // Left cliff
            this.createPlatform(this.width - 300, this.height - 200, 300, 200); // Right cliff
            
            // Bridge or islands in middle
            this.createPlatform(this.width/2 - 50, this.height - 200, 100, 20, 'moving');
            
            // Trampolines at bottom to save you
            this.createPlatform(350, this.height - 50, 100, 20, 'trampoline');
            this.createPlatform(this.width - 450, this.height - 50, 100, 20, 'trampoline');
        } else {
            // Random but structured
            let x = 0;
            let y = this.height - 100;
            while (x < this.width) {
                const w = Utils.random(100, 300);
                // Chance for moving platform or trampoline
                const rand = Math.random();
                let type = 'static';
                if (rand < 0.2) type = 'moving';
                else if (rand < 0.3) type = 'trampoline';
                
                this.createPlatform(x, y, w, 40, type);
                
                x += w + Utils.random(50, 150);
                y += Utils.random(-100, 100);
                if (y > this.height - 50) y = this.height - 150;
                if (y < 200) y = 200;
            }
        }
        this.generateBackgroundProps();
    }

    generateBackgroundProps() {
        this.stars = [];
        if (this.material === 'magic' || this.material === 'stone' || this.material === 'ice') {
             for(let i=0; i<100; i++) {
                this.stars.push({
                    x: Math.random() * this.width,
                    y: Math.random() * this.height,
                    size: Math.random() * 2,
                    alpha: Math.random()
                });
            }
        }
        
        this.mountains = [];
        // Only for outdoor levels
        if (this.material !== 'magic') {
            const count = 3;
            for(let i=0; i<count; i++) {
                const points = [];
                let x = 0;
                points.push({x: 0, y: this.height}); // Start bottom left
                
                while(x <= this.width + 200) {
                    const peakH = Math.random() * 150 + 50 + (i*50);
                    points.push({x: x, y: this.height - peakH});
                    x += Math.random() * 150 + 50;
                }
                points.push({x: this.width, y: this.height}); // End bottom right
                points.push({x: 0, y: this.height}); // Close loop
                
                // Color based on material
                let color;
                if (this.material === 'ice') color = `rgba(200, 230, 255, ${0.3 + (i*0.1)})`;
                else if (this.material === 'stone') color = `rgba(50, 50, 60, ${0.5 + (i*0.1)})`;
                else color = `rgba(34, 139, 34, ${0.3 + (i*0.1)})`; // Greenish for dirt/cloud
                
                this.mountains.push({points, color});
            }
        }
    }

    createPlatform(x, y, w, h, type='static') {
        this.platforms.push({
            x: x,
            y: y,
            width: w,
            height: h,
            type: type,
            vx: type === 'moving' ? 2 : 0,
            origX: x,
            range: 100,
            active: true // For breaking
        });
    }

    breakPlatform(x, y) {
        // Find platform at x,y
        const p = this.platforms.find(p => 
            x > p.x && x < p.x + p.width &&
            y > p.y && y < p.y + p.height
        );
        
        if (p) {
            // Break it!
            p.active = false;
            return p; // Return platform for effects
        }
        return null;
    }

    update() {
        for (const p of this.platforms) {
            if (p.type === 'moving' && p.active) {
                p.x += p.vx;
                if (p.x > p.origX + p.range || p.x < p.origX - p.range) {
                    p.vx *= -1;
                }
            }
        }
    }

    draw(ctx) {
        // Draw Background Gradient
        this.drawBackground(ctx);

        // Initialize textures if not ready
        if (!Graphics.textures.dirt) Graphics.init();

        const pattern = this.getMaterialPattern();
        if (pattern) {
            ctx.fillStyle = pattern;
        } else {
            // Fallback if pattern fails
            ctx.fillStyle = '#654321'; 
        }
        
        for (const p of this.platforms) {
            if (!p.active) continue; // Skip broken platforms
            
            ctx.save();
            ctx.translate(p.x, p.y);
            
            if (p.type === 'trampoline') {
                // Trampoline visual
                ctx.fillStyle = '#333'; // Frame
                ctx.fillRect(0, 10, p.width, p.height - 10);
                ctx.fillStyle = '#00FF00'; // Bouncy top
                ctx.fillRect(5, 0, p.width - 10, 10);
            } else {
                ctx.fillRect(0, 0, p.width, p.height);
            }
            
            // Border
            ctx.strokeStyle = 'rgba(0,0,0,0.5)';
            ctx.lineWidth = 2;
            ctx.strokeRect(0, 0, p.width, p.height);
            ctx.restore();
        }
    }

    drawBackground(ctx) {
        let grad = ctx.createLinearGradient(0, 0, 0, this.height);
        switch(this.material) {
            case 'dirt': 
                grad.addColorStop(0, '#87CEEB'); // Sky Blue
                grad.addColorStop(1, '#E0F7FA'); 
                break;
            case 'stone': 
                grad.addColorStop(0, '#2c3e50'); // Dark Blue/Grey
                grad.addColorStop(1, '#bdc3c7'); 
                break;
            case 'magic': 
                grad.addColorStop(0, '#4a148c'); // Deep Purple
                grad.addColorStop(1, '#000000'); 
                break;
            case 'cloud': 
                grad.addColorStop(0, '#2980b9'); // Blue
                grad.addColorStop(1, '#ffffff'); 
                break;
            case 'ice': 
                grad.addColorStop(0, '#000046'); // Dark Blue
                grad.addColorStop(1, '#1CB5E0'); // Cyan
                break;
            default:
                grad.addColorStop(0, '#333');
                grad.addColorStop(1, '#000');
        }
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, this.width, this.height);

        // Draw Stars
        if (this.stars) {
            ctx.fillStyle = 'white';
            for(const s of this.stars) {
                ctx.globalAlpha = s.alpha;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.size, 0, Math.PI*2);
                ctx.fill();
            }
            ctx.globalAlpha = 1.0;
        }
        
        // Draw Mountains
        if (this.mountains) {
            for(const m of this.mountains) {
                ctx.fillStyle = m.color;
                ctx.beginPath();
                ctx.moveTo(m.points[0].x, m.points[0].y);
                for(let i=1; i<m.points.length; i++) {
                    ctx.lineTo(m.points[i].x, m.points[i].y);
                }
                ctx.fill();
            }
        }
    }

    getMaterialPattern() {
        switch(this.material) {
            case 'dirt': return Graphics.textures.dirt;
            case 'stone': return Graphics.textures.stone;
            case 'magic': return Graphics.textures.magic;
            case 'cloud': return Graphics.textures.cloud;
            case 'ice': return Graphics.textures.ice;
            default: return Graphics.textures.dirt;
        }
    }
}