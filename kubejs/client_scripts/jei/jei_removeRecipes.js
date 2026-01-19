JEIEvents.removeRecipes(event => {
    global.imbuementChargeRecipes.forEach(recipe => {
        const id = recipe.id ?? `kubejs:imbuement_charge/${recipe.output.split(':')[1]}`;
        event.remove('ars_nouveau:imbuement', [id]);
    });
});
