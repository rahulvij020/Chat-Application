import ChatHeader from "./ChatHeader";
import ChatContainer from "./ChatContainer";
import { getMessages } from "../services/message.js";
import { useEffect, useState } from "react";

const ChatScreen = ({ selectedUser, currentUserId }) => {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedUser?._id) return;
      
      setLoading(true);
      try {
        const response = await getMessages(selectedUser._id);
        console.log("Fetch Messages Response --->>>", response);
        if (response.success) {
          setMessages(response.messages);
        }
      } catch (error) {
        console.log("Error fetching messages", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [selectedUser?._id]);

  if (!selectedUser)
    return (
      <div
        className="flex-1 flex flex-col items-center justify-center animate-fade-in text-center"
        style={{
          background: "var(--background, #f9f9f9)",
          color: "var(--text-secondary, #666)",
          padding: "0 1.5rem",
        }}
      >
        <div
          className="rounded-full shadow-sm"
          style={{
            background: "var(--primary-color, #00A884)",
            color: "#fff",
            padding: "1.25rem",
            marginBottom: "1rem",
          }}
        >
          💬
        </div>
        <h2
          className="text-lg font-semibold"
          style={{
            color: "var(--text-main, #111)",
          }}
        >
          Select a chat to start messaging
        </h2>
        <p
          className="text-sm leading-relaxed"
          style={{
            color: "var(--text-secondary, #777)",
            marginTop: "0.25rem",
            maxWidth: "20rem",
          }}
        >
          Choose a contact from the sidebar to begin your conversation.
        </p>
      </div>
    );

  return (
    <div
      className="flex-1 flex flex-col"
      style={{
        background: "var(--chat-bg, #eae6df)",
      }}
    >
      {/* Header */}
      <ChatHeader selectedUser={selectedUser} />

      {/* Chat Messages */}
      <ChatContainer messages={messages} loading={loading} currentUserId={currentUserId} />
    </div>
  );
};

export default ChatScreen;
