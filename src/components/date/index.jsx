import React from 'react';
import moment from 'moment';

/* 以下三种方法，可以将 Date 实例转为表示本地时间的字符串。

    Date.prototype.toLocaleString()：完整的本地时间。
    Date.prototype.toLocaleDateString()：本地日期（不含小时、分和秒）。
    Date.prototype.toLocaleTimeString()：本地时间（不含年月日）。
    下面是用法实例。

    var d = new Date(2013, 0, 1);

    d.toLocaleString()
    // 中文版浏览器为"2013年1月1日 上午12:00:00"
    // 英文版浏览器为"1/1/2013 12:00:00 AM"

    d.toLocaleDateString()
    // 中文版浏览器为"2013年1月1日"
    // 英文版浏览器为"1/1/2013"

    d.toLocaleTimeString()
    // 中文版浏览器为"上午12:00:00"
    // 英文版浏览器为"12:00:00 AM"
    这三个方法都有两个可选的参数。

    dateObj.toLocaleString([locales[, options]])
    dateObj.toLocaleDateString([locales[, options]])
    dateObj.toLocaleTimeString([locales[, options]])
    
    locales: en-US、zh-CN

    options配置对象有以下属性。

    dateStyle：可能的值为full、long、medium、short。
    timeStyle：可能的值为full、long、medium、short。
    month：可能的值为numeric、2-digit、long、short、narrow。
    year：可能的值为numeric、2-digit。
    weekday：可能的值为long、short、narrow。
    day、hour、minute、second：可能的值为numeric、2-digit。
    timeZone：可能的值为 IANA 的时区数据库。
    timeZooneName：可能的值为long、short。
    hour12：24小时周期还是12小时周期，可能的值为true、false。
*/

function DateComp() {
	const date = moment('2020-01-01 16:18:02');
	const timestemp = date.valueOf();
	const formatDate = date.add(1, 'day').format('YYYY-MM-DD HH:mm:ss');

	const d = new Date(date).toLocaleString('zh-CN', {
		// dateStyle: 'full',
		// timeStyle: 'full',
		// hour12: false,
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: 'numeric',
		second: 'numeric',
		weekday: 'long'
	});
	return (
		<div>
			<p>timestemp: {timestemp}</p>
			<p>moment add 1 day: {formatDate}</p>
			<p>toLocaleDateString: {d}</p>
		</div>
	);
}

export default DateComp;
