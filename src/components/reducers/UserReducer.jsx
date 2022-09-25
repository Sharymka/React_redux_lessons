import { ADD_USER } from '../../constants/user';

const initialState = {
  email: '',
  token: '',
  id: null,
};

export const userReducer = (state = initialState, action) => {
  // console.log('userReducer', action);
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token,
        id: action.payload.id,
      };
    default:
      return state;
  }
};
