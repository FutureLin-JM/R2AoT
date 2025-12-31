// 花肥
BlockEvents.rightClicked('minecraft:grass_block', event => {
    const { block, hand, player, item } = event;
    if (hand != 'MAIN_HAND') return;
    if ((player.isCrouching() && event.item.id == 'minecraft:air') || player.isFake()) {
        if (Math.random() < 0.75) {
            const itemEntity = block.createEntity('item');
            itemEntity.item = 'botania:fertilizer';
            itemEntity.x = block.x + 0.5;
            itemEntity.y = block.y + 1;
            itemEntity.z = block.z + 0.5;
            itemEntity.spawn();
            event.cancel();
        }
    }
});

// 圆石制造机
BlockEvents.rightClicked('r2aot:double_compressed_cobblestone', event => {
    const { hand, block, player, level, item } = event;

    if (hand != 'MAIN_HAND' || item.id != 'r2aot:petal_essence_bucket') return;

    const genMultiblock = $PatchouliAPI.getMultiblock('r2aot:fisrt_cobble_gen');
    const validRotation = genMultiblock.validate(level, block.pos);

    if (validRotation !== null) {
        genMultiblock.simulate(level, block.pos, validRotation, false).second.forEach(result => {
            if (result.stateMatcher == $PatchouliAPI.anyMatcher()) return;
            level.destroyBlock(result.worldPosition, false);
        });
        block.popItemFromFace('r2aot:cobble_gen_tier_1', 'up');
        item.count--;
        player.give('minecraft:bucket');
        player.swing();
    } else {
        player.statusMessage = Text.translate('message.r2aot.multiblock.incorrect').red();
        event.cancel();
    }
});

// 泰拉凝聚板检查
BlockEvents.rightClicked('botania:terra_plate', event => {
    const { hand, block, item, player } = event;

    if (hand !== 'MAIN_HAND') return;

    const altarMultiblock = $PatchouliAPI.getMultiblock('r2aot:terrestrial_agglomeration_altar');

    if (!altarMultiblock.validate(block.level, block.pos.below(), 'none')) {
        player.statusMessage = Text.translate('message.r2aot.multiblock.incorrect').red();
        event.cancel();
    }
});

// 魔符：闪电
BlockEvents.rightClicked('ars_nouveau:scribes_table', event => {
    const { hand, block, item, player, level } = event;
    const now = Date.now();
    const MAX_INTERVAL = 5000;

    if (hand != 'MAIN_HAND' || item.id != 'minecraft:lightning_rod') return;

    const lastClickTime = player.persistentData.getLong('glyph_last_click_time') || 0;
    const timeSinceLastClick = now - lastClickTime;

    if (timeSinceLastClick > MAX_INTERVAL) {
        player.persistentData.putInt('lightning_rod_clicks', 1);
        player.statusMessage = Text.translate('message.r2aot.lightning_rod_clicks', '1');
    } else {
        let clickCount = player.persistentData.contains('lightning_rod_clicks')
            ? player.persistentData.getInt('lightning_rod_clicks')
            : 0;
        clickCount++;
        player.persistentData.putInt('lightning_rod_clicks', clickCount);
        player.statusMessage = Text.translate('message.r2aot.lightning_rod_clicks', clickCount.toString());
    }

    player.persistentData.putLong('glyph_last_click_time', now);
    player.swing();

    if (player.persistentData.getInt('lightning_rod_clicks') >= 10) {
        player.persistentData.putInt('lightning_rod_clicks', 0);
        const lightning = level.createEntity('lightning_bolt');
        lightning.setPos(block.pos.x, block.pos.y, block.pos.z);
        lightning.spawn();

        level.destroyBlock(block.pos, false);
        player.give('ars_nouveau:glyph_lightning');
        item.count--;
    }

    event.cancel();
});

BlockEvents.rightClicked(event => {
    const { block, player, item } = event;

    if (block.hasTag('forge:farmland') && item.hasTag('mysticalagriculture:seeds')) {
        player.statusMessage = Text.translate('message.r2aot.prevent');
        event.cancel();
    }
});

// 时间兑换劵
ItemEvents.rightClicked('r2aot:time_voucher', event => {
    const { hand, item, player } = event;
    if (hand != 'MAIN_HAND') return;

    // 随机添加1到5小时的整小时时间
    const randomHours = Math.floor(Math.random() * 5) + 1;
    const randomSeconds = randomHours * 3600;

    if (addTimeToTIAB(player, randomSeconds)) {
        item.count--;
        player.swing();
    }
});

buddyCardBaseOre.forEach(ore => {
    ItemEvents.rightClicked(`r2aot:buddycard_ore_${ore}`, event => {
        const { item, player } = event;

        if (item.hasNBT() && item.getNbt().contains('last_use_time')) {
            let lastUseTime = item.getNbt().getLong('last_use_time');
            let remainingCooldown = Math.max(0, 600000 - (Date.now() - lastUseTime));
            if (remainingCooldown > 0) {
                player.statusMessage = Text.translate(
                    'message.r2aot.buddycard_ore.cooldown',
                    Text.gold((remainingCooldown / 1000).toFixed(1))
                );
                return;
            }
        }
        /**
         * 根据权重随机选择一个索引值
         * @returns {number} 随机选择的索引值（1-4）
         */
        const getWeightedRandom = () => {
            const weights = [0.5, 0.25, 0.15, 0.1];
            let randomValue = Math.random();

            for (let i = 0; i < weights.length; i++) {
                if (randomValue < weights[i]) {
                    return i + 1;
                }
                randomValue -= weights[i];
            }
            return 1;
        };

        const randomIndex = getWeightedRandom();
        const oreBlock = `allthecompressed:${ore}_block_${randomIndex}x`;

        player.give(oreBlock);
        item.setNbt({ last_use_time: Date.now() });
        player.swing();
    });
});

// From Mierno
// BlockEvents.rightClicked('white_concrete', (event) => {
//     const { hand, block, player, level } = event;

//     console.log('f右键触发');
//     console.log(`f使用的手: ${hand}`);
//     if (hand != 'MAIN_HAND') {
//         console.log('已返回');
//         return;
//     };

//     let dreamTree = $PatchouliAPI.getMultiblock('r2aot:first_tree');

//     if (dreamTree.validate(level, block.pos, 'none')) {
//         dreamTree.simulate(level, block.pos, 'none', false).second.forEach((result) => {
//             if (result.stateMatcher == $PatchouliAPI.anyMatcher()) return;

//             level.destroyBlock(result.worldPosition, false);
//         });
//         block.popItemFromFace('oak_sapling', 'up');
//         player.swing();
//     }
// });
