// StartupEvents.postInit(event => {
//     $PatchouliAPI.registerMultiblock(
//         'r2aot:first_tree',
//         $PatchouliAPI.makeMultiblock(
//             [
//                 ['_____', '__A__', '_AAA_', '__A__', '_____'],
//                 ['_____', '_AAA_', '_ABA_', '_AAA_', '_____'],
//                 ['AAAAA', 'AAAAA', 'AABAA', 'AAAAA', 'AAAAA'],
//                 ['AAAAA', 'AAAAA', 'AABAA', 'AAAAA', 'AAAAA'],
//                 ['_____', '_____', '__B__', '_____', '_____'],
//                 ['_____', '_____', '__B__', '_____', '_____'],
//                 ['_____', '_____', '__0__', '_____', '_____'],
//             ],
//             new $Character('0'),
//             Blocks.WHITE_CONCRETE,
//             new $Character('A'),
//             Blocks.GRAY_CONCRETE,
//             new $Character('B'),
//             Blocks.WHITE_CONCRETE
//         )
//     );
// });

StartupEvents.postInit(event => {
    $PatchouliAPI.registerMultiblock(
        'r2aot:elemental_altar',
        $PatchouliAPI.makeMultiblock(
            [
                ['___A___', '_A_B_A_', '_______', 'AB_0_BA', '_______', '_A_B_A_', '___A___'],
                ['___D___', '_DEFED_', '_EGEGE_', 'DFEFEFD', '_EGEGE_', '_DEFED_', '___D___']
            ],
            new $Character('0'),
            Block.getBlock('industrialforegoing:machine_frame_simple'),
            new $Character('A'),
            Block.getBlock('r2aot:pedestal'),
            new $Character('B'),
            Block.getBlock('botania:mana_pylon'),
            new $Character('D'),
            Block.getBlock('botania:manasteel_block'),
            new $Character('E'),
            Block.getBlock('botania:mana_quartz'),
            new $Character('F'),
            Block.getBlock('botania:mana_diamond_block'),
            new $Character('G'),
            Block.getBlock('minecraft:glowstone')
        )
    )
});

StartupEvents.postInit(event => {
    $PatchouliAPI.registerMultiblock(
        'r2aot:sheep_model',
        $PatchouliAPI.makeMultiblock(
            [
                ['_____', '_____', '__0__', '_____', '_____'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'BBBBB'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'CABAC'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'BBBBB'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'ABDBA']
            ],
            new $Character('0'),
            Block.getBlock('r2aot:data_model_base'),
            new $Character('A'),
            Block.getBlock('minecraft:white_wool'),
            new $Character('B'),
            Block.getBlock('minecraft:brown_wool'),
            new $Character('C'),
            Block.getBlock('minecraft:black_wool'),
            new $Character('D'),
            Block.getBlock('minecraft:pink_wool')
        )
    )
});

