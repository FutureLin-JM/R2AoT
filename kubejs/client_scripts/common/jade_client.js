const $IElementHelper = Java.loadClass('snownee.jade.api.ui.IElementHelper');

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

    event.block('r2aot:snowman_cooler', $Block).tooltip((tooltip, accessor) => {
        const { serverData } = accessor;
        if (!serverData) return;
        let activeFuel = serverData.get('activeFuel');
        let remainingBurnTime = serverData.get('remainingBurnTime');
        let activeFuelIcon;
        if (activeFuel && remainingBurnTime) {
            if (activeFuel == 1) {
                activeFuelIcon = $IElementHelper.get().smallItem(Items.SNOWBALL);
            } else if (activeFuel == 2) {
                activeFuelIcon = $IElementHelper.get().smallItem(Items.ICE);
            }
            tooltip['add(snownee.jade.api.ui.IElement)'](activeFuelIcon);
            let seconds = Math.floor(remainingBurnTime / 20);
            let coolerText = Text.translatable('jade.tooltip.snowman_cooler', seconds);
            tooltip.append(coolerText);
        }
    });
});
