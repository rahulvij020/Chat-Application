import ChatListShimmer from "./ChatListShimmer";
import { useEffect, useRef } from "react";

const ChatContainer = ({ messages, loading, currentUserId }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  console.log("Messages in chat container --->>>", messages);

  if (loading) {
    return <ChatListShimmer />;
  }

  return (
    <div
      className="flex-1 overflow-y-auto custom-scrollbar"
      style={{
        background: "linear-gradient(to bottom, #e5ddd5 0%, #eae6df 100%)",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d9d9d9' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        padding: "16px 0",
        scrollBehavior: "smooth",
        minHeight: 0,
        height: "100%",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {messages?.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <div className="text-center" style={{ color: "#667781" }}>
            <div className="text-5xl mb-4">💬</div>
            <p className="text-sm">No messages yet. Start the conversation!</p>
          </div>
        </div>
      ) : (
        <>
          {messages?.map((msg, i) => {
            const isOwnMessage = msg.sender === currentUserId;
            const showDate = i === 0 || 
              new Date(messages[i - 1].createdAt).toDateString() !== 
              new Date(msg.createdAt).toDateString();
            
            // Check if previous message is from same sender for tighter spacing
            const prevMsg = i > 0 ? messages[i - 1] : null;
            const isConsecutive = prevMsg && prevMsg.sender === msg.sender;
            const marginBottom = isConsecutive ? "4px" : "8px";

            return (
              <div key={msg._id || i}>
                {/* Date Separator */}
                {showDate && (
                  <div className="flex justify-center" style={{ margin: "12px 0 8px 0", padding: "0 16px" }}>
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.9)",
                        color: "#667781",
                        padding: "6px 12px",
                        borderRadius: "8px",
                        fontSize: "12px",
                        fontWeight: "500",
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {new Date(msg.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                )}

                {/* Message Bubble */}
                <div
                  className="flex"
                  style={{
                    justifyContent: isOwnMessage ? "flex-end" : "flex-start",
                    marginBottom: marginBottom,
                    paddingLeft: isOwnMessage ? "64px" : "12px",
                    paddingRight: isOwnMessage ? "12px" : "64px",
                  }}
                >
                  <div
                    className="rounded-lg shadow-md"
                    style={{
                      background: isOwnMessage ? "#d9fdd3" : "#ffffff",
                      borderRadius: isOwnMessage
                        ? "8px 8px 2px 8px"
                        : "8px 8px 8px 2px",
                      maxWidth: "65%",
                      minWidth: "100px",
                    }}
                  >
                    {/* Image */}
                    {msg.image && (
                      <div className="relative" style={{ overflow: "hidden" }}>
                        <img
                          src={msg.image}
                          alt="attachment"
                          className="w-full object-cover cursor-pointer"
                          style={{
                            maxHeight: "300px",
                            maxWidth: "100%",
                            height: "auto",
                            display: "block",
                            borderTopLeftRadius: "8px",
                            borderTopRightRadius: "8px",
                          }}
                          onClick={() => window.open(msg.image, "_blank")}
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div style={{ padding: "8px 12px" }}>
                      {msg.content && (
                        <div
                          style={{
                            fontSize: "14px",
                            lineHeight: "1.5",
                            color: "#111b21",
                            wordBreak: "break-word",
                            marginBottom: "2px",
                          }}
                        >
                          {msg.content}
                        </div>
                      )}
                      
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                          gap: "4px",
                          marginTop: "2px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "11px",
                            color: "#667781",
                          }}
                        >
                          {new Date(msg.createdAt).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                        {isOwnMessage && (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            style={{ color: msg.read ? "#53bdeb" : "#667781" }}
                          >
                            <path
                              d="M11.071 5.429L6.5 10l-2.071-2.071-.708.707L6.5 11.414l5.279-5.278-.708-.707z"
                              fill="currentColor"
                            />
                            <path
                              d="M13.071 5.429L8.5 10l-.707-.707 4.571-4.571.707.707z"
                              fill="currentColor"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} style={{ height: "1px", paddingBottom: "8px" }} />
        </>
      )}
    </div>
  );
};

export default ChatContainer;
