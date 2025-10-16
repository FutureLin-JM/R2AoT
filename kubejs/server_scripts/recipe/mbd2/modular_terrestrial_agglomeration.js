ServerEvents.recipes(event => {
    const { r2aot } = event.recipes;

    r2aot
        .modular_terrestrial_agglomeration_core()
        .outputItems("botania:terrasteel_ingot")
        .inputItems(['botania:manasteel_ingot',"botania:mana_pearl","botania:mana_diamond"])
        .inputMana(500000)
        .chance(0.5, builder => builder.inputFluids(Fluid.of('r2aot:fluidedmana', 1000)))
        .duration(20)
        .id('r2aot:modular_terrestrial_agglomeration_core/terrasteel_ingot');
});
