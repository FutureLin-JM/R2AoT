ServerEvents.recipes(event => {
    // 魔符：闪电（幽灵配方）
    event.custom({
        type: "lychee:lightning_channeling",
        ghost: true,
        item_in: [
            {
                item: 'ars_nouveau:scribes_table',
                "lychee:tag": {
                    display: {
                        Lore: ['{"italic":false,"color":"gold","text":"Block"}']
                    }
                }
            }
        ],
        post: [
            {
                type: "drop_item",
                item: 'ars_nouveau:glyph_lightning',
            }
        ]
    }).id(kjs('lychee', 'glyph_lightning_ghost'));

    // 紫水晶碎片
    event.custom({
        type: "lychee:lightning_channeling",
        hide_in_viewer: true,
        item_in: [
            {
                item: 'minecraft:lapis_lazuli'
            }
        ],
        post: [
            {
                type: "drop_item",
                item: 'minecraft:amethyst_shard',
                count: 1
            },
            {
                type: "drop_item",
                item: 'minecraft:amethyst_shard',
                count: 1,
                contextual: {
                    type: "chance",
                    chance: 0.5
                }
            }
        ]
    }).id(kjs('lychee', 'amethyst_shard_from_lapis'));

    // 紫水晶块
    event.custom({
        type: "lychee:lightning_channeling",
        hide_in_viewer: true,
        item_in: [
            {
                item: 'minecraft:lapis_block'
            }
        ],
        post: [
            {
                type: "drop_item",
                item: 'minecraft:amethyst_block',
                count: 3
            },
            {
                type: "drop_item",
                item: 'minecraft:amethyst_block',
                count: 1,
                contextual: {
                    type: "chance",
                    chance: 0.5
                }
            }
        ]
    }).id(kjs('lychee', 'amethyst_block_from_lapis_block'));

    // 紫水晶碎片（幽灵配方）
    event.custom({
        type: "lychee:lightning_channeling",
        ghost: true,
        item_in: [
            {
                item: 'minecraft:lapis_lazuli'
            }
        ],
        post: [
            {
                type: "drop_item",
                item: 'minecraft:amethyst_shard',
                count: 1
            },
            {
                type: "drop_item",
                item: 'minecraft:amethyst_shard',
                nbt: { display: { Lore: ['{"italic":false,"color":"gold","text":"50%"}'] } },
                contextual: {
                    type: "chance",
                    chance: 0.5
                }
            }
        ]
    }).id(kjs('lychee', 'amethyst_shard_from_lapis_ghost'));

    // 紫水晶块（幽灵配方）
    event.custom({
        type: "lychee:lightning_channeling",
        ghost: true,
        item_in: [
            {
                item: 'minecraft:lapis_block'
            }
        ],
        post: [
            {
                type: "drop_item",
                item: 'minecraft:amethyst_block',
                count: 3
            },
            {
                type: "drop_item",
                item: 'minecraft:amethyst_block',
                nbt: { display: { Lore: ['{"italic":false,"color":"gold","text":"50%"}'] } },
                contextual: {
                    type: "chance",
                    chance: 0.5
                }
            }
        ]
    }).id(kjs('lychee', 'amethyst_block_from_lapis_block_ghost'));
})