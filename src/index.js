import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
//Adding necessary imports
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from "react-redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";





//Add Provider for store
ReactDOM.render(<App />, document.getElementById('root'));
