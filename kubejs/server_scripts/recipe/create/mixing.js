ServerEvents.recipes(event => {
    const { mixing } = event.recipes.create;

    // mixing  搅拌
    mixing(Fluid.of('r2aot:petal_essence', 500), '#botania:petals_block').id(kjs('mixing', 'petal_essence'));

    mixing(
        ['create:andesite_alloy', Item.of('create:andesite_alloy').withChance(0.1)],
        ['minecraft:andesite', Fluid.of('r2aot:petal_essence', 1000)]
    ).id(kjs('mixing', 'andesite_alloy_from_petal_essence'));

    mixing(
        [Item.of('create:powdered_obsidian').withChance(0.75)],
        [
            Item.of('botania:black_petal').withCount(5),
            Item.of('botania:gray_petal').withCount(5),
            Fluid.of('r2aot:petal_essence', 1000),
        ]
    ).id(kjs('mixing', 'powdered_obsidian'));

    mixing(Fluid.of('minecraft:lava', 500), 'minecraft:netherrack').id(kjs('mixing', 'lava_from_netherrack'));

    mixing(
        [
            Item.of('minecraft:sugar_cane').withChance(0.5),
            Item.of('minecraft:kelp').withChance(0.5),
            Item.of('minecraft:wheat_seeds').withChance(0.5),
        ],
        [Item.of('botania:green_petal').withCount(9), Fluid.of('r2aot:petal_essence', 500)]
    ).id(kjs('mixing', 'some_crops'));

    mixing('r2aot:petal_zinc_ore', [
        Item.of('botania:white_petal').withCount(2),
        Item.of('botania:light_gray_petal').withCount(2),
        Fluid.of('r2aot:petal_essence', 500),
    ])
        .heated()
        .id(kjs('mixing', 'petal_zinc_ore'));

    mixing('r2aot:petal_quartz_ore', [
        Item.of('botania:white_petal').withCount(2),
        Item.of('botania:red_petal').withCount(2),
        Fluid.of('r2aot:petal_essence', 500),
    ])
        .heated()
        .id(kjs('mixing', 'petal_quartz_ore'));

    mixing(Fluid.of('r2aot:bioethanol', 125), [
        'create:cinder_flour',
        'minecraft:sugar',
        Fluid.of('r2aot:seed_oil', 100),
    ])
        .heated()
        .id(kjs('mixing', 'bioethanol'));

    mixing(Fluid.of('r2aot:fluidedmana', 1000), [
        'botania:mana_diamond',
        '2x botania:mana_powder',
        '2x botania:manasteel_ingot',
    ])
        .heated()
        .id(kjs('mixing', 'fluidedmana'));

    mixing(Fluid.of('thermal:latex', 100), 'minecraft:vine').id(kjs('mixing', 'thermal_latex_from_vine'));

    mixing(Fluid.of('thermal:latex', 100), 'minecraft:dandelion').id(kjs('mixing', 'thermal_latex_from_dandelion'));

    mixing('thermal:rubber', [Fluid.of('minecraft:water', 1000), Item.of('minecraft:vine').withCount(8)]).id(
        kjs('mixing', 'thermal_rubber_from_vine')
    );

    mixing('thermal:rubber', [Fluid.of('minecraft:water', 1000), Item.of('minecraft:dandelion').withCount(8)]).id(
        kjs('mixing', 'thermal_rubber_from_dandelion')
    );

    mixing(Fluid.of('industrialforegoing:latex', 200), [
        Fluid.of('thermal:latex', 100),
        Fluid.of('minecraft:water', 100),
    ]).id(kjs('mixing', 'industrialforegoing_latex'));

    ['bronze', 'electrum', 'invar', 'constantan'].forEach(metalId => {
        mixing(Fluid.of(`r2aot:molten_${metalId}`, 200), `mysticalagriculture:${metalId}_essence`)
            .superheated()
            .id(kjs('mixing', `molten_${metalId}`));
    });

    mixing(Fluid.of('thermal:redstone', 50), 'minecraft:redstone')
        .heated()
        .id(kjs('mixing', 'thermal_redstone_from_dust'));

    mixing(Fluid.of('thermal:redstone', 450), 'minecraft:redstone_block')
        .heated()
        .id(kjs('mixing', 'thermal_redstone_from_block'));

    mixing(Item.of('thermal:bronze_dust').withCount(2), [
        Ingredient.of('#forge:dusts/copper').or('#forge:ingots/copper').withCount(3),
        Ingredient.of('#forge:dusts/tin').or('#forge:ingots/tin'),
        Fluid.of('r2aot:fluidedmana', 400),
    ]).id(kjs('mixing', 'thermal_bronze_dust'));

    mixing('thermal:electrum_dust', [
        Ingredient.of('#forge:dusts/gold').or('#forge:ingots/gold'),
        Ingredient.of('#forge:dusts/silver').or('#forge:ingots/silver'),
        Fluid.of('r2aot:fluidedmana', 200),
    ]).id(kjs('mixing', 'thermal_electrum_dust'));

    mixing(Item.of('thermal:invar_dust').withCount(3), [
        Ingredient.of('#forge:dusts/iron').or('#forge:ingots/iron').withCount(4),
        Ingredient.of('#forge:dusts/nickel').or('#forge:ingots/nickel').withCount(2),
        Fluid.of('r2aot:fluidedmana', 600),
    ]).id(kjs('mixing', 'thermal_invar_dust'));

    mixing('thermal:constantan_dust', [
        Ingredient.of('#forge:dusts/copper').or('#forge:ingots/copper'),
        Ingredient.of('#forge:dusts/nickel').or('#forge:ingots/nickel'),
        Fluid.of('r2aot:fluidedmana', 200),
    ]).id(kjs('mixing', 'thermal_constantan_dust'));

    mixing(Fluid.of('thermal:glowstone', 125), 'minecraft:glowstone_dust')
        .heated()
        .id(kjs('mixing', 'thermal_glowstone_from_dust'));

    mixing(Fluid.of('thermal:glowstone', 500), 'minecraft:glowstone')
        .heated()
        .id(kjs('mixing', 'thermal_glowstone_from_block'));

    mixing(Fluid.of('thermal:ender', 125), 'minecraft:ender_pearl')
        .superheated()
        .id(kjs('mixing', 'thermal_ender_from_pearl'));

    mixing('4x ars_nouveau:sourceberry_bush', ['4x minecraft:glow_berries', 'ars_nouveau:source_gem'])
        .heated()
        .id(kjs('mixing', 'sourceberry_bush'));

    [
        { output: 'amethyst_sap', input_1: 'mana_regen', input_2: 'freezing' },
        { output: 'bookwyrm_flux', input_1: 'shielding', input_2: 'spell_damage' },
        { output: 'drygmy_essence', input_1: 'blasting', input_2: 'recovery' },
        { output: 'stargem_fluid', input_1: 'spell_damage', input_2: 'blasting' },
        { output: 'whirlisprig_extract', input_1: 'recovery', input_2: 'freezing' },
        { output: 'wixie_elixir', input_1: 'shielding', input_2: 'mana_regen' },
    ].forEach(potion => {
        mixing(Fluid.of(`r2aot:${potion.output}`, 250), [
            Fluid.of('create:potion', 250, { Potion: `ars_nouveau:${potion.input_1}_potion` }),
            Fluid.of('create:potion', 250, { Potion: `ars_nouveau:${potion.input_2}_potion` }),
            'ars_nouveau:source_gem',
            'ars_nouveau:wilden_horn',
            'ars_nouveau:wilden_spike',
            'ars_nouveau:wilden_wing',
        ])
            .superheated()
            .id(kjs('mixing', `${potion.output}`));
    });
});
