BlockEvents.rightClicked('r2aot:pedestal', event => {
    const { hand, block, item, player } = event;
    
    if (hand !== 'MAIN_HAND') return;
    
    const itemCap = block.entity.getCapability(ForgeCapabilities.ITEM_HANDLER).resolve().get();
    
    if (!item.isEmpty() && itemCap.getStackInSlot(0).isEmpty() && !player.isCrouching()) {
        itemCap.insertItem(item.withCount(1), false);
        item.count--;
        player.swing();
        event.cancel();
    }

    if (item.isEmpty() && player.isCrouching()) {
        const stack = itemCap.getStackInSlot(0);
        if (!stack.isEmpty()) {
            player.give(stack.copy());
            itemCap.extractItem(0, stack.getCount(), false);
            player.swing();
            event.cancel();
        }
    }
});

const POSITIONS = [
    [-1, 0, -1],
    [-1, 0, 0],
    [-1, 0, 1],
    [1, 0, -1],
    [0, 0, -1],
    [0, 0, 1],
    [1, 0, 1],
    [1, 0, 0]
];
const RECIPES = [
    {
        catalyst: 'botania:rainbow_rod',
        input: 'botania:livingrock',
        output: 'botania:shimmerrock',
        state: 'botania_transmute'
    },
    {
        catalyst: 'ars_nouveau:source_gem',
        input: 'botania:shimmerrock',
        output: 'ars_nouveau:sourcestone',
        state: 'ars_transmute'
    }
];
const CONVERSION_TIME = 100;

MBDMachineEvents.onTick('r2aot:pedestal', event => {
    const { machine } = event.getEvent();
    const { level, pos, customData } = machine;

    const part = $IMultiPart.ofPart(level, pos).orElse(null);
    if (part.isFormed()) return;

    const itemCap = machine.getCapability(ForgeCapabilities.ITEM_HANDLER).resolve().get();
    const catalystStack = itemCap.getStackInSlot(0);

    if (catalystStack.isEmpty()) {
        machine.setMachineState('base');
        return
    };

    const matchedRecipe = RECIPES.find(recipe => 
        recipe.catalyst === catalystStack.id
    );

    if (!matchedRecipe) {
        machine.setMachineState('base');
        return
    };

    machine.setMachineState(matchedRecipe.state);

    const conversionData = customData.getCompound('conversion_data');

    POSITIONS.forEach(([dx, dy, dz]) => {
        const targetPos = pos.offset(dx, dy, dz);
        if (level.getBlockState(targetPos).isAir()) return;

        const targetBlock = level.getBlock(targetPos);
        const posKey = `conversionTimer_${targetPos.x}_${targetPos.y}_${targetPos.z}`;

        if (targetBlock.id === matchedRecipe.input) {
            const timer = conversionData.contains(posKey) ? conversionData.getInt(posKey) + 1 : 1;
            conversionData.putInt(posKey, timer);

            if (timer >= CONVERSION_TIME) {
                level.destroyBlock(targetPos, false);
                level.setBlock(targetPos, Block.getBlock(matchedRecipe.output).defaultBlockState(), 3);
                conversionData.remove(posKey);
            }
        }
        else if (conversionData.contains(posKey)) {
            conversionData.remove(posKey);
        };
    });
    customData.put('conversion_data', conversionData);
});