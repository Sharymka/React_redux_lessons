import { ADD_POST, DELETE_POST, ADD_CHAT } from "../constants/chats";
import { robotMessageAction } from "./";

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
  console.log("thunk works");
  dispatch(addPostAction(post, chatId));
  const botMessage = "Your message just have been Sent";
  setTimeout(() => {
    setTimeout(() => {
      robotMessageAction("");
    }, 3000);
    robotMessageAction(botMessage);
  }, 2000);
};
