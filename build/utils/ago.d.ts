import dayjs from 'dayjs';
export declare type AgoValue = {
    num: number;
    unit: 'y' | 'm' | 'd' | 'h' | 'i' | 's';
    format: string;
};
/**
 * 用于格式化显示：多久以前
 * @param date
 */
export declare function ago(date: dayjs.ConfigType): AgoValue;
