import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rowdataReducer } from "./reducers/rowdatareducer";
import { productscreenReducer } from "./reducers/productscreenreducer";
import { cartReducer } from "./reducers/cartreducer";
import { userReducer } from "./reducers/userreducer";
import { signReducer } from "./reducers/siginreducer";
const rootReducer = combineReducers({
  rowData: rowdataReducer,
  screenData: productscreenReducer,
  cart: cartReducer,
  newuser: userReducer,
  user: signReducer,
});
const initialstate = {
  user: {
    fastifyuser: localStorage.getItem("fastifyuser")
      ? JSON.parse(localStorage.getItem("fastifyuser"))
      : null,
  },
  cart: {
    cartitems: localStorage.getItem("cartitems")
      ? JSON.parse(localStorage.getItem("cartitems"))
      : [],
    shippinginfo: localStorage.getItem("shippinginfo")
      ? JSON.parse(localStorage.getItem("shippinginfo"))
      : null,
    buyitems: localStorage.getItem("buyitems")
      ? JSON.parse(localStorage.getItem("buyitems"))
      : [],
  },
};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialstate,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
