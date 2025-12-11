ServerEvents.loaded(event => {
    const { server } = event;
    if (!server.persistentData.getBoolean('first_loaded')) {
        server.gameRules.set('keepInventory', 'true');
        server.gameRules.set('doInsomnia', 'false');
        server.gameRules.set('doTraderSpawning', 'false');
        server.gameRules.set('doWeatherCycle', 'false');
        server.gameRules.set('doMobSpawning', 'false');
        server.gameRules.set('doDaylightCycle', 'false');

        server.getLevel('minecraft:overworld').setDayTime(1000);

        server.persistentData.putBoolean('first_loaded', true);
    }
});