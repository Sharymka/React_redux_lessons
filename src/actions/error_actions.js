import { ERROR_MESSAGE } from "../constants/errors";

export const getErrorAction = (error) => {
  return {
    type: ERROR_MESSAGE,
    payload: error,
    isError: true,
  };
};
