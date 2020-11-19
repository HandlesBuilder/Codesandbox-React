import React from 'react';
import { useHooks, useWinSize } from './components/hooks';
// import Demo from './components/proxy';
// import Demo from './components/object-define-property';
// import Demo from './components/form';
// import Demo from './components/function';
// import Demo from './components/function-currying';
// import Demo from "./components/classname";
// import Demo from "./components/set-map";
// import Demo from "./components/function-overloading";
// import Demo from './components/preload-image';
// import Demo from './components/base64';
// import Demo from './components/count-down';
// import Demo from './components/json';
// import Demo from './components/overflow';
// import Demo from './components/grid';
// import Demo from './components/recursion';
// import Demo from './components/blob-file';
// import Demo from './components/render-html';
// import Demo from './components/render-html';
import Demo from './components/antd-components';
// import Demo from './components/bugs';
// import Demo from './components/get-selection';
import './styles.css';

export default function App() {
	const state = useHooks();
	const { width, height } = useWinSize();
	return (
		<div className="App">
			<h1>Hello {state.name}</h1>
			<h2>
				Width: {width} * Height: {height}
			</h2>
			<h2>Start editing to see some magic happen!</h2>
			<Demo />
		</div>
	);
}
