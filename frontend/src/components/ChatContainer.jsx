const ChatContainer = ({ messages }) => {
  return (
    <div
      className="flex-1 overflow-y-auto p-4 space-y-3"
      style={{
        background: "var(--chat-bg, #eae6df)", // WhatsApp beige tone
      }}
    >
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex ${
            msg.sender === "me" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-xs px-4 py-2 rounded-2xl shadow-sm text-sm leading-relaxed`}
            style={{
              background:
                msg.sender === "me"
                  ? "var(--bubble-outgoing, #dcf8c6)" // WhatsApp green
                  : "var(--bubble-incoming, #ffffff)", // white
              color: "#111",
              borderRadius:
                msg.sender === "me"
                  ? "16px 16px 0px 16px"
                  : "16px 16px 16px 0px",
            }}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatContainer;
