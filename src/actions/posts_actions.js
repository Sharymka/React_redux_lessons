import { ADD_MESSAGE, ADD_AUTHOR } from "../constants/post";

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message,
});

export const addAuthor = (author, id) => ({
  type: ADD_AUTHOR,
  payload: author,
});
