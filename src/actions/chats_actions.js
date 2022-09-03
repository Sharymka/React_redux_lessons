import { ADD_POST, DELETE_CHAT } from "../constants/chats";

export const addPost = (post, id) => ({
  type: ADD_POST,
  payload: post,
  chatId: id,
});

export const deleteChat = (chats, id) => ({
  type: DELETE_CHAT,
  payload: chats,
  chatId: id,
});
