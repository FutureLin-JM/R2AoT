ServerEvents.recipes(event => {
    // 树苗
    event.shaped('minecraft:oak_sapling', [
        'GGG',
		' G ',
		' G '
    ], {
        G:'botania:green_petal'
    }).id(kjs('botania', 'oak_sapling'));
    
    // 木剪刀
    event.shaped('r2aot:wooden_shears', [
        ' O ',
		'  O',
		'B  '
    ], {
        B:'botania:brown_petal',
        O:'minecraft:oak_planks'
    }).id(kjs('r2aot_wooden_shears'));

    // 桶
    event.shaped('minecraft:bucket', [
        'W W',
        ' W ',
        '   '
    ], {
        W:'botania:white_petal'
    }).id(kjs('botania', 'bucket'));

    // 锤子
    event.shaped('r2aot:wooden_hammer', [
        ' A ',
        ' BA',
        'B  '
    ], {
        A:'minecraft:oak_log',
        B:'minecraft:stick'
    }).id(kjs('wooden_hammer'));
    event.shaped('r2aot:stone_hammer', [
        '  A',
        ' B ',
        'C  '
    ], {
        A:'minecraft:cobblestone',
        B:'r2aot:wooden_hammer',
        C:'minecraft:stick'
    }).id(kjs('stone_hammer'));

    // 压缩锤子
    event.shaped('r2aot:compressed_wooden_hammer', [
        ' AA',
        ' AA',
        'B  '
    ], {
        A:'r2aot:wooden_hammer',
        B:'minecraft:stick'
    }).id(kjs('compressed_wooden_hammer'));
    event.shaped('r2aot:compressed_stone_hammer', [
        ' AA',
        ' AA',
        'B  '
    ], {
        A:'r2aot:stone_hammer',
        B:'minecraft:stick'
    }).id(kjs('compressed_stone_hammer'));

    // 物品管道
    event.shaped('16x pipez:item_pipe', [
        'AAA',
        'BCB',
        'AAA'
    ],{
        A:'botania:black_petal_block',
        B:'botania:orange_petal_block',
        C: 'minecraft:chest'
    }).id(kjs('pipez_item_pipe'));

    // 流体管道
    event.shaped('16x pipez:fluid_pipe', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A:'botania:black_petal_block',
        B:'botania:light_blue_petal_block',
        C:'minecraft:bucket'
    }).id(kjs('pipez_fluid_pipe'));

    // 魔力池
    event.shaped('botania:mana_pool', [
        '   ',
        'ABA',
        'AAA'
    ], {
        A:'botania:livingrock',
        B:'botania:mana_diamond'
    }).id('botania:mana_pool_manual_only');

    // 熔炉组件Level1
    event.shaped('r2aot:iron_furnace_component', [
        'AAA',
        'ABA',
        'ACA'
    ], {
        A:'minecraft:iron_ingot',
        B:'minecraft:furnace',
        C:'minecraft:iron_block'
    }).id(kjs('iron_furnace_component'));
    event.shaped('r2aot:copper_furnace_component', [
        'AAA',
        'ABA',
        'ACA'
    ], {
        A:'minecraft:copper_ingot',
        B:'minecraft:furnace',
        C:'minecraft:copper_block'
    }).id(kjs('copper_furnace_component'));
    event.shaped('r2aot:gold_furnace_component', [
        'AAA',
        'ABA',
        'ACA'
    ], {
        A:'minecraft:gold_ingot',
        B:'minecraft:furnace',
        C:'minecraft:gold_block'
    }).id(kjs('gold_furnace_component'));

    event.shapeless('r2aot:data_model_base', [
        'hostilenetworks:blank_data_model'
    ]).id(kjs('hostilenetworks_data_model_base'));

    // 初级种子
    event.shaped('r2aot:prudentium_crop_seed', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A:'mysticalagriculture:prudentium_essence',
        B:'mysticalagriculture:inferium_seeds'
    }).id(kjs('prudentium_crop_seed'));

    event.shaped('thermal:upgrade_augment_1', [
        'IGI',
        'RXR',
        'IGI'
    ],{
        I: '#forge:ingots/invar',
        G: '#forge:glass', 
        R: '#forge:dusts/redstone',
        X: '#forge:gears/lumium'
    }).id(kjs('upgrade_augment_1'));

    event.smithing('thermal:upgrade_augment_2',
        'thermal_extra:augment_smithing_upgrade', 'thermal:upgrade_augment_1', '#forge:gears/signalum'
    ).id(kjs('smithing', 'upgrade_augment_2'));
    event.smithing('thermal:upgrade_augment_3',
        'thermal_extra:augment_smithing_upgrade', 'thermal:upgrade_augment_2', '#forge:gears/enderium'
    ).id(kjs('smithing', 'upgrade_augment_3'));
})

