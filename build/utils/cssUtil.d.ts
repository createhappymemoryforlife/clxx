/**
 * CSS值的对象表示
 */
interface SplitedValue {
    num: number;
    unit: string;
}
/**
 * CSS值的形式
 */
export declare type CSSValue = number | string;
/**
 * 匹配所有的CSS数值类型的值
 */
export declare const CSSNumericValueReg: RegExp;
/**
 * 根据数值获取自适应单位，以vw作为自适应
 * 约定cl组件库的所有组件假定设计尺寸375px，临界尺寸576px
 *
 * @param num 设计稿尺寸
 * @param overLimit 是否超过临界尺寸
 */
export declare function vw(num: number, overLimit?: boolean): string;
/**
 * 标准化长度值单位
 * @param value 长度值
 * @param defaultUnit 默认长度值单位
 */
export declare function normalizeUnit(value?: CSSValue, defaultUnit?: string): string | undefined;
/**
 *
 * 提取数字和单位，以下都是合理的CSS数值
 *
 * 123
 * 123px
 * .98px
 * 98.2px
 * -98rem
 * -0.98rem
 * 98.
 *
 * @param value
 * @param defaultUnit
 */
export declare function splitValue(value: CSSValue, defaultUnit?: string): SplitedValue;
export {};
