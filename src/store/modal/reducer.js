import { CLOSE_MODAL, OPEN_MODAL } from "./actionsType";

const INITIAL_STATE = {
  isActive: false,
  content: {},
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      const newState = { ...state };
      const { mealData } = action.payload;

      newState.isActive = true;

      newState.content = mealData;

      return newState;
    }
    case CLOSE_MODAL:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default modalReducer;
