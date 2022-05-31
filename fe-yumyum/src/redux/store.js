import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducers";
import {
  getProductsReducer,
  getProductDetailReducer,
} from "./reducers/productReducers";
import { getUsersReducer, getUserDetailReducer } from "./reducers/userReducers";
import { getBestOfferReducer } from "./reducers/bestOfferReducers";
import { getOrderReducer } from "./reducers/orderReducers";

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailReducer,
  getUsers: getUsersReducer,
  getUserDetails: getUserDetailReducer,
  getBestOffers: getBestOfferReducer,
  getOrders: getOrderReducer,
});

const middleware = [thunk];

const cartFromClocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartFromClocalStorage,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
