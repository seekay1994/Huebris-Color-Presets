'use strict';

import * as WEColor from 'WEColor';

// 54 Color Palettes
const colorPalettes1 = [ //Bright 14
{ name: "Passion Purple",        colors: ["#900c3f","#182b55","#5f4e94","#a291c7","#82cbec","#d94f21","#febd2b","#9aab4b"] },
{ name: "Autumn Harvest",        colors: ["#c7522a","#e5c185","#f0daa5","#fbf2c4","#b8cdab","#74a892","#008585","#004343"] },
{ name: "Spiced Pumpkin",        colors: ["#993f00","#c67e30","#f1bd58","#f9e098","#eef2d8","#ccedf0","#7cbfc6","#00929c"] },
{ name: "Rustic Charm",          colors: ["#642915","#c7522a","#db836b","#e0a278","#e5c185","#fbf2c4","#74a892","#008585"] },
{ name: "Berry Burst",           colors: ["#6f1926","#de324c","#f4895f","#f8e16f","#95cf92","#369acc","#9656a2","#cbabd1"] },
{ name: "Candy Crush",           colors: ["#fb7b77","#fdc170","#f3f87f","#98f786","#69ebfc","#6d9efc","#937df8","#f78ef0"] },
{ name: "Pink Dream",            colors: ["#fa873f","#f46f5e","#ee577e","#e73f9d","#e127bd","#f093de","#3cd19d","#f7efec"] },
{ name: "Ocean Sunset",          colors: ["#003b5c","#0057e5","#41b6e6","#3ea908","#f0cc2e","#ec894d","#e50000","#e641b6"] },
{ name: "Vintage Autumn",        colors: ["#c7522a","#e5c185","#fbf2c4","#e5c185","#74a892","#008585","#004a4a","#719999"] },
{ name: "Bold Statement",        colors: ["#00aeef","#7757be","#ed008c","#f23c69","#f67846","#fff000","#807800","#000000"] },
{ name: "Sunset Horizon",        colors: ["#2d8282","#fcdd28","#faba2a","#f7982d","#f57630","#f25332","#f03135","#ed0e38"] },
{ name: "Cool Breeze",           colors: ["#10b6d3","#46bfca","#65c7c0","#7ed0b6","#96d7aa","#acdf9d","#c1e68d","#d6ed7b"] },
{ name: "Tropical Punch",        colors: ["#f27222","#ff9b44","#ffd362","#ffea63","#fff082","#82fff5","#66e8ff","#59cdff"] },
{ name: "Forest Retreat",        colors: ["#86c4ab","#6c9988","#43826a","#1a6b4c","#edc08f","#dd9c6b","#da8a4b","#d6772a"] },
{ name: "Sunrise Glow",          colors: ["#ff50ab","#ff6b81","#ff796c","#ffa12b","#ffae16","#ffbb00","#caba03","#94b806"] }
];

const colorPalettes2 = [ //Dark 18
{ name: "Deep Waters",           colors: ["#143642","#126168","#0f8b8d","#7e935b","#ec9a29","#a8201a","#681261","#bf318b"] },
{ name: "Autumn Woods",          colors: ["#211e1a","#36230c","#2e3b04","#596a4c","#849894","#b3beb8","#d7c4a6","#ebe2d3"] },
{ name: "Vintage Chic",          colors: ["#b39888","#060608","#545568","#74707e","#52494a","#292c3b","#383d4f","#866c5f"] },
{ name: "Dusky Skies",           colors: ["#3463a3","#3a5c8f","#40557c","#464f69","#4c4856","#514143","#573b30","#5d341d"] },
{ name: "Enchanted Forest",      colors: ["#1e4a28","#51a16a","#77ab75","#9cb57f","#c45335","#c86739","#cc7a3d","#e6c994"] },
{ name: "Mountain Mist",         colors: ["#043477","#244b76","#446375","#637a74","#839173","#a3a972","#c3c071","#e3d770"] },
{ name: "Midnight Elegance",     colors: ["#000000","#32150b","#642915","#c7522a","#e5c185","#fbf2c4","#74a892","#008585"] },
{ name: "Mystic Night",          colors: ["#6f1938","#65153c","#5a1240","#500e45","#460b49","#3b074d","#310451","#270056"] },
{ name: "Warm Ember",            colors: ["#ffebd2","#ffc79b","#ffa364","#fc7643","#af4f41","#8d4843","#6b4145","#273248"] },
{ name: "Crimson Velvet",        colors: ["#a12d48","#93344b","#85394e","#763d50","#673f53","#584155","#484157","#364158"] },
{ name: "Woodland Escape",       colors: ["#715660","#846470","#566071","#727f96","#c39f72","#d5bf95","#667762","#879e82"] },
{ name: "Sunset Boulevard",      colors: ["#003f5c","#58508d","#8a508f","#bc5090","#de5a79","#ff6361","#ff8531","#ffa600"] },
{ name: "Rustic Charm",          colors: ["#5c4839","#b88f72","#a67224","#976828","#875e2b","#78522a","#694628","#523324"] },
{ name: "Desert Rose",           colors: ["#562c29","#ab5852","#cb9979","#eadaa0","#d69e49","#838469","#657268","#476066"] },
{ name: "Electric Blue",         colors: ["#08d1ca","#19b6cc","#2b9bce","#3c80d0","#4e66d2","#5f4bd4","#7030d6","#8215d8"] },
{ name: "Sunset Glow",           colors: ["#f0b6ad","#dc8864","#ba4848","#c75a1b","#f7c435","#818b2e","#0b5227","#85a993"] },
{ name: "Ocean Depths",          colors: ["#023641","#034452","#035162","#036b82","#528279","#8e9373","#a19870","#cfd4b8"] },
{ name: "Fiery Passion",         colors: ["#610303","#890f0d","#ad4012","#d17016","#c28c1d","#b3a723","#289e8e","#212020"] },
{ name: "Warm Sands",            colors: ["#440834","#871067","#a54983","#c3819e","#e1bab9","#fff2d4","#b5b9a7","#6a8079"] }
];

