import { createStore, combineReducers } from "redux";
import { profileReducer } from "../reducers/ProfileReducer";
import { chatsReducer } from "../reducers/ChatReduser";
import { messageReducer } from "../reducers/PostReducer";

const extension =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    post: messageReducer,
  }),
  extension
);

export { store };
