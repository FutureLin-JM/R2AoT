JEIAddedEvents.registerRecipeCatalysts(event => {
    const catalysts = [
        ['r2aot:fluid_sourcelink', 'r2aot:fluid_sourcelink'],
        ['ars_nouveau:imbuement_chamber', 'r2aot:imbuement_charge'],
        ['r2aot:rainbow_furnace', $RecipeTypes.SMELTING],
        ['r2aot:buddycard_anvil', 'r2aot:buddycard_anvil_fake'],
        ['r2aot:chalk_black', 'r2aot:black_lotus'],
    ];

    catalysts.forEach(([input, recipe]) => {
        event.data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
            input,
            recipe,
        );
    });

    Ingredient.of(/powah:thermo_generator_.*/).itemIds.forEach(input => {
        event.data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
            input,
            'r2aot:imbuement_charge',
        );
    });

    for (let i = 1; i < 7; i++) {
        event.data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
            `r2aot:cobble_gen_tier_${i}`,
            'r2aot:cobble_gen_jei',
        );
    }

    event.data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
        Item.of('create:encased_fan').setHoverName(Text.translate('jei.desc.r2aot.fan_custom.fan')),
        'r2aot:fan_custom',
    );
});
