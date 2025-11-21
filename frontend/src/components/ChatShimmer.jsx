const ChatShimmer = () => {
  return (
    <div className="flex-1 overflow-hidden" style={{ marginTop: "0.75rem", padding: "0" }}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
        <div
          key={index}
          className="flex items-center animate-pulse"
          style={{
            gap: "0.75rem",
            padding: "0.75rem 1rem",
            borderBottom: "1px solid rgba(0, 0, 0, 0.03)",
          }}
        >
          {/* Avatar Shimmer */}
          <div
            className="rounded-full"
            style={{
              background: "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.5s infinite",
              height: "2.5rem",
              width: "2.5rem",
              flexShrink: 0,
            }}
          />
          
          {/* Text Content Shimmer */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Name Shimmer */}
            <div
              className="rounded"
              style={{
                background: "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 1.5s infinite",
                height: "14px",
                width: "60%",
                marginBottom: "6px",
              }}
            />
            {/* Email Shimmer */}
            <div
              className="rounded"
              style={{
                background: "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 1.5s infinite",
                height: "12px",
                width: "40%",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatShimmer;
