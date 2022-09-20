import { ADD_MESSAGE, ADD_AUTHOR } from '../constants/post';

export const changeMessageAction = (message) => ({
  type: ADD_MESSAGE,
  payload: message,
});

export const changeAuthorAction = (author) => ({
  type: ADD_AUTHOR,
  payload: author,
});
