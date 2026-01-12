// priority: 50

/**
 *
 * @param {Internal.LivingEntity} entity
 * @returns {Internal.BlockContainerJS}
 */
function getRayTraceBlock(entity) {
    const block = entity.rayTrace().block;
    if (block?.blockState?.fluidState?.fluidType == 'minecraft:empty') {
        return block;
    }
    return null;
}
