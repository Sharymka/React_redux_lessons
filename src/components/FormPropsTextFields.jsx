import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import "./style.css";
import BtnSendMessage from "./BtnSendMessage";
import MessageInput from "./MessageInput";
import AuthorInput from "./AuthorInput";
import BtnChangeTheme from "./BtnChangeTheme";
import RobotMessage from "./RobotMessage";
import {
  changeAuthorAction,
  changeMessageAction,
} from "../actions/posts_actions";
import { addPost } from "../actions/chats_actions";
import { useDispatch, useSelector } from "react-redux";

const sentMessage = "Your message has just been sent";

export default function FormPropsTextFields(props) {
  const { id, deleteMessageList } = props;
  const [robotMessage, setRobotMessage] = useState("");
  const dispatch = useDispatch();
  const post = useSelector(({ post }) => post);

  useEffect(() => {
    const showMessageTimeout = setTimeout(() => {
      setRobotMessage(Object.keys(post).length !== 0 ? sentMessage : "");

      clearRobotMessage(3000);
    }, 1500);

    return () => {
      clearTimeout(showMessageTimeout);
      setRobotMessage("");
    };
  }, [post]);

  const clearRobotMessage = (timeout) => {
    setTimeout(() => {
      setRobotMessage("");
    }, timeout);
  };

  const onChangeMessage = (value) => {
    dispatch(changeMessageAction(value));
  };

  const onChangeAuthor = (value) => {
    dispatch(changeAuthorAction(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(post, id));
  };

  return (
    <div>
      <Box
        className="mui-form"
        onSubmit={handleSubmit}
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: "25ch",
            display: "flex",
          },
          "& label.Mui-focused": {
            color: "white",
            borderColor: "transparent",
          },
          "& label": {
            color: "white",
          },

          "& .MuiInput-underline:before": {
            borderBottomColor: "white",
          },

          "& .MuiInput-underline:after": {
            borderBottomColor: "white",
          },

          "& .MuiInput-root:hover": {
            borderBottomColor: "white",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <div>chat №{props.id}</div>
          <MessageInput value={post.message} onChange={onChangeMessage} />
          <AuthorInput value={post.author} onChange={onChangeAuthor} />
          <BtnSendMessage>Send message</BtnSendMessage>
          <BtnChangeTheme />
          <RobotMessage robotMessage={robotMessage}></RobotMessage>
        </div>
      </Box>
    </div>
  );
}
