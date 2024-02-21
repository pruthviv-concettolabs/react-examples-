import { buyBook } from "./BuyBook";

const initialState = {
  numberOfBooks: 20,
};

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case buyBook:
      return {
        ...state,
        numberOfBooks: state.initialState - 1,
      };
    default:
      state;
  }
};

export default BookReducer;
