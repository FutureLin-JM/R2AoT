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

    ['water', 'fire', 'earth', 'air'].forEach(element => {
        let in_element_se = `kubejs:incomplete_${element}_seeds`;

        sequenced_assembly(`mysticalagriculture:${element}_seeds`, `kubejs:${element}_seeds_folder`, [
            deploying(in_element_se, [in_element_se, processingMachine('industrialforegoing:dissolution_chamber')]),
            deploying(in_element_se, [in_element_se, 'mysticalagriculture:inferium_essence']),
            filling(in_element_se, [Fluid.of('water', 500), in_element_se]),
            deploying(in_element_se, [in_element_se, 'minecraft:wheat_seeds']),
            pressing(in_element_se, in_element_se),
        ])
            .loops(1)
            .transitionalItem(in_element_se)
            .id(kjs('sequenced_assembly', `${element}_seeds`));
    });

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

    [
        { charm: 'amethyst_golem', fluid: 'amethyst_sap', shards: true },
        { charm: 'bookwyrm', fluid: 'bookwyrm_flux', shards: true },
        { charm: 'starbuncle', fluid: 'stargem_fluid', shards: false },
        { charm: 'whirlisprig', fluid: 'whirlisprig_extract', shards: false },
        { charm: 'wixie', fluid: 'wixie_elixir', shards: false },
    ].forEach(ars => {
        let inputShards = ars.shards ? `r2aot:${ars.charm}_shards` : `ars_nouveau:${ars.charm}_shards`;
        let in_xx_charm = `kubejs:incomplete_${ars.charm}_charm`;
        sequenced_assembly(`ars_nouveau:${ars.charm}_charm`, inputShards, [
            deploying(in_xx_charm, [in_xx_charm, 'ars_nouveau:source_gem']),
            filling(in_xx_charm, [Fluid.of(`r2aot:${ars.fluid}`, 250), in_xx_charm]),
            deploying(in_xx_charm, [in_xx_charm, 'botania:terrasteel_ingot']),
            filling(in_xx_charm, [Fluid.of('r2aot:fluidedmana', 500), in_xx_charm]),
            pressing(in_xx_charm, in_xx_charm),
        ])
            .loops(16)
            .transitionalItem(in_xx_charm)
            .id(kjs('sequenced_assembly', `${ars.charm}_charm`));
    });

    let in_dr_charm = 'kubejs:incomplete_drygmy_charm';
    sequenced_assembly('ars_nouveau:drygmy_charm', 'ars_nouveau:drygmy_shard', [
        deploying(in_dr_charm, [in_dr_charm, 'ars_nouveau:source_gem']),
        filling(in_dr_charm, [Fluid.of('r2aot:drygmy_essence', 250), in_dr_charm]),
        deploying(in_dr_charm, [in_dr_charm, 'botania:terrasteel_ingot']),
        filling(in_dr_charm, [Fluid.of('r2aot:fluidedmana', 500), in_dr_charm]),
        pressing(in_dr_charm, in_dr_charm),
    ])
        .loops(16)
        .transitionalItem(in_dr_charm)
        .id(kjs('sequenced_assembly', `drygmy_charm`));
});
