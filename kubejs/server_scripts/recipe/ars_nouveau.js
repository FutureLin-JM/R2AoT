ServerEvents.recipes(event => {
    const { enchanting_apparatus, imbuement } = event.recipes.ars_nouveau;
    const { enchanting_charge } = event.recipes.r2aot;

    enchanting_apparatus(
        'minecraft:dripstone_block',
        Array(4).fill('#forge:stone').concat(Array(4).fill('minecraft:clay_ball')),
        'ars_nouveau:source_gem',
        5000
    ).id(kjs('enchanting_apparatus', 'dripstone_block'));

    enchanting_apparatus(
        'r2aot:modular_runic_altar_core',
        [
            'ars_nouveau:water_essence',
            'ars_nouveau:fire_essence',
            'ars_nouveau:earth_essence',
            'ars_nouveau:air_essence',
            'botania:rune_water',
            'botania:rune_fire',
            'botania:rune_earth',
            'botania:rune_air',
        ],
        'botania:livingrock',
        10000
    ).id(kjs('enchanting_apparatus', 'modular_runic_altar_core'));

    enchanting_apparatus(
        'r2aot:bookwyrm_shards',
        [
            '#forge:logs/archwood',
            '#forge:saplings/archwood',
            'minecraft:paper',
            'minecraft:paper',
            'minecraft:paper',
            '#forge:gems/source',
            '#forge:gems/source',
            '#forge:gems/source',
        ],
        'ars_nouveau:blank_parchment',
        5000
    ).id(kjs('enchanting_apparatus', 'bookwyrm_shards'));

    enchanting_apparatus(
        'ars_nouveau:starbuncle_shards',
        Array(4).fill('minecraft:gold_ingot'),
        'ars_nouveau:blank_parchment',
        5000
    ).id(kjs('enchanting_apparatus', 'starbuncle_shards'));

    enchanting_apparatus(
        'ars_nouveau:whirlisprig_shards',
        [
            '#forge:gems/source',
            'ars_nouveau:magebloom_crop',
            'ars_nouveau:magebloom',
            '#forge:gems/diamond',
            'minecraft:oak_sapling',
            'minecraft:oak_sapling',
            'minecraft:oak_sapling',
            '#forge:seeds/wheat',
        ],
        'ars_nouveau:blank_parchment',
        5000
    ).id(kjs('enchanting_apparatus', 'whirlisprig_shards'));

    enchanting_apparatus(
        'ars_nouveau:wixie_shards',
        ['#forge:saplings/archwood', '#forge:gems/emerald', 'minecraft:crafting_table', 'minecraft:brewing_stand'],
        'ars_nouveau:blank_parchment',
        5000
    ).id(kjs('enchanting_apparatus', 'wixie_shards'));

    enchanting_apparatus(
        'ars_nouveau:drygmy_shard',
        [
            'minecraft:leather',
            'minecraft:wheat',
            'minecraft:apple',
            'minecraft:carrot',
            '#forge:seeds',
            '#forge:gems/source',
            '#forge:gems/source',
            '#forge:gems/source',
        ],
        'ars_nouveau:blank_parchment',
        5000
    ).id(kjs('enchanting_apparatus', 'drygmy_shard'));

    enchanting_apparatus(
        'r2aot:amethyst_golem_shards',
        [
            '#forge:logs/archwood',
            '#forge:saplings/archwood',
            'minecraft:amethyst_shard',
            'minecraft:amethyst_shard',
            'minecraft:amethyst_shard',
            '#forge:gems/source',
            '#forge:gems/source',
            '#forge:gems/source',
        ],
        'ars_nouveau:blank_parchment',
        5000
    ).id(kjs('enchanting_apparatus', 'amethyst_golem_shards'));

    enchanting_apparatus(
        'r2aot:animal_wellspring_core',
        [
            'ars_nouveau:source_gem',
            'minecraft:gold_ingot',
            'ars_nouveau:source_gem',
            'minecraft:gold_ingot',
            'ars_nouveau:source_gem',
            'minecraft:gold_ingot',
            'ars_nouveau:source_gem',
            'minecraft:gold_ingot',
        ],
        'ars_nouveau:mob_jar',
        5000
    ).id(kjs('enchanting_apparatus', 'animal_wellspring_core'));

    imbuement('ars_nouveau:water_essence', 'ars_nouveau:source_gem', 2000, [
        'ars_nouveau:frostaya_pod',
        'botania:rune_water',
        'mysticalagriculture:water_essence',
    ]).id(kjs('imbuement', 'water_essence'));

    imbuement('ars_nouveau:fire_essence', 'ars_nouveau:source_gem', 2000, [
        'ars_nouveau:bombegranate_pod',
        'botania:rune_fire',
        'mysticalagriculture:fire_essence',
    ]).id(kjs('imbuement', 'fire_essence'));

    imbuement('ars_nouveau:earth_essence', 'ars_nouveau:source_gem', 2000, [
        'ars_nouveau:mendosteen_pod',
        'botania:rune_earth',
        'mysticalagriculture:earth_essence',
    ]).id(kjs('imbuement', 'earth_essence'));

    imbuement('ars_nouveau:air_essence', 'ars_nouveau:source_gem', 2000, [
        'ars_nouveau:bastion_pod',
        'botania:rune_air',
        'mysticalagriculture:air_essence',
    ]).id(kjs('imbuement', 'air_essence'));

    // global.imbuementChargeRecipes.forEach(recipe => {
    //     const id = recipe.id ?? kjs('imbuement_charge', recipe.output.split(':')[1]);
    //     imbuement(recipe.output, recipe.input, recipe.source, recipe.pedestalItems).id(id);
    // });

    enchanting_charge(
        [
            'botania:terrasteel_ingot',
            'botania:elementium_ingot',
            'minecraft:iron_ingot',
            'minecraft:iron_ingot',
            'thermal:invar_ingot',
            'minecraft:gold_ingot',
            'minecraft:gold_ingot',
            'botania:manasteel_ingot',
        ],
        'powah:charged_snowball',
        'powah:steel_energized',
        10000,
        5000
    ).id(kjs('enchanting_charge', 'steel_energized'));

    enchanting_charge(
        [
            'botania:dragonstone_block',
            'minecraft:iron_block',
            'minecraft:iron_block',
            'minecraft:iron_block',
            'botania:dragonstone_block',
            'minecraft:gold_block',
            'minecraft:gold_block',
            'minecraft:gold_block',
        ],
        Item.of(
            'kubejs:incomplete_energized_steel_seeds',
            '{SequencedAssembly:{Progress:0.75f,Step:3,id:"kubejs:sequenced_assembly/energized_steel_seeds"}}'
        ).strongNBT(),
        'mysticalagriculture:energized_steel_seeds',
        40000,
        5000
    ).id(kjs('enchanting_charge', 'incomplete_energized_steel_seeds_step_4'));

    enchanting_charge(
        [
            'powah:energized_steel_block',
            'botania:blaze_block',
            'botania:blaze_block',
            'botania:blaze_block',
            'powah:energized_steel_block',
            'botania:blaze_block',
            'botania:blaze_block',
            'botania:blaze_block',
        ],
        Item.of(
            'kubejs:incomplete_blazing_crystal_seeds',
            '{SequencedAssembly:{Progress:0.75f,Step:3,id:"kubejs:sequenced_assembly/blazing_crystal_seeds"}}'
        ).strongNBT(),
        'mysticalagriculture:blazing_crystal_seeds',
        100000,
        5000
    ).id(kjs('enchanting_charge', 'incomplete_blazing_crystal_seeds_step_4'));

    enchanting_charge(
        [
            'powah:blazing_crystal_block',
            'minecraft:diamond_block',
            'minecraft:diamond_block',
            'minecraft:diamond_block',
            'powah:blazing_crystal_block',
            'minecraft:diamond_block',
            'minecraft:diamond_block',
            'minecraft:diamond_block',
        ],
        Item.of(
            'kubejs:incomplete_niotic_crystal_seeds',
            '{SequencedAssembly:{Progress:0.75f,Step:3,id:"kubejs:sequenced_assembly/niotic_crystal_seeds"}}'
        ).strongNBT(),
        'mysticalagriculture:niotic_crystal_seeds',
        400000,
        5000
    ).id(kjs('enchanting_charge', 'incomplete_niotic_crystal_seeds_step_4'));

    enchanting_charge(
        [
            'powah:niotic_crystal_block',
            'minecraft:emerald_block',
            'minecraft:emerald_block',
            'minecraft:emerald_block',
            'powah:niotic_crystal_block',
            'minecraft:emerald_block',
            'minecraft:emerald_block',
            'minecraft:emerald_block',
        ],
        Item.of(
            'kubejs:incomplete_spirited_crystal_seeds',
            '{SequencedAssembly:{Progress:0.75f,Step:3,id:"kubejs:sequenced_assembly/spirited_crystal_seeds"}}'
        ).strongNBT(),
        'mysticalagriculture:spirited_crystal_seeds',
        1000000,
        5000
    ).id(kjs('enchanting_charge', 'incomplete_spirited_crystal_seeds_step_4'));

    enchanting_charge(
        [
            'r2aot:broken_mana',
            'ars_nouveau:water_essence',
            'ars_nouveau:fire_essence',
            'r2aot:broken_source',
            'ars_nouveau:earth_essence',
            'ars_nouveau:air_essence',
        ],
        'r2aot:tertium_crop_seed',
        'r2aot:imperium_crop_seed',
        100000,
        5000
    ).id(kjs('enchanting_charge', 'imperium_crop_seed'));

    event
        .custom({
            type: 'ars_nouveau:crush',
            input: {
                item: 'botania:mana_diamond',
            },
            output: [
                {
                    chance: 1.0,
                    count: 10,
                    item: 'r2aot:broken_mana',
                    maxRange: 1,
                },
            ],
        })
        .id(kjs('ars_crush', 'broken_mana_from_diamond'));

    event
        .custom({
            type: 'ars_nouveau:crush',
            input: {
                item: 'botania:manasteel_ingot',
            },
            output: [
                {
                    chance: 1.0,
                    count: 3,
                    item: 'r2aot:broken_mana',
                    maxRange: 1,
                },
            ],
        })
        .id(kjs('ars_crush', 'broken_mana_from_manasteel'));

    event
        .custom({
            type: 'ars_nouveau:crush',
            input: {
                item: 'botania:mana_pearl',
            },
            output: [
                {
                    chance: 1.0,
                    count: 6,
                    item: 'r2aot:broken_mana',
                    maxRange: 1,
                },
            ],
        })
        .id(kjs('ars_crush', 'broken_mana_from_pearl'));

    event
        .custom({
            type: 'ars_nouveau:crush',
            input: {
                item: 'ars_nouveau:source_gem',
            },
            output: [
                {
                    chance: 1.0,
                    count: 1,
                    item: 'r2aot:broken_source',
                    maxRange: 1,
                },
            ],
        })
        .id(kjs('ars_crush', 'broken_source'));

    ['blitz', 'blizz', 'basalz'].forEach(material => {
        event
            .custom({
                type: 'ars_nouveau:crush',
                input: {
                    item: `thermal:${material}_rod`,
                },
                output: [
                    {
                        chance: 1.0,
                        count: 2,
                        item: `thermal:${material}_powder`,
                        maxRange: 2,
                    },
                ],
            })
            .id(kjs('ars_crush', `${material}_powder`));
    });
    event
        .custom({
            type: 'ars_nouveau:crush',
            input: {
                tag: 'minecraft:soul_fire_base_blocks',
            },
            output: [
                {
                    chance: 1.0,
                    count: 1,
                    item: 'thermal_extra:soul_sand_dust',
                    maxRange: 1,
                },
            ],
        })
        .id(kjs('ars_crush', 'soul_sand_dust'));
});
