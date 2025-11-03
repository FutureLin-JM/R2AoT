JEIAddedEvents.registerCategories(event => {
    event.custom('r2aot:cobble_gen_jei', category => {
        const { guiHelper } = category.jeiHelpers;

        category
            .title(Text.translatable('jei.r2aot.cobble_gen'))
            .background(null)
            .setWidth(80)
            .setHeight(50)
            .icon(guiHelper.createDrawableItemStack('r2aot:cobble_gen_tier_1'))
            .handleLookup((builder, recipe, focuses) => {
                builder.addSlot('OUTPUT', 45, 10).addItemStack(recipe.data.output);
                if (recipe.data.input) {
                    builder.addSlot('INPUT', 35, 30).addItemStack(recipe.data.input);
                }
            })
            .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                let arrow = guiHelper.createAnimatedRecipeArrow(100);
                arrow.draw(guiGraphics, 20, 10);
            });
    });
});

JEIAddedEvents.registerRecipes(event => {
    event
        .custom('r2aot:cobble_gen_jei')
        .add({ output: 'minecraft:cobblestone' })
        .add({ output: 'minecraft:granite', input: 'minecraft:granite' })
        .add({ output: 'minecraft:diorite', input: 'minecraft:diorite' })
        .add({ output: 'minecraft:andesite', input: 'minecraft:andesite' })
        .add({ output: 'minecraft:calcite', input: 'minecraft:calcite' });
});
