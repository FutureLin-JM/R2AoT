ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingEvent$LivingTickEvent', event => {
    /**@type {{entity: Internal.LivingEntity}} */
    const { entity } = event;
    let fluid = Fluid.of('r2aot:power_essence').fluid.fluidType;
    if (entity.age % 15 != 0) return;
    if (entity.isInFluidType(fluid)) {
        entity.attack(entity.damageSources().lightningBolt(), 4);
        entity.potionEffects.add('cofh_core:shocked', 100);
    }
});
