import React, { useState /* , useEffect */ } from 'react';
import { Statistic } from 'antd';
import moment from 'moment';

/* function clock() {
	const targetDate = new Date(2021, 0, 1).getTime();
	const currentDate = Date.now();
	const remainTime = (targetDate - currentDate) / 1000;
	const remainDay = parseInt(remainTime / 60 / 60 / 24, 10);
	const remainHours = parseInt((remainTime / 60 / 60) % 24, 10);
	const remainMinutes = parseInt((remainTime / 60) % 60, 10);
	const remainSeconds = parseInt(remainTime % 60, 10);
	return (
		'距离2021年01月01日 还有:' +
		remainDay +
		'天' +
		remainHours +
		'时' +
		remainMinutes +
		'分' +
		remainSeconds +
		'秒'
	);
} */

function CountDown() {
	const [deadline] = useState(moment('20210101', 'YYYYMMDD'));
	// const [time, setTime] = useState(clock());

	/* useEffect(() => {
		const timer = setInterval(() => {
			setTime(clock());
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, []); */
	return (
		<>
			<Statistic.Countdown
				title="距离2021年01月01日 还有:"
				value={deadline}
				format="D 天 H 时 m 分 s 秒"
			/>
			{/* <span>{time}</span> */}
		</>
	);
}

export default CountDown;
