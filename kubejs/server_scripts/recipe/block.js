ServerEvents.recipes(event => {
    function add3x3Recipes(itemIds) {
        Object.entries(itemIds).forEach(([output, input]) => {
            event.shaped(output, [
                'AAA','AAA','AAA'
            ], {A: input})
        });
    };
    add3x3Recipes({
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
    });

    function addReverse3x3Recipes(itemIds) {
        Object.entries(itemIds).forEach(([input, output]) => {
            event.shaped('9x '.concat(output), [
                '   ',' A ','   '
            ], {A: input})
        })
    };
    addReverse3x3Recipes({
        'r2aot:compressed_cobblestone': 'minecraft:cobblestone',
        'r2aot:double_compressed_cobblestone':'r2aot:compressed_cobblestone',
        'r2aot:compressed_andesite': 'minecraft:andesite',
        'r2aot:double_compressed_andesite':'r2aot:compressed_andesite',
        'r2aot:compressed_gravel': 'minecraft:gravel',
        'r2aot:double_compressed_gravel':'r2aot:compressed_gravel',
        'r2aot:compressed_sand': 'minecraft:sand',
        'r2aot:double_compressed_sand':'r2aot:compressed_sand',
    });

    function add9Functionalstorage(itemIds) {
        Object.entries(itemIds).forEach(([higherItem, lowerItem]) => {
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
            });
        });
    };
    add9Functionalstorage({
        'r2aot:compressed_cobblestone': 'minecraft:cobblestone',
        'r2aot:double_compressed_cobblestone':'r2aot:compressed_cobblestone',
        'r2aot:compressed_andesite': 'minecraft:andesite',
        'r2aot:double_compressed_andesite':'r2aot:compressed_andesite',
        'r2aot:compressed_gravel': 'minecraft:gravel',
        'r2aot:double_compressed_gravel':'r2aot:compressed_gravel',
        'r2aot:compressed_sand': 'minecraft:sand',
        'r2aot:double_compressed_sand':'r2aot:compressed_sand',
    })


    // 彩虹花源块
    event.shapeless('r2aot:rainbow_petal_block', [
        'botania:white_petal_block', 'botania:red_petal_block', 'botania:orange_petal_block',
        'botania:yellow_petal_block', 'botania:green_petal_block', 'botania:blue_petal_block',
        'botania:purple_petal_block',
    ]);

    // 圆石
    event.shaped('minecraft:cobblestone', [
        'GG ',
        'GG ',
        '   '
    ], {G:'botania:gray_petal'});

    // 安山岩
    event.shaped('4x minecraft:andesite', [
        'CCC',
        'CGC',
        'CCC'
    ], {
        C:'minecraft:cobblestone',
        G:'botania:gray_petal'
    });

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

    // 感应炉
    event.shaped(
    'thermal:machine_smelter',[
        ' X ',
        'YCY',
        'IPI'
    ],{
        X: 'minecraft:blast_furnace',
        Y: '#forge:sand',
        C: 'thermal:machine_frame',
        I: '#forge:gears/diamond',
        P: 'thermal:rf_coil'
    }).id('thermal:machine_smelter')

})