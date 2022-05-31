import * as actionType from "../constants/productConstant";
import axios from "axios";

export const getProducts = (category) => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_PRODUCTS_REQUEST });
    const { data } = await axios.get(`/products/${category}`);

    dispatch({
      type: actionType.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionType.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllPopulerProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_PRODUCTS_REQUEST });
    const { data } = await axios.get(`/product?sort=terpopuler`);

    dispatch({
      type: actionType.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionType.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductDetails = (slug) => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/product/${slug}`);

    dispatch({
      type: actionType.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionType.GET_PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({
    type: actionType.GET_PRODUCT_DETAILS_RESET,
  });
};
