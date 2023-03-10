import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DELETE_ALL_CART_ITEMS,
} from "../ActionType";

export const reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];

    case REMOVE_FROM_CART:
      const deletedArray1 = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deletedArray1;
    case DELETE_ALL_CART_ITEMS:
      const deletedArray3 = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deletedArray3;
    default:
      return state;
  }
};
