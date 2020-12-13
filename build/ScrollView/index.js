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
import { useRef } from "react";
import { Indicator } from "../Indicator";
import { RowCenter } from "../Layout/Flex";
import { getStyle } from "./style";
export function ScrollView(props) {
    const style = getStyle();
    const { children, height, reachTopThreshold = 50, onReachTop, reachBottomThreshold = 50, onReachBottom, showLoading = true, loadingContent, onScroll, containerStyle, wrapperStyle, loadingStyle } = props, attrs = __rest(props, ["children", "height", "reachTopThreshold", "onReachTop", "reachBottomThreshold", "onReachBottom", "showLoading", "loadingContent", "onScroll", "containerStyle", "wrapperStyle", "loadingStyle"]);
    // 容器高度
    const heightStyle = {};
    if (height) {
        heightStyle.height = height;
    }
    // 是否显示loading
    // const [loadingShow, setLoadingShow] = useState<boolean>(false);
    // 滚动容器
    const container = useRef(null);
    // 当前滚动到顶部的距离
    const top = useRef(0);
    const scrollCallback = (rawEvent) => {
        var _a, _b, _c;
        // 滚动容器的子元素内容
        const children = container.current.children;
        // 滚动内容总高度
        const contentHeight = (_a = children.item(0)) === null || _a === void 0 ? void 0 : _a.scrollHeight;
        // loading高度
        const loadingHeight = (_c = (_b = children.item(1)) === null || _b === void 0 ? void 0 : _b.scrollHeight) !== null && _c !== void 0 ? _c : 0;
        // 容器高度
        const containerHeight = container.current.getBoundingClientRect().height;
        // 最大滚动距离
        const maxScroll = contentHeight - containerHeight;
        // 已经滚动的距离
        const scrollTop = container.current.scrollTop;
        // 生成滚动事件参数
        const event = {
            containerHeight,
            contentHeight: contentHeight,
            maxScroll,
            scrollTop,
            direction: scrollTop > top.current ? "downward" : "upward",
            rawEvent,
        };
        // 调用输入的滚动事件
        onScroll === null || onScroll === void 0 ? void 0 : onScroll(event);
        // 判断是否触发触顶事件
        if (event.direction === "upward" && scrollTop < reachTopThreshold) {
            onReachTop === null || onReachTop === void 0 ? void 0 : onReachTop(event);
        }
        // 判断是否触发触底事件
        if (event.direction === "downward" &&
            scrollTop > maxScroll - reachBottomThreshold - loadingHeight) {
            onReachBottom === null || onReachBottom === void 0 ? void 0 : onReachBottom(event);
        }
        // 更新scrollTop上次的值
        top.current = scrollTop;
    };
    // loading内容
    let showLoadingContent = null;
    if (showLoading) {
        if (!loadingContent) {
            showLoadingContent = (jsx(RowCenter, { css: [style.loading, loadingStyle] },
                jsx(Indicator, { barColor: "#666", barCount: 14 }),
                jsx("p", null, "\u6570\u636E\u52A0\u8F7D\u4E2D...")));
        }
        else {
            showLoadingContent = loadingContent;
        }
    }
    return (jsx("div", Object.assign({ css: [style.container, heightStyle, containerStyle], onScroll: scrollCallback, ref: container }, attrs),
        jsx("div", { css: wrapperStyle }, children),
        showLoadingContent));
}
