/** @jsx jsx */
import { SerializedStyles } from "@emotion/core";
import React from "react";
import { IndicatorProps } from "../Indicator";
import { FixContainerProps } from "../Layout/FixContainer";
export interface LoadingWrapperProps {
    state?: "show" | "hide";
    extra?: React.ReactNode;
    maskProps?: FixContainerProps;
    indicatorProps?: IndicatorProps;
    onHide?: () => void;
    showHideDuration?: number;
    containerStyle?: SerializedStyles;
}
export declare function Wrapper(props: LoadingWrapperProps): JSX.Element;
