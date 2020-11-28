import React, { Component } from 'react';

class DefaultProps extends Component {
	static defaultProps = {
		name: 'Stranger'
	};
	render() {
		return <div>Hello, {this.props.name}</div>;
	}
}

class Demo extends Component {
	render() {
		return <DefaultProps />;
	}
}

export default Demo;
