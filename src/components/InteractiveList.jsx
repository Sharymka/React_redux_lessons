import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import BtnDeleteMessage from "./BtnDeleteMessage";
import store from "./store";
import { deleteChat } from "../actions/chats_actions";

import { useDispatch, useSelector } from "react-redux";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList(props) {
  const { id, deleteMessageList } = props;

  const chats = useSelector((state) => state.chats);
  const dispatch = useDispatch();

  const deleteChatList = () => {
    console.log(chats);
    dispatch(deleteChat(chats));
  };

  return (
    <Box
      sx={{
        width: "30%",
        border: "1px solid black",
        borderRadius: "5px",
        marginTop: "10px",
        padding: "5px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Chat №{id}
          </Typography>
          <Demo>
            <List>
              {chats[id].messageList.map(
                (message, index) => (
                  console.log(chats[id].messageList),
                  (
                    <ListItem key={"message" + index} className="list-item">
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={message.author}
                        secondary={message.message}
                      />
                    </ListItem>
                  )
                )
              )}
              <BtnDeleteMessage deleteMessageList={deleteChatList}>
                Delete chat
              </BtnDeleteMessage>
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
