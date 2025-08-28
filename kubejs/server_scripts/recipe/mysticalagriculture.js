ServerEvents.recipes(event => {
    const { infusion } = event.recipes.mysticalagriculture;

    infusion('ars_nouveau:blue_archwood_sapling', 'minecraft:oak_sapling', [
        'botania:terrasteel_nugget',
        'mysticalagriculture:water_essence',
        'botania:terrasteel_nugget',
        'mysticalagriculture:water_essence',
        'botania:terrasteel_nugget',
        'mysticalagriculture:water_essence',
        'botania:terrasteel_nugget',
        'mysticalagriculture:water_essence',
    ]).id(kjs('infusion', 'blue_archwood_sapling'));

    infusion('ars_nouveau:red_archwood_sapling', 'minecraft:oak_sapling', [
        'botania:terrasteel_nugget',
        'mysticalagriculture:fire_essence',
        'botania:terrasteel_nugget',
        'mysticalagriculture:fire_essence',
        'botania:terrasteel_nugget',
        'mysticalagriculture:fire_essence',
        'botania:terrasteel_nugget',
        'mysticalagriculture:fire_essence',
    ]).id(kjs('infusion', 'red_archwood_sapling'));

    infusion('ars_nouveau:purple_archwood_sapling', 'minecraft:oak_sapling', [
        'botania:terrasteel_nugget',
        'mysticalagriculture:air_essence',
        'botania:terrasteel_nugget',
        'mysticalagriculture:air_essence',
        'botania:terrasteel_nugget',
        'mysticalagriculture:air_essence',
        'botania:terrasteel_nugget',
        'mysticalagriculture:air_essence',
    ]).id(kjs('infusion', 'purple_archwood_sapling'));

    infusion('ars_nouveau:green_archwood_sapling', 'minecraft:oak_sapling', [
        'botania:terrasteel_nugget',
        'mysticalagriculture:earth_essence',
        'botania:terrasteel_nugget',
        'mysticalagriculture:earth_essence',
        'botania:terrasteel_nugget',
        'mysticalagriculture:earth_essence',
        'botania:terrasteel_nugget',
        'mysticalagriculture:earth_essence',
    ]).id(kjs('infusion', 'green_archwood_sapling'));
});
