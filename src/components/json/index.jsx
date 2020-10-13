import React from 'react';

const obj = {
	foo: 'bar',
	u7d: undefined,
	n2l: null,
	fn: () => {},
	arr: [123, true, 'str', { foo: 'bar' }, undefined, null, () => {}]
};
// 函数、undefined 被单独转换时，会返回 undefined，如JSON.stringify(function(){}) or JSON.stringify(undefined).
// undefined、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 null（出现在数组中时）。
console.log(JSON.stringify(obj, null, 2));

function JSONDemo() {
	return <div>{JSON.stringify(obj)}</div>;
}

export default JSONDemo;
