MBDMachineEvents.onBeforeRecipeModify('r2aot:stress_generator_core', event => {
    const mbdEvent = event.getEvent();
    const { machine, recipe } = mbdEvent;

    let itemTrait = machine.getTraitByName('creative_motor_slot');
    if (itemTrait == null) return;

    let storage = itemTrait.storage;
    let itemStack = storage.getStackInSlot(0);
    if(itemStack.isEmpty()) return;

    let itemCount = Math.min(itemStack.getCount(), 4);
    let multiplier = itemCount + 1
    let modifiedRecipe = mbdEvent.getRecipe().copy($ContentModifier.multiplier(multiplier), false, "OUT");

    mbdEvent.setRecipe(modifiedRecipe);
})
