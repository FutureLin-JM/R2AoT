ServerEvents.recipes(event => {
    const { compacting, pressing } = event.recipes.create;

    // compacking 压块
    compacting('botania:blaze_block', Fluid.of('minecraft:lava')).id(kjs('compacting', 'blaze_block_from_lava'));

    compacting(Fluid.of('r2aot:seed_oil', 100), '#forge:seeds').id(kjs('compacting', 'seed_oil'));

    compacting('thermal:rubber_block', Fluid.of('thermal:latex', 500)).id(kjs('compacting', 'rubber_block_from_latex'));

    compacting('ae2:sky_stone_block', Fluid.of('r2aot:molten_meteorite', 1000)).id(
        kjs('compacting', 'sky_stone_block_from_molten_meteorite')
    );

    ['bronze', 'electrum', 'invar', 'constantan'].forEach(metalId => {
        compacting(`thermal:${metalId}_ingot`, Fluid.of(`r2aot:molten_${metalId}`, 1000))
            .superheated()
            .id(kjs('compacting', `${metalId}_ingot_from_molten_${metalId}`));
    });
});
