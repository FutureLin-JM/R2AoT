ServerEvents.loaded(event => {
    if (!event.server.persistentData.getBoolean('first_loaded')) {
        event.server.gameRules.set('keepInventory', 'true');
        event.server.gameRules.set('doInsomnia', 'false');
        event.server.gameRules.set('doTraderSpawning', 'false');
        event.server.gameRules.set('doWeatherCycle', 'false');
        event.server.gameRules.set('doMobSpawning', 'false');
        event.server.gameRules.set('doDaylightCycle', 'false');

        server.getLevel('minecraft:overworld').setDayTime(6000);

        event.server.persistentData.putBoolean('first_loaded', true);
    }
})

// 获取fuel_items
// const $ForgeHooks = Java.loadClass('net.minecraftforge.common.ForgeHooks');

// ServerEvents.recipes((event) => {
//     let fuelItems = {};

//     Ingredient.all.stacks.forEach((itemStack) => {
//         const burnTime = $ForgeHooks.getBurnTime(itemStack, 'minecraft:smelting');

//         if (burnTime > 0) {
//             fuelItems[itemStack.id] = burnTime;
//         }
//     });

//     JsonIO.write('kubejs/fuel_items.json', fuelItems);
// });


