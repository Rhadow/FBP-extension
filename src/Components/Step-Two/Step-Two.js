import './_Step-Two';
import React, { Component } from 'react';

class StepTwo extends Component {
	render() {
		return (
			<div className="step-two">
			    <div className="form-input">
			    	<div className="form-input__title">E-mail:</div>
			    	<input
			    	    className="form-input__input"
			    	    placeholder="john@example.com" />
			    </div>
			</div>
		);
	}
};

export default StepTwo;
