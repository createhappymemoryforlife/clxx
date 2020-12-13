/// <reference types="react" />
/** @jsx jsx */
import { SerializedStyles } from "@emotion/core";
import * as CSS from "csstype";
export interface ScrollEvent {
    containerHeight: number;
    contentHeight: number;
    scrollTop: number;
    maxScroll: number;
    direction: "upward" | "downward";
    rawEvent?: React.UIEvent;
}
export interface ScrollViewProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "onScroll"> {
    children?: React.ReactNode;
    height?: CSS.Property.Height;
    reachTopThreshold?: number;
    onReachTop?: (event: ScrollEvent) => void;
    reachBottomThreshold?: number;
    onReachBottom?: (event: ScrollEvent) => void;
    showLoading?: boolean;
    loadingContent?: React.ReactNode;
    onScroll?: (event: ScrollEvent) => void;
    containerStyle?: SerializedStyles;
    wrapperStyle?: SerializedStyles;
    loadingStyle?: SerializedStyles;
}
export declare function ScrollView(props: ScrollViewProps): JSX.Element;
