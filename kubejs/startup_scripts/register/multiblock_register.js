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
                ['___D___', '_DEFED_', '_EGEGE_', 'DFEFEFD', '_EGEGE_', '_DEFED_', '___D___'],
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
    );
});

StartupEvents.postInit(event => {
    $PatchouliAPI.registerMultiblock(
        'r2aot:andesite_casing_maker',
        $PatchouliAPI.makeMultiblock(
            [
                ['AAA', 'AAA', 'AAA'],
                ['ABA', 'C_C', 'A0A'],
                ['AAA', 'AAA', 'AAA'],
            ],
            new $Character('0'),
            Block.getBlock('botania:light_gray_petal_block'),
            new $Character('A'),
            Block.getBlock('create:andesite_casing'),
            new $Character('B'),
            Block.getBlock('r2aot:stress_input'),
            new $Character('C'),
            Block.getBlock('minecraft:barrel')
        )
    );
});

StartupEvents.postInit(event => {
    $PatchouliAPI.registerMultiblock(
        'r2aot:fisrt_cobble_gen',
        $PatchouliAPI.makeMultiblock(
            [
                ['AAA', 'AAA', 'AAA'],
                ['CCC', '_0B', 'CCC'],
                ['AAA', 'AAA', 'AAA'],
            ],
            new $Character('0'),
            Block.getBlock('r2aot:double_compressed_cobblestone'),
            new $Character('A'),
            Block.getBlock('minecraft:oak_wood'),
            new $Character('B'),
            Block.getBlock('botania:red_petal_block'),
            new $Character('C'),
            Block.getBlock('minecraft:glass')
        )
    );
});

StartupEvents.postInit(event => {
    $PatchouliAPI.registerMultiblock(
        'r2aot:terrestrial_agglomeration_altar',
        $PatchouliAPI.makeMultiblock(
            [
                ['___C___', '_______', '_______', 'C_____C', '_______', '_______', '___C___'],
                ['___B___', '_______', '_______', 'B_____B', '_______', '_______', '___B___'],
                ['___B___', '_______', '_______', 'B_____B', '_______', '_______', '___B___'],
                ['___B___', '_______', '_______', 'B__P__B', '_______', '_______', '___B___'],
                ['_AA_AA_', 'ALLALLA', 'ALDEDLA', '_AE0EA_', 'ALDEDLA', 'ALLALLA', '_AA_AA_'],
            ],
            new $Character('0'),
            Block.getBlock('botania:livingrock'),
            new $Character('L'),
            Block.getBlock('botania:livingrock'),
            new $Character('P'),
            Block.getBlock('botania:terra_plate'),
            new $Character('A'),
            Block.getBlock('botania:pattern_framed_livingwood'),
            new $Character('B'),
            Block.getBlock('botania:livingwood'),
            new $Character('C'),
            Block.getBlock('botania:mana_pylon'),
            new $Character('D'),
            Block.getBlock('r2aot:fluidedmana'),
            new $Character('E'),
            Block.getBlock('minecraft:lapis_block')
        )
    );
});
