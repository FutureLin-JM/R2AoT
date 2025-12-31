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

BlockEvents.rightClicked(event => {
    const { block, player, item } = event;

    if (block.hasTag('forge:farmland') && item.hasTag('mysticalagriculture:seeds')) {
        player.statusMessage = Text.translate('message.r2aot.prevent');
        event.cancel();
    }
});

const rightClickedExtract = [
    'r2aot:elemental_altar_core',
    'r2aot:atomic_reconstructor',
    'r2aot:pedestal',
    'r2aot:pedestal_botania',
    'r2aot:pedestal_ars',
];
const rightClickedInsert = ['r2aot:pedestal', 'r2aot:pedestal_botania', 'r2aot:pedestal_ars'];

BlockEvents.rightClicked(event => {
    const { hand, block, item, player } = event;
    if (hand !== 'MAIN_HAND') return;
    if (!rightClickedExtract.includes(block.id) && !rightClickedInsert.includes(block.id)) return;
    const itemCap = block.entity.getCapability(ForgeCapabilities.ITEM_HANDLER).resolve().get();
    const stack = itemCap.getStackInSlot(0);

    if (rightClickedExtract.includes(block.id)) {
        if (item.isEmpty() && player.isCrouching()) {
            if (!stack.isEmpty()) {
                event.cancel();
            }
        }
    }

    if (rightClickedInsert.includes(block.id)) {
        if (!item.isEmpty() && stack.isEmpty() && !player.isCrouching()) {
            event.cancel();
        }
    }
});
