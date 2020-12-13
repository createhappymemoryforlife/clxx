/** @jsx jsx */
import { SerializedStyles } from "@emotion/core";
import React from "react";
import * as CSS from "csstype";
export interface IndicatorProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size: CSS.Property.Width;
    rounded: boolean;
    barWidth: number;
    barHeight: number;
    barColor: string;
    barCount: number;
    duration: number;
    containerStyle?: SerializedStyles;
}
/**
 * SVG转圈指示器，一般用作loading效果
 * @param props
 */
export declare function Indicator(props: Partial<IndicatorProps>): JSX.Element;
