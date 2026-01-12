ItemEvents.tooltip(event => {
    // addCtrlTooltip
    const ctrlTooltips = [{ id: 'r2aot:chalk_black', key: 'tooltip.r2aot.chalk_black_ctrl', lines: 3 }];
    ctrlTooltips.forEach(item => {
        addCtrlTooltip(event, item.id, item.key, item.lines);
    });

    // addShiftTooltip
    const shiftTooltips = [
        { id: 'r2aot:fertilizer_propagator_core', key: 'tooltip.r2aot.fertilizer_propagator_core', lines: 4 },
        { id: 'r2aot:andesite_casing_maker_core', key: 'tooltip.r2aot.andesite_casing_maker_core', lines: 3 },
        { id: 'r2aot:rainbow_furnace', key: 'tooltip.r2aot.rainbow_furnace', lines: 5 },
        { id: 'r2aot:mana_generator_core', key: 'tooltip.r2aot.mana_generator_core', lines: 3 },
        { id: 'r2aot:fluid_input', key: 'tooltip.r2aot.fluid_input', lines: 1 },
        { id: 'r2aot:fluid_output', key: 'tooltip.r2aot.fluid_output', lines: 2 },
        { id: 'r2aot:flower_ore_generator', key: 'tooltip.r2aot.flower_ore_generator', lines: 5 },
        { id: 'r2aot:stress_generator_core', key: 'tooltip.r2aot.stress_generator_core', lines: 5 },
        { id: 'r2aot:elemental_altar_core', key: 'tooltip.r2aot.elemental_altar_core', lines: 4 },
        { id: 'r2aot:atomic_reconstructor', key: 'tooltip.r2aot.atomic_reconstructor', lines: 3 },
        { id: 'r2aot:processing_mixer_core', key: 'tooltip.r2aot.processing_mixer_core', lines: 2 },
        { id: 'botania:terra_plate', key: 'tooltip.botania.terra_plate', lines: 2 },
        { id: 'r2aot:fluid_sourcelink', key: 'tooltip.r2aot.fluid_sourcelink', lines: 3 },
        { id: 'r2aot:pedestal_ars', key: 'tooltip.r2aot.pedestal_ars', lines: 3 },
        { id: 'r2aot:pedestal_botania', key: 'tooltip.r2aot.pedestal_botania', lines: 2 },
        { id: 'r2aot:modular_runic_altar_core', key: 'tooltip.r2aot.modular_runic_altar_core', lines: 2 },
        { id: 'r2aot:animal_wellspring_core', key: 'tooltip.r2aot.animal_wellspring_core', lines: 3 },
        { id: 'r2aot:chalk_black', key: 'tooltip.r2aot.chalk_black_shift', lines: 2 },
    ];
    shiftTooltips.forEach(item => {
        addShiftTooltip(event, item.id, item.key, item.lines);
    });

    // addLinesTooltop
    const linesTooltip = [
        { id: 'ae2:facade', key: 'tooltip.r2aot.ae2_facade', lines: 2 },
        { id: 'r2aot:create_input', key: 'tooltip.r2aot.create_input', lines: 1 },
        { id: 'r2aot:create_output', key: 'tooltip.r2aot.create_output', lines: 1 },
        { id: 'createendertransmission:energy_transmitter', key: 'tooltip.cet.energy_transmitter', lines: 1 },
        { id: 'r2aot:modular_pure_daisy_core', key: 'tooltip.r2aot.modular_pure_daisy_core', lines: 1 },
        { id: 'r2aot:pedestal', key: 'tooltip.r2aot.pedestal', lines: 1 },
        { id: 'hostilenetworks:loot_fabricator', key: 'tooltip.hostilenetworks.loot_fabricator', lines: 1 },
        { id: 'r2aot:time_voucher', key: 'tooltip.r2aot.time_voucher', lines: 1 },
        { id: 'r2aot:controller_frame', key: 'tooltip.r2aot.controller_frame', lines: 1 },
        { id: 'ars_nouveau:bookwyrm_charm', key: 'tooltip.ars_nouveau.bookwyrm_charm', lines: 1 },
        { id: 'ars_nouveau:starbuncle_charm', key: 'tooltip.ars_nouveau.starbuncle_charm', lines: 1 },
        { id: 'ars_nouveau:whirlisprig_charm', key: 'tooltip.ars_nouveau.whirlisprig_charm', lines: 1 },
        { id: 'ars_nouveau:wixie_charm', key: 'tooltip.ars_nouveau.wixie_charm', lines: 1 },
        { id: 'ars_nouveau:drygmy_charm', key: 'tooltip.ars_nouveau.drygmy_charm', lines: 1 },
        { id: 'ars_nouveau:amethyst_golem_charm', key: 'tooltip.ars_nouveau.amethyst_golem_charm', lines: 1 },
        { id: 'ars_nouveau:imbuement_chamber', key: 'tooltip.ars_nouveau.imbuement_chamber', lines: 1 },
        { id: 'botania:black_lotus', key: 'tooltip.botania.black_lotus', lines: 1 },
    ];
    linesTooltip.forEach(item => {
        addLinesTooltip(event, item.id, item.key, item.lines);
    });

    const removeTooltip = [
        { id: 'ars_nouveau:bookwyrm_charm', lines: [1] },
        { id: 'ars_nouveau:amethyst_golem_charm', lines: [1] },
        { id: 'ars_nouveau:starbuncle_shards', lines: [1] },
        { id: 'ars_nouveau:whirlisprig_shards', lines: [1] },
        { id: 'ars_nouveau:wixie_shards', lines: [1] },
        { id: 'ars_nouveau:drygmy_shard', lines: [1] },
    ];
    removeTooltip.forEach(item => {
        removeLinesTooltip(event, item.id, item.lines);
    });

    event.addAdvanced('fluxnetworks:flux_dust', (item, advanced, text) => {
        text.add(2, Text.translate('tooltip.r2aot.flux_dust').white());
    });
    event.addAdvanced('ars_nouveau:source_gem', (item, advanced, text) => {
        text.set(1, Text.translate('tooltip.ars.source_gem').white());
    });

    const collbeInfo = [
        { tier: 1, countEveryTime: 1, onceSeconds: 12, maxCapacity: 128 },
        { tier: 2, countEveryTime: 2, onceSeconds: 10, maxCapacity: 256 },
        { tier: 3, countEveryTime: 4, onceSeconds: 8, maxCapacity: 384 },
        { tier: 4, countEveryTime: 8, onceSeconds: 6, maxCapacity: 512 },
        { tier: 5, countEveryTime: 32, onceSeconds: 2, maxCapacity: 768 },
        { tier: 6, countEveryTime: 64, onceSeconds: 1, maxCapacity: 1024 },
    ];
    collbeInfo.forEach(tierData => {
        event.addAdvanced(`r2aot:cobble_gen_tier_${tierData.tier}`, (item, advanced, text) => {
            text.add(
                1,
                Text.translate('tooltip.r2aot.cobble_gen_1', Text.red(tierData.countEveryTime.toFixed(0))).yellow()
            );
            text.add(
                2,
                Text.translate('tooltip.r2aot.cobble_gen_2', Text.red(tierData.onceSeconds.toFixed(0))).yellow()
            );
            text.add(
                3,
                Text.translate('tooltip.r2aot.cobble_gen_3', Text.red(tierData.maxCapacity.toFixed(0))).yellow()
            );
            text.add(4, Text.translate('tooltip.r2aot.cobble_gen_4').yellow());
        });
    });

    const dataModelMultiblockList = [
        'hostilenetworks:blaze',
        'hostilenetworks:ghast',
        'hostilenetworks:chicken',
        'hostilenetworks:sheep',
        'hostilenetworks:cow',
        'hostilenetworks:vindicator',
        'hostilenetworks:creeper',
        'hostilenetworks:skeleton',
        'hostilenetworks:slime',
        'hostilenetworks:enderman',
        'hostilenetworks:spider',
    ];
    event.addAdvanced('hostilenetworks:data_model', (item, advanced, text) => {
        let itemId = item.nbt?.data_model?.id;
        if (itemId && dataModelMultiblockList.includes(itemId)) {
            text.add(1, Text.translate('tooltip.r2aot.data_model_multiblock').yellow());
        }
    });

    const dataModelCraftingList = [
        'hostilenetworks:thermal/blitz',
        'hostilenetworks:thermal/blizz',
        'hostilenetworks:thermal/basalz',
        'hostilenetworks:guardian',
        'hostilenetworks:shulker',
        'hostilenetworks:warden',
    ];
    event.addAdvanced('hostilenetworks:data_model', (item, advanced, text) => {
        let itemId = item.nbt?.data_model?.id;
        if (itemId && dataModelCraftingList.includes(itemId)) {
            text.add(1, Text.translate('tooltip.r2aot.data_model_crafting').yellow());
            let data = item.nbt?.data_model?.data;
            let iterations = item.nbt?.data_model?.iterations;
            if (iterations && iterations > 0) {
                text.add(2, Text.translate('tooltip.r2aot.data_model_crafting.error').yellow());
            } else if (data && data < 1254 && data !== 6 && data !== 54 && data !== 354) {
                text.add(2, Text.translate('tooltip.r2aot.data_model_crafting.error').yellow());
            }
        }
    });

    const buddyCardBaseOre = [
        'coal',
        'copper',
        'diamond',
        'emerald',
        'gold',
        'iron',
        'lapis',
        'netherite',
        'quartz',
        'redstone',
        'zinc',
    ];
    event.addAdvanced('buddycards:buddycard_base27', (item, advanced, text) => {
        if (item.hasNBT()) {
            buddyCardBaseOre.forEach(ore => {
                if (item.getNbt().contains(ore)) {
                    const value = item.getNbt().getInt(ore);
                    text.add(
                        1,
                        Text.translate(
                            'tooltip.r2aot.buddycard.ore_chance',
                            Text.translate(`item.r2aot.buddycard_ore_${ore}`),
                            Text.red(`${value.toFixed(0)}%`)
                        ).yellow()
                    );
                }
            });
        }
    });

    event.addAdvanced('mechanicalbotania:mana_motor', (item, advanced, text) => {
        text.add('');
        text.add(Text.translate('create.tooltip.capacityProvided').gray());
        text.add(Text.gold(' ██▒ 256x RPM')); // 模组目前对应rpmvalues的配置存在bug，先这样写死
        text.add(Text.darkGray(' -> ').append(Text.translate('create.tooltip.up_to', '16,384su')));
    });

    event.addAdvanced('createendertransmission:energy_transmitter', (item, advanced, text) => {
        text.add('');
        text.add(Text.translate('create.tooltip.stressImpact').gray());
        text.add(Text.red(' ███ 8x RPM'));
    });

    event.addAdvanced('r2aot:stress_input', (item, advanced, text) => {
        text.add('');
        text.add(Text.translate('create.tooltip.stressImpact').gray());
        text.add(Text.gold(' █▒▒ 4x RPM'));
    });

    event.addAdvanced('r2aot:flower_ore_generator', (item, advanced, text) => {
        text.add('');
        text.add(Text.translate('create.tooltip.stressImpact').gray());
        text.add(Text.yellow(' █▒▒ 2x RPM'));
    });

    // function getRainbowColor(index, time) {
    //     const rainbowColors = [
    //         '#FF0000', // 红
    //         '#FF7F00', // 橙
    //         '#FFFF00', // 黄
    //         '#00FF00', // 绿
    //         '#0000FF', // 蓝
    //         '#8B00FF', // 紫
    //     ];

    //     // 计算颜色索引（随时间变化）
    //     const speed = 0.005; // 颜色变化速度
    //     const colorCount = rainbowColors.length;
    //     const baseIndex = Math.floor((time * speed) % colorCount);
    //     const colorIndex = (baseIndex + index) % colorCount;

    //     return rainbowColors[colorIndex];
    // }

    // event.addAdvanced('r2aot:rainbow_furnace', (item, advanced, text) => {
    //     let nameString = Text.translate('block.r2aot.rainbow_furnace_font').getString();
    //     if (!nameString || nameString === 'block.r2aot.rainbow_furnace_font') {
    //         nameString = 'Rainbow Furnace';
    //     }
    //     let rainbowName = Text.of('');
    //     const time = Date.now();

    //     Array.from(nameString).forEach((char, index) => {
    //         const color = getRainbowColor(index, time);
    //         rainbowName = rainbowName.append(Text.of(char).color(color));
    //     });

    //     text.set(0, rainbowName);
    // });
});

