import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./cart/reducer";
import modalReducer from "./modal/reducer";

const reducers = combineReducers({
  cart: cartReducer,
  modal: modalReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
