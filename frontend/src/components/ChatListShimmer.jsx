import React from "react";

const ChatListShimmer = () => {
  return (
    <div
      className="flex-1 overflow-y-auto animate-pulse"
      style={{
        background: "linear-gradient(to bottom, #e5ddd5 0%, #eae6df 100%)",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d9d9d9' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        padding: "16px 0",
      }}
    >
      {/* Incoming Message Shimmer */}
      <div className="flex justify-start mb-3 px-4">
        <div
          className="max-w-[70%] rounded-lg"
          style={{
            background: "#ffffff",
            borderRadius: "8px 8px 8px 2px",
            padding: "8px 12px",
            minWidth: "150px",
          }}
        >
          <div
            className="h-4 rounded mb-2"
            style={{ background: "rgba(0, 0, 0, 0.08)", width: "80%" }}
          />
          <div
            className="h-3 rounded"
            style={{ background: "rgba(0, 0, 0, 0.05)", width: "40%" }}
          />
        </div>
      </div>

      {/* Outgoing Message Shimmer */}
      <div className="flex justify-end mb-3 px-4">
        <div
          className="max-w-[70%] rounded-lg"
          style={{
            background: "#d9fdd3",
            borderRadius: "8px 8px 2px 8px",
            padding: "8px 12px",
            minWidth: "120px",
          }}
        >
          <div
            className="h-4 rounded mb-2"
            style={{ background: "rgba(0, 0, 0, 0.08)", width: "70%" }}
          />
          <div
            className="h-3 rounded"
            style={{ background: "rgba(0, 0, 0, 0.05)", width: "30%" }}
          />
        </div>
      </div>

      {/* More incoming messages */}
      {[1, 2, 3].map((_, i) => (
        <div key={i} className="flex justify-start mb-3 px-4">
          <div
            className="max-w-[70%] rounded-lg"
            style={{
              background: "#ffffff",
              borderRadius: "8px 8px 8px 2px",
              padding: "8px 12px",
              minWidth: "180px",
            }}
          >
            <div
              className="h-4 rounded mb-2"
              style={{ background: "rgba(0, 0, 0, 0.08)", width: "90%" }}
            />
            <div
              className="h-3 rounded"
              style={{ background: "rgba(0, 0, 0, 0.05)", width: "35%" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatListShimmer;
