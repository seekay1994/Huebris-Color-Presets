'use strict';

import * as WEColor from 'WEColor';

// 97 Color Palettes
const colorPalettes1 = [ //Bright 15
    { name: "Summer Sorbet",         colors: ["#de324c","#f4895f","#f8e16f","#95cf92","#369acc","#9656a2"] },
    { name: "Warm Sunset",           colors: ["#c45335","#cc7a3d","#e6c994","#fbf2c4","#74a892","#008585"] },
    { name: "Neon Lights",           colors: ["#fff500","#00ff75","#cd76ea","#ffb443","#ff5e5e","#39dbff"] },
    { name: "Sunburst",              colors: ["#ffcc00","#ffb300","#ff7c51","#ff44a1","#ff0099","#ff0073"] },
    { name: "Electric Dreams",       colors: ["#d100ff","#ff12ba","#f9537b","#f28b71","#f0cfa1","#f3f3cc"] },
    { name: "Luminous Spectrum",     colors: ["#f5ff25","#f6cf23","#f89f21","#f96f20","#fb3f1e","#fc0e1c"] },
    { name: "Emerald City",          colors: ["#03753a","#01a652","#3989ad","#49b1e3","#ffc20e","#ffd380"] },
    { name: "Botanical Garden",      colors: ["#075e54","#128c7e","#25d366","#dcf8c6","#34b7f1","#ece5dd"] },
    { name: "Neon Dreams",           colors: ["#1a1e21","#64fcfe","#f6baed","#f1ff0a","#dbfede","#ffffff"] },
    { name: "Midnight Blaze",        colors: ["#000000","#d63939","#c71c1c","#ffa16b","#57e8e3","#0c1c6e"] },
    { name: "Lavender Sunset",       colors: ["#ab32c3","#ebb0f7","#6a9454","#aeef8b","#fb5a00","#ffc2aa"] },
    { name: "Fiery Passion",         colors: ["#d12229","#f68a1e","#fde01a","#007940","#24408e","#732982"] },
    { name: "Tropical Burst",        colors: ["#ea3323","#ff8b00","#febb26","#1eb253","#017cf3","#9c78fe"] },
    { name: "Golden Glow",           colors: ["#dbf000","#f5ff8a","#fcffd9","#edffd9","#c8ff8a","#7ff000"] },
    { name: "Summer Vibes",          colors: ["#1abc9c","#7dcc7f","#ffe046","#f7df7d","#ed5041","#fc7060"] },
    { name: "Fresh Greens",          colors: ["#3bcea0","#57d89f","#72e19d","#8eeb9c","#a9f59a","#c5ff99"] }
];

