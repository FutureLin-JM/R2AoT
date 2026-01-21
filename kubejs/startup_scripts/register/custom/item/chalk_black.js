StartupEvents.registry('item', event => {
    event
        .create('r2aot:chalk_black', 'basic')
        .maxStackSize(1)
        .maxDamage(10)
        .rarity('rare')
        .useAnimation('brush')
        .useDuration(() => 1)
        .use((level, player, hand) => {
            const block = getRayTraceBlock(player);
            return block !== null && block.id !== 'r2aot:rune_black';
        })
        .finishUsing((itemState, level, entity) => {
            const block = getRayTraceBlock(entity);
            if (!block) return itemState;

            const targetPos = block.pos.above();
            const runeBlockState = Block.getBlock('r2aot:rune_black')
                .defaultBlockState()
                .setValue(BlockProperties.HORIZONTAL_FACING, entity.getHorizontalFacing().opposite);
            level.setBlockAndUpdate(targetPos, runeBlockState);

            itemState.hurtAndBreak(1, entity, e => {});
            return itemState;
        });
});
