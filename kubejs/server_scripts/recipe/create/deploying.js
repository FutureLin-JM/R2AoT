ServerEvents.recipes(event => {
    const { deploying } = event.recipes.create;

    // deploying 机械手
    deploying('create:brass_casing', ['create:andesite_casing', 'create:brass_ingot']).id(
        kjs('deploying', 'brass_casing')
    );
    deploying('ae2:printed_silicon', ['ae2:silicon', 'ae2:silicon_press'])
        .keepHeldItem()
        .id(kjs('deploying', 'printed_silicon'));

    deploying('ae2:printed_calculation_processor', ['ae2:certus_quartz_crystal', 'ae2:calculation_processor_press'])
        .keepHeldItem()
        .id(kjs('deploying', 'printed_calculation_processor'));

    deploying('ae2:printed_logic_processor', ['minecraft:gold_ingot', 'ae2:logic_processor_press'])
        .keepHeldItem()
        .id(kjs('deploying', 'printed_logic_processor'));

    deploying('ae2:printed_engineering_processor', ['minecraft:diamond', 'ae2:engineering_processor_press'])
        .keepHeldItem()
        .id(kjs('deploying', 'printed_engineering_processor'));

    deploying('ars_nouveau:glyph_sensitive', ['ars_nouveau:scribes_table', 'minecraft:poppy']).id(
        kjs('deploying', 'glyph_sensitive')
    );
});
