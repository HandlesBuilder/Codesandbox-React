import React from 'react';
import { Base64, encode, decode } from 'js-base64';
import { Win } from '../../utils/utils';
import './index.css';

const zh = '哈哈';
const en = 'haha';
const foo = 'bar';

function Base64Demo() {
	return (
		<div className="base64demo">
			<p>
				<span>Win.btoa (zh):</span>
				<span>{Win.btoa(zh)}</span>
			</p>
			<p>
				<span>Win.atob (zh):</span>
				<span>{Win.atob('JUU1JTkzJTg4JUU1JTkzJTg4')}</span>
			</p>
			<p>
				<span>Win.btoa (en): </span>
				<span>{Win.btoa(en)}</span>
			</p>
			<p>
				<span>Win.btoa (en):</span>
				<span>{Win.atob('aGFoYQ==')}</span>
			</p>
			<p>
				<span>Base64.encode (zh):</span>
				<span>{Base64.encode(zh)}</span>
			</p>
			<p>
				<span>Base64.decode (zh):</span>
				<span>{Base64.decode('5ZOI5ZOI')}</span>
			</p>
			<p>
				<span>Base64.btoa (en):</span>
				<span>{Base64.btoa(en)}</span>
			</p>
			<p>
				<span>Base64.atob (en):</span>
				<span>{Base64.atob('aGFoYQ==')}</span>
			</p>
			<p>
				<span>encode:</span>
				<span>{encode(foo)}</span>
			</p>
			<p>
				<span>decode:</span>
				<span>{decode('YmFy')}</span>
			</p>
		</div>
	);
}

export default Base64Demo;
