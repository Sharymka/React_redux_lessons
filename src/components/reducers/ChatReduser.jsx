import { ADD_POST, DELETE_POST } from "../../constants/chats";
const initialState = {
  1: {
    id: 1,
    title: "chat 1",
    messageList: [],
  },
  2: {
    id: 2,
    title: "chat 2",
    messageList: [],
  },
  3: {
    id: 3,
    title: "chat 3",
    messageList: [],
  },
};

export const chatsReducer = (state = initialState, action) => {
  console.log("action");
  console.log(action);
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        [action.chatId]: {
          ...state[action.chatId],
          messageList: [
            ...state[action.chatId].messageList,
            { ...action.payload, id: Date.now() },
          ],
        },
      };
    case DELETE_POST:
      console.log(state);
      const changedMessageList = state[action.chatId].messageList.filter(
        (post) => post.id !== action.postId
      );
      return {
        ...state,
        [action.chatId]: {
          ...state[action.chatId],
          messageList: changedMessageList,
        },
      };
    default:
      return state;
  }
};
