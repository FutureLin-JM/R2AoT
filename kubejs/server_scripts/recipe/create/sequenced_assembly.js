/**
 * 为指定机器ID创建带有机器处理附魔的物品
 * @param {string} machineID - 要处理的机器ID，用于创建基础物品
 * @returns {Item} - 返回一个带有'r2aot:machine_processing'附魔标记的物品对象
 */
function processingMachine(machineID) {
    return Item.of(machineID).enchant('r2aot:machine_processing', 1).strongNBT();
}

ServerEvents.recipes(event => {
    const { sequenced_assembly, deploying, cutting, pressing, filling } = event.recipes.create;

    let in_pr_me = 'create:incomplete_precision_mechanism';
    sequenced_assembly('create:precision_mechanism', '#forge:plates/gold', [
        deploying(in_pr_me, [in_pr_me, 'create:cogwheel']),
        deploying(in_pr_me, [in_pr_me, 'create:large_cogwheel']),
        deploying(in_pr_me, [in_pr_me, '#forge:nuggets/iron']),
    ])
        .loops(3)
        .transitionalItem(in_pr_me)
        .id('create:sequenced_assembly/precision_mechanism');

    let un_ob_sh = 'create:unprocessed_obsidian_sheet';
    sequenced_assembly('create:sturdy_sheet', '#forge:dusts/obsidian', [
        filling(un_ob_sh, [Fluid.of('minecraft:lava', 500), un_ob_sh]),
        filling(un_ob_sh, [Fluid.of('r2aot:seed_oil', 500), un_ob_sh]),
        filling(un_ob_sh, [Fluid.of('r2aot:bioethanol', 500), un_ob_sh]),
        filling(un_ob_sh, [Fluid.of('r2aot:fluidedmana', 250), un_ob_sh]),
        pressing(un_ob_sh, un_ob_sh),
    ])
        .loops(1)
        .transitionalItem(un_ob_sh)
        .id('create:sequenced_assembly/sturdy_sheet');

    ['calculation', 'logic', 'engineering'].forEach(form => {
        let pr_xx_pr = `ae2:printed_${form}_processor`;
        sequenced_assembly(`ae2:${form}_processor`, pr_xx_pr, [
            deploying(pr_xx_pr, [pr_xx_pr, 'ae2:printed_silicon']),
            pressing(pr_xx_pr, pr_xx_pr),
        ])
            .loops(1)
            .transitionalItem(pr_xx_pr)
            .id(kjs('sequenced_assembly', `${form}_processor`));
    });

    let in_wa_se = 'kubejs:incomplete_water_seeds';
    sequenced_assembly('mysticalagriculture:water_seeds', 'kubejs:water_seeds_folder', [
        deploying(in_wa_se, [in_wa_se, processingMachine('industrialforegoing:dissolution_chamber')]),
        deploying(in_wa_se, [in_wa_se, 'mysticalagriculture:inferium_essence']),
        filling(in_wa_se, [Fluid.of('water', 500), in_wa_se]),
        deploying(in_wa_se, [in_wa_se, 'minecraft:wheat_seeds']),
        pressing(in_wa_se, in_wa_se),
    ])
        .loops(1)
        .transitionalItem(in_wa_se)
        .id(kjs('sequenced_assembly', 'water_seeds'));

    let in_fi_se = 'kubejs:incomplete_fire_seeds';
    sequenced_assembly('mysticalagriculture:fire_seeds', 'kubejs:fire_seeds_folder', [
        deploying(in_fi_se, [in_fi_se, processingMachine('industrialforegoing:dissolution_chamber')]),
        deploying(in_fi_se, [in_fi_se, 'mysticalagriculture:inferium_essence']),
        filling(in_fi_se, [Fluid.of('water', 500), in_fi_se]),
        deploying(in_fi_se, [in_fi_se, 'minecraft:wheat_seeds']),
        pressing(in_fi_se, in_fi_se),
    ])
        .loops(1)
        .transitionalItem(in_fi_se)
        .id(kjs('sequenced_assembly', 'fire_seeds'));

    let in_ea_se = 'kubejs:incomplete_earth_seeds';
    sequenced_assembly('mysticalagriculture:earth_seeds', 'kubejs:earth_seeds_folder', [
        deploying(in_ea_se, [in_ea_se, processingMachine('industrialforegoing:dissolution_chamber')]),
        deploying(in_ea_se, [in_ea_se, 'mysticalagriculture:inferium_essence']),
        filling(in_ea_se, [Fluid.of('water', 500), in_ea_se]),
        deploying(in_ea_se, [in_ea_se, 'minecraft:wheat_seeds']),
        pressing(in_ea_se, in_ea_se),
    ])
        .loops(1)
        .transitionalItem(in_ea_se)
        .id(kjs('sequenced_assembly', 'earth_seeds'));

    let in_air_se = 'kubejs:incomplete_air_seeds';
    sequenced_assembly('mysticalagriculture:air_seeds', 'kubejs:air_seeds_folder', [
        deploying(in_air_se, [in_air_se, processingMachine('industrialforegoing:dissolution_chamber')]),
        deploying(in_air_se, [in_air_se, 'mysticalagriculture:inferium_essence']),
        filling(in_air_se, [Fluid.of('water', 500), in_air_se]),
        deploying(in_air_se, [in_air_se, 'minecraft:wheat_seeds']),
        pressing(in_air_se, in_air_se),
    ])
        .loops(1)
        .transitionalItem(in_air_se)
        .id(kjs('sequenced_assembly', 'air_seeds'));

    let in_rf_co = 'kubejs:incomplete_rf_coil';
    sequenced_assembly(
        [Item.of('thermal:rf_coil').withChance(0.95), Item.of('r2aot:time_voucher').withChance(0.05)],
        'minecraft:gold_ingot',
        [
            deploying(in_rf_co, [in_rf_co, processingMachine('r2aot:atomic_reconstructor')]),
            filling(in_rf_co, [Fluid.of('thermal:redstone', 500), in_rf_co]),
            pressing(in_rf_co, in_rf_co),
        ]
    )
        .loops(1)
        .transitionalItem(in_rf_co)
        .id(kjs('sequenced_assembly', 'rf_coil'));

    let in_red_ser = 'kubejs:incomplete_redstone_servo';
    sequenced_assembly(
        [
            Item.of('thermal:redstone_servo').withChance(0.99),
            Item.of('torcherino:torcherino').withChance(0.007),
            Item.of('torcherino:double_compressed_torcherino').withChance(0.003),
        ],
        'minecraft:iron_ingot',
        [
            deploying(in_red_ser, [in_red_ser, processingMachine('r2aot:atomic_reconstructor')]),
            filling(in_red_ser, [Fluid.of('thermal:redstone', 500), in_red_ser]),
            pressing(in_red_ser, in_red_ser),
        ]
    )
        .loops(1)
        .transitionalItem(in_red_ser)
        .id(kjs('sequenced_assembly', 'redstone_servo'));
});
