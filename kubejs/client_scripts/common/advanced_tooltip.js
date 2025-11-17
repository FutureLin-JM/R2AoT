ItemEvents.tooltip(event => {
    event.addAdvanced('kubejs:water_seeds_folder', (item, advanced, text) => {
        text.add(
            1,
            Text.translatable(
                'tooltip.kubejs.machine_processing',
                Text.translatable('block.industrialforegoing.dissolution_chamber')
                    .white()
                    .append(Text.white({ text: '\u200a', font: 'r2aot:texture_font' })),
                Text.yellow('I')
            ).yellow()
        );
        text.add(
            2,
            Text.translate('block.botania.blue_petal_block')
                .append(Text.white({ text: '\u0001', font: 'r2aot:texture_font' }))
                .append(Text.yellow('x4'))
        );
        text.add(
            3,
            Text.translate('fluid.r2aot.fluidedmana')
                .append(Text.white({ text: '\u100a', font: 'r2aot:texture_font' }))
                .append(Text.yellow('500mb'))
        );
    });

    event.addAdvanced('kubejs:fire_seeds_folder', (item, advanced, text) => {
        text.add(
            1,
            Text.translatable(
                'tooltip.kubejs.machine_processing',
                Text.translatable('block.industrialforegoing.dissolution_chamber')
                    .white()
                    .append(Text.white({ text: '\u200a', font: 'r2aot:texture_font' })),
                Text.yellow('I')
            ).yellow()
        );
        text.add(
            2,
            Text.translate('block.botania.red_petal_block')
                .append(Text.white({ text: '\u0002', font: 'r2aot:texture_font' }))
                .append(Text.yellow('x4'))
        );
        text.add(
            3,
            Text.translate('fluid.r2aot.fluidedmana')
                .append(Text.white({ text: '\u100a', font: 'r2aot:texture_font' }))
                .append(Text.yellow('500mb'))
        );
    });

    event.addAdvanced('kubejs:earth_seeds_folder', (item, advanced, text) => {
        text.add(
            1,
            Text.translatable(
                'tooltip.kubejs.machine_processing',
                Text.translatable('block.industrialforegoing.dissolution_chamber')
                    .white()
                    .append(Text.white({ text: '\u200a', font: 'r2aot:texture_font' })),
                Text.yellow('I')
            ).yellow()
        );
        text.add(
            2,
            Text.translate('block.botania.green_petal_block')
                .append(Text.white({ text: '\u0003', font: 'r2aot:texture_font' }))
                .append(Text.yellow('x4'))
        );
        text.add(
            3,
            Text.translate('fluid.r2aot.fluidedmana')
                .append(Text.white({ text: '\u100a', font: 'r2aot:texture_font' }))
                .append(Text.yellow('500mb'))
        );
    });

    event.addAdvanced('kubejs:air_seeds_folder', (item, advanced, text) => {
        text.add(
            1,
            Text.translatable(
                'tooltip.kubejs.machine_processing',
                Text.translatable('block.industrialforegoing.dissolution_chamber')
                    .white()
                    .append(Text.white({ text: '\u200a', font: 'r2aot:texture_font' })),
                Text.yellow('I')
            ).yellow()
        );
        text.add(
            2,
            Text.translate('block.botania.orange_petal_block')
                .append(Text.white({ text: '\u0004', font: 'r2aot:texture_font' }))
                .append(Text.yellow('x4'))
        );
        text.add(
            3,
            Text.translate('fluid.r2aot.fluidedmana')
                .append(Text.white({ text: '\u100a', font: 'r2aot:texture_font' }))
                .append(Text.yellow('500mb'))
        );
    });

    event.addAdvanced('kubejs:energized_steel_seeds_folder', (item, advanced, text) => {
        text.add(
            1,
            Text.translatable(
                'tooltip.kubejs.machine_processing',
                Text.translatable('block.thermal.machine_bottler')
                    .white()
                    .append(Text.white({ text: '\u200b', font: 'r2aot:texture_font' })),
                Text.yellow('I')
            ).yellow()
        );
        text.add(
            2,
            Text.translatable('item.mysticalagriculture.prosperity_seed_base')
                .append(Text.white({ text: '\u0005', font: 'r2aot:texture_font' }))
                .append(Text.yellow('x1'))
        );
        text.add(
            3,
            Text.translatable('fluid.r2aot.fluid_aerotheum')
                .append(Text.white({ text: '\u100b', font: 'r2aot:texture_font' }))
                .append(Text.yellow('4000mb'))
        );
        text.add(
            4,
            Text.translatable(
                'tooltip.kubejs.machine_processing',
                Text.translatable('block.ars_nouveau.imbuement_chamber')
                    .white()
                    .append(Text.white({ text: '\u200c', font: 'r2aot:texture_font' })),
                Text.yellow('IV')
            ).yellow()
        );
        text.add(
            5,
            Text.translatable('block.minecraft.iron_block')
                .append(Text.white({ text: '\u0006', font: 'r2aot:texture_font' }))
                .append(Text.yellow('x3'))
        );
        text.add(
            6,
            Text.translatable('block.minecraft.gold_block')
                .append(Text.white({ text: '\u0007', font: 'r2aot:texture_font' }))
                .append(Text.yellow('x3'))
        );
    });

    event.addAdvanced('kubejs:blazing_crystal_seeds_folder', (item, advanced, text) => {
        text.add(
            1,
            Text.translatable(
                'tooltip.kubejs.machine_processing',
                Text.translatable('block.thermal.machine_bottler')
                    .white()
                    .append(Text.white({ text: '\u200b', font: 'r2aot:texture_font' })),
                Text.yellow('I')
            ).yellow()
        );
        text.add(
            2,
            Text.translatable('item.mysticalagriculture.prosperity_seed_base')
                .append(Text.white({ text: '\u0005', font: 'r2aot:texture_font' }))
                .append(Text.yellow('x1'))
        );
        text.add(
            3,
            Text.translatable('fluid.r2aot.fluid_pyrotheum')
                .append(Text.white({ text: '\u100c', font: 'r2aot:texture_font' }))
                .append(Text.yellow('4000mb'))
        );
        text.add(
            4,
            Text.translatable(
                'tooltip.kubejs.machine_processing',
                Text.translatable('block.ars_nouveau.imbuement_chamber')
                    .white()
                    .append(Text.white({ text: '\u200c', font: 'r2aot:texture_font' })),
                Text.yellow('IV')
            ).yellow()
        );
        text.add(
            5,
            Text.translatable('block.botania.blaze_block')
                .append(Text.white({ text: '\u0008', font: 'r2aot:texture_font' }))
                .append(Text.yellow('x6'))
        );
    });

    event.addAdvanced('kubejs:niotic_crystal_seeds_folder', (item, advanced, text) => {
        text.add(
            1,
            Text.translatable(
                'tooltip.kubejs.machine_processing',
                Text.translatable('block.thermal.machine_bottler')
                    .white()
                    .append(Text.white({ text: '\u200b', font: 'r2aot:texture_font' })),
                Text.yellow('I')
            ).yellow()
        );
        text.add(
            2,
            Text.translatable('item.mysticalagriculture.prosperity_seed_base')
                .append(Text.white({ text: '\u0005', font: 'r2aot:texture_font' }))
                .append(Text.yellow('x1'))
        );
        text.add(
            3,
            Text.translatable('fluid.r2aot.fluid_cryotheum')
                .append(Text.white({ text: '\u100d', font: 'r2aot:texture_font' }))
                .append(Text.yellow('4000mb'))
        );
        text.add(
            4,
            Text.translatable(
                'tooltip.kubejs.machine_processing',
                Text.translatable('block.ars_nouveau.imbuement_chamber')
                    .white()
                    .append(Text.white({ text: '\u200c', font: 'r2aot:texture_font' })),
                Text.yellow('IV')
            ).yellow()
        );
        text.add(
            5,
            Text.translatable('block.minecraft.diamond_block')
                .append(Text.white({ text: '\u0009', font: 'r2aot:texture_font' }))
                .append(Text.yellow('x6'))
        );
    });

    event.addAdvanced('kubejs:spirited_crystal_seeds_folder', (item, advanced, text) => {
        text.add(
            1,
            Text.translatable(
                'tooltip.kubejs.machine_processing',
                Text.translatable('block.thermal.machine_bottler')
                    .white()
                    .append(Text.white({ text: '\u200b', font: 'r2aot:texture_font' })),
                Text.yellow('I')
            ).yellow()
        );
        text.add(
            2,
            Text.translatable('item.mysticalagriculture.prosperity_seed_base')
                .append(Text.white({ text: '\u0005', font: 'r2aot:texture_font' }))
                .append(Text.yellow('x1'))
        );
        text.add(
            3,
            Text.translatable('fluid.r2aot.fluid_petrotheum')
                .append(Text.white({ text: '\u100e', font: 'r2aot:texture_font' }))
                .append(Text.yellow('4000mb'))
        );
        text.add(
            4,
            Text.translatable(
                'tooltip.kubejs.machine_processing',
                Text.translatable('block.ars_nouveau.imbuement_chamber')
                    .white()
                    .append(Text.white({ text: '\u200c', font: 'r2aot:texture_font' })),
                Text.yellow('IV')
            ).yellow()
        );
        text.add(
            5,
            Text.translatable('block.minecraft.emerald_block')
                .append(Text.white({ text: '\u0010', font: 'r2aot:texture_font' }))
                .append(Text.yellow('x6'))
        );
    });
});
