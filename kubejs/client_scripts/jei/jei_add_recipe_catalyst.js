JEIAddedEvents.registerRecipeCatalysts(event => {
    const catalysts = [
        ['r2aot:fluid_sourcelink', 'r2aot:fluid_sourcelink']
    ];

    catalysts.forEach(([input, recipe]) => {
        event.data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
            input,
            recipe
        );
    });
});
