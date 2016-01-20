import './_Friend-Guesser';
import React, { Component, PropTypes } from 'react';

let option = (imgUrl, index) => {
	return (
		<div className="radio" key={index}>
	    	<img className="form-input__title" src={imgUrl} />
	    	<input className="form-input__input" type="radio" name="friend"/>
	    </div>
	);
};

class FriendGuesser extends Component {
	render() {
		let optionsHTML = this.props.photos.map(option);
		return (
			<div className="friend-guesser">
				{ optionsHTML }
			</div>
		);
	}
};

FriendGuesser.propTypes = {
	photos: PropTypes.array.isRequired
};

export default FriendGuesser;