const colorPalettes2 = [ //Dark 24
    { name: "Royal Velvet",          colors: ["#d90081","#a11191","#760090","#5f0074","#44056b","#28006b"] },
    { name: "Mystic Twilight",       colors: ["#6340bc","#794ee6","#090612","#20153c","#362367","#4d3291"] },
    { name: "Deep Ocean",            colors: ["#742d75","#373463","#1e8181","#62975e","#9c7a39","#682e44"] },
    { name: "Earthy Delights",       colors: ["#8c7a4c","#252619","#c6cece","#53391c","#c8c59f","#ccae79"] },
    { name: "Stone Age",             colors: ["#8b7d7d","#242120","#bbb4b7","#c8bfc3","#b4abb4","#50372e"] },
    { name: "Sunset Boulevard",      colors: ["#f5d7b0","#d15b56","#c43138","#7ba8a3","#3e909d","#007896"] },
    { name: "Desert Oasis",          colors: ["#d5a43f","#f6f7f7","#e1c2bc","#6b6941","#4b303d","#0f4c5c"] },
    { name: "Underwater Realm",      colors: ["#25353d","#4c5b5e","#7e8385","#b0bf9c","#472a1a","#c49047"] },
    { name: "Dark Elegance",         colors: ["#8b7d7d","#242120","#bbb4b7","#c8bfc3","#b4abb4","#50372e"] },
    { name: "Forest Whisper",        colors: ["#f5d7b0","#d15b56","#c43138","#7ba8a3","#3e909d","#007896"] },
    { name: "Autumn Breeze",         colors: ["#d5a43f","#f6f7f7","#e1c2bc","#6b6941","#4b303d","#0f4c5c"] },
    { name: "Gothic Glam",           colors: ["#25353d","#4c5b5e","#7e8385","#b0bf9c","#472a1a","#c49047"] },
    { name: "Sunrise Serenade",      colors: ["#fff8bf","#6c6f6b","#4b364f","#160407","#410c15","#6b1323"] },
    { name: "Oceanic Symphony",      colors: ["#1d3c49","#b7d5cb","#938e8c","#e3a564","#843a00","#22150c"] },
    { name: "Berry Bliss",           colors: ["#ba97e8","#39136b","#ff8ccb","#e46884","#c9443d","#e6a61e"] },
    { name: "Vintage Charm",         colors: ["#285559","#4f9a97","#347c7a","#1a2737","#c4504c","#ed8b92"] },
    { name: "Monochrome Magic",      colors: ["#595342","#789890","#edd397","#236559","#91b2ac","#000000"] },
    { name: "Crimson Cascade",       colors: ["#ce4a5c","#ce534a","#ce6d4a","#ce874a","#cea24a","#cebc4a"] },
    { name: "Berry Bliss",           colors: ["#800000","#902639","#a04b72","#b070ab","#cb86af","#e59bb3"] },
    { name: "Golden Harvest",        colors: ["#f8eace","#ffca58","#f3b31c","#cf7c23","#b76216","#854b18"] },
    { name: "Urban Contrast",        colors: ["#222831","#31363f","#393e46","#ff5353","#ffd369","#eeeeee"] },
    { name: "Forest Floor",          colors: ["#395c63","#416260","#48695c","#506f59","#587556","#607c52"] },
    { name: "Deep Ocean",            colors: ["#180b2b","#181834","#19243c","#193044","#1a3d4c","#1a4954"] },
    { name: "Autumn Leaves",         colors: ["#eddfcb","#c99e85","#a65d62","#8e324b","#750633","#580527"] },
    { name: "Azure Dream",           colors: ["#95c11f","#009a93","#f39200","#e50051","#f783ea","#0069b4"] }

];

const colorPalettes3 = [ // Pastel 12
    { name: "Aqua Breeze",           colors: ["#d6e6ff","#d7f9f8","#ffffea","#fff0d4","#fbe0e0","#e5d4ef"] },
    { name: "Ocean Sunset",          colors: ["#085578","#538085","#faf1e2","#e3baaa","#e47e8c","#ffaa6a"] },
    { name: "Soothing Waters",       colors: ["#809bce","#95b8d1","#b8e0d4","#d6eadf","#eac4d5","#f5e2ea"] },
    { name: "Electric Spectrum",     colors: ["#d100ff","#ff12ba","#f9537b","#f28b71","#f0cfa1","#f3f3cc"] },
    { name: "Fairy Dust",            colors: ["#ffb4f5","#ffc2ed","#ffd1e5","#ffdfdd","#ffedd5","#fffbcd"] },
    { name: "Rose Quartz",           colors: ["#fe7b88","#e49ca5","#cabcc3","#afdde0","#d9d9d9","#ffffff"] },
    { name: "Pastel Dreams",         colors: ["#ffffb3","#ffdfcc","#ccffdf","#ffc2c2","#ffe6f9","#e6f9ff"] },
    { name: "Tranquil Seas",         colors: ["#809bce","#95b8d1","#b8e0d4","#beedd3","#c39de0","#c584fe"] },
    { name: "Ocean Depths",          colors: ["#404e67","#809bce","#95b8d1","#b8e0d4","#d6eadf","#ebf5ef"] },
    { name: "Whispering Winds",      colors: ["#ffdfff","#f5daff","#ebd5ff","#e1d0ff","#d7cbff","#cec6ff"] },
    { name: "Soft Petals",           colors: ["#fdfed6","#ffccd8","#aee0d1","#c9f4e1","#def8e9","#f6ecbf"] },
    { name: "Cotton Candy",          colors: ["#e1c4ce","#d7cfcc","#efe7ba","#f2e7aa","#fadcb1","#f3c0be"] },
    { name: "Sunny Meadows",         colors: ["#ee9d93","#efd28c","#dcee9c","#9feda4","#819af5","#d09cf2"] }

];

