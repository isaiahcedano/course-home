import {
  ADD_TO_CART,
  UPDATE_CART,
  ELIMINATE_ITEM,
} from '../actiontypes';

export const addToCart = (item, quantity) => ({
  type: ADD_TO_CART,
  payload: {
    item,
    quantity
  }
});

export const updateCart = (item, quantity) => ({
  type: UPDATE_CART,
  payload: {
    item,
    quantity
  }
});

export const eliminateItem = item => ({
  type: ELIMINATE_ITEM,
  payload: {item},
});
