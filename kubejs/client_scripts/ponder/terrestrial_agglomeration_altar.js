Ponder.registry(event => {
    event
        .create('botania:terra_plate')
        .scene('terrestrial_agglomeration_altar', '泰拉凝聚祭坛', 'r2aot:terrestrial_agglomeration_altar', (scene, util) => {
            scene.setSceneOffsetY(-1);
            scene.scaleSceneView(0.8);
            scene.showBasePlate();

            scene.text(90, '这是一个多方块结构');
            scene.idle(10);

            for (let y = 1; y < 6; y++) {
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

            scene.text(45, '合成时有50%概率消耗一格液态魔力').attachKeyFrame();
            scene.overlay.showOutline('red', {}, [4, 1, 4], 30);
            scene.overlay.showOutline('red', {}, [4, 1, 6], 30);
            scene.overlay.showOutline('red', {}, [6, 1, 4], 30);
            scene.overlay.showOutline('red', {}, [6, 1, 6], 30);

            scene.idle(50);
            scene.text(100, '可前往「胶囊」章节获取胶囊来快速放置这个结构'); 
        })
})