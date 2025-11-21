import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar.jsx";
import ChatScreen from "../components/ChatScreen.jsx";
import { useNavigate } from "react-router-dom";
import { authCheck } from "../services/auth.js";
import LoadingScreen from "../components/LoadingScreen.jsx";
import socketService from "../lib/socket.js";

const Chat = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await authCheck();
        if (!response.success) navigate("/login");
        else setUser(response.user);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, [navigate]);

  // Initialize socket connection and listen for online users
  useEffect(() => {
    if (user?._id) {
      socketService.connect();

      const handleOnlineUsers = (users) => {
        console.log("Online users:", users);
        setOnlineUsers(users);
      };

      socketService.on("getOnlineUsers", handleOnlineUsers);

      return () => {
        socketService.off("getOnlineUsers", handleOnlineUsers);
      };
    }
  }, [user?._id]);

  // const handleSend = (text) => {
  //   const newMsg = { text, sender: "me" };
  //   setMessages((prev) => [...prev, newMsg]);
  // };

  if (loading) return <LoadingScreen />;

  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{ background: "var(--background)", padding: "0.5rem" }}
    >
      <div
        className="flex w-full max-w-6xl h-[90vh] shadow-lg rounded-2xl overflow-hidden border"
        style={{
          background: "var(--surface, #fff)",
          borderColor: "var(--border-light, #e5e7eb)",
          borderWidth: "1px",
          borderStyle: "solid",
        }}
      >
        {/* Sidebar Section */}
        <div
          className={`${selectedUser ? "hidden md:flex" : "flex"
            } w-full md:w-1/4 flex-col border-r`}
          style={{ borderColor: "var(--border-light, #e5e7eb)", borderWidth: "1px", borderStyle: "solid" }}
        >
          <Sidebar
            user={user}
            selectedUser={selectedUser}
            onSelectUser={setSelectedUser}
            onlineUsers={onlineUsers}
          />
        </div>

        {/* Chat Section */}
        <div
          className={`flex flex-col flex-1 ${!selectedUser ? "hidden md:flex" : "flex"
            }`}
          style={{ background: "#fff" }}
        >
          {selectedUser && (
            <button
              onClick={() => setSelectedUser(null)}
              className="md:hidden border rounded-lg text-sm transition"
              style={{
                color: "var(--text-main, #111b21)",
                background: "var(--background, #f0f2f5)",
                borderColor: "var(--border-light, #e9edef)",
                borderWidth: "1px",
                borderStyle: "solid",
                padding: "0.5rem 1rem",
                margin: "0.5rem",
              }}
              onMouseEnter={(e) => e.target.style.background = "#e5e7eb"}
              onMouseLeave={(e) => e.target.style.background = "var(--background, #f0f2f5)"}
            >
              ← Back
            </button>
          )}

          <ChatScreen selectedUser={selectedUser} currentUserId={user?._id} onlineUsers={onlineUsers} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
