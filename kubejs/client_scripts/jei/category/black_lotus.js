JEIAddedEvents.registerCategories(event => {
    event.custom('r2aot:black_lotus', category => {
        const { guiHelper } = category.jeiHelpers;

        const endPortalTexture = new ResourceLocation('minecraft', 'textures/entity/end_portal.png');
        const runeBlackTexture = new ResourceLocation('r2aot', 'textures/block/rune_black_full.png');

        category
            .title(Text.translate('jei.r2aot.black_lotus'))
            .background(null)
            .setWidth(150)
            .setHeight(60)
            .icon($CyclingDrawable.forItems(guiHelper, 'botania:black_lotus', 'botania:blacker_lotus'))
            .handleLookup((builder, recipe, focuses) => {
                builder.addSlot('INPUT', 10, 22).addIngredients(recipe.data.input);
                builder.addSlot('OUTPUT', 116, 22).addItemStack(recipe.data.output);
            })
            .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                let slotDrawable = guiHelper.getSlotDrawable();
                slotDrawable.draw(guiGraphics, 9, 21);
                slotDrawable.draw(guiGraphics, 115, 21);

                if (recipe.data.catalyst === 'void') {
                    guiGraphics.blit(endPortalTexture, 46, 22, 0, 0, 16, 16, 16, 16);
                } else if (recipe.data.catalyst === 'rune') {
                    guiGraphics.blit(runeBlackTexture, 46, 22, 0, 0, 16, 16, 16, 16);
                }

                let arrow = guiHelper.createAnimatedRecipeArrow(100);
                arrow.draw(guiGraphics, 80, 22);
            })
            .setTooltipHandlerOverride((tooltip, recipe, recipeSlotsView, mouseX, mouseY) => {
                if (mouseX >= 46 && mouseX < 62 && mouseY >= 22 && mouseY < 38) {
                    if (recipe.data.catalyst === 'void') {
                        tooltip.add(Text.translate('jei.desc.r2aot.black_lotus.void_catalyst').white());
                    } else if (recipe.data.catalyst === 'rune') {
                        tooltip.add(Text.translate('block.r2aot.rune_black').white());
                    }
                }
            });
    });
});

JEIAddedEvents.registerRecipes(event => {
    event
        .custom('r2aot:black_lotus')
        .add({
            input: Ingredient.of('#botania:mystical_flowers'),
            catalyst: 'void',
            output: 'botania:black_lotus',
        })
        .add({
            input: Ingredient.of('#botania:double_mystical_flowers'),
            catalyst: 'void',
            output: '2x botania:black_lotus',
        })
        .add({ input: 'botania:black_lotus', catalyst: 'rune', output: 'botania:blacker_lotus' });
});
