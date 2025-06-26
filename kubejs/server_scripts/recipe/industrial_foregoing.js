ServerEvents.recipes(event => {
    // dissolution_chamber 溶解成形机
    const {dissolution_chamber, } = event.recipes.industrialforegoing

    dissolution_chamber('create:powdered_obsidian',
        Array(8).fill('minecraft:obsidian'),
        Fluid.of('minecraft:lava', 1000),
        200,
        Fluid.of('r2aot:molten_meteorite', 1000)
    ).id(kjs('dissolution_chamber', 'molten_meteorite'));

    dissolution_chamber('2x botania:rune_water',
        ['botania:mana_powder', '#botania:manasteel_ingots', 'mysticalagriculture:water_essence', 'minecraft:sugar_cane', 'minecraft:fishing_rod'],
        Fluid.of('r2aot:fluidedmana', 500),
        100
    ).id(kjs('dissolution_chamber', 'rune_water'));
    dissolution_chamber('2x botania:rune_fire',
        ['botania:mana_powder', '#botania:manasteel_ingots', 'mysticalagriculture:fire_essence', 'minecraft:nether_brick', 'minecraft:glowstone_dust'],
        Fluid.of('r2aot:fluidedmana', 500),
        100
    ).id(kjs('dissolution_chamber', 'rune_fire'));
    dissolution_chamber('2x botania:rune_earth',
        ['botania:mana_powder', '#botania:manasteel_ingots', 'mysticalagriculture:earth_essence', 'minecraft:coal_block', 'minecraft:stone'],
        Fluid.of('r2aot:fluidedmana', 500),
        100
    ).id(kjs('dissolution_chamber', 'rune_earth'));
    dissolution_chamber('2x botania:rune_air',
        ['botania:mana_powder', '#botania:manasteel_ingots', 'mysticalagriculture:air_essence', 'minecraft:string', '#minecraft:wool_carpets'],
        Fluid.of('r2aot:fluidedmana', 500),
        100
    ).id(kjs('dissolution_chamber', 'rune_air'));

    dissolution_chamber('8x mysticalagriculture:inferium_essence',
        Array(8).fill('r2aot:rainbow_petal_block'),
        Fluid.of('r2aot:fluidedmana', 500),
        200
    ).id(kjs('dissolution_chamber', 'inferium_essence'));

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
    ).id(kjs('dissolution_chamber', 'rune_elemental'));
})

ServerEvents.recipes(event => {
    const ores = [
        {id: 'thermal:tin_ore', Y: 63, weight: 90, laser: 8},
        {id: 'thermal:lead_ore', Y: 65, weight: 90, laser: 10},
        {id: 'thermal:silver_ore', Y: 67, weight: 90, laser: 7},
        {id: 'thermal:nickel_ore', Y: 69, weight: 90, laser: 4},
        {id: 'thermal:apatite_ore', Y: 63, weight: 10, laser: 8},
        {id: 'thermal:cinnabar_ore', Y: 65, weight: 10, laser: 10},
        {id: 'thermal:niter_ore', Y: 67, weight: 10, laser: 7},
        {id: 'thermal:sulfur_ore', Y: 69, weight: 10, laser: 4},
    ]

    ores.forEach(ore => {
        const itemName = ore.id.split(':')[1];
        event.custom({
            type: "industrialforegoing:laser_drill_ore",
            output: { item: ore.id },
            rarity: [
                {
                  whitelist: {},
                  blacklist: {},
                  depth_min: ore.Y,
                  depth_max: ore.Y,
                  weight: ore.weight,
                },
              ],
            pointer: 0,
            catalyst: { item: `industrialforegoing:laser_lens${ore.laser}` },
        }).id(kjs('laser_drill_ore', itemName))
    })
})