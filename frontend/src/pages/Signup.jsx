import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authCheck, signup } from "../services/auth.js";
import LoadingScreen from "../components/LoadingScreen.jsx";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

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

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (form.password !== form.confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      const userData = {
        name: form.name,
        email: form.email,
        password: form.password,
      };

      const response = await signup(userData);
      if (response.success) {
        navigate("/login");
      } else {
        setError(response.message || "Signup failed. Try again.");
      }
    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <LoadingScreen />}
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-500 via-indigo-500 to-purple-600 p-4">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
          <h1 className="text-3xl font-bold text-white text-center mb-6">
            Create Account
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {error && (
              <p className="text-red-300 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 mt-4 bg-linear-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg hover:scale-[1.02] transition-transform duration-200 shadow-lg"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-white mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-300 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
