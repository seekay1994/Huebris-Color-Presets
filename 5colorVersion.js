'use strict';

import * as WEColor from 'WEColor';

// 125 Color Palettes
const colorPalettes1 = [ //Bright           | 34
    { name: "August",               colors: ["#C05746", "#ADC698", "#D0E3C4", "#FFFFFF", "#503047"] },
    { name: "Warm Drop",            colors: ["#F7F052", "#F28123", "#D34E24", "#563F1B", "#38726C"] },
    { name: "Last Summer",          colors: ["#2364AA", "#3DA5D9", "#73BFB8", "#FEC601", "#EA7317"] },
    { name: "Kontrast",             colors: ["#540D6E", "#EE4266", "#FFD23F", "#F3FCF0", "#1F271B"] },
    { name: "Soft Flames",          colors: ["#F1E8B8", "#F9E784", "#E58F65", "#D05353", "#191919"] },
    { name: "Gentle",               colors: ["#861657", "#A64253", "#D56AA0", "#BBDBB4", "#FCF0CC"] },
    { name: "Blooming",             colors: ["#114B5F", "#456990", "#E4FDE1", "#F45B69", "#6B2737"] },
    { name: "Marley",               colors: ["#FB6107", "#F3DE2C", "#7CB518", "#5C8001", "#FBB02D"] },
    { name: "Restless",             colors: ["#EC0B43", "#58355E", "#7AE7C7", "#D6FFB7", "#FFF689"] },
    { name: "Atomic",               colors: ["#1B998B", "#ED217C", "#2D3047", "#FFFD82", "#FF9B71"] },
    { name: "Galactic",             colors: ["#E5F9E0", "#A3F7B5", "#40C9A2", "#2F9C95", "#664147"] },
    { name: "Visualdon",            colors: ["#eeaf61", "#fb9062", "#ee5d6c", "#ce4993", "#6a0d83"] },
    { name: "Sunny Day",            colors: ["#086788", "#07A0C3", "#F0C808", "#FFF1D0", "#DD1C1A"] },
    { name: "Plasma",               colors: ["#DFBBB1", "#F56476", "#E43F6F", "#BE3E82", "#5E4352"] },
    { name: "Herbstregen",          colors: ["#19454b", "#945941", "#c28c5e", "#f0e1ce", "#f9f4ed"] },
    { name: "Rainow Dash",          colors: ["#ee4035", "#f37736", "#fdf498", "#7bc043", "#0392cf"] },
    { name: "Insta",                colors: ["#feda75", "#fa7e1e", "#d62976", "#962fbf", "#4f5bd5"] },
    { name: "Beach",                colors: ["#96ceb4", "#ffeead", "#ff6f69", "#ffcc5c", "#88d8b0"] },
    { name: "Peachy",               colors: ["#ffcdb2", "#ff9b8e", "#ff7477", "#ff4d6d", "#ff2664"] },
    { name: "Zuckerwatte",          colors: ["#afd7d9", "#d7c8c5", "#f2a4a0", "#f87a7b", "#2b97a4"] },
    { name: "Lavendel",             colors: ["#4f1e4b", "#864d82", "#caacc4", "#e7e2de", "#dfccc5"] },
    { name: "Polaroid",             colors: ["#003049", "#d62828", "#f77f00", "#fcbf49", "#eae2b7"] },
    { name: "Flowerfield",          colors: ["#386641", "#6a994e", "#a7c957", "#f2e8cf", "#bc4749"] },
    { name: "Ice Cream",            colors: ["#ff9f1c", "#ffbf69", "#ffffff", "#cbf3f0", "#2ec4b6"] },
    { name: "Sommerabend",          colors: ["#ffcdb2", "#ffb4a2", "#e5989b", "#b5838d", "#6d6875"] },
    { name: "Morgensonne",          colors: ["#f6bd60", "#f7ede2", "#f5cac3", "#84a59d", "#f28482"] },
    { name: "Magnolia",             colors: ["#233d4d", "#fe7f2d", "#fcca46", "#a1c181", "#619b8a"] },
    { name: "Lila Wolken",          colors: ["#6f2dbd", "#a663cc", "#b298dc", "#b8d0eb", "#b9faf8"] },
    { name: "Purple Rain",          colors: ["#f4effa", "#2f184b", "#532b88", "#9b72cf", "#c8b1e4"] },
    { name: "Erdig",                colors: ["#cbe896", "#aac0aa", "#fcdfa6", "#a18276", "#f4b886"] },
    { name: "Playground",           colors: ["#EF476F", "#FFD166", "#06D6A0", "#118AB2", "#073B4C"] },
    { name: "Berries",              colors: ["#822E81", "#AA6373", "#F0F2A6", "#392061", "#1A1B25"] },
    { name: "Headlights",           colors: ["#273043", "#9197AE", "#EFF6EE", "#F02D3A", "#DD0426"] },
    { name: "Green Tea",            colors: ["#DADDD8", "#C7D59F", "#B7CE63", "#8FB339", "#4B5842"] },
    { name: "Sonnenkind",           colors: ["#EFECCA", "#A9CBB7", "#F7FF58", "#FF934F", "#5E565A"] }
];

