import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import rootReducer from './reducers/root';

const logger = createLogger()
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

export default store;
