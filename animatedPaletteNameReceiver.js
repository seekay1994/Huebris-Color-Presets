'use strict';

export var scriptProperties = createScriptProperties()
    .addText({
        name: 'sharedValueName',
        label: 'Shared Value Name',
        value: 'sharedValueName'
    })
    .addCheckbox({
        name: 'disableAnimation',
        label: 'Disable Animation',
        value: false
    })
    .addSlider({
        name: 'changeSpeed',
        label: 'Change Speed',
        value: 0.1,
        min: 0.01,
        max: 2,
        integer: false
    })
    .addSlider({
        name: 'flashSpeed',
        label: 'Flash Speed',
        value: 0.5,
        min: 0.01,
        max: 2,
        integer: false
    })
    .finish();

let currentValue = "";
let targetValue = "";
let displayValue = "";
let flashTimer = 0;
let changeTimer = 0;
let indices = [];
let indexPosition = 0;

export function update(value) {
    targetValue = shared[scriptProperties.sharedValueName];
    if (targetValue !== currentValue) {
        currentValue = targetValue;

        if (scriptProperties.disableAnimation) {
            displayValue = currentValue;
        } else {
            indices = shuffle(Array.from({ length: Math.max(displayValue.length, currentValue.length) }, (_, i) => i));
            indexPosition = 0;
        }
    }

    if (!scriptProperties.disableAnimation) {
        flashTimer += engine.frametime;

        if (flashTimer >= (scriptProperties.flashSpeed * 0.05)) {
            for (let i = indexPosition; i < indices.length; i++) {
                let idx = indices[i];
                if (idx < displayValue.length && displayValue[idx] !== currentValue[idx]) {
                    displayValue = replaceCharAt(displayValue, idx, randomChar());
                } else if (idx >= displayValue.length && idx < currentValue.length) {
                    displayValue += randomChar();
                }
            }
            flashTimer = 0;
        }

        changeTimer += engine.frametime;
        if (changeTimer >= (scriptProperties.changeSpeed * 0.05)) {
            if (indexPosition < indices.length) {
                let idx = indices[indexPosition];

                if (idx < currentValue.length) {
                    if (idx < displayValue.length) {
                        displayValue = replaceCharAt(displayValue, idx, currentValue[idx]);
                    } else {
                        displayValue += currentValue[idx];
                    }
                } else if (displayValue.length > currentValue.length) {
                    displayValue = displayValue.substring(0, displayValue.length - 1);
                }

                indexPosition++;
            }
            changeTimer = 0;
        }
    }

    return displayValue;
}

function replaceCharAt(string, index, char) {
    return string.substr(0, index) + char + string.substr(index + 1);
}

function randomChar() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return chars.charAt(Math.floor(Math.random() * chars.length));
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
