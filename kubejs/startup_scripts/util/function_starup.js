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

/**
 * 获取彩虹色，顺序循环，每10tick切换一次颜色
 * @returns {number}
 */
function bifrostColor() {
    const colorSequence = [
        0xff0000, 0xff5500, 0xffa900, 0xfeff00, 0xa9ff00, 0x55ff00, 0x00ff00, 0x00ff55, 0x00ffa9, 0x00feff, 0x00a9ff,
        0x0055ff, 0x0000ff, 0x5500ff, 0xa900ff, 0xff00fe, 0xff00a9, 0xff0055,
    ];

    const colorIndex = Math.floor((Client.level.time / 10) % colorSequence.length);
    return colorSequence[colorIndex];
}
