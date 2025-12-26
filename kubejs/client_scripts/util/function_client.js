/**
 * @param {Internal.GuiGraphics} guiGraphics
 * @param {String} text
 * @param {Number} px
 * @param {Number} py
 */
function drawCenteredString(guiGraphics, text, px, py) {
    guiGraphics.class.declaredMethods
        .filter(method => method.name.includes('m_280137_'))[0]
        .invoke(guiGraphics, [
            Client.font,
            new String(text),
            $Integer.valueOf(`${px}`),
            $Integer.valueOf(`${py}`),
            $Integer.valueOf('16777215'), // 0xFFFFFF （白色）
        ]);
}
