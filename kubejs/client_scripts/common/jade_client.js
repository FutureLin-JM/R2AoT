/**
 * 此代码基于 FalAut/Mierno
 * 原项目地址：https://github.com/FalAut/Mierno/blob/main/kubejs/client_scripts/common/jade_client.js
 * 原始版权归原作者所有，遵循 MIT License
 */
JadeEvents.onClientRegistration((event) => {
    event.block('r2aot:numerical_mana', $Block).tooltip((tooltip, accessor) => {
        const { serverData } = accessor;
        if (!serverData) return;

        let currentMana = serverData.get('currentMana') || serverData.get('mana');
        let maxMana = serverData.get('maxMana') || serverData.get('manaToGet');

        if (currentMana) {
            tooltip.add(Text.translate('jade.tooltip.mana', [currentMana, maxMana ? ` / ${maxMana}` : '']).aqua());
        }
    });
});
