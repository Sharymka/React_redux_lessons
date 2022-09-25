import { ADD_ROBOT_MESSAGE } from '../../constants/robot';

const initialState = {
  robotMessage: '',
};

export const robotReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROBOT_MESSAGE:
      return { ...state, robotMessage: action.payload };
    default:
      return state;
  }
};
