EntityEvents.spawned(event => {
    const { entity, server, level } = event
    if (entity.type == 'minecraft:ender_dragon') {
        server.scheduleInTicks(20, (callback) => {
            entity.kill()
        })
    }
})