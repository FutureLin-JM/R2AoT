Platform.setModName('r2aot', 'R2AoT');

StartupEvents.modifyCreativeTab('kubejs:tab', event => {
    event.setDisplayName('R2AoT');
    event.setIcon('r2aot:fertilizer_propagator_core');

    ['botania:black_lotus', 'botania:blacker_lotus'].forEach(id => event.remove(id));
    // Ingredient.of(/^kubejs:/).itemIds.forEach(id => {
    //     event.remove(id)
    // })
});
