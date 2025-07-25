// priority: 50

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
};

/**
 * 解析字符串并返回包含物品或标签及其数量的对象。
 * @param {string} entity - 格式: "itemID"、"#tagID" 或 "Nx itemID"、"Nx #tagID"
 * @returns {Object} 包含物品或标签及其数量的对象。
 *         标签返回{tag: string, count: number}；
 *         物品返回{item: string, count: number}。
 */
function parseEntry(entity) {
    if (!entity.includes(' ')) {
        if(entity.startsWith('#')) {
            return { tag: entity.substring(1), count: 1 }
        }
        else {
            return { item: entity, count: 1 }
        }
    }

    const [countString, itemString] = entity.split(' ');
    const count = parseInt(countString.replace('x', ''));

    if(itemString.startsWith('#')) {
        return { tag: itemString.substring(1), count: count }
    }
    else {
        return { item: itemString, count: count }
    }
}

/**
 * 解析不包含数量的字符串
 * @param {string} entity - 要解析的实体字符串，可以是标签或物品
 * @returns {{tag?: string, item?: string}} - 返回包含tag属性或item属性的对象
 */
function parseEntryWithoutCount(entity) {
    if(entity.startsWith('#')) {
        return { tag: entity.substring(1) }
    }
    else {
        return { item: entity }
    }
}