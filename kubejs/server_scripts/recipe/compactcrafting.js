ServerEvents.recipes(event => {
    const { compactcrafting } = event.recipes;

    const dataModel = type => {
        return Item.of(
            'hostilenetworks:data_model',
            `{data_model:{data:1254,id:"hostilenetworks:${type}"}}`
        ).strongNBT();
    };

    compactcrafting
        .miniaturization(dataModel('sheep'), 'hostilenetworks:blank_data_model')
        .setLayers([
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['B', 'B', 'B', 'B', 'B'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['C', 'A', 'B', 'A', 'C'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['B', 'B', 'B', 'B', 'B'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'B', 'D', 'B', 'A'],
            ]),
        ])
        .setComponents(
            new CCBlockComponent()
                .add('A', 'minecraft:white_wool')
                .add('B', 'minecraft:brown_wool')
                .add('C', 'minecraft:black_wool')
                .add('D', 'minecraft:pink_wool')
                .build()
        )
        .id(kjs('compactcrafting', 'data_model/sheep'));

    compactcrafting
        .miniaturization(dataModel('vindicator'), 'hostilenetworks:blank_data_model')
        .setLayers([
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['C', 'C', 'A', 'C', 'C'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', 'B', 'D', 'B', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'D', 'A', 'A'],
            ]),
        ])
        .setComponents(
            new CCBlockComponent()
                .add('A', 'minecraft:light_gray_wool')
                .add('B', 'minecraft:lime_wool')
                .add('C', 'minecraft:black_wool')
                .add('D', 'minecraft:gray_wool')
                .build()
        )
        .id(kjs('compactcrafting', 'data_model/vindicator'));

    compactcrafting
        .miniaturization(dataModel('blaze'), 'hostilenetworks:blank_data_model')
        .setLayers([
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['C', 'D', 'A', 'D', 'C'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['B', 'B', 'B', 'B', 'B'],
                ['B', '_', '_', '_', 'B'],
                ['B', '_', '_', '_', 'B'],
                ['B', '_', '_', '_', 'B'],
                ['B', 'B', 'B', 'B', 'B'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['B', 'B', 'B', 'B', 'B'],
                ['B', '_', '_', '_', 'B'],
                ['B', '_', '_', '_', 'B'],
                ['B', '_', '_', '_', 'B'],
                ['B', 'B', 'B', 'B', 'B'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['B', 'B', 'B', 'B', 'B'],
                ['B', 'B', 'B', 'B', 'B'],
                ['B', 'B', 'B', 'B', 'B'],
                ['B', 'B', 'B', 'B', 'B'],
                ['B', 'B', 'B', 'B', 'B'],
            ]),
        ])
        .setComponents(
            new CCBlockComponent()
                .add('A', 'minecraft:yellow_wool')
                .add('B', 'minecraft:orange_wool')
                .add('C', 'minecraft:white_wool')
                .add('D', 'minecraft:black_wool')
                .build()
        )
        .id(kjs('compactcrafting', 'data_model/blaze'));

    compactcrafting
        .miniaturization(dataModel('chicken'), 'hostilenetworks:blank_data_model')
        .setLayers([
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['C', 'A', 'A', 'A', 'C'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', 'D', 'D', 'D', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', 'A', 'B', 'A', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
        ])
        .setComponents(
            new CCBlockComponent()
                .add('A', 'minecraft:white_wool')
                .add('B', 'minecraft:red_wool')
                .add('C', 'minecraft:black_wool')
                .add('D', 'minecraft:orange_wool')
                .build()
        )
        .id(kjs('compactcrafting', 'data_model/chicken'));

    compactcrafting
        .miniaturization(dataModel('cow'), 'hostilenetworks:blank_data_model')
        .setLayers([
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['B', 'B', 'A', 'B', 'B'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['C', 'B', 'A', 'B', 'C'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', 'C', 'D', 'C', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'D', 'D', 'D', 'A'],
            ]),
        ])
        .setComponents(
            new CCBlockComponent()
                .add('A', 'minecraft:brown_wool')
                .add('B', 'minecraft:white_wool')
                .add('C', 'minecraft:black_wool')
                .add('D', 'minecraft:gray_wool')
                .build()
        )
        .id(kjs('compactcrafting', 'data_model/cow'));

    compactcrafting
        .miniaturization(dataModel('creeper'), 'hostilenetworks:blank_data_model')
        .setLayers([
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['B', 'B', 'A', 'B', 'B'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['B', 'B', 'A', 'B', 'B'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', 'B', 'B', 'B', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'B', 'A', 'B', 'A'],
            ]),
        ])
        .setComponents(new CCBlockComponent().add('A', 'minecraft:green_wool').add('B', 'minecraft:black_wool').build())
        .id(kjs('compactcrafting', 'data_model/creeper'));

    compactcrafting
        .miniaturization(dataModel('enderman'), 'hostilenetworks:blank_data_model')
        .setLayers([
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['B', 'B', 'A', 'B', 'B'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
        ])
        .setComponents(new CCBlockComponent().add('A', 'minecraft:black_wool').add('B', 'minecraft:white_wool').build())
        .id(kjs('compactcrafting', 'data_model/enderman'));

    compactcrafting
        .miniaturization(dataModel('ghast'), 'hostilenetworks:blank_data_model')
        .setLayers([
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['B', 'B', 'A', 'B', 'B'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', 'A', 'B', 'A', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
        ])
        .setComponents(new CCBlockComponent().add('A', 'minecraft:white_wool').add('B', 'minecraft:black_wool').build())
        .id(kjs('compactcrafting', 'data_model/ghast'));

    compactcrafting
        .miniaturization(dataModel('skeleton'), 'hostilenetworks:blank_data_model')
        .setLayers([
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['B', 'B', 'A', 'B', 'B'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', 'B', 'B', 'B', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
        ])
        .setComponents(new CCBlockComponent().add('A', 'minecraft:white_wool').add('B', 'minecraft:black_wool').build())
        .id(kjs('compactcrafting', 'data_model/skeleton'));

    // bug
    compactcrafting
        .miniaturization(dataModel('slime'), 'hostilenetworks:blank_data_model')
        .setLayers([
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', 'B', 'A', 'B', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', 'B', 'A', 'A', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
        ])
        .setComponents(
            new CCBlockComponent().add('A', 'minecraft:lime_stained_glass').add('B', 'minecraft:black_wool').build()
        )
        .id(kjs('compactcrafting', 'data_model_slime'));

    compactcrafting
        .miniaturization(dataModel('spider'), 'hostilenetworks:blank_data_model')
        .setLayers([
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['B', 'B', 'A', 'B', 'B'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['C', 'A', 'C', 'A', 'C'],
            ]),
        ])
        .setComponents(
            new CCBlockComponent()
                .add('A', 'minecraft:black_wool')
                .add('B', 'minecraft:red_wool')
                .add('C', 'minecraft:gray_wool')
                .build()
        )
        .id(kjs('compactcrafting', 'data_model_spider'));

    compactcrafting
        .miniaturization(dataModel('wither_skeleton'), 'hostilenetworks:blank_data_model')
        .setLayers([
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['B', 'B', 'A', 'B', 'B'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', '_', '_', '_', 'A'],
                ['A', 'B', 'B', 'B', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A'],
            ]),
        ])
        .setComponents(new CCBlockComponent().add('A', 'minecraft:gray_wool').add('B', 'minecraft:black_wool').build())
        .id(kjs('compactcrafting', 'data_model_wither_skeleton'));
});
