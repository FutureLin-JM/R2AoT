ServerEvents.recipes(event => {
    const { enchanting_apparatus } = event.recipes.ars_nouveau;

    enchanting_apparatus(
        Array(4).fill('#forge:stone').concat(Array(4).fill('minecraft:clay_ball')),
        'ars_nouveau:source_gem',
        'minecraft:dripstone_block',
        5000
    ).id(kjs('enchanting_apparatus', 'dripstone_block'));
});
