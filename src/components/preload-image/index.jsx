import React, { useRef, useEffect } from 'react';
import { preloadImage } from '../../utils/utils';

function PreloadImg() {
	const container = useRef(null);

	useEffect(() => {
		preloadImage('https://www.dogedoge.com/assets/new_logo.min.png')
			.then(e => {
				container.current.appendChild(e.target);
			})
			.catch(err => {
				console.error(err);
			});
	}, []);

	return <div ref={container}></div>;
}

export default PreloadImg;
