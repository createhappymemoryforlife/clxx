import React from 'react';
import { LoadingWrapperProps } from './Wrapper';
export interface LoadingOption extends LoadingWrapperProps {
    minDuration?: number;
}
export declare class Loading {
    state: 0 | 1;
    container?: HTMLDivElement;
    config: LoadingOption;
    wrapperProps: LoadingWrapperProps;
    startShowTime: number;
    constructor(option: React.ReactNode | LoadingOption);
    show(): void;
    /**
     * 关闭loading，因为可能有最小显示时间，所以为异步
     */
    close(): Promise<void>;
}
