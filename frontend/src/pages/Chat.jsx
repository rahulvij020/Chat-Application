import { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import ChatScreen from "../components/ChatScreen.jsx";
import MessageInput from "../components/MessageInput.jsx";
import ChatShimmer from "../components/ChatShimmer.jsx";

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);

  const users = [
    { _id: "1", name: "Rahul", email: "rahul@example.com" },
    { _id: "2", name: "Simran", email: "simran@example.com" },
    { _id: "3", name: "Arjun", email: "arjun@example.com" },
  ];

  const handleSend = (text) => {
    const newMsg = { text, sender: "me" };
    setMessages((prev) => [...prev, newMsg]);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-blue-600 via-indigo-600 to-purple-700 p-2">
      <div className="flex w-full max-w-6xl h-[90vh] shadow-2xl rounded-2xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-md">
        {/* Sidebar (hidden on mobile when a user is selected) */}
        <div
          className={`${
            selectedUser ? "hidden md:flex" : "flex"
          } w-full md:w-1/4 bg-white/10 border-r border-white/20 flex-col`}
        >
          <Sidebar
            users={users}
            selectedUser={selectedUser}
            onSelectUser={setSelectedUser}
          />
        </div>

        {/* Chat Section */}
        <div
          className={`flex flex-col flex-1 ${
            !selectedUser ? "hidden md:flex" : "flex"
          }`}
        >
          {/* Back button visible only on mobile */}
          {selectedUser && (
            <button
              onClick={() => setSelectedUser(null)}
              className="md:hidden text-white bg-white/20 px-3 py-1 m-2 rounded-lg text-sm hover:bg-white/30 transition"
            >
              ← Back
            </button>
          )}

          {/* Chat shimmer or content */}
          {/* <ChatShimmer /> */}
          <ChatScreen selectedUser={selectedUser} messages={messages} />
          {selectedUser && <MessageInput onSend={handleSend} />}
        </div>
      </div>
    </div>
  );
};

export default Chat;
