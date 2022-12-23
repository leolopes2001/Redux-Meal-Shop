import meals from "../../mock/meals.json";
import { openModal } from "./actions";

export const openModalThunk = (id) => (dispatch) => {
  const mealData = meals.find((meal) => meal.id === id);

  dispatch(openModal(mealData));
};
