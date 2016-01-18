// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// Component
// import Hint from './Components/Hint/Hint';


let Hint = () => {
	return (<h1>adasd</h1>);
};

$('body').prepend('<div id="FBP-root"></div>');
ReactDOM.render(<Hint />, document.getElementById('FBP-root'));