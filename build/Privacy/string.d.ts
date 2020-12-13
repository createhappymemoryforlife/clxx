/**
 * 将一个输入值限制在一个范围之内，当超出这个范围时，取临界值
 * @param n 输入值
 * @param min 最小边界
 * @param max 最大边界
 */
export declare function restrictRange(n: number, min: number, max: number): number;
/**
 * 替换某一个范围的字符串
 * @param input
 * @param placeholder
 * @param from
 * @param to
 */
export declare function replaceRange(input: string, placeholder?: string, from?: number, to?: number): string;
/**
 * 替换一个字符串内容，头部和尾部特定长度的字符串排除在外
 * @param input
 * @param placeholder
 * @param headLength
 * @param tailLength
 */
export declare function replaceWithoutHeadTail(input: string, placeholder?: string, headLength?: number, tailLength?: number): string;
