/** @jsx jsx */
import { ObjectInterpolation } from '@emotion/core';
import React from 'react';
export interface ContainerProps {
    designWidth?: number;
    criticalWidth?: number;
    globalStyles?: ObjectInterpolation<any>;
    children?: React.ReactNode;
}
/**
 * 自适应容器
 * @param props
 */
export declare function Container(props: ContainerProps): JSX.Element;
