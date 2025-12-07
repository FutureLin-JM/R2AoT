StartupEvents.registry('item', event => {
    event.create('r2aot:wooden_shears', 'shears').maxDamage(64);
    event.create('r2aot:wooden_hammer', 'pickaxe').tier('wood').speed(2).maxDamage(128);
    event.create('r2aot:stone_hammer', 'pickaxe').tier('stone').speed(4).maxDamage(256);
    event.create('r2aot:compressed_wooden_hammer', 'pickaxe').tier('wood').speed(4).maxDamage(1280);
    event.create('r2aot:compressed_stone_hammer', 'pickaxe').tier('stone').speed(6).maxDamage(2560);
    event.create('r2aot:green_gravel_shard', 'basic');

    event.create('r2aot:iron_furnace_component', 'basic').rarity('uncommon');
    event.create('r2aot:copper_furnace_component', 'basic').rarity('uncommon');
    event.create('r2aot:crystal_furnace_component', 'basic').rarity('rare');
    event.create('r2aot:diamond_furnace_component', 'basic').rarity('rare');
    event.create('r2aot:emerald_furnace_component', 'basic').rarity('rare');
    event.create('r2aot:gold_furnace_component', 'basic').rarity('uncommon');
    event.create('r2aot:netherite_furnace_component', 'basic').rarity('epic');
    event.create('r2aot:obsidian_furnace_component', 'basic').rarity('epic');

    event.create('r2aot:creative_casing_shard', 'basic');
    event.create('r2aot:rune_elemental', 'basic');
    event.create('r2aot:time_voucher', 'basic');
    event.create('r2aot:luxvoid_alloy', 'basic').rarity('uncommon');
    event.create('r2aot:bookwyrm_shards', 'basic');
    event.create('r2aot:amethyst_golem_shards', 'basic');
    event.create('r2aot:broken_mana', 'basic').rarity('uncommon');
    event.create('r2aot:broken_source', 'basic').rarity('uncommon');

    event.create('r2aot:dust_aerotheum', 'basic');
    event.create('r2aot:dust_cryotheum', 'basic');
    event.create('r2aot:dust_petrotheum', 'basic');
    event.create('r2aot:dust_pyrotheum', 'basic');

    ['energized_steel', 'blazing_crystal', 'niotic_crystal', 'spirited_crystal', 'nitro_crystal'].forEach(material => {
        event.create(`r2aot:${material}_gear`, 'basic');
    });

    event.create('r2aot:shredded_buddycard', 'basic');
    event.create('r2aot:recycled_buddycard', 'basic');

    [
        'coal',
        'copper',
        'diamond',
        'emerald',
        'gold',
        'iron',
        'lapis',
        'netherite',
        'quartz',
        'redstone',
        'zinc',
    ].forEach(ore => {
        event.create(`r2aot:buddycard_ore_${ore}`, 'basic').rarity('legend').maxStackSize(1);
    });

    let incompleteSeeds = [
        'mysticalagriculture:water_seeds',
        'mysticalagriculture:fire_seeds',
        'mysticalagriculture:earth_seeds',
        'mysticalagriculture:air_seeds',
        'mysticalagriculture:energized_steel_seeds',
        'mysticalagriculture:blazing_crystal_seeds',
        'mysticalagriculture:niotic_crystal_seeds',
        'mysticalagriculture:spirited_crystal_seeds',
    ];
    incompleteSeeds.forEach(seeds => {
        let seedsName = seeds.split(':')[1];
        event
            .create(`kubejs:incomplete_${seedsName}`, 'create:sequenced_assembly')
            .texture('r2aot:item/mystical_seeds');
    });

    let incompleteItem = [
        'thermal:rf_coil',
        'thermal:redstone_servo',
        'ars_nouveau:bookwyrm_charm',
        'ars_nouveau:starbuncle_charm',
        'ars_nouveau:whirlisprig_charm',
        'ars_nouveau:wixie_charm',
        'ars_nouveau:drygmy_charm',
        'ars_nouveau:amethyst_golem_charm',
        'botania:alfheim_portal',
    ];
    incompleteItem.forEach(item => {
        let itemName = item.split(':')[1];
        event.create(`kubejs:incomplete_${itemName}`, 'create:sequenced_assembly');
    });

    let folderType = [
        'mysticalagriculture:water_seeds',
        'mysticalagriculture:fire_seeds',
        'mysticalagriculture:earth_seeds',
        'mysticalagriculture:air_seeds',
        'mysticalagriculture:energized_steel_seeds',
        'mysticalagriculture:blazing_crystal_seeds',
        'mysticalagriculture:niotic_crystal_seeds',
        'mysticalagriculture:spirited_crystal_seeds',
    ];
    folderType.forEach(type => {
        let itemName = type.split(':')[1];
        event.create(`kubejs:${itemName}_folder`, 'basic').texture('r2aot:item/material_folder');
    });
});
