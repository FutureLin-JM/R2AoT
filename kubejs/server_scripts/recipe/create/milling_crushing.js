ServerEvents.recipes(event => {
    const { milling, crushing } = event.recipes.create;

    // 石磨 ＆ 粉碎轮
    milling(['minecraft:coal', Item.of('minecraft:coal').withChance(0.15)], 'r2aot:petal_coal_ore').id(
        kjs('milling', 'coal_ore')
    );

    milling(['minecraft:lapis_lazuli', Item.of('minecraft:lapis_lazuli').withChance(0.15)], 'r2aot:petal_lapis_ore').id(
        kjs('milling', 'petal_lapis_ore')
    );

    milling(['minecraft:redstone', Item.of('minecraft:redstone').withChance(0.15)], 'r2aot:petal_redstone_ore').id(
        kjs('milling', 'petal_redstone_ore')
    );

    milling(['minecraft:diamond', Item.of('minecraft:diamond').withChance(0.1)], 'r2aot:petal_diamond_ore').id(
        kjs('milling', 'petal_diamond_ore')
    );

    milling(['minecraft:emerald', Item.of('minecraft:emerald').withChance(0.1)], 'r2aot:petal_emerald_ore').id(
        kjs('milling', 'petal_emerald_ore')
    );

    milling(['minecraft:iron_ingot', Item.of('minecraft:iron_nugget').withChance(0.75)], 'r2aot:petal_iron_ore').id(
        kjs('milling', 'petal_iron_ore')
    );

    milling(['minecraft:copper_ingot', Item.of('thermal:copper_nugget').withChance(0.75)], 'r2aot:petal_copper_ore').id(
        kjs('milling', 'petal_copper_ore')
    );

    milling(['minecraft:gold_ingot', Item.of('minecraft:gold_nugget').withChance(0.75)], 'r2aot:petal_gold_ore').id(
        kjs('milling', 'petal_gold_ore')
    );

    milling(['create:zinc_ingot', Item.of('create:zinc_nugget').withChance(0.75)], 'r2aot:petal_zinc_ore').id(
        kjs('milling', 'petal_zinc_ore')
    );

    milling(
        [Item.of('minecraft:quartz').withCount(2), Item.of('minecraft:quartz').withCount(2).withChance(0.75)],
        'r2aot:petal_quartz_ore'
    ).id(kjs('milling', 'petal_quartz_ore'));

    milling(['2x ae2:sky_dust', Item.of('ae2:sky_dust').withChance(0.5)], 'ae2:sky_stone_block').id(
        'create:milling/compat/ae2/sky_stone_block'
    );

    milling('4x minecraft:pointed_dripstone', 'minecraft:dripstone_block').id(kjs('milling', 'pointed_dripstone'));

    // 粉碎轮
    crushing('ars_nouveau:glyph_crush', 'ars_nouveau:scribes_table').id(kjs('crushing', 'glyph_crush'));

    global.allCrushingItems.forEach(recipe => {
        if (!recipe.create) return;
        let id = recipe.id ? kjs('crushing', recipe.id) : kjs('crushing', recipe.output.split(':')[1]);

        crushing(recipe.output, recipe.input).id(id);
    });
});
