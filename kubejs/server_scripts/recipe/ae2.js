ServerEvents.recipes(event => {
    event
        .custom({
            type: 'ae2:transform',
            ingredients: [
                {
                    item: 'r2aot:entro_dust',
                },
                {
                    tag: 'forge:ingots/gold',
                },
                {
                    item: 'minecraft:lapis_lazuli',
                },
            ],
            result: {
                count: 1,
                item: 'r2aot:entro_ingot',
            },
        })
        .id(kjs('transform', 'entro_ingot'));

    event
        .custom({
            type: 'ae2:transform',
            ingredients: [
                {
                    item: 'r2aot:entro_dust',
                },
                {
                    item: 'ae2:fluix_crystal',
                },
            ],
            result: {
                count: 1,
                item: 'r2aot:entro_crystal',
            },
        })
        .id(kjs('transform', 'fix_entro'));

    event
        .custom({
            type: 'ae2:inscriber',
            ingredients: {
                middle: {
                    item: 'r2aot:entro_crystal',
                },
            },
            mode: 'inscribe',
            result: {
                count: 1,
                item: 'r2aot:entro_dust',
            },
        })
        .id(kjs('inscriber', 'entro_dust'));

    event
        .custom({
            type: 'ae2:inscriber',
            ingredients: {
                middle: {
                    item: 'r2aot:entro_crystal',
                },
                top: {
                    item: 'r2aot:concurrent_processor_press',
                },
            },
            mode: 'inscribe',
            result: {
                count: 1,
                item: 'r2aot:concurrent_processor_print',
            },
        })
        .id(kjs('inscriber', 'concurrent_processor_print'));

    event
        .custom({
            type: 'ae2:inscriber',
            ingredients: {
                bottom: {
                    item: 'ae2:printed_silicon',
                },
                middle: {
                    tag: 'forge:dusts/redstone',
                },
                top: {
                    item: 'r2aot:concurrent_processor_print',
                },
            },
            mode: 'press',
            result: {
                count: 1,
                item: 'r2aot:concurrent_processor',
            },
        })
        .id(kjs('inscriber', 'concurrent_processor'));

    event
        .custom({
            type: 'expatternprovider:circuit_cutter',
            fluid_input: {
                amount: 100,
                ingredient: {
                    fluid: 'minecraft:water',
                },
            },
            item_input: {
                amount: 1,
                ingredient: {
                    item: 'r2aot:entro_block',
                },
            },
            output: {
                count: 4,
                item: 'r2aot:concurrent_processor_print',
            },
        })
        .id(kjs('circuit_cutter', 'concurrent_processor_print'));

    event
        .custom({
            type: 'advanced_ae:reaction',
            energy: 500000,
            fluid: {
                fluidStack: {
                    Amount: 500,
                    FluidName: 'minecraft:water',
                },
            },
            input_items: [
                {
                    amount: 32,
                    ingredient: {
                        item: 'r2aot:entro_dust',
                    },
                },
                {
                    amount: 32,
                    ingredient: {
                        item: 'minecraft:gold_ingot',
                    },
                },
                {
                    amount: 32,
                    ingredient: {
                        item: 'minecraft:lapis_lazuli',
                    },
                },
            ],
            output: {
                '#': 64,
                '#c': 'ae2:i',
                id: 'r2aot:entro_ingot',
            },
        })
        .id(kjs('aae_reaction', 'entro_ingot'));

    event
        .custom({
            type: 'advanced_ae:reaction',
            energy: 100000,
            fluid: {
                fluidStack: {
                    Amount: 500,
                    FluidName: 'minecraft:water',
                },
            },
            input_items: [
                {
                    amount: 32,
                    ingredient: {
                        item: 'r2aot:entro_dust',
                    },
                },
                {
                    amount: 32,
                    ingredient: {
                        item: 'ae2:fluix_crystal',
                    },
                },
            ],
            output: {
                '#': 64,
                '#c': 'ae2:i',
                id: 'r2aot:entro_crystal',
            },
        })
        .id(kjs('aae_reaction', 'entro_crystal'));

    event
        .custom({
            type: 'advanced_ae:reaction',
            energy: 20000,
            fluid: {
                fluidStack: {
                    Amount: 100,
                    FluidName: 'minecraft:water',
                },
            },
            input_items: [
                {
                    amount: 4,
                    ingredient: {
                        item: 'r2aot:concurrent_processor_print',
                    },
                },
                {
                    amount: 4,
                    ingredient: {
                        item: 'ae2:printed_silicon',
                    },
                },
                {
                    amount: 4,
                    ingredient: {
                        tag: 'forge:dusts/redstone',
                    },
                },
            ],
            output: {
                '#': 4,
                '#c': 'ae2:i',
                id: 'r2aot:concurrent_processor',
            },
        })
        .id(kjs('aae_reaction', 'concurrent_processor'));
});

