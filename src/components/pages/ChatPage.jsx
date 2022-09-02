import FormPropsTextFields from "../FormPropsTextFields";
import InteractiveList from "../InteractiveList";

export default function ChatPage(props) {
  const { id, deleteMessageList, addMessageList, chats } = props;

  return (
    <div className="container">
      <FormPropsTextFields
        chats={chats}
        addMessageList={addMessageList}
        id={id}
      />
      <div className="chat-list">
        <InteractiveList
          deleteMessageList={deleteMessageList}
          id={id}
          chats={chats}
        ></InteractiveList>
      </div>
    </div>
  );
}
