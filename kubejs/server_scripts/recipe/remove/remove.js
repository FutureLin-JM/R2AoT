ServerEvents.recipes(event => {
    let recipesToRemoveID = [
        'minecraft:andesite',
        'create:compacting/andesite_from_flint',
        'industrialforegoing:stonework_generate/andesite',
        'create:item_application/andesite_casing_from_log',
        'create:item_application/andesite_casing_from_wood',
        'create:mixing/andesite_alloy',
        'create_mechanical_extruder:extruding/basalt',
        'create_mechanical_extruder:extruding/cobblestone',
        'create_mechanical_extruder:extruding/limestone',
        'create_mechanical_extruder:extruding/scoria',
        'create_mechanical_extruder:extruding/stone',
        'botania:pure_daisy/livingwood',
        'create:item_application/brass_casing_from_log',
        'create:item_application/brass_casing_from_wood',
        'botania:mana_pool',
        'botania:mana_infusion/mana_powder_dye',
        'createendertransmission:item_transmitter',
        'createendertransmission:fluid_transmitter',
        'createendertransmission:chunk_loader',
        'minecraft:crying_obsidian',
        'industrialforegoing:plastic',
        'create:filling/redstone',
        'thermal:machine_frame',
        'industrialforegoing:ore_laser_base',
        'industrialforegoing:laser_drill',
        'createendertransmission:energy_transmitter',
        'avaritia:botania_mana_tablet',
        'botania:diluted_pool',
    ]
    recipesToRemoveID.forEach((recipes) => {
        event.remove({id:recipes});
    });

    let recipesToRemoveType =[
        'botania:pure_daisy',
        'advanced_ae:reaction',
        'industrialforegoing:laser_drill_ore',
        'thermal_extra:component_assembly',
        'thermal_extra:endothermic_dehydrator',
    ]
    recipesToRemoveType.forEach((typeId) => {
        event.remove({type: typeId});
    })

    let recipesToRemoveOutItem = [
        
    ]
    recipesToRemoveOutItem.forEach((itemId) => {
        event.remove({output: itemId});
    })
})


