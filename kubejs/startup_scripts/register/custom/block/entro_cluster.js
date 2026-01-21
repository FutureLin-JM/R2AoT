const $CertusQuartzClusterBlock = Java.loadClass('appeng.decorative.solid.CertusQuartzClusterBlock');
const $BlockBehaviour$Properties = Java.loadClass('net.minecraft.world.level.block.state.BlockBehaviour$Properties');

const entroClusters = [
    {
        tier: 3,
        id: 'entro_cluster',
        height: 7,
        wide: 3,
        sound: SoundType.AMETHYST_CLUSTER,
    },
    {
        tier: 2,
        id: 'entro_cluster_large',
        height: 5,
        wide: 3,
        sound: SoundType.LARGE_AMETHYST_BUD,
    },
    {
        tier: 1,
        id: 'entro_cluster_medium',
        height: 4,
        wide: 3,
        sound: SoundType.MEDIUM_AMETHYST_BUD,
    },
    {
        tier: 0,
        id: 'entro_cluster_small',
        height: 3,
        wide: 4,
        sound: SoundType.SMALL_AMETHYST_BUD,
    },
];

entroClusters.forEach(cluster => {
    StartupEvents.registry('block', event => {
        event.createCustom(
            `r2aot:${cluster.id}`,
            () =>
                new $CertusQuartzClusterBlock(
                    cluster.height,
                    cluster.wide,
                    $BlockBehaviour$Properties
                        .copy(Blocks.AMETHYST_CLUSTER)
                        .strength(2.5)
                        .lightLevel(stats => cluster.tier + 5)
                        .sound(cluster.sound)
                )
        );
    });

    StartupEvents.registry('item', event => {
        event.createCustom(
            `r2aot:${cluster.id}`,
            () => new $BlockItem(Block.getBlock(`r2aot:${cluster.id}`), new $Item$Properties())
        );
    });
});
