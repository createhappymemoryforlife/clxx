/** @jsx jsx */
import { SerializedStyles } from "@emotion/core";
import React from "react";
import { DialogOption } from "../Dialog";
export interface AlertOption {
    title?: React.ReactNode;
    showTitle?: boolean;
    content?: React.ReactNode;
    cancel?: React.ReactNode;
    showCancel?: boolean;
    onCancel?: () => void;
    confirm?: React.ReactNode;
    onConfirm?: () => void;
    containerStyle?: SerializedStyles;
    titleStyle?: SerializedStyles;
    contentStyle?: SerializedStyles;
    cancelStyle?: SerializedStyles;
    confirmStyle?: SerializedStyles;
    dialogOption?: DialogOption;
}
export declare function showAlert(option: React.ReactNode | AlertOption): void;
