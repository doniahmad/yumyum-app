import * as actionTypes from "../constants/bestOfferConstants";

export const getBestOfferReducer = (state = { bestOffer: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_BEST_OFFERS_REQUEST:
      return {
        loading: true,
        bestOffer: [],
      };
    case actionTypes.GET_BEST_OFFERS_SUCCESS:
      return {
        loading: false,
        bestOffer: action.payload,
      };
    case actionTypes.GET_BEST_OFFERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
