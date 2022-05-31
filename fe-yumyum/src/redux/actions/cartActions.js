import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (slug, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/product/${slug}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const adjustQty = (id, qty) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.ADJUST_QTY,
    payload: {
      id,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
