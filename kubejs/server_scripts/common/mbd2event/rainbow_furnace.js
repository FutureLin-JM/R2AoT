ServerEvents.recipes(event => {
    Object.entries(JsonIO.read('kubejs/fuel_items.json')).forEach(([itemId, burnTime]) => {
        let recipe = event.recipes.r2aot.rainbow_furnace();
        recipe.isFuel(true);
        recipe.slotName('fuel_input', builder => {
            builder.inputItems(itemId);
        });
        recipe.duration(burnTime);
    });
});

MBDRecipeTypeEvents.onTransferProxyRecipe('r2aot:rainbow_furnace', event => {
    const mbdEvent = event.getEvent();
    const { recipeType, proxyTypeId, proxyType, proxyRecipeId, proxyRecipe } = mbdEvent;

    if (proxyTypeId === 'minecraft:smelting') {
        let input = proxyRecipe.getIngredients()[0];
        let output = proxyRecipe.getResultItem(null);
        let cookingTime = proxyRecipe.cookingTime;

        var recipe = recipeType
            .recipeBuilder()
            .slotName('input_slot', builder => {
                builder.inputItems(input);
            })
            .duration(cookingTime)
            .outputItems(output)
            .id(proxyRecipeId + '_mbd2')
            .buildMBDRecipe();

        mbdEvent.mbdRecipe = recipe;
    }
});

MBDMachineEvents.onBeforeRecipeModify('r2aot:rainbow_furnace', event => {
    const mbdEvent = event.getEvent();
    const { machine, recipe } = mbdEvent;

    let componentCount = 0;
    for (let i = 0; i < 8; i++) {
        let componentTrait = machine.getTraitByName(`component_slot_${i}`);
        if (componentTrait == null) continue;
        let storage = componentTrait.storage;
        let componentStack = storage.getStackInSlot(0);
        if (!componentStack.isEmpty()) {
            componentCount++;
        }
    }
    if (componentCount === 0) return;
    let parallelMultiplier = componentCount * 8;
    let parallelRecipe = machine.applyParallel(recipe, parallelMultiplier);
    let copyRecipe = parallelRecipe.copy();
    let speedReduction = Math.max(1 - 0.09 * componentCount, 0.1);

    let extraSpeedBoost = 1.0;
    if (componentCount === 8) {
        extraSpeedBoost = 0.35; // 当组件数量达到8时进一步加速
    }
    copyRecipe.duration = Math.ceil(recipe.duration * speedReduction * extraSpeedBoost);

    mbdEvent.setRecipe(copyRecipe);
});

// ServerEvents.recipes((event) => {
//     let fuelItems = {};

//     Ingredient.all.stacks.forEach((itemStack) => {
//         const burnTime = $ForgeHooks.getBurnTime(itemStack, 'minecraft:smelting');

//         if (burnTime > 0) {
//             fuelItems[itemStack.id] = burnTime;
//         }
//     });

//     JsonIO.write('kubejs/fuel_items.json', fuelItems);
//     console.log('已生成kubejs/fuel_items.json');
// });
