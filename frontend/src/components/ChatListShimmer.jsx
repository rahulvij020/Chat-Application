import React from "react";

const ChatListShimmer = () => {
  return (
    <div
      className="p-4 space-y-3 animate-pulse"
      style={{
        background: "var(--surface, #ffffff)",
      }}
    >
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-3 p-2 rounded-lg shadow-sm"
          style={{
            background: "rgba(0, 0, 0, 0.03)",
          }}
        >
          {/* Avatar shimmer */}
          <div
            className="h-10 w-10 rounded-full"
            style={{
              background: "rgba(0, 0, 0, 0.1)",
            }}
          />

          {/* Text shimmer */}
          <div className="flex-1 space-y-1">
            <div
              className="h-4 w-3/5 rounded"
              style={{
                background: "rgba(0, 0, 0, 0.1)",
              }}
            />
            <div
              className="h-3 w-2/4 rounded"
              style={{
                background: "rgba(0, 0, 0, 0.05)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatListShimmer;
