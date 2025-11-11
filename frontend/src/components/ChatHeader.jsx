import { Phone, Video, MoreVertical } from "lucide-react";

const ChatHeader = ({ selectedUser }) => {
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
          className="rounded-full flex items-center justify-center text-white font-semibold text-base"
          style={{
            background: "var(--primary-color, #00A884)",
            height: "2.5rem",
            width: "2.5rem",
          }}
        >
          {selectedUser.name?.[0]?.toUpperCase()}
        </div>

        {/* Name & Status */}
        <div>
          <h2
            className="font-medium"
            style={{ color: "var(--text-main, #111)", fontSize: "15px" }}
          >
            {selectedUser.name}
          </h2>
          <p
            className="text-sm"
            style={{ color: "var(--text-secondary, #666)" }}
          >
            Online
          </p>
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
