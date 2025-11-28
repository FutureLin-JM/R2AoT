ServerEvents.recipes(event => {
    const { modular_runic_altar_core, terrestrial_agglomeration_crystal, alfheim_trade_station } = event.recipes.r2aot;
    const DURATION = 1;

    modular_runic_altar_core()
        .outputItems(['botania:rune_sloth', 'botania:rune_autumn', 'botania:rune_air'])
        .inputMana(12000)
        .inputItems('2x #botania:mana_diamond_gems')
        .inputItems('botania:livingrock')
        .inputItems('botania:rune_autumn')
        .inputItems('botania:rune_air')
        .duration(DURATION)
        .id('r2aot:modular_runic_altar_core/rune_sloth');

    modular_runic_altar_core()
        .outputItems(['botania:rune_gluttony', 'botania:rune_winter', 'botania:rune_fire'])
        .inputMana(12000)
        .inputItems('2x #botania:mana_diamond_gems')
        .inputItems('botania:livingrock')
        .inputItems('botania:rune_winter')
        .inputItems('botania:rune_fire')
        .duration(DURATION)
        .id('r2aot:modular_runic_altar_core/rune_gluttony');

    modular_runic_altar_core()
        .outputItems(['botania:rune_lust', 'botania:rune_summer', 'botania:rune_air'])
        .inputMana(12000)
        .inputItems('2x #botania:mana_diamond_gems')
        .inputItems('botania:livingrock')
        .inputItems('botania:rune_summer')
        .inputItems('botania:rune_air')
        .duration(DURATION)
        .id('r2aot:modular_runic_altar_core/rune_lust');

    modular_runic_altar_core()
        .outputItems(['botania:rune_envy', 'botania:rune_winter', 'botania:rune_water'])
        .inputMana(12000)
        .inputItems('2x #botania:mana_diamond_gems')
        .inputItems('botania:livingrock')
        .inputItems('botania:rune_winter')
        .inputItems('botania:rune_water')
        .duration(DURATION)
        .id('r2aot:modular_runic_altar_core/rune_envy');

    modular_runic_altar_core()
        .outputItems(['botania:rune_pride', 'botania:rune_summer', 'botania:rune_fire'])
        .inputMana(12000)
        .inputItems('2x #botania:mana_diamond_gems')
        .inputItems('botania:livingrock')
        .inputItems('botania:rune_summer')
        .inputItems('botania:rune_fire')
        .duration(DURATION)
        .id('r2aot:modular_runic_altar_core/rune_pride');

    modular_runic_altar_core()
        .outputItems(['botania:rune_wrath', 'botania:rune_winter', 'botania:rune_earth'])
        .inputMana(12000)
        .inputItems('2x #botania:mana_diamond_gems')
        .inputItems('botania:livingrock')
        .inputItems('botania:rune_winter')
        .inputItems('botania:rune_earth')
        .duration(DURATION)
        .id('r2aot:modular_runic_altar_core/rune_wrath');

    modular_runic_altar_core()
        .outputItems(['botania:rune_greed', 'botania:rune_spring', 'botania:rune_water'])
        .inputMana(12000)
        .inputItems('2x #botania:mana_diamond_gems')
        .inputItems('botania:livingrock')
        .inputItems('botania:rune_spring')
        .inputItems('botania:rune_water')
        .duration(DURATION)
        .id('r2aot:modular_runic_altar_core/rune_greed');

    modular_runic_altar_core()
        .outputItems(['botania:rune_spring', 'botania:rune_water', 'botania:rune_fire'])
        .inputMana(8000)
        .inputItems('3x #minecraft:saplings')
        .inputItems('minecraft:wheat')
        .inputItems('botania:livingrock')
        .inputItems('botania:rune_water')
        .inputItems('botania:rune_fire')
        .duration(DURATION)
        .id('r2aot:modular_runic_altar_core/rune_spring');

    modular_runic_altar_core()
        .outputItems(['botania:rune_summer', 'botania:rune_earth', 'botania:rune_air'])
        .inputMana(8000)
        .inputItems('2x #minecraft:sand')
        .inputItems('minecraft:slime_ball')
        .inputItems('minecraft:melon_slice')
        .inputItems('botania:livingrock')
        .inputItems('botania:rune_earth')
        .inputItems('botania:rune_air')
        .duration(DURATION)
        .id('r2aot:modular_runic_altar_core/rune_summer');

    modular_runic_altar_core()
        .outputItems(['botania:rune_autumn', 'botania:rune_fire', 'botania:rune_air'])
        .inputMana(8000)
        .inputItems('3x #minecraft:leaves')
        .inputItems('minecraft:spider_eye')
        .inputItems('botania:livingrock')
        .inputItems('botania:rune_fire')
        .inputItems('botania:rune_air')
        .duration(DURATION)
        .id('r2aot:modular_runic_altar_core/rune_autumn');

    modular_runic_altar_core()
        .outputItems(['botania:rune_winter', 'botania:rune_water', 'botania:rune_earth'])
        .inputMana(8000)
        .inputItems('#minecraft:wool')
        .inputItems('2x minecraft:snow_block')
        .inputItems('minecraft:cake')
        .inputItems('botania:livingrock')
        .inputItems('botania:rune_water')
        .inputItems('botania:rune_earth')
        .duration(DURATION)
        .id('r2aot:modular_runic_altar_core/rune_winter');

    alfheim_trade_station()
        .inputItems('2x botania:mana_diamond_block')
        .inputMana(2000)
        .outputItems('botania:dragonstone_block')
        .duration(DURATION);

    alfheim_trade_station()
        .inputItems('botania:livingwood')
        .inputMana(1000)
        .outputItems('botania:dreamwood')
        .duration(DURATION);

    alfheim_trade_station()
        .inputItems('botania:livingwood_log')
        .inputMana(1000)
        .outputItems('botania:dreamwood_log')
        .duration(DURATION);

    alfheim_trade_station()
        .inputItems('2x botania:manasteel_ingot')
        .inputMana(2000)
        .outputItems('botania:elementium_ingot')
        .duration(DURATION);

    alfheim_trade_station()
        .inputItems('2x botania:manasteel_block')
        .inputMana(2000)
        .outputItems('botania:elementium_block')
        .duration(DURATION);

    alfheim_trade_station()
        .inputItems('botania:mana_glass')
        .inputMana(1000)
        .outputItems('botania:elf_glass')
        .duration(DURATION);

    alfheim_trade_station()
        .inputItems('minecraft:quartz')
        .inputMana(1000)
        .outputItems('botania:quartz_elven')
        .duration(DURATION);

    alfheim_trade_station()
        .inputItems('2x botania:mana_powder')
        .inputMana(2000)
        .outputItems('botania:pixie_dust')
        .duration(DURATION);

    alfheim_trade_station()
        .inputItems('2x botania:mana_diamond')
        .inputMana(2000)
        .outputItems('botania:dragonstone')
        .duration(DURATION);

    terrestrial_agglomeration_crystal()
        .outputItems('botania:terrasteel_ingot')
        .inputItems(['botania:manasteel_ingot', 'botania:mana_pearl', 'botania:mana_diamond'])
        .inputMana(500000)
        .chance(0.5, builder => builder.inputFluids(Fluid.of('r2aot:fluidedmana', 1000)))
        .duration(20)
        .id('r2aot:terrestrial_agglomeration_crystal/terrasteel_ingot');
});
