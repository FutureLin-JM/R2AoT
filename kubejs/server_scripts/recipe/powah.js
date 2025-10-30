ServerEvents.recipes(event => {
    const { energizing } = event.recipes.powah;

    energizing(
        ['#minecraft:coals', '#minecraft:coals', 'minecraft:clay_ball'],
        Item.of('powah:dielectric_paste').withCount(64),
        10000
    ).id(kjs('energizing', 'dielectric_paste'));

    energizing('minecraft:snowball', 'powah:charged_snowball', 50000).id(kjs('energizing', 'charged_snowball'));
    
    energizing(
        [
        "r2aot:broken_mana",
        'r2aot:broken_source'
        ],
        'powah:uraninite',
        5000
    ).id(kjs('energizing', 'uraninite'))
});
