import { ADD_POST, DELETE_POST } from "../constants/chats";

export const addPost = (post, id) => ({
  type: ADD_POST,
  payload: post,
  chatId: id,
});

export const deletePost = (post, id) => ({
  type: DELETE_POST,
  payload: post,
  chatId: id,
});
