import { useRef } from "react";
import { UserCircle, X, LogOut } from "lucide-react";

const ProfileModal = ({ show, onClose, profile, setProfile, onLogout }) => {
  const fileInputRef = useRef();

  if (!show) return null;

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setProfile((prev) => ({ ...prev, avatar: imageUrl }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-[90%] max-w-sm relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-gray-300"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-white mb-4 text-center">
          Manage Profile
        </h2>

        {/* Avatar section */}
        <div className="flex flex-col items-center mb-4">
          <div
            onClick={() => fileInputRef.current.click()}
            className="relative w-20 h-20 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center cursor-pointer border border-white/30"
          >
            {profile.avatar ? (
              <img
                src={profile.avatar}
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

          <p className="text-gray-300 text-sm mt-2">Click to change avatar</p>
        </div>

        {/* Name field */}
        <input
          type="text"
          value={profile.name}
          onChange={(e) =>
            setProfile((prev) => ({ ...prev, name: e.target.value }))
          }
          className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your name"
        />

        {/* Save button */}
        <button
          onClick={onClose}
          className="mt-4 w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
        >
          Save Changes
        </button>

        {/* Logout button */}
        <button
          onClick={onLogout}
          className="mt-3 w-full flex items-center justify-center gap-2 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
