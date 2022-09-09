import Box from "@mui/material/Box";
import "./style.css";
import BtnSendMessage from "./BtnSendMessage";
import MessageInput from "./MessageInput";
import AuthorInput from "./AuthorInput";
import RobotMessage from "./RobotMessage";
import {
  changeAuthorAction,
  changeMessageAction,
  // sendRobotMessageAction,
} from "../actions";
// import { addPostAction } from "../actions";
import { addMesssageWithThunk } from "../actions";
import { useSelector } from "react-redux";
import getPost from "./store/PostReducer/selectors";
import getRobotMessage from "./store/RobotReducer/selectors";
import { useCallback } from "react";

// const robotMessage = "Your message just have been Sent";

export default function FormPropsTextFields(props) {
  const { chatId } = props;
  const post = useSelector(getPost);
  const message = useSelector(getRobotMessage);

  const onChangeMessage = (value) => {
    changeMessageAction(value);
  };

  const onChangeAuthor = (value) => {
    changeAuthorAction(value);
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log("event", e);
      addMesssageWithThunk(post, chatId);
      console.log("event2", e);
      // addPostAction(post, chatId);
      // sendRobotMessageAction(robotMessage);
    },
    [post, chatId]
  );

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
        </div>
        <RobotMessage robotMessage={message}></RobotMessage>
      </Box>
    </div>
  );
}
