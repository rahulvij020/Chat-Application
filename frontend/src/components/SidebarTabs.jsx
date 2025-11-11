const SidebarTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div style={{ padding: "0.75rem 1rem 0 1rem" }}>
      {/* Tabs Container */}
      <div
        className="flex rounded-lg overflow-hidden"
        style={{
          borderColor: "var(--border-light, #e5e7eb)",
          borderWidth: "1px",
          borderStyle: "solid",
          background: "var(--background, #f9f9f9)",
        }}
      >
        {/* Chats Tab */}
        <button
          onClick={() => setActiveTab("chats")}
          className="flex-1 text-sm font-medium transition-all duration-200"
          style={{
            background: activeTab === "chats" ? "var(--primary-color, #00A884)" : "transparent",
            color: activeTab === "chats" ? "#fff" : "#4b5563",
            padding: "0.5rem",
            border: "none",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            if (activeTab !== "chats") {
              e.target.style.background = "#f3f4f6";
            }
          }}
          onMouseLeave={(e) => {
            if (activeTab !== "chats") {
              e.target.style.background = "transparent";
            }
          }}
        >
          Chats
        </button>

        {/* Contacts Tab */}
        <button
          onClick={() => setActiveTab("contacts")}
          className="flex-1 text-sm font-medium transition-all duration-200"
          style={{
            background: activeTab === "contacts" ? "var(--primary-color, #00A884)" : "transparent",
            color: activeTab === "contacts" ? "#fff" : "#4b5563",
            padding: "0.5rem",
            border: "none",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            if (activeTab !== "contacts") {
              e.target.style.background = "#f3f4f6";
            }
          }}
          onMouseLeave={(e) => {
            if (activeTab !== "contacts") {
              e.target.style.background = "transparent";
            }
          }}
        >
          Contacts
        </button>
      </div>
    </div>
  );
};

export default SidebarTabs;
