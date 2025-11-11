const LoadingScreen = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen animate-fade-in"
      style={{
        background: "var(--background, #f9f9f9)",
      }}
    >
      {/* Gradient Spinner */}
      <div
        className="w-16 h-16 rounded-full border-4 border-t-transparent animate-spin"
        style={{
          borderColor: "rgba(0, 168, 132, 0.3)",
          borderTopColor: "var(--primary-color, #00A884)",
        }}
      ></div>

      {/* Optional Text */}
      <p
        className="mt-4 text-base font-medium"
        style={{
          color: "var(--text-secondary, #666)",
        }}
      >
        Loading...
      </p>
    </div>
  );
};

export default LoadingScreen;
