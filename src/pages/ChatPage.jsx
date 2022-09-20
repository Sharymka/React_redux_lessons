import FormPropsTextFields from '../components/FormPropsTextFields';
import InteractiveList from '../components/InteractiveList';

export default function ChatPage(props) {
  const { chatId } = props;

  return (
    <div className="container">
      <FormPropsTextFields chatId={chatId} />
      <div className="chat-list">
        <InteractiveList chatId={chatId} />
      </div>
    </div>
  );
}
