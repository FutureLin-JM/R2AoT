/**
 *
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

/**
 * 判断点是否在多边形内部（射线法）
 * @param {{x: number, y: number}} pt 要检测的点坐标
 * @param {Array<{x: number, y: number}>} vertices 多边形顶点数组（按顺序）
 * @returns {boolean} 如果点在多边形内部返回true，否则返回false
 */
function pointInPoly(pt, vertices) {
    let inside = false;
    for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
        let xi = vertices[i].x,
            yi = vertices[i].y;
        let xj = vertices[j].x,
            yj = vertices[j].y;
        let intersect = yi > pt.y !== yj > pt.y && pt.x < ((xj - xi) * (pt.y - yi)) / (yj - yi) + xi;
        if (intersect) inside = !inside;
    }
    return inside;
}
