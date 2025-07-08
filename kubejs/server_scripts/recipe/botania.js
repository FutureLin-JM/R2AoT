ServerEvents.recipes(event => {
    // 花瓣相关配方
    let colors = [
        'white','orange','magenta','light_blue',
        'yellow','lime','pink','gray',
        'light_gray','cyan','purple','blue',
        'brown','green','red','black'
    ];

    // 修改花瓣块
    colors.forEach((color) => {
        event.shaped(`botania:${color}_petal_block`, [
            'ABA',
            'BAB',
            'ABA'
        ], {
            A:`botania:${color}_petal`,
            B:'minecraft:oak_leaves'
        }).id(`botania:${color}_petal_block`)
    });

    // 修改花瓣块拆解
    colors.forEach((color) => {
        event.shaped(`5x botania:${color}_petal`, [
            '   ',
            ' A ',
            '   '
        ], {
            A:`botania:${color}_petal_block`
        }).id(`botania:conversions/${color}_petal_block_deconstruct`)
    })

    // 羊毛
    colors.forEach((color) => {
        event.shaped(`2x minecraft:${color}_wool`, [
            'AA ',
            'AA ',
            '   '
        ], {
            A:`botania:${color}_petal_block`
        }).id(kjs('botania', `${color}_wool`))
    })

    colors.forEach((color) => {
        event.custom({
            type: "functionalstorage:custom_compacting",
            higher_input: {
                count: 1,
                item: `botania:${color}_petal_block`,
            },
            lower_input: {
                count: 5,
                item: `botania:${color}_petal`,
            },
        }).id(kjs('custom_compacting', `${color}_petal`));
    });

    // 火花
    event.shapeless('botania:spark_upgrade_dispersive', [
        'botania:mana_powder', 'botania:manasteel_ingot', 'botania:blue_petal'
    ]).id(kjs('spark_upgrade_dispersive'));
    event.shapeless('botania:spark_upgrade_dominant', [
        'botania:mana_powder', 'botania:manasteel_ingot', 'botania:orange_petal'
    ]).id(kjs('spark_upgrade_dominant'));
    event.shapeless('botania:spark_upgrade_recessive', [
        'botania:mana_powder', 'botania:manasteel_ingot', 'botania:lime_petal'
    ]).id(kjs('spark_upgrade_recessive'));
    event.shapeless('botania:spark_upgrade_isolated', [
        'botania:mana_powder', 'botania:manasteel_ingot', 'botania:light_blue_petal'
    ]).id(kjs('spark_upgrade_isolated'));
})

ServerEvents.recipes(event => {
    const { petal_apothecary, mana_infusion, runic_altar, elven_trade, } = event.recipes.botania;

    petal_apothecary(
        'botania:pure_daisy', 
        Array(4).fill('botania:white_petal').concat('create:andesite_casing').concat('create:andesite_alloy'),
        'minecraft:iron_ingot').id(kjs('petal_apothecary', 'pure_daisy'));

    petal_apothecary(
        'botania:hydroangeas',
        Array(2).fill('botania:blue_petal').concat(Array(2).fill('botania:cyan_petal')),
        'minecraft:lapis_lazuli').id(kjs('petal_apothecary', 'hydroangeas'));

    petal_apothecary(
        'r2aot:spinerette',
        Array(2).fill('botania:yellow_petal').concat(Array(2).fill('botania:cyan_petal')).concat('botania:manasteel_ingot').concat('botania:mana_powder'),
        'botania:mana_diamond').id(kjs('petal_apothecary', 'spinerette'));
    
    petal_apothecary(
        'botania:orechid',
        ['botania:gray_petal', 'botania:gray_petal', 'botania:yellow_petal', 'botania:green_petal', 'botania:red_petal', 'botania:redstone_root', 'botania:mana_powder'],
        'minecraft:quartz').id(kjs('petal_apothecary', 'orechid'));


    /**
     * 白雏菊配方
     * @param {OutputItem_} output - 输出物品的ID
     * @param {InputItem_|InputTag_} input - 输入物品或标签
     * @param {number} [time] - 运行时间（默认5）
     * @param {string} [id] - 自定义ID（可选）
     */
    function pureDaisyRecipes(output, input, time, id) {
        const setTime = 5;
        const inputObj = input.startsWith("#") ? { type: "tag", tag: input.substring(1) } : { type: "block", block: input };
        const idName = id ? id : output.split(':')[1];

        event.custom({
            type: "botania:pure_daisy",
            input: inputObj,
            output: {
                name: output
            },
            time: time ? time : setTime,
        }).id(kjs('pure_daisy', idName));
    }

    pureDaisyRecipes('botania:livingrock', '#forge:stone');
    pureDaisyRecipes('botania:livingwood_log', '#minecraft:logs');
    pureDaisyRecipes('minecraft:snow_block', 'minecraft:water');

    const addPetalOreRecipe = {
        'botania:black_petal_block':'r2aot:petal_coal_ore',
        'botania:white_petal_block':'r2aot:petal_iron_ore',
        'botania:orange_petal_block':'r2aot:petal_copper_ore',
        'botania:blue_petal_block':'r2aot:petal_lapis_ore',
        'botania:yellow_petal_block':'r2aot:petal_gold_ore',
        'botania:red_petal_block':'r2aot:petal_redstone_ore',
        'botania:light_blue_petal_block':'r2aot:petal_diamond_ore',
        'botania:lime_petal_block':'r2aot:petal_emerald_ore'
    }
    Object.entries(addPetalOreRecipe).forEach(([input, output]) => {
        pureDaisyRecipes(output, input)
    })

    mana_infusion('botania:mana_powder', 'minecraft:redstone', 500).id('botania:mana_infusion/mana_powder_dust');
    mana_infusion('ae2:certus_quartz_crystal', 'botania:quartz_mana', 500).id(kjs('mana_infusion', 'certus_quartz_crystal'));

    runic_altar('2x botania:rune_water',
        ['botania:mana_powder', '#botania:manasteel_ingots', 'mysticalagriculture:water_essence', 'minecraft:sugar_cane', 'minecraft:fishing_rod'],
        5200
    ).id('botania:runic_altar/water');
    runic_altar('2x botania:rune_fire',
        ['botania:mana_powder', '#botania:manasteel_ingots', 'mysticalagriculture:fire_essence', 'minecraft:nether_brick', 'minecraft:glowstone_dust'],
        5200
    ).id('botania:runic_altar/fire');
    runic_altar('2x botania:rune_earth',
        ['botania:mana_powder', '#botania:manasteel_ingots', 'mysticalagriculture:earth_essence', 'minecraft:coal_block', 'minecraft:stone'],
        5200
    ).id('botania:runic_altar/earth');
    runic_altar('2x botania:rune_air',
        ['botania:mana_powder', '#botania:manasteel_ingots', 'mysticalagriculture:air_essence', 'minecraft:string', '#minecraft:wool_carpets'],
        5200
    ).id('botania:runic_altar/air');
    runic_altar('r2aot:rune_elemental',
        ['botania:rune_water', 'botania:rune_fire', 'botania:rune_earth', 'botania:rune_air'],
        8000
    ).id('kubejs:runic_altar/elemental');
})