ServerEvents.recipes(event => {
    /**
     *
     * @param {OutputItem_} output
     * @param {InputItem_} input
     * @param {String} [id]
     */
    function crushing(output, input, id) {
        id = id ?? kjs('mek_crushing', output.split(':')[1]);
        event
            .custom({
                type: 'mekanism:crushing',
                input: { ingredient: parseItemWithoutCount(input) },
                output: parseItem(output),
            })
            .id(id);
    }

    global.allCrushingItems.forEach(recipe => {
        if (!recipe.mek) return;
        let id = recipe.id ? kjs('mek_crushing', recipe.id) : undefined;

        crushing(recipe.output, recipe.input, id);
    });
});
