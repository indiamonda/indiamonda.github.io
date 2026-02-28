const Utils = {
    random: (min, max) => Math.random() * (max - min) + min,
    randomInt: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
    
    // AABB Collision detection
    rectIntersect: (r1, r2) => {
        return !(r2.x >= r1.x + r1.width || 
                 r2.x + r2.width <= r1.x || 
                 r2.y >= r1.y + r1.height || 
                 r2.y + r2.height <= r1.y);
    },

    // Circle collision
    circleIntersect: (c1, c2) => {
        const dx = c1.x - c2.x;
        const dy = c1.y - c2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < c1.radius + c2.radius;
    },

    // Random color generator (Avoids very light colors/white)
    randomColor: () => {
        const letters = '0123456789ABC'; // Exclude D, E, F to avoid light colors
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 13)];
        }
        return color;
    },

    lerp: (start, end, t) => {
        return start * (1 - t) + end * t;
    }
};