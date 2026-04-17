ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(
        Commands.literal('mbtool').then(
            Commands.argument('structure', Arguments.STRING.create(event)).executes(ctx => {
                const structureName = Arguments.STRING.getResult(ctx, 'structure');
                const { player } = ctx.source;

                player.sendData('jei_mbtool_structure', { structureName: structureName });
                return 1;
            })
        )
    );
});
