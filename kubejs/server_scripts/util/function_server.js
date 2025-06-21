/**
 * 为机器添加右键点击取出物品的功能
 */
function setItemExtract(event) {
    const { hand, block, item, player } = event;
    
    if (hand !== 'MAIN_HAND') return;
    
    const itemCap = block.entity.getCapability(ForgeCapabilities.ITEM_HANDLER).resolve().get();

    if (item.isEmpty() && player.isCrouching()) {
        const stack = itemCap.getStackInSlot(0);
        if (!stack.isEmpty()) {
            player.give(stack.copy());
            itemCap.extractItem(0, stack.getCount(), false);
            player.swing();
            event.cancel();
        }
    }
}

/**
 * 检测玩家是否拥有时间瓶(Time in a Bottle)
 * @param {Internal.ServerPlayer} player 要检测的玩家
 * @returns {boolean} 是否拥有时间瓶
 */
function hasTimeInABottle(player) {
    // 检查主物品栏
    const foundInMainInventory = player.inventory.allItems.some(
        item => item.id === 'tiab:time_in_a_bottle'
    );
    if (foundInMainInventory) return true;
    
    return false;
}