// Libraries
import './_FB-Dialog-Box';
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class FBDialogBox extends Component {
	render() {
		const {
			title,
			subtitle,
			body,
			confirmButtonText,
			cancelButtonText,
			onConfirmHandler,
			onCancelHandler
		} = this.props;
		let confirmButtonClasses = classnames({
				'fb-dialog-box__confirm-button': confirmButtonText,
				'fb-dialog-box__confirm-button--hide': !confirmButtonText,
			}),
			cancelButtonClasses = classnames({
				'fb-dialog-box__cancel-button': cancelButtonText,
				'fb-dialog-box__cancel-button--hide': !cancelButtonText,
			});
		return (
			<div className="fb-dialog-box">
				<div className="fb-dialog-box__title">{ title }</div>
				<div className="fb-dialog-box__subtitle">{ subtitle }</div>
				<div className="fb-dialog-box__body">{ body }</div>
				<div className="fb-dialog-box__footer">
					<div className={ confirmButtonClasses } onClick={ onConfirmHandler }>
					    <div className="fb-dialog-box__confirm-button--inner">
					        { confirmButtonText }
					    </div>
					</div>
					<div className={ cancelButtonClasses } onClick={ onCancelHandler }>
					    <div className="fb-dialog-box__cancel-button--inner">
					        { cancelButtonText }
					    </div>
					</div>
				</div>
			</div>
		);
	}
};

FBDialogBox.propTypes = {
	title            : PropTypes.string,
	subtitle         : PropTypes.string,
	body             : PropTypes.element,
	confirmButtonText: PropTypes.string,
	cancelButtonText : PropTypes.string,
	onConfirmHandler : PropTypes.func,
	onCancelHandler  : PropTypes.func
};

FBDialogBox.defaultProps = {
	title            : '',
	subtitle         : '',
	body             : (<div></div>),
	confirmButtonText: '',
	cancelButtonText : '',
	onConfirmHandler : () => {},
	onCancelHandler  : () => {}
};

export default FBDialogBox;
