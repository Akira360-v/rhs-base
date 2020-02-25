import React from 'react';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from './reducers';
import allSagas from './sagas';

const initialState = {};
const saga = createSagaMiddleware();
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(saga),
);
saga.run(allSagas);

const Redux = props => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
};

export default Redux;