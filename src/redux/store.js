import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({});
const initialstate = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialstate,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
