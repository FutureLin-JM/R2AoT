ServerEvents.recipes(event =>{
    /**
     * 熔岩炉
     * @param {Fluid_} outputFluid - 输出的流体
     * @param {number} [amount=1000] - 流体量（默认1000）
     * @param {InputItem_|InputTag_} input - 输入物品或标签
     * @param {number} [energy=80000] - 所需能量（默认20000）
     */
    function crucible(outputFluid, amount, input, energy) {
        const ingredient = input.startsWith("#")
            ? { tag: input.substring(1) }
            : { item: input };

        event.custom({
            type: 'thermal:crucible',
            ingredient: ingredient,
            result: [
                {
                    fluid: outputFluid,
                    amount: amount ? amount: 1000,
                },
            ],
            energy: energy ? energy: 20000,
        });
    }

    /**
     * 急速冷冻机
     * @param {OutputItem_} output
     * @param {Fluid_} inputFluid
     * @param {number} amount
     * @param {InputItem_} inputCast
     * @param {number} energy
     */
    function chiller(output, inputFluid, amount, inputCast, energy) {
        event.custom({
            type: 'thermal:chiller',
            ingredients: [
                {
                    fluid: inputFluid,
                    amount: amount ? amount : 1000,
                },
                {
                    item: inputCast ? inputCast : 'thermal:chiller_ingot_cast',
                },
            ],
            result: [
                {
                    item: output,
                    count: 1,
                },
            ],
            energy: energy ? energy: 20000,
        });
    }

    ['bronze', 'electrum', 'invar', 'constantan'].forEach(metalId => {
        crucible(`r2aot:molten_${metalId}`, 250, `mysticalagriculture:${metalId}_essence`);
        chiller(`thermal:${metalId}_ingot`, `r2aot:molten_${metalId}`);
    })
})