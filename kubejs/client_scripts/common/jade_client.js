const $SnowmanCoolerBlockEntity = Java.loadClass('fr.iglee42.cmr.cooler.SnowmanCoolerBlockEntity');
const $FuelType = Java.loadClass('fr.iglee42.cmr.cooler.SnowmanCoolerBlockEntity$FuelType');
const $HeatLevel = Java.loadClass('fr.iglee42.cmr.cooler.SnowmanCoolerBlock$HeatLevel');

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
        /** @type {{ blockEntity: Internal.SnowmanCoolerBlockEntity, serverData: Internal.CompoundTag  }} */
        const { blockEntity, serverData } = accessor;
        if (!serverData) return;

        let isCreative = serverData.getBoolean('isCreative');
        let remainingBurnTime = serverData.getInt('remainingBurnTime');
        let activeFuel = $FuelType.NONE;
        if (isCreative) {
            let heatLevel = blockEntity.getHeatLevelFromBlock();
            if (heatLevel == $HeatLevel.COOLING) {
                activeFuel = $FuelType.NORMAL;
            } else if (heatLevel == $HeatLevel.FREEZING) {
                activeFuel = $FuelType.SPECIAL;
            }
        } else {
            activeFuel = $FuelType.values()[serverData.getInt('activeFuel')];
        }

        if (activeFuel == $FuelType.NONE) return;

        let activeFuelItem = activeFuel == $FuelType.SPECIAL ? Items.ICE : Items.SNOWBALL;
        tooltip['add(snownee.jade.api.ui.IElement)']($IElementHelper.get().smallItem(activeFuelItem));
        if (isCreative) {
            tooltip.append(Text.translatable('jade.infinity'));
        } else {
            let seconds = Math.floor(remainingBurnTime / 20);
            tooltip.append(Text.translatable('jade.tooltip.snowman_cooler', seconds.toFixed(0)).white());
        }
    });

    event.block('r2aot:ember', $Block).tooltip((tooltip, accessor) => {
        const { serverData } = accessor;
        if (!serverData) return;

        let ember = serverData.get('ember');
        let maxEmber = serverData.get('maxEmber');

        if (ember && maxEmber > 0) {
            let emberIcon = $IElementHelper.get().smallItem(Item.of('embers:ember_crystal'));
            tooltip['add(snownee.jade.api.ui.IElement)'](emberIcon);
            tooltip.append(Text.translatable('jade.tooltip.ember', ember, maxEmber).white());
        }
    });
});
