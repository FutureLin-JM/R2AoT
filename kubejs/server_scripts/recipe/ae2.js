ServerEvents.recipes(event => {
    event.shaped('ae2:mysterious_cube', [
        'ABA',
        'BCB',
        'ABA'
    ], {A:'r2aot:creative_casing_shard',
        B:'ae2:certus_quartz_crystal',
        C:'minecraft:iron_block'
    });

    // event.custom({
    //     type: 'expatternprovider:circuit_cutter',
    //     fluid_input: {
    //         amount: 100,
    //         ingredient: {
    //             fluid: 'r2aot:molten_meteorite',
    //         },
    //     },
    //     item_input: {
    //         amount: 1,
    //         ingredient: {
    //             tag: 'forge:storage_blocks/silicon',
    //         },
    //     },
    //     output: {
    //         count: 9,
    //         item: 'ae2:printed_silicon',
    //     },
    // }).id('expatternprovider:cutter/silicon');
    // event.custom({
    //     type: 'expatternprovider:circuit_cutter',
    //     fluid_input: {
    //         amount: 100,
    //         ingredient: {
    //             fluid: 'r2aot:molten_meteorite',
    //         },
    //     },
    //     item_input: {
    //         amount: 1,
    //         ingredient: {
    //             tag: 'forge:storage_blocks/certus_quartz',
    //         },
    //     },
    //     output: {
    //         count: 9,
    //         item: 'ae2:printed_calculation_processor',
    //     },
    // }).id('expatternprovider:cutter/calculation');
    // event.custom({
    //     type: 'expatternprovider:circuit_cutter',
    //     fluid_input: {
    //         amount: 100,
    //         ingredient: {
    //             fluid: 'r2aot:molten_meteorite',
    //         },
    //     },
    //     item_input: {
    //         amount: 1,
    //         ingredient: {
    //             tag: 'forge:storage_blocks/gold',
    //         },
    //     },
    //     output: {
    //         count: 9,
    //         item: 'ae2:printed_logic_processor',
    //     },
    // }).id('expatternprovider:cutter/logic');
    // event.custom({
    //     type: 'expatternprovider:circuit_cutter',
    //     fluid_input: {
    //         amount: 100,
    //         ingredient: {
    //             fluid: 'r2aot:molten_meteorite',
    //         },
    //     },
    //     item_input: {
    //         amount: 1,
    //         ingredient: {
    //             tag: 'forge:storage_blocks/diamond',
    //         },
    //     },
    //     output: {
    //         count: 9,
    //         item: 'ae2:printed_engineering_processor',
    //     },
    // }).id('expatternprovider:cutter/engineering');
    
    
})