ServerEvents.recipes(event => {
    const {sequenced_assembly, deploying, cutting, pressing, filling} = event.recipes.create

    let in_pr_me = 'create:incomplete_precision_mechanism'
    sequenced_assembly(
        'create:precision_mechanism',
        '#forge:plates/gold',
        [
            deploying(in_pr_me, [in_pr_me, 'create:cogwheel']),
            deploying(in_pr_me, [in_pr_me, 'create:large_cogwheel']),
            deploying(in_pr_me, [in_pr_me, '#forge:nuggets/iron'])
        ]
    )
    .loops(3)
    .transitionalItem(in_pr_me)
    .id('create:sequenced_assembly/precision_mechanism')

    let un_ob_sh = 'create:unprocessed_obsidian_sheet'
    sequenced_assembly(
        'create:sturdy_sheet',
        '#forge:dusts/obsidian',
        [
            filling(un_ob_sh, [Fluid.of('minecraft:lava', 500), un_ob_sh]),
            filling(un_ob_sh, [Fluid.of('r2aot:seed_oil', 500), un_ob_sh]),
            filling(un_ob_sh, [Fluid.of('r2aot:bioethanol', 500), un_ob_sh]),
            filling(un_ob_sh, [Fluid.of('r2aot:fluidedmana', 250), un_ob_sh]),
            pressing(un_ob_sh, un_ob_sh),
        ]
    )
    .loops(1)
    .transitionalItem(un_ob_sh)
    .id('create:sequenced_assembly/sturdy_sheet');

    ['calculation', 'logic', 'engineering'].forEach((form) => {
        let pr_xx_pr = `ae2:printed_${form}_processor`
        sequenced_assembly(
            `ae2:${form}_processor`,
            pr_xx_pr,
            [
                deploying(pr_xx_pr, [pr_xx_pr, 'ae2:printed_silicon']),
                pressing(pr_xx_pr, pr_xx_pr),
            ]
        )
        .loops(1)
        .transitionalItem(pr_xx_pr)
    })

    let in_wa_se = 'kubejs:incomplete_water_seeds'
    sequenced_assembly(
        'mysticalagriculture:water_seeds',
        'kubejs:water_seeds_folder',
        [
            deploying(in_wa_se, [in_wa_se, Item.of('industrialforegoing:dissolution_chamber').enchant('r2aot:machine_processing', 1).strongNBT()]),
            deploying(in_wa_se, [in_wa_se, 'mysticalagriculture:inferium_essence']),
            filling(in_wa_se, [Fluid.of('water', 500), in_wa_se]),
            deploying(in_wa_se, [in_wa_se, 'minecraft:wheat_seeds']),
            pressing(in_wa_se, in_wa_se)
        ]
    )
    .loops(1)
    .transitionalItem(in_wa_se)
    .id('kubejs:sequenced_assembly/water_seeds')

    let in_fi_se = 'kubejs:incomplete_fire_seeds'
    sequenced_assembly(
        'mysticalagriculture:fire_seeds',
        'kubejs:fire_seeds_folder',
        [
            deploying(in_fi_se, [in_fi_se, Item.of('industrialforegoing:dissolution_chamber').enchant('r2aot:machine_processing', 1).strongNBT()]),
            deploying(in_fi_se, [in_fi_se, 'mysticalagriculture:inferium_essence']),
            filling(in_fi_se, [Fluid.of('water', 500), in_fi_se]),
            deploying(in_fi_se, [in_fi_se, 'minecraft:wheat_seeds']),
            pressing(in_fi_se, in_fi_se)
        ]
    )
    .loops(1)
    .transitionalItem(in_fi_se)
    .id('kubejs:sequenced_assembly/fire_seeds')

    let in_ea_se = 'kubejs:incomplete_earth_seeds'
    sequenced_assembly(
        'mysticalagriculture:earth_seeds',
        'kubejs:earth_seeds_folder',
        [
            deploying(in_ea_se, [in_ea_se, Item.of('industrialforegoing:dissolution_chamber').enchant('r2aot:machine_processing', 1).strongNBT()]),
            deploying(in_ea_se, [in_ea_se, 'mysticalagriculture:inferium_essence']),
            filling(in_ea_se, [Fluid.of('water', 500), in_ea_se]),
            deploying(in_ea_se, [in_ea_se, 'minecraft:wheat_seeds']),
            pressing(in_ea_se, in_ea_se)
        ]
    )
    .loops(1)
    .transitionalItem(in_ea_se)
    .id('kubejs:sequenced_assembly/earth_seeds')

    let in_air_se = 'kubejs:incomplete_air_seeds'
    sequenced_assembly(
        'mysticalagriculture:air_seeds',
        'kubejs:air_seeds_folder',
        [
            deploying(in_air_se, [in_air_se, Item.of('industrialforegoing:dissolution_chamber').enchant('r2aot:machine_processing', 1).strongNBT()]),
            deploying(in_air_se, [in_air_se, 'mysticalagriculture:inferium_essence']),
            filling(in_air_se, [Fluid.of('water', 500), in_air_se]),
            deploying(in_air_se, [in_air_se, 'minecraft:wheat_seeds']),
            pressing(in_air_se, in_air_se)
        ]
    )
    .loops(1)
    .transitionalItem(in_air_se)
    .id('kubejs:sequenced_assembly/air_seeds')
})