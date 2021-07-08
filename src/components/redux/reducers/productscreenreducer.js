import {
  PRODUCT_SCREEN_FAIL,
  PRODUCT_SCREEN_REQUEST,
  PRODUCT_SCREEN_SUCCESS,
} from "../constants/constant";

const initalstate = {
  product: {},
};
export const productscreenReducer = (state = initalstate, action) => {
  switch (action.type) {
    case PRODUCT_SCREEN_REQUEST:
      return { loading: true };
    case PRODUCT_SCREEN_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_SCREEN_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
