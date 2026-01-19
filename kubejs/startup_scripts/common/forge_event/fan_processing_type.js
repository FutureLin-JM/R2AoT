const $AllFanProcessingTypes = Java.loadClass(
    'com.simibubi.create.content.kinetics.fan.processing.AllFanProcessingTypes',
);
const $FanProcessingType = Java.loadClass('com.simibubi.create.content.kinetics.fan.processing.FanProcessingType');

ForgeModEvents.onEvent('net.minecraftforge.fml.event.lifecycle.FMLCommonSetupEvent', event => {
    global.FanRecipes = {
        FluidedSource: [
            {
                input: 'minecraft:sand',
                output: Item.of('hostilenetworks:prediction', `{data_model:{id:"hostilenetworks:thermal/blitz"}}`),
                chance: 0.25,
            },
            {
                input: 'minecraft:snow_block',
                output: Item.of('hostilenetworks:prediction', `{data_model:{id:"hostilenetworks:thermal/blizz"}}`),
                chance: 0.25,
            },
            {
                input: 'minecraft:blackstone',
                output: Item.of('hostilenetworks:prediction', `{data_model:{id:"hostilenetworks:thermal/basalz"}}`),
                chance: 0.25,
            },
        ],
        PowerEssence: [
            {
                input: 'minecraft:lapis_lazuli',
                output: Item.of('hostilenetworks:prediction', `{data_model:{id:"hostilenetworks:guardian"}}`),
                chance: 0.5,
            },
            {
                input: 'minecraft:chorus_fruit',
                output: Item.of('hostilenetworks:prediction', `{data_model:{id:"hostilenetworks:shulker"}}`),
                chance: 0.5,
            },
            {
                input: 'minecraft:amethyst_shard',
                output: Item.of('hostilenetworks:prediction', `{data_model:{id:"hostilenetworks:warden"}}`),
                chance: 0.5,
            },
        ],
        BifrostPerm: [
            {
                input: 'mysticalagriculture:imperium_essence',
                output: 'mysticalagriculture:supremium_essence',
                chance: 0.25,
            },
        ],
    };

    global.FanTypes = {
        FluidedSource: {
            id: 'fluidedsource',
            medium: 'r2aot:fluidedsource',
            particleTypes: [new $DustParticleOptions(new Vector3f(155 / 255, 19 / 255, 251 / 255), 1.5)],
            airFlowParticle: {
                color: 0x9b13fb,
                alpha: 0.75,
                // extraParticle: [{ type: $ParticleTypes.SNOWFLAKE, chance: 0.04, speed: 0.2 }],
                // 额外粒子写法示例
            },
            affectEntity: (entity, level) => {
                if (!level.clientSide && entity.alive && entity instanceof $LivingEntity) {
                    if (entity.age % 20 != 0) return;
                    entity.potionEffects.add('ars_nouveau:mana_regen', 40);
                }
            },
        },
        PowerEssence: {
            id: 'power_essence',
            medium: 'r2aot:power_essence',
            particleTypes: [
                $CoreParticles.SPARK.get(),
                new $DustParticleOptions(new Vector3f(225 / 255, 234 / 255, 60 / 255), 1.5),
            ],
            airFlowParticle: {
                color: 0x51cf66,
                alpha: 0.75,
            },
            affectEntity: (entity, level) => {
                if (!level.clientSide && entity.alive && entity instanceof $LivingEntity) {
                    if (entity.age % 20 != 0) return;
                    entity.attack(entity.damageSources().lightningBolt(), 4);
                    entity.potionEffects.add('cofh_core:shocked', 100);
                }
            },
        },
        BifrostPerm: {
            id: 'bifrost_perm',
            medium: 'botania:bifrost_perm',
            particleTypes: [
                $SparkleParticleData.sparkle(1.5 + 0.5 * Math.random(), Math.random(), Math.random(), Math.random(), 6),
            ],
            airFlowParticle: {
                color: bifrostColor,
                alpha: 0.36,
            },
        },
    };

    // 自动注册所有鼓风机类型
    Object.keys(global.FanTypes).forEach(typeName => {
        global.fanProcessingTypes(event, global.FanTypes[typeName], global.FanRecipes[typeName]);
    });
});

/**
 * 注册自定义鼓风机处理类型
 * @param {Internal.FMLCommonSetupEvent} event - FML通用设置事件
 * @param {{
 *   id: string,
 *   medium: string,
 *   particleTypes?: Array<Internal.ParticleOptions>,
 *   airFlowParticle: {
 *     color: number | (() => number),
 *     alpha: number,
 *     extraParticle?: Array<{ type: Internal.SimpleParticleType, chance: number, speed: number }>
 *   },
 *   affectEntity?: (entity: Internal.Entity, level: Internal.Level) => void
 * }} fanType - 鼓风机类型配置
 * @param {Array<{
 *   input: string,
 *   output: string | Internal.ItemStack,
 *   count?: number,
 *   chance?: number
 * }>} recipes - 配方列表
 */
