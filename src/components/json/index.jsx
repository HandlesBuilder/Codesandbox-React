import React from 'react';

const obj = {
	foo: 'bar',
	bool: true,
	u7d: undefined,
	n2l: null,
	fn: () => {},
	arr: [123, true, 'str', { foo: 'bar' }, undefined, null, () => {}]
};

const test = {
	foo: 'bar',
	bar: 'foo',
	baz: 'test'
};

/**
 * 语法：JSON.stringify(value[, replacer [, space]])
 *
 * 参数：
 * value：将要序列化成 一个 JSON 字符串的值。
 *
 * replacer(可选): 如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；如果该参数为 null 或者未提供，则对象所有的属性都会被序列化。
 *
 * space(可选): 指定缩进用的空白字符串，用于美化输出（pretty-print）；如果参数是个数字，它代表有多少的空格；上限为10。该值若小于1，则意味着没有空格；如果该参数为字符串（当字符串长度超过10个字母，取其前10个字母），该字符串将被作为空格；如果该参数没有提供（或者为 null），将没有空格。
 */

// 函数、undefined 被单独转换时，会返回 undefined，如JSON.stringify(function(){}) or JSON.stringify(undefined).
// undefined、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 null（出现在数组中时）。
// NaN 和 Infinity 格式的数值及 null 都会被当做 null。
const replacer = (key, value) => {
	console.log('key:', key, 'value:', value);
	return value;
};

function JSONDemo() {
	return (
		<div
			style={{
				width: '50%',
				margin: '0 auto',
				textAlign: 'left'
			}}
		>
			<pre>
				<code>{JSON.stringify(obj, null, 2)}</code>
			</pre>
			<pre>
				<code>{JSON.stringify(obj, replacer, 4)}</code>
			</pre>
			<pre>
				<code>{JSON.stringify(test, ['foo', 'bar'])}</code>
			</pre>
			<p>{JSON.stringify(NaN)}</p>
		</div>
	);
}

export default JSONDemo;
