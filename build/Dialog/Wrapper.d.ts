/// <reference types="react" />
/** @jsx jsx */
import { SerializedStyles } from "@emotion/core";
import { FixContainerProps } from "../Layout/FixContainer";
export declare type DialogType = "dialog" | "pullUp" | "pullDown" | "pullLeft" | "pullRight";
export declare type AnimationStatus = "show" | "hide";
export interface WrapperProps {
    type?: DialogType;
    children?: React.ReactNode;
    animationStatus?: AnimationStatus;
    onHide?: () => void;
    animationDuration?: number | string;
    maskOption?: FixContainerProps;
    onMaskClick?: () => void;
    boxStyle?: SerializedStyles;
}
export declare function Wrapper(props: WrapperProps): JSX.Element;
