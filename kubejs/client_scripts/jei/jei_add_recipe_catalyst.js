JEIAddedEvents.registerRecipeCatalysts(event => {
    const catalysts = [
        ['r2aot:fluid_sourcelink', 'r2aot:fluid_sourcelink'],
        ['ars_nouveau:imbuement_chamber', 'r2aot:imbuement_charge'],
        ['r2aot:rainbow_furnace', $RecipeTypes.SMELTING],
    ];

    catalysts.forEach(([input, recipe]) => {
        event.data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
            input,
            recipe
        );
    });

    Ingredient.of(/powah:thermo_generator_.*/).itemIds.forEach(input => {
        event.data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
            input,
            'r2aot:imbuement_charge'
        );
    });
});
