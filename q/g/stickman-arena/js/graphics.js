const Graphics = {
    textures: {},

    init: function() {
        this.textures.dirt = this.createDirtTexture();
        this.textures.stone = this.createStoneTexture();
        this.textures.magic = this.createMagicTexture();
        this.textures.ice = this.createIceTexture();
        this.textures.cloud = this.createCloudTexture();
    },

    createDirtTexture: function() {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');

        // Base color
        ctx.fillStyle = '#5d4037';
        ctx.fillRect(0, 0, 64, 64);

        // Noise
        for (let i = 0; i < 200; i++) {
            ctx.fillStyle = Math.random() > 0.5 ? '#4e342e' : '#795548';
            ctx.fillRect(Math.random() * 64, Math.random() * 64, 2, 2);
        }
        
        // Grass top
        ctx.fillStyle = '#4CAF50';
        ctx.fillRect(0, 0, 64, 10);
        
        return ctx.createPattern(canvas, 'repeat');
    },

    createStoneTexture: function() {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = '#757575';
        ctx.fillRect(0, 0, 64, 64);

        // Cracks/Bricks
        ctx.strokeStyle = '#616161';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 32);
        ctx.lineTo(64, 32);
        ctx.moveTo(32, 0);
        ctx.lineTo(32, 32);
        ctx.moveTo(10, 32);
        ctx.lineTo(10, 64);
        ctx.stroke();

        // Noise
        for (let i = 0; i < 100; i++) {
            ctx.fillStyle = 'rgba(0,0,0,0.1)';
            ctx.fillRect(Math.random() * 64, Math.random() * 64, 2, 2);
        }

        return ctx.createPattern(canvas, 'repeat');
    },

    createMagicTexture: function() {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = '#4a148c';
        ctx.fillRect(0, 0, 64, 64);

        // Runes/Sparkles
        ctx.fillStyle = '#ab47bc';
        ctx.font = '20px Arial';
        ctx.fillText('★', 10, 20);
        ctx.fillText('✦', 40, 50);
        
        return ctx.createPattern(canvas, 'repeat');
    },

    createIceTexture: function() {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = '#81d4fa';
        ctx.fillRect(0, 0, 64, 64);

        // Glint
        ctx.strokeStyle = 'rgba(255,255,255,0.6)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 64);
        ctx.lineTo(64, 0);
        ctx.moveTo(20, 64);
        ctx.lineTo(64, 20);
        ctx.stroke();

        return ctx.createPattern(canvas, 'repeat');
    },

    createCloudTexture: function() {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = '#e1f5fe';
        ctx.fillRect(0, 0, 64, 64);

        // Fluff
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(32, 32, 20, 0, Math.PI * 2);
        ctx.fill();

        return ctx.createPattern(canvas, 'repeat');
    }
};