StartupEvents.registry("block", (event) => {
    event.create("r2aot:rainbow_petal_block", "falling").soundType("moss");

    event.create("r2aot:compressed_andesite","basic").hardness(3).stoneSoundType().requiresTool();
    event.create("r2aot:double_compressed_andesite","basic").hardness(3).stoneSoundType().requiresTool();
    event.create("r2aot:compressed_cobblestone", "basic").hardness(3).stoneSoundType().requiresTool();
    event.create("r2aot:double_compressed_cobblestone","basic").hardness(3).stoneSoundType().requiresTool();
    event.create("r2aot:compressed_gravel", "basic").hardness(1.5).gravelSoundType().requiresTool();
    event.create("r2aot:double_compressed_gravel", "basic").hardness(1.5).gravelSoundType().requiresTool();
    event.create("r2aot:compressed_sand").hardness(1.5).sandSoundType().requiresTool();
    event.create("r2aot:double_compressed_sand").hardness(1.5).sandSoundType().requiresTool();
    event.create("r2aot:compressed_netherrack").hardness(3).soundType("netherrack").requiresTool();
    event.create("r2aot:double_compressed_netherrack").hardness(3).soundType("netherrack").requiresTool();

    event.create("r2aot:petal_coal_ore", 'basic').hardness(3).stoneSoundType().requiresTool();
    event.create("r2aot:petal_iron_ore","basic").hardness(3).stoneSoundType().requiresTool();
    event.create("r2aot:petal_copper_ore","basic").hardness(3).stoneSoundType().requiresTool();
    event.create("r2aot:petal_lapis_ore","basic").hardness(3).stoneSoundType().requiresTool();
    event.create("r2aot:petal_gold_ore","basic").hardness(3).stoneSoundType().requiresTool();
    event.create("r2aot:petal_redstone_ore","basic").hardness(3).stoneSoundType().requiresTool();
    event.create("r2aot:petal_diamond_ore","basic").hardness(3).stoneSoundType().requiresTool();
    event.create("r2aot:petal_emerald_ore","basic").hardness(3).stoneSoundType().requiresTool();
    event.create("r2aot:petal_zinc_ore","basic").hardness(3).stoneSoundType().requiresTool();
    event.create("r2aot:petal_quartz_ore","basic").hardness(3).soundType("nether_ore").requiresTool();

    event.create("r2aot:spinerette","basic").hardness(0).defaultCutout().noCollision().grassSoundType();
    event.create("r2aot:creative_casing", "basic").hardness(3).soundType("netherite_block").requiresTool();

    event.create("r2aot:data_model_base", "basic").hardness(3).stoneSoundType().box(0, 0, 0, 16, 2, 16).fullBlock(false);
})