'use strict';

import * as WEColor from 'WEColor';

// 72 Color Palettes
const colorPalettes1 = [ //Bright 22
    { name: "Skyline",                colors: ["#e8eef1","#43b0f1","#057dcd","#1e3d58"] },
    { name: "CMYK",         	      colors: ["#00aeef","#ed008c","#fff000","#000000"] },
    { name: "Sunny Day",              colors: ["#fff89a","#ffc920","#086e7d","#1a5f7a"] },
    { name: "Ocean Breeze",           colors: ["#053363","#175b91","#40b0bf","#fcb735"] },
    { name: "Peach Fuzz",             colors: ["#faebe6","#fcd4cd","#febdb3","#ffd500"] },
    { name: "Spring Meadow",          colors: ["#aec97e","#ebdf5e","#ffb81d","#73b7d9"] },
    { name: "Blush",                  colors: ["#e87a8b","#fafafa","#acdbdf","#ed6d7e"] },
    { name: "Forest Shade",           colors: ["#09330d","#9cbda1","#c7cfb7","#f7f7e8"] },
    { name: "Sunset Glow",            colors: ["#ea5c2d","#ff7f3f","#f6d862","#95cd41"] },
    { name: "Bold Flair",             colors: ["#f71010","#0f045e","#ffe100","#0b9439"] },
    { name: "Tropical Vibes",         colors: ["#00ead3","#fff5b7","#ff449f","#005f99"] },
    { name: "Fiesta",                 colors: ["#02a5ff","#ff3300","#66cc33","#ffcc00"] },
    { name: "Spring Bloom",           colors: ["#ffbb3c","#91c740","#85b3f7","#e34599"] },
    { name: "Coastal Sun",            colors: ["#2998ba","#eddea1","#f1c40f","#e67e22"] },
    { name: "Teal Twist",             colors: ["#153462","#11bfae","#dae1e7","#ffffff"] },
    { name: "Desert Rose",            colors: ["#c7522a","#e5c185","#fbf2c4","#00a3a3"] },
    { name: "Summer Sizzle",          colors: ["#005aab","#8dc63f","#eee15d","#e7cb4c"] },
    { name: "Earthy Tones",           colors: ["#e6dccf","#7fca8c","#8daf6d","#e68373"] },
    { name: "Coral Reef",             colors: ["#f5a17b","#f9c6af","#b2ffff","#0a5e84"] },
    { name: "Electric Sunset",        colors: ["#3330e4","#f637ec","#fbb454","#faea48"] },
    { name: "Lavender Dream",         colors: ["#65518a","#c7b1db","#e8dbe8","#f097d5"] },
    { name: "Nature's Palette",       colors: ["#63bce5","#8ad35d","#187204","#f4f756"] },
    { name: "Neon Garden",            colors: ["#540bde","#2ceaba","#ff8d76","#ebff00"] }
];

const colorPalettes2 = [ //Dark 21
    { name: "Vintage Charm",          colors: ["#d9d0b4","#7d6b57","#879e82","#666b5e"] },
    { name: "Serene Forest",          colors: ["#f1ddbf","#525e75","#78938a","#92ba92"] },
    { name: "Nightfall",              colors: ["#251d3a","#2a2550","#e04d01","#ff7700"] },
    { name: "Midnight",               colors: ["#070511","#1b1244","#302077","#e6ffbf"] },
    { name: "Regal Sunset",           colors: ["#bb382c","#dcba1d","#256e35","#242424"] },
    { name: "Rustic Charm",           colors: ["#ffce96","#de8042","#5d9b84","#5d455e"] },
    { name: "Harvest Sun",            colors: ["#3c7f72","#992800","#d34a24","#ffaf00"] },
    { name: "Dark Elegance",          colors: ["#cc0000","#000000","#282828","#464646"] },
    { name: "Autumn Sky",             colors: ["#c86b2d","#fbeebf","#6c8495","#465c73"] },
    { name: "Urban Sunset",           colors: ["#293f58","#ea6b22","#f99f20","#d9d9d9"] },
    { name: "Crimson Blaze",          colors: ["#d48b33","#d15528","#ca252d","#89141f"] },
    { name: "Deep Sea",               colors: ["#ba0944","#ffc920","#086e7d","#003865"] },
    { name: "Woodland",               colors: ["#edeae0","#594c42","#554941","#7d544a"] },
    { name: "Gold Leaf",              colors: ["#131610","#033431","#b8860b","#fdf4dc"] },
    { name: "Autumn Leaves",          colors: ["#fd5a1e","#27251f","#efd19f","#ae8f6f"] },
    { name: "Warm Earth",             colors: ["#755e38","#b59157","#f4c475","#352b19"] },
    { name: "Mossy Stone",            colors: ["#434f45","#495948","#656e58","#899175"] },
    { name: "Royal Gem",              colors: ["#770018","#00775f","#5f0077","#f5bd02"] },
    { name: "Night Shade",            colors: ["#1e1f28","#44465b","#696e8e","#353747"] },
    { name: "Bronze Gleam",           colors: ["#87481c","#948429","#d68324","#ab1a48"] },
    { name: "Maple Wood",             colors: ["#a18c69","#edebd1","#46291a","#4b442b"] },
    { name: "Rose Gold",              colors: ["#e2416f","#e26869","#e29063","#e2b75d"] }
];

