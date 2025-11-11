import { Users } from "lucide-react";

const EmptyChatList = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-full text-center px-6 animate-fade-in"
      style={{
        background: "var(--background, #f9f9f9)",
        color: "var(--text-main, #111)",
      }}
    >
      {/* Icon Circle */}
      <div
        className="p-5 rounded-full shadow-md mb-4 flex items-center justify-center"
        style={{
          background: "var(--primary-color, #00A884)",
          color: "#fff",
        }}
      >
        <Users size={36} />
      </div>

      {/* Heading */}
      <h2
        className="text-lg font-semibold mb-2"
        style={{
          color: "var(--text-main, #111)",
        }}
      >
        No Chats Yet 💬
      </h2>

      {/* Description */}
      <p
        className="text-sm max-w-xs leading-relaxed"
        style={{
          color: "var(--text-secondary, #666)",
        }}
      >
        You don’t have any active chats right now.  
        Go to the{" "}
        <span
          className="font-medium"
          style={{
            color: "var(--primary-color, #00A884)",
          }}
        >
          Contacts
        </span>{" "}
        tab to start a new conversation.
      </p>
    </div>
  );
};

export default EmptyChatList;
