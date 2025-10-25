ServerEvents.tags('item', event => {
    Object.entries(JsonIO.read('kubejs/fuel_items.json')).forEach(([itemId, burnTime]) => {
        event.add('minecraft:fuel_items', itemId);
    });

    let colors = [
        'white',
        'orange',
        'magenta',
        'light_blue',
        'yellow',
        'lime',
        'pink',
        'gray',
        'light_gray',
        'cyan',
        'purple',
        'blue',
        'brown',
        'green',
        'red',
        'black',
    ];
    colors.forEach(color => {
        event.add('botania:petals_block', `botania:${color}_petal_block`);
    });

    event.add('r2aot:hammer', [
        'r2aot:wooden_hammer',
        'r2aot:stone_hammer',
        'r2aot:compressed_wooden_hammer',
        'r2aot:compressed_stone_hammer',
    ]);

    Ingredient.of(/^r2aot:petal_\w+_ore$/).itemIds.forEach(id => {
        event.add('r2aot:petal_ore', id);
    });

    Ingredient.of(/^r2aot:\w+_furnace_component$/).itemIds.forEach(id => {
        event.add('r2aot:furnace_component', id);
    });
    event.add('r2aot:furnace_component/level1', [
        'r2aot:iron_furnace_component',
        'r2aot:copper_furnace_component',
        'r2aot:gold_furnace_component',
    ]);
    event.add('r2aot:furnace_component/level2', [
        'r2aot:diamond_furnace_component',
        'r2aot:emerald_furnace_component',
        'r2aot:crystal_furnace_component',
    ]);
    event.add('r2aot:furnace_component/level3', [
        'r2aot:obsidian_furnace_component',
        'r2aot:netherite_furnace_component',
    ]);

    event.add('forge:saplings/archwood', [
        'ars_nouveau:purple_archwood_sapling',
        'ars_nouveau:blue_archwood_sapling',
        'ars_nouveau:green_archwood_sapling',
        'ars_nouveau:red_archwood_sapling',
    ]);

    event.add('ars_nouveau:magic_shards', ['r2aot:bookwyrm_shards', 'r2aot:amethyst_golem_shards']);
});

ServerEvents.tags('block', event => {
    // 镐子
    event.add('minecraft:mineable/pickaxe', [
        'r2aot:compressed_cobblestone',
        'r2aot:double_compressed_cobblestone',
        'r2aot:compressed_andesite',
        'r2aot:double_compressed_andesite',
        'r2aot:compressed_gravel',
        'r2aot:double_compressed_gravel',
        'r2aot:compressed_sand',
        'r2aot:double_compressed_sand',
        'r2aot:stress_input',
        'r2aot:create_input',
        'r2aot:create_output',
        'r2aot:andesite_casing_maker',
        'r2aot:rainbow_furnace',
        'r2aot:fluid_input',
        'r2aot:fluid_output',
        'r2aot:mana_input',
        'r2aot:mana_output',
        'r2aot:mana_generator_core',
        'r2aot:item_input',
        'r2aot:item_output',
        'r2aot:flower_ore_generator',
        'r2aot:mana_motor',
        'r2aot:energy_input',
        'r2aot:energy_output',
        'r2aot:stress_generator_core',
        'r2aot:creative_casing',
    ]);

    // 斧头
    event.add('minecraft:mineable/axe', [
        'r2aot:stress_input',
        'r2aot:create_input',
        'r2aot:create_output',
        'r2aot:andesite_casing_maker',
    ]);

    // 铲子
    event.add('minecraft:mineable/shovel', [
        'r2aot:compressed_gravel',
        'r2aot:double_compressed_gravel',
        'r2aot:compressed_sand',
        'r2aot:double_compressed_sand',
    ]);

    // 石质工具
    event.add('minecraft:needs_stone_tool', [
        'r2aot:compressed_cobblestone',
        'r2aot:compressed_andesite',
        'r2aot:double_compressed_cobblestone',
        'r2aot:double_compressed_andesite',
        'r2aot:double_compressed_gravel',
        'r2aot:double_compressed_sand',
        'r2aot:petal_coal_ore',
        'r2aot:petal_iron_ore',
        'r2aot:petal_copper_ore',
        'r2aot:petal_lapis_ore',
        'r2aot:rainbow_furnace',
        'r2aot:fluid_input_port',
        'r2aot:fluid_output_port',
        'r2aot:fluid_input_tank',
        'r2aot:fluid_output_tank',
        'r2aot:mana_input',
        'r2aot:mana_output',
        'r2aot:mana_generator_core',
        'r2aot:item_input_tank',
        'r2aot:item_output_tank',
        'r2aot:flower_ore_generator',
    ]);

    // 铁质工具
    event.add('minecraft:needs_iron_tool', [
        'r2aot:petal_gold_ore',
        'r2aot:petal_redstone_ore',
        'r2aot:petal_diamond_ore',
        'r2aot:petal_emerald_ore',
        'r2aot:mana_motor',
    ]);

    // create扳手
    event.add('create:wrench_pickup', [
        'r2aot:stress_input',
        'r2aot:create_input',
        'r2aot:create_output',
        'r2aot:mana_motor',
        'r2aot:stress_generator_core',
        'r2aot:creative_casing',
    ]);

    const addPetalOre = ['minecraft:mineable/pickaxe', 'r2aot:petal_ore'];
    addPetalOre.forEach(tag => {
        event.add(tag, /^r2aot:petal_\w+_ore$/);
    });

    event.add('powah:thermo_generator', [/powah:thermo_generator_.*/]);
});
