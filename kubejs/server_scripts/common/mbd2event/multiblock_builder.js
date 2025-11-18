const $MBD2Network = Java.loadClass('com.lowdragmc.mbd2.common.network.MBD2Network');
const $SPatternErrorPosPacket = Java.loadClass('com.lowdragmc.mbd2.common.network.packets.SPatternErrorPosPacket');
const $MultiblockState = Java.loadClass('com.lowdragmc.mbd2.api.pattern.MultiblockState');

BlockEvents.rightClicked(event => {
    const { player, level, hand, item, block } = event;

    if (hand !== 'MAIN_HAND' || item.id !== 'r2aot:mbd_builder') return;

    let controller = $IMultiController.ofController(level, block.pos).orElse(null);
    if (controller == null) return;

    if (player.isCrouching()) {
        if (controller.isFormed()) {
            player.tell(Text.translate('item.mbd2.mbd_gadgets.multiblock_debugger.is_formed'));
        } // 源码此处还包含一部分关于需催化剂的结构信息显示，此处省略
        else {
            let error = controller.getMultiblockState().error;
            if (error != null) {
                console.log('error info');
                $MBD2Network.NETWORK.sendToPlayer(new $SPatternErrorPosPacket(error.getPos()), player);
                player.tell(
                    Text.translate(
                        'item.mbd2.mbd_gadgets.multiblock_debugger.failure.error.info',
                        error.getErrorInfo()
                    )
                );
            } else {
                player.tell(Text.translate('item.mbd2.mbd_gadgets.multiblock_debugger.failure.no_error'));
            }
        }
    } else {
        controller.getPattern().autoBuild(player, new $MultiblockState(level, block.pos));
    }
});
