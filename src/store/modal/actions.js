import { CLOSE_MODAL, OPEN_MODAL } from "./actionsType";

export const openModal = (mealData) => ({
  type: OPEN_MODAL,
  payload: { mealData },
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
