import { configureStore } from '@reduxjs/toolkit'
import {thunk} from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducers'
import logger from 'redux-logger'

const store = configureStore(
    {
        reducer: rootReducer,
        middleware: () => [thunk, logger],
    }
)
export default store