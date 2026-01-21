ServerEvents.recipes(event => {
    const { buddycard_anvil, buddycard_anvil_fake } = event.recipes.r2aot;
    const DURATION = 100;

    // 合成模式
    buddycard_anvil()
        .inputItems('#buddycards:common_cards/base')
        .inputItems('#buddycards:common_cards/base')
        .inputItems('#buddycards:common_cards/base')
        .outputItems(createCardIngredient('uncommon', 'base', 3, 4))
        .perTick(builder => builder.inputFE(1000))
        .machineData({ mode: 1 }, true)
        .duration(DURATION)
        .id(kjs('buddycards_anvil', 'base_uncommon'));

    buddycard_anvil_fake()
        .inputItems('#buddycards:common_cards/base')
        .inputItems('#buddycards:common_cards/base')
        .inputItems('#buddycards:common_cards/base')
        .chance(0.075, builder => builder.outputItems('#buddycards:uncommon_cards/base'))
        .chance(0.1, builder => builder.outputItems('r2aot:shredded_buddycard'))
        .perTick(builder => builder.inputFE(1000))
        .addDataNumber('mode', 1)
        .duration(DURATION)
        .id(kjs('buddycards_anvil_display', 'base_uncommon'));

    buddycard_anvil()
        .inputItems('#buddycards:uncommon_cards/base')
        .inputItems('#buddycards:uncommon_cards/base')
        .inputItems('#buddycards:uncommon_cards/base')
        .outputItems(createCardIngredient('rare', 'base', 7, 18))
        .perTick(builder => builder.inputFE(5000))
        .machineData({ mode: 1 }, true)
        .duration(DURATION)
        .id(kjs('buddycards_anvil', 'base_rare'));

    buddycard_anvil_fake()
        .inputItems('#buddycards:uncommon_cards/base')
        .inputItems('#buddycards:uncommon_cards/base')
        .inputItems('#buddycards:uncommon_cards/base')
        .chance(0.1167, builder => builder.outputItems('#buddycards:rare_cards/base'))
        .chance(0.3, builder => builder.outputItems('r2aot:shredded_buddycard'))
        .perTick(builder => builder.inputFE(5000))
        .addDataNumber('mode', 1)
        .duration(DURATION)
        .id(kjs('buddycards_anvil_display', 'base_rare'));

    buddycard_anvil()
        .inputItems('#buddycards:rare_cards/base')
        .inputItems('#buddycards:rare_cards/base')
        .inputItems('#buddycards:rare_cards/base')
        .outputItems(createCardIngredient('epic', 'base', 1, 2))
        .perTick(builder => builder.inputFE(10000))
        .machineData({ mode: 1 }, true)
        .duration(DURATION)
        .id(kjs('buddycards_anvil', 'base_epic'));

    buddycard_anvil_fake()
        .inputItems('#buddycards:rare_cards/base')
        .inputItems('#buddycards:rare_cards/base')
        .inputItems('#buddycards:rare_cards/base')
        .chance(0.25, builder => builder.outputItems('#buddycards:epic_cards/base'))
        .chance(0.5, builder => builder.outputItems('r2aot:shredded_buddycard'))
        .perTick(builder => builder.inputFE(10000))
        .addDataNumber('mode', 1)
        .duration(DURATION)
        .id(kjs('buddycards_anvil_display', 'base_epic'));

    // 转化模式
    buddycard_anvil()
        .inputItems('buddycards:buddycard_base27')
        .inputItems('#r2aot:buddycard_ore_block_3x')
        .outputItems(Ingredient.of('#r2aot:buddycard_ore'))
        .perTick(builder => builder.inputFE(200000))
        .machineData({ mode: 2 }, true)
        .duration(10)
        .id(kjs('buddycards_anvil', 'base27_to_ore'));

    buddycard_anvil_fake()
        .inputItems('buddycards:buddycard_base27')
        .inputItems('#r2aot:buddycard_ore_block_3x')
        .outputItems(Ingredient.of('#r2aot:buddycard_ore'))
        .perTick(builder => builder.inputFE(200000))
        .addDataNumber('mode', 2)
        .duration(10)
        .id(kjs('buddycards_anvil_display', 'base27_to_ore'));
});

/**
 * 生成指定稀有度和类型的加权卡片Ingredient
 * @param {string} rarityFrom - 卡片稀有度
 * @param {string} cardType - 卡片类型
 * @param {number} cardWeight - 卡片权重值
 * @param {number} shreddedWeight - 碎片卡权重值
 * @returns {Internal.Ingredient} 可用于配方的Ingredient对象
 */
function createCardIngredient(rarityFrom, cardTypes, cardWeight, shreddedWeight) {
    const config = buddycardConfig.find(c => c.rarity === rarityFrom);

    const weightedItems = [];

    config.ranges.forEach(range => {
        for (let i = range.start; i <= range.end; i++) {
            weightedItems.push({
                item: `buddycards:buddycard_${cardTypes}${i}`,
                weight: cardWeight,
            });
        }
    });

    weightedItems.push({
        item: 'r2aot:shredded_buddycard',
        weight: shreddedWeight,
    });

    return createWeightedIngredient(weightedItems);
}

/**
 * 根据提供的物品ID列表及其对应权重，生成一个加权的Ingredient对象
 * @param {Array<{item: string, weight: number}>} weightedItems - 包含物品ID和权重的对象数组
 * @returns {Internal.Ingredient} 可用于配方的Ingredient对象
 */
function createWeightedIngredient(weightedItems) {
    const expandedItems = weightedItems.reduce((result, entry) => {
        const repeatedItems = Array(entry.weight).fill(entry.item);
        return result.concat(repeatedItems);
    }, []);

    return Ingredient.of(expandedItems);
}

const buddycardConfig = [
    {
        rarity: 'common',
        ranges: [
            { start: 1, end: 12 },
            { start: 28, end: 31 },
        ],
    },
    {
        rarity: 'uncommon',
        ranges: [
            { start: 13, end: 21 },
            { start: 32, end: 34 },
        ],
    },
    {
        rarity: 'rare',
        ranges: [
            { start: 22, end: 25 },
            { start: 35, end: 36 },
        ],
    },
    {
        rarity: 'epic',
        ranges: [{ start: 26, end: 27 }],
    },
];
