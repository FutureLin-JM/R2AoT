ServerEvents.recipes(event => {
    [
        { output: 'blitz', input: 'minecraft:sand' },
        { output: 'blizz', input: 'minecraft:snow_block' },
        { output: 'basalz', input: 'minecraft:blackstone' },
    ].forEach(recipe => {
        event
            .custom({
                type: 'cmr:custom_fan',
                ingredients: [
                    {
                        item: recipe.input,
                    },
                    {
                        amount: 1000,
                        fluid: 'r2aot:fluidedsource',
                    },
                ],
                results: [
                    Item.of(
                        'hostilenetworks:prediction',
                        `{data_model:{id:"hostilenetworks:thermal/${recipe.output}"}}`
                    ).toJson(),
                ],
            })
            .id(kjs('cmr_fan', `${recipe.output}_prediction`));
    });

    [
        { output: 'guardian', input: 'minecraft:lapis_lazuli' },
        { output: 'shulker', input: 'minecraft:chorus_fruit' },
        { output: 'warden', input: 'minecraft:amethyst_shard' },
    ].forEach(recipe => {
        event
            .custom({
                type: 'cmr:custom_fan',
                ingredients: [
                    {
                        item: recipe.input,
                    },
                    {
                        amount: 1000,
                        fluid: 'r2aot:power_essence',
                    },
                ],
                results: [
                    Item.of(
                        'hostilenetworks:prediction',
                        `{data_model:{id:"hostilenetworks:${recipe.output}"}}`
                    ).toJson(),
                ],
            })
            .id(kjs('cmr_fan', `${recipe.output}_prediction`));
    });
});
