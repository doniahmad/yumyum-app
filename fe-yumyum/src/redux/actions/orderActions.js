import * as actionTypes from "../constants/orderConstants";
import { db } from "../../util/firebase";
import { onValue, ref, orderByChild, query, equalTo } from "firebase/database";

export const getOrders = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_ORDERS_REQUEST });
    const userId = JSON.parse(localStorage.getItem("id"));
    const url = query(
      ref(db, "orders"),
      orderByChild("user_id"),
      equalTo(userId)
    );
    onValue(url, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        dispatch({
          type: actionTypes.GET_ORDERS_SUCCESS,
          payload: data,
        });
      } else {
        dispatch({
          type: actionTypes.GET_ORDERS_SUCCESS,
          payload: [],
        });
      }
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ORDERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllOrders = () => (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_ORDERS_REQUEST });
    const url = query(ref(db, "orders"), orderByChild("created_at"));
    onValue(url, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        dispatch({
          type: actionTypes.GET_ORDERS_SUCCESS,
          payload: data,
        });
      } else {
        dispatch({
          type: actionTypes.GET_ORDERS_SUCCESS,
          payload: [],
        });
      }
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ORDERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
