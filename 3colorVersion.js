'use strict';

// 73 Color Palettes
const colorPalettes1 = [ //Bright 25
    { name: "Sunset Lemonade",      colors: ["#f3d13c","#fb7e3c","#02a890"] },
    { name: "Mint Frost",           colors: ["#b2d85f","#d7e8e3","#ebf4f1"] },
    { name: "Tropical Punch",       colors: ["#fe6d01","#90e137","#f40290"] },
    { name: "Seaside Sunset",       colors: ["#a71930","#e3d4ad","#30ced8"] },
    { name: "Ocean Breeze",         colors: ["#29579d","#8aaccf","#97ef99"] },
    { name: "Summer Field",         colors: ["#3778c2","#4bac35","#f5b935"] },
    { name: "Solar Flare",          colors: ["#092c5c","#8fbce6","#f5d130"] },
    { name: "Candy Crush",          colors: ["#ff42c8","#ee8728","#9b63f3"] },
    { name: "Patriotic Pride",      colors: ["#0000ff","#ffffff","#ff0000"] },
    { name: "Autumn Leaves",        colors: ["#bed7c9","#e4974e","#d44e46"] },
    { name: "Nautical Nights",      colors: ["#00385d","#e50022","#ffffff"] },
    { name: "Deep Sea",             colors: ["#0c2340","#fa4616","#ffffff"] },
    { name: "Lemon Lime",           colors: ["#f4f756","#54d856","#a3ffe8"] },
    { name: "Fiery Horizon",        colors: ["#002d62","#eb6e1f","#f4911e"] },
    { name: "Fresh Greens",         colors: ["#4bac35","#f5b935","#63bce5"] },
    { name: "Neon Dreams",          colors: ["#f7ff14","#14f7ff","#ff14f7"] },
    { name: "Orange Delight",       colors: ["#ff8d00","#ffc000","#ffebbf"] },
    { name: "Cool Vibes",           colors: ["#00a3e0","#ef3340","#41748d"] },
    { name: "Coral Reef",           colors: ["#e04c4c","#00646f","#bff9ff"] },
    { name: "Blush Bouquet",        colors: ["#efb4ac","#f2a6a4","#ea4682"] },
    { name: "Rose Garden",          colors: ["#e51831","#e85e6a","#f1a509"] },
    { name: "Golden Harvest",       colors: ["#f0e65b","#fffcdb","#b34747"] },
    { name: "Cotton Candy",         colors: ["#f05990","#ffabca","#ffddd6"] },
    { name: "Forest Path",          colors: ["#42ab49","#bddeb3","#fafafa"] },
    { name: "Spring Meadow",        colors: ["#baef78","#d9f775","#f8fe72"] },
    { name: "Fresh Sprouts",        colors: ["#d3e340","#7bb51d","#36995f"] }

];

const colorPalettes2 = [ //Dark 21
    { name: "Emerald Twist",        colors: ["#00565c","#ba9629","#5c002c"] },
    { name: "Cherry Blossom",       colors: ["#851717","#f2eae0","#212121"] },
    { name: "Passion Fruit",        colors: ["#ff6ac1","#8f0952","#820000"] },
    { name: "Midnight Blues",       colors: ["#333366","#c4ced4","#131413"] },
    { name: "Golden Sands",         colors: ["#e8e2d1","#c29b0c","#2e1f00"] },
    { name: "Crimson Tide",         colors: ["#c41e3a","#0c2340","#fedb00"] },
    { name: "Mystic River",         colors: ["#9b0000","#05071c","#4b6374"] },
    { name: "Jungle Fever",         colors: ["#336465","#2f5e52","#234c1b"] },
    { name: "Rustic Charm",         colors: ["#99302b","#300a09","#e1c9c0"] },
    { name: "Harvest Feast",        colors: ["#cd9f31","#236f30","#8a341e"] },
    { name: "Sunset Wine",          colors: ["#ff9763","#a95086","#72477c"] },
    { name: "Autumn Spice",         colors: ["#1b3528","#f4e1a8","#e5632b"] },
    { name: "Shadow Forest",        colors: ["#917883","#918b78","#788d91"] },
    { name: "Brick House",          colors: ["#303b54","#ab4a2a","#e5c8a4"] },
    { name: "Woodland Whisper",     colors: ["#1b3528","#523a1f","#a7773f"] },
    { name: "Maroon Mystique",      colors: ["#790f14","#1c1a19","#817e7d"] },
    { name: "Stormy Seas",          colors: ["#90a8a8","#3e454c","#002c2f"] },
    { name: "River Stone",          colors: ["#3f888f","#84c3be","#23282b"] },
    { name: "Firestorm",            colors: ["#ff1f00","#b31a00","#ed6250"] },
    { name: "Dusky Twilight",       colors: ["#989ab8","#1b1725","#271f26"] },
    { name: "Ruby Blossom",         colors: ["#4c3f49","#fb3c4d","#efa483"] },
    { name: "Coral Wave",           colors: ["#086a91","#fc4e4b","#db514a"] }

];

