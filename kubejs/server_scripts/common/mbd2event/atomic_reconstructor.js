// BlockEvents.rightClicked('r2aot:atomic_reconstructor', event => {
//     const { hand, block, item, player } = event;
    
//     if (hand !== 'MAIN_HAND') return;
    
//     const itemCap = block.entity.getCapability(ForgeCapabilities.ITEM_HANDLER).resolve().get();

//     if (item.isEmpty() && player.isCrouching()) {
//         const stack = itemCap.getStackInSlot(0);
//         player.give(stack.copy());
//         itemCap.extractItem(0, stack.getCount(), false);
//         player.swing();
//         event.cancel();
//     }
// });

BlockEvents.rightClicked('r2aot:atomic_reconstructor', event => {
    setItemExtract(event)
})