'use strict';

export var scriptProperties = createScriptProperties()
    .addCombo({
        name: 'actionType',
        label: 'Action on Click',
        options: [
            { label: 'Next', value: 'next' },
            { label: 'Previous', value: 'previous' }
        ],
        value: 'next'
    })
    .finish();

export function cursorClick(event) {
    if (scriptProperties.actionType === 'next' && thisLayer.visible) {
        shared.next = true;
    } else if (scriptProperties.actionType === 'previous' && thisLayer.visible) {
        shared.previous = true;
    }
}
