ServerEvents.recipes(event => {
    event
        .custom({
            type: 'lychee:dripstone_dripping',
            source_block: 'ars_nouveau:source_gem_block',
            target_block: 'minecraft:diorite',
            post: [
                {
                    type: 'place',
                    block: 'minecraft:amethyst_block',
                },
            ],
        })
        .id(kjs('lychee', 'amethyst_block'));
});
