import raf from 'raf';
export class Countdown {
    constructor(option) {
        /**
         * 当前Updater的状态
         * 0：停止状态
         * 1：运行状态
         */
        this.state = 0;
        /**
         * 倒计时的剩余时间，单位为秒
         */
        this.total = 0;
        this.remain = 0;
        /**
         * 当前倒计时的格式
         * d：天
         * h：时
         * i：分
         * s：秒
         */
        this.format = ['d', 'h', 'i', 's'];
        if (typeof option.remain === 'number' && option.remain >= 0) {
            this.total = this.remain = option.remain;
        }
        // 倒计时需要展示的时间格式
        if (typeof option.format === 'string') {
            const parts = option.format.split('');
            const output = [];
            this.format.forEach((item) => {
                if (parts.includes(item)) {
                    output.push(item);
                }
            });
            this.format = output;
        }
        else {
            // 设置默认的倒计时格式
            this.format = ['h', 'i', 's'];
        }
        this._onUpdate = option.onUpdate;
        this._onEnd = option.onEnd;
    }
    onUpdate(callback) {
        this._onUpdate = callback;
    }
    onEnd(callback) {
        this._onEnd = callback;
    }
    start() {
        var _a, _b;
        // 如果倒计时时间不够，直接返回
        if (this.remain <= 0) {
            (_a = this._onUpdate) === null || _a === void 0 ? void 0 : _a.call(this, this.formatValue());
            (_b = this._onEnd) === null || _b === void 0 ? void 0 : _b.call(this);
            return;
        }
        // 初始化时立即调用一次更新，显示初始值
        raf(() => {
            var _a;
            (_a = this._onUpdate) === null || _a === void 0 ? void 0 : _a.call(this, this.formatValue());
        });
        // 记录倒计时开启时的时间
        const start = Date.now();
        const frame = () => {
            var _a, _b, _c;
            // 停止状态，不运行
            if (this.state === 0) {
                return;
            }
            // 获取倒计时已经持续的时间
            const duration = Math.floor((Date.now() - start) / 1000);
            const currentRemain = this.total - duration;
            // 倒计时结束
            if (currentRemain <= 0) {
                this.remain = 0;
                (_a = this._onUpdate) === null || _a === void 0 ? void 0 : _a.call(this, this.formatValue());
                (_b = this._onEnd) === null || _b === void 0 ? void 0 : _b.call(this);
                return;
            }
            // 调用更新
            if (currentRemain !== this.remain) {
                this.remain = currentRemain;
                (_c = this._onUpdate) === null || _c === void 0 ? void 0 : _c.call(this, this.formatValue());
            }
            raf(frame);
        };
        // 启动倒计时
        this.state = 1;
        raf(frame);
    }
    // 停止倒计时
    stop() {
        this.total = this.remain;
        this.state = 0;
    }
    /**
     * 格式化每次更新的值
     * @param remainTime
     */
    formatValue() {
        let remainTime = this.remain;
        const result = {};
        this.format.forEach((key) => {
            switch (key) {
                case 'd':
                    result.d = Math.floor(remainTime / 86400);
                    remainTime = remainTime - result.d * 86400;
                    break;
                case 'h':
                    result.h = Math.floor(remainTime / 3600);
                    remainTime = remainTime - result.h * 3600;
                    break;
                case 'i':
                    result.i = Math.floor(remainTime / 60);
                    remainTime = remainTime - result.i * 60;
                    break;
                case 's':
                    result.s = remainTime;
                    break;
                default:
                    break;
            }
        });
        return result;
    }
}
