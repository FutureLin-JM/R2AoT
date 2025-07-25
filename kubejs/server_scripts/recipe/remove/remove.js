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
        'torcherino:torcherino',
        'thermal:redstone_servo',
        'thermal:rf_coil',
        'thermal:parts/bronze_gear',
        'thermal:parts/electrum_gear',
        'thermal:parts/invar_gear',
        'thermal:parts/constantan_gear',
        'thermal:parts/signalum_gear',
        'thermal:parts/lumium_gear',
        'thermal:parts/enderium_gear',
        'thermalendergy:prismalium_gear',
        'thermalendergy:melodium_gear',
        'thermalendergy:stellarium_gear',
        'thermal_extra:parts/soul_infused_gear',
        'thermal_extra:parts/shellite_gear',
        'thermal_extra:parts/twinite_gear',
        'thermal_extra:parts/dragonsteel_gear',
        'thermal_extra:parts/abyssal_gear',
        'mekanism:processing/bronze/ingot/from_infusing',
        'mysticalagriculture:prudentium_essence',
        'mysticalagriculture:tertium_essence',
        'mysticalagriculture:imperium_essence',
        'botania:spark_upgrade_dispersive',
        'botania:spark_upgrade_dominant',
        'botania:spark_upgrade_recessive',
        'botania:spark_upgrade_isolated',
        'thermal:bronze_dust_4',
        'thermal:electrum_dust_2',
        'thermal:invar_dust_3',
        'thermal:constantan_dust_2',
        'thermal:fire_charge/bronze_ingot_4',
        'thermal:fire_charge/electrum_ingot_2',
        'thermal:fire_charge/invar_ingot_3',
        'thermal:fire_charge/constantan_ingot_2',
        'thermal:machines/smelter/smelter_alloy_bronze',
        'thermal:machines/smelter/smelter_alloy_electrum',
        'thermal:machines/smelter/smelter_alloy_invar',
        'thermal:machines/smelter/smelter_alloy_constantan',
        'mysticalagriculture:prudentium_block_combine',
        'mysticalagriculture:tertium_block_combine',
        'mysticalagriculture:imperium_block_combine',
        'botania:runic_altar_alt',
        'botania:runic_altar',
        'botania:petal_apothecary/pure_daisy',
        'botania:petal_apothecary/hydroangeas',
        'botania:petal_apothecary/orechid',
        'botania:petal_apothecary/orechid_ignem',
        'botania:runic_altar/water',
        'botania:runic_altar/fire',
        'botania:runic_altar/earth',
        'botania:runic_altar/air',
        'industrialforegoing:mob_slaughter_factory',
        'mysticalagriculture:seed_reprocessor',
        'thermal:machines/smelter/smelter_alloy_lumium',
        'thermal:machines/smelter/smelter_alloy_signalum',
        'thermal:machines/smelter/smelter_alloy_enderium',
        'thermal:fire_charge/lumium_ingot_4',
        'thermal:fire_charge/signalum_ingot_4',
        'thermal:fire_charge/enderium_ingot_2',
        'thermal:augments/upgrade_augment_1',
        'thermal:augments/upgrade_augment_2',
        'thermal:augments/upgrade_augment_3',
        'botania:terra_plate',
        'ars_nouveau:glyph_lightning',
        'ars_nouveau:imbuement_lapis',
    ]
    recipesToRemoveID.forEach((recipes) => {
        event.remove({id:recipes});
    });

    let recipesToRemoveType =[
        'botania:pure_daisy',
        'industrialforegoing:laser_drill_ore',
        'thermal_extra:component_assembly',
        'botania:orechid_ignem'
    ]
    recipesToRemoveType.forEach((typeId) => {
        event.remove({type: typeId});
    });

    let recipesToRemoveOutItem = [
        
    ]
    recipesToRemoveOutItem.forEach((itemId) => {
        event.remove({output: itemId});
    });
})


