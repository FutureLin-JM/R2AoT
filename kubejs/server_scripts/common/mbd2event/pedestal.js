const CONVERSION_TIME = 40;

const RECIPES = [
    {
        machine: 'r2aot:pedestal_botania',
        catalyst: 'botania:rainbow_rod',
        input: 'botania:livingrock',
        output: 'botania:shimmerrock',
    },
    {
        machine: 'r2aot:pedestal_ars',
        catalyst: 'ars_nouveau:source_gem',
        input: 'minecraft:quartz_block',
        output: 'ars_nouveau:sourcestone',
        consumeChance: 0.1,
    },
];
BlockEvents.rightClicked(event => {
    const { hand, block, item, player, level } = event;

    if (hand !== 'MAIN_HAND') return;

    const pedestals = ['r2aot:pedestal', 'r2aot:pedestal_botania', 'r2aot:pedestal_ars'];
    if (!pedestals.includes(block.id)) return;

    const itemCap = block.entity.getCapability(ForgeCapabilities.ITEM_HANDLER).resolve().get();
    const stack = itemCap.getStackInSlot(0);

    if (!item.isEmpty() && stack.isEmpty() && !player.isCrouching()) {
        itemCap.insertItem(item.withCount(1), false);
        item.count--;
        player.swing();
        event.cancel();
    }

    if (item.isEmpty() && player.isCrouching()) {
        if (!stack.isEmpty()) {
            player.give(stack.copy());
            itemCap.extractItem(0, stack.getCount(), false);
            player.swing();
            event.cancel();
        }
    }

    if (block.id == 'r2aot:pedestal' && Ingredient.of('#forge:wrenches').testItem(item.getItem())) {
        let part = $IMultiPart.ofPart(level, block.pos).orElse(null);
        if (part.isFormed()) return;

        let machineRecipe = RECIPES.find(recipe => recipe.catalyst === stack.id);
        if (machineRecipe !== undefined) {
            let stackCopy = stack.copy();
            level.setBlockAndUpdate(block.pos, Block.getBlock(machineRecipe.machine).defaultBlockState());
            let newItemCap = block.entity.getCapability(ForgeCapabilities.ITEM_HANDLER).resolve().get();
            newItemCap.insertItem(stackCopy, false);
            player.swing();
        }
    }
});

const PEDESTAL_POSITIONS = [
    [-1, 0, -1],
    [-1, 0, 0],
    [-1, 0, 1],
    [1, 0, -1],
    [0, 0, -1],
    [0, 0, 1],
    [1, 0, 1],
    [1, 0, 0],
];

['r2aot:pedestal_botania', 'r2aot:pedestal_ars'].forEach(pedestalMachine => {
    MBDMachineEvents.onTick(pedestalMachine, event => {
        const { machine } = event.getEvent();
        const { level, pos, customData } = machine;

        const itemCap = machine.getCapability(ForgeCapabilities.ITEM_HANDLER).resolve().get();
        const catalystStack = itemCap.getStackInSlot(0);

        const machineRecipe = RECIPES.find(recipe => 
            recipe.machine === pedestalMachine
        );

        if (catalystStack.isEmpty() && machineRecipe.catalyst !== catalystStack.id) return;

        const conversionData = customData.getCompound('conversion_data');
        let shouldConsume = false;

        PEDESTAL_POSITIONS.forEach(([dx, dy, dz]) => {
            const targetPos = pos.offset(dx, dy, dz);
            if (level.getBlockState(targetPos).isAir()) return;

            const targetBlock = level.getBlock(targetPos);
            const posKey = `conversionTimer_${targetPos.x}_${targetPos.y}_${targetPos.z}`;

            if (targetBlock.id === machineRecipe.input) {
                const timer = conversionData.contains(posKey) ? conversionData.getInt(posKey) + 1 : 1;
                conversionData.putInt(posKey, timer);

                if (timer >= CONVERSION_TIME) {
                    level.destroyBlock(targetPos, false);
                    level.setBlock(targetPos, Block.getBlock(machineRecipe.output).defaultBlockState(), 3);
                    conversionData.remove(posKey);
                    shouldConsume = true;
                }
            } else if (conversionData.contains(posKey)) {
                conversionData.remove(posKey);
            }
        });

        if (shouldConsume && machineRecipe.consumeChance !== undefined) {
            if (Math.random() < machineRecipe.consumeChance) {
                itemCap.extractItem(0, 1, false);
            }
        }

        customData.put('conversion_data', conversionData);
    });
});
