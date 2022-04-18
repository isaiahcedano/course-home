import {
  ADD_TO_CART,
  UPDATE_CART,
  ELIMINATE_ITEM,
  REQUEST_PRODUCT_DATABASE_PENDING,
  REQUEST_PRODUCT_DATABASE_REJECTED,
  REQUEST_PRODUCT_DATABASE_RESOLVED,
  ELIMINATE_ALL_ITEMS
} from '../actiontypes';

const initialcart = JSON.parse(localStorage.getItem("cart")) || [[],0];

export const changeCart = (state=initialcart, action={}) => {
  let newState = [...state];
  switch(action.type) {
    case ADD_TO_CART:
      newState[0].push(action.payload);
      newState[1] = newState[0].reduce((curr, {quantity}) => curr + quantity, 0);
      localStorage.setItem("cart", JSON.stringify(newState));

      return newState;
    case UPDATE_CART:
      newState[0] = newState[0].reduce((curr, {item, quantity}) => {
        if (item===action.payload.item) {
          curr.push({
            item: action.payload.item,
            quantity: action.payload.quantity
          });
        } else {
          curr.push({item, quantity});
        }
        return curr;
      }, []);
      newState[1] = newState[0].reduce((curr, {quantity}) => curr + quantity, 0);
      localStorage.setItem("cart", JSON.stringify(newState));

      return newState;
    case ELIMINATE_ITEM:
      newState[0] = newState[0].reduce((curr, {item, quantity}) => {
        if (item!==action.payload.item) {
          curr.push({
            item,
            quantity,
          });
        }
        return curr;
      }, []);
      newState[1] = newState[0].reduce((curr, {quantity}) => curr + quantity, 0);
      localStorage.setItem("cart", JSON.stringify(newState));

      return newState;
    case ELIMINATE_ALL_ITEMS:
      newState[0] = [];
      newState[1] = 0;
      localStorage.setItem("cart", JSON.stringify(newState));

      return newState;
    default:
      return state;
  }
}

const initialproducts = JSON.parse(localStorage.getItem("products")) || {};

export const changeProducts = (state=initialproducts, action={}) => {
  switch(action.type) {
    case REQUEST_PRODUCT_DATABASE_PENDING || REQUEST_PRODUCT_DATABASE_REJECTED:
      return state;
    case REQUEST_PRODUCT_DATABASE_RESOLVED:
      localStorage.setItem("products", JSON.stringify(action.payload));
      return action.payload;
    default:
      return state;
  }
}
