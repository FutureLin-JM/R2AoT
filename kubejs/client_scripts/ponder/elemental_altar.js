Ponder.registry(event => {
    event
        .create('r2aot:elemental_altar_core')
        .scene("elemental_altar", "元素祭坛", "r2aot:elemental_altar", (scene, util) => {
            scene.setSceneOffsetY(-1);
            scene.scaleSceneView(0.8);
            scene.showBasePlate();

            scene.text(50, '这是一个多方块结构');
            scene.idle(10);

            for (let y = 1; y < 3; y++) {
                scene.overlay.showText(20)
                    .text(`第 ${y} 层`)
                    .pointAt([3.5, y + 0.5, 3.5])
                    .attachKeyFrame();
                
                for (let x = 1; x < 8; x++) {
                    for (let z = 1; z < 8; z++) {
                        scene.world.showSection([x, y, z], 'down');
                    }
                }
                scene.idle(20); 
            };

            scene.idle(10);
            scene.text(30, '使用元素符文对基础机器框架右键').attachKeyFrame();
            scene.overlay.showOutline('red', {}, [4, 2, 4], 30);
            scene.showControls(20, [4.5, 2.5, 4.5], 'down').rightClick().withItem('r2aot:rune_elemental');
            scene.idle(5);
            scene.world.setBlocks([4, 2, 4], 'r2aot:elemental_altar_core');

            scene.idle(40);
            scene.text(30, '物品基座：\n右键将物品放入\n空手Shift+右键取出').attachKeyFrame();
            scene.overlay.showOutline('red', {}, [2, 2, 2], 30);
            scene.overlay.showOutline('red', {}, [1, 2, 4], 30);
            scene.overlay.showOutline('red', {}, [2, 2, 6], 30);
            scene.overlay.showOutline('red', {}, [4, 2, 7], 30);
            scene.overlay.showOutline('red', {}, [6, 2, 6], 30);
            scene.overlay.showOutline('red', {}, [7, 2, 4], 30);
            scene.overlay.showOutline('red', {}, [6, 2, 2], 30);
            scene.overlay.showOutline('red', {}, [4, 2, 1], 30);

            scene.idle(40);
            scene.text(100, '可前往「胶囊」章节获取胶囊来快速放置这个结构');
        })
})