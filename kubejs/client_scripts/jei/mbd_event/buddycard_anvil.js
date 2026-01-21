const TextTextureWidget = Java.loadClass('com.lowdragmc.lowdraglib.gui.widget.TextTextureWidget');
MBDRecipeTypeEvents.onRecipeUI('r2aot:buddycard_anvil_fake', event => {
    const { recipe, root } = event.getEvent();

    const textWidget = mode => {
        let modeText = new TextTextureWidget();
        modeText.setSelfPosition(10, 5);
        modeText.setSize(100, 10);
        modeText.setComponent(Text.translate(`gui.r2aot.buddycard_anvil.${mode}`));
        modeText.textureStyle(texture => {
            texture.setType('left');
            texture.setDropShadow(true);
        });
        root.addWidget(modeText);
    };

    const recipeData = recipe.data;
    if (recipeData.mode == 1) {
        textWidget('crafting');
    } else if (recipeData.mode == 2) {
        textWidget('conversion');
    } else {
        return;
    }
});