const colorPalettes3 = [ // Pastel 15
    { name: "Lavender Fields",      colors: ["#a680b0","#ededed","#80a689"] },
    { name: "Pink Petals",          colors: ["#f0cee0","#db9fb6","#e6b2b5"] },
    { name: "Soft Hues",            colors: ["#ddded6","#c4c4be","#7999b3"] },
    { name: "Olive Grove",          colors: ["#d2d2b5","#a5a477","#53523c"] },
    { name: "Blue Lagoon",          colors: ["#809bce","#95b8d1","#b8e0d4"] },
    { name: "Bubblegum",            colors: ["#b3ffb2","#b2f1ff","#ffb2d2"] },
    { name: "Pastel Dream",         colors: ["#a0b0e2","#cdb4e6","#fab9ea"] },
    { name: "Desert Rose",          colors: ["#d9baa9","#afd4bd","#b3d8de"] },
    { name: "Calm Mist",            colors: ["#fcfaf6","#9baba2","#a3c4a3"] },
    { name: "Morning Dew",          colors: ["#ede8e2","#b5bdc4","#aeb4ac"] },
    { name: "Sand Dunes",           colors: ["#b6d4c5","#f7f0e5","#58554e"] },
    { name: "Gray Day",             colors: ["#f1f1ef","#e3e0cf","#333333"] },
    { name: "Water Lilies",         colors: ["#d6e6ff","#d7f9f8","#e5d4ef"] },
    { name: "Autumn Sunset",        colors: ["#efcb5f","#e9aa69","#e38973"] },
    { name: "Peach Fizz",           colors: ["#ddeeed","#ffd4c8","#ff8760"] },
    { name: "Sandy Beach",          colors: ["#e2ffa8","#e8d19c","#efa38f"] }

];

const colorPalettes4 = [ // Monocolor 12
    { name: "Sky Blue",             colors: ["#2c3140","#aabdf8","#e8eeff"] },
    { name: "Vanilla Cream",        colors: ["#fdf6f3","#feeee9","#ffe5df"] },
    { name: "Nightfall",            colors: ["#040607","#141b21","#232f3a"] },
    { name: "Crimson Dawn",         colors: ["#381f1a","#8d4f42","#e27e6a"] },
    { name: "Steel Blue",           colors: ["#10334f","#8899a7","#c4ccd3"] },
    { name: "Stormy Sky",           colors: ["#787878","#686b6b","#595959"] },
    { name: "Charcoal Gray",        colors: ["#666666","#adadad","#ffffff"] },
    { name: "Blush Bouquet",        colors: ["#efb4ac","#f2a6a4","#ea4682"] },
    { name: "Arctic Glow",          colors: ["#405f80","#80bdff","#c0deff"] },
    { name: "Woodland Retreat",     colors: ["#33291d","#877863","#f6f3ec"] },
    { name: "Lilac Mist",           colors: ["#dfc2ed","#c38ecc","#b065ba"] },
    { name: "Fiery Ember",          colors: ["#ea9d93","#dd6d54","#d81b02"] },
    { name: "Olive Grove",          colors: ["#adcc8f","#97c26c","#7d9f5e"] }
];

