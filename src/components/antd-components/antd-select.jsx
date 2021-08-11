import React, { useState } from 'react';
import { Select } from 'antd';

function AntdSelect() {
	const [options, setOptions] = useState(
		new Array(10).fill(0).map((item, index) => ({
			label: index,
			value: index
		}))
	);
	const onSearch = val => {
		console.log('search:', val);
	};
	const onFocus = () => {
		console.log('focus');
	};
	const onBlur = () => {
		console.log('blur');
	};
	const onChange = value => {
		console.log(`selected ${value}`);
	};
	return (
		<Select
			options={options}
			showSearch
			style={{ width: 200 }}
			placeholder="Select a person"
			optionFilterProp="children"
			onChange={onChange}
			onFocus={onFocus}
			onBlur={onBlur}
			onSearch={onSearch}
			filterOption={(input, option) =>
				option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
			}
			onPopupScroll={e => {
				const { scrollTop, offsetHeight, scrollHeight } = e.target;
				console.log(scrollTop, offsetHeight, scrollHeight);
				// target.scrollTop + target.offsetHeight === target.scrollHeight  判断是否滑动到底部
				if (scrollTop + offsetHeight === scrollHeight) {
					// 在这里调用接口
					setTimeout(() => {
						setOptions(prevState => {
							return [
								...prevState,
								{
									label: prevState.length,
									value: prevState.length
								},
								{
									label: prevState.length + 1,
									value: prevState.length + 1
								},
								{
									label: prevState.length + 2,
									value: prevState.length + 2
								}
							];
						});
					}, 500);
				}
			}}
		/>
	);
}

export default AntdSelect;
