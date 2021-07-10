import {
  ADD_TO_BUY,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../constants/constant";
const initialstate = {
  cartitems: [],
};

export const cartReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const existitem = state.cartitems.find((x) => x.product === item.product);
      if (existitem) {
        return {
          ...state,
          cartitems: state.cartitems.map((x) =>
            x.product === existitem.product ? item : x
          ),
        };
      } else {
        return { ...state, cartitems: [...state.cartitems, item] };
      }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cartitems: state.cartitems.filter((x) => x.product !== action.payload),
      };
    }
    case ADD_TO_BUY:
      return {
        ...state,
        buyitems: action.payload,
      };

    default:
      return state;
  }
};
