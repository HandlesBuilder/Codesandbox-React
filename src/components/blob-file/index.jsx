import React from 'react';

function BlobFile() {
	const downloadFile = file => {
		if (!file) return;
		// Blob.type: https://developer.mozilla.org/zh-CN/docs/Web/API/Blob/type
		const blob = new Blob([file], {
			type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
		});
		const url = window.URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = 'test.xlsx';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
	return <button onClick={downloadFile}>download blob file</button>;
}

export default BlobFile;
