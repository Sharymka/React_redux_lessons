import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import "./style.css";
import InteractiveList from "./InteractiveList";
import BtnSendMessage from "./BtnSendMessage";
import MessageInput from "./MessageInput";
import AuthorInput from "./AuthorInput";
import BtnChangeTheme from "./BtnChangeTheme";
import RobotMessage from "./RobotMessage";
import { store } from "./store/index";
import { addAuthor, addMessage } from "../actions/posts_actions";
import { addPost } from "../actions/chats_actions";

const sentMessage = "Your message has just been sent";

export default function FormPropsTextFields(props) {
  const { id, deleteMessageList, addMessageList, chats } = props;
  // const [message, setMessage] = useState("");
  // const [author, setAuthor] = useState("");
  // const [post, setPost] = useState({});
  const [robotMessage, setRobotMessage] = useState("");

  const { getState, dispatch, subscribe } = store;

  useEffect(() => {
    const showMessageTimeout = setTimeout(() => {
      setRobotMessage(
        Object.keys(getState().post).length !== 0 ? sentMessage : ""
      );

      clearRobotMessage(3000);
    }, 1500);

    return () => {
      clearTimeout(showMessageTimeout);
      setRobotMessage("");
    };
  }, [getState().post]);

  const clearRobotMessage = (timeout) => {
    setTimeout(() => {
      setRobotMessage("");
    }, timeout);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setPost({ ...post, message: message, author: author });
    // addMessageList(id, { message, author });
    dispatch(addPost(getState().post.post, id));
  };

  const onChangeMessage = (value) => {
    // console.log("MSG: ", value);
    // setMessage(value);
    dispatch(addMessage(value));
  };

  const onChangeAuthor = (value) => {
    // console.log("MSG: ", value);
    // setMessage(value);
    dispatch(addAuthor(value));
  };

  // const onChangeAuthor = (e) => {
  //   setAuthor(e.target.value);
  // };

  return (
    <div className="container">
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
          <MessageInput
            value={getState().post.message}
            onChange={onChangeMessage}
          />
          <AuthorInput
            value={getState().post.author}
            onChange={onChangeAuthor}
          />
          <BtnSendMessage>Send message</BtnSendMessage>
          <BtnChangeTheme />
          <RobotMessage robotMessage={robotMessage}></RobotMessage>
        </div>
      </Box>
    </div>
  );
}
