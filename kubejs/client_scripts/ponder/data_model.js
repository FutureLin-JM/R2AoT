Ponder.registry(event => {
    let sheepDateModel = Item.of('hostilenetworks:data_model', '{data_model:{data:1254,id:"hostilenetworks:sheep"}}');
    event
        .create('r2aot:data_model_base')
        .scene("r2aot:data_model", "数据模型", "r2aot:data_model", (scene, util) => {
            scene.setSceneOffsetY(-1);
            scene.scaleSceneView(0.8);
            scene.showBasePlate();

            scene.text(30, '部分数据模型可以由多方块结构获得\n下面用绵羊数据模型示范').attachKeyFrame();
            scene.idle(10);

            scene.world.showSection([2, 1, 2,  6, 5, 6], Direction.DOWN);
            scene.idle(30);

            scene.world.showSection([4, 6, 4], Direction.DOWN);
            scene.idle(10);

            scene.text(30, '空手右键数据模型基座').attachKeyFrame();
            scene.showControls(30, [4, 6.5, 4], 'down').rightClick();
            scene.idle(10);

            for (let x = 2; x <=6; x++) {
                for (let y = 1; y <=6; y++) {
                    for (let z = 1; z <=6; z++) {
                        scene.world.destroyBlock([x, y, z])
                    }
                }
            }
            scene.world.destroyBlock([4, 6, 4])
            scene.world.createItemEntity([3.5, 5.5, 3.5], Direction.DOWN, sheepDateModel)

            scene.idle(30);
            scene.text(100, '可前往「敌对神经网络」章节获取胶囊来快速放置相关结构');
        })
})