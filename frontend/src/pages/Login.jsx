import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", form);
  };

  return (
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
            className="w-full py-2 mt-4 bg-linear-to-r from-purple-400 to-blue-500 text-white font-semibold rounded-lg hover:scale-[1.02] transition-transform duration-200 shadow-lg"
          >
            Log In
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
  );
};

export default Login;
