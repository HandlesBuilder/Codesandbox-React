import React from 'react';
import FormJS from './form-js';
import FormAntd from './form-antd';
import FormNested from './form-nested';
import './index.css';

function FormDemo() {
	return (
		<>
			<FormJS />
			<br />
			<FormAntd />
			<br />
			<FormNested />
		</>
	);
}

export default FormDemo;
