'use strict';

import * as WEMath from 'WEMath';

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
let currentColor = new Vec3(0, 0, 0);
let timer = 0;
let previousSharedValue = null;

function getCurrentTargetColor() {
    return scriptProperties.useFallbackColor ? scriptProperties.fallbackColor : (shared[scriptProperties.sharedValueName] || scriptProperties.fallbackColor);
}

function isVec3Equal(vecA, vecB) {
    return vecA.x === vecB.x && vecA.y === vecB.y && vecA.z === vecB.z;
}

export function init(value) {
    newColor = getCurrentTargetColor();
    oldColor = newColor;
    currentColor = newColor;
    timer = scriptProperties.transitionDuration;
    previousSharedValue = newColor;
    return newColor;
}


export function update(value) {
    const transitionDuration = scriptProperties.transitionDuration;
    const currentSharedValue = getCurrentTargetColor();

    if (!isVec3Equal(currentSharedValue, previousSharedValue)) {
        previousSharedValue = currentSharedValue;
        oldColor = currentColor;
        newColor = currentSharedValue;
        timer = 0;
    }

    if (timer < transitionDuration) {
        const ratio = WEMath.mix(0, 1, timer / transitionDuration);
        currentColor = oldColor.multiply(1 - ratio).add(newColor.multiply(ratio));
        timer += engine.frametime;
    } else {
        currentColor = newColor;
    }

    return currentColor;
}
