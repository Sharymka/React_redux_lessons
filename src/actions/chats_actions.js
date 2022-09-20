import { ADD_POST, DELETE_POST, ADD_CHAT } from "../constants/chats";
import { robotMessageAction } from "./";
import { clearRobotMessage } from "../utilits";

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

export const addChatAction = (chatsLength) => ({
  type: ADD_CHAT,
  payload: {
    id: chatsLength + 1,
    title: `chat ${chatsLength + 1}`,
    messageList: [],
  },
});

export const addMesssageWithThunk = (post, chatId) => (dispatch) => {
  dispatch(addPostAction(post, chatId));
  const botMessage = "Your message just have been Sent";
  setTimeout(() => {
    clearRobotMessage();
    robotMessageAction(botMessage);
  }, 2000);
};
