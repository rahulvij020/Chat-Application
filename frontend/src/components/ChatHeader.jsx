import { Phone, Video, MoreVertical } from "lucide-react";

const ChatHeader = ({ selectedUser, onlineUsers = [] }) => {
  const isOnline = onlineUsers.includes(selectedUser._id);

  return (
    <div
      className="flex items-center justify-between border-b shadow-sm"
      style={{
        background: "var(--surface, #ffffff)",
        borderColor: "var(--border-light, #e5e7eb)",
        borderWidth: "1px",
        borderStyle: "solid",
        padding: "0.75rem 1rem",
      }}
    >
      {/* Left: User Info */}
      <div className="flex items-center" style={{ gap: "0.75rem" }}>
        {/* Avatar */}
        <div
          className="rounded-full flex items-center justify-center text-white font-semibold text-base overflow-hidden"
          style={{
            background: selectedUser.avatar ? "transparent" : "var(--primary-color, #00A884)",
            height: "2.5rem",
            width: "2.5rem",
          }}
        >
          {selectedUser.avatar ? (
            <img
              src={selectedUser.avatar}
              alt={selectedUser.name}
              className="w-full h-full object-cover"
            />
          ) : (
            selectedUser.name?.[0]?.toUpperCase()
          )}
        </div>

        {/* Name & Status */}
        <div>
          <h2
            className="font-medium"
            style={{ color: "var(--text-main, #111)", fontSize: "15px" }}
          >
            {selectedUser.name}
          </h2>
          <div className="flex items-center" style={{ gap: "0.375rem" }}>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: isOnline ? "#10b981" : "#9ca3af",
              }}
            />
            <p
              className="text-sm"
              style={{ color: "var(--text-secondary, #666)", fontSize: "13px" }}
            >
              {isOnline ? "Online" : "Offline"}
            </p>
          </div>
        </div>
      </div>

      {/* Right: Action Icons */}
      <div className="flex items-center" style={{ gap: "1rem", color: "#6b7280" }}>
        <button
          className="transition"
          title="Voice call"
          style={{ color: "#6b7280" }}
          onMouseEnter={(e) => e.target.style.color = "var(--primary-color, #00A884)"}
          onMouseLeave={(e) => e.target.style.color = "#6b7280"}
        >
          <Phone size={20} />
        </button>

        <button
          className="transition"
          title="Video call"
          style={{ color: "#6b7280" }}
          onMouseEnter={(e) => e.target.style.color = "var(--primary-color, #00A884)"}
          onMouseLeave={(e) => e.target.style.color = "#6b7280"}
        >
          <Video size={20} />
        </button>

        <button
          className="transition"
          title="Menu"
          style={{ color: "#6b7280" }}
          onMouseEnter={(e) => e.target.style.color = "var(--primary-color, #00A884)"}
          onMouseLeave={(e) => e.target.style.color = "#6b7280"}
        >
          <MoreVertical size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
