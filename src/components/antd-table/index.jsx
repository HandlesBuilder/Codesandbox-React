import React from 'react';
import { Table, Radio } from 'antd';
import { GithubOutlined, AppleOutlined } from '@ant-design/icons';

function AntdTable() {
	const rowSelection = {
		type: 'radio',
		columnTitle: <GithubOutlined />,
		// columnWidth: 80
		onChange: (selectedRowKeys, selectedRows) => {
			console.debug(selectedRowKeys, selectedRows);
		},
		renderCell: (checked, record, index, originNode) => {
			return (
				<Radio {...originNode.props}>
					<AppleOutlined />
				</Radio>
			);
		}
	};
	const columns = [
		{
			title: 'name',
			dataIndex: 'name',
			key: 'name'
		},
		{
			title: 'age',
			dataIndex: 'age',
			key: 'age'
		},
		{
			title: 'gender',
			dataIndex: 'gender',
			key: 'gender'
		}
	];
	const dataSource = [
		{
			key: 0,
			name: 'antd',
			age: 1,
			gender: 'it'
		},
		{
			key: 1,
			name: 'antd-pro',
			age: 2,
			gender: 'it'
		}
	];
	return (
		<Table
			rowSelection={rowSelection}
			columns={columns}
			dataSource={dataSource}
			pagination={false}
		/>
	);
}

export default AntdTable;
