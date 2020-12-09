import React, { useEffect } from 'react';

function CustomCopy() {
	useEffect(() => {
		const fn = e => {
			e.preventDefault();
			const clipboardData = e.clipboardData || window.clipboardData;
			clipboardData.setData(
				'text/plain',
				`${window.getSelection().toString()}
        \n作者：Docker
        \n链接：${window.location.href}
        \n来源：本地
        \n著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。`
			);
		};
		window.addEventListener('copy', fn);
		return () => {
			window.removeEventListener('copy', fn);
		};
	}, []);
	return <div>demo</div>;
}

export default CustomCopy;
