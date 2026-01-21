StartupEvents.registry('block', event => {
    const energyProperty = $IntegerProperty.create('energy', 0, 4);
    const ENERGY_PER_ITEM = 25;

    const runeBlackRecipe = {
        'botania:black_lotus': 'botania:blacker_lotus',
    };

    event
        .create('r2aot:rune_black', 'basic')
        .box(0, 0, 0, 16, 5, 16) //steppedOn 在小于5高度时无法触发
        .hardness(0)
        .defaultCutout()
        .property(BlockProperties.HORIZONTAL_FACING)
        .property(energyProperty)
        .defaultState(state => {
            state.setValue(BlockProperties.HORIZONTAL_FACING, Direction.NORTH);
        })
        .placementState(state => {
            state.setValue(BlockProperties.HORIZONTAL_FACING, state.horizontalDirection.opposite);
        })
        .noItem()
        .blockEntity(info => {
            info.serverTick(20, 0, be => {
                const energy = be.persistentData.getInt('energy') ?? 0;
                if (energy >= 100) return;

                const randomEnergy = Math.floor(Math.random() * 5) + 1;
                let newEnergy = energy + randomEnergy;
                if (newEnergy > 100) newEnergy = 100;

                be.persistentData.putInt('energy', newEnergy);

                const blockLevel = parseInt(be.getBlockState().getValue(energyProperty));
                const energyLevel = newEnergy === 100 ? 4 : Math.floor(newEnergy / 25);

                if (blockLevel !== energyLevel) {
                    const newBlockState = be
                        .getBlockState()
                        .setValue(energyProperty, new $Integer(energyLevel.toString()));
                    be.level.setBlockAndUpdate(be.blockPos, newBlockState);
                }
            });
        })
        .steppedOn(ctx => {
            const { level, entity, pos, block } = ctx;

            if (entity.getType() == 'minecraft:item') {
                /**@type {Internal.ItemEntity}*/
                let itemEntity = entity;
                let item = itemEntity.getItem();
                let outputItem = runeBlackRecipe[item.id];

                if (outputItem) {
                    let blockEntity = block.entity;
                    if (!blockEntity) return;

                    // 当前符文能量
                    let energy = blockEntity.persistentData.getInt('energy') ?? 0;

                    let neighbors = [];
                    let neighborsTotal = 0;
                    for (let [dx, dz] of global.eightNeighborhoodOffsets) {
                        let nPos = pos.offset(dx, 0, dz);
                        /**@type {Internal.BlockEntity}*/
                        let nBE = level.getBlockEntity(nPos);
                        if (!nBE) continue;
                        let nState = nBE.getBlockState();
                        // 仅抽取同类型符文的能量
                        if (nState && nState.getBlock() && nState.getBlock().id === 'r2aot:rune_black') {
                            let nEnergy = nBE.persistentData.getInt('energy') ?? 0;
                            if (nEnergy > 0) {
                                neighbors.push({ be: nBE, energy: nEnergy });
                                neighborsTotal += nEnergy;
                            }
                        }
                    }

                    let totalEnergy = energy + neighborsTotal;
                    let result;
                    let removeCount = 0;
                    let removeEnergy = 0;

                    // 依据总能量决定可合成数量
                    if (totalEnergy < ENERGY_PER_ITEM) {
                        return;
                    } else if (totalEnergy >= item.count * ENERGY_PER_ITEM) {
                        result = Item.of(outputItem, item.count);
                        removeCount = item.count;
                        removeEnergy = item.count * ENERGY_PER_ITEM;
                    } else {
                        let possibleCount = Math.floor(totalEnergy / ENERGY_PER_ITEM);
                        result = Item.of(outputItem, possibleCount);
                        removeCount = possibleCount;
                        removeEnergy = possibleCount * ENERGY_PER_ITEM;
                    }

                    if (result && removeCount > 0) {
                        /**@type {Internal.ItemEntity}*/
                        let resultEntity = level.createEntity('item');
                        resultEntity.setItem(result);
                        resultEntity.setPos(pos.x + 0.5, pos.y + 0.5, pos.z + 0.5);
                        resultEntity.setDeltaMovement(new Vec3d(0, 0.3, 0));
                        resultEntity.setGlowing(true);
                        resultEntity.spawn();

                        if (removeCount >= item.count) {
                            itemEntity.discard();
                        } else {
                            let newItem = Item.of(item.id, item.count - removeCount);
                            itemEntity.setItem(newItem);
                        }

                        // 扣减能量：优先扣自身，不足再从邻居扣
                        let remaining = removeEnergy;
                        let newSelfEnergy = energy;
                        if (remaining > 0) {
                            let takeSelf = Math.min(newSelfEnergy, remaining);
                            newSelfEnergy -= takeSelf;
                            remaining -= takeSelf;
                        }

                        for (let n of neighbors) {
                            if (remaining <= 0) break;
                            let take = Math.min(n.energy, remaining);
                            let updated = n.energy - take;
                            n.be.persistentData.putInt('energy', updated);
                            remaining -= take;
                        }

                        blockEntity.persistentData.putInt('energy', newSelfEnergy);
                    }
                }
            }
        });
});
