import React, { useState } from 'react';

const arrs = [{ foo: 'bar' }, { bar: 'baz' }];
const arrCopy = arrs.slice(); // 浅拷贝
arrCopy[0].foo = 'baz';

const str = `const arrs = [{ foo: 'bar' }, { bar: 'baz' }];
const arrCopy = arrs.slice(); // 浅拷贝
arrCopy[0].foo = 'baz';`;

const sliceStr = `Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 })`;
const sliceArr = Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 });

export default function ArrayHandler() {
	const [arr, setArr] = useState([1, 2, 3, 4, 5]);
	const changeArr = (current, target) => {
		setArr(prevState => {
			const newArr = [...prevState];
			newArr[target] = newArr.splice(current, 1, newArr[target])[0];
			return newArr;
		});
	};

	return (
		<div>
			<h3>交换两个数组元素位置</h3>
			<p>{JSON.stringify(arr)}</p>
			<button onClick={() => changeArr(1, 3)}>change</button>
			<pre>
				<code>{str}</code>
			</pre>
			<p>
				<span>Array.slice()浅拷贝：</span>
				<span>{JSON.stringify(arrs)}</span>
				<span>-&gt;</span>
				<span>{JSON.stringify(arrCopy)}</span>
			</p>
			<p>Array.slice() 将类似数组的对象转为真正的数组</p>
			<pre>
				<code>{sliceStr}</code>
			</pre>
			<p>{JSON.stringify(sliceArr)}</p>
		</div>
	);
}
