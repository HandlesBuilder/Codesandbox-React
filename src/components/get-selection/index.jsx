import React from 'react';

function GetSelection() {
	return (
		<div>
			<p>选中这句话</p>
			<button
				onClick={() => {
					const ctx = window.getSelection().toString();
					console.log(ctx);
				}}
			>
				获取选中文字
			</button>
		</div>
	);
}

export default GetSelection;
