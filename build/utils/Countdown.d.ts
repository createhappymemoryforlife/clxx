export declare type CountdownValue = {
    [key in 'd' | 'h' | 'i' | 's']?: number;
};
export declare type UpdateCallback = (value: CountdownValue) => void;
export interface CountdownOption {
    remain?: number | string;
    onUpdate?: UpdateCallback;
    onEnd?: () => void;
    format?: string;
}
export declare class Countdown {
    /**
     * 当前Updater的状态
     * 0：停止状态
     * 1：运行状态
     */
    state: 0 | 1;
    /**
     * 倒计时的剩余时间，单位为秒
     */
    total: number;
    remain: number;
    /**
     * 当前倒计时的格式
     * d：天
     * h：时
     * i：分
     * s：秒
     */
    format: string[];
    _onUpdate?: UpdateCallback;
    _onEnd?: () => void;
    constructor(option: CountdownOption);
    onUpdate(callback: UpdateCallback): void;
    onEnd(callback: () => void): void;
    start(): void;
    stop(): void;
    /**
     * 格式化每次更新的值
     * @param remainTime
     */
    formatValue(): CountdownValue;
}
