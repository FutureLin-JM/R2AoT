BlockEvents.rightClicked('botania:light_gray_petal_block', event => {
    const { hand, block, player, level, item } = event;

    if (hand != 'MAIN_HAND' || item.id != 'create:andesite_alloy') return;

    let andesiteCasingMaker = $PatchouliAPI.getMultiblock('r2aot:andesite_casing_maker');
    let validRotation = andesiteCasingMaker.validate(level, block.pos);

    if (validRotation !== null) {
        level.destroyBlock(block.pos, false);

        const rotationMap = {
            rot_90_y_neg: Direction.SOUTH,
            identity: Direction.EAST,
            rot_90_y_pos: Direction.NORTH,
            rot_180_face_xz: Direction.WEST,
        };
        let facing = rotationMap[validRotation.rotation().toString()] || Direction.NORTH;

        level.setBlockAndUpdate(
            block.pos,
            Block.getBlock('r2aot:andesite_casing_maker_core')
                .defaultBlockState()
                .setValue(BlockProperties.HORIZONTAL_FACING, facing)
        );
        item.count--;
        player.swing();
    } else {
        player.tell(Text.translate('message.r2aot.multiblock.incorrect').aqua());
    }
});

MBDMachineEvents.onTick('r2aot:andesite_casing_maker_core', event => {
    const { machine } = event.getEvent();
    const { level, pos, frontFacing } = machine;

    if (level.getTime() % 20 !== 0) return;
    const controller = $IMultiController.ofController(level, pos).orElse(null);
    if (!controller.isFormed()) return;

    /**@type {ItemStackTransfer}*/
    let alloyTrait = machine.getTraitByName('item_in_alloy').storage;
    /**@type {ItemStackTransfer}*/
    let logTrait = machine.getTraitByName('item_in_log').storage;

    if (alloyTrait == null || logTrait == null) return;

    let alloyStack = alloyTrait.getStackInSlot(0);
    let logStack = logTrait.getStackInSlot(0);

    if (alloyStack.count >= 64 && logStack.count >= 64) return;
    let layout = AndesiteCasingLayout[frontFacing.get().toString()];
    let inputPos = pos.offset(layout.input[0], 0, layout.input[1]);
    let inputBlock = level.getBlock(inputPos);

    if (!inputBlock.entity) return;
    let inputCap = inputBlock.entity.getCapability(ForgeCapabilities.ITEM_HANDLER).resolve().orElse(null);

    if (inputCap == null) return;
    /**
     *
     * @param {String} itemId
     * @param {ItemStackTransfer} trait
     * @param {Internal.ItemStack} currentStack
     * @param {Number} maxCount
     * @returns {Internal.ItemStack}
     */
    const transferItem = (itemId, trait, currentStack, maxCount) => {
        if (currentStack.count >= maxCount) return currentStack;

        for (let i = 0; i < inputCap.getSlots(); i++) {
            let stack = inputCap.getStackInSlot(i);
            if (stack.isEmpty() || stack.id !== itemId) continue;

            let toInsert = Math.min(stack.count, maxCount - currentStack.count);
            let inserted = trait.insertItem(0, stack.copyWithCount(toInsert), false);
            let actualInserted = toInsert - inserted.count;

            if (actualInserted > 0) {
                inputCap.extractItem(i, actualInserted, false);
                currentStack = trait.getStackInSlot(0);
                if (currentStack.count >= maxCount) break;
            }
        }
        return currentStack;
    };

    alloyStack = transferItem('create:andesite_alloy', alloyTrait, alloyStack, 64);
    logStack = transferItem('minecraft:oak_log', logTrait, logStack, 64);
});

MBDMachineEvents.onTick('r2aot:andesite_casing_maker_core', event => {
    const { machine } = event.getEvent();
    const { level, pos, frontFacing } = machine;

    if (level.getTime() % 20 !== 0) return;
    const controller = $IMultiController.ofController(level, pos).orElse(null);
    if (!controller.isFormed()) return;

    /**@type {ItemStackTransfer}*/
    let casingTrait = machine.getTraitByName('item_out').storage;
    if (casingTrait == null) return;

    let casingStack = casingTrait.getStackInSlot(0);
    if (casingStack.count == 0) return;
    const layout = AndesiteCasingLayout[frontFacing.get().toString()];
    const outputPos = pos.offset(layout.output[0], 0, layout.output[1]);
    const outputBlock = level.getBlock(outputPos);

    if (!outputBlock.entity) return;
    const outputCap = outputBlock.entity.getCapability(ForgeCapabilities.ITEM_HANDLER).resolve().orElse(null);

    if (outputCap == null) return;

    for (let i = 0; i < outputCap.getSlots(); i++) {
        if (casingStack.count == 0) break;

        let inserted = outputCap.insertItem(i, casingStack, false);
        let actualInserted = casingStack.count - inserted.count;

        if (actualInserted > 0) {
            casingTrait.extractItem(0, actualInserted, false);
            casingStack = casingTrait.getStackInSlot(0);
        }
    }
});
const AndesiteCasingLayout = {
    north: {
        input: [1, 1],
        output: [-1, 1],
    },
    south: {
        input: [-1, -1],
        output: [1, -1],
    },
    east: {
        input: [-1, 1],
        output: [-1, 1],
    },
    west: {
        input: [1, -1],
        output: [1, 1],
    },
};
