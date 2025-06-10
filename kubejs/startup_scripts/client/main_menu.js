// if (Platform.isClientEnvironment()) {
//     let $MpucApi = Java.loadClass('com.jab125.mpuc.api.MpucApi');

//     let isStartup = false;
//     ForgeEvents.onEvent('net.minecraftforge.event.TickEvent$ClientTickEvent', event => {
//         if (event.phase != 'END' || isStartup) return;

//         let currentVer = $MpucApi.getInstance().getCurrentModpackVersion();
//         Client.setTitle(`Return to the Age of Technology v${currentVer}`);
//     })
// }