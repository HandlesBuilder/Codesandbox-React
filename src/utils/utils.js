import { random } from 'lodash';
import { useState, useEffect, useCallback } from 'react';

export const debounce = function (fn, delay = 300) {
	let timer = null;
	return function (event) {
		// https://reactjs.org/docs/events.html#event-pooling
		// https://zh-hans.reactjs.org/docs/events.html#event-pooling
		event.persist();
		clearTimeout(timer);
		const context = this;
		const args = arguments;
		timer = setTimeout(function () {
			fn.apply(context, args);
		}, delay);
	};
};

export const throttle = function (fn, delay = 300) {
	let canRun = true;
	return function (event) {
		if (!canRun) return;
		canRun = false;
		event.persist();
		const context = this;
		const args = arguments;
		setTimeout(() => {
			fn.apply(context, args);
			canRun = true;
		}, delay);
	};
};

export const useLayOut = () => {
	const [size, setSize] = useState({
		width: document.documentElement.clientWidth,
		hieght: document.documentElement.clientHeight
	});

	const onResize = useCallback(() => {
		setSize({
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight
		});
	}, []);

	useEffect(() => {
		window.addEventListener('resize', onResize);
		return () => {
			window.removeEventListener('resize', onResize);
		};
	}, [onResize]);

	return size;
};

export const preloadImage = function (path) {
	return new Promise(function (resolve, reject) {
		var image = new Image();
		image.onload = resolve;
		image.onerror = reject;
		image.src = path;
	});
};

export const enumFn = (target, key, value) => {
	target[(target[key] = value)] = key;
	return target;
};

export const Win = {
	atob: strToBase64 => {
		return decodeURIComponent(atob(strToBase64));
	},
	btoa: str => {
		return window.btoa(window.encodeURIComponent(str));
	}
};

export const getRandomCode = (length = 8) => {
	// ASCII:
	// 数字：48-57
	// 大写字母：65-90
	// 小写字母: 97-122
	// _.random([lower=0], [upper=1], [floating])
	// String.fromCharCode(104, 101, 108, 108, 111); // "hello"
	const range = [
		[48, 57],
		[65, 90],
		[97, 122]
	];
	const min = 0;
	const max = range.length - 1;
	const getNum = () => {
		const params = range[random(min, max)];
		return random.apply(this, params);
	};
	const arr = [];
	while (arr.length < length) {
		arr.push(getNum());
	}
	return String.fromCharCode.apply(this, arr);
};
