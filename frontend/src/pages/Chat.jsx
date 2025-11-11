import { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import ChatScreen from "../components/ChatScreen.jsx";
import MessageInput from "../components/MessageInput.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authCheck } from "../services/auth.js";
import LoadingScreen from "../components/LoadingScreen.jsx";

const Chat = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
     const checkUser = async () => {
       try {
         const response = await authCheck();
         if (!response.success) {
           navigate("/login");
         }
         setUser(response.user);
       } catch (error) {
         console.log(error);
       }
       finally {
         setLoading(false);
       }
     }
     checkUser();
   }, [navigate]);

  const handleSend = (text) => {
    const newMsg = { text, sender: "me" };
    setMessages((prev) => [...prev, newMsg]);
  };

  return (
    <>
    {loading && <LoadingScreen/>}
    <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-blue-600 via-indigo-600 to-purple-700 p-2">
      <div className="flex w-full max-w-6xl h-[90vh] shadow-2xl rounded-2xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-md">
        <div
          className={`${
            selectedUser ? "hidden md:flex" : "flex"
          } w-full md:w-1/4 bg-white/10 border-r border-white/20 flex-col`}
        >
          <Sidebar
            user = {user}
            selectedUser={selectedUser}
            onSelectUser={setSelectedUser}
          />
        </div>

        <div
          className={`flex flex-col flex-1 ${
            !selectedUser ? "hidden md:flex" : "flex"
          }`}
        >
          {selectedUser && (
            <button
              onClick={() => setSelectedUser(null)}
              className="md:hidden text-white bg-white/20 px-3 py-1 m-2 rounded-lg text-sm hover:bg-white/30 transition"
            >
              ← Back
            </button>
          )}

          <ChatScreen selectedUser={selectedUser} messages={messages} />
          {selectedUser && <MessageInput onSend={handleSend} />}
        </div>
      </div>
    </div>
    </>
  );
};

export default Chat;
