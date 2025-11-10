const ChatContainer = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white/5 backdrop-blur-md">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex ${
            msg.sender === "me" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-xs px-4 py-2 rounded-2xl text-white ${
              msg.sender === "me"
                ? "bg-blue-500/80 rounded-br-none"
                : "bg-gray-600/80 rounded-bl-none"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatContainer;
