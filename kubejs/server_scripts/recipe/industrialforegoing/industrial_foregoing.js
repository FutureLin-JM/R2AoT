ServerEvents.recipes(event => {
    // dissolution_chamber 溶解成形机
    const {dissolution_chamber, } = event.recipes.industrialforegoing

    dissolution_chamber('create:powdered_obsidian',
        Array(8).fill('minecraft:obsidian'),
        Fluid.of('minecraft:lava', 1000),
        200,
        Fluid.of('r2aot:molten_meteorite', 1000)
    );
    dissolution_chamber('2x botania:rune_water',
        ['botania:mana_powder', '#botania:manasteel_ingots', 'mysticalagriculture:water_essence', 'minecraft:sugar_cane', 'minecraft:fishing_rod'],
        Fluid.of('r2aot:fluidedmana', 500),
        100
    );
    dissolution_chamber('2x botania:rune_fire',
        ['botania:mana_powder', '#botania:manasteel_ingots', 'mysticalagriculture:fire_essence', 'minecraft:nether_brick', 'minecraft:glowstone_dust'],
        Fluid.of('r2aot:fluidedmana', 500),
        100
    );
    dissolution_chamber('2x botania:rune_earth',
        ['botania:mana_powder', '#botania:manasteel_ingots', 'mysticalagriculture:earth_essence', 'minecraft:coal_block', 'minecraft:stone'],
        Fluid.of('r2aot:fluidedmana', 500),
        100
    );
    dissolution_chamber('2x botania:rune_air',
        ['botania:mana_powder', '#botania:manasteel_ingots', 'mysticalagriculture:air_essence', 'minecraft:string', '#minecraft:wool_carpets'],
        Fluid.of('r2aot:fluidedmana', 500),
        100
    );

    dissolution_chamber('8x mysticalagriculture:inferium_essence',
        Array(8).fill('r2aot:rainbow_petal_block'),
        Fluid.of('r2aot:fluidedmana', 500),
        200
    );

    dissolution_chamber(Item.of('kubejs:incomplete_water_seeds', '{SequencedAssembly:{Progress:0.2f,Step:1,id:"kubejs:sequenced_assembly/water_seeds"}}'),
        Array(4).fill('botania:blue_petal_block'),
        Fluid.of('r2aot:fluidedmana', 500),
        100
    ).id('kubejs:dissolution_chamber/incomplete_water_seeds');

    dissolution_chamber(Item.of('kubejs:incomplete_fire_seeds', '{SequencedAssembly:{Progress:0.2f,Step:1,id:"kubejs:sequenced_assembly/fire_seeds"}}'),
        Array(4).fill('botania:red_petal_block'),
        Fluid.of('r2aot:fluidedmana', 500),
        100
    ).id('kubejs:dissolution_chamber/incomplete_fire_seeds');

    dissolution_chamber(Item.of('kubejs:incomplete_earth_seeds', '{SequencedAssembly:{Progress:0.2f,Step:1,id:"kubejs:sequenced_assembly/earth_seeds"}}'),
        Array(4).fill('botania:green_petal_block'),
        Fluid.of('r2aot:fluidedmana', 500),
        100
    ).id('kubejs:dissolution_chamber/incomplete_earth_seeds');

    dissolution_chamber(Item.of('kubejs:incomplete_air_seeds', '{SequencedAssembly:{Progress:0.2f,Step:1,id:"kubejs:sequenced_assembly/air_seeds"}}'),
        Array(4).fill('botania:orange_petal_block'),
        Fluid.of('r2aot:fluidedmana', 500),
        100
    ).id('kubejs:dissolution_chamber/incomplete_air_seeds');

    dissolution_chamber('r2aot:rune_elemental',
        ['botania:rune_water', 'botania:rune_fire', 'botania:rune_earth', 'botania:rune_air'],
        Fluid.of('r2aot:fluidedmana', 2000),
        200
    );
})

ServerEvents.recipes(event => {
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
    })
});