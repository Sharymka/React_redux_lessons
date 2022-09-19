import { useEffect, useMemo } from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useSelector } from 'react-redux';
import BtnDeleteMessage from './BtnDeleteMessage';
import { deletePostAction } from '../actions';
import '../style.css';
import { getDatabase, ref, onValue} from 'firebase/database';
import getChatById from '../store/ChatReducer/selectors';
import { app } from '../firebase';

export default function InteractiveList(props) {
  const { chatId } = props;

  const getSelectedChat = useMemo(() => getChatById(chatId), [chatId]);
  const selectedChat = useSelector(getSelectedChat);

  const deletePost = (postId) => {
    deletePostAction(chatId, postId);
  };

const chatsRef = ref( getDatabase(app), 'chats/' + chatId);
onValue(chatsRef, (snapshot) => {
  const data = snapshot.val();
  updateStarCount('AE', data);
});

function updateStarCount(a, b) {
  console.log(a, 'a', b, 'b')
}

  useEffect(() => {
// getChatsFromFirebase();
  }, []);

  return (
    <Box className="list">
      {selectedChat.messageList.map((message, index) => (
        <ListItem key={`message${index}`}>
          <ListItemText primary={message.author} secondary={message.message} />
          <BtnDeleteMessage postId={message.id} onClick={deletePost}>
            Delete post
          </BtnDeleteMessage>
        </ListItem>
      ))}
    </Box>
  );
}
