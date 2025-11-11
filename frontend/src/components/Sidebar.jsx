import { useEffect, useState } from "react";
import { UserCircle } from "lucide-react";
import ProfileModal from "./ProfileModal.jsx";
import SidebarTabs from "./SidebarTabs.jsx";
import ChatListShimmer from "./ChatListShimmer.jsx";
import { getChats, getContacts } from "../services/message.js";

const Sidebar = ({user, selectedUser, onSelectUser }) => {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("contacts");
  const [loading, setLoading] = useState(false);
  const [chats, setChats] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [showProfileModal, setShowProfileModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (activeTab === "chats") {
          const response = await getChats();
          setChats(response.chats);
        }
        else {
          const response = await getContacts();
          setContacts(response);
        }
      } catch (error) {
        console.log("Error fetching chats", error);
      }
      finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [activeTab]);

  const data = activeTab === "chats" ? chats : contacts;

  return (
    <div className="flex flex-col h-full bg-white/5 backdrop-blur-md border-r border-white/10">
      {/* Header */}
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Messages</h2>

        {/* Profile Button */}
        <button
          onClick={() => setShowProfileModal(true)}
          className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-sm text-white rounded-lg transition"
        >
          <UserCircle size={20} />
        </button>
      </div>

      {/* Tabs Component */}
      <SidebarTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Search */}
      <div className="px-4 mt-3">
        <input
          type="text"
          placeholder={`Search ${activeTab}...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {loading && <ChatListShimmer />}
      <div className="flex-1 overflow-y-auto mt-3">
        {data.length === 0 ? (
          <p className="text-gray-400 text-center mt-6">
            No {activeTab} found
          </p>
        ) : (
          data.map((user) => (
            <div
              key={user._id}
              onClick={() => onSelectUser(user)}
              className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-white/10 transition ${selectedUser?._id === user._id ? "bg-white/10" : ""
                }`}
            >
              <div className="h-10 w-10 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                {user.name[0].toUpperCase()}
              </div>
              <div>
                <p className="text-white font-medium">{user.name}</p>
                <p className="text-gray-300 text-sm truncate max-w-[150px]">
                  {user.email}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Profile Modal */}
      <ProfileModal
        show={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        user = {user}
      />
    </div>
  );
};

export default Sidebar;
