// Libraries
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Component
import Background from '../../Components/Background/Background';
import FBDialogBox from '../../Components/FB-Dialog-Box/FB-Dialog-Box';
import Hint from '../../Components/Hint/Hint';
import StepOne from '../../Components/Step-One/Step-One';
import StepTwo from '../../Components/Step-Two/Step-Two';
import FriendGuesser from '../../Components/Friend-Guesser/Friend-Guesser';
import Result from '../../Components/Result/Result';
// Actions
import * as AppActions from '../../actions/app-actions';

class Root extends Component {

	constructor(props) {
		super(props);
		this._onConfirmClicked = ::this._onConfirmClicked;
	}

	_onConfirmClicked() {
		const { currentStep, changeStep } = this.props;
		changeStep(currentStep + 1);
	}

	render() {
		const {
			currentStep,
			title,
			subTitle,
			confirmButtonText,
			cancelButtonText,
			relationOptions,
			stepThreePhotos,
			stepFourPhotos,
			stepFivePhotos,
			changeStep
		} = this.props;
		const stepComponents = [
			<Hint/>,
			<StepOne />,
			<StepTwo options={relationOptions}/>,
			<FriendGuesser photos={stepThreePhotos} />,
			<FriendGuesser photos={stepFourPhotos} />,
			<FriendGuesser photos={stepFivePhotos} />,
			<Result />
		];

		return (
			<div className="root">
				<Background />
				<FBDialogBox
				    title={title}
				    subtitle={subTitle}
				    body={stepComponents[currentStep]}
				    confirmButtonText={confirmButtonText}
				    cancelButtonText={cancelButtonText}
				    onConfirmHandler={this._onConfirmClicked}
				    onCancelHandler={() => changeStep(currentStep - 1)}/>
			</div>
		);
	}
};

Root.propTypes = {
	currentStep      : PropTypes.number,
	title            : PropTypes.string,
	subTitle         : PropTypes.string,
	confirmButtonText: PropTypes.string,
	cancelButtonText : PropTypes.string,
	relationOptions  : PropTypes.array,
	stepThreePhotos  : PropTypes.array,
	stepFourPhotos   : PropTypes.array,
	stepFivePhotos   : PropTypes.array,
	stepSixPhotos    : PropTypes.array,
	changeStep       : PropTypes.func
};

const mapStateToProps = (state) => {
	return state.toJS();
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(AppActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
