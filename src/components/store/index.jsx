import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "../reducers/ProfileReducer";
import { chatsReducer } from "../reducers/ChatReduser";
import { postReducer } from "../reducers/PostReducer";
import { robotReducer } from "../reducers/RoborReduser";
import thunk from "redux-thunk";

// const extension =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    post: postReducer,
    robot: robotReducer,
  }),
  composeEnhancer(applyMiddleware(thunk))
  // extension
);

export { store };
