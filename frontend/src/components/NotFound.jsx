import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-center px-6 animate-fade-in"
      style={{
        background: "var(--background, #f9f9f9)",
        color: "var(--text-main, #111)",
      }}
    >
      {/* 404 Title */}
      <h1
        className="text-[8rem] font-extrabold mb-2"
        style={{
          background: "var(--primary-gradient, linear-gradient(135deg, #00A884, #12c2e9))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        404
      </h1>

      {/* Subtitle */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-700">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-500 mb-8 max-w-md leading-relaxed">
        Oops! The page you’re looking for doesn’t exist, was moved, or never existed.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/login")}
        className="btn-primary hover-lift text-lg px-8 py-3 rounded-xl shadow-md"
        style={{
          background: "var(--primary-color, #00A884)",
          color: "#fff",
        }}
      >
        Go to Login
      </button>
    </div>
  );
};

export default NotFound;
