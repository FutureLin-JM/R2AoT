MBDMachineEvents.onBeforeRecipeModify('r2aot:fertilizer_propagator_core', event => {
    const mbdEvent = event.getEvent();
    const { machine, recipe } = mbdEvent;

    let itemTrait = machine.getTraitByName('rainbow_slot');
    if (itemTrait == null) return;

    let storage = itemTrait.storage;
    let itemStack = storage.getStackInSlot(0);
    if (itemStack.isEmpty()) return;

    let itemCount = Math.min(itemStack.getCount(), 64);

    let speedMultiplier = Math.max(1 - 0.0125 * itemCount, 0.2);
    let modifiedRecipe = recipe.copy();
    modifiedRecipe.duration = Math.ceil(recipe.duration * speedMultiplier);

    mbdEvent.setRecipe(modifiedRecipe);
});
