import * as actionTypes from '../constants/action-types';

export function changeStep(newStep) {
	return {
		type: actionTypes.CHANGE_STEP,
		newStep
	};
};
