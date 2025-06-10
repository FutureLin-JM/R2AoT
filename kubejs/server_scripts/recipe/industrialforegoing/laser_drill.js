ServerEvents.recipes(event => {
    const ores = [
        {id: 'thermal:tin_ore', Y: 63, weight: 90, laser: 8},
        {id: 'thermal:lead_ore', Y: 65, weight: 90, laser: 10},
        {id: 'thermal:silver_ore', Y: 67, weight: 90, laser: 7},
        {id: 'thermal:nickel_ore', Y: 69, weight: 90, laser: 4},
        {id: 'thermal:apatite_ore', Y: 63, weight: 10, laser: 8},
        {id: 'thermal:cinnabar_ore', Y: 65, weight: 10, laser: 10},
        {id: 'thermal:niter_ore', Y: 67, weight: 10, laser: 7},
        {id: 'thermal:sulfur_ore', Y: 69, weight: 10, laser: 4},
    ]

    ores.forEach(ore => {
        const itemName = ore.id.split(':')[1];
        event.custom({
            type: "industrialforegoing:laser_drill_ore",
            output: { item: ore.id },
            rarity: [
                {
                  whitelist: {},
                  blacklist: {},
                  depth_min: ore.Y,
                  depth_max: ore.Y,
                  weight: ore.weight,
                },
              ],
            pointer: 0,
            catalyst: { item: `industrialforegoing:laser_lens${ore.laser}` },
        }).id(`kubejs:laser_drill_ore/${itemName}`)
    })
})