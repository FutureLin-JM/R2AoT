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
        ], {A:`botania:${color}_petal_block`})
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
        });
    });

    // 火花
    event.shapeless('botania:spark_upgrade_dispersive', [
        'botania:mana_powder', 'botania:manasteel_ingot', 'botania:blue_petal'
    ]).id('botania:spark_upgrade_dispersive');
    event.shapeless('botania:spark_upgrade_dominant', [
        'botania:mana_powder', 'botania:manasteel_ingot', 'botania:orange_petal'
    ]).id('botania:spark_upgrade_dominant');
    event.shapeless('botania:spark_upgrade_recessive', [
        'botania:mana_powder', 'botania:manasteel_ingot', 'botania:lime_petal'
    ]).id('botania:spark_upgrade_recessive');
    event.shapeless('botania:spark_upgrade_isolated', [
        'botania:mana_powder', 'botania:manasteel_ingot', 'botania:light_blue_petal'
    ]).id('botania:spark_upgrade_isolated');
})

ServerEvents.recipes(event => {
    const { petal_apothecary, mana_infusion, runic_altar, elven_trade, } = event.recipes.botania;
    const id_mana_infusion = 'botania:mana_infusion/kjs/'
    const id_runic_altar = 'botania:runic_altar/kjs/'

    petal_apothecary(
        'botania:pure_daisy', 
        Array(4).fill('botania:white_petal').concat('create:andesite_casing').concat('create:andesite_alloy'),
        'minecraft:iron_ingot').id('botania:petal_apothecary/pure_daisy');

    petal_apothecary(
        'botania:hydroangeas',
        Array(2).fill('botania:blue_petal').concat(Array(2).fill('botania:cyan_petal')),
        'minecraft:lapis_lazuli').id('botania:petal_apothecary/hydroangeas');

    petal_apothecary(
        'r2aot:spinerette',
        Array(2).fill('botania:yellow_petal').concat(Array(2).fill('botania:cyan_petal')).concat('botania:manasteel_ingot').concat('botania:mana_powder'),
        'botania:mana_diamond').id('botania:petal_apothecary/spinerette');
    
    petal_apothecary(
        'botania:orechid',
        ['botania:gray_petal', 'botania:gray_petal', 'botania:yellow_petal', 'botania:green_petal', 'botania:red_petal', 'botania:redstone_root', 'botania:mana_powder'],
        'minecraft:quartz').id('botania:petal_apothecary/orechid');


    /**
     * 白雏菊配方
     * @param {string} inputType - 输入物品的类型（如"tag"或"block"）
     * @param {string} inputItem - 输入物品的ID
     * @param {string} outputItem - 输出物品的ID
     */
    function pureDaisyRecipes(event, inputType, inputItem, outputItem) {
        const setTime = 5;

        const inputObj = {};
        inputObj.type = inputType;
        inputObj[inputType] = inputItem;

        event.custom({
            type: "botania:pure_daisy",
            input: inputObj,
            output: {
                name: outputItem
            },
            time: setTime,
        })
    };

    pureDaisyRecipes(event, 'tag', 'forge:stone', 'botania:livingrock');
    pureDaisyRecipes(event, 'tag', 'minecraft:logs', 'botania:livingwood_log');
    pureDaisyRecipes(event, 'block', 'minecraft:water', 'minecraft:snow_block');
    // pureDaisyRecipes(event, block, '')

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
        pureDaisyRecipes(event, 'block', input, output)
    })

    mana_infusion('botania:mana_powder', 'minecraft:redstone', 500).id('botania:mana_infusion/mana_powder_dust');
    mana_infusion('ae2:certus_quartz_crystal', 'botania:quartz_mana', 500).id(`${id_mana_infusion}certus_quartz_crystal`);

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