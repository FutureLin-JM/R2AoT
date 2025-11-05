ServerEvents.recipes(event => {
    const id_prefix = 'r2aot:power_planting_station/';
    const { power_planting_station } = event.recipes.r2aot;

    [
        { type: 'energized_steel', duration: 200 },
        { type: 'blazing_crystal', duration: 800 },
        { type: 'niotic_crystal', duration: 1400 },
        { type: 'spirited_crystal', duration: 2000 },
        { type: 'nitro_crystal', duration: 2400 },
    ].forEach(recipe => {
        power_planting_station()
            .perTick(builder => builder.inputFluids(Fluid.of('r2aot:power_essence', 1)))
            .chance(0, builder => builder.inputItems(`mysticalagriculture:${recipe.type}_seeds`))
            .outputItems(`mysticalagriculture:${recipe.type}_essence`)
            .duration(recipe.duration)
            .id(id_prefix + `${recipe.type}`);
    });
});
