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
			cancelButtonText
		} = this.props;
		const stepComponents = [
			<Hint/>,
			<StepOne />,
			<StepTwo />,
			<FriendGuesser photos={['https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTUDQgbT9PFaERFaLbqP8sFsyq2r3sSYu6BtCj63z90tLEpALgo']} />,
			<FriendGuesser photos={['http://jbcdn2.b0.upaiyun.com/2012/03/urls.jpg', 'http://jbcdn2.b0.upaiyun.com/2012/03/urls.jpg']} />,
			<FriendGuesser photos={['https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTnwSm4ZUaEppf8gDl8xvqYFHuoNKR88zPjGKUXQPQmc2WKjS157w']} />,
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
				    onCancelHandler={() => console.log('cancel')}/>
			</div>
		);
	}
};

Root.propTypes = {
	currentStep: PropTypes.number,
	title: PropTypes.string,
	subTitle: PropTypes.string,
	confirmButtonText: PropTypes.string,
	cancelButtonText: PropTypes.string,
	changeStep: PropTypes.func
};

const mapStateToProps = (state) => {
	return state.toJS();
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(AppActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
