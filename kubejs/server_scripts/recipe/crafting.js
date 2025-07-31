ServerEvents.recipes(event => {
    const add3x3Recipes ={
        'minecraft:grass_block': 'minecraft:oak_leaves',
        'r2aot:compressed_cobblestone': 'minecraft:cobblestone',
        'r2aot:double_compressed_cobblestone':'r2aot:compressed_cobblestone',
        'r2aot:compressed_andesite': 'minecraft:andesite',
        'r2aot:double_compressed_andesite':'r2aot:compressed_andesite',
        'r2aot:compressed_gravel': 'minecraft:gravel',
        'r2aot:double_compressed_gravel':'r2aot:compressed_gravel',
        'r2aot:compressed_sand': 'minecraft:sand',
        'r2aot:double_compressed_sand':'r2aot:compressed_sand',
        'r2aot:creative_casing': 'r2aot:creative_casing_shard',
    };
    Object.entries(add3x3Recipes).forEach(([output, input]) => {
        const outputName = output.split(':')[1];
        event.shaped(output, ['AAA','AAA','AAA'], {A: input}).id(kjs(`${outputName}_3x3`))
    });

    const reverse3x3Recipes = {
        'minecraft:cobblestone': 'r2aot:compressed_cobblestone',
        'r2aot:compressed_cobblestone': 'r2aot:double_compressed_cobblestone',
        'minecraft:andesite': 'r2aot:compressed_andesite',
        'r2aot:compressed_andesite': 'r2aot:double_compressed_andesite',
        'minecraft:gravel': 'r2aot:compressed_gravel',
        'r2aot:compressed_gravel': 'r2aot:double_compressed_gravel',
        'minecraft:sand': 'r2aot:compressed_sand',
        'r2aot:compressed_sand': 'r2aot:double_compressed_sand',
    };
    Object.entries(reverse3x3Recipes).forEach(([output, input]) => {
        const outputName = output.split(':')[1];
        event.shaped(`9x ${output}`, ['   ', ' A ', '   '], { A: input }).id(kjs(`${outputName}_3x3_reverse`))
    });

    const add9Functionalstorage = {
        'r2aot:compressed_cobblestone': 'minecraft:cobblestone',
        'r2aot:double_compressed_cobblestone':'r2aot:compressed_cobblestone',
        'r2aot:compressed_andesite': 'minecraft:andesite',
        'r2aot:double_compressed_andesite':'r2aot:compressed_andesite',
        'r2aot:compressed_gravel': 'minecraft:gravel',
        'r2aot:double_compressed_gravel':'r2aot:compressed_gravel',
        'r2aot:compressed_sand': 'minecraft:sand',
        'r2aot:double_compressed_sand':'r2aot:compressed_sand',
    }
    Object.entries(add9Functionalstorage).forEach(([higherItem, lowerItem]) => {
        const outputName = higherItem.split(':')[1];
        event.custom({
            type: "functionalstorage:custom_compacting",
            higher_input: {
                count: 1,
                item: higherItem,
            },
            lower_input: {
                count: 9,
                item: lowerItem,
            },
        }).id(kjs('custom_compacting', outputName));
    });

    // 彩虹花源块
    event.shapeless('r2aot:rainbow_petal_block', [
        'botania:white_petal_block', 'botania:red_petal_block', 'botania:orange_petal_block',
        'botania:yellow_petal_block', 'botania:green_petal_block', 'botania:blue_petal_block',
        'botania:purple_petal_block',
    ]).id(kjs('rainbow_petal_block'));

    // 圆石
    event.shaped('minecraft:cobblestone', [
        'GG ',
        'GG ',
        '   '
    ], {G:'botania:gray_petal'}).id(kjs('botania', 'cobblestone'));

    // 安山岩
    event.shaped('4x minecraft:andesite', [
        'CCC',
        'CGC',
        'CCC'
    ], {
        C:'minecraft:cobblestone',
        G:'botania:gray_petal'
    }).id(kjs('botania', 'andesite'));

    // 模拟室、战利品制造器
    event.shaped(
    'hostilenetworks:sim_chamber', [
        ' P ',
        'DOD',
        'LCL'
    ],{
        P: '#forge:glass_panes',
        D: 'botania:mana_diamond',
        O: '#forge:obsidian',
        L: '#forge:gems/lapis',
        C: 'minecraft:comparator'
    }).id('hostilenetworks:sim_chamber');
    event.shaped(
    'hostilenetworks:loot_fabricator', [
        ' P ',
        'EOE',
        'LCL'
    ],{
        P: 'botania:manasteel_ingot',
        E: '#forge:gems/diamond',
        O: '#forge:obsidian',
        L: '#forge:ingots/gold',
        C: 'minecraft:comparator'
    }).id('hostilenetworks:loot_fabricator');

    // 激光钻
    event.shaped('2x industrialforegoing:laser_drill',[
        'pfp',
        'bmb',
        'grg'
    ],{
        p: '#forge:plastic',
        f: '#forge:gears/diamond',
        b: 'minecraft:piston',
        m: '#industrialforegoing:machine_frame/simple',
        g: '#forge:gears/gold',
        r: 'minecraft:redstone'
    }).id(kjs('industrialforegoing_laser_drill'))
    
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
    }).id(kjs('botania_mana_pool_manual_only'));

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

    // 热力组件
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

    // 创造魔力石板
    event.shapeless(Item.of('botania:mana_tablet', 2, '{creative:1b,mana:500000}'), [
        'botania:terrasteel_nugget', Item.of('botania:mana_tablet', '{creative:1b,mana:500000}').weakNBT()
    ]).id(kjs('botania_mana_tablet_creative_copy'));

    // 创造魔力池
    event.shaped('botania:creative_pool', [
        'ABA',
        'ACA',
        'AAA'
    ], {
        A: 'botania:shimmerrock',
        B: 'botania:terrasteel_ingot',
        C: Item.of('botania:mana_tablet', '{creative:1b,mana:500000}').weakNBT()
    }).id(kjs('botania_creative_pool'));
    event.shapeless('2x botania:creative_pool', [
        'botania:terrasteel_ingot', 'botania:creative_pool'
    ]).id(kjs('botania_creative_pool_copy'))

    // 流体魔源通道
    event.shaped('r2aot:fluid_sourcelink', [
        " S ",
        "GBG",
        " S "
    ], {
        S: 'ars_nouveau:source_gem',
        G: '#forge:ingots/gold',
        B: 'r2aot:mana_liquidizer'
    }).id(kjs('fluid_sourcelink'));
})

