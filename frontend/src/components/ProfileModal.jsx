import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout, updateProfile } from "../services/auth.js";
import { UserCircle, X, LogOut, Save } from "lucide-react";
import LoadingScreen from "./LoadingScreen.jsx";

const ProfileModal = ({ show, onClose, user }) => {
  const navigate = useNavigate();
  const fileInputRef = useRef();
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    avatar: null,
    preview: null,
  });

  useEffect(() => {
    if (user && show) {
      setProfile({
        name: user.name || "",
        avatar: user.avatar || null,
        preview: user.avatar || null,
      });
    }
  }, [user, show]);

  if (!show) return null;

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      const base64Image = reader.result;
      setProfile((prev) => ({ ...prev, avatar: base64Image, preview: base64Image }));
    };
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const payload = {
        name: profile.name,
        avatar: profile.avatar,
      };

      const response = await updateProfile(payload, user._id);
      if (response.success) {
        console.log("Profile updated:", response.updatedUser);
        onClose();
      } else {
        console.error("Failed to update profile:", response.message);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      const response = await logout();
      if (response.success) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <LoadingScreen />}

      <div 
        className="fixed inset-0 flex items-center justify-center z-50"
        style={{ background: "rgba(0, 0, 0, 0.4)" }}
      >
        <div
          className="relative rounded-2xl shadow-xl animate-scale-in"
          style={{
            background: "var(--surface, #fff)",
            border: "1px solid var(--border-light, #e5e7eb)",
            width: "90%",
            maxWidth: "28rem",
            padding: "1.5rem",
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute transition"
            style={{
              top: "0.75rem",
              right: "0.75rem",
              color: "#6b7280",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "0.25rem",
            }}
            onMouseEnter={(e) => e.target.style.color = "#374151"}
            onMouseLeave={(e) => e.target.style.color = "#6b7280"}
          >
            <X size={20} />
          </button>

          {/* Header */}
          <h2
            className="text-xl font-semibold text-center"
            style={{ color: "var(--text-main, #111)", marginBottom: "1rem" }}
          >
            Manage Profile
          </h2>

          {/* Avatar */}
          <div className="flex flex-col items-center" style={{ marginBottom: "1rem" }}>
            <div
              onClick={() => fileInputRef.current.click()}
              className="relative rounded-full flex items-center justify-center cursor-pointer border overflow-hidden hover-lift"
              style={{
                background: profile.preview ? "transparent" : "var(--background, #f9f9f9)",
                borderColor: "var(--border-light, #e5e7eb)",
                borderWidth: "1px",
                borderStyle: "solid",
                width: "6rem",
                height: "6rem",
              }}
            >
              {profile.preview ? (
                <img
                  src={profile.preview}
                  alt="Avatar"
                  className="rounded-full object-cover"
                  style={{ width: "100%", height: "100%" }}
                />
              ) : (
                <UserCircle
                  size={60}
                  style={{ color: "var(--text-secondary, #999)" }}
                />
              )}
            </div>

            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
            />

            <p
              className="text-sm cursor-pointer"
              style={{ color: "var(--text-secondary, #666)", marginTop: "0.5rem" }}
            >
              Click to change avatar
            </p>
          </div>

          {/* Name Input */}
          <input
            type="text"
            value={profile.name}
            onChange={(e) =>
              setProfile((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full input-field"
            placeholder="Enter your name"
            style={{ marginBottom: "1rem" }}
          />

          {/* Save Button */}
          <button
            onClick={handleSave}
            disabled={loading}
            className="btn-primary w-full flex items-center justify-center transition"
            style={{
              background: "var(--primary-color, #00A884)",
              border: "none",
              color: "#fff",
              width: "100%",
              gap: "0.5rem",
              cursor: "pointer",
            }}
          >
            <Save size={18} />
            Save Changes
          </button>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            disabled={loading}
            className="w-full flex items-center justify-center rounded-lg transition"
            style={{
              background: "#ef4444",
              color: "#fff",
              width: "100%",
              gap: "0.5rem",
              padding: "0.5rem",
              marginTop: "0.75rem",
              border: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => e.target.style.background = "#dc2626"}
            onMouseLeave={(e) => e.target.style.background = "#ef4444"}
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
