ServerEvents.recipes(event => {
    [
        { output: 'embers:ember_crystal', weight: 30 },
        { output: 'embers:ember_shard', weight: 50 },
        { output: 'embers:ember_grit', weight: 20 },
    ].forEach(boring => {
        event
            .custom({
                type: 'embers:boring',
                dimensions: ['minecraft:the_nether'],
                output: {
                    item: boring.output,
                },
                required_block: {
                    amount: 5,
                    block_tag: 'r2aot:ember_blocktag',
                },
                weight: boring.weight,
            })
            .id(kjs('boring/nether' + boring.output.split(':')[1]));
    });
});
