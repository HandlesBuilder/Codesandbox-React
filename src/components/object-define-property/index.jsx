import React, { useEffect } from 'react';

/* https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

Object.defineProperty(obj, prop, descriptor)

obj
要定义属性的对象。
prop
要定义或修改的属性的名称或 Symbol 。
descriptor
要定义或修改的属性描述符。
*/

const obj = {};
let value = '0';

const result = Object.defineProperty(obj, 'foo', {
	// configurable: false,
	enumerable: true,
	// value: value
	// writable: false,
	get() {
		return value;
	},
	set(newValue) {
		value = newValue;
	}
});

// obj.foo = 'test';
// console.log(result === obj); // true

const userInfo = {};
Object.defineProperty(userInfo, 'name', {
	get: function () {
		return document.getElementById('name').innerHTML;
	},
	set: function (name) {
		document.getElementById('name').innerHTML = name;
	}
});

function ObjectDefineProperty() {
	useEffect(() => {
		userInfo.name = 'Hello, world!';
	}, []);

	return (
		<div>
			<p>{JSON.stringify(result)}</p>
			<p id="name"></p>
		</div>
	);
}

export default ObjectDefineProperty;
