import React from 'react';
import TableComp from './table';
import EmptyComp from './empty';
import FormFields from './form-fields';
import CustomSelect from './select';

function AntdComponents() {
	return (
		<div>
			<TableComp />
			<EmptyComp />
			<FormFields />
			<CustomSelect />
		</div>
	);
}

export default AntdComponents;
