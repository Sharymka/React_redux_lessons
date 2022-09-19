import { bindActionCreators } from 'redux';
import { store } from '../store';
import * as postActions from './posts_actions';
import * as chatsActions from './chats_actions';
import * as robotActions from './robot_actions';
import * as errorsActions from './error_actions';
import * as dogsActions from './dogs_action';
import * as userActions from './user-action';

const actions = bindActionCreators(
  {
    ...postActions,
    ...chatsActions,
    ...robotActions,
    ...errorsActions,
    ...dogsActions,
    ...userActions,
  },
  store.dispatch
);

export const {
  addChatAction,
  addPostAction,
  deletePostAction,
  changeMessageAction,
  changeAuthorAction,
  robotMessageAction,
  addMesssageWithThunk,
  addMessageWithFirebase,
  getErrorAction,
  getDogsAction,
  fetchUserAction,
  addUserAction,
} = actions;
