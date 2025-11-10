const SidebarTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="px-4 pt-3">
      {/* Tabs */}
      <div className="flex bg-white/10 rounded-lg overflow-hidden">
        <button
          className={`flex-1 py-2 text-sm font-medium transition ${
            activeTab === "chats"
              ? "bg-blue-500 text-white"
              : "text-gray-300 hover:bg-white/10"
          }`}
          onClick={() => setActiveTab("chats")}
        >
          Chats
        </button>

        <button
          className={`flex-1 py-2 text-sm font-medium transition ${
            activeTab === "contacts"
              ? "bg-blue-500 text-white"
              : "text-gray-300 hover:bg-white/10"
          }`}
          onClick={() => setActiveTab("contacts")}
        >
          Contacts
        </button>
      </div>
    </div>
  );
};

export default SidebarTabs;
