ServerEvents.recipes(event => {
    const id_kjs = (name) => "botanypots:kubejs/" + name.toLowerCase();
    const {crop, soil,} = event.recipes.botanypots

    soil(
        'create:railway_casing',
        {block: 'create:railway_casing'},
        ['r2aot_level_0', "dirt", "sand"],
        0,
        2.5
    );
    soil(
        'r2aot:fluidedmana_bucket',
        {block: 'r2aot:fluidedmana'},
        ["water"],
        0,
        5
    );
    
    soil(
        'mysticalagriculture:inferium_block',
        {block: 'mysticalagriculture:inferium_block'},
        ["inferium", 'r2aot_level_0', "dirt", "sand"],
        0,
        4
    );
    soil(
        'mysticalagriculture:prudentium_block',
        {block: 'mysticalagriculture:prudentium_block'},
        ["prudentium", "inferium", 'r2aot_level_0', "dirt", "sand"],
        0,
        5
    );
    soil(
        'mysticalagriculture:tertium_block',
        {block: 'mysticalagriculture:tertium_block'},
        ["tertium", "prudentium", "inferium", 'r2aot_level_0', "dirt", "sand"],
        0,
        6
    );
    soil(
        'mysticalagriculture:imperium_block',
        {block: 'mysticalagriculture:imperium_block'},
        ["imperium", "tertium", "prudentium", "inferium", 'r2aot_level_0', "dirt", "sand"],
        0,
        7
    );
    soil(
        'mysticalagriculture:supremium_block',
        {block: 'mysticalagriculture:supremium_block'},
        ["supremium", "imperium", "tertium", "prudentium", "inferium", 'r2aot_level_0', "dirt", "sand"],
        0,
        8
    );
    soil(
        'mysticalagriculture:awakened_supremium_block',
        {block: 'mysticalagriculture:awakened_supremium_block'},
        ["awakened_supremium", "supremium", "imperium", "tertium", "prudentium", "inferium", 'r2aot_level_0', "dirt", "sand"],
        0,
        20
    );

    crop(
        'minecraft:vine',
        ['r2aot_level_0'],
        {block: 'minecraft:vine'},
        [
            Item.of('minecraft:vine').withChance(1).withRolls(2,3),
        ],
        1200,
        1
    ).id(id_kjs('vine'));
    
    ['prudentium', 'tertium', 'imperium'].forEach(tier => {
        crop(
            `r2aot:${tier}_crop_seed`,
            [tier],
            {block: `r2aot:${tier}_crop`},
            [
                Item.of(`mysticalagriculture:${tier}_essence`).withChance(1).withCount(1),
                Item.of(`r2aot:${tier}_crop_seed`).withChance(0.01).withCount(1),
            ],
            1800,
            1
        ).id(id_kjs(tier));
    });
})