MBDRecipeTypeEvents.onRecipeUI('r2aot:elemental_altar_core', event => {
    const { recipe, root } = event.getEvent();
    const textLabel = (mana, source) => {
        let manaLabel = new LabelWidget();
        manaLabel.setSelfPosition(95, 5);
        manaLabel.setSize(85, 15);
        manaLabel.setComponent(Text.translate('jei.r2aot.elemental_altar_core.mana', mana.toFixed(0)));
        let sourceLabel = new LabelWidget();
        sourceLabel.setSelfPosition(95, 20);
        sourceLabel.setSize(85, 15);
        sourceLabel.setComponent(Text.translate('jei.r2aot.elemental_altar_core.source', source.toFixed(0)));
        root.addWidget(manaLabel);
        root.addWidget(sourceLabel);
    };

    let manaCap = MBDRegistries.RECIPE_CAPABILITIES.get('botania_mana');
    let manaList = recipe.getInputContents(manaCap);
    if (manaList && manaList.size() > 0) {
        let mana = manaList.get(0).content;
        let manaValue = Number(mana);
        textLabel(manaValue, 10000);
    }
});
