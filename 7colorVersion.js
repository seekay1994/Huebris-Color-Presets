'use strict';

// 78 Color Palettes
const colorPalettes1 = [ //Bright 26
    { name: "Tropical Splash",      colors: ["#025f61","#04bdc2","#04cfd5","#efeee0","#ffb7a0","#ff9e80","#ff835c"] },
    { name: "Vibrant Garden",       colors: ["#9656a2","#369acc","#95cf92","#f8e16f","#f4895f","#de324c","#6c584c"] },
    { name: "Fresh Greens",         colors: ["#5796f3","#5eb3d5","#62c0c7","#66cfb5","#6ae49e","#6ceb97","#70fe80"] },
    { name: "Bold Spectrum",        colors: ["#e51010","#ff6600","#fc4589","#fffc5d","#4adeaf","#00b2ff","#420e87"] },
    { name: "Cosmic Fusion",        colors: ["#181e21","#921394","#ff3087","#ff6193","#fc7e43","#ffd92f","#459ed9"] },
    { name: "Rustic Charm",         colors: ["#434d4b","#78a19b","#b59ecc","#c2d6d3","#e3a566","#d15839","#bf0b0b"] },
    { name: "Blush Harmony",        colors: ["#de656e","#d05f84","#c15999","#b352af","#a54cc4","#d2a6e2","#e2d2a6"] },
    { name: "Pastel Delight",       colors: ["#c1f4d1","#bda3ea","#ed76be","#ffe787","#cc71d4","#e65ca6","#a2e7f0"] },
    { name: "Lime Burst",           colors: ["#ff0000","#ff7a00","#ffb700","#fff400","#cbe600","#96d700","#2cba00"] },
    { name: "Nature Tones",         colors: ["#ebe9be","#e7e7bd","#e3e5bb","#dae0b8","#b8cdab","#74a892","#008585"] },
    { name: "Warm Breeze",          colors: ["#f4895f","#f6b567","#f8e16f","#95cf92","#66b5af","#369acc","#9656a2"] },
    { name: "Desert Oasis",         colors: ["#e5c185","#f0daa5","#fbf2c4","#dae0b8","#b8cdab","#74a892","#3a978c"] },
    { name: "Sandstone",            colors: ["#c7522a","#d68a58","#e5c185","#fbf2c4","#74a892","#3a978c","#008585"] },
    { name: "Vibrant Twilight",     colors: ["#ec111a","#fb6330","#ffd42f","#138468","#009dd6","#7849b8","#f2609e"] },
    { name: "Peachy Bliss",         colors: ["#7add87","#b5e6b4","#d2eaca","#efeee0","#f2b7d0","#f480c0","#f911a0"] },
    { name: "Sunset Lagoon",        colors: ["#00323a","#0d9937","#eddfc9","#f6bf1d","#26cdd6","#1958ea","#cc1d0a"] },
    { name: "Royal Horizon",        colors: ["#011a4d","#255d8d","#499fcd","#86bca4","#c2d87a","#fece52","#feb94a"] },
    { name: "Burnt Sunset",         colors: ["#1b48a0","#2968ba","#65c8d0","#fbf2c4","#e5c185","#c7522a","#642915"] },
    { name: "Cool Waves",           colors: ["#83b7f7","#83f1f7","#83daf7","#83c3f7","#83abf7","#8394f7","#8983f7"] },
    { name: "Sunburst",             colors: ["#ff8531","#ff9619","#feae1a","#fdc61a","#fcde1b","#fbea1b","#faf61b"] },
    { name: "Vibrant Spectrum",     colors: ["#45abff","#61cd9f","#6fde6f","#7cee3e","#a3dc38","#cacb31","#f0ba2b"] },
    { name: "Autumn Harvest",       colors: ["#3b7bc9","#70a9d4","#bd5431","#ff8903","#f7cb44","#7dbf71","#5b9c56"] },
    { name: "Fiery Rose",           colors: ["#c77d41","#c43b3b","#fc5f89","#ff99a8","#d9661f","#e8923a","#f7be54"] },
    { name: "Green Fields",         colors: ["#004027","#007f4e","#389927","#70b300","#96c11e","#c5ca30","#7ff347"] },
    { name: "Fresh Harvest",        colors: ["#f53636","#e66a36","#d69e36","#e1ff8f","#95ef7f","#38b856","#086320"] },
    { name: "Electric Blue",        colors: ["#44aef4","#4fd9f4","#47faec","#3dfac2","#34fa97","#2bfa6e","#2afa49"] },
    { name: "Tropical Punch",       colors: ["#266889","#ff7900","#4e8e0c","#ffe272","#a3ebed","#b48bed","#f26563"] }


];

