LootJS.modifiers(event => {
    // 压缩圆石1x -> 沙砾
    event
        .addBlockLootModifier('allthecompressed:cobblestone_1x')
        .matchMainHand('r2aot:compressed_wooden_hammer')
        .removeLoot('allthecompressed:cobblestone_1x')
        .addWeightedLoot([8, 10], 'minecraft:gravel');

    event
        .addBlockLootModifier('allthecompressed:cobblestone_1x')
        .matchMainHand('r2aot:compressed_stone_hammer')
        .removeLoot('allthecompressed:cobblestone_1x')
        .addWeightedLoot([11, 13], 'minecraft:gravel');

    // 压缩沙砾1x -> 沙子
    event
        .addBlockLootModifier('allthecompressed:gravel_1x')
        .matchMainHand('r2aot:compressed_wooden_hammer')
        .removeLoot('allthecompressed:gravel_1x')
        .addWeightedLoot([8, 10], 'minecraft:sand');

    event
        .addBlockLootModifier('allthecompressed:gravel_1x')
        .matchMainHand('r2aot:compressed_stone_hammer')
        .removeLoot('allthecompressed:gravel_1x')
        .addWeightedLoot([11, 13], 'minecraft:sand');

    // 圆石 -> 沙砾（概率掉落）
    event
        .addBlockLootModifier('minecraft:cobblestone')
        .matchMainHand('r2aot:wooden_hammer')
        .removeLoot('minecraft:cobblestone')
        .addWeightedLoot([Item.of('minecraft:gravel').withChance(6), Item.of('minecraft:cobblestone').withChance(4)]);

    event
        .addBlockLootModifier('minecraft:cobblestone')
        .matchMainHand('r2aot:stone_hammer')
        .removeLoot('minecraft:cobblestone')
        .addWeightedLoot([Item.of('minecraft:gravel').withChance(9), Item.of('minecraft:cobblestone').withChance(1)]);

    // 沙砾 -> 沙子（概率掉落）
    event
        .addBlockLootModifier('minecraft:gravel')
        .matchMainHand('r2aot:wooden_hammer')
        .removeLoot('minecraft:gravel')
        .addWeightedLoot([Item.of('minecraft:sand').withChance(6), Item.of('minecraft:gravel').withChance(4)]);

    event
        .addBlockLootModifier('minecraft:gravel')
        .matchMainHand('r2aot:stone_hammer')
        .removeLoot('minecraft:gravel')
        .addWeightedLoot([Item.of('minecraft:sand').withChance(9), Item.of('minecraft:gravel').withChance(1)]);

    // 基座
    ['r2aot:pedestal_botania', 'r2aot:pedestal_ars'].forEach(machine => {
        event.addBlockLootModifier(machine).addLoot('r2aot:pedestal');
    });

    // 恩特罗水晶
    event.addBlockLootModifier('r2aot:entro_cluster').addAlternativesLoot(
        LootEntry.of('r2aot:entro_cluster').when(c => {
            c.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch'));
        }),
        LootEntry.of('r2aot:entro_crystal').applyOreBonus('minecraft:fortune')
    );

    ['r2aot:entro_cluster_small', 'r2aot:entro_cluster_medium', 'r2aot:entro_cluster_large'].forEach(clusterType => {
        event.addBlockLootModifier(clusterType).addAlternativesLoot(
            LootEntry.of(clusterType).when(c => {
                c.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch'));
            }),
            LootEntry.of('r2aot:entro_shard')
        );
    });
});
