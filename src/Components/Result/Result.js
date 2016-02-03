import './_Result';
import React, { Component, PropTypes } from 'react';

class Result extends Component {
	render() {
		return (
			<div className="result">
			    <img className="my-photo" src={this.props.photoUrl} />
			</div>
		);
	}
};

Result.propTypes = {
	photoUrl: PropTypes.string
};

export default Result;
