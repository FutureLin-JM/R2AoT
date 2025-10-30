Ponder.registry(event => {
    event
        .create('r2aot:cobble_gen_tier_1')
        .scene('cobble_gen', '圆石制造机', 'r2aot:cobble_gen_tier_1', (scene, util) => {
            scene.setSceneOffsetY(-1);
            scene.scaleSceneView(0.8);
            scene.showBasePlate();

            scene.text(120, '首先，需要搭建一个结构');
            scene.idle(10);

            for (let y = 1; y < 4; y++) {
                scene.overlay
                    .showText(20)
                    .text(`第 ${y} 层`)
                    .pointAt([3.5, y + 0.5, 3.5])
                    .attachKeyFrame();

                for (let x = 2; x < 5; x++) {
                    for (let z = 2; z < 5; z++) {
                        scene.world.showSection([x, y, z], 'down');
                        scene.idle(3);
                    }
                }
                scene.idle(10);
            }

            scene.idle(10);
            scene.text(35, '使手持花瓣原液 桶对二重压缩圆石右键').attachKeyFrame();
            scene.overlay.showOutline('red', {}, [3, 2, 3], 20);
            scene.idle(10);

            scene.showControls(20, [3, 2, 3], 'left').rightClick().withItem('r2aot:petal_essence_bucket');
            scene.idle(5);

            for (let y = 1; y < 4; y++) {
                for (let x = 2; x < 5; x++) {
                    for (let z = 2; z < 5; z++) {
                        scene.world.destroyBlock([x, y, z]);
                    }
                }
            }
            scene.world.createItemEntity([3.5, 2.5, 3.5], Direction.DOWN, 'r2aot:cobble_gen_tier_1');

            scene.idle(35);
            scene.text(100, '使用多方块搭建工具来快速放置这个结构');
        });
});
