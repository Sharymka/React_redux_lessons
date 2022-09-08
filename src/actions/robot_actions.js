import { ADD_ROBOT_MESSAGE } from "../constants/robot";
import wait from "../utilits";

export const robotMessageAction = (message) => {
  return {
    type: ADD_ROBOT_MESSAGE,
    payload: message,
  };
};

export function sendRobotMessageAction(robotMessage) {
  return async function (dispatch) {
    await wait();
    dispatch(robotMessageAction(robotMessage));
    await wait();
    dispatch(robotMessageAction());
  };
}
