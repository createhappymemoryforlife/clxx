import React from "react";
import { AnimationStatus, WrapperProps } from "./Wrapper";
export interface DialogOption extends WrapperProps {
    content?: React.ReactNode;
    onClose?: () => void;
    canHideOnBlankClick?: boolean;
}
/**
 * 创建一个新的弹框对象，可以主动关闭
 */
export declare class Dialog {
    container: HTMLDivElement;
    option: DialogOption;
    constructor(option?: React.ReactNode | DialogOption);
    onClose(callback: () => void): void;
    /**
     * 根据动画创建弹框
     * @param animationStatus
     */
    createWrapper(animationStatus: AnimationStatus): JSX.Element;
    /**
     * 主动调用以动画形式收起弹框，并且关闭它
     */
    close(): void;
}
