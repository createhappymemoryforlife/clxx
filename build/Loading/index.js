var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper } from './Wrapper';
import { is } from '../utils/is';
import omit from 'lodash/omit';
export class Loading {
    constructor(option) {
        // 当前是否正在显示0：否，1：是
        this.state = 0;
        // 配置对象
        this.config = {
            minDuration: 0,
        };
        // 开始显示的时间
        this.startShowTime = 0;
        // 解析配置文件
        const optionIsObject = is.isPlainObject(option);
        if (React.isValidElement(option) || !optionIsObject) {
            this.config.extra = option;
        }
        else if (optionIsObject) {
            this.config = Object.assign(Object.assign({}, this.config), option);
        }
        // 获取传递给容器的属性
        this.wrapperProps = omit(this.config, ['minDuration']);
        // 显示loading
        this.show();
    }
    show() {
        if (this.state === 1) {
            return;
        }
        // 设置状态为显示
        this.state = 1;
        // 设置开始显示的时间
        this.startShowTime = Date.now();
        if (!this.container) {
            this.container = document.createElement('div');
            document.body.appendChild(this.container);
        }
        this.wrapperProps.state = 'show';
        ReactDOM.render(jsx(Wrapper, Object.assign({}, this.wrapperProps)), this.container);
    }
    /**
     * 关闭loading，因为可能有最小显示时间，所以为异步
     */
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.container && this.state === 1) {
                const current = Date.now();
                // 当前关闭触发时已经持续的时间
                const continuedTime = current - this.startShowTime;
                // 如果关闭时还未达到设置的最小持续时间，则继续等待
                if (continuedTime < this.config.minDuration) {
                    const left = this.config.minDuration - continuedTime;
                    yield new Promise((resolve) => {
                        window.setTimeout(() => {
                            resolve(0);
                        }, left);
                    });
                }
                // 时间已经达到了，开始关闭
                this.wrapperProps.state = 'hide';
                this.wrapperProps.onHide = () => {
                    ReactDOM.unmountComponentAtNode(this.container);
                    this.container.remove();
                    this.container = undefined;
                    this.state = 0;
                };
                ReactDOM.render(jsx(Wrapper, Object.assign({}, this.wrapperProps)), this.container);
            }
        });
    }
}
