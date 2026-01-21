ServerEvents.recipes(event => {
    const { extruding } = event.recipes.create_mechanical_extruder;

    // mechanical_extruder 造石机
    const materials = ['andesite', 'cobblestone', 'gravel', 'sand', 'netherrack'];
    // 1 bonk
    materials.forEach(material => {
        extruding(Item.of(`minecraft:${material}`), Array(2).fill(Fluid.of('r2aot:petal_essence', 1000)))
            .catalyst(`allthecompressed:${material}_2x`)
            .id(kjs('mechanical_extruder', `${material}_by_1_bonk`));
    });
    // 3 bonk
    materials.forEach(material => {
        extruding(Item.of(`minecraft:${material}`), Array(2).fill(Fluid.of('r2aot:petal_essence', 1000)))
            .catalyst(`allthecompressed:${material}_1x`)
            .requiredBonks(3)
            .id(kjs('mechanical_extruder', `${material}_by_3_bonk`));
    });
    // 5 bonk
    materials.forEach(material => {
        extruding(Item.of(`minecraft:${material}`), Array(2).fill(Fluid.of('r2aot:petal_essence', 1000)))
            .catalyst(`minecraft:${material}`)
            .requiredBonks(5)
            .id(kjs('mechanical_extruder', `${material}_by_5_bonk`));
    });

    extruding('minecraft:obsidian', Array(2).fill(Fluid.of('r2aot:petal_essence', 1000)))
        .catalyst('minecraft:crying_obsidian')
        .requiredBonks(10)
        .id(kjs('mechanical_extruder', 'obsidian_by_10_bonk'));
});
