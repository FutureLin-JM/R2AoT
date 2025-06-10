/**
 * 此代码基于 FalAut/Mierno
 * 原项目地址：https://github.com/FalAut/Mierno/blob/main/kubejs/startup_scripts/common/jade_startup.js
 * 原始版权归原作者所有，遵循 MIT License
 */
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
});
