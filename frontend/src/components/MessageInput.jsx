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
      alert("Please select an image file (jpg, png, gif, webp, etc.)");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 p-3 border-t border-white/20 bg-white/10 backdrop-blur-md"
    >
      {/* Image upload button */}
      <button
        type="button"
        onClick={() => fileInputRef.current.click()}
        className="p-3 bg-white/20 hover:bg-white/30 rounded-full text-white transition"
        title="Attach image"
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

      {/* Image preview */}
      {image && (
        <div className="relative">
          <img
            src={URL.createObjectURL(image)}
            alt="preview"
            className="w-10 h-10 rounded-lg object-cover border border-white/20"
          />
          <button
            type="button"
            onClick={() => setImage(null)}
            className="absolute -top-2 -right-2 bg-red-500 rounded-full p-0.5 hover:bg-red-600"
          >
            <X size={14} className="text-white" />
          </button>
        </div>
      )}

      {/* Text input */}
      <input
        type="text"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 px-4 py-2 rounded-full bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Send button */}
      <button
        type="submit"
        className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white transition"
      >
        <Send size={20} />
      </button>
    </form>
  );
};

export default MessageInput;
