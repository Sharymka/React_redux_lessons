import FormPropsTextFields from "../FormPropsTextFields";
import InteractiveList from "../InteractiveList";

export default function ChatPage(props) {
  const { chatId } = props;

  return (
    <div className="container">
      <FormPropsTextFields chatId={chatId} />
      <div className="chat-list">
        <InteractiveList chatId={chatId}></InteractiveList>
      </div>
    </div>
  );
}
