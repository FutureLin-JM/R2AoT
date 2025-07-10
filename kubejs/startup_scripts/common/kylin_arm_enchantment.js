ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerEvent$HarvestCheck', (event) => {
    const { entity } = event;
    
    const enchantmentLevels = $EnchantmentHelper.getEnchantmentLevel('r2aot:kylin_arm', entity);

    if (enchantmentLevels > 0) {
        event.setCanHarvest(true);
    }
});

ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerEvent$BreakSpeed', (event) => {
    const { entity, originalSpeed } = event;

    const enchantmentLevels = $EnchantmentHelper.getEnchantmentLevel('r2aot:kylin_arm', entity);

    const hasKylin = enchantmentLevels > 0;
    const hasQuantum = !hasKylin && entity.getItemBySlot('chest') == 'advanced_ae:quantum_chestplate';

    if (!hasKylin && !hasQuantum) return;

    const isInWater = entity.isEyeInFluidType(Fluid.of('water').getFluid().getFluidType());
    const isInAir = !entity.onGround();

    let baseSpeed = originalSpeed * (hasKylin ? 10 : 1);
    let multiplier = 1;

    if (isInWater || isInAir) multiplier *= 5;
    if (isInWater && isInAir) multiplier *= 5;

    event.setNewSpeed(baseSpeed * multiplier);
});