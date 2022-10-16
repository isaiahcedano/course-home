import {
  ADD_TO_CART,
  UPDATE_CART,
  ELIMINATE_ITEM,
  REQUEST_PRODUCT_DATABASE_PENDING,
  REQUEST_PRODUCT_DATABASE_REJECTED,
  REQUEST_PRODUCT_DATABASE_RESOLVED,
  ELIMINATE_ALL_ITEMS,
  LOGIN_PENDING,
  LOGIN_RESOLVED,
  LOGIN_REJECTED,
  REGISTER_PENDING,
  REGISTER_RESOLVED,
  REGISTER_REJECTED,
  LOGIN_RESET,
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

export const loginUser = (credentials, resolve, reject) => async dispatch => {
  try {
    dispatch({
      type: LOGIN_PENDING
    });
    const {token} = await fetch('https://house-of-courses-api.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then(data => data.json());
    if (!token) {
      throw Error();
    }
    dispatch({
      type: LOGIN_RESOLVED,
      payload: token,
    });
    resolve(true);
  } catch(err) {
    dispatch({
      type: LOGIN_REJECTED,
    });
    reject(false);
  }
}

export const registerUser = (credentials, resolve, reject) => async dispatch => {
  try {
    dispatch({
      type: REGISTER_PENDING
    });
    const response = await fetch('https://house-of-courses-api.herokuapp.com/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then(data => data.json());
    if (!response) {
      throw Error();
    }
    dispatch({
      type: REGISTER_RESOLVED,
      payload: response,
    });
    resolve(true);
  } catch(err) {
    dispatch({
      type: REGISTER_REJECTED,
    });
    reject(false);
  }
}

export const resetLogin = () => ({
  type: LOGIN_RESET
})

const globals = {
  addToCart,
  updateCart,
  eliminateItem,
  setProductDatabase,
  eliminateAllItems,
  loginUser,
  registerUser,
  resetLogin,
};

export default globals;
