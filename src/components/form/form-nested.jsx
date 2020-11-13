import React from 'react';
import { Form, Input } from 'antd';

function FormNested() {
	return (
		<Form className="nestedForm">
			<Form.Item
				label="person"
				name="person"
				rules={[
					{
						required: true
					}
				]}
			>
				<Input.Group>
					<Form.Item
						name={['person', 'name']}
						rules={[
							{
								required: true,
								message: 'Please input your name'
							}
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name={['person', 'age']}
						rules={[
							{
								required: true,
								message: 'Please input your age'
							}
						]}
					>
						<Input />
					</Form.Item>
				</Input.Group>
			</Form.Item>
		</Form>
	);
}

export default FormNested;
