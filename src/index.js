import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
//Adding necessary imports
import { createStore, applyMiddleware, combineReducers } from 'redux';
// provider to use redux w/i our React app
import { Provider } from "react-redux";
import logger from "redux-logger";
// import Saga middlware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// Create the rootSaga generator function
function* rootSaga() {
    // watch for action, call generator function
    // e.g: yield takeEvery('', function);
    console.log('in rootSaga');
};

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        //reducers go here
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

//Add Provider for store
ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));
