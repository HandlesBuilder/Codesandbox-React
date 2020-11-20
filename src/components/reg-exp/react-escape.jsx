import React from 'react';

function escape(key) {
	const escapeRegex = /[=:]/g;
	const escaperLookup = {
		'=': '=0',
		':': '=2'
	};
	const escapedString = key.replace(escapeRegex, function (match) {
		console.log(match);
		return escaperLookup[match];
	});

	return '$' + escapedString;
}

function ReactEscape() {
	return <div>{escape('foo=bar:baz')}</div>;
}

export default ReactEscape;
