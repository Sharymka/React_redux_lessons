import * as postActions from "./posts_actions";
import * as chatsActions from "./chats_actions";
import { bindActionCreators } from "redux";
import { store } from "../components/store";
import * as robotActions from "./robot_actions";

const actions = bindActionCreators(
  {
    ...postActions,
    ...chatsActions,
    ...robotActions,
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
  sendRobotMessageAction,
} = actions;
