ServerEvents.recipes(event => {
    const { mechanical_crafting } = event.recipes.create;

    // mechanical_crafting 动力合成
    mechanical_crafting('r2aot:diamond_furnace_component', [
        'AAA',
        'ABA',
        'ACA'
    ], {
        A: 'minecraft:diamond',
        B: '#r2aot:furnace_component/level1',
        C: 'minecraft:diamond_block',
    }).id(kjs('mechanical_crafting', 'diamond_furnace_component'));

    mechanical_crafting('r2aot:emerald_furnace_component', [
        'AAA',
        'ABA',
        'ACA'
    ], {
        A: 'minecraft:emerald',
        B: '#r2aot:furnace_component/level1',
        C: 'minecraft:emerald_block',
    }).id(kjs('mechanical_crafting', 'emerald_furnace_component'));

    mechanical_crafting('r2aot:crystal_furnace_component', [
        'AAA',
        'ABA',
        'ACA'
    ], {
        A: 'ae2:quartz_glass',
        B: '#r2aot:furnace_component/level1',
        C: 'ae2:quartz_vibrant_glass',
    }).id(kjs('mechanical_crafting', 'crystal_furnace_component'));

    mechanical_crafting('r2aot:obsidian_furnace_component', [
        ' AAA ',
        'AAAAA',
        'AABAA',
        'AAAAA',
        ' AAA '
    ], {
        A: 'minecraft:obsidian',
        B: '#r2aot:furnace_component/level2',
    }).id(kjs('mechanical_crafting', 'obsidian_furnace_component'));

    mechanical_crafting('r2aot:netherite_furnace_component', [
        ' AAA ',
        'AACAA',
        'ACBCA',
        'AACAA',
        ' AAA '
    ], {
        A: 'minecraft:netherite_ingot',
        B: '#r2aot:furnace_component/level2',
        C: 'minecraft:netherite_block',
    }).id(kjs('mechanical_crafting', 'netherite_furnace_component'));

    mechanical_crafting('botania:mana_pool', [
        'ABA',
        'AAA'
    ], {
        A: 'botania:livingrock',
        B: 'create:brass_ingot'
    }).id(kjs('mechanical_crafting', 'mana_pool'));

    mechanical_crafting('r2aot:mana_generator_core', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'botania:livingrock',
        B: 'minecraft:diamond',
    }).id(kjs('mechanical_crafting', 'mana_generator_core'));

    mechanical_crafting('r2aot:flower_ore_generator', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'create:brass_casing',
        B: 'create:crushing_wheel',
    }).id(kjs('mechanical_crafting', 'flower_ore_generator'));

    mechanical_crafting('4x create:crushing_wheel', [
        ' AAA ',
        'AAPAA',
        'APSPA',
        'AAPAA',
        ' AAA '
    ], {
        A: 'create:andesite_alloy',
        P: '#minecraft:planks',
        S: '#forge:stone',
    }).id('create:mechanical_crafting/crushing_wheel');

    mechanical_crafting('r2aot:mana_motor', [
        ' AAA ',
        'ABCBA',
        'ACDCA',
        'ABCBA',
        ' AAA '
    ], {
        A: 'botania:mana_diamond',
        B: 'botania:manasteel_block',
        C: 'botania:mana_powder',
        D: 'create:shaft',
    }).id(kjs('mechanical_crafting', 'mana_motor'));

    mechanical_crafting('create:creative_motor', [
        ' AAA ',
        'AAAAA',
        'AABAA',
        'AAAAA',
        ' AAA '
    ], {
        A: 'r2aot:creative_casing',
        B: 'create:shaft',
    }).id(kjs('mechanical_crafting', 'creative_motor'));

    mechanical_crafting('r2aot:stress_generator_core', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'create:brass_ingot',
        B: 'create:brass_casing',
        C: 'create:railway_casing',
    }).id(kjs('mechanical_crafting', 'stress_generator_core'));

    ['thermal/blitz', 'thermal/blizz', 'thermal/basalz', 'guardian', 'shulker', 'warden'].forEach(type => {
        const modelId = `hostilenetworks:${type}`;
        const typeName = type.includes('/') ? type.split('/')[1] : type;
        const dataModel = Item.of('hostilenetworks:data_model', `{data_model:{id:"${modelId}"}}`).strongNBT();
        const prediction = Item.of('hostilenetworks:prediction', `{data_model:{id:"${modelId}"}}`).strongNBT();
        mechanical_crafting(
            dataModel,
            [
                ' AAA ',
                'AAAAA',
                'AABAA',
                'AAAAA',
                ' AAA '
            ], {
                A: prediction,
                B: 'hostilenetworks:blank_data_model',
            }).id(kjs('mechanical_crafting', `data_model_${typeName}`));
    });
});
