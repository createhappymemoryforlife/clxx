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
import React from "react";
import { useRef, useState, useEffect } from "react";
export function Clickable(props) {
    let { children, bubble = true, className, activeClass, style, activeStyle, disable = false } = props, attrs = __rest(props, ["children", "bubble", "className", "activeClass", "style", "activeStyle", "disable"]);
    // 如果激活样式和激活类都不存在，则设置激活默认样式
    if (!activeClass && !activeStyle) {
        activeStyle = {
            opacity: 0.6,
        };
    }
    const [boxClass, setBoxClass] = useState(className);
    const [boxStyle, setBoxStyle] = useState(style);
    // 是否正处于触摸状态
    const isTouch = useRef(false);
    // 开始触摸时触发
    const start = (event) => {
        // 只有非触摸状态才能激活
        if (!isTouch.current) {
            // 设置正在触摸状态
            isTouch.current = true;
            // 阻止冒泡
            if (!bubble) {
                event.stopPropagation();
            }
            // 如果激活类存在
            if (typeof activeClass === "string") {
                setBoxClass(typeof boxClass === "string"
                    ? `${boxClass} ${activeClass}`
                    : activeClass);
            }
            // 如果激活样式存在
            if (typeof activeStyle === "object") {
                setBoxStyle(typeof boxStyle === "object"
                    ? Object.assign(Object.assign({}, boxStyle), activeStyle) : activeStyle);
            }
        }
    };
    // 触摸结束时触发，cancel和end都认为是结束
    const end = () => {
        if (isTouch.current) {
            isTouch.current = false;
            setBoxClass(className);
            setBoxStyle(style);
        }
    };
    // 判断是否是触摸环境
    const isTouchEnvironment = window.ontouchstart !== undefined;
    useEffect(() => {
        if (!disable && !isTouchEnvironment) {
            const handleMouseUp = () => {
                if (isTouch.current) {
                    isTouch.current = false;
                    setBoxClass(className);
                    setBoxStyle(style);
                }
            };
            document.documentElement.addEventListener("mouseup", handleMouseUp);
            return () => {
                document.documentElement.removeEventListener("mouseup", handleMouseUp);
            };
        }
    }, [className, style]);
    const fullAttrs = Object.assign(Object.assign({}, attrs), { className: boxClass, style: boxStyle });
    // 非禁用状态有点击态行为
    if (!disable) {
        if (isTouchEnvironment) {
            // 当前如果是触摸环境
            fullAttrs.onTouchStart = start;
            fullAttrs.onTouchEnd = end;
            fullAttrs.onTouchCancel = end;
        }
        else {
            fullAttrs.onMouseDown = start;
        }
    }
    return React.createElement("div", Object.assign({}, fullAttrs), children);
}
