/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { getStyle, LoadingHide } from "./style";
import { Indicator } from "../Indicator";
import { FixContainer } from "../Layout/FixContainer";
import { RowCenter } from "../Layout/Flex";
export function Wrapper(props) {
    const style = getStyle();
    const { state = "show", extra, maskProps = { showMask: false }, indicatorProps = {
        barWidth: 5,
        barHeight: 25,
        barCount: 14,
    }, onHide, showHideDuration = 200, containerStyle, } = props;
    // 设置动画逻辑
    let animation;
    if (state === "show") {
        animation = style.boxShow(showHideDuration);
    }
    else {
        animation = style.boxHide(showHideDuration);
    }
    // 动画结束时触发的函数逻辑
    const animationEnd = (event) => {
        if (event.animationName === LoadingHide.name) {
            onHide === null || onHide === void 0 ? void 0 : onHide();
        }
    };
    let box;
    if (extra) {
        let extraElement;
        if (React.isValidElement(extra)) {
            extraElement = extra;
        }
        else {
            extraElement = jsx("div", { css: style.defaultExtra }, extra);
        }
        box = (jsx(RowCenter, { css: [
                style.boxCommon,
                style.boxWithExtra,
                animation,
                containerStyle,
            ], onAnimationEnd: animationEnd },
            jsx(Indicator, Object.assign({}, indicatorProps)),
            extraElement));
    }
    else {
        box = (jsx(RowCenter, { css: [style.boxCommon, style.box, animation, containerStyle], onAnimationEnd: animationEnd },
            jsx(Indicator, Object.assign({}, indicatorProps))));
    }
    return jsx(FixContainer, Object.assign({}, maskProps), box);
}
