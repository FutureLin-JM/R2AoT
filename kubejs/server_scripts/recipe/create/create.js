ServerEvents.recipes(event => {
    // 安山合金
    event.shaped('2x create:andesite_alloy',[
        'AB ',
        'BA ',
        '   '
    ], {
        A:'minecraft:andesite',
        B:'r2aot:green_gravel_shard'
    });

    // 安山机壳
    event.shaped('create:andesite_casing', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A:'botania:light_gray_petal',
        B:'create:andesite_alloy',
        C:'minecraft:stripped_oak_log'
    });
    
    // 风帆框架
    event.shaped('16x create:sail_frame', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A:'#forge:rods/wooden',
        B:'create:andesite_alloy'
    });

    // 石磨
    event.shaped('create:millstone', [
        'A  ',
        'B  ',
        'C  '
    ], {
        A:'create:cogwheel',
        B:'create:andesite_casing',
        C:'botania:livingrock'
    }).id('create:crafting/kinetics/millstone');

    // 应力传输器
    event.shaped('createendertransmission:energy_transmitter', [
        'ABA',
        'ACA',
        'ABA'
    ], {
        A:'minecraft:obsidian',
        B:'create:shaft',
        C:'create:precision_mechanism'
    })
})


ServerEvents.recipes(event => {
    // mixing  搅拌
    // splashing 鼓风机
    // milling 石磨
    // deploying 机械手
    // mechanical_crafting 动力合成
    // compacting 动力冲压机 压块
    // pressing 动力冲压机 压片
    // filling 注液
    // MechanicalExtruderExtruding 造石机
    const { mixing, splashing, milling, deploying, mechanical_crafting, compacting, pressing, filling} = event.recipes.create;
    const create = event.recipes

    mixing(Fluid.of('r2aot:petal_essence', 500), '#botania:petals_block');
    mixing(
        ['create:andesite_alloy', Item.of('create:andesite_alloy').withChance(0.1)],
        ['minecraft:andesite', Fluid.of('r2aot:petal_essence', 1000)]
    );
    mixing(
        [Item.of('create:powdered_obsidian').withChance(0.75)], 
        [Item.of('botania:black_petal').withCount(5), Item.of('botania:gray_petal').withCount(5), Fluid.of('r2aot:petal_essence', 1000)]
    );
    mixing(Fluid.of('minecraft:lava', 500), 'minecraft:netherrack');
    mixing([Item.of('minecraft:sugar_cane').withChance(0.5), Item.of('minecraft:kelp').withChance(0.5), Item.of('minecraft:wheat_seeds').withChance(0.5)],
        [Item.of('botania:green_petal').withCount(9), Fluid.of('r2aot:petal_essence', 500)]);
    mixing('r2aot:petal_zinc_ore', 
        [Item.of('botania:white_petal').withCount(2), Item.of('botania:light_gray_petal').withCount(2), Fluid.of('r2aot:petal_essence', 500)]).heated();
    mixing('r2aot:petal_quartz_ore', 
        [Item.of('botania:white_petal').withCount(2), Item.of('botania:red_petal').withCount(2), Fluid.of('r2aot:petal_essence', 500)]).heated();
    mixing(Fluid.of('r2aot:bioethanol', 125), ['create:cinder_flour', 'minecraft:sugar', Fluid.of('r2aot:seed_oil', 100)]).heated();
    mixing(Fluid.of('r2aot:fluidedmana', 1000),['botania:mana_diamond', '2x botania:mana_powder', '2x botania:manasteel_ingot']).heated();
    mixing(Fluid.of('thermal:latex', 100), 'minecraft:vine');
    mixing(Fluid.of('thermal:latex', 100), 'minecraft:dandelion');
    mixing('thermal:rubber', [Fluid.of('minecraft:water', 1000), Item.of('minecraft:vine').withCount(8)]);
    mixing('thermal:rubber', [Fluid.of('minecraft:water', 1000), Item.of('minecraft:dandelion').withCount(8)]);
    mixing(Fluid.of('industrialforegoing:latex', 200), [Fluid.of('thermal:latex', 100), Fluid.of('minecraft:water', 100)])

    splashing(
        [Item.of('minecraft:flint').withChance(0.25), Item.of('minecraft:iron_nugget').withChance(0.75)], 
        'minecraft:gravel'
    ).id('create:splashing/gravel');
    splashing(Item.of('minecraft:clay_ball').withChance(0.75), 'minecraft:sand').id('create:splashing/sand');
    splashing('industrialforegoing:plastic', 'thermal:cured_rubber')
    
    milling(['minecraft:coal', Item.of('minecraft:coal').withChance(0.15)], 'r2aot:petal_coal_ore');
    milling(['minecraft:lapis_lazuli', Item.of('minecraft:lapis_lazuli').withChance(0.15)], 'r2aot:petal_lapis_ore');
    milling(['minecraft:redstone', Item.of('minecraft:redstone').withChance(0.15)], 'r2aot:petal_redstone_ore');
    milling(['minecraft:diamond', Item.of('minecraft:diamond').withChance(0.1)], 'r2aot:petal_diamond_ore');
    milling(['minecraft:emerald', Item.of('minecraft:emerald').withChance(0.1)], 'r2aot:petal_emerald_ore');
    milling(['minecraft:iron_ingot', Item.of('minecraft:iron_nugget').withChance(0.75)], 'r2aot:petal_iron_ore');
    milling(['minecraft:copper_ingot', Item.of('thermal:copper_nugget').withChance(0.75)], 'r2aot:petal_copper_ore');
    milling(['minecraft:gold_ingot', Item.of('minecraft:gold_nugget').withChance(0.75)], 'r2aot:petal_gold_ore');
    milling(['create:zinc_ingot', Item.of('create:zinc_nugget').withChance(0.75)], 'r2aot:petal_zinc_ore');
    milling([Item.of('minecraft:quartz').withCount(2), Item.of('minecraft:quartz').withCount(2).withChance(0.75)], 'r2aot:petal_quartz_ore');
    milling(['2x ae2:sky_dust', Item.of('ae2:sky_dust').withChance(0.5)], 'ae2:sky_stone_block').id('create:milling/compat/ae2/sky_stone_block')

    deploying('create:brass_casing', ['create:andesite_casing', 'create:brass_ingot']);
    deploying('ae2:printed_silicon', ['ae2:silicon', 'ae2:silicon_press']).keepHeldItem();
    deploying('ae2:printed_calculation_processor', ['ae2:certus_quartz_crystal', 'ae2:calculation_processor_press']).keepHeldItem();
    deploying('ae2:printed_logic_processor', ['minecraft:gold_ingot', 'ae2:logic_processor_press']).keepHeldItem();
    deploying('ae2:printed_engineering_processor', ['minecraft:diamond', 'ae2:engineering_processor_press']).keepHeldItem();

    mechanical_crafting('r2aot:diamond_furnace_component', [
        'AAA',
        'ABA',
        'ACA'
    ], {A:'minecraft:diamond', B:'#r2aot:furnace_component/level1', C:'minecraft:diamond_block'});
    mechanical_crafting('r2aot:emerald_furnace_component', [
        'AAA',
        'ABA',
        'ACA'
    ], {A:'minecraft:emerald', B:'#r2aot:furnace_component/level1', C:'minecraft:emerald_block'});
    mechanical_crafting('r2aot:crystal_furnace_component', [
        'AAA',
        'ABA',
        'ACA'
    ], {A:'ae2:quartz_glass', B:'#r2aot:furnace_component/level1', C:'ae2:quartz_vibrant_glass'});
    mechanical_crafting('r2aot:obsidian_furnace_component',[
        ' AAA ',
        'AAAAA',
        'AABAA',
        'AAAAA',
        ' AAA '
    ], {A:'minecraft:obsidian', B:'#r2aot:furnace_component/level2'});
    mechanical_crafting('r2aot:netherite_furnace_component', [
        ' AAA ',
        'AACAA',
        'ACBCA',
        'AACAA',
        ' AAA '
    ], {A:'minecraft:netherite_ingot', B:'#r2aot:furnace_component/level2', C:'minecraft:netherite_block'});
    mechanical_crafting('botania:mana_pool', [
        'ABA',
        'AAA'
    ], {A:'botania:livingrock', B:'create:brass_ingot'});
    mechanical_crafting('r2aot:primary_mana_generator_core', [
        'AAA',
        'ABA',
        'AAA'
    ], {A:'botania:livingrock', B:'minecraft:diamond'});
    mechanical_crafting('r2aot:flower_ore_generator', [
        'AAA',
        'ABA',
        'AAA'
    ], {A:'create:brass_casing', B:'create:crushing_wheel'});
    mechanical_crafting('4x create:crushing_wheel', [
        " AAA ",
        "AAPAA",
        "APSPA",
        "AAPAA",
        " AAA "
    ], {A:'create:andesite_alloy', P:'#minecraft:planks', S:'#forge:stone'}).id('create:mechanical_crafting/crushing_wheel');
    mechanical_crafting('r2aot:mana_motor', [
        ' AAA ',
        'ABCBA',
        'ACDCA',
        'ABCBA',
        ' AAA '
    ], {A:'botania:mana_diamond', B:'botania:manasteel_block', C:'botania:mana_powder', D:'create:shaft'});
    mechanical_crafting('create:creative_motor', [
        ' AAA ',
        'AAAAA',
        'AABAA',
        'AAAAA',
        ' AAA '
    ], {A:'r2aot:creative_casing', B:'create:shaft'});
    mechanical_crafting('r2aot:stress_generator_core', [
        'ABA',
        'BCB',
        'ABA'
    ], {A:'create:brass_ingot', B:'create:brass_casing', C:'create:railway_casing'});

    compacting('botania:blaze_block', Fluid.of('minecraft:lava'));
    compacting(Fluid.of('r2aot:seed_oil', 100), '#forge:seeds');
    compacting('thermal:rubber_block', Fluid.of('thermal:latex', 500));
    compacting('ae2:sky_stone_block', Fluid.of('r2aot:molten_meteorite', 1000));

    filling('5x industrialforegoing:plastic', [Fluid.of('minecraft:water', 100), 'thermal:cured_rubber_block']);

    const materials = ['andesite', 'cobblestone', 'gravel', 'sand', 'netherrack'];
    // 1 bonk
    materials.forEach(material => {
        create.createMechanicalExtruderExtruding(
            Item.of(`minecraft:${material}`),
            Array(2).fill(Fluid.of('r2aot:petal_essence', 1000))
        ).withCatalyst(`r2aot:double_compressed_${material}`);
    });
    // 3 bonk
    materials.forEach(material => {
        create.createMechanicalExtruderExtruding(
            Item.of(`minecraft:${material}`),
            Array(2).fill(Fluid.of('r2aot:petal_essence', 1000))
        ).withCatalyst(`r2aot:compressed_${material}`).requiredBonks(3);
    });
    // 5 bonk
    materials.forEach(material => {
        create.createMechanicalExtruderExtruding(
            Item.of(`minecraft:${material}`),
            Array(2).fill(Fluid.of('r2aot:petal_essence', 1000))
        ).withCatalyst(`minecraft:${material}`).requiredBonks(5);
    });

    create.createMechanicalExtruderExtruding(
        'minecraft:obsidian',
        Array(2).fill(Fluid.of('r2aot:petal_essence', 1000))
    ).withCatalyst('minecraft:crying_obsidian').requiredBonks(10);
})

