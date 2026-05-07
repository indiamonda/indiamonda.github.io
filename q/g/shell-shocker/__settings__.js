ASSET_PREFIX = "";
SCRIPT_PREFIX = "";
SCENE_PATH = "MainMenu.json?v=" + VERSION;
CONTEXT_OPTIONS = {
    'antialias': false,
    'alpha': false,
    'preserveDrawingBuffer': false,
    'preferWebGl2': true,
    'powerPreference': 'high-performance'
};
SCRIPTS = [];
CONFIG_FILENAME = "config.json?v=" + VERSION;
INPUT_SETTINGS = {
    useKeyboard: true,
    useMouse: true,
    useGamepads: false,
    useTouch: true
};
pc.script.legacy = false;
PRELOAD_MODULES = [
    {'moduleName' : 'Ammo', 'glueUrl' : 'files/assets/31040882/1/ammo.wasm.js', 'wasmUrl' : 'files/assets/31040883/1/ammo.wasm.wasm', 'fallbackUrl' : 'files/assets/31040881/1/ammo.js', 'preload' : true}
];