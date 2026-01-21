const entroGrowthMap = {
    'minecraft:air': 'r2aot:entro_cluster_small',
    'r2aot:entro_cluster_small': 'r2aot:entro_cluster_medium',
    'r2aot:entro_cluster_medium': 'r2aot:entro_cluster_large',
    'r2aot:entro_cluster_large': 'r2aot:entro_cluster',
};

StartupEvents.registry('block', event => {
    event
        .create('r2aot:entro_budding')
        .soundType(SoundType.AMETHYST)
        .randomTick(tick => {
            const { block, level } = tick;
            const pos = block.getPos();

            if (Math.random() > 0.3) return;

            let directions = $Directions.values();
            let randomDirection = directions[Math.floor(Math.random() * directions.length)];
            let targetPos = pos.relative(randomDirection);
            let adjacentBlockId = level.getBlock(targetPos).id;

            let newClusterId = entroGrowthMap[adjacentBlockId];
            if (newClusterId == null) return;

            let newCluster = Block.getBlock(newClusterId);
            let newClusterState = newCluster.defaultBlockState().setValue(BlockProperties.FACING, randomDirection);

            level.setBlockAndUpdate(targetPos, newClusterState);
        });
});
