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
import { jsx } from "@emotion/core";
/**
 * 定位相关
 * @param props
 */
export function Position(props) {
    const { children, position, top, left, right, bottom, width, height } = props, attrs = __rest(props, ["children", "position", "top", "left", "right", "bottom", "width", "height"]);
    return (jsx("div", Object.assign({ css: { position, top, left, right, bottom, width, height } }, attrs), children));
}
export function Absolute(props) {
    const { position = "absolute" } = props, others = __rest(props, ["position"]);
    return jsx(Position, Object.assign({ position: position }, others));
}
export function Relative(props) {
    const { position = "relative" } = props, others = __rest(props, ["position"]);
    return jsx(Position, Object.assign({ position: position }, others));
}
export function Fixed(props) {
    const { position = "fixed" } = props, others = __rest(props, ["position"]);
    return jsx(Position, Object.assign({ position: position }, others));
}
export function Sticky(props) {
    const { position = "sticky" } = props, others = __rest(props, ["position"]);
    return jsx(Position, Object.assign({ position: position }, others));
}
