import React from 'react';

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

function ObjectDefineProperty() {
	return <div>{JSON.stringify(result)}</div>;
}

export default ObjectDefineProperty;
