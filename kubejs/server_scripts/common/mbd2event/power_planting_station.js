const POWER_PLANTING_POSITIONS = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
];

MBDMachineEvents.onRecipeFinish('r2aot:power_planting_station', event => {
    const { machine } = event.getEvent();
    const { level, pos } = machine;

    const randomOffsetXZ = POWER_PLANTING_POSITIONS[Math.floor(Math.random() * 8)];
    const randomOffsetY = Math.floor(Math.random() * 2);

    const offsetX = pos.x + randomOffsetXZ[0];
    const offsetY = pos.y + randomOffsetY;
    const offsetZ = pos.z + randomOffsetXZ[1];

    level.server.runCommandSilent(
        `particle minecraft:end_rod ${offsetX} ${offsetY + 0.5} ${offsetZ} 0.2 0.2 0.2 0.005 10`
    );
});

MBDMachineEvents.onBeforeRecipeModify('r2aot:power_planting_station', event => {
    const mbdEvent = event.getEvent();
    const { machine, recipe } = mbdEvent;
    const { pos, level } = machine;

    const block = level.getBlock(pos.below());

    const blockCoefficients = {
        'powah:energized_steel_block': 1,
        'powah:blazing_crystal_block': 4,
        'powah:niotic_crystal_block': 7,
        'powah:spirited_crystal_block': 10,
        'powah:nitro_crystal_block': 12,
    };

    if (blockCoefficients.hasOwnProperty(block.id)) {
        let modifiedRecipe = recipe.copy();
        let newDuration = Math.ceil(recipe.duration / blockCoefficients[block.id])
        modifiedRecipe.duration = Math.max(newDuration, 100);

        mbdEvent.setRecipe(modifiedRecipe);
    }
});

