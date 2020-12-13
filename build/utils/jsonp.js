var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let JSONP_INDEX = 1;
/**
 * 发送jsonp请求
 * @param url
 * @param callbackName
 */
export function jsonp(url, callbackName = 'callback') {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            // 生成全局唯一的
            JSONP_INDEX += 1;
            const funcName = 'jsonp_' + Date.now().toString(36) + '_' + JSONP_INDEX;
            // 修正以//开头的链接，添加跟location相同的schema
            if (/^\/\//.test(url)) {
                url = window.location.protocol + url;
            }
            const urlObject = new URL(url);
            urlObject.searchParams.set(callbackName, funcName);
            // 创建全局script
            const script = document.createElement('script');
            script.src = urlObject.href;
            document.body.appendChild(script);
            script.onerror = (error) => {
                reject(error);
            };
            // 创建全局函数
            window[funcName] = (result) => {
                resolve(result);
                // 删除全局函数
                delete window[funcName];
                // 删除临时脚本
                script.remove();
            };
        });
    });
}
