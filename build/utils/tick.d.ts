export interface TickReturn {
    (): void;
}
/**
 * 逐帧执行的工具函数，返回一个方法，调用该方法，停止执行
 * @param callback
 * @param interval
 */
export declare function tick(callback: () => void, interval?: number): TickReturn;
