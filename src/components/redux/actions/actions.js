import {
  ADD_TO_BUY,
  ADD_TO_CART,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_SCREEN_FAIL,
  PRODUCT_SCREEN_REQUEST,
  PRODUCT_SCREEN_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REMOVE_FROM_CART,
  SHIPPING_INFO,
  SIGNIN_USER_FAIL,
  SIGNIN_USER_REQUEST,
  SIGNIN_USER_SUCCESS,
  SIGNOUT_USER,
} from "../constants/constant";
import Axios from "axios";

export const rowdatas = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      "https://fastifyera.herokuapp.com/api/dataforrows"
    );
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error,
    });
  }
};

export const productscreendata = (productId) => async (dispatch) => {
  dispatch({
    type: PRODUCT_SCREEN_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      `https://fastifyera.herokuapp.com/api/product/${productId}`
    );
    dispatch({
      type: PRODUCT_SCREEN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_SCREEN_FAIL,
      payload: error,
    });
  }
};

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(
    `https://fastifyera.herokuapp.com/api/product/${productId}`
  );
  dispatch({
    type: ADD_TO_CART,
    payload: {
      productname: data.productname,
      price: data.price,
      path: data.path,
      countinstock: data.countinstock,
      product: data._id,
      qty: 1,
    },
  });
  localStorage.setItem("cartitems", JSON.stringify(getState().cart.cartitems));
};

export const removeCart = (productId) => (dispatch, getState) => {
  dispatch({ type: REMOVE_FROM_CART, payload: productId });
  localStorage.setItem("cartitems", JSON.stringify(getState().cart.cartitems));
};

export const registeruser = (userData) => async (dispatch) => {
  dispatch({
    type: REGISTER_USER_REQUEST,
    payload: userData,
  });
  try {
    const { data } = await Axios.post(
      "https://fastifyera.herokuapp.com/api/user/register",
      userData
    );
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error,
    });
  }
};

export const signin = (signinData) => async (dispatch, getState) => {
  dispatch({
    type: SIGNIN_USER_REQUEST,
    payload: signinData,
  });
  try {
    const { data } = await Axios.post(
      "https://fastifyera.herokuapp.com/api/user/signin",
      signinData
    );
    dispatch({
      type: SIGNIN_USER_SUCCESS,
      payload: data,
    });
    localStorage.setItem("fastifyuser", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: SIGNIN_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem("fastifyuser");
  localStorage.removeItem("cartitems");
  dispatch({ type: SIGNOUT_USER });
};

export const shippingsave = (shippinginfo) => (dispatch) => {
  localStorage.setItem("shippinginfo", JSON.stringify(shippinginfo));
  dispatch({ type: SHIPPING_INFO });
};

export const buynow = (productId) => async (dispatch, getState) => {
  const { data } = await Axios.get(
    `https://fastifyera.herokuapp.com/api/product/${productId}`
  );
  dispatch({
    type: ADD_TO_BUY,
    payload: data,
  });
  localStorage.setItem("buyitems", JSON.stringify(getState().cart.buyitems));
};
