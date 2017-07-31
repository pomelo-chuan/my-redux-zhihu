import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import zhiHuApp from './reducers/reducers';

require('vital-css/dist/css/vital.css');

let store = createStore(
    zhiHuApp,
    applyMiddleware(promiseMiddleware)
);

let rootElement = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement

);
registerServiceWorker();
