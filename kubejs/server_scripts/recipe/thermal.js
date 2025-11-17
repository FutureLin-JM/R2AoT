ServerEvents.recipes(event => {
    ['bronze', 'electrum', 'invar', 'constantan'].forEach(metalId => {
        crucible(Fluid.of(`r2aot:molten_${metalId}`, 250), `mysticalagriculture:${metalId}_essence`);
        chiller(`thermal:${metalId}_ingot`, Fluid.of(`r2aot:molten_${metalId}`));
    });

    ['lumium', 'signalum', 'enderium'].forEach(metalId => {
        chiller(`thermal:${metalId}_ingot`, Fluid.of(`r2aot:molten_${metalId}`));
    });

    crucible(
        Fluid.of('industrialforegoing:pink_slime', 100),
        'ae2:pink_paint_ball',
        2000,
        kjs('crucible', 'pink_slime_from_pink_paint_ball')
    );
    crucible(
        Fluid.of('industrialforegoing:pink_slime', 500),
        'ae2:pink_lumen_paint_ball',
        5000,
        kjs('crucible', 'pink_slime_from_pink_lumen_paint_ball')
    );

    ['aerotheum', 'cryotheum', 'petrotheum', 'pyrotheum'].forEach(type => {
        crucible(Fluid.of(`r2aot:fluid_${type}`, 250), `r2aot:dust_${type}`, 25000);
    });

    smelter(
        'botania:runic_altar',
        ['16x botania:livingrock', '4x botania:mana_diamond', '4x botania:mana_pearl'],
        12000
    );

    smelter('minecraft:gilded_blackstone', ['minecraft:blackstone', '4x minecraft:gold_ingot']);

    smelter('r2aot:processing_mixer_core', [
        '4x thermal:machine_frame',
        '2x industrialforegoing:machine_frame_simple',
        '4x ae2:calculation_processor',
    ]);

    smelter('botania:terra_plate', ['r2aot:luxvoid_alloy', '#botania:manasteel_blocks', '3x minecraft:lapis_block']);

    event
        .custom({
            type: 'thermal:smelter',
            ingredients: [
                Item.of('#forge:gems/amethyst', 4).toJson(),
                Item.of('minecraft:shulker_shell', 4).toJson(),
                {
                    value: [
                        {
                            tag: 'forge:ingots/gold',
                        },
                        {
                            tag: 'forge:dusts/gold',
                        },
                    ],
                    count: 2,
                },
            ],
            result: [Item.of('thermalendergy:melodium_ingot', 2).toJson()],
            energy: 32000,
        })
        .id(kjs('smelter', 'melodium_ingot'));

    crystallizer(
        'r2aot:dust_aerotheum',
        ['thermal:blitz_powder', '#forge:dusts/niter'],
        Fluid.of('r2aot:power_essence', 500)
    );

    crystallizer(
        'r2aot:dust_cryotheum',
        ['thermal:blizz_powder', '#forge:dusts/apatite'],
        Fluid.of('r2aot:power_essence', 500)
    );

    crystallizer(
        'r2aot:dust_petrotheum',
        ['thermal:basalz_powder', '#forge:dusts/cinnabar'],
        Fluid.of('r2aot:power_essence', 500)
    );

    crystallizer(
        'r2aot:dust_pyrotheum',
        ['minecraft:blaze_powder', '#forge:dusts/sulfur'],
        Fluid.of('r2aot:power_essence', 500)
    );

    [
        { material: 'steel', type: 'energized' },
        { material: 'crystal', type: 'blazing' },
        { material: 'crystal', type: 'niotic' },
        { material: 'crystal', type: 'spirited' },
        { material: 'crystal', type: 'nitro' },
    ].forEach(recipe => {
        press(
            `r2aot:${recipe.type}_${recipe.material}_gear`,
            [`4x powah:${recipe.material}_${recipe.type}`, 'thermal:press_gear_die'],
            4000
        );
    });

    [
        { seeds: 'energized_steel_seeds', fluid: 'aerotheum', energy: 500 },
        { seeds: 'blazing_crystal_seeds', fluid: 'pyrotheum', energy: 1000 },
        { seeds: 'niotic_crystal_seeds', fluid: 'cryotheum', energy: 3000 },
        { seeds: 'spirited_crystal_seeds', fluid: 'petrotheum', energy: 5000 },
    ].forEach(recipe => {
        event
            .custom({
                type: 'thermal:bottler',
                ingredients: [
                    {
                        item: 'mysticalagriculture:prosperity_seed_base',
                        count: 1,
                    },
                    {
                        fluid: `r2aot:fluid_${recipe.fluid}`,
                        amount: 4000,
                    },
                ],
                result: [
                    Item.of(
                        `kubejs:incomplete_${recipe.seeds}`,
                        `{SequencedAssembly:{Progress:0.25f,Step:1,id:"kubejs:sequenced_assembly/${recipe.seeds}"}}`
                    )
                        .strongNBT()
                        .toJson(),
                ],
                energy: recipe.energy,
            })
            .id(kjs('bottler', `incomplete_${recipe.seeds}_step_1`));
    });

    /**
     * 熔岩炉
     * @param {Internal.FluidStackJS} outputFluid - 输出的流体
     * @param {InputItem_} input - 输入物品或标签
     * @param {number} [energy=20000] - 所需能量（默认20000)
     * @param {string} [id] - 自定义ID (可选)
     */
    function crucible(outputFluid, input, energy, id) {
        id = id ?? kjs('crucible', outputFluid.getId().split(':')[1]);

        event
            .custom({
                type: 'thermal:crucible',
                ingredients: parseItemWithoutCount(input),
                result: outputFluid.toJson(),
                energy: energy ? energy : 20000,
            })
            .id(id);
    }

    /**
     * 急速冷冻机
     * @param {OutputItem_} output - 输出物品
     * @param {Internal.FluidStackJS} inputFluid - 输入流体
     * @param {InputItem_} inputCast - 输入铸件（默认锭模具）
     * @param {number} [energy = 20000] - 所需能量（默认20000）
     * @param {string} [id] - 自定义ID (可选)
     */
    function chiller(output, inputFluid, inputCast, energy, id) {
        id = id ?? kjs('chiller', output.split(':')[1]);
        event
            .custom({
                type: 'thermal:chiller',
                ingredients: [
                    inputFluid.toJson(),
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
                energy: energy ? energy : 20000,
            })
            .id(id);
    }

    /**
     * 感应炉
     * @param {OutputItem_ | OutputItem_[]} outputs - 输出物品，支持字符串或数组（格式："Nx itemID" 或 "Nx #tagID"）
     * @param {InputItem_ | InputItem_[]} inputs - 输入物品数组（格式同上）
     * @param {number} [energy = 8000] - 所需能量，默认8000
     * @param {string} [id] - 自定义配方ID（可选）
     */
    function smelter(outputs, inputs, energy, id) {
        const outputList = Array.isArray(outputs) ? outputs : [outputs];
        const inputList = Array.isArray(inputs) ? inputs : [inputs];

        id = id ?? kjs('smelter', outputList[0].split(':')[1]);
        const ingredients = inputList.map(parseItem);
        const result = outputList.map(parseItem);
        event
            .custom({
                type: 'thermal:smelter',
                ingredients: ingredients,
                result: result,
                energy: energy ? energy : 8000,
            })
            .id(id);
    }

    /**
     * 结晶机
     * @param {OutputItem_} output
     * @param {InputItem_ | InputItem_[]} inputs
     * @param {Internal.FluidStackJS} inputFluid
     * @param {number} [energy = 10000]
     * @param {string} id
     */
    function crystallizer(output, inputs, inputFluid, energy, id) {
        const inputList = Array.isArray(inputs) ? inputs : [inputs];
        const ingredients = inputList.map(parseItem);
        ingredients.push(inputFluid.toJson());

        id = id ?? kjs('crystallizer', output.split(':')[1]);
        event
            .custom({
                type: 'thermal:crystallizer',
                ingredients: ingredients,
                result: parseItem(output),
                energy: energy ? energy : 20000,
            })
            .id(id);
    }

    /**
     * 多驱冲压机
     * @param {OutputItem_} output
     * @param {InputItem_ | InputItem_[]} inputs
     * @param {number} [energy = 2000]
     * @param {string} id
     */
    function press(output, inputs, energy, id) {
        const inputList = Array.isArray(inputs) ? inputs : [inputs];
        const ingredients = inputList.map(parseItem);

        id = id ?? kjs('press', output.split(':')[1]);
        event
            .custom({
                type: 'thermal:press',
                ingredients: ingredients,
                result: parseItem(output),
                energy: energy ? energy : 2000,
            })
            .id(id);
    }
});
