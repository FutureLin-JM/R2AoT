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
            player.sendData('jei_machine_lookup', { recipeType: dataKey });
        });
    });
}

registerMachineUI('r2aot:rainbow_furnace', 'furnace');

[
    'r2aot:flower_ore_generator',
    'r2aot:buddycard_anvil',
    'r2aot:mana_liquidizer',
    'r2aot:alfheim_trade_station',
    'r2aot:andesite_casing_maker_core',
    'r2aot:fertilizer_propagator_core',
    'r2aot:power_planting_station',
].forEach(machineId => {
    registerMachineUI(machineId, machineId.split(':')[1]);
});
