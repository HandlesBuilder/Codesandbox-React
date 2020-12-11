import React, { useEffect, useRef } from 'react';
import { Input } from 'antd';

function PasteComp() {
	const inputRef = useRef(null);
	useEffect(() => {
		// let nodeRef = null;
		/* const fn = event => {
			event.preventDefault();
			let paste = (event.clipboardData || window.clipboardData).getData('text');
			paste = paste.toUpperCase();

			const selection = window.getSelection();
			if (!selection.rangeCount) return false;
			selection.deleteFromDocument();
			selection.getRangeAt(0).insertNode(document.createTextNode(paste));
		}; */

		console.log(inputRef);
		/* if (inputRef.current) {
			nodeRef = inputRef.current;
			nodeRef.addEventListener('paste', fn);
		} */
		/* return () => {
			if (nodeRef) {
				// nodeRef.removeEventListener('paste', fn);
			}
		}; */
	}, []);
	return (
		<div>
			<Input ref={inputRef} />
		</div>
	);
}

export default PasteComp;
