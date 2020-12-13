window.__CLXX_VARS = {
    criticalWidth: 576,
    designWidth: 375,
};
// 获取环境变量值
export function getEnv() {
    return window.__CLXX_VARS;
}
/**
 * 初始化环境变量
 * @param option
 */
export function setEnv(option) {
    if (!option)
        return;
    window.__CLXX_VARS = Object.assign(Object.assign({}, window.__CLXX_VARS), option);
}