const colorPalettes4 = [ // Monocolor 16
    { name: "Calm Waters",           colors: ["#5986a8","#769db1","#92b4b9","#9fc8cc","#acdbdf","#d7eaea"] },
    { name: "Monochrome Elegance",   colors: ["#e1e4e8","#bac0c6","#939ca3","#646f77","#33383e","#010105"] },
    { name: "Forest Greens",         colors: ["#1a2416","#394f2f","#577948","#76a461","#94ce7a","#b3f993"] },
    { name: "Lavender Fields",       colors: ["#d875ff","#cb63e9","#be51d4","#b240bf","#a52eaa","#991d95"] },
    { name: "Ocean Blues",           colors: ["#c6e0f5","#74befa","#229cff","#016ac5","#014f9b","#013470"] },
    { name: "Earthy Tones",          colors: ["#a1c764","#97b961","#8eab5e","#849e5b","#7b9058","#718355"] },
    { name: "Purple Twilight",       colors: ["#130e14","#392b3f","#604869","#876494","#ad81be","#d49ee9"] },
    { name: "Spring Greens",         colors: ["#e9f5db","#cfe1b9","#b5c99a","#97a97c","#87986a","#718355"] },
    { name: "Vintage Rose",          colors: ["#221710","#3c2a29","#543e41","#6f5059","#886472","#a3778c"] },
    { name: "Blush Pink",            colors: ["#ffe5ec","#ffc2d1","#ffb3c6","#ff8fab","#fb6f92","#7e3849"] },
    { name: "Shades of Grey",        colors: ["#7c766c","#3e3b36","#1f1e1b","#100f0e","#080807","#040404"] },
    { name: "Garden Greens",         colors: ["#11150d","#314026","#526a40","#739559","#94bf73","#b5ea8c"] },
    { name: "Night Sky",             colors: ["#0d0a1c","#201a47","#332971","#46399c","#5948c6","#6c58f1"] },
    { name: "Sunny Yellow",          colors: ["#ffd52e","#ffdc5a","#ffe27e","#ffe99f","#fff0bf","#fff8df"] },
    { name: "Red Passion",           colors: ["#f9e5e5","#ffaaaa","#d46a6a","#aa3939","#550000","#190909"] },
    { name: "Teal Breeze",           colors: ["#082a22","#105544","#188066","#20aa87","#28d4a9","#30ffcb"] },
    { name: "Mint Fresh",            colors: ["#d1fff0","#a8ffe4","#15f0d3","#00bba3","#0bab98","#289c8c"] }

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
let lastClickTime = 0;
let lastChange;
const debounceTime = 200; // milliseconds

// Previous script properties for change detection
let prevUsePalettes1 = scriptProperties.usePalettes1;
let prevUsePalettes2 = scriptProperties.usePalettes2;
let prevUsePalettes3 = scriptProperties.usePalettes3;
let prevUsePalettes4 = scriptProperties.usePalettes4;

// Function to convert hex to Vec3
const hexToVec3 = hex => {
    const bigint = parseInt(hex.slice(1), 16);
    return new Vec3(((bigint >> 16) & 255) / 255, ((bigint >> 8) & 255) / 255, (bigint & 255) / 255);
};

// Function to initialize active palettes based on user selection
const initializeActivePalettes = () => {
    activePalettes.length = 0; // Clear the array

    scriptProperties.usePalettes1 && activePalettes.push(...colorPalettes1);
    scriptProperties.usePalettes2 && activePalettes.push(...colorPalettes2);
    scriptProperties.usePalettes3 && activePalettes.push(...colorPalettes3);
    scriptProperties.usePalettes4 && activePalettes.push(...colorPalettes4);

    if (!activePalettes.length) {
        console.log("No color palettes are enabled.");
    }
};

// Function to refresh active palettes based on user selection
const refreshActivePalettes = () => {
    initializeActivePalettes();
    pickNewPalette(currentPaletteIndex);
};

// Function to set shared palette colors, log the palette, and update shared value
const setSharedPaletteColors = palette => {
    const colorVecs = palette.colors.map(hexToVec3);
    shared.paletteColor1 = colorVecs[0];
    shared.paletteColor2 = colorVecs[1];
    shared.paletteColor3 = colorVecs[2];
    shared.paletteColor4 = colorVecs[3];
    shared.paletteColor5 = colorVecs[4];
    shared.paletteColor6 = colorVecs[5];
    shared.paletteName = palette.name;
    console.log("Current palette:", palette.name);
};

// Function to pick a new palette and update shared values
const pickNewPalette = (index = null) => {
    if (!activePalettes.length) {
        console.log("No color palettes are enabled.");
        return;
    }

    const palette = (index !== null && index < activePalettes.length)
        ? activePalettes[index]
        : activePalettes[Math.floor(Math.random() * activePalettes.length)];

    setSharedPaletteColors(palette);
    currentPaletteIndex = (index !== null) ? index : activePalettes.indexOf(palette);

    // Save the palette to local storage
        localStorage.set('lastPalette', JSON.stringify(palette));
        localStorage.set('lastPaletteIndex', currentPaletteIndex);
        console.log("Palette saved to local storage.");
};

function shouldChangePalette() {
    const currentDate = new Date();
    let nextChange, newTimespanType;

    if (scriptProperties.timespanDays) { // Set nextChange based on days
        newTimespanType = 1;
        lastChange.setHours(0, 0, 0, 0); // Reset to start of the day
        nextChange = new Date(lastChange.getTime() + 8.64e7 * scriptProperties.changeTimespan);
    } else if (scriptProperties.timespanHours) { // Set nextChange based on hours
        newTimespanType = 2;
        lastChange.setMinutes(0, 0, 0); // Reset to start of the hour
        nextChange = new Date(lastChange.getTime() + 3.6e6 * scriptProperties.changeTimespan);
    } else if (scriptProperties.timespanMins) { // Set nextChange based on minutes
        newTimespanType = 3;
        lastChange.setSeconds(0, 0); // Reset to start of the minute
        nextChange = new Date(lastChange.getTime() + 6e4 * scriptProperties.changeTimespan);
    }

    if ((currentDate > nextChange && scriptProperties.changeTimespan > 0) || localStorage.get("timespanType") != newTimespanType) {
    localStorage.set("timespanType", newTimespanType);
        lastChange = currentDate;
        localStorage.set("lastChange", lastChange.toISOString());
        return true;
    }
    return false;
}

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

    // Auto-change palette based on selected mode
    if (shouldChangePalette()) {
        currentPaletteIndex = (currentPaletteIndex + 1) % activePalettes.length;
        pickNewPalette(currentPaletteIndex);
    }
}

