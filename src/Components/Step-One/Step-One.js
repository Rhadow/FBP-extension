import './_Step-One';
import React, { Component } from 'react';

class StepOne extends Component {
	render() {
		return (
			<div className="step-one">
			    <div className="form-input">
			    	<div className="form-input__title">E-mail:</div>
			    	<input
			    	    className="form-input__input"
			    	    placeholder="john@example.com" />
			    </div>
			    <div className="form-input">
			    	<div className="form-input__title">Birthday:</div>
			    	<input
			    	    className="form-input__input"
			    	    placeholder="2000/01/01" />
			    </div>
			</div>
		);
	}
};

export default StepOne;
