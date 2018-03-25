import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import mainReducer from './Store/reducers/index';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import ScrambleGame from './Components/ScrambleGame';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    mainReducer, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <ScrambleGame />
    </Provider>, document.getElementById('root')
);