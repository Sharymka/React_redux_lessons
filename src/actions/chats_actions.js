import { ADD_POST, DELETE_POST } from "../constants/chats";

export const addPostAction = (post, chatId) => ({
  type: ADD_POST,
  payload: post,
  chatId: chatId,
});

export const deletePostAction = (chatId, postId) => ({
  type: DELETE_POST,
  chatId: chatId,
  postId: postId,
});
