/**
 * 检测是否支持passive事件绑定
 */
export declare let passiveSupported: boolean;
/**
 * 禁用和启用默认滚动
 */
export declare const defaultScroll: {
    handler(event: TouchEvent): void;
    disable(): void;
    enable(): void;
};
