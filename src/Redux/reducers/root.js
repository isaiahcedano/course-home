import {changeCart,
  changeProducts,
  changeLogin,
  changeRegistered} from './globalreducers';
import {changeRoute} from './SingleProduct/reducers';
import {combineReducers} from 'redux';

const root = combineReducers({changeCart,
                              changeProducts,
                              changeRoute,
                              changeRegistered,
                              changeLogin});

export default root;
