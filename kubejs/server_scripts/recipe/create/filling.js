ServerEvents.recipes(event => {
    const { filling } = event.recipes.create;

    // filling 注液
    filling('5x industrialforegoing:plastic', [Fluid.of('minecraft:water', 100), 'thermal:cured_rubber_block']).id(
        kjs('filling', 'plastic_by_filling')
    );
});
