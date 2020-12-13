/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Dialog } from "../Dialog";
import { FlexBox, RowCenter } from "../Layout/Flex";
import { getStyle } from "./style";
import { is } from "../utils/is";
export function showAlert(option) {
    var _a;
    // 获取样式
    const style = getStyle();
    // 获取输入参数
    let inputOption;
    if (React.isValidElement(option) || !is.isPlainObject(option)) {
        inputOption = {
            content: option,
        };
    }
    else {
        inputOption = option;
    }
    // 获取配置
    const config = Object.assign({ title: "提示", showTitle: false, cancel: "取消", showCancel: false, confirm: "确定" }, inputOption);
    const cancel = () => {
        var _a;
        dialog.close();
        (_a = config.onCancel) === null || _a === void 0 ? void 0 : _a.call(config);
    };
    const confirm = () => {
        var _a;
        dialog.close();
        (_a = config.onConfirm) === null || _a === void 0 ? void 0 : _a.call(config);
    };
    // 显示标题
    const showTitle = () => {
        if (config.showTitle) {
            return React.isValidElement(config.title) ? (config.title) : (jsx("h3", { css: [style.title, config.titleStyle] }, config.title));
        }
        return undefined;
    };
    // 显示内容
    const showContent = () => {
        if (React.isValidElement(config.content)) {
            return config.content;
        }
        else {
            return (jsx("div", { css: [style.content, config.contentStyle] }, config.content));
        }
    };
    // 显示按钮
    const showBtn = (type) => {
        if (React.isValidElement(config[type])) {
            return config[type];
        }
        else {
            return (jsx(RowCenter, { css: [
                    style.defaultBtn,
                    style[`defaultBtn${type}`],
                    // 传入可定制的样式
                    config[`${type}Style`],
                ] }, config[type]));
        }
    };
    let dialogOption = {
        content: (jsx("div", { css: [style.container, config.containerStyle] },
            showTitle(),
            jsx("div", null, showContent()),
            jsx(FlexBox, { alignItems: "stretch", css: style.btn },
                config.showCancel && (jsx("div", { onClick: cancel, css: style.btnCancel }, showBtn("cancel"))),
                jsx("div", { onClick: confirm }, showBtn("confirm"))))),
    };
    // 如果参数有对话框配置，传入配置
    if (is.isPlainObject(config.dialogOption)) {
        (_a = config.dialogOption) === null || _a === void 0 ? true : delete _a.content;
        dialogOption = Object.assign(Object.assign({}, dialogOption), config.dialogOption);
    }
    // 生成对话框
    const dialog = new Dialog(dialogOption);
}
