/**
 * 检测某一个条件是否成立，任一条件满足即返回
 * 1、检测结果为真，或JS判断为真
 * 2、超时时间到了
 *
 * @param condition 检测条件
 * @param maxTime 最大等待时间，超过时间，无论如何都返回
 *
 * @returns 返回检测的结果
 */
export declare function waitUntil(condition: () => boolean, maxTime?: number): Promise<unknown>;
