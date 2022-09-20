import { ADD_DOGS } from "../../constants/dogs";

const initialState = {
  url: "",
  status: "",
};

export const dogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DOGS:
      return {
        ...state,
        url: action.payload,
        status: action.status,
      };

    default:
      return state;
  }
};
