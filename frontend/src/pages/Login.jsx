import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login, authCheck } from "../services/auth.js";
import LoadingScreen from "../components/LoadingScreen.jsx";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await authCheck();
        if (response.success) {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
      finally {
        setLoading(false);
      }
    }
    checkUser();
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await login(form);
      if (response.success) {
        navigate("/");
      } else {
        // Handle login failure (e.g., show error message)
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <LoadingScreen />}

      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-500 via-indigo-500 to-blue-500 p-4">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
          <h1 className="text-3xl font-bold text-white text-center mb-6">
            Welcome Back
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 mt-4 bg-linear-to-r from-purple-400 to-blue-500 text-white font-semibold rounded-lg transition-transform duration-200 shadow-lg ${loading ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02]"
                }`}
            >
              {loading ? "Logging In..." : "Log In"}
            </button>
          </form>

          <p className="text-center text-white mt-6">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-300 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
