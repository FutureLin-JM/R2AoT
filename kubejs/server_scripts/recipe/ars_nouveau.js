ServerEvents.recipes(event => {
    const { enchanting_apparatus, imbuement } = event.recipes.ars_nouveau;

    enchanting_apparatus(
        'minecraft:dripstone_block',
        Array(4).fill('#forge:stone').concat(Array(4).fill('minecraft:clay_ball')),
        'ars_nouveau:source_gem',
        5000
    ).id(kjs('enchanting_apparatus', 'dripstone_block'));

    enchanting_apparatus(
        'r2aot:modular_runic_altar_core',
        [
            'ars_nouveau:water_essence',
            'ars_nouveau:fire_essence',
            'ars_nouveau:earth_essence',
            'ars_nouveau:air_essence',
            'botania:rune_water',
            'botania:rune_fire',
            'botania:rune_earth',
            'botania:rune_air',
        ],
        'botania:livingrock',
        10000
    ).id(kjs('enchanting_apparatus', 'modular_runic_altar_core'));

    imbuement('ars_nouveau:water_essence', 'ars_nouveau:source_gem', 2000, [
        'ars_nouveau:frostaya_pod',
        'botania:rune_water',
        'mysticalagriculture:water_essence',
    ]).id(kjs('imbuement', 'water_essence'));

    imbuement('ars_nouveau:fire_essence', 'ars_nouveau:source_gem', 2000, [
        'ars_nouveau:bombegranate_pod',
        'botania:rune_fire',
        'mysticalagriculture:fire_essence',
    ]).id(kjs('imbuement', 'fire_essence'));

    imbuement('ars_nouveau:earth_essence', 'ars_nouveau:source_gem', 2000, [
        'ars_nouveau:mendosteen_pod',
        'botania:rune_earth',
        'mysticalagriculture:earth_essence',
    ]).id(kjs('imbuement', 'earth_essence'));

    imbuement('ars_nouveau:air_essence', 'ars_nouveau:source_gem', 2000, [
        'ars_nouveau:bastion_pod',
        'botania:rune_air',
        'mysticalagriculture:air_essence',
    ]).id(kjs('imbuement', 'air_essence'));
});
