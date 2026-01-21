JEIAddedEvents.registerCategories(event => {
    event.custom('r2aot:entro_growth', category => {
        const { guiHelper } = category.jeiHelpers;

        category
            .title(Text.translate('jei.r2aot.entro_growth'))
            .background(null)
            .setWidth(150)
            .setHeight(60)
            .icon(
                $CyclingDrawable.forItems(
                    guiHelper,
                    'r2aot:entro_cluster_large',
                    'r2aot:entro_cluster_medium',
                    'r2aot:entro_cluster_small',
                    'r2aot:entro_cluster'
                )
            )
            .handleLookup((builder, recipe, focuses) => {
                builder.addSlot('input', 35, 25).addItemStacks(recipe.data.input);
                builder.addSlot('output', 97, 25).addItemStacks(recipe.data.output);
            })
            .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                let arrow = guiHelper.createAnimatedRecipeArrow(100);
                arrow.draw(guiGraphics, 63, 25);

                let mainText = Text.translate(`jei.desc.r2aot.entro_growth.${recipe.data.type}`);
                drawCenteredString(guiGraphics, mainText.getString(), 75, 0);

                if (recipe.data.fortune) {
                    let fortuneText = Text.translate('ae2.rei_jei_integration.fortune_applies');
                    drawCenteredString(guiGraphics, fortuneText.getString(), 75, 50);
                }
            });
    });
});

JEIAddedEvents.registerRecipes(event => {
    event
        .custom('r2aot:entro_growth')
        .add({
            type: 'bud_growth',
            input: [Item.of('r2aot:entro_budding')],
            output: [
                Item.of('r2aot:entro_cluster_small'),
                Item.of('r2aot:entro_cluster_medium'),
                Item.of('r2aot:entro_cluster_large'),
                Item.of('r2aot:entro_cluster'),
            ],
        })
        .add({
            type: 'bud_loot',
            input: [
                Item.of('r2aot:entro_cluster_small'),
                Item.of('r2aot:entro_cluster_medium'),
                Item.of('r2aot:entro_cluster_large'),
            ],
            output: [Item.of('r2aot:entro_shard')],
        })
        .add({
            type: 'cluster_loot',
            fortune: true,
            input: [Item.of('r2aot:entro_cluster')],
            output: [Item.of('r2aot:entro_crystal')],
        });
});
