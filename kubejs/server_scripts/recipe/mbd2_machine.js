ServerEvents.recipes(event => {
    const { kubejs } = event.recipes;

    kubejs
        .shaped('r2aot:fertilizer_propagator_core', ['ABA', 'BCB', 'ABA'], {
            A: 'botania:white_petal_block',
            B: 'botania:fertilizer',
            C: 'create:andesite_casing',
        })
        .id(kjs('fertilizer_propagator_core'));

    kubejs
        .shaped('r2aot:stress_input', [' A ', 'ABA', ' A '], {
            A: 'create:andesite_casing',
            B: 'create:shaft',
        })
        .id(kjs('stress_input'));

    kubejs
        .shaped('r2aot:rainbow_furnace', ['AAA', 'ABA', 'AAA'], {
            A: 'r2aot:rainbow_petal_block',
            B: 'minecraft:furnace',
        })
        .id(kjs('rainbow_furnace'));

    kubejs
        .shaped('r2aot:mana_liquidizer', ['AmB', 'tgb', 'CmD'], {
            A: 'botania:rune_water',
            B: 'botania:rune_fire',
            C: 'botania:rune_earth',
            D: 'botania:rune_air',
            m: '#forge:ingots/manasteel',
            t: Item.of('botania:mana_tablet', '{mana:500000}').strongNBT(),
            g: '#forge:glass',
            b: 'minecraft:bucket',
        })
        .id(kjs('mana_liquidizer'));

    kubejs
        .shaped('r2aot:modular_pure_daisy_core', ['AEB', 'EFE', 'CED'], {
            A: 'botania:rune_water',
            B: 'botania:rune_fire',
            C: 'botania:rune_earth',
            D: 'botania:rune_air',
            E: 'botania:mana_quartz',
            F: 'botania:pure_daisy',
        })
        .id(kjs('modular_pure_daisy_core'));

    kubejs
        .shaped('r2aot:atomic_reconstructor', ['ABA', 'BCB', 'ABA'], {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:redstone',
            C: 'industrialforegoing:machine_frame_simple',
        })
        .id(kjs('atomic_reconstructor'));

    kubejs
        .shaped('r2aot:energy_input', ['ADA', 'BCB', 'AAA'], {
            A: 'minecraft:iron_block',
            B: 'botania:lime_petal_block',
            C: 'pipez:energy_pipe',
            D: 'minecraft:redstone_block',
        })
        .id(kjs('energy_input'));

    kubejs
        .shaped('r2aot:energy_output', ['AAA', 'BCB', 'ADA'], {
            A: 'minecraft:iron_block',
            B: 'botania:red_petal_block',
            C: 'pipez:energy_pipe',
            D: 'minecraft:redstone_block',
        })
        .id(kjs('energy_output'));

    kubejs
        .shaped('r2aot:item_input', ['ADA', 'BCB', 'AAA'], {
            A: 'minecraft:copper_block',
            B: 'botania:lime_petal_block',
            C: 'pipez:item_pipe',
            D: '#forge:chests/wooden',
        })
        .id(kjs('item_input'));

    kubejs
        .shaped('r2aot:item_output', ['AAA', 'BCB', 'ADA'], {
            A: 'minecraft:copper_block',
            B: 'botania:red_petal_block',
            C: 'pipez:item_pipe',
            D: '#forge:chests/wooden',
        })
        .id(kjs('item_output'));

    kubejs
        .shaped('r2aot:fluid_input', ['ADA', 'BCB', 'AAA'], {
            A: 'minecraft:lapis_block',
            B: 'botania:lime_petal_block',
            C: 'pipez:fluid_pipe',
            D: 'minecraft:bucket',
        })
        .id(kjs('fluid_input'));

    kubejs
        .shaped('r2aot:fluid_output', ['AAA', 'BCB', 'ADA'], {
            A: 'minecraft:lapis_block',
            B: 'botania:red_petal_block',
            C: 'pipez:fluid_pipe',
            D: 'minecraft:bucket',
        })
        .id(kjs('fluid_output'));

    kubejs
        .shaped('2x r2aot:cobble_gen_tier_1', ['AAA', 'CBC', 'AAA'], {
            A: 'minecraft:oak_wood',
            B: 'r2aot:cobble_gen_tier_1',
            C: 'minecraft:glass',
        })
        .id(kjs('cobble_gen_tier_1'));

    kubejs
        .shaped('r2aot:cobble_gen_tier_2', ['AAA', 'ABA', 'AAA'], {
            A: 'minecraft:cobblestone',
            B: 'r2aot:cobble_gen_tier_1',
        })
        .id(kjs('cobble_gen_tier_2'));

    kubejs
        .shaped('r2aot:cobble_gen_tier_3', ['AAA', 'ABA', 'AAA'], {
            A: 'minecraft:iron_ingot',
            B: 'r2aot:cobble_gen_tier_2',
        })
        .id(kjs('cobble_gen_tier_3'));

    kubejs
        .shaped('r2aot:cobble_gen_tier_4', ['AAA', 'ABA', 'AAA'], {
            A: 'minecraft:gold_ingot',
            B: 'r2aot:cobble_gen_tier_3',
        })
        .id(kjs('cobble_gen_tier_4'));

    kubejs
        .shaped('r2aot:cobble_gen_tier_5', ['AAA', 'ABA', 'AAA'], {
            A: 'minecraft:diamond',
            B: 'r2aot:cobble_gen_tier_4',
        })
        .id(kjs('cobble_gen_tier_5'));

    kubejs
        .shaped('r2aot:cobble_gen_tier_6', ['AAA', 'ABA', 'AAA'], {
            A: 'minecraft:netherite_ingot',
            B: 'r2aot:cobble_gen_tier_5',
        })
        .id(kjs('cobble_gen_tier_6'));

    kubejs
        .shaped('r2aot:controller_frame', ['AAA', 'ABA', 'AAA'], {
            A: 'minecraft:iron_ingot',
            B: 'ae2:controller',
        })
        .keepIngredient({ item: 'ae2:controller' })
        .id(kjs('controller_frame'));

    kubejs
        .shaped('r2aot:mana_input', ['ABA', 'CDC', 'AAA'], {
            A: 'botania:livingrock',
            B: 'botania:mana_powder',
            C: 'botania:mana_glass',
            D: 'botania:mana_pool',
        })
        .id(kjs('mana_input'));

    kubejs
        .shaped('r2aot:mana_output', ['AAA', 'CDC', 'ABA'], {
            A: 'botania:livingrock',
            B: 'botania:mana_powder',
            C: 'botania:mana_glass',
            D: 'botania:mana_pool',
        })
        .id(kjs('mana_output'));
});
