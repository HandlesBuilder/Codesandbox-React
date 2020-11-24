import React, { useState } from 'react';
import { Select, Pagination } from 'antd';

function CustomSelect() {
	const [items, setItems] = useState(['foo', 'bar']);
	return (
		<Select
			style={{ width: 300 }}
			placeholder="custom dropdown render"
			dropdownRender={menu => (
				<>
					{menu}
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<Pagination size="small" defaultCurrent={1} total={50} />
					</div>
				</>
			)}
		>
			{items.map(item => (
				<Option key={item}>{item}</Option>
			))}
		</Select>
	);
}

export default CustomSelect;
