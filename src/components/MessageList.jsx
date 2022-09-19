import BtnDeleteMessage from './BtnDeleteMessage';

export default function MessageList({
  id, deleteMessageList, chats, children,
}) {
  return (
    <div className="list">
      {children}
      {chats[id].messageList.map((message, index) => (
        <div key={`message${index}`} className="list-item">
          <div className="text">
            <span className="author">
              {index + 1}
              .
              {' '}
              {message.author}
              : &nbsp;
            </span>
            &quot;{message.message}&quot;
          </div>
        </div>
      ))}
      <BtnDeleteMessage id={id} deleteMessageList={deleteMessageList}>
        Delete chat
      </BtnDeleteMessage>
    </div>
  );
}
