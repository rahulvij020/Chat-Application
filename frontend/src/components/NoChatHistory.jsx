import { MessageSquare } from "lucide-react";

const NoChatHistory = ({ selectedUser }) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-full text-center px-6 animate-fade-in"
      style={{
        background: "var(--background, #f9f9f9)",
        color: "var(--text-main, #111)",
      }}
    >
      {/* Icon */}
      <div
        className="p-5 rounded-full shadow-md mb-5 flex items-center justify-center"
        style={{
          background: "var(--primary-color, #00A884)",
          color: "#fff",
        }}
      >
        <MessageSquare size={36} />
      </div>

      {/* Heading */}
      <h2
        className="text-lg font-semibold mb-2"
        style={{
          color: "var(--text-main, #111)",
        }}
      >
        No Messages Yet 💭
      </h2>

      {/* Description */}
      <p
        className="text-sm max-w-xs leading-relaxed"
        style={{
          color: "var(--text-secondary, #666)",
        }}
      >
        You haven’t started chatting with{" "}
        <span
          className="font-medium"
          style={{ color: "var(--primary-color, #00A884)" }}
        >
          {selectedUser.name}
        </span>{" "}
        yet. <br /> Send a message to start the conversation!
      </p>
    </div>
  );
};

export default NoChatHistory;
