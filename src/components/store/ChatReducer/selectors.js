export default function getChatById(chatId) {
  return (state) => state.chats[chatId];
}

export function getChats() {
  return (state) => state.chats;
}
