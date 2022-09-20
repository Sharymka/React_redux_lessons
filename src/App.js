import { useEffect} from 'react';
import {
  Redirect, BrowserRouter, Switch, Route
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';
import RegistrationPage from './pages/RegistrationPage';
import ChatPage from './pages/ChatPage';
import ProfilePage from './pages/ProfilePage';
import DogsPage from './pages/DogsPage';
import SignInPage from './pages/SignInPage';
import ThemeProvider from './components/ThemeProvider';
import BtnAddChat from './components/BtnAddChat';
import { getChats } from './store/ChatReducer/selectors';
import { getDogsAction, addChatAction } from './actions';
import { getUser } from './store/userReducer/selector';

import './style.css';
import { Header } from './components/Header';
// import { render } from '@testing-library/react';

function App() {
  const chats = useSelector(getChats());
  const user = useSelector(getUser);
  const chatsLength = Object.keys(chats).length;

  useEffect(() => {
    getDogsAction();
  }, []);

  const addChat = () => {
    addChatAction(chatsLength);
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
      {user.email?<Header></Header>:<></>

      }
        <Switch>
          <Route path="/registration">
            <RegistrationPage />
          </Route>
          <Route exact path="/chat">
            Чаты
          </Route>
          <Route
            path="/chat/:id"
            render={(data) => {
              const chatId = data.match.params.id;
              const shouldRedirect = Object.keys(chats).every(
                (key) => key !== chatId,
              );
              switch (!shouldRedirect) {
                case true:
                  return (
                    <>
                      <BtnAddChat onClick={addChat}> Add Chat</BtnAddChat>
                      <ChatPage chatId={chatId} />
                    </>
                  );
                default:
                  return <Redirect to="/" />;
              }
            }}
          />
          <Route  path="/profile">
            <ProfilePage />
          </Route>
          <Route  path="/dogs">
            <DogsPage />
          </Route>
          <Route exact path="/sign-in">
            <SignInPage />
          </Route>
          <Route path="/registration">
            <RegistrationPage />
          </Route>
          <Route exact path="/">
            <Redirect to="/registration" />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
