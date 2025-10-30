ServerEvents.recipes(event => {
    const { shaped } = event.recipes.ifeu;

    /**
     * 流体工作台
     * @param {OutputItem_} output
     * @param {string[]} pattern
     * @param {{ [key in string]: InputItem_; }} key
     * @param {Internal.InputFluid_} inputFluid
     * @param {ResourceLocation_} [id]
     */
    function shapedRecipes(output, pattern, key, inputFluid, id) {
        id = id ?? kjs('ifeu_shaped', output.split(':')[1]);

        const inputs = pattern.reduce((acc, str) => {
            const replacedChars = str.split('').map(char => {
                if (char === ' ' || !key[char]) {
                    return 'ifeu:air';
                }
                return key[char];
            });
            return acc.concat(replacedChars);
        }, []);

        shaped(output, inputs, inputFluid).id(id);
    }

    shapedRecipes(
        'botania:alfheim_portal',
        ['ABA', 'ABA', 'ABA'],
        {
            A: '#botania:livingwood_logs',
            B: 'botania:terrasteel_nugget',
        },
        Fluid.of('r2aot:fluidedsource', 9000)
    );
});
