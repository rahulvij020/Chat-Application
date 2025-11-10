import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center px-6">
            <h1 className="text-9xl font-extrabold text-gray-800 mb-4">404</h1>
            <h2 className="text-3xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
            <p className="text-gray-500 mb-8 max-w-md">
                Oops! The page you’re looking for doesn’t exist or has been moved.
            </p>

            <button
                onClick={() => navigate("/login")}
                className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow hover:bg-blue-700 transition-all duration-200"
            >
                Go to Login
            </button>
        </div>
    );
};

export default NotFound;
