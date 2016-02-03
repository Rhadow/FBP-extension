import './_Friend-Guesser';
import React, { Component, PropTypes } from 'react';

class FriendGuesser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: ''
		};
	}
	render() {
		const { photos } = this.props;
		let option = (imgUrl, index) => {
			return (
				<div className="friend-guesser__option" key={index}>
					<label htmlFor={imgUrl}>
			    		<img className="friend-guesser__image" src={imgUrl} />
			    	</label>
			    	<input
			    	    className="friend-guesser__input"
			    	    type="radio"
			    	    id={imgUrl}
			    	    checked={this.state.selected === imgUrl}
			    	    onClick={() => {
			    	    	this.setState({selected: imgUrl});
			    	    }} />
			    </div>
			);
		};
		let optionsHTML = photos.map(option);
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
