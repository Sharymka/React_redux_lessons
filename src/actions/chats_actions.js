import { ADD_POST, DELETE_POST, ADD_CHAT } from '../constants/chats';
import { robotMessageAction } from '.';
import { clearRobotMessage } from '../utils';
import { getDatabase, ref,  update } from 'firebase/database';
import { app } from '../firebase';

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
  const database = getDatabase(app)
  console.log('ADD MESSAGE')

  // const postListRef = ref(database, 'chats');
  // const newPostRef = push(postListRef);
  // set(newPostRef, { ...post });

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['/chats/' + chatId] = post;
  // updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return update(ref(database), updates);

  // set(ref(database, 'chats/' + chatId), {
    // post: post,
  // });
}