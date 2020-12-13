/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import ReactDOM from "react-dom";
import { Wrapper } from "./Wrapper";
import { is } from "../utils/is";
import omit from "lodash/omit";
/**
 * 创建一个新的弹框对象，可以主动关闭
 */
export class Dialog {
    constructor(option) {
        // 对话框配置
        this.option = {
            type: "dialog",
            canHideOnBlankClick: true,
        };
        // 根据参数类型，获取选项配置
        if (React.isValidElement(option) || !is.isPlainObject(option)) {
            this.option.content = option;
        }
        else {
            this.option = Object.assign(Object.assign({}, this.option), option);
        }
        // 首先渲染弹框
        this.container = document.createElement("div");
        document.body.appendChild(this.container);
        ReactDOM.render(this.createWrapper("show"), this.container);
    }
    // 关闭回调的便捷方法
    onClose(callback) {
        this.option.onClose = callback;
    }
    /**
     * 根据动画创建弹框
     * @param animationStatus
     */
    createWrapper(animationStatus) {
        const props = omit(this.option, ["content", "onClose"]);
        props.animationStatus = animationStatus;
        props.onHide = () => {
            var _a, _b;
            ReactDOM.unmountComponentAtNode(this.container);
            this.container.remove();
            (_b = (_a = this.option).onClose) === null || _b === void 0 ? void 0 : _b.call(_a);
        };
        // 显示状态主动添加关闭监听
        if (this.option.canHideOnBlankClick && animationStatus === "show") {
            props.onMaskClick = () => {
                this.close();
            };
        }
        return jsx(Wrapper, Object.assign({}, props), this.option.content);
    }
    /**
     * 主动调用以动画形式收起弹框，并且关闭它
     */
    close() {
        // 主动调用一个组件的方式是向它传递属性
        ReactDOM.render(this.createWrapper("hide"), this.container);
    }
}
