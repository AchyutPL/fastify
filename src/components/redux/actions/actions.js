import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_SCREEN_FAIL,
  PRODUCT_SCREEN_REQUEST,
  PRODUCT_SCREEN_SUCCESS,
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
