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

// addShitfTooltip
ItemEvents.tooltip((event) => {
    const shiftTooltips = [
        {id: 'r2aot:fertilizer_propagator_core', key: 'tooltip.r2aot.fertilizer_propagator_core', lines: 4},
        {id: 'r2aot:andesite_casing_maker_core', key: 'tooltip.r2aot.andesite_casing_maker_core', lines: 3},
        {id: 'r2aot:rainbow_furnace', key: 'tooltip.r2aot.rainbow_furnace', lines: 5},
        {id: 'r2aot:primary_mana_generator_core', key: 'tooltip.r2aot.primary_mana_generator_core', lines: 3},
        {id: 'r2aot:flower_ore_generator', key: 'tooltip.r2aot.flower_ore_generator', lines: 5},
        {id: 'r2aot:mana_motor', key: 'tooltip.r2aot.mana_motor', lines: 3},
        {id: 'r2aot:stress_generator_core', key: 'tooltip.r2aot.stress_generator_core', lines: 5},
        {id: 'r2aot:elemental_altar_core', key: 'tooltip.r2aot.elemental_altar_core', lines: 4},
        {id: 'r2aot:atomic_reconstructor', key: 'tooltip.r2aot.atomic_reconstructor', lines: 3}
    ];

    shiftTooltips.forEach((item) => {
        addShiftTooltip(event, item.id, item.key, item.lines);
    });
});

// addLinesTooltop
ItemEvents.tooltip((event) => {
    const linesTooltip = [
        {id: 'ae2:facade', key: 'tooltip.r2aot.ae2_facade', lines: 2},
        {id: 'r2aot:create_input', key: 'tooltip.r2aot.create_input', lines: 1},
        {id: 'r2aot:create_output', key: 'tooltip.r2aot.create_output', lines: 1},
        {id: 'r2aot:fluid_input_port', key: 'tooltip.r2aot.fluid_input_port', lines: 1},
        {id: 'r2aot:fluid_output_port', key: 'tooltip.r2aot.fluid_output_port', lines: 2},
        {id: 'r2aot:fluid_input_tank', key: 'tooltip.r2aot.fluid_input_tank', lines: 1},
        {id: 'r2aot:fluid_output_tank', key: 'tooltip.r2aot.fluid_output_tank', lines: 2},
        {id: 'r2aot:stress_input', key: 'tooltip,r2aot.stress_input', lines: 1},
        {id: 'createendertransmission:energy_transmitter', key: 'tooltip.createendertransmission.energy_transmitter', lines: 2},
        {id: 'r2aot:item_output_tank', key: 'tooltip.r2aot.item_output_tank', lines: 1},
        {id: 'r2aot:modular_pure_daisy_core', key: 'tooltip.r2aot.modular_pure_daisy_core', lines: 1},
        {id: 'r2aot:pedestal', key: 'tooltip.r2aot.pedestal', lines: 1},
        {id: 'hostilenetworks:loot_fabricator', key: 'tooltip.r2aot.loot_fabricator', lines: 1},
        
    ]

    linesTooltip.forEach((item) => {
        addLinesTooltip(event, item.id, item.key, item.lines);
    })
});

ItemEvents.tooltip((event) => {
    event.addAdvanced('fluxnetworks:flux_dust', (item, advanced, text) => {
        text.add(2, Text.translate('tooltip.r2aot.flux_dust').white())
    })
})