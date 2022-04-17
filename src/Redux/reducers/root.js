import {changeCart, changeProducts} from './globalreducers';
import {changeRoute} from './SingleProduct/reducers';
import {combineReducers} from 'redux';

const root = combineReducers({changeCart, changeProducts, changeRoute});

export default root;
