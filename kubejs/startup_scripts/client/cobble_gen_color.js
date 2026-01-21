if (Platform.isClientEnvironment()) {
    let $BiomeColors = Java.loadClass('net.minecraft.client.renderer.BiomeColors');

    StartupEvents.postInit(event => {
        let cobbleGenBlock = [
            'r2aot:cobble_gen_tier_1',
            'r2aot:cobble_gen_tier_2',
            'r2aot:cobble_gen_tier_3',
            'r2aot:cobble_gen_tier_4',
            'r2aot:cobble_gen_tier_5',
            'r2aot:cobble_gen_tier_6',
        ];

        Client.blockColors.register(
            (state, env, pos, tintIndex) =>
                tintIndex == 1
                    ? env != null && pos != null
                        ? $BiomeColors.getAverageWaterColor(env, pos)
                        : 4159204
                    : -1,
            cobbleGenBlock,
        );

        Client.itemColors.register((stack, index) => (index == 1 ? 4159204 : -1), cobbleGenBlock);
    });
}
