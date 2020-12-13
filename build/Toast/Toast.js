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
import React, { useState, useEffect } from "react";
import { getStyle, hideAnimation } from "./style";
export function Toast(props) {
    const { content = "", position = "middle", duration = 3000, rounded = true, offsetTop = 30, offsetBottom = 30, onHide = () => undefined, containerStyle, contentStyle } = props, attributes = __rest(props, ["content", "position", "duration", "rounded", "offsetTop", "offsetBottom", "onHide", "containerStyle", "contentStyle"]);
    // 获取所有的样式
    const style = getStyle();
    const [animation, setAnimation] = useState(style.containerShow);
    useEffect(() => {
        const timer = window.setTimeout(() => {
            setAnimation(style.containerHide);
        }, duration);
        return () => {
            window.clearInterval(timer);
        };
    }, []);
    let showContent;
    const middleStyle = position === "middle" ? style.contentMiddle : undefined;
    if (React.isValidElement(content)) {
        showContent = jsx("div", { css: [middleStyle, contentStyle] }, content);
    }
    else {
        showContent = (jsx("p", { css: [style.content(rounded), middleStyle, contentStyle] }, content));
    }
    // toast消失动画结束触发
    const animationEnd = (event) => {
        if (event.animationName === hideAnimation.name) {
            onHide === null || onHide === void 0 ? void 0 : onHide();
        }
    };
    let positionStyle;
    if (position === "top") {
        positionStyle = style.top(offsetTop);
    }
    else if (position === "bottom") {
        positionStyle = style.bottom(offsetBottom);
    }
    else {
        positionStyle = style.middle;
    }
    return (jsx("div", Object.assign({ css: [style.container, positionStyle, animation, containerStyle], onAnimationEnd: animationEnd }, attributes), showContent));
}
