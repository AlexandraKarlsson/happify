import {applyMiddleware, compose, configureStore, createStore} from "@reduxjs/toolkit";
import {inputReducer} from "./reducer";
import logger from 'redux-logger';

const middleWares = [logger]
const composedMiddleware = compose(applyMiddleware(...middleWares))

export const store = configureStore({
    reducer: {
        input: inputReducer
    }, undefined, composedMiddleware
})

