var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import raf from 'raf';
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
export function waitUntil(condition, maxTime) {
    return __awaiter(this, void 0, void 0, function* () {
        // 记录检测开始时间
        const checkStart = Date.now();
        // 如果检测条件不为函数，直接返回结果
        if (typeof condition !== 'function') {
            return !!condition;
        }
        // 设置默认检测时间的最大值，如果没有设置，则一直检测
        if (!maxTime || typeof maxTime !== 'number') {
            maxTime = Infinity;
        }
        return new Promise((resolve) => {
            const check = () => {
                const now = Date.now();
                // 获取检测结果
                const result = condition();
                // 检测结果为真或超时，都返回
                if (now - checkStart >= maxTime || result) {
                    resolve(result);
                    return;
                }
                raf(check);
            };
            // 开始检测
            raf(check);
        });
    });
}
