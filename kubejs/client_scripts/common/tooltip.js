function addShiftTooltip(event, itemId, tooltipKey, lines) {
    event.addAdvanced(itemId, (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, Text.translate('tooltip.r2aot.hold_shift', Text.yellow('Shift')).aqua());
        }
        else {
            text.add(1, Text.translate('tooltip.r2aot.hold_shift', Text.white('Shift')).darkGray());

            for (let i = 1; i <= lines; i++) {
                text.add(i + 1, Text.translate(`${tooltipKey}_${i}`).aqua());
            }
        }
    });
}

function addLinesTooltip(event, itemId, tooltipKey, lines) {
    event.addAdvanced(itemId, (item, advanced, text) => {
        for (let i = 1; i <= lines; i++) {
            text.add(Text.translate(`${tooltipKey}_${i}`).aqua());
        }
    });
}

ItemEvents.tooltip((event) => {
    // addShitfTooltip
    const shiftTooltips = [
        {id: 'r2aot:fertilizer_propagator_core', key: 'tooltip.r2aot.fertilizer_propagator_core', lines: 4},
        {id: 'r2aot:andesite_casing_maker_core', key: 'tooltip.r2aot.andesite_casing_maker_core', lines: 3},
        {id: 'r2aot:rainbow_furnace', key: 'tooltip.r2aot.rainbow_furnace', lines: 5},
        {id: 'r2aot:mana_generator_core', key: 'tooltip.r2aot.mana_generator_core', lines: 3},
        {id: 'r2aot:flower_ore_generator', key: 'tooltip.r2aot.flower_ore_generator', lines: 5},
        {id: 'r2aot:mana_motor', key: 'tooltip.r2aot.mana_motor', lines: 3},
        {id: 'r2aot:stress_generator_core', key: 'tooltip.r2aot.stress_generator_core', lines: 5},
        {id: 'r2aot:elemental_altar_core', key: 'tooltip.r2aot.elemental_altar_core', lines: 4},
        {id: 'r2aot:atomic_reconstructor', key: 'tooltip.r2aot.atomic_reconstructor', lines: 3},
    ];
    shiftTooltips.forEach((item) => {
        addShiftTooltip(event, item.id, item.key, item.lines);
    });

    // addLinesTooltop
    const linesTooltip = [
        {id: 'ae2:facade', key: 'tooltip.r2aot.ae2_facade', lines: 2},
        {id: 'r2aot:create_input', key: 'tooltip.r2aot.create_input', lines: 1},
        {id: 'r2aot:create_output', key: 'tooltip.r2aot.create_output', lines: 1},
        {id: 'r2aot:stress_input', key: 'tooltip.r2aot.stress_input', lines: 1},
        {id: 'r2aot:fluid_input', key: 'tooltip.r2aot.fluid_input', lines: 2},
        {id: 'r2aot:fluid_output', key: 'tooltip.r2aot.fluid_output', lines: 3},
        {id: 'createendertransmission:energy_transmitter', key: 'tooltip.createendertransmission.energy_transmitter', lines: 2},
        {id: 'r2aot:modular_pure_daisy_core', key: 'tooltip.r2aot.modular_pure_daisy_core', lines: 1},
        {id: 'r2aot:pedestal', key: 'tooltip.r2aot.pedestal', lines: 1},
        {id: 'hostilenetworks:loot_fabricator', key: 'tooltip.r2aot.loot_fabricator', lines: 1},
        {id: 'r2aot:time_voucher', key: 'tooltip.r2aot.time_voucher', lines: 4},
    ]
    linesTooltip.forEach((item) => {
        addLinesTooltip(event, item.id, item.key, item.lines);
    })

    event.addAdvanced('fluxnetworks:flux_dust', (item, advanced, text) => {
        text.add(2, Text.translate('tooltip.r2aot.flux_dust').white())
    })

    event.addAdvancedToAll((item, advanced, text) => {
        if (item == Item.of('minecraft:enchanted_book').enchant('r2aot:kylin_arm', 1).strongNBT()) {
            text.add(2, Text.translate('tooltip.r2aot.kylin_arm_1').gold());
            text.add(3, Text.translate('tooltip.r2aot.kylin_arm_2').gold());
            text.add(4, Text.translate('tooltip.r2aot.kylin_arm_3').gold());
        }
    })

    const collbeInfo = [
        {tier: 1, countEveryTime: 1, onceSeconds: 12, maxCapacity: 128},
        {tier: 2, countEveryTime: 2, onceSeconds: 10, maxCapacity: 256},
        {tier: 3, countEveryTime: 4, onceSeconds: 8, maxCapacity: 384},
        {tier: 4, countEveryTime: 8, onceSeconds: 6, maxCapacity: 512},
        {tier: 5, countEveryTime: 32, onceSeconds: 2, maxCapacity: 768},
        {tier: 6, countEveryTime: 64, onceSeconds: 1, maxCapacity: 1024}
    ]
    collbeInfo.forEach(tierData => {
        event.addAdvanced(`r2aot:cobble_gen_tier_${tierData.tier}`, (item, advanced, text) => {
            text.add(1, Text.translate('tooltip.r2aot.cobble_gen_1', Text.red(tierData.countEveryTime.toFixed(0))).aqua());
            text.add(2, Text.translate('tooltip.r2aot.cobble_gen_2', Text.red(tierData.onceSeconds.toFixed(0))).aqua());
            text.add(3, Text.translate('tooltip.r2aot.cobble_gen_3', Text.red(tierData.maxCapacity.toFixed(0))).aqua());
            text.add(4, Text.translate('tooltip.r2aot.cobble_gen_4').aqua());
        })
    })

    event.addAdvanced('kubejs:water_seeds_folder', (item, advanced, text) => {
        text.add(1, Text.translate('tooltip.kubejs.machine_processing_1').aqua()
                        .append(Text.white({text:'\u200a', font:'r2aot:texture_font'}))
                        .append(Text.translatable('block.industrialforegoing.dissolution_chamber').yellow())
                        .append(Text.translatable('tooltip.kubejs.machine_processing_2')));
        text.add(2, Text.translatable('block.botania.blue_petal_block')
                        .append(Text.white({text:'\u0001', font:'r2aot:texture_font'}))
                        .append(Text.yellow('x4')));
        text.add(3, Text.translatable('fluid.r2aot.fluidedmana')
                        .append(Text.white({text:'\u100a', font:'r2aot:texture_font'}))
                        .append(Text.yellow('500mb')));
    });

    event.addAdvanced('kubejs:fire_seeds_folder', (item, advanced, text) => {
        text.add(1, Text.translate('tooltip.kubejs.machine_processing_1').aqua()
                        .append(Text.white({text:'\u200a', font:'r2aot:texture_font'}))
                        .append(Text.translatable('block.industrialforegoing.dissolution_chamber').yellow())
                        .append(Text.translatable('tooltip.kubejs.machine_processing_2')));
        text.add(2, Text.translatable('block.botania.red_petal_block')
                        .append(Text.white({text:'\u0002', font:'r2aot:texture_font'}))
                        .append(Text.yellow('x4')));
        text.add(3, Text.translatable('fluid.r2aot.fluidedmana')
                        .append(Text.white({text:'\u100a', font:'r2aot:texture_font'}))
                        .append(Text.yellow('500mb')));
    });

    event.addAdvanced('kubejs:earth_seeds_folder', (item, advanced, text) => {
        text.add(1, Text.translate('tooltip.kubejs.machine_processing_1').aqua()
                        .append(Text.white({text:'\u200a', font:'r2aot:texture_font'}))
                        .append(Text.translatable('block.industrialforegoing.dissolution_chamber').yellow())
                        .append(Text.translatable('tooltip.kubejs.machine_processing_2')));
        text.add(2, Text.translatable('block.botania.green_petal_block')
                        .append(Text.white({text:'\u0003', font:'r2aot:texture_font'}))
                        .append(Text.yellow('x4')));
        text.add(3, Text.translatable('fluid.r2aot.fluidedmana')
                        .append(Text.white({text:'\u100a', font:'r2aot:texture_font'}))
                        .append(Text.yellow('500mb')));
    });

    event.addAdvanced('kubejs:air_seeds_folder', (item, advanced, text) => {
        text.add(1, Text.translate('tooltip.kubejs.machine_processing_1').aqua()
                        .append(Text.white({text:'\u200a', font:'r2aot:texture_font'}))
                        .append(Text.translatable('block.industrialforegoing.dissolution_chamber').yellow())
                        .append(Text.translatable('tooltip.kubejs.machine_processing_2')));
        text.add(2, Text.translatable('block.botania.orange_petal_block')
                        .append(Text.white({text:'\u0004', font:'r2aot:texture_font'}))
                        .append(Text.yellow('x4')));
        text.add(3, Text.translatable('fluid.r2aot.fluidedmana')
                        .append(Text.white({text:'\u100a', font:'r2aot:texture_font'}))
                        .append(Text.yellow('500mb')));
    })
});