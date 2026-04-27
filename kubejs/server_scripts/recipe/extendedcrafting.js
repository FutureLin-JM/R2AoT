ServerEvents.recipes(event => {
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

    event
        .custom({
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
        })
        .id(kjs('shaped_table', 'infinity_cell_base_ore'));

    event
        .custom({
            type: 'extendedcrafting:shaped_table',
            pattern: ['AAAAA', 'ABCBA', 'ACDCA', 'ABCBA', 'AAAAA'],
            key: {
                A: {
                    item: 'extendedcrafting:crystaltine_ingot',
                },
                B: {
                    item: 'extendedcrafting:luminessence',
                },
                C: {
                    item: 'buddycards:buddysteel_ingot',
                },
                D: {
                    item: 'r2aot:niotic_crystal_gear',
                },
            },
            result: {
                item: 'r2aot:buddycard_anvil',
            },
        })
        .id(kjs('shaped_table', 'buddycard_anvil'));
});
