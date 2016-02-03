// Libraries
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import $ from 'jquery';
// Component
import Background from '../../Components/Background/Background';
import FBDialogBox from '../../Components/FB-Dialog-Box/FB-Dialog-Box';
import StepOne from '../../Components/Step-One/Step-One';
import StepTwo from '../../Components/Step-Two/Step-Two';
import FriendGuesser from '../../Components/Friend-Guesser/Friend-Guesser';
import Result from '../../Components/Result/Result';
import Hint from '../../Components/Hint/Hint';
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
		if (currentStep === 9) {
		    $('body').css('overflow', 'auto');
			let body = document.getElementsByTagName('body')[0];
			body.removeChild(body.childNodes[0]);
		}
	}

	render() {
		const {
			currentStep,
			title,
			subTitle,
			confirmButtonText,
			cancelButtonText,
			hintMessage,
			relationOptions,
			stepThreePhotos,
			stepFourPhotos,
			stepFivePhotos,
			resultPhoto,
			changeStep
		} = this.props;
		const stepComponents = [
			<StepOne />,
			<StepTwo options={relationOptions}/>,
			<FriendGuesser photos={stepThreePhotos} />,
			<FriendGuesser photos={stepFourPhotos} />,
			<FriendGuesser photos={stepFivePhotos} />,
			<Hint message={hintMessage}/>,
			<Hint message={hintMessage}/>,
			<Hint message={hintMessage}/>,
			<Hint message={hintMessage}/>,
			<Result photoUrl={resultPhoto} />
		];
		const timeout = 3500;

		if (currentStep === 4) {
			setTimeout(() => {
				changeStep(currentStep + 1);
			}, 7000);
		} else if (currentStep < 9 && currentStep >= 5) {
			setTimeout(() => {
				changeStep(currentStep + 1);
			}, timeout);
		}

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
	resultPhoto      : PropTypes.string,
	hintMessage      : PropTypes.string,
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
