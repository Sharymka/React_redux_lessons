import Box from '@mui/material/Box';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { addMessageWithFirebase, changeAuthorAction, changeMessageAction } from '../actions';
import '../style.css';
import AuthorInput from './AuthorInput';
import BtnSendMessage from './BtnSendMessage';
import MessageInput from './MessageInput';
import RobotMessage from './RobotMessage';

import getPost from '../store/PostReducer/selectors';
import getRobotMessage from '../store/RobotReducer/selectors';

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
      console.log('event', e);
      // addMesssageWithThunk(post, chatId);
      addMessageWithFirebase(post, chatId);
      console.log('event2', e);
    },
    [post, chatId],
  
  );

  return (
    <div>
      <Box
        className="mui-form"
        onSubmit={handleSubmit}
        component="form"
        sx={{
          '& .MuiTextField-root': {
            m: 1,
            width: '25ch',
            display: 'flex',
          },
          '& label.Mui-focused': {
            color: 'white',
            borderColor: 'transparent',
          },
          '& label': {
            color: 'white',
          },

          '& .MuiInput-underline:before': {
            borderBottomColor: 'white',
          },

          '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
          },

          '& .MuiInput-root:hover': {
            borderBottomColor: 'white',
          },
        }}
      >
        <div>
          <MessageInput value={post.message} onChange={onChangeMessage} />
          <AuthorInput value={post.author} onChange={onChangeAuthor} />
          <BtnSendMessage>Send message</BtnSendMessage>
        </div>
        <RobotMessage robotMessage={message} />
      </Box>
    </div>
  );
}
