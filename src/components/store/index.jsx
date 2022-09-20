import { createStore, combineReducers } from "redux";
import { profileReducer } from "../reducers/ProfileReducer";
import { chatsReducer } from "../reducers/ChatReduser";
import { postReducer } from "../reducers/PostReducer";

const extension =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    post: postReducer,
  }),
  extension
);

export { store };
