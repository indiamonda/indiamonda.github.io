class InputManager {
    constructor() {
        this.keys = {};
        this.gamepads = {};
        this.touchState = {
            leftStick: { x: 0, y: 0, active: false },
            rightStick: { x: 0, y: 0, active: false },
            buttons: { jump: false, attack: false, shield: false }
        };
        this.pausePressed = false;

        this.setupKeyboardListeners();
        this.setupGamepadListeners();
        this.setupTouchListeners();
    }

    setupKeyboardListeners() {
        window.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
            if (e.code === 'Escape') this.pausePressed = true;
        });

        window.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
            if (e.code === 'Escape') this.pausePressed = false;
        });
    }

    setupGamepadListeners() {
        window.addEventListener("gamepadconnected", (e) => {
            console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
                e.gamepad.index, e.gamepad.id,
                e.gamepad.buttons.length, e.gamepad.axes.length);
            this.gamepads[e.gamepad.index] = e.gamepad;
        });

        window.addEventListener("gamepaddisconnected", (e) => {
            console.log("Gamepad disconnected from index %d: %s",
                e.gamepad.index, e.gamepad.id);
            delete this.gamepads[e.gamepad.index];
        });
    }

    setupTouchListeners() {
        // Helper to handle joystick logic
        const handleJoystick = (touch, stickData, elementId) => {
            const el = document.getElementById(elementId);
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const maxDist = rect.width / 2;
            
            let dx = touch.clientX - centerX;
            let dy = touch.clientY - centerY;
            
            const dist = Math.sqrt(dx*dx + dy*dy);
            
            if (dist > maxDist) {
                dx = (dx / dist) * maxDist;
                dy = (dy / dist) * maxDist;
            }
            
            // Normalize -1 to 1
            stickData.x = dx / maxDist;
            stickData.y = dy / maxDist;
            stickData.active = true;

            // Visual update
            const knob = el.querySelector('.joystick-knob');
            if (knob) {
                knob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
            }
        };

        const resetJoystick = (stickData, elementId) => {
            stickData.x = 0;
            stickData.y = 0;
            stickData.active = false;
            const el = document.getElementById(elementId);
            if (el) {
                const knob = el.querySelector('.joystick-knob');
                if (knob) knob.style.transform = `translate(-50%, -50%)`;
            }
        };

        // Touch event handlers
        const leftStickEl = document.getElementById('joystick-left');
        const rightStickEl = document.getElementById('joystick-right');

        if(leftStickEl) {
            leftStickEl.addEventListener('touchstart', (e) => {
                e.preventDefault();
                handleJoystick(e.targetTouches[0], this.touchState.leftStick, 'joystick-left');
            }, { passive: false });
            leftStickEl.addEventListener('touchmove', (e) => {
                e.preventDefault();
                handleJoystick(e.targetTouches[0], this.touchState.leftStick, 'joystick-left');
            }, { passive: false });
            leftStickEl.addEventListener('touchend', (e) => {
                e.preventDefault();
                resetJoystick(this.touchState.leftStick, 'joystick-left');
            }, { passive: false });
        }

        if(rightStickEl) {
            rightStickEl.addEventListener('touchstart', (e) => {
                e.preventDefault();
                handleJoystick(e.targetTouches[0], this.touchState.rightStick, 'joystick-right');
            }, { passive: false });
            rightStickEl.addEventListener('touchmove', (e) => {
                e.preventDefault();
                handleJoystick(e.targetTouches[0], this.touchState.rightStick, 'joystick-right');
            }, { passive: false });
            rightStickEl.addEventListener('touchend', (e) => {
                e.preventDefault();
                resetJoystick(this.touchState.rightStick, 'joystick-right');
            }, { passive: false });
        }

        // Buttons
        const btnJump = document.getElementById('btn-jump');
        const btnAttack = document.getElementById('btn-attack');
        const btnShield = document.getElementById('btn-shield');
        const btnPause = document.getElementById('btn-pause-mobile');

        const bindButton = (btn, key) => {
            if (btn) {
                btn.addEventListener('touchstart', (e) => { 
                    e.preventDefault(); 
                    if (key === 'pause') this.pausePressed = true;
                    else this.touchState.buttons[key] = true; 
                    btn.style.transform = 'scale(0.9)';
                }, { passive: false });
                btn.addEventListener('touchend', (e) => { 
                    e.preventDefault(); 
                    if (key === 'pause') this.pausePressed = false;
                    else this.touchState.buttons[key] = false; 
                    btn.style.transform = 'scale(1)';
                }, { passive: false });
            }
        };

        bindButton(btnJump, 'jump');
        bindButton(btnAttack, 'attack');
        bindButton(btnShield, 'shield');
        bindButton(btnPause, 'pause');
    }

    pollGamepads() {
        const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
        for (let i = 0; i < gamepads.length; i++) {
            if (gamepads[i]) {
                this.gamepads[i] = gamepads[i];
            }
        }
    }

    checkPause() {
        // Check Keyboard
        if (this.pausePressed) {
            this.pausePressed = false; // Consume event
            return true;
        }

        // Check Gamepads
        let gamepadPause = false;
        for (const index in this.gamepads) {
            const gp = this.gamepads[index];
            if (gp) {
                // Button 9 = Start, Button 8 = Select/Back, Button 1 = B (Xbox) / Circle (PS)
                if (gp.buttons[9]?.pressed || gp.buttons[8]?.pressed || gp.buttons[1]?.pressed) { 
                    gamepadPause = true;
                    break;
                }
            }
        }

        if (gamepadPause) {
            if (!this.pauseLock) {
                this.pauseLock = true;
                return true;
            }
        } else {
            this.pauseLock = false;
        }
        
        return false;
    }

    getPlayerInput(playerIndex, inputType) {
        // inputType: 'keyboard_wasd', 'keyboard_arrows', 'gamepad_0', 'gamepad_1', etc., 'touch'
        
        const input = {
            x: 0,
            y: 0,
            aimX: 0,
            aimY: 0,
            jump: false,
            attack: false,
            shield: false,
            join: false
        };

        if (inputType === 'keyboard_wasd') {
            if (this.keys['KeyA']) input.x = -1;
            if (this.keys['KeyD']) input.x = 1;
            if (this.keys['KeyW']) input.jump = true;
            if (this.keys['KeyS']) input.y = 1;
            if (this.keys['KeyQ']) input.attack = true;
            if (this.keys['KeyE'] || this.keys['ShiftLeft']) input.shield = true; // E or Shift for Shield
            if (this.keys['Space']) input.jump = true;
        } else if (inputType === 'keyboard_arrows') {
            if (this.keys['ArrowLeft']) input.x = -1;
            if (this.keys['ArrowRight']) input.x = 1;
            if (this.keys['ArrowUp']) input.jump = true;
            if (this.keys['ArrowDown']) input.y = 1;
            if (this.keys['Slash'] || this.keys['ShiftRight']) input.attack = true;
            if (this.keys['Period'] || this.keys['Comma'] || this.keys['Numpad0']) input.shield = true; // . or , or Numpad0 for Shield
            if (this.keys['ControlRight']) input.jump = true;
        } else if (inputType === 'universal') {
            // WASD
            if (this.keys['KeyA']) input.x = -1;
            if (this.keys['KeyD']) input.x = 1;
            if (this.keys['KeyW']) input.jump = true;
            if (this.keys['KeyS']) input.y = 1;
            if (this.keys['KeyQ']) input.attack = true;
            if (this.keys['KeyE'] || this.keys['ShiftLeft']) input.shield = true;
            if (this.keys['Space']) input.jump = true;
            
            // Arrows
            if (this.keys['ArrowLeft']) input.x = -1;
            if (this.keys['ArrowRight']) input.x = 1;
            if (this.keys['ArrowUp']) input.jump = true;
            if (this.keys['ArrowDown']) input.y = 1;
            if (this.keys['Slash'] || this.keys['ShiftRight']) input.attack = true;
            if (this.keys['Period'] || this.keys['Comma']) input.shield = true;

            // Touch
            if (this.touchState.leftStick.active) {
                input.x = this.touchState.leftStick.x;
                input.y = this.touchState.leftStick.y;
                
                // Jump if pulled up (y < -0.5)
                if (input.y < -0.5) {
                    input.jump = true;
                    input.isMobileJump = true; // Flag for higher jump
                }
            }
            // if (this.touchState.buttons.jump) input.jump = true; // Removed dedicated button
            if (this.touchState.buttons.attack) input.attack = true;
            if (this.touchState.buttons.shield) input.shield = true;

            // Gamepad 0
            const gp = this.gamepads[0];
            if (gp) {
                if (Math.abs(gp.axes[0]) > 0.1) input.x = gp.axes[0];
                if (gp.buttons[0].pressed) input.jump = true;
                if (gp.buttons[7].pressed || (gp.buttons[7].value > 0.5) || gp.buttons[5].pressed) input.attack = true; // RT or RB
                if (gp.buttons[6].pressed || (gp.buttons[6].value > 0.5) || gp.buttons[4].pressed) input.shield = true; // LT or LB
            }
        } else if (inputType.startsWith('gamepad')) {
            this.pollGamepads();
            const gpIndex = parseInt(inputType.split('_')[1]);
            const gp = this.gamepads[gpIndex];
            
            if (gp) {
                // Deadzone
                const deadzone = 0.1;
                
                // Left Stick (Move)
                if (Math.abs(gp.axes[0]) > deadzone) input.x = gp.axes[0];
                if (Math.abs(gp.axes[1]) > deadzone) input.y = gp.axes[1];

                // Right Stick (Look/Aim)
                if (Math.abs(gp.axes[2]) > deadzone) input.aimX = gp.axes[2];
                if (Math.abs(gp.axes[3]) > deadzone) input.aimY = gp.axes[3];

                // Buttons
                // Standard mapping: 0=A, 1=B, 2=X, 3=Y, 4=LB, 5=RB, 6=LT, 7=RT
                if (gp.buttons[0].pressed) input.join = true; // A to join
                if (gp.buttons[0].pressed) input.jump = true; // A to jump
                
                // Attack: RT (7) or RB (5)
                if (gp.buttons[7].pressed || (gp.buttons[7].value > 0.5) || gp.buttons[5].pressed) input.attack = true; 
                
                // Shield: LT (6) or LB (4)
                if (gp.buttons[6].pressed || (gp.buttons[6].value > 0.5) || gp.buttons[4].pressed) input.shield = true; 
            }
        } else if (inputType === 'touch') {
            input.x = this.touchState.leftStick.x;
            input.y = this.touchState.leftStick.y;
            
            // Jump if pulled up (y < -0.5)
            if (input.y < -0.5) {
                input.jump = true;
                input.isMobileJump = true;
            }
            
            input.aimX = this.touchState.rightStick.x;
            input.aimY = this.touchState.rightStick.y;
            // input.jump = this.touchState.buttons.jump; // Removed
            input.attack = this.touchState.buttons.attack;
            input.shield = this.touchState.buttons.shield;
        }

        return input;
    }
}