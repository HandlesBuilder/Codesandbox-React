import React from 'react';

function MapComp(props) {
	// console.log(React.Children.map(props.children, c => c));
	// console.log(props.children);

	return props.children;
}

function ReactMap() {
	return (
		<MapComp>
			<span>1</span>
			<span>2</span>
		</MapComp>
	);
}

export default ReactMap;
