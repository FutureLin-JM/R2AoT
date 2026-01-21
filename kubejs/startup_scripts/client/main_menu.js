if (Platform.isClientEnvironment()) {
    let $TitleScreen = Java.loadClass('net.minecraft.client.gui.screens.TitleScreen');
    let $Button = Java.loadClass('net.minecraft.client.gui.components.Button');
    let $ButtonUtils = Java.loadClass('com.jab125.mpuc.client.util.ButtonUtils');

    let $MpucApi = Java.loadClass('com.jab125.mpuc.api.MpucApi');
    let $BrandingControl = Java.loadClass('net.minecraftforge.internal.BrandingControl');
    let $ArrayList = Java.loadClass('java.util.ArrayList');
    let $SoundInstance = Java.loadClass('net.minecraft.client.resources.sounds.SoundInstance');
    let $SimpleSoundInstance = Java.loadClass('net.minecraft.client.resources.sounds.SimpleSoundInstance');

    ForgeEvents.onEvent('net.minecraftforge.client.event.ScreenEvent$Init$Post', event => {
        const { screen } = event;

        if (screen instanceof $TitleScreen) {
            let buttonWidth = 50;
            let buttonHeight = 20;
            let margin = 10;

            let buddons = [
                { label: 'QQ交流群', url: 'https://qm.qq.com/q/FnCvsQeoQW' },
                { label: 'Github', url: 'https://github.com/FutureLin-JM/R2AoT' },
                { label: '爱发电', url: 'https://afdian.com/a/FeatureLin' },
            ];

            buddons.forEach((button, index) => {
                screen.addRenderableWidget(
                    $Button
                        .builder(button.label, () => {
                            $ButtonUtils.confirmLink(screen, false, button.url);
                        })
                        .bounds(
                            screen.width - buttonWidth - margin,
                            screen.height - (buttonHeight + margin) * (buddons.length - index) - margin,
                            buttonWidth,
                            buttonHeight
                        )
                        .build()
                );
            });
        }
    });

    let isStartup = false;
    ForgeEvents.onEvent('net.minecraftforge.event.TickEvent$ClientTickEvent', event => {
        if (event.phase != 'END' || isStartup) return;

        // 设置标题
        let currentVer = $MpucApi.getInstance().getCurrentModpackVersion();
        Client.setTitle(`Return to the Age of Technology v${currentVer}`);

        // 获取品牌信息
        let brandingControl = new $BrandingControl();
        let brandingsField = $BrandingControl.__javaObject__.getDeclaredField('brandings');
        brandingsField.setAccessible(true);

        let computeBranding = $BrandingControl.__javaObject__.getDeclaredMethod('computeBranding');
        computeBranding.setAccessible(true);
        computeBranding.invoke(null);

        let brandings = brandingsField.get(brandingControl);
        let newBrandings = new $ArrayList();
        newBrandings.addAll(brandings);

        // 检查更新
        let lastestVer = $MpucApi.getInstance().getLatestModpackVersion() ?? currentVer;
        let hasUpdate = currentVer != lastestVer;
        let updateMessage = hasUpdate ? Text.translate('r2aot.startup.new_version', lastestVer).getString() : '';

        // 添加版本信息
        newBrandings.add(Text.translate('r2aot.startup.version', currentVer, updateMessage).getString());

        brandingsField.set(brandingControl, newBrandings);

        // 播放启动音效
        let randomSource = $SoundInstance.createUnseededRandom();
        Client.soundManager.play(
            new $SimpleSoundInstance('block.note_block.bell', 'master', 0.9, 1.8, randomSource, 0, 0, 0)
        );

        isStartup = true;
    });
}
