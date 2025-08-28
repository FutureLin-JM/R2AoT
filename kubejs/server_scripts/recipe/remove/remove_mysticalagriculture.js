ServerEvents.recipes(event => {
    event.remove({ type: 'mysticalagriculture:infusion' });

    let excludedEssenceItems = [];

    Ingredient.of('#mysticalagriculture:essences').itemIds.forEach(id => {
        if (!excludedEssenceItems.includes(id)) {
            event.remove({ type: 'cucumber:shaped_no_mirror', input: id });
            event.remove({ type: 'cucumber:shaped_tag', input: id });
        }
    });
});
