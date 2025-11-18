// priority: 50

global.imbuementChargeRecipes = [
    {
        output: 'powah:steel_energized',
        input: 'powah:charged_snowball',
        pedestalItems: [
            'botania:terrasteel_ingot',
            'botania:elementium_ingot',
            'minecraft:iron_ingot',
            'minecraft:iron_ingot',
            'thermal:invar_ingot',
            'minecraft:gold_ingot',
            'minecraft:gold_ingot',
            'botania:manasteel_ingot',
        ],
        source: 5000,
        energy: 10000,
    },
    {
        output: 'mysticalagriculture:energized_steel_seeds',
        input: Item.of(
            'kubejs:incomplete_energized_steel_seeds',
            '{SequencedAssembly:{Progress:0.75f,Step:3,id:"kubejs:sequenced_assembly/energized_steel_seeds"}}'
        ).strongNBT(),
        pedestalItems: [
            'botania:dragonstone_block',
            'minecraft:iron_block',
            'minecraft:iron_block',
            'minecraft:iron_block',
            'botania:dragonstone_block',
            'minecraft:gold_block',
            'minecraft:gold_block',
            'minecraft:gold_block',
        ],
        source: 5000,
        energy: 40000,
        id: 'kubejs:imbuement/incomplete_energized_steel_seeds_step_4',
    },
    {
        output: 'mysticalagriculture:blazing_crystal_seeds',
        input: Item.of(
            'kubejs:incomplete_blazing_crystal_seeds',
            '{SequencedAssembly:{Progress:0.75f,Step:3,id:"kubejs:sequenced_assembly/blazing_crystal_seeds"}}'
        ).strongNBT(),
        pedestalItems: [
            'powah:energized_steel_block',
            'botania:blaze_block',
            'botania:blaze_block',
            'botania:blaze_block',
            'powah:energized_steel_block',
            'botania:blaze_block',
            'botania:blaze_block',
            'botania:blaze_block',
        ],
        source: 5000,
        energy: 100000,
        id: 'kubejs:imbuement/incomplete_blazing_crystal_seeds_step_4',
    },
    {
        output: 'mysticalagriculture:niotic_crystal_seeds',
        input: Item.of(
            'kubejs:incomplete_niotic_crystal_seeds',
            '{SequencedAssembly:{Progress:0.75f,Step:3,id:"kubejs:sequenced_assembly/niotic_crystal_seeds"}}'
        ).strongNBT(),
        pedestalItems: [
            'powah:blazing_crystal_block',
            'minecraft:diamond_block',
            'minecraft:diamond_block',
            'minecraft:diamond_block',
            'powah:blazing_crystal_block',
            'minecraft:diamond_block',
            'minecraft:diamond_block',
            'minecraft:diamond_block',
        ],
        source: 5000,
        energy: 400000,
        id: 'kubejs:imbuement/incomplete_niotic_crystal_seeds_step_4',
    },
    {
        output: 'mysticalagriculture:spirited_crystal_seeds',
        input: Item.of(
            'kubejs:incomplete_spirited_crystal_seeds',
            '{SequencedAssembly:{Progress:0.75f,Step:3,id:"kubejs:sequenced_assembly/spirited_crystal_seeds"}}'
        ).strongNBT(),
        pedestalItems: [
            'powah:niotic_crystal_block',
            'minecraft:emerald_block',
            'minecraft:emerald_block',
            'minecraft:emerald_block',
            'powah:niotic_crystal_block',
            'minecraft:emerald_block',
            'minecraft:emerald_block',
            'minecraft:emerald_block',
        ],
        source: 5000,
        energy: 1000000,
        id: 'kubejs:imbuement/incomplete_spirited_crystal_seeds_step_4',
    },
    {
        output: 'r2aot:imperium_crop_seed',
        input: 'r2aot:imperium_crop_seed',
        pedestalItems: [
            "r2aot:broken_mana",
            'ars_nouveau:water_essence',
            'ars_nouveau:fire_essence',
            "r2aot:broken_source",
            'ars_nouveau:earth_essence',
            'ars_nouveau:air_essence',
        ],
        source: 5000,
        energy: 100000,
    }
];
