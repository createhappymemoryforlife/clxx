/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FixContainer } from "../Layout/FixContainer";
import { style, containerHide } from "./style";
export function Wrapper(props) {
    const { type = "dialog", animationStatus = "show", animationDuration = 200, children, onHide, maskOption, boxStyle, onMaskClick, } = props;
    let containerAnimation;
    let boxAnimation;
    if (animationStatus === "show") {
        containerAnimation = style.containerShow;
        switch (type) {
            case "dialog":
                boxAnimation = style.dialogShow;
                break;
            case "pullUp":
                boxAnimation = style.pullUpShow;
                break;
            case "pullDown":
                boxAnimation = style.pullDownShow;
                break;
            case "pullLeft":
                boxAnimation = style.pullLeftShow;
                break;
            case "pullRight":
                boxAnimation = style.pullRightShow;
                break;
            default:
                boxAnimation = style.dialogShow;
                break;
        }
    }
    else {
        containerAnimation = style.containerHide;
        switch (type) {
            case "dialog":
                boxAnimation = style.dialogHide;
                break;
            case "pullUp":
                boxAnimation = style.pullUpHide;
                break;
            case "pullDown":
                boxAnimation = style.pullDownHide;
                break;
            case "pullLeft":
                boxAnimation = style.pullLeftHide;
                break;
            case "pullRight":
                boxAnimation = style.pullRightHide;
                break;
            default:
                boxAnimation = style.dialogHide;
                break;
        }
    }
    /**
     * 完全关闭动画结束之后会触发
     * @param event
     */
    const animationEnd = (event) => {
        if (event.animationName === containerHide.name) {
            onHide === null || onHide === void 0 ? void 0 : onHide();
        }
    };
    // 选取特定的
    const boxCss = [];
    switch (type) {
        case "pullUp":
            boxCss.push(style.pullUp);
            break;
        case "pullDown":
            boxCss.push(style.pullDown);
            break;
        case "pullLeft":
            boxCss.push(style.pullLeft);
            break;
        case "pullRight":
            boxCss.push(style.pullRight);
            break;
        default:
    }
    // 弹框动画函数和持续时长
    const duration = style.duration(animationDuration);
    boxCss.push(boxAnimation, duration);
    // 默认容器属性
    let fcOption = {};
    if (type === "dialog") {
        fcOption.centerChild = true;
    }
    else {
        fcOption.showMask = false;
    }
    // 覆盖默认属性
    fcOption = maskOption ? Object.assign(Object.assign({}, fcOption), maskOption) : fcOption;
    return (jsx(FixContainer, Object.assign({ centerChild: type === "dialog", css: [containerAnimation, duration], onAnimationEnd: animationEnd, onClick: (event) => {
            event.stopPropagation();
            // 当点击对象是背景对象本身时触发
            if (event.target === event.currentTarget) {
                onMaskClick === null || onMaskClick === void 0 ? void 0 : onMaskClick();
            }
        } }, fcOption),
        jsx("div", { css: [boxCss, boxStyle] }, children)));
}
