import './_Hint';
import React, { Component, PropTypes } from 'react';

class Hint extends Component {
	render() {
		return (
			<h1 className="hint">
			    {this.props.message}
			</h1>
		);
	}
};

Hint.propTypes = {
	message: PropTypes.string
};

export default Hint;
