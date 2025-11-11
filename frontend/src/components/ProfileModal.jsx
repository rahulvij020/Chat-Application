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
    reader.readAsDataURL(file); // 👈 converts image to Base64

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
        avatar: profile.avatar, // Base64 string or existing URL
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

      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-[90%] max-w-sm relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-white hover:text-gray-300"
          >
            <X size={20} />
          </button>

          <h2 className="text-xl font-semibold text-white mb-4 text-center">
            Manage Profile
          </h2>

          <div className="flex flex-col items-center mb-4">
            <div
              onClick={() => fileInputRef.current.click()}
              className="relative w-20 h-20 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center cursor-pointer border border-white/30 overflow-hidden"
            >
              {profile.preview ? (
                <img
                  src={profile.preview}
                  alt="Avatar"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <UserCircle size={48} className="text-white/80" />
              )}
            </div>

            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
            />

            <p className="text-gray-300 text-sm mt-2 cursor-pointer">
              Click to change avatar
            </p>
          </div>

          <input
            type="text"
            value={profile.name}
            onChange={(e) =>
              setProfile((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
          />

          <button
            onClick={handleSave}
            disabled={loading}
            className="mt-4 w-full flex items-center justify-center gap-2 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
          >
            <Save size={18} />
            Save Changes
          </button>

          <button
            onClick={handleLogout}
            disabled={loading}
            className="mt-3 w-full flex items-center justify-center gap-2 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
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
