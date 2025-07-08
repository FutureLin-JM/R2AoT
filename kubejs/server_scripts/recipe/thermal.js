ServerEvents.recipes(event =>{
    /**
     * 熔岩炉
     * @param {Fluid_} outputFluid - 输出的流体
     * @param {number} [amount=1000] - 流体量（默认1000）
     * @param {InputItem_|InputTag_} input - 输入物品或标签
     * @param {number} [energy=20000] - 所需能量（默认20000)
     * @param {string} [id] - 自定义ID (可选)
     */
    function crucible(outputFluid, amount, input, energy, id) {
        const idName = id ? id: kjs('chiller', outputFluid.split(':')[1])
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
        }).id(idName)
    }

    /**
     * 急速冷冻机
     * @param {OutputItem_} output - 输出物品
     * @param {Fluid_} inputFluid - 输入流体
     * @param {number} amount    - 流体量
     * @param {InputItem_} inputCast - 输入铸件（默认锭模具）
     * @param {number} [energy=20000] - 所需能量（默认20000）
     * @param {string} [id] - 自定义ID (可选)
     */
    function chiller(output, inputFluid, amount, inputCast, energy, id) {
        const idName = id ? id: kjs('chiller', output.split(':')[1])
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
        }).id(idName)
    }

    /**
     * 感应炉
     * @param {string|string[]} outputs - 输出物品，支持字符串或数组（格式："Nx itemID" 或 "Nx #tagID"）
     * @param {string[]} inputs - 输入物品数组（格式同上）
     * @param {number} [energy=8000] - 所需能量，默认8000
     * @param {string} [id] - 自定义配方ID（可选）
     */
    function smelter(outputs, inputs, energy, id) {
        const outputList = Array.isArray(outputs) ? outputs : [outputs];
    
        const idName = id ? id : kjs('smelter', outputList[0].split(':')[1])
        const ingredients = inputs.map(parseEntry)
        const result = outputList.map(parseEntry)
        event.custom({
            type: 'thermal:smelter',
            ingredients: ingredients,
            result: result,
            energy: energy ? energy : 8000
        }).id(idName)
    }

    ['bronze', 'electrum', 'invar', 'constantan'].forEach(metalId => {
        crucible(`r2aot:molten_${metalId}`, 250, `mysticalagriculture:${metalId}_essence`);
        chiller(`thermal:${metalId}_ingot`, `r2aot:molten_${metalId}`);
    })
    
    smelter(
        'botania:runic_altar',
        [
            '16x botania:livingrock',
            '4x botania:mana_diamond',
            '4x botania:mana_pearl'
        ],
        12000
    )
    
})