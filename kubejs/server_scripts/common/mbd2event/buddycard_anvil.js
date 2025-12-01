const buddycardAnvilModeConfig = [
    {
        id: 1,
        name: 'crafting',
        buttonId: 'crafting_mode',
        lightId: 'light_crafting',
        isAvailable: machine => {
            return true;
        },
    },
    {
        id: 2,
        name: 'conversion',
        buttonId: 'conversion_mode',
        lightId: 'light_conversion',
        isAvailable: machine => {
            return findComponent(machine, 'minecraft:apple');
        },
    },
];

const lightMode = {
    close: new ResourceTexture['(java.lang.String)']('r2aot:textures/gui/light_close.png'),
    blue: new ResourceTexture['(java.lang.String)']('r2aot:textures/gui/light_blue.png'),
    red: new ResourceTexture['(java.lang.String)']('r2aot:textures/gui/light_red.png'),
};

MBDMachineEvents.onPlaced('r2aot:buddycard_anvil', event => {
    const { machine } = event.getEvent();
    const { level, customData } = machine;

    customData.putDouble('mode', 1);
    customData.putBoolean('crafting_available', true);
    customData.putBoolean('conversion_available', false);

    machine.setMachineState('crafting');
});

MBDMachineEvents.onTick('r2aot:buddycard_anvil', event => {
    const { machine } = event.getEvent();
    const { customData, recipeLogic } = machine;

    let craftingAvailable = buddycardAnvilModeConfig[0].isAvailable(machine);
    let conversionAvailable = buddycardAnvilModeConfig[1].isAvailable(machine);

    customData.putBoolean('crafting_available', craftingAvailable);
    customData.putBoolean('conversion_available', conversionAvailable);

    let modeData = machine.customData.getDouble('mode');
    let currentState = machine.getMachineState().name();

    let currentModeIsAvailable = buddycardAnvilModeConfig[modeData - 1].isAvailable(machine);
    if (modeData !== 1 && !currentModeIsAvailable) {
        customData.putDouble('mode', 1);
    }

    if (modeData == 1 && currentState != 'crafting') {
        machine.setMachineState('crafting');
    } else if (modeData == 2 && currentState != 'conversion') {
        machine.setMachineState('conversion');
    }

    let outputTrait = machine.getTraitByName('item_output');
    let hasemptyslot = false;
    for (let i = 0; i < 9; i++) {
        let outputStack = outputTrait.storage.getStackInSlot(i);
        if (outputStack.isEmpty()) {
            hasemptyslot = true;
            break;
        }
    }

    if (hasemptyslot) {
        if (recipeLogic.isSuspend()) {
            recipeLogic.setStatus('idle');
        }
    } else {
        recipeLogic.setStatus('suspend');
    }
});

MBDMachineEvents.onUI('r2aot:buddycard_anvil', event => {
    const { machine, root } = event.getEvent();

    setupModeButton(machine, root);
    setupModeLight(machine, root);
});

/**
 * 查找机器中是否存在指定ID的组件
 * @param {Internal.MBDMachine} machine
 * @param {String} id 组件ID
 * @returns {Boolean}
 */
function findComponent(machine, id) {
    let componentTrait = machine.getTraitByName('component_slot');
    for (let i = 0; i < 4; i++) {
        /**@type {Internal.ItemStack} */
        let componentStack = componentTrait.storage.getStackInSlot(i);
        if (componentStack.id == id) {
            return true;
        }
    }
    return false;
}

/**
 * 设置模式按钮的点击事件
 * @param {Internal.MBDMachine} machine
 * @param {WidgetGroup} root
 */
function setupModeButton(machine, root) {
    const { customData } = machine;
    /**@type {ButtonWidget} */
    const craftingModeButton = root.getFirstWidgetById('crafting_mode');
    /**@type {ButtonWidget} */
    const conversionModeButton = root.getFirstWidgetById('conversion_mode');

    craftingModeButton.setOnPressCallback(clickData => {
        let currentMode = customData.getDouble('mode');
        let currentState = machine.getMachineState().name();
        if (currentMode != 1 || currentState != 'crafting') {
            customData.putDouble('mode', 1);
        }
    });

    conversionModeButton.setOnPressCallback(clickData => {
        if (customData.getBoolean('conversion_available')) {
            let currentMode = customData.getDouble('mode');
            let currentState = machine.getMachineState().name();
            if (currentMode != 2 || currentState != 'conversion') {
                customData.putDouble('mode', 2);
            }
        }
    });
}

/**
 * 设置模式指示灯的显示状态
 * @param {Internal.MBDMachine} machine
 * @param {WidgetGroup} root
 */
function setupModeLight(machine, root) {
    /**@type {ImageWidget} */
    const craftingLight = root.getFirstWidgetById('light_crafting');
    craftingLight['setImage(java.util.function.Supplier)'](() => {
        let currentMode = machine.customData.getDouble('mode');
        let isAvailable = machine.customData.getBoolean('crafting_available');
        let isCurrent = buddycardAnvilModeConfig[0].id === currentMode;

        if (!isAvailable) {
            return lightMode.close;
        } else if (isCurrent) {
            return lightMode.blue;
        } else {
            return lightMode.red;
        }
    });

    /**@type {ImageWidget} */
    const conversionLight = root.getFirstWidgetById('light_conversion');
    conversionLight['setImage(java.util.function.Supplier)'](() => {
        let currentMode = machine.customData.getDouble('mode');
        let isAvailable = machine.customData.getBoolean('conversion_available');
        let isCurrent = buddycardAnvilModeConfig[1].id === currentMode;

        if (!isAvailable) {
            return lightMode.close;
        } else if (isCurrent) {
            return lightMode.blue;
        } else {
            return lightMode.red;
        }
    });
}
