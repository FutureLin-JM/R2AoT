JadeEvents.onCommonRegistration((event) => {
    const manaMethods = ['currentMana', 'maxMana', 'mana', 'manaToGet'];

    event.blockDataProvider('r2aot:numerical_mana', $BlockEntity).setCallback((tag, accessor) => {
        const { blockEntity } = accessor;

        manaMethods.forEach((key) => {
            if (blockEntity[key] != null) {
                tag.putInt(key, blockEntity[key]);
            }
        });
    });

    event.blockDataProvider('r2aot:numerical_source', $BlockEntity).setCallback((tag, accessor) => {
        const { blockEntity, block } = accessor;

        if (blockEntity.source != null) {
            tag.putInt('source', blockEntity.source);
        }

        if (block.id == 'r2aot:source_flower' || block.id == 'r2aot:flowing_source_flower') {
            tag.putInt('source', blockEntity.persistentData.getInt('source'));
        }
    });
});