ServerEvents.recipes(event => {
    const { kubejs } = event.recipes;

    // EAE Recipes in 1.21.1
    kubejs
        .shaped('r2aot:ex_machine_frame', ['EIE', 'CGC', 'EIE'], {
            C: 'minecraft:copper_ingot',
            E: 'r2aot:entro_ingot',
            G: 'ae2:quartz_glass',
            I: 'minecraft:iron_ingot',
        })
        .id(kjs('ex_machine_frame'));

    kubejs
        .shaped('r2aot:entro_block', ['CC', 'CC'], {
            C: 'r2aot:entro_ingot',
        })
        .id(kjs('entro_block'));

    kubejs.shapeless('4x r2aot:entro_crystal', ['r2aot:entro_block']).id(kjs('entro_crystal_unpack'));

    kubejs
        .shapeless('2x r2aot:entro_seed', [
            '#minecraft:smelts_to_glass',
            '#forge:dusts/ender_pearl',
            '#forge:dusts/ender_pearl',
            '#forge:dusts/ender_pearl',
            '#forge:dusts/redstone',
            '#forge:dusts/redstone',
            '#forge:dusts/glowstone',
            '#forge:dusts/glowstone',
            'ae2:sky_dust',
        ])
        .id(kjs('entro_seed'));

    kubejs
        .shaped('r2aot:concurrent_processor_press', ['AAA', 'BCB', 'B B'], {
            A: 'minecraft:ender_eye',
            B: 'r2aot:entro_crystal',
            C: 'ae2:silicon_press',
        })
        .id(kjs('concurrent_processor_press'));

    kubejs
        .shaped('expatternprovider:ex_io_port', ['ACB', 'CMC', 'BCA'], {
            A: 'ae2:logic_processor',
            B: 'r2aot:concurrent_processor',
            C: 'ae2:speed_card',
            M: 'ae2:io_port',
        })
        .id('expatternprovider:ex_io_port');

    kubejs
        .shaped('expatternprovider:wireless_hub', ['SQS', 'EWE', 'SES'], {
            E: 'r2aot:concurrent_processor',
            Q: 'ae2:quantum_link',
            S: '#ae2:smart_cable',
            W: 'expatternprovider:wireless_connect',
        })
        .id('expatternprovider:wireless_hub');

    kubejs
        .shapeless('expatternprovider:ex_inscriber', [
            'ae2:inscriber',
            '3x ae2:capacity_card',
            'r2aot:concurrent_processor',
        ])
        .id('expatternprovider:ex_inscriber');

    kubejs
        .shapeless('expatternprovider:ex_charger', ['ae2:charger', 'ae2:capacity_card', 'r2aot:concurrent_processor'])
        .id('expatternprovider:ex_charger');

    kubejs
        .shaped('expatternprovider:ex_interface', ['PC', 'CZ'], {
            C: 'ae2:capacity_card',
            P: '#ae2:interface',
            Z: 'r2aot:concurrent_processor',
        })
        .id('expatternprovider:ei');

    kubejs
        .shapeless('expatternprovider:interface_upgrade', [
            'ae2:capacity_card',
            'ae2:capacity_card',
            'r2aot:concurrent_processor',
        ])
        .id('expatternprovider:ei_upgrade');

    kubejs
        .shaped('expatternprovider:ex_pattern_provider', ['PC', 'CZ'], {
            C: 'ae2:capacity_card',
            P: '#ae2:pattern_provider',
            Z: 'r2aot:concurrent_processor',
        })
        .id('expatternprovider:epp');

    kubejs
        .shapeless('expatternprovider:pattern_provider_upgrade', [
            'ae2:capacity_card',
            'ae2:capacity_card',
            'r2aot:concurrent_processor',
        ])
        .id('expatternprovider:epp_upgrade');

    kubejs
        .shaped('expatternprovider:ex_molecular_assembler', ['FAF', 'ACA', 'FAF'], {
            A: 'ae2:molecular_assembler',
            C: 'r2aot:concurrent_processor',
            F: '#forge:gems/fluix',
        })
        .id('expatternprovider:ex_molecular_assembler');

    kubejs
        .shaped('expatternprovider:assembler_matrix_frame', ['BIB', 'IGI', 'BIB'], {
            B: 'minecraft:lapis_lazuli',
            G: 'r2aot:ex_machine_frame',
            I: '#forge:ingots/iron',
        })
        .id('expatternprovider:assembler_matrix_frame');

    kubejs
        .shaped('2x expatternprovider:assembler_matrix_glass', ['BFB', 'IQI', 'BFB'], {
            B: 'ae2:quartz_glass',
            F: '#forge:gems/fluix',
            I: 'r2aot:entro_ingot',
            Q: '#forge:storage_blocks/quartz',
        })
        .id('expatternprovider:assembler_matrix_glass');

    kubejs
        .shaped('2x expatternprovider:assembler_matrix_wall', ['BFB', 'IQI', 'BFB'], {
            B: 'minecraft:iron_bars',
            F: '#forge:gems/fluix',
            I: 'r2aot:entro_ingot',
            Q: '#forge:storage_blocks/quartz',
        })
        .id('expatternprovider:assembler_matrix_wall');

    kubejs
        .shaped('2x expatternprovider:assembler_matrix_pattern', ['BIB', 'BGB', 'BIB'], {
            B: 'ae2:blue_lumen_paint_ball',
            G: 'r2aot:ex_machine_frame',
            I: '#expatternprovider:extended_pattern_provider',
        })
        .id('expatternprovider:assembler_matrix_pattern');

    kubejs
        .shaped('2x expatternprovider:assembler_matrix_speed', ['BIB', 'BGB', 'BIB'], {
            B: 'ae2:red_lumen_paint_ball',
            G: 'r2aot:ex_machine_frame',
            I: 'ae2:speed_card',
        })
        .id('expatternprovider:assembler_matrix_speed');

    kubejs
        .shaped('2x expatternprovider:assembler_matrix_crafter', ['BIB', 'BGB', 'BIB'], {
            B: 'ae2:purple_lumen_paint_ball',
            G: 'r2aot:ex_machine_frame',
            I: 'expatternprovider:ex_molecular_assembler',
        })
        .id('expatternprovider:assembler_matrix_crafter');

    kubejs
        .shaped('r2aot:entro_crystal', ['SSS', 'S S', 'SSS'], {
            S: 'r2aot:entro_shard',
        })
        .id(kjs('entro_recycle'));
});
