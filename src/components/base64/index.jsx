import React from 'react';
import { Win } from '../../utils/utils';

function Base64() {
	return (
		<div>
			<p>{Win.btoa('哈哈')}</p>
			<p>{Win.atob('JUU1JTkzJTg4JUU1JTkzJTg4')}</p>
		</div>
	);
}

export default Base64;
