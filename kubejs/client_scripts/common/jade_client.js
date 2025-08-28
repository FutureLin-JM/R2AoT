JadeEvents.onClientRegistration(event => {
    event.block('r2aot:numerical_mana', $Block).tooltip((tooltip, accessor) => {
        const { serverData } = accessor;
        if (!serverData) return;

        let currentMana = serverData.get('currentMana') || serverData.get('mana');
        let maxMana = serverData.get('maxMana') || serverData.get('manaToGet');

        if (currentMana) {
            tooltip.add(Text.translate('jade.tooltip.mana', [currentMana, maxMana ? ` / ${maxMana}` : '']).aqua());
        }
    });

    event.block('r2aot:numerical_source', $Block).tooltip((tooltip, accessor) => {
        const { serverData } = accessor;
        if (!serverData) return;

        let source = serverData.get('source');

        if (source) {
            let sourceText = Text.translate('jade.tooltip.source', source).lightPurple();
            tooltip.add(sourceText);
        }
    });
});
