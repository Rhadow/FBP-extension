import './_Step-Two';
import React, { Component, PropTypes } from 'react';

class StepTwo extends Component {
	render() {
		const optionsHTML = this.props.options.map((option, index) => {
			return (
				<option key={index}>{ option }</option>
			);
		});
		return (
			<div className="step-two">
			    <div className="form-input">
			    	<div className="form-input__title">戀愛性向:</div>
			    	<input
			    	    className="form-input__radio"
			    	    type="radio"
			    	    name="gender" />
			    	<span className="form-input__radio-hint">男性</span>
			    	<input
			    	    className="form-input__radio"
			    	    type="radio"
			    	    name="gender" />
			    	<span className="form-input__radio-hint">女性</span>
			    </div>
			    <div className="form-input">
			    	<div className="form-input__title">感情狀況:</div>
			    	<select className="form-input__input">
			    		{optionsHTML}
			    	</select>
			    </div>
			</div>
		);
	}
};

StepTwo.propTypes = {
	options: PropTypes.array.isRequired
};

export default StepTwo;
