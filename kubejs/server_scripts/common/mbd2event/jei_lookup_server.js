/**
 * @param {String} machineId
 * @param {String} dataKey
 */
function registerMachineUI(machineId, dataKey) {
    MBDMachineEvents.onUI(machineId, event => {
        const mbdEvent = event.getEvent();
        const { root, player } = mbdEvent;

        /**@type {ButtonWidget} */
        const recipeLookupButton = root.getFirstWidgetById('recipe_lookup_button');

        recipeLookupButton.setOnPressCallback(clickData => {
            if (clickData.isRemote) return;
            player.sendData(dataKey);
        });
    });
}

global.MachineJEIIntegration.forEach(info => {
    registerMachineUI(info.machineId, info.dataKey);
});

registerMachineUI('r2aot:rainbow_furnace', 'xei_lookup_furnace');
