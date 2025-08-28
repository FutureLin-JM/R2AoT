const fluidConversionRate = {
    'minecraft:lava': 0.5,
    'r2aot:fluidedmana': 1,
};

MBDMachineEvents.onTick('r2aot:fluid_sourcelink', event => {
    const { machine } = event.getEvent();
    const { level, pos } = machine;

    if (level.getTime() % 20 !== 0) return;

    const machineCap = machine.getCapability(ForgeCapabilities.FLUID_HANDLER).resolve().get();
    const machineTank = machineCap.getFluidInTank(0);

    if (!machineTank.isEmpty()) {
        const tankFluidType = machineTank.getFluid().arch$registryName().toString();
        const conversionRate = fluidConversionRate[tankFluidType];

        const sourceProviders = $SourceUtil.canGiveSource(pos, level, 6);
        if (sourceProviders.length === 0) return;

        let closestProvider = null;
        let minDistance = Infinity;

        for (const provider of sourceProviders) {
            const distance = pos.distManhattan(provider.getCurrentPos());
            if (distance < minDistance) {
                minDistance = distance;
                closestProvider = provider;
            }
        }

        const maxSourceToAdd = closestProvider.getSource().getMaxSource() - closestProvider.getSource().getSource();
        const maxFluidToDrain = Math.floor(maxSourceToAdd / conversionRate);

        const transferFluidAmount = Math.min(1000, maxFluidToDrain);
        if (transferFluidAmount <= 0) return;

        const sourceToAdd = transferFluidAmount * conversionRate;

        machineCap.drain(Fluid.of(tankFluidType, transferFluidAmount), 'execute');
        closestProvider.getSource().addSource(sourceToAdd);

        const projectile = new $EntityFollowProjectile(
            level, 
            pos, 
            closestProvider.getCurrentPos(),
            255, 25, 180
        );
        level.addFreshEntity(projectile)
    }
});

BlockEvents.rightClicked('r2aot:fluid_sourcelink', event => {
    const { block, player, hand } = event;

    if (hand !== 'MAIN_HAND') return;

    const stack = player.getItemInHand('MAIN_HAND');
    const fluidCap = block.entity.getCapability(ForgeCapabilities.FLUID_HANDLER).resolve().get();

    const result = FluidUtil.interactWithFluidHandler(player, hand, fluidCap);

    if (result) {
        event.cancel();
    }
});
