ServerEvents.recipes((event) => {
    // 1x沙砾+2x绿花瓣=绿砾凝华
    event.custom({
        type: "lychee:item_inside",
        item_in: Array(1).fill({item:'minecraft:gravel'}).concat(Array(2).fill({item:'botania:green_petal'})),
        block_in: {"blocks": ['r2aot:petal_essence']},
        post: [
            {
                type: "drop_item",
                item: 'r2aot:green_gravel_shard',
            }
        ],
    }).id(kjs('lychee', 'green_gravel_shard'))

})