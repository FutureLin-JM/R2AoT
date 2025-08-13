ServerEvents.blockLootTables(event => {
    /**
     * 设置方块的战利品表，根据使用的工具决定掉落物品数量
     * @param {Internal.BlockLootEventJS} event
     * @param {BlockStatePredicate_} blockId - 要修改的方块ID
     * @param {Internal.ItemStack_} lootId - 掉落的物品ID
     * @param {Object.<string, [number, number]>} toolRanges - 工具与掉落数量的映射表
     * @example
     * // 格式：
     * {
     *   "工具ID1": [最小数量, 最大数量],
     *   "工具ID2": [最小数量, 最大数量]
     * }
     */
    function setBlockLoot(event, blockId, lootId, toolRanges) {
        event.addBlock(blockId, loot => {
            const toolList = Object.keys(toolRanges);

            Object.entries(toolRanges).forEach(([tool, range]) => {
                loot.addPool(pool => {
                    pool.addItem(lootId);
                    
                    pool.addFunction({
                        "function": "minecraft:set_count",
                        "count": {
                            "min": range[0],
                            "max": range[1]
                        }
                    });

                    pool.addCondition({
                        "condition": "minecraft:match_tool",
                        "predicate": {
                            "items": [
                              tool
                            ]
                          }
                    });
                });
            });

            loot.addPool(pool => {
                pool.addItem(blockId);
                pool.addCondition({
                    "condition": "minecraft:inverted",
                    "term": {
                        "condition": "minecraft:match_tool",
                        "predicate": {
                            "items": toolList
                        }
                    }
                });
            });
        })
    }

    
    /**
     * 设置方块的战利品表，根据工具决定概率掉落指定物品或自身
     * @param {Internal.BlockLootEventJS} event
     * @param {BlockStatePredicate_} blockId - 要修改的方块ID
     * @param {Internal.ItemStack_} lootId - 掉落的物品ID
     * @param {Object.<string, [number, number]>} toolWeights - 工具与权重配置数组[掉落物品权重, 方块自身权重]
     * // 格式：
     * {
     *   "工具ID1": [掉落物品权重, 方块自身权重],
     *   "工具ID2": [掉落物品权重, 方块自身权重]
     * }
     */
    function setWeightBasedLoot(event, blockId, lootId, toolWeights) {
        event.addBlock(blockId, loot => {
            const toolList = Object.keys(toolWeights);
    
            // 概率掉落池
            Object.entries(toolWeights).forEach(([tool, weight]) => {
                loot.addPool(pool => {
                    pool.addItem(lootId, weight[0]);
                    pool.addItem(blockId, weight[1]);
                    pool.addCondition({
                        condition: "minecraft:match_tool",
                        predicate: { items: [tool] }
                    });
                });
            });
    
            // 默认掉落池
            loot.addPool(pool => {
                pool.addItem(blockId);
                pool.addCondition({
                    condition: "minecraft:inverted",
                    term: {
                        condition: "minecraft:match_tool",
                        predicate: { items: toolList }
                    }
                });
            });
        });
    }

    setBlockLoot(event, 'r2aot:compressed_cobblestone', 'minecraft:gravel', {
        'r2aot:compressed_wooden_hammer': [8,10],
        'r2aot:compressed_stone_hammer': [11,13],
    });
    setBlockLoot(event, 'r2aot:compressed_gravel', 'minecraft:sand', {
        'r2aot:compressed_wooden_hammer': [8,10],
        'r2aot:compressed_stone_hammer': [11,13],
    });

    setWeightBasedLoot(event, 'minecraft:cobblestone', 'minecraft:gravel', {
        'r2aot:wooden_hammer': [6,4] ,
        'r2aot:stone_hammer': [9,1],
    });
    setWeightBasedLoot(event, 'minecraft:gravel', 'minecraft:sand', {
        'r2aot:wooden_hammer': [6,4] ,
        'r2aot:stone_hammer': [9,1],
    });

    ['r2aot:pedestal_botania', 'r2aot:pedestal_ars'].forEach(machine => {
        event.modifyBlock(machine, loot => {
            loot.addPool(pool => {
                pool.addItem('r2aot:pedestal')
            })
        })
    })
})