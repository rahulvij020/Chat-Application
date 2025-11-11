import { useState, useRef } from "react";
import { Send, ImagePlus, X } from "lucide-react";

const MessageInput = ({ onSend }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() && !image) return;

    const messageData = {
      text: text.trim(),
      image: image ? { name: image.name, type: image.type, data: image } : null,
    };

    onSend(messageData);
    setText("");
    setImage(null);
  };

  const handleFileChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage && selectedImage.type.startsWith("image/")) {
      setImage(selectedImage);
    } else {
      alert("Please select a valid image file (jpg, png, gif, webp, etc.)");
    }
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
      {image && (
        <div style={{ position: "relative" }}>
          <img
            src={URL.createObjectURL(image)}
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
            onClick={() => setImage(null)}
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
