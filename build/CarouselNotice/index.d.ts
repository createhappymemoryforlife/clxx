/// <reference types="react" />
/** @jsx jsx */
import { SerializedStyles } from '@emotion/core';
import * as CSS from 'csstype';
export interface CarouselNoticeOption extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    list: Array<React.ReactNode>;
    width: CSS.Property.Width;
    height: CSS.Property.Height;
    justify: 'start' | 'center' | 'end';
    duration: number;
    interval: number;
    containerStyle?: SerializedStyles;
    wrapperStyle?: SerializedStyles;
    itemStyle?: SerializedStyles;
}
/**
 * 滚动循环轮播公告
 * @param props
 */
export declare function CarouselNotice(props: Partial<CarouselNoticeOption>): false | JSX.Element;
