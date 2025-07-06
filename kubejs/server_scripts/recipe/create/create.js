ServerEvents.recipes(event => {
    // 安山合金
    event.shaped('2x create:andesite_alloy',[
        'AB ',
        'BA ',
        '   '
    ], {
        A:'minecraft:andesite',
        B:'r2aot:green_gravel_shard'
    }).id(kjs('andesite_alloy'))

    // 安山机壳
    event.shaped('create:andesite_casing', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A:'botania:light_gray_petal',
        B:'create:andesite_alloy',
        C:'minecraft:stripped_oak_log'
    }).id(kjs('andesite_casing'));
    
    // 风帆框架
    event.shaped('16x create:sail_frame', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A:'#forge:rods/wooden',
        B:'create:andesite_alloy'
    }).id(kjs('sail_frame'));

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
        'ADA'
    ], {
        A:'minecraft:obsidian',
        B:'create:shaft',
        C:'create:precision_mechanism',
        D:'minecraft:ender_pearl'
    }).id(kjs('energy_transmitter'));
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

    mixing(Fluid.of('r2aot:petal_essence', 500), '#botania:petals_block').id(kjs('mixing', 'petal_essence'));
    mixing(
        ['create:andesite_alloy', Item.of('create:andesite_alloy').withChance(0.1)],
        ['minecraft:andesite', Fluid.of('r2aot:petal_essence', 1000)]
    ).id(kjs('mixing', 'andesite_alloy_from_petal_essence'));
    mixing(
        [Item.of('create:powdered_obsidian').withChance(0.75)], 
        [Item.of('botania:black_petal').withCount(5), Item.of('botania:gray_petal').withCount(5), Fluid.of('r2aot:petal_essence', 1000)]
    ).id(kjs('mixing', 'powdered_obsidian'));
    mixing(Fluid.of('minecraft:lava', 500), 'minecraft:netherrack').id(kjs('mixing', 'lava_from_netherrack'));
    mixing(
        [Item.of('minecraft:sugar_cane').withChance(0.5), Item.of('minecraft:kelp').withChance(0.5), Item.of('minecraft:wheat_seeds').withChance(0.5)],
        [Item.of('botania:green_petal').withCount(9), Fluid.of('r2aot:petal_essence', 500)]
    ).id(kjs('mixing', 'some_crops'));
    mixing(
        'r2aot:petal_zinc_ore', 
        [Item.of('botania:white_petal').withCount(2), Item.of('botania:light_gray_petal').withCount(2), Fluid.of('r2aot:petal_essence', 500)]
    ).heated().id(kjs('mixing', 'petal_zinc_ore'));
    mixing(
        'r2aot:petal_quartz_ore', 
        [Item.of('botania:white_petal').withCount(2), Item.of('botania:red_petal').withCount(2), Fluid.of('r2aot:petal_essence', 500)]
    ).heated().id(kjs('mixing', 'petal_quartz_ore'));
    mixing(
        Fluid.of('r2aot:bioethanol', 125), 
        ['create:cinder_flour', 'minecraft:sugar', Fluid.of('r2aot:seed_oil', 100)]
    ).heated().id(kjs('mixing', 'bioethanol'));
    mixing(
        Fluid.of('r2aot:fluidedmana', 1000),
        ['botania:mana_diamond', '2x botania:mana_powder', '2x botania:manasteel_ingot']
    ).heated().id(kjs('mixing', 'fluidedmana'));
    mixing(Fluid.of('thermal:latex', 100), 'minecraft:vine').id(kjs('mixing', 'thermal_latex_from_vine'));
    mixing(Fluid.of('thermal:latex', 100), 'minecraft:dandelion').id(kjs('mixing', 'thermal_latex_from_dandelion'));
    mixing(
        'thermal:rubber', 
        [Fluid.of('minecraft:water', 1000), Item.of('minecraft:vine').withCount(8)]
    ).id(kjs('mixing', 'thermal_rubber_from_vine'));
    mixing(
        'thermal:rubber', 
        [Fluid.of('minecraft:water', 1000), Item.of('minecraft:dandelion').withCount(8)]
    ).id(kjs('mixing', 'thermal_rubber_from_dandelion'));
    mixing(
        Fluid.of('industrialforegoing:latex', 200), 
        [Fluid.of('thermal:latex', 100), Fluid.of('minecraft:water', 100)]
    ).id(kjs('mixing', 'industrialforegoing_latex'));
    ['bronze', 'electrum', 'invar', 'constantan'].forEach(metalId => {
        mixing(Fluid.of(`r2aot:molten_${metalId}`, 200), `mysticalagriculture:${metalId}_essence`).superheated().id(kjs('mixing', `molten_${metalId}`))
    });
    mixing(Fluid.of('thermal:redstone', 100), 'minecraft:redstone').heated().id(kjs('mixing', 'thermal_redstone_from_redstone'));
    mixing(Fluid.of('thermal:redstone', 900), 'minecraft:redstone_block').heated().id(kjs('mixing', 'thermal_redstone_from_block_block'));
    mixing(
        Item.of('thermal:bronze_dust').withCount(2),
        [
            Ingredient.of('#forge:dusts/copper').or('#forge:ingots/copper').withCount(3), Ingredient.of('#forge:dusts/tin').or('#forge:ingots/tin'), 
            Fluid.of('r2aot:fluidedmana', 400)
        ]
    ).id(kjs('mixing', 'thermal_bronze_dust'));
    mixing(
        'thermal:electrum_dust',
        [
            Ingredient.of('#forge:dusts/gold').or('#forge:ingots/gold'), Ingredient.of('#forge:dusts/silver').or('#forge:ingots/silver'), 
            Fluid.of('r2aot:fluidedmana', 200)
        ]
    ).id(kjs('mixing', 'thermal_electrum_dust'));
    mixing(
        Item.of('thermal:invar_dust').withCount(3),
        [
            Ingredient.of('#forge:dusts/iron').or('#forge:ingots/iron').withCount(4), Ingredient.of('#forge:dusts/nickel').or('#forge:ingots/nickel').withCount(2), 
            Fluid.of('r2aot:fluidedmana', 600)
        ]
    ).id(kjs('mixing', 'thermal_invar_dust'));
    mixing(
        'thermal:constantan_dust',
        [
            Ingredient.of('#forge:dusts/copper').or('#forge:ingots/copper'), Ingredient.of('#forge:dusts/nickel').or('#forge:ingots/nickel'), 
            Fluid.of('r2aot:fluidedmana', 200)
        ]
    ).id(kjs('mixing', 'thermal_constantan_dust'));

    splashing(
        [Item.of('minecraft:flint').withChance(0.25), Item.of('minecraft:iron_nugget').withChance(0.75)], 
        'minecraft:gravel'
    ).id('create:splashing/gravel');
    splashing(Item.of('minecraft:clay_ball').withChance(0.75), 'minecraft:sand').id('create:splashing/sand');
    splashing('industrialforegoing:plastic', 'thermal:cured_rubber').id(kjs('splashing', 'plastic_by_splashing'))
    
    milling(['minecraft:coal', Item.of('minecraft:coal').withChance(0.15)], 'r2aot:petal_coal_ore').id(kjs('milling', 'coal_ore'));
    milling(['minecraft:lapis_lazuli', Item.of('minecraft:lapis_lazuli').withChance(0.15)], 'r2aot:petal_lapis_ore').id(kjs('milling', 'petal_lapis_ore'));
    milling(['minecraft:redstone', Item.of('minecraft:redstone').withChance(0.15)], 'r2aot:petal_redstone_ore').id(kjs('milling', 'petal_redstone_ore'));
    milling(['minecraft:diamond', Item.of('minecraft:diamond').withChance(0.1)], 'r2aot:petal_diamond_ore').id(kjs('milling', 'petal_diamond_ore'));
    milling(['minecraft:emerald', Item.of('minecraft:emerald').withChance(0.1)], 'r2aot:petal_emerald_ore').id(kjs('milling', 'petal_emerald_ore'));
    milling(['minecraft:iron_ingot', Item.of('minecraft:iron_nugget').withChance(0.75)], 'r2aot:petal_iron_ore').id(kjs('milling', 'petal_iron_ore'));
    milling(['minecraft:copper_ingot', Item.of('thermal:copper_nugget').withChance(0.75)], 'r2aot:petal_copper_ore').id(kjs('milling', 'petal_copper_ore'));
    milling(['minecraft:gold_ingot', Item.of('minecraft:gold_nugget').withChance(0.75)], 'r2aot:petal_gold_ore').id(kjs('milling', 'petal_gold_ore'));
    milling(['create:zinc_ingot', Item.of('create:zinc_nugget').withChance(0.75)], 'r2aot:petal_zinc_ore').id(kjs('milling', 'petal_zinc_ore'));
    milling([Item.of('minecraft:quartz').withCount(2), Item.of('minecraft:quartz').withCount(2).withChance(0.75)], 'r2aot:petal_quartz_ore').id(kjs('milling', 'petal_quartz_ore'));
    milling(['2x ae2:sky_dust', Item.of('ae2:sky_dust').withChance(0.5)], 'ae2:sky_stone_block').id('create:milling/compat/ae2/sky_stone_block')

    deploying('create:brass_casing', ['create:andesite_casing', 'create:brass_ingot']).id(kjs('deploying', 'brass_casing'));
    deploying('ae2:printed_silicon', ['ae2:silicon', 'ae2:silicon_press']).keepHeldItem().id(kjs('deploying', 'printed_silicon'));
    deploying('ae2:printed_calculation_processor', ['ae2:certus_quartz_crystal', 'ae2:calculation_processor_press']).keepHeldItem().id(kjs('deploying', 'printed_calculation_processor'));
    deploying('ae2:printed_logic_processor', ['minecraft:gold_ingot', 'ae2:logic_processor_press']).keepHeldItem().id(kjs('deploying', 'printed_logic_processor'));
    deploying('ae2:printed_engineering_processor', ['minecraft:diamond', 'ae2:engineering_processor_press']).keepHeldItem().id(kjs('deploying', 'printed_engineering_processor'));

    mechanical_crafting('r2aot:diamond_furnace_component', [
        'AAA',
        'ABA',
        'ACA'
    ], {A:'minecraft:diamond', B:'#r2aot:furnace_component/level1', C:'minecraft:diamond_block'}).id(kjs('mechanical_crafting', 'diamond_furnace_component'));
    mechanical_crafting('r2aot:emerald_furnace_component', [
        'AAA',
        'ABA',
        'ACA'
    ], {A:'minecraft:emerald', B:'#r2aot:furnace_component/level1', C:'minecraft:emerald_block'}).id(kjs('mechanical_crafting', 'emerald_furnace_component'));
    mechanical_crafting('r2aot:crystal_furnace_component', [
        'AAA',
        'ABA',
        'ACA'
    ], {A:'ae2:quartz_glass', B:'#r2aot:furnace_component/level1', C:'ae2:quartz_vibrant_glass'}).id(kjs('mechanical_crafting', 'crystal_furnace_component'));
    mechanical_crafting('r2aot:obsidian_furnace_component',[
        ' AAA ',
        'AAAAA',
        'AABAA',
        'AAAAA',
        ' AAA '
    ], {A:'minecraft:obsidian', B:'#r2aot:furnace_component/level2'}).id(kjs('mechanical_crafting', 'obsidian_furnace_component'));
    mechanical_crafting('r2aot:netherite_furnace_component', [
        ' AAA ',
        'AACAA',
        'ACBCA',
        'AACAA',
        ' AAA '
    ], {A:'minecraft:netherite_ingot', B:'#r2aot:furnace_component/level2', C:'minecraft:netherite_block'}).id(kjs('mechanical_crafting', 'netherite_furnace_component'));
    mechanical_crafting('botania:mana_pool', [
        'ABA',
        'AAA'
    ], {A:'botania:livingrock', B:'create:brass_ingot'}).id(kjs('mechanical_crafting', 'mana_pool'));
    mechanical_crafting('r2aot:primary_mana_generator_core', [
        'AAA',
        'ABA',
        'AAA'
    ], {A:'botania:livingrock', B:'minecraft:diamond'}).id(kjs('mechanical_crafting', 'primary_mana_generator_core'));
    mechanical_crafting('r2aot:flower_ore_generator', [
        'AAA',
        'ABA',
        'AAA'
    ], {A:'create:brass_casing', B:'create:crushing_wheel'}).id(kjs('mechanical_crafting', 'flower_ore_generator'));
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
    ], {A:'botania:mana_diamond', B:'botania:manasteel_block', C:'botania:mana_powder', D:'create:shaft'}).id(kjs('mechanical_crafting', 'mana_motor'));
    mechanical_crafting('create:creative_motor', [
        ' AAA ',
        'AAAAA',
        'AABAA',
        'AAAAA',
        ' AAA '
    ], {A:'r2aot:creative_casing', B:'create:shaft'}).id(kjs('mechanical_crafting', 'creative_motor'));
    mechanical_crafting('r2aot:stress_generator_core', [
        'ABA',
        'BCB',
        'ABA'
    ], {A:'create:brass_ingot', B:'create:brass_casing', C:'create:railway_casing'}).id(kjs('mechanical_crafting', 'stress_generator_core'));

    compacting('botania:blaze_block', Fluid.of('minecraft:lava')).id(kjs('compacting', 'blaze_block_from_lava'));
    compacting(Fluid.of('r2aot:seed_oil', 100), '#forge:seeds').id(kjs('compacting', 'seed_oil'));
    compacting('thermal:rubber_block', Fluid.of('thermal:latex', 500)).id(kjs('compacting', 'rubber_block_from_latex'));
    compacting('ae2:sky_stone_block', Fluid.of('r2aot:molten_meteorite', 1000)).id(kjs('compacting', 'sky_stone_block_from_molten_meteorite'));
    ['bronze', 'electrum', 'invar', 'constantan'].forEach(metalId => {
        compacting(`thermal:${metalId}_ingot`, Fluid.of(`r2aot:molten_${metalId}`, 1000)).superheated().id(kjs('compacting', `${metalId}_ingot_from_molten_${metalId}`));
    });

    filling('5x industrialforegoing:plastic', [Fluid.of('minecraft:water', 100), 'thermal:cured_rubber_block']).id(kjs('filling', 'plastic_by_filling'));

    const materials = ['andesite', 'cobblestone', 'gravel', 'sand', 'netherrack'];
    // 1 bonk
    materials.forEach(material => {
        create.createMechanicalExtruderExtruding(
            Item.of(`minecraft:${material}`),
            Array(2).fill(Fluid.of('r2aot:petal_essence', 1000))
        ).withCatalyst(`r2aot:double_compressed_${material}`).id(kjs('mechanical_extruder', `${material}_by_1_bonk`));
    });
    // 3 bonk
    materials.forEach(material => {
        create.createMechanicalExtruderExtruding(
            Item.of(`minecraft:${material}`),
            Array(2).fill(Fluid.of('r2aot:petal_essence', 1000))
        ).withCatalyst(`r2aot:compressed_${material}`).requiredBonks(3).id(kjs('mechanical_extruder', `${material}_by_3_bonk`));
    });
    // 5 bonk
    materials.forEach(material => {
        create.createMechanicalExtruderExtruding(
            Item.of(`minecraft:${material}`),
            Array(2).fill(Fluid.of('r2aot:petal_essence', 1000))
        ).withCatalyst(`minecraft:${material}`).requiredBonks(5).id(kjs('mechanical_extruder', `${material}_by_5_bonk`));
    });

    create.createMechanicalExtruderExtruding(
        'minecraft:obsidian',
        Array(2).fill(Fluid.of('r2aot:petal_essence', 1000))
    ).withCatalyst('minecraft:crying_obsidian').requiredBonks(10).id(kjs('mechanical_extruder', 'obsidian_by_10_bonk'));
})

