import React from 'react';
export interface ContentProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    children?: string;
    /**
     * include：替换start和end之间的内容
     * exclude: 替换除了开头start长度和结尾end长度的内容
     */
    type?: 'include' | 'exclude';
    placeholder?: string;
    start?: number;
    end?: number;
}
/**
 * 隐私化内容组件
 * @param props
 */
export declare function Content(props: ContentProps): JSX.Element;