StartupEvents.postInit(event => {
    $PatchouliAPI.registerMultiblock(
        'r2aot:vindicator_model',
        $PatchouliAPI.makeMultiblock(
            [
                ['_____', '_____', '__0__', '_____', '_____'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'AAAAA'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'CCACC'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'ABDBA'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AADAA']
            ],
            new $Character('0'),
            Block.getBlock('r2aot:data_model_base'),
            new $Character('A'),
            Block.getBlock('minecraft:light_gray_wool'),
            new $Character('B'),
            Block.getBlock('minecraft:lime_wool'),
            new $Character('C'),
            Block.getBlock('minecraft:black_wool'),
            new $Character('D'),
            Block.getBlock('minecraft:gray_wool')
        )
    )
});

StartupEvents.postInit(event => {
    $PatchouliAPI.registerMultiblock(
        'r2aot:blaze_model',
        $PatchouliAPI.makeMultiblock(
            [
                ['_____', '_____', '__0__', '_____', '_____'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'CDADC'],
                ['BBBBB', 'B___B', 'B___B', 'B___B', 'BBBBB'],
                ['BBBBB', 'B___B', 'B___B', 'B___B', 'BBBBB'],
                ['BBBBB', 'BBBBB', 'BBBBB', 'BBBBB', 'BBBBB']
            ],
            new $Character('0'),
            Block.getBlock('r2aot:data_model_base'),
            new $Character('A'),
            Block.getBlock('minecraft:yellow_wool'),
            new $Character('B'),
            Block.getBlock('minecraft:orange_wool'),
            new $Character('C'),
            Block.getBlock('minecraft:white_wool'),
            new $Character('D'),
            Block.getBlock('minecraft:black_wool')
        )
    )
});

StartupEvents.postInit(event => {
    $PatchouliAPI.registerMultiblock(
        'r2aot:chicken_model',
        $PatchouliAPI.makeMultiblock(
            [
                ['_____', '_____', '__0__', '_____', '_____'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'CAAAC'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'ADDDA'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'AABAA'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA']
            ],
            new $Character('0'),
            Block.getBlock('r2aot:data_model_base'),
            new $Character('A'),
            Block.getBlock('minecraft:white_wool'),
            new $Character('B'),
            Block.getBlock('minecraft:red_wool'),
            new $Character('C'),
            Block.getBlock('minecraft:black_wool'),
            new $Character('D'),
            Block.getBlock('minecraft:orange_wool')
        )
    )
});

StartupEvents.postInit(event => {
    $PatchouliAPI.registerMultiblock(
        'r2aot:cow_model',
        $PatchouliAPI.makeMultiblock(
            [
                ['_____', '_____', '__0__', '_____', '_____'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'BBABB'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'CBABC'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'AAAAA'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'ACDCA'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'ADDDA']
            ],
            new $Character('0'),
            Block.getBlock('r2aot:data_model_base'),
            new $Character('A'),
            Block.getBlock('minecraft:brown_wool'),
            new $Character('B'),
            Block.getBlock('minecraft:white_wool'),
            new $Character('C'),
            Block.getBlock('minecraft:black_wool'),
            new $Character('D'),
            Block.getBlock('minecraft:gray_wool')
        )
    )
});

StartupEvents.postInit(event => {
    $PatchouliAPI.registerMultiblock(
        'r2aot:creeper_model',
        $PatchouliAPI.makeMultiblock(
            [
                ['_____', '_____', '__0__', '_____', '_____'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'BBABB'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'BBABB'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'AAAAA'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'ABBBA'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'ABABA']
            ],
            new $Character('0'),
            Block.getBlock('r2aot:data_model_base'),
            new $Character('A'),
            Block.getBlock('minecraft:green_wool'),
            new $Character('B'),
            Block.getBlock('minecraft:black_wool'),
        )
    )
});

StartupEvents.postInit(event => {
    $PatchouliAPI.registerMultiblock(
        'r2aot:enderman_model',
        $PatchouliAPI.makeMultiblock(
            [
                ['_____', '_____', '__0__', '_____', '_____'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'AAAAA'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'BBABB'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'AAAAA'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA']
            ],
            new $Character('0'),
            Block.getBlock('r2aot:data_model_base'),
            new $Character('A'),
            Block.getBlock('minecraft:black_wool'),
            new $Character('B'),
            Block.getBlock('minecraft:white_wool'),
        )
    )
});

StartupEvents.postInit(event => {
    $PatchouliAPI.registerMultiblock(
        'r2aot:ghast_model',
        $PatchouliAPI.makeMultiblock(
            [
                ['_____', '_____', '__0__', '_____', '_____'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'BBABB'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'AAAAA'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'AABAA'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA']
            ],
            new $Character('0'),
            Block.getBlock('r2aot:data_model_base'),
            new $Character('A'),
            Block.getBlock('minecraft:white_wool'),
            new $Character('B'),
            Block.getBlock('minecraft:black_wool'),
        )
    )
});

StartupEvents.postInit(event => {
    $PatchouliAPI.registerMultiblock(
        'r2aot:skeleton_model',
        $PatchouliAPI.makeMultiblock(
            [
                ['_____', '_____', '__0__', '_____', '_____'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'BBABB'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'AAAAA'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'ABBBA'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA']
            ],
            new $Character('0'),
            Block.getBlock('r2aot:data_model_base'),
            new $Character('A'),
            Block.getBlock('minecraft:white_wool'),
            new $Character('B'),
            Block.getBlock('minecraft:black_wool'),
        )
    )
});

StartupEvents.postInit(event => {
    $PatchouliAPI.registerMultiblock(
        'r2aot:slime_model',
        $PatchouliAPI.makeMultiblock(
            [
                ['_____', '_____', '__0__', '_____', '_____'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'ABABA'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'AAAAA'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'AAABA'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA']
            ],
            new $Character('0'),
            Block.getBlock('r2aot:data_model_base'),
            new $Character('A'),
            Block.getBlock('minecraft:lime_stained_glass'),
            new $Character('B'),
            Block.getBlock('minecraft:black_wool'),
        )
    )
});

StartupEvents.postInit(event => {
    $PatchouliAPI.registerMultiblock(
        'r2aot:spider_model',
        $PatchouliAPI.makeMultiblock(
            [
                ['_____', '_____', '__0__', '_____', '_____'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'BBABB'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'AAAAA'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'AAAAA'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'CACAC']
            ],
            new $Character('0'),
            Block.getBlock('r2aot:data_model_base'),
            new $Character('A'),
            Block.getBlock('minecraft:black_wool'),
            new $Character('B'),
            Block.getBlock('minecraft:red_wool'),
            new $Character('C'),
            Block.getBlock('minecraft:gray_wool')
        )
    )
});

StartupEvents.postInit(event => {
    $PatchouliAPI.registerMultiblock(
        'r2aot:wither_skeleton_model',
        $PatchouliAPI.makeMultiblock(
            [
                ['_____', '_____', '__0__', '_____', '_____'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'BBABB'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'AAAAA'],
                ['AAAAA', 'A___A', 'A___A', 'A___A', 'ABBBA'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA']
            ],
            new $Character('0'),
            Block.getBlock('r2aot:data_model_base'),
            new $Character('A'),
            Block.getBlock('minecraft:gray_wool'),
            new $Character('B'),
            Block.getBlock('minecraft:black_wool'),
        )
    )
});

StartupEvents.postInit(event => {
    $PatchouliAPI.registerMultiblock(
        'r2aot:andesite_casing_maker',
        $PatchouliAPI.makeMultiblock(
            [
                ['AAA', 'AAA', 'AAA'],
                ['ABA', 'C_D', 'A0A'],
                ['AAA', 'AAA', 'AAA']
            ],
            new $Character('0'),
            Block.getBlock('botania:light_gray_petal_block'),
            new $Character('A'),
            Block.getBlock('create:andesite_casing'),
            new $Character('B'),
            Block.getBlock('r2aot:stress_input'),
            new $Character('C'),
            Block.getBlock('r2aot:create_output'),
            new $Character('D'),
            Block.getBlock('r2aot:create_input'),
        )
    )
})