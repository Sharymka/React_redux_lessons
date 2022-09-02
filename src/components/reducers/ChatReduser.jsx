import { ADD_POST, DELETE_POST } from "../../constants/chats";
const initialState = {
  1: {
    title: "chat 1",
    messageList: [],
  },
  2: {
    title: "chat 2",
    messageList: [],
  },
  3: {
    title: "chat 3",
    messageList: [],
  },
};

export const chatsReducer = (state = initialState, action) => {
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
      return {
        ...state,
        [action.chatId]: {
          ...state[action.chatId],
          messageList: [...state[action.chatId].messageList, action.payload],
        },
      };
    default:
      return state;
  }
};
