// priority: 50
StartupEvents.recipeSchemaRegistry(event => {
    const { components } = event;

    event.register(
        'botania:petal_apothecary',
        new $RecipeSchema(
            components.get('outputItem')().key('output'),
            components.get('inputItemArray')().key('ingredients'),
            components.get('inputItem')().key('reagent').optional('#botania:seed_apothecary_reagent').alwaysWrite()
        )
    );

    event.register(
        'botania:mana_infusion',
        new $RecipeSchema(
            components.get('outputItem')().key('output'),
            components.get('inputItemArray')().key('input'),
            components.get('intNumber')().key('mana').optional(500).alwaysWrite(),
            // 催化剂部分放弃，真的不会写！！！
        )
    )

    event.register(
        'botania:runic_altar',
        new $RecipeSchema(
            components.get('outputItem')().key('output'),
            components.get('inputItemArray')().key('ingredients'),
            components.get('intNumber')().key('mana').optional(5200).alwaysWrite()
        )
    );

    event.register(
        'botania:elven_trade',
        new $RecipeSchema(
            components.get('outputItemArray')().key('output'),
            components.get('inputItemArray')().key('ingredients')
        )
    );

    event.register(
        'botania:terra_plate',
        new $RecipeSchema(
            components.get('outputItem')().key('result'),
            components.get('inputItemArray')().key('ingredients'),
            components.get('intNumber')().key('mana').optional(500000).alwaysWrite()
        )
    );

})