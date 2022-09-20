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
    // получили референс на посты нужного чата
    const postListRef = ref(database, `chats/${chatId}/posts`);
    console.log('database', database);
  
    // просто вспомогательная функция (можно без нее)
    // отфильтровывает в списке постов все, кроме текущего ключа (удаление на лету)
    const removePost = (snapshot) => {
      setPostList(list => list.filter(post => post.key !== snapshot.key))
    }

    // функция из файрбейз
    // подписываемся на событие "добавлен элемент"
    // - сформировали новый пост
    // - попробовали найти 
    // - запушили новый, если это новый
    onChildAdded(postListRef, (snapshot) => {
      console.log('snapshot', snapshot.key);
      const newPost = { ...snapshot.val(), key: snapshot.key };
      // событие "обновление данных"
      // Кто-то мог поменять данные в БД не через это приложение (например вручную)
      // нужно обновить данные
      setPostList(list => {
        console.log('list',list);
        // почему так, в list будет точно актуальное состояние
        // нужно найти текущий элемент по ключу (value.key)
        const index = list.findIndex(post => post.key === newPost.key);
        console.log('index',index);

        // если он найден - ничего не делаем: событие добавления (двойное срабатывание)
        if (index != -1) {
          return list;
        }

        const result = [...list, newPost];

        // почему return? ну мне надо вернуть актуальный список
        return result;
      });
    });
    
    // событие "обновлен пост", уведомляет файрбейз
    onChildChanged(postListRef, (snapshot) => { 
      const newPost = { ...snapshot.val(), key: snapshot.key };
      // событие "обновление данных"
      // Кто-то мог поменять данные в БД не через это приложение (например вручную)
      // нужно обновить данные
      setPostList(list => {
        // почему так, в list будет точно актуальное состояние
        // нужно найти текущий элемент по ключу (value.key)
        const index = list.findIndex(post => post.key === newPost.key);
        // если он не найден - нечего и обновлять: выходим
        if (index === -1) {
          return list;
        }

        // копирую содержимое массива, 
        // так как мне придется обновить конкретный индекс 
        // (перезаписать)
        const result = [...list];
        // вот здесь я получил пост с ключем и хочу записать его в нужное место
        result[index] = newPost;

        // почему return? ну мне надо вернуть актуальный список
        return result;
      });
    });
    // событие удален пост
    onChildRemoved(postListRef, (snapshot) => removePost(snapshot));
  }, []);

  // так как мы подписались на удаление и обновляем стор после событий от файрбейз
  // будем удалять в файрбейз: а он сам уведомит когда будет готово
  const deletePostFromFirebase = (postKey) => {
    const updates = {
      [`chats/${chatId}/posts/${[postKey]}`]: null
    };

    update(ref(database), updates);
    // deletePostAction(chatId, postId);
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
