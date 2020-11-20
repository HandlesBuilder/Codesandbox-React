import React, { useState } from 'react';

function RegExpComp() {
	const [str, setStr] = useState('Hello world');
	const [str1, setStr1] = useState('3 and 5');
	return (
		<ul>
			<li>
				<p>{str}</p>
				<button
					onClick={() => {
						setStr(prevState => {
							// 有多少个（）就有多少个匹配
							return prevState.replace(/(\w+)\s(\w+)/, '$2 $1');
						});
					}}
				>
					replace
				</button>
				<button
					onClick={() => {
						setStr('Hello world');
					}}
				>
					reset
				</button>
			</li>
			<li>
				<p>{str1}</p>
				<button
					onClick={() => {
						setStr1(prevState => {
							return prevState.replace(/[0-9]+/g, match => {
								console.log(match);
								return 2 * match;
							});
						});
					}}
				>
					replace
				</button>
				<button
					onClick={() => {
						setStr1('3 and 5');
					}}
				>
					reset
				</button>
			</li>
		</ul>
	);
}

export default RegExpComp;
