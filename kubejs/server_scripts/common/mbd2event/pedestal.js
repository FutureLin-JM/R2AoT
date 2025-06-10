BlockEvents.rightClicked('r2aot:pedestal', event => {
    const { hand, block, item, player } = event;
    
    if (hand !== 'MAIN_HAND') return;
    
    const itemCap = block.entity.getCapability(ForgeCapabilities.ITEM_HANDLER).resolve().get();
    
    if (!item.isEmpty() && itemCap.getStackInSlot(0).isEmpty()) {
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