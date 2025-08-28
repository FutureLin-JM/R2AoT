ServerEvents.recipes(event => {
    // 铁板压缩合成
    event
        .custom({
            type: 'lychee:block_crushing',
            hide_in_viewer: true,
            item_in: [{ item: 'botania:white_petal_block' }, { item: 'botania:white_petal_block' }],
            falling_block: {
                blocks: ['r2aot:rainbow_petal_block'],
            },
            post: [
                {
                    type: 'drop_item',
                    item: 'thermal:iron_plate',
                    contextual: {
                        type: 'chance',
                        chance: 0.5,
                    },
                },
            ],
        })
        .id(kjs('lychee', 'iron_plate')),
        // 铁板压缩合成（幽灵配方）
        event
            .custom({
                type: 'lychee:block_crushing',
                ghost: true,
                item_in: [{ item: 'botania:white_petal_block' }, { item: 'botania:white_petal_block' }],
                falling_block: {
                    blocks: ['r2aot:rainbow_petal_block'],
                },
                post: [
                    {
                        type: 'drop_item',
                        item: 'thermal:iron_plate',
                        nbt: { display: { Lore: ['{"italic":false,"color":"gold","text":"50%"}'] } },
                        contextual: {
                            type: 'chance',
                            chance: 0.5,
                        },
                    },
                ],
            })
            .id(kjs('lychee', 'iron_plate_ghost'));
});