export function cursorClick(event) {
    // Ignore clicks if this layer is not visible or debounce time has not passed
    const currentTime = Date.now();
    if (!thisLayer.visible || currentTime - lastClickTime < debounceTime) {
        return;
    }

    lastClickTime = currentTime;

    // Pick the next palette on click
    currentPaletteIndex = (currentPaletteIndex + 1) % activePalettes.length;
    pickNewPalette(currentPaletteIndex);
}

export function init(value) {
    const currentDate = new Date();
    lastChange = localStorage.get("lastChange") ? new Date(localStorage.get("lastChange")) : currentDate;
    
    // Initialize active palettes but do not pick one yet
    initializeActivePalettes();

    // Attempt to load the palette from storage
    const loadedSuccessfully = loadPaletteFromStorage();

    // Only pick a new palette if loading from storage failed
    if (!loadedSuccessfully) {
        pickNewPalette();
    } else {
        console.log("Loaded palette from storage successfully.");
    }

    // Validate settings after ensuring palette is loaded
    validateAutoChangeSettings();

    return value;
}

function loadPaletteFromStorage() {
    const savedPalette = localStorage.get('lastPalette', 'LOCATION_GLOBAL');
    const savedPaletteIndex = localStorage.get('lastPaletteIndex', 'LOCATION_GLOBAL');

    if (savedPalette && savedPaletteIndex !== null) {
        try {
            const palette = JSON.parse(savedPalette);
            setSharedPaletteColors(palette);
            currentPaletteIndex = parseInt(savedPaletteIndex, 10);
            console.log("Palette loaded:", palette.name);
            return true;
        } catch (error) {
            console.error("Error parsing saved palette:", error);
        }
    }
    return false;
}