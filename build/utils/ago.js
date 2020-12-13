import dayjs from 'dayjs';
/**
 * 用于格式化显示：多久以前
 * @param date
 */
export function ago(date) {
    const now = dayjs();
    const input = dayjs(date);
    const aYearAgo = now.subtract(1, 'year');
    const aMonthAgo = now.subtract(1, 'month');
    const aDayAgo = now.subtract(1, 'day');
    const aHourAgo = now.subtract(1, 'hour');
    const aMinuteAgo = now.subtract(1, 'minute');
    // 多少年前
    if (input.isBefore(aYearAgo)) {
        const diff = now.year() - input.year();
        const nYearsAgo = now.subtract(diff, 'year');
        let showNum = diff;
        if (input.isAfter(nYearsAgo)) {
            showNum = diff - 1;
        }
        return {
            num: showNum,
            unit: 'y',
            format: `${showNum}年前`,
        };
    }
    // 多少月前
    if (input.isBefore(aMonthAgo)) {
        let showNum = 1;
        for (let n = 2; n <= 12; n++) {
            const nMonthAgo = now.subtract(n, 'month');
            if (input.isAfter(nMonthAgo)) {
                showNum = n - 1;
                break;
            }
        }
        return {
            num: showNum,
            unit: 'm',
            format: `${showNum}个月前`,
        };
    }
    // 多少天前
    if (input.isBefore(aDayAgo)) {
        const showNum = Math.floor((now.unix() - input.unix()) / 86400);
        return {
            num: showNum,
            unit: 'd',
            format: `${showNum}天前`,
        };
    }
    // 多少小时前
    if (input.isBefore(aHourAgo)) {
        const showNum = Math.floor((now.unix() - input.unix()) / 3600);
        return {
            num: showNum,
            unit: 'h',
            format: `${showNum}个小时前`,
        };
    }
    // 多少分钟前
    if (input.isBefore(aMinuteAgo)) {
        const showNum = Math.floor((now.unix() - input.unix()) / 60);
        return {
            num: showNum,
            unit: 'i',
            format: `${showNum}分钟前`,
        };
    }
    // 多少秒前
    const showNum = now.unix() - input.unix();
    let format;
    if (showNum > 10) {
        format = `${showNum}秒前`;
    }
    else {
        format = '刚刚';
    }
    return {
        num: showNum,
        unit: 's',
        format,
    };
}
