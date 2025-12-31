// 伪装板隐藏
JEIEvents.hideItems(event => {
    let hideItemsID = [
        'ae2:facade',
        'skyblockbuilder:structure_saver',
        'skyblockbuilder:spawn_block',
        'createendertransmission:item_transmitter',
        'createendertransmission:fluid_transmitter',
        'createendertransmission:chunk_loader',
    ];

    hideItemsID.forEach(itemId => {
        event.hide(itemId);
    });

    // Ingredient.of(/^kubejs:/).itemIds.forEach(id => {
    //   event.hide(id)
    // })

    // 清除多余植物盆
    let excludedBotanyPotItems = [
        'botanypotstiers:creative_terracotta_hopper_botany_pot',
        'botanypotstiers:creative_terracotta_botany_pot',
        'botanypotstiers:ultra_terracotta_hopper_botany_pot',
        'botanypotstiers:ultra_terracotta_botany_pot',
        'botanypotstiers:elite_terracotta_hopper_botany_pot',
        'botanypotstiers:elite_terracotta_botany_pot',
        'botanypots:terracotta_hopper_botany_pot',
        'botanypots:terracotta_botany_pot',
    ];

    Ingredient.of(/^(botanypotstiers:|botanypots:)/).itemIds.forEach(id => {
        if (!excludedBotanyPotItems.includes(id)) {
            event.hide(id);
        }
    });
});

JEIEvents.addItems(event => {
    event.add(Item.of('ae2:facade', '{item:"minecraft:oak_log"}'));
});
