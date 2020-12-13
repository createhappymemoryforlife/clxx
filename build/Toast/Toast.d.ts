/** @jsx jsx */
import { SerializedStyles } from "@emotion/core";
import React from "react";
export interface ToastProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    onHide?: () => void;
    content?: React.ReactNode;
    position?: "top" | "middle" | "bottom";
    offsetTop?: number;
    offsetBottom?: number;
    duration?: number;
    rounded?: boolean;
    containerStyle?: SerializedStyles;
    contentStyle?: SerializedStyles;
}
export declare function Toast(props: ToastProps): JSX.Element;
