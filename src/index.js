import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';

import './index.css';
import SplashPage from './splashPage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<SplashPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
