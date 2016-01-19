// Libraries
import React, { Component } from 'react';
// Component
import Background from '../../Components/Background/Background';
import FBDialogBox from '../../Components/FB-Dialog-Box/FB-Dialog-Box';
import Hint from '../../Components/Hint/Hint';

class Root extends Component {
	render() {
		return (
			<div className="root">
				<Background />
				<FBDialogBox
				    title="Title"
				    subtitle="Subtitle"
				    body={<Hint/>}
				    confirmButtonText="Confirm"
				    cancelButtonText="Cancel"
				    onConfirmHandler={() => console.log('confirm')}
				    onCancelHandler={() => console.log('cancel')}/>
			</div>
		);
	}
};

export default Root;
