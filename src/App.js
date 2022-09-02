import React from "react";
// import { createTheme } from "@mui/material";
import { Redirect, BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import HomePage from "./components/pages/HomePage";
import ChatPage from "./components/pages/ChatPage";
import ProfilePage from "./components/pages/ProfilePage";
import ThemeProvider from "./components/ThemeProvider";

function App() {
  const [chats, setChats] = useState({
    1: {
      id: 1,
      title: "chat 1",
      messageList: [],
    },
    2: {
      id: 2,
      title: "chat 2",
      messageList: [],
    },
    3: {
      id: 3,
      title: "chat 3",
      messageList: [],
    },
  });

  const addMessageList = (id, post) => {
    const currentMessageList = [...chats[id].messageList, post];

    const currentChat = { ...chats[id], messageList: currentMessageList };
    console.log(currentChat, id);

    setChats({ ...chats, [id]: currentChat });
  };

  const deleteMessageList = (id) => {
    const currentChat = { ...chats[id], messageList: [] };
    setChats({ ...chats, [id]: currentChat });
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <header>
          <Link to="/">Home</Link>
          <ul>
            <li>
              <Link to="/chat">Chat</Link>
              <ul>
                {Object.values(chats).map((chat) => {
                  return (
                    <li key={chat.id}>
                      {<Link to={`/chat/${chat.id}`}>Chat {chat.id}</Link>}
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
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
              const id = data.match.params.id;
              const shouldRedirect = Object.keys(chats).every(
                (key) => key !== id
              );
              if (shouldRedirect) {
                return <Redirect to="/" />;
              }

              // return <TempPage id={id} />;

              return (
                <ChatPage
                  addMessageList={addMessageList}
                  deleteMessageList={deleteMessageList}
                  id={id}
                  chats={chats}
                ></ChatPage>
              );
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
