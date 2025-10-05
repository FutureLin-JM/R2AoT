ServerEvents.recipes(event => {
    const { splashing } = event.recipes.create;

    // splashing 鼓风机
    splashing(
        [Item.of('minecraft:flint').withChance(0.25), Item.of('minecraft:iron_nugget').withChance(0.75)],
        'minecraft:gravel'
    ).id('create:splashing/gravel');

    splashing(Item.of('minecraft:clay_ball').withChance(0.75), 'minecraft:sand').id('create:splashing/sand');

    splashing('industrialforegoing:plastic', 'thermal:cured_rubber').id(kjs('splashing', 'plastic_by_splashing'));
});
