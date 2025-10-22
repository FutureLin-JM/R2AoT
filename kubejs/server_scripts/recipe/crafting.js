ServerEvents.recipes(event => {
    const { kubejs, minecraft } = event.recipes;
    const add3x3Recipes = {
        'minecraft:grass_block': 'minecraft:oak_leaves',
        'r2aot:compressed_cobblestone': 'minecraft:cobblestone',
        'r2aot:double_compressed_cobblestone': 'r2aot:compressed_cobblestone',
        'r2aot:compressed_andesite': 'minecraft:andesite',
        'r2aot:double_compressed_andesite': 'r2aot:compressed_andesite',
        'r2aot:compressed_gravel': 'minecraft:gravel',
        'r2aot:double_compressed_gravel': 'r2aot:compressed_gravel',
        'r2aot:compressed_sand': 'minecraft:sand',
        'r2aot:double_compressed_sand': 'r2aot:compressed_sand',
        'r2aot:creative_casing': 'r2aot:creative_casing_shard',
    };
    Object.entries(add3x3Recipes).forEach(([output, input]) => {
        const outputName = output.split(':')[1];
        kubejs.shaped(output, ['AAA', 'AAA', 'AAA'], { A: input }).id(kjs(`${outputName}_3x3`));
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
        kubejs.shaped(`9x ${output}`, ['   ', ' A ', '   '], { A: input }).id(kjs(`${outputName}_3x3_reverse`));
    });

    const add9Functionalstorage = {
        'r2aot:compressed_cobblestone': 'minecraft:cobblestone',
        'r2aot:double_compressed_cobblestone': 'r2aot:compressed_cobblestone',
        'r2aot:compressed_andesite': 'minecraft:andesite',
        'r2aot:double_compressed_andesite': 'r2aot:compressed_andesite',
        'r2aot:compressed_gravel': 'minecraft:gravel',
        'r2aot:double_compressed_gravel': 'r2aot:compressed_gravel',
        'r2aot:compressed_sand': 'minecraft:sand',
        'r2aot:double_compressed_sand': 'r2aot:compressed_sand',
    };
    Object.entries(add9Functionalstorage).forEach(([higherItem, lowerItem]) => {
        const outputName = higherItem.split(':')[1];
        event
            .custom({
                type: 'functionalstorage:custom_compacting',
                higher_input: {
                    count: 1,
                    item: higherItem,
                },
                lower_input: {
                    count: 9,
                    item: lowerItem,
                },
            })
            .id(kjs('custom_compacting', outputName));
    });

    // 彩虹花源块
    kubejs
        .shapeless('r2aot:rainbow_petal_block', [
            'botania:white_petal_block',
            'botania:red_petal_block',
            'botania:orange_petal_block',
            'botania:yellow_petal_block',
            'botania:green_petal_block',
            'botania:blue_petal_block',
            'botania:purple_petal_block',
        ])
        .id(kjs('rainbow_petal_block'));

    // 圆石
    kubejs
        .shaped('minecraft:cobblestone', ['GG ', 'GG ', '   '], { G: 'botania:gray_petal' })
        .id(kjs('botania', 'cobblestone'));

    // 安山岩
    kubejs
        .shaped('4x minecraft:andesite', ['CCC', 'CGC', 'CCC'], {
            C: 'minecraft:cobblestone',
            G: 'botania:gray_petal',
        })
        .id(kjs('botania', 'andesite'));

    // 模拟室、战利品制造器
    kubejs
        .shaped('hostilenetworks:sim_chamber', [' P ', 'DOD', 'LCL'], {
            P: '#forge:glass_panes',
            D: 'botania:mana_diamond',
            O: '#forge:obsidian',
            L: '#forge:gems/lapis',
            C: 'minecraft:comparator',
        })
        .id('hostilenetworks:sim_chamber');
    kubejs
        .shaped('hostilenetworks:loot_fabricator', [' P ', 'EOE', 'LCL'], {
            P: 'botania:manasteel_ingot',
            E: '#forge:gems/diamond',
            O: '#forge:obsidian',
            L: '#forge:ingots/gold',
            C: 'minecraft:comparator',
        })
        .id('hostilenetworks:loot_fabricator');

    // 激光钻
    kubejs
        .shaped('2x industrialforegoing:laser_drill', ['pfp', 'bmb', 'grg'], {
            p: '#forge:plastic',
            f: '#forge:gears/diamond',
            b: 'minecraft:piston',
            m: '#industrialforegoing:machine_frame/simple',
            g: '#forge:gears/gold',
            r: 'minecraft:redstone',
        })
        .id(kjs('industrialforegoing_laser_drill'));

    // 树苗
    kubejs
        .shaped('minecraft:oak_sapling', ['GGG', ' G ', ' G '], {
            G: 'botania:green_petal',
        })
        .id(kjs('botania', 'oak_sapling'));

    // 木剪刀
    kubejs
        .shaped('r2aot:wooden_shears', [' O ', '  O', 'B  '], {
            B: 'botania:brown_petal',
            O: 'minecraft:oak_planks',
        })
        .id(kjs('r2aot_wooden_shears'));

    // 桶
    kubejs
        .shaped('minecraft:bucket', ['W W', ' W ', '   '], {
            W: 'botania:white_petal',
        })
        .id(kjs('botania', 'bucket'));

    // 锤子
    kubejs
        .shaped('r2aot:wooden_hammer', [' A ', ' BA', 'B  '], {
            A: 'minecraft:oak_log',
            B: 'minecraft:stick',
        })
        .id(kjs('wooden_hammer'));
    kubejs
        .shaped('r2aot:stone_hammer', ['  A', ' B ', 'C  '], {
            A: 'minecraft:cobblestone',
            B: 'r2aot:wooden_hammer',
            C: 'minecraft:stick',
        })
        .id(kjs('stone_hammer'));

    // 压缩锤子
    kubejs
        .shaped('r2aot:compressed_wooden_hammer', [' AA', ' AA', 'B  '], {
            A: 'r2aot:wooden_hammer',
            B: 'minecraft:stick',
        })
        .id(kjs('compressed_wooden_hammer'));
    kubejs
        .shaped('r2aot:compressed_stone_hammer', [' AA', ' AA', 'B  '], {
            A: 'r2aot:stone_hammer',
            B: 'minecraft:stick',
        })
        .id(kjs('compressed_stone_hammer'));

    // 物品管道
    kubejs
        .shaped('16x pipez:item_pipe', ['AAA', 'BCB', 'AAA'], {
            A: 'botania:black_petal_block',
            B: 'botania:orange_petal_block',
            C: 'minecraft:chest',
        })
        .id(kjs('pipez_item_pipe'));

    // 流体管道
    kubejs
        .shaped('16x pipez:fluid_pipe', ['AAA', 'BCB', 'AAA'], {
            A: 'botania:black_petal_block',
            B: 'botania:light_blue_petal_block',
            C: 'minecraft:bucket',
        })
        .id(kjs('pipez_fluid_pipe'));

    kubejs
        .shaped('4x minecraft:chest', ['AAA', 'A A', 'AAA'], {
            A: '#minecraft:logs',
        })
        .id(kjs('chest_from_logs'));

    // 魔力池
    kubejs
        .shaped('botania:mana_pool', ['   ', 'ABA', 'AAA'], {
            A: 'botania:livingrock',
            B: 'botania:mana_diamond',
        })
        .id(kjs('botania_mana_pool_manual_only'));

    // 熔炉组件Level1
    kubejs
        .shaped('r2aot:iron_furnace_component', ['AAA', 'ABA', 'ACA'], {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:furnace',
            C: 'minecraft:iron_block',
        })
        .id(kjs('iron_furnace_component'));
    kubejs
        .shaped('r2aot:copper_furnace_component', ['AAA', 'ABA', 'ACA'], {
            A: 'minecraft:copper_ingot',
            B: 'minecraft:furnace',
            C: 'minecraft:copper_block',
        })
        .id(kjs('copper_furnace_component'));
    kubejs
        .shaped('r2aot:gold_furnace_component', ['AAA', 'ABA', 'ACA'], {
            A: 'minecraft:gold_ingot',
            B: 'minecraft:furnace',
            C: 'minecraft:gold_block',
        })
        .id(kjs('gold_furnace_component'));

    kubejs
        .shapeless('r2aot:data_model_base', ['hostilenetworks:blank_data_model'])
        .id(kjs('hostilenetworks_data_model_base'));

    // 安山合金
    kubejs
        .shaped('2x create:andesite_alloy', ['AB ', 'BA ', '   '], {
            A: 'minecraft:andesite',
            B: 'r2aot:green_gravel_shard',
        })
        .id(kjs('andesite_alloy'));

    // 安山机壳
    kubejs
        .shaped('create:andesite_casing', ['ABA', 'BCB', 'ABA'], {
            A: 'botania:light_gray_petal',
            B: 'create:andesite_alloy',
            C: 'minecraft:stripped_oak_log',
        })
        .id(kjs('andesite_casing'));

    // 风帆框架
    kubejs
        .shaped('16x create:sail_frame', ['AAA', 'ABA', 'AAA'], {
            A: '#forge:rods/wooden',
            B: 'create:andesite_alloy',
        })
        .id(kjs('sail_frame'));

    // 石磨
    kubejs
        .shaped('create:millstone', [' A ', ' B ', ' C '], {
            A: 'create:cogwheel',
            B: 'create:andesite_casing',
            C: 'botania:livingrock',
        })
        .id('create:crafting/kinetics/millstone');

    // 应力传输器
    kubejs
        .shaped('createendertransmission:energy_transmitter', ['ABA', 'ACA', 'ADA'], {
            A: 'minecraft:obsidian',
            B: 'create:shaft',
            C: 'create:precision_mechanism',
            D: 'minecraft:ender_pearl',
        })
        .id(kjs('energy_transmitter'));

    // 初级种子
    kubejs
        .shaped('r2aot:prudentium_crop_seed', ['AAA', 'ABA', 'AAA'], {
            A: 'mysticalagriculture:prudentium_essence',
            B: 'mysticalagriculture:inferium_seeds',
        })
        .id(kjs('prudentium_crop_seed'));

    // 热力组件
    kubejs
        .shaped('thermal:upgrade_augment_1', ['IGI', 'RXR', 'IGI'], {
            I: '#forge:ingots/invar',
            G: '#forge:glass',
            R: '#forge:dusts/redstone',
            X: '#forge:gears/lumium',
        })
        .id(kjs('upgrade_augment_1'));
    minecraft
        .smithing_transform(
            'thermal:upgrade_augment_2',
            'thermal_extra:augment_smithing_upgrade',
            'thermal:upgrade_augment_1',
            '#forge:gears/signalum'
        )
        .id(kjs('smithing', 'upgrade_augment_2'));
    minecraft
        .smithing_transform(
            'thermal:upgrade_augment_3',
            'thermal_extra:augment_smithing_upgrade',
            'thermal:upgrade_augment_2',
            '#forge:gears/enderium'
        )
        .id(kjs('smithing', 'upgrade_augment_3'));

    // 创造魔力石板
    kubejs
        .shapeless(Item.of('botania:mana_tablet', 2, '{creative:1b,mana:500000}'), [
            'botania:terrasteel_nugget',
            Item.of('botania:mana_tablet', '{creative:1b,mana:500000}').weakNBT(),
        ])
        .id(kjs('botania_mana_tablet_creative_copy'));

    // 创造魔力池
    kubejs
        .shaped('botania:creative_pool', ['ABA', 'ACA', 'AAA'], {
            A: 'botania:shimmerrock',
            B: 'botania:terrasteel_ingot',
            C: Item.of('botania:mana_tablet', '{creative:1b,mana:500000}').weakNBT(),
        })
        .id(kjs('botania_creative_pool'));
    kubejs
        .shapeless('2x botania:creative_pool', ['botania:terrasteel_ingot', 'botania:creative_pool'])
        .id(kjs('botania_creative_pool_copy'));

    // 流体魔源通道
    kubejs
        .shaped('r2aot:fluid_sourcelink', [' S ', 'GBG', ' S '], {
            S: 'ars_nouveau:source_gem',
            G: '#forge:ingots/gold',
            B: 'r2aot:mana_liquidizer',
        })
        .id(kjs('fluid_sourcelink'));

    // 神秘方块
    kubejs
        .shaped('ae2:mysterious_cube', ['ABA', 'BCB', 'ABA'], {
            A: 'r2aot:creative_casing_shard',
            B: 'ae2:certus_quartz_crystal',
            C: 'minecraft:iron_block',
        })
        .id(kjs('ae2_mysterious_cube'));

    kubejs
        .shapeless('4x minecraft:nether_wart', ['hostilenetworks:nether_prediction', '#forge:seeds'])
        .id(kjs('nether_wart_from_prediction'));
});
