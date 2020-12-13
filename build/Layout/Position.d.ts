/// <reference types="react" />
import { LayoutProps, PositionProperty } from "./types";
declare type PositionProps = LayoutProps & Partial<PositionProperty>;
/**
 * 定位相关
 * @param props
 */
export declare function Position(props: PositionProps): JSX.Element;
export declare function Absolute(props: PositionProps): JSX.Element;
export declare function Relative(props: PositionProps): JSX.Element;
export declare function Fixed(props: PositionProps): JSX.Element;
export declare function Sticky(props: PositionProps): JSX.Element;
export {};
