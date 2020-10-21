import React from 'react';
import './index.css';

const arr = new Array(6).fill(0);

function GirdDemo() {
	return (
		<div className="grid-container">
			<div className="grid-wraper">
				{arr.map((item, index) => (
					<div key={index} className={`grid-item item${index + 1}`}>
						{index + 1}
					</div>
				))}
			</div>
		</div>
	);
}

export default GirdDemo;
