// Styles
import './_index';
// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import $ from 'jquery';
// Store
import configureStore from './store/configureStore';
// Component
import Root from './Containers/Root/Root';

const store = configureStore();

$('body').prepend('<div id="FBP-root"></div>');
setTimeout(() => {
	$('body').css('overflow', 'hidden');
	ReactDOM.render(
		<Provider store={store}>
		     <Root />
		</Provider>,
		document.getElementById('FBP-root')
	);
}, 5000);
