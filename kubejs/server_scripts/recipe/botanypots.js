ServerEvents.recipes(event => {
    const { crop, soil } = event.recipes.botanypots;

    soil('create:railway_casing', { block: 'create:railway_casing' }, ['r2aot_level_0', 'dirt', 'sand'], 0, 2.5);
    soil('r2aot:fluidedmana_bucket', { block: 'r2aot:fluidedmana' }, ['water'], 0, 5);

    soil(
        'mysticalagriculture:inferium_block',
        { block: 'mysticalagriculture:inferium_block' },
        ['inferium', 'r2aot_level_0', 'dirt', 'sand'],
        0,
        4
    );
    soil(
        'mysticalagriculture:prudentium_block',
        { block: 'mysticalagriculture:prudentium_block' },
        ['prudentium', 'inferium', 'r2aot_level_0', 'dirt', 'sand'],
        0,
        5
    );
    soil(
        'mysticalagriculture:tertium_block',
        { block: 'mysticalagriculture:tertium_block' },
        ['tertium', 'prudentium', 'inferium', 'r2aot_level_0', 'dirt', 'sand'],
        0,
        6
    );
    soil(
        'mysticalagriculture:imperium_block',
        { block: 'mysticalagriculture:imperium_block' },
        ['imperium', 'tertium', 'prudentium', 'inferium', 'r2aot_level_0', 'dirt', 'sand'],
        0,
        7
    );
    soil(
        'mysticalagriculture:supremium_block',
        { block: 'mysticalagriculture:supremium_block' },
        ['supremium', 'imperium', 'tertium', 'prudentium', 'inferium', 'r2aot_level_0', 'dirt', 'sand'],
        0,
        8
    );
    soil(
        'mysticalagriculture:awakened_supremium_block',
        { block: 'mysticalagriculture:awakened_supremium_block' },
        [
            'awakened_supremium',
            'supremium',
            'imperium',
            'tertium',
            'prudentium',
            'inferium',
            'r2aot_level_0',
            'dirt',
            'sand',
        ],
        0,
        20
    );

    soil(
        'ars_nouveau:sourcestone',
        { block: 'ars_nouveau:sourcestone' },
        ['red_archwood', 'green_archwood', 'purple_archwood', 'blue_archwood'],
        0,
        5
    );

    crop(
        'minecraft:vine',
        ['r2aot_level_0'],
        { block: 'minecraft:vine' },
        [Item.of('minecraft:vine').withChance(1).withRolls(2, 3)],
        1200,
        1
    ).id(kjs('botanypots', 'vine'));

    ['prudentium', 'tertium', 'imperium'].forEach(tier => {
        crop(
            `r2aot:${tier}_crop_seed`,
            [tier],
            { block: `r2aot:${tier}_crop` },
            [
                Item.of(`mysticalagriculture:${tier}_essence`).withChance(1).withCount(1),
                Item.of(`r2aot:${tier}_crop_seed`).withChance(0.01).withCount(1),
            ],
            1800,
            1
        ).id(kjs('botanypots', tier));
    });

    ['bronze', 'electrum', 'invar', 'constantan'].forEach(metalId => {
        crop(
            `mysticalagriculture:${metalId}_seeds`,
            ['prudentium'],
            { block: `mysticalagriculture:${metalId}_crop` },
            [
                Item.of(`mysticalagriculture:${metalId}_essence`).withChance(1),
                Item.of(`mysticalagriculture:${metalId}_seeds`).withChance(0.01),
                Item.of('mysticalagriculture:fertilized_essence').withChance(0.01),
            ],
            3000,
            1
        ).id(kjs('botanypots', `${metalId}_essence`));
    });

    ['lumium', 'signalum', 'enderium'].forEach(metalId => {
        crop(
            `mysticalagriculture:${metalId}_seeds`,
            ['tertium'],
            { block: `mysticalagriculture:${metalId}_crop` },
            [
                Item.of(`mysticalagriculture:${metalId}_essence`).withChance(1),
                Item.of(`mysticalagriculture:${metalId}_seeds`).withChance(0.01),
                Item.of('mysticalagriculture:fertilized_essence').withChance(0.01),
            ],
            3600,
            1
        ).id(kjs('botanypots', `${metalId}_essence`));
    });
});
