import * as actionType from "../constants/userConstants";
import axios from "axios";

export const getUsers = (data) => (dispatch) => {
  try {
    dispatch({ type: actionType.GET_USERS_REQUEST });

    dispatch({
      type: actionType.GET_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionType.GET_USERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_USER_DETAILS_REQUEST });

    const { data } = await axios.get(`/users/${id}`);

    dispatch({
      type: actionType.GET_USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionType.GET_USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
