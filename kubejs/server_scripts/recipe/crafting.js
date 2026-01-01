ServerEvents.recipes(event => {
    const { kubejs, minecraft } = event.recipes;
    const add3x3Recipes = {
        'minecraft:grass_block': 'minecraft:oak_leaves',
        'r2aot:creative_casing': 'r2aot:creative_casing_shard',
    };
    Object.entries(add3x3Recipes).forEach(([output, input]) => {
        const outputName = output.split(':')[1];
        kubejs.shaped(output, ['AAA', 'AAA', 'AAA'], { A: input }).id(kjs(`${outputName}_3x3`));
    });

    event
        .custom({
            type: 'functionalstorage:custom_compacting',
            higher_input: {
                count: 1,
                item: 'minecraft:snow_block',
            },
            lower_input: {
                count: 4,
                item: 'minecraft:snowball',
            },
        })
        .id(kjs('custom_compacting', 'snow_block'));

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
            X: '#forge:gears/signalum',
        })
        .id(kjs('upgrade_augment_1'));
    minecraft
        .smithing_transform(
            'thermal:upgrade_augment_2',
            'thermal_extra:augment_smithing_upgrade',
            'thermal:upgrade_augment_1',
            '#forge:gears/lumium'
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

    // 下界疣
    kubejs
        .shapeless('4x minecraft:nether_wart', ['hostilenetworks:nether_prediction', '#forge:seeds'])
        .id(kjs('nether_wart_from_prediction'));

    // Wilden生物数据模型
    kubejs
        .shapeless(
            Item.of(
                'hostilenetworks:data_model',
                '{data_model:{data:1254,id:"hostilenetworks:ars_nouveau/wilden_mobs"}}'
            ).strongNBT(),
            Item.of(
                'hostilenetworks:data_model',
                '{data_model:{id:"hostilenetworks:ars_nouveau/wilden_mobs"}}'
            ).weakNBT()
        )
        .id(kjs('data_model_wilden_mobs'));

    // 流体灌装机
    kubejs
        .shaped('thermal:machine_bottler', [' X ', 'YCY', 'IPI'], {
            X: 'minecraft:bucket',
            Y: '#thermal:glass/hardened',
            C: 'thermal:machine_frame',
            I: '#forge:gears/energized_steel',
            P: 'thermal:rf_coil',
        })
        .id(kjs('thermal_machine_bottler'));

    // 结晶器
    kubejs
        .shaped('thermal:machine_crystallizer', [' X ', 'YCY', 'IPI'], {
            X: '#thermal:glass/hardened',
            Y: '#forge:plates/signalum',
            C: 'thermal:machine_frame',
            I: '#forge:gears/energized_steel',
            P: 'thermal:rf_coil',
        })
        .id(kjs('thermal_machine_crystallizer'));

    // 热力拓展组件
    kubejs
        .shaped('thermal_extra:upgrade_augment', ['IAI', 'GXG', 'IAI'], {
            A: '#forge:gears/blazing_crystal',
            G: '#forge:gears/dragonsteel',
            I: 'thermal_extra:ancient_dust',
            X: 'thermal:upgrade_augment_3',
        })
        .id(kjs('dragonsteel_integral_component'));

    kubejs
        .shaped('thermal_extra:abyssal_upgrade_augment', ['IAI', 'GXG', 'IAI'], {
            A: '#forge:gears/niotic_crystal',
            G: '#forge:gears/abyssal',
            I: 'thermal_extra:ancient_dust',
            X: 'thermal_extra:upgrade_augment',
        })
        .id(kjs('abyssal_integral_component'));

    kubejs
        .shaped('thermalendergy:endergy_upgrade_2', ['IXI', 'GCG', 'IXI'], {
            C: 'thermalendergy:endergy_upgrade_1',
            G: '#forge:gears/prismalium',
            I: '#forge:ingots/melodium',
            X: '#forge:gears/spirited_crystal',
        })
        .id(kjs('endergy_upgrade_2'));

    kubejs
        .shaped('thermalendergy:endergy_upgrade_2', ['IXI', 'GCG', 'IXI'], {
            C: 'thermal_extra:abyssal_upgrade_augment',
            G: '#forge:gears/prismalium',
            I: '#forge:ingots/melodium',
            X: '#forge:gears/spirited_crystal',
        })
        .id(kjs('endergy_upgrade_2_2'));

    kubejs
        .shapeless('thermalendergy:endergy_upgrade_1', 'thermal_extra:abyssal_upgrade_augment')
        .id(kjs('endergy_upgrade_1'));

    kubejs
        .shaped('r2aot:bifrost_prism', ['GPG', 'GSG', 'GPG'], {
            G: 'botania:bifrost_perm',
            P: '#forge:dusts/glowstone',
            S: 'botania:pixie_dust',
        })
        .id(kjs('bifrost_prism'));

    const oreCompression = [
        { type: 'buddycard_ore_block_4x', value: 50 },
        { type: 'buddycard_ore_block_5x', value: 100 },
    ];
    oreCompression.forEach(tag => {
        kubejs
            .shapeless('buddycards:buddycard_base27', [
                Item.of('buddycards:buddycard_base27').strongNBT(),
                `#r2aot:${tag.type}`,
            ])
            .modifyResult((inventory, itemStack) => {
                let inputOre = inventory.find(Ingredient.of(`#r2aot:${tag.type}`));
                let oreType = inputOre.id.split(':')[1].split('_')[0];
                itemStack.setNbt(`{ ${oreType}: ${tag.value} }`);
                return itemStack;
            })
            .id(kjs(`buddycard_base27_${tag.type}`));
    });

    kubejs
        .shaped('mechanicalbotania:mana_motor', ['AAA', 'TXT', 'TRT'], {
            A: 'create:andesite_alloy',
            R: 'botania:mana_powder',
            T: 'botania:manasteel_block',
            X: 'create:shaft',
        })
        .id(kjs('mana_motor'));
});
