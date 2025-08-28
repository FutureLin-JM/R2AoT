const OFFSETS = [
    [-1, 0, -1],
    [-1, 0, 0],
    [-1, 0, 1],
    [1, 0, -1],
    [0, 0, -1],
    [0, 0, 1],
    [1, 0, 1],
    [1, 0, 0],
];
const CENTER = [3, 1, 3];
Ponder.registry(event => {
    event
        .create('r2aot:pedestal_ars')
        .scene('pedestal_ars', '新生魔艺基座转化', 'r2aot:pedestal_ars', (scene, util) => {
            scene.setSceneOffsetY(-1);
            scene.scaleSceneView(0.8);
            scene.showBasePlate();

            scene.text(15, '将魔源宝石放入物品基座中');
            scene.world.showSection([3, 1, 3], 'down');
            scene.idle(5);

            scene.showControls(10, [3.5, 2, 3.5], 'down').rightClick().withItem('ars_nouveau:source_gem');
            scene.idle(5);

            scene.world.modifyBlockEntityNBT([3, 1, 3], nbt => {
                nbt.trait.item_slot.storage = {
                    Items: [{ Count: 1, id: 'ars_nouveau:source_gem' }],
                };
            });
            scene.idle(20);

            scene.text(15, '使用任意扳手右键物品基座激活').attachKeyFrame();
            scene.showControls(10, [3.5, 2, 3.5], 'left').rightClick().withItem('create:wrench');
            scene.idle(5);

            scene.world.setBlocks([3, 1, 3], 'r2aot:pedestal_ars');
            scene.world.modifyBlockEntityNBT([3, 1, 3], nbt => {
                nbt.trait.item_slot.storage = {
                    Items: [{ Count: 1, id: 'ars_nouveau:source_gem' }],
                };
            });
            scene.idle(20);

            scene.text(25, '在3x3的范围放置石英块').attachKeyFrame();
            OFFSETS.forEach(offset => {
                const targetPos = [
                    CENTER[0] + offset[0],
                    CENTER[1] + offset[1],
                    CENTER[2] + offset[2]
                ];
                scene.overlay.showOutline('red', {}, targetPos, 15);
            });
            scene.idle(15);

            OFFSETS.forEach(offset => {
                const targetPos = [
                    CENTER[0] + offset[0],
                    CENTER[1] + offset[1],
                    CENTER[2] + offset[2]
                ];
                scene.world.showSection(targetPos, 'down');
            });
            scene.idle(25);

            scene.text(40, '类似白雏菊，石英块会被转化为魔源石').attachKeyFrame();
            OFFSETS.forEach(offset => {
                const targetPos = [
                    CENTER[0] + offset[0],
                    CENTER[1] + offset[1],
                    CENTER[2] + offset[2]
                ];
                scene.world.setBlocks(targetPos, 'ars_nouveau:sourcestone');
            });

            scene.idle(45);
        });
});

Ponder.registry(event => {
    event
        .create('r2aot:pedestal_botania')
        .scene('pedestal_botania', '植物魔法基座转化', 'r2aot:pedestal_botania', (scene, util) => {
            scene.setSceneOffsetY(-1);
            scene.scaleSceneView(0.8);
            scene.showBasePlate();

            scene.text(15, '将彩虹桥法杖放入物品基座中');
            scene.world.showSection([3, 1, 3], 'down');
            scene.idle(5);

            scene.showControls(10, [3.5, 2, 3.5], 'down').rightClick().withItem('botania:rainbow_rod');
            scene.idle(5);

            scene.world.modifyBlockEntityNBT([3, 1, 3], nbt => {
                nbt.trait.item_slot.storage = {
                    Items: [{ Count: 1, id: 'botania:rainbow_rod' }],
                };
            });
            scene.idle(20);

            scene.text(15, '使用任意扳手右键物品基座激活').attachKeyFrame();
            scene.showControls(10, [3.5, 2, 3.5], 'left').rightClick().withItem('create:wrench');
            scene.idle(5);

            scene.world.setBlocks([3, 1, 3], 'r2aot:pedestal_botania');
            scene.world.modifyBlockEntityNBT([3, 1, 3], nbt => {
                nbt.trait.item_slot.storage = {
                    Items: [{ Count: 1, id: 'botania:rainbow_rod' }],
                };
            });
            scene.idle(20);

            scene.text(25, '在3x3的范围放置活石').attachKeyFrame();
            OFFSETS.forEach(offset => {
                const targetPos = [
                    CENTER[0] + offset[0],
                    CENTER[1] + offset[1],
                    CENTER[2] + offset[2]
                ];
                scene.overlay.showOutline('red', {}, targetPos, 15);
            });
            scene.idle(15);

            OFFSETS.forEach(offset => {
                const targetPos = [
                    CENTER[0] + offset[0],
                    CENTER[1] + offset[1],
                    CENTER[2] + offset[2]
                ];
                scene.world.showSection(targetPos, 'down');
            });
            scene.idle(25);

            scene.text(40, '类似白雏菊，活石会被转化为微光石').attachKeyFrame();
            OFFSETS.forEach(offset => {
                const targetPos = [
                    CENTER[0] + offset[0],
                    CENTER[1] + offset[1],
                    CENTER[2] + offset[2]
                ];
                scene.world.setBlocks(targetPos, 'botania:shimmerrock');
            });

            scene.idle(45);
        });
});
