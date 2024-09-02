'use strict';

import * as WEColor from 'WEColor';

export var scriptProperties = createScriptProperties()
    .addText({
        name: 'sharedValueName',
        label: 'Shared Value Name',
        value: 'paletteColor#'
    })
    .addCheckbox({
        name: 'useFallbackColor',
        label: 'Use Custom Color',
        value: false
    })
    .addColor({
        name: 'fallbackColor',
        label: 'Custom Color',
        value: new Vec3(1, 1, 1)
    })
    .addSlider({
        name: 'transitionDuration',
        label: 'Transition Duration',
        value: 0.5,
        min: 0.1,
        max: 2,
        integer: false
    })
    .finish();

let newColor = new Vec3(0, 0, 0);
let oldColor = new Vec3(0, 0, 0);
let timer = 0;
let previousSharedValue = null;

function getCurrentTargetColor() {
    // Use fallback color if the flag is set; otherwise, use the shared color
    return scriptProperties.useFallbackColor ? scriptProperties.fallbackColor : (shared[scriptProperties.sharedValueName] || scriptProperties.fallbackColor);
}

export function init(value) {
    // Fetch the initial color directly from shared value or fallback
    newColor = getCurrentTargetColor();
    oldColor = newColor;
    timer = scriptProperties.transitionDuration;
    previousSharedValue = scriptProperties.useFallbackColor ? scriptProperties.fallbackColor : shared[scriptProperties.sharedValueName];
    return newColor;
}

export function update(value) {
    const transitionDuration = scriptProperties.transitionDuration;

    // Determine the current source value based on the fallback flag
    const currentSharedValue = scriptProperties.useFallbackColor ? scriptProperties.fallbackColor : shared[scriptProperties.sharedValueName];

    // Check for a change in the shared or fallback value
    if (currentSharedValue !== previousSharedValue) {
        previousSharedValue = currentSharedValue;
        timer = 0;
        oldColor = newColor;
        newColor = getCurrentTargetColor();
    }

    if (timer < transitionDuration) {
        const ratio = timer / transitionDuration;
        value = newColor.subtract(oldColor).multiply(ratio).add(oldColor);
        timer += engine.frametime;
    } else {
        value = newColor;
    }

    return value;
}
