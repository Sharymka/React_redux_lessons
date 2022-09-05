import { ADD_POST, DELETE_POST } from "../constants/chats";

export const addPostAction = (post, id) => ({
  type: ADD_POST,
  payload: post,
  chatId: id,
});

export const deletePostAction = (chats, chatId, messageId) => ({
  type: DELETE_POST,
  payload: chats,
  chatId: chatId,
  messageId: messageId,
});
