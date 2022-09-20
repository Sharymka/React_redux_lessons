import { Link
  } from 'react-router-dom';
  import { useSelector } from 'react-redux';
  import { getChats } from '../store/ChatReducer/selectors';

export function Header(){

    const chats = useSelector(getChats());

    return( <header>
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
              {Object.values(chats).map((chat) => (
                <li key={chat.id}>
                  <Link
                    className="link chat_link"
                    to={`/chat/${chat.id}`}
                  >
                    Chat
                    {chat.id}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link className="link" to="/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link className="link" to="/dogs">
              Dogs
            </Link>
          </li>
        </ul>
      </header>)
}