/// <reference types="react" />
/** @jsx jsx */
import { SerializedStyles } from '@emotion/core';
import * as CSS from 'csstype';
export interface FixContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * 是否显示半透明遮罩背景
     */
    showMask?: boolean;
    /**
     * 背景遮罩的颜色值
     */
    maskColor?: string;
    /**
     * 是否让子元素垂直和水平都居中
     */
    centerChild?: boolean;
    /**
     * 容器内容
     */
    children?: React.ReactNode;
    /**
     * 容器最大的寬度，默认为576px
     */
    maxWidth?: CSS.Property.MaxWidth;
    /**
     * 容器深度
     */
    zIndex?: number;
    /**
     * 容器样式，提供额外选项
     */
    containerStyle?: SerializedStyles;
}
/**
 * fix定位的容器元素，一般作为弹框的背景
 * @param props
 */
export declare function FixContainer(props: FixContainerProps): JSX.Element;
