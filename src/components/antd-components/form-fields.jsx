import React, { useState } from 'react';
import { Form, Input } from 'antd';

const CustomizedForm = ({ onChange, fields }) => {
	return (
		<Form
			name="global_state"
			layout="inline"
			fields={fields}
			onFieldsChange={(changedFields, allFields) => {
				onChange(allFields);
			}}
		>
			<Form.Item
				name="username"
				label="Username"
				rules={[
					{
						required: true,
						message: 'Username is required!'
					}
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="password"
				label="Password"
				rules={[
					{
						required: true,
						message: 'Password is required!'
					}
				]}
			>
				<Input.Password />
			</Form.Item>
		</Form>
	);
};

const FormFileds = () => {
	const [fields, setFields] = useState([
		{
			name: ['username'],
			value: 'Ant Design'
		},
		{
			name: ['password'],
			value: 'Ant Design'
		}
	]);
	return (
		<>
			<CustomizedForm
				fields={fields}
				onChange={newFields => {
					setFields(newFields);
				}}
			/>
			<pre style={{ textAlign: 'left' }}>
				<code>{JSON.stringify(fields, null, 2)}</code>
			</pre>
		</>
	);
};

export default FormFileds;
