/// <reference types="react" />
import type { LayoutProps, FlexBoxProperty, FlexItemProperty } from "./types";
declare type FlexBoxProps = LayoutProps & Partial<FlexBoxProperty>;
declare type FlexItemProps = LayoutProps & Partial<FlexItemProperty>;
/**
 * 弹性容器
 * @param props
 */
export declare function FlexBox(props: FlexBoxProps): JSX.Element;
/**
 * 弹性元素
 * @param props
 */
export declare function FlexItem(props: FlexItemProps): JSX.Element;
export declare function Row(props: FlexBoxProps): JSX.Element;
export declare function Col(props: FlexBoxProps): JSX.Element;
export declare function RowAround(props: FlexBoxProps): JSX.Element;
export declare function RowBetween(props: FlexBoxProps): JSX.Element;
export declare function RowEvenly(props: FlexBoxProps): JSX.Element;
export declare function RowCenter(props: FlexBoxProps): JSX.Element;
export declare function RowStart(props: FlexBoxProps): JSX.Element;
export declare function RowEnd(props: FlexBoxProps): JSX.Element;
export declare function ColAround(props: FlexBoxProps): JSX.Element;
export declare function ColBetween(props: FlexBoxProps): JSX.Element;
export declare function ColEvenly(props: FlexBoxProps): JSX.Element;
export declare function ColCenter(props: FlexBoxProps): JSX.Element;
export declare function ColStart(props: FlexBoxProps): JSX.Element;
export declare function ColEnd(props: FlexBoxProps): JSX.Element;
export {};
