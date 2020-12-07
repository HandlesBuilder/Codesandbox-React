import React from 'react';

/* 
replace方法的第二个参数可以使用美元符号$，用来指代所替换的内容。

$&：匹配的子字符串。
$`：匹配结果前面的文本。
$'：匹配结果后面的文本。
$n：匹配成功的第n组内容，n是从1开始的自然数。
$$：指代美元符号$。

*/

function ReplaceParams() {
	const str = 'abc';
	return (
		<div>
			<p>{str.replace('b', '$`')}</p>
			<p>{str.replace('b', "$`$&$'")}</p>
			<p>{str.replace('b', "$'")}</p>
		</div>
	);
}

export default ReplaceParams;
