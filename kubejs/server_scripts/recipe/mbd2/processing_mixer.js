ServerEvents.recipes(event => {
    const id_prefix = 'r2aot:processing_mixer_core/';
    const { processing_mixer_core } = event.recipes.r2aot;

    processing_mixer_core()
        .inputItems('3x thermal:tin_ingot', 'thermal:silver_ingot')
        .inputFluids(
            Fluid.of('thermal:glowstone', 500),
            Fluid.of('r2aot:molten_electrum', 500),
            Fluid.of('r2aot:molten_invar', 500)
        )
        .inputFE(2000)
        .chance(0.5, builder => builder.outputItems('3x thermal:tin_dust', 'thermal:silver_dust'))
        .outputFluids(Fluid.of('r2aot:molten_lumium', 1000))
        .duration(100)
        .id(id_prefix + 'lumium_from_ingot');

    processing_mixer_core()
        .inputItems('3x minecraft:copper_ingot', 'thermal:silver_ingot')
        .inputFluids(
            Fluid.of('thermal:redstone', 500),
            Fluid.of('r2aot:molten_bronze', 500),
            Fluid.of('r2aot:molten_constantan', 500)
        )
        .inputFE(2000)
        .chance(0.5, builder => builder.outputItems('3x thermal:copper_dust', 'thermal:silver_dust'))
        .outputFluids(Fluid.of('r2aot:molten_signalum', 1000))
        .duration(100)
        .id(id_prefix + 'signalum_from_ingot');

    processing_mixer_core()
        .inputItems('3x minecraft:diamond')
        .inputFluids(Fluid.of('thermal:ender', 500), Fluid.of('r2aot:fluidedmana', 1000))
        .inputFE(2000)
        .chance(0.5, builder => builder.outputItems('3x thermal:diamond_dust'))
        .outputFluids(Fluid.of('r2aot:molten_enderium', 1000))
        .duration(100)
        .id(id_prefix + 'enderium_from_ingot');

    processing_mixer_core()
        .inputItems('mysticalagriculture:lumium_essence')
        .inputFluids(
            Fluid.of('thermal:glowstone', 500),
            Fluid.of('r2aot:molten_electrum', 500),
            Fluid.of('r2aot:molten_invar', 500)
        )
        .inputFE(2000)
        .outputFluids(Fluid.of('r2aot:molten_lumium', 1500))
        .duration(20)
        .id(id_prefix + 'lumium_from_essence');

    processing_mixer_core()
        .inputItems('mysticalagriculture:signalum_essence')
        .inputFluids(
            Fluid.of('thermal:redstone', 500),
            Fluid.of('r2aot:molten_bronze', 500),
            Fluid.of('r2aot:molten_constantan', 500)
        )
        .inputFE(2000)
        .outputFluids(Fluid.of('r2aot:molten_signalum', 1500))
        .duration(20)
        .id(id_prefix + 'signalum_from_essence');

    processing_mixer_core()
        .inputItems('mysticalagriculture:enderium_essence')
        .inputFluids(Fluid.of('thermal:ender', 500), Fluid.of('r2aot:fluidedmana', 1000))
        .inputFE(2000)
        .outputFluids(Fluid.of('r2aot:molten_enderium', 1500))
        .duration(20)
        .id(id_prefix + 'enderium_from_essence');

    processing_mixer_core()
        .inputFluids(Fluid.of('r2aot:fluidedmana', 100), Fluid.of('r2aot:fluidedsource', 100))
        .inputFE(10000)
        .outputFluids(Fluid.of('r2aot:power_essence', 100))
        .duration(20)
        .priority(10)
        .id(id_prefix + 'power_essence');

    processing_mixer_core()
        .inputItems('r2aot:dust_aerotheum', 'r2aot:dust_cryotheum', 'r2aot:dust_petrotheum', 'r2aot:dust_pyrotheum')
        .inputFluids(Fluid.of('r2aot:fluidedmana', 500), Fluid.of('r2aot:fluidedsource', 500))
        .inputFE(5000)
        .outputItems('thermal_extra:ancient_dust')
        .chance(0.5, builder => builder.outputItems('thermal_extra:ancient_dust'))
        .duration(20)
        .priority(-10)
        .id(id_prefix + 'ancient_dust')
});
