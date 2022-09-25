import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { profileReducer } from '../components/reducers/ProfileReducer';
import { chatsReducer } from '../components/reducers/ChatReducer';
import { postReducer } from '../components/reducers/PostReducer';
import { robotReducer } from '../components/reducers/RoborReducer';
import { errorReducer } from '../components/reducers/ErrorReducer';
import { dogsReducer } from '../components/reducers/DogsReducer';
import { userReducer } from '../components/reducers/UserReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  blacklist: 'error',
};

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  post: postReducer,
  robot: robotReducer,
  error: errorReducer,
  dogs: dogsReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);

export { store };
