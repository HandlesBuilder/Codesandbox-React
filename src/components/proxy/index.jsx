import React from 'react';
const target = {};
const handler = {
	get(target, propKey, receiver) {
		console.log(`getting ${propKey}!`);
		return Reflect.get(target, propKey, receiver);
	},
	set(target, propKey, value, receiver) {
		console.log(`setting ${propKey}!`);
		return Reflect.set(target, propKey, value, receiver);
	}
};
const proxy = new Proxy(target, handler);
proxy.foo = 'bar';
proxy.bar = 'foo';

function ProxyComp() {
	return <div>{JSON.stringify(proxy)}</div>;
}

export default ProxyComp;