const colorPalettes2 = [ //Dark             | 31
    { name: "Cyan Nights",          colors: ["#070707", "#553555", "#755B69", "#96C5B0", "#ADF1D2"] },
    { name: "Plum",                 colors: ["#BFC3BA", "#A9ACA9", "#60495A", "#3F3244", "#2F2235"] },
    { name: "Adam",                 colors: ["#262322", "#63372C", "#C97D60", "#FFBCB5", "#F2E5D7"] },
    { name: "Burning Lime",         colors: ["#CBFF8C", "#E3E36A", "#C16200", "#881600", "#4E0110"] },
    { name: "xenthorg Waves",       colors: ["#691a05", "#b65d14", "#bd9c76", "#314e51", "#0f2028"] },
    { name: "Warm and Cold",        colors: ["#44355B", "#31263E", "#221E22", "#ECA72C", "#EE5622"] },
    { name: "Bonfire",              colors: ["#3C1518", "#69140E", "#A44200", "#D58936", "#FFFB46"] },
    { name: "Sad Rainbow",          colors: ["#D4F2DB", "#CEF7A0", "#BA9790", "#914D76", "#69353F"] },
    { name: "Muted",                colors: ["#37123C", "#71677C", "#A99F96", "#DDA77B", "#945D5E"] },
    { name: "Kürbiskern",           colors: ["#C0CAAD", "#9DA9A0", "#654C4F", "#B26E63", "#CEC075"] },
    { name: "Foggy Forest",         colors: ["#1c2626", "#29302b", "#394130", "#484c32", "#5a5136"] },
    { name: "Shaded",               colors: ["#4C5B5C", "#FF715B", "#F9CB40", "#BCED09", "#2F52E0"] },
    { name: "Warm Night",           colors: ["#181716", "#2a2727", "#393433", "#453f3d", "#57504d"] },
    { name: "Muted Autumn",         colors: ["#903315", "#c28e0d", "#ce8677", "#005271", "#505e2f"] },
    { name: "Kirsche",              colors: ["#d82349", "#b32241", "#86132b", "#590f1e", "#160408"] },
    { name: "Deep Sea",             colors: ["#0d1b2a", "#1b263b", "#415a77", "#778da9", "#e0e1dd"] },
    { name: "Bloody Night",         colors: ["#1C1515", "#700C0C", "#5A0303", "#727070", "#615F5F"] },
    { name: "Satt",                 colors: ["#5f0f40", "#9a031e", "#fb8b24", "#e36414", "#0f4c5c"] },
    { name: "BLAU",                 colors: ["#02010a", "#04052e", "#140152", "#22007c", "#0d00a4"] },
    { name: "Schatten",             colors: ["#3a015c", "#32004f", "#220135", "#190028", "#11001c"] },
    { name: "Hinterhof",            colors: ["#59747b", "#3d4051", "#1f1f2d", "#333f4c", "#5d5e76"] },
    { name: "Bled",                 colors: ["#2d0065", "#360153", "#46074d", "#560737", "#600028"] },
    { name: "Falling Leaves",       colors: ["#210F04", "#452103", "#690500", "#934B00", "#BB6B00"] },
    { name: "Mohnwiese",            colors: ["#BA2D0B", "#D5F2E3", "#73BA9B", "#003E1F", "#01110A"] },
    { name: "Celadon",              colors: ["#A1E8AF", "#94C595", "#747C92", "#372772", "#3A2449"] },
    { name: "Drop Of Wine",         colors: ["#6D213C", "#946846", "#BAAB68", "#E3C16F", "#FAFF70"] },
    { name: "Lilac",                colors: ["#4381C1", "#BDADEA", "#BEA2C2", "#A37871", "#4E4B5C"] },
    { name: "Sommerende",           colors: ["#A41623", "#F85E00", "#FFB563", "#FFD29D", "#918450"] },
    { name: "Horror",               colors: ["#060661", "#081d78", "#8787cf", "#630606", "#4a0909"] },
    { name: "Licht",                colors: ["#fff8bf", "#6c6f6b", "#4b364f", "#410c15", "#6b1323"] },
    { name: "Evening Sun",          colors: ["#104b51", "#3b484d", "#674448", "#924144", "#bd3d3f"] },
    { name: "Neon Night",           colors: ["#082438", "#3b2144", "#6e1e51", "#a11a5d", "#d4176a"] }
];