export var scriptProperties = createScriptProperties()
    .addCheckbox({
        name: 'usePalettes1',
        label: 'Bright',
        value: true
    })
    .addCheckbox({
        name: 'usePalettes2',
        label: 'Dark',
        value: true
    })
    .addCheckbox({
        name: 'usePalettes3',
        label: 'Pastel',
        value: true
    })
    .addCheckbox({
        name: 'usePalettes4',
        label: 'Monocolor',
        value: true
    })
    .addCheckbox({
        name: 'timespanDays',
        label: 'Autochange Days',
        value: false
    })
    .addCheckbox({
        name: 'timespanHours',
        label: 'Autochange Hours',
        value: true
    })
    .addCheckbox({
        name: 'timespanMins',
        label: 'Autochange Minutes',
        value: false
    })
    .addSlider({
        name: 'changeTimespan',
        label: 'Timespan',
        value: 1,
        min: 1,
        max: 24,
        integer: true
    })
    .finish();

const colorPalettes = [colorPalettes1, colorPalettes2, colorPalettes3, colorPalettes4];
let activePalettes = [];
let currentPaletteIndex = 0;
let lastChange;

// Previous script properties for change detection
let prevUsePalettes1 = scriptProperties.usePalettes1;
let prevUsePalettes2 = scriptProperties.usePalettes2;
let prevUsePalettes3 = scriptProperties.usePalettes3;
let prevUsePalettes4 = scriptProperties.usePalettes4;

export function init(value) {
    const currentDate = new Date();
    lastChange = localStorage.get("lastChange") ? new Date(localStorage.get("lastChange")) : currentDate;

    // Initialize active palettes
    initializeActivePalettes();

    // Attempt to load the palette from storage
    const loadedSuccessfully = loadPaletteFromStorage();

    // Pick a random palette if loading from storage failed
    if (!loadedSuccessfully) {
        currentPaletteIndex = 0; // Start from the first palette
        pickNewPalette();
    } else {
        console.log("Loaded palette from storage successfully.");
    }

    // Validate settings after ensuring palette is loaded
    validateAutoChangeSettings();

    return value;
}

// Function to initialize active palettes based on user selection
const initializeActivePalettes = () => {
    activePalettes.length = 0; // Clear the array

    scriptProperties.usePalettes1 && activePalettes.push(...colorPalettes1);
    scriptProperties.usePalettes2 && activePalettes.push(...colorPalettes2);
    scriptProperties.usePalettes3 && activePalettes.push(...colorPalettes3);
    scriptProperties.usePalettes4 && activePalettes.push(...colorPalettes4);

    if (!activePalettes.length) {
        console.log("No color palettes are enabled.");
    } else {
        currentPaletteIndex = 0; // Reset index to the first palette when reinitializing
    }
};

export function update(value) {
    // Check if palette selection properties have changed
    if (prevUsePalettes1 !== scriptProperties.usePalettes1 ||
        prevUsePalettes2 !== scriptProperties.usePalettes2 ||
        prevUsePalettes3 !== scriptProperties.usePalettes3 ||
        prevUsePalettes4 !== scriptProperties.usePalettes4) {
        prevUsePalettes1 = scriptProperties.usePalettes1;
        prevUsePalettes2 = scriptProperties.usePalettes2;
        prevUsePalettes3 = scriptProperties.usePalettes3;
        prevUsePalettes4 = scriptProperties.usePalettes4;

        refreshActivePalettes();
        validateAutoChangeSettings();
    }

    handleSharedValueSwitch();

    if (shouldChangePalette()) {
        shared.next = true;
    }
}

