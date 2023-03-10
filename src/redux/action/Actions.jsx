import {
  ADD_ADDRESS,
  ADD_TO_CART,
  ADD_TO_wISHLIST,
  DELETE_ADDRESS,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
} from "./ActionType";

export const addItemToCart = (data) => ({
  type: ADD_TO_CART,
  payload: data,
});

export const removeItemFromCart = (index) => ({
  type: REMOVE_FROM_CART,
  payload: index,
});

export const addItemToWishlist = (data) => ({
  type: ADD_TO_wISHLIST,
  payload: data,
});
export const removeItemFromWishlist = (index) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: index,
});
export const addAddress = (data) => ({
  type: ADD_ADDRESS,
  payload: data,
});
export const deleteAddress = (index) => ({
  type: DELETE_ADDRESS,
  payload: index,
});
export const deleteAllCartItems = (index) => ({
  type: DELETE_ALL_CART_ITEMS,
  payload: index,
});
