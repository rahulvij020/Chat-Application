import { useEffect, useState } from "react";
import { UserCircle } from "lucide-react";
import ProfileModal from "./ProfileModal.jsx";
import SidebarTabs from "./SidebarTabs.jsx";
import ChatListShimmer from "./ChatListShimmer.jsx";
import { getChats, getContacts } from "../services/message.js";

const Sidebar = ({ user, selectedUser, onSelectUser }) => {
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
        } else {
          const response = await getContacts();
          setContacts(response);
        }
      } catch (error) {
        console.log("Error fetching chats", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [activeTab]);

  const data = activeTab === "chats" ? chats : contacts;

  return (
    <div
      className="flex flex-col h-full border-r"
      style={{
        background: "var(--surface, #fff)",
        borderColor: "var(--border-light, #e5e7eb)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between shadow-sm"
        style={{
          background: "var(--primary-color, #00A884)",
          color: "#fff",
          padding: "1rem",
        }}
      >
        <h2 className="text-lg font-semibold">Messages</h2>

        <button
          onClick={() => setShowProfileModal(true)}
          className="flex items-center rounded-lg transition"
          style={{
            gap: "0.5rem",
            padding: "0.25rem 0.75rem",
            background: "rgba(255, 255, 255, 0.2)",
            fontSize: "0.875rem",
          }}
          onMouseEnter={(e) => e.target.style.background = "rgba(255, 255, 255, 0.3)"}
          onMouseLeave={(e) => e.target.style.background = "rgba(255, 255, 255, 0.2)"}
        >
          <UserCircle size={20} />
        </button>
      </div>

      {/* Tabs Component */}
      <SidebarTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Search */}
      <div style={{ padding: "0 1rem", marginTop: "0.75rem" }}>
        <input
          type="text"
          placeholder={`Search ${activeTab}...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border focus:outline-none"
          style={{
            background: "var(--background, #f9f9f9)",
            borderColor: "var(--border-light, #e5e7eb)",
            borderWidth: "1px",
            borderStyle: "solid",
            padding: "0.5rem 0.75rem",
            color: "#374151",
          }}
          onFocus={(e) => {
            e.target.style.outline = "2px solid var(--primary-color, #00A884)";
            e.target.style.outlineOffset = "2px";
            e.target.style.borderColor = "transparent";
          }}
          onBlur={(e) => {
            e.target.style.outline = "none";
            e.target.style.borderColor = "var(--border-light, #e5e7eb)";
          }}
        />
      </div>

      {/* Chat or Contact List */}
      {loading && <ChatListShimmer />}

      <div className="flex-1 overflow-y-auto" style={{ marginTop: "0.75rem" }}>
        {data.length === 0 ? (
          <p className="text-center" style={{ color: "#6b7280", marginTop: "1.5rem" }}>
            No {activeTab} found
          </p>
        ) : (
          data
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <div
                key={item._id}
                onClick={() => onSelectUser(item)}
                className="flex items-center cursor-pointer transition"
                style={{
                  gap: "0.75rem",
                  padding: "0.75rem",
                  background: selectedUser?._id === item._id ? "var(--background, #f0f2f5)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (selectedUser?._id !== item._id) {
                    e.currentTarget.style.background = "var(--background, #f0f2f5)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedUser?._id !== item._id) {
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                <div className="rounded-full flex items-center justify-center font-semibold text-white"
                  style={{
                    background: "var(--primary-color, #00A884)",
                    height: "2.5rem",
                    width: "2.5rem",
                  }}
                >
                  {item.name[0].toUpperCase()}
                </div>
                <div>
                  <p className="font-medium" style={{ color: "var(--text-main, #111)" }}>{item.name}</p>
                  <p className="text-sm truncate" style={{ color: "#6b7280", maxWidth: "150px" }}>
                    {item.email}
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
        user={user}
      />
    </div>
  );
};

export default Sidebar;
