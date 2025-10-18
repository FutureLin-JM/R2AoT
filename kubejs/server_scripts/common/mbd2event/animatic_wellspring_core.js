const FLUID_POSITIONS = [
    [-1, -4, -1],
    [-1, -4, 0],
    [-1, -4, 1],
    [0, -4, -1],
    [0, -4, 0],
    [0, -4, 1],
    [1, -4, -1],
    [1, -4, 0],
    [1, -4, 1],
];

const LEAVES_POSITIONS = [
    [-2, -1, -2],
    [-2, -1, 2],
    [2, -1, -2],
    [2, -1, 2],
];

const LEAVES_TYPE = {
    'ars_nouveau:blue_archwood_leaves': [50, 50, 255],
    'ars_nouveau:red_archwood_leaves': [255, 50, 50],
    'ars_nouveau:green_archwood_leaves': [50, 255, 50],
    'ars_nouveau:purple_archwood_leaves': [255, 50, 255],
};

const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

MBDMachineEvents.onRecipeWorking('r2aot:animal_wellspring_core', event => {
    const { machine, progress } = event.getEvent();
    const { level, pos, recipeLogic } = machine;

    if (progress > 0 && progress < 120 && (progress + 1) % 20 == 0) {
        if ($SourceUtil.takeSourceWithParticles(pos, level, 4, 2000) == null) {
            recipeLogic.setWorkingEnabled(false);
        } else {
            let randomNum = Math.floor(Math.random() * 4);
            const leavesPos = LEAVES_POSITIONS[randomNum];
            let targetPos = pos.offset(leavesPos[0], leavesPos[1], leavesPos[2]);
            let targetBlockID = level.getBlock(targetPos).id;
            const leavesColor = LEAVES_TYPE[targetBlockID];

            let projectile = new $EntityFollowProjectile(
                level,
                targetPos,
                pos,
                leavesColor[0],
                leavesColor[1],
                leavesColor[2]
            );
            level.addFreshEntity(projectile);
        }
    }
});

MBDMachineEvents.onTick('r2aot:animal_wellspring_core', event => {
    const { machine } = event.getEvent();
    const { level, pos, recipeLogic } = machine;

    const controller = $IMultiController.ofController(level, pos).orElse(null);
    if (!controller.isFormed()) return;

    if (controller.isFormed()) {
        machine.triggerGeckolibAnim('formed', 1);
    } else {
        machine.triggerGeckolibAnim('idle', 1);
    }

    let hasAirSpace = false;
    for (const fluidPos of FLUID_POSITIONS) {
        let targetPos = pos.offset(fluidPos[0], fluidPos[1], fluidPos[2]);
        if (isValidFluidPosition(level, targetPos)) {
            hasAirSpace = true;
            break;
        }
    }

    if (!hasAirSpace) {
        if (recipeLogic.isWorking()) {
            recipeLogic.setWorkingEnabled(false);
        }
        return;
    }

    if (recipeLogic.isSuspend()) {
        if ($SourceUtil.hasSourceNearby(pos, level, 4, 2000)) {
            recipeLogic.setWorkingEnabled(true);
        }
    }

    // after working completed
    const machineCap = machine.getCapability(ForgeCapabilities.FLUID_HANDLER).resolve().get();
    const machineTank = machineCap.getFluidInTank(0);
    if (machineTank.getAmount() == 1000) {
        let fluidType = machineTank.getFluid().arch$registryName().toString();
        let airFluidPos = null;

        let randomArray = numArray.slice().sort(() => Math.random() - 0.5);
        for (const index of randomArray) {
            let fluidPos = FLUID_POSITIONS[index];
            let targetPos = pos.offset(fluidPos[0], fluidPos[1], fluidPos[2]);
            
            if (isValidFluidPosition(level, targetPos)) {
                airFluidPos = targetPos;
                break;
            }
        }

        if (airFluidPos !== null) {
            let projectile = new $EntityFollowProjectile(level, pos, airFluidPos, 255, 25, 180);
            level.addFreshEntity(projectile);

            machineCap.drain(Fluid.of(fluidType, 1000), 'execute');
            level.server.schedule(1000, () => {
                level.setBlockAndUpdate(airFluidPos, Block.getBlock(fluidType).defaultBlockState());
            });
        }
    }
});

/**
 * 检查位置是否适合放置流体
 * @param {Internal.Level} level
 * @param {BlockPos} targetPos
 * @returns {boolean}
 */
function isValidFluidPosition(level, targetPos) {
    let targetBlock = level.getBlock(targetPos);
    let fluidState = level.getFluidState(targetPos);

    return targetBlock.id == 'minecraft:air' || (!fluidState.isEmpty() && !fluidState.isSource());
}
