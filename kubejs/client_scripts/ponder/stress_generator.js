Ponder.registry(event => {
    event
        .create('r2aot:stress_generator_core')
        .scene('stress_generator', '应力发电机', 'r2aot:stress_generator', (scene, util) => {
            scene.setSceneOffsetY(-1);
            scene.scaleSceneView(0.8);
            scene.showBasePlate();

            scene.text(85, '这是一个多方块结构');
            scene.idle(10);

            for (let y = 1; y < 6; y++) {
                scene.overlay
                    .showText(15)
                    .text(`第 ${y} 层`)
                    .pointAt([3.5, y + 0.5, 3.5])
                    .attachKeyFrame();

                for (let x = 2; x < 7; x++) {
                    for (let z = 2; z < 7; z++) {
                        scene.world.showSection([x, y, z], 'down');
                    }
                }
                scene.idle(15);
            }
            scene.idle(10);

            scene.rotateCameraY(90);
            scene.overlay.showOutline('red', {}, [6, 2, 5, 6, 4, 3], 50);
            scene.overlay
                .showText(50)
                .text('每个应力输入口最多只能输1024应力\n需要8个输入口输入256RPM才能工作')
                .pointAt([6.5, 3.5, 4.5])
                .attachKeyFrame();
            scene.idle(50);

            scene.rotateCameraY(-90);
            scene.idle(5);

            scene.overlay.showText(30).text('右键结构可直接打开机器GUI').pointAt([2.5, 3.5, 5.5]).attachKeyFrame();

            scene.idle(45);
            scene.text(100, '使用多方块搭建工具来快速放置这个结构');
        });
});
