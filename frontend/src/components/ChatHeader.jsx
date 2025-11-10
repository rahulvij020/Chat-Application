const ChatHeader = ({ selectedUser }) => {
  return (
    <div className="p-4 border-b border-white/20 flex items-center gap-3 bg-white/5 backdrop-blur-md">
      <div className="h-10 w-10 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
        {selectedUser.name[0].toUpperCase()}
      </div>
      <h2 className="text-white font-semibold text-lg">{selectedUser.name}</h2>
    </div>
  );
};

export default ChatHeader;
