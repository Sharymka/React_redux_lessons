import { ERROR_MESSAGE } from '../../constants/errors';

const initialState = {
  errorMessage: '',
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