const colorPalettes3 = [ // Pastel 11
{ name: "Cotton Candy",          colors: ["#ffadad","#ffd6a5","#fdffb6","#caffbf","#9bf6ff","#a0c4ff","#bdb2ff","#ffc6ff"] },
{ name: "Rose Petal",            colors: ["#c45161","#e094a0","#f2b6c0","#f2dde1","#cbc7d8","#8db7d2","#5e62a9","#434279"] },
{ name: "Lavender Dreams",       colors: ["#c9989c","#d5b4b6","#dcc1c3","#dcd1d1","#cbc8ce","#b2c1cd","#9f9ebd","#9592aa"] },
{ name: "Blush Bouquet",         colors: ["#e4aeb4","#f1cdd2","#f9dcdf","#f9eeef","#e7e4eb","#cadce9","#b5b6d7","#a9a7c1"] },
{ name: "Lemon Sorbet",          colors: ["#f9f0a7","#f9bfa7","#f9cfa7","#f9e0a7","#f9f0a7","#f2f9a7","#e1f9a7","#d1f9a7"] },
{ name: "Serene Sky",            colors: ["#809bce","#8baad0","#95b8d1","#a7ccd3","#b8e0d4","#e0d7da","#d7dae0","#eac4d5"] },
{ name: "Garden Party",          colors: ["#896aa8","#6e8f60","#d8c16b","#c7bd9b","#e6d9d5","#edebe2","#ebeff2","#f5f7f9"] },
{ name: "Lavender Fields",       colors: ["#ffc3fe","#f3bffd","#e8bcfc","#dcb8fb","#d1b5fa","#c5b1f9","#b9aef8","#aeaaf7"] },
{ name: "Soft Pastels",          colors: ["#ffafad","#ffd6a5","#fcfeb6","#cafebf","#9df3fd","#a2c3fd","#bfb3fd","#ffc7fc"] },
{ name: "Whispering Winds",      colors: ["#d6e6ff","#d7f9f8","#ffffea","#fff0d4","#fbe0e0","#e5d4ef","#f2eaf7","#f9f5fb"] },
{ name: "Spring Blossom",        colors: ["#ff83f7","#fd96e5","#fca7d4","#fab9c2","#f9cab1","#f7dca0","#f6ed8f","#f4ff7e"] },
{ name: "Mint Dreams",           colors: ["#d1ffb3","#d7f8be","#ddf1c8","#e2e9d3","#e8e2de","#eedbe9","#f4d4f3","#facdfe"] }
];

const colorPalettes4 = [ // Monocolor 11
{ name: "Spring Meadow",         colors: ["#191e0c","#343e19","#4f5d26","#6a7d33","#849d40","#9fbd4d","#badd5a","#d5fd67"] },
{ name: "Golden Sunrise",        colors: ["#f5f0df","#f3e4bf","#f1d9a1","#efce82","#eec364","#ecb846","#eaad28","#e8a20a"] },
{ name: "Blue Lagoon",           colors: ["#e8eef1","#bfddf1","#abd7f1","#96cff1","#6dc0f1","#43b0f1","#057dcd","#1e3d58"] },
{ name: "Shades of Grey",        colors: ["#ffffff","#dddede","#bebfbe","#9f9f9f","#7f8080","#606161","#404241","#212322"] },
{ name: "Blue Horizon",          colors: ["#03045e","#262d79","#475492","#677bab","#89a0c7","#a9bfd6","#bcd6e6","#d4f5fa"] },
{ name: "Harvest Gold",          colors: ["#f5f0df","#ede0bd","#e6d09e","#dfc17e","#d8b25f","#d0a33f","#c99320","#c28400"] },
{ name: "Deep Blue Sea",         colors: ["#010440","#02054d","#020659","#022766","#024873","#037399","#049dbf","#82cedf"] },
{ name: "Royal Blue",            colors: ["#1d0e2c","#27204a","#303167","#394383","#4254a0","#4c65bc","#5576d9","#5e87f5"] },
{ name: "Soft Blue",             colors: ["#5da4cd","#68aad1","#72b0d4","#86bbda","#aed2e6","#d7e9f3","#ebf4f9","#f5fafc"] },
{ name: "Golden Haze",           colors: ["#fdb913","#fedc89","#ffeec4","#fff7e2","#fffbf1","#fffdf8","#fffefc","#ffffff"] },
{ name: "Lavender Mist",         colors: ["#524a97","#5d569e","#6861a4","#7e78b1","#a9a5cb","#d4d2e5","#eae9f2","#f5f4f9"] },
{ name: "Forest Depths",         colors: ["#002429","#06363a","#0a393d","#123f43","#224c50","#426669","#628082","#81999b"] }
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
    shared.paletteColor7 = colorVecs[6];
    shared.paletteColor8 = colorVecs[7];
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