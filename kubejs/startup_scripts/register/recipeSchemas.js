// priority: 50
StartupEvents.recipeSchemaRegistry(event => {
    const { components } = event;

    const outputItem = components.get('outputItem')();
    const outputItemArray = components.get('outputItemArray')();
    const inputItem = components.get('inputItem')();
    const inputItemArray = components.get('inputItemArray')();
    const intNumber = components.get('intNumber')();
    const bool = components.get('bool')();

    const registryItemObject = components.get('registryObject')({ registry: 'item' });

    event.register(
        'botania:petal_apothecary',
        new $RecipeSchema(
            outputItem.key('output'),
            inputItemArray.key('ingredients'),
            inputItem.key('reagent').optional('#botania:seed_apothecary_reagent').alwaysWrite()
        )
    );

    event.register(
        'botania:mana_infusion',
        new $RecipeSchema(
            outputItem.key('output'),
            inputItemArray.key('input'),
            intNumber.key('mana').optional(500).alwaysWrite()
            // 催化剂部分放弃，真的不会写！！！
        )
    );

    event.register(
        'botania:runic_altar',
        new $RecipeSchema(
            outputItem.key('output'),
            inputItemArray.key('ingredients'),
            intNumber.key('mana').optional(5200).alwaysWrite()
        )
    );

    event.register(
        'botania:elven_trade',
        new $RecipeSchema(outputItemArray.key('output'), inputItemArray.key('ingredients'))
    );

    event.register(
        'botania:terra_plate',
        new $RecipeSchema(
            outputItem.key('result'),
            inputItemArray.key('ingredients'),
            intNumber.key('mana').optional(500000).alwaysWrite()
        )
    );

    event.register(
        'mysticalagriculture:infusion',
        new $RecipeSchema(outputItem.key('result'), inputItem.key('input'), inputItemArray.key('ingredients'))
    );

    event.register(
        'ars_nouveau:enchanting_apparatus',
        new $RecipeSchema(
            outputItem.key('output'),
            inputItemArray.key('pedestalItems'),
            inputItemArray.key('reagent'),
            intNumber.key('sourceCost').optional(0),
            bool.key('keepNbtOfReagent').optional(false)
        )
    );

    let pedestalComponent = new $RecipeComponentBuilder(1)
        .add(inputItem.key('item'))
        .mapIn(original => {
            if (original instanceof $JsonObject) return original;
            if (original && original.item != null) {
                return original;
            }
            return { item: original };
        })
        .asArray();

    event.register(
        'ars_nouveau:imbuement',
        new $RecipeSchema(
            registryItemObject.key('output'),
            inputItem.key('input'),
            intNumber.key('source').optional(0),
            pedestalComponent.key('pedestalItems').optional([]).alwaysWrite(),
            intNumber.key('count').optional(1).alwaysWrite()
        )
    );
});
