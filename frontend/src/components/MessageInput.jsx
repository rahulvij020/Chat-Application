import { useState, useRef } from "react";
import { Send, ImagePlus, X } from "lucide-react";
import { sendMessage } from "../services/message";

const MessageInput = ({ selectedUser }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim() && !image) return;

    setLoading(true);
    try {
      const messageData = {
        content: text.trim(),
        image: image || "",
      };
      const response = await sendMessage(messageData, selectedUser._id);
      console.log("Send Message Response --->>>", response);
      setText("");
      setImage(null);
      setImagePreview(null);
    } catch (error) {
      console.log("Error in sending message", error);
    } finally {
      setLoading(false);
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file (jpg, png, gif, webp, etc.)");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      const base64Image = reader.result;
      setImage(base64Image);
      setImagePreview(base64Image);
    };
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center animate-slide-in-up"
      style={{
        background: "var(--surface, #fff)",
        borderColor: "var(--border-light, #e5e7eb)",
        padding: "1rem",
        gap: "0.75rem",
      }}
    >
      {/* Image Upload Button */}
      <button
        type="button"
        onClick={() => fileInputRef.current.click()}
        title="Attach image"
        className="rounded-full hover-lift transition-all"
        style={{
          background: "var(--background, #f5f5f5)",
          color: "var(--text-secondary, #555)",
          padding: "0.75rem",
        }}
      >
        <ImagePlus size={20} />
      </button>

      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
        accept="image/*"
      />

      {/* Image Preview */}
      {imagePreview && (
        <div style={{ position: "relative" }}>
          <img
            src={imagePreview}
            alt="preview"
            className="rounded-lg object-cover border"
            style={{
              borderColor: "var(--border-light, #e5e7eb)",
              borderWidth: "1px",
              borderStyle: "solid",
              width: "2.5rem",
              height: "2.5rem",
            }}
          />
          <button
            type="button"
            onClick={() => {
              setImage(null);
              setImagePreview(null);
            }}
            className="rounded-full"
            style={{
              position: "absolute",
              top: "-0.5rem",
              right: "-0.5rem",
              background: "#ef4444",
              padding: "0.125rem",
            }}
            onMouseEnter={(e) => e.target.style.background = "#dc2626"}
            onMouseLeave={(e) => e.target.style.background = "#ef4444"}
          >
            <X size={14} style={{ color: "white" }} />
          </button>
        </div>
      )}

      {/* Text Input */}
      <input
        type="text"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 rounded-full focus:outline-none transition-all"
        style={{
          background: "var(--background, #f5f5f5)",
          border: "1px solid var(--border-light, #ddd)",
          color: "var(--text-main, #111)",
          padding: "0.625rem 1.25rem",
        }}
      />

      {/* Send Button */}
      <button
        type="submit"
        title="Send"
        disabled = {loading}
        className="rounded-full text-white shadow-md hover-lift transition-all"
        style={{
          background: "var(--primary-color, #00A884)",
          padding: "0.75rem",
        }}
      >
        <Send size={20} />
      </button>
    </form>
  );
};

export default MessageInput;
