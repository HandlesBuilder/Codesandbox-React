import React from 'react';

const data = [
	{
		childNodes: [
			{
				childNodes: [],
				regionName: '南京东路'
			},
			{
				childNodes: [
					{
						childNodes: [],
						regionName: 'ada'
					}
				],
				regionName: '南'
			}
		],
		regionName: '南京东路分区域'
	},
	{
		childNodes: [
			{
				childNodes: [],
				regionName: 'safg'
			}
		],
		regionName: 'asdsa'
	}
];

function renderTree(list, key = '') {
	return list.map((item, index) => {
		const str = `${key}${index}`;
		return {
			key: str,
			title: item.regionName,
			children: renderTree(item.childNodes ?? [], `${str}-`)
		};
	});
}

function Recursion() {
	return (
		<div style={{ width: '50%', textAlign: 'left', margin: '0 auto' }}>
			<pre>
				<code>{JSON.stringify(renderTree(data), null, 2)}</code>
			</pre>
		</div>
	);
}

export default Recursion;
