StartupEvents.registry('item', event => {
    const infinitiesCells = [
        {
            id: 'base_ore',
            list: [
                'minecraft:redstone',
                'minecraft:gold_ingot',
                'minecraft:emerald',
                'minecraft:diamond',
                'minecraft:netherite_ingot',
                'minecraft:iron_ingot',
                'minecraft:coal',
                'minecraft:copper_ingot',
                'create:zinc_ingot',
                'minecraft:quartz',
                'minecraft:lapis_lazuli',
            ],
        },
    ];

    infinitiesCells.forEach(cell => {
        event
            .create(`r2aot:infinity_cell_${cell.id}`, 'meinfinitycell:infinities_cell')
            .setName(Text.translate(`infinities_cell.r2aot.${cell.id}`))
            .setKeys(
                KeyList.create().adds(keys => {
                    let itemList = [];
                    cell.list.forEach(item => {
                        itemList.push(AEKeyHelper.item(item));
                    });
                    keys.addAll(itemList);
                })
            )
            .texture('r2aot:item/infinity_cell');
    });
});
