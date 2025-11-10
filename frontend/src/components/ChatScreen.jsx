import ChatHeader from "./ChatHeader";
import ChatContainer from "./ChatContainer";

const ChatScreen = ({ selectedUser, messages }) => {
  if (!selectedUser)
    return (
      <div className="flex-1 flex items-center justify-center text-gray-300">
        Select a user to start chatting 💬
      </div>
    );

  return (
    <div className="flex-1 flex flex-col bg-white/5 backdrop-blur-md">
      <ChatHeader selectedUser={selectedUser} />
      <ChatContainer messages={messages} />
    </div>
  );
};

export default ChatScreen;
