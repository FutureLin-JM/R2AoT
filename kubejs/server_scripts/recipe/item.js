ServerEvents.recipes(event => {
    // 树苗
    event.shaped('minecraft:oak_sapling', [
        'GGG',
		' G ',
		' G '
    ], {
        G:'botania:green_petal'
    });
    
    // 木剪刀
    event.shaped('r2aot:wooden_shears', [
        ' O ',
		'  O',
		'B  '
    ], {
        B:'botania:brown_petal',
        O:'minecraft:oak_planks'
    });

    // 桶
    event.shaped('minecraft:bucket', [
        'W W',
        ' W ',
        '   '
    ], {
        W:'botania:white_petal'
    });

    // 锤子
    event.shaped('r2aot:wooden_hammer', [
        ' A ',
        ' BA',
        'B  '
    ], {
        A:'minecraft:oak_log',
        B:'minecraft:stick'
    });
    event.shaped('r2aot:stone_hammer', [
        '  A',
        ' B ',
        'C  '
    ], {
        A:'minecraft:cobblestone',
        B:'r2aot:wooden_hammer',
        C:'minecraft:stick'
    });

    // 压缩锤子
    event.shaped('r2aot:compressed_wooden_hammer', [
        ' AA',
        ' AA',
        'B  '
    ], {
        A:'r2aot:wooden_hammer',
        B:'minecraft:stick'
    });
    event.shaped('r2aot:compressed_stone_hammer', [
        ' AA',
        ' AA',
        'B  '
    ], {
        A:'r2aot:stone_hammer',
        B:'minecraft:stick'
    });

    // 物品管道
    event.shaped('16x pipez:item_pipe', [
        'AAA',
        'BCB',
        'AAA'
    ],{
        A:'botania:black_petal_block',
        B:'botania:orange_petal_block',
        C: 'minecraft:chest'
    })

    // 流体管道
    event.shaped('16x pipez:fluid_pipe', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A:'botania:black_petal_block',
        B:'botania:light_blue_petal_block',
        C:'minecraft:bucket'
    })

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
    });
    event.shaped('r2aot:copper_furnace_component', [
        'AAA',
        'ABA',
        'ACA'
    ], {
        A:'minecraft:copper_ingot',
        B:'minecraft:furnace',
        C:'minecraft:copper_block'
    });
    event.shaped('r2aot:gold_furnace_component', [
        'AAA',
        'ABA',
        'ACA'
    ], {
        A:'minecraft:gold_ingot',
        B:'minecraft:furnace',
        C:'minecraft:gold_block'
    });

    event.shapeless('r2aot:data_model_base', [
        'hostilenetworks:blank_data_model'
    ]);

    // 初级种子
    event.shaped('r2aot:prudentium_crop_seed', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A:'mysticalagriculture:prudentium_essence',
        B:'mysticalagriculture:inferium_seeds'
    });

})

