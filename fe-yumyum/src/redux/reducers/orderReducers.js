import * as actionTypes from "../constants/orderConstants";

export const getOrderReducer = (state = { order: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_ORDERS_REQUEST:
      return {
        loading: true,
        order: [],
      };
    case actionTypes.GET_ORDERS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case actionTypes.GET_ORDERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
