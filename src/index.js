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
    yield takeEvery('SEARCH_GIPHY', searchGiphy);
    yield takeEvery('FETCH_FAVORITES', fetchAllFavorites);
    yield takeEvery('FETCH_CATEGORIES', fetchAllCategories);
};

function* searchGiphy(action) {
    try {
        const giphy = yield axios.get(`/api/favorite/${action.payload}`);
        console.log('in searchGiphy. Data is:', giphy.data);
        yield put({type: 'SET_SEARCH', payload: giphy.data});
    } catch (error) {
        console.log('Error in searchGiphy:', error);
        alert('Error in searchGiphy');
    }
}
function* fetchAllFavorites() {
    try {
        const favorites = yield axios.get('/api/favorite');
        console.log('in fetchAllFavorites. Favorites are', favorites.data);
    } catch (error) {
        console.log('Error in fetchAllFavorites', error);
        alert('Error in fetchAllFavorites');
    }
}

function* fetchAllCategories() {
    try {
        const categories = yield axios.get('/api/category');
        console.log('in fetchAllCategories. Categories are', categories.data);
    }catch (error) {
        console.log('Error in fetchAllCategories', error);
        alert('Error in fetchAllCategories');
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const categories = (state = [], action) => {
    if (action.type === "SET_CATEGORIES") {
        return action.payload;
    } 
    return state;
}

const favorites = (state = [], action) => {
    switch (action.type) {
        case "SET_FAVORITES":
            return action.payload;
        default:
            return state;
    }
}

const search = (state = [], action) => {
    switch (action.type) {
        case "SET_SEARCH":
            return action.payload;
        default:
            return state;
    }
}



// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        categories,
        favorites,
        search,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

//Add Provider for store
ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));
