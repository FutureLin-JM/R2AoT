FTBQuestsEvents.customTask('20B24990757D0DB6', (event) => {
    event.maxProgress = 1;

    event.setCheckTimer(20);

    event.setCheck((task, player) => {
        if (player.inventory.allItems.some((item) => item.hasTag('botania:mystical_flowers'))) {
            task.progress = 1;
        }
    });
});

FTBQuestsEvents.customTask('4F0FBB2AF010B1B2', (event) => {
    event.maxProgress = 1;

    event.setCheckTimer(20);

    event.setCheck((task, player) => {
        if (player.inventory.allItems.some((item) => item.hasTag('botania:petals'))) {
            task.progress = 1;
        }
    });
});


