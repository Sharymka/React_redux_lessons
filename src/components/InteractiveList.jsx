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
import { store } from "./store/index";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList(props) {
  const { id, deleteMessageList, chats } = props;
  const { getState } = store;

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
              {chats[id].messageList.map((message, index) => (
                // console.log(id),
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
              ))}
              <BtnDeleteMessage id={id} deleteMessageList={deleteMessageList}>
                Delete chat
              </BtnDeleteMessage>
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
