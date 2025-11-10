import React from "react";

const ChatListShimmer = () => {
  return (
    <div className="p-3 space-y-3">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-3 p-2 rounded-lg bg-white/5 animate-pulse"
        >
          {/* Avatar shimmer */}
          <div className="h-10 w-10 rounded-full bg-white/20" />

          {/* Text shimmer */}
          <div className="flex-1">
            <div className="h-4 w-3/5 bg-white/20 rounded mb-2" />
            <div className="h-3 w-2/4 bg-white/10 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatListShimmer;
