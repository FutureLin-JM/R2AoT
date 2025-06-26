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
    // 检查物品栏
    const foundInMainInventory = player.inventory.allItems.some(
        item => item.id === 'tiab:time_in_a_bottle'
    );
    if (foundInMainInventory) return true;
    
    return false;
}

/**
 * 遵循原则：
 * 1. type表示配方类型（可选）
 * 2. name以(主要)输出物品为主，冲突时使用'XX_by_yy'/'XX_from_YY'等说明
 * 3. 原版合成台配方：
 *    - name: 'modid_item'（原版/Kubejs物品或无歧义物品）
 *    - type: 输入物品明确指向某模组时使用模组ID
 */
/**
 * 生成一个kubejs命名空间下的配方id
 * @param {string} type - 配方类型（可选）
 * @param {string} name - 配方名称
 * @returns {string} 格式为'kubejs:type/name'或'kubejs:name'的配方标识符
 */
function kjs(type, name) {
    if (name === undefined) {
        return `kubejs:${type.toLowerCase()}`
    }
    return `kubejs:${type.toLowerCase()}/${name.toLowerCase()}`
}