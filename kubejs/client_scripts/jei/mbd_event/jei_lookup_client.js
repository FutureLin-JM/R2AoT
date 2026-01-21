/**
 * @param {String} dataKey
 * @param {String} recipeType
 */
function registerRecipeLookup(dataKey, recipeType) {
    const RecipeType = $RecipeType.create('r2aot', recipeType, $MBDRecipeTypeCategory$RecipeWrapper);
    NetworkEvents.dataReceived(dataKey, event => {
        global.jeiRuntime.getRecipesGui().showTypes([RecipeType]);
    });
}

global.MachineJEIIntegration.forEach(info => {
    registerRecipeLookup(info.dataKey, info.recipeType);
});

NetworkEvents.dataReceived('xei_lookup_furnace', event => {
    global.jeiRuntime.getRecipesGui().showTypes([$RecipeTypes.SMELTING]);
});
