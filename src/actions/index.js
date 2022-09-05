import * as postActions from "./posts_actions";
import * as chatsActions from "./chats_actions";
import { bindActionCreators } from "redux";
import { store } from "../components/store";

const actions = bindActionCreators(
  {
    ...postActions,
    ...chatsActions,
  },
  store.dispatch
);

export const {
  addPostAction,
  deletePostAction,
  changeMessageAction,
  changeAuthorAction,
} = actions;
