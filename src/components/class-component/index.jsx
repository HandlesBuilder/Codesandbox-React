import React, { Component } from 'react';

class Demo extends Component {
	state = {
		num: 0
	};
	// 注意setState的第一个参数：字面量和函数
	handleClick = () => {
		/* this.setState({ num: this.state.num + 1 }, () => {
			console.log('callback1:', this.state.num); // 1
		});
		console.log('console1', this.state.num); // 0
		this.setState({ num: this.state.num + 1 }, () => {
			console.log('callback2:', this.state.num); // 1
		});
		console.log('console2', this.state.num); // 0 */
		this.setState(
			prevState => ({ num: prevState.num + 1 }),
			() => {
				console.log('callback1:', this.state.num); // 2
			}
		);
		console.log('console1', this.state.num); // 0
		this.setState(
			prevState => ({ num: prevState.num + 1 }),
			() => {
				console.log('callback2:', this.state.num); // 2
			}
		);
		console.log('console2', this.state.num); // 0
	};
	render() {
		const { num } = this.state;
		return (
			<div>
				<p>{num}</p>
				<button onClick={this.handleClick}>+</button>
			</div>
		);
	}
}

export default Demo;
