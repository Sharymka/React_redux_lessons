import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "../components/reducers/ProfileReducer";
import { chatsReducer } from "../components/reducers/ChatReducer";
import { postReducer } from "../components/reducers/PostReducer";
import { robotReducer } from "../components/reducers/RoborReducer";
import { errorReducer } from "../components/reducers/ErrorReducer";
import { dogsReducer } from "../components/reducers/DogsReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage,
  blacklist: "error",
};

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  post: postReducer,
  robot: robotReducer,
  error: errorReducer,
  dogs: dogsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export { store };
