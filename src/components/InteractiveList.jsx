import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {
  onChildAdded,
  onChildChanged,
  onChildRemoved,
  ref,
  update
} from 'firebase/database';
import { useEffect, useState } from 'react';
import { database } from '../dataBase';
import '../style.css';

import BtnDeleteMessage from './BtnDeleteMessage';

export default function InteractiveList(props) {
  const { chatId } = props;

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const postListRef = ref(database, `chats/${chatId}/posts`);
    console.log('database', database);
    console.log('postListRef', postListRef);

  
    const removePost = (snapshot) => {
      setPostList(list => list.filter(post => post.key !== snapshot.key))
    }

 
    onChildAdded(postListRef, (snapshot) => {
      console.log('snapshot', snapshot.key);
      const newPost = { ...snapshot.val(), key: snapshot.key };

      setPostList(list => {
        console.log('list',list);
        
        const index = list.findIndex(post => post.key === newPost.key);
        console.log('index',index);

        if (index != -1) {
          return list;
        }

        const result = [...list, newPost];

        return result;
      });
    });
    
    onChildChanged(postListRef, (snapshot) => { 
      const newPost = { ...snapshot.val(), key: snapshot.key };

      setPostList(list => {
        const index = list.findIndex(post => post.key === newPost.key);
        if (index === -1) {
          return list;
        }

        const result = [...list];
        result[index] = newPost;

        return result;
      });
    });
    onChildRemoved(postListRef, (snapshot) => removePost(snapshot));
  }, []);

  const deletePostFromFirebase = (postKey) => {
    const updates = {
      [`chats/${chatId}/posts/${[postKey]}`]: null
    };

    update(ref(database), updates);
  };

  return (
    <Box className="list">
      {postList.map((post) => (
        <ListItem key={post.key}>
          <ListItemText primary={post.author} secondary={post.message} />
          <BtnDeleteMessage onClick={() => deletePostFromFirebase(post.key)}>
            Delete post
          </BtnDeleteMessage>
        </ListItem>
      ))}
    </Box>
  );
}
