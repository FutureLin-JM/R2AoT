ServerEvents.recipes((event) => {
    Object.entries(JsonIO.read('kubejs/fuel_items.json')).forEach(([itemId, burnTime]) => {
        let recipe = event.recipes.r2aot.rainbow_furnace();

        recipe.isFuel(true);
        recipe.slotName('fuel_input', (builder) => {
            builder.inputItems(itemId);
        });
        recipe.duration(burnTime);
    });
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
    copyRecipe.duration = Math.ceil(recipe.duration * speedReduction);

    mbdEvent.setRecipe(copyRecipe);
});
