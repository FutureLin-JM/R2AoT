ServerEvents.recipes(event => {
    // 清除多余植物盆配方
    let excludedPotsItems = [
        'botanypotstiers:creative_terracotta_hopper_botany_pot',
        'botanypotstiers:creative_terracotta_botany_pot',
        'botanypotstiers:ultra_terracotta_hopper_botany_pot',
        'botanypotstiers:ultra_terracotta_botany_pot',
        'botanypotstiers:elite_terracotta_hopper_botany_pot',
        'botanypotstiers:elite_terracotta_botany_pot',
        'botanypots:terracotta_hopper_botany_pot',
        'botanypots:terracotta_botany_pot',
      ];
    Ingredient.of(/^(botanypotstiers:|botanypots:)/).itemIds.forEach(id => {
        if (!excludedPotsItems.includes(id))
            event.remove({output:id})
    });

    const cropRemoveByTag =[
        '#botania:petals',
        '#minecraft:flowers',
    ]
    cropRemoveByTag.forEach(tag => {
        Ingredient.of(tag).itemIds.forEach(id => {
            const [modName, itemName] = id.split(':');
            event.remove({id:`botanypots:${modName}/crop/${itemName}`})
        })
    })

    Ingredient.of(/^minecraft:\w+_coral(_\w+)?$/).itemIds.forEach(id => {
        const [modName, itemName] = id.split(':');
        event.remove({id:`botanypots:${modName}/crop/${itemName}`})
    })

    const cropRemoveByID = [
        'botanypots:minecraft/crop/glow_berry_bush',
        'botanypots:minecraft/crop/glow_lichen',
        'botanypots:minecraft/crop/moss',
        'botanypots:minecraft/crop/brown_mushroom',
        'botanypots:minecraft/crop/red_mushroom',
        'botanypots:minecraft/crop/vines',
        'botanypots:minecraft/crop/crimson_roots',
        'botanypots:minecraft/crop/weeping_vines',
        'botanypots:minecraft/crop/spore_blossom',
        'botanypots:minecraft/crop/big_dripleaf',
        'botanypots:minecraft/crop/fern',
        'botanypots:minecraft/crop/twisting_vines',
        'botanypots:minecraft/crop/warped_roots',
        'botanypots:minecraft/crop/lily_pad',
        'botanypots:minecraft/crop/tall_grass',
        'botanypots:minecraft/crop/pitcher_plant',
        'botanypots:minecraft/crop/small_dripleaf',
        'botanypots:minecraft/crop/hanging_roots',
        'botanytrees:minecraft/mangrove',
        'botanypots:minecraft/crop/large_fern',
        'botanypots:minecraft/crop/nether_sprouts',
        'botanypots:minecraft/crop/cocoa_beans',
        'botanytrees:minecraft/azalea',
        'botanytrees:minecraft/flowering_azalea',
        'botanytrees:minecraft/cherry',
        'botanytrees:minecraft/spruce',
        'botanytrees:minecraft/birch',
        'botanypots:minecraft/crop/seagrass',
        'botanypots:minecraft/crop/beetroot',
        'botanytrees:minecraft/jungle',
        'botanytrees:minecraft/acacia',
        'botanytrees:thermal/rubberwood',
        'botanypots:minecraft/crop/sea_pickle',
        'botanypots:minecraft/crop/grass',
        'botanytrees:minecraft/dark_oak',
        'botanypots:minecraft/crop/warped_fungus',
        'botanypots:minecraft/crop/sweet_berry_bush',
        'botanypots:minecraft/crop/crimson_fungus',
        'botanypots:minecraft/crop/bamboo',
        'botanypots:minecraft/crop/melon',
        'botanypots:minecraft/crop/pumpkin',
        'botanypots:minecraft/crop/potato',
        'botanytrees:naturesaura/ancient',
    ]
    cropRemoveByID.forEach(recipeID => {
        event.remove({id: recipeID})
    })
    
    const soilRemove = [
        'minecraft:cod_bucket',
        'minecraft:salmon_bucket',
        'minecraft:tropical_fish_bucket',
        'minecraft:dirt_path',
        'minecraft:coarse_dirt',
        'minecraft:podzol',
        'minecraft:rooted_dirt',
        'minecraft:mycelium',
        'minecraft:farmland',
        'minecraft:dirt',
        'mysticalagriculture:inferium_farmland',
        'mysticalagriculture:prudentium_farmland',
        'mysticalagriculture:tertium_farmland',
        'mysticalagriculture:imperium_farmland',
        'mysticalagriculture:supremium_farmland',
    ]
    soilRemove.forEach(itemId => {
        event.remove({
            type:"botanypots:soil",
            input:{item:itemId},
        })
    })

    // let excludedEssenceCrops = [
    //     'mysticalagriculture:inferium_essence',
    //     'mysticalagriculture:bronze_essence',
    //     'mysticalagriculture:electrum_essence',
    //     'mysticalagriculture:invar_essence',
    //     'mysticalagriculture:constantan_essence',

    // ]
    let excludedEssenceCrops = [
        'inferium', 'water', 'fire', 'earth', 'air',
    ]
    Ingredient.of('#mysticalagriculture:essences').itemIds.forEach(id => {
        const cropName = id.replace('mysticalagriculture:', '').replace('_essence', '');
        if (!excludedEssenceCrops.includes(cropName)) {
            event.remove({id:`botanypots:mysticalagriculture/crop/${cropName}`})
        }
    })
})