import React from 'react';
import { Statistic } from 'antd';
import moment from 'moment';

function CountDown() {
	const deadline = moment('20210101', 'YYYYMMDD');
	return (
		<Statistic.Countdown
			title="距离2021年01月01日 还有:"
			value={deadline}
			format="D 天 H 时 m 分 s 秒"
		/>
	);
}

export default CountDown;
