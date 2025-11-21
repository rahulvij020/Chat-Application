import ChatHeader from "./ChatHeader";
import ChatContainer from "./ChatContainer";
import MessageInput from "./MessageInput";
import { getMessages } from "../services/message.js";
import { useEffect, useState } from "react";
import socketService from "../lib/socket.js";

const ChatScreen = ({ selectedUser, currentUserId, onlineUsers = [] }) => {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

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

  // Socket listener for new messages
  useEffect(() => {
    const handleNewMessage = ({ message }) => {
      console.log("New message received:", message);
      
      // Only update messages if the message is relevant to current chat
      if (
        selectedUser?._id &&
        (message.sender === selectedUser._id || message.receiver === selectedUser._id)
      ) {
        setMessages((prevMessages) => [...prevMessages, message]);
      }
    };

    socketService.on("newMessage", handleNewMessage);

    return () => {
      socketService.off("newMessage", handleNewMessage);
    };
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
        minHeight: 0,
      }}
    >
      {/* Header */}
      <ChatHeader selectedUser={selectedUser} onlineUsers={onlineUsers} />

      {/* Chat Messages */}
      <ChatContainer messages={messages} loading={loading} currentUserId={currentUserId} />

      {/* Message Input */}
      <div
        className="border-t"
        style={{ borderColor: "var(--border-light, #e5e7eb)", borderWidth: "1px", borderStyle: "solid" }}
      >
        <MessageInput selectedUser={selectedUser} onMessageSent={addMessage} />
      </div>
    </div>
  );
};

export default ChatScreen;
