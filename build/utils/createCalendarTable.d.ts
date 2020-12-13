import dayjs, { ConfigType } from 'dayjs';
/**
 * 创建一个月历视图的原始数据表
 * @param usefulFormat dayjs构造函数可以识别的任意值
 * @param startFromSunday 是否以星期天作为一周的第一天
 * @param sizeGuarantee 是否保证生成表格始终有6行
 */
export declare function createCalendarTable(usefulFormat?: ConfigType, startFromSunday?: boolean, sizeGuarantee?: boolean): dayjs.Dayjs[][];
