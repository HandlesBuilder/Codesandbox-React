import React, { useState } from 'react';
import { Select, Pagination } from 'antd';

const data = new Array(100).fill(0).map((item, index) => index + 1);

function getItems(page, pageSize) {
	const start = (page - 1) * pageSize;
	return data.slice(start, start + pageSize);
}

function CustomSelect() {
	const [items, setItems] = useState(getItems(1, 10));
	return (
		<Select
			style={{ width: 500 }}
			placeholder="custom dropdown render"
			dropdownRender={menu => (
				<>
					{menu}
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<Pagination
							size="small"
							defaultCurrent={1}
							total={data.length}
							showSizeChanger={false}
							onChange={(page, pageSize) => {
								setItems(getItems(page, pageSize));
							}}
						/>
					</div>
				</>
			)}
		>
			{items.map(item => (
				<Select.Option key={item}>{item}</Select.Option>
			))}
		</Select>
	);
}

export default CustomSelect;
