import React, { useState } from 'react';
import { Input } from 'antd';

function InputComp() {
	const [state, setState] = useState(null);
	return (
		<Input
			value={state}
			onChange={e => {
				const val = e.target.value;
				// BUG：这里的判断，用微软拼音输入法会有 bug，输入两个汉字之后，再输入两个或多个汉字的时候，后来输入的汉字会覆盖前面输入的值
				// Fix: 不用汉字校验（\u4e00-\u9fa5）即可
				if (!/[\u4e00-\u9fa5\s\w|()]*/.test(val)) {
					return;
				}
				setState(val);
			}}
			placeholder="微软输入法Bug：onChange 校验汉字的时候，会出现值覆盖的bug"
		/>
	);
}

export default InputComp;
