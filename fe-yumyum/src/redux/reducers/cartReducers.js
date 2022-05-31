import * as actionTypes from "../constants/cartConstants";

const CART_INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;

      const existItem = state.cartItems.find(
        (x) => x.product.id === item.product.id
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product
              ? { ...item, qty: item.qty + x.qty }
              : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.product.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (x) => x.product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
