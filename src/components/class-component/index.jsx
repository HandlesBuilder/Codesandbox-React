import React from 'react';
import SetState from './setState';
import PropTypes from './proptypes';
import DefaultProps from './defaultProps';

function Comp() {
	return (
		<>
			<SetState />
			<PropTypes />
			<DefaultProps />
		</>
	);
}

export default Comp;
