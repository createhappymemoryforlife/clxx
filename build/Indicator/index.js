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
import { jsx, css } from "@emotion/core";
import { normalizeUnit } from "../utils/cssUtil";
import { getBarChangeKeyFrames } from "./style";
/**
 * SVG转圈指示器，一般用作loading效果
 * @param props
 */
export function Indicator(props) {
    const { size, rounded = true, barWidth = 7, barHeight = 28, barColor = "#fff", barCount = 12, duration = 500, containerStyle } = props, attributes = __rest(props, ["size", "rounded", "barWidth", "barHeight", "barColor", "barCount", "duration", "containerStyle"]);
    const radius = rounded ? barWidth / 2 : 0;
    const barList = [];
    for (let i = 0; i < barCount; i++) {
        barList.push(jsx("rect", { key: i, x: (100 - barWidth) / 2, y: "0", rx: radius, ry: radius, width: barWidth, height: barHeight, transform: `rotate(${(360 / barCount) * i}, 50, 50)`, css: {
                animationDelay: `${-(duration * (barCount - i)) / barCount}ms`,
            } }));
    }
    const style = {
        fontSize: 0,
    };
    if (typeof size !== undefined) {
        const unitSize = normalizeUnit(size);
        style.width = unitSize;
        style.height = unitSize;
    }
    const svgStyle = css({
        width: "100%",
        height: "100%",
        rect: {
            fill: "transparent",
            animationName: getBarChangeKeyFrames(barColor),
            animationDuration: `${duration}ms`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
        },
    });
    return (jsx("div", Object.assign({ css: [css(style), containerStyle] }, attributes),
        jsx("svg", { viewBox: "0 0 100 100", css: svgStyle }, barList)));
}
