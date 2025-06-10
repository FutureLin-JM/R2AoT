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
        let dataModel = Item.of('hostilenetworks:data_model', `{data_model:{data:1254,id:"hostilenetworks:${biology}"}}`)
        let modelMultiblock = $PatchouliAPI.getMultiblock(`r2aot:${biology}_model`);
        let validRotation =modelMultiblock.validate(level, block.pos)
    
        if (validRotation !== null) {
            modelMultiblock.simulate(level, block.pos, validRotation, false).second.forEach((result) => {
                if (result.stateMatcher == $PatchouliAPI.anyMatcher()) return;
                level.destroyBlock(result.worldPosition, false);
            });
            block.popItemFromFace(dataModel, 'down');
            player.swing();
        }
    })
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