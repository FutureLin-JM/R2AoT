JEIAddedEvents.registerCategories(event => {
    event.custom('r2aot:fluid_sourcelink', category => {
        const { guiHelper } = category.jeiHelpers;

        category
            .title(Text.translate('jei.r2aot.fluid_sourcelink'))
            .background(null)
            .setWidth(105)
            .setHeight(40)
            .icon(guiHelper.createDrawableItemStack('r2aot:fluid_sourcelink'))
            .handleLookup((builder, recipe, focuses) => {
                builder
                    .addSlot('INPUT', 16, 12)
                    .addFluidStack(recipe.data.input, 1000)
                    .setFluidRenderer(1000, false, 16, 16);
                builder.addInvisibleIngredients('OUTPUT').addItemStack('r2aot:fluid_sourcelink');
            })
            .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                let sourceText = Text.translate(
                    'jei.desc.r2aot.fluid_sourcelink.source',
                    recipe.data.source.toFixed(0)
                );
                guiGraphics.drawWordWrap(Client.font, sourceText, 40, 16, 65, 0);
            });
    });
});

JEIAddedEvents.registerRecipes(event => {
    event
        .custom('r2aot:fluid_sourcelink')
        .add({ input: 'minecraft:lava', source: 500 })
        .add({ input: 'r2aot:fluidedmana', source: 1000 });
});
