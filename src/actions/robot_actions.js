import { ADD_ROBOT_MESSAGE } from "../constants/robot";

export const robotMessageAction = (message) => {
  return {
    type: ADD_ROBOT_MESSAGE,
    payload: message,
  };
};
