BlockEvents.rightClicked('minecraft:grass_block', (event) => {
    const { block, hand, player, item } = event;
    if (hand != "MAIN_HAND") return;
    if (player.isCrouching() && event.item.id == 'minecraft:air' || player.isFake()) {
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

BlockEvents.rightClicked('r2aot:data_model_base', event => {
    const { hand, block, player, level, item } = event;
    const biologyTypes = ['sheep', 'vindicator', 'blaze', 'chicken', 'cow', 'creeper', 'enderman', 'ghast', 'skeleton', 'slime', 'spider'];

    if (hand != 'MAIN_HAND' || !item.isEmpty()) return;

    biologyTypes.forEach((biology) => {
        const dataModel = Item.of('hostilenetworks:data_model', `{data_model:{data:1254,id:"hostilenetworks:${biology}"}}`)
        const modelMultiblock = $PatchouliAPI.getMultiblock(`r2aot:${biology}_model`);
        const validRotation =modelMultiblock.validate(level, block.pos)
    
        if (validRotation !== null) {
            modelMultiblock.simulate(level, block.pos, validRotation, false).second.forEach((result) => {
                if (result.stateMatcher == $PatchouliAPI.anyMatcher()) return;
                level.destroyBlock(result.worldPosition, false);
            });
            block.popItemFromFace(dataModel, 'down');
            player.swing();
        }
        else {player.tell(Text.translate('message.r2aot.multiblock.incorrect').aqua())}
    })
});

BlockEvents.rightClicked('r2aot:double_compressed_cobblestone', event => {
    const { hand, block, player, level, item } = event;

    if (hand != 'MAIN_HAND'|| item.id != 'r2aot:petal_essence_bucket') return;

    const genMultiblock = $PatchouliAPI.getMultiblock('r2aot:fisrt_cobble_gen');
    const validRotation = genMultiblock.validate(level, block.pos)

    if (validRotation !== null) {
        genMultiblock.simulate(level, block.pos, validRotation, false).second.forEach((result) => {
            if (result.stateMatcher == $PatchouliAPI.anyMatcher()) return;
            level.destroyBlock(result.worldPosition, false);
        });
        block.popItemFromFace('r2aot:cobble_gen_tier_1', 'up');
        item.count--;
        player.give('minecraft:bucket');
        player.swing();
    }
    else {
        player.tell(Text.translate('message.r2aot.multiblock.incorrect').aqua());
        event.cancel();
    }
});

BlockEvents.rightClicked('botania:terra_plate', event => {
    const { hand, block, item, player } = event;

    if (hand !== 'MAIN_HAND') return;

    const altarMultiblock = $PatchouliAPI.getMultiblock('r2aot:terrestrial_agglomeration_altar');
    
    if (!altarMultiblock.validate(block.level, block.pos.below(), 'none')) {
        player.tell(Text.translate('message.r2aot.multiblock.incorrect').aqua());
        event.cancel();
    }
});

ItemEvents.rightClicked('r2aot:time_voucher', event => {
    const { hand, item, player } = event;
    if (hand != 'MAIN_HAND') return;

    if (hasTimeInABottle(player)) {
        player.runCommand('tiab addTime 7200') // tiab指令在 /reload 后会失效，尝试使用API后无果放弃
        item.count--;
        player.swing();
    }
    else {
        player.tell(Text.translatable('message.r2aot.tiab'));
    }
});

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