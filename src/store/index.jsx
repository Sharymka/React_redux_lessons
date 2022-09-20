import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "../components/reducers/ProfileReducer";
import { chatsReducer } from "../components/reducers/ChatReduser";
import { postReducer } from "../components/reducers/PostReducer";
import { robotReducer } from "../components/reducers/RoborReduser";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  post: postReducer,
  robot: robotReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export { store };
