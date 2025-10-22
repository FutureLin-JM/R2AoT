StartupEvents.registry('fluid', event => {
    event.create('r2aot:petal_essence').thinTexture(0x13c2c2);
    event.create('r2aot:seed_oil').noBlock();
    event.create('r2aot:bioethanol').noBlock();
    event.create('r2aot:fluidedmana').thinTexture(0x0091cf);
    event.create('r2aot:molten_meteorite').noBlock();

    event.create('r2aot:molten_bronze').noBlock();
    event.create('r2aot:molten_electrum').noBlock();
    event.create('r2aot:molten_invar').noBlock();
    event.create('r2aot:molten_constantan').noBlock();

    event.create('r2aot:molten_lumium').noBlock();
    event.create('r2aot:molten_signalum').noBlock();
    event.create('r2aot:molten_enderium').noBlock();

    event
        .create('r2aot:fluidedsource')
        .stillTexture('r2aot:block/source_still')
        .flowingTexture('r2aot:block/source_flow')
        .color(0x9b13fb);

    [
        { id: 'amethyst_sap', color: 0x4b0082 },
        { id: 'bookwyrm_flux', color: 0x800080 },
        { id: 'drygmy_essence', color: 0xff4500 },
        { id: 'stargem_fluid', color: 0xffa500 },
        { id: 'whirlisprig_extract', color: 0x00ff00 },
        { id: 'wixie_elixir', color: 0xc43bcb },
    ].forEach(fluidType => {
        event
            .create(`r2aot:${fluidType.id}`)
            .noBlock()
            .stillTexture('r2aot:block/ars_animal_fluid')
            .flowingTexture('r2aot:block/ars_animal_fluid')
            .color(fluidType.color);
    });
});
