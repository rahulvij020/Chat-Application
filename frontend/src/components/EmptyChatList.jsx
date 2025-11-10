import { Users } from "lucide-react";

const EmptyChatList = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6">
      <div className="p-5 rounded-full bg-white/10 backdrop-blur-md mb-4">
        <Users size={36} className="text-blue-400" />
      </div>
      <h2 className="text-white text-lg font-semibold mb-2">
        No Chats Yet 💬
      </h2>
      <p className="text-gray-300 text-sm max-w-xs">
        You don’t have any active chats right now.  
        Go to the <span className="text-blue-400 font-medium">Contacts</span> tab to start a new conversation.
      </p>
    </div>
  );
};

export default EmptyChatList;
