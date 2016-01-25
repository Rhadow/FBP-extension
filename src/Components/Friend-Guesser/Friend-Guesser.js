import './_Friend-Guesser';
import React, { Component, PropTypes } from 'react';

let option = (imgUrl, index) => {
	return (
		<div className="friend-guesser__option" key={index}>
	    	<img className="friend-guesser__image" src={imgUrl} />
	    	<input className="friend-guesser__input" type="radio" name="friend"/>
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
