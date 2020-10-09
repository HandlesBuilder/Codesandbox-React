import React from 'react';

// 函数的name属性返回函数的名字。
// 函数的length属性返回函数预期传入的参数个数，即函数定义之中的参数个数。
const fn1 = (a, b) => {
	return false;
};

const fn2 = (a, b, c) => {
	return false;
};

function Currying() {
	return (
		<div>
			<p>name: {fn1.name}</p>
			<p>length: {fn1.length}</p>
			<p>name: {fn2.name}</p>
			<p>length: {fn2.length}</p>
		</div>
	);
}

export default Currying;
