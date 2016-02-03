// Libraries
import { Map } from 'immutable';
// Constants
import * as actionTypes from '../constants/action-types';

const initialState = Map({
	currentStep: 0,
	title: '用戶資料確認',
	subTitle: '近期發現您的帳戶有不正常的登入行為，為保護帳號安全，請提供以下資訊',
	hintMessage: '',
	confirmButtonText: '下一步',
	cancelButtonText: '',
	relationOptions: [
	    '單身',
	    '穩定交往中',
	    '已訂婚',
	    '已婚',
	    '一言難盡',
	    '交往中但保有交往空間',
	    '喪偶',
	    '已分居',
	    '離婚'
	],
	stepThreePhotos: [
	    'https://scontent-tpe1-1.xx.fbcdn.net/hprofile-xat1/v/t1.0-1/p160x160/12188923_895094247241841_3961803225990407459_n.jpg?oh=1e0a904862c52cf3e4bd8f4eab599664&oe=5747C7AD',
	    'https://scontent-tpe1-1.xx.fbcdn.net/hprofile-xlp1/v/t1.0-1/p160x160/12565447_906680176112135_2861359807638737231_n.jpg?oh=e7657bb6ad6012ad7eeda793e1685a63&oe=5734E1AF',
	    'https://scontent-tpe1-1.xx.fbcdn.net/hprofile-xpt1/v/t1.0-1/p160x160/11828740_10153736249080579_3158383318343209232_n.jpg?oh=4db04d69acf28c384e39501a1efdb527&oe=572A23AA',
	    'https://scontent-tpe1-1.xx.fbcdn.net/hprofile-xlp1/v/t1.0-1/p160x160/7779_1114761768535681_1048254945517952715_n.jpg?oh=283a6354b991dc76fc83e85896c47652&oe=573B8AAE'
	],
	stepFourPhotos: [
		'https://scontent-tpe1-1.xx.fbcdn.net/hprofile-frc3/v/t1.0-1/p160x160/1966785_803305566347692_6651387589279247700_n.jpg?oh=6db5b0215b0f7ed4109556cfe3e4b1c6&oe=57454AA9',
		'https://scontent-tpe1-1.xx.fbcdn.net/hprofile-xfl1/v/t1.0-1/p160x160/1661736_10206290940487416_3648247453826137608_n.jpg?oh=e6744dec183e66b0f8ff0464f1a1b82f&oe=57308D23',
		'https://scontent-tpe1-1.xx.fbcdn.net/hprofile-xpa1/v/t1.0-1/p160x160/10462822_612251415536892_8027030330905031377_n.jpg?oh=86784070cb38ea1cb157a227a6f50bd8&oe=57294319',
		'https://scontent-tpe1-1.xx.fbcdn.net/hprofile-xpt1/v/t1.0-1/p160x160/12552966_994649990582181_8627441309563069486_n.jpg?oh=ca73db37b8e98e351b760c25d6e5a83a&oe=5745404E'

	],
	stepFivePhotos: [
		'https://scontent-tpe1-1.xx.fbcdn.net/hprofile-xpa1/v/t1.0-1/c0.8.160.160/p160x160/27006_375988553140_1296431_n.jpg?oh=8b7059012a49a433df260c1a49851c87&oe=573A8210',
		'https://scontent-tpe1-1.xx.fbcdn.net/hprofile-xtp1/v/t1.0-1/c0.0.160.160/p160x160/1655923_10152131074009302_55114156_n.jpg?oh=d48be59b30359302b238a52cb6684853&oe=57356661',
		'https://scontent-tpe1-1.xx.fbcdn.net/hprofile-xat1/v/t1.0-1/p160x160/11390043_10153292861486539_4113264534762909808_n.jpg?oh=8330af1391dbf11601900770fcaa82b1&oe=573104D7',
		'https://scontent-tpe1-1.xx.fbcdn.net/hprofile-xpf1/v/t1.0-1/p160x160/3394_941847289237971_2037231327389557291_n.jpg?oh=98992097fac7780b1dc21886881a4c22&oe=5729B441'
	],
	resultPhoto: 'http://imageshack.com/a/img911/444/DK7Uaq.gif'
});

const configureStepOne = (state) => {
	return state
			.set('currentStep', 1);
};

const configureStepTwo = (state) => {
	return state
			.set('currentStep', 2)
			.set('subTitle', '請問以下哪位是 "江芊瑩" ?');
};

const configureStepThree = (state) => {
	return state
			.set('currentStep', 3)
			.set('subTitle', '請問以下哪位是 "Ching-yu Lo" ?');
};

const configureStepFour = (state) => {
	return state
			.set('currentStep', 4)
			.set('subTitle', '請問以下哪位是您的配偶?')
			.set('confirmButtonText', '');
};

const configureStepFive = (state) => {
	return state
			.set('currentStep', 5)
			.set('hintMessage', '咦?');
};

const configureStepSix = (state) => {
	return state
			.set('currentStep', 6)
			.set('hintMessage', '找不到嗎?');
};

const configureStepSeven = (state) => {
	return state
			.set('currentStep', 7)
			.set('hintMessage', '他特別與我們合作，希望給你個驚喜');
};

const configureStepEight = (state) => {
	return state
			.set('currentStep', 8)
			.set('hintMessage', '別急，他快出現了');
};

const configureStepNine = (state) => {
	return state
			.set('currentStep', 9)
			.set('title', '恭喜！')
			.set('subTitle', '您是在找他嗎？')
			.set('confirmButtonText', '關閉');
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
				case 7:
					return configureStepSeven(state);
				case 8:
					return configureStepEight(state);
				case 9:
					return configureStepNine(state);
				default:
					return state;
			}
		default:
			return state;
	}
};
