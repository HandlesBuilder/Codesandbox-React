import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 使用 PropTypes 进行类型检查: https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html
class Child extends Component {
	static propTypes = {
		str: PropTypes.string.isRequired,
		num: PropTypes.number.isRequired,
		enums: PropTypes.oneOf(['foo', 'bar']).isRequired,
		bool: PropTypes.bool.isRequired,
		arr: PropTypes.arrayOf(PropTypes.number).isRequired,
		obj: PropTypes.shape({
			foo: PropTypes.string
		}).isRequired,
		fn: PropTypes.func.isRequired,
		customProp: function (props, propName, componentName) {
			if (!/^matchme/.test(props[propName])) {
				return new Error(
					'Invalid prop `' +
						propName +
						'` supplied to' +
						' `' +
						componentName +
						'`. Validation failed.'
				);
			}
		}
	};
	render() {
		const {
			str = 'PropsTypes',
			num = 100,
			enums = 'bar',
			bool = false,
			arr = [],
			obj = {},
			fn = () => {},
			customProp = 'customProp'
		} = this.props;
		return (
			<>
				<p>{str}</p>
				<p>{num}</p>
				<p>{enums}</p>
				<p>{JSON.stringify(bool)}</p>
				<p>{JSON.stringify(arr)}</p>
				<p>{JSON.stringify(obj)}</p>
				<p>{JSON.stringify(fn)}</p>
				<p>{customProp}</p>
			</>
		);
	}
}

function Test(props) {
	return <p>{props.str}</p>;
}
Test.propTypes = {
	str: PropTypes.string.isRequired
};

class PropTypesComp extends Component {
	render() {
		return (
			<div>
				<Child
					str="Hello, string prop!"
					num={123}
					enums="foo"
					bool={false}
					arr={[1, 2, 3]}
					obj={{ foo: 'bar' }}
					fn={() => {
						console.log('fn');
					}}
					customProp="no match me, throw warning"
				/>
				<Test str="function propTypes" />
			</div>
		);
	}
}

export default PropTypesComp;
