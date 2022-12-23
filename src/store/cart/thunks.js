import { toast } from "react-toastify";
import {
  addCartItem,
  decrementItemQuantity,
  incrementItemQuantity,
  removeCartItem,
} from "./actions";

const addCartItemThunk = (id) => (dispatch, getState) => {
  const { cart_items } = getState().cart;

  let mealIndex = -1;
  let mealData;

  for (let i = 0; i < cart_items.length; i++) {
    if (cart_items[i].id === id) {
      mealIndex = i;
      mealData = cart_items[i];
      break;
    }
  }

  if (mealIndex === -1) return dispatch(addCartItem(id));

  if (mealData.quantity < 5) {
    return dispatch(incrementItemQuantity(mealIndex, mealData));
  }

  toast.error("Erorrrr");
};

const removeCartItemThunk = (id) => (dispatch, getState) => {
  const { cart_items } = getState().cart;

  let mealIndex = -1;
  let mealData = undefined;

  for (let i = 0; i < cart_items.length; i++) {
    if (cart_items[i].id === id) {
      mealIndex = i;
      mealData = cart_items[i];
      break;
    }
  }

  if (mealData.quantity > 1) {
    return dispatch(decrementItemQuantity(mealIndex, mealData));
  }

  dispatch(removeCartItem(id));
};

export { addCartItemThunk, removeCartItemThunk };
