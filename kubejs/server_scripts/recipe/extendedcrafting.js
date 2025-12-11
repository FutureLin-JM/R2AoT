ServerEvents.recipes(event => {
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
