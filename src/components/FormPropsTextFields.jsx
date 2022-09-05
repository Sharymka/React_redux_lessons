import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import "./style.css";
import BtnSendMessage from "./BtnSendMessage";
import MessageInput from "./MessageInput";
import AuthorInput from "./AuthorInput";
import RobotMessage from "./RobotMessage";
import { changeAuthorAction, changeMessageAction } from "../actions";
import { addPostAction } from "../actions";
import { useSelector } from "react-redux";
import getPost from "./store/PostReducer/selectors";

const sentMessage = "Your message has just been sent";

export default function FormPropsTextFields(props) {
  const { chatId } = props;
  const [robotMessage, setRobotMessage] = useState("");
  const post = useSelector(getPost);

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
    changeMessageAction(value);
  };

  const onChangeAuthor = (value) => {
    changeAuthorAction(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPostAction(post, chatId);
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
      >
        <div>
          <MessageInput value={post.message} onChange={onChangeMessage} />
          <AuthorInput value={post.author} onChange={onChangeAuthor} />
          <BtnSendMessage>Send message</BtnSendMessage>
          <RobotMessage robotMessage={robotMessage}></RobotMessage>
        </div>
      </Box>
    </div>
  );
}
