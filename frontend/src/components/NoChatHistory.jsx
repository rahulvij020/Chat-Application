import { MessageSquare } from "lucide-react";

const NoChatHistory = ({ selectedUser }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6">
      <div className="p-5 rounded-full bg-white/10 backdrop-blur-md mb-4">
        <MessageSquare size={36} className="text-blue-400" />
      </div>

      <h2 className="text-white text-lg font-semibold mb-1">
        No Messages Yet 💭
      </h2>
      <p className="text-gray-300 text-sm max-w-xs">
        You haven’t started chatting with{" "}
        <span className="text-blue-400 font-medium">{selectedUser.name}</span> yet.
        <br />
        Send a message to start the conversation!
      </p>
    </div>
  );
};

export default NoChatHistory;
