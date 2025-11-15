const $SnowmanCoolerBlockEntity = Java.loadClass('fr.iglee42.cmr.cooler.SnowmanCoolerBlockEntity');

JadeEvents.onCommonRegistration(event => {
    const manaMethods = ['currentMana', 'maxMana', 'mana', 'manaToGet'];

    event.blockDataProvider('r2aot:numerical_mana', $BlockEntity).setCallback((tag, accessor) => {
        const { blockEntity } = accessor;

        manaMethods.forEach(key => {
            if (blockEntity[key] != null) {
                tag.putInt(key, blockEntity[key]);
            }
        });
    });

    event.blockDataProvider('r2aot:numerical_source', $BlockEntity).setCallback((tag, accessor) => {
        const { blockEntity, block } = accessor;

        if (blockEntity.source != null && !isNaN(blockEntity.source)) {
            tag.putInt('source', blockEntity.source);
        }
    });

    event.blockDataProvider('r2aot:snowman_cooler', $BlockEntity).setCallback((tag, accessor) => {
        /** @type {{ blockEntity: Internal.SnowmanCoolerBlockEntity, block: Internal.Block  }} */
        const { blockEntity, block } = accessor;
        if (block.id !== 'cmr:snowman_cooler') return;

        if (blockEntity.activeFuel && blockEntity.remainingBurnTime) {
            tag.putInt('activeFuel', blockEntity.activeFuel.ordinal());
            tag.putInt('remainingBurnTime', blockEntity.remainingBurnTime);
        }
    });
});
