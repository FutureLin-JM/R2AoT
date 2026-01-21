StartupEvents.postInit(event => {
    const $ConversionCategory = Java.loadClass('com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory');
    const $ConversionRecipe = Java.loadClass('com.simibubi.create.compat.jei.ConversionRecipe');

    /**
     *
     * @param {Internal.ItemStack_} input
     * @param {Internal.ItemStack_} output
     */
    function addMysteriousConversion(input, output) {
        $ConversionCategory.RECIPES.add($ConversionRecipe.create(input, output));
    }

    addMysteriousConversion('r2aot:pedestal', 'r2aot:pedestal_botania');
    addMysteriousConversion('r2aot:pedestal', 'r2aot:pedestal_ars');
});
