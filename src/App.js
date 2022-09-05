import React from "react";
import { Provider } from "react-redux";
import { store } from "./components/store";
import { Redirect, BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import ChatPage from "./components/pages/ChatPage";
import ProfilePage from "./components/pages/ProfilePage";
import ThemeProvider from "./components/ThemeProvider";

function App() {
  const { getState } = store;

  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <header>
            <Link to="/">Home</Link>
            <ul>
              <li>
                <Link to="/chat">Chat</Link>
                <ul>
                  {Object.values(getState().chats).map((chat) => {
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
                const chatId = data.match.params.id;
                const shouldRedirect = Object.keys(getState().chats).every(
                  (key) => key !== chatId
                );
                switch (!shouldRedirect) {
                  case true:
                    return <ChatPage chatId={chatId}></ChatPage>;
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
    </Provider>
  );
}
export default App;
