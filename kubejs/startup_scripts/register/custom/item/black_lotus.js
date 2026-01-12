const $BlackLotusItem = Java.loadClass('vazkii.botania.common.item.BlackLotusItem');

StartupEvents.registry('item', event => {
    event.createCustom(
        'botania:black_lotus',
        () =>
            new JavaAdapter(
                $BlackLotusItem,
                {
                    onDissolveTick: function (pool, itemEntity) {
                        if (pool.isFull()) return;

                        if (!itemEntity.level.isClientSide()) {
                            pool.receiveMana(8000);
                            itemEntity.getItem().shrink(1);
                            let save = itemEntity.getItem();
                            itemEntity.setItem(Item.empty);
                            itemEntity.setItem(save);
                        }

                        itemEntity.playSound('botania:black_lotus', 1, 1);
                    },
                },
                new $Item$Properties().rarity('rare')
            )
    );

    event.createCustom(
        'botania:blacker_lotus',
        () =>
            new JavaAdapter(
                $BlackLotusItem,
                {
                    onDissolveTick: function (pool, itemEntity) {
                        if (pool.isFull()) return;

                        if (!itemEntity.level.isClientSide()) {
                            pool.receiveMana(100000);
                            itemEntity.getItem().shrink(1);
                            let save = itemEntity.getItem();
                            itemEntity.setItem(Item.empty);
                            itemEntity.setItem(save);
                        }

                        itemEntity.playSound('botania:black_lotus', 1, 0.1);
                    },
                },
                new $Item$Properties().rarity('epic')
            )
    );
});
