import {
  ADD_CART_ITEM,
  CLEAR_CART_ITEM,
  DECREMENT_ITEM_QUANTITY,
  INCREMENT_ITEM_QUANTITY,
  REMOVE_CART_ITEM,
} from "./actionsTypes";
import meals from "../../mock/meals.json";

const INITIAL_STATE = {
  total_price: 0,
  total_quantity: 0,
  cart_items: [],
};

const createCartItem = ({ id, name, price,img }) => ({
  id,
  name,
  price,
  img,
  quantity: 1,
});

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CART_ITEM: {
      const { id: mealId } = action.payload;

      const newCartItem = createCartItem(
        meals.find((meal) => meal.id === mealId)
      );

      console.log(newCartItem);

      const total_quantity = state.total_quantity + 1;

      const total_price = state.total_price + newCartItem.price;

      const cart_items = [...state.cart_items, newCartItem];

      return { total_quantity, total_price, cart_items };
    }
    case REMOVE_CART_ITEM: {
      const { id: mealId } = action.payload;

      const { price, quantity } = state.cart_items.find(
        (meal) => meal.id === mealId
      );

      const total_price = state.total_price - price * quantity;

      const total_quantity = state.total_quantity - quantity;

      const cart_items = state.cart_items.filter((item) => item.id !== mealId);

      return { total_price, total_quantity, cart_items };
    }
    case DECREMENT_ITEM_QUANTITY: {
      const newState = { ...state };
      const { mealIndex, mealData } = action.payload;

      newState.cart_items[mealIndex].quantity--;

      newState.total_quantity--;

      newState.total_price -= mealData.price;

      return newState;
    }
    case INCREMENT_ITEM_QUANTITY: {
      const newState = { ...state };
      const { mealIndex, mealData } = action.payload;

      newState.total_price = state.total_price + mealData.price;

      newState.total_quantity = state.total_quantity + 1;

      newState.cart_items[mealIndex].quantity += 1;

      return newState;
    }
    case CLEAR_CART_ITEM:
      return INITIAL_STATE;
    default:
      return state;
  }
};
export default cartReducer;
