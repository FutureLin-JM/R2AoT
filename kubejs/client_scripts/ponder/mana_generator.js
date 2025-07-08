Ponder.registry(event => {
    event
        .create('r2aot:mana_generator_core')
        .scene("mana_generator", "魔力制造机", "r2aot:mana_generator", (scene, util) => {
            scene.setSceneOffsetY(-1);
            scene.scaleSceneView(0.8);
            scene.showBasePlate();

            scene.text(80, '这是一个多方块结构');
            scene.idle(10);

            for (let y = 1; y < 5; y++) {
                scene.overlay.showText(15)
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
            scene.idle(20);

            scene.text(55, '第二层活石可以替换成魔力输出仓').attachKeyFrame();

            scene.world.hideSection([2, 3, 2,  6, 4, 6], Direction.UP);
            scene.idle(10)

            scene.overlay.showOutline("red", {}, [2, 2, 3], 30);
            scene.overlay.showOutline("red", {}, [2, 2, 5], 30);
            scene.overlay.showOutline("red", {}, [3, 2, 2], 30);
            scene.overlay.showOutline("red", {}, [5, 2, 2], 30);
            scene.overlay.showOutline("red", {}, [6, 2, 3], 30);
            scene.overlay.showOutline("red", {}, [6, 2, 5], 30);
            scene.overlay.showOutline("red", {}, [5, 2, 6], 30);
            scene.overlay.showOutline("red", {}, [3, 2, 6], 30);
            scene.idle(30)

            scene.world.showSection([2, 3, 2,  6, 4, 6], Direction.DOWN);
            scene.idle(30);
            scene.text(100, '可前往「胶囊」章节获取胶囊来快速放置这个结构');      
        })
})