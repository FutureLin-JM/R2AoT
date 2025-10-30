Ponder.registry(event => {
    event
        .create('r2aot:modular_runic_altar_core')
        .scene('modular_runic_altar', '模块化符文祭坛', 'r2aot:modular_runic_altar', (scene, util) => {
            scene.setSceneOffsetY(-1);
            scene.scaleSceneView(0.8);
            scene.showBasePlate();

            scene.text(110, '这是一个多方块结构');
            scene.idle(10);

            for (let y = 1; y < 7; y++) {
                scene.overlay
                    .showText(15)
                    .text(`第 ${y} 层`)
                    .pointAt([3.5, y + 0.5, 3.5])
                    .attachKeyFrame();

                for (let x = 2; x < 9; x++) {
                    for (let z = 2; z < 9; z++) {
                        scene.world.showSection([x, y, z], 'down');
                    }
                }
                scene.idle(15);
            }
            scene.idle(20);

            scene.text(45, '第一层磨制活石可以替换成物品输入/输出仓').attachKeyFrame();
            scene.overlay.showOutline('red', {}, [5, 1, 3], 30);
            scene.overlay.showOutline('red', {}, [5, 1, 7], 30);
            scene.overlay.showOutline('red', {}, [3, 1, 5], 30);
            scene.overlay.showOutline('red', {}, [7, 1, 5], 30);
            scene.idle(5);

            scene.world.setBlocks([5, 1, 3], 'r2aot:item_input');
            scene.world.setBlocks([5, 1, 7], 'r2aot:item_output');

            scene.idle(45);
            scene.text(100, '使用多方块搭建工具来快速放置这个结构');
        });
});
