LootJS.modifiers(event => {
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
