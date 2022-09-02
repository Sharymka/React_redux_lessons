import { ADD_MESSAGE, ADD_AUTHOR } from "../../constants/post";

const initialState = {
  post: { message: "", author: "" },
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        post: {
          ...state.post,
          message: action.payload,
        },
      };
    case ADD_AUTHOR:
      return {
        ...state,
        post: {
          ...state.post,
          author: action.payload,
        },
      };
    default:
      return state;
  }
};
