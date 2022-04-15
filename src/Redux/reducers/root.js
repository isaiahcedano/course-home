import {changeCart, changeProducts} from './globalreducers';
import {combineReducers} from 'redux';

const root = combineReducers({changeCart, changeProducts});

export default root;
