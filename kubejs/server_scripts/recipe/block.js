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
})