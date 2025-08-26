/**
 * 创建检查玩家是否拥有特定标签物品的FTB任务
 * @param {string} taskId - 任务ID
 * @param {ResourceLocation_} itemTag - 物品标签
 */
function createItemTagQuest(taskId, itemTag) {
    FTBQuestsEvents.customTask(taskId, event => {
        event.maxProgress = 1;
        event.setCheckTimer(20);
        event.setCheck((task, player) => {
            if (player.inventory.allItems.some((item) => item.hasTag(itemTag))) {
                task.progress = 1;
            }
        });
    });
};

createItemTagQuest('20B24990757D0DB6', 'botania:mystical_flowers');
createItemTagQuest('4F0FBB2AF010B1B2', 'botania:petals');
createItemTagQuest('1AFCE515C651279A', 'functionalstorage:drawer');