/*
 * 源码参考FunctionalStorage
 * https://github.com/Buuz135/FunctionalStorage/blob/a80aec8f9a9fc9c8a456bfdd93a1621a955fd331/src/main/java/com/buuz135/functionalstorage/block/tile/FluidDrawerTile.java#L220
 */
BlockEvents.rightClicked('r2aot:fluid_input', event => {
    const { block, player, hand } = event;

    if (hand !== 'MAIN_HAND') return;

    const stack = player.getItemInHand('MAIN_HAND')
    const fluidCap = block.entity.getCapability(ForgeCapabilities.FLUID_HANDLER).resolve().get();
        
    if (!stack.isEmpty()) {
        stack.getCapability(ForgeCapabilities.FLUID_HANDLER_ITEM).ifPresent(iFluidHandlerItem => {
            player.getCapability(ForgeCapabilities.ITEM_HANDLER).ifPresent(itemHandler => {
                // const amount = player.isCrouching() ? 9000 : 1000
                
                const result = FluidUtil.tryEmptyContainerAndStow(
                    stack,
                    fluidCap,
                    itemHandler,
                    2147483647,
                    player,
                    true
                )
                if (result.isSuccess()) {
                    player.setHeldItem('MAIN_HAND', result.getResult());
                    event.cancel();
                }
            })
        })
    }
});

['r2aot:fluid_input', 'r2aot:fluid_output'].forEach(manchine => {
    BlockEvents.leftClicked(manchine, event => {
        const { block, player } = event;

        // 防抖逻辑：确保两次点击间隔至少为250毫秒
        const now = Date.now();
        const lastClickTime = player.persistentData.contains('fluidTankLastClick') ? player.persistentData.getLong('fluidTankLastClick') : 0;
        if (now - lastClickTime < 250) {
            return;
        }
        player.persistentData.putLong('fluidTankLastClick', now);

        const stack = player.getItemInHand('MAIN_HAND')
        const fluidCap = block.entity.getCapability(ForgeCapabilities.FLUID_HANDLER).resolve().get();
        
        if (!stack.isEmpty()) {
            stack.getCapability(ForgeCapabilities.FLUID_HANDLER_ITEM).ifPresent(iFluidHandlerItem => {
                player.getCapability(ForgeCapabilities.ITEM_HANDLER).ifPresent(itemHandler => {
                    // const amount = player.isCrouching() ? 9000 : 1000
                    
                    const result = FluidUtil.tryFillContainerAndStow(
                        stack,
                        fluidCap,
                        itemHandler,
                        2147483647,
                        player,
                        true
                    )

                    if (result.isSuccess()) {
                        player.setHeldItem('MAIN_HAND', result.getResult());
                        event.cancel();
                    }
                })
            })
        }
    });  
})