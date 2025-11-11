const ChatShimmer = () => {
  return (
    <div
      className="flex flex-col h-full animate-pulse"
      style={{
        background: "var(--background, #f9f9f9)",
      }}
    >
      {/* Chat Header */}
      <div
        className="flex items-center gap-3 p-4 border-b"
        style={{
          borderColor: "var(--border-light, #e5e7eb)",
          background: "var(--surface, #ffffff)",
        }}
      >
        <div
          className="w-10 h-10 rounded-full"
          style={{ background: "rgba(0, 0, 0, 0.08)" }}
        ></div>
        <div className="flex-1 space-y-1">
          <div
            className="h-4 w-32 rounded"
            style={{ background: "rgba(0, 0, 0, 0.08)" }}
          ></div>
          <div
            className="h-3 w-20 rounded"
            style={{ background: "rgba(0, 0, 0, 0.05)" }}
          ></div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        {/* Incoming Message */}
        <div className="flex items-start gap-3">
          <div
            className="w-8 h-8 rounded-full"
            style={{ background: "rgba(0, 0, 0, 0.08)" }}
          ></div>
          <div>
            <div
              className="h-4 w-40 rounded mb-2"
              style={{ background: "rgba(0, 0, 0, 0.08)" }}
            ></div>
            <div
              className="h-3 w-24 rounded"
              style={{ background: "rgba(0, 0, 0, 0.05)" }}
            ></div>
          </div>
        </div>

        {/* Outgoing Message */}
        <div className="flex items-start gap-3 justify-end">
          <div>
            <div
              className="h-4 w-32 rounded mb-2"
              style={{ background: "rgba(0, 168, 132, 0.15)" }}
            ></div>
            <div
              className="h-3 w-16 rounded"
              style={{ background: "rgba(0, 168, 132, 0.1)" }}
            ></div>
          </div>
          <div
            className="w-8 h-8 rounded-full"
            style={{ background: "rgba(0, 0, 0, 0.08)" }}
          ></div>
        </div>

        {/* Repeat pattern for multiple message placeholders */}
        {[1, 2, 3].map((_, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div
              className="w-8 h-8 rounded-full"
              style={{ background: "rgba(0, 0, 0, 0.08)" }}
            ></div>
            <div>
              <div
                className="h-4 w-48 rounded mb-2"
                style={{ background: "rgba(0, 0, 0, 0.08)" }}
              ></div>
              <div
                className="h-3 w-20 rounded"
                style={{ background: "rgba(0, 0, 0, 0.05)" }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div
        className="p-4 border-t"
        style={{
          borderColor: "var(--border-light, #e5e7eb)",
          background: "var(--surface, #ffffff)",
        }}
      >
        <div
          className="h-10 rounded-full"
          style={{ background: "rgba(0, 0, 0, 0.08)" }}
        ></div>
      </div>
    </div>
  );
};

export default ChatShimmer;
