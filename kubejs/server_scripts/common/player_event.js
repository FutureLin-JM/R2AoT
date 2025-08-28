PlayerEvents.tick(event => {
    const { player } = event;
    player.setFoodLevel(20);
    player.setSaturation(20);
});
