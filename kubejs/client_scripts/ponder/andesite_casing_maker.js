Ponder.registry(event => {
    event
        .create('r2aot:andesite_casing_maker_core')
        .scene("andesite_casing_maker", "安山机壳制造机", "r2aot:andesite_casing_maker", (scene, util) => {
            scene.setSceneOffsetY(-1);
            scene.scaleSceneView(0.8);
            scene.showBasePlate();

            scene.text(120, '这是一个多方块结构');
            scene.idle(10);

            for (let y = 1; y < 4; y++) {
                scene.overlay.showText(20)
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
            scene.text(20, '使用安山合金对淡灰色花瓣块右键').attachKeyFrame();
            scene.overlay.showOutline('red', {}, [2, 2, 3], 20)
            scene.showControls(20, [2, 2, 3], "left").rightClick().withItem("create:andesite_alloy");
            scene.idle(5);
            scene.world.setBlocks([2, 2, 3], "r2aot:andesite_casing_maker_core");
            scene.world.modifyBlock([2, 2, 3], (state) => state.with("facing", "west"), false);

            scene.idle(30);
            scene.text(100, '可前往「胶囊」章节获取胶囊来快速放置这个结构');
        })
})