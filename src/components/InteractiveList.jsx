import React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import BtnDeleteMessage from "./BtnDeleteMessage";
import { deletePostAction } from "../actions/chats_actions";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { useMemo } from "react";
import getChatById from "./store/ChatReducer/selectors";

export default function InteractiveList(props) {
  const { chatId } = props;

  const getSelectedChat = useMemo(() => getChatById(chatId), [chatId]);
  const selectedChat = useSelector(getSelectedChat);

  const dispatch = useDispatch();

  const deletePost = (postId) => {
    dispatch(deletePostAction(chatId, postId));
  };

  return (
    <Box className="list">
      {selectedChat.messageList.map((message, index) => (
        <ListItem key={"message" + index}>
          <ListItemText primary={message.author} secondary={message.message} />
          <BtnDeleteMessage postId={message.id} onClick={deletePost}>
            Delete post
          </BtnDeleteMessage>
        </ListItem>
      ))}
    </Box>
  );
}
