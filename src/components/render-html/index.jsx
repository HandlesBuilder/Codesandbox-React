import React from 'react';

function RenderHTML() {
	return (
		<div
			dangerouslySetInnerHTML={{ __html: '<h1>Hello,react render HTML</h1>' }}
		></div>
	);
}

export default RenderHTML;
