NetworkEvents.dataReceived('jei_machine_lookup', event => {
    let recipeType;
    if (event.data.recipeType === 'furnace') {
        recipeType = $RecipeTypes.SMELTING;
    } else if (event.data.recipeType === 'buddycard_anvil') {
        recipeType = $RecipeType.create('r2aot', 'buddycard_anvil_fake', $MBDRecipeTypeCategory$RecipeWrapper);
    } else {
        recipeType = $RecipeType.create('r2aot', event.data.recipeType, $MBDRecipeTypeCategory$RecipeWrapper);
    }
    global.jeiRuntime.getRecipesGui().showTypes([recipeType]);
});

NetworkEvents.dataReceived('jei_mbtool_structure', event => {
    const jeiRuntime = global.jeiRuntime;

    const recipeType = $MultiblockStructureCategory.TYPE;
    const recipeManager = jeiRuntime.getRecipeManager();
    const category = recipeManager.getRecipeCategory(recipeType);
    const recipes = recipeManager.createRecipeLookup(recipeType).get();

    const targetStructureName = event.data.structureName;
    const targetRecipe = recipes
        .filter(recipe => recipe.getName() === `mbtool.structure.${targetStructureName}`)
        .findFirst()
        .orElse(null);

    if (targetRecipe) {
        jeiRuntime.getRecipesGui().showRecipes(category, [targetRecipe], []);
    }
});
