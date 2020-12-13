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
 * 弹性容器
 * @param props
 */
export function FlexBox(props) {
    const { children, 
    // 默认任意方向的纵轴都居中显示
    alignItems = "center", flexDirection, justifyContent, flexWrap, alignContent, flexFlow } = props, attrs = __rest(props, ["children", "alignItems", "flexDirection", "justifyContent", "flexWrap", "alignContent", "flexFlow"]);
    return (jsx("div", Object.assign({ css: {
            display: "flex",
            flexDirection,
            alignItems,
            justifyContent,
            flexWrap,
            alignContent,
            flexFlow,
        } }, attrs), children));
}
/**
 * 弹性元素
 * @param props
 */
export function FlexItem(props) {
    const { children, flex, flexBasis, flexGrow, flexShrink, order, alignSelf } = props, attrs = __rest(props, ["children", "flex", "flexBasis", "flexGrow", "flexShrink", "order", "alignSelf"]);
    return (jsx("div", Object.assign({ css: {
            flex,
            flexBasis,
            flexGrow,
            flexShrink,
            order,
            alignSelf,
        } }, attrs), children));
}
export function Row(props) {
    const { flexDirection = "row" } = props, others = __rest(props, ["flexDirection"]);
    return jsx(FlexBox, Object.assign({ flexDirection: flexDirection }, others));
}
export function Col(props) {
    const { flexDirection = "column" } = props, others = __rest(props, ["flexDirection"]);
    return jsx(FlexBox, Object.assign({ flexDirection: flexDirection }, others));
}
export function RowAround(props) {
    const { justifyContent = "space-around" } = props, others = __rest(props, ["justifyContent"]);
    return jsx(FlexBox, Object.assign({ justifyContent: justifyContent }, others));
}
export function RowBetween(props) {
    const { justifyContent = "space-between" } = props, others = __rest(props, ["justifyContent"]);
    return jsx(FlexBox, Object.assign({ justifyContent: justifyContent }, others));
}
export function RowEvenly(props) {
    const { justifyContent = "space-evenly" } = props, others = __rest(props, ["justifyContent"]);
    return jsx(FlexBox, Object.assign({ justifyContent: justifyContent }, others));
}
export function RowCenter(props) {
    const { justifyContent = "center" } = props, others = __rest(props, ["justifyContent"]);
    return jsx(FlexBox, Object.assign({ justifyContent: justifyContent }, others));
}
export function RowStart(props) {
    const { justifyContent = "flex-start" } = props, others = __rest(props, ["justifyContent"]);
    return jsx(FlexBox, Object.assign({ justifyContent: justifyContent }, others));
}
export function RowEnd(props) {
    const { justifyContent = "flex-end" } = props, others = __rest(props, ["justifyContent"]);
    return jsx(FlexBox, Object.assign({ justifyContent: justifyContent }, others));
}
export function ColAround(props) {
    const { flexDirection = "column", justifyContent = "space-around" } = props, others = __rest(props, ["flexDirection", "justifyContent"]);
    return (jsx(FlexBox, Object.assign({ flexDirection: flexDirection, justifyContent: justifyContent }, others)));
}
export function ColBetween(props) {
    const { flexDirection = "column", justifyContent = "space-between" } = props, others = __rest(props, ["flexDirection", "justifyContent"]);
    return (jsx(FlexBox, Object.assign({ flexDirection: flexDirection, justifyContent: justifyContent }, others)));
}
export function ColEvenly(props) {
    const { flexDirection = "column", justifyContent = "space-evenly" } = props, others = __rest(props, ["flexDirection", "justifyContent"]);
    return (jsx(FlexBox, Object.assign({ flexDirection: flexDirection, justifyContent: justifyContent }, others)));
}
export function ColCenter(props) {
    const { flexDirection = "column", justifyContent = "center" } = props, others = __rest(props, ["flexDirection", "justifyContent"]);
    return (jsx(FlexBox, Object.assign({ flexDirection: flexDirection, justifyContent: justifyContent }, others)));
}
export function ColStart(props) {
    const { flexDirection = "column", justifyContent = "flex-start" } = props, others = __rest(props, ["flexDirection", "justifyContent"]);
    return (jsx(FlexBox, Object.assign({ flexDirection: flexDirection, justifyContent: justifyContent }, others)));
}
export function ColEnd(props) {
    const { flexDirection = "column", justifyContent = "flex-end" } = props, others = __rest(props, ["flexDirection", "justifyContent"]);
    return (jsx(FlexBox, Object.assign({ flexDirection: flexDirection, justifyContent: justifyContent }, others)));
}