const colorPalettes3 = [ // Pastel 18
    { name: "Pastel Dreams",          colors: ["#f2a0b3","#f3d3a6","#d8e6bc","#a1d7ef"] },
    { name: "Soft Sunset",            colors: ["#ff9999","#ffcc99","#ccffff","#99ccff"] },
    { name: "Desert Sand",            colors: ["#cc9b6d","#f1ca89","#f2dac3","#c8c2bc"] },
    { name: "Forest Breeze",          colors: ["#557174","#9dad7f","#c7cfb7","#f7f7e8"] },
    { name: "Soft Linen",             colors: ["#ffeeee","#fff6ea","#f7e9d7","#ebd8c3"] },
    { name: "Blush Petal",            colors: ["#fff6e6","#ffddd6","#efc4d6","#c6b6d6"] },
    { name: "Seashell",               colors: ["#ef7c8e","#fae8e0","#b6e2d3","#d8a7b1"] },
    { name: "Aqua Dream",             colors: ["#88a4c9","#bbe6dd","#ff8696","#fde8b2"] },
    { name: "Cool Blue",              colors: ["#dfe2fe","#b1cbfa","#8e98f5","#7971ea"] },
    { name: "Vintage Rose",           colors: ["#e3bec6","#efdad7","#9ad0ec","#1572a1"] },
    { name: "Cloudy Day",             colors: ["#daeaf1","#c6dce4","#ffe6e6","#f2d1d1"] },
    { name: "Sunny Breeze",           colors: ["#f9f3df","#fdfce5","#d7e9f7","#f4d19b"] },
    { name: "Lavender Fields",        colors: ["#ced2f5","#b1cbfa","#9ca6fa","#8a85ed"] },
    { name: "Fairy Garden",           colors: ["#e1bef7","#efffcc","#ccffe2","#ffcce9"] },
    { name: "Soft Sunlight",          colors: ["#fffbe8","#f9f3df","#ffebfc","#82967e"] },
    { name: "Candy Floss",            colors: ["#f5d4bb","#93f2c1","#c2a7f9","#f8bafc"] },
    { name: "Spring Pastels",         colors: ["#b4ff9f","#f9ffa4","#ffd59e","#ffa1a1"] },
    { name: "Bright Spring",          colors: ["#ff9999","#ccff99","#99ffff","#cc99ff"] },
    { name: "Gentle Breeze",          colors: ["#d0e0f7","#dfd5f0","#ffffff","#ffd9e2"] }
];

const colorPalettes4 = [ // Monocolor 10
    { name: "Dusky Rose",             colors: ["#2d1f23","#60434b","#936773","#c68a9a"] },
    { name: "Blushing Pink",          colors: ["#fcedf2","#ffd1d4","#ffb7c5","#ffa0c5"] },
    { name: "Emerald Forest",         colors: ["#1e5631","#2e7d32","#4caf50","#c8e6c9"] },
    { name: "Warm Neutral",           colors: ["#aba4a1","#ac9f9a","#ad9a93","#a68d86"] },
    { name: "Ice Blue",               colors: ["#a9c9e2","#cfe7f3","#e6f5fb","#f4fafd"] },
    { name: "Olive Garden",           colors: ["#434f45","#495948","#656e58","#899175"] },
    { name: "Peach Blossom",          colors: ["#fdf6f3","#feeee9","#ffe5df","#f5d3cb"] },
    { name: "Green Meadow",           colors: ["#054213","#256e35","#51a16a","#acd1af"] },
    { name: "Deep Ocean",             colors: ["#003b46","#07575b","#66a5ad","#c4dfe6"] },
    { name: "Blue Lagoon",            colors: ["#344a9c","#306bb3","#2c8aca","#28aae1"] },
    { name: "Sapphire Sky",           colors: ["#132c54","#536583","#929db0","#d0d5dd"] }
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