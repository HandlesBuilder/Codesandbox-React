import React from 'react';
import { Form, Input } from 'antd';

function FormNested() {
	return (
		<Form className="nestedForm">
			<Form.Item label="foo" name="foo">
				<Input />
			</Form.Item>
		</Form>
	);
}

export default FormNested;
