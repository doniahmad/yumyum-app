import * as actionTypes from "../constants/userConstants";

export const getUsersReducer = (state = { user: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS_REQUEST:
      return {
        loading: true,
        user: [],
      };
    case actionTypes.GET_USERS_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case actionTypes.GET_USERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getUserDetailReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_USER_DETAILS_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case actionTypes.GET_USER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_USER_DETAILS_RESET:
      return {
        user: {},
      };
    default:
      return state;
  }
};
