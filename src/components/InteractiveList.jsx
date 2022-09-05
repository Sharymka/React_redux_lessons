import React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import BtnDeleteMessage from "./BtnDeleteMessage";
import { deletePostAction } from "../actions/chats_actions";
import { useDispatch, useSelector } from "react-redux";
// import getChats from "./store/ChatReducer/selectors";
import "./style.css";
// imsport getChatById from "./store/ChatReducer/selectors";

export default function InteractiveList(props) {
  const { id } = props;

  // const getSelectedChat = useSelector(() => getChatById(id));
  const chats = useSelector((state) => state.chats);

  const dispatch = useDispatch();

  const deletePost = (messageId) => {
    const chatId = id;
    console.log(chats);
    dispatch(deletePostAction(chats, chatId, messageId));
  };

  return (
    <Box className="list">
      {chats[id].messageList.map((message, index) => (
        <ListItem key={"message" + index}>
          <ListItemText primary={message.author} secondary={message.message} />
          <BtnDeleteMessage messageId={message.id} onClick={deletePost}>
            Delete post
          </BtnDeleteMessage>
        </ListItem>
      ))}
    </Box>
  );
}
