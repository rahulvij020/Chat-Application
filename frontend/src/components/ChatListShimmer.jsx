import React from "react";

const ChatListShimmer = () => {
  return (
    <div
      className="flex-1 overflow-y-auto"
      style={{
        background: "linear-gradient(to bottom, #e5ddd5 0%, #eae6df 100%)",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d9d9d9' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        padding: "16px 0",
        minHeight: 0,
        height: "100%",
      }}
    >
      {/* Date Separator Shimmer */}
      <div className="flex justify-center" style={{ margin: "12px 0 8px 0", padding: "0 16px" }}>
        <div
          className="animate-pulse"
          style={{
            background: "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite",
            padding: "6px 12px",
            borderRadius: "8px",
            width: "120px",
            height: "24px",
          }}
        />
      </div>

      {/* Incoming Message Shimmer */}
      <div
        className="flex justify-start"
        style={{
          marginBottom: "8px",
          paddingLeft: "12px",
          paddingRight: "64px",
        }}
      >
        <div
          className="rounded-lg animate-pulse"
          style={{
            background: "#ffffff",
            borderRadius: "8px 8px 8px 2px",
            padding: "8px 12px",
            maxWidth: "65%",
            minWidth: "150px",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            className="rounded"
            style={{
              background: "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.5s infinite",
              height: "14px",
              width: "80%",
              marginBottom: "8px",
            }}
          />
          <div
            className="rounded"
            style={{
              background: "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.5s infinite",
              height: "12px",
              width: "30%",
            }}
          />
        </div>
      </div>

      {/* Outgoing Message Shimmer */}
      <div
        className="flex justify-end"
        style={{
          marginBottom: "8px",
          paddingLeft: "64px",
          paddingRight: "12px",
        }}
      >
        <div
          className="rounded-lg animate-pulse"
          style={{
            background: "#d9fdd3",
            borderRadius: "8px 8px 2px 8px",
            padding: "8px 12px",
            maxWidth: "65%",
            minWidth: "120px",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            className="rounded"
            style={{
              background: "linear-gradient(90deg, #c0e0c0 25%, #d0f0d0 50%, #c0e0c0 75%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.5s infinite",
              height: "14px",
              width: "70%",
              marginBottom: "8px",
            }}
          />
          <div
            className="rounded"
            style={{
              background: "linear-gradient(90deg, #c0e0c0 25%, #d0f0d0 50%, #c0e0c0 75%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.5s infinite",
              height: "12px",
              width: "25%",
            }}
          />
        </div>
      </div>

      {/* More message shimmers */}
      {[1, 2, 3, 4, 5].map((index) => (
        <div
          key={index}
          className="flex justify-start"
          style={{
            marginBottom: "4px",
            paddingLeft: "12px",
            paddingRight: "64px",
          }}
        >
          <div
            className="rounded-lg animate-pulse"
            style={{
              background: "#ffffff",
              borderRadius: "8px 8px 8px 2px",
              padding: "8px 12px",
              maxWidth: "65%",
              minWidth: "180px",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              className="rounded"
              style={{
                background: "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 1.5s infinite",
                height: "14px",
                width: "90%",
                marginBottom: "8px",
              }}
            />
            <div
              className="rounded"
              style={{
                background: "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 1.5s infinite",
                height: "12px",
                width: "35%",
              }}
            />
          </div>
        </div>
      ))}

      {/* Additional outgoing messages */}
      {[1, 2].map((index) => (
        <div
          key={`out-${index}`}
          className="flex justify-end"
          style={{
            marginBottom: "8px",
            paddingLeft: "64px",
            paddingRight: "12px",
          }}
        >
          <div
            className="rounded-lg animate-pulse"
            style={{
              background: "#d9fdd3",
              borderRadius: "8px 8px 2px 8px",
              padding: "8px 12px",
              maxWidth: "65%",
              minWidth: "140px",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              className="rounded"
              style={{
                background: "linear-gradient(90deg, #c0e0c0 25%, #d0f0d0 50%, #c0e0c0 75%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 1.5s infinite",
                height: "14px",
                width: "75%",
                marginBottom: "8px",
              }}
            />
            <div
              className="rounded"
              style={{
                background: "linear-gradient(90deg, #c0e0c0 25%, #d0f0d0 50%, #c0e0c0 75%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 1.5s infinite",
                height: "12px",
                width: "28%",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatListShimmer;
