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
