// priority: 50

/**
 * 为机器添加空手右键取出物品的功能
 * @param {Internal.BlockRightClickedEventJS} event
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
 * 为时间之瓶添加时间
 * @param {Internal.ServerPlayer} player
 * @param {number} seconds 时间，单位秒
 * @return {boolean} 是否成功添加时间
 */
function addTimeToTIAB(player, seconds) {
    const MAX_STORED_TIME = 622080000;
    const TICK_CONST = 20;
    const MAX_STORED_SECONDS = MAX_STORED_TIME / TICK_CONST;

    const result = player.inventory.allItems.find(item => item.id === 'tiab:time_in_a_bottle');
    if (!result) {
        player.tell(Text.translate('message.r2aot.tiab_void'));
        return false;
    }

    const nbt = result?.nbt;
    if (!nbt) return false;

    let currentTime = nbt.getInt('storedTime');
    const timeToAdd = seconds * TICK_CONST;

    if (currentTime >= MAX_STORED_TIME) {
        player.tell(Text.translate('message.r2aot.time_already_max', MAX_STORED_SECONDS.toString()));
        return false;
    }

    if (currentTime + timeToAdd > MAX_STORED_TIME) {
        let actualAddTime = MAX_STORED_TIME - currentTime;
        let actualAddSeconds = actualAddTime / TICK_CONST;

        nbt.putInt('storedTime', MAX_STORED_TIME);
        result.nbt = nbt;
        player.tell(
            Text.translate('message.r2aot.time_add_partial', actualAddSeconds.toString(), MAX_STORED_SECONDS.toString())
        );
        return true;
    } else {
        nbt.putInt('storedTime', currentTime + timeToAdd);
        result.nbt = nbt;
        player.tell(Text.translate('message.r2aot.time_add_success', seconds.toString()));
        return true;
    }
}
/**
 * 遵循原则：
 * 1. type表示配方类型（可选）
 * 2. name以(主要)输出物品为主，冲突时使用'XX_by_yy'/'XX_from_YY'等说明
 * 3. 原版合成台配方：
 *    - name: 'modid_item'（原版/Kubejs物品或无歧义物品无需modid）
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
        return `kubejs:${type.toLowerCase()}`;
    }
    return `kubejs:${type.toLowerCase()}/${name.toLowerCase()}`;
}

/**
 * 解析字符串并返回包含物品或标签及其数量的对象。
 * @param {string} item - 格式: "itemID"、"#tagID" 或 "Nx itemID"、"Nx #tagID"
 * @returns {Object} 包含物品或标签及其数量的对象。
 *         标签返回{tag: string, count: number}；
 *         物品返回{item: string, count: number}。
 */
function parseItem(item) {
    if (!item.includes(' ')) {
        if (item.startsWith('#')) {
            return { tag: item.substring(1), count: 1 };
        } else {
            return { item: item, count: 1 };
        }
    }

    const [countString, itemString] = item.split(' ');
    const count = parseInt(countString.replace('x', ''));

    if (itemString.startsWith('#')) {
        return { tag: itemString.substring(1), count: count };
    } else {
        return { item: itemString, count: count };
    }
}

/**
 * 解析不包含数量的字符串
 * @param {string} item - 要解析的实体字符串，可以是标签或物品
 * @returns {{tag?: string, item?: string}} - 返回包含tag属性或item属性的对象
 */
function parseItemWithoutCount(item) {
    if (item.startsWith('#')) {
        return { tag: item.substring(1) };
    } else {
        return { item: item };
    }
}

/**
 * 将输入项数组合并重复物品（例如，将 ['a', 'a', 'b'] 转换为 ['2x a', 'b']）
 * @param {InputItem_ | InputItem_[]} rawInput - 原始输入项，可以是单个物品/标签或数组
 * @returns {InputItem_ | InputItem_[]} 处理后的输入项，重复物品已被合并
 */
function mergeDuplicateItems(rawInput) {
    if (!Array.isArray(rawInput)) {
        return rawInput;
    }

    const itemCountMap = {};
    rawInput.forEach(item => {
        itemCountMap[item] = (itemCountMap[item] || 0) + 1;
    });

    return Object.entries(itemCountMap).map(([item, count]) => (count > 1 ? `${count}x ${item}` : item));
}

global.eightNeighborhoodOffsets = [
    [-1, -1], // 左上
    [-1, 0], // 左
    [-1, 1], // 左下
    [0, -1], // 上
    [0, 1], // 下
    [1, -1], // 右上
    [1, 0], // 右
    [1, 1], // 右下
];
