import {
  ADD_TO_CART,
  UPDATE_CART,
  ELIMINATE_ITEM,
  REQUEST_PRODUCT_DATABASE_PENDING,
  REQUEST_PRODUCT_DATABASE_REJECTED,
  REQUEST_PRODUCT_DATABASE_RESOLVED,
  ELIMINATE_ALL_ITEMS
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

export const eliminateAllItems = () => ({
  type: ELIMINATE_ALL_ITEMS,
});

export const setProductDatabase = () => async dispatch => {
  if (!JSON.parse(localStorage.getItem("products"))) {
    try {
      const fetchBase = "https://house-of-courses-api.herokuapp.com";
      dispatch({
        type: REQUEST_PRODUCT_DATABASE_PENDING
      });

      const products = await fetch(`${fetchBase}/products`)
      .then(resp => resp.json());

      dispatch({
        payload: products,
        type: REQUEST_PRODUCT_DATABASE_RESOLVED
      });
    } catch(err) {
      dispatch({
        type: REQUEST_PRODUCT_DATABASE_REJECTED,
      })
    }
  }
}

const globals = {
  addToCart,
  updateCart,
  eliminateItem,
  setProductDatabase,
  eliminateAllItems
};

export default globals;