global.fanProcessingTypes = (event, fanType, recipes) => {
    let context = $KubeJS.getStartupScriptManager().context;

    const fanTypeImplementation = {
        /**
         *
         * @param {Internal.Level} level
         * @param {BlockPos} pos
         */
        isValidAt(level, pos) {
            if (!level || !pos) return false;
            let fluidState = level.getFluidState(pos);
            let fluidId = null;
            if (!fluidState.isEmpty()) {
                fluidId = fluidState.getType().arch$registryName().toString();
                if (fluidId === fanType.medium) {
                    return true;
                }
            }
            let blockState = level.getBlockState(pos);
            let blockId = blockState.block.id;
            return blockId === fanType.medium;
        },

        getPriority() {
            return 450;
        },

        /**
         *
         * @param {Internal.ItemStack} stack
         * @param {Internal.Level} level
         */
        canProcess(stack, level) {
            if (!stack || !level) return false;
            return recipes.some(recipe => recipe?.input === stack.id);
        },

        /**
         *
         * @param {Internal.ItemStack} stack
         * @param {Internal.Level} level
         */
        process(stack, level) {
            if (!stack || !level) return null;
            let recipe = recipes.find(recipe => recipe?.input === stack.id);
            if (!recipe) {
                return null;
            }

            let successCount = 0;
            for (let i = 0; i < stack.count; i++) {
                let hit = recipe.chance == null || Math.random() <= recipe.chance;
                if (hit) successCount++;
            }

            let resultItemId;
            let resultCount = Math.max(recipe.count ?? 1, 1);
            let resultItemNbt = null;
            if (typeof recipe.output === 'string') {
                resultItemId = recipe.output;
            } else {
                resultItemId = recipe.output.getId();
                resultItemNbt = recipe.output.getNbt();
            }

            if (!resultItemId) return null;
            let nbt = new $CompoundTag();
            nbt.putString('id', resultItemId);
            nbt.putByte('Count', successCount * resultCount);
            if (resultItemNbt) {
                nbt.put('tag', resultItemNbt.copy());
            }
            let resultStack = $ItemStack.of(nbt);
            let arrayList = new $ArrayList();
            arrayList.add(resultStack);

            return arrayList;
        },

        /**
         *
         * @param { Internal.Level } level
         * @param { Vec3i_ } pos
         */
        spawnProcessingParticles(level, pos) {
            if (!level || !pos) return;
            if (level.random.nextInt(8) != 0) return;

            const particles =
                Array.isArray(fanType.particleTypes) && fanType.particleTypes.length > 0
                    ? fanType.particleTypes
                    : [fanType.particleTypes ?? $ParticleTypes.SPIT];

            particles.forEach(particle => {
                level.addParticle(
                    particle,
                    pos.x() + (level.random.nextFloat() - 0.5) * 0.5,
                    pos.y() + 0.5,
                    pos.z() + (level.random.nextFloat() - 0.5) * 0.5,
                    0.0,
                    1 / 8,
                    0.0,
                );
            });
        },
        /**
         *
         * @param { Internal.FanProcessingType$AirFlowParticleAccess } particleAccess
         * @param { Internal.RandomSource } random
         */
        morphAirFlow(particleAccess, random) {
            if (!particleAccess || !random) return;
            let color =
                typeof fanType.airFlowParticle.color === 'function'
                    ? fanType.airFlowParticle.color()
                    : (fanType.airFlowParticle.color ?? 0xaaaaaa);
            particleAccess.setColor(color);
            particleAccess.setAlpha(fanType.airFlowParticle.alpha ?? 1.0);

            if (fanType.airFlowParticle.extraParticle) {
                fanType.airFlowParticle.extraParticle.forEach(extra => {
                    if (random.nextFloat() < extra.chance) {
                        particleAccess.spawnExtraParticle(extra.type, extra.speed);
                    }
                });
            }
        },

        /**
         *
         * @param { Internal.Entity } entity
         * @param { Internal.Level } level
         */
        affectEntity(entity, level) {
            if (!entity || !level) return;
            if (fanType.affectEntity && typeof fanType.affectEntity === 'function') {
                fanType.affectEntity(entity, level);
            }
        },
    };

    let fanProcessingType = $Context.jsToJava(context, fanTypeImplementation, $FanProcessingType);
    $AllFanProcessingTypes.register(fanType.id, fanProcessingType);
};
