ServerEvents.recipes(event => {
    event
        .custom({
            type: 'extendedcrafting:shaped_table',
            pattern: ['AAAAA', 'ABBBA', 'ACDCA', 'ACECA', 'AFFFA'],
            key: {
                A: {
                    item: 'embers:caminite_bricks',
                },
                B: {
                    item: 'advancednetherite:netherite_gold_block',
                },
                C: {
                    item: 'create:crushing_wheel',
                },
                D: {
                    item: 'embers:mechanical_core',
                },
                E: {
                    item: 'advancednetherite:netherite_iron_block',
                },
                F: {
                    item: 'powah:blazing_crystal_block',
                },
            },
            result: {
                item: 'embers:ember_bore',
            },
        })
        .id(kjs('shaped_table', 'caminite_bricks'));

    event
        .custom({
            type: 'extendedcrafting:shaped_table',
            pattern: ['AAAAA', 'ABCBA', 'ACDCA', 'ABCBA', 'AAAAA'],
            key: {
                A: {
                    tag: 'forge:glass',
                },
                B: {
                    item: 'powah:steel_energized',
                },
                C: {
                    item: 'mysticalagriculture:prosperity_seed_base',
                },
                D: {
                    item: 'thermal:machine_insolator',
                },
            },
            result: {
                item: 'r2aot:power_planting_station',
            },
        })
        .id(kjs('shaped_table', 'power_planting_station'));

    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['ABCBA', 'DEFED', 'GHIHG', 'JEKEJ', 'ALCLA'],
        key: {
            A: {
                item: 'r2aot:buddycard_ore_coal',
            },
            B: {
                item: 'r2aot:buddycard_ore_gold',
            },
            C: {
                item: 'r2aot:buddycard_ore_emerald',
            },
            D: {
                item: 'r2aot:buddycard_ore_copper',
            },
            E: {
                item: 'r2aot:buddycard_ore_redstone',
            },
            F: {
                item: 'r2aot:buddycard_ore_netherite',
            },
            G: {
                item: 'r2aot:buddycard_ore_lapis',
            },
            H: {
                item: 'r2aot:buddycard_ore_quartz',
            },
            I: {
                item: 'minecraft:nether_star',
            },
            J: {
                item: 'r2aot:buddycard_ore_zinc',
            },
            K: {
                item: 'r2aot:buddycard_ore_diamond',
            },
            L: {
                item: 'r2aot:buddycard_ore_iron',
            },
        },
        result: {
            item: 'r2aot:infinity_cell_base_ore',
        },
    }).id(kjs('shaped_table', 'infinity_cell_base_ore'));
});
