/**
 * 全局环境变量
 */
export declare type GVARS = {
    criticalWidth: number;
    designWidth: number;
};
export declare function getEnv(): GVARS;
/**
 * 初始化环境变量
 * @param option
 */
export declare function setEnv(option?: Partial<GVARS>): void;
