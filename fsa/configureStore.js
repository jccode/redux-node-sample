import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import promiseMiddleware from 'redux-promise'
import reducer from './reducers';


const loggerMiddleware = createLogger()

export default function configureStore(initalState) {
    return createStore(
        reducer,
        initalState,
        applyMiddleware(
            promiseMiddleware,
            loggerMiddleware
        )
    )
}