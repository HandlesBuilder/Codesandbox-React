import React from 'react';
import { Empty } from 'antd';

function EmptyComp() {
	return (
		<div>
			<Empty
				image={Empty.PRESENTED_IMAGE_SIMPLE}
				imageStyle={{
					height: 60
				}}
				description={
					<span>
						Customize <a href="#API">Description</a>
					</span>
				}
			>
				<p>Hello, Empty!</p>
			</Empty>
		</div>
	);
}

export default EmptyComp;
