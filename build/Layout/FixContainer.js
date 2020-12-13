var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { getEnv } from '../utils/global';
/**
 * fix定位的容器元素，一般作为弹框的背景
 * @param props
 */
export function FixContainer(props) {
    const env = getEnv();
    const { showMask = true, maskColor = `rgba(0, 0, 0, .4)`, centerChild = true, maxWidth = `${env.criticalWidth}px`, zIndex = 9999, children, containerStyle } = props, attributes = __rest(props, ["showMask", "maskColor", "centerChild", "maxWidth", "zIndex", "children", "containerStyle"]);
    /**
     * 容器默认样式
     */
    const styles = {
        position: 'fixed',
        left: '50%',
        zIndex,
        width: '100%',
        maxWidth,
        transform: `translateX(-50%)`,
        height: '100vh',
        top: 0,
    };
    if (showMask) {
        styles.backgroundColor = maskColor;
    }
    if (centerChild) {
        styles.display = 'flex';
        styles.justifyContent = 'center';
        styles.alignItems = 'center';
    }
    return (jsx("div", Object.assign({ css: [styles, containerStyle] }, attributes), children));
}
