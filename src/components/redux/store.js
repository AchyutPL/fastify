import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rowdataReducer } from "./reducers/rowdatareducer";
import { productscreenReducer } from "./reducers/productscreenreducer";
const rootReducer = combineReducers({
  rowData: rowdataReducer,
  screenData: productscreenReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
