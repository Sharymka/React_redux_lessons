import React from "react";
import { Redirect, BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import ChatPage from "./components/pages/ChatPage";
import ProfilePage from "./components/pages/ProfilePage";
import ThemeProvider from "./components/ThemeProvider";
import BtnAddChat from "./components/BtnAddChat";
import { useSelector } from "react-redux";
import { getChats } from "./components/store/ChatReducer/selectors";
import { addChatAction } from "./actions";
import "./components/style.css";

function App() {
  const chats = useSelector(getChats());
  const chatsLength = Object.keys(chats).length;

  const addChat = () => {
    console.log(chats);
    console.log(chatsLength);

    addChatAction(chatsLength);
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <header>
          <ul className="link_list">
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link " to="/chat">
                Chat
              </Link>
              <ul className="link_list">
                {Object.values(chats).map((chat) => {
                  return (
                    <li key={chat.id}>
                      {
                        <Link
                          className="link chat_link"
                          to={`/chat/${chat.id}`}
                        >
                          Chat {chat.id}
                        </Link>
                      }
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <Link className="link" to="/profile">
                Profile
              </Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route
            path="/chat/:id"
            render={(data) => {
              const chatId = data.match.params.id;
              const shouldRedirect = Object.keys(chats).every(
                (key) => key !== chatId
              );
              switch (!shouldRedirect) {
                case true:
                  return (
                    <>
                      <BtnAddChat onClick={addChat}> Add Chat</BtnAddChat>
                      <ChatPage chatId={chatId}></ChatPage>
                    </>
                  );
                default:
                  return <Redirect to="/" />;
              }
            }}
          />

          <Route path="/profile">
            <ProfilePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
