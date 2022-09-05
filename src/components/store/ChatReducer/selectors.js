export default function getChatById(chatId) {
  return (state) => state.chats[chatId];
}
