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
import { jsx, css } from '@emotion/core';
import { useState, useEffect } from 'react';
import { getStyle, Bubble } from './style';
import { useInterval } from 'react-use';
/**
 * 滚动循环轮播公告
 * @param props
 */
export function CarouselNotice(props) {
    const { width, height, justify = 'center', interval = 3000, duration = 200, list = [], containerStyle, wrapperStyle, itemStyle } = props, attrs = __rest(props, ["width", "height", "justify", "interval", "duration", "list", "containerStyle", "wrapperStyle", "itemStyle"]);
    const [current, setCurrent] = useState(0);
    const [animation, setAnimation] = useState(false);
    const style = getStyle();
    /**
     * 一旦列表发生更新时，触发的逻辑
     */
    useEffect(() => {
        setCurrent(0);
        setAnimation(false);
    }, [list]);
    /**
     * 每隔多少秒更新一次动画
     */
    useInterval(() => {
        setAnimation(true);
    }, list.length > 1 ? interval : null);
    /**
     * 当前显示的两条数据，只用两条数据来轮播
     */
    const showContent = () => {
        const itemStyle = {};
        if (justify === 'center') {
            itemStyle.justifyContent = 'center';
        }
        else if (justify === 'start') {
            itemStyle.justifyContent = 'flex-start';
        }
        else if (justify === 'end') {
            itemStyle.justifyContent = 'flex-end';
        }
        else {
            itemStyle.justifyContent = 'center';
        }
        const itemCss = [itemStyle, style.item];
        if (list.length === 1) {
            return (jsx("div", { css: [itemCss, itemStyle], key: 0 }, list[0]));
        }
        const showList = [];
        if (current === list.length - 1) {
            showList.push(jsx("div", { css: [itemCss, itemStyle], key: current }, list[list.length - 1]));
            showList.push(jsx("div", { css: [itemCss, itemStyle], key: 0 }, list[0]));
        }
        else {
            showList.push(jsx("div", { css: [itemCss, itemStyle], key: current }, list[current]));
            showList.push(jsx("div", { css: [itemCss, itemStyle], key: current + 1 }, list[current + 1]));
        }
        return showList;
    };
    /**
     * 获取动画
     */
    const getAnimation = () => {
        if (!animation || list.length <= 1) {
            return null;
        }
        return css({
            animationName: Bubble,
            animationTimingFunction: 'linear',
            animationDuration: `${duration}ms`,
        });
    };
    /**
     * 一轮动画结束时触发下一轮
     */
    const animationEnd = () => {
        let newIndex = current + 1;
        if (current >= list.length - 1) {
            newIndex = 0;
        }
        setCurrent(newIndex);
        setAnimation(false);
    };
    return (Array.isArray(list) &&
        list.length > 0 && (jsx("div", Object.assign({}, attrs, { css: [style.box, { width, height }, containerStyle] }),
        jsx("div", { onAnimationEnd: animationEnd, css: [style.wrapper, getAnimation(), wrapperStyle] }, showContent()))));
}
