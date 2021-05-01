// third party dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// named export
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// own code
import App from './components/App';
import reducers from './reducers';


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root')
);