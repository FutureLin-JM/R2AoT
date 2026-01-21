const GENERATE_STONE = ['minecraft:granite', 'minecraft:diorite', 'minecraft:andesite', 'minecraft:calcite'];

for (let i = 1; i < 7; i++) {
    MBDMachineEvents.onBeforeRecipeModify(`r2aot:cobble_gen_tier_${i}`, event => {
        const mbdEvent = event.getEvent();
        const { machine, recipe } = mbdEvent;
        const { level, pos } = machine;

        const block = level.getBlock(pos.below());
        if (GENERATE_STONE.includes(block.id)) {
            /**@type {Internal.MBDRecipeSchema$MBDRecipeJS} */
            let builder = recipe.toBuilder();

            let itemCap = MBDRegistries.RECIPE_CAPABILITIES.get('item');
            builder.removeOutputs(itemCap);

            builder.outputItems(Item.of(block.id, 1));
            let newRecipe = builder.buildMBDRecipe();
            mbdEvent.setRecipe(newRecipe);
        }
    });
}