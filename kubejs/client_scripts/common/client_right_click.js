BlockEvents.rightClicked('r2aot:fluid_sourcelink', event => {
    const { block, player, hand } = event;

    if (hand !== 'MAIN_HAND') return;
    if (block.id !== 'r2aot:fluid_sourcelink') return;

    const stack = player.getItemInHand('MAIN_HAND');

    if (!stack.isEmpty()) {
        stack.getCapability(ForgeCapabilities.FLUID_HANDLER_ITEM).ifPresent(iFluidHandlerItem => {
            player.getCapability(ForgeCapabilities.ITEM_HANDLER).ifPresent(itemHandler => {
                event.cancel();
            });
        });
    }
});