/**
 * @param {Internal.ItemTooltipEventJS} event
 * @param {Internal.Ingredient_} itemId
 * @param {string} tooltipKey
 * @param {number} lines
 */
function addShiftTooltip(event, itemId, tooltipKey, lines) {
    event.addAdvanced(itemId, (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, Text.translate('tooltip.r2aot.hold_shift', Text.yellow('Shift')).gold());
        } else {
            text.add(1, Text.translate('tooltip.r2aot.hold_shift', Text.white('Shift')).darkGray());

            for (let i = 1; i <= lines; i++) {
                text.add(i + 1, Text.translate(`${tooltipKey}_${i}`).yellow());
            }
        }
    });
}

/**
 * @param {Internal.ItemTooltipEventJS} event
 * @param {Internal.Ingredient_} itemId
 * @param {string} tooltipKey
 * @param {number} lines
 */
function addCtrlTooltip(event, itemId, tooltipKey, lines) {
    event.addAdvanced(itemId, (item, advanced, text) => {
        if (!event.ctrl) {
            text.add(1, Text.translate('tooltip.r2aot.hold_ctrl', Text.yellow('Ctrl')).gold());
        } else {
            text.add(1, Text.translate('tooltip.r2aot.hold_ctrl', Text.white('Ctrl')).darkGray());

            for (let i = 1; i <= lines; i++) {
                text.add(i + 1, Text.translate(`${tooltipKey}_${i}`).yellow());
            }
        }
    });
}

/**
 * @param {Internal.ItemTooltipEventJS} event
 * @param {Internal.Ingredient_} itemId
 * @param {string} tooltipKey
 * @param {number} lines
 */
function addLinesTooltip(event, itemId, tooltipKey, lines) {
    event.addAdvanced(itemId, (item, advanced, text) => {
        for (let i = 1; i <= lines; i++) {
            text.add(Text.translate(`${tooltipKey}_${i}`).yellow());
        }
    });
}

/**
 * @param {Internal.ItemTooltipEventJS} event
 * @param {Internal.Ingredient_} itemId
 * @param {number[]} lines
 */
function removeLinesTooltip(event, itemId, lines) {
    event.addAdvanced(itemId, (item, advanced, text) => {
        for (let i of lines) {
            text.remove(i);
        }
    });
}