const colorPalettes3 = [ // Pastel              | 35
    { name: "Prismarine",           colors: ["#B0A1BA", "#A5B5BF", "#ABC8C7", "#B8E2C8", "#BFF0D4"] },
    { name: "Pigeon",               colors: ["#FCF7FF", "#C4CAD0", "#878C8F", "#A4969B", "#655560"] },
    { name: "Shallow Water",        colors: ["#F3E8EE", "#BACDB0", "#729B79", "#475B63", "#2E2C2F"] },
    { name: "Dutch",                colors: ["#C6D8AF", "#DBD8B3", "#FCC8B2", "#EFA48B", "#685369"] },
    { name: "Breeze",               colors: ["#738290", "#A1B5D8", "#FFFCF7", "#E4F0D0", "#C2D8B9"] },
    { name: "Soft",                 colors: ["#B0F2B4", "#BAF2E9", "#BAD7F2", "#F2BAC9", "#F2E2BA"] },
    { name: "Desert Sun",           colors: ["#FCEFEF", "#7FD8BE", "#A1FCDF", "#FCD29F", "#FCAB64"] },
    { name: "Pillow Fight",         colors: ["#9381FF", "#B8B8FF", "#F8F7FF", "#FFEEDD", "#FFD8BE"] },
    { name: "Soft Moan",            colors: ["#97F9F9", "#A4DEF9", "#C1E0F7", "#CFBAE1", "#C59FC9"] },
    { name: "Melancholic",          colors: ["#5B5B5B", "#7D7C7A", "#C9C19F", "#EDF7D2", "#EDF7B5"] },
    { name: "Silent Rainbow",       colors: ["#ffb3ba", "#ffdfba", "#ffffba", "#baffc9", "#bae1ff"] },
    { name: "Zwiespalt",            colors: ["#a8e6cf", "#dcedc1", "#ffd3b6", "#ffaaa5", "#ff8b94"] },
    { name: "Pastel Party",         colors: ["#b7ded2", "#f6a6b2", "#f7c297", "#ffecb8", "#90d2d8"] },
    { name: "Ostern",               colors: ["#f9ceee", "#e0cdff", "#c1f0fb", "#dcf9a8", "#ffebaf"] },
    { name: "Autumn",               colors: ["#fdf6f2", "#c0d8e3", "#a78d8a", "#e18a7a", "#eeb9a2"] },
    { name: "Pink and Blue",        colors: ["#ffb0d9", "#f9c9e2", "#f9f8f2", "#c9dcf9", "#b0cfff"] },
    { name: "Spring Dusk",          colors: ["#e7d0d6", "#ffd7cd", "#ffe1df", "#fdf6e3", "#e5f7ff"] },
    { name: "Blumenmädchen",        colors: ["#f7dea2", "#f2e6d9", "#f0f7ff", "#d9e9f2", "#bfd2d1"] },
    { name: "Sommerkleid",          colors: ["#c2be7c", "#efe6c2", "#faebd7", "#f0e0e9", "#9eb3be"] },
    { name: "Fire Light",           colors: ["#f7a2b4", "#f18854", "#f39955", "#f7b956", "#f7eaa2"] },
    { name: "Polaroid",             colors: ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"] },
    { name: "Lavender Night",       colors: ["#22223b", "#4a4e69", "#9a8c98", "#c9ada7", "#f2e9e4"] },
    { name: "Candy",                colors: ["#f6bd60", "#f7ede2", "#f5cac3", "#84a59d", "#f28482"] },
    { name: "Aether",               colors: ["#D8E2DC", "#FFE5D9", "#FFCAD4", "#F4ACB7", "#9D8189"] },
    { name: "Milcheis",             colors: ["#ff99c8", "#fcf6bd", "#d0f4de", "#a9def9", "#e4c1f9"] },
    { name: "Cotton Candy",         colors: ["#d3f8e2", "#e4c1f9", "#f694c1", "#ede7b1", "#a9def9"] },
    { name: "Twighlight",           colors: ["#efd9ce", "#dec0f1", "#b79ced", "#957fef", "#7161ef"] },
    { name: "Eggs",                 colors: ["#f6f2f0", "#f3e7e4", "#e7d1c9", "#f1e7dd", "#d0b49f"] },
    { name: "Kindness",             colors: ["#805D93", "#F49FBC", "#FFD3BA", "#9EBD6E", "#169873"] },
    { name: "Corals",               colors: ["#403F4C", "#00C49A", "#F8E16C", "#FFC2B4", "#FB8F67"] },
    { name: "Süß",                  colors: ["#61A0AF", "#96C9DC", "#F06C9B", "#F9B9B7", "#F5D491"] },
    { name: "Orchid",               colors: ["#FFB8D1", "#E4B4C2", "#E7CEE3", "#E0E1E9", "#DDFDFE"] },
    { name: "Rose Taupe",           colors: ["#CEBEBE", "#ECE2D0", "#D5B9B2", "#A26769", "#6D2E46"] },
    { name: "Petrichor",            colors: ["#44c0ed", "#72ced3", "#9fddba", "#cdeba0", "#faf986"] },
    { name: "Sunrise",              colors: ["#feffd8", "#fef2d2", "#fde5cc", "#fdd8c5", "#fccbbf"] },
    { name: "Playful",              colors: ["#ffdaf7", "#c7ffb8", "#eedbff", "#feffbb", "#ffebb8"] }
];

const colorPalettes4 = [ // Monocolor           | 25
    { name: "Princess Pink",        colors: ["#ffc2cd", "#ff93ac", "#ff6289", "#fc3468", "#ff084a"] },
    { name: "Monorine",             colors: ["#007777", "#006666", "#005555", "#004444", "#003333"] },
    { name: "Liberty",              colors: ["#52bf90", "#49ab81", "#419873", "#398564", "#317256"] },
    { name: "Cream",                colors: ["#e0ddd1", "#dbd7c9", "#d6d2c2", "#d1ccba", "#ccc7b3"] },
    { name: "Parrot Green",         colors: ["#234d20", "#36802d", "#77ab59", "#c9df8a", "#f0f7da"] },
    { name: "Sage Green",           colors: ["#8f9779", "#78866b", "#738276", "#738678", "#4d5d53"] },
    { name: "Feuer",                colors: ["#ffc100", "#ff9a00", "#ff7400", "#ff4d00", "#ff0000"] },
    { name: "Roses",                colors: ["#feb5b5", "#f4a8a8", "#df9191", "#d07c7c", "#af5353"] },
    { name: "Blizzard",             colors: ["#bfc8d2", "#a5b1be", "#8692a0", "#768699", "#59708a"] },
    { name: "Sunflower",            colors: ["#ffe599", "#ffda5b", "#ffd040", "#ffca27", "#ffb700"] },
    { name: "Petals",               colors: ["#f1dbdb", "#e6aeb3", "#d08288", "#9f5f5d", "#712727"] },
    { name: "Majin",                colors: ["#efbbcc", "#a7828e", "#775d66", "#47383d", "#2f2528"] },
    { name: "Grau",                 colors: ["#595959", "#7f7f7f", "#a5a5a5", "#cccccc", "#f2f2f2"] },
    { name: "Lemons",               colors: ["#f9dc5c", "#fae588", "#fcefb4", "#fdf8e1", "#f9dc5c"] },
    { name: "Wolken",               colors: ["#022f40", "#38aecc", "#0090c1", "#183446", "#046e8f"] },
    { name: "Jah",                  colors: ["#e9f5db", "#cfe1b9", "#b5c99a", "#97a97c", "#87986a"] },
    { name: "Horizon",              colors: ["#07beb8", "#3dccc7", "#68d8d6", "#9ceaef", "#c4fff9"] },
    { name: "Haut",                 colors: ["#f4dbd8", "#bea8a7", "#c09891", "#775144", "#2a0800"] },
    { name: "Taube",                colors: ["#84929B", "#91A1AB", "#9FB1BC", "#A8B8C2", "#B0BEC8"] },
    { name: "Lachs",                colors: ["#BA5C67", "#CD6571", "#E16F7C", "#E47C88", "#E68893"] },
    { name: "Blattgrün",            colors: ["#698729", "#74942D", "#80A332", "#8DB337", "#9BC53D"] },
    { name: "Rosé",                 colors: ["#C03B46", "#D3414D", "#E84855", "#EA5964", "#EC6872"] },
    { name: "Zitrus",               colors: ["#BB9605", "#CEA505", "#E3B505", "#E6BC1C", "#E8C231"] },
    { name: "Sandstorm",            colors: ["#806b40", "#ccab66", "#e6d0a3", "#ddcbab", "#bf9130"] },
    { name: "Sakura",               colors: ["#0f090c", "#422636", "#75435f", "#a86089", "#db7db2"] },
    { name: "Baby Blues",           colors: ["#edf2fa", "#d7e3fc", "#ccdbfd", "#c1d3fe", "#abc4ff"] }
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