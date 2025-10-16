ServerEvents.recipes(event => {
    const { r2aot } = event.recipes;
    const DURATION = 10;

    r2aot
        .modular_runic_altar_core()
        .outputItems(['botania:rune_sloth', 'botania:rune_autumn', 'botania:rune_air'])
        .inputMana(12000)
        .inputItems('#botania:mana_diamond_gems')
        .inputItems('#botania:mana_diamond_gems')
        .inputItems('botania:livingrock')
        .inputItems('botania:rune_autumn')
        .inputItems('botania:rune_air')
        .duration(DURATION)
        .id('r2aot:modular_runic_altar_core/rune_sloth');

    r2aot
        .modular_runic_altar_core()
        .outputItems(['botania:rune_gluttony', 'botania:rune_winter', 'botania:rune_fire'])
        .inputMana(12000)
        .inputItems('#botania:mana_diamond_gems')
        .inputItems('#botania:mana_diamond_gems')
        .inputItems('botania:livingrock')
        .inputItems('botania:rune_winter')
        .inputItems('botania:rune_fire')
        .duration(DURATION)
        .id('r2aot:modular_runic_altar_core/rune_gluttony');

    r2aot
        .modular_runic_altar_core()
        .outputItems(['botania:rune_lust', 'botania:rune_summer', 'botania:rune_air'])
        .inputMana(12000)
        .inputItems('#botania:mana_diamond_gems')
        .inputItems('#botania:mana_diamond_gems')
        .inputItems('botania:livingrock')
        .inputItems('botania:rune_summer')
        .inputItems('botania:rune_air')
        .duration(DURATION)
        .id('r2aot:modular_runic_altar_core/rune_lust');

    r2aot
        .modular_runic_altar_core()
        .outputItems(['botania:rune_envy', 'botania:rune_winter', 'botania:rune_water'])
        .inputMana(12000)
        .inputItems('#botania:mana_diamond_gems')
        .inputItems('#botania:mana_diamond_gems')
        .inputItems('botania:livingrock')
        .inputItems('botania:rune_winter')
        .inputItems('botania:rune_water')
        .duration(DURATION)
        .id('r2aot:modular_runic_altar_core/rune_envy');

    r2aot
        .modular_runic_altar_core()
        .outputItems(['botania:rune_pride', 'botania:rune_summer', 'botania:rune_fire'])
        .inputMana(12000)
        .inputItems('#botania:mana_diamond_gems')
        .inputItems('#botania:mana_diamond_gems')
        .inputItems('botania:livingrock')
        .inputItems('botania:rune_summer')
        .inputItems('botania:rune_fire')
        .duration(DURATION)
        .id('r2aot:modular_runic_altar_core/rune_pride');

    r2aot
        .modular_runic_altar_core()
        .outputItems(['botania:rune_wrath', 'botania:rune_winter', 'botania:rune_earth'])
        .inputMana(12000)
        .inputItems('#botania:mana_diamond_gems')
        .inputItems('#botania:mana_diamond_gems')
        .inputItems('botania:livingrock')
        .inputItems('botania:rune_winter')
        .inputItems('botania:rune_earth')
        .duration(DURATION)
        .id('r2aot:modular_runic_altar_core/rune_wrath');

    r2aot
        .modular_runic_altar_core()
        .outputItems(['botania:rune_greed', 'botania:rune_spring', 'botania:rune_water'])
        .inputMana(12000)
        .inputItems('#botania:mana_diamond_gems')
        .inputItems('#botania:mana_diamond_gems')
        .inputItems('botania:livingrock')
        .inputItems('botania:rune_spring')
        .inputItems('botania:rune_water')
        .duration(DURATION)
        .id('r2aot:modular_runic_altar_core/rune_greed');

    r2aot
        .modular_runic_altar_core()
        .outputItems(['botania:rune_spring', 'botania:rune_water', 'botania:rune_fire'])
        .inputMana(8000)
        .inputItems('#minecraft:saplings')
        .inputItems('#minecraft:saplings')
        .inputItems('#minecraft:saplings')
        .inputItems('minecraft:wheat')
        .inputItems('botania:livingrock')
        .inputItems('botania:rune_water')
        .inputItems('botania:rune_fire')
        .duration(DURATION)
        .id('r2aot:modular_runic_altar_core/rune_spring');

    r2aot
        .modular_runic_altar_core()
        .outputItems(['botania:rune_summer', 'botania:rune_earth', 'botania:rune_air'])
        .inputMana(8000)
        .inputItems('#minecraft:sand')
        .inputItems('#minecraft:sand')
        .inputItems('minecraft:slime_ball')
        .inputItems('minecraft:melon_slice')
        .inputItems('botania:livingrock')
        .inputItems('botania:rune_earth')
        .inputItems('botania:rune_air')
        .duration(DURATION)
        .id('r2aot:modular_runic_altar_core/rune_summer');

    r2aot
        .modular_runic_altar_core()
        .outputItems(['botania:rune_autumn', 'botania:rune_fire', 'botania:rune_air'])
        .inputMana(8000)
        .inputItems('#minecraft:leaves')
        .inputItems('#minecraft:leaves')
        .inputItems('#minecraft:leaves')
        .inputItems('minecraft:spider_eye')
        .inputItems('botania:livingrock')
        .inputItems('botania:rune_fire')
        .inputItems('botania:rune_air')
        .duration(DURATION)
        .id('r2aot:modular_runic_altar_core/rune_autumn');

    r2aot
        .modular_runic_altar_core()
        .outputItems(['botania:rune_winter', 'botania:rune_water', 'botania:rune_earth'])
        .inputMana(8000)
        .inputItems('#minecraft:wool')
        .inputItems('minecraft:snow_block')
        .inputItems('minecraft:snow_block')
        .inputItems('minecraft:cake')
        .inputItems('botania:livingrock')
        .inputItems('botania:rune_water')
        .inputItems('botania:rune_earth')
        .duration(DURATION)
        .id('r2aot:modular_runic_altar_core/rune_winter');
});
