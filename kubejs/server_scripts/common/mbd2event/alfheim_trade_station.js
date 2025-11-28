MBDMachineEvents.onTick('r2aot:alfheim_trade_station', event => {
    const { machine } = event.getEvent();
    const { level, pos, customData, recipeLogic } = machine;
    const STOPTIME = 10;

    if (level.getTime() % 20 !== 0) return;

    const stopTime = customData.getInt('stop_time');
    const itemCap = machine.getCapability(ForgeCapabilities.ITEM_HANDLER).resolve().get();
    const result = itemCap.allItems.some(item => item.id == 'minecraft:bread');

    if (result) {
        customData.putInt('stop_time', STOPTIME);
        recipeLogic.setStatus('suspend');
        let random = Math.floor(Math.random() * 3) + 1;
        level.server.runCommandSilent(
            `particle minecraft:angry_villager ${pos.x} ${pos.y + 0.5} ${pos.z} 0.5 0 0.5 0.1 ${random}`
        );
        return;
    }

    if (stopTime > 0) {
        customData.putInt('stop_time', stopTime - 1);
        return;
    } else if (stopTime == 0) {
        customData.remove('stop_time');
    }

    if (recipeLogic.isSuspend() && stopTime <= 0) {
        recipeLogic.setStatus('idle');
        return;
    }
});
