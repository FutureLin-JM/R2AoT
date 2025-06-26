ServerEvents.recipes((event) => {
    // 木棒+花瓣块=水
    event.custom({    
        type: "lychee:block_interacting",
        item_in: {
            tag: 'r2aot:hammer'
        },
        block_in: "botania:blue_petal_block",
        post: [
            {
                type: 'prevent_default',
            },
            {
                type: "place",
                block: "minecraft:water",
                
            },
            {
                type: "damage_item",
                damage: 8,
            },
        ],
        contextual: {
                type: "is_sneaking"
            }    
    }).id(kjs('lychee', 'water_from_petal_block'));

    // 木棒+九色花源块=花瓣原液
    event.custom({    
        type: "lychee:block_interacting",
        item_in: {
            tag: 'r2aot:hammer'
        },
        block_in: "r2aot:rainbow_petal_block",
        post: [
            {
                type: 'prevent_default',
            },
            {
                type: "place",
                block: "r2aot:petal_essence",
                
            },
            {
                type: "damage_item",
                damage: 16,
            },
        ],
        contextual: {
                type: "is_sneaking"
            }    
    }).id(kjs('lychee', 'petal_essence'));

    // 黑曜石
    event.custom({
        type: "lychee:block_interacting",
        item_in: {
            tag: 'forge:dusts/obsidian'
        },
        block_in: 'botania:livingwood_log',
        post: {
            type: "place",
            block: 'minecraft:obsidian'
        },
        contextual: {
            type: "is_sneaking"
        }
    }).id(kjs('lychee', 'obsidian'));

    // 下界岩
    event.custom({
        type: "lychee:block_interacting",
        item_in: {
            tag: 'forge:dusts/obsidian'
        },
        block_in: 'r2aot:double_compressed_cobblestone',
        post: {
            type: "place",
            block: 'minecraft:netherrack'
        },
        contextual: [
            {
                type: "is_sneaking"
            },
            {
                type: "location",
                predicate: {dimension: "the_nether",}
            }
        ]
    }).id(kjs('lychee', 'netherrack'));

    // 烈焰人燃烧室
    event.custom({
        type: "lychee:block_interacting",
        item_in: {
            item: 'create:empty_blaze_burner'
        },
        block_in: 'minecraft:gold_block',
        post: {
            type: "drop_item" ,
            item: 'create:blaze_burner'
        },
        contextual: [
            {
                type: "is_sneaking"
            },
            {
                type: "location",
                predicate: {dimension: "the_nether",}
            }
        ]
    }).id(kjs('lychee', 'blaze_burner'));

    // 哭泣黑曜石
    event.custom({
        type: "lychee:block_interacting",
        item_in: {
            tag: 'forge:dusts/obsidian'
        },
        block_in: 'minecraft:obsidian',
        post: {
            type: "place",
            block: 'minecraft:crying_obsidian'
        },
        contextual: [
            {
                type: "is_sneaking"
            },
            {
                type: "location",
                predicate: {dimension: "the_nether",}
            }
        ]
    }).id(kjs('lychee', 'crying_obsidian'));

    // 藤蔓
    event.custom({
        type: "lychee:block_interacting",
        item_in: {
            item: 'botania:green_petal_block'
        },
        block_in: 'create:railway_casing',
        post: [
            {
                type: 'drop_item',
                item: 'minecraft:vine'
            }
        ],
        contextual: {
            type: "is_sneaking"
        }
    }).id(kjs('lychee', 'vine'));

    ['bronze', 'electrum', 'invar', 'constantan'].forEach(metalId => {
        event.custom({
            type: "lychee:block_interacting",
            item_in: {
                item: `thermal:${metalId}_block`
            },
            block_in: 'mysticalagriculture:prudentium_block',
            post: [
                {
                    type: 'drop_item',
                    item: `mysticalagriculture:${metalId}_seeds`
                }
            ],
            contextual: {
                type: "is_sneaking"
            }
        }).id(kjs('lychee', `${metalId}_seeds`));
    });
})