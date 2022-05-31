import * as actionType from "../constants/bestOfferConstants";
import axios from "axios";

export const getBestOffers = () => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_BEST_OFFERS_REQUEST });
    const { data } = await axios.get(`/best-offer`);

    dispatch({
      type: actionType.GET_BEST_OFFERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionType.GET_BEST_OFFERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
