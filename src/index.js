// Styles
import './_index';
// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// Component
import Root from './Containers/Root/Root';

$('body').prepend('<div id="FBP-root"></div>');
ReactDOM.render(
	<Root />,
	document.getElementById('FBP-root')
);