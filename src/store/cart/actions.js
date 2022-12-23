import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  DECREMENT_ITEM_QUANTITY,
  INCREMENT_ITEM_QUANTITY,
  CLEAR_CART_ITEM,
} from "./actionsTypes";

export const clearCart = () => ({ type: CLEAR_CART_ITEM });

export const incrementItemQuantity = (mealIndex, mealData) => {
  return {
    type: INCREMENT_ITEM_QUANTITY,
    payload: { mealIndex, mealData },
  };
};

export const decrementItemQuantity = (mealIndex, mealData) => {
  return {
    type: DECREMENT_ITEM_QUANTITY,
    payload: { mealIndex, mealData },
  };
};

export const addCartItem = (id) => {
  return {
    type: ADD_CART_ITEM,
    payload: { id },
  };
};

export const removeCartItem = (id) => {
  return {
    type: REMOVE_CART_ITEM,
    payload: { id },
  };
};
