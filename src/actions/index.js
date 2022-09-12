import * as postActions from "./posts_actions";
import * as chatsActions from "./chats_actions";
import { bindActionCreators } from "redux";
import { store } from "../store";
import * as robotActions from "./robot_actions";
import * as errorsActions from "./error_actions";
import * as dogsActions from "./dogs_action";

const actions = bindActionCreators(
  {
    ...postActions,
    ...chatsActions,
    ...robotActions,
    ...errorsActions,
    ...dogsActions,
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
  getErrorAction,
  getDogsAction,
} = actions;