// Function to set shared palette colors, log the palette, and update shared value
const setSharedPaletteColors = (palette) => {
    const colorVecs = palette.colors.map(hexToVec3);
    
    // Loop over the available colors
    for (let i = 0; i < colorVecs.length; i++) {
        shared[`paletteColor${i + 1}`] = colorVecs[i]; // Assign the color to the corresponding shared property
    }
    
    // Clear unused palette slots
    for (let i = colorVecs.length; i < 5; i++) {
        shared[`paletteColor${i + 1}`] = null; // Set unused colors to null
    }
    
    shared.paletteName = palette.name;
    console.log("Current palette:", palette.name);
};

function shouldChangePalette() {
    const currentDate = new Date();
    let nextChange;

    if (scriptProperties.timespanDays) {
        lastChange.setHours(0, 0, 0, 0); // Reset to start of the day
        nextChange = new Date(lastChange.getTime() + 8.64e7 * scriptProperties.changeTimespan);
    } else if (scriptProperties.timespanHours) {
        lastChange.setMinutes(0, 0, 0); // Reset to start of the hour
        nextChange = new Date(lastChange.getTime() + 3.6e6 * scriptProperties.changeTimespan);
    } else if (scriptProperties.timespanMins) {
        lastChange.setSeconds(0, 0); // Reset to start of the minute
        nextChange = new Date(lastChange.getTime() + 6e4 * scriptProperties.changeTimespan);
    } else {
        return false; // No valid timespan set, so no automatic change
    }

    if (currentDate >= nextChange && scriptProperties.changeTimespan > 0) {
        lastChange = currentDate;
        localStorage.set("lastChange", lastChange.toISOString());
        shared.next = true;
        return true;
    }

    return false;
}

// Function to pick a palette and update shared values
const pickNewPalette = () => {
    if (!activePalettes.length) {
        console.log("No color palettes are enabled.");
        return;
    }

    const palette = activePalettes[currentPaletteIndex];

    setSharedPaletteColors(palette);

    // Save the palette index to local storage
    localStorage.set('lastPalette', JSON.stringify(palette));
    localStorage.set('lastPaletteIndex', currentPaletteIndex);
};

// Function to validate automatic change settings
function validateAutoChangeSettings() {
    const autoChangeSettings = [
        scriptProperties.timespanDays,
        scriptProperties.timespanHours,
        scriptProperties.timespanMins
    ];

    const activeSettingsCount = autoChangeSettings.filter(setting => setting).length;

    if (activeSettingsCount > 1) {
        console.error("More than one auto-change mode is active. Please select only one or none at all.");
    }
}

function handleSharedValueSwitch() {
    if (shared.next) {
        currentPaletteIndex = (currentPaletteIndex + 1) % activePalettes.length;
        shared.next = false;  // Reset the shared value
        pickNewPalette();
    }

    if (shared.previous) {
        currentPaletteIndex = (currentPaletteIndex - 1 + activePalettes.length) % activePalettes.length;
        shared.previous = false;  // Reset the shared value
        pickNewPalette();
    }
}

function loadPaletteFromStorage() {
    const savedPalette = localStorage.get('lastPalette', 'LOCATION_GLOBAL');
    const savedPaletteIndex = localStorage.get('lastPaletteIndex', 'LOCATION_GLOBAL');

    if (savedPalette && savedPaletteIndex !== null) {
        const palette = JSON.parse(savedPalette);
        setSharedPaletteColors(palette);
        currentPaletteIndex = parseInt(savedPaletteIndex, 10);
        return true;
    }
    return false;
}

// Function to refresh active palettes based on user selection
const refreshActivePalettes = () => {
    initializeActivePalettes();
    pickNewPalette();
};

// Function to convert hex to Vec3
const hexToVec3 = hex => {
    const bigint = parseInt(hex.slice(1), 16);
    return new Vec3(((bigint >> 16) & 255) / 255, ((bigint >> 8) & 255) / 255, (bigint & 255) / 255);
};
