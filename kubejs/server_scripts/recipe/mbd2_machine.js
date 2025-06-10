ServerEvents.recipes(event => {
    event.shaped('r2aot:fertilizer_propagator_core', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A:'botania:white_petal_block',
        B:'botania:fertilizer',
        C:'create:andesite_casing'
    });

    event.shaped('r2aot:stress_input', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A:'create:andesite_casing',
        B:'create:shaft'
    });

    event.shaped('r2aot:create_input', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A:'create:andesite_alloy',
        B:'pipez:item_pipe',
        C:'botania:lime_petal_block'
    });
    event.shaped('r2aot:create_output', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A:'create:andesite_alloy',
        B:'pipez:item_pipe',
        C:'botania:red_petal_block'
    });
    event.shaped('r2aot:rainbow_furnace', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A:'r2aot:rainbow_petal_block',
        B:'minecraft:furnace'
    })

    event.shaped('r2aot:mana_liquidizer', [
        'AmB',
        'tgb',
        'CmD'
    ], {
        A:'botania:rune_water',
        B:'botania:rune_fire',
        C:'botania:rune_earth',
        D:'botania:rune_air',
        m: '#forge:ingots/manasteel',
        t: Item.of('botania:mana_tablet', '{mana:500000}').strongNBT(),
        g: '#forge:glass',
        b: 'minecraft:bucket'
    });

    event.shaped('r2aot:modular_pure_daisy_core', [
        'AEB',
        'EFE',
        'CED'
    ], {
        A:'botania:rune_water',
        B:'botania:rune_fire',
        C:'botania:rune_earth',
        D:'botania:rune_air',
        E:'botania:mana_quartz',
        F:'botania:pure_daisy'
    });
    
    event.shaped('r2aot:atomic_reconstructor', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A:'minecraft:iron_ingot',
        B:'minecraft:redstone',
        C:'industrialforegoing:machine_frame_simple'
    });

    event.shaped('r2aot:energy_input', [
        'ADA',
        'BCB',
        'AAA'
    ], {
        A:'minecraft:iron_block',
        B:'botania:lime_petal_block',
        C:'pipez:energy_pipe',
        D:'minecraft:redstone_block'
    });

    event.shaped('r2aot:energy_output', [
        'AAA',
        'BCB',
        'ADA'
    ], {
        A:'minecraft:iron_block',
        B:'botania:red_petal_block',
        C:'pipez:energy_pipe',
        D:'minecraft:redstone_block'
    });

    event.shaped('r2aot:item_input_tank', [
        'ADA',
        'BCB',
        'AAA'
    ], {
        A:'minecraft:copper_block',
        B:'botania:lime_petal_block',
        C:'pipez:item_pipe',
        D:'#forge:chests/wooden'
    });

    event.shaped('r2aot:item_output_tank', [
        'AAA',
        'BCB',
        'ADA'
    ], {
        A:'minecraft:copper_block',
        B:'botania:red_petal_block',
        C:'pipez:item_pipe',
        D:'#forge:chests/wooden'
    });

    event.shaped('r2aot:fluid_input_tank', [
        'ADA',
        'BCB',
        'AAA'
    ], {
        A:'minecraft:lapis_block',
        B:'botania:lime_petal_block',
        C:'pipez:fluid_pipe',
        D:'minecraft:bucket'
    });

    event.shaped('r2aot:fluid_output_tank', [
        'AAA',
        'BCB',
        'ADA'
    ], {
        A:'minecraft:lapis_block',
        B:'botania:red_petal_block',
        C:'pipez:fluid_pipe',
        D:'minecraft:bucket'
    });
    
    event.shapeless('r2aot:fluid_input_tank', [
        'r2aot:fluid_input_port'
    ]);

    event.shapeless('r2aot:fluid_input_port', [
        'r2aot:fluid_input_tank'
    ]);

    event.shapeless('r2aot:fluid_output_tank', [
        'r2aot:fluid_output_port'
    ]);

    event.shapeless('r2aot:fluid_output_port', [
        'r2aot:fluid_output_tank'
    ]);
})