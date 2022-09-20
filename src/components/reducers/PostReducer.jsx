import { ADD_MESSAGE, ADD_AUTHOR } from '../../constants/post';

const initialState = {
  message: '',
  author: '',
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return { ...state, message: action.payload };
    case ADD_AUTHOR:
      return { ...state, author: action.payload };
    default:
      return state;
  }
};
