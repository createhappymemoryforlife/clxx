import React from "react";
/**
 * 可触摸元素的属性，兼容PC
 */
export interface ClickableProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
    bubble: boolean;
    activeClass: string;
    activeStyle: React.CSSProperties;
    disable: boolean;
}
export declare function Clickable(props: Partial<ClickableProps>): JSX.Element;
