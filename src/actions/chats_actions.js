import { push, ref, set } from 'firebase/database';
import { robotMessageAction } from '.';
import { ADD_CHAT, ADD_POST, DELETE_POST } from '../constants/chats';
import { database } from '../dataBase';
import { clearRobotMessage } from '../utils';

export const addPostAction = (post, chatId) => ({
  type: ADD_POST,
  payload: post,
  chatId,
});

export const deletePostAction = (chatId, postId) => ({
  type: DELETE_POST,
  chatId,
  postId,
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
  const botMessage = 'Your message just have been Sent';
  setTimeout(() => {
    clearRobotMessage();
    robotMessageAction(botMessage);
  }, 2000);
};

// eslint-disable-next-line no-unused-vars
export const addMessageWithFirebase = (post, chatId) => () => {
  const postListRef = ref(database, `chats/${chatId}/posts`);
  set(push(postListRef), post);
}