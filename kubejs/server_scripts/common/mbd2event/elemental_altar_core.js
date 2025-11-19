BlockEvents.rightClicked('industrialforegoing:machine_frame_simple', event => {
    const { hand, item, block, player, level } = event;

    if (hand != 'MAIN_HAND' || item.id != 'r2aot:rune_elemental') return;

    let elementalAltar = $PatchouliAPI.getMultiblock('r2aot:elemental_altar');

    if (elementalAltar.validate(level, block.pos, 'none')) {
        level.destroyBlock(block.pos, false);
        level.setBlock(block.pos, Block.getBlock('r2aot:elemental_altar_core').defaultBlockState(), 3);
        item.count--;
        player.swing();
        level.server.runCommandSilent(
            `particle minecraft:end_rod ${block.pos.x + 0.5} ${block.pos.y + 1} ${block.pos.z + 0.5} 0.5 0.5 0.5 0.1 20`
        );
    } else {
        player.tell(Text.translate('message.r2aot.multiblock.incorrect').aqua());
    }
});

BlockEvents.rightClicked('r2aot:elemental_altar_core', event => {
    setItemExtract(event);
});

MBDMachineEvents.onRecipeWorking('r2aot:elemental_altar_core', event => {
    const { machine, progress } = event.getEvent();
    const { level, pos, recipeLogic } = machine;

    if (progress !== 1) return;

    let recipe = recipeLogic.getLastRecipe();
    let manaCap = MBDRegistries.RECIPE_CAPABILITIES.get('botania_mana');
    let manaList = recipe.getInputContents(manaCap);
    if (manaList && manaList.size() > 0) {
        if ($SourceUtil.takeSourceWithParticles(pos, level, 3, 10000) == null) {
            recipeLogic.setProgress(0);
        }
    }
});
