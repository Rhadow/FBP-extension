// Libraries
import { Map } from 'immutable';
// Constants
import * as actionTypes from '../constants/action-types';

const initialState = Map({
	currentStep: 0,
	title: 'Initial title',
	subTitle: 'Initial subtitle',
	confirmButtonText: 'ok',
	cancelButtonText: 'cancel'
});

const configureStepOne = (state) => {
	return state.set('currentStep', 1).set('title', 'Step 1').set('subTitle', '');
};

const configureStepTwo = (state) => {
	return state.set('currentStep', 2).set('title', 'Step 2');
};

const configureStepThree = (state) => {
	return state.set('currentStep', 3).set('title', 'Step 3').set('cancelButtonText', '');
};

const configureStepFour = (state) => {
	return state.set('currentStep', 4).set('title', 'Step 4').set('subTitle', 'back');
};

const configureStepFive = (state) => {
	return state.set('currentStep', 5).set('title', 'Step 5').set('cancelButtonText', 'lol');
};

const configureStepSix = (state) => {
	return state.set('currentStep', 6).set('title', 'Step 6');
};

export default function app(state = initialState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_STEP:
			switch (action.newStep) {
				case 0:
					return initialState;
				case 1:
					return configureStepOne(state);
				case 2:
					return configureStepTwo(state);
				case 3:
					return configureStepThree(state);
				case 4:
					return configureStepFour(state);
				case 5:
					return configureStepFive(state);
				case 6:
					return configureStepSix(state);
				default:
					return state;
			}
		default:
			return state;
	}
};
