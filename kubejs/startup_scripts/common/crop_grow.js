ForgeEvents.onEvent('net.minecraftforge.event.level.BlockEvent$CropGrowEvent$Pre', event => {
    const { level, pos, state } = event;
    const block = new $BlockContainer(level, pos);
    if (block.hasTag('mysticalagriculture:crops')) {
        event.setResult('deny');
    }
});