const colorPalettes2 = [ //Dark 20
    { name: "Rose Gradient",        colors: ["#e2416f","#e2556c","#e26869","#e27c66","#e29063","#e2a460","#e2b75d"] },
    { name: "Oceanic Depths",       colors: ["#0c3547","#10656d","#598f91","#93b071","#ede2cc","#edae93","#dd6670"] },
    { name: "Jewel Tones",          colors: ["#2db1ba","#6387cd","#985de0","#ac6cb0","#c07b80","#d48a50","#e89820"] },
    { name: "Vintage Rouge",        colors: ["#f5d7b0","#d15b56","#c43138","#7ba8a3","#3e909d","#007896","#004e61"] },
    { name: "Sepia Shades",         colors: ["#302320","#634941","#966e63","#c99484","#e4cac2","#f2e5e1","#fcb9a6"] },
    { name: "Retro Vibe",           colors: ["#2c61a1","#f5eddc","#78938a","#0f1c5c","#d2b48c","#8f354b","#000000"] },
    { name: "Earthy Greens",        colors: ["#0e0f09","#383227","#4b5b47","#4f795d","#c9b898","#e4dccc","#f2eee6"] },
    { name: "Midnight Blue",        colors: ["#e8f2ff","#16a1eb","#042943","#0e1e30","#001631","#001024","#000b19"] },
    { name: "Lilac Breeze",         colors: ["#624b6e","#6f597a","#8b7991","#9798ae","#a3b7ca","#7593af","#476f95"] },
    { name: "Pink Hues",            colors: ["#c82370","#b82078","#a71d80","#961a88","#85178f","#751497","#64109f"] },
    { name: "Soft Blush",           colors: ["#fad6e4","#fca8d1","#a66183","#5c2744","#421f34","#2b2a2a","#403b37"] },
    { name: "Muted Tones",          colors: ["#9b898f","#f58aa5","#e46b82","#855569","#514954","#1f3442","#202126"] },
    { name: "Warm Neutrals",        colors: ["#e3d4d4","#d6aec3","#c77a95","#9e4f6b","#d5aba4","#99756f","#69433f"] },
    { name: "Sunset Glow",          colors: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600","#ffd380","#ffe9c0"] },
    { name: "Urban Jungle",         colors: ["#dad2d8","#143642","#0f8b8d","#7e935b","#ec9a29","#a8201a","#526797"] },
    { name: "Fire and Earth",       colors: ["#1a0508","#33090f","#66121d","#892e19","#ab4a15","#cd6611","#ef820d"] },
    { name: "Modern Contrast",      colors: ["#857f83","#143642","#0f8b8d","#7e935b","#ec9a29","#a8201a","#526797"] },
    { name: "Berry Bliss",          colors: ["#007080","#485c71","#8f4762","#84365f","#78245c","#6d1259","#610055"] },
    { name: "Fresh Greens",         colors: ["#69f95e","#5fe067","#56c770","#4cad7a","#429483","#387b8c","#2f6295"] },
    { name: "Warm Meadow",          colors: ["#b02c51","#bdbf8b","#a3ab79","#5bb37e","#46a379","#348769","#434378"] },
    { name: "Purple Haze",          colors: ["#330730","#660e60","#893f71","#ac6f82","#cfa093","#f3d0a4","#f9e8d2"] }
];

const colorPalettes3 = [ // Pastel 17
    { name: "Soft Pastels",         colors: ["#f1ddbf","#e7ced8","#ced8e7","#ddbff1","#525e75","#78938a","#92ba92"] },
    { name: "Petal Pink",           colors: ["#e1a2ee","#e1a2e0","#e1a2d3","#e1a2c5","#e1a2b7","#e1acb3","#e1b9b3"] },
    { name: "Candy Pop",            colors: ["#9ab9ed","#bdf796","#f9ae7f","#ef7c91","#a3a3ff","#c89ff4","#fffcbf"] },
    { name: "Vintage Charm",        colors: ["#fce7c2","#f0deee","#ffdaea","#fd99c4","#e6e9f6","#aabbe0","#396eb0"] },
    { name: "Lavender Fields",      colors: ["#ff97dd","#ef93e2","#df8fe7","#cf8bec","#be87f1","#ae83f7","#9e7efc"] },
    { name: "Springtime",           colors: ["#84bcf9","#c184f9","#bcf984","#f9c184","#f9aa84","#f9b684","#f9d884"] },
    { name: "Mauve Blush",          colors: ["#462d4d","#a8544b","#cc7161","#fbb1ad","#ffebe3","#8ab7d3","#455c6a"] },
    { name: "Candy Floss",          colors: ["#cdb4db","#ffc8dd","#faaac7","#aafadd","#c7faaa","#bee2ff","#a2d2ff"] },
    { name: "Natural Beige",        colors: ["#f1cdb7","#f6e4d1","#b8bda7","#d4b19e","#d4bfa8","#f7f5dd","#f7f5e9"] },
    { name: "Soft Sky",             colors: ["#f3b2e8","#f1b9e7","#e9c4ed","#e2cef3","#dad9f9","#d2e4ff","#cce1ff"] },
    { name: "Garden Path",          colors: ["#7d8d73","#97b18e","#79927c","#a6b08d","#aac1af","#dcd4c1","#f9f5ec"] },
    { name: "Mocha Cream",          colors: ["#d6ccc2","#c4ad91","#bca288","#bb9d7a","#d0b79c","#ecdbcd","#b2aea8"] },
    { name: "Ocean Breeze",         colors: ["#809bce","#8baad0","#95b8d1","#b8e0d4","#d6eadf","#e0d7da","#eac4d5"] },
    { name: "Rainbow Sherbet",      colors: ["#ffadad","#ffd6a5","#fdffb6","#caffbf","#a0c4ff","#bdb2ff","#ffc6ff"] },
    { name: "Pastel Dreams",        colors: ["#ffccd7","#d7a5e9","#9feae7","#bfeeee","#e5fcff","#ffe0bd","#ffe070"] },
    { name: "Rosy Glow",            colors: ["#f6be85","#f2b08e","#eea397","#ea95a0","#e688a9","#e17ab2","#dd6dba"] },
    { name: "Soft Light",           colors: ["#d6e6ff","#d7f9f8","#ffffea","#fff8df","#fff0d4","#fbe0e0","#e5d4ef"] },
    { name: "Pastel Sunset",        colors: ["#e6c2fb","#feccff","#e6e6e6","#fcc6c6","#ffb1b1","#bcddf0","#02257d"] }
];

const colorPalettes4 = [ // Monocolor 15
    { name: "Blue Mist",            colors: ["#edf2fa","#d7e3fc","#ccdbfd","#c1d3fe","#abc4ff","#9fbcff","#93b5ff"] },
    { name: "Forest Meadow",        colors: ["#314026","#526a40","#739559","#94bf73","#b5ea8c","#daf5c6","#edfae3"] },
    { name: "Mint Fresh",           colors: ["#bffff0","#80ffe0","#40d3af","#00a67e","#008f6d","#00785b","#007458"] },
    { name: "Metallic Gray",        colors: ["#0b0f0f","#262a2b","#404345","#5a5d5f","#747679","#8e9093","#a8a9ad"] },
    { name: "Golden Brown",         colors: ["#b36400","#d17500","#ff8f00","#ffc780","#ffd5a0","#ffdcb0","#ffe3bf"] },
    { name: "Greenery",             colors: ["#1f6921","#438746","#66a56b","#6cb673","#8ac390","#aadaaf","#c9f0ce"] },
    { name: "Deep Ocean",           colors: ["#0b0f0f","#093239","#075261","#057388","#0494b0","#02b4d7","#00d5ff"] },
    { name: "Cool Blues",           colors: ["#b8ccd5","#96b1bf","#7395a8","#5e8399","#497189","#375567","#253945"] },
    { name: "Monochrome Shades",    colors: ["#fcfaf5","#d8d6d2","#b4b2af","#817f7d","#4d4c4b","#2d2d2c","#0d0d0d"] },
    { name: "Twilight Blue",        colors: ["#d1dbe4","#a3b7ca","#7593af","#476f95","#2a4a69","#2f4560","#334056"] },
    { name: "Aqua Breeze",          colors: ["#005241","#007b61","#00a481","#62c8b2","#93dacb","#c3ece3","#e1f6f1"] },
    { name: "Midnight Sky",         colors: ["#022034","#033f67","#045e9a","#057dcd","#449eda","#82bee6","#c1dff3"] },
    { name: "Frosty Blues",         colors: ["#155784","#3e749a","#6590ae","#8bacc2","#b2c8d6","#d8e3eb","#ffffff"] },
    { name: "Skyline",              colors: ["#e8eef1","#96cff1","#43b0f1","#057dcd","#056cb4","#053766","#040413"] },
    { name: "Autumn Hues",          colors: ["#180d0a","#3c2019","#613427","#854836","#aa5b45","#ce6f54","#f28363"] },
    { name: "Rustic Beige",         colors: ["#e3dcd2","#d6ccba","#baab92","#a3937b","#95846c","#87755c","#443b2e"] }

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
