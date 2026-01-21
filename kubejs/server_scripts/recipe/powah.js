ServerEvents.recipes(event => {
    const { energizing } = event.recipes.powah;

    energizing(
        ['#minecraft:coals', '#minecraft:coals', 'minecraft:clay_ball'],
        Item.of('powah:dielectric_paste').withCount(64),
        10000
    ).id(kjs('energizing', 'dielectric_paste'));

    energizing('minecraft:snowball', 'powah:charged_snowball', 50000).id(kjs('energizing', 'charged_snowball'));
    
    energizing(
        ["r2aot:broken_mana", 'r2aot:broken_source'],
        'powah:uraninite',
        5000
    ).id(kjs('energizing', 'uraninite'));

    [
        { material: 'steel', type: 'energized', energy: 10000 },
        { material: 'crystal', type: 'blazing', energy: 90000 },
        { material: 'crystal', type: 'niotic', energy: 300000 },
        { material: 'crystal', type: 'spirited', energy: 1000000 },
        { material: 'crystal', type: 'nitro', energy: 20000000 },
    ].forEach(recipe => {
        energizing(
            `mysticalagriculture:${recipe.type}_${recipe.material}_essence`,
            `powah:${recipe.material}_${recipe.type}`,
            recipe.energy
        ).id(kjs('energizing', `${recipe.material}_${recipe.type}`));
    });

    energizing(
        'minecraft:amethyst_shard',
        '3x mysticalagriculture:prosperity_shard',
        1000
    ).id(kjs('energizing', 'prosperity_shard'));

    energizing(
        'minecraft:amethyst_block',
        '15x mysticalagriculture:prosperity_shard',
        5000
    ).id(kjs('energizing', 'prosperity_shard_from_block'));

    energizing(
        ['minecraft:iron_ingot', '#minecraft:coals'],
        'extendedcrafting:black_iron_ingot', 600
    ).id(kjs('energizing', 'black_iron_ingot'));

    energizing(
        ['minecraft:iron_block', 'minecraft:coal_block'],
        'extendedcrafting:black_iron_block', 5000
    ).id(kjs('energizing', 'black_iron_block'));
});

PowahEvents.coolants(event => {
    event.addFluid('r2aot:fluidedsource', -32);
});

PowahEvents.heatSource(event => {
    event.remove('minecraft:lava');
    event.add('botania:blaze_block', 1000);
})
