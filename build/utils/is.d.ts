/**
 * 一些简单的判断逻辑
 */
export declare const is: {
    isAndroid(): boolean;
    isIOS(): boolean;
    isWeixin(): boolean;
    isQQ(): boolean;
    isIphoneX(): boolean;
    isTouchable(): boolean;
    isArray: {
        (value?: any): value is any[];
        <T>(value?: any): value is any[];
    };
    isElement: (value?: any) => boolean;
    isPlainObject: (value?: any) => boolean;
    isEqual: (value: any, other: any) => boolean;
    isEmpty: (value?: any) => boolean;
};
