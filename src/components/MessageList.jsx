import BtnDeleteMessage from "./BtnDeleteMessage";

export default function MessageList(props) {
  const { id, deleteMessageList, chats } = props;
  return (
    <div className="list">
      {props.children}
      {chats[id].messageList.map((message, index) => (
        <div key={"message" + index} className="list-item">
          <div className="text">
            <span className="author">
              {index + 1}. {message.author}: &nbsp;
            </span>
            "{message.message}"
          </div>
        </div>
      ))}
      <BtnDeleteMessage id={id} deleteMessageList={deleteMessageList}>
        Delete chat
      </BtnDeleteMessage>
    </div>
  );
}
