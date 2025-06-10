BlockEvents.rightClicked('botania:light_gray_petal_block', event => {
    const { hand, block, player, level, item} = event;
    
    if (hand != "MAIN_HAND" || item.id != 'create:andesite_alloy') return;

    let andesiteCasingMaker = $PatchouliAPI.getMultiblock('r2aot:andesite_casing_maker');
    let validRotation = andesiteCasingMaker.validate(level, block.pos)

    if (validRotation !== null) {
        level.destroyBlock(block.pos, false);

        let facing;
        switch (validRotation.rotation().toString()) {
            case 'rot_90_y_neg': facing = Direction.SOUTH; break;
            case 'identity': facing = Direction.EAST; break;
            case 'rot_90_y_pos': facing = Direction.NORTH; break;
            case 'rot_180_face_xz': facing = Direction.WEST; break;
            default: facing = Direction.NORTH;
        }

        level.setBlockAndUpdate(
            block.pos,
            Block.getBlock('r2aot:andesite_casing_maker_core').defaultBlockState().setValue(BlockProperties.HORIZONTAL_FACING, facing)
        );
        item.count--;
        player.swing();
    }
    else {player.tell(Text.translate('message.r2aot.multiblock.incorrect').aqua())}
})