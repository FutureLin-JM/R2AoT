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
});

PowahEvents.coolants(event => {
    event.addFluid('r2aot:fluidedsource', -32);
});

PowahEvents.heatSource(event => {
    event.remove('minecraft:lava');
    event.add('botania:blaze_block', 1000);
})
